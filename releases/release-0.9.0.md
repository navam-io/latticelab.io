# Release 0.9.0

**Release Date**: November 28, 2025

---

## Feature Slice 9: Homepage — Persona Cards & Social Proof (Verifiable)

**Spec Reference**: `website-spec.md` → CRO Principles (Social Proof Best Practices), Page Specifications (Homepage sections 4-5), Target Audience (ICP)

**Summary**: Created persona value proposition cards with benefit-driven headlines and a verifiable social proof section with testimonials and "Featured On" publications. All testimonials are displayed inline (never hidden in carousels) per CRO best practices.

### Completed Acceptance Criteria

- [x] `PersonaCards.astro` — Three cards for Research Engineer, Platform Lead, CTO
  - [x] Each card: icon, persona title, benefit-driven headline (not generic)
  - [x] Headlines convey outcome: "Cut weeks to hours", "Board-ready in minutes", "De-risk AI decisions"
  - [x] Cards use Card component with hover effect
- [x] `SocialProof.astro` — Testimonials section (verifiable structure)
  - [x] 3 testimonial cards (NOT in carousel — displayed inline)
  - [x] Each card: photo placeholder, full name, role, company, quote
  - [x] Source indicator (e.g., "via LinkedIn", "via Product Hunt")
  - [x] Clearly marked as placeholder for future real testimonials
  - [x] Structure ready for real testimonials with verifiable details
- [x] `FeaturedOn.astro` — Featured on / trust logos
  - [x] 4 publication placeholders with snippet quotes
  - [x] Not just logos — includes quote from each publication
- [x] Responsive grid layout (3 columns desktop, 1 column mobile)
- [x] No carousel hiding on mobile — stack vertically

### Technical Details

**New Section Components Created**:

1. **PersonaCards.astro** (`src/components/sections/PersonaCards.astro`)
   - Section header with eyebrow, headline, and subhead
   - 3 persona cards with benefit-driven messaging
   - Research Engineer: "Cut weeks of research to hours"
   - Platform Lead: "Board-ready artifacts in minutes"
   - CTO: "De-risk AI decisions with evidence"
   - Uses Card component with interactive hover effects
   - Responsive grid: 3-column desktop, 2-column tablet, 1-column mobile

2. **SocialProof.astro** (`src/components/sections/SocialProof.astro`)
   - Section header with "Trusted by Engineers" eyebrow
   - 3 testimonial cards with verifiable structure
   - Each testimonial includes: quote, photo placeholder, name, role, company, source
   - FeaturedOn component integration for publication logos
   - Placeholder notice for transparency

**New UI Components Created**:

3. **FeaturedOn.astro** (`src/components/ui/FeaturedOn.astro`)
   - "As Featured In" label
   - 4 publication cards with logo placeholder, name, and quote
   - Publications: Hacker News, AI Weekly, DevTools Digest, MLOps Community
   - Responsive grid layout
   - Placeholder notice for transparency

**Homepage Updates**:
- Added PersonaCards section after SolutionSection
- Added SocialProof section (with FeaturedOn) after PersonaCards
- Updated imports in `src/pages/index.astro`

### Tests Added

50 new Playwright tests covering:

**Persona Cards Section (6 tests)**:
- Persona cards section is visible
- Section has eyebrow, headline, and subhead
- Displays 3 persona cards
- All three persona cards visible

**Benefit-Driven Headlines (6 tests)**:
- Research engineer headline about time savings
- Platform lead headline about board-ready artifacts
- CTO headline about evidence-based decisions
- Each card has persona title, icon, and description

**Social Proof Section (6 tests)**:
- Social proof section is visible
- Has eyebrow, headline, and subhead
- Testimonials grid is visible (not carousel)
- Displays 3 testimonials

**Verifiable Testimonial Structure (8 tests)**:
- Each testimonial has quote, photo, name, role
- Each testimonial has source indicator
- Source indicators include "via" platform names
- Placeholder notice is visible

**Featured On Section (8 tests)**:
- Featured on section is visible
- Has label "As Featured In"
- Displays at least 3 publications
- Each publication has logo, name, and quote
- Publication quotes are in italics

**Responsive Layout (5 tests)**:
- Persona cards stack on mobile
- Testimonials stack on mobile (not hidden in carousel)
- Featured on publications stack on mobile
- 3-column layout on desktop for both grids

**CRO Compliance (5 tests)**:
- Testimonials are NOT in a carousel
- All testimonials visible without interaction
- Persona headlines are outcome-focused (not feature-focused)
- Testimonials have verifiable structure
- Publications have quotes not just logos

**Accessibility (3 tests)**:
- Persona icons are hidden from screen readers
- Photo placeholders have accessible labels
- Publication logos have accessible labels

**Section Order (2 tests)**:
- Persona cards appear after solution section
- Social proof appears after persona cards

**Total Tests:** 343 (293 + 50)

### Files Created/Modified

**Created:**
- `src/components/sections/PersonaCards.astro`
- `src/components/sections/SocialProof.astro`
- `src/components/ui/FeaturedOn.astro`
- `tests/feature-9-persona-social-proof.spec.ts`

**Modified:**
- `src/components/ui/index.ts` — Added FeaturedOn export
- `src/pages/index.astro` — Added PersonaCards and SocialProof sections
- `package.json` — Version bump to 0.9.0

### CRO Principles Applied

1. **Benefit-Driven Headlines**: Each persona card has outcome-focused messaging
   - "Cut weeks to hours" (time savings)
   - "Board-ready in minutes" (artifact quality)
   - "De-risk with evidence" (confidence building)

2. **Verifiable Social Proof**: Testimonial structure includes:
   - Photo placeholder (ready for real photos)
   - Full name (not initials or anonymous)
   - Role and company (professional context)
   - Source indicator (via LinkedIn, Product Hunt, Twitter)

3. **No Carousel Hiding**: All testimonials displayed inline
   - Forces consumption of social proof
   - No dots, arrows, or navigation required
   - Mobile stacks vertically, all visible

4. **Publication Quotes, Not Just Logos**: Featured On section includes:
   - Publication name
   - Quote snippet from each publication
   - More credible than logos alone

### Homepage Section Order

1. Hero (above-the-fold)
2. PainSection (problem identification)
3. SolutionSection (three-panel solution)
4. **PersonaCards** (NEW - persona-specific value props)
5. **SocialProof + FeaturedOn** (NEW - verifiable testimonials)

### Breaking Changes

None — existing functionality preserved, new sections added.

---

*Next: Feature Slice 10 - Homepage Pricing & FAQ Sections*
