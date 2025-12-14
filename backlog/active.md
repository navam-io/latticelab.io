# Active Backlog

Generated from: `backlog/update-12-14-2025.md`
Last updated: December 14, 2025

## Status Legend
- [ ] Planned
- [~] In Progress
- [x] Completed

## Completed Features

Features that have been completed are moved to their respective release notes:
- **Feature 1.1: Design Tokens and Typography Scale** - See [release-0.1.0.md](../releases/release-0.1.0.md)
- **Feature 1.2: Animation Utilities** - See [release-0.2.0.md](../releases/release-0.2.0.md)
- **Feature 1.3: GradientText Component** - See [release-0.3.0.md](../releases/release-0.3.0.md)
- **Feature 1.4: DualCTA Component** - See [release-0.4.0.md](../releases/release-0.4.0.md)
- **Feature 1.5: DocsLink Component** - See [release-0.5.0.md](../releases/release-0.5.0.md)
- **Feature 2.1: NavDropdown Component** - See [release-0.6.0.md](../releases/release-0.6.0.md)
- **Feature 2.2: MegaMenu Component** - See [release-0.7.0.md](../releases/release-0.7.0.md)
- **Feature 2.3: MobileNav Component** - See [release-0.8.0.md](../releases/release-0.8.0.md)
- **Feature 2.4: Header Integration** - See [release-0.9.0.md](../releases/release-0.9.0.md)
- **Feature 3.1: Hero Section Redesign** - See [release-0.10.0.md](../releases/release-0.10.0.md)
- **Feature 3.2: FeatureCard Component** - See [release-0.11.0.md](../releases/release-0.11.0.md)
- **Feature 3.3: FeatureGrid Section** - See [release-0.12.0.md](../releases/release-0.12.0.md)
- **Feature 3.4: ToolsCarousel Section** - See [release-0.13.0.md](../releases/release-0.13.0.md)
- **Feature 3.5: PricingCard Redesign** - See [release-0.14.0.md](../releases/release-0.14.0.md)
- **Feature 3.6: CTABanner Section** - See [release-0.15.0.md](../releases/release-0.15.0.md)
- **Feature 3.7: Homepage Assembly** - See [release-0.16.0.md](../releases/release-0.16.0.md)
- **Feature 4.1: FooterColumn Component** - See [release-0.17.0.md](../releases/release-0.17.0.md)
- **Feature 4.2: Footer Redesign** - See [release-0.18.0.md](../releases/release-0.18.0.md)
- **Feature 5.1: StickyNav Component** - See [release-0.19.0.md](../releases/release-0.19.0.md)
- **Feature 5.2: FeatureHero Component** - See [release-0.20.0.md](../releases/release-0.20.0.md)
- **Feature 5.3: CapabilitySection Component** - See [release-0.21.0.md](../releases/release-0.21.0.md)

---

## Phase 5: Feature Pages

### Feature 5.4: TechSpecs Component
**Spec Reference:** Part 4, Section 4.2 (Section 4: Technical Details)
**Status:** [ ] Planned
**Complexity:** S

**Description:**
Build specifications table component for technical details.

**Files:**
- [ ] `src/components/features/TechSpecs.vue` - Specifications table

**Dependencies:** None

**Acceptance Criteria:**
- [ ] Clean table layout
- [ ] Supported formats/vendors list
- [ ] Configuration options display

---

### Feature 5.5: RelatedContent Component
**Spec Reference:** Part 4, Section 4.2 (Section 5: Related Content)
**Status:** [ ] Planned
**Complexity:** S

**Description:**
Build component for displaying related journey guides and blog posts.

**Files:**
- [ ] `src/components/features/RelatedContent.vue` - Journey/blog links

**Dependencies:** Feature 1.5 (DocsLink)

**Acceptance Criteria:**
- [ ] Journey guides list for feature
- [ ] Related blog posts
- [ ] Documentation links

---

### Feature 5.6: Feature Pages Update (Sources)
**Spec Reference:** Part 4, Section 4.3, 4.4
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update Sources feature page with new components and content.

**Files:**
- [ ] `src/pages/features/sources.astro` - Sources feature page

**Dependencies:** Features 5.1-5.5

**Acceptance Criteria:**
- [ ] Hero: "Your Knowledge. Unified."
- [ ] Capabilities: Multi-source ingestion, Hybrid search, Citation tracking
- [ ] Related journey links: add-sources, browse-sources
- [ ] Sticky navigation working
- [ ] Google Docs support mentioned (v0.6.2+)

---

### Feature 5.7: Feature Pages Update (Lab)
**Spec Reference:** Part 4, Section 4.3, 4.4
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update Lab feature page with new components and content.

**Files:**
- [ ] `src/pages/features/lab.astro` - Lab feature page

**Dependencies:** Features 5.1-5.5

**Acceptance Criteria:**
- [ ] Hero: "Research Agent. Grounded."
- [ ] Capabilities: LangGraph reasoning, Natural language, Transparent traces
- [ ] Related journey links: chat-with-ai, ask-about-scenarios
- [ ] LangGraph integration highlighted

---

### Feature 5.8: Feature Pages Update (Studio)
**Spec Reference:** Part 4, Section 4.3, 4.4
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update Studio feature page with new components and content.

**Files:**
- [ ] `src/pages/features/studio.astro` - Studio feature page

**Dependencies:** Features 5.1-5.5

**Acceptance Criteria:**
- [ ] Hero: "Decisions. Documented."
- [ ] Capabilities: Artifact types, Export formats, Version history
- [ ] Related journey links: save-artifacts, artifact-gallery

---

### Feature 5.9: Feature Pages Update (Blueprints)
**Spec Reference:** Part 4, Section 4.3, 4.4
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update Blueprints feature page with new components and content.

**Files:**
- [ ] `src/pages/features/blueprints.astro` - Blueprints feature page

**Dependencies:** Features 5.1-5.5

**Acceptance Criteria:**
- [ ] Hero: "36 Blueprints. 10+ Vendors."
- [ ] Capabilities: Vendor coverage, One-click setup, Curated content
- [ ] Related journey links: browse-blueprints, apply-blueprints

---

### Feature 5.10: Feature Pages Update (Scenarios)
**Spec Reference:** Part 4, Section 4.3, 4.4
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update Scenarios feature page with new components and content.

**Files:**
- [ ] `src/pages/features/scenarios.astro` - Scenarios feature page

**Dependencies:** Features 5.1-5.5

**Acceptance Criteria:**
- [ ] Hero: "Define Your Workload."
- [ ] Capabilities: Workload types, SLO config, Compliance
- [ ] Related journey links: create-scenario, edit-scenario

---

### Feature 5.11: Feature Pages Update (Stacks)
**Spec Reference:** Part 4, Section 4.3, 4.4
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update Stacks feature page with new components and content.

**Files:**
- [ ] `src/pages/features/stacks.astro` - Stacks feature page

**Dependencies:** Features 5.1-5.5

**Acceptance Criteria:**
- [ ] Hero: "Configure Infrastructure."
- [ ] Capabilities: Model selection, Hardware config, Framework choices
- [ ] Related journey links: create-stack, configure-hardware

---

### Feature 5.12: Feature Pages Update (Settings)
**Spec Reference:** Part 4, Section 4.3, 4.4
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update Settings feature page with new components and content.

**Files:**
- [ ] `src/pages/features/settings.astro` - Settings feature page

**Dependencies:** Features 5.1-5.5

**Acceptance Criteria:**
- [ ] Hero: "Your Control Center."
- [ ] Capabilities: API keys, Model defaults, Privacy controls
- [ ] Related journey links: manage-api-keys

---

### Feature 5.13: Features Index Page Update
**Spec Reference:** Part 4, Section 4.4
**Status:** [ ] Planned
**Complexity:** S

**Description:**
Update features index page with new card styling.

**Files:**
- [ ] `src/pages/features/index.astro` - Features index page

**Dependencies:** Feature 3.2 (FeatureCard)

**Acceptance Criteria:**
- [ ] All 7 features displayed with consistent card styling
- [ ] Quick navigation to each feature page

---

## Phase 6: Tools Section

### Feature 6.1: Tools Content Collection
**Spec Reference:** Part 5, Section 5.2
**Status:** [ ] Planned
**Complexity:** S

**Description:**
Set up content collection for tools with schema.

**Files:**
- [ ] `src/content/config.ts` - Add tools schema
- [ ] `astro.config.mjs` - Add tools collection configuration

**Dependencies:** None

**Acceptance Criteria:**
- [ ] Tools schema defined (name, description, icon, features, journeyLink)
- [ ] Collection properly configured

---

### Feature 6.2: ToolCard Component
**Spec Reference:** Part 5, Section 5.2
**Status:** [ ] Planned
**Complexity:** S

**Description:**
Build tool showcase card component.

**Files:**
- [ ] `src/components/tools/ToolCard.vue` - Tool showcase card

**Dependencies:** Feature 1.4 (DualCTA)

**Acceptance Criteria:**
- [ ] Icon + Name + Description display
- [ ] Feature highlights
- [ ] "Explore" and "Try Demo" CTAs

---

### Feature 6.3: ToolDemo Component
**Spec Reference:** Part 5, Section 5.2
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Build interactive demo wrapper component for tool pages.

**Files:**
- [ ] `src/components/tools/ToolDemo.vue` - Interactive demo wrapper

**Dependencies:** None

**Acceptance Criteria:**
- [ ] Placeholder for tool-specific demos
- [ ] Loading state handling
- [ ] Responsive container

---

### Feature 6.4: Tools Hub Page
**Spec Reference:** Part 5, Section 5.1
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Create tools hub page listing all 7 tools.

**Files:**
- [ ] `src/pages/tools/index.astro` - Tools hub page

**Dependencies:** Feature 6.2 (ToolCard)

**Acceptance Criteria:**
- [ ] All 7 tools displayed with cards
- [ ] Clear categorization and navigation
- [ ] Hero section explaining tools

---

### Feature 6.5: Tool Content Files
**Spec Reference:** Part 5, Section 5.1
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Create content files for all 7 tools.

**Files:**
- [ ] `src/content/tools/accelerator-registry.md`
- [ ] `src/content/tools/memory-calculator.md`
- [ ] `src/content/tools/tco-calculator.md`
- [ ] `src/content/tools/parallelism-advisor.md`
- [ ] `src/content/tools/quantization-advisor.md`
- [ ] `src/content/tools/spot-advisor.md`
- [ ] `src/content/tools/evaluation.md`

**Dependencies:** Feature 6.1 (Tools Collection)

**Acceptance Criteria:**
- [ ] Each tool has complete content file
- [ ] Descriptions match spec section 5.1
- [ ] Proper frontmatter for schema

---

### Feature 6.6: Dynamic Tool Pages
**Spec Reference:** Part 5, Section 5.2
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Create dynamic tool page template.

**Files:**
- [ ] `src/pages/tools/[tool].astro` - Dynamic tool pages

**Dependencies:** Features 6.2, 6.3, 6.5

**Acceptance Criteria:**
- [ ] Each tool accessible at /tools/[slug]
- [ ] Consistent layout across all tool pages
- [ ] Interactive demo section where applicable

---

## Phase 7: Docs Integration

### Feature 7.1: Cross-Linking Updates
**Spec Reference:** Part 6, Section 6.1, 6.2
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Add cross-links between marketing pages and documentation.

**Files:**
- [ ] All feature pages - Add DocsLink callouts
- [ ] Homepage - Add "Get Started" link to quickstart

**Dependencies:** Feature 1.5 (DocsLink)

**Acceptance Criteria:**
- [ ] Feature pages link to corresponding docs
- [ ] Tools pages link to guide docs
- [ ] Journey posts link to getting-started docs

---

## Phase 8: Content & Polish

### Feature 8.1: Screenshot Updates
**Spec Reference:** Part 7, Section 7.3
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Update all product screenshots with latest UI.

**Files:**
- [ ] `public/images/` - New screenshots
- [ ] All pages using screenshots - Update references

**Dependencies:** Phases 1-6 complete

**Acceptance Criteria:**
- [ ] Sources panel screenshot
- [ ] Lab panel screenshot
- [ ] Studio screenshot
- [ ] Blueprint gallery image
- [ ] All tool screenshots

---

### Feature 8.2: Stats Updates
**Spec Reference:** Part 7, Section 7.1
**Status:** [ ] Planned
**Complexity:** S

**Description:**
Update stats and counts across the site.

**Files:**
- [ ] Homepage stats section
- [ ] Feature pages with counts

**Dependencies:** None

**Acceptance Criteria:**
- [ ] "36 Blueprints | 10+ Vendors | 2,134 Tests" format
- [ ] Accurate current numbers

---

### Feature 8.3: Final QA and Testing
**Spec Reference:** Part 10
**Status:** [ ] Planned
**Complexity:** M

**Description:**
Final quality assurance and cross-browser testing.

**Files:**
- [ ] All modified files

**Dependencies:** All previous phases

**Acceptance Criteria:**
- [ ] Page load time < 2s
- [ ] Lighthouse score > 90
- [ ] Mobile usability score 100%
- [ ] All links working
- [ ] No console errors
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

---

## Summary

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | 2 | 0 |
| Phase 5: Feature Pages | 13 | 3 | 10 |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **21** | **20** |
