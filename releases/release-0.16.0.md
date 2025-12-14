# Release 0.16.0

**Release Date:** December 14, 2025

## Overview

This release completes Phase 3 with Feature 3.7: Homepage Assembly. The homepage has been redesigned to integrate all new components from Phase 3, creating a cohesive visual flow from hero to CTA banner.

## New Features

### Feature 3.7: Homepage Assembly

**Spec Reference:** Part 2, Section 2.2
**Complexity:** M

#### Description

Compose all new homepage sections into index.astro with proper section spacing and visual flow.

#### Files Modified

- `src/pages/index.astro` - Redesigned homepage with new components

#### Files Added

- `tests/homepage.spec.ts` - 63 Playwright tests covering homepage assembly

#### Acceptance Criteria (All Complete)

- [x] Hero section (HeroSection component with gradient headline)
- [x] Feature card grid (FeatureGrid component with 2x2 layout)
- [x] Tools carousel (ToolsCarousel component with 7 tools)
- [x] Social proof (VendorTicker - existing, retained)
- [x] Use cases section (UseCases - existing, retained)
- [x] Pricing card (PricingCard component with $99 gradient headline)
- [x] CTA banner (CTABanner component at page bottom)
- [x] Proper section spacing and visual flow

#### Homepage Section Order

```
┌─────────────────────────────────────────────────────────────────────┐
│                         HEADER                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                      HERO SECTION                                    │
│           Large "Lattice" gradient headline                          │
│           + Product screenshot                                       │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                    VENDOR TICKER                                     │
│           36 Curated Blueprints from Leading AI Vendors              │
├─────────────────────────────────────────────────────────────────────┤
│                    VIDEO SECTION                                     │
│                  Product Walkthrough                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                   FEATURE GRID                                       │
│         ┌─────────────┐  ┌─────────────┐                            │
│         │   Sources   │  │     Lab     │                            │
│         └─────────────┘  └─────────────┘                            │
│         ┌─────────────┐  ┌─────────────┐                            │
│         │   Studio    │  │ Blueprints  │                            │
│         └─────────────┘  └─────────────┘                            │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                  TOOLS CAROUSEL                                      │
│      [Accelerator] [Memory] [TCO] [Parallelism] ...                 │
│                     ←   →                                           │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                   USE CASES                                          │
│    Research Engineers | Platform Leads | CTOs                        │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                  PRICING CARD                                        │
│                     $99                                              │
│             One-time payment                                         │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                      FAQ                                             │
├─────────────────────────────────────────────────────────────────────┤
│                   NEWSLETTER                                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                   CTA BANNER                                         │
│        "Start Making Confident Decisions"                            │
│        [Get Started] [View Documentation]                            │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
│                         FOOTER                                       │
└─────────────────────────────────────────────────────────────────────┘
```

#### Components Integrated

| Component | Source | Background |
|-----------|--------|------------|
| HeroSection | Feature 3.1 | Dark gradient |
| VendorTicker | Existing | Light gradient |
| VideoSection | Existing | White |
| FeatureGrid | Feature 3.3 | Gray |
| ToolsCarousel | Feature 3.4 | White |
| UseCases | Existing | Light gradient |
| PricingCard | Feature 3.5 | Gray |
| FAQ | Existing | White |
| NewsletterSection | Existing | - |
| CTABanner | Feature 3.6 | Violet-purple-blue gradient |

#### Navigation Anchors

- `/#features` - Scrolls to Feature Grid section
- `/#pricing` - Scrolls to Pricing Card section
- `#walkthrough` - Scrolls to Video section

## Technical Details

### Import Changes

Replaced old components:
- `FeaturesGrid` → `FeatureGrid`
- `Pricing` → `PricingCard`

Added new components:
- `ToolsCarousel`
- `CTABanner`

### Section Spacing

Each section maintains consistent vertical padding (`py-16 md:py-24`) for visual rhythm.

## Dependency Changes

None - uses existing project dependencies.

## Migration Notes

This is a breaking change to the homepage layout. The old `FeaturesGrid` and `Pricing` components are no longer used on the homepage but remain available for other pages.

## Test Results

```
678 passed (1.2m)
```

All existing tests continue to pass, plus 63 new homepage tests:
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
- 63 Homepage tests (new)
- 173 other component tests

## Phase 3 Progress

| Feature | Status | Release |
|---------|--------|---------|
| 3.1 Hero Section Redesign | Complete | v0.10.0 |
| 3.2 FeatureCard Component | Complete | v0.11.0 |
| 3.3 FeatureGrid Section | Complete | v0.12.0 |
| 3.4 ToolsCarousel Section | Complete | v0.13.0 |
| 3.5 PricingCard Redesign | Complete | v0.14.0 |
| 3.6 CTABanner Section | Complete | v0.15.0 |
| 3.7 Homepage Assembly | Complete | v0.16.0 |

**Phase 3 Complete!**

## Next Steps

Phase 4: Footer - Feature 4.1: FooterColumn Component
