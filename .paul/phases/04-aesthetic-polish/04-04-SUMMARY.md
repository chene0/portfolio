---
phase: 04-aesthetic-polish
plan: 04
subsystem: ui
tags: [react, svg, animation, about, streetlamps, visual]

requires:
  - phase: 04-aesthetic-polish
    provides: CRT overlay, heading effects, About bio from 04-01 through 04-03

provides:
  - Static SVG streetlamp scene on About panel RHS at xl+ viewports
  - Atmospheric glow bleeding across full About panel

affects: []

tech-stack:
  added: []
  patterns:
    - "feGaussianBlur on colored ellipses for SVG glow (radial gradients broken in this context)"
    - "Absolute-positioned SVG overlay with z-index layering for full-panel glow bleed"

key-files:
  created: [src/components/streetlamps.tsx]
  modified: [src/app/page.tsx]

key-decisions:
  - "feGaussianBlur filters instead of radial gradients — gradients (both rgba() stopColor and objectBoundingBox) render as transparent in this SVG context"
  - "SVG absolute inset-0 over full AboutPanel instead of right flex column — allows glow to bleed across bio text area"
  - "Lamp orientation mirrored from plan: closest on right (cx=240), farthest on left (cx=30) — user requested"
  - "linearGradient on pole abandoned (fill url() broken); solid fill=#1e1e26 opacity=0.55 used instead"
  - "viewBox 0 0 350 720 with poleBaseY=720 — towers from near-top to bottom, headY=70"

patterns-established:
  - "SVG glow: use feGaussianBlur on colored ellipses, NOT radial gradients (unreliable in Next.js/React SVG context)"

duration: ~60min
started: 2026-03-17T00:00:00Z
completed: 2026-03-17T01:00:00Z
---

# Phase 4 Plan 04: Streetlamp Scene Summary

**Atmospheric SVG streetlamp scene on About panel — 4 perspective-scaled lamps with feGaussianBlur glow bleeding across full panel at xl+ viewports.**

## Performance

| Metric | Value |
|--------|-------|
| Duration | ~60 min |
| Started | 2026-03-17 |
| Completed | 2026-03-17 |
| Tasks | 2 completed + human verify |
| Files modified | 2 |

## Acceptance Criteria Results

| Criterion | Status | Notes |
|-----------|--------|-------|
| AC-1: Scene visible only at xl+ | Pass | `hidden xl:block absolute inset-0` |
| AC-2: 4 lamps receding in perspective | Pass | cx=240/120/64/30, headY=70/288/422/502, opacity=1.0/0.76/0.53/0.34 |
| AC-3: Atmospheric glow per lamp | Pass | 6 blur layers per lamp: far-field haze, downward cone, outer halo, inner halo×2, core bloom×2 |
| AC-4: Bio content layout unaffected | Pass | Bio is relative z-10, SVG is absolute pointer-events-none behind it |

## Accomplishments

- Created `src/components/streetlamps.tsx` with 4 perspective-scaled lamps using 5 feGaussianBlur levels (stdDev 8/18/35/60/90)
- SVG absolutely positioned over full AboutPanel (inset-0), glow bleeds across bio content area
- Solved SVG gradient rendering failures — switched to feGaussianBlur on colored ellipses (reliable technique)
- Poles visible as dark silhouettes: solid fill + opacity (gradient fill references broken)
- User-approved visual: towering perspective, atmospheric glow, closest lamp on right

## Files Created/Modified

| File | Change | Purpose |
|------|--------|---------|
| `src/components/streetlamps.tsx` | Created | SVG streetlamp scene with glow effects |
| `src/app/page.tsx` | Modified | AboutPanel restructured: SVG absolute overlay, bio z-10 |

## Decisions Made

| Decision | Rationale | Impact |
|----------|-----------|--------|
| feGaussianBlur over radial gradients | `stopColor="rgba()"` ignored by browser; `objectBoundingBox` gradients also broken | Established SVG glow pattern for project |
| SVG absolute inset-0 (not right flex column) | Right-column clip prevented glow from bleeding into bio area | Glow reaches full panel width |
| Lamps mirrored (closest right, farthest left) | User preference — matches reference image orientation | cx order: 240, 120, 64, 30 |
| Solid pole fill (not linearGradient) | `fill="url(#gradient)"` on rect rendered invisible | Poles now visible as dark silhouettes |

## Deviations from Plan

### Summary

| Type | Count | Impact |
|------|-------|--------|
| Auto-fixed | 4 | Essential — plan's SVG approach was broken |
| Scope additions | 0 | None |
| Deferred | 0 | None |

**Total impact:** Required approach pivots — plan's radial gradient and flex-column layout approaches were non-functional.

### Auto-fixed Issues

**1. SVG stopColor rgba() broken**
- **Found during:** Task 1 (StreetlampsScene component)
- **Issue:** `stopColor="rgba(R,G,B,A)"` completely ignored; gradients rendered as opaque black or transparent
- **Fix:** `stopColor="#hexcolor" stopOpacity={number}` on every stop
- **Files:** `src/components/streetlamps.tsx`

**2. radialGradient objectBoundingBox broken**
- **Found during:** Task 1, debugging after rgba() fix
- **Issue:** Even with correct stopColor, radialGradient fills remained invisible
- **Fix:** Abandoned gradients entirely; switched to feGaussianBlur on colored ellipses
- **Files:** `src/components/streetlamps.tsx`

**3. linearGradient pole fill broken**
- **Found during:** Task 1 — pole invisible after initial render
- **Issue:** `fill="url(#sl-pole-fade)"` on rect rendered as invisible
- **Fix:** `fill="#1e1e26" opacity={0.55}` directly on element
- **Files:** `src/components/streetlamps.tsx`

**4. Glow clipped by right-column flex container**
- **Found during:** Task 2 integration + user feedback
- **Issue:** SVG inside right flex div; overflow:hidden clipped all blur glow to right column only
- **Fix:** SVG repositioned as `absolute inset-0` over full AboutPanel; bio content `relative z-10`
- **Files:** `src/app/page.tsx`

## Issues Encountered

| Issue | Resolution |
|-------|------------|
| SVG gradient rendering failures (3 variants) | Switched to feGaussianBlur on colored ellipses — reliable cross-browser technique |
| Glow clipped to right panel half | Absolute positioning over full panel |
| Lamps too short initially | headY=70 (near top), poleBaseY=720 (full height) for towering perspective |
| Wrong lamp orientation (closest left) | Mirrored cx values: 30→240 closest becomes rightmost |

## Next Phase Readiness

**Ready:**
- Streetlamp scene foundation ready for animation (flicker, click-toggle)
- User explicitly requested: flicker on closest lamp + click-to-toggle each lamp on/off
- SVG structure supports these: lamps are individual `<g>` elements with opacity, heads are separate `<rect>` elements

**Concerns:**
- `'use client'` needed in streetlamps.tsx when adding animation hooks
- Flicker should be subtle — reference CRT overlay decision (full flicker was distracting, removed)

**Blockers:**
- None

---
*Phase: 04-aesthetic-polish, Plan: 04*
*Completed: 2026-03-17*
