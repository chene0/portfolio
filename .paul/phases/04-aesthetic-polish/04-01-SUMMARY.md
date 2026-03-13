---
phase: 04-aesthetic-polish
plan: 01
subsystem: ui
tags: [css, tailwind, framer-motion, cursor-effect, pseudo-elements]

requires:
  - phase: 03-animation-interactivity
    provides: experience cards (click-to-expand) and project cards (shimmer, stagger) to apply flashlight to

provides:
  - Cursor flashlight border effect on experience and project cards
  - .flashlight-card CSS class (reusable for future aesthetic plans)

affects: []

tech-stack:
  added: []
  patterns:
    - "::before for gradient layer, ::after for interior cover — border-only glow pattern"
    - "Per-card CSS var injection via querySelectorAll for correct coordinate space"

key-files:
  created: []
  modified:
    - src/app/globals.css
    - src/app/page.tsx
    - src/components/experiences/experience.tsx
    - src/components/projects.tsx

key-decisions:
  - "Set --mouse-x/y per card (not on <main>) — each card needs coords relative to its own origin"
  - "::after with background:inherit covers interior — leaves only 1px ::before edge visible"

patterns-established:
  - "Flashlight border: ::before (gradient, inset:-1px, z-index:0) + ::after (solid fill, inset:0, z-index:1) + children (z-index:2)"

duration: ~30min
started: 2026-03-13T00:00:00Z
completed: 2026-03-13T00:30:00Z
---

# Phase 4 Plan 01: Cursor Flashlight Effect — Summary

**Cursor-proximity border glow on experience and project cards via CSS radial gradient + per-card CSS custom property injection.**

## Performance

| Metric | Value |
|--------|-------|
| Duration | ~30 min |
| Started | 2026-03-13 |
| Completed | 2026-03-13 |
| Tasks | 2 auto + 1 human-verify completed |
| Files modified | 4 |

## Acceptance Criteria Results

| Criterion | Status | Notes |
|-----------|--------|-------|
| AC-1: Cards Dark by Default | Pass | No border visible until cursor approaches |
| AC-2: Flashlight Reveals Border Near Cursor | Pass | Soft radial glow tracks cursor per-card independently |
| AC-3: Effect is Desktop-Only | Pass | Mobile media query adds static 1px border fallback |
| AC-4: No Interference with Card Interactions | Pass | Expand/collapse, hover lift, links all unaffected |

## Accomplishments

- `.flashlight-card` CSS class created — reusable for future Phase 4 plans
- Per-card mouse coordinate injection via `querySelectorAll` — each card's glow tracks independently
- Border-only glow achieved via `::after` interior cover pattern — interior stays solid, only 1px edge glows

## Files Created/Modified

| File | Change | Purpose |
|------|--------|---------|
| `src/app/globals.css` | Modified | Added `.flashlight-card`, `::before` (gradient), `::after` (interior cover), mobile fallback |
| `src/app/page.tsx` | Modified | `onMouseMove` on desktop `<main>` — sets CSS vars per card via `querySelectorAll` |
| `src/components/experiences/experience.tsx` | Modified | Removed static border classes, added `flashlight-card bg-bg` to root div |
| `src/components/projects.tsx` | Modified | Replaced `border border-border` with `flashlight-card` on `motion.li` |

## Decisions Made

| Decision | Rationale | Impact |
|----------|-----------|--------|
| Set `--mouse-x/y` per card, not on `<main>` | Panel-relative coords misalign: each card's `::before` interprets vars relative to its own origin, not the panel | All cards track cursor independently |
| `::after` with `background: inherit` covers interior | `::before` at z-index:0 renders above card's own background — card bg alone can't mask it | Clean border-only glow; works for both `bg-bg` (experience) and `bg-bg-raised` (project) without hardcoding colors |
| `bg-bg` added to experience card root div | Provides the background for `::after` to inherit — experience cards had no background class | Interior is opaque, gradient only shows at 1px edge |

## Deviations from Plan

### Summary

| Type | Count | Impact |
|------|-------|--------|
| Auto-fixed | 2 | Essential correctness fixes, no scope creep |
| Scope additions | 0 | — |
| Deferred | 0 | — |

**Total impact:** Two bugs found post-apply, both essential to correct behavior — fixed before UNIFY.

### Auto-fixed Issues

**1. Coordinate Space Bug — all cards mirroring first card's glow**
- **Found during:** Human-verify checkpoint
- **Issue:** Plan set `--mouse-x/y` on `<main>` (panel-relative). Each card's `::before` interprets these coords relative to its own top-left — only the first card (near panel origin) tracked correctly.
- **Fix:** `querySelectorAll('.flashlight-card')` in `onMouseMove`, compute `getBoundingClientRect()` per card, set vars on each card element individually.
- **Files:** `src/app/page.tsx`

**2. Interior Gradient Bleed — full card area glowing, not just border**
- **Found during:** Human-verify checkpoint
- **Issue:** `::before` (z-index: 0) renders above the card element's own background. Adding `bg-bg` to the card can't cover it — `::before` is painted on top.
- **Fix:** Added `::after` (z-index: 1, `inset: 0`, `background: inherit`) to cover the card interior; bumped `> *` to z-index: 2. `bg-bg` left on experience card to provide the inheritable background value.
- **Files:** `src/app/globals.css`, `src/components/experiences/experience.tsx`

## Next Phase Readiness

**Ready:**
- Phase 4 complete — v1.0 milestone reached
- `.flashlight-card` class is reusable for any future cards
- Codebase is clean, build passes

**Concerns:**
- Phase 4 is open-ended by design — user provides aesthetic ideas per-plan; no further plans defined yet

**Blockers:**
- None

---
*Phase: 04-aesthetic-polish, Plan: 01*
*Completed: 2026-03-13*
