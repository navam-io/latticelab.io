# Release 0.27.0 — Blueprint Preview Component

**Release Date**: 2025-11-28
**Phase**: Phase 3 (Interactive Previews)
**Feature Slice**: 27

---

## Summary

This release introduces the BlueprintPreview component, an interactive demo that simulates the Lattice Blueprint Gallery. The component showcases blueprint cards with vendor badges, category filter tabs, and a complete "Apply Blueprint" modal flow with loading and success states.

---

## New Components

### BlueprintPreview (`src/components/previews/BlueprintPreview.tsx`)

A comprehensive React component that demonstrates:

- **Blueprint Cards**
  - Vendor-colored badges (Anthropic, OpenAI, AWS, Multi-vendor)
  - Official blueprint star indicator
  - Blueprint name and description
  - Source count metadata
  - Category tag
  - Staggered animation on mount

- **Category Filter Tabs**
  - "All" shows all blueprints
  - "Production" category filter
  - "Enterprise" category filter
  - "Comparison" category filter
  - Active state highlighting
  - Dynamic count updates

- **Hover Actions**
  - "Apply" button appears on card hover
  - Smooth fade-in animation
  - Click triggers modal flow

- **Apply Modal**
  - Loading state with spinner
  - Shows blueprint name being applied
  - Transitions to success state after 1.5s
  - Animated checkmark on success
  - Shows source count added
  - "Done" button to close modal

- **Stats Header**
  - Blueprint count with category filter
  - Official badge legend

- **Footer**
  - Official vs community counts
  - Total source count

---

## New Pages

### Blueprint Preview Demo (`/blueprint-preview-demo`)
- Development page for testing the BlueprintPreview
- Lists all demo features
- Noindex to prevent search indexing

---

## Demo Blueprints

Uses sample data from `@/lib/preview-data`:
- **Anthropic Claude Production Stack** (Production, 12 sources, Official)
- **OpenAI GPT Production Stack** (Production, 15 sources, Official)
- **AWS Bedrock Enterprise** (Enterprise, 18 sources, Official)
- **LLM Comparison Bundle** (Comparison, 20 sources, Community)

---

## Test Coverage

52 new tests added in `tests/feature-27-blueprint-preview.spec.ts`:

- **Demo Page**: 3 tests
- **BlueprintPreview Container**: 5 tests
- **Category Filters**: 6 tests
- **Blueprint Cards**: 8 tests
- **Hover Actions**: 5 tests
- **Apply Modal**: 8 tests
- **Stats and Footer**: 4 tests
- **Accessibility**: 5 tests
- **Responsive Design**: 4 tests
- **Animation States**: 4 tests

**Total Test Count**: 1,462 tests (all passing)

---

## Files Created

```
src/components/previews/BlueprintPreview.tsx
src/pages/blueprint-preview-demo.astro
tests/feature-27-blueprint-preview.spec.ts
releases/release-0.27.0.md
```

---

## Files Modified

```
package.json                  — Version bump to 0.27.0
backlog/active.md             — Updated backlog status
```

---

## Technical Details

### Blueprint Data Type
Uses `Blueprint` type from `@/lib/preview-data`:
```typescript
interface Blueprint {
  id: string;
  name: string;
  vendor: string;
  category: string;
  description: string;
  sourceCount: number;
  isOfficial: boolean;
}
```

### Vendor Colors
```typescript
const vendorColors = {
  Anthropic: 'bg-orange-500/10 text-orange-600',
  OpenAI: 'bg-green-500/10 text-green-600',
  AWS: 'bg-yellow-500/10 text-yellow-700',
  'Multi-vendor': 'bg-purple-500/10 text-purple-600',
};
```

### Modal Flow
1. User hovers card → Apply button appears
2. Click Apply → Modal opens with loading spinner
3. After 1.5s → Success state with animated checkmark
4. Click Done → Modal closes

### Accessibility
- All buttons keyboard accessible
- Decorative icons use `aria-hidden="true"`
- Proper button roles for interactive elements
- Focus management in modal

---

## Usage

```tsx
import { BlueprintPreview } from '@/components/previews/BlueprintPreview';

// As an Astro React island
<BlueprintPreview client:load />
```

---

## Next Steps

Feature Slice 28 (ScenarioPreview Component) will create:
- Workload type dropdown
- Latency and throughput sliders
- Budget input field
- "Get Recommendations" button
- Stack suggestion cards

---

## Backlog Status

- **Phase 1 (Foundation)**: Complete (13/13 slices)
- **Phase 2 (Content)**: Complete (10/10 slices)
- **Phase 3 (Interactive)**: In Progress (4/7 slices)
- **Phase 4 (Purchase)**: Planned
- **Phase 5 (Polish)**: Planned

**Overall Progress**: 27/40 feature slices complete (67.5%)
