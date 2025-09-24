// ===========================
// Footer year
// ===========================
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===========================
// Mobile nav toggle
// ===========================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });
}

// ===========================
// Navbar resize + scroll progress bar
// ===========================
const navbar = document.querySelector('.navbar');
const progressBar = document.querySelector('.scroll-indicator .bar');
const shrinkThreshold = 24;

window.addEventListener('scroll', () => {
  if (!navbar) return;
  const y = window.scrollY || window.pageYOffset;

  navbar.classList.toggle('shrink', y > shrinkThreshold);

  if (progressBar) {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (y / scrollable) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  }
});

// ===========================
// Section nav highlight
// ===========================
const sections = [...document.querySelectorAll('section[id]')];
const navAnchors = new Map(
  [...document.querySelectorAll('a[data-nav]')].map(a => [a.getAttribute('href').slice(1), a])
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = navAnchors.get(id);
    if (!link) return;

    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'true');
    }
  });
}, { rootMargin: `-70px 0px -70% 0px`, threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

window.addEventListener('scroll', () => {
  const atBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
  if (atBottom) {
    navAnchors.forEach(a => a.removeAttribute('aria-current'));
    const last = document.querySelector('a[href="#contact"][data-nav]');
    if (last) last.setAttribute('aria-current', 'true');
  }
});

// ===========================
// Carousel
// ===========================
(function () {
  const root = document.querySelector('[data-carousel]');
  if (!root) return;
  const track = root.querySelector('[data-carousel-track]');
  const slides = [...root.querySelectorAll('.slide')];
  const prev = root.querySelector('[data-carousel-prev]');
  const next = root.querySelector('[data-carousel-next]');
  let index = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  prev?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  next?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    update();
  });

  let startX = 0;
  let dx = 0;
  track.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    dx = 0;
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove', (e) => {
    if (startX) dx = e.clientX - startX;
  });
  track.addEventListener('pointerup', () => {
    if (Math.abs(dx) > 60) {
      index = dx < 0 ? (index + 1) % slides.length : (index - 1 + slides.length) % slides.length;
    }
    update();
    startX = 0;
    dx = 0;
  });
})();

// ===========================
// Modals
// ===========================
function openModal(sel) {
  const m = document.querySelector(sel);
  if (!m) return;
  m.setAttribute('aria-hidden', 'false');
  const dialog = m.querySelector('.modal-dialog');
  dialog?.setAttribute('tabindex', '-1');
  dialog?.focus();
}

function closeModal(modal) {
  modal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-open-modal]').forEach(btn => {
  btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-modal')));
});

document.querySelectorAll('[data-close-modal]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.closest('.modal')));
});

document.querySelectorAll('.modal').forEach(m => {
  m.addEventListener('click', (e) => {
    if (e.target === m) closeModal(m);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && m.getAttribute('aria-hidden') === 'false') closeModal(m);
  });
});

// ===========================
// Smooth hash navigation + close mobile menu
// ===========================
for (const a of document.querySelectorAll('a[href^="#"]')) {
  a.addEventListener('click', () => {
    const id = a.getAttribute('href').substring(1);
    const target = document.getElementById(id);

    navLinks?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');

    if (target) {
      setTimeout(() => target.focus({ preventScroll: true }), 350);
    }
  });
}
