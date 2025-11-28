# Release 0.7.0

**Release Date**: November 28, 2025

---

## Feature Slice 7: Homepage Hero CRO Enhancement (Above-the-Fold Optimization)

**Spec Reference**: `website-spec.md` → CRO Principles (Above-the-Fold Formula), Page Specifications (Homepage Hero)

**Summary**: Optimized Hero section for the 5-second rule with CRO best practices. This is the highest-priority optimization as 60% of visitors never scroll past the fold.

### Completed Acceptance Criteria

- [x] Update `Hero.astro` headline to benefit-driven format
  - [x] Primary: "Stop Researching AI. Start Deciding." (6 words)
  - [x] Headline is bold with font-semibold styling
- [x] Add social proof elements to Hero section
  - [x] LogoBar component with 3 trust signals (Self-Hosted, Privacy-First, Citations)
  - [x] ReviewSnippet component with 5-star rating and testimonial quote
- [x] Add FUDs reduction under CTA button
  - [x] "30-day money-back guarantee"
  - [x] "Deploy in under 5 minutes"
  - [x] "No data leaves your machine"
  - [x] Small text style with success-colored icons
- [x] Update subhead to clearly convey USP
  - [x] "Lattice synthesizes pricing, benchmarks, and model cards into grounded recommendations with citations. Self-hosted, privacy-first."
- [x] Ensure visual hierarchy: Headline → Subhead → Social Proof → CTA → FUDs → Trust Signals
- [x] All elements visible without scrolling on desktop (1280px) and mobile (375px)

### Technical Details

**New UI Components Created**:

1. **LogoBar.astro** (`src/components/ui/LogoBar.astro`)
   - Displays trust signals with labels and quotes
   - Configurable signals array
   - Responsive: quotes hidden on mobile, visible on sm+
   - Green dot indicators for visual appeal

2. **ReviewSnippet.astro** (`src/components/ui/ReviewSnippet.astro`)
   - Displays star rating (1-5) with SVG stars
   - Shows testimonial quote with source
   - Supports review count mode for future use
   - Accessible with aria-label on star rating

3. **FUDsReduction.astro** (`src/components/ui/FUDsReduction.astro`)
   - Displays fear/uncertainty/doubt reducers
   - Configurable items with icons (shield, clock, lock, check)
   - Success-colored icons for positive visual impact
   - Flex-wrap responsive layout

**Hero.astro Updates**:
- New benefit-driven headline: "Stop Researching AI. Start Deciding."
- Updated subhead with USP and differentiators
- Added ReviewSnippet for social proof
- Added FUDsReduction under CTAs
- Added LogoBar for trust signals
- Reorganized visual hierarchy for CRO compliance

### Tests Added

38 new Playwright tests covering:

**Benefit-Driven Headline (4 tests)**:
- Displays benefit-driven value proposition
- Headline is 6-8 words max
- Headline has bold/semibold font weight

**Sub-headline with USP (3 tests)**:
- Displays sub-headline with USP
- Sub-headline explains what product does
- Sub-headline includes differentiator

**Social Proof Above the Fold (11 tests)**:
- Social proof section is visible
- Review snippet is visible
- Review snippet shows star rating (5 stars)
- Review snippet shows quote
- Trust signals section is visible
- Logo bar is visible
- Logo bar has label
- Logo bar shows at least 3 trust signals
- Trust signals include Self-Hosted, Privacy-First, Citations

**FUDs Reduction Under CTA (9 tests)**:
- FUDs reduction section is visible
- FUDs reduction container is visible
- FUDs reduction shows at least 3 items
- FUDs include money-back guarantee
- FUDs include quick deployment
- FUDs include privacy assurance
- FUDs appear after CTA buttons
- FUDs have small text size

**Visual Hierarchy (4 tests)**:
- Headline appears before subhead
- Social proof appears before CTAs
- CTAs appear before FUDs
- FUDs appear before trust signals

**Above-the-Fold Visibility (3 tests)**:
- All key elements visible on desktop without scrolling
- Headline and value prop visible on mobile
- CTA visible on mobile

**Responsive Social Proof (3 tests)**:
- Trust signals show quotes on desktop
- Review snippet visible on mobile
- FUDs wrap properly on mobile

**Accessibility (3 tests)**:
- Star rating has aria-label
- FUD icons are hidden from screen readers
- Trust signal icons are hidden from screen readers

**Total Tests:** 254 (216 + 38)

### Files Created/Modified

**Created:**
- `src/components/ui/LogoBar.astro`
- `src/components/ui/ReviewSnippet.astro`
- `src/components/ui/FUDsReduction.astro`
- `tests/feature-7-hero-cro-enhancement.spec.ts`

**Modified:**
- `src/components/ui/index.ts` — Added exports for new components
- `src/components/sections/Hero.astro` — CRO-optimized with new elements
- `tests/feature-1-project-init.spec.ts` — Updated for new headline
- `tests/feature-5-hero-section.spec.ts` — Updated for new headline/subhead

### CRO Principles Applied

1. **5-Second Rule**: All key messaging visible immediately
2. **Benefit-Driven Headline**: "Stop Researching AI. Start Deciding." (outcome-focused)
3. **Social Proof (2 forms)**: ReviewSnippet + LogoBar/Trust Signals
4. **FUDs Reduction**: 3 trust builders under CTA (40-60% conversion lift)
5. **Visual Hierarchy**: Clear flow from headline to trust signals
6. **Scannable Content**: Bold headlines, small supporting text

### Breaking Changes

None — existing functionality preserved, tests updated for new copy.

---

*Next: Feature Slice 8 - Homepage Persona Cards & Social Proof (Verifiable)*
