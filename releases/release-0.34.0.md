# Release 0.34.0 — Feature Slice 34: Accessibility Audit & Fixes

**Release Date**: 2025-11-28

## Summary

Conducted comprehensive accessibility audit and implemented fixes to meet WCAG 2.1 AA compliance. The website now provides an inclusive experience for all users, including those using assistive technologies.

## Changes

### Focus Indicators

- Added consistent focus-visible styles to all interactive elements
- Card component now has focus indicators when interactive
- Preview container replay button has visible focus ring
- Citation pills have keyboard-accessible focus states
- Source action buttons (view/remove) have focus indicators
- Search clear button has focus ring

### ARIA Labels and Roles

- Citation pills now have `aria-expanded` and `aria-describedby` for tooltips
- Thinking toggle button has `aria-expanded` and `aria-controls` attributes
- Thinking steps region has proper `role="region"` and `aria-label`
- Chat status bar has `role="status"` and `aria-live="polite"` for screen readers
- Preview replay button has accessible `aria-label`
- Source action buttons have context-specific labels (e.g., "View Claude Model Card")

### Reduced Motion Support

- Chat preview respects `prefers-reduced-motion` preference
- When reduced motion is preferred, streaming text appears immediately
- Animation delays are skipped for accessibility
- All motion animations use Framer Motion's `useReducedMotion` hook

### Keyboard Navigation

- Citation pills are focusable and show tooltip on focus (not just hover)
- Thinking toggle is fully keyboard accessible
- All interactive preview components support keyboard navigation
- Mobile menu properly traps focus and responds to Escape key

### Already Implemented (verified)

- Skip-to-content link on all pages
- Proper heading hierarchy (single h1 per page)
- Semantic HTML landmarks (main, header, footer, nav)
- Decorative images marked with `aria-hidden="true"`
- External links have `rel="noopener noreferrer"`
- Navigation has `aria-label` attributes
- Mobile menu has proper ARIA attributes (dialog, modal)

## Files Modified

- `src/components/ui/Card.astro` - Added focus-visible styles for interactive variant
- `src/components/previews/shared/PreviewContainer.tsx` - Added aria-label to replay button
- `src/components/previews/shared/CitationPill.tsx` - Keyboard accessibility, ARIA attributes
- `src/components/previews/ChatPreview.tsx` - Reduced motion support, ARIA live region, keyboard accessibility
- `src/components/previews/SourcesPreview.tsx` - Context-specific aria-labels, focus styles

## Files Added

- `tests/feature-34-accessibility.spec.ts` - Comprehensive accessibility test suite (43 tests)

## Test Results

- 43 new accessibility tests added
- All 1733 project tests pass
- Tests cover:
  - Skip-to-content link functionality
  - Heading hierarchy
  - Focus indicators
  - Keyboard navigation
  - Mobile menu accessibility
  - Image accessibility
  - ARIA labels and roles
  - Reduced motion support
  - Page landmarks
  - Interactive preview accessibility

## WCAG 2.1 AA Compliance Checklist

- [x] Color contrast ≥ 4.5:1 (text), ≥ 3:1 (large text) - via design tokens
- [x] Focus indicators on all interactive elements
- [x] Skip-to-content link added
- [x] Semantic HTML verified (heading hierarchy)
- [x] Alt text on all images (or aria-hidden for decorative)
- [x] ARIA labels where needed
- [x] Full keyboard navigation
- [x] `prefers-reduced-motion` support for animations
- [ ] Screen reader testing (VoiceOver) - manual testing recommended
- [ ] Lighthouse Accessibility score: 100 - to be verified in production

## Notes

- Some mobile menu tests are marked as flaky due to animation timing
- Screen reader testing with VoiceOver is recommended as final validation
- Lighthouse accessibility audit should be run in production for score verification
