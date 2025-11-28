# Release 0.14.0

**Release Date**: November 28, 2025

---

## Feature Slice 14: Pricing Page

**Spec Reference**: `website-spec.md` → Page Specifications (Pricing)

**Summary**: Created dedicated pricing page with comprehensive product details, purchase flow explanation, pricing-specific FAQ, and trust signals. This is the first page of Phase 2 (Content & Journeys).

### Completed Acceptance Criteria

- [x] `/src/pages/pricing.astro` created
- [x] Hero with pricing headline ("One Price. Lifetime Access. No Subscriptions.")
- [x] Detailed "What's included" section (6 items)
- [x] Stripe Buy Button placeholder with integration notes
- [x] Purchase flow explanation (4-step process)
- [x] FAQ specific to purchasing (6 questions)
- [x] Trust signals and guarantees (4 guarantee cards)

### Page Sections

#### 1. Hero Section
- Eyebrow: "Simple, Transparent Pricing"
- Headline: "One Price. Lifetime Access. No Subscriptions."
- Subhead: "Pay once, own forever. Deploy anywhere. Your AI research assistant for life."

#### 2. Main Pricing Card
- Prominent $99 one-time price
- "Lifetime Access" badge
- Primary CTA button (placeholder for Stripe Buy Button)
- FUDs reduction component
- Stripe security note

#### 3. What's Included Section (6 items)
1. Full Source Code Access - Complete Lattice Lab source code via private GitHub repository
2. 36 Vendor Blueprint Bundles - Pre-configured sources for major AI vendors
3. Lifetime Updates - All future updates within major version included
4. Self-Hosted Deployment - Run on laptop, private cloud, or air-gapped environment
5. Unlimited Team Members - No per-seat pricing
6. Artifact Generation - Export comparison tables, decision memos, and board-ready artifacts

#### 4. Purchase Flow Section (4 steps)
1. Complete Purchase - Secure Stripe checkout
2. Check Your Email - Confirmation with setup instructions
3. Accept GitHub Invite - Within 24 hours
4. Clone & Run - Setup in under 5 minutes

#### 5. Guarantees Section (4 cards)
1. 30-Day Money Back - Full refund, no questions asked
2. Secure Checkout - Powered by Stripe encryption
3. Instant Access - Start in under 5 minutes
4. Lifetime Updates - No subscription required

#### 6. Pricing FAQ Section (6 questions)
1. Is this a subscription? - No, one-time purchase
2. What payment methods do you accept? - All major cards via Stripe
3. Can I get a refund? - 30-day money-back guarantee
4. How quickly will I get access? - Email immediately, GitHub within 24 hours
5. Can I purchase for my team? - Yes, no per-seat pricing
6. Do you offer enterprise pricing? - $99 works for all team sizes

#### 7. Final CTA Section
- Compelling headline: "Ready to Transform Your AI Research?"
- Primary CTA: "Get Lattice for $99"
- Secondary CTA: "Learn More" (links to homepage)
- FUDs reduction

### Technical Implementation

**New Page**:
- `src/pages/pricing.astro` - Full pricing page with 7 sections

**Components Used**:
- `PageLayout` - Standard page layout with header/footer
- `Section` - Consistent section spacing and backgrounds
- `Container` - Content width constraints
- `Card` - Pricing card with elevated variant
- `Button` - Primary and secondary CTAs
- `FUDsReduction` - Trust-building component under CTAs

**Design Patterns**:
- Accordion FAQ (native `<details>` elements)
- Grid layouts for responsive content
- Icon-based feature lists
- Step-by-step numbered flow

### Tests Added

61 new Playwright tests covering:

**Page Basics (2 tests)**:
- Page loads successfully with correct URL
- Meta description contains pricing keywords

**Hero Section (4 tests)**:
- Hero section visibility
- Eyebrow text
- Headline value proposition
- Supporting subhead

**Main Pricing Card (8 tests)**:
- Card visibility and badge
- $99 price display
- One-time label
- No subscription messaging
- Primary CTA button
- Stripe security note
- FUDs reduction

**What's Included Section (5 tests)**:
- Section visibility with headline
- 6 included items displayed
- Items have titles and descriptions
- Blueprint bundles mentioned
- Self-hosted deployment mentioned

**Purchase Flow Section (8 tests)**:
- Section visibility
- Headline explaining process
- 4 purchase steps displayed
- Numbered indicators
- Step content verification

**Guarantees Section (5 tests)**:
- Section visibility
- 4 guarantee cards displayed
- Money-back guarantee
- Secure checkout guarantee
- Instant access and lifetime updates

**Pricing FAQ Section (8 tests)**:
- Section visibility
- FAQ headline
- 6 FAQ items displayed
- Subscription FAQ present
- Accordion functionality
- Refund and team FAQ present
- Contact link

**Final CTA Section (5 tests)**:
- Section visibility
- Compelling headline
- Primary CTA with price
- Secondary CTA link
- FUDs reduction

**Responsive Design (4 tests)**:
- Pricing card centered on mobile
- Included items stack on mobile
- Purchase steps stack on mobile
- Guarantees in grid on desktop

**Navigation & Links (3 tests)**:
- Header visible
- Footer visible
- Learn more links to homepage

**Accessibility (3 tests)**:
- Proper heading hierarchy
- FAQ keyboard accessibility
- CTA focus states

**Content Accuracy (5 tests)**:
- Consistent $99 price
- 36 blueprint bundles mentioned
- 30-day money-back guarantee mentioned
- GitHub repository mentioned
- Self-hosted deployment mentioned

**Total Tests**: 651 (590 + 61)

### Files Created/Modified

**Created:**
- `src/pages/pricing.astro`
- `tests/feature-14-pricing-page.spec.ts`
- `releases/release-0.14.0.md`

**Modified:**
- `package.json` - Version bump to 0.14.0

### Navigation

The pricing page is linked from:
- Homepage pricing section CTA ("Get Lattice Now" → `/pricing`)
- Header navigation will be updated in future feature slice

### Stripe Integration Notes

The pricing page includes a placeholder for the Stripe Buy Button (Feature Slice 31):

```html
<!-- Stripe Buy Button Placeholder -->
<!--
  Stripe Integration (Feature Slice 31):
  <script async src="https://js.stripe.com/v3/buy-button.js"></script>
  <stripe-buy-button
    buy-button-id="buy_btn_1SYXbwRCxnzBPkIXayfIahbD"
    publishable-key="pk_live_..."
  ></stripe-buy-button>
-->
```

### Breaking Changes

None — existing functionality preserved.

---

*Phase 2 Content & Journeys in progress. Next: Feature Slice 15 - Thank You Page*
