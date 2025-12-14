# Release 0.4.0

**Release Date:** December 14, 2025

## Overview

This release adds the DualCTA Vue component, a reusable component for the Apple-style "Learn more" + "Buy" button pattern with multiple layout, size, and styling variants.

## Features Completed

### Feature 1.4: DualCTA Component
**Spec Reference:** Part 8, Section 8.3 (Shared Components)
**Complexity:** S (Small)
**Dependency:** None

#### Description
Built a reusable DualCTA component for dual call-to-action button groups, following the Apple.com pattern of pairing a secondary "Learn more" link with a primary "Buy" button.

#### Files Created
- `src/components/shared/DualCTA.vue` - Dual CTA button group component

#### What's Included

**Props:**
- `primaryLabel` - Primary button text (default: "Buy")
- `primaryHref` - Primary button link URL
- `primaryTestId` - Primary button test ID
- `secondaryLabel` - Secondary button text (default: "Learn more")
- `secondaryHref` - Secondary button link URL
- `secondaryTestId` - Secondary button test ID
- `containerTestId` - Container element test ID
- `size` - Button size ('sm', 'md', 'lg')
- `variant` - Color variant ('default', 'dark', 'light')
- `alignment` - Button alignment ('left', 'center', 'right')
- `stacked` - Force vertical stacking
- `showArrows` - Show arrow icons on buttons
- `gap` - Gap between buttons ('sm', 'md', 'lg')

**Size Variants:**
- `sm` - Small buttons with compact padding
- `md` - Medium buttons (default)
- `lg` - Large buttons with generous padding

**Color Variants:**
- `default` - Violet primary button, violet text secondary (light backgrounds)
- `dark` - White primary button, white text secondary (dark backgrounds)
- `light` - Dark primary button, dark text secondary (light backgrounds)

**Layout Features:**
- Responsive by default: stacks on mobile, inline on desktop
- Configurable alignment (left, center, right)
- Optional forced stacking
- Configurable gap sizes

#### Acceptance Criteria Met
- [x] Primary button (filled) and secondary button (outline) styles
- [x] Configurable labels and links
- [x] Responsive layout (stack on mobile, inline on desktop)

## Testing

### Playwright Tests Added
- `tests/dual-cta.spec.ts` - 34 tests covering all component functionality
  - Default variant tests (labels, links, button styles)
  - Size variant tests (sm, md, lg)
  - Color variant tests (default, dark, light)
  - Alignment tests (left, center, right)
  - Stacked layout tests
  - Arrow icon tests
  - Gap variant tests
  - Button styling tests (rounded-full, font-semibold, transitions)
  - Real-world usage examples tests
  - Accessibility tests (keyboard focus, semantic elements)
  - Responsive behavior tests (mobile/desktop layouts)

### Test Results
- **136 tests passed** (24 typography + 41 animation + 37 gradient-text + 34 dual-cta)
- All component functionality verified in production environment
- No regressions in existing tests

## Infrastructure

### Test Page Added
- `src/pages/test-utils/dual-cta.astro` - DualCTA component test page with all variants and real-world examples

## Breaking Changes

None. This is a backward-compatible feature addition.

## Dependencies

No new dependencies added. Uses existing Tailwind CSS utilities.

## Migration Guide

No migration required. New component is opt-in.

## Usage Examples

### Basic Usage

```vue
<DualCTA
  primaryLabel="Buy $99"
  primaryHref="/pricing"
  secondaryLabel="Learn more"
  secondaryHref="/features"
/>
```

### Hero Section (Dark Background)

```vue
<div class="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-12">
  <h1 class="text-5xl font-bold text-white mb-4">Lattice</h1>
  <p class="text-gray-300 mb-8">AI Infrastructure Decisions, Grounded in Evidence</p>
  <DualCTA
    variant="dark"
    alignment="center"
    size="lg"
    primaryLabel="Buy $99"
    primaryHref="/pricing"
    secondaryLabel="Learn more"
    secondaryHref="/features"
  />
</div>
```

### Feature Card

```vue
<div class="bg-white p-8 rounded-xl shadow-lg">
  <h3 class="text-2xl font-bold text-gray-900 mb-2">Sources</h3>
  <p class="text-gray-600 mb-6">Your Knowledge, Indexed.</p>
  <DualCTA
    alignment="left"
    primaryLabel="Explore"
    primaryHref="/features/sources"
    secondaryLabel="Learn more"
    secondaryHref="/docs/sources"
    showArrows
  />
</div>
```

### CTA Banner

```vue
<div class="bg-gradient-to-r from-violet-600 to-blue-600 p-8 rounded-xl text-center">
  <h3 class="text-2xl font-bold text-white mb-4">Start Making Confident Decisions</h3>
  <DualCTA
    variant="dark"
    alignment="center"
    primaryLabel="Get Started"
    primaryHref="/pricing"
    secondaryLabel="View Documentation"
    secondaryHref="/docs"
  />
</div>
```

### Stacked Layout

```vue
<DualCTA
  stacked
  alignment="center"
  primaryLabel="Buy Now"
  secondaryLabel="Learn more"
/>
```

### With Arrows

```vue
<DualCTA
  showArrows
  primaryLabel="Get Started"
  secondaryLabel="Learn more"
/>
```

### Size Variants

```vue
<!-- Small -->
<DualCTA size="sm" primaryLabel="Buy" secondaryLabel="Learn more" />

<!-- Medium (default) -->
<DualCTA size="md" primaryLabel="Buy" secondaryLabel="Learn more" />

<!-- Large -->
<DualCTA size="lg" primaryLabel="Buy" secondaryLabel="Learn more" />
```

## Astro Integration

When using in Astro files, remember to add `client:load` for client-side hydration:

```astro
---
import DualCTA from '@components/shared/DualCTA.vue';
---

<DualCTA
  client:load
  variant="dark"
  alignment="center"
  primaryLabel="Buy $99"
  secondaryLabel="Learn more"
/>
```

## Next Up

The following features are next in the backlog:
- Feature 1.5: DocsLink Component
- Feature 2.1: NavDropdown Component
