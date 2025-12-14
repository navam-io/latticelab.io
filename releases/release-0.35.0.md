# Release 0.35.0

**Release Date:** December 14, 2025
**Phase:** Phase 6 - Tools Section
**Feature:** 6.4 - Tools Hub Page

## Summary

Created the Tools Hub page at `/tools` listing all 7 tools organized by category (Calculators, Advisors, Registry, Framework) with a hero section, categorized grids, and CTA section.

## Changes

### New Files
- `src/pages/tools/index.astro` - Tools hub page
- `tests/tools-hub.spec.ts` - 51 tests for Tools Hub page

### Page Structure

**Hero Section:**
- Gradient background (blue to violet)
- Badge showing "7 Interactive Tools"
- Main title "AI Infrastructure Tools"
- Descriptive subtitle

**Calculators Section:**
- Blue icon with calculator symbol
- Section title and description
- 2-column grid displaying:
  - Memory Calculator
  - TCO Calculator

**Advisors Section:**
- Emerald icon with lightbulb symbol
- Section title and description
- 3-column grid displaying:
  - Parallelism Advisor
  - Quantization Advisor
  - Spot Advisor

**Registry Section:**
- Violet icon with database symbol
- Section title and description
- Full-width card displaying:
  - Accelerator Registry (large size)

**Framework Section:**
- Amber icon with clipboard symbol
- Section title and description
- Full-width card displaying:
  - Evaluation Framework (large size)

**CTA Section:**
- Gradient background (blue to violet)
- "Make Smarter Infrastructure Decisions" title
- "Get Lattice for $99" button linking to pricing

### Features
- Dynamic tool loading from Astro content collection
- Tools sorted by `order` property
- Category-based grouping and filtering
- Category badges displayed on each card
- Explore links to individual tool pages
- Features list showing top 3-4 features per tool
- Responsive grid layouts
- Alternating section backgrounds (white/gray-50)

## Test Coverage

- 51 new tests added
- Tests verify:
  - Hero section (badge, title, description, gradient)
  - Calculators section (title, description, grid, both cards)
  - Advisors section (title, description, grid, all 3 cards)
  - Registry section (title, description, accelerator card)
  - Framework section (title, description, evaluation card)
  - CTA section (title, description, button, pricing link)
  - Tool card properties (names, categories, explore links)
  - All 7 tools present on page
  - Layout and background alternation

## Usage

Navigate to `/tools` to access the Tools Hub page.

## Breaking Changes

None

## Feature Specification

**Spec Reference:** Part 5, Section 5.1

**Acceptance Criteria:**
- [x] All 7 tools displayed with cards
- [x] Clear categorization and navigation
- [x] Hero section explaining tools

## Next Steps

- Feature 6.5: Tool Content Files (already created)
- Feature 6.6: Dynamic Tool Pages
