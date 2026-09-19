(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu after tapping a link (mobile)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---------- Continuous scroll-linked zoom ----------
  // Every frame, each animated element's progress is recomputed straight
  // from its live position in the viewport and written as inline styles.
  // That's what makes this track the scrollbar directly (zoom in as you
  // scroll down, zoom back out if you scroll back up) instead of firing
  // once like a classic "reveal on scroll" effect.
  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var heroPin = document.querySelector(".hero-pin");
  var heroSection = document.querySelector(".hero");
  var heroBg = document.querySelector(".hero-bg");
  var heroText = document.querySelector(".hero-text");
  var heroPhotoWrap = document.querySelector(".hero-photo");
  var heroPhotoImg = document.querySelector(".hero-photo img");
  var siteHeader = document.querySelector(".site-header");
  var revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  if (!prefersReducedMotion && "requestAnimationFrame" in window && (heroPin || revealEls.length)) {
    var ticking = false;

    var update = function () {
      ticking = false;
      var vh = window.innerHeight;

      // Hero: a pinned scroll track (see .hero-pin in css/styles.css).
      // At the very top, only the landscape is visible; as the pinned
      // section is scrolled through, the name/photo rise in and the
      // landscape keeps growing toward a full, larger view — all tied
      // directly to scroll position rather than time, so the pace
      // matches however fast or slow the person scrolls.
      if (heroPin && heroSection) {
        var headerH = siteHeader ? siteHeader.offsetHeight : 0;
        var pinRect = heroPin.getBoundingClientRect();
        var scrollable = pinRect.height - heroSection.offsetHeight;
        var heroProgress = scrollable > 4
          ? clamp((headerH - pinRect.top) / scrollable, 0, 1)
          : 1; // no real pin range (e.g. mobile fallback) — show fully revealed

        // Landscape grows for the full length of the pin, reaching its
        // largest right as the hero lets go of the scroll.
        if (heroBg) {
          heroBg.style.transform = "scale(" + (1 + heroProgress * 0.6) + ")";
        }

        // Name + photo rise in over the first ~55% of the pin, then hold.
        var revealProgress = clamp(heroProgress / 0.55, 0, 1);
        var eased = revealProgress * revealProgress * (3 - 2 * revealProgress); // smoothstep
        if (heroText) {
          heroText.style.opacity = String(eased);
          heroText.style.transform = "translateY(" + (26 * (1 - eased)) + "px) scale(" + (0.94 + eased * 0.06) + ")";
        }
        if (heroPhotoWrap) {
          heroPhotoWrap.style.opacity = String(eased);
          heroPhotoWrap.style.transform = "translateY(" + (26 * (1 - eased)) + "px) scale(" + (0.94 + eased * 0.06) + ")";
        }
        if (heroPhotoImg) {
          heroPhotoImg.style.transform = "scale(" + (1 + heroProgress * 0.12) + ")";
        }
      }

      // Every other section: zooms in from a small, soft state up to
      // full size as it's scrolled into view.
      revealEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var start = vh * 0.92; // rect.top when the section starts animating in
        var end = vh * 0.4;    // rect.top when it reaches full size
        var progress = clamp((start - rect.top) / (start - end), 0, 1);
        el.style.opacity = String(progress);
        el.style.transform = "scale(" + (0.86 + progress * 0.14) + ")";
      });
    };

    var onScroll = function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  } else {
    // Reduced motion, or no rAF support: show everything at rest, no motion.
    if (heroText) { heroText.style.opacity = "1"; heroText.style.transform = "none"; }
    if (heroPhotoWrap) { heroPhotoWrap.style.opacity = "1"; heroPhotoWrap.style.transform = "none"; }
    revealEls.forEach(function (el) {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  }

  // Highlight the current section in the nav while scrolling
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".primary-nav a[href^='#']");

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              link.classList.toggle("active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-50% 0px -45% 0px" }
    );
    sections.forEach(function (section) { observer.observe(section); });
  }
})();
