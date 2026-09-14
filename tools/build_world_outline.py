"""Convert world-atlas land-110m TopoJSON into a stroke-only equirectangular SVG.

Splits rings at antimeridian crossings so projected paths never draw
full-width horizontal bridges across the map.
"""
from __future__ import annotations

import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "images" / "global" / "world-outline.svg"
SOURCE = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"
W, H = 1000, 500
WRAP_JUMP = W * 0.5


def decode_arc(arc, scale, translate):
    x = y = 0
    pts = []
    for dx, dy in arc:
        x += dx
        y += dy
        lon = x * scale[0] + translate[0]
        lat = y * scale[1] + translate[1]
        pts.append((lon, lat))
    return pts


def project(lon, lat):
    return (lon + 180) / 360 * W, (90 - lat) / 180 * H


def ring_from_arcs(arc_indexes, decoded):
    pts = []
    for idx in arc_indexes:
        seg = list(reversed(decoded[~idx])) if idx < 0 else decoded[idx]
        if pts:
            seg = seg[1:]
        pts.extend(seg)
    return pts


def split_projected_ring(lonlat_pts):
    """Project ring points and split into chains that do not cross the antimeridian."""
    if len(lonlat_pts) < 2:
        return []
    projected = [project(lon, lat) for lon, lat in lonlat_pts]
    # Drop duplicate closing point if present; we re-close per chain when needed
    if (
        len(projected) > 2
        and abs(projected[0][0] - projected[-1][0]) < 1e-6
        and abs(projected[0][1] - projected[-1][1]) < 1e-6
    ):
        projected = projected[:-1]

    chains = []
    current = [projected[0]]
    for pt in projected[1:]:
        prev = current[-1]
        if abs(pt[0] - prev[0]) > WRAP_JUMP:
            if len(current) >= 2:
                chains.append(current)
            current = [pt]
        else:
            current.append(pt)
    if len(current) >= 2:
        chains.append(current)
    return chains


def path_from_chains(chains):
    parts = []
    for chain in chains:
        # Drop near-flat full-width scrap chains (projection artifacts)
        xs = [p[0] for p in chain]
        ys = [p[1] for p in chain]
        if max(xs) - min(xs) > 900 and max(ys) - min(ys) < 35:
            continue
        cmds = []
        for i, (x, y) in enumerate(chain):
            cmds.append(f"{'M' if i == 0 else 'L'}{x:.2f},{y:.2f}")
        parts.append("".join(cmds))
    return "".join(parts)


def path_from_polygon(poly_arcs, decoded):
    parts = []
    for ring in poly_arcs:
        pts = ring_from_arcs(ring, decoded)
        chains = split_projected_ring(pts)
        part = path_from_chains(chains)
        if part:
            parts.append(part)
    return "".join(parts)


def main():
    with urllib.request.urlopen(SOURCE, timeout=60) as response:
        topo = json.loads(response.read().decode("utf-8"))
    scale = topo["transform"]["scale"]
    translate = topo["transform"]["translate"]
    decoded = [decode_arc(a, scale, translate) for a in topo["arcs"]]
    land = topo["objects"]["land"]["geometries"][0]
    assert land["type"] == "MultiPolygon"
    paths = [path_from_polygon(poly, decoded) for poly in land["arcs"]]
    d_all = "".join(p for p in paths if p)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
        'fill="none" stroke="currentColor" stroke-width="1.4" '
        'stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">\n'
        f'  <path d="{d_all}"/>\n'
        "</svg>\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
