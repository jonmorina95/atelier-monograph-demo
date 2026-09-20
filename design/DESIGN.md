# Studio Name — Design System

This implementation is derived from the supplied Google Stitch export and its `Atelier Monograph` design direction. The Stitch export remains in `design/stitch-export/` as reference material.

## Core direction

A contemporary architecture portfolio inspired by Swiss editorial design and architectural monographs. The website should feel like an exhibition catalogue translated to the web: quiet, precise, image-led, and structurally rigorous.

### Non-negotiables

- No rounded corners.
- No gradients.
- No shadows.
- No pill UI.
- No decorative color accents unless the future brand explicitly requires one.
- Use hairline rules and spacing rather than cards/elevation.
- Architectural imagery is the primary visual content.
- Typography provides hierarchy through scale rather than heavy font weight.

## Palette

- Background: `#111213`
- Secondary background: `#171819`
- Primary text: `#F1F0EC`
- Secondary text: `#C4C4C0`
- Muted text: `#949494`
- Structural lines: `#323334`

## Typography

Preferred family: Geist or a comparable neutral grotesque. The repo intentionally does **not** bundle font files. Current fallback uses system sans-serif.

- Display: very large, regular weight, tight tracking.
- Editorial body: light/regular, generous line-height.
- Metadata: 10–11px equivalent, uppercase, +0.16–0.20em tracking.
- Avoid bold weights; use scale and spacing.

## Desktop layout

- Permanent left rail.
- Main content occupies the remaining viewport.
- 12-column visual logic where useful.
- Asymmetric project compositions are encouraged.
- Project detail uses a sticky metadata column and scrolling image/content column.

## Tablet

- Simplify extreme asymmetry.
- Prefer 2-column project layouts.
- Sticky detail metadata may become normal flow when width is constrained.

## Mobile

- Fixed top header replaces the left rail.
- Full-screen menu overlay.
- Mostly one-column project flow.
- Side-by-side image pairs stack vertically.
- Sticky project metadata becomes normal content.
- Avoid hover-only interactions and strong parallax.
- Maintain large typography, but prevent unintended horizontal overflow.
- Touch targets should be at least ~44px tall where practical.

## Motion

- Reveal: opacity + ~24px vertical movement.
- Duration: approximately 700–900ms.
- Sticky architecture: use CSS `position: sticky` before adding JS.
- Parallax: only on desktop and extremely subtle.
- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking.

## Image behavior

- Images use rigid architectural ratios: 16:9, 4:3, 3:4, 4:5.
- Demo images start mostly monochrome and reveal full color on hover for desktop.
- Real project photography should replace demo imagery later.
- Production content should use optimized responsive image formats where possible.

## Content model

Project data currently lives in `src/data/projects.ts` and includes:

- slug
- title
- index
- year
- location
- type
- status
- area
- cover image
- gallery images
- project statement
- body description
- credits
- optional PDF

Adding a project should not require creating a new page component. `src/pages/projects/[slug].astro` handles all project detail pages.

## Guidance for Codex Terra

When modifying the site:

1. Inspect this file first.
2. Inspect relevant Stitch screenshots/export when visual intent is unclear.
3. Reuse existing CSS variables and composition patterns.
4. Do not introduce UI libraries or component kits without a specific need.
5. Preserve the mobile simplification rules.
6. Prefer small, reversible changes.
7. Keep the site fully static unless a real backend requirement appears.
