(function () {
  'use strict';

  var config = window.kiConfig || {};
  var context = window.kiAnalyticsContext || {};
  var analyticsApiBase = config.analyticsApiBase || config.subscriptionApiBase;
  var endpoint = String(analyticsApiBase || '').replace(/\/$/, '') + '/api/analytics/events';
  if (!analyticsApiBase) return;

  function allowed() {
    try {
      return !window.Shopify || !Shopify.customerPrivacy ||
        typeof Shopify.customerPrivacy.analyticsProcessingAllowed !== 'function' ||
        Shopify.customerPrivacy.analyticsProcessingAllowed();
    } catch (error) { return true; }
  }

  function sessionId() {
    var key = 'ki_analytics_session';
    try {
      var current = sessionStorage.getItem(key);
      if (current) return current;
      current = 'web-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
      sessionStorage.setItem(key, current);
      return current;
    } catch (error) {
      return 'web-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 12);
    }
  }

  function referrerHost() {
    try { return document.referrer ? new URL(document.referrer).hostname : ''; }
    catch (error) { return ''; }
  }

  function track(eventName, details) {
    if (!allowed()) return Promise.resolve();
    var payload = Object.assign({
      eventName: eventName,
      sessionId: sessionId(),
      pagePath: location.pathname,
      pageType: context.pageType || '',
      referrerHost: referrerHost(),
      currency: config.currency || 'TRY'
    }, details || {});
    return fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'omit',
      keepalive: true
    }).catch(function () {});
  }

  /*
   * Shopify Customer Events köprüsü. Özel abonelik akışı Shopify sepeti ve
   * checkout'u dışında çalıştığı için standart commerce event'leri otomatik
   * oluşmaz. Bu yardımcı yalnızca carewithki:* isimli özel event'leri Shopify
   * pixel veri katmanına yayınlar; Meta eşlemesi Shopify Customer Events'teki
   * ayrı custom pixel tarafından yapılır.
   */
  function publishCustomerEvent(eventName, data, attempt) {
    if (!allowed()) return;
    var tries = Number(attempt || 0);
    try {
      if (window.Shopify && Shopify.analytics && typeof Shopify.analytics.publish === 'function') {
        var result = Shopify.analytics.publish(eventName, data || {});
        if (result && typeof result.catch === 'function') result.catch(function () {});
        return;
      }
    } catch (error) { return; }
    if (tries < 30) {
      setTimeout(function () { publishCustomerEvent(eventName, data, tries + 1); }, 250);
    }
  }

  window.kiAnalytics = { track: track, getSessionId: sessionId, publishCustomerEvent: publishCustomerEvent };

  track('PAGE_VIEW');
  if (context.pageType === 'product') {
    track('PRODUCT_VIEW', {
      productId: context.productId,
      variantId: context.variantId,
      productTitle: context.productTitle,
      value: context.productPrice
    });
  } else if (context.pageType === 'collection') {
    track('COLLECTION_VIEW');
  } else if (context.pageType === 'cart') {
    track('CART_VIEW');
  }
  if (/paket|abone|subscription/i.test(location.pathname)) track('SUBSCRIBE_PAGE_VIEW');

  document.addEventListener('click', function (event) {
    var target = event.target.closest('a,button');
    if (!target) return;
    var href = target.getAttribute('href') || '';
    var text = (target.textContent || '').trim();
    if (target.hasAttribute('data-ki-abo-cta') || /abone ol|aboneliğe başla/i.test(text) || /paketini-olustur|paket-olustur/i.test(href)) {
      track('SUBSCRIBE_CTA_CLICK', { metadata: { href: href.slice(0, 300) } });
    }
    if (target.name === 'checkout' || target.id === 'checkout' || target.id === 'CartDrawer-Checkout' || /ödemeye geç|checkout/i.test(text)) {
      track('CART_CHECKOUT_STARTED', { metadata: { source: context.pageType || 'unknown' } });
    }
  }, true);

  var originalFetch = window.fetch;
  window.fetch = function () {
    var args = arguments;
    var url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url) || '';
    return originalFetch.apply(this, args).then(function (response) {
      if (response.ok && /\/cart\/add(?:\.js)?(?:\?|$)/.test(url)) {
        track('ADD_TO_CART', {
          productId: context.productId,
          variantId: context.variantId,
          productTitle: context.productTitle,
          value: context.productPrice
        });
      }
      return response;
    });
  };
})();
