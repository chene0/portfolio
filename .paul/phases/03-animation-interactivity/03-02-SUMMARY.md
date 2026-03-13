---
phase: 03-animation-interactivity
plan: 02
subsystem: ui
tags: [react, framer-motion, animation, accordion, experience-cards]

requires:
  - phase: 03-animation-interactivity/03-01
    provides: ScrollableSection component, overflow-isolated desktop layout

provides:
  - Expandable experience cards with Framer Motion AnimatePresence
  - Descriptions on all 6 experience/extracurricular entries
  - Card border + hover treatment communicating clickable region
  - ScrollableSection applied to WorkPanel and ProjectsPanel

affects: [03-03-transitions-animations]

tech-stack:
  added: []
  patterns:
    - "Expandable card: useState toggle + AnimatePresence height:0→auto + opacity + overflow-hidden"
    - "Chevron rotation: motion.div animate={{ rotate: isOpen ? 180 : 0 }}"
    - "Card border affordance: border-border/60 rounded-xl p-5, brightens on hover"

key-files:
  created: []
  modified:
    - src/content/portfolio.ts
    - src/components/experiences/experience.tsx
    - src/app/page.tsx

key-decisions:
  - "Inline SVG chevron used — lucide-react not in package.json"
  - "6 descriptions added (plan said 4 — HTN and Blueprint also lacked them)"
  - "Multiple open cards allowed — single-expand wrong for portfolio comparison use case"
  - "Chevron stays right-aligned — standard accordion pattern, left hierarchy uninterrupted"
  - "Emojis removed from location — out of place aesthetically"
  - "ScrollableSection extended to Work + Projects panels (user-requested during checkpoint)"
  - "ResizeObserver added to ScrollableSection — updates chevrons when card content changes height"

patterns-established:
  - "Experience card: full card is clickable (cursor-pointer on root div), company link stops propagation"
  - "Location format: 'City, Province · Type' (dot separator, no emoji)"

duration: ~30min
started: 2026-03-13T00:00:00Z
completed: 2026-03-13T00:00:00Z
---

# Phase 3 Plan 02: Expandable Experience Cards — Summary

**Experience cards made expandable with Framer Motion; descriptions added to all 6 entries; card borders + ScrollableSection extended to all scrollable panels.**

## Performance

| Metric | Value |
|--------|-------|
| Duration | ~30 min |
| Started | 2026-03-13 |
| Completed | 2026-03-13 |
| Tasks | 2 auto + 1 human-verify completed |
| Files modified | 3 |

## Acceptance Criteria Results

| Criterion | Status | Notes |
|-----------|--------|-------|
| AC-1: Compact Default View | Pass | All cards start collapsed — only logo/role/company/dates/chevron visible |
| AC-2: Expand on Click | Pass | AnimatePresence height 0→auto, opacity 0→1, 250ms easeInOut; chevron rotates 180° |
| AC-3: Collapse on Click | Pass | Same animation reversed; chevron returns to 0° |
| AC-4: All Cards Have Descriptions | Pass | All 6 entries have descriptions (2 experiences + 4 extracurriculars) |

## Accomplishments

- Expandable card pattern implemented: Framer Motion AnimatePresence with height/opacity animation, 250ms ease
- Descriptions added to all 6 entries — plan specified 4, HTN and Blueprint also discovered missing
- Card border treatment added: `border-border/60 rounded-xl p-5`, brightens on hover — communicates clickable region
- ScrollableSection extended to WorkPanel and ProjectsPanel — no more browser scrollbar in any panel
- ResizeObserver added to ScrollableSection — chevron indicators update correctly when cards expand/collapse
- Emojis removed from location display; format changed to `City · Type`
- Build clean

## Task Commits

| Task | Commit | Type | Description |
|------|--------|------|-------------|
| Task 1: Add descriptions | (uncommitted) | feat | Descriptions added to all 6 entries in portfolio.ts |
| Task 2: Expandable cards | (uncommitted) | feat | experience.tsx rewritten with Framer Motion accordion |
| Scope additions | (uncommitted) | feat | ScrollableSection extended, card borders, emoji removal |

## Files Created/Modified

| File | Change | Purpose |
|------|--------|---------|
| `src/content/portfolio.ts` | Modified | Descriptions added to 6 experience/extracurricular entries |
| `src/components/experiences/experience.tsx` | Modified | Full rewrite — expandable card with Framer Motion |
| `src/app/page.tsx` | Modified | ScrollableSection on Work+Projects; ResizeObserver in ScrollableSection |

## Decisions Made

| Decision | Rationale | Impact |
|----------|-----------|--------|
| Inline SVG chevron | lucide-react not installed | No dependency added; SVG is equivalent |
| 6 descriptions (not 4) | HTN and UW Blueprint also had no description field | All cards have content when expanded |
| Multiple cards expandable | Portfolio use case — users compare experiences | No single-expand logic needed |
| Chevron right-aligned | Standard accordion UX; left text hierarchy uninterrupted | Clean visual separation of content vs control |
| Card borders added | User-requested — communicates clickable region | Faint `border-border/60`, brightens on hover |
| ScrollableSection extended | User-requested — native scrollbar out of place on Work/Projects | Consistent scroll UX across all panels |
| ResizeObserver in ScrollableSection | Required for chevron state correctness after card expand | Scroll indicators stay accurate without user scrolling |

## Deviations from Plan

### Summary

| Type | Count | Impact |
|------|-------|--------|
| Auto-fixed | 1 | Inline SVG instead of lucide-react |
| Scope additions | 4 | User-requested during checkpoint |
| Deferred | 0 | — |

**Total impact:** One auto-fix (no lucide-react). Four scope additions all user-requested at checkpoint — all directly improving the Work panel experience.

### Auto-fixed: lucide-react unavailable
- **Found during:** Task 2
- **Issue:** `lucide-react` not in package.json
- **Fix:** Inline SVG `<polyline points="6 9 12 15 18 9" />` — identical appearance
- **Verification:** Build clean, chevron renders correctly

### Scope Additions (user-requested at checkpoint)
1. **Emojis removed** from location — `getLocationTypeIcon` function removed, format changed to `Location · Type`
2. **Card borders** — `border border-border/60 rounded-xl p-5 hover:border-border` added to Experience root div
3. **ScrollableSection on Work + Projects** — WorkPanel and ProjectsPanel converted from `overflow-y-auto` div to ScrollableSection
4. **ResizeObserver in ScrollableSection** — watches content div height changes, updates chevron visibility

## Issues Encountered

| Issue | Resolution |
|-------|-----------|
| None | — |

## Next Phase Readiness

**Ready:**
- Framer Motion is imported and in use — 03-03 can add tab transitions and stagger animations without new setup
- All panels use ScrollableSection — consistent scroll behavior throughout
- Experience card structure established — 03-03 hover lift can be added to the card root div

**Concerns:**
- Descriptions are placeholders — should be replaced with real content before launch
- Cursor flashlight effect (deferred idea) would require removing the static `border-border/60` and switching to a dynamic CSS approach

**Blockers:**
- None — 03-03 (tab transitions + stagger + hover lift) is unblocked

---
*Phase: 03-animation-interactivity, Plan: 02*
*Completed: 2026-03-13*
