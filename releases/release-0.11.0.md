# Release 0.11.0

**Release Date:** December 14, 2025

## Overview

This release adds Feature 3.2: FeatureCard Component. The FeatureCard is an Apple-style feature card component designed for product showcase grids on the homepage and feature index pages.

## New Features

### Feature 3.2: FeatureCard Component

**Spec Reference:** Part 2, Section 2.1 (Section 2: Feature Cards)
**Complexity:** S

#### Description

Build Apple-style feature card component for product showcase grid. The card displays product name, tagline, optional description, icon, screenshot/placeholder, badge, and CTAs with subtle hover effects.

#### Files Added

- `src/components/home/FeatureCard.vue` - Apple-style card component
- `src/pages/test-utils/feature-card.astro` - Test page for component validation
- `tests/feature-card.spec.ts` - 45 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] Card with product name, tagline, CTAs, and screenshot placeholder
- [x] Hover effects with subtle shadow/scale
- [x] Responsive sizing

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Product/feature title |
| `tagline` | `string` | required | Short tagline |
| `description` | `string` | `undefined` | Optional description text |
| `icon` | `string` | `undefined` | SVG icon HTML string |
| `iconBg` | `string` | `'bg-violet-100'` | Icon background color class |
| `screenshot` | `string` | `undefined` | Screenshot image URL |
| `badge` | `string` | `undefined` | Optional badge text |
| `href` | `string` | `undefined` | Simple link href |
| `linkLabel` | `string` | `'Learn more'` | Label for simple link |
| `primaryCTA` | `string` | `undefined` | Primary CTA label |
| `primaryHref` | `string` | `undefined` | Primary CTA href |
| `secondaryCTA` | `string` | `'Learn more'` | Secondary CTA label |
| `secondaryHref` | `string` | `undefined` | Secondary CTA href |
| `variant` | `string` | `'default'` | Color variant |
| `showGlow` | `boolean` | `true` | Whether to show hover glow |
| `testId` | `string` | `'feature-card'` | Test ID prefix |

#### Color Variants

- `violet` - Default violet theme
- `blue` - Blue theme
- `teal` - Teal theme
- `amber` - Amber theme
- `emerald` - Emerald theme
- `purple` - Purple theme
- `default` - Neutral theme

#### Visual Design

```
┌─────────────────────────────────────┐
│  ┌──────┐                           │
│  │ Icon │                           │
│  └──────┘                           │
│                                     │
│  Title                              │
│  Tagline (muted)                    │
│                                     │
│  Description text...                │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ Badge                       │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │     Screenshot / Image      │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  [Learn more →]  [Primary CTA →]    │
│                                     │
└─────────────────────────────────────┘
```

#### Features

- **Rounded Card Design**: Large rounded corners (`rounded-3xl`) with white background
- **Icon Container**: Colored background with matching icon color per variant
- **Screenshot/Placeholder**: Rounded image area with placeholder fallback
- **Dual CTA Support**: Integrates DualCTA component for action buttons
- **Simple Link Alternative**: Single "Learn more" link when dual CTAs not needed
- **Badge Support**: Optional badge for highlighting counts/labels
- **Hover Effects**: Shadow elevation, subtle translate, and gradient glow
- **Color Variants**: Six color variants for visual variety in grids
- **Responsive**: Works across all viewport sizes

#### Usage Examples

**Basic Card with Link:**
```vue
<FeatureCard
  title="Sources"
  tagline="Your Knowledge, Indexed"
  icon="<svg>...</svg>"
  href="/features/sources"
  variant="violet"
/>
```

**Card with Screenshot and Dual CTAs:**
```vue
<FeatureCard
  title="Lab"
  tagline="Research Agent"
  description="Chat with an AI agent grounded in your sources."
  icon="<svg>...</svg>"
  screenshot="/images/lab-screenshot.png"
  secondaryCTA="Learn more"
  secondaryHref="/features/lab"
  primaryCTA="Try Lab"
  primaryHref="/features/lab#demo"
  variant="blue"
/>
```

**Card with Badge:**
```vue
<FeatureCard
  title="Blueprints"
  tagline="36 Vendor Blueprints"
  description="Pre-configured knowledge bundles."
  icon="<svg>...</svg>"
  badge="36 Blueprints"
  screenshot="/images/blueprints.png"
  href="/features/blueprints"
  variant="purple"
/>
```

#### 2x2 Grid Example

```astro
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <FeatureCard title="Sources" tagline="Your Knowledge, Indexed" ... />
  <FeatureCard title="Lab" tagline="Research Agent" ... />
  <FeatureCard title="Studio" tagline="Artifacts That Matter" ... />
  <FeatureCard title="Blueprints" tagline="36 Vendor Blueprints" ... />
</div>
```

## Technical Details

### Dependencies

- Uses `DualCTA` component from Feature 1.4 for action buttons

### Semantic HTML

- Card uses `<article>` element for semantic markup
- Title uses `<h3>` for proper heading hierarchy
- Images have descriptive `alt` attributes

### CSS Classes

Key Tailwind classes used:
- `rounded-3xl` - Large rounded corners
- `border border-gray-200` - Subtle border
- `hover:shadow-xl hover:-translate-y-1` - Hover elevation
- `transition-all duration-300` - Smooth transitions
- `group` - For hover state coordination

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

This is a new component with no breaking changes to existing functionality.

## Test Results

```
404 passed (46.0s)
```

All existing tests continue to pass, including:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 32 MobileNav tests
- 40 Header tests
- 36 HeroSection tests
- 45 FeatureCard tests (new)
- 173 other component tests

## Phase 3 Progress

| Feature | Status | Release |
|---------|--------|---------|
| 3.1 Hero Section Redesign | Complete | v0.10.0 |
| 3.2 FeatureCard Component | Complete | v0.11.0 |
| 3.3 FeatureGrid Section | Planned | - |
| 3.4 ToolsCarousel Section | Planned | - |
| 3.5 PricingCard Redesign | Planned | - |
| 3.6 CTABanner Section | Planned | - |
| 3.7 Homepage Assembly | Planned | - |

## Next Steps

Feature 3.3: FeatureGrid Section - Build 2x2 feature card grid showcasing Sources, Lab, Studio, and Blueprints.
