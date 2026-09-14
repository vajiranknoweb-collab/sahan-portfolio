"""Extract world-outline.svg path into a JS constant for inline theming."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SVG = ROOT / "assets" / "images" / "global" / "world-outline.svg"
OUT = ROOT / "js" / "world-outline-path.js"


def main():
    text = SVG.read_text(encoding="utf-8")
    match = re.search(r'\sd="([^"]+)"', text)
    if not match:
        raise SystemExit("path d not found in world-outline.svg")
    OUT.write_text(
        "window.SAHAN_WORLD_OUTLINE_PATH = " + json.dumps(match.group(1)) + ";\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
