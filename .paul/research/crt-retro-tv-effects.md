# Research: CRT / Retro TV Screen Effects for Web
**Date:** 2026-03-13
**Agent:** general-purpose (web research)
**Inspiration:** Nightrunners prologue loading screen — heavy CRT aesthetic, content still readable

---

## Architecture: The Layering Model

Single `<div className="crt-overlay">` in `layout.tsx` — `position: fixed; inset: 0; pointer-events: none`.

```
z-index stack (top → bottom):
  [12] film grain            — fixed, pointer-events: none
  [11] moving scan line      — fixed, pointer-events: none
  [10] scanlines             — fixed, pointer-events: none
  [9]  vignette              — fixed, pointer-events: none
  [8]  color tint            — fixed, pointer-events: none
  [2]  page content          — normal flow
```

One hidden `<svg>` with filter defs placed once in layout.

---

## Effect-by-Effect

### Scanlines — CSS-only, trivial, very low perf
```css
.crt-overlay::before {
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px, transparent 2px,
    rgba(0, 0, 0, 0.08) 2px, rgba(0, 0, 0, 0.08) 4px
  );
}
```
Keep alpha at `0.05–0.10` for readability. 4px pitch = fine, 6px = coarser vintage.

### Moving Scan Line — CSS-only, very low perf
```css
@keyframes scan-move {
  from { transform: translateY(-100%); }
  to   { transform: translateY(100vh); }
}
/* 2–4px tall band, opacity 0.03–0.06, duration 10–12s linear infinite */
```
Use `transform` (not `top`) for GPU compositing.

### Vignette — CSS-only, trivial, very low perf
```css
background: radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.45) 100%);
```
For CRT bezel feel: add `border-radius: 2–4%` on the screen content wrapper + `box-shadow: inset`.

### Film Grain — SVG feTurbulence + translate jitter, medium perf
```html
<svg style="position:absolute;width:0;height:0">
  <filter id="grain">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
    <feBlend in="SourceGraphic" mode="overlay"/>
  </filter>
</svg>
```
```css
.crt-grain {
  filter: url(#grain);
  opacity: 0.06–0.10;
  animation: grain-jitter 0.15s steps(1) infinite;
  will-change: transform;
}
@keyframes grain-jitter {
  0%  { transform: translate(0, 0);    }
  20% { transform: translate(-2%, -3%); }
  40% { transform: translate(3%, 1%);  }
  /* 8–10 steps total */
}
```
Render once, jitter position via GPU transform. `numOctaves: 2–3`, `baseFrequency: 0.5–0.75`.
Use `mix-blend-mode: overlay` for natural integration.

### Flicker — CSS-only, very low perf
```css
@keyframes crt-flicker {
  0%, 10%, 94%, 100% { opacity: 1; }
  5%  { opacity: 0.97; }
  93% { opacity: 0.96; }
}
/* animation-timing-function: steps(1) for digital feel */
```
Very few frames deviate from 1.0 — subliminal, not visible.

### Color Tint — CSS-only, trivial
```css
background: rgba(0, 255, 70, 0.02); /* green phosphor */
mix-blend-mode: multiply;
```
Or amber: `rgba(255, 180, 0, 0.03)`. Keep at `0.01–0.03`. Headings only for RGB fringing.

### Barrel Distortion — NOT achievable in pure CSS
CSS transforms are affine-only (no non-linear warping). Options:
- **Fake (recommended):** `border-radius: 3%` + `perspective` + `box-shadow: inset` on wrapper
- **SVG feDisplacementMap:** Closest non-WebGL option but produces wave distortion, not true barrel geometry. Needs JS to generate displacement map. ([Johan Beronius CodePen](https://codepen.io/johanberonius/pen/RopjYW))
- **WebGL:** True barrel math, best quality, most complex

---

## Performance Table

| Effect | Method | Perf | GPU? |
|--------|--------|------|------|
| Scanlines | `repeating-linear-gradient` | Very low | Yes (once) |
| Moving scan line | `translateY` animation | Very low | Yes |
| Vignette | `radial-gradient` | Very low | Yes (once) |
| Flicker | `opacity` animation | Low | Yes |
| Color tint | Static rgba overlay | Very low | Yes (once) |
| Film grain | SVG feTurbulence + jitter | Medium | Partial |
| Barrel (SVG) | `feDisplacementMap` | Med–High | No (CPU) |
| Barrel (WebGL) | WebGL | Medium | Yes |

---

## Recommended for Portfolio (Readability Preserved)

| Effect | Include? | Setting |
|--------|----------|---------|
| Scanlines | ✅ Yes | `rgba(0,0,0,0.07)`, 4px pitch |
| Vignette | ✅ Yes | `rgba(0,0,0,0.4)` at edges |
| Moving scan line | ✅ Yes | `opacity: 0.04`, 10s duration |
| Film grain | ✅ Yes | `opacity: 0.08`, translate jitter |
| Flicker | ✅ Subtle | `0.96–1.0` range only |
| Color tint | Optional | Green `0.015` or amber `0.02` |
| RGB fringing | Headings only | Skip body text |
| Barrel distortion | ❌ Fake only | border-radius + inner shadow |

**Reduced motion:** Always wrap animations in `@media (prefers-reduced-motion: reduce) { animation: none }`.

---

## Implementation Path for Next.js 14

1. `src/components/crt-overlay.tsx` — client component, renders hidden SVG + overlay div
2. Add to `src/app/layout.tsx`
3. All CSS in `src/app/globals.css` under a `.crt-*` namespace
4. One `CRTOverlay` component controls all effects via props or CSS vars for easy tuning

## Existing Libraries
- `vault66-crt-effect` — React component, has scanlines + sweep + glow, customizable
- `D3nn7/crt-css` — pure CSS, lightweight
- `lmas GitHub gist` — scanlines + flicker + color separation

---

*Research saved: 2026-03-13*
