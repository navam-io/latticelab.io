# Release 0.33.0

**Release Date:** December 14, 2025
**Phase:** Phase 6 - Tools Section
**Feature:** 6.2 - ToolCard Component

## Summary

Created the ToolCard Vue component for showcasing individual tools with icon, name, description, features list, and CTAs. Supports multiple sizes and customization options.

## Changes

### New Files
- `src/components/tools/ToolCard.vue` - Tool showcase card component
- `src/pages/test-utils/tool-card.astro` - Test page for ToolCard
- `tests/tool-card.spec.ts` - 52 tests for ToolCard component

### Component Features

**ToolCard Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| name | string | required | Tool name |
| description | string | required | Tool description |
| icon | string | required | SVG path for icon |
| iconBg | string | 'bg-violet-100' | Icon background color |
| iconColor | string | 'text-violet-600' | Icon color |
| category | string | - | Tool category badge |
| showCategory | boolean | false | Show category badge |
| features | string[] | [] | Feature highlights |
| showFeatures | boolean | true | Show features list |
| maxFeatures | number | 3 | Max features to display |
| exploreHref | string | required | Explore link URL |
| exploreText | string | 'Explore' | Explore button text |
| demoHref | string | - | Demo link URL |
| demoText | string | 'Try Demo' | Demo button text |
| showDemoBtn | boolean | false | Show demo button |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Card size variant |

**Size Variants:**
- **sm**: Compact card (p-4, w-10 icon)
- **md**: Standard card (p-6, w-12 icon)
- **lg**: Large card (p-8, w-14 icon)

**Visual Features:**
- Rounded corners (rounded-2xl)
- Border with hover effect (border-gray-200 -> violet-300)
- Shadow on hover with lift animation
- Category badges with capitalize styling
- Feature list with checkmark icons
- "+N more features" indicator

## Test Coverage

- 52 new tests added
- Tests verify:
  - Default card rendering (icon, name, description, CTAs)
  - Features display with limit and "more" indicator
  - Category badge visibility and styling
  - Demo button presence and linking
  - Size variants (sm, md, lg) styling
  - Custom CTA text support
  - Grid layout compatibility
  - Card styling (border, background, transitions)
  - Accessibility (article, heading, link roles)

## Usage Example

```vue
<ToolCard
  name="Memory Calculator"
  description="Estimate model memory requirements"
  icon="M9 7h6m0 10v-3..."
  iconBg="bg-blue-100"
  iconColor="text-blue-600"
  category="calculator"
  showCategory
  :features="['Feature 1', 'Feature 2', 'Feature 3']"
  exploreHref="/tools/memory-calculator"
  showDemoBtn
  demoHref="/tools/memory-calculator/demo"
/>
```

## Breaking Changes

None

## Feature Specification

**Spec Reference:** Part 5, Section 5.2

**Acceptance Criteria:**
- [x] Icon + Name + Description display
- [x] Feature highlights
- [x] "Explore" and "Try Demo" CTAs

## Next Steps

- Feature 6.3: ToolDemo Component
- Feature 6.4: Tools Hub Page
