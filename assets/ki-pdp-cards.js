/* Kart secme + buton yonlendirme — ki PDP */
(function(){
  var sid = '{{ section.id }}';
  var defaultLabel = {{ section.settings.cta_label | default: 'Sepete Ekle' | json }};

  /* Kart verilerini HTML data attribute'larindan oku — Liquid JSON sorununu bypass eder */
  function getCards() {
    var opts = document.querySelectorAll('#KPdp5Opts-' + sid + ' .kpdp5-opt');
    var result = [];
    opts.forEach(function(el) {
      result.push({
        el:    el,
        url:   el.getAttribute('data-url') || '',
        vid:   el.getAttribute('data-vid') || '',
        label: el.getAttribute('data-label') || defaultLabel
      });
    });
    return result;
  }

  function pick(el) {
    var container = document.getElementById('KPdp5Opts-' + sid);
    if (!container) return;

    /* Secimi guncelle */
    container.querySelectorAll('.kpdp5-opt').forEach(function(o) {
      o.classList.remove('is-sel');
    });
    el.classList.add('is-sel');

    var url   = (el.getAttribute('data-url') || '').trim();
    var vid   = (el.getAttribute('data-vid') || '').trim();
    var label = (el.getAttribute('data-label') || defaultLabel).trim();

    var btn = document.getElementById('KPdp5Btn-' + sid);
    var txt = document.getElementById('KPdp5BtnTxt-' + sid);
    var inp = document.getElementById('KPdp5Vid-' + sid);

    if (txt) txt.textContent = label;

    if (url !== '' && url !== 'nil' && url !== 'null') {
      /* Baska urune git */
      if (btn) {
        btn.type = 'button';
        btn._kiUrl = url;
        btn.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = btn._kiUrl;
          return false;
        };
      }
    } else {
      /* Ayni urunu sepete ekle */
      if (btn) {
        btn._kiUrl = '';
        btn.onclick = null;
        btn.type = 'submit';
      }
      if (inp && vid !== '' && vid !== 'nil' && vid !== 'null') {
        inp.value = vid;
      }
    }
  }

  /* Global pick fonksiyonu */
  window['kpdp5Pick' + sid] = pick;

  /* DOM hazir olunca ilk karti init et */
  function init() {
    var first = document.querySelector('#KPdp5Opts-' + sid + ' .kpdp5-opt');
    if (first) pick(first);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Shopify editor reload */
  document.addEventListener('shopify:section:load', function(e) {
    if (e.detail && e.detail.sectionId === sid) init();
  });
})();
