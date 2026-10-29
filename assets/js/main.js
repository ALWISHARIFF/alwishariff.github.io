/* Portfolio interactions
   - current year in footer
   - reveal-on-scroll (progressive; content is visible without JS)
   - active nav highlight
*/

(function () {
  'use strict';

  // footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var supportsIO = 'IntersectionObserver' in window;

  // Only hide elements if we can reveal them again.
  if (!reduceMotion && supportsIO) {
    var targets = document.querySelectorAll(
      '.project, .card, .stack-group, .timeline li, .section-head, .contact-link'
    );

    targets.forEach(function (el) { el.classList.add('reveal'); });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          // stagger siblings slightly for a calmer cascade
          var delay = Number(el.dataset.revealDelay || 0);
          window.setTimeout(function () { el.classList.add('is-visible'); }, delay);
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    targets.forEach(function (el, i) {
      if (i % 6) el.dataset.revealDelay = String((i % 6) * 55);
      io.observe(el);
    });

    // Failsafe: never leave content invisible. If the observer hasn't fired for an
    // element within 2.5s (blocked IO, layout shim, screenshot tooling, odd browser),
    // reveal it anyway. Decoration must never cost the visitor the content.
    window.setTimeout(function () {
      targets.forEach(function (el) { el.classList.add('is-visible'); });
    }, 2500);
  }

  // active section in nav
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var sections = navLinks
    .map(function (a) {
      var id = a.getAttribute('href').slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (supportsIO && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (a) {
            var on = a.getAttribute('href') === '#' + entry.target.id;
            if (on) a.setAttribute('aria-current', 'true');
            else a.removeAttribute('aria-current');
          });
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(function (s) { spy.observe(s); });
  }
})();
