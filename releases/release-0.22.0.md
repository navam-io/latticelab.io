# Release 0.22.0

**Release Date**: November 28, 2025

---

## Feature Slice 22: About Page

**Spec Reference**: `website-spec.md` → Site Map (/about), Content Strategy

**Summary**: Created about page with mission statement, philosophy principles, team section placeholder, GitHub link, and contact information. Establishes brand identity and company values.

### Completed Acceptance Criteria

- [x] `/src/pages/about.astro` created
- [x] Mission statement section
- [x] Philosophy section (four guiding principles)
- [x] Team section (placeholder for future content)
- [x] Link to GitHub repository
- [x] Contact information (support and business emails)

### Page Sections

#### 1. Hero Section
- Eyebrow: "About Lattice"
- Headline: "Research AI Infrastructure with Confidence"
- Subhead: "Lattice Lab is an agentic AI research assistant that helps engineering teams make informed decisions about AI infrastructure—backed by real data, not marketing claims."

#### 2. Mission Section
- Title: "Our Mission"
- Two-column layout with mission text and stat card
- Emphasizes "grounded, cited recommendations"
- Stat card: "80% faster AI infrastructure research"

#### 3. Philosophy Section
Four guiding principles:
| Principle | Description |
|-----------|-------------|
| Grounded in Sources | Every recommendation cites its sources. No hallucinations, no guesswork. |
| Your Data, Your Control | Lattice runs entirely on your infrastructure. Your data never leaves. |
| Transparent by Design | Full source code access. No black boxes, no hidden algorithms. |
| Research-Grade Quality | Built for production decisions. Real benchmarks, actual pricing. |

#### 4. Team Section
- Title: "Built by Engineers, for Engineers"
- Three values: Engineers First, Speed Over Ceremony, Community Driven
- Placeholder for future team member profiles

#### 5. Open Source Section
- Title: "Transparent Development"
- Description about open development practices
- GitHub button linking to repository

#### 6. Contact Section
Two contact cards:
| Type | Email | Purpose |
|------|-------|---------|
| Support | support@latticelab.io | Questions and help |
| Business | hello@latticelab.io | Partnerships and enterprise |

#### 7. CTA Section
- Headline: "Ready to Transform Your AI Research?"
- Primary CTA: "Get Lattice for $99" → /pricing
- Secondary CTA: "Explore Features" → /features
- Trust note: "30-day money-back guarantee. Full source code access."

### Technical Implementation

**New Files**:
- `src/pages/about.astro` — Full about page
- `tests/feature-22-about-page.spec.ts` — 75 tests
- `releases/release-0.22.0.md`

**Modified**:
- `package.json` — Version bump to 0.22.0
- `backlog/active.md` — Mark Feature 22 complete

### Tests Added

75 new Playwright tests covering:

**Page Basics (3 tests)**:
- Page loads successfully
- Correct page title
- Meta description present

**Hero Section (5 tests)**:
- Section visibility
- Eyebrow, headline, subhead
- Headline is h1

**Mission Section (7 tests)**:
- Section visibility
- Title, paragraphs
- Mission card with stat
- Emphasis on grounded recommendations

**Philosophy Section (9 tests)**:
- Section visibility
- Title, subtitle
- Grid layout
- All 4 principles displayed
- Principle titles verified

**Team Section (8 tests)**:
- Section visibility
- Title, subtitle
- Team values
- All 3 values displayed
- Placeholder section

**Open Source Section (5 tests)**:
- Section visibility
- Title, description
- GitHub button
- GitHub URL

**Contact Section (8 tests)**:
- Section visibility
- Support/Business cards
- Email links with mailto
- Icons on cards

**CTA Section (6 tests)**:
- Section visibility
- Headline, subhead
- Primary/secondary buttons
- Trust note

**Navigation (4 tests)**:
- Pricing CTA navigates
- Features CTA navigates
- Footer about link exists
- Footer link works

**Responsive Design (5 tests)**:
- Hero adapts to mobile
- Mission section adapts
- Philosophy grid adapts
- Team values stack
- Contact cards stack

**Accessibility (6 tests)**:
- Heading hierarchy
- H2 headings for sections
- Icons aria-hidden
- Email mailto protocol
- Links have text
- Keyboard accessible

**Content Accuracy (5 tests)**:
- $99 price shown
- Support email correct
- Business email correct
- GitHub URL correct
- All principles complete

**Visual Elements (4 tests)**:
- Alternating backgrounds
- Philosophy icons
- Mission card accent
- Dashed border placeholder

**Total Tests**: 1160 (1085 + 75)

### Build Output

```
19 page(s) built:
- / (index)
- /about ← NEW
- /blueprints
- /docs
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

### Navigation

- Page accessible at `/about`
- Linked from footer navigation (already configured in `footerNav`)
- Not in main navigation (appropriate for secondary page)

### Breaking Changes

None — new page added without modifying existing functionality.

---

*Phase 2 Content & Journeys continues. Next: Feature Slice 23 - SEO & Meta Tags*
