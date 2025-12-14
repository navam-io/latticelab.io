# Release 0.10.0

**Release Date:** December 14, 2025

## Overview

This release begins Phase 3 (Homepage) by adding Feature 3.1: Hero Section Redesign. The HeroSection component has been redesigned with a large gradient headline, clean tagline, DualCTA integration, and product image showcase following Apple-inspired design principles.

## New Features

### Feature 3.1: Hero Section Redesign

**Spec Reference:** Part 2, Section 2.1 (Section 1: Hero)
**Complexity:** M

#### Description

Complete redesign of the homepage hero section with a simplified, impactful layout featuring a large "Lattice" gradient headline (120px+), clear tagline, dual CTAs using the DualCTA component, and a browser-framed product screenshot.

#### Files Modified

- `src/components/home/HeroSection.vue` - Complete redesign
- `src/pages/test-utils/hero-section.astro` - Test page for component validation
- `tests/hero-section.spec.ts` - 36 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] Full-width dark gradient background
- [x] Large "Lattice" gradient text headline (120px+ max)
- [x] Tagline: "AI Infrastructure Decisions, Grounded in Evidence"
- [x] Hero product image with browser frame
- [x] "Learn more" + "Buy $99" CTAs using DualCTA component

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headline` | `string` | `'Lattice'` | Main gradient headline text |
| `tagline` | `string` | `'AI Infrastructure Decisions, Grounded in Evidence'` | Tagline below headline |
| `primaryCTA` | `string` | `'Buy $99'` | Primary button label |
| `primaryHref` | `string` | `'/#pricing'` | Primary button link |
| `secondaryCTA` | `string` | `'Learn more'` | Secondary button label |
| `secondaryHref` | `string` | `'#features'` | Secondary button link |
| `productImage` | `string` | `'/images/journeys/chat-with-ai/chat-with-ai-04.png'` | Product screenshot URL |
| `productImageAlt` | `string` | `'Lattice AI Infrastructure Platform'` | Image alt text |
| `testId` | `string` | `'hero-section'` | Test ID prefix |

#### Visual Design

```
┌─────────────────────────────────────────────────────────────────┐
│              Dark Gradient Background (gray-900 → violet-900)   │
│                                                                 │
│                          ╔════════════╗                         │
│                          ║  Lattice   ║  ← Large Gradient Text  │
│                          ╚════════════╝     (120px+ max)        │
│                                                                 │
│          AI Infrastructure Decisions, Grounded in Evidence      │
│                              ↑ Tagline                          │
│                                                                 │
│                    [Learn more]  [Buy $99]                      │
│                           ↑ DualCTA                             │
│                                                                 │
│                  ┌─────────────────────────┐                    │
│                  │ ● ● ●  lattice.app      │                    │
│                  ├─────────────────────────┤                    │
│                  │                         │                    │
│                  │   Product Screenshot    │                    │
│                  │                         │                    │
│                  └─────────────────────────┘                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Features

- **Large Gradient Headline**: Uses `clamp(4rem, 15vw, 10rem)` for responsive sizing that reaches 120px+ on desktop
- **Animated Gradient**: Text has subtle gradient animation shifting between violet, blue, and teal
- **DualCTA Integration**: Uses the shared DualCTA component with dark variant for contrast
- **Browser Window Frame**: Product image is displayed in a macOS-style browser frame with traffic lights
- **Glow Effects**: Subtle gradient glow behind product image and at bottom of section
- **Pattern Background**: Subtle lattice cross pattern at low opacity for texture
- **Responsive**: Fully responsive from mobile to wide desktop

#### Animation Sequence

1. Headline fades in immediately (1s)
2. Tagline slides up after 200ms delay
3. CTAs slide up after 400ms delay
4. Product image fades in after 600ms delay

#### Usage Example

```astro
---
import HeroSection from '@components/home/HeroSection.vue';
---

<!-- Default usage -->
<HeroSection client:load />

<!-- Custom usage -->
<HeroSection
  client:load
  headline="Studio"
  tagline="Turn AI responses into reusable artifacts"
  primaryCTA="Try Studio"
  primaryHref="/features/studio"
  secondaryCTA="View Docs"
  secondaryHref="/docs"
  productImage="/images/studio-screenshot.png"
  productImageAlt="Lattice Studio"
/>
```

## Technical Details

### Breaking Changes

The HeroSection component has been completely redesigned. The previous carousel-based implementation has been replaced with a simpler, more focused design. The component API has changed:

**Removed:**
- Feature carousel with slides
- Stats row
- Auto-play functionality
- Complex feature data structure

**Added:**
- Simple prop-based configuration
- DualCTA integration
- Test ID props for testing
- Placeholder image support

### Dependencies

- Uses `DualCTA` component from Feature 1.4
- Uses gradient text styles from the design system

### CSS Details

The hero headline uses a custom `text-hero` class with clamped sizing:

```css
.text-hero {
  font-size: clamp(4rem, 15vw, 10rem);
  line-height: 1;
}
```

This ensures:
- Minimum: 64px (4rem) on small screens
- Fluid: 15% of viewport width
- Maximum: 160px (10rem) on large screens

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

If you were using the previous HeroSection component directly, update your usage to match the new prop structure. The component now focuses on displaying a single hero message rather than a feature carousel.

## Test Results

```
359 passed (37.9s)
```

All existing tests continue to pass, including:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 32 MobileNav tests
- 40 Header tests
- 36 HeroSection tests (new)
- 173 other component tests

## Phase 3 Progress

With this release, Phase 3 Homepage begins:

| Feature | Status | Release |
|---------|--------|---------|
| 3.1 Hero Section Redesign | Complete | v0.10.0 |
| 3.2 FeatureCard Component | Planned | - |
| 3.3 FeatureGrid Section | Planned | - |
| 3.4 ToolsCarousel Section | Planned | - |
| 3.5 PricingCard Redesign | Planned | - |
| 3.6 CTABanner Section | Planned | - |
| 3.7 Homepage Assembly | Planned | - |

## Next Steps

Feature 3.2: FeatureCard Component - Apple-style feature card component for product showcase grid.
