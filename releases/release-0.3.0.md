# Release 0.3.0

**Release Date:** December 14, 2025

## Overview

This release adds the GradientText Vue component, a reusable component for creating Apple-style gradient headlines with multiple size and color variants.

## Features Completed

### Feature 1.3: GradientText Component
**Spec Reference:** Part 8, Section 8.3 (Shared Components)
**Complexity:** S (Small)
**Dependency:** Feature 1.1 (Typography Scale)

#### Description
Built a reusable GradientText Vue component for Apple-style gradient headlines that integrates with the typography and animation utilities.

#### Files Created
- `src/components/shared/GradientText.vue` - Gradient text component

#### What's Included

**Props:**
- `text` - Text content (alternative to using slot)
- `variant` - Gradient style ('primary', 'secondary', 'accent', 'hero', 'light', 'animated', 'custom')
- `size` - Typography size ('hero', 'display-xl/lg/md/sm', 'heading-xl/lg/md/sm/xs')
- `as` - HTML tag to render ('h1'-'h6', 'p', 'span', 'div')
- `customFrom` - Custom gradient start color (for 'custom' variant)
- `customTo` - Custom gradient end color (for 'custom' variant)
- `customAngle` - Custom gradient angle in degrees (default: 135)
- `centered` - Whether to center the text
- `class` - Additional CSS classes

**Gradient Variants:**
- `primary` - Violet to Blue gradient (brand primary)
- `secondary` - Teal to Cyan gradient
- `accent` - Blue to Teal gradient
- `hero` - Purple/Indigo spectrum (optimized for dark backgrounds)
- `light` - Light gradient (for dark backgrounds)
- `animated` - Animated shifting gradient
- `custom` - Use customFrom/customTo props for any colors

**Size Variants:**
- `hero` - Extra large (120px+) for main hero headlines
- `display-xl/lg/md/sm` - Display sizes for section headlines
- `heading-xl/lg/md/sm/xs` - Heading sizes for content

#### Acceptance Criteria Met
- [x] Component accepts text content and optional gradient colors
- [x] Supports multiple sizes (heading, display)
- [x] Works with both light and dark backgrounds

## Testing

### Playwright Tests Added
- `tests/gradient-text.spec.ts` - 37 tests covering all component functionality
  - Gradient variant tests (primary, secondary, accent, hero, light, animated)
  - Size variant tests (all display and heading sizes)
  - HTML tag tests (h1-h6, p, span, div)
  - Custom gradient tests (colors, angles)
  - Text prop vs slot tests
  - Centered text tests
  - Dark background tests
  - Real-world usage example tests
  - CSS properties tests (transparent fill, background-clip)

### Test Results
- **102 tests passed** (24 typography + 41 animation + 37 gradient-text)
- All component functionality verified in production environment
- No regressions in existing tests

## Infrastructure

### Test Page Added
- `src/pages/test-utils/gradient-text.astro` - GradientText component test page with all variants and real-world examples

### New Directory
- `src/components/shared/` - Created for shared/reusable components

## Breaking Changes

None. This is a backward-compatible feature addition.

## Dependencies

No new dependencies added. Uses existing typography CSS utilities.

## Migration Guide

No migration required. New component is opt-in.

## Usage Examples

### Basic Usage

```vue
<GradientText variant="primary" size="heading-lg" as="h1">
  Welcome to Lattice
</GradientText>
```

### Hero Section

```vue
<div class="bg-gray-900 p-12 text-center">
  <GradientText variant="hero" size="hero" as="h1" centered>
    Lattice
  </GradientText>
  <p class="text-gray-300 mt-4">
    AI Infrastructure Decisions, Grounded in Evidence
  </p>
</div>
```

### Feature Title

```vue
<GradientText variant="primary" size="heading-xl" as="h2">
  Your Knowledge. Unified.
</GradientText>
```

### Section Heading with Accent

```vue
<GradientText variant="accent" size="display-sm" as="h2" centered>
  Powerful Tools
</GradientText>
```

### Custom Gradient

```vue
<GradientText
  variant="custom"
  size="heading-lg"
  as="h3"
  customFrom="#FF6B6B"
  customTo="#4ECDC4"
  customAngle={90}
>
  Custom Gradient
</GradientText>
```

### Using Text Prop

```vue
<GradientText
  variant="primary"
  size="heading-lg"
  text="Using Text Prop"
/>
```

### Dark Background Variants

```vue
<!-- Hero variant optimized for dark backgrounds -->
<GradientText variant="hero" size="display-lg" as="h2">
  Hero on Dark
</GradientText>

<!-- Light variant for maximum contrast on dark -->
<GradientText variant="light" size="heading-lg" as="h3">
  Light on Dark
</GradientText>
```

### Animated Gradient

```vue
<GradientText variant="animated" size="heading-lg" as="h3">
  Animated Gradient
</GradientText>
```

## Astro Integration

When using in Astro files, remember to add `client:load` for client-side hydration:

```astro
---
import GradientText from '@components/shared/GradientText.vue';
---

<GradientText client:load variant="primary" size="hero" as="h1">
  Hello World
</GradientText>
```

## Next Up

The following features are next in the backlog:
- Feature 1.4: DualCTA Component
- Feature 1.5: DocsLink Component
