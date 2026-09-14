(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const C = window.SAHAN;

  const menuBtn = document.querySelector("[data-menu]");
  const mobileNav = document.getElementById("mobile-nav");
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;

  const applyTheme = (theme, persist = false) => {
    root.setAttribute("data-theme", theme);
    if (persist) {
      try {
        localStorage.setItem("sahan-theme", theme);
      } catch (e) {
        /* private mode */
      }
    }
    themeToggle?.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#071530" : "#ffffff");
  };

  applyTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");
  themeToggle?.addEventListener("click", () => {
    applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light", true);
  });
  menuBtn?.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const sections = [...document.querySelectorAll("section[id]")];
  const onScrollSpy = () => {
    const y = window.scrollY + 120;
    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.offsetTop <= y) current = section.id;
    }
    navLinks.forEach((link) => {
      const id = link.getAttribute("href")?.slice(1);
      if (id && id === current) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", onScrollSpy, { passive: true });
  onScrollSpy();

  if (!reduce) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  const processEl = document.querySelector("[data-process]");
  if (processEl) {
    if (reduce) {
      processEl.classList.add("is-static");
    } else {
      const desktopProcess = window.matchMedia("(min-width: 768px)").matches;
      const processIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            processEl.classList.toggle("is-flowing", entry.isIntersecting);
          });
        },
        /* Mobile stack is tall; 28% never intersects, so the icon timer never starts. */
        { threshold: desktopProcess ? 0.28 : 0 }
      );
      processIo.observe(processEl);
    }
  }

  const animateCount = (el) => {
    const text = el.dataset.text;
    const suffix = el.dataset.suffix || "";
    if (text) {
      el.textContent = text;
      return;
    }
    const end = Number(el.dataset.counter);
    if (!Number.isFinite(end)) return;
    if (reduce) {
      el.textContent = `${end}${suffix}`;
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${Math.round(end * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const counters = document.querySelectorAll("[data-counter]");
  const countIo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countIo.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((el) => {
    if (!el.dataset.text) el.textContent = `0${el.dataset.suffix || ""}`;
    countIo.observe(el);
  });

  const timeline = document.querySelector("[data-timeline]");
  const progress = document.querySelector("[data-timeline-progress]");
  const updateTimeline = () => {
    if (!timeline || !progress) return;
    const rect = timeline.getBoundingClientRect();
    const start = window.innerHeight * 0.25;
    const total = rect.height - window.innerHeight * 0.3;
    const scrolled = Math.min(Math.max(start - rect.top, 0), Math.max(total, 1));
    progress.style.height = `${(scrolled / Math.max(total, 1)) * 100}%`;
  };
  window.addEventListener("scroll", updateTimeline, { passive: true });
  updateTimeline();

  const dialog = document.getElementById("agriculture-dialog");
  document.querySelector("[data-open-case]")?.addEventListener("click", () => dialog?.showModal());

  const notes = {
    [C.globalFootprint.origin.id]: `${C.globalFootprint.origin.city} · ${C.globalFootprint.origin.note}`,
    ...Object.fromEntries(C.globalFootprint.places.map((p) => [p.id, `${p.name} · ${p.note}`]))
  };
  const noteEl = document.querySelector("[data-map-note]");
  document.querySelectorAll("[data-map]").forEach((node) => {
    const activate = () => {
      document.querySelectorAll("[data-map]").forEach((n) => n.setAttribute("aria-pressed", "false"));
      node.setAttribute("aria-pressed", "true");
      if (noteEl) noteEl.textContent = notes[node.dataset.map] || "";
    };
    node.addEventListener("click", activate);
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });

  document.querySelector("[data-contact-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio enquiry: ${data.get("subject")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:${C.contact.email}?subject=${subject}&body=${body}`;
  });
})();
