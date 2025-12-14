# Release 0.14.0

**Release Date:** December 14, 2025

## Overview

This release adds Feature 3.5: PricingCard Redesign. The PricingCard is a centered single-card pricing component with large "$99" gradient typography, feature checklist, and Stripe buy button integration.

## New Features

### Feature 3.5: PricingCard Redesign

**Spec Reference:** Part 2, Section 2.1 (Section 6: Pricing)
**Complexity:** S

#### Description

Redesign pricing section as centered single card with large typography, gradient price display, feature checklist, and Stripe buy button integration ready.

#### Files Added

- `src/components/home/PricingCard.vue` - Centered pricing card component
- `src/pages/test-utils/pricing-card.astro` - Test page for component validation
- `tests/pricing-card.spec.ts` - 50 Playwright tests covering all functionality

#### Acceptance Criteria (All Complete)

- [x] "$99" large typography (7xl/8xl with gradient)
- [x] "One-time payment. Lifetime access." tagline
- [x] Feature checklist with check icons
- [x] Stripe buy button integration ready

#### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sectionTitle` | `string` | `'Simple, One-Time Pricing'` | Section heading |
| `sectionDescription` | `string` | `'Get lifetime access...'` | Section description |
| `showHeader` | `boolean` | `true` | Whether to show header |
| `price` | `string` | `'$99'` | Price to display |
| `tagline` | `string` | `'One-time payment. Lifetime access.'` | Tagline under price |
| `features` | `string[]` | 6 default features | Feature list |
| `showStripeButton` | `boolean` | `true` | Show Stripe button |
| `stripeButtonId` | `string` | configured | Stripe button ID |
| `stripePublishableKey` | `string` | configured | Stripe key |
| `ctaHref` | `string` | `undefined` | Alt CTA href |
| `ctaLabel` | `string` | `'Get Started'` | Alt CTA label |
| `trustText` | `string` | `'Secure payment via Stripe'` | Trust indicator |
| `background` | `'white' \| 'gray' \| 'gradient'` | `'gray'` | Background variant |
| `testId` | `string` | `'pricing-card'` | Test ID prefix |

#### Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│              Simple, One-Time Pricing                    │
│  Get lifetime access to Lattice with a single purchase.  │
│                                                          │
│  ┌─────────────────────────────────────────────────┐    │
│  │                                                 │    │
│  │              $99 (large gradient)               │    │
│  │       One-time payment. Lifetime access.        │    │
│  │                                                 │    │
│  │     ────────────────────────────────────        │    │
│  │                                                 │    │
│  │  [check] Full access to Sources, Lab, Studio    │    │
│  │  [check] 36 curated vendor blueprints           │    │
│  │  [check] Unlimited workspaces                   │    │
│  │  [check] Scenario configuration                 │    │
│  │  [check] Artifact generation and export         │    │
│  │  [check] All future updates included            │    │
│  │                                                 │    │
│  │           [Stripe Buy Button]                   │    │
│  │        Secure payment via Stripe                │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

#### Features

- **Large Price Typography**: 7xl mobile, 8xl desktop with gradient text
- **Gradient Text Effect**: Violet to blue gradient on price
- **Feature Checklist**: 6 features with emerald check icons
- **Stripe Integration**: Ready-to-use Stripe buy button
- **Alternative CTA**: Can use custom button instead of Stripe
- **Trust Indicator**: "Secure payment via Stripe" text
- **Card Design**: White card with rounded corners, shadow, subtle gradient overlay
- **Background Variants**: White, gray, or gradient backgrounds
- **Responsive**: Scales typography and padding for all viewports

#### Usage Examples

**Default Usage:**
```vue
<PricingCard />
```

**Custom Price:**
```vue
<PricingCard
  price="$149"
  tagline="Early bird pricing. Limited time."
/>
```

**Without Stripe (Custom CTA):**
```vue
<PricingCard
  :showStripeButton="false"
  ctaHref="/checkout"
  ctaLabel="Purchase Now"
/>
```

**Custom Features:**
```vue
<PricingCard
  :features="[
    'Feature one',
    'Feature two',
    'Feature three'
  ]"
/>
```

**Without Header:**
```vue
<PricingCard :showHeader="false" />
```

## Technical Details

### Dependencies

- None (standalone component)

### Stripe Integration

The component includes a slot for the Stripe buy button:
- Default: Uses configured Stripe button ID and publishable key
- Custom: Can slot in custom Stripe configuration
- Alternative: Can disable Stripe and use custom CTA button

### CSS Classes

Key Tailwind classes used:
- `text-7xl md:text-8xl` - Large responsive price
- `bg-gradient-to-r from-violet-600 to-blue-600` - Price gradient
- `bg-clip-text text-transparent` - Gradient text effect
- `rounded-3xl shadow-xl` - Card styling
- `text-emerald-500` - Check icon color

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

This is a new component. The existing `Pricing.vue` component remains unchanged for backwards compatibility. The new `PricingCard.vue` can be used as a drop-in replacement when ready.

## Test Results

```
575 passed (1.1m)
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
- 50 PricingCard tests (new)
- 173 other component tests

## Phase 3 Progress

| Feature | Status | Release |
|---------|--------|---------|
| 3.1 Hero Section Redesign | Complete | v0.10.0 |
| 3.2 FeatureCard Component | Complete | v0.11.0 |
| 3.3 FeatureGrid Section | Complete | v0.12.0 |
| 3.4 ToolsCarousel Section | Complete | v0.13.0 |
| 3.5 PricingCard Redesign | Complete | v0.14.0 |
| 3.6 CTABanner Section | Planned | - |
| 3.7 Homepage Assembly | Planned | - |

## Next Steps

Feature 3.6: CTABanner Section - Full-width gradient CTA banner with "Start Making Confident Decisions" headline and dual CTAs.
