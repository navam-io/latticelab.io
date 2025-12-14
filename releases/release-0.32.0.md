# Release 0.32.0

**Release Date:** December 14, 2025
**Phase:** Phase 6 - Tools Section
**Feature:** 6.1 - Tools Content Collection

## Summary

Set up the Astro content collection for tools with comprehensive schema supporting all 7 specialized tools. This foundation enables dynamic tool pages and consistent data management.

## Changes

### New Files
- `src/content/config.ts` - Added tools collection schema
- `src/content/tools/accelerator-registry.md` - Accelerator Registry tool content
- `src/content/tools/memory-calculator.md` - Memory Calculator tool content
- `src/content/tools/tco-calculator.md` - TCO Calculator tool content
- `src/content/tools/parallelism-advisor.md` - Parallelism Advisor tool content
- `src/content/tools/quantization-advisor.md` - Quantization Advisor tool content
- `src/content/tools/spot-advisor.md` - Spot Instance Advisor tool content
- `src/content/tools/evaluation.md` - Evaluation Framework tool content
- `src/pages/test-utils/tools-collection.astro` - Test page for tools collection
- `tests/tools-collection.spec.ts` - 64 tests for tools collection

### Tools Schema

The tools content collection schema includes:

```typescript
{
  name: string,              // Tool display name
  description: string,       // Full description
  shortDescription: string,  // One-liner for cards
  icon: string,             // SVG path data
  iconBg: string,           // Tailwind background class
  iconColor: string,        // Tailwind text color class
  features: string[],       // Feature highlights
  journeyLink: string,      // Link to journey post
  docsLink: string,         // Link to documentation
  order: number,            // Sort order
  category: enum,           // calculator | advisor | registry | framework
  seoTitle: string,         // SEO title
  seoDescription: string    // SEO description
}
```

### Tools Included

| Tool | Category | Description |
|------|----------|-------------|
| Accelerator Registry | registry | Compare GPUs across AWS, GCP, Azure |
| Memory Calculator | calculator | Estimate model memory requirements |
| TCO Calculator | calculator | Calculate total cost of ownership |
| Parallelism Advisor | advisor | Distributed training recommendations |
| Quantization Advisor | advisor | INT8/FP16/INT4 tradeoff analysis |
| Spot Instance Advisor | advisor | Spot availability and savings |
| Evaluation Framework | framework | LLM-as-judge model assessment |

## Test Coverage

- 64 new tests added
- Tests verify:
  - Collection statistics (7 tools total)
  - Category distribution (2 calculators, 3 advisors, 2 other)
  - All required schema fields
  - Tool names, descriptions, and slugs
  - Icon styling and features
  - Journey and documentation links

## Breaking Changes

None

## Migration Guide

No migration required. New content collection is additive.

## Feature Specification

**Spec Reference:** Part 5, Section 5.2

**Acceptance Criteria:**
- [x] Tools schema defined (name, description, icon, features, journeyLink)
- [x] Collection properly configured
- [x] All 7 tool content files created
- [x] Test coverage complete

## Next Steps

- Feature 6.2: ToolCard Component
- Feature 6.3: ToolDemo Component
- Feature 6.4: Tools Hub Page
