# Release 0.18.0 - Footer Redesign

**Release Date:** December 14, 2025

## Overview

Complete redesign of the Footer component with Apple-style 6-column layout, secondary footer bar, and comprehensive link organization.

## Completed Feature

### Feature 4.2: Footer Redesign

**Spec Reference:** Part 3, Section 3.1
**Complexity:** M (Medium)

**Description:**
Complete redesign of Footer.vue with a 6-column layout following Apple.com design patterns. The footer now provides organized access to all site sections with proper external link handling and responsive behavior.

**Files Changed:**
- `src/components/Footer.vue` - Complete redesign with 6-column layout
- `src/pages/test-utils/footer.astro` - Test page for footer component
- `tests/footer.spec.ts` - 68 comprehensive tests

## Footer Structure

### Primary Footer (6 Columns)

**Column 1: Features**
- All Features
- Sources
- Lab
- Studio
- Blueprints
- Scenarios
- Stacks
- Settings

**Column 2: Tools**
- Accelerator Registry
- Memory Calculator
- TCO Calculator
- Parallelism Advisor
- Quantization Advisor
- Spot Instance Advisor
- Evaluation Framework

**Column 3: Resources**
- Documentation (external)
- API Reference (external)
- Getting Started
- Journey Guides
- Blog
- Changelog (external)
- Roadmap (external)

**Column 4: Solutions**
- For Research Engineers
- For Platform Leads
- For CTOs
- Enterprise
- Healthcare
- Finance

**Column 5: Company**
- About Lattice
- About Navam.io (external)
- Pricing
- Contact
- GitHub (external)
- Twitter/X (external)
- YouTube (external)

**Column 6: Support**
- Help Center (external)
- FAQs
- System Requirements (external)
- Privacy Policy
- Terms of Service

### Secondary Footer Bar
- Copyright notice: "Copyright 2025 Lattice Lab. All rights reserved."
- Legal links: Privacy, Terms, Sitemap
- Region indicator: "United States"

## Technical Implementation

### Component Usage
The Footer uses the FooterColumn and FooterLinks components from Feature 4.1:

```vue
<FooterColumn
  title="Features"
  :links="featuresLinks"
  linkSpacing="tight"
  titleSize="sm"
  testId="footer-features"
/>
```

### External Links
External links automatically:
- Open in new tab (`target="_blank"`)
- Include security attributes (`rel="noopener noreferrer"`)
- Display external link icon

### Responsive Behavior
- Mobile (< 768px): 2 columns
- Tablet (768px - 1023px): 3 columns
- Desktop (1024px+): 6 columns

## Acceptance Criteria - All Met

- [x] 6 columns: Features, Tools, Resources, Solutions, Company, Support
- [x] All links from spec section 3.1
- [x] Secondary footer bar with copyright and legal links
- [x] Responsive: columns collapse on mobile
- [x] Clean typography, no descriptions

## Test Coverage

68 new tests covering:
- Footer structure (6 tests)
- Features column (9 tests)
- Tools column (8 tests)
- Resources column (9 tests)
- Solutions column (7 tests)
- Company column (8 tests)
- Support column (6 tests)
- Secondary footer bar (7 tests)
- Responsive behavior (3 tests)
- Accessibility (2 tests)
- Link counts (6 tests)

## Phase Progress

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | **2** | **0** |
| Phase 5: Feature Pages | 13 | 0 | 13 |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **18** | **23** |

**Phase 4 (Footer) is now complete!**

## Upgrade Notes

This is a complete redesign of the Footer component. The old 4-column footer with descriptions has been replaced with a 6-column Apple-style footer.

### Breaking Changes
- Footer layout changed from 4 columns to 6 columns
- Descriptions removed from links (cleaner typography)
- SEO keywords footer removed (redundant with meta tags)

### New Dependencies
- Uses FooterColumn and FooterLinks components from v0.17.0
