# Lattice Lab Website — Active Backlog

**Current Version**: 0.19.0
**Spec Reference**: [website-spec.md](./website-spec.md)

---

## Phase 1: Foundation (MVP) - COMPLETE

Phase 1 (Feature Slices 1-13) is now complete. See `releases/` folder for details.

---

## Phase 2: Content & Journeys

### Feature Slice 14: Pricing Page - COMPLETE

See `releases/release-0.14.0.md` for details.

---

### Feature Slice 15: Thank You Page - COMPLETE

See `releases/release-0.15.0.md` for details.

---

### Feature Slice 16: Features Index Page - COMPLETE

See `releases/release-0.16.0.md` for details.

---

### Feature Slice 17: Feature Detail Pages — Content Structure - COMPLETE

See `releases/release-0.17.0.md` for details.

---

### Feature Slice 18: Journeys Index Page - COMPLETE

See `releases/release-0.18.0.md` for details.

---

### Feature Slice 19: Journey Detail Pages — Content Structure - COMPLETE

See `releases/release-0.19.0.md` for details.

---

### Feature Slice 20: Blueprints Gallery Page

**Spec Reference**: `website-spec.md` → Site Map (/blueprints), Page Specifications (Blueprints), Appendix A

**Summary**: Create blueprints showcase page with filtering by vendor and category.

**Acceptance Criteria**:
- [ ] `/src/pages/blueprints.astro` created
- [ ] Hero section explaining blueprints concept
- [ ] Filter tabs for categories (Production, Development, Comparison, etc.)
- [ ] Blueprint cards with: vendor logo placeholder, name, source count, description
- [ ] Sample blueprint data in `lib/blueprint-data.ts` (from Appendix A)
- [ ] Each card has "Try with Lattice" CTA linking to pricing
- [ ] Responsive grid layout

---

### Feature Slice 21: Documentation Page

**Spec Reference**: `website-spec.md` → Site Map (/docs), Page Specifications (Documentation)

**Summary**: Create documentation page with quick start guide and links to GitHub docs.

**Acceptance Criteria**:
- [ ] `/src/pages/docs.astro` created
- [ ] Quick Start section with numbered steps
- [ ] System requirements list
- [ ] Docker setup instructions (code block)
- [ ] Link to full documentation in GitHub repo
- [ ] Code syntax highlighting for command examples
- [ ] Copy-to-clipboard buttons for code blocks

---

### Feature Slice 22: About Page

**Spec Reference**: `website-spec.md` → Site Map (/about), Content Strategy

**Summary**: Create about page with mission, philosophy, and team information.

**Acceptance Criteria**:
- [ ] `/src/pages/about.astro` created
- [ ] Mission statement section
- [ ] Philosophy section (Kevin Weil principles from product)
- [ ] Team section (placeholder for future content)
- [ ] Link to GitHub repository
- [ ] Contact information

---

### Feature Slice 23: SEO & Meta Tags

**Spec Reference**: `website-spec.md` → SEO & Performance (Meta Tags)

**Summary**: Implement comprehensive SEO meta tags across all pages.

**Acceptance Criteria**:
- [ ] `SEO.astro` component for reusable meta tags
- [ ] Page-specific title and description props
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] Favicon configured in `public/`
- [ ] OG image placeholder in `public/og-image.png`
- [ ] Structured data (JSON-LD) for product page

---

## Phase 3: Interactive Previews

### Feature Slice 24: Preview Components — Shared Utilities

**Spec Reference**: `website-spec.md` → Interactive Mock Previews (Implementation Strategy, Preview Components)

**Summary**: Create shared React components and utilities for interactive previews.

**Acceptance Criteria**:
- [ ] `src/components/previews/shared/` directory created
- [ ] `TypingIndicator.tsx` — Animated typing dots
- [ ] `CitationPill.tsx` — Inline citation badge with hover tooltip
- [ ] `MessageBubble.tsx` — Chat message display component
- [ ] `PreviewContainer.tsx` — Wrapper with consistent styling
- [ ] Mock data utilities in `lib/preview-data.ts`
- [ ] Framer Motion animations configured
- [ ] Components use design system tokens

---

### Feature Slice 25: Chat Preview Component

**Spec Reference**: `website-spec.md` → Interactive Mock Previews (Chat Preview)

**Summary**: Create ChatPreview React component simulating the Lab panel chat experience.

**Acceptance Criteria**:
- [ ] `src/components/previews/ChatPreview.tsx` created
- [ ] Pre-scripted conversation from Appendix B
- [ ] Typing indicator animation (1.5s delay)
- [ ] AI response streams in character-by-character
- [ ] Citation pills that expand on hover
- [ ] Thinking steps that collapse/expand
- [ ] Artifact card appears in sidebar after response
- [ ] "Play Demo" button to restart conversation
- [ ] Component works as Astro React island (`client:visible`)

---

### Feature Slice 26: Sources Preview Component

**Spec Reference**: `website-spec.md` → Interactive Mock Previews (Sources Preview)

**Summary**: Create SourcesPreview React component simulating the Sources panel.

**Acceptance Criteria**:
- [ ] `src/components/previews/SourcesPreview.tsx` created
- [ ] File upload dropzone (visual interaction, no actual upload)
- [ ] Sample source cards: "OpenAI Pricing", "Anthropic Model Card", "LangChain Benchmark"
- [ ] Source cards with metadata (type, page count, date added)
- [ ] Filter/search input with filtering animation
- [ ] Hover states on source cards
- [ ] Component works as Astro React island

---

### Feature Slice 27: Blueprint Preview Component

**Spec Reference**: `website-spec.md` → Interactive Mock Previews (Blueprint Preview)

**Summary**: Create BlueprintPreview React component simulating the Blueprint Gallery.

**Acceptance Criteria**:
- [ ] `src/components/previews/BlueprintPreview.tsx` created
- [ ] Sample blueprint cards (Anthropic, OpenAI, AWS Bedrock)
- [ ] Category filter tabs (clickable, filters cards)
- [ ] Blueprint card hover effects
- [ ] "Apply Blueprint" button opens modal
- [ ] Modal shows "success" state with animation
- [ ] Component works as Astro React island

---

### Feature Slice 28: Scenario Preview Component

**Spec Reference**: `website-spec.md` → Interactive Mock Previews (Scenario Preview)

**Summary**: Create ScenarioPreview React component simulating scenario configuration.

**Acceptance Criteria**:
- [ ] `src/components/previews/ScenarioPreview.tsx` created
- [ ] Form with workload type dropdown (Chat, RAG, Agentic, etc.)
- [ ] Latency slider (P50/P95/P99)
- [ ] Throughput slider
- [ ] Budget input field
- [ ] "Get Recommendations" button with loading spinner
- [ ] Stack suggestion cards appear after "loading"
- [ ] Cards show model, framework, estimated cost
- [ ] Component works as Astro React island

---

### Feature Slice 29: Integrate Previews into Feature Pages

**Spec Reference**: `website-spec.md` → Page Specifications (Features)

**Summary**: Add interactive preview components to their respective feature pages.

**Acceptance Criteria**:
- [ ] ChatPreview added to `/features/lab` page
- [ ] SourcesPreview added to `/features/sources` page
- [ ] BlueprintPreview added to `/features/sources` page (secondary)
- [ ] ScenarioPreview added to `/features/scenarios` page
- [ ] Previews placed in dedicated "Try It" sections
- [ ] Fallback to screenshots on reduced motion preference
- [ ] Mobile-optimized preview layouts

---

### Feature Slice 30: Homepage Interactive Preview Section

**Spec Reference**: `website-spec.md` → Page Specifications (Homepage section 6)

**Summary**: Add interactive preview section to homepage showcasing chat interface.

**Acceptance Criteria**:
- [ ] New section added between Solution and Privacy sections
- [ ] ChatPreview embedded with introduction copy
- [ ] Section headline: "See Lattice in Action"
- [ ] Brief explanation of what the demo shows
- [ ] CTA to view more features
- [ ] Smooth scroll-triggered animation on section entry

---

## Phase 4: Purchase Flow

### Feature Slice 31: Stripe Buy Button Integration

**Spec Reference**: `website-spec.md` → Stripe Integration

**Summary**: Integrate Stripe Buy Button for $99 one-time purchase.

**Stripe Buy Button Code**:
```html
<script async src="https://js.stripe.com/v3/buy-button.js"></script>

<stripe-buy-button
  buy-button-id="buy_btn_1SYXbwRCxnzBPkIXayfIahbD"
  publishable-key="pk_live_51SJ4zqRCxnzBPkIX08pXFlwWr4FsjHXyZZUhnJuafZvQI05nSTGMxHkl9SWNeuCgzVZ8JHH1grR6XsnOEbAvAKHC00vw9mIIbB"
>
</stripe-buy-button>
```

**Acceptance Criteria**:
- [ ] Stripe Buy Button script loaded in BaseLayout
- [ ] `StripeBuyButton.astro` component wrapper
- [ ] Buy button integrated on:
  - [ ] Homepage pricing section
  - [ ] Dedicated pricing page
  - [ ] Feature page CTAs
- [ ] Configurable via environment variables (buy_button_id, publishable_key)
- [ ] Placeholder mode for development (shows styled placeholder)
- [ ] Success redirect to /thank-you page

---

### Feature Slice 32: Analytics Integration

**Spec Reference**: `website-spec.md` → Success Metrics

**Summary**: Integrate privacy-friendly analytics for tracking key metrics.

**Acceptance Criteria**:
- [ ] Plausible Analytics (or similar) integrated
- [ ] Page view tracking
- [ ] Custom event tracking for:
  - [ ] CTA button clicks
  - [ ] Buy button clicks
  - [ ] Interactive preview engagement
  - [ ] FAQ accordion opens
- [ ] Configurable via environment variable
- [ ] No tracking in development mode
- [ ] GDPR-compliant (no cookies for Plausible)

---

## Phase 5: Polish & Launch

### Feature Slice 33: Performance Optimization

**Spec Reference**: `website-spec.md` → SEO & Performance (Performance Targets, Optimizations)

**Summary**: Optimize site performance to meet Lighthouse targets.

**Acceptance Criteria**:
- [ ] Lighthouse Performance score: 95+
- [ ] First Contentful Paint: < 1.0s
- [ ] Largest Contentful Paint: < 2.0s
- [ ] Cumulative Layout Shift: < 0.1
- [ ] Total Blocking Time: < 200ms
- [ ] Images optimized with Astro `<Image />` component
- [ ] Fonts preloaded with `font-display: swap`
- [ ] JavaScript code-split per island
- [ ] CSS purged of unused styles
- [ ] Build output analyzed for bundle size

---

### Feature Slice 34: Accessibility Audit & Fixes

**Spec Reference**: `website-spec.md` → Accessibility Checklist

**Summary**: Conduct accessibility audit and fix issues to meet WCAG 2.1 AA.

**Acceptance Criteria**:
- [ ] Color contrast ≥ 4.5:1 (text), ≥ 3:1 (large text)
- [ ] Focus indicators on all interactive elements
- [ ] Skip-to-content link added
- [ ] Semantic HTML verified (heading hierarchy)
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Full keyboard navigation
- [ ] `prefers-reduced-motion` support for animations
- [ ] Screen reader testing (VoiceOver)
- [ ] Lighthouse Accessibility score: 100

---

### Feature Slice 35: Cross-Browser Testing

**Spec Reference**: `website-spec.md` → Browser Support

**Summary**: Test and fix issues across all supported browsers.

**Acceptance Criteria**:
- [ ] Chrome (last 2 versions) — tested, no issues
- [ ] Firefox (last 2 versions) — tested, no issues
- [ ] Safari (last 2 versions) — tested, no issues
- [ ] Edge (last 2 versions) — tested, no issues
- [ ] Mobile Safari iOS 15+ — tested, no issues
- [ ] Chrome Mobile Android 10+ — tested, no issues
- [ ] All interactive previews function correctly
- [ ] No layout breaks or visual glitches
- [ ] Forms and buttons work correctly

---

### Feature Slice 36: Content Polish & Review

**Spec Reference**: `website-spec.md` → Content Strategy (Copywriting Tone, Content Inventory)

**Summary**: Final content review and polish before launch.

**Acceptance Criteria**:
- [ ] All placeholder content replaced with final copy
- [ ] Spelling and grammar checked
- [ ] Technical accuracy verified
- [ ] Tone consistency across all pages
- [ ] All links verified (no 404s)
- [ ] Screenshots updated with final product images
- [ ] OG image finalized
- [ ] Favicon finalized

---

### Feature Slice 37: Product Screenshots Integration

**Spec Reference**: `website-spec.md` → Product Assets & Screenshots

**Summary**: Integrate actual product screenshots from Lattice journeys and optimize for web.

**Source**: `/Users/manavsehgal/Developer/lattice/journeys/` (71 screenshots across 16 journeys)

**Acceptance Criteria**:

**Hero Section**:
- [ ] Copy `chat-with-ai/chat-with-ai-01.png` for hero screenshot
- [ ] Optimize to max 1200px width, WebP format
- [ ] Replace placeholder in Hero.astro

**Solution Section (Three-Panel)**:
- [ ] Left panel: `view-source/view-source-01.png` (Sources)
- [ ] Center panel: `chat-with-ai/chat-with-ai-05.png` (Lab with AI response)
- [ ] Right panel: `view-artifact/view-artifact-01.png` (Studio)
- [ ] Create composite or individual panel screenshots

**Feature Pages**:
- [ ] `/features/sources`: `add-sources/add-sources-01.png`, `view-source/view-source-01.png`
- [ ] `/features/lab`: `chat-with-ai/chat-with-ai-03.png`, `chat-with-ai/chat-with-ai-05.png`
- [ ] `/features/studio`: `save-artifact/save-artifact-01.png`, `view-artifact/view-artifact-01.png`
- [ ] `/features/scenarios`: `browse-blueprints/browse-blueprints-02.png`, `apply-blueprint/apply-blueprint-03.png`

**Blueprints Page**:
- [ ] Gallery: `browse-blueprints/browse-blueprints-02.png`
- [ ] Discovery: `discover-blueprint/discover-blueprint-03.png`
- [ ] Detail: `apply-blueprint/apply-blueprint-03.png`

**Journey Pages** (use sequential screenshots from each journey folder):
- [ ] `create-workspace/` screenshots for journey steps
- [ ] `browse-blueprints/` screenshots for journey steps
- [ ] `chat-with-ai/` screenshots for journey steps
- [ ] Additional journeys as MDX content is created

**Optimization**:
- [ ] All images converted to WebP with fallback
- [ ] Max width 1200px for full-width, 800px for panels
- [ ] Lazy loading via Astro `<Image />` component
- [ ] Alt text describing what's shown in each screenshot

---

### Feature Slice 37b: Logo Assets Integration

**Spec Reference**: `website-spec.md` → Logo Usage Recommendations

**Summary**: Replace placeholder logos with actual Lattice brand assets.

**Source**: `/Users/manavsehgal/Developer/lattice/assets/`

**Acceptance Criteria**:
- [ ] Header logo: `lattice-logo-side-white-bg.png` (optimize for web)
- [ ] Footer logo: `lattice-logo-top-white-bg.png` (stacked variant)
- [ ] Favicon: `lattice-logo-top-white-bg-icon.png` (generate 16x16, 32x32, 180x180)
- [ ] OG image: `lattice-logo-top-white-bg-icon-512.png`
- [ ] PWA icons: Generate from 512px icon
- [ ] Dark mode header variant from `lattice-logo-side-bw.png`

---

### Feature Slice 37c: Design System Enhancements

**Spec Reference**: `website-spec.md` → Design Alignment Notes

**Summary**: Add product-specific UI patterns to website design system.

**Acceptance Criteria**:
- [ ] Add green "Vendor" badge variant to Badge component
- [ ] Add purple accent color for AI-related CTAs (`--color-ai-accent: #a855f7`)
- [ ] Add yellow star icon styling for "official" content
- [ ] Update card hover states to match product (`hover:border-gray-300`)
- [ ] Add metadata text style (small gray for counts)
- [ ] Add filter tab/pill component matching Blueprint Gallery style

---

### Feature Slice 38: Launch Readiness Checklist

**Spec Reference**: `website-spec.md` → All sections

**Summary**: Final pre-launch verification and soft launch.

**Acceptance Criteria**:
- [ ] All previous feature slices completed
- [ ] Site deployed to production URL
- [ ] SSL certificate valid
- [ ] 404 page created
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Google Search Console submitted
- [ ] Stripe Buy Button live (test purchase)
- [ ] Analytics receiving data
- [ ] Soft launch to beta testers
- [ ] Feedback collected and addressed
- [ ] Ready for public launch

---

## Backlog Summary

| Phase | Slices | Status | Description |
|-------|--------|--------|-------------|
| Phase 1 | 1-13 | **COMPLETE** | Foundation — Project setup, design system, logo/branding, homepage (CRO-optimized), deployment |
| Phase 2 | 14-23 | In Progress | Content — All pages, journeys, features, SEO |
| Phase 3 | 24-30 | Planned | Interactive — Mock preview components |
| Phase 4 | 31-32 | Planned | Purchase — Stripe integration, analytics |
| Phase 5 | 33-38c | Planned | Polish — Performance, accessibility, testing, screenshots, launch |

**Total Feature Slices**: 40 (19 complete, 21 remaining)

**New slices added (37b, 37c)**: Product screenshot integration expanded to include logo assets and design system enhancements based on Lattice product review.

**Logo Assets** (source: `/Users/manavsehgal/Developer/lattice/assets/`):
- `lattice-logo-side-white-bg.png` — Header (light mode, horizontal)
- `lattice-logo-side-bw.png` — Header (dark/light dual variant)
- `lattice-logo-top-white-bg.png` — Footer (stacked)
- `lattice-logo-top-white-bg-icon.png` — Favicon source
- `lattice-logo-top-white-bg-icon-512.png` — OG image / PWA icon
- `lattice-logo.png` — Dark background marketing variant

**Product Screenshots** (source: `/Users/manavsehgal/Developer/lattice/journeys/`):
- 71 screenshots across 16 user journeys
- Key screenshots identified for Hero, Solution, Features, Blueprints pages
- See `website-spec.md` → Product Assets & Screenshots for full mapping

**CRO Enhancements Applied** (Phase 1):
- Feature Slice 7: Hero above-the-fold optimization (5-second rule)
- Feature Slice 8: Logo & branding integration
- Feature Slice 9: Verifiable social proof (photos, names, sources)
- Feature Slice 10: FUDs reduction under CTAs
- Feature Slice 11: Privacy as guarantee, emotional storytelling
- Feature Slice 12: Mobile CRO considerations
- Feature Slice 13: GitHub Actions deployment

---

*Run `/code/develop` to implement the next feature slice.*
