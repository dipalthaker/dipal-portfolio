console.log("main.js loaded ✅");

/* ===== Footer Year ===== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

/* ===== Burger menu ===== */
/* ===== Burger menu (mobile) ===== */
const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav-menu");

if (burger && menu) {
  const closeMenu = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("data-open", "false");
    burger.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.classList.add("is-open");
    menu.setAttribute("data-open", "true");
    burger.setAttribute("aria-expanded", "true");
  };

  burger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = menu.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  // close when clicking a link inside
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });

  // close when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) closeMenu();
  });

  // close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}


/* ===== Smooth scroll with sticky header offset ===== */
const navHeight = () => {
  const header = document.querySelector(".site-header");
  return header ? header.getBoundingClientRect().height : 0;
};

function scrollToSelector(sel) {
  const el = document.querySelector(sel);
  if (!el) return;
  const top = window.scrollY + el.getBoundingClientRect().top - navHeight() - 14;
  window.scrollTo({ top, behavior: "smooth" });
}

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    scrollToSelector(href);
  });
});

document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const sel = btn.getAttribute("data-scroll");
    if (sel) scrollToSelector(sel);
  });
});

/* ===== Reveal on scroll ===== */
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => io.observe(el));
}

/* ===== Custom Cursor (desktop only) ===== */
const isFinePointer = window.matchMedia("(pointer:fine)").matches;
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if (isFinePointer && dot && ring) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let ringX = mouseX;
  let ringY = mouseY;

  let ringScale = 1;
  let ringScaleTarget = 1;

  const lerp = (a, b, t) => a + (b - a) * t;
  const setPos = (el, x, y, s = 1) => {
    el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${s})`;
  };

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    setPos(dot, mouseX, mouseY, 1);
  });

  window.addEventListener("mousedown", () => (ringScaleTarget = 1.45));
  window.addEventListener("mouseup", () => (ringScaleTarget = 1));

  const hoverables = document.querySelectorAll("a, button, .hoverable, input, textarea, select");
  hoverables.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      ringScaleTarget = 1.9;
      ring.style.borderColor = "rgba(86,104,255,.35)";
      ring.style.background = "rgba(86,104,255,.10)";
    });
    el.addEventListener("mouseleave", () => {
      ringScaleTarget = 1;
      ring.style.borderColor = "rgba(17,17,17,.22)";
      ring.style.background = "rgba(255,255,255,.08)";
    });
  });

  const animate = () => {
    ringX = lerp(ringX, mouseX, 0.14);
    ringY = lerp(ringY, mouseY, 0.14);
    ringScale = lerp(ringScale, ringScaleTarget, 0.12);
    setPos(ring, ringX, ringY, ringScale);
    requestAnimationFrame(animate);
  };
  animate();
}

/* ===== Active section highlight in nav ===== */
const navLinks = Array.from(document.querySelectorAll(".navLink[href^='#']"));

function setActiveById(id) {
  navLinks.forEach((a) => {
    const target = a.getAttribute("href")?.slice(1);
    a.classList.toggle("is-active", target === id);
  });
}

navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    const id = a.getAttribute("href")?.slice(1);
    if (id) setActiveById(id);
  });
});

const header = document.querySelector(".site-header");
const headerH = header ? header.getBoundingClientRect().height : 0;

const sectionEls = navLinks
  .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
  .filter(Boolean);

if (sectionEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) setActiveById(visible.target.id);
    },
    {
      root: null,
      rootMargin: `-${Math.round(headerH + 20)}px 0px -60% 0px`,
      threshold: [0.12, 0.25, 0.4, 0.6],
    }
  );

  sectionEls.forEach((sec) => observer.observe(sec));

  const current = sectionEls.find((sec) => {
    const r = sec.getBoundingClientRect();
    return r.top <= headerH + 40 && r.bottom >= headerH + 40;
  });
  if (current?.id) setActiveById(current.id);
}

/* ===== CARD FLIP FUNCTIONALITY (outside click to close) ===== */
(() => {
  let openCard = null;

  const findCard = (id) =>
    document.querySelector(`.project-card[data-card-id="${id}"]`) ||
    document.querySelector(`.exp-item[data-card-id="${id}"]`);

  // Flip on Details click
  document.addEventListener(
    "click",
    (e) => {
      const btn = e.target.closest(".btn-details[data-flip]");
      if (!btn) return;

      e.preventDefault();
      e.stopImmediatePropagation(); // VERY important

      const id = btn.dataset.flip;
      const card = findCard(id);

      console.log("Flip click:", id, "card found:", !!card);
      if (!card) return;

      // Close previously open card
      if (openCard && openCard !== card) {
        openCard.classList.remove("flipped");
      }

      // Toggle current
      card.classList.toggle("flipped");
      openCard = card.classList.contains("flipped") ? card : null;
    },
    true
  );

  // Click outside → close
  document.addEventListener("click", (e) => {
    if (!openCard) return;

    // If click is inside the open card, ignore
    if (openCard.contains(e.target)) return;

    openCard.classList.remove("flipped");
    openCard = null;
  });

  // ESC key → close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && openCard) {
      openCard.classList.remove("flipped");
      openCard = null;
    }
  });
})();



// ===== Contact Form (Formspree) AJAX submit =====
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "SENDING...";
    }

    try {
      const res = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        alert("Sent ✅");
        contactForm.reset();
      } else {
        const data = await res.json().catch(() => null);
        console.log("Formspree error:", data);
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "SUBMIT";
      }
    }
  });
}
