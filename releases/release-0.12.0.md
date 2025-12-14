# Release 0.12.0

**Release Date:** December 14, 2025

## Overview

This release adds Feature 3.3: FeatureGrid Section. The FeatureGrid is a 2x2 grid component that showcases the four core features of the Lattice Lab platform: Sources, Lab, Studio, and Blueprints.

## New Features

### Feature 3.3: FeatureGrid Section

**Spec Reference:** Part 2, Section 2.2 (Section 2: Feature Cards)
**Complexity:** S

#### Description

Build a 2x2 feature card grid showcasing the four core features with configurable header, descriptions, screenshots, and background variants.

#### Files Added

- `src/components/home/FeatureGrid.vue` - 2x2 grid section component
- `src/pages/test-utils/feature-grid.astro` - Test page for component validation
- `tests/feature-grid.spec.ts` - 63 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] Sources card: "Your Knowledge, Indexed"
- [x] Lab card: "Research Agent"
- [x] Studio card: "Artifacts That Matter"
- [x] Blueprints card: "36 Vendor Blueprints"
- [x] Responsive: 2x2 on desktop, stacked on mobile

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sectionTitle` | `string` | `'Core Features'` | Section heading text |
| `sectionDescription` | `string` | `'Four powerful panels...'` | Section description text |
| `showHeader` | `boolean` | `true` | Whether to show section header |
| `showDescriptions` | `boolean` | `true` | Whether to show card descriptions |
| `sourcesScreenshot` | `string` | default path | Custom screenshot for Sources |
| `labScreenshot` | `string` | default path | Custom screenshot for Lab |
| `studioScreenshot` | `string` | default path | Custom screenshot for Studio |
| `blueprintsScreenshot` | `string` | default path | Custom screenshot for Blueprints |
| `background` | `'white' \| 'gray' \| 'gradient'` | `'gray'` | Background variant |
| `testId` | `string` | `'feature-grid'` | Test ID prefix |

#### Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│                     Core Features                        │
│  Four powerful panels designed to help you make          │
│  confident AI infrastructure decisions.                  │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐       │
│  │      Sources        │  │        Lab          │       │
│  │  Your Knowledge,    │  │   Research Agent    │       │
│  │      Indexed        │  │                     │       │
│  │  [screenshot]       │  │   [screenshot]      │       │
│  │  Learn more →       │  │   Learn more →      │       │
│  └─────────────────────┘  └─────────────────────┘       │
│                                                          │
│  ┌─────────────────────┐  ┌─────────────────────┐       │
│  │      Studio         │  │    Blueprints       │       │
│  │  Artifacts That     │  │   36 Vendor         │       │
│  │      Matter         │  │   Blueprints        │       │
│  │  [screenshot]       │  │   [36 Blueprints]   │       │
│  │  Learn more →       │  │   Learn more →      │       │
│  └─────────────────────┘  └─────────────────────┘       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

#### Features

- **Section Header**: Optional title and description centered above grid
- **2x2 Grid**: Responsive grid with `grid-cols-1 md:grid-cols-2`
- **Four Feature Cards**: Each with unique color variant
  - Sources (violet) - Knowledge indexing
  - Lab (blue) - AI research agent
  - Studio (teal) - Artifact generation
  - Blueprints (purple) - Pre-configured bundles
- **Screenshots**: Product screenshots with default paths
- **Icons**: Built-in SVG icons for each feature
- **Badge**: Blueprints card includes "36 Blueprints" badge
- **Background Variants**: White, gray, or gradient backgrounds
- **Responsive**: Stacked on mobile, 2x2 on tablet/desktop

#### Usage Examples

**Default Usage:**
```vue
<FeatureGrid />
```

**Without Header:**
```vue
<FeatureGrid :showHeader="false" />
```

**Custom Header:**
```vue
<FeatureGrid
  sectionTitle="Explore Our Platform"
  sectionDescription="Discover the tools that power your decisions."
/>
```

**Minimal (No Header, No Descriptions):**
```vue
<FeatureGrid
  :showHeader="false"
  :showDescriptions="false"
/>
```

**White Background:**
```vue
<FeatureGrid background="white" />
```

## Technical Details

### Dependencies

- Uses `FeatureCard` component from Feature 3.2

### Grid Layout

Key Tailwind classes:
- `grid grid-cols-1 md:grid-cols-2` - Responsive grid
- `gap-6 lg:gap-8` - Card spacing
- `max-w-5xl mx-auto` - Container width
- `py-16 md:py-24` - Section padding

### Color Variants

Each card uses a distinct color variant:
- Sources: `violet` - Purple/violet theme
- Lab: `blue` - Blue theme
- Studio: `teal` - Teal/cyan theme
- Blueprints: `purple` - Deep purple theme

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

This is a new component with no breaking changes to existing functionality.

## Test Results

```
467 passed (50.6s)
```

All existing tests continue to pass, including:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 32 MobileNav tests
- 40 Header tests
- 36 HeroSection tests
- 45 FeatureCard tests
- 63 FeatureGrid tests (new)
- 173 other component tests

## Phase 3 Progress

| Feature | Status | Release |
|---------|--------|---------|
| 3.1 Hero Section Redesign | Complete | v0.10.0 |
| 3.2 FeatureCard Component | Complete | v0.11.0 |
| 3.3 FeatureGrid Section | Complete | v0.12.0 |
| 3.4 ToolsCarousel Section | Planned | - |
| 3.5 PricingCard Redesign | Planned | - |
| 3.6 CTABanner Section | Planned | - |
| 3.7 Homepage Assembly | Planned | - |

## Next Steps

Feature 3.4: ToolsCarousel Section - Horizontal scrolling carousel showcasing supported sources and tools with vendor logos.
