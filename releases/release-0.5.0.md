# Release 0.5.0

**Release Date:** December 14, 2025

## Overview

This release adds the DocsLink Vue component, a styled callout component for linking to documentation with multiple icon, style, and size variants.

## Features Completed

### Feature 1.5: DocsLink Component
**Spec Reference:** Part 6, Section 6.3
**Complexity:** S (Small)
**Dependency:** None

#### Description
Built a reusable DocsLink component for styled callout boxes that link to documentation, providing visual distinction and consistent navigation patterns across the site.

#### Files Created
- `src/components/shared/DocsLink.vue` - Styled docs callout component

#### What's Included

**Props:**
- `title` (required) - Link title text
- `description` - Optional description text
- `href` (required) - Link URL
- `icon` - Icon type ('document', 'book', 'code', 'guide', 'api')
- `variant` - Style variant ('default', 'subtle', 'bordered', 'filled')
- `size` - Size variant ('sm', 'md', 'lg')
- `external` - Whether link opens in new tab
- `testId` - Test ID for component

**Icon Types:**
- `document` - Default document icon (default)
- `book` - Book icon for guides
- `code` - Code brackets for code examples
- `guide` - Clipboard icon for tutorials
- `api` - Terminal icon for API references

**Style Variants:**
- `default` - Gray background with hover effects
- `subtle` - Transparent background, minimal styling
- `bordered` - White background with border emphasis
- `filled` - Violet background for emphasis

**Size Variants:**
- `sm` - Compact for inline use
- `md` - Standard size (default)
- `lg` - Prominent callout for important links

**Features:**
- Internal links show chevron arrow
- External links show external link icon
- External links open in new tab with `rel="noopener noreferrer"`
- Hover effects with color transitions
- Responsive design

#### Acceptance Criteria Met
- [x] Visually distinct callout box style
- [x] Accepts title, description, and docs URL
- [x] Arrow icon indicating external/internal link

## Testing

### Playwright Tests Added
- `tests/docs-link.spec.ts` - 37 tests covering all component functionality
  - Basic usage tests (title, description, anchor element)
  - Icon variant tests (document, book, code, guide, api)
  - Style variant tests (default, subtle, bordered, filled)
  - Size variant tests (sm, md, lg)
  - External link tests (target, rel, icon)
  - Styling tests (rounded corners, transitions, font weight)
  - Real-world usage examples tests
  - Combined options tests
  - Accessibility tests (keyboard focus, accessible name)
  - Layout tests (flexbox, alignment, gap)

### Test Results
- **173 tests passed** (24 typography + 41 animation + 37 gradient-text + 34 dual-cta + 37 docs-link)
- All component functionality verified in production environment
- No regressions in existing tests

## Infrastructure

### Test Page Added
- `src/pages/test-utils/docs-link.astro` - DocsLink component test page with all variants and real-world examples

## Breaking Changes

None. This is a backward-compatible feature addition.

## Dependencies

No new dependencies added. Uses existing Tailwind CSS utilities and Heroicons-style SVG icons.

## Migration Guide

No migration required. New component is opt-in.

## Usage Examples

### Basic Usage

```vue
<DocsLink
  title="Getting Started"
  href="/docs/getting-started"
/>
```

### With Description

```vue
<DocsLink
  title="Getting Started Guide"
  description="Learn how to install and configure Lattice for your first project."
  href="/docs/getting-started"
/>
```

### Icon Variants

```vue
<!-- Documentation -->
<DocsLink
  title="Documentation"
  description="Browse the full documentation."
  href="/docs"
  icon="document"
/>

<!-- User Guide -->
<DocsLink
  title="User Guide"
  description="Comprehensive guide to using Lattice."
  href="/docs/guide"
  icon="book"
/>

<!-- Code Examples -->
<DocsLink
  title="Code Examples"
  description="Browse code samples and snippets."
  href="/docs/examples"
  icon="code"
/>

<!-- Tutorial -->
<DocsLink
  title="Tutorial"
  description="Step-by-step tutorial for beginners."
  href="/docs/tutorial"
  icon="guide"
/>

<!-- API Reference -->
<DocsLink
  title="API Reference"
  description="Complete API documentation."
  href="/docs/api"
  icon="api"
/>
```

### Style Variants

```vue
<!-- Default (gray background) -->
<DocsLink
  title="Default Variant"
  description="Gray background with hover effects."
  href="/docs"
  variant="default"
/>

<!-- Subtle (transparent) -->
<DocsLink
  title="Subtle Variant"
  description="Minimal styling for inline use."
  href="/docs"
  variant="subtle"
/>

<!-- Bordered -->
<DocsLink
  title="Bordered Variant"
  description="White background with border emphasis."
  href="/docs"
  variant="bordered"
/>

<!-- Filled (violet) -->
<DocsLink
  title="Filled Variant"
  description="Violet background for emphasis."
  href="/docs"
  variant="filled"
/>
```

### External Links

```vue
<DocsLink
  title="GitHub Repository"
  description="Opens in a new tab with external link icon."
  href="https://github.com/example/repo"
  external
/>
```

### Feature Page Integration

```vue
<div class="bg-white border border-gray-200 rounded-xl p-6">
  <h3 class="text-lg font-bold text-gray-900 mb-4">Sources Feature</h3>
  <p class="text-gray-600 mb-4">Learn more about the Sources feature in our documentation.</p>
  <DocsLink
    title="Sources Documentation"
    description="Multi-source ingestion, hybrid search, citation tracking, and more."
    href="/docs/features/sources"
    icon="book"
    variant="bordered"
  />
</div>
```

### Getting Started Section

```vue
<div class="bg-gray-50 rounded-xl p-6">
  <h3 class="text-lg font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
  <div class="space-y-3">
    <DocsLink
      title="Quick Start Guide"
      description="Get up and running in 5 minutes."
      href="/docs/getting-started/quickstart"
      icon="guide"
    />
    <DocsLink
      title="Installation"
      description="Step-by-step installation instructions."
      href="/docs/getting-started/installation"
      icon="code"
    />
  </div>
</div>
```

### Developer Resources Grid

```vue
<div class="grid gap-4 md:grid-cols-2">
  <DocsLink
    title="API Reference"
    description="Complete API documentation."
    href="/docs/api"
    icon="api"
    variant="filled"
  />
  <DocsLink
    title="Code Examples"
    description="Sample implementations."
    href="/docs/examples"
    icon="code"
    variant="filled"
  />
</div>
```

## Astro Integration

When using in Astro files, remember to add `client:load` for client-side hydration:

```astro
---
import DocsLink from '@components/shared/DocsLink.vue';
---

<DocsLink
  client:load
  title="Getting Started"
  description="Learn how to use Lattice."
  href="/docs/getting-started"
  icon="book"
  variant="bordered"
/>
```

## Phase 1 Complete

This release completes Phase 1: Foundation of the website redesign, which included:
- Feature 1.1: Design Tokens and Typography Scale (v0.1.0)
- Feature 1.2: Animation Utilities (v0.2.0)
- Feature 1.3: GradientText Component (v0.3.0)
- Feature 1.4: DualCTA Component (v0.4.0)
- Feature 1.5: DocsLink Component (v0.5.0)

## Next Up

The following features are next in the backlog (Phase 2: Navigation):
- Feature 2.1: NavDropdown Component
- Feature 2.2: MegaMenu Component
- Feature 2.3: MobileNav Component
- Feature 2.4: Header Integration
