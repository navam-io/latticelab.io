# Release 0.21.0

**Release Date**: November 28, 2025

---

## Feature Slice 21: Documentation Page

**Spec Reference**: `website-spec.md` → Site Map (/docs), Page Specifications (Documentation)

**Summary**: Created documentation page with quick start guide, system requirements, configuration instructions, and links to full GitHub documentation. Includes reusable CodeBlock component with copy-to-clipboard functionality.

### Completed Acceptance Criteria

- [x] `/src/pages/docs.astro` created
- [x] Hero section with Documentation eyebrow and quick start CTA
- [x] Quick Start Guide with 4 numbered steps
- [x] CodeBlock component with copy-to-clipboard functionality
- [x] System Requirements grid (Docker, RAM, Storage)
- [x] Configuration section with .env code example
- [x] Documentation links to GitHub repository sections
- [x] CTA section with pricing and journeys links
- [x] Page linked from main navigation (already present)

### Page Sections

#### 1. Hero Section
- Eyebrow: "Documentation"
- Headline: "Get Started in 5 Minutes"
- Subhead: "Lattice Lab runs locally with Docker. Clone, configure, and start researching with a single command."
- Buttons: Quick Start Guide (anchor), View on GitHub

#### 2. Quick Start Guide
Four numbered steps with visual connector lines:
| Step | Title | Description |
|------|-------|-------------|
| 1 | Purchase Lattice Lab | Complete purchase for GitHub access |
| 2 | Accept GitHub Invite | Receive invitation within 24 hours |
| 3 | Clone the Repository | Clone with `git clone` command |
| 4 | Run with Docker | Start with `docker-compose up -d` |

Success message: "You're Ready! Open http://localhost:3000"

#### 3. System Requirements
| Requirement | Version | Description |
|-------------|---------|-------------|
| Docker | 24.0+ | Container runtime |
| Docker Compose | 2.20+ | Multi-container orchestration |
| RAM | 8GB+ | Minimum memory |
| Storage | 10GB+ | For images and data |

Platform note: macOS, Linux, Windows (WSL2), Apple Silicon and Intel supported

#### 4. Configuration Section
- Title: "Configuration"
- Description: Configure API keys in `.env` file
- Code block with env example showing:
  - OPENAI_API_KEY
  - ANTHROPIC_API_KEY
  - GOOGLE_AI_KEY
  - AWS credentials
  - PORT and HOST settings
- Note: "API keys are stored locally and never sent to external servers"

#### 5. Documentation Links
Four cards linking to GitHub repository sections:
| Link | Description |
|------|-------------|
| Installation Guide | Detailed setup instructions |
| Configuration | Environment variables and settings |
| API Keys Setup | Connect AI provider accounts |
| Blueprints | Using and creating blueprint bundles |

#### 6. CTA Section
- Headline: "Ready to Get Started?"
- Subhead: "Purchase Lattice Lab and get instant access"
- Primary CTA: "Get Lattice for $99" → /pricing
- Secondary CTA: "View Product Journeys" → /journeys
- Trust note: "30-day money-back guarantee. Full source code access."

### Technical Implementation

**New Files**:
- `src/components/ui/CodeBlock.astro` — Reusable code block with copy-to-clipboard
- `src/pages/docs.astro` — Full documentation page
- `tests/feature-21-documentation-page.spec.ts` — 84 tests
- `releases/release-0.21.0.md`

**Modified**:
- `package.json` — Version bump to 0.21.0

### CodeBlock Component

New reusable component for displaying code snippets:

```typescript
interface Props {
  code: string;
  language?: string;  // defaults to 'bash'
  filename?: string;
  class?: string;
}
```

Features:
- Terminal-style header with colored dots (red, yellow, green)
- Optional filename display
- Copy-to-clipboard button with visual feedback
- Shows "Copied!" confirmation for 2 seconds
- Accessible with aria-label on copy button
- Syntax highlighting via language class

### Tests Added

84 new Playwright tests covering:

**Page Basics (3 tests)**:
- Page loads successfully
- Correct page title
- Meta description present

**Hero Section (9 tests)**:
- Section visibility
- Eyebrow, headline, subhead
- Hero buttons
- Quick start anchor link
- GitHub button with icon

**Quick Start Section (12 tests)**:
- Section and title visibility
- All 4 steps displayed
- Numbered badges (1-4)
- Step titles and descriptions
- Code blocks for clone and docker commands
- Success message with localhost URL

**Code Block Component (8 tests)**:
- Code blocks visible
- Filename display
- Copy button with aria-label
- "Copy" text
- Terminal dots decoration
- Code element with URL

**System Requirements Section (9 tests)**:
- Section visibility
- All 4 requirements displayed
- Docker, RAM, Storage versions
- Requirement names and descriptions
- Platform note

**Configuration Section (6 tests)**:
- Section visibility
- Title and description
- Env code example with API keys
- Configuration note

**Documentation Links Section (7 tests)**:
- Section visibility
- All 4 links displayed
- Link titles and descriptions
- Links point to GitHub

**CTA Section (6 tests)**:
- Section visibility
- Headline, subhead
- Primary/secondary buttons
- Trust note

**Navigation (4 tests)**:
- Quick start anchor works
- Pricing CTA navigates
- Journeys CTA navigates
- Page linked from main nav

**Responsive Design (5 tests)**:
- Hero adapts to mobile
- Steps stack on mobile
- Requirements grid adapts
- Links stack on mobile
- CTA buttons stack

**Accessibility (6 tests)**:
- Heading hierarchy (single h1)
- Multiple h2 headings
- Icons aria-hidden
- Links have text
- Copy buttons have aria-label
- Keyboard accessible

**Content Accuracy (5 tests)**:
- $99 price shown
- Docker version correct
- GitHub URL correct
- localhost port 3000
- All 4 steps complete

**Visual Elements (4 tests)**:
- Alternating section backgrounds
- Syntax highlighting classes
- Accent background on step numbers
- Green styling on success card

**Total Tests**: 1085 (1001 + 84)

### Build Output

```
18 page(s) built:
- / (index)
- /blueprints
- /docs ← NEW
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

### Breaking Changes

None — new page and component added without modifying existing functionality.

---

*Phase 2 Content & Journeys complete. All 21 feature slices implemented.*
