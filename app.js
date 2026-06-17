/* ── Accordion ────────────────────────────────────────────────────────────── */
function toggleAcc(id) {
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  el.classList.toggle('open', !isOpen);
  const header = el.querySelector('.accordion-header');
  if (header) header.setAttribute('aria-expanded', String(!isOpen));
}

/* ── Keyboard support for accordion headers ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion-header').forEach(function (header) {
    header.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  /* ── Smooth-scroll nav links with offset for sticky header ─────────────── */
  document.querySelectorAll('.hero-nav a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      const headerH = document.querySelector('.hero').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  /* ── Highlight active nav link on scroll ──────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.hero-nav a');
  const headerH = document.querySelector('.hero').offsetHeight;

  function onScroll() {
    let current = '';
    sections.forEach(function (sec) {
      const top = sec.getBoundingClientRect().top - headerH - 32;
      if (top <= 0) current = sec.getAttribute('id');
    });
    navLinks.forEach(function (link) {
      link.style.color = '';
      link.style.background = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.color = 'var(--purple)';
        link.style.background = 'var(--purple-light)';
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
