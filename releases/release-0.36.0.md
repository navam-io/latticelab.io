# Release 0.36.0

**Release Date:** December 14, 2025
**Phase:** Phase 6 - Tools Section
**Feature:** 6.6 - Dynamic Tool Pages

## Summary

Created dynamic tool page template at `/tools/[tool]` that generates individual pages for all 7 tools from the content collection. Each page includes hero section, features grid, interactive demo, MDX content, related tools, and CTA section.

## Changes

### New Files
- `src/pages/tools/[tool].astro` - Dynamic tool page template
- `tests/tool-pages.spec.ts` - 44 tests for tool pages

### Page Structure

**Hero Section:**
- Breadcrumb navigation (Tools > Tool Name)
- Large tool icon with category colors
- Category badge (calculator, advisor, registry, framework)
- Tool title and full description
- Quick links (Documentation, Journey)

**Features Section:**
- "Key Features" title
- 2-column grid of features from content collection
- Checkmark icons with category colors

**Demo Section:**
- "Try It Out" title
- ToolDemo component with placeholder state
- Color scheme matching category
- Footer with docs link

**Content Section:**
- Full MDX content rendered from tool markdown files
- Prose styling for headings, lists, and paragraphs
- Includes Overview and Key Capabilities sections

**Related Tools Section:**
- Shows tools from same category (max 2)
- Card layout with icon, name, and description
- Links to related tool pages

**CTA Section:**
- "Get Full Access to All Tools" title
- Dynamic description mentioning current tool
- Pricing button and "Browse All Tools" button

### Dynamic Features
- Uses Astro `getStaticPaths()` for static generation
- All 7 tools generated at build time
- Category-based color schemes:
  - **calculator**: Blue gradient, blue accents
  - **advisor**: Emerald gradient, emerald accents
  - **registry**: Violet gradient, violet accents
  - **framework**: Amber gradient, amber accents
- Related tools filtered by same category

### Generated Pages
1. `/tools/memory-calculator`
2. `/tools/tco-calculator`
3. `/tools/accelerator-registry`
4. `/tools/parallelism-advisor`
5. `/tools/quantization-advisor`
6. `/tools/spot-advisor`
7. `/tools/evaluation`

## Test Coverage

- 44 new tests added
- Tests verify:
  - Page container and structure
  - Hero section (breadcrumb, icon, category, title, description, links)
  - Features section (title, grid, individual features)
  - Demo section (title, ToolDemo component, placeholder state)
  - Content section (prose rendering, Overview, Key Capabilities)
  - Related tools section (title, grid, related tool links)
  - CTA section (title, description, buttons)
  - All 7 tool pages load correctly
  - Category color schemes (blue, emerald, violet, amber)
  - Navigation (breadcrumb, related tools, browse button)

## Usage

Navigate to `/tools/{tool-slug}` to view individual tool pages.

## Breaking Changes

None

## Feature Specification

**Spec Reference:** Part 5, Section 5.2

**Acceptance Criteria:**
- [x] Each tool accessible at /tools/[slug]
- [x] Consistent layout across all tool pages
- [x] Interactive demo section where applicable

## Phase 6 Complete

With this release, Phase 6 (Tools Section) is complete:
- Feature 6.1: Tools Content Collection
- Feature 6.2: ToolCard Component
- Feature 6.3: ToolDemo Component
- Feature 6.4: Tools Hub Page
- Feature 6.5: Tool Content Files
- Feature 6.6: Dynamic Tool Pages

## Next Steps

- Phase 7: Docs Integration
- Feature 7.1: Cross-Linking Updates
