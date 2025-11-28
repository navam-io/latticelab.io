# Lattice Lab Website Specification

**Version**: 1.0.0
**Last Updated**: November 28, 2025
**Product**: Lattice v0.6.2 — Agentic AI Lab Assistant
**Website**: https://www.latticelab.io
**Repository**: https://github.com/navam-io/latticelab.io

---

## Executive Summary

Lattice Lab is the marketing website for **Lattice**, an agentic AI lab assistant for research engineers, platform leads, and CTOs making AI infrastructure decisions. The website serves as the primary acquisition channel, featuring interactive product previews, journey-based storytelling, and a frictionless one-time purchase flow via Stripe.

### Key Objectives

1. **Convert visitors to customers** — Clear value proposition with $99 one-time purchase
2. **Demonstrate product value** — Interactive mock previews of Lattice features
3. **Build trust** — Privacy-first, deploy-anywhere positioning for enterprise buyers
4. **Enable rapid iteration** — Optimized for Claude Code development workflow

---

## Conversion Rate Optimization (CRO) Principles

### The 5-Second Rule

**Critical**: If you don't hook someone in the first 5 seconds, you've lost them. The above-the-fold section is make-or-break.

- **60% of visitors** never scroll past the fold
- **100% of visitors** see the above-the-fold section
- Spend **80-90% of effort** on the above-the-fold section

### Above-the-Fold Formula

Every above-the-fold section MUST include:

1. **Benefit-Driven Headline** (6-8 words max)
   - Focus on dream outcome, not what you do
   - Bold statement that makes people say "take my money"
   - No jargon or vague text
   - Example: "Stop Researching AI. Start Deciding." ✓
   - Example: "AI Infrastructure Research Tool" ✗

2. **Sub-headline with USP**
   - Explain who you are and what you do
   - Convey unique differentiator from competitors

3. **Social Proof Above the Fold**
   - Minimum 2 forms of social proof
   - Verifiable details: photos, names, sources
   - Reviews must be attributable (name, photo, source)

4. **Clear CTA Button**
   - Benefit-driven action text
   - Stands out visually on the page

5. **FUDs Reduction** (Fear, Uncertainty, Doubts)
   - Place directly under CTA button
   - Examples: "30-day money-back guarantee", "No credit card required"
   - 40-60% conversion lift from this alone

6. **Visual/Image/Video**
   - Complements messaging
   - Subtly conveys who you are and what you do

### Visual Hierarchy Principles

Guide user attention from most to least important:

- **Font size, weight, color** differentiate importance levels
- **Less is more** — too many options = analysis paralysis
- **Clear flow**: Headline → Sub-headline → CTA → Supporting content
- **Bold headlines** that stand out on the page

### People Scan, Not Read

Only 20% of content is read; 80% is scanned:

- **Bold headings** communicate value at a glance
- **Bullet points** for key value props
- **Headlines alone** should convey the benefit
- Avoid generic headlines like "What We Do" — state the benefit directly

### Emotional Connection (PAS Framework)

People buy with emotion, then rationalize with logic:

**Problem-Agitate-Solve (PAS) Framework:**
1. **Problem**: Call out the pain point clearly
2. **Agitate**: Make them feel the problem, turn up the heat
3. **Solve**: Present your solution as the clear way out

**Images for Emotional Appeal:**
- Human brain processes images 60,000x faster than text
- Use photos showing positive outcomes
- Show people experiencing the benefit

### Social Proof Best Practices

Social proof must be **verifiable**:

- **Reviews need**: Photo + Name + Source (Google, etc.)
- **Featured logos need**: Quote from the publication
- **Case studies need**: Specific metrics and outcomes
- **Never hide** reviews in carousels on mobile — force consumption
- **Avoid**: Generic logos without context, anonymous reviews

### Jacob's Law (Simplicity > Creativity)

People expect pages to look and function like what they're familiar with:

- One clear headline
- Body text in close proximity to headline
- Social proof at top
- CTA button underneath
- FUDs under CTA
- Image/video supporting the message

**Creativity at the cost of clarity = lost conversions**

### Guarantee as Trust Builder

- Free trial with no credit card
- 30-day or 60-day money-back guarantee
- "Deploy anywhere, data never leaves" (security guarantee)

### Storytelling Integration

- Take visitors through emotional journey
- Ups and downs build connection
- 1000+ year old marketing technique that still works

---

## Target Audience (ICP)

### Primary Personas

| Persona | Role | Pain Point | Key Message |
|---------|------|------------|-------------|
| **Research Engineer** | AI/ML team member evaluating models | Weeks spent gathering benchmark data, pricing, model cards | "Ground every recommendation in sources" |
| **Platform Lead** | Tech lead making infrastructure decisions | Complex multi-factor decisions (latency, cost, compliance) | "Configure scenarios, get grounded stack recommendations" |
| **CTO / Technical Leader** | Executive presenting AI strategy | Need board-ready artifacts with traceable provenance | "Generate executive artifacts with full citations" |

### Buying Context

- **Decision Driver**: Frustrated with manual research synthesis
- **Budget**: $99 is impulse purchase for individual; trivial for enterprise
- **Security Concern**: Data sensitivity — self-hosted deployment is critical
- **Timeline**: Need solution now (AI decisions are urgent)

---

## Website Architecture

### Site Map

```
/                           # Hero + Value Prop + CTA
├── /features               # Feature deep-dives with interactive previews
│   ├── /features/sources   # Knowledge management
│   ├── /features/lab       # AI research agent
│   ├── /features/studio    # Artifacts & exports
│   └── /features/scenarios # Scenario-stack intelligence
├── /journeys               # Product journey gallery
│   └── /journeys/[slug]    # Individual journey pages
├── /blueprints             # Blueprint gallery showcase
├── /pricing                # Simple $99 one-time pricing
├── /docs                   # Quick start guide (links to GitHub)
└── /about                  # Mission, team, philosophy
```

### Page Specifications

#### Homepage (`/`)

**Purpose**: Convert visitors — communicate value, build trust, drive purchase

**CRO Priority**: Above-the-fold (Hero) gets 80-90% of effort. Must hook visitors in 5 seconds.

**Sections** (scroll order):

1. **Hero** (CRITICAL - Above the Fold)
   - **Benefit-driven headline** (6-8 words max): Focus on outcome, not features
   - **Sub-headline with USP**: Explain what + unique differentiator
   - **Social proof** (2 forms minimum): Logo bar + review snippet
   - **Primary CTA button**: Benefit-driven text, visually prominent
   - **FUDs reduction**: Under CTA (e.g., "30-day money-back guarantee")
   - **Product screenshot**: Visual showing the solution

2. **Pain Agitation** (PAS Framework - Problem + Agitate)
   - "The AI Infrastructure Research Problem"
   - Make visitors feel the pain they already experience
   - 4 pain points with emotional connection
   - Bold headlines scannable at a glance

3. **Solution** (PAS Framework - Solve)
   - Three-panel layout preview with feature highlights
   - Present as the clear way out of their problem
   - Large screenshot placeholder with mock interface
   - CTA button to /features

4. **Social Proof** (Verifiable)
   - Testimonials with: Photo + Name + Role + Company
   - Case study metrics where available
   - Featured logos WITH quotes from publications
   - Never hide in carousels — force consumption

5. **Persona Value Props**
   - Cards for Research Engineer, Platform Lead, CTO
   - Benefit-driven headlines for each persona
   - Specific outcomes, not generic features

6. **Interactive Preview**
   - Embedded mock of chat interface
   - Shows product value through experience

7. **Privacy & Security** (Trust/Guarantee)
   - Self-hosted, no data leaves your machine
   - Deploy anywhere positioning
   - Security as a guarantee element

8. **Pricing**
   - $99 one-time, Stripe buy button
   - Clear value summary
   - FUDs reduction: money-back guarantee

9. **FAQ**
   - Common objections answered
   - Reduce remaining friction

10. **Footer**
    - Links, GitHub, contact

#### Features (`/features/*`)

**Purpose**: Demonstrate depth of capabilities

Each feature page includes:
- Hero with animated product screenshot
- Interactive mock preview (frontend-only simulation)
- Use cases by persona
- Integration with journeys (links to relevant journeys)

**Feature Pages**:
- `/features/sources` — PDF upload, URL ingestion, blueprint bundles
- `/features/lab` — AI agent, citations, thinking steps, smart prompts
- `/features/studio` — Artifacts, exports, comparison tables
- `/features/scenarios` — Scenario config, stack suggestions, what-if analysis

#### Journeys (`/journeys`)

**Purpose**: Show real product workflows step-by-step

- Gallery view with journey cards
- Each journey page shows JTBD statement, steps with screenshots
- Sourced directly from `/journeys` folder in Lattice repo

**Initial Journeys** (from product):
1. Create Workspace
2. Switch Workspace
3. Configure Settings
4. Manage API Keys
5. Browse Blueprints
6. Apply Blueprint

#### Blueprints (`/blueprints`)

**Purpose**: Showcase the 36 curated blueprint bundles

- Gallery with vendor logos and categories
- Filter by: vendor, category (production, comparison, etc.)
- Each blueprint card shows: vendor, source count, description
- Links to "Try with Lattice" purchase CTA

#### Pricing (`/pricing`)

**Purpose**: Simple, transparent purchase

**Content**:
- Single tier: $99 one-time purchase
- What's included:
  - Full Lattice source code access (private GitHub repo)
  - All 36 blueprint bundles
  - Future updates (within major version)
  - Deploy anywhere: laptop, private cloud, air-gapped
- Stripe buy button integration
- FAQ about access delivery (email → GitHub invite)

#### Documentation (`/docs`)

**Purpose**: Enable successful setup

- Quick Start guide
- System requirements
- Docker setup instructions
- Link to full docs in GitHub repo

---

## Design System

### Philosophy

Match Lattice product's sophisticated, technical aesthetic:
- **Minimalist** — Clean, professional, no visual clutter
- **Technical** — Appeals to engineers, not marketers
- **Dark-mode first** — Matches product's developer focus
- **Typography-driven** — Clear hierarchy, excellent readability

### Color Palette

Derived from Lattice product (OKLCH-based, converted to Hex for broader compatibility):

```css
:root {
  /* Core */
  --color-background: #ffffff;
  --color-foreground: #1a1a1c;

  /* Primary — Dark zinc */
  --color-primary: #27272a;
  --color-primary-foreground: #fafafa;

  /* Secondary — Light zinc */
  --color-secondary: #f4f4f5;
  --color-secondary-foreground: #27272a;

  /* Accent — For CTAs, highlights */
  --color-accent: #3b82f6;        /* Blue accent for marketing */
  --color-accent-foreground: #ffffff;

  /* Borders */
  --color-border: #e4e4e7;
  --color-border-subtle: #f4f4f5;

  /* Status */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-destructive: #ef4444;

  /* Surface layers */
  --color-surface-1: #ffffff;
  --color-surface-2: #fafafa;
  --color-surface-3: #f4f4f5;
}

/* Dark mode */
[data-theme="dark"] {
  --color-background: #09090b;
  --color-foreground: #fafafa;
  --color-primary: #e4e4e7;
  --color-primary-foreground: #18181b;
  --color-secondary: #27272a;
  --color-secondary-foreground: #fafafa;
  --color-border: #27272a;
  --color-surface-1: #09090b;
  --color-surface-2: #18181b;
  --color-surface-3: #27272a;
}
```

### Typography

Match Lattice product typography:

```css
:root {
  /* Font families */
  --font-sans: 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', 'Fira Code', monospace;

  /* Font sizes (rem) */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */

  /* Line heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Font weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Spacing & Layout

```css
:root {
  /* Spacing scale (rem) */
  --space-1: 0.25rem;     /* 4px */
  --space-2: 0.5rem;      /* 8px */
  --space-3: 0.75rem;     /* 12px */
  --space-4: 1rem;        /* 16px */
  --space-5: 1.25rem;     /* 20px */
  --space-6: 1.5rem;      /* 24px */
  --space-8: 2rem;        /* 32px */
  --space-10: 2.5rem;     /* 40px */
  --space-12: 3rem;       /* 48px */
  --space-16: 4rem;       /* 64px */
  --space-20: 5rem;       /* 80px */
  --space-24: 6rem;       /* 96px */

  /* Container */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;

  /* Border radius */
  --radius-sm: 0.375rem;  /* 6px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.625rem;  /* 10px */
  --radius-xl: 0.875rem;  /* 14px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;
}
```

### Component Patterns

#### Buttons

```css
/* Primary CTA */
.btn-primary {
  background: var(--color-accent);
  color: var(--color-accent-foreground);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-medium);
  transition: all 150ms ease;
}

/* Secondary */
.btn-secondary {
  background: var(--color-secondary);
  color: var(--color-secondary-foreground);
  border: 1px solid var(--color-border);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-foreground);
}
```

#### Cards

```css
.card {
  background: var(--color-surface-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.card-elevated {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

#### Navigation

- Fixed header with blur backdrop
- Logo left, nav links center, CTA right
- Mobile: hamburger menu with slide-out drawer

---

## Interactive Mock Previews

### Implementation Strategy

Static GitHub Pages cannot run backend services, so interactive previews are **frontend-only simulations**:

1. **Hardcoded responses** — Pre-scripted AI responses for demo scenarios
2. **State simulation** — React state mimics product behavior
3. **Animation focus** — Smooth transitions, typing effects, loading states
4. **Screenshot fallback** — Real product screenshots for complex flows

### Preview Components

#### Chat Preview (`<ChatPreview />`)

Simulates the Lab panel chat experience:
- Pre-scripted conversation about "Comparing Claude vs GPT-4"
- Typing indicator animation
- Citation pills that expand on hover
- Thinking steps that collapse/expand

**Demo Flow**:
1. User message: "Compare Claude Sonnet 4 and GPT-4o for our RAG pipeline"
2. Typing indicator (1.5s)
3. AI response streams in with citations
4. Citation tooltips show source details
5. Artifact card appears in sidebar

#### Sources Preview (`<SourcesPreview />`)

Simulates the Sources panel:
- File upload dropzone (visual only)
- Sample sources: "OpenAI Pricing", "Anthropic Model Card", "LangChain Benchmark"
- Source cards with metadata
- Filter/search interaction

#### Blueprint Preview (`<BlueprintPreview />`)

Simulates the Blueprint Gallery:
- Sample blueprint cards (Anthropic, OpenAI, AWS, etc.)
- Category filter tabs
- Apply button (shows modal with "success" state)

#### Scenario Preview (`<ScenarioPreview />`)

Simulates scenario configuration:
- Form with workload type dropdown
- Latency/throughput sliders
- Budget input
- "Get Recommendations" button with loading state
- Stack suggestion cards appear

### Screenshot Integration

For complex features, use actual product screenshots from `/journeys/`:

- Workspace creation flow
- Settings configuration
- API key management
- Full three-panel layout

---

## Product Assets & Screenshots

### Source Location

Product screenshots and assets are located in the Lattice product repository:

```
/Users/manavsehgal/Developer/lattice/
├── journeys/                    # 71 product screenshots across 16 journeys
│   ├── add-sources/            # 7 screenshots
│   ├── apply-blueprint/        # 4 screenshots
│   ├── ask-about-selection/    # 6 screenshots
│   ├── browse-blueprints/      # 3 screenshots
│   ├── chat-with-ai/           # 5 screenshots
│   ├── configure-settings/     # 5 screenshots
│   ├── create-workspace/       # 4 screenshots
│   ├── discover-blueprint/     # 5 screenshots
│   ├── filter-blueprints/      # 5 screenshots
│   ├── manage-api-keys/        # 2 screenshots
│   ├── refresh-blueprint/      # 5 screenshots
│   ├── save-artifact/          # 5 screenshots
│   ├── switch-workspace/       # 3 screenshots
│   ├── view-artifact/          # 5 screenshots
│   └── view-source/            # 5 screenshots
│
└── assets/                      # Logo variants
    ├── lattice-logo-side-white-bg.png      # Header (light mode)
    ├── lattice-logo-side-bw.png            # Header (dark/light dual)
    ├── lattice-logo-top-white-bg.png       # Footer/marketing (stacked)
    ├── lattice-logo-top-white-bg-icon.png  # Favicon
    ├── lattice-logo-top-white-bg-icon-512.png  # OG image/PWA
    └── lattice-logo.png                    # Dark background variant
```

### Recommended Screenshots by Section

#### Hero Section (Above the Fold)

**Best screenshot**: `chat-with-ai/chat-with-ai-01.png`
- Shows clean three-panel layout: Sources | Lab | Studio
- Welcome state with "Welcome to Lattice Lab" message
- Suggested prompts visible (demonstrates AI capability)
- Professional, uncluttered first impression

**Alternative**: `add-sources/add-sources-01.png` (shows populated sources panel)

#### Solution Section (Three-Panel Preview)

**Left panel (Sources)**: `view-source/view-source-01.png`
- Shows 4 sources indexed with metadata
- Green "Vendor" badges visible
- Professional source management view

**Center panel (Lab)**: `chat-with-ai/chat-with-ai-05.png`
- Shows AI response with structured content
- "Cost Benefits", "Critical Caveats", "Recommendation" sections
- "Save as Artifact" and "Copy" buttons visible
- Demonstrates the quality of AI output

**Right panel (Studio)**: `view-artifact/view-artifact-01.png`
- Shows artifact with memo saved
- "1 artifact" indicator
- Demonstrates artifact persistence

#### Feature Pages

**Sources Feature** (`/features/sources`):
- `add-sources/add-sources-01.png` - Sources panel with indexed documents
- `view-source/view-source-01.png` - Source detail view

**Lab Feature** (`/features/lab`):
- `chat-with-ai/chat-with-ai-03.png` - User asking question, Research Agent responding
- `chat-with-ai/chat-with-ai-05.png` - Full AI response with sections

**Studio Feature** (`/features/studio`):
- `save-artifact/save-artifact-01.png` - Save artifact flow
- `view-artifact/view-artifact-01.png` - Artifact in Studio panel

**Scenarios Feature** (`/features/scenarios`):
- `browse-blueprints/browse-blueprints-02.png` - Blueprint Gallery with filters
- `apply-blueprint/apply-blueprint-03.png` - Blueprint details with Sources, Scenarios, Stacks

#### Blueprints Page

**Gallery view**: `browse-blueprints/browse-blueprints-02.png`
- Shows Blueprint Gallery modal (36 blueprints)
- Category filters: All, Production, Development, Comparison, Cost Optimization, RAG, Agentic, General
- Vendor filters: Anthropic, AWS, Microsoft Azure, Google Cloud, Meta, NVIDIA
- Blueprint cards with star ratings, version numbers

**Discovery modal**: `discover-blueprint/discover-blueprint-03.png`
- Shows "Discover Blueprint" AI-powered modal
- Vendor dropdown and topic input
- Purple "Discover" CTA button

**Blueprint detail**: `apply-blueprint/apply-blueprint-03.png`
- Blueprint selected state showing details
- Sources (3), Scenarios (1), Stacks (1) breakdown
- "Apply to Workspace" purple CTA

### Logo Usage Recommendations

| Use Case | Asset | Notes |
|----------|-------|-------|
| **Header (light bg)** | `lattice-logo-side-white-bg.png` | Horizontal, dark icon + text |
| **Header (dark bg)** | `lattice-logo-side-bw.png` (light variant) | Horizontal, light icon + text |
| **Footer** | `lattice-logo-top-white-bg.png` | Stacked, larger presence |
| **Favicon** | `lattice-logo-top-white-bg-icon.png` | Icon only, 32x32 optimized |
| **OG Image** | `lattice-logo-top-white-bg-icon-512.png` | 512x512 for social sharing |
| **Marketing materials** | `lattice-logo.png` | Dark background variant |

### Design Alignment Notes

The website design system is already well-aligned with the Lattice product:

**Typography**: Both use Geist Sans/Mono font families
**Colors**: Product uses OKLCH, website uses Hex equivalents - visually identical
**Borders**: Product radius `0.625rem` matches website `--radius-lg`
**Surfaces**: Both use zinc-based surface layers (surface-1, surface-2, surface-3)

**Product-specific patterns to incorporate in website**:

1. **Green "Vendor" badges** - Used in Sources panel for source type indicators
2. **Purple accent for AI features** - "Discover" button uses purple (`bg-purple-500`)
3. **Yellow star for official content** - Official blueprints have yellow star icons
4. **Card hover states** - `hover:border-gray-300` with subtle transition
5. **Metadata styling** - Small gray text for counts (pages, tokens, chunks)
6. **Filter tabs** - Rounded pill-style filters with active state

---

## Technical Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 5.x | Static site generation, islands architecture |
| **React** | 19.x | Interactive components (islands) |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Styling (matches Lattice product) |

### Why Astro?

1. **Static-first** — Perfect for GitHub Pages (zero server-side)
2. **Islands architecture** — Interactive React components only where needed
3. **Blazing fast** — Ships minimal JavaScript
4. **MDX support** — Content-driven pages from markdown
5. **Image optimization** — Built-in image handling
6. **View Transitions** — Smooth page transitions

### Additional Dependencies

```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/react": "^4.0.0",
    "@astrojs/tailwind": "^6.0.0",
    "@astrojs/mdx": "^4.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.0.0",
    "lucide-react": "^0.450.0",
    "framer-motion": "^11.0.0",
    "@fontsource/geist-sans": "^5.0.0",
    "@fontsource/geist-mono": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.6.0",
    "@types/react": "^19.0.0",
    "prettier": "^3.0.0",
    "prettier-plugin-astro": "^0.14.0",
    "prettier-plugin-tailwindcss": "^0.6.0"
  }
}
```

### Project Structure

```
latticelab.io/
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   └── assets/
│       ├── screenshots/         # Product screenshots from journeys
│       ├── logos/               # Vendor/partner logos
│       └── icons/               # Custom icons
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Badge.astro
│   │   │   └── ...
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── Features.astro
│   │   │   ├── Pricing.astro
│   │   │   ├── FAQ.astro
│   │   │   └── ...
│   │   └── previews/            # Interactive mock previews (React)
│   │       ├── ChatPreview.tsx
│   │       ├── SourcesPreview.tsx
│   │       ├── BlueprintPreview.tsx
│   │       ├── ScenarioPreview.tsx
│   │       └── shared/
│   │           ├── TypingIndicator.tsx
│   │           ├── CitationPill.tsx
│   │           └── ...
│   ├── content/
│   │   ├── journeys/            # MDX files for journey pages
│   │   │   ├── create-workspace.mdx
│   │   │   └── ...
│   │   └── features/            # MDX files for feature pages
│   │       ├── sources.mdx
│   │       └── ...
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PageLayout.astro
│   │   └── JourneyLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── features/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── journeys/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── blueprints.astro
│   │   ├── pricing.astro
│   │   ├── docs.astro
│   │   └── about.astro
│   ├── styles/
│   │   ├── globals.css          # Design tokens, base styles
│   │   └── animations.css       # Keyframe animations
│   ├── lib/
│   │   ├── constants.ts         # Site config, navigation
│   │   ├── utils.ts             # Helper functions
│   │   └── preview-data.ts      # Mock data for interactive previews
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### Build & Deploy

```yaml
# GitHub Actions: .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## Content Strategy

### Messaging Framework

#### Tagline

> **Lattice** — Agentic AI Lab Assistant for Research Engineers

#### Hero Headline (Above the Fold)

**CRO Requirement**: 6-8 words max, benefit-driven, bold statement

**Primary**: "Stop Researching AI. Start Deciding."

**Alternatives to A/B Test**:
- "AI Decisions in Hours, Not Weeks"
- "Ground Every AI Decision in Sources"
- "From Research Chaos to Clarity"

#### Sub-headline (USP)

> Lattice synthesizes pricing, benchmarks, and model cards into grounded recommendations with citations. Self-hosted, privacy-first.

#### Value Proposition Formula

**Benefit** (what they get) + **USP** (why you're different) + **Proof** (why believe you)

| Audience | Benefit-Driven Message | USP | Proof Point |
|----------|------------------------|-----|-------------|
| Research Engineers | "Cut weeks of research to hours" | AI agent with citations | Citation system with chunk-level provenance |
| Platform Leads | "Get stack recommendations that match your constraints" | Scenario-based intelligence | Scenario-to-stack recommendation engine |
| CTOs | "Board-ready artifacts in minutes" | Full citation provenance | Export comparison tables, decision memos |
| Security-conscious | "Your data never leaves your machine" | Self-hosted Docker | Works air-gapped, deploy anywhere |

#### FUDs Reduction Copy

Place under CTA buttons:
- "30-day money-back guarantee"
- "Deploy in under 5 minutes"
- "No data leaves your machine"
- "$99 one-time — no subscriptions"

### Copywriting Tone

- **Technical, not salesy** — Engineers are allergic to marketing speak
- **Direct** — Short sentences, clear claims
- **Grounded** — Features backed by specific capabilities
- **Confident** — No hedging ("may help" → "helps")
- **Benefit-first** — Lead with outcome, not feature
- **Scannable** — Bold headlines carry the message alone

### Content Inventory

| Page | Primary Content | Word Count |
|------|----------------|------------|
| Homepage | Hero, pain points, solution, pricing | ~1,200 |
| /features/* | Feature deep-dives (4 pages) | ~600 each |
| /journeys/* | Step-by-step guides (6+ pages) | ~400 each |
| /blueprints | Blueprint gallery descriptions | ~800 |
| /pricing | Pricing details, FAQ | ~600 |
| /docs | Quick start guide | ~500 |
| /about | Mission, philosophy | ~400 |

---

## Stripe Integration

### Buy Button Implementation

Stripe Buy Button (embedded iframe) for simplest integration:

```html
<!-- Stripe Buy Button Component -->
<stripe-buy-button
  buy-button-id="buy_btn_XXXXXXXX"
  publishable-key="pk_live_XXXXXXXX"
>
</stripe-buy-button>
```

### Purchase Flow

1. Customer clicks "Buy Lattice — $99"
2. Stripe checkout opens (in modal or new tab)
3. Customer enters payment details
4. On success → Stripe sends webhook to Lattice team
5. Lattice team manually adds customer email to GitHub repo
6. Customer receives GitHub invitation email
7. Customer clones repo and deploys

### Post-Purchase Page

Create `/thank-you` page:
- Confirmation message
- Next steps:
  1. Check email for GitHub invitation
  2. Accept invitation to access private repo
  3. Clone and follow Quick Start guide
- Support contact info
- Expected timeline: "Within 24 hours"

---

## SEO & Performance

### Meta Tags

```html
<!-- Primary Meta Tags -->
<title>Lattice — Agentic AI Lab Assistant | $99 One-Time</title>
<meta name="title" content="Lattice — Agentic AI Lab Assistant | $99 One-Time" />
<meta name="description" content="Stop researching AI infrastructure manually. Lattice synthesizes benchmarks, pricing, and model cards into grounded recommendations with citations. Deploy anywhere." />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.latticelab.io/" />
<meta property="og:title" content="Lattice — Agentic AI Lab Assistant" />
<meta property="og:description" content="Ground every AI infrastructure decision in sources. $99 one-time, self-hosted, privacy-first." />
<meta property="og:image" content="https://www.latticelab.io/og-image.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.latticelab.io/" />
<meta property="twitter:title" content="Lattice — Agentic AI Lab Assistant" />
<meta property="twitter:description" content="Ground every AI infrastructure decision in sources." />
<meta property="twitter:image" content="https://www.latticelab.io/og-image.png" />
```

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.0s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |

### Optimizations

- **Image optimization**: Astro's built-in `<Image />` component
- **Font loading**: `font-display: swap` with preload
- **JavaScript**: Only ship React for interactive islands
- **CSS**: Tailwind purges unused styles
- **Compression**: Enable gzip/brotli via GitHub Pages headers

---

## Development Workflow

### Claude Code Optimization

This spec is designed for rapid iteration with Claude Code:

1. **Clear component boundaries** — Each component has single responsibility
2. **Consistent naming** — Predictable file locations and names
3. **Design tokens** — Centralized CSS variables for styling
4. **TypeScript** — Type definitions guide implementation
5. **MDX content** — Easy content updates without code changes

### Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Format code
npm run format
```

### Iteration Patterns

**Adding a new feature page:**
1. Create `/src/content/features/new-feature.mdx`
2. Add entry to navigation in `/src/lib/constants.ts`
3. Page automatically generated by `[slug].astro`

**Adding a new journey:**
1. Copy screenshots to `/public/assets/screenshots/journey-name/`
2. Create `/src/content/journeys/journey-name.mdx`
3. Journey card appears in gallery automatically

**Updating design tokens:**
1. Edit `/src/styles/globals.css`
2. All components automatically use new values

---

## Implementation Phases

### Phase 1: Foundation (MVP)

**Goal**: Shippable website with purchase capability

- [ ] Project setup (Astro, Tailwind, TypeScript)
- [ ] Design system implementation (colors, typography, components)
- [ ] Base layout (Header, Footer, Navigation)
- [ ] Homepage with all sections
- [ ] Pricing page with Stripe Buy Button placeholder
- [ ] Basic responsive design
- [ ] GitHub Actions deployment

**Deliverable**: Live site at latticelab.io with placeholder buy button

### Phase 2: Content & Journeys

**Goal**: Rich content demonstrating product value

- [ ] Feature pages (4 pages)
- [ ] Journey pages with screenshots (6+ pages)
- [ ] Blueprint gallery page
- [ ] About page
- [ ] Documentation page (links to GitHub)
- [ ] SEO optimization

**Deliverable**: Complete content-driven marketing site

### Phase 3: Interactive Previews

**Goal**: Let visitors experience the product

- [ ] ChatPreview component with scripted demo
- [ ] SourcesPreview component
- [ ] BlueprintPreview component
- [ ] ScenarioPreview component
- [ ] Smooth animations and transitions
- [ ] Mobile-optimized previews

**Deliverable**: Interactive demonstrations on feature pages

### Phase 4: Purchase Flow

**Goal**: Complete purchase integration

- [ ] Stripe Buy Button integration (live key)
- [ ] Thank You page
- [ ] Purchase confirmation emails (Stripe)
- [ ] Analytics integration (Plausible or similar)
- [ ] Error handling and edge cases

**Deliverable**: End-to-end purchase capability

### Phase 5: Polish & Launch

**Goal**: Production-ready launch

- [ ] Cross-browser testing
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance optimization
- [ ] Final content review
- [ ] Soft launch to beta users
- [ ] Public launch

**Deliverable**: Production-ready marketing website

---

## Success Metrics

### Primary KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| Conversion Rate | 2-3% | Purchases / Unique visitors |
| Bounce Rate | < 40% | Single-page visits |
| Time on Site | > 2 min | Average session duration |
| Page Views/Session | > 3 | Engagement depth |

### Secondary Metrics

- Feature page engagement (scroll depth)
- Journey completion rate
- Interactive preview engagement
- Pricing page visit rate
- CTA click-through rate

---

## Appendix

### A. Blueprint Categories (for showcase)

From Lattice product:

| Category | Description | Example Vendors |
|----------|-------------|-----------------|
| Production | Production-ready stacks | AWS, GCP, Azure |
| Development | Local dev setups | Docker, Ollama |
| Comparison | Vendor comparisons | Multi-vendor |
| Enterprise | Enterprise features | Security, compliance |
| Research | Academic/research | Papers, benchmarks |
| Cost | Budget optimization | Pricing comparisons |
| Performance | Latency/throughput | Benchmarks |

### B. Sample Mock Conversation

For ChatPreview component:

```typescript
const mockConversation = [
  {
    role: 'user',
    content: 'Compare Claude Sonnet 4 and GPT-4o for our RAG pipeline. We need low latency and good reasoning.'
  },
  {
    role: 'assistant',
    content: `Based on your requirements for a RAG pipeline with low latency and strong reasoning, here's my analysis:

**Claude Sonnet 4** offers:
- Context window: 200K tokens [1]
- P95 latency: ~800ms for typical queries [2]
- Strong reasoning with extended thinking capability [1]

**GPT-4o** offers:
- Context window: 128K tokens [3]
- P95 latency: ~600ms [4]
- Multimodal capabilities built-in [3]

**Recommendation**: For RAG with reasoning emphasis, Claude Sonnet 4's larger context window and thinking steps provide better source grounding. For latency-critical applications, GPT-4o has a slight edge.`,
    citations: [
      { id: 1, source: 'Anthropic Model Card', url: 'anthropic.com/claude' },
      { id: 2, source: 'Claude Benchmarks Q4 2025', url: 'anthropic.com/research' },
      { id: 3, source: 'OpenAI GPT-4o Docs', url: 'platform.openai.com' },
      { id: 4, source: 'OpenAI Latency Benchmarks', url: 'platform.openai.com' }
    ]
  }
];
```

### C. Accessibility Checklist

- [ ] Color contrast ratio ≥ 4.5:1 (text) / 3:1 (large text)
- [ ] Focus indicators on all interactive elements
- [ ] Skip-to-content link
- [ ] Semantic HTML (proper heading hierarchy)
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Keyboard navigation throughout
- [ ] Reduced motion support (`prefers-reduced-motion`)
- [ ] Screen reader testing (VoiceOver, NVDA)

### D. Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 15+ |
| Chrome Mobile | Android 10+ |

---

*This specification is a living document. Update as requirements evolve.*
