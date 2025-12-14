# Release 0.22.0 - TechSpecs Component

**Release Date:** December 14, 2025

## Overview

New TechSpecs component for feature pages providing technical specifications display in both grid card format and table format, with support for categorized spec lists, vendor comparison tables, and documentation links.

## Completed Feature

### Feature 5.4: TechSpecs Component

**Spec Reference:** Part 4, Section 4.2 (Section 4: Technical Details)
**Complexity:** S (Small)

**Description:**
Build specifications table component for technical details. The component supports two display modes: a card grid for categorized specifications and a table for comparison data.

**Files Created:**
- `src/components/features/TechSpecs.vue` - Specifications display component
- `src/pages/test-utils/tech-specs.astro` - Test page with 7 configurations
- `tests/tech-specs.spec.ts` - 51 comprehensive tests

## Component Features

### Props Interface

```typescript
interface SpecItem {
  category: string                        // Category name
  items: string[]                         // List of items (supports HTML)
  icon?: string                           // Optional icon SVG path
  color?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose' | 'green'
}

interface Props {
  title?: string                          // Section title
  description?: string                    // Section description
  icon?: string                           // Icon SVG path for header
  iconColor?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose' | 'green'
  specs?: SpecItem[]                      // Specs in card grid format
  tableHeaders?: string[]                 // Table headers (for table view)
  tableData?: (string | boolean)[][]      // Table data rows
  background?: 'white' | 'gray'           // Background color
  columns?: 2 | 3 | 4                     // Number of columns in grid
  docsLink?: string                       // Link to documentation
  docsLinkText?: string                   // Docs link text
  testId?: string                         // Test ID prefix
}
```

### Key Features

**Grid Card Mode:**
- Display specifications in categorized cards
- 2, 3, or 4 column layouts
- Each card has optional icon, category name, and item list
- Items support HTML for emphasis (`<strong>`)
- Green checkmarks for each item

**Table Mode:**
- Display comparison data in table format
- Custom headers
- Boolean values render as checkmarks/X marks
- Horizontal scroll on mobile for wide tables

**Color Schemes:**
- 6 color variants for icons (violet, blue, teal, amber, rose, green)
- Each spec card can have its own color

**Documentation Link:**
- Optional link to full documentation
- Animated arrow on hover
- Customizable link text

## Usage Examples

### Grid Card Mode

```astro
---
import TechSpecs from '../components/features/TechSpecs.vue';

const specs = [
  {
    category: 'Supported Formats',
    icon: 'M9 12h6m-6 4h6m2 5H7...',
    color: 'violet',
    items: [
      '<strong>PDF</strong> - Technical papers',
      '<strong>DOCX</strong> - Word documents',
      '<strong>JSON</strong> - Structured data'
    ]
  },
  {
    category: 'Cloud Integrations',
    icon: 'M3 15a4 4 0 004 4h9...',
    color: 'blue',
    items: [
      '<strong>Google Docs</strong>',
      '<strong>GitHub</strong> - Repos',
      '<strong>YouTube</strong> - Transcripts'
    ]
  }
];
---

<TechSpecs
  client:load
  title="Technical Specifications"
  description="Supported formats and integrations"
  specs={specs}
  columns={3}
  docsLink="/docs/features/sources"
/>
```

### Table Mode

```astro
---
const headers = ['Vendor', 'GPUs', 'Spot', 'Blueprints'];
const data = [
  ['AWS', '12 GPU types', true, '14'],
  ['Google Cloud', '8 GPU types', true, '10'],
  ['Lambda Labs', '4 GPU types', false, '4']
];
---

<TechSpecs
  client:load
  title="Vendor Support Matrix"
  tableHeaders={headers}
  tableData={data}
  docsLink="/docs/blueprints"
/>
```

## Acceptance Criteria - All Met

- [x] Clean table layout
- [x] Supported formats/vendors list
- [x] Configuration options display

## Test Coverage

51 new tests covering:
- Structure (3 tests)
- Title and Description (3 tests)
- Header Icon (5 tests)
- Specs Grid (5 tests)
- Spec Card Icons (4 tests)
- Grid Columns (3 tests)
- Background (2 tests)
- Table View (8 tests)
- Docs Link (6 tests)
- Minimal Configuration (2 tests)
- Color Variants (4 tests)
- Responsive Behavior (4 tests)
- Accessibility (3 tests)

## Phase Progress

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | 2 | 0 |
| Phase 5: Feature Pages | 13 | **4** | **9** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **22** | **19** |

## Technical Notes

### Display Modes

The component supports two mutually exclusive display modes:

1. **Grid Mode**: When `specs` prop is provided
   - Shows categorized specification cards
   - Supports 2, 3, or 4 columns

2. **Table Mode**: When `tableHeaders` and `tableData` props are provided
   - Shows comparison table
   - Boolean values auto-render as icons

### HTML Content Support

Both modes support HTML in content:
```javascript
// Grid mode
items: ['<strong>PDF</strong> - Technical papers']

// Table mode
tableData: [['<strong>AWS</strong>', '12 types', true]]
```

### Responsive Behavior

- Grid: Single column on mobile, responsive columns on larger screens
- Table: Horizontal scroll enabled for wide tables on mobile

## Upgrade Notes

This is a new component with no breaking changes. Feature pages can now use TechSpecs for their technical details sections.

### Typical Page Structure
```
FeatureHero (v0.20.0)
  ↓
CapabilitySection (v0.21.0) × N
  ↓
TechSpecs (v0.22.0)
  ↓
RelatedContent (upcoming)
```
