/* ============================================================
   UAV Seminar Proposal — Main JS
   ============================================================ */

(() => {
  'use strict';

  // ── Progress Bar ──────────────────────────────────────────
  const progressBar = document.createElement('div');
  progressBar.id = 'progress-bar';
  document.body.appendChild(progressBar);

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // ── Sticky Nav ────────────────────────────────────────────
  const topnav = document.getElementById('topnav');

  function onScroll() {
    topnav.classList.toggle('scrolled', window.scrollY > 10);
    updateProgress();
    highlightNav();
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Hamburger ─────────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ── Active Nav Highlight ──────────────────────────────────
  const sections = Array.from(document.querySelectorAll('main [id]'));
  const navItems = Array.from(navLinks.querySelectorAll('a'));

  function highlightNav() {
    const scrollMid = window.scrollY + window.innerHeight / 3;
    let current = '';
    sections.forEach(section => {
      if (section.offsetTop <= scrollMid) current = section.id;
    });
    navItems.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  // ── Intersection Observer — Fade-in ───────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  // Add fade-in base style and observe cards
  const style = document.createElement('style');
  style.textContent = `
    .dataset-card, .model-card, .solution-card, .challenge-pill,
    .stat-card, .cp-item, .ref-list li {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .dataset-card.visible, .model-card.visible, .solution-card.visible,
    .challenge-pill.visible, .stat-card.visible, .cp-item.visible,
    .ref-list li.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const animatedEls = document.querySelectorAll(
    '.dataset-card, .model-card, .solution-card, .challenge-pill, ' +
    '.stat-card, .cp-item, .ref-list li'
  );

  // Stagger sibling elements
  animatedEls.forEach((el, i) => {
    const siblings = el.parentElement.children;
    const idx = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = `${idx * 60}ms`;
    observer.observe(el);
  });

  // ── Smooth cite scrolling with offset ────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ── Cite hover highlight ──────────────────────────────────
  document.querySelectorAll('.cite').forEach(cite => {
    const refId = cite.getAttribute('href');
    if (!refId) return;
    const target = document.querySelector(refId);
    if (!target) return;

    cite.addEventListener('mouseenter', () => {
      target.style.transition = 'background 0.2s';
      target.style.background = 'rgba(59,130,246,0.1)';
      target.style.borderRadius = '4px';
    });

    cite.addEventListener('mouseleave', () => {
      target.style.background = '';
    });
  });

  // Initial call
  onScroll();
})();
