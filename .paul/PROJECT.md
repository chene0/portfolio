# Project: portfolio

## What This Is

A personal SWE portfolio site showcasing brief about me, a resume download link (via S3 signed URL), skills list, experiences, extracurriculars, projects, awards, contact section, and optionally easter eggs and games. The site already has foundational content and functionality — the focus is on extending the content depth and dramatically elevating the frontend to be highly interactive, creative, and aesthetically impressive.

## Core Value

Visitors get a vivid, impressive sense of who I am as an engineer — through rich content and a highly interactive, memorable experience.

## Current State

| Attribute | Value |
|-----------|-------|
| Version | v1.0 — Phase 4 remaining |
| Status | Active Development |
| Last Updated | 2026-03-13 |

## Requirements

### Validated (Shipped)

- [x] About me section
- [x] Resume download via S3 signed URL
- [x] Skills list (24 skills including TypeScript, Prisma)
- [x] Experiences section with tech stacks
- [x] Extracurriculars section with tech stacks (HtN, UWBlueprint populated)
- [x] Projects section
- [x] Awards section
- [x] Basic frontend structure
- [x] Contact section with nav link (email, GitHub, LinkedIn) — Phase 1
- [x] SkillsComponent scoped per-experience (bug fixed) — Phase 1
- [x] Visual identity overhaul — dramatic aesthetic upgrade — Phase 2
- [x] Highly interactive UI/UX (animations, creative layouts) — Phase 3
- [x] Expandable/animated experience card details (tech stacks + descriptions) — Phase 3
- [x] Framer Motion tab transitions and staggered entrances — Phase 3
- [x] Skills categorized into labeled groups — Phase 3
- [x] About panel redesigned with real bio content — Phase 3

### Active (In Progress)

- [ ] Easter eggs and/or games — Phase 4

### Planned (Next)

- [ ] Cursor flashlight effect (deferred idea — card borders revealed near cursor via radial gradient)

### Out of Scope

- Backend beyond S3 signed URL — static/serverless only
- Auth or user accounts

## Target Users

**Primary:** Recruiters, hiring managers, and fellow engineers visiting the portfolio
- Want to quickly assess technical depth and personality
- Value polish and creativity as signals of frontend/product craft
- May spend 1–5 minutes on the site

## Key Decisions

| Date | Decision | Phase | Impact |
|------|----------|-------|--------|
| 2026-03-12 | DaisyUI removed — pure Tailwind + CSS custom properties | 2 | Complete design freedom |
| 2026-03-12 | Contact section inline in page.tsx (no new component) | 1 | Simpler architecture |
| 2026-03-13 | ScrollableSection: all panels use chevron scroll UI, no browser scrollbar | 3 | Consistent scroll UX |
| 2026-03-13 | Experience cards: click-to-expand (not hover) — hover bad on scrollable list | 3 | Better mobile + desktop UX |
| 2026-03-13 | Multiple cards expandable simultaneously — comparison use case | 3 | Natural portfolio browsing |
| 2026-03-13 | Awards: scroll-triggered stagger (useInView) — not visible on tab mount | 3 | Animation fires when meaningful |
| 2026-03-13 | Image shimmer skeleton on project cards — prevents load flicker | 3 | Polished perceived performance |

## Specialized Flows

See: .paul/SPECIAL-FLOWS.md

Quick Reference:
- typescript-expert → TypeScript, type errors, build config
- react-expert → React components, hooks, state, performance

## Constraints

### Technical Constraints
- lucide-react not installed — use inline SVGs or react-icons for icons
- react-expert / typescript-expert skills not available in this env (use override)

### Business Constraints
- Personal project — no budget constraints beyond hosting costs

---
*PROJECT.md — Updated when requirements or context change*
*Last updated: 2026-03-13 after Phase 3*
