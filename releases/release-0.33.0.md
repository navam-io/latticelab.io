# Release 0.33.0 — Performance Optimization

**Release Date**: 2025-11-28
**Phase**: Phase 5 (Polish & Launch)
**Feature Slice**: 33

---

## Summary

This release optimizes site performance with font loading improvements, accessibility enhancements, and critical rendering path optimizations. Key improvements include self-hosted fonts with preload hints, font-display: swap for faster text rendering, and skip-to-content links for accessibility.

---

## Font Optimization

### Self-Hosted Fonts

Fonts are now self-hosted in `/public/fonts/` instead of being bundled via npm imports:

```
public/fonts/
├── geist-sans-latin-400-normal.woff2 (33KB)
├── geist-sans-latin-500-normal.woff2 (35KB)
├── geist-sans-latin-600-normal.woff2 (35KB)
├── geist-sans-latin-700-normal.woff2 (35KB)
├── geist-mono-latin-400-normal.woff2 (15KB)
└── geist-mono-latin-500-normal.woff2 (15KB)
```

**Total font size**: ~168KB (unchanged, but better caching)

### Font Preloading

Critical fonts are now preloaded in `BaseLayout.astro`:

```html
<link rel="preload" href="/fonts/geist-sans-latin-400-normal.woff2"
      as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/geist-sans-latin-600-normal.woff2"
      as="font" type="font/woff2" crossorigin />
```

### Font Display Swap

All `@font-face` declarations now include `font-display: swap`:

```css
@font-face {
  font-family: 'Geist';
  font-display: swap;  /* Shows fallback font immediately */
  font-weight: 400;
  src: url('/fonts/geist-sans-latin-400-normal.woff2') format('woff2');
}
```

**Benefits**:
- Text visible immediately with fallback fonts
- No FOIT (Flash of Invisible Text)
- Faster First Contentful Paint (FCP)

---

## Skip-to-Content Link

Added accessible skip-to-content link in `PageLayout.astro`:

```astro
<a href="#main-content" class="skip-link" data-testid="skip-link">
  Skip to main content
</a>
<main id="main-content" tabindex="-1">
  <slot />
</main>
```

**Features**:
- Visually hidden by default (positioned off-screen)
- Becomes visible on keyboard focus
- Focuses main content when activated
- Available on all pages

**CSS** (in `globals.css`):
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 9999;
  /* ... styling */
}

.skip-link:focus {
  top: var(--space-2);
  left: var(--space-2);
}
```

---

## Performance Benefits

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Font Loading | Bundled via npm | Self-hosted with preload | Better caching |
| Text Visibility | FOIT possible | Immediate (swap) | No flash |
| Accessibility | No skip link | Skip-to-content | Keyboard navigation |
| Font Requests | Multiple files | Optimized preload | 2 critical fonts prioritized |

---

## Test Coverage

30 new tests added in `tests/feature-33-performance.spec.ts`:

- **Font Optimization**: 5 tests
- **Skip-to-Content Link**: 8 tests
- **Resource Loading**: 3 tests
- **Critical Rendering Path**: 3 tests
- **Font Display Swap**: 1 test
- **Skip Link Across Pages**: 3 tests
- **Font Files Availability**: 3 tests
- **Image Optimization**: 2 tests
- **Accessibility Performance**: 2 tests

**Total Test Count**: 1,704 tests (1,689 passed, 15 flaky passed on retry)

---

## Files Created

```
public/fonts/geist-sans-latin-400-normal.woff2
public/fonts/geist-sans-latin-500-normal.woff2
public/fonts/geist-sans-latin-600-normal.woff2
public/fonts/geist-sans-latin-700-normal.woff2
public/fonts/geist-mono-latin-400-normal.woff2
public/fonts/geist-mono-latin-500-normal.woff2
tests/feature-33-performance.spec.ts
releases/release-0.33.0.md
```

---

## Files Modified

```
src/styles/globals.css          — Self-hosted @font-face with font-display: swap
src/layouts/BaseLayout.astro    — Added font preload links
src/layouts/PageLayout.astro    — Added skip-to-content link and main id
package.json                    — Version bump to 0.33.0
backlog/active.md               — Updated backlog status
```

---

## Acceptance Criteria Completion

| Criteria | Status |
|----------|--------|
| Fonts preloaded with `font-display: swap` | ✅ |
| Skip-to-content link added | ✅ |
| Images have width/height attributes | ✅ |
| Semantic HTML verified | ✅ |
| `prefers-reduced-motion` support | ✅ |
| JavaScript code-split per island | ✅ (already in place) |
| Critical rendering path optimized | ✅ |

**Note**: Lighthouse score testing requires production deployment. Current optimizations target:
- Performance: 95+ (optimized fonts, preload)
- Accessibility: 100 (skip link, semantic HTML)
- Best Practices: 100 (self-hosted fonts)

---

## How Font Loading Works

1. **Browser parses HTML head**
2. **Preload hints** trigger early font downloads for critical weights (400, 600)
3. **CSS loads** with @font-face declarations
4. **font-display: swap** shows text immediately with fallback fonts
5. **Fonts load** and swap in seamlessly

```
[Page Request] → [Preload Fonts (parallel)] → [CSS] → [Text Visible (fallback)]
                                                     ↓
                                               [Fonts Load] → [Text Styled]
```

---

## Next Steps

Feature Slice 34 (Accessibility Audit & Fixes) will:
- Verify color contrast ratios (4.5:1 for text)
- Add focus indicators to all interactive elements
- Complete keyboard navigation testing
- Screen reader testing with VoiceOver
- Target Lighthouse Accessibility score: 100

---

## Backlog Status

- **Phase 1 (Foundation)**: Complete (13/13 slices)
- **Phase 2 (Content)**: Complete (10/10 slices)
- **Phase 3 (Interactive)**: Complete (7/7 slices)
- **Phase 4 (Purchase)**: Complete (2/2 slices)
- **Phase 5 (Polish)**: In Progress (1/8 slices)

**Overall Progress**: 33/40 feature slices complete (82.5%)
