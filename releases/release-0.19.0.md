# Release 0.19.0 - StickyNav Component

**Release Date:** December 14, 2025

## Overview

New StickyNav component for feature pages providing Apple-style sticky sub-navigation with smooth scroll, active state highlighting, and responsive horizontal scrolling on mobile.

## Completed Feature

### Feature 5.1: StickyNav Component

**Spec Reference:** Part 4, Section 4.1
**Complexity:** M (Medium)

**Description:**
Build sticky sub-navigation for feature pages. The component displays the feature name on the left with navigation links on the right, becomes fixed after scrolling past the hero section, and highlights the active section based on scroll position.

**Files Created:**
- `src/components/features/StickyNav.vue` - Sticky sub-navigation component
- `src/pages/test-utils/sticky-nav.astro` - Test page with multiple configurations
- `tests/sticky-nav.spec.ts` - 43 comprehensive tests

## Component Features

### Navigation Structure
```
[Feature Name]                    Overview | Capabilities | Use Cases | [Buy]
```

### Props Interface

```typescript
interface Props {
  featureName: string           // Feature name displayed on the left
  navItems?: NavItem[]          // Navigation items (defaults to Overview, Capabilities, Use Cases)
  showBuyButton?: boolean       // Whether to show buy button (default: true)
  buyButtonText?: string        // Buy button text (default: "Buy")
  buyButtonHref?: string        // Buy button link (default: "/#pricing")
  stickyOffset?: number         // Offset from top when sticky (default: 64)
  scrollOffset?: number         // Scroll offset for navigation (default: 120)
  testId?: string               // Test ID prefix
}

interface NavItem {
  id: string      // Section ID to scroll to
  label: string   // Display label
}
```

### Key Features

**Sticky Behavior:**
- Initially positioned below hero section
- Becomes fixed after scrolling past initial position
- Accounts for main header height (64px default)
- Smooth transition with shadow when sticky

**Smooth Scroll:**
- Click navigation links to scroll to sections
- Smooth scroll behavior with offset for sticky header
- Prevents default anchor behavior for controlled scrolling

**Active State Highlighting:**
- Tracks scroll position to determine active section
- Highlights current section with violet background
- Inactive items have gray styling with hover effects

**Responsive Design:**
- Full width on all devices
- Horizontal scroll for many nav items on mobile
- Title truncates on narrow viewports
- Touch-friendly tap targets

**Styling:**
- Backdrop blur effect for glass-morphism
- Border bottom for separation
- Pill-shaped navigation links with rounded-full
- Violet accent color for buy button and active states

## Usage Example

```astro
---
import StickyNav from '../components/features/StickyNav.vue';
---

<StickyNav
  client:load
  featureName="Sources"
  navItems={[
    { id: 'overview', label: 'Overview' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'use-cases', label: 'Use Cases' }
  ]}
  buyButtonText="Get Started"
  buyButtonHref="/#pricing"
/>

<section id="overview">...</section>
<section id="capabilities">...</section>
<section id="use-cases">...</section>
```

## Acceptance Criteria - All Met

- [x] Format: "[Feature Name]  Overview | Capabilities | Use Cases | [Buy]"
- [x] Fixed position on scroll (appears after hero)
- [x] Smooth scroll to sections on click
- [x] Active state highlighting
- [x] Mobile: Horizontal scroll

## Test Coverage

43 new tests covering:
- Structure (4 tests)
- Default navigation items (4 tests)
- Buy button (4 tests)
- Custom navigation items (4 tests)
- No buy button configuration (2 tests)
- Mobile horizontal scroll (3 tests)
- Smooth scroll behavior (3 tests)
- Sticky behavior (4 tests)
- Active state highlighting (4 tests)
- Link styling (3 tests)
- Responsive behavior (4 tests)
- Container styling (4 tests)

## Phase Progress

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | 2 | 0 |
| Phase 5: Feature Pages | 13 | **1** | **12** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **19** | **22** |

## Technical Notes

### Scroll Tracking
The component uses `requestAnimationFrame` for efficient scroll tracking:
- Updates sticky state based on scroll position
- Tracks active section by comparing scroll position to section offsets
- Uses passive scroll listeners for performance

### CSS Scoped Styles
Custom CSS is scoped to the component:
- `.scrollbar-hide` for hidden but functional scrollbar on mobile
- Dynamic `top` positioning using `v-bind` for sticky offset

## Upgrade Notes

This is a new component with no breaking changes. Feature pages can now integrate StickyNav for improved navigation UX.

### Dependencies
- No external dependencies
- Uses Vue 3 Composition API with TypeScript
