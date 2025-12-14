# Release 0.27.0 - Blueprints Feature Page Update

**Release Date:** December 14, 2025

## Overview

Updated the Blueprints feature page with all Phase 5 components: StickyNav, FeatureHero, CapabilitySection, TechSpecs, and RelatedContent. Showcases the 36 curated knowledge bundles from 10+ AI vendors.

## Completed Feature

### Feature 5.9: Blueprints Feature Page Update

**Spec Reference:** Part 4, Section 4.3, 4.4
**Complexity:** M (Medium)

**Description:**
Update Blueprints feature page with new components and content, highlighting vendor coverage, one-click setup, curated contents, and cross-vendor comparison capabilities.

**Files Modified:**
- `src/pages/features/blueprints.astro` - Blueprints feature page with new components

**Tests Created:**
- `tests/blueprints-page.spec.ts` - 61 comprehensive tests

## Page Structure

### 1. Sticky Navigation
- Feature name: "Blueprints"
- Links: Overview, Capabilities, Tech Specs, Resources
- Buy button: "Get Lattice"

### 2. Hero Section
- Headline: "36 Blueprints. 10+ Vendors."
- Tagline: "Browse. Apply. Research."
- Description highlights pre-built knowledge bundles for one-click workspace population
- Product screenshot from browse-blueprints journey
- Color scheme: Violet
- CTAs: "Get Lattice" and "View docs"

### 3. Capabilities (4 sections)

**Vendor Coverage** (violet, left image)
- Anthropic: Claude Production RAG, Agentic Systems
- AWS Bedrock: Enterprise HIPAA/SOC2, Knowledge Bases
- Google Vertex: Gemini Production, Flash, RAG
- NVIDIA NIM: Self-Hosted, Embeddings, Ensemble
- Meta Llama: 3.3 70B, 3.1 405B Enterprise
- Mistral AI: Large Production, 7B Edge
- Journey link: /blog/journey-browse-blueprints

**One-Click Setup** (blue, right image, gray bg)
- Curated sources from official vendor docs
- Pre-configured scenarios with SLOs
- Recommended stacks with hardware configs
- Skip weeks of manual research
- Journey link: /blog/journey-apply-blueprint

**Curated Contents** (teal, left image)
- 3-6 Sources: Official docs, pricing, model cards
- 1-2 Scenarios: Workload definitions with SLOs
- 1-2 Stacks: Model + framework + hardware combos
- Curated by experts for production use
- Journey link: /blog/journey-discover-blueprint

**Cross-Vendor Comparison** (amber, right image, gray bg)
- Multi-provider: Claude vs GPT-4 vs Gemini
- Cost vs Quality: Haiku vs Flash vs Nemotron
- LLM + Embedding: RAG pipeline combinations
- Side-by-side pricing and performance
- Journey link: /blog/journey-filter-blueprints

### 4. Tech Specs Section
Three specification cards:
- **Vendors**: Anthropic (4), AWS Bedrock (3), Google Vertex (3), NVIDIA NIM (3), Meta/Mistral (4)
- **Blueprint Contents**: Sources (3-6), Scenarios (1-2), Stacks (1-2), Comparison bundles
- **Features**: One-click apply, Filter/Search, Refresh, Export
- Docs link: /docs/features/blueprints

### 5. Related Resources Section
Journey guides:
- Browsing Blueprints
- Applying Blueprints
- Filtering Blueprints

Documentation links:
- Blueprints API Reference
- Blueprint Contents Guide

CTA: "View Blueprints documentation"

### 6. CTA Section
- Gradient background (violet to blue)
- Headline: "Skip Weeks of Manual Research"
- Button: "Get Lattice for $99"

## Acceptance Criteria - All Met

- [x] Hero: "36 Blueprints. 10+ Vendors."
- [x] Capabilities: Vendor coverage, One-click setup, Curated content
- [x] Related journey links: browse-blueprints, apply-blueprints

## Test Coverage

61 new tests covering:
- Page Structure (2 tests)
- Sticky Navigation (7 tests)
- Hero Section (7 tests)
- Vendor Coverage (6 tests)
- One-Click Setup (6 tests)
- Curated Contents (5 tests)
- Cross-Vendor Comparison (4 tests)
- Tech Specs Section (6 tests)
- Related Resources Section (8 tests)
- CTA Section (2 tests)
- Responsive Behavior (4 tests)
- Section Anchors (4 tests)

## Phase Progress

| Phase | Features | Completed | Remaining |
|-------|----------|-----------|-----------|
| Phase 1: Foundation | 5 | 5 | 0 |
| Phase 2: Navigation | 4 | 4 | 0 |
| Phase 3: Homepage | 7 | 7 | 0 |
| Phase 4: Footer | 2 | 2 | 0 |
| Phase 5: Feature Pages | 13 | **9** | **4** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **27** | **14** |

## Technical Notes

### Component Usage Pattern

```astro
<StickyNav
  client:load
  featureName="Blueprints"
  navItems={navItems}
  buyButtonText="Get Lattice"
  buyButtonHref="/#pricing"
  testId="blueprints-nav"
/>

<FeatureHero
  client:load
  headline="36 Blueprints. 10+ Vendors."
  tagline="Browse Apply Research"
  colorScheme="violet"
  testId="blueprints-hero"
/>

<CapabilitySection
  client:load
  title="Vendor Coverage"
  features={vendorFeatures}
  icon={icons.globe}
  iconColor="violet"
  imagePosition="left"
  background="white"
  journeyLink="/blog/journey-browse-blueprints"
  testId="blueprints-vendors"
/>

<TechSpecs
  client:load
  specs={techSpecs}
  columns={3}
  docsLink="/docs/features/blueprints"
  testId="blueprints-specs"
/>

<RelatedContent
  client:load
  journeys={journeys}
  docs={docs}
  ctaLink="/docs/features/blueprints"
  testId="blueprints-resources"
/>
```

### Section ID Anchors
- `#overview` - Hero section
- `#capabilities` - All capability sections
- `#specs` - Tech specs section
- `#resources` - Related resources section

### Capability Section Alternation
Sections alternate between left/right image positions and white/gray backgrounds:
1. Vendors: left, white
2. Setup: right, gray
3. Contents: left, white
4. Comparison: right, gray

### Color Scheme
Uses violet as primary color to match the blueprint/collection theme:
- violet (Vendors)
- blue (Setup)
- teal (Contents)
- amber (Comparison)

## Upgrade Notes

Fourth feature page updated using Phase 5 components (after Sources, Lab, and Studio). The same pattern continues for remaining feature pages:
- Scenarios (5.10)
- Stacks (5.11)
- Settings (5.12)
