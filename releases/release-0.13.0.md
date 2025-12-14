# Release 0.13.0

**Release Date:** December 14, 2025

## Overview

This release adds Feature 3.4: ToolsCarousel Section. The ToolsCarousel is a horizontal scrolling showcase displaying the seven specialized AI infrastructure tools with smooth scroll behavior, navigation controls, and mobile-friendly dots.

## New Features

### Feature 3.4: ToolsCarousel Section

**Spec Reference:** Part 2, Section 2.1 (Section 3: Tools Showcase)
**Complexity:** M

#### Description

Build horizontal scrolling tools showcase with 7 tools. Each tool displays an icon, name, one-liner description, and "Explore" link with smooth horizontal scrolling and navigation controls.

#### Files Added

- `src/components/home/ToolsCarousel.vue` - Horizontal scrolling tools carousel
- `src/pages/test-utils/tools-carousel.astro` - Test page for component validation
- `tests/tools-carousel.spec.ts` - 58 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] All 7 tools displayed: Accelerator Registry, Memory Calculator, TCO Calculator, Parallelism Advisor, Quantization Advisor, Spot Instance Advisor, Evaluation Framework
- [x] Each tool: Icon + Name + One-liner + "Explore" link
- [x] Smooth horizontal scroll on mobile
- [x] Scroll indicators or navigation dots

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sectionTitle` | `string` | `'Powerful Tools'` | Section heading text |
| `sectionDescription` | `string` | `'Seven specialized tools...'` | Section description text |
| `showHeader` | `boolean` | `true` | Whether to show section header |
| `showNavigation` | `boolean` | `true` | Whether to show nav arrows (desktop) |
| `showDots` | `boolean` | `true` | Whether to show scroll dots (mobile) |
| `background` | `'white' \| 'gray' \| 'gradient'` | `'white'` | Background variant |
| `testId` | `string` | `'tools-carousel'` | Test ID prefix |

#### Tools Included

| Tool | Description | Icon Color |
|------|-------------|------------|
| Accelerator Registry | Compare GPUs across AWS, GCP, and Azure | Violet |
| Memory Calculator | Estimate model memory and batch size | Blue |
| TCO Calculator | Calculate total cost of ownership | Emerald |
| Parallelism Advisor | Tensor/pipeline/data parallelism config | Amber |
| Quantization Advisor | INT8, FP16 options with tradeoffs | Purple |
| Spot Instance Advisor | Spot availability and cost savings | Rose |
| Evaluation Framework | LLM-as-judge evaluations | Teal |

#### Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│                    Powerful Tools                        │
│  Seven specialized tools to help you make informed       │
│  AI infrastructure decisions.                            │
│                                                          │
│  [<]  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  [>]  │
│       │  Icon  │ │  Icon  │ │  Icon  │ │  Icon  │       │
│       │  Name  │ │  Name  │ │  Name  │ │  Name  │       │
│       │  Desc  │ │  Desc  │ │  Desc  │ │  Desc  │       │
│       │Explore→│ │Explore→│ │Explore→│ │Explore→│       │
│       └────────┘ └────────┘ └────────┘ └────────┘       │
│                                                          │
│                    ● ● ○ ○ ○ ○ ○  (mobile dots)          │
└─────────────────────────────────────────────────────────┘
```

#### Features

- **Section Header**: Optional title and description
- **Horizontal Scroll Track**: Smooth scrolling with snap points
- **Navigation Arrows**: Desktop left/right navigation buttons
- **Scroll Dots**: Mobile indicator dots for current position
- **Tool Cards**: Article elements with icon, name, description, link
- **Color Variants**: Each tool has unique icon color
- **Hover Effects**: Card elevation and border color change
- **Responsive**: Works across all viewport sizes
- **Keyboard Accessible**: Navigation buttons are keyboard focusable

#### Usage Examples

**Default Usage:**
```vue
<ToolsCarousel />
```

**Without Header:**
```vue
<ToolsCarousel :showHeader="false" />
```

**Custom Header:**
```vue
<ToolsCarousel
  sectionTitle="AI Infrastructure Tools"
  sectionDescription="Everything you need to plan and optimize."
/>
```

**Gray Background:**
```vue
<ToolsCarousel background="gray" />
```

**Minimal (No Header, No Navigation, No Dots):**
```vue
<ToolsCarousel
  :showHeader="false"
  :showNavigation="false"
  :showDots="false"
/>
```

## Technical Details

### Dependencies

- None (standalone component)

### Scroll Behavior

- Uses native CSS `overflow-x-auto` for smooth horizontal scrolling
- `scroll-smooth` for animated scrolling
- `snap-x snap-mandatory` for card snap behavior
- Hidden scrollbar using CSS

### Navigation Controls

- Desktop: Arrow buttons positioned outside carousel
- Mobile: Indicator dots below carousel
- Dynamic visibility based on scroll position

### CSS Classes

Key Tailwind classes used:
- `overflow-x-auto` - Horizontal scrolling
- `scroll-smooth` - Smooth scroll behavior
- `snap-x snap-mandatory` - Scroll snapping
- `flex gap-4 md:gap-6` - Card spacing
- `rounded-2xl border` - Card styling
- `hover:shadow-lg hover:-translate-y-1` - Hover effects

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

This is a new component with no breaking changes to existing functionality.

## Test Results

```
525 passed (59.2s)
```

All existing tests continue to pass, including:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 32 MobileNav tests
- 40 Header tests
- 36 HeroSection tests
- 45 FeatureCard tests
- 63 FeatureGrid tests
- 58 ToolsCarousel tests (new)
- 173 other component tests

## Phase 3 Progress

| Feature | Status | Release |
|---------|--------|---------|
| 3.1 Hero Section Redesign | Complete | v0.10.0 |
| 3.2 FeatureCard Component | Complete | v0.11.0 |
| 3.3 FeatureGrid Section | Complete | v0.12.0 |
| 3.4 ToolsCarousel Section | Complete | v0.13.0 |
| 3.5 PricingCard Redesign | Planned | - |
| 3.6 CTABanner Section | Planned | - |
| 3.7 Homepage Assembly | Planned | - |

## Next Steps

Feature 3.5: PricingCard Redesign - Centered single card pricing section with large "$99" typography and feature checklist.
