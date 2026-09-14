(() => {
  const C = window.SAHAN;
  if (!C) return;

  const esc = (value) =>
    String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const ph = (asset) =>
    asset?.placeholder === true
      ? `<span class="ph-chip">Dev placeholder</span>`
      : "";

  const img = (asset, extra = "") => {
    const chip = ph(asset);
    return `
    <figure class="media relative overflow-hidden">
      <img src="${esc(asset.src)}" alt="${esc(asset.alt)}" ${extra} width="1280" height="720" />
      ${chip ? `<figcaption class="absolute left-3 bottom-3">${chip}</figcaption>` : ""}
    </figure>`;
  };

  const processIcons = {
    understand: `
      <circle cx="11" cy="11" r="6.5"></circle>
      <circle cx="11" cy="11" r="2.2"></circle>
      <path d="M11 3.2v1.6M11 17.2v1.6M3.2 11h1.6M17.2 11h1.6M15.7 15.7l4.1 4.1"></path>`,
    engineer: `
      <path d="M4 19.5V6.2L12 3.5l8 2.7v12.8l-8 2.7-8-2.7z"></path>
      <path d="M12 3.5v16"></path>
      <path d="M8.2 10.2h3.2M8.2 13.2h5.2"></path>
      <path d="M15.2 8.8l2.6 2.6-5.4 5.4H9.8v-2.6l5.4-5.4z"></path>`,
    build: `
      <circle cx="9.5" cy="13.5" r="3"></circle>
      <path d="M9.5 8.2v1.3M9.5 17.5v1.3M4.2 13.5h1.3M13.5 13.5h1.3M6 10l.9.9M12.1 16.1l.9.9M6 17l.9-.9M12.1 10.9l.9-.9"></path>
      <circle cx="15.5" cy="8.5" r="2.6"></circle>
      <path d="M15.5 4.2v1.1M15.5 11.7v1.1M11.2 8.5h1.1M18.7 8.5h1.1M12.7 5.7l.8.8M17.5 11.3l.8.8M12.7 11.3l.8-.8M17.5 5.7l.8-.8"></path>`,
    integrate: `
      <circle cx="6.5" cy="7" r="2.4"></circle>
      <circle cx="17.5" cy="7" r="2.4"></circle>
      <circle cx="12" cy="17" r="2.4"></circle>
      <path d="M8.6 8.2l2.2 6.2M15.4 8.2l-2.2 6.2M8.9 7h6.2"></path>`,
    scale: `
      <path d="M4 14.5V20h5.5M20 9.5V4h-5.5"></path>
      <path d="M4 20l6.2-6.2M20 4l-6.2 6.2"></path>
      <path d="M14.5 4H20v5.5M9.5 20H4v-5.5"></path>`
  };

  const processIcon = (name) => {
    const paths = processIcons[name] || processIcons.understand;
    return `<svg class="process-icon-svg" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
  };

  const nav = `
    <div class="nav-wrap mx-auto max-w-7xl px-5 md:px-8">
      <a class="brand" href="#top">
        <span class="brand-mark">${esc(C.profile.monogram)}</span>
        <span class="brand-name">${esc(C.profile.shortName)}</span>
      </a>
      <nav aria-label="Primary">
        <ul class="nav-links">
          ${C.nav.map((item) => `<li><a href="#${esc(item.id)}">${esc(item.label)}</a></li>`).join("")}
        </ul>
      </nav>
      <div class="nav-actions">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch to light mode">
          <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1l1.1-1.1M18 6l1.1-1.1"></path>
          </svg>
          <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5z"></path>
          </svg>
        </button>
        <a class="nav-cta" href="#contact">Let’s Connect</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="mobile-nav" data-menu>
          <span class="icon"></span>
          <span class="sr-only">Open menu</span>
        </button>
      </div>
    </div>
    <div class="mobile-nav mx-auto max-w-7xl px-5" id="mobile-nav">
      ${C.nav.map((item) => `<a href="#${esc(item.id)}">${esc(item.label)}</a>`).join("")}
      <a href="#contact">Let’s Connect</a>
    </div>`;

  const heroRoles = C.profile.roles
    .map(
      (role, i) =>
        `<span class="hero-role" style="--i:${i}"><span class="hero-role-inner">${esc(role)}.</span></span>`
    )
    .join("");

  const heroTaglines = (C.hero.taglines || [])
    .map((line) => `<li>${esc(line)}</li>`)
    .join("");

  const hero = `
    <section id="top" class="hero relative min-h-[100svh] grid-bg overflow-hidden">
      <div class="circuit-scan" aria-hidden="true"></div>
      <div class="hero-shell mx-auto max-w-7xl px-5 md:px-8 pt-8 pb-20 md:pt-12 md:pb-28">
        <div class="hero-compose">
          <div class="hero-display">
            <p class="kicker">${esc(C.hero.eyebrow)}</p>
            <h1 class="display hero-roles" aria-label="${esc(C.hero.headline)}">${heroRoles}</h1>
          </div>
          <div class="hero-portrait portrait-frame">
            ${img(C.profile.portrait, 'loading="eager" fetchpriority="high"')}
          </div>
          <div class="hero-meta">
            <div class="hero-copy-panel">
              <p class="hero-name">${esc(C.profile.name)}</p>
              <p class="muted hero-supporting">${esc(C.hero.supporting)}</p>
              ${heroTaglines ? `<ul class="hero-taglines">${heroTaglines}</ul>` : ""}
              <div class="tick-row hero-affiliations">
                ${C.hero.affiliations.map((a) => `<span>${esc(a.role)} — ${esc(a.org)}</span>`).join("")}
              </div>
            </div>
            <div class="hero-ctas flex flex-wrap gap-3">
              ${C.hero.ctas
                .map(
                  (cta) =>
                    `<a class="btn ${cta.variant === "primary" ? "btn-primary" : "btn-ghost"}" href="${esc(cta.href)}">${esc(cta.label)}</a>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </section>`;

  const metrics = `
    <section aria-label="Credibility" class="border-y border-[color:var(--line)]">
      <div class="mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
        ${C.metrics
          .map(
            (m) => `
          <article class="metric">
            <div class="metric-value" data-counter="${m.value ?? ""}" data-suffix="${esc(m.suffix || "")}" data-text="${esc(m.text || "")}">${esc(m.text || "0")}${esc(m.suffix || "")}</div>
            <p class="mt-2 muted font-[family-name:var(--mono)] text-sm font-medium tracking-[0.12em] uppercase">${esc(m.label)}</p>
          </article>`
          )
          .join("")}
      </div>
    </section>`;

  const about = `
    <section id="about" class="section">
      <div class="about-story mx-auto max-w-7xl px-5 md:px-8">
        <p class="kicker about-kicker">${esc(C.about.kicker)}</p>
        <h2 class="display about-heading text-[clamp(2.1rem,5vw,4.4rem)]">${esc(C.about.heading)}</h2>
        <div class="about-copy reveal">
          ${C.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
        </div>
        <p class="about-close display text-2xl md:text-3xl">${esc(C.about.close)}</p>
      </div>
    </section>`;

  const timeline = `
    <section id="journey" class="section bg-[color:var(--graphite)]">
      <div class="mx-auto max-w-7xl px-5 md:px-8">
        <div class="flex items-end justify-between gap-6 mb-12">
          <div>
            <h2 class="display text-[clamp(2rem,5vw,4rem)]">A line from Galle to now.</h2>
          </div>
        </div>
        <div class="timeline" data-timeline>
          <div class="timeline-progress" data-timeline-progress></div>
          ${C.timeline
            .map(
              (item) => `
            <article class="t-item reveal">
              <p class="absolute left-0 top-0 hidden lg:block font-[family-name:var(--mono)] text-sm font-medium tracking-[0.12em] uppercase text-[color:var(--lime)] w-28">${esc(item.year)}</p>
              <p class="lg:hidden kicker">${esc(item.year)}</p>
              <h3 class="display text-2xl md:text-3xl">${esc(item.title)}</h3>
              <p class="muted mt-2 max-w-2xl">${esc(item.body)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const sanota = `
    <section id="sanota" class="section">
      <div class="mx-auto max-w-7xl px-5 md:px-8">
        <p class="kicker">${esc(C.sanota.kicker)} · ${esc(C.sanota.role)}</p>
        <div class="grid lg:grid-cols-2 gap-12 items-end mt-4">
          <h2 class="display text-[clamp(2.2rem,6vw,5rem)]">${esc(C.sanota.headline)}</h2>
          <p class="muted max-w-xl">${esc(C.sanota.body)}</p>
        </div>
        <div class="tick-row mt-8">
          ${C.sanota.capabilities.map((cap) => `<span>${esc(cap)}</span>`).join("")}
        </div>
        <div class="mt-10 portrait-frame feature-photo reveal">${img(C.sanota.image, 'loading="lazy"')}</div>
        <div class="mt-6 flex flex-wrap gap-4 text-sm">
          ${C.sanota.links
            .map(
              (link) =>
                `<a class="underline decoration-[color:var(--lime)] underline-offset-4" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${esc(link.label)}</a>`
            )
            .join("")}
        </div>
        <h3 class="display text-2xl md:text-4xl mt-16 mb-6 reveal">${esc(C.sanota.process.heading)}</h3>
        <ol class="process reveal" data-process style="--process-n:${C.sanota.process.steps.length}">
          ${C.sanota.process.steps
            .map(
              (step, i) => `
            <li class="process-step" style="--i:${i}">
              <span class="process-icon">${processIcon(step.icon)}</span>
              <h4 class="display text-xl">${esc(step.title)}</h4>
              <p class="muted mt-2 text-sm">${esc(step.body)}</p>
            </li>`
            )
            .join("")}
        </ol>
      </div>
    </section>`;

  const agriculture = `
    <section id="agriculture" class="section bg-[color:var(--graphite)]">
      <div class="mx-auto max-w-7xl px-5 md:px-8">
        <p class="kicker">${esc(C.agriculture.kicker)}</p>
        <h2 class="display text-[clamp(2.2rem,6vw,5rem)] mt-2">${esc(C.agriculture.headline)}</h2>
        <p class="mt-4 text-xl">${esc(C.agriculture.title)}</p>
        <p class="muted max-w-3xl mt-5">${esc(C.agriculture.summary)}</p>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          ${C.agriculture.metrics
            .map(
              (m) => `
            <article class="metric">
              <div class="metric-value text-4xl md:text-5xl" data-counter="${m.value ?? ""}" data-suffix="${esc(m.suffix || "")}" data-text="${esc(m.text || "")}">${esc(m.text || "0")}${esc(m.suffix || "")}</div>
              <p class="muted font-[family-name:var(--mono)] text-sm font-medium tracking-[0.12em] uppercase mt-2">${esc(m.label)}</p>
            </article>`
            )
            .join("")}
        </div>
        <div class="mt-10 portrait-frame feature-photo reveal">${img(C.agriculture.image, 'loading="lazy"')}</div>
        <button class="btn btn-ghost mt-8" type="button" data-open-case>${esc(C.agriculture.cta)}</button>
      </div>
      <dialog class="dialog p-0" id="agriculture-dialog" aria-labelledby="agri-dialog-title">
        <div class="p-6 md:p-10">
          <h3 id="agri-dialog-title" class="display text-3xl">${esc(C.agriculture.detail.heading)}</h3>
          ${C.agriculture.detail.paragraphs.map((p) => `<p class="muted mt-4">${esc(p)}</p>`).join("")}
          <div class="tick-row mt-6">${C.agriculture.detail.stages.map((s) => `<span>${esc(s)}</span>`).join("")}</div>
          <form method="dialog" class="mt-8"><button class="btn btn-primary">Close</button></form>
        </div>
      </dialog>
    </section>`;

  const smartDrain = `
    <section id="innovation" class="section">
      <div class="mx-auto max-w-7xl px-5 md:px-8">
        <p class="kicker">${esc(C.smartDrain.kicker)}</p>
        <div class="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 class="display text-[clamp(2.2rem,5.5vw,4.6rem)]">${esc(C.smartDrain.headline)}</h2>
            <p class="mt-4 font-[family-name:var(--mono)] text-sm font-medium tracking-[0.12em] uppercase text-[color:var(--lime)]">${esc(C.smartDrain.role)} · ${esc(C.smartDrain.org)}</p>
            <p class="muted mt-5">${esc(C.smartDrain.summary)}</p>
            <ul class="mt-6 space-y-3 muted">
              ${C.smartDrain.points.map((p) => `<li class="pl-4 border-l border-[color:var(--lime)]">${esc(p)}</li>`).join("")}
            </ul>
            <p class="mt-6 inline-flex items-center gap-2 border border-[color:var(--lime)] px-3 py-2 text-sm">${esc(C.smartDrain.recognition)}</p>
            <div class="mt-6 flex flex-wrap gap-4 text-sm">
              ${C.smartDrain.links
                .map(
                  (link) =>
                    `<a class="underline decoration-[color:var(--lime)] underline-offset-4" href="${esc(link.href)}" target="_blank" rel="noopener noreferrer">${esc(link.label)}</a>`
                )
                .join("")}
            </div>
          </div>
          <div class="portrait-frame reveal">${img(C.smartDrain.image, 'loading="lazy"')}</div>
        </div>
      </div>
    </section>`;

  const covid = `
    <section id="covid" class="section bg-[color:var(--graphite)]">
      <div class="mx-auto max-w-7xl px-5 md:px-8">
        <h2 class="display text-[clamp(2rem,5vw,4rem)]">${esc(C.covid.heading)}</h2>
        <p class="muted max-w-2xl mt-4">${esc(C.covid.intro)}</p>
        <div class="cards-scroll covid mt-10">
          ${C.covid.projects
            .map(
              (project) => `
            <article class="tech-card reveal">
              ${img(project.image, 'loading="lazy"')}
              <div class="p-5">
                <p class="kicker">${esc(project.year)}</p>
                <h3 class="display text-2xl">${esc(project.title)}</h3>
                <p class="muted mt-2">${esc(project.body)}</p>
                <p class="mt-3 text-sm font-medium font-[family-name:var(--mono)] tracking-wide uppercase text-[color:var(--mute)]">${esc(project.credit)}</p>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const ventures = `
    <section id="ventures" class="section">
      <div class="mx-auto max-w-7xl px-5 md:px-8">
        <h2 class="display text-[clamp(2rem,5vw,4rem)]">Three companies. One engineering instinct.</h2>
        <div class="grid lg:grid-cols-3 gap-4 mt-10">
          ${C.ventures
            .map(
              (v) => `
            <article class="tech-card reveal h-full flex flex-col">
              ${img(v.image, 'loading="lazy"')}
              <div class="p-6 flex flex-col grow">
                <p class="kicker">${esc(v.role)}</p>
                <h3 class="display text-3xl">${esc(v.name)}</h3>
                <p class="mt-3">${esc(v.headline)}</p>
                ${v.body ? `<p class="muted mt-3">${esc(v.body)}</p>` : ""}
                <div class="tick-row mt-5">${v.capabilities.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
                <a class="btn btn-ghost mt-8 self-start" href="${esc(v.href)}" target="_blank" rel="noopener noreferrer">Open profile</a>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const recognition = `
    <section id="recognition" class="section bg-[color:var(--graphite)]">
      <div class="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <h2 class="display text-[clamp(2rem,5vw,4rem)]">${esc(C.recognition.heading)}</h2>
          <p class="muted mt-4">${esc(C.recognition.intro)}</p>
          <div class="portrait-frame mt-8">${img(C.recognition.image, 'loading="lazy"')}</div>
        </div>
        <div>
          ${C.awards
            .map(
              (award) => `
            <article class="award-item reveal">
              <p class="font-[family-name:var(--mono)] text-sm font-medium tracking-[0.12em] uppercase text-[color:var(--lime)]">${esc(award.year)}</p>
              <div>
                <h3 class="display text-2xl md:text-3xl">${esc(award.title)}</h3>
                <p class="mt-1">${esc(award.org)}</p>
                <p class="muted mt-2">${esc(award.detail)}</p>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const education = `
    <section id="education" class="section">
      <div class="mx-auto max-w-7xl px-5 md:px-8">
        <h2 class="display text-[clamp(2rem,5vw,4rem)]">Foundations.</h2>
        <div class="grid md:grid-cols-2 gap-4 mt-10">
          ${C.education
            .map(
              (ed) => `
            <article class="tech-card p-8 reveal">
              ${ed.year ? `<p class="kicker">${esc(ed.year)}</p>` : ""}
              <h3 class="display text-3xl">${esc(ed.school)}</h3>
              <p class="mt-3">${esc(ed.program)}</p>
              <p class="muted mt-3">${esc(ed.detail)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>`;

  const MAP_W = 1000;
  const MAP_H = 500;
  const project = (lat, lng) => ({
    x: ((lng + 180) / 360) * MAP_W,
    y: ((90 - lat) / 180) * MAP_H
  });
  const nodes = [C.globalFootprint.origin, ...C.globalFootprint.places].map((n) => {
    const pt = project(n.lat, n.lng);
    return { ...n, x: pt.x, y: pt.y };
  });
  const originNode = nodes.find((n) => n.id === "lk") || nodes[0];
  const routes = nodes
    .filter((n) => n.id !== "lk")
    .map((n) => {
      const midX = (originNode.x + n.x) / 2;
      const midY = Math.min(originNode.y, n.y) - 48;
      return `<path class="route" d="M ${originNode.x.toFixed(1)} ${originNode.y.toFixed(1)} Q ${midX.toFixed(1)} ${midY.toFixed(1)} ${n.x.toFixed(1)} ${n.y.toFixed(1)}" />`;
    })
    .join("");

  const global = `
    <section id="global" class="section bg-[color:var(--graphite)]">
      <div class="global-layout mx-auto max-w-7xl px-5 md:px-8">
        <div class="global-copy">
          <h2 class="display text-[clamp(2rem,5vw,4.4rem)]">${esc(C.globalFootprint.heading)}</h2>
          <p class="muted max-w-xl mt-4">${esc(C.globalFootprint.intro)}</p>
          <p class="mt-6 font-[family-name:var(--mono)] text-sm tracking-wide" data-map-note>${esc(C.globalFootprint.origin.city)} · ${esc(C.globalFootprint.origin.note)}</p>
        </div>
        <div class="map-wrap p-3 md:p-4">
          <div class="map-stage">
            <svg class="map-svg" viewBox="0 0 ${MAP_W} ${MAP_H}" role="img" aria-label="Interactive world map of verified international reach">
              <rect width="${MAP_W}" height="${MAP_H}" fill="var(--ink)"/>
              <g class="map-continents" aria-hidden="true">
                <path d="${window.SAHAN_WORLD_OUTLINE_PATH || ""}" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"/>
              </g>
              <g class="map-routes" aria-hidden="true">${routes}</g>
              ${nodes
                .map((n, i) => {
                  const coreR = n.id === "lk" ? 7.2 : 5.2;
                  const ringR = n.id === "lk" ? 11 : 8.5;
                  const lx = n.x + (n.labelDx ?? 16);
                  const ly = n.y + (n.labelDy ?? -10);
                  return `
              <g class="map-node${n.id === "lk" ? " map-node--origin" : ""}" tabindex="0" role="button" aria-pressed="${i === 0 ? "true" : "false"}" data-map="${esc(n.id)}" aria-label="${esc(n.name)}">
                <circle class="map-node-hit" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="18" fill="transparent" stroke="none"/>
                <circle class="map-node-ring" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${ringR}"/>
                <circle class="map-node-core" cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${coreR}"/>
                <text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" fill="var(--mist)" font-size="18" font-family="IBM Plex Mono, monospace">${esc(n.name)}</text>
              </g>`;
                })
                .join("")}
            </svg>
          </div>
        </div>
      </div>
    </section>`;

  const mindset = `
    <section id="mindset" class="section">
      <div class="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <h2 class="display text-[clamp(2.2rem,7vw,5.5rem)]">${esc(C.mindset.heading)}</h2>
        <p class="mt-8 text-xl md:text-2xl">${C.mindset.subjects.map(esc).join(" ")}</p>
        <p class="muted mt-8 max-w-2xl mx-auto">${esc(C.mindset.body)}</p>
      </div>
    </section>`;

  const community = `
    <section id="community" class="section bg-[color:var(--graphite)]">
      <div class="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 class="display text-[clamp(2rem,5vw,4rem)]">${esc(C.community.heading)}</h2>
          <p class="muted mt-5">${esc(C.community.body)}</p>
          <a class="btn btn-ghost mt-8" href="${esc(C.community.link.href)}" target="_blank" rel="noopener noreferrer">${esc(C.community.link.label)}</a>
        </div>
        <div class="tech-card p-8">
          <h3 class="display text-2xl">${esc(C.community.beyond.heading)}</h3>
          <ul class="mt-6 space-y-3">
            ${C.community.beyond.items.map((item) => `<li class="border-t border-[color:var(--line)] pt-3">${esc(item)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>`;

  const contact = `
    <section id="contact" class="section">
      <div class="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
        <div>
          <p class="kicker">${esc(C.contact.kicker)}</p>
          <h2 class="display text-[clamp(2.4rem,6vw,5.5rem)]">${esc(C.contact.heading)}</h2>
          <p class="muted mt-5 max-w-xl">${esc(C.contact.body)}</p>
          <div class="mt-8 space-y-2 font-[family-name:var(--mono)] text-sm">
            <p><a class="underline decoration-[color:var(--lime)] underline-offset-4" href="mailto:${esc(C.contact.email)}">${esc(C.contact.email)}</a></p>
            <p><a class="underline decoration-[color:var(--lime)] underline-offset-4" href="tel:${esc(String(C.contact.phone).replace(/[^\d+]/g, ""))}">${esc(C.contact.phone)}</a></p>
            <p class="muted">${esc(C.contact.address)}</p>
            <p><a class="underline decoration-[color:var(--lime)] underline-offset-4" href="${esc(C.contact.linkedin)}" target="_blank" rel="noopener noreferrer">${esc(C.contact.linkedinLabel || "LinkedIn")}</a></p>
          </div>
        </div>
        <form class="form-grid tech-card p-6 md:p-8" data-contact-form>
          <label><span>${esc(C.contact.form.name.label)}</span><input name="name" autocomplete="name" placeholder="${esc(C.contact.form.name.placeholder)}" required></label>
          <label><span>${esc(C.contact.form.email.label)}</span><input type="email" name="email" autocomplete="email" placeholder="${esc(C.contact.form.email.placeholder)}" required></label>
          <label>
            <span>${esc(C.contact.form.subject.label)}</span>
            <select name="subject" required>
              <option value="" disabled selected>${esc(C.contact.form.subject.placeholder)}</option>
              ${C.contact.form.subjects.map((s) => `<option>${esc(s)}</option>`).join("")}
            </select>
          </label>
          <label><span>${esc(C.contact.form.message.label)}</span><textarea name="message" rows="5" placeholder="${esc(C.contact.form.message.placeholder)}" required></textarea></label>
          <p class="text-xs muted">${esc(C.contact.formNote)}</p>
          <button class="btn btn-primary" type="submit">${esc(C.contact.cta)} →</button>
        </form>
      </div>
    </section>`;

  const footer = `
    <footer class="border-t border-[color:var(--line)]">
      <div class="mx-auto max-w-7xl px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p class="font-[family-name:var(--mono)] text-xs tracking-[0.12em] uppercase">${esc(C.footer.copyright || C.profile.name)}</p>
        <p class="muted text-sm">${esc(C.footer.note)}</p>
      </div>
    </footer>
    <a class="mobile-cta btn btn-primary justify-center" href="#contact">${esc(C.contact.cta)}</a>`;

  document.getElementById("site-header").innerHTML = nav;
  document.getElementById("app").innerHTML = [
    hero,
    metrics,
    about,
    timeline,
    sanota,
    agriculture,
    smartDrain,
    covid,
    ventures,
    recognition,
    education,
    global,
    mindset,
    community,
    contact
  ].join("\n");
  document.getElementById("site-footer").innerHTML = footer;
})();
