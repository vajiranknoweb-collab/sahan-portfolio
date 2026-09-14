"""Generate content/caption-based technical SVG placeholders for the portfolio."""
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(r"c:\Users\Vajira Viraj\sahan-portfolio")

INK = "#071530"
GRAPHITE = "#0B1C42"
MIST = "#F4F1E6"
MUTE = "#9AA8C4"
LIME = "#F5C400"
LINE = "rgba(245,196,0,0.28)"


def svg(w, h, body, view=None):
    vb = view or f"0 0 {w} {h}"
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{vb}" width="{w}" height="{h}" '
        f'role="img">{body}</svg>'
    )


def grid(w, h, step=24):
    lines = []
    x = 0
    while x <= w:
        lines.append(
            f'<line x1="{x}" y1="0" x2="{x}" y2="{h}" stroke="{LINE}" stroke-width="0.5"/>'
        )
        x += step
    y = 0
    while y <= h:
        lines.append(
            f'<line x1="0" y1="{y}" x2="{w}" y2="{y}" stroke="{LINE}" stroke-width="0.5"/>'
        )
        y += step
    return "<g>" + "".join(lines) + "</g>"


def caption_bar(title, caption, y=None, w=1200):
    """Bottom title + caption strip driven by section content."""
    title = escape(title)
    caption = escape(caption)
    top = y if y is not None else 0
    # Caller places this group; y is baseline for title inside a fixed footer band.
    return f'''
    <g>
      <rect x="0" y="{top}" width="{w}" height="110" fill="{INK}" fill-opacity="0.92"/>
      <rect x="0" y="{top}" width="6" height="110" fill="{LIME}"/>
      <text x="28" y="{top + 38}" fill="{LIME}" font-family="IBM Plex Mono, ui-monospace, monospace"
            font-size="11" letter-spacing="2">DEV PLACEHOLDER</text>
      <text x="28" y="{top + 68}" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="26">{title}</text>
      <text x="28" y="{top + 94}" fill="{MUTE}" font-family="Manrope, sans-serif" font-size="14">{caption}</text>
    </g>'''


def corner_marks(w, h, m=28):
    return f'''
    <g fill="none" stroke="{LIME}" stroke-width="1.2" opacity="0.7">
      <path d="M{m} {m+18}V{m}h18"/>
      <path d="M{w-m-18} {m}h18v18"/>
      <path d="M{m} {h-m-18}v18h18"/>
      <path d="M{w-m-18} {h-m}h18v-18"/>
    </g>'''


# --- Sanota: custom industrial machinery ---
sanota = svg(
    1200,
    760,
    f'''
  <rect width="1200" height="760" fill="{GRAPHITE}"/>
  {grid(1200, 760, 40)}
  {corner_marks(1200, 650)}
  <g fill="none" stroke="{MIST}" stroke-width="1.5">
    <rect x="100" y="160" width="200" height="260" rx="4"/>
    <rect x="340" y="120" width="300" height="340" rx="4"/>
    <rect x="680" y="180" width="170" height="220" rx="4"/>
    <rect x="890" y="140" width="190" height="300" rx="4"/>
    <circle cx="490" cy="290" r="78"/>
    <circle cx="490" cy="290" r="32"/>
    <path d="M300 290h40M590 290h90M850 290h40"/>
    <path d="M200 160v-36h70M200 420v36h70M985 140v-32h80"/>
    <path d="M150 220h100M150 280h100M150 340h60"/>
    <path d="M930 220h110M930 280h110M930 340h70"/>
  </g>
  <g fill="{LIME}">
    <circle cx="200" cy="124" r="4"/>
    <circle cx="490" cy="290" r="5"/>
    <circle cx="765" cy="180" r="4"/>
    <circle cx="1065" cy="108" r="4"/>
  </g>
  <g fill="{MUTE}" font-family="IBM Plex Mono, monospace" font-size="11">
    <text x="200" y="440" text-anchor="middle">FEED</text>
    <text x="490" y="490" text-anchor="middle">DRIVE UNIT</text>
    <text x="765" y="430" text-anchor="middle">CONTROL</text>
    <text x="985" y="470" text-anchor="middle">OUTPUT</text>
  </g>
  {caption_bar("Sanota — custom industrial machinery", "Automation, robotics, IoT and embedded systems for manufacturing.", 650, 1200)}
''',
)

# --- Agriculture: check → pack line ---
agri = svg(
    1400,
    720,
    f'''
  <rect width="1400" height="720" fill="{GRAPHITE}"/>
  {grid(1400, 720, 40)}
  {corner_marks(1400, 610)}
  <g fill="none" stroke="{MIST}" stroke-width="1.4">
    <rect x="70" y="180" width="200" height="180" rx="3"/>
    <rect x="330" y="160" width="200" height="220" rx="3"/>
    <rect x="590" y="180" width="200" height="180" rx="3"/>
    <rect x="850" y="160" width="200" height="220" rx="3"/>
    <rect x="1110" y="180" width="200" height="180" rx="3"/>
    <path d="M270 270h60M530 270h60M790 270h60M1050 270h60" stroke="{LIME}" stroke-width="2"/>
    <path d="M300 255l30 15-30 15M560 255l30 15-30 15M820 255l30 15-30 15M1080 255l30 15-30 15" fill="{LIME}" stroke="none"/>
  </g>
  <g fill="{LIME}" font-family="IBM Plex Mono, monospace" font-size="13" letter-spacing="1">
    <text x="170" y="280" text-anchor="middle">CHECK</text>
    <text x="430" y="280" text-anchor="middle">GRADE</text>
    <text x="690" y="280" text-anchor="middle">WASH</text>
    <text x="950" y="280" text-anchor="middle">DRY</text>
    <text x="1210" y="280" text-anchor="middle">PACK</text>
  </g>
  <g fill="{MUTE}" font-family="Manrope, sans-serif" font-size="13">
    <text x="70" y="420">Jaffna food-processing plant · bananas &amp; mangoes</text>
    <text x="70" y="444">500+ farmers · 500 acres · World Bank-backed initiative</text>
  </g>
  {caption_bar("Smart Agriculture — from field to export", "Checking, grading, washing, drying and export-ready packaging.", 610, 1400)}
''',
)

# --- Smart Drain ---
drain = svg(
    1200,
    760,
    f'''
  <defs>
    <linearGradient id="water" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#7EC8E3" stop-opacity="0.12"/>
      <stop offset="0.5" stop-color="#F5C400" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#7EC8E3" stop-opacity="0.12"/>
    </linearGradient>
    <path id="flow" d="M90 400 C 250 400, 280 280, 450 280 S 670 500, 850 400 S 1060 260, 1120 260"/>
  </defs>
  <rect width="1200" height="760" fill="{INK}"/>
  {grid(1200, 760, 40)}
  {corner_marks(1200, 650)}
  <path d="M70 220h1060v300H70z" fill="none" stroke="{MIST}" stroke-opacity="0.35"/>
  <path d="M130 260h170v44H130zM130 480h170v44H130z" fill="none" stroke="{MUTE}"/>
  <path d="M130 304v176M175 304v176M220 304v176M265 304v176" stroke="{MUTE}" stroke-width="2"/>
  <use href="#flow" fill="none" stroke="url(#water)" stroke-width="18" stroke-linecap="round"/>
  <use href="#flow" fill="none" stroke="{LIME}" stroke-width="2" stroke-dasharray="10 14" class="flow-dash"/>
  <g fill="{LIME}">
    <circle cx="450" cy="280" r="7"/>
    <circle cx="850" cy="400" r="7"/>
    <circle cx="1120" cy="260" r="7"/>
  </g>
  <g fill="{MIST}" font-family="IBM Plex Mono, monospace" font-size="11">
    <text x="140" y="248">DEBRIS SCREEN</text>
    <text x="430" y="254">SENSOR</text>
    <text x="808" y="438">IOT NODE</text>
    <text x="1035" y="242">DATA OUT</text>
  </g>
  <style>
    .flow-dash {{ animation: flow 8s linear infinite; }}
    @keyframes flow {{ to {{ stroke-dashoffset: -240; }} }}
    @media (prefers-reduced-motion: reduce) {{ .flow-dash {{ animation: none; }} }}
  </style>
  {caption_bar("Smart Drain — urban flood management", "IoT &amp; Technology Partner · flow continues when drains clog.", 650, 1200)}
''',
)

# --- COVID: Patient Inspection Chamber ---
chamber = svg(
    720,
    540,
    f'''
  <rect width="720" height="540" fill="{GRAPHITE}"/>
  {grid(720, 540, 32)}
  {corner_marks(720, 430)}
  <g fill="none" stroke="{MIST}" stroke-width="1.5">
    <rect x="90" y="80" width="540" height="280"/>
    <rect x="130" y="120" width="200" height="200"/>
    <rect x="380" y="140" width="200" height="140"/>
    <circle cx="480" cy="210" r="34"/>
    <path d="M330 220h50"/>
    <path d="M160 150h140M160 190h100M160 230h120"/>
  </g>
  <g fill="{LIME}" font-family="IBM Plex Mono, monospace" font-size="10">
    <text x="230" y="340" text-anchor="middle">PATIENT BAY</text>
    <text x="480" y="310" text-anchor="middle">MONITOR / SAMPLE</text>
  </g>
  {caption_bar("Patient Inspection Chamber", "Remote communication, monitoring, sample handling and disinfection.", 430, 720)}
''',
)

# --- COVID: Telepresence Robot ---
tele = svg(
    720,
    540,
    f'''
  <rect width="720" height="540" fill="{GRAPHITE}"/>
  {grid(720, 540, 32)}
  {corner_marks(720, 430)}
  <g fill="none" stroke="{MIST}" stroke-width="1.5">
    <circle cx="360" cy="130" r="48"/>
    <rect x="300" y="110" width="120" height="40" rx="4"/>
    <rect x="290" y="190" width="140" height="120" rx="6"/>
    <path d="M360 178v12"/>
    <rect x="320" y="320" width="80" height="36" rx="3"/>
    <circle cx="285" cy="380" r="26"/>
    <circle cx="435" cy="380" r="26"/>
    <path d="M250 240h40M430 240h40"/>
  </g>
  <g fill="{MUTE}" font-family="IBM Plex Mono, monospace" font-size="11">
    <text x="360" y="90" text-anchor="middle">CAMERA / DISPLAY</text>
    <text x="360" y="420" text-anchor="middle">MOBILE BASE</text>
  </g>
  {caption_bar("Semi-Automated Telepresence Robot", "Transportation and remote patient interaction.", 430, 720)}
''',
)

# --- COVID: Smart ICU Bed ---
icu = svg(
    720,
    540,
    f'''
  <rect width="720" height="540" fill="{GRAPHITE}"/>
  {grid(720, 540, 32)}
  {corner_marks(720, 430)}
  <g fill="none" stroke="{MIST}" stroke-width="1.5">
    <rect x="100" y="170" width="480" height="100" rx="10"/>
    <rect x="140" y="120" width="140" height="50" rx="4"/>
    <rect x="460" y="130" width="90" height="36" rx="3"/>
    <rect x="120" y="270" width="28" height="70"/>
    <rect x="530" y="270" width="28" height="70"/>
    <circle cx="134" cy="350" r="18"/>
    <circle cx="544" cy="350" r="18"/>
    <path d="M180 150h80M480 148h50"/>
  </g>
  <g fill="{MUTE}" font-family="IBM Plex Mono, monospace" font-size="11">
    <text x="210" y="110" text-anchor="middle">HEAD UNIT</text>
    <text x="505" y="118" text-anchor="middle">MONITOR</text>
    <text x="340" y="390" text-anchor="middle">ELECTRIC / MANUAL DEPLOY</text>
  </g>
  {caption_bar("Smart ICU Bed", "Rapid-deployment concept with remote patient monitoring.", 430, 720)}
''',
)

# --- COVID: Open-Source Ventilator ---
vent = svg(
    720,
    540,
    f'''
  <rect width="720" height="540" fill="{GRAPHITE}"/>
  {grid(720, 540, 32)}
  {corner_marks(720, 430)}
  <g fill="none" stroke="{MIST}" stroke-width="1.5">
    <rect x="180" y="90" width="300" height="240" rx="4"/>
    <circle cx="330" cy="210" r="58"/>
    <path d="M330 152v116M272 210h116"/>
    <path d="M480 140h80v70H480z"/>
    <path d="M180 280h-55v50"/>
    <path d="M220 120h60M220 150h90"/>
  </g>
  <g fill="{MUTE}" font-family="IBM Plex Mono, monospace" font-size="11">
    <text x="330" y="360" text-anchor="middle">LOW-COST VENTILATOR CONCEPT</text>
    <text x="520" y="130" text-anchor="middle">VALVE</text>
  </g>
  {caption_bar("Open-Source Ventilator", "Collaborative low-cost ventilator development work.", 430, 720)}
''',
)

# --- Ventures ---
v_sanota = svg(
    800,
    520,
    f'''
  <rect width="800" height="520" fill="{GRAPHITE}"/>
  {grid(800, 520, 32)}
  {corner_marks(800, 410)}
  <g fill="none" stroke="{LIME}" stroke-width="1.6">
    <rect x="200" y="110" width="400" height="220" rx="4"/>
    <circle cx="400" cy="220" r="64"/>
    <path d="M400 156v-36M400 284v36M336 220h-36M464 220h36"/>
  </g>
  <text x="400" y="370" text-anchor="middle" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="28">SANOTA</text>
  {caption_bar("Sanota", "Building machines that make industries smarter.", 410, 800)}
''',
)

v_knoweb = svg(
    800,
    520,
    f'''
  <rect width="800" height="520" fill="{GRAPHITE}"/>
  {grid(800, 520, 32)}
  {corner_marks(800, 410)}
  <g fill="none" stroke="{LIME}" stroke-width="1.6">
    <rect x="180" y="120" width="440" height="210" rx="4"/>
    <path d="M220 165h160v36H220z"/>
    <path d="M220 230h360v18H220z"/>
    <path d="M220 268h280v18H220z"/>
    <circle cx="560" cy="183" r="10"/>
  </g>
  <text x="400" y="370" text-anchor="middle" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="28">KNOWEB</text>
  {caption_bar("Knoweb", "Digital solutions for growing businesses — software, SaaS and web.", 410, 800)}
''',
)

v_leaves = svg(
    800,
    520,
    f'''
  <rect width="800" height="520" fill="{GRAPHITE}"/>
  {grid(800, 520, 32)}
  {corner_marks(800, 410)}
  <g fill="none" stroke="{LIME}" stroke-width="1.5">
    <path d="M400 340 C 400 230, 280 195, 250 130 C 360 155, 390 80, 400 55 C 410 80, 440 155, 550 130 C 520 195, 400 230, 400 340z"/>
    <path d="M400 340v-200"/>
    <path d="M360 200c20-10 40-10 60 0M350 250c30-12 70-12 100 0"/>
  </g>
  <text x="400" y="370" text-anchor="middle" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="26">CRAFTED LEAVES</text>
  {caption_bar("Crafted Leaves", "Ceylon tea, cinnamon and spices — Sri Lankan heritage to global markets.", 410, 800)}
''',
)

# --- Awards: documentary placeholder only ---
award = svg(
    800,
    520,
    f'''
  <rect width="800" height="520" fill="{GRAPHITE}"/>
  {grid(800, 520, 32)}
  {corner_marks(800, 410)}
  <circle cx="400" cy="190" r="72" fill="none" stroke="{LIME}" stroke-width="1.6"/>
  <circle cx="400" cy="190" r="48" fill="none" stroke="{MIST}" stroke-opacity="0.35"/>
  <text x="400" y="196" text-anchor="middle" fill="{LIME}" font-family="IBM Plex Mono, monospace" font-size="14">REC</text>
  <text x="400" y="300" text-anchor="middle" fill="{MUTE}" font-family="Manrope, sans-serif" font-size="14">
    Documentary photography only — no fabricated certificates
  </text>
  {caption_bar("Verified recognition record", "WIPO team recognition and other publicly documented awards.", 410, 800)}
''',
)

# --- OG / favicon (unchanged purpose) ---
og = svg(
    1200,
    630,
    f'''
  <rect width="1200" height="630" fill="{INK}"/>
  {grid(1200, 630, 40)}
  <text x="80" y="160" fill="{LIME}" font-family="IBM Plex Mono, monospace" font-size="16" letter-spacing="4">SAHAN CHATHURANGA RANASINGHE</text>
  <text x="80" y="280" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="64">Engineer.</text>
  <text x="80" y="360" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="64">Inventor.</text>
  <text x="80" y="440" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="64">Entrepreneur.</text>
  <text x="80" y="540" fill="{MUTE}" font-family="Manrope, sans-serif" font-size="22">From Galle to global engineering, invention and ventures.</text>
''',
)

favicon = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="{INK}"/>
  <rect x="4" y="4" width="56" height="56" fill="none" stroke="{LIME}" stroke-width="1.5"/>
  <text x="32" y="40" text-anchor="middle" fill="{MIST}" font-family="Space Grotesk, sans-serif" font-size="18" font-weight="700">SCR</text>
</svg>'''

files = {
    ROOT / "assets/images/sanota/machine-schematic.svg": sanota,
    ROOT / "assets/images/agriculture/processing-line.svg": agri,
    ROOT / "assets/images/smart-drain/water-flow.svg": drain,
    ROOT / "assets/images/covid/inspection-chamber.svg": chamber,
    ROOT / "assets/images/covid/telepresence.svg": tele,
    ROOT / "assets/images/covid/icu-bed.svg": icu,
    ROOT / "assets/images/covid/ventilator.svg": vent,
    ROOT / "assets/images/ventures/sanota.svg": v_sanota,
    ROOT / "assets/images/ventures/knoweb.svg": v_knoweb,
    ROOT / "assets/images/ventures/crafted-leaves.svg": v_leaves,
    ROOT / "assets/images/awards/recognition.svg": award,
    ROOT / "assets/images/og-share.svg": og,
    ROOT / "assets/icons/favicon.svg": favicon,
}

for path, content in files.items():
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print("wrote", path.relative_to(ROOT))

print("done", len(files))
