# Release 0.29.0 - Stacks Feature Page Update

**Release Date:** December 14, 2025

## Overview

Updated the Stacks feature page with all Phase 5 components: StickyNav, FeatureHero, CapabilitySection, TechSpecs, and RelatedContent. Showcases model selection, hardware configuration, framework choices, and AI-suggested stacks.

## Completed Feature

### Feature 5.11: Stacks Feature Page Update

**Spec Reference:** Part 4, Section 4.3, 4.4
**Complexity:** M (Medium)

**Description:**
Update Stacks feature page with new components and content, highlighting model providers, hardware options, inference frameworks, and AI recommendations.

**Files Modified:**
- `src/pages/features/stacks.astro` - Stacks feature page with new components

**Tests Created:**
- `tests/stacks-page.spec.ts` - 61 comprehensive tests

## Page Structure

### 1. Sticky Navigation
- Feature name: "Stacks"
- Links: Overview, Capabilities, Tech Specs, Resources
- Buy button: "Get Lattice"

### 2. Hero Section
- Headline: "Configure Infrastructure."
- Tagline: "Model. Hardware. Framework."
- Description highlights stack components for AI infrastructure
- Product screenshot from create-stack journey
- Color scheme: Teal
- CTAs: "Get Lattice" and "View docs"

### 3. Capabilities (4 sections)

**Model Selection** (green, left image)
- Anthropic Claude: Haiku, Sonnet, Opus variants
- OpenAI: GPT-4, GPT-4o, o1 reasoning models
- Google Gemini: Pro, Flash, Ultra options
- Meta Llama: 3.3 70B, 3.1 405B for self-hosting
- Mistral AI: Large, 7B edge deployments
- Embedding Models: text-embedding-3, voyage-3
- Journey link: /blog/journey-create-stack

**Hardware Configuration** (blue, right image, gray bg)
- NVIDIA GPUs: A100, H100, L40S options
- Memory Calculator: VRAM requirements per model
- Multi-GPU: Tensor parallelism configurations
- Cloud Providers: AWS, GCP, Azure instances
- Journey link: /blog/journey-configure-stack-hardware

**Framework Selection** (teal, left image)
- vLLM: High-throughput serving with PagedAttention
- TensorRT-LLM: NVIDIA-optimized inference
- Triton Server: Multi-model serving platform
- SGLang: Structured generation optimization
- Journey link: /blog/journey-configure-stack-framework

**AI-Suggested Stacks** (violet, right image, gray bg)
- Scenario-Optimized: Match SLO requirements
- Cost Analysis: Price vs performance tradeoffs
- Benchmark Citations: Vendor performance data
- Comparison View: Side-by-side stack options
- Journey link: /blog/journey-get-stack-suggestion

### 4. Tech Specs Section
Three specification cards:
- **Model Providers**: API (Anthropic, OpenAI, Google, Mistral), Self-Hosted (Meta Llama, NVIDIA NIM), Embeddings
- **Hardware Options**: GPUs (A100, H100, L40S, RTX 4090), Memory configs, Cloud platforms
- **Frameworks**: Serving (vLLM, TensorRT-LLM, Triton), Training (DeepSpeed, FSDP, Megatron), Optimization
- Docs link: /docs/features/stacks

### 5. Related Resources Section
Journey guides:
- Creating Stacks
- Configure Hardware
- Configure Framework

Documentation links:
- Stacks API Reference
- Hardware Selection Guide

CTA: "View Stacks documentation"

### 6. CTA Section
- Gradient background (emerald to teal)
- Headline: "Configure Your AI Stack"
- Button: "Get Lattice for $99"

## Acceptance Criteria - All Met

- [x] Hero: "Configure Infrastructure."
- [x] Capabilities: Model selection, Hardware config, Framework choices
- [x] Related journey links: create-stack, configure-hardware

## Test Coverage

61 new tests covering:
- Page Structure (2 tests)
- Sticky Navigation (7 tests)
- Hero Section (7 tests)
- Model Selection (6 tests)
- Hardware Configuration (6 tests)
- Framework Selection (5 tests)
- AI Suggestions (4 tests)
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
| Phase 5: Feature Pages | 13 | **11** | **2** |
| Phase 6: Tools Section | 6 | 0 | 6 |
| Phase 7: Docs Integration | 1 | 0 | 1 |
| Phase 8: Content & Polish | 3 | 0 | 3 |
| **Total** | **41** | **29** | **12** |

## Technical Notes

### Component Usage Pattern

```astro
<StickyNav
  client:load
  featureName="Stacks"
  navItems={navItems}
  buyButtonText="Get Lattice"
  buyButtonHref="/#pricing"
  testId="stacks-nav"
/>

<FeatureHero
  client:load
  headline="Configure Infrastructure."
  tagline="Model Hardware Framework"
  colorScheme="teal"
  testId="stacks-hero"
/>

<CapabilitySection
  client:load
  title="Model Selection"
  features={modelFeatures}
  icon={icons.desktop}
  iconColor="green"
  imagePosition="left"
  background="white"
  journeyLink="/blog/journey-create-stack"
  testId="stacks-models"
/>

<TechSpecs
  client:load
  specs={techSpecs}
  columns={3}
  docsLink="/docs/features/stacks"
  testId="stacks-specs"
/>

<RelatedContent
  client:load
  journeys={journeys}
  docs={docs}
  ctaLink="/docs/features/stacks"
  testId="stacks-resources"
/>
```

### Section ID Anchors
- `#overview` - Hero section
- `#capabilities` - All capability sections
- `#specs` - Tech specs section
- `#resources` - Related resources section

### Capability Section Alternation
Sections alternate between left/right image positions and white/gray backgrounds:
1. Models: left, white
2. Hardware: right, gray
3. Frameworks: left, white
4. Suggestions: right, gray

### Color Scheme
Uses teal as primary hero color to match infrastructure/technical theme:
- green (Models)
- blue (Hardware)
- teal (Frameworks)
- violet (Suggestions)

### FeatureHero Color Limitation
Note: FeatureHero only supports these colorScheme values: violet, blue, teal, amber.
For stacks, we use `teal` since `green` is not supported.

## Upgrade Notes

Sixth feature page updated using Phase 5 components (after Sources, Lab, Studio, Blueprints, and Scenarios). The same pattern continues for remaining feature pages:
- Settings (5.12)
- Features Index (5.13)
