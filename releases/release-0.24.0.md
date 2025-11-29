# Release 0.24.0 — Preview Components: Shared Utilities

**Release Date**: 2025-11-28
**Phase**: Phase 3 (Interactive Previews)
**Feature Slice**: 24

---

## Summary

This release introduces the foundation for interactive preview components that will showcase Lattice Lab's features on the website. Four shared React components were created along with mock data utilities, establishing the building blocks for the ChatPreview, SourcesPreview, BlueprintPreview, and ScenarioPreview components coming in subsequent feature slices.

---

## New Components

### TypingIndicator (`src/components/previews/shared/TypingIndicator.tsx`)
- Animated typing dots using Framer Motion
- Shows when AI is "thinking" or generating a response
- Staggered animation for natural feel
- Uses design system colors

### CitationPill (`src/components/previews/shared/CitationPill.tsx`)
- Inline citation badge with hover tooltip
- Shows source name, page number, and excerpt
- Accessible aria-labels for screen readers
- Smooth tooltip animations with Framer Motion

### MessageBubble (`src/components/previews/shared/MessageBubble.tsx`)
- Chat message display for user and assistant roles
- Distinct visual styling for each role
- Streaming cursor support for in-progress messages
- Lattice branding on assistant messages

### PreviewContainer (`src/components/previews/shared/PreviewContainer.tsx`)
- Window-like container with macOS-style title bar
- Traffic light dots (red, yellow, green)
- Optional replay button for demo reset
- Consistent styling across all previews

---

## New Utilities

### Preview Data (`src/lib/preview-data.ts`)
- Mock data for demonstrations
- `demoCitations` — 5 sample citations with sources
- `demoChatMessages` — Pre-scripted conversation
- `demoSources` — Sample source documents
- `demoBlueprints` — Sample blueprint cards
- Utility functions: `getTypingDelay`, `parseCitations`, `filterSources`, `filterBlueprints`

---

## New Pages

### Preview Showcase (`/preview-showcase`)
- Development page for testing components
- Demonstrates all shared components
- Noindex to prevent search engine indexing
- Used for visual testing during development

---

## Infrastructure Updates

### PageLayout Enhancement
- Added `noindex` prop support
- Properly passes through to BaseLayout/SEO component

---

## Test Coverage

53 new tests added in `tests/feature-24-preview-shared-utilities.spec.ts`:

- **Page Basics**: 3 tests
- **TypingIndicator**: 6 tests
- **CitationPill**: 8 tests
- **MessageBubble**: 9 tests
- **PreviewContainer**: 8 tests
- **Component Integration**: 5 tests
- **Accessibility**: 6 tests
- **Responsive Design**: 4 tests
- **Animation States**: 4 tests

**Total Test Count**: 1,298 tests (all passing)

---

## Files Created

```
src/components/previews/shared/
├── TypingIndicator.tsx
├── CitationPill.tsx
├── MessageBubble.tsx
├── PreviewContainer.tsx
└── index.ts

src/lib/preview-data.ts
src/components/previews/PreviewShowcase.tsx
src/pages/preview-showcase.astro
tests/feature-24-preview-shared-utilities.spec.ts
```

---

## Files Modified

```
src/layouts/PageLayout.astro  — Added noindex prop support
package.json                  — Version bump to 0.24.0
```

---

## Design System Integration

All components use design system tokens:
- Colors: `bg-accent`, `text-foreground`, `text-muted-foreground`, `border-border`
- Backgrounds: `bg-surface-2`, `bg-background`
- Spacing: Consistent padding and margins
- Typography: Font sizes and weights from Tailwind config

---

## Accessibility

- Citation pills have descriptive `aria-label` attributes
- Icons are decorative (`aria-hidden="true"`)
- Keyboard-accessible buttons
- Proper heading hierarchy
- Distinguishable message types through visual design

---

## Next Steps

Feature Slice 25 will build on these shared components to create the full ChatPreview component with:
- Pre-scripted conversation playback
- Character-by-character streaming
- Citation pill expansion
- Thinking steps display
- Artifact card sidebar

---

## Backlog Status

- **Phase 1 (Foundation)**: Complete (13/13 slices)
- **Phase 2 (Content)**: Complete (10/10 slices)
- **Phase 3 (Interactive)**: In Progress (1/7 slices)
- **Phase 4 (Purchase)**: Planned
- **Phase 5 (Polish)**: Planned

**Overall Progress**: 24/40 feature slices complete (60%)
