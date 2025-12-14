# Release 0.2.0

**Release Date:** December 14, 2025

## Overview

This release adds animation utilities for the Apple-style website redesign, providing smooth transitions, fade/slide/scale animations, backdrop blur effects, and scroll-triggered animations.

## Features Completed

### Feature 1.2: Animation Utilities
**Spec Reference:** Part 8, Section 8.2
**Complexity:** S (Small)

#### Description
Created animation utility classes for smooth transitions used throughout the redesign, including the 200ms standard transition duration specified in the design requirements.

#### Files Created
- `src/styles/animations.css` - Transition utilities (fade, slide, scale, blur, scroll-triggered)

#### What's Included

**CSS Variables:**
- Duration variables: `--duration-instant`, `--duration-fast` (150ms), `--duration-normal` (200ms), `--duration-slow` (300ms), `--duration-slower` (500ms)
- Easing variables: `--ease-default`, `--ease-in`, `--ease-out`, `--ease-in-out`, `--ease-bounce`, `--ease-spring`

**Base Transition Utilities:**
- `.transition-base` - 200ms all-property transition (per spec)
- `.transition-fast` - 150ms transition
- `.transition-slow` - 300ms transition
- `.transition-opacity` - Opacity-only transition
- `.transition-transform` - Transform-only transition
- `.transition-colors` - Color properties transition
- `.transition-shadow` - Box-shadow transition

**Fade Animations:**
- `.animate-fade-in` - Simple fade in
- `.animate-fade-out` - Simple fade out
- `.animate-fade-in-up` - Fade in with upward movement
- `.animate-fade-in-down` - Fade in with downward movement

**Slide Animations:**
- `.animate-slide-in-left` - Slide from left
- `.animate-slide-in-right` - Slide from right (for mobile nav)
- `.animate-slide-out-right` - Slide out to right
- `.animate-slide-in-up` - Slide from bottom
- `.animate-slide-in-down` - Slide from top (for dropdowns)

**Scale Animations:**
- `.animate-scale-in` - Scale in with spring easing
- `.animate-scale-out` - Scale out
- `.hover-scale` - Scale to 1.02 on hover
- `.hover-scale-lg` - Scale to 1.05 on hover

**Backdrop Blur Effects:**
- `.backdrop-blur-sm` - 4px blur
- `.backdrop-blur-base` - 8px blur (standard)
- `.backdrop-blur-md` - 12px blur
- `.backdrop-blur-lg` - 16px blur
- `.backdrop-blur-xl` - 24px blur
- `.backdrop-overlay` - Dark overlay with blur (for mega menu)
- `.backdrop-overlay-light` - Light overlay with blur

**Scroll-Triggered Animations:**
- `.scroll-animate` - Fade in + translateY on scroll
- `.scroll-animate-scale` - Scale in on scroll
- `.scroll-animate-stagger-1` through `.scroll-animate-stagger-5` - Staggered delays (0ms to 400ms)
- `.in-view` - Class to trigger animations when in viewport

**Interactive State Transitions:**
- `.card-hover` - Card lift effect on hover
- `.btn-hover` - Button press effect
- `.link-underline` - Animated underline on hover

**Menu & Dropdown Animations:**
- `.dropdown-enter` / `.dropdown-enter-active` / `.dropdown-leave-active` - Dropdown states
- `.mobile-menu-enter` / `.mobile-menu-enter-active` / `.mobile-menu-leave-active` - Mobile overlay states
- `.mobile-panel-enter` / `.mobile-panel-enter-active` / `.mobile-panel-leave-active` - Mobile panel slide states

**Loading Animations:**
- `.animate-pulse-slow` - 2s pulse animation
- `.skeleton-shimmer` - Skeleton loading shimmer effect

**Accessibility:**
- Full `prefers-reduced-motion` support - animations disabled for users who prefer reduced motion

#### Acceptance Criteria Met
- [x] Smooth 200ms transition animations defined
- [x] Backdrop blur effect utilities available
- [x] Scroll-triggered animation classes ready

## Testing

### Playwright Tests Added
- `tests/animations.spec.ts` - 41 tests covering all animation utilities
  - Transition duration tests (200ms, 150ms, 300ms)
  - Fade animation tests
  - Slide animation tests
  - Scale animation tests
  - Backdrop blur tests (4px through 24px)
  - Backdrop overlay tests
  - Scroll-triggered animation tests
  - Interactive state tests
  - Menu animation state tests
  - Loading animation tests
  - CSS variable definition tests

### Test Results
- **65 tests passed** (24 typography + 41 animation)
- All animation utilities verified in production environment
- No regressions in existing typography tests

## Infrastructure

### Test Page Added
- `src/pages/test-utils/animations.astro` - Animation utilities test page with all animation demonstrations

## Breaking Changes

None. This is a backward-compatible feature addition.

## Dependencies

No new dependencies added.

## Migration Guide

No migration required. New CSS classes are opt-in and don't affect existing styles.

## Usage Examples

```html
<!-- Standard transition on any element -->
<button class="transition-base hover:bg-violet-700">Button</button>

<!-- Fade in animation on mount -->
<div class="animate-fade-in-up">Content</div>

<!-- Slide in mobile menu -->
<div class="animate-slide-in-right">Mobile Nav</div>

<!-- Backdrop blur for overlay -->
<div class="backdrop-blur-base bg-white/80">Frosted glass</div>

<!-- Scroll-triggered animation -->
<div class="scroll-animate">
  <!-- Add 'in-view' class via JS when element enters viewport -->
</div>

<!-- Staggered animations -->
<div class="scroll-animate scroll-animate-stagger-1">First</div>
<div class="scroll-animate scroll-animate-stagger-2">Second</div>
<div class="scroll-animate scroll-animate-stagger-3">Third</div>

<!-- Card hover effect -->
<div class="card-hover p-6 bg-white rounded-lg shadow">
  Lifts on hover
</div>

<!-- Loading skeleton -->
<div class="skeleton-shimmer w-full h-4 rounded"></div>
```

### Using with IntersectionObserver

```javascript
// Add 'in-view' class when elements enter viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-animate').forEach(el => {
  observer.observe(el);
});
```

## Next Up

The following features are next in the backlog:
- Feature 1.3: GradientText Component
- Feature 1.4: DualCTA Component
- Feature 1.5: DocsLink Component
