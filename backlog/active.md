# Lattice Lab Website — Active Backlog

**Current Version**: 0.33.0
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

### Feature Slice 20: Blueprints Gallery Page - COMPLETE

See `releases/release-0.20.0.md` for details.

---

### Feature Slice 21: Documentation Page - COMPLETE

See `releases/release-0.21.0.md` for details.

---

### Feature Slice 22: About Page - COMPLETE

See `releases/release-0.22.0.md` for details.

---

### Feature Slice 23: SEO & Meta Tags - COMPLETE

See `releases/release-0.23.0.md` for details.

---

## Phase 2: Content & Journeys - COMPLETE

All 10 feature slices (14-23) in Phase 2 are now complete.

---

## Phase 3: Interactive Previews

### Feature Slice 24: Preview Components — Shared Utilities - COMPLETE

See `releases/release-0.24.0.md` for details.

---

### Feature Slice 25: Chat Preview Component - COMPLETE

See `releases/release-0.25.0.md` for details.

---

### Feature Slice 26: Sources Preview Component - COMPLETE

See `releases/release-0.26.0.md` for details.

---

### Feature Slice 27: Blueprint Preview Component - COMPLETE

See `releases/release-0.27.0.md` for details.

---

### Feature Slice 28: Scenario Preview Component - COMPLETE

See `releases/release-0.28.0.md` for details.

---

### Feature Slice 29: Integrate Previews into Feature Pages - COMPLETE

See `releases/release-0.29.0.md` for details.

---

### Feature Slice 30: Homepage Interactive Preview Section - COMPLETE

See `releases/release-0.30.0.md` for details.

---

## Phase 3: Interactive Previews - COMPLETE

All 7 feature slices (24-30) in Phase 3 are now complete.

---

## Phase 4: Purchase Flow

### Feature Slice 31: Stripe Buy Button Integration - COMPLETE

See `releases/release-0.31.0.md` for details.

---

### Feature Slice 32: Analytics Integration - COMPLETE

See `releases/release-0.32.0.md` for details.

---

## Phase 4: Purchase Flow - COMPLETE

All 2 feature slices (31-32) in Phase 4 are now complete.

---

## Phase 5: Polish & Launch

### Feature Slice 33: Performance Optimization - COMPLETE

See `releases/release-0.33.0.md` for details.

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
| Phase 2 | 14-23 | **COMPLETE** | Content — All pages, journeys, features, SEO |
| Phase 3 | 24-30 | **COMPLETE** | Interactive — Mock preview components (7/7 complete) |
| Phase 4 | 31-32 | **COMPLETE** | Purchase — Stripe integration, analytics |
| Phase 5 | 33-38c | **IN PROGRESS** | Polish — Performance (1/8 complete), accessibility, testing, screenshots, launch |

**Total Feature Slices**: 40 (33 complete, 7 remaining)

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
