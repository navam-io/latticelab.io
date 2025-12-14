# Release 0.1.0

**Release Date:** December 14, 2025

## Overview

This release introduces the foundation phase components for the Apple-style website redesign, starting with the Design Tokens and Typography Scale system.

## Features Completed

### Feature 1.1: Design Tokens and Typography Scale
**Spec Reference:** Part 8, Section 8.2
**Complexity:** S (Small)

#### Description
Created the Apple-style typography scale and design tokens for consistent styling across all new components.

#### Files Created
- `src/styles/typography.css` - Apple-style type scale (font sizes, weights, line heights)

#### What's Included

**Display Typography (Hero sections):**
- `.text-hero` - Extra large hero text (clamp 4.5rem to 9rem)
- `.text-display-xl` - Display extra large
- `.text-display-lg` - Display large
- `.text-display-md` - Display medium
- `.text-display-sm` - Display small

**Heading Typography:**
- `.heading-xl` through `.heading-xs` - Scalable heading sizes with proper tracking and weights

**Body Typography:**
- `.body-lg`, `.body-md`, `.body-sm`, `.body-xs` - Body text sizes with optimized line heights

**Gradient Text Utilities:**
- `.gradient-text-primary` - Violet to Blue gradient
- `.gradient-text-secondary` - Teal to Cyan gradient
- `.gradient-text-accent` - Blue to Teal gradient
- `.gradient-text-hero` - Purple/Indigo spectrum (for dark backgrounds)
- `.gradient-text-light` - Light gradient for dark backgrounds
- `.gradient-text-animated` - Animated gradient with 8s cycle

**Special Styles:**
- `.tagline` - Apple "Personal. Private. Powerful." format (uppercase, tracked)
- `.subtitle` - Secondary color subtitle styling
- `.label` - Uppercase label/caption style
- `.price-display` - Large price typography
- `.feature-title` - Feature card titles
- `.section-heading` - Section headings

**Text Utilities:**
- `.text-balance` - Balanced text wrapping for headings
- `.text-pretty` - Pretty text wrapping for paragraphs
- `.no-orphans` - Prevents orphaned text
- `.truncate-lines-2`, `.truncate-lines-3` - Line clamping utilities

#### Acceptance Criteria Met
- [x] Typography CSS file created with scalable type system (text-xs through text-7xl)
- [x] Gradient text utility classes defined
- [x] Consistent with existing Tailwind configuration

## Testing

### Playwright Tests Added
- `tests/typography.spec.ts` - 24 tests covering all typography utilities
  - Display typography tests (font sizes, weights)
  - Heading typography tests
  - Body typography tests
  - Gradient text tests (transparency, background-clip, animations)
  - Special styles tests (uppercase transforms, font weights)
  - Text utilities tests (line clamping, overflow)
  - Responsive typography tests (viewport scaling)

### Test Results
- **24 tests passed** (100% pass rate)
- All typography utilities verified in production environment

## Infrastructure

### Test Infrastructure Added
- `playwright.config.ts` - Playwright configuration with dev server integration
- `src/pages/test-utils/typography.astro` - Typography test page for E2E testing

## Breaking Changes

None. This is a backward-compatible feature addition.

## Dependencies

No new dependencies added.

## Migration Guide

No migration required. New CSS classes are opt-in and don't affect existing styles.

## Usage Examples

```html
<!-- Hero text with gradient -->
<h1 class="text-hero gradient-text-primary">Lattice</h1>

<!-- Apple-style tagline -->
<p class="tagline">Personal. Private. Powerful.</p>

<!-- Section heading -->
<h2 class="section-heading gradient-text-accent">Features</h2>

<!-- Price display -->
<span class="price-display">$99</span>
```

## Next Up

The following features are next in the backlog:
- Feature 1.2: Animation Utilities
- Feature 1.3: GradientText Component
- Feature 1.4: DualCTA Component
- Feature 1.5: DocsLink Component
