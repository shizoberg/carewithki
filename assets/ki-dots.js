/* ki-dots.js — carousel pill indicators */
(function() {
  function initDots() {
    /* Tum GalleryViewer'lari bul */
    document.querySelectorAll('[id^="GalleryViewer-"]').forEach(function(viewer) {
      var sid = viewer.id.replace('GalleryViewer-', '');
      var slider = viewer.querySelector('#Slider-Gallery-' + sid);
      if (!slider) return;

      var slides = slider.querySelectorAll('.slider__slide');
      if (slides.length < 2) return;

      /* Mevcut dot container'i varsa kaldir */
      var existing = viewer.querySelector('.ki-dots');
      if (existing) existing.remove();

      /* Dot container olustur */
      var dots = document.createElement('div');
      dots.className = 'ki-dots';

      slides.forEach(function(slide, i) {
        var dot = document.createElement('span');
        dot.className = 'ki-dot' + (slide.classList.contains('is-active') ? ' is-active' : '');
        dots.appendChild(dot);
      });

      viewer.style.position = 'relative';
      viewer.appendChild(dots);

      /* Aktif slide degisince dot'lari guncelle */
      function updateDots() {
        var dotEls = dots.querySelectorAll('.ki-dot');
        slides.forEach(function(slide, i) {
          dotEls[i].classList.toggle('is-active', slide.classList.contains('is-active'));
        });
      }

      /* MutationObserver ile is-active class degisimini izle */
      var obs = new MutationObserver(updateDots);
      slides.forEach(function(slide) {
        obs.observe(slide, { attributes: true, attributeFilter: ['class'] });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDots);
  } else {
    initDots();
  }

  /* Shopify editor reload + varyant degisimi */
  document.addEventListener('shopify:section:load', initDots);
  document.addEventListener('variant:changed', function() {
    setTimeout(initDots, 300);
  });
})();
