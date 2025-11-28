# Release 0.6.0

**Release Date**: November 28, 2025

---

## Feature Slice 6: Homepage Pain & Solution Sections

**Spec Reference**: `website-spec.md` → Page Specifications (Homepage sections 2-3)

**Summary**: Create Pain Agitation and Solution sections showing the problem Lattice solves and how it solves it. These sections follow the Hero and establish the value proposition through problem-solution storytelling.

### Completed Acceptance Criteria

- [x] `PainSection.astro` — "The AI Infrastructure Research Problem"
  - [x] 4 pain points with icons (clock, search, spreadsheet, confusion)
  - [x] Relatable copy for ICP personas
  - [x] Muted background for visual separation
- [x] `SolutionSection.astro` — Three-panel layout preview
  - [x] Visual representation of Sources | Lab | Studio panels
  - [x] Feature highlights for each panel (3 features per panel)
  - [x] Large screenshot placeholder with mock three-panel interface
  - [x] CTA button linking to /features
- [x] Sections added to homepage in correct order (Hero → Pain → Solution)

### Technical Details

**PainSection Component (`src/components/sections/PainSection.astro`)**:
- Muted background for visual contrast from Hero
- Section header with eyebrow, headline, and subhead
- 4-column responsive grid (4 cols desktop, 2 cols tablet, 1 col mobile)
- Pain point cards with:
  - Icon in destructive color (red tint)
  - Title and description
  - Border and hover effects

**Pain Points**:
1. **Weeks of Manual Research** — Time spent gathering vendor data
2. **Scattered Information** — Data across multiple sources
3. **Spreadsheet Hell** — Complex multi-factor comparisons
4. **Stale Recommendations** — Rapidly changing AI landscape

**SolutionSection Component (`src/components/sections/SolutionSection.astro`)**:
- Default background (alternating from Pain section)
- Section header with eyebrow, headline, and subhead
- Desktop: 3-column grid with panel cards
- Mobile: Stacked compact cards with icon and summary
- Large screenshot placeholder with mock interface

**Three Panels**:
1. **Sources** (accent color)
   - Upload PDFs, model cards, pricing pages
   - 36 pre-built vendor blueprint bundles
   - Auto-extract structured data

2. **Lab** (success/green color)
   - AI research agent with citations
   - Thinking steps for transparency
   - Smart prompts for common queries

3. **Studio** (warning/yellow color)
   - Generate comparison tables
   - Export board-ready artifacts
   - Full citation provenance

**Screenshot Placeholder**:
- 16:9 aspect ratio (aspect-video)
- Mock window chrome with traffic lights
- Three-panel layout visualization
- Mock chat messages with citation pills
- Mock source cards and artifact grid

### Tests Added

46 new Playwright tests covering:

**Pain Section (12 tests)**:
- Section visibility and structure
- Eyebrow, headline (h2), and subhead
- 4 pain points with icons, titles, descriptions
- Muted background
- Card borders and responsive grid

**Solution Section (20 tests)**:
- Section visibility and structure
- Eyebrow, headline (h2), and subhead
- Three panels on desktop (Sources, Lab, Studio)
- Panel titles and feature lists
- Panel icons
- Mobile panels visibility/desktop hidden on mobile
- Screenshot placeholder with three-panel layout
- Screenshot window chrome
- CTA button linking to /features

**Section Order (2 tests)**:
- Correct order: Hero → Pain → Solution
- Pain section follows Hero directly

**Responsive Design (4 tests)**:
- Pain points: 4 columns desktop, 2 tablet, 1 mobile
- Solution panels: 3 columns desktop

**Accessibility (5 tests)**:
- Proper heading hierarchy (h2)
- Icons hidden from screen readers (aria-hidden)
- CTA button keyboard focusable

**Visual Styling (3 tests)**:
- Eyebrow accent colors
- Destructive color for pain point icons
- Screenshot shadow and rounded corners

**Total Tests:** 216 (170 + 46)

### Files Created/Modified

**Created:**
- `src/components/sections/PainSection.astro`
- `src/components/sections/SolutionSection.astro`
- `tests/feature-6-pain-solution-sections.spec.ts`

**Modified:**
- `src/components/sections/index.ts` — Added exports for new sections
- `src/pages/index.astro` — Added PainSection and SolutionSection

### Breaking Changes

None

---

*Next: Feature Slice 7 - Homepage Persona Cards & Social Proof*
