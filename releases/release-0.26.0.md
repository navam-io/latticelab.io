# Release 0.26.0 — Sources Preview Component

**Release Date**: 2025-11-28
**Phase**: Phase 3 (Interactive Previews)
**Feature Slice**: 26

---

## Summary

This release introduces the SourcesPreview component, an interactive demo that simulates the Lattice Sources panel. The component showcases file upload functionality with drag & drop, source cards with rich metadata, and real-time search/filter capabilities.

---

## New Components

### SourcesPreview (`src/components/previews/SourcesPreview.tsx`)

A comprehensive React component that demonstrates:

- **File Upload Dropzone**
  - Visual drag & drop interaction
  - Click-to-browse upload trigger
  - Animated upload progress bar (simulated)
  - Progress percentage display
  - Auto-reset after completion

- **Source Cards**
  - Type icons (PDF, URL, API) with distinct colors
  - Source name with truncation
  - Metadata badges (type, page count)
  - Vendor information
  - Date added formatting
  - Staggered animation on mount

- **Hover Actions**
  - View source button
  - Remove source button
  - Smooth fade-in animation
  - Proper keyboard accessibility

- **Search/Filter**
  - Live filtering as you type
  - Filters by name and vendor
  - Clear button when searching
  - Result count with search term
  - Animated card transitions

- **Empty State**
  - Friendly no-results message
  - Clear search button
  - Decorative icon

- **Type Legend**
  - Color-coded legend in header
  - PDF (red), URL (blue), API (purple)

- **Footer Stats**
  - Count of each source type
  - Total page count across sources

---

## New Pages

### Sources Preview Demo (`/sources-preview-demo`)
- Development page for testing the SourcesPreview
- Lists all demo features
- Noindex to prevent search indexing

---

## Configuration Changes

### Playwright Config
- Added 1 retry for local development (was 0)
- Improves test stability for React hydration timing

---

## Test Coverage

56 new tests added in `tests/feature-26-sources-preview.spec.ts`:

- **Demo Page**: 3 tests
- **SourcesPreview Container**: 5 tests
- **Search Functionality**: 6 tests
- **Source Cards**: 8 tests
- **Dropzone**: 6 tests
- **Footer Stats**: 4 tests
- **Hover States**: 5 tests
- **Empty State**: 3 tests
- **Type Legend**: 3 tests
- **Accessibility**: 5 tests
- **Responsive Design**: 4 tests
- **Animation States**: 4 tests

**Total Test Count**: 1,410 tests (all passing, some with retry)

---

## Files Created

```
src/components/previews/SourcesPreview.tsx
src/pages/sources-preview-demo.astro
tests/feature-26-sources-preview.spec.ts
releases/release-0.26.0.md
```

---

## Files Modified

```
package.json                  — Version bump to 0.26.0
playwright.config.ts          — Added retry for local development
```

---

## Technical Details

### Source Data Types
Uses `Source` type from `@/lib/preview-data`:
```typescript
interface Source {
  id: string;
  name: string;
  type: 'pdf' | 'url' | 'api';
  pageCount?: number;
  dateAdded: string;
  vendor?: string;
}
```

### Demo Sources
- OpenAI GPT-4o Technical Report (PDF, 42 pages)
- Anthropic Claude Model Card (PDF, 28 pages)
- LangChain RAG Benchmark 2024 (URL)
- AWS Bedrock Pricing API (API)
- Google Gemini Model Specifications (PDF, 35 pages)

### Upload Simulation
- Progress increments every 200ms by 10%
- Completes at 100%
- Resets to idle after 1 second

### Accessibility
- Keyboard accessible buttons
- Decorative icons use `aria-hidden="true"`
- Action buttons have `aria-label` attributes
- Proper button roles for interactive elements

---

## Usage

```tsx
import { SourcesPreview } from '@/components/previews/SourcesPreview';

// As an Astro React island
<SourcesPreview client:load />
```

---

## Next Steps

Feature Slice 27 (BlueprintPreview Component) will create:
- Blueprint cards with vendor and category
- Category filter tabs
- "Apply Blueprint" button with modal
- Success state animation

---

## Backlog Status

- **Phase 1 (Foundation)**: Complete (13/13 slices)
- **Phase 2 (Content)**: Complete (10/10 slices)
- **Phase 3 (Interactive)**: In Progress (3/7 slices)
- **Phase 4 (Purchase)**: Planned
- **Phase 5 (Polish)**: Planned

**Overall Progress**: 26/40 feature slices complete (65%)
