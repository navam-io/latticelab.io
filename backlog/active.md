# Lattice Lab Website — Active Backlog

**Current Version**: 0.6.0
**Spec Reference**: [website-spec.md](./website-spec.md)

---

## Phase 1: Foundation (MVP)

### Feature Slice 7: Homepage — Hero CRO Enhancement (Above-the-Fold Optimization)

**Spec Reference**: `website-spec.md` → CRO Principles (Above-the-Fold Formula), Page Specifications (Homepage Hero)

**Summary**: Optimize Hero section for the 5-second rule with CRO best practices. This is the highest-priority optimization as 60% of visitors never scroll past the fold.

**CRO Checklist**:
- [ ] Benefit-driven headline (6-8 words max)
- [ ] Sub-headline with USP
- [ ] Social proof above the fold (2 forms minimum)
- [ ] Clear CTA with FUDs reduction underneath
- [ ] Visual/screenshot that complements messaging

**Acceptance Criteria**:
- [ ] Update `Hero.astro` headline to benefit-driven format
  - [ ] Primary: "Stop Researching AI. Start Deciding." (or A/B test variant)
  - [ ] Headline is bold, 6-8 words max
- [ ] Add social proof elements to Hero section
  - [ ] Logo bar component with 3-4 trust signals
  - [ ] Star rating or review count snippet
- [ ] Add FUDs reduction under CTA button
  - [ ] Text: "30-day money-back guarantee" or similar
  - [ ] Small text style, muted but visible
- [ ] Update subhead to clearly convey USP
- [ ] Ensure visual hierarchy: Headline → Subhead → Social Proof → CTA → FUDs
- [ ] All elements visible without scrolling on desktop (1280px) and mobile (375px)

---

### Feature Slice 8: Homepage — Persona Cards & Social Proof (Verifiable)

**Spec Reference**: `website-spec.md` → CRO Principles (Social Proof Best Practices), Page Specifications (Homepage sections 4-5), Target Audience (ICP)

**Summary**: Create persona value proposition cards and verifiable social proof section.

**CRO Checklist**:
- [ ] Benefit-driven headlines for each persona card
- [ ] Verifiable social proof: Photo + Name + Role + Company + Source
- [ ] Never hide reviews in carousels — force consumption

**Acceptance Criteria**:
- [ ] `PersonaCards.astro` — Three cards for Research Engineer, Platform Lead, CTO
  - [ ] Each card: icon, persona title, benefit-driven headline (not generic)
  - [ ] Headlines convey outcome: "Cut weeks to hours", "Board-ready in minutes"
  - [ ] Cards use Card component with hover effect
- [ ] `SocialProof.astro` — Testimonials section (verifiable structure)
  - [ ] 3 testimonial cards (NOT in carousel — displayed inline)
  - [ ] Each card: photo placeholder, full name, role, company, quote
  - [ ] Source indicator (e.g., "via LinkedIn", "via Product Hunt")
  - [ ] Clearly marked as placeholder for future real testimonials
  - [ ] Structure ready for real testimonials with verifiable details
- [ ] `LogoBar.astro` — Featured on / trust logos
  - [ ] 3-4 logo placeholders with publication quotes
  - [ ] Not just logos — include snippet quote from each publication
- [ ] Responsive grid layout (3 columns desktop, 1 column mobile)
- [ ] No carousel hiding on mobile — stack vertically

---

### Feature Slice 9: Homepage — Pricing & FAQ Sections

**Spec Reference**: `website-spec.md` → CRO Principles (FUDs Reduction, Guarantee), Page Specifications (Homepage sections 8-9), Stripe Integration

**Summary**: Create pricing section with $99 CTA, FUDs reduction, and FAQ to address objections.

**CRO Checklist**:
- [ ] FUDs reduction under CTA button
- [ ] Guarantee prominently displayed
- [ ] FAQ addresses common objections

**Acceptance Criteria**:
- [ ] `PricingSection.astro` — Prominent $99 pricing display
  - [ ] Price: "$99" with "one-time" label (visually prominent)
  - [ ] What's included list (benefit-driven, not feature-driven)
  - [ ] Stripe Buy Button placeholder (comment indicating where button goes)
  - [ ] **FUDs Reduction**: Under CTA button
    - [ ] "30-day money-back guarantee"
    - [ ] "Deploy in under 5 minutes"
    - [ ] "No data leaves your machine"
  - [ ] Trust signals: "Self-hosted", "Private repo access", "Deploy anywhere"
- [ ] `FAQ.astro` — Accordion-style FAQ (objection handling)
  - [ ] 5-6 questions addressing common objections/fears
  - [ ] Questions reframed as benefits where possible
  - [ ] Expandable/collapsible answers
  - [ ] Accessible keyboard navigation
  - [ ] **Not hidden in accordions on mobile** — consider inline for key questions
- [ ] Sections added to homepage

---

### Feature Slice 10: Homepage — Privacy Section & Final CTA

**Spec Reference**: `website-spec.md` → CRO Principles (Guarantee, Storytelling), Page Specifications (Homepage section 7), Key Messages

**Summary**: Create privacy/security section (as guarantee) and final CTA with emotional storytelling.

**CRO Checklist**:
- [ ] Privacy as guarantee/trust element
- [ ] Final CTA with benefit-driven headline
- [ ] Storytelling: emotional connection to data security

**Acceptance Criteria**:
- [ ] `PrivacySection.astro` — Privacy-first messaging (Guarantee positioning)
  - [ ] "Deploy anywhere" messaging as trust guarantee
  - [ ] Icons: laptop, cloud, air-gapped
  - [ ] Key points: data never leaves, self-hosted, no vendor lock-in
  - [ ] Emotional angle: "Your competitive intelligence stays yours"
- [ ] `FinalCTA.astro` — Bottom-of-page call to action
  - [ ] Benefit-driven headline (not "Get Started")
  - [ ] Primary CTA button with FUDs reduction underneath
  - [ ] Brief value reminder (single sentence)
- [ ] Sections added to homepage, completing all 10 sections

---

### Feature Slice 11: Responsive Design & Mobile Optimization

**Spec Reference**: `website-spec.md` → CRO Principles (Jacob's Law), Design System, Browser Support, Accessibility Checklist

**Summary**: Ensure all homepage sections are fully responsive and mobile-optimized with CRO considerations.

**CRO Checklist**:
- [ ] Above-the-fold complete on mobile (no key elements cut off)
- [ ] Social proof visible without scrolling carousels
- [ ] CTAs prominent and finger-friendly

**Acceptance Criteria**:
- [ ] All sections tested at breakpoints: 320px, 640px, 768px, 1024px, 1280px
- [ ] **Mobile above-the-fold**: All CRO elements visible (headline, subhead, CTA, FUDs)
- [ ] Mobile menu functions correctly
- [ ] Touch targets minimum 44x44px
- [ ] Images responsive with proper aspect ratios
- [ ] Typography scales appropriately
- [ ] No horizontal scroll on any viewport
- [ ] **Social proof never hidden in carousels** — stack vertically on mobile
- [ ] Test on Chrome, Firefox, Safari desktop
- [ ] Test on iOS Safari, Chrome Mobile

---

### Feature Slice 12: GitHub Actions Deployment

**Spec Reference**: `website-spec.md` → Build & Deploy

**Summary**: Configure GitHub Actions workflow for automatic deployment to GitHub Pages.

**Acceptance Criteria**:
- [ ] `.github/workflows/deploy.yml` created per spec
- [ ] Workflow triggers on push to main and manual dispatch
- [ ] Build step: `npm ci && npm run build`
- [ ] Deploy to GitHub Pages using `actions/deploy-pages`
- [ ] Astro configured for static output (`output: 'static'`)
- [ ] Base URL configured for GitHub Pages
- [ ] Successful deployment to live URL

---

## Phase 2: Content & Journeys

### Feature Slice 13: Pricing Page

**Spec Reference**: `website-spec.md` → Page Specifications (Pricing)

**Summary**: Create dedicated pricing page with full details and Stripe integration placeholder.

**Acceptance Criteria**:
- [ ] `/src/pages/pricing.astro` created
- [ ] Hero with pricing headline
- [ ] Detailed "What's included" section
- [ ] Stripe Buy Button placeholder with integration notes
- [ ] Purchase flow explanation (email → GitHub invite)
- [ ] FAQ specific to purchasing
- [ ] Trust signals and guarantees

---

### Feature Slice 14: Thank You Page

**Spec Reference**: `website-spec.md` → Stripe Integration (Post-Purchase Page)

**Summary**: Create post-purchase thank you page with next steps.

**Acceptance Criteria**:
- [ ] `/src/pages/thank-you.astro` created
- [ ] Confirmation message
- [ ] Numbered next steps (check email, accept invite, clone repo)
- [ ] Expected timeline: "Within 24 hours"
- [ ] Support contact information
- [ ] Link to documentation

---

### Feature Slice 15: Features Index Page

**Spec Reference**: `website-spec.md` → Site Map (/features), Page Specifications (Features)

**Summary**: Create features index page with cards linking to individual feature pages.

**Acceptance Criteria**:
- [ ] `/src/pages/features/index.astro` created
- [ ] Hero section with features overview
- [ ] 4 feature cards: Sources, Lab, Studio, Scenarios
- [ ] Each card: icon, title, description, "Learn more" link
- [ ] Cards link to respective feature detail pages
- [ ] Responsive grid layout

---

### Feature Slice 16: Feature Detail Pages — Content Structure

**Spec Reference**: `website-spec.md` → Page Specifications (Features), Project Structure (content/features/)

**Summary**: Create MDX content structure and dynamic routing for feature pages.

**Acceptance Criteria**:
- [ ] Content collection defined for features in `src/content/config.ts`
- [ ] `src/content/features/sources.mdx` — Sources feature content
- [ ] `src/content/features/lab.mdx` — Lab (AI agent) feature content
- [ ] `src/content/features/studio.mdx` — Studio (artifacts) feature content
- [ ] `src/content/features/scenarios.mdx` — Scenarios feature content
- [ ] `src/pages/features/[slug].astro` — Dynamic routing for feature pages
- [ ] `FeatureLayout.astro` — Layout for feature detail pages
- [ ] Each page has: hero, description, use cases by persona, screenshot placeholder

---

### Feature Slice 17: Journeys Index Page

**Spec Reference**: `website-spec.md` → Site Map (/journeys), Page Specifications (Journeys)

**Summary**: Create journeys gallery page showing all available product journeys.

**Acceptance Criteria**:
- [ ] `/src/pages/journeys/index.astro` created
- [ ] Hero section explaining journeys concept
- [ ] Gallery grid of journey cards
- [ ] Each card: thumbnail, title, JTBD statement preview
- [ ] Cards link to individual journey pages
- [ ] Responsive masonry or grid layout

---

### Feature Slice 18: Journey Detail Pages — Content Structure

**Spec Reference**: `website-spec.md` → Page Specifications (Journeys), Content Strategy

**Summary**: Create MDX content structure and dynamic routing for journey pages.

**Acceptance Criteria**:
- [ ] Content collection defined for journeys in `src/content/config.ts`
- [ ] 6 journey MDX files created:
  - [ ] `create-workspace.mdx`
  - [ ] `switch-workspace.mdx`
  - [ ] `configure-settings.mdx`
  - [ ] `manage-api-keys.mdx`
  - [ ] `browse-blueprints.mdx`
  - [ ] `apply-blueprint.mdx`
- [ ] `src/pages/journeys/[slug].astro` — Dynamic routing
- [ ] `JourneyLayout.astro` — Layout with step navigation
- [ ] Each journey has: JTBD statement, introduction, steps with screenshot placeholders, conclusion

---

### Feature Slice 19: Blueprints Gallery Page

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

### Feature Slice 20: Documentation Page

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

### Feature Slice 21: About Page

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

### Feature Slice 22: SEO & Meta Tags

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

### Feature Slice 23: Preview Components — Shared Utilities

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

### Feature Slice 24: Chat Preview Component

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

### Feature Slice 25: Sources Preview Component

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

### Feature Slice 26: Blueprint Preview Component

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

### Feature Slice 27: Scenario Preview Component

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

### Feature Slice 28: Integrate Previews into Feature Pages

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

### Feature Slice 29: Homepage Interactive Preview Section

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

### Feature Slice 30: Stripe Buy Button Integration

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

### Feature Slice 31: Analytics Integration

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

### Feature Slice 32: Performance Optimization

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

### Feature Slice 33: Accessibility Audit & Fixes

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

### Feature Slice 34: Cross-Browser Testing

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

### Feature Slice 35: Content Polish & Review

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

### Feature Slice 36: Product Screenshots Integration

**Spec Reference**: `website-spec.md` → Screenshot Integration, Journeys

**Summary**: Integrate actual product screenshots from Lattice journeys.

**Acceptance Criteria**:
- [ ] Screenshots copied from Lattice `/journeys/` folder
- [ ] Screenshots optimized and resized for web
- [ ] Hero section product screenshot added
- [ ] Feature page screenshots added
- [ ] Journey page screenshots integrated with steps
- [ ] Solution section three-panel screenshot added
- [ ] All screenshots have alt text

---

### Feature Slice 37: Launch Readiness Checklist

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

| Phase | Slices | Description |
|-------|--------|-------------|
| Phase 1 | 1-12 | Foundation — Project setup, design system, homepage (CRO-optimized), deployment |
| Phase 2 | 13-22 | Content — All pages, journeys, features, SEO |
| Phase 3 | 23-29 | Interactive — Mock preview components |
| Phase 4 | 30-31 | Purchase — Stripe integration, analytics |
| Phase 5 | 32-37 | Polish — Performance, accessibility, testing, launch |

**Total Feature Slices**: 37

**CRO Enhancements Applied**:
- Feature Slice 7: Hero above-the-fold optimization (5-second rule)
- Feature Slice 8: Verifiable social proof (photos, names, sources)
- Feature Slice 9: FUDs reduction under CTAs
- Feature Slice 10: Privacy as guarantee, emotional storytelling
- Feature Slice 11: Mobile CRO considerations

---

*Run `/code/develop` to implement the next feature slice.*
