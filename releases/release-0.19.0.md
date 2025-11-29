# Release 0.19.0

**Release Date**: November 28, 2025

---

## Feature Slice 19: Journey Detail Pages — Content Structure

**Spec Reference**: `website-spec.md` → Page Specifications (Journeys), Content Strategy

**Summary**: Created MDX content structure and dynamic routing for 6 journey detail pages. Each journey includes JTBD statement, step-by-step guide with screenshots placeholders, tips, and additional MDX content. Added navigation between journeys.

### Completed Acceptance Criteria

- [x] Content collection schema enhanced for journeys in `src/content/config.ts`
- [x] 6 journey MDX files created:
  - [x] `create-workspace.mdx`
  - [x] `switch-workspace.mdx`
  - [x] `configure-settings.mdx`
  - [x] `manage-api-keys.mdx`
  - [x] `browse-blueprints.mdx`
  - [x] `apply-blueprint.mdx`
- [x] `src/pages/journeys/[slug].astro` — Dynamic routing
- [x] Each journey has: JTBD statement, introduction, steps with screenshot placeholders, conclusion
- [x] Updated journeys index to use content collection

### Journey Schema

```typescript
const journeys = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    jtbd: z.string(),
    category: z.enum(['Getting Started', 'Configuration', 'Sources']),
    estimatedTime: z.string(),
    thumbnail: z.string().optional(),
    order: z.number().default(0),
    steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      screenshot: z.string().optional(),
      tip: z.string().optional(),
    })),
  }),
});
```

### Page Sections

#### 1. Hero Section
- Breadcrumb navigation (Journeys > Journey Name)
- Category badge with icon
- Estimated time
- Title and description
- JTBD statement (quoted, styled)

#### 2. Steps Section
- "Step-by-Step Guide" heading
- Numbered step cards with:
  - Step number (accent-colored circle)
  - Step title
  - Step description
  - Optional tip (highlighted box with lightbulb icon)
  - Screenshot placeholder
- Connector lines between steps

#### 3. MDX Content Section
- Additional context and information
- Tables, lists, headings
- Best practices and next steps

#### 4. Navigation Section
- Previous journey link (if not first)
- "All Journeys" central link
- Next journey link (if not last)
- Hover animations on nav cards

#### 5. CTA Section
- "Ready to Try This Journey?" headline
- Primary CTA: "Get Lattice for $99"
- Secondary CTA: "Browse All Journeys"
- Trust note

### Journey Details

| Journey | Category | Steps | Time | Content Focus |
|---------|----------|-------|------|---------------|
| Create Workspace | Getting Started | 4 | 2 min | Workspace menu, naming, blueprints |
| Switch Workspace | Getting Started | 3 | 30 sec | Context switching, state preservation |
| Configure Settings | Configuration | 5 | 3 min | Theme, model, output preferences |
| Manage API Keys | Configuration | 4 | 2 min | Security, provider setup, rotation |
| Browse Blueprints | Sources | 3 | 1 min | Gallery, categories, preview |
| Apply Blueprint | Sources | 4 | 1 min | Selection, indexing, management |

### Technical Implementation

**Schema Update**:
- `src/content/config.ts` — Enhanced journeys schema with steps array

**New Files**:
- `src/content/journeys/create-workspace.mdx`
- `src/content/journeys/switch-workspace.mdx`
- `src/content/journeys/configure-settings.mdx`
- `src/content/journeys/manage-api-keys.mdx`
- `src/content/journeys/browse-blueprints.mdx`
- `src/content/journeys/apply-blueprint.mdx`
- `src/pages/journeys/[slug].astro` — Dynamic route
- `tests/feature-19-journey-detail-pages.spec.ts`
- `releases/release-0.19.0.md`

**Modified**:
- `src/pages/journeys/index.astro` — Now uses content collection
- `package.json` — Version bump to 0.19.0

### Tests Added

52 new Playwright tests covering:

**Page Basics (3 tests)**:
- All 6 journey pages load
- Correct page titles
- Meta descriptions present

**Hero Section (8 tests)**:
- Section visibility
- Breadcrumb navigation
- Category badge
- Estimated time
- Title, description, JTBD statement

**Steps Section (8 tests)**:
- Section visibility
- Steps title
- Correct step count
- Step numbers, titles, descriptions
- Screenshot placeholders
- Tips display

**MDX Content Section (3 tests)**:
- Content section visible
- Prose container present
- Headings render

**Navigation Section (8 tests)**:
- Section visibility
- Back link present
- First/last/middle journey nav states
- Navigation links work

**CTA Section (5 tests)**:
- Section visibility
- Headline, subhead
- Primary/secondary buttons
- Trust note

**Journey-Specific Content (4 tests)**:
- Step titles accuracy
- Step counts per journey
- Content mentions (security, etc.)

**Responsive Design (4 tests)**:
- Hero adapts to mobile
- Steps display on mobile
- Navigation adapts
- CTA buttons stack

**Accessibility (4 tests)**:
- Heading hierarchy
- Breadcrumb aria-label
- Icons aria-hidden
- Link text

**Content Accuracy (3 tests)**:
- JTBD format validation
- Category validation
- $99 price consistency

**Integration (2 tests)**:
- Card to detail navigation
- Back to index navigation

**Total Tests**: 941 (889 + 52)

### Build Output

```
16 page(s) built:
- / (index)
- /features (index)
- /features/sources
- /features/lab
- /features/studio
- /features/scenarios
- /journeys (index)
- /journeys/create-workspace ← NEW
- /journeys/switch-workspace ← NEW
- /journeys/configure-settings ← NEW
- /journeys/manage-api-keys ← NEW
- /journeys/browse-blueprints ← NEW
- /journeys/apply-blueprint ← NEW
- /pricing
- /thank-you
- /ui-showcase
```

### Navigation Flow

```
/journeys (index)
    │
    ├── /journeys/create-workspace
    │       ↓ (next)
    ├── /journeys/switch-workspace
    │       ↓ (next)
    ├── /journeys/configure-settings
    │       ↓ (next)
    ├── /journeys/manage-api-keys
    │       ↓ (next)
    ├── /journeys/browse-blueprints
    │       ↓ (next)
    └── /journeys/apply-blueprint
```

### Breaking Changes

None — existing functionality preserved. Journeys index now dynamically loads from content collection.

---

*Phase 2 Content & Journeys continues. Next: Feature Slice 20 - Blueprints Gallery Page*
