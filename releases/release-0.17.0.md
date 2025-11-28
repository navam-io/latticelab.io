# Release 0.17.0

**Release Date**: November 28, 2025

---

## Feature Slice 17: Feature Detail Pages — Content Structure

**Spec Reference**: `website-spec.md` → Page Specifications (Features), Project Structure (content/features/)

**Summary**: Created MDX content structure and dynamic routing for feature detail pages. Each feature (Sources, Lab, Studio, Scenarios) now has a dedicated page with hero, highlights, use cases, MDX content, and CTA sections.

### Completed Acceptance Criteria

- [x] Content collection schema enhanced for features in `src/content/config.ts`
- [x] `src/content/features/sources.mdx` — Sources feature content
- [x] `src/content/features/lab.mdx` — Lab (AI agent) feature content
- [x] `src/content/features/studio.mdx` — Studio (artifacts) feature content
- [x] `src/content/features/scenarios.mdx` — Scenarios feature content
- [x] `src/pages/features/[slug].astro` — Dynamic routing for feature pages
- [x] Each page has: hero, description, use cases by persona, screenshot placeholder
- [x] Full MDX content support with prose styling

### Content Collection Schema

Enhanced the features collection with:

```typescript
const features = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    color: z.enum(['blue', 'purple', 'green', 'orange']).default('blue'),
    order: z.number().default(0),
    highlights: z.array(z.string()).default([]),
    useCases: z.array(z.object({
      persona: z.string(),
      title: z.string(),
      description: z.string(),
    })).default([]),
    screenshot: z.string().optional(),
  }),
});
```

### Feature Pages Created

#### 1. Sources (`/features/sources`)
- **Color**: Blue
- **Subtitle**: Knowledge Management
- **Key Highlights**: PDF & URL ingestion, 36 vendor blueprint bundles, Semantic search, Source citation tracking, Automatic metadata extraction, Version history
- **Use Cases**: AI Engineer (Compare Vendor Documentation), Product Manager (Research Market Landscape), Enterprise Architect (Evaluate Compliance Requirements)
- **MDX Content**: How it works, Blueprint bundles overview, Source types supported

#### 2. Lab (`/features/lab`)
- **Color**: Purple
- **Subtitle**: AI Research Agent
- **Key Highlights**: Citation-backed responses, Transparent thinking steps, Smart prompt suggestions, Multi-turn conversations, Inline citations, Artifact generation
- **Use Cases**: AI Engineer (Deep-Dive Technical Comparisons), Product Manager (Quick Answers for Stakeholders), Enterprise Architect (Architecture Decision Support)
- **MDX Content**: Citation-first responses example, Transparent thinking process, Smart prompts, Multi-turn conversations, Generate artifacts

#### 3. Studio (`/features/studio`)
- **Color**: Green
- **Subtitle**: Artifacts & Exports
- **Key Highlights**: Comparison table generation, Decision memo templates, Export to multiple formats, Citation preservation, Version history, Share-ready formatting
- **Use Cases**: AI Engineer (Technical Specification Documents), Product Manager (Executive Decision Memos), Enterprise Architect (Vendor Evaluation Reports)
- **MDX Content**: Artifact types (Comparison Tables, Decision Memos, Research Reports), Export formats, Citation preservation, Version history

#### 4. Scenarios (`/features/scenarios`)
- **Color**: Orange
- **Subtitle**: Stack Intelligence
- **Key Highlights**: Workload configuration wizard, Cost estimation, Latency analysis (P50/P95/P99), Stack recommendations, What-if analysis, Budget optimization
- **Use Cases**: AI Engineer (Optimize Model Selection), Product Manager (Budget Planning & Forecasting), Enterprise Architect (Multi-Region Deployment Planning)
- **MDX Content**: Configure workload (types, requirements, budget), Get recommendations, What-if analysis, Cost modeling, Vendor comparison matrix

### Page Structure

Each feature detail page includes:

1. **Hero Section**
   - Large colored icon
   - Subtitle (feature category)
   - Title (feature name)
   - Description paragraph

2. **Highlights Section**
   - "Key Capabilities" heading
   - Grid of 6 highlights with checkmark icons
   - Color-coded border and background

3. **Screenshot Placeholder Section**
   - Aspect ratio container
   - Placeholder icon and text
   - Ready for product screenshots integration

4. **Use Cases Section**
   - "Use Cases by Persona" heading
   - 3 persona cards (AI Engineer, Product Manager, Enterprise Architect)
   - Each with persona badge, title, and description

5. **MDX Content Section**
   - Full prose styling for rendered MDX
   - Support for headings, lists, tables, code blocks, blockquotes
   - Responsive typography

6. **CTA Section**
   - Dynamic headline with feature name
   - Price mention ($99)
   - Primary CTA to pricing page
   - Secondary CTA back to features index
   - Trust note

### Technical Implementation

**Files Created:**
- `src/pages/features/[slug].astro` - Dynamic routing page with full section structure
- `src/content/features/sources.mdx` - Sources feature content (70+ lines)
- `src/content/features/lab.mdx` - Lab feature content (85+ lines)
- `src/content/features/studio.mdx` - Studio feature content (100+ lines)
- `src/content/features/scenarios.mdx` - Scenarios feature content (115+ lines)

**Files Modified:**
- `src/content/config.ts` - Enhanced features schema

**Design Patterns:**
- Color-coded features (blue, purple, green, orange)
- Consistent icon mapping (database, brain, file-output, layers)
- CSS custom properties for prose styling (Tailwind v4 compatible)
- Global selectors for MDX rendered content

### Tests Added

68 new Playwright tests covering:

**All Feature Pages Load (4 tests)**:
- Sources, Lab, Studio, Scenarios page loads

**Page Title and Meta (5 tests)**:
- Correct titles for all 4 features
- Meta descriptions present

**Hero Section Structure (5 tests)**:
- Hero visibility
- Icon display
- Subtitle, title, description

**Individual Feature Pages (16 tests)**:
- Sources page content and highlights
- Lab page content and highlights
- Studio page content and highlights
- Scenarios page content and highlights

**Highlights Section (2 tests)**:
- Title "Key Capabilities"
- Checkmark icons

**Screenshot Placeholder Section (2 tests)**:
- Section visibility
- Placeholder visible

**Use Cases Section (3 tests)**:
- Title "Use Cases by Persona"
- Persona badges
- Titles and descriptions

**MDX Content Section (3 tests)**:
- Content section visible
- Prose rendered
- Lists included

**CTA Section (6 tests)**:
- Section visibility
- Dynamic headline
- Price in subhead
- Primary and secondary buttons
- Trust note

**Navigation & Layout (4 tests)**:
- Header and footer visible
- Pricing link works
- Features link works

**Responsive Design (5 tests)**:
- Hero adapts to mobile
- Highlights grid adapts
- Use cases stack
- CTA buttons stack
- Tablet rendering

**Accessibility (3 tests)**:
- Heading hierarchy
- Icons aria-hidden
- Button labels

**Content Accuracy (5 tests)**:
- 36 vendor blueprints mentioned
- Citations mentioned
- Artifacts mentioned
- Cost mentioned
- $99 price consistent

**Cross-Feature Navigation (5 tests)**:
- Navigate from index to each feature
- Navigate back to index

**Total Tests**: 836 (768 + 68)

### Files Created/Modified

**Created:**
- `src/pages/features/[slug].astro`
- `src/content/features/sources.mdx`
- `src/content/features/lab.mdx`
- `src/content/features/studio.mdx`
- `src/content/features/scenarios.mdx`
- `tests/feature-17-feature-detail-pages.spec.ts`
- `releases/release-0.17.0.md`

**Modified:**
- `src/content/config.ts` - Enhanced schema
- `package.json` - Version bump to 0.17.0

### Build Output

```
9 page(s) built:
- / (index)
- /features (index)
- /features/sources
- /features/lab
- /features/studio
- /features/scenarios
- /pricing
- /thank-you
- /ui-showcase
```

### Navigation Flow

```
/features (index)
├── "Learn more" → /features/sources
├── "Learn more" → /features/lab
├── "Learn more" → /features/studio
└── "Learn more" → /features/scenarios

/features/[slug]
├── "Get Lattice for $99" → /pricing
└── "View All Features" → /features
```

### Breaking Changes

None — existing functionality preserved.

---

*Phase 2 Content & Journeys continues. Next: Feature Slice 18 - Journeys Index Page*
