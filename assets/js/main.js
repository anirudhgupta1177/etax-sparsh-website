/* eTax Profilling — interactions */
(function () {
  'use strict';

  /* ---- Progressive enhancement flag (reveals stay visible without JS) ---- */
  document.documentElement.classList.add('js');

  /* ---- Mobile nav toggle ---- */
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav__toggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var open = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // close drawer on link click
    nav.querySelectorAll('.nav__drawer a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Sticky nav shadow ---- */
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Animated counters ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = (el.getAttribute('data-decimals') || '0') | 0;
    var dur = 1600, start = 0, t0 = null;
    function tick(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = start + (target - start) * eased;
      el.textContent = val.toFixed(decimals);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals);
    }
    requestAnimationFrame(tick);
  }
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // close siblings within same .faq group
      var group = item.closest('.faq');
      if (group) {
        group.querySelectorAll('.faq-item.open').forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-a').style.maxHeight = null;
            other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          }
        });
      }
      item.classList.toggle('open', !isOpen);
      q.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      a.style.maxHeight = !isOpen ? a.scrollHeight + 'px' : null;
    });
  });

  /* ---- Pricing toggle (monthly = one-time, annual = with add-ons demo) ---- */
  var toggleBtns = document.querySelectorAll('.pricing-toggle button');
  if (toggleBtns.length) {
    toggleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        toggleBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        var mode = btn.getAttribute('data-mode');
        document.querySelectorAll('.price-card__price').forEach(function (p) {
          var val = p.getAttribute('data-' + mode);
          if (val) {
            var period = p.parentElement.querySelector('.price-card__period');
            p.querySelector('.amt').textContent = val;
          }
        });
        document.querySelectorAll('.price-card__period').forEach(function (per) {
          var label = per.getAttribute('data-' + mode);
          if (label) per.textContent = label;
        });
      });
    });
  }

  /* ---- Contact form (FormSubmit AJAX) ---- */
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var status = form.querySelector('.form-status');
      var btn = form.querySelector('button[type="submit"]');
      var original = btn ? btn.textContent : '';
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      var data = new FormData(form);
      fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) { return r.json().catch(function () { return {}; }); })
        .then(function () {
          if (status) {
            status.textContent = '✓ Thank you! Your request has been received. Our tax expert will reach out within 24 hours.';
            status.classList.add('ok');
          }
          form.reset();
        })
        .catch(function () {
          if (status) {
            status.textContent = '✓ Thanks! Please also reach us at cesgupta100@gmail.com if you don’t hear back shortly.';
            status.classList.add('ok');
          }
        })
        .finally(function () { if (btn) { btn.textContent = original; btn.disabled = false; } });
    });
  }

  /* ---- Footer year ---- */
  var y = document.querySelector('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
