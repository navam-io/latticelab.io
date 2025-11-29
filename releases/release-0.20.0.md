# Release 0.20.0

**Release Date**: November 28, 2025

---

## Feature Slice 20: Blueprints Gallery Page

**Spec Reference**: `website-spec.md` → Site Map (/blueprints), Page Specifications (Blueprints), Appendix A

**Summary**: Created blueprints showcase page with 36 curated blueprint bundles organized by 7 categories. Each blueprint card displays vendor info, source count, description, tags, and official badge. Includes category filter tabs and CTAs to pricing.

### Completed Acceptance Criteria

- [x] `/src/pages/blueprints.astro` created
- [x] Hero section explaining blueprints concept
- [x] Filter tabs for categories (Production, Development, Comparison, etc.)
- [x] Blueprint cards with: vendor logo placeholder, name, source count, description
- [x] Sample blueprint data in `lib/blueprint-data.ts` (36 blueprints)
- [x] Each card has "Try with Lattice" CTA linking to pricing
- [x] Responsive grid layout

### Page Sections

#### 1. Hero Section
- Eyebrow: "Blueprint Gallery"
- Headline: "Pre-Configured AI Research Bundles"
- Subhead: "Start researching immediately with curated source bundles for 36 vendors"
- Stats row: 36 Blueprints, Total Sources, Official Vendors count

#### 2. Filter Tabs
- All Blueprints (default active)
- Production, Development, Comparison, Enterprise, Research, Cost, Performance
- Each tab has category icon
- Anchor links to category sections

#### 3. Category Sections (7 categories)

| Category | Blueprints | Description |
|----------|------------|-------------|
| Production | 7 | Production-ready AI stacks |
| Development | 6 | Local development setups |
| Comparison | 3 | Multi-vendor comparisons |
| Enterprise | 4 | Enterprise features & compliance |
| Research | 4 | Academic & research resources |
| Cost | 3 | Budget-friendly configurations |
| Performance | 4 | Latency & throughput optimized |

#### 4. Summary Section
- Headline: "All 36 Blueprints Included"
- Subhead: "Every blueprint bundle is included with your $99 Lattice Lab purchase"
- Vendor grid showing top 12 vendors

#### 5. CTA Section
- Headline: "Ready to Start Researching?"
- Primary CTA: "Get Lattice for $99"
- Secondary CTA: "Learn About Sources"
- Trust note: "30-day money-back guarantee. All blueprints included."

### Blueprint Data Structure

```typescript
interface Blueprint {
  id: string;
  name: string;
  vendor: string;
  category: BlueprintCategory;
  description: string;
  sourceCount: number;
  isOfficial: boolean;
  tags: string[];
}
```

### Notable Blueprints

| Blueprint | Vendor | Sources | Category |
|-----------|--------|---------|----------|
| Anthropic Claude | Anthropic | 12 | Production |
| OpenAI GPT | OpenAI | 15 | Production |
| AWS Bedrock | AWS | 18 | Production |
| LangChain | LangChain | 22 | Development |
| LlamaIndex | LlamaIndex | 19 | Development |
| Hugging Face | Hugging Face | 25 | Development |
| LLM Comparison | Multi-vendor | 20 | Comparison |
| Vector Databases | Multi-vendor | 18 | Comparison |
| Enterprise Security | Multi-vendor | 16 | Enterprise |
| AI Safety Research | Multi-vendor | 24 | Research |

### Technical Implementation

**New Files**:
- `src/lib/blueprint-data.ts` — Blueprint data with types and helper functions
- `src/pages/blueprints.astro` — Full blueprints gallery page
- `tests/feature-20-blueprints-gallery.spec.ts` — 60 tests
- `releases/release-0.20.0.md`

**Modified**:
- `package.json` — Version bump to 0.20.0

### Tests Added

60 new Playwright tests covering:

**Page Basics (3 tests)**:
- Page loads successfully
- Correct page title
- Meta description present

**Hero Section (9 tests)**:
- Section visibility
- Eyebrow, headline, subhead
- Stats row (blueprints, sources, official vendors)

**Filter Tabs Section (5 tests)**:
- Section visibility
- All filter tab
- Category filter tabs
- Icons on category tabs

**Category Sections (4 tests)**:
- All 7 categories displayed
- Category titles and descriptions
- Category grids

**Blueprint Cards (9 tests)**:
- Cards displayed
- Logo placeholders
- Vendor name, source count
- Blueprint name, description
- Tags, CTA links

**Official Badges (2 tests)**:
- Official badge visibility
- Star icon

**Summary Section (5 tests)**:
- Section visibility
- Headline, subhead with $99
- Vendor grid

**CTA Section (6 tests)**:
- Section visibility
- Headline, subhead
- Primary/secondary buttons
- Trust note

**Navigation (3 tests)**:
- CTA to pricing
- Secondary CTA to sources
- Card CTA to pricing

**Responsive Design (5 tests)**:
- Hero adapts to mobile
- Filter tabs wrap
- Cards stack
- CTA buttons stack
- Vendor grid adapts

**Accessibility (4 tests)**:
- Heading hierarchy
- Icons aria-hidden
- Link text
- Keyboard accessible

**Content Accuracy (4 tests)**:
- 36 blueprints in stats
- $99 price shown
- Production has major vendors
- Source counts reasonable

**Visual Elements (3 tests)**:
- Alternating backgrounds
- Card hover effect
- Filter tab styling

**Total Tests**: 1001 (941 + 60)

### Build Output

```
17 page(s) built:
- / (index)
- /blueprints ← NEW
- /features (index)
- /features/sources
- /features/lab
- /features/studio
- /features/scenarios
- /journeys (index)
- /journeys/create-workspace
- /journeys/switch-workspace
- /journeys/configure-settings
- /journeys/manage-api-keys
- /journeys/browse-blueprints
- /journeys/apply-blueprint
- /pricing
- /thank-you
- /ui-showcase
```

### Helper Functions

```typescript
getBlueprintsByCategory(category) // Filter by category
getBlueprintById(id)              // Find specific blueprint
getVendors()                      // Get unique vendor list
getBlueprintCount()               // Get total count (36)
```

### Breaking Changes

None — new page added without modifying existing functionality.

---

*Phase 2 Content & Journeys continues. Next: Feature Slice 21 - Documentation Page*
