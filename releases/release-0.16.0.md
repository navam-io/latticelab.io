# Release 0.16.0

**Release Date**: November 28, 2025

---

## Feature Slice 16: Features Index Page

**Spec Reference**: `website-spec.md` → Site Map (/features), Page Specifications (Features)

**Summary**: Created features index page with hero section, four feature cards (Sources, Lab, Studio, Scenarios), benefits section, and CTA. This serves as the hub for exploring Lattice Lab's product capabilities.

### Completed Acceptance Criteria

- [x] `/src/pages/features/index.astro` created
- [x] Hero section with features overview
- [x] 4 feature cards: Sources, Lab, Studio, Scenarios
- [x] Each card: icon, title, subtitle, description, highlights, "Learn more" link
- [x] Cards link to respective feature detail pages
- [x] Responsive grid layout (2 columns on desktop, stacked on mobile)
- [x] Benefits section with enterprise value props
- [x] CTA section with pricing and trust signals

### Page Sections

#### 1. Hero Section
- Eyebrow: "Product Features"
- Headline: "Everything You Need for AI Research"
- Subhead: "Four integrated tools that work together to transform how you research, compare, and decide on AI technologies."

#### 2. Feature Cards Grid (4 cards)

**Sources (Blue)**
- Subtitle: Knowledge Management
- Description: Upload PDFs, ingest URLs, and apply blueprint bundles
- Highlights: PDF & URL ingestion, 36 vendor blueprint bundles, Semantic search, Source citation tracking
- Link: `/features/sources`

**Lab (Purple)**
- Subtitle: AI Research Agent
- Description: Chat with an AI that cites its sources
- Highlights: Citation-backed responses, Transparent thinking steps, Smart prompt suggestions, Multi-turn conversations
- Link: `/features/lab`

**Studio (Green)**
- Subtitle: Artifacts & Exports
- Description: Generate comparison tables, decision memos, and board-ready artifacts
- Highlights: Comparison table generation, Decision memo templates, Export to multiple formats, Citation preservation
- Link: `/features/studio`

**Scenarios (Orange)**
- Subtitle: Stack Intelligence
- Description: Configure workload scenarios and get AI stack recommendations
- Highlights: Workload configuration, Cost estimation, Latency analysis, Stack recommendations
- Link: `/features/scenarios`

#### 3. Benefits Section (3 items)
1. **Privacy-First Architecture** - Self-hosted deployment means your research data never leaves your infrastructure
2. **Fast Setup** - Docker-based deployment gets you running in under 5 minutes
3. **Unlimited Usage** - No per-seat pricing, no query limits

#### 4. CTA Section
- Headline: "Ready to Transform Your AI Research?"
- Subhead: "Get lifetime access to all features for a one-time payment of $99."
- Primary CTA: "Get Lattice for $99" → `/pricing`
- Secondary CTA: "Back to Homepage" → `/`
- Trust note: "30-day money-back guarantee. No subscription. Self-hosted for privacy."

### Technical Implementation

**New Page**:
- `src/pages/features/index.astro` - Full features index page with 4 sections

**Components Used**:
- `PageLayout` - Standard page layout with header/footer
- `Section` - Consistent section spacing and backgrounds
- `Container` - Content width constraints (lg for hero/benefits, xl for feature grid)
- `Card` - Feature cards with hover effects
- `Button` - Primary and secondary CTAs

**Design Patterns**:
- Color-coded feature icons (blue, purple, green, orange)
- Checkmark-style highlight lists
- Responsive 2-column grid for features
- Responsive 3-column grid for benefits
- Consistent data-testid attributes for testing

### Tests Added

57 new Playwright tests covering:

**Page Basics (3 tests)**:
- Page loads successfully
- Correct page title
- Meta description present

**Hero Section (4 tests)**:
- Section visibility
- Eyebrow text
- Headline
- Subhead

**Feature Cards Grid (8 tests)**:
- Grid section visibility
- 4 feature cards displayed
- Icons, titles, subtitles, descriptions
- Highlights lists
- Learn more links with correct hrefs

**Individual Feature Cards (8 tests)**:
- Sources card content and highlights
- Lab card content and highlights
- Studio card content and highlights
- Scenarios card content and highlights

**Benefits Section (6 tests)**:
- Section visibility
- Headline and subhead
- 3 benefit items
- Title and description for each
- Key value props mentioned

**CTA Section (6 tests)**:
- Section visibility
- Headline and subhead with price
- Primary CTA button
- Secondary CTA button
- Trust note

**Navigation & Layout (4 tests)**:
- Header visible
- Footer visible
- Pricing link navigation
- Homepage link navigation

**Responsive Design (6 tests)**:
- Hero adapts to mobile
- Feature cards stack on mobile
- Benefits stack on mobile
- CTA buttons stack on mobile
- 2-column grid on desktop
- 3-column benefits grid on desktop

**Accessibility (4 tests)**:
- Proper heading hierarchy
- Icons aria-hidden
- Links have accessible text
- Buttons have accessible labels

**Content Accuracy (5 tests)**:
- 36 vendor blueprints mentioned
- $99 price consistent
- Self-hosted/privacy mentioned
- Docker setup mentioned
- All four feature names present

**Visual Elements (3 tests)**:
- Colored icons
- Check icons in highlights
- Benefit icons

**Total Tests**: 768 (711 + 57)

### Files Created/Modified

**Created:**
- `src/pages/features/index.astro`
- `tests/feature-16-features-index.spec.ts`
- `releases/release-0.16.0.md`

**Modified:**
- `package.json` - Version bump to 0.16.0

### Navigation

The features page is accessible at `/features` and links to:
- Individual feature pages: `/features/sources`, `/features/lab`, `/features/studio`, `/features/scenarios`
- Pricing page: `/pricing`
- Homepage: `/`

Note: Individual feature detail pages will be implemented in Feature Slice 17.

### Known Pre-existing Issues

Mobile menu functionality tests (12 tests) are failing due to pre-existing issues with the MobileMenu component. These failures pre-date Feature 16 and are not regressions from this release.

### Breaking Changes

None — existing functionality preserved.

---

*Phase 2 Content & Journeys continues. Next: Feature Slice 17 - Feature Detail Pages (Content Structure)*
