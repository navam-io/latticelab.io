# Release 0.10.0

**Release Date**: November 28, 2025

---

## Feature Slice 10: Homepage — Pricing & FAQ Sections

**Spec Reference**: `website-spec.md` → CRO Principles (FUDs Reduction, Guarantee), Page Specifications (Homepage sections 8-9), Stripe Integration

**Summary**: Created prominent $99 pricing section with benefit-driven features list, FUDs reduction, and trust signals. Added accordion-style FAQ section addressing common objections with accessible keyboard navigation.

### Completed Acceptance Criteria

- [x] `PricingSection.astro` — Prominent $99 pricing display
  - [x] Price: "$99" with "one-time" label (visually prominent, 5xl/6xl font)
  - [x] What's included list (6 benefit-driven items)
  - [x] Stripe Buy Button placeholder with integration notes
  - [x] **FUDs Reduction**: Under CTA button
    - [x] "30-day money-back guarantee"
    - [x] "Deploy in under 5 minutes"
    - [x] "No data leaves your machine"
  - [x] Trust signals: "Self-hosted", "Private repo access", "Deploy anywhere"
  - [x] "Most Popular" badge
- [x] `FAQ.astro` — Accordion-style FAQ (objection handling)
  - [x] 6 questions addressing common objections/fears
  - [x] Questions reframed as benefits where possible
  - [x] Expandable/collapsible using native `<details>`/`<summary>`
  - [x] Accessible keyboard navigation (Enter/Space to toggle)
  - [x] Smooth open/close animation
  - [x] Contact CTA with email link
- [x] Both sections added to homepage

### Technical Details

**New Section Components Created**:

1. **PricingSection.astro** (`src/components/sections/PricingSection.astro`)
   - Muted background section for visual separation
   - Elevated Card with pricing display
   - $99 one-time price prominently displayed (5xl/6xl responsive)
   - 6 benefit items with checkmark icons
   - First benefit highlighted (Lifetime access)
   - CTA button linking to /pricing
   - FUDsReduction component integration
   - 3 trust signals with icons

2. **FAQ.astro** (`src/components/sections/FAQ.astro`)
   - Native `<details>`/`<summary>` for accessibility
   - 6 FAQ items addressing key objections:
     - ChatGPT/Claude comparison
     - Refund policy (30-day guarantee)
     - Technical requirements
     - Air-gapped deployment
     - Post-purchase process
     - Future updates
   - Chevron icon with rotation animation
   - Focus-visible ring for keyboard navigation
   - Contact email link at bottom

**Homepage Updates**:
- Added PricingSection after SocialProof
- Added FAQ after PricingSection
- Updated imports in `src/pages/index.astro`

**Test Updates**:
- Fixed Feature 7 tests to scope queries to Hero section
- Prevents conflicts with duplicate test IDs (FUDs, trust signals)

### Tests Added

63 new Playwright tests covering:

**Pricing Section (6 tests)**:
- Pricing section visible
- Eyebrow, headline, subhead present
- Pricing card visible
- "Most Popular" badge displayed

**Price Display (4 tests)**:
- Price shows "$99"
- Label shows "one-time"
- Subtitle mentions no subscriptions
- Price prominently styled

**Benefits List (8 tests)**:
- Benefits list visible
- At least 5 benefit items
- First benefit highlighted (lifetime access)
- Includes: vendor blueprints, GitHub access, self-hosted, updates
- Benefits are benefit-driven not feature-driven

**Pricing CTA (3 tests)**:
- CTA button visible
- Has action text "Get Lattice"
- Links to /pricing

**FUDs Reduction in Pricing (4 tests)**:
- FUDs section visible
- Includes money-back guarantee, quick deployment, privacy

**Trust Signals (4 tests)**:
- Trust signals section visible
- Includes: self-hosted, private repo, deploy anywhere

**FAQ Section (6 tests)**:
- FAQ section visible
- Eyebrow, headline, subhead present
- FAQ list visible
- At least 5 FAQ items

**FAQ Accordion Functionality (5 tests)**:
- FAQs initially collapsed
- Clicking expands answer
- Clicking again collapses
- Multiple FAQs can be open
- Answers have readable content

**FAQ Content - Objection Handling (6 tests)**:
- Addresses ChatGPT comparison
- Addresses refund question
- Addresses technical requirements
- Addresses air-gapped deployment
- Addresses post-purchase process
- Addresses updates

**FAQ Contact CTA (3 tests)**:
- Contact section visible
- Contact link visible
- Email mailto link

**FAQ Accessibility (4 tests)**:
- Questions keyboard focusable
- Can toggle with keyboard (Enter)
- Uses native details/summary
- Chevron icons aria-hidden

**Responsive Layout (4 tests)**:
- Pricing visible on mobile
- FAQ visible on mobile
- Accordion works on mobile
- Pricing card centered

**Section Order (2 tests)**:
- Pricing after social proof
- FAQ after pricing

**CRO Compliance (4 tests)**:
- Price prominently displayed
- FUDs below CTA
- Guarantee mentioned
- FAQ addresses objections

**Total Tests:** 406 (343 + 63)

### Files Created/Modified

**Created:**
- `src/components/sections/PricingSection.astro`
- `src/components/sections/FAQ.astro`
- `tests/feature-10-pricing-faq.spec.ts`

**Modified:**
- `src/pages/index.astro` — Added PricingSection and FAQ sections
- `tests/feature-7-hero-cro-enhancement.spec.ts` — Scoped queries to Hero section
- `package.json` — Version bump to 0.10.0

### CRO Principles Applied

1. **FUDs Reduction**: Three trust builders under CTA
   - 30-day money-back guarantee
   - Deploy in under 5 minutes
   - No data leaves your machine

2. **Guarantee Prominently Displayed**:
   - Featured in FUDs section
   - Mentioned in FAQ ("no questions asked")

3. **FAQ Addresses Objections Proactively**:
   - "How is this different from ChatGPT?" → Specificity + citations
   - "What if I need a refund?" → 30-day guarantee
   - "Do I need to be technical?" → Docker + 5 min setup
   - "Can I use in air-gapped?" → Yes, fully local
   - "What happens after purchase?" → Email → GitHub invite
   - "Are future updates included?" → Yes, lifetime

4. **Trust Signals**: Self-hosted, Private repo, Deploy anywhere

### Homepage Section Order

1. Hero (above-the-fold)
2. PainSection (problem identification)
3. SolutionSection (three-panel solution)
4. PersonaCards (persona-specific value props)
5. SocialProof + FeaturedOn (verifiable testimonials)
6. **PricingSection** (NEW - $99 with FUDs)
7. **FAQ** (NEW - objection handling)

### Breaking Changes

None — existing functionality preserved.

---

*Next: Feature Slice 11 - Privacy Section & Final CTA*
