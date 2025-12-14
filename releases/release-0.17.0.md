# Release 0.17.0

**Release Date:** December 14, 2025

## Overview

This release begins Phase 4 with Feature 4.1: FooterColumn Component. Two new reusable components have been created for building the Apple-style multi-column footer layout.

## New Features

### Feature 4.1: FooterColumn Component

**Spec Reference:** Part 3, Section 3.2
**Complexity:** S

#### Description

Build reusable footer column component with title and links.

#### Files Added

- `src/components/footer/FooterColumn.vue` - Reusable column component
- `src/components/footer/FooterLinks.vue` - Link list component
- `src/pages/test-utils/footer-column.astro` - Test page with 8 configurations
- `tests/footer-column.spec.ts` - 48 Playwright tests

#### Acceptance Criteria (All Complete)

- [x] Column title styling (uppercase, semibold, proper hierarchy)
- [x] Link list with proper spacing (tight, normal, relaxed)
- [x] Hover states on links (gray-500 to gray-900 transition)

#### Component: FooterLinks

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `links` | `FooterLink[]` | required | Array of links to display |
| `spacing` | `'tight' \| 'normal' \| 'relaxed'` | `'normal'` | Spacing between links |
| `size` | `'sm' \| 'md'` | `'sm'` | Link text size |
| `testId` | `string` | `'footer-links'` | Test ID prefix |

**FooterLink Interface:**
```typescript
interface FooterLink {
  label: string    // Link text
  href: string     // Link URL
  external?: boolean // Opens in new tab with icon
}
```

#### Component: FooterColumn

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Column title |
| `links` | `FooterLink[]` | required | Array of links |
| `linkSpacing` | `'tight' \| 'normal' \| 'relaxed'` | `'normal'` | Spacing between links |
| `linkSize` | `'sm' \| 'md'` | `'sm'` | Link text size |
| `titleSize` | `'sm' \| 'md' \| 'lg'` | `'sm'` | Title size |
| `testId` | `string` | `'footer-column'` | Test ID prefix |

#### Visual Layout

```
┌─────────────────┐
│  FEATURES       │  ← Title (uppercase, semibold)
├─────────────────┤
│  All Features   │  ← Link (gray-500 hover:gray-900)
│  Sources        │
│  Lab            │
│  Studio         │
│  Blueprints     │
│  Navam.io ↗     │  ← External link with icon
└─────────────────┘
```

#### Usage Examples

**Basic Column:**
```vue
<FooterColumn
  title="Features"
  :links="[
    { label: 'Sources', href: '/features/sources' },
    { label: 'Lab', href: '/features/lab' },
    { label: 'Studio', href: '/features/studio' },
  ]"
/>
```

**With External Links:**
```vue
<FooterColumn
  title="Company"
  :links="[
    { label: 'About', href: '/about' },
    { label: 'GitHub', href: 'https://github.com/navam-io', external: true },
    { label: 'Twitter', href: 'https://twitter.com/latticelab', external: true },
  ]"
/>
```

**Standalone Links:**
```vue
<FooterLinks
  :links="links"
  spacing="tight"
  size="sm"
/>
```

**6-Column Footer Preview:**
```vue
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
  <FooterColumn title="Features" :links="featuresLinks" />
  <FooterColumn title="Tools" :links="toolsLinks" />
  <FooterColumn title="Resources" :links="resourcesLinks" />
  <FooterColumn title="Solutions" :links="solutionsLinks" />
  <FooterColumn title="Company" :links="companyLinks" />
  <FooterColumn title="Support" :links="supportLinks" />
</div>
```

## Technical Details

### Title Size Variants

| Size | Classes | Description |
|------|---------|-------------|
| `sm` | `text-xs uppercase tracking-wider` | Apple-style uppercase labels |
| `md` | `text-sm` | Standard footer title |
| `lg` | `text-base` | Larger title text |

### Link Styling

- Base color: `text-gray-500`
- Hover color: `text-gray-900`
- Transition: `transition-colors duration-200`

### External Link Handling

- Automatically adds `target="_blank"`
- Automatically adds `rel="noopener noreferrer"`
- Displays external link icon (SVG)

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

This is a new component with no breaking changes. The existing Footer.vue remains unchanged and will be updated in Feature 4.2.

## Test Results

```
726 passed (1.3m)
```

All existing tests continue to pass, plus 48 new FooterColumn tests:
- 47 NavDropdown tests
- 31 MegaMenu tests
- 32 MobileNav tests
- 40 Header tests
- 36 HeroSection tests
- 45 FeatureCard tests
- 63 FeatureGrid tests
- 58 ToolsCarousel tests
- 50 PricingCard tests
- 40 CTABanner tests
- 63 Homepage tests
- 48 FooterColumn tests (new)
- 173 other component tests

## Phase 4 Progress

| Feature | Status | Release |
|---------|--------|---------|
| 4.1 FooterColumn Component | Complete | v0.17.0 |
| 4.2 Footer Redesign | Planned | - |

## Next Steps

Feature 4.2: Footer Redesign - Complete redesign of Footer.vue using the new FooterColumn components with 6-column Apple-style layout.
