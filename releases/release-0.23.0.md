# Release 0.23.0 - RelatedContent Component

**Release Date:** December 14, 2025

## Overview

New RelatedContent component for feature pages providing a unified display of related journey guides, blog posts, and documentation links in a responsive grid layout with auto-adapting columns.

## Completed Feature

### Feature 5.5: RelatedContent Component

**Spec Reference:** Part 4, Section 4.2 (Section 5: Related Content)
**Complexity:** S (Small)

**Description:**
Build component for displaying related journey guides and blog posts. The component organizes related content into three categories with distinct visual styles.

**Files Created:**
- `src/components/features/RelatedContent.vue` - Related content display component
- `src/pages/test-utils/related-content.astro` - Test page with 8 configurations
- `tests/related-content.spec.ts` - 50 comprehensive tests

## Component Features

### Props Interface

```typescript
interface ContentLink {
  title: string        // Link title
  description?: string // Link description
  href: string         // Link URL
}

interface Props {
  title?: string                          // Section title
  description?: string                    // Section description
  icon?: string                           // Icon SVG path for header
  iconColor?: 'violet' | 'blue' | 'teal' | 'amber' | 'rose' | 'green'
  journeys?: ContentLink[]                // Journey guide links
  blogPosts?: ContentLink[]               // Blog post links
  docs?: ContentLink[]                    // Documentation links
  background?: 'white' | 'gray'           // Background color
  columns?: 1 | 2 | 3                     // Grid columns (auto if not set)
  ctaLink?: string                        // CTA button link
  ctaText?: string                        // CTA button text
  testId?: string                         // Test ID prefix
}
```

### Key Features

**Three Content Categories:**

1. **Journey Guides** (violet theme)
   - Map icon in section header
   - Arrow icon per link
   - Hover transitions to violet

2. **Related Posts** (blue theme)
   - Newspaper icon in header
   - Document icon per link
   - Hover transitions to blue

3. **Documentation** (teal theme)
   - Book icon in header
   - Code icon per link
   - Hover transitions to teal

**Auto-Adapting Grid:**
- Automatically adjusts columns based on active sections
- 1 section = 1 column
- 2 sections = 2 columns
- 3 sections = 3 columns
- Can be overridden with `columns` prop

**Link Cards:**
- Icon + Title + Optional description
- Hover animations (translate arrow, color transitions)
- Consistent padding and rounded corners

**CTA Button:**
- Optional call-to-action button at bottom
- Violet filled style with arrow icon
- Customizable text

## Usage Examples

### Full Configuration

```astro
---
import RelatedContent from '../components/features/RelatedContent.vue';

const journeys = [
  {
    title: 'Adding Sources',
    description: 'Learn to import documents',
    href: '/blog/journey-add-sources'
  }
];

const blogPosts = [
  {
    title: 'Understanding Hybrid Search',
    href: '/blog/hybrid-search'
  }
];

const docs = [
  {
    title: 'Sources API Reference',
    description: 'Complete API documentation',
    href: '/docs/api/sources'
  }
];
---

<RelatedContent
  client:load
  title="Learn More"
  description="Explore related resources"
  journeys={journeys}
  blogPosts={blogPosts}
  docs={docs}
  ctaLink="/docs"
  ctaText="View all documentation"
/>
```

### Journeys Only

```astro
<RelatedContent
  client:load
  title="Journey Guides"
  journeys={journeys}
/>
```

### Documentation Focus

```astro
<RelatedContent
  client:load
  title="Documentation"
  icon={bookIcon}
  iconColor="teal"
  docs={docs}
  columns={1}
  ctaLink="/docs"
/>
```

## Acceptance Criteria - All Met

- [x] Journey guides list for feature
- [x] Related blog posts
- [x] Documentation links

## Test Coverage

50 new tests covering:
- Structure (3 tests)
- Title and Description (3 tests)
- Header Icon (4 tests)
- Journey Guides Section (6 tests)
- Blog Posts Section (5 tests)
- Documentation Section (5 tests)
- CTA Button (5 tests)
- Background (2 tests)
- Single Section Configurations (3 tests)
- Minimal Configuration (2 tests)
- Grid Columns (3 tests)
- Responsive Behavior (3 tests)
- Links Without Descriptions (2 tests)
- Accessibility (4 tests)

## Phase Progress

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | 2 | 0 |
| Phase 5: Feature Pages | 13 | **5** | **8** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **23** | **18** |

## Technical Notes

### Color Themes by Category

| Category | Icon BG | Icon Color | Hover BG | Hover Border |
|----------|---------|------------|----------|--------------|
| Journeys | violet-100 | violet-600 | violet-50 | violet-200 |
| Blog Posts | blue-100 | blue-600 | blue-50 | blue-200 |
| Documentation | teal-100 | teal-600 | teal-50 | teal-200 |

### Auto Column Calculation

```javascript
const activeSections = computed(() => {
  let count = 0
  if (props.journeys?.length > 0) count++
  if (props.blogPosts?.length > 0) count++
  if (props.docs?.length > 0) count++
  return count
})
```

### Accessibility

- Section title: `<h2>`
- Category titles: `<h3>` with icon
- Link titles: `<h4>`
- All links are proper `<a>` elements

## Upgrade Notes

This is a new component with no breaking changes. Feature pages can now use RelatedContent for their related resources section.

### Complete Feature Page Structure
```
FeatureHero (v0.20.0)
  ↓
CapabilitySection (v0.21.0) × N
  ↓
TechSpecs (v0.22.0)
  ↓
RelatedContent (v0.23.0)
```

With this release, all Phase 5 component building blocks are complete. The next features (5.6-5.13) will assemble these components into the actual feature pages.
