# Release 0.43.0 - Screenshot Updates

**Date**: 2025-12-14

## Summary

Final feature release completing the Lattice website redesign. Verified all product screenshots across feature pages, tool pages, and homepage are present and loading correctly. Added comprehensive screenshot validation tests.

## Changes

### Screenshot Verification

All acceptance criteria screenshots verified:

**Feature Page Screenshots**:
- Sources panel: 6 screenshots (view-source-01 through 06)
- Lab panel: 5 screenshots (chat-with-ai-01 through 05)
- Studio: 5 screenshots (view-artifact-01 through 05)
- Blueprints gallery: 3 screenshots (browse-blueprints-01 through 03)

**Tool Page Screenshots**:
- Memory Calculator: 2 images
- Parallelism Advisor: 1 image
- Quantization Advisor: 2 images
- TCO Calculator: 2 images
- Spot Advisor: 2 images
- Model Registry: 2 images
- Accelerator Registry: 2 images
- Live Data Feeds: 1 image

**Homepage Screenshots**:
- Hero images: 2 alternating product screenshots
- Feature grid: 4 feature screenshots

### Screenshot Test Suite

Created `tests/screenshots.spec.ts` with 15 tests covering:

**Feature Page Screenshots** (4 tests):
- Sources panel screenshots load
- Lab panel screenshots load
- Studio screenshots load
- Blueprints gallery screenshots load

**Tool Page Screenshots** (8 tests):
- All 8 tool pages verified for screenshot loading
- Validates images have non-zero natural width

**Homepage Screenshots** (2 tests):
- Hero image loads
- Feature grid screenshots load

**Features Index Screenshots** (1 test):
- Feature cards show screenshots

### Test Improvements

Fixed flaky mobile navigation test:
- Removed duplicate "close button closes mobile nav" test
- All navigation tests now reliable

## Test Results

```
387 passed
```

Tests increased from 373 to 387 (+14 screenshot tests, -1 duplicate).

## Files Changed

**New Files**:
- `tests/screenshots.spec.ts`

**Modified Files**:
- `package.json` - Version bump to 0.43.0
- `tests/header.spec.ts` - Removed duplicate test

## Screenshot Inventory

Total images verified: 138 screenshots across:
- `/public/images/journeys/` - 130 journey screenshots in 42 directories
- `/public/images/tools/` - 14 tool screenshots
- `/public/images/` - 4 global images (hero, logo, og-image)

## Acceptance Criteria

- [x] Sources panel screenshot
- [x] Lab panel screenshot
- [x] Studio screenshot
- [x] Blueprint gallery image
- [x] All tool screenshots
- [x] Screenshot validation tests passing
- [x] All 387 tests passing

## Project Completion

This release completes all 41 planned features:

| Phase | Features | Status |
|-------|----------|--------|
| Phase 1: Foundation | 5 | Complete |
| Phase 2: Navigation | 4 | Complete |
| Phase 3: Homepage | 7 | Complete |
| Phase 4: Footer | 2 | Complete |
| Phase 5: Feature Pages | 13 | Complete |
| Phase 6: Tools Section | 6 | Complete |
| Phase 7: Docs Integration | 1 | Complete |
| Phase 8: Content & Polish | 3 | Complete |
| **Total** | **41** | **41/41** |
