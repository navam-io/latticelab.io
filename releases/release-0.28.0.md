# Release 0.28.0 - Scenarios Feature Page Update

**Release Date:** December 14, 2025

## Overview

Updated the Scenarios feature page with all Phase 5 components: StickyNav, FeatureHero, CapabilitySection, TechSpecs, and RelatedContent. Showcases workload definition, SLO configuration, budget constraints, and compliance requirements.

## Completed Feature

### Feature 5.10: Scenarios Feature Page Update

**Spec Reference:** Part 4, Section 4.3, 4.4
**Complexity:** M (Medium)

**Description:**
Update Scenarios feature page with new components and content, highlighting workload types, SLO targets, budget constraints, and compliance options.

**Files Modified:**
- `src/pages/features/scenarios.astro` - Scenarios feature page with new components

**Tests Created:**
- `tests/scenarios-page.spec.ts` - 61 comprehensive tests

## Page Structure

### 1. Sticky Navigation
- Feature name: "Scenarios"
- Links: Overview, Capabilities, Tech Specs, Resources
- Buy button: "Get Lattice"

### 2. Hero Section
- Headline: "Define Your Workload."
- Tagline: "Configure. Target. Optimize."
- Description highlights scenarios as the context for all AI recommendations
- Product screenshot from create-scenario journey (template chooser)
- Color scheme: Amber
- CTAs: "Get Lattice" and "View docs"

### 3. Capabilities (4 sections)

**Workload Classification** (amber, left image)
- High-Volume Chat: Real-time conversational AI with strict latency
- RAG Applications: Knowledge base retrieval with accuracy SLOs
- Code Generation: IDE integration with low-latency completion
- Agentic Workflows: Multi-step reasoning with tool use
- Batch Processing: Async workloads with throughput focus
- Training Jobs: Fine-tuning, RLHF, DPO configurations
- Journey link: /blog/journey-create-scenario

**SLO Configuration** (blue, right image, gray bg)
- P95 Latency: Target response times (e.g., 1000ms)
- Throughput: Requests per minute requirements
- Availability: Uptime and reliability targets
- Token Limits: Input/output token constraints
- Journey link: /blog/journey-edit-scenario

**Budget & Cost Constraints** (teal, left image)
- Monthly Spend: Budget caps and alerts
- Cost-per-Request: Per-1K-request targets
- Cost vs Quality: Tradeoff preferences
- Reserved vs Spot: Instance pricing options
- Journey link: /blog/journey-create-scenario

**Compliance & Privacy** (violet, right image, gray bg)
- HIPAA/SOC2: Healthcare and enterprise compliance
- Data Residency: Geographic constraints for data
- Audit Requirements: Logging and provenance tracking
- Privacy Controls: PII handling and anonymization
- Journey link: /blog/journey-compare-scenarios

### 4. Tech Specs Section
Three specification cards:
- **Workload Categories**: Inference (Chat, RAG, Code, Embedding), Training (SFT, LoRA, RLHF, DPO), Comparison
- **SLO Parameters**: Latency (P50, P95, P99), Throughput, Availability, Budget
- **Profile Options**: Traffic (Low, Medium, High, Burst), Risk (Conservative, Balanced, Aggressive), Compliance (HIPAA, SOC2, GDPR)
- Docs link: /docs/features/scenarios

### 5. Related Resources Section
Journey guides:
- Creating Scenarios
- Editing Scenarios
- Comparing Scenarios

Documentation links:
- Scenarios API Reference
- SLO Configuration Guide

CTA: "View Scenarios documentation"

### 6. CTA Section
- Gradient background (amber to orange)
- Headline: "Define Your Requirements"
- Button: "Get Lattice for $99"

## Acceptance Criteria - All Met

- [x] Hero: "Define Your Workload."
- [x] Capabilities: Workload types, SLO config, Compliance
- [x] Related journey links: create-scenario, edit-scenario

## Test Coverage

61 new tests covering:
- Page Structure (2 tests)
- Sticky Navigation (7 tests)
- Hero Section (7 tests)
- Workload Classification (6 tests)
- SLO Configuration (6 tests)
- Budget & Cost (5 tests)
- Compliance & Privacy (4 tests)
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
| Phase 5: Feature Pages | 13 | **10** | **3** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **28** | **13** |

## Technical Notes

### Component Usage Pattern

```astro
<StickyNav
  client:load
  featureName="Scenarios"
  navItems={navItems}
  buyButtonText="Get Lattice"
  buyButtonHref="/#pricing"
  testId="scenarios-nav"
/>

<FeatureHero
  client:load
  headline="Define Your Workload."
  tagline="Configure Target Optimize"
  colorScheme="amber"
  testId="scenarios-hero"
/>

<CapabilitySection
  client:load
  title="Workload Classification"
  features={workloadFeatures}
  icon={icons.collection}
  iconColor="amber"
  imagePosition="left"
  background="white"
  journeyLink="/blog/journey-create-scenario"
  testId="scenarios-workloads"
/>

<TechSpecs
  client:load
  specs={techSpecs}
  columns={3}
  docsLink="/docs/features/scenarios"
  testId="scenarios-specs"
/>

<RelatedContent
  client:load
  journeys={journeys}
  docs={docs}
  ctaLink="/docs/features/scenarios"
  testId="scenarios-resources"
/>
```

### Section ID Anchors
- `#overview` - Hero section
- `#capabilities` - All capability sections
- `#specs` - Tech specs section
- `#resources` - Related resources section

### Capability Section Alternation
Sections alternate between left/right image positions and white/gray backgrounds:
1. Workloads: left, white
2. SLO: right, gray
3. Budget: left, white
4. Compliance: right, gray

### Color Scheme
Uses amber as primary color to match workload/configuration theme:
- amber (Workloads)
- blue (SLO)
- teal (Budget)
- violet (Compliance)

## Upgrade Notes

Fifth feature page updated using Phase 5 components (after Sources, Lab, Studio, and Blueprints). The same pattern continues for remaining feature pages:
- Stacks (5.11)
- Settings (5.12)
- Features Index (5.13)
