"""Lightweight checks for the static portfolio prototype."""
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors = []

required = [
    "index.html",
    "css/app.css",
    "js/content.js",
    "js/render.js",
    "js/app.js",
    "robots.txt",
    "sitemap.xml",
    "assets/images/portrait/sahan.webp",
    "assets/images/smart-drain/water-flow.svg",
    "assets/icons/favicon.svg",
]
for rel in required:
    if not (ROOT / rel).exists():
        errors.append(f"missing file: {rel}")

html = (ROOT / "index.html").read_text(encoding="utf-8")
for token in ["Sahan Chathuranga Ranasinghe", "application/ld+json", "js/content.js", "Skip to content"]:
    if token not in html:
        errors.append(f"index.html missing: {token}")

content = (ROOT / "js/content.js").read_text(encoding="utf-8")
content_l = content.lower()
for token in [
    "Engineer. Inventor. Entrepreneur.",
    "WIPO Global Award",
    "IoT and Technology Partner",
]:
    if token not in content:
        errors.append(f"content.js missing: {token}")
if "part of the smart drain team" not in content_l:
    errors.append("content.js missing Smart Drain team wording")
if "value: 250" not in content:
    errors.append("content.js missing 250 organizations metric")

if "personally won" in content.lower():
    errors.append("content claims a personal WIPO win")

css = (ROOT / "css/app.css").read_text(encoding="utf-8")
if "prefers-reduced-motion" not in css:
    errors.append("missing reduced-motion styles")

js = (ROOT / "js/app.js").read_text(encoding="utf-8")
if "TODO" in js or "TODO" in (ROOT / "js/render.js").read_text(encoding="utf-8"):
    errors.append("TODO found in JS")

if errors:
    print("CHECK FAILED")
    for err in errors:
        print("-", err)
    sys.exit(1)

print("CHECK PASSED")
print(f"files ok · html {len(html)} chars · content {len(content)} chars")
