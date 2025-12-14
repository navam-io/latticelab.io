# Release 0.20.0 - FeatureHero Component

**Release Date:** December 14, 2025

## Overview

New FeatureHero component for feature pages providing Apple-style gradient headlines, period-separated taglines, product screenshots with browser chrome, and customizable color schemes.

## Completed Feature

### Feature 5.2: FeatureHero Component

**Spec Reference:** Part 4, Section 4.2 (Section 1: Hero)
**Complexity:** M (Medium)

**Description:**
Build gradient headline hero component for feature pages. The component displays large gradient headlines, "Personal. Private. Powerful." style taglines, feature descriptions, and product screenshots in a browser frame.

**Files Created:**
- `src/components/features/FeatureHero.vue` - Gradient headline hero component
- `src/pages/test-utils/feature-hero.astro` - Test page with 6 configurations
- `tests/feature-hero.spec.ts` - 49 comprehensive tests

## Component Features

### Props Interface

```typescript
interface Props {
  headline: string                    // Main headline text
  tagline?: string                    // Period-separated tagline (auto-formatted)
  description?: string                // Description paragraph
  productImage?: string               // Product screenshot URL
  productImageAlt?: string            // Alt text for image
  browserUrl?: string                 // Browser URL bar text
  showImagePlaceholder?: boolean      // Show placeholder when no image
  showCTAs?: boolean                  // Show CTA buttons (default: true)
  primaryCTA?: string                 // Primary button text
  primaryHref?: string                // Primary button link
  secondaryCTA?: string               // Secondary button text
  secondaryHref?: string              // Secondary button link
  colorScheme?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose'
  headlineSize?: 'hero' | 'display-xl' | 'display-lg'
  gradientVariant?: 'hero' | 'primary' | 'secondary' | 'accent' | 'light'
  fadeToBackground?: 'white' | 'gray' | 'transparent'
  testId?: string
}
```

### Key Features

**Gradient Headlines:**
- Large gradient text using GradientText component
- Configurable size (hero, display-xl, display-lg)
- Multiple gradient variants (hero, primary, secondary, accent, light)

**Period-Separated Taglines:**
- Apple Intelligence style: "Personal. Private. Powerful."
- Auto-formats words without periods (e.g., "Save Export Share" → "Save. Export. Share.")
- Pre-formatted taglines preserved as-is

**Product Screenshots:**
- Browser window frame with controls (red, yellow, green dots)
- Customizable URL bar text
- Glow effect behind image
- Placeholder option when no image provided

**Color Schemes:**
- Violet (default): Purple-to-indigo gradient
- Blue: Blue-to-violet gradient
- Teal: Teal-to-blue gradient
- Amber: Amber-to-red gradient
- Rose: Rose-to-purple gradient

**Background Effects:**
- Subtle pattern background
- Bottom fade to white/gray/transparent
- Glow effect matching color scheme

### Animations
- Headline: fade-in (0.8s)
- Tagline/Description: slide-up (0.8s, 0.2s delay)
- CTAs: slide-up (0.8s, 0.4s delay)
- Product Image: fade-in (0.8s, 0.6s delay)

## Usage Example

```astro
---
import FeatureHero from '../components/features/FeatureHero.vue';
---

<FeatureHero
  client:load
  headline="Your Knowledge. Unified."
  tagline="Personal Private Powerful"
  description="Build a curated knowledge base from multiple sources."
  productImage="/images/sources-screenshot.png"
  productImageAlt="Sources panel"
  colorScheme="violet"
  primaryCTA="Get Started"
  primaryHref="/#pricing"
  secondaryCTA="Learn more"
  secondaryHref="#overview"
/>
```

## Acceptance Criteria - All Met

- [x] Large gradient headline
- [x] "Personal. Private. Powerful." style tagline format
- [x] Feature description paragraph
- [x] Product screenshot placeholder

## Test Coverage

49 new tests covering:
- Structure (3 tests)
- Headline (3 tests)
- Tagline (3 tests)
- Description (2 tests)
- CTAs (6 tests)
- Product Image (4 tests)
- Placeholder Image (2 tests)
- Color Schemes (5 tests)
- Minimal Configuration (5 tests)
- Fade Background (2 tests)
- Browser Frame (2 tests)
- Responsive Behavior (4 tests)
- Animations (4 tests)
- Gradient Variants (2 tests)
- Headline Sizes (2 tests)

## Phase Progress

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | 2 | 0 |
| Phase 5: Feature Pages | 13 | **2** | **11** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **20** | **21** |

## Technical Notes

### Dependencies
- Uses GradientText component (Feature 1.3)
- Uses DualCTA component (Feature 1.4)

### Tagline Auto-Formatting
The component automatically converts space-separated words to period-separated format:
```javascript
// Input: "Personal Private Powerful"
// Output: "Personal. Private. Powerful."
```

If the tagline already contains periods, it's used as-is.

## Upgrade Notes

This is a new component with no breaking changes. Feature pages can now use FeatureHero instead of ProductHero for a more Apple-style presentation.

### Migration from ProductHero
FeatureHero provides similar functionality to ProductHero but with:
- Period-separated tagline support
- Multiple color schemes
- Configurable headline sizes and gradient variants
- Better animation sequencing
