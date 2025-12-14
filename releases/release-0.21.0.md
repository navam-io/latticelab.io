# Release 0.21.0 - CapabilitySection Component

**Release Date:** December 14, 2025

## Overview

New CapabilitySection component for feature pages providing alternating layout sections with image/content pairs, large section titles, feature lists with checkmarks, and optional journey guide links.

## Completed Feature

### Feature 5.3: CapabilitySection Component

**Spec Reference:** Part 4, Section 4.2 (Section 2: Capability Showcase)
**Complexity:** M (Medium)

**Description:**
Build alternating layout component for feature capabilities. The component displays capability sections with configurable image position (left/right), icon, title, description, feature bullet list, and journey guide links.

**Files Created:**
- `src/components/features/CapabilitySection.vue` - Alternating layout component
- `src/pages/test-utils/capability-section.astro` - Test page with 7 configurations
- `tests/capability-section.spec.ts` - 60 comprehensive tests

## Component Features

### Props Interface

```typescript
interface Props {
  title: string                           // Section title
  description?: string                    // Section description
  features?: string[]                     // Feature bullet points (supports HTML)
  image?: string                          // Image URL
  imageAlt?: string                       // Image alt text
  icon?: string                           // Icon SVG path
  iconColor?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose' | 'green'
  imagePosition?: 'left' | 'right'        // Image position
  background?: 'white' | 'gray'           // Background color
  showBrowserFrame?: boolean              // Show browser frame around image
  showGlow?: boolean                      // Show glow effect behind image
  showPlaceholder?: boolean               // Show placeholder when no image
  journeyLink?: string                    // Journey guide link URL
  journeyLinkText?: string                // Journey guide link text
  testId?: string                         // Test ID prefix
}
```

### Key Features

**Alternating Layout:**
- Image left or right with content on opposite side
- 2-column grid on desktop, stacked on mobile
- Order classes ensure proper mobile stacking

**Icon Support:**
- 6 color variants (violet, blue, teal, amber, rose, green)
- Rounded container with matching background
- SVG path-based icons for flexibility

**Feature List:**
- Green checkmark icons for each feature
- HTML content support for emphasis (`<strong>`)
- Clean spacing between items

**Browser Frame:**
- Optional macOS-style browser chrome
- Red, yellow, green window controls
- Clean white/gray header bar

**Glow Effect:**
- Optional gradient glow behind image
- Color matches icon color scheme
- Blur effect for subtle depth

**Journey Guide Link:**
- Optional call-to-action link
- Animated arrow icon on hover
- Customizable link text

## Usage Example

```astro
---
import CapabilitySection from '../components/features/CapabilitySection.vue';

const features = [
  'Import from <strong>PDF, DOCX, TXT</strong> and more',
  'Connect to <strong>Google Docs</strong> (v0.6.2+)',
  'Automatic <strong>chunking</strong> and indexing'
];

const databaseIcon = 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4';
---

<CapabilitySection
  client:load
  title="Multi-Source Ingestion"
  description="Build a comprehensive knowledge base from multiple document types."
  features={features}
  image="/images/sources-screenshot.png"
  imageAlt="Sources panel"
  icon={databaseIcon}
  iconColor="violet"
  imagePosition="left"
  background="white"
  showBrowserFrame={true}
  journeyLink="/journeys/add-sources"
  journeyLinkText="Learn how to add sources"
/>
```

### Alternating Pattern Example

```astro
<!-- Section 1: Image Left -->
<CapabilitySection
  imagePosition="left"
  background="white"
  ...
/>

<!-- Section 2: Image Right -->
<CapabilitySection
  imagePosition="right"
  background="gray"
  ...
/>

<!-- Section 3: Image Left -->
<CapabilitySection
  imagePosition="left"
  background="white"
  ...
/>
```

## Acceptance Criteria - All Met

- [x] Alternating image left/right layout
- [x] Large section titles
- [x] Detailed feature descriptions
- [x] Optional journey guide link

## Test Coverage

60 new tests covering:
- Structure (3 tests)
- Title (3 tests)
- Description (2 tests)
- Features List (4 tests)
- Icon (6 tests)
- Image Position (3 tests)
- Background (2 tests)
- Browser Frame (3 tests)
- Screenshot (3 tests)
- Placeholder (2 tests)
- Journey Link (6 tests)
- Glow Effect (3 tests)
- Minimal Configuration (5 tests)
- Responsive Behavior (4 tests)
- Alternating Layout Pattern (4 tests)
- Color Scheme Variations (5 tests)
- No Icon Configuration (2 tests)

## Phase Progress

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | 2 | 0 |
| Phase 5: Feature Pages | 13 | **3** | **10** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **21** | **20** |

## Technical Notes

### Dependencies
- None (standalone component)

### Color System
The component uses a consistent color system across:
- Icon background (e.g., `bg-violet-100`)
- Icon color (e.g., `text-violet-600`)
- Glow effect (e.g., `from-violet-400/20 to-purple-400/20`)

### Responsive Behavior
- **Mobile**: Single column, image stacks above content
- **Desktop (lg+)**: Two-column grid with alternating positions

### HTML in Features
Features support HTML for emphasis:
```javascript
features={[
  'Import from <strong>PDF, DOCX</strong>',
  '<strong>Semantic search</strong> enabled'
]}
```
Uses `v-html` directive for rendering.

## Upgrade Notes

This is a new component with no breaking changes. Feature pages can now use CapabilitySection for their capability showcase sections.

### Typical Page Structure
```
FeatureHero (v0.20.0)
  ↓
CapabilitySection (v0.21.0) × N
  ↓
TechSpecs (upcoming)
  ↓
RelatedContent (upcoming)
```
