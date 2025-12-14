# Release 0.15.0

**Release Date:** December 14, 2025

## Overview

This release adds Feature 3.6: CTABanner Section. The CTABanner is a full-width gradient banner component with a headline, subheadline, and dual CTA buttons, designed for page bottom call-to-action sections.

## New Features

### Feature 3.6: CTABanner Section

**Spec Reference:** Part 2, Section 2.1 (Section 7: CTA Banner)
**Complexity:** S

#### Description

Build full-width gradient CTA banner for page bottom with compelling headline and dual action buttons.

#### Files Added

- `src/components/home/CTABanner.vue` - Full-width gradient CTA banner
- `src/pages/test-utils/cta-banner.astro` - Test page for component validation
- `tests/cta-banner.spec.ts` - 40 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] Full-width gradient background (violet to purple to blue)
- [x] "Start Making Confident Decisions" headline
- [x] [Get Started] [View Documentation] CTAs

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headline` | `string` | `'Start Making Confident Decisions'` | Main headline |
| `subheadline` | `string` | `'Join engineers who trust Lattice...'` | Subheadline text |
| `primaryCTA` | `string` | `'Get Started'` | Primary button label |
| `primaryHref` | `string` | `'/#pricing'` | Primary button href |
| `secondaryCTA` | `string` | `'View Documentation'` | Secondary button label |
| `secondaryHref` | `string` | `'/docs'` | Secondary button href |
| `centered` | `boolean` | `true` | Center align content |
| `showArrows` | `boolean` | `true` | Show arrows on CTAs |
| `ctaSize` | `'sm' \| 'md' \| 'lg'` | `'lg'` | CTA button size |
| `showPattern` | `boolean` | `false` | Show grid pattern overlay |
| `testId` | `string` | `'cta-banner'` | Test ID prefix |

#### Visual Layout

```
┌─────────────────────────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  ▓▓                                                             ▓▓ │
│  ▓▓           Start Making Confident Decisions                  ▓▓ │
│  ▓▓    Join engineers who trust Lattice for AI infrastructure  ▓▓ │
│  ▓▓                                                             ▓▓ │
│  ▓▓       [View Documentation →]    [Get Started →]             ▓▓ │
│  ▓▓                                                             ▓▓ │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
└─────────────────────────────────────────────────────────────────────┘
          (Gradient: violet → purple → blue)
```

#### Features

- **Full-Width Gradient**: Violet to purple to blue gradient background
- **Large Headline**: Responsive headline (3xl to 5xl)
- **Subheadline**: Supporting text with semi-transparent white
- **DualCTA Integration**: Uses DualCTA component with dark variant
- **Pattern Overlay**: Optional grid pattern for visual texture
- **Content Alignment**: Centered (default) or left-aligned
- **CTA Arrows**: Optional arrow icons on buttons
- **Responsive**: Scales typography and padding for all viewports

#### Usage Examples

**Default Usage:**
```vue
<CTABanner />
```

**Custom Content:**
```vue
<CTABanner
  headline="Ready to Transform Your AI Stack?"
  subheadline="Get access to 36 blueprints and 7 powerful tools."
/>
```

**Custom CTAs:**
```vue
<CTABanner
  primaryCTA="Buy Now"
  primaryHref="/checkout"
  secondaryCTA="Learn More"
  secondaryHref="/features"
/>
```

**Left Aligned:**
```vue
<CTABanner :centered="false" />
```

**With Pattern:**
```vue
<CTABanner :showPattern="true" />
```

**Without Arrows:**
```vue
<CTABanner :showArrows="false" />
```

## Technical Details

### Dependencies

- Uses `DualCTA` component from Feature 1.4 with `variant="dark"`

### Gradient Background

The component uses a three-color gradient:
- `from-violet-600` - Starting color (left)
- `via-purple-600` - Middle color
- `to-blue-600` - Ending color (right)

### CSS Classes

Key Tailwind classes used:
- `bg-gradient-to-r` - Horizontal gradient direction
- `py-16 md:py-24` - Responsive vertical padding
- `text-white` - White text on dark gradient
- `text-white/90` - Semi-transparent subheadline
- `overflow-hidden` - Contain pattern overlay

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

This is a new component with no breaking changes to existing functionality.

## Test Results

```
615 passed (1.1m)
```

All existing tests continue to pass, including:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 32 MobileNav tests
- 40 Header tests
- 36 HeroSection tests
- 45 FeatureCard tests
- 63 FeatureGrid tests
- 58 ToolsCarousel tests
- 50 PricingCard tests
- 40 CTABanner tests (new)
- 173 other component tests

## Phase 3 Progress

| Feature | Status | Release |
|---------|--------|---------|
| 3.1 Hero Section Redesign | Complete | v0.10.0 |
| 3.2 FeatureCard Component | Complete | v0.11.0 |
| 3.3 FeatureGrid Section | Complete | v0.12.0 |
| 3.4 ToolsCarousel Section | Complete | v0.13.0 |
| 3.5 PricingCard Redesign | Complete | v0.14.0 |
| 3.6 CTABanner Section | Complete | v0.15.0 |
| 3.7 Homepage Assembly | Planned | - |

## Next Steps

Feature 3.7: Homepage Assembly - Compose all new homepage sections into index.astro with proper section spacing and visual flow.
