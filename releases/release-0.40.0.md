# Release 0.40.0

**Release Date:** December 14, 2025
**Phase:** Phase 7 - Docs Integration
**Feature:** 7.1 - Cross-Linking Updates

## Summary

Added comprehensive cross-linking between marketing pages and documentation. Feature pages now include DocsLink callouts, the homepage hero has a "Get Started" button linking to docs quickstart, and all tool pages display documentation guide links.

## Changes

### Homepage Updates
- Hero section "Learn more" button changed to "Get Started"
- "Get Started" button now links to `/docs/getting-started`
- Provides clear path from marketing to documentation

### Feature Page Updates

Added DocsLink callout sections to all 6 feature pages:
- `/features/sources` - Links to `/docs/features/sources`
- `/features/lab` - Links to `/docs/features/lab`
- `/features/studio` - Links to `/docs/features/studio`
- `/features/blueprints` - Links to `/docs/features/blueprints`
- `/features/scenarios` - Links to `/docs/features/scenarios`
- `/features/stacks` - Links to `/docs/features/stacks`

Each DocsLink callout includes:
- Feature-specific title (e.g., "Sources Documentation")
- Descriptive text explaining what the docs cover
- Book icon for visual consistency
- Bordered variant for emphasis

### Tool Page Updates

Added DocsLink callout section to dynamic tool page template:
- Displays conditionally when tool has `docsLink` property
- Uses "guide" icon variant for tool documentation
- Title format: "{Tool Name} Guide"

Added `docsLink` properties to tool content files:
- `memory-calculator` - `/docs/guides/build-stacks`
- `tco-calculator` - `/docs/guides/compare-providers`
- `model-registry` - `/docs/guides/compare-providers`
- `accelerator-registry` - `/docs/guides/compare-providers`
- `parallelism-advisor` - `/docs/guides/build-stacks`
- `quantization-advisor` - `/docs/guides/build-stacks`
- `spot-advisor` - `/docs/guides/compare-providers`
- `live-data-feeds` - `/docs/guides/settings`

### Modified Files
- `src/pages/index.astro` - Added Get Started link props to HeroSection
- `src/pages/features/sources.astro` - Added DocsLink import and callout section
- `src/pages/features/lab.astro` - Added DocsLink import and callout section
- `src/pages/features/studio.astro` - Added DocsLink import and callout section
- `src/pages/features/blueprints.astro` - Added DocsLink import and callout section
- `src/pages/features/scenarios.astro` - Added DocsLink import and callout section
- `src/pages/features/stacks.astro` - Added DocsLink import and callout section
- `src/pages/tools/[tool].astro` - Added DocsLink import and conditional callout section
- `src/content/tools/memory-calculator.md` - Added docsLink property
- `src/content/tools/quantization-advisor.md` - Added docsLink property
- `src/content/tools/model-registry.md` - Added docsLink property
- `src/content/tools/live-data-feeds.md` - Added docsLink property

### New Files
- `tests/cross-linking.spec.ts` - 43 tests for cross-linking feature

## Test Coverage

43 new tests added covering:
- Homepage Get Started Link (2 tests)
  - Hero has Get Started button
  - Get Started button links to docs quickstart
- Feature Pages DocsLink Callouts (18 tests)
  - Each of 6 feature pages has DocsLink callout
  - Each DocsLink has correct title
  - Each DocsLink has correct href
- Tool Pages DocsLink Callouts (16 tests)
  - Each of 8 tool pages has DocsLink callout section
  - Each DocsLink has correct href
- Feature Page DocsLink Styling (3 tests)
  - DocsLink uses bordered variant
  - DocsLink has book icon
  - DocsLink has description
- Tool Page DocsLink Styling (2 tests)
  - Tool DocsLink uses guide icon
  - Tool DocsLink has guide title format
- Cross-Linking Navigation (2 tests)
  - Feature page docs link is clickable
  - Tool page docs link is clickable

## Usage

### For Users
1. Click "Get Started" on homepage to access quickstart documentation
2. Visit any feature page and scroll to the DocsLink callout for detailed documentation
3. Visit any tool page to find links to relevant guide documentation

### For Developers
Feature pages include DocsLink via:
```astro
import DocsLink from '@components/shared/DocsLink.vue';

<!-- Documentation Callout Section -->
<section class="py-12 bg-white" data-testid="{feature}-docs-callout">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
      <DocsLink
        client:load
        title="{Feature} Documentation"
        description="Description of what the docs cover."
        href="/docs/features/{feature}"
        icon="book"
        variant="bordered"
        size="lg"
        testId="{feature}-docs-link"
      />
    </div>
  </div>
</section>
```

## Breaking Changes

None

## Feature Specification

**Spec Reference:** Part 7, Section 7.1

**Acceptance Criteria:**
- [x] Feature pages link to relevant docs
- [x] Tool pages link to guide docs
- [x] Homepage has quickstart entry point

## Phase 7 Progress

With this release:
- Feature 7.1: Cross-Linking Updates - Complete

## Next Steps

Continue with remaining Phase 7 features:
- Feature 7.2: Navigation Updates
- Feature 7.3: Docs Menu Integration
