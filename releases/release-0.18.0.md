# Release 0.18.0

**Release Date**: November 28, 2025

---

## Feature Slice 18: Journeys Index Page

**Spec Reference**: `website-spec.md` → Site Map (/journeys), Page Specifications (Journeys)

**Summary**: Created journeys gallery page showing all 6 available product journeys organized by category. Each journey card displays thumbnail, title, description, JTBD statement, step count, and estimated time.

### Completed Acceptance Criteria

- [x] `/src/pages/journeys/index.astro` created
- [x] Hero section explaining journeys concept
- [x] Gallery grid of journey cards (6 journeys)
- [x] Each card: thumbnail, title, JTBD statement preview
- [x] Cards link to individual journey pages
- [x] Responsive masonry/grid layout
- [x] Journey categories (Getting Started, Configuration, Sources)
- [x] Summary statistics section

### Page Sections

#### 1. Hero Section
- Eyebrow: "Product Journeys"
- Headline: "See Lattice in Action"
- Subhead: "Step-by-step walkthroughs showing exactly how to accomplish common tasks. Each journey includes screenshots and explanations."

#### 2. Journey Categories (3 categories)

**Getting Started**
- Create Workspace (4 steps, 2 minutes)
- Switch Workspace (3 steps, 30 seconds)

**Configuration**
- Configure Settings (5 steps, 3 minutes)
- Manage API Keys (4 steps, 2 minutes)

**Sources**
- Browse Blueprints (3 steps, 1 minute)
- Apply Blueprint (4 steps, 1 minute)

#### 3. Summary Section
- 6 Product Journeys
- 23 Total Steps
- 3 Categories

#### 4. CTA Section
- Headline: "Ready to Start Your Journey?"
- Subhead: "Get lifetime access to Lattice Lab and follow these journeys in your own workspace."
- Primary CTA: "Get Lattice for $99"
- Secondary CTA: "Explore Features"
- Trust note: "30-day money-back guarantee. Self-hosted for privacy."

### Journey Cards

Each card includes:

| Element | Description |
|---------|-------------|
| Thumbnail | Icon-based placeholder (ready for screenshots) |
| Metadata | Step count and estimated time |
| Title | Journey name |
| Description | Brief explanation |
| JTBD Statement | Jobs-to-be-done format ("When I... I want to... so that...") |
| Link | "View journey" → `/journeys/[slug]` |

### Journeys Data

| Journey | Category | Steps | Time | JTBD Focus |
|---------|----------|-------|------|------------|
| Create Workspace | Getting Started | 4 | 2 min | Start new AI research project |
| Switch Workspace | Getting Started | 3 | 30 sec | Work on different project |
| Configure Settings | Configuration | 5 | 3 min | Customize research experience |
| Manage API Keys | Configuration | 4 | 2 min | Connect to AI providers |
| Browse Blueprints | Sources | 3 | 1 min | Research specific vendor |
| Apply Blueprint | Sources | 4 | 1 min | Start researching immediately |

### Technical Implementation

**New Page**:
- `src/pages/journeys/index.astro` - Full journeys gallery page

**Components Used**:
- `PageLayout` - Standard page layout with header/footer
- `Section` - Consistent section spacing and alternating backgrounds
- `Container` - Content width constraints
- `Card` - Journey cards with hover effects
- `Button` - Primary and secondary CTAs

**Design Patterns**:
- Category-based organization
- Alternating section backgrounds
- Icon-based thumbnail placeholders
- JTBD statement formatting (italic, quoted)
- Summary statistics with accent color
- Responsive grid (1 → 2 → 3 columns)

### Tests Added

53 new Playwright tests covering:

**Page Basics (3 tests)**:
- Page loads successfully
- Correct page title
- Meta description present

**Hero Section (4 tests)**:
- Section visibility
- Eyebrow, headline, subhead

**Journey Categories (3 tests)**:
- 3 category sections displayed
- Category titles
- Category grids

**Journey Cards (9 tests)**:
- 6 journey cards total
- Thumbnails, step counts, times
- Titles, descriptions, JTBD statements
- View journey links

**Individual Journey Cards (3 tests)**:
- Create Workspace content
- Browse Blueprints content
- Apply Blueprint content

**Summary Section (5 tests)**:
- Section visibility
- Journey count (6)
- Total steps (23)
- Categories count (3)

**CTA Section (6 tests)**:
- Section visibility
- Headline and subhead
- Primary/secondary buttons
- Trust note

**Navigation & Layout (4 tests)**:
- Header and footer visible
- Pricing link works
- Features link works

**Responsive Design (6 tests)**:
- Hero adapts to mobile
- Cards stack on mobile
- Summary stats stack
- CTA buttons stack
- 3-column grids on desktop

**Accessibility (4 tests)**:
- Heading hierarchy
- Icons aria-hidden
- Link text
- Button labels

**Content Accuracy (4 tests)**:
- All 6 journey titles
- $99 price
- JTBD format validation
- Step count validation

**Visual Elements (3 tests)**:
- Thumbnail icons
- Accent color stats
- Alternating backgrounds

**Total Tests**: 889 (836 + 53)

### Files Created/Modified

**Created:**
- `src/pages/journeys/index.astro`
- `tests/feature-18-journeys-index.spec.ts`
- `releases/release-0.18.0.md`

**Modified:**
- `package.json` - Version bump to 0.18.0

### Build Output

```
10 page(s) built:
- / (index)
- /features (index)
- /features/sources
- /features/lab
- /features/studio
- /features/scenarios
- /journeys (index) ← NEW
- /pricing
- /thank-you
- /ui-showcase
```

### Navigation

The journeys page is accessible at `/journeys` and links to:
- Individual journey pages: `/journeys/[slug]` (to be implemented in Feature Slice 19)
- Pricing page: `/pricing`
- Features page: `/features`

### Breaking Changes

None — existing functionality preserved.

---

*Phase 2 Content & Journeys continues. Next: Feature Slice 19 - Journey Detail Pages (Content Structure)*
