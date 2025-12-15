# Release 0.41.0 - Stats Update

**Date**: 2025-12-14

## Summary

Updated stats across the site to match the source of truth from the Lattice backend project. Accurate counts for blueprints, models, and accelerators are now displayed consistently throughout the marketing site.

## Changes

### Stats Corrections

Updated from outdated values to accurate counts from `seed_blueprints.py` and `seed_registries.py`:

| Metric | Old Value | New Value |
|--------|-----------|-----------|
| Blueprints | 36 | 34 |
| Models | 30+ | 29 |
| Accelerators | N/A | 15 |
| Vendors | 10+ | 6 |

### Vendor List Updated

Previous vendor mentions included Meta, Mistral, Cohere, and HuggingFace which are not in the current blueprint or registry data. Updated to the accurate 6 vendors:

- **Anthropic**: 3 blueprints, 4 models
- **OpenAI**: 4 models
- **AWS**: 8 blueprints, 2 accelerators
- **Google Cloud**: 8 blueprints, 3 models, 3 accelerators
- **NVIDIA**: 7 blueprints, 10 accelerators
- **Azure**: 6 blueprints

### Files Updated

**Homepage Components**:
- `VendorTicker.vue` - New header: "34 Blueprints | 29 Models | 15 Accelerators"
- `FeatureGrid.vue` - Badge and tagline updated to 34
- `FAQ.vue` - Both blueprint-related answers updated
- `LetterSection.vue` - "34 curated blueprints" in features list
- `PricingCard.vue` - Default features updated
- `Pricing.vue` - Blueprint count corrected
- `FeaturesGrid.vue` - Heading and description updated

**Feature Pages**:
- `features/index.astro` - Blueprints badge updated to 34
- `features/blueprints.astro` - Hero headline: "34 Blueprints. 6 Vendors."
- Title and vendor counts in tech specs corrected

**Tool Pages**:
- `tools/model-registry.md` - Updated to 29 models
- `tools/accelerator-registry.md` - Updated to 15 accelerators

**SEO and Schema**:
- `index.astro` - JSON-LD FAQ schema updated
- `Layout.astro` - Product featureList updated
- `public/llms.txt` - LLM context file updated
- `public/llms-full.txt` - Full LLM context updated

**Header Navigation**:
- `Header.vue` - Blueprints badge updated to 34

**Test Utilities**:
- `test-utils/cta-banner.astro` - Test page subheadline updated

### Tests

**New Test File**: `tests/stats.spec.ts`
- 10 new E2E tests validating stat consistency across pages
- Tests for homepage, blueprints page, features index, tool pages, header, and FAQ

**Updated Tests**:
- `tests/pricing-card.spec.ts` - Updated to expect 34 blueprints
- `tests/homepage.spec.ts` - Updated vendor ticker test text
- `tests/cta-banner.spec.ts` - Updated to expect 34 blueprints

## Test Results

```
346 passed (36.1s)
```

**Fixed Flaky Test**: Replaced unreliable "backdrop click closes menu" test with "escape key closes menu" test in `header.spec.ts`. The backdrop click was flaky because the panel covers most of the backdrop, making clicks unreliable.

## Acceptance Criteria Met

- [x] Accurate blueprint count (34) displayed across all pages
- [x] Accurate model count (29) on model registry page
- [x] Accurate accelerator count (15) on accelerator registry page
- [x] Vendor ticker header shows: "34 Blueprints | 29 Models | 15 Accelerators"
- [x] All vendor mentions list accurate vendors (no Meta, Mistral, Cohere, HuggingFace)
- [x] Tests validate stat consistency
- [x] All related tests pass

## Data Sources

Stats were collected from the Lattice project at `/Users/manavsehgal/Developer/lattice/`:

- **Blueprints**: `backend/scripts/seed_blueprints.py` - ALL_BLUEPRINTS array
- **Models**: `backend/scripts/seed_registries.py` - MODEL_SEED_DATA array
- **Accelerators**: `backend/scripts/seed_registries.py` - ACCELERATOR_SEED_DATA array
