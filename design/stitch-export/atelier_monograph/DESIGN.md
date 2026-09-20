---
name: Atelier Monograph
colors:
  surface: '#121314'
  surface-dim: '#121314'
  surface-bright: '#38393a'
  surface-container-lowest: '#0d0e0f'
  surface-container-low: '#1b1c1d'
  surface-container: '#1f2021'
  surface-container-high: '#292a2b'
  surface-container-highest: '#343536'
  on-surface: '#e3e2e3'
  on-surface-variant: '#c5c7c1'
  inverse-surface: '#e3e2e3'
  inverse-on-surface: '#303031'
  outline: '#8f918c'
  outline-variant: '#454843'
  surface-tint: '#c7c6c3'
  primary: '#ffffff'
  on-primary: '#30312e'
  primary-container: '#e3e2df'
  on-primary-container: '#646562'
  inverse-primary: '#5e5f5c'
  secondary: '#c7c7c3'
  on-secondary: '#2f312e'
  secondary-container: '#484946'
  on-secondary-container: '#b8b9b5'
  tertiary: '#ffffff'
  on-tertiary: '#342f30'
  tertiary-container: '#e9e0e0'
  on-tertiary-container: '#696363'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e3e2df'
  primary-fixed-dim: '#c7c6c3'
  on-primary-fixed: '#1b1c1a'
  on-primary-fixed-variant: '#464744'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c7c7c3'
  on-secondary-fixed: '#1a1c1a'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#e9e0e0'
  tertiary-fixed-dim: '#cdc5c5'
  on-tertiary-fixed: '#1e1b1b'
  on-tertiary-fixed-variant: '#4a4646'
  background: '#121314'
  on-background: '#e3e2e3'
  surface-variant: '#343536'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 8rem
    fontWeight: '400'
    lineHeight: 7.5rem
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 3.5rem
    fontWeight: '400'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Geist
    fontSize: 4.5rem
    fontWeight: '400'
    lineHeight: 4.5rem
    letterSpacing: -0.035em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '400'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2.5rem
    fontWeight: '400'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Geist
    fontSize: 1.75rem
    fontWeight: '400'
    lineHeight: 2rem
    letterSpacing: -0.02em
  body-editorial:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '300'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-default:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-compact:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  meta-uppercase:
    fontFamily: Geist
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.18em
  meta-tabular:
    fontFamily: Geist
    fontSize: 0.625rem
    fontWeight: '400'
    lineHeight: 0.875rem
    letterSpacing: 0.2em
spacing:
  gutter: 1px
  gutter-loose: 2rem
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.5rem
  space-lg: 3rem
  space-xl: 6rem
---

## Brand & Style

This design system embodies the austere, uncompromising precision of Swiss modernist typography and architectural monograph publishing. Engineered for a contemporary European architecture practice, the aesthetic treats the viewport not as an application canvas, but as an exhibition vitrine and architectural folio.

### Emotional Demeanor
- **Austerity over decoration:** Every element must justify its existence through structural necessity or typographic function.
- **Architectural quietude:** The atmosphere is contemplative, disciplined, and measured. Negative space is not empty space—it is constructed void, mirroring physical volume.
- **Monographic rigor:** Information behaves like printed portfolio indices, elevations, and tectonic specifications rather than interactive software widgets.

### Stylistic Directives
- Draw directly from the International Typographic Style (Swiss Style), mid-century architectural documentation, and contemporary European editorial monographs.
- Reject all commercial web tropes: zero soft shadows, zero pill badges, zero decorative gradients, zero rounded corners.
- Treat hairline dividers as structural load-bearing datums that organize asymmetric multi-column fields.
- Prioritize high-resolution architectural documentation—photography, axonometric line drawings, sectional diagrams—letting rich visuals inhabit rigid typographic frameworks.

## Colors

The palette is strictly restrained, anchored in deep carbon fundamentals and unbleached mineral off-whites. It rejects saturated accents entirely; visual hierarchy is achieved solely through value differentiation, optical weight, and typographic scale.

### Core Color Roles
- **Base Canvas (`#111213`):** An architectural near-black providing an infinite, light-absorbing ground for monochrome and duotone project imagery.
- **Surface Elevation (`#171819`):** A secondary dark ground for plan drawers, technical drawers, and contextual toolbars.
- **Primary Ink (`#F1F0EC`):** An unbleached chalk off-white providing maximum legible contrast without the clinical glare of pure `#FFFFFF`.
- **Secondary Ink / Architectural Accent (`#C4C4C0`):** A muted limestone off-white for secondary editorial text, section indexes, and active state indicators.
- **Muted Ink (`#949494`):** A neutral gray calibrated specifically for tabular annotations, drawing indices, and metadata captions.
- **Structural Hairline (`#323334`):** A razor-thin, low-contrast boundary line used to demarcate layout columns, modular framing, and data tables.

### Interactive States
- Interactive states do not shift hue. They toggle between `#949494`, `#C4C4C0`, and `#F1F0EC`, or execute stark inverted fills (`#F1F0EC` background with `#111213` foreground).

## Typography

The typography leverages **Geist** to establish the clarity and geometric neutrality of modernist Swiss grotesques. The typographic hierarchy relies on radical, polar scale contrast: massive, tightly tracked titling set directly adjacent to microscopic, wide-spaced tabular metadata.

### Typographic Principles
- **Extreme Editorial Contrast:** Jump immediately from `display-hero` (up to 8rem) down to `meta-tabular` (10px) to evoke architectural scale drawings where vast structural plans sit beside delicate coordinate tables.
- **Tight Large Display:** Large display headlines utilize negative letter-spacing and crisp leading to feel chiseled, compact, and monument-like.
- **Tabular Rigor:** All labels, project parameters, drawing scales, site coordinates, and navigational elements must be set in uppercase with tracking between `+0.18em` and `+0.2em`. Tabular numbers (`tnum`) should be enabled across all specifications.
- **Weight Restraint:** Limit weights strictly to `300` (Light), `400` (Regular), and `500` (Medium). Never use bold or heavy weights; structural dominance is achieved through physical scale and grid placement, not stroke thickness.

## Layout & Spacing

The layout is derived from classic Swiss modular grids and tectonic planning. The grid is visibly articulated rather than hidden: column boundaries are frequently etched using hairline border rules (`#323334`).

### Grid Architecture
- **Desktop (1200px+):** A 12-column asymmetric grid. Standard layout uses a permanent 3-column sticky left rail for monograph project metadata and index numbers, with the remaining 9 columns dedicated to large-format visual plates, floor plans, and critical essays.
- **Tablet (768px - 1199px):** A 6-column grid where project indices become fixed horizontal ribbons across the top of sections.
- **Mobile (<768px):** A single-column or 2-column continuous vertical feed with strict 1px horizontal splitters dividing project blocks.

### The 1px Hairline Gutter System
In editorial grid matrices (such as project indices or photo plates), gutters are configured to `1px` using the divider border `#323334` as the separator. Content cells snap directly edge-to-edge against these dividers, mimicking the technical drafts of architectural blueprints.

### Vertical Rhythm
Vertical rhythm operates on two extremes: rapid, compact succession in tabular specifications (`space-xs` to `space-sm`), contrasted against sweeping, dramatic voids (`space-xl` / 6rem) separating distinct monograph studies.

## Elevation & Depth

This design system categorically excludes drop shadows, ambient blurs, neomorphic bevels, and atmospheric depth. Elevation is purely two-dimensional, structural, and graphic.

### Elevation Mechanisms
1. **Planar Hierarchy:** Depth is created exclusively by placing content across discrete planar fields:
   - Level 0 (Base Canvas): `#111213`
   - Level 1 (Drawer / Inset Surface): `#171819`
   - Level 2 (Selected High-Contrast Block): `#F1F0EC` (text inverted to `#111213`)
2. **Hairline Delimitation:** Surfaces are never separated by shadows; they are partitioned by 1px solid borders (`#323334`).
3. **Z-Index Layering:** Modals, drawing viewers, and architectural lightboxes act as full-screen planar shutters that snap over the interface with instant or linear precision. No backdrop blur (frosted glass) is permitted; use opaque `#111213` or crisp 95% black without diffusion.

## Shapes

The geometric philosophy is strictly Cartesian: sharp, crystalline, and unyielding.

### Shape Directives
- **Zero Border Radius:** Every element—buttons, visual viewports, text inputs, hover cards, sticky indices, and image wrappers—must maintain `border-radius: 0px` (`rounded-none`).
- **Precision Ratios:** Image frames and architectural drawings must conform to rigid aspect ratios (1:1 square, 4:3 technical, 16:9 cinematic, or 3:2 exhibition format).
- **Hairline Tectonics:** All borders have a thickness of exactly `1px`. No heavy 2px or 3px brutalist outlines; the precision must mirror technical drafting pens (0.13mm / 0.18mm isographs).

## Components

### Buttons
- **Primary:** Razor-sharp rectangle. Canvas filled with `#F1F0EC`, text set in `meta-uppercase` at `#111213`. No shadows. Hover state: canvas switches to `#C4C4C0`.
- **Secondary / Outlined:** Canvas transparent, 1px border `#323334`, text `#F1F0EC` in `meta-uppercase`. Hover state: border color promotes to `#F1F0EC`, background shifts to `#171819`.
- **Ghost Action:** No borders or fills. Text set in `meta-uppercase` (`#949494`), preceded by a technical index prefix (e.g., `[ 01 ] VIEW AXONOMETRIC`). Hover state: text color becomes `#F1F0EC`.

### Project Index & Cards
- Reject the card metaphor. Projects are displayed as either:
  1. **Monograph Plate:** Full-width or half-width edge-to-edge imagery bounded by a 1px `#323334` perimeter, accompanied by an architectural caption block underneath with title, typology, year, and coordinates.
  2. **Tabular Index Row:** Horizontal line-item layout bounded by 1px top and bottom borders. Columns strictly allocate: Project Number (`meta-tabular`), Title (`headline-md`), Location (`meta-uppercase`), Typology (`meta-uppercase`), and Year (`meta-tabular`). Hover state: entire row shifts background to `#171819`.

### Form Fields & Inputs
- Minimalist architectural baseline inputs: transparent background with only a 1px bottom border `#323334`.
- Labels float permanently above in `meta-uppercase` (`#949494`).
- Focus state: bottom border transforms to `#F1F0EC`. Zero outline halos or glowing borders. Caret color is `#F1F0EC`.

### Checkboxes & Radio Selectors
- **Checkbox:** 12px × 12px square, 0px radius, 1px border `#323334`. When active, filled completely with `#F1F0EC` with no check icon (pure geometric square indicator).
- **Radio Button:** 12px × 12px square (no circular radios), 1px border `#323334`. Active state displays an internal 4px solid square dot of `#F1F0EC`.

### Sticky Architectural Metadata Sidebar
- A fixed vertical rail docked to the grid. Houses persistent studio coordinates, project phase taxonomy, active drawing scale indicators (e.g., `SCALE 1:200 @ A1`), and structural notes.
- Bound along the right margin by a 1px vertical hairline divider spanning from the top header to the footer.

### Drawing Drawer / Modal
- Technical floor plans and sectional drawings are revealed via slide-over planar panels (`#171819`) framed in 1px `#323334`.
- Integrated zoom controls consist of square 32px × 32px bordered buttons bearing monospace symbols (`+`, `-`, `RESTORE`).