# Release 0.5.0

**Release Date**: November 28, 2025

---

## Feature Slice 5: Homepage Hero Section

**Spec Reference**: `website-spec.md` → Page Specifications (Homepage), Content Strategy (Messaging Framework)

**Summary**: Create the homepage Hero section with headline, subhead, CTAs, and product screenshot placeholder. This establishes the main conversion-focused landing experience.

### Completed Acceptance Criteria

- [x] `Hero.astro` section component
- [x] Headline: Value proposition from spec ("Stop spending weeks gathering pricing pages, model cards, and benchmarks.")
- [x] Subhead: Supporting copy ("Lattice synthesizes AI research with grounded recommendations you can trust.")
- [x] Primary CTA button: "Buy Lattice — $99" linking to /pricing
- [x] Secondary CTA: "View Features" linking to /features
- [x] Product screenshot placeholder (mock three-panel layout)
- [x] Responsive layout (text left, image right on desktop; stacked on mobile)
- [x] Homepage `/src/pages/index.astro` updated with Hero section

### Technical Details

**Hero Component (`src/components/sections/Hero.astro`)**:
- Section component with configurable props for headline, subhead, and CTAs
- Two-column grid layout on desktop (`lg:grid-cols-2`)
- Single column stack on mobile with centered text
- Tagline badge with accent indicator dot

```astro
<Section spacing="xl" container={false} data-testid="hero-section">
  <Container size="xl">
    <div class="grid min-h-[calc(100vh-12rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <!-- Text Content -->
      <!-- Product Screenshot Placeholder -->
    </div>
  </Container>
</Section>
```

**Tagline Badge**:
- Rounded pill with border and surface-2 background
- Accent-colored indicator dot
- Text: "Agentic AI Lab Assistant for Research Engineers"

**Headline Typography**:
- Responsive sizing: `text-4xl` → `sm:text-5xl` → `md:text-6xl` → `lg:text-7xl`
- Bold weight with tight tracking
- Site name "Lattice" as primary headline

**Value Proposition**:
- `text-xl sm:text-2xl` sizing
- Medium font weight
- Primary foreground color

**Product Screenshot Placeholder**:
- 4:3 aspect ratio container
- Mock window chrome with traffic light buttons
- Three-panel layout representing Sources | Lab | Studio
- Subtle gradient overlay for polish
- Shadow and rounded corners

**CTA Buttons**:
- Primary: Accent background, links to `/pricing`
- Secondary: Surface background with border, links to `/features`
- Stack vertically on mobile, side-by-side on tablet+
- Large size (`lg`) for prominence

**Sections Directory Created**:
- `src/components/sections/` directory for page section components
- `src/components/sections/index.ts` barrel export

**Homepage Updated**:
- Simplified to import and render Hero component
- All content managed by Hero component with sensible defaults

### Tests Added

38 new Playwright tests covering:

**Hero Content (6 tests)**:
- Hero section visibility
- Site name displayed as headline
- Headline is h1 element
- Value proposition displayed
- Subhead with supporting copy
- Tagline badge visibility

**CTA Buttons (7 tests)**:
- Primary CTA visibility
- Primary CTA contains "Buy Lattice" and "$99"
- Primary CTA links to /pricing
- Secondary CTA visibility
- Secondary CTA contains "View Features"
- Secondary CTA links to /features
- CTA container visibility

**Product Screenshot Placeholder (4 tests)**:
- Screenshot placeholder visibility
- Correct aspect ratio (4:3)
- Mock three-panel layout (Sources, Lab, Studio)
- Window chrome styling (Lattice Lab title)

**Responsive Layout (7 tests)**:
- Two-column layout on desktop
- Text left-aligned on desktop
- Text center-aligned on mobile
- CTAs stack vertically on mobile
- CTAs side-by-side on larger screens
- Screenshot visible on mobile
- Hero responsive on tablet

**Typography and Styling (6 tests)**:
- Headline has large font size on desktop
- Headline has bold font weight
- Subhead has muted color
- Tagline badge has border
- Screenshot has shadow
- Screenshot has rounded corners

**Accessibility (5 tests)**:
- Page has exactly one h1
- Primary CTA is keyboard focusable
- Secondary CTA is keyboard focusable
- CTAs are links (accessible)
- Content not hidden under header

**Integration with Page Layout (3 tests)**:
- Hero within main content area
- Header visible above hero
- Footer visible below hero

**Total Tests:** 170 (20 + 33 + 39 + 40 + 38)

### Files Created/Modified

**Created:**
- `src/components/sections/Hero.astro`
- `src/components/sections/index.ts`
- `tests/feature-5-hero-section.spec.ts`

**Modified:**
- `src/pages/index.astro` — Simplified to use Hero component
- `tests/feature-1-project-init.spec.ts` — Updated value proposition test for new messaging
- `tests/feature-4-layout-components.spec.ts` — Added hydration wait for mobile menu test

### Breaking Changes

None

---

*Next: Feature Slice 6 - Homepage Pain & Solution Sections*
