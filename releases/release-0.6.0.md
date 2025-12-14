# Release 0.6.0

**Release Date:** December 14, 2025

## Overview

This release adds the NavDropdown Vue component, a navigation column component for building mega menus with support for links, descriptions, badges, featured items, and footer links.

## Features Completed

### Feature 2.1: NavDropdown Component
**Spec Reference:** Part 6, Section 6.4
**Complexity:** M (Medium)
**Dependency:** None

#### Description
Built a reusable NavDropdown component for individual dropdown columns in navigation menus. Supports multiple variants and features for building flexible mega menu patterns.

#### Files Created
- `src/components/navigation/NavDropdown.vue` - Navigation dropdown column component

#### What's Included

**Props:**
- `title` - Column header text (optional)
- `links` (required) - Array of navigation links
- `footerLink` - Optional footer link at bottom
- `variant` - Style variant ('default', 'compact', 'featured')
- `showDescriptions` - Whether to show link descriptions (default: true)
- `showArrows` - Whether to show arrow icons on all links
- `testId` - Test ID for component

**Link Object Properties:**
- `label` (required) - Link text
- `href` (required) - Link URL
- `description` - Optional description text
- `icon` - Optional Vue component icon
- `badge` - Optional badge text/number
- `featured` - Whether link has featured styling
- `color` - Custom color classes for icon container

**Style Variants:**
- `default` - Standard dropdown styling with hover effects
- `compact` - Reduced padding for dense menus
- `featured` - Enhanced styling for primary navigation

**Features:**
- Column header with uppercase styling and letter spacing
- Links with label, description, and optional icons
- Featured links with gradient background and border
- Badge support for counts or labels
- Footer link with arrow icon
- Arrow icons on featured links or all links
- Smooth hover transitions
- Responsive design

#### Accessibility Features
- Proper ARIA roles (menu, menuitem, none)
- Keyboard focusable links
- Semantic heading for column titles

#### Acceptance Criteria Met
- [x] Column layout with heading and links
- [x] Support for descriptions on links
- [x] Badge support for counts/labels
- [x] Featured link styling
- [x] Footer link option
- [x] Multiple style variants
- [x] Proper accessibility roles

## Testing

### Playwright Tests Added
- `tests/nav-dropdown.spec.ts` - 47 tests covering all component functionality
  - Basic usage tests (title, links, hrefs, labels, descriptions)
  - Without descriptions tests
  - Compact variant tests
  - Featured variant tests (gradient, border, arrows)
  - Badge tests (styling, counts, labels)
  - Footer link tests (visibility, href, arrow, color)
  - Arrows tests
  - Without title tests
  - 3-column layout tests
  - Featured items mix tests
  - Real-world mega menu tests
  - Accessibility tests (roles, keyboard focus)
  - Styling tests (uppercase, font weight, rounded corners, transitions, flexbox, spacing)
  - Link content tests (label styling, description color, alignment)
  - Footer link styling tests (border, margin, padding)

### Test Results
- **220 tests passed** (24 typography + 41 animation + 37 gradient-text + 34 dual-cta + 37 docs-link + 47 nav-dropdown)
- All component functionality verified in production environment
- No regressions in existing tests

## Infrastructure

### Test Page Added
- `src/pages/test-utils/nav-dropdown.astro` - NavDropdown component test page with all variants and real-world examples

## Breaking Changes

None. This is a backward-compatible feature addition.

## Dependencies

No new dependencies added. Uses existing Vue 3 and Tailwind CSS utilities.

## Migration Guide

No migration required. New component is opt-in.

## Usage Examples

### Basic Usage

```vue
<NavDropdown
  title="Explore"
  :links="[
    { label: 'Features', href: '/features', description: 'All features' },
    { label: 'Pricing', href: '/pricing', description: 'Plans and pricing' }
  ]"
/>
```

### With Badges

```vue
<NavDropdown
  title="Blueprints"
  :links="[
    { label: 'All Blueprints', href: '/blueprints', badge: '36' },
    { label: 'New Releases', href: '/blueprints/new', badge: 'New' },
    { label: 'Popular', href: '/blueprints/popular' }
  ]"
/>
```

### Featured Link

```vue
<NavDropdown
  title="Solutions"
  :links="[
    { label: 'Enterprise', href: '/enterprise', description: 'Scale AI', featured: true },
    { label: 'Startups', href: '/startups', description: 'Ship faster' }
  ]"
/>
```

### Compact Variant

```vue
<NavDropdown
  title="More"
  variant="compact"
  :links="[
    { label: 'Support', href: '/support' },
    { label: 'Contact', href: '/contact' }
  ]"
  :showDescriptions="false"
/>
```

### With Footer Link

```vue
<NavDropdown
  title="Resources"
  :links="[
    { label: 'Documentation', href: '/docs' },
    { label: 'Blog', href: '/blog' }
  ]"
  :footerLink="{ label: 'View all resources', href: '/resources' }"
/>
```

### 3-Column Mega Menu

```vue
<div class="grid grid-cols-3 gap-8">
  <NavDropdown
    title="Explore"
    :links="exploreLinks"
  />
  <NavDropdown
    title="Configure"
    :links="configureLinks"
  />
  <NavDropdown
    title="Resources"
    :links="resourceLinks"
    :showDescriptions="false"
    :footerLink="{ label: 'Compare Features', href: '/compare' }"
  />
</div>
```

## Astro Integration

When using in Astro files, define link arrays in frontmatter and pass as props:

```astro
---
import NavDropdown from '@components/navigation/NavDropdown.vue';

const exploreLinks = [
  { label: 'Features', href: '/features', description: 'Overview' },
  { label: 'Sources', href: '/features/sources', description: 'Knowledge Management' }
];
---

<NavDropdown
  client:load
  title="Explore"
  links={exploreLinks}
/>
```

## Phase 2 Progress

This release begins Phase 2: Navigation of the website redesign:
- Feature 2.1: NavDropdown Component (v0.6.0) - Complete
- Feature 2.2: MegaMenu Component - Next
- Feature 2.3: MobileNav Component - Pending
- Feature 2.4: Header Integration - Pending

## Next Up

The following features are next in the backlog:
- Feature 2.2: MegaMenu Component - Container with animation, backdrop, and multi-column support
- Feature 2.3: MobileNav Component - Responsive mobile navigation drawer
- Feature 2.4: Header Integration - Integrate all navigation components
