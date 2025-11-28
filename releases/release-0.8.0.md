# Release 0.8.0

**Release Date**: November 28, 2025

---

## Feature Slice 8: Logo & Branding Integration

**Spec Reference**: `website-spec.md` → Logo Assets, PWA Configuration, Favicon Strategy

**Summary**: Integrated professional logo assets across the website including header, footer, favicons, PWA manifest, and social sharing meta tags.

### Completed Acceptance Criteria

- [x] Copy and optimize logo assets from source directory
  - [x] `icon-512.png` (512x512) — PWA icon
  - [x] `icon-192.png` (192x192) — PWA icon
  - [x] `apple-touch-icon.png` (180x180) — iOS icon
  - [x] `favicon-32.png` (32x32) — PNG favicon fallback
  - [x] `logo-icon-40.png` (40x40) — Header/footer logo icon
  - [x] `logo-header.png` (80px height) — Header logo (alternative)
  - [x] `og-image.png` — Open Graph social sharing image
- [x] Create `favicon.svg` with custom lattice grid pattern design
- [x] Update `Header.astro` with logo image and site name
- [x] Update `Footer.astro` with logo image and site name
- [x] Update `BaseLayout.astro` with comprehensive favicon links
  - [x] SVG favicon (primary)
  - [x] PNG favicon (fallback)
  - [x] Apple Touch Icon
  - [x] Web Manifest link
  - [x] Theme color meta tag
- [x] Create `site.webmanifest` for PWA support
- [x] Ensure all logo images are accessible with proper ARIA attributes

### Technical Details

**New Static Assets Created** (`public/`):

| Asset | Size | Purpose |
|-------|------|---------|
| `favicon.svg` | Custom | Primary favicon with lattice grid pattern |
| `favicon-32.png` | 32x32 | PNG favicon fallback |
| `icon-192.png` | 192x192 | PWA manifest icon |
| `icon-512.png` | 512x512 | PWA manifest icon |
| `apple-touch-icon.png` | 180x180 | iOS home screen icon |
| `logo-icon-40.png` | 40x40 | Header/footer logo |
| `logo-header.png` | 80px h | Alternative header logo |
| `og-image.png` | 1200x630 | Open Graph social sharing |

**site.webmanifest Configuration**:
```json
{
  "name": "Lattice",
  "short_name": "Lattice",
  "description": "Agentic AI Lab Assistant for Research Engineers",
  "display": "standalone",
  "background_color": "#0a0a0a",
  "theme_color": "#1a1a1a",
  "icons": [192px, 512px, 512px maskable]
}
```

**Header.astro Updates**:
- Added logo image with `data-testid="logo-image"`
- Image is 32x32 pixels with aria-hidden="true" (decorative)
- Site name displayed alongside logo

**Footer.astro Updates**:
- Added logo image with `data-testid="footer-logo-image"`
- Logo link with `data-testid="footer-logo"`
- Consistent styling with header logo

**BaseLayout.astro Updates**:
- SVG favicon as primary (`/favicon.svg`)
- PNG favicon as fallback (`/favicon-32.png`)
- Apple Touch Icon (`/apple-touch-icon.png`)
- Web Manifest (`/site.webmanifest`)
- Theme color meta tag (`#1a1a1a`)

### Tests Added

39 new Playwright tests covering:

**Header Logo (6 tests)**:
- Header logo image is visible
- Header logo image has correct src
- Header logo image has dimensions
- Header logo image is decorative (aria-hidden)
- Header logo link goes to homepage
- Header logo displays site name text

**Footer Logo (5 tests)**:
- Footer logo is visible
- Footer logo image is visible
- Footer logo image has correct src
- Footer logo link goes to homepage
- Footer logo displays site name text

**Favicon & Meta Tags (6 tests)**:
- Page has SVG favicon link
- Page has PNG favicon link
- Page has apple-touch-icon
- Page has webmanifest link
- Page has theme-color meta tag
- Page has OG image meta tag

**Static Assets Exist (8 tests)**:
- favicon.svg is accessible
- favicon-32.png is accessible
- logo-icon-40.png is accessible
- apple-touch-icon.png is accessible
- icon-192.png is accessible
- icon-512.png is accessible
- og-image.png is accessible
- site.webmanifest is accessible

**Webmanifest Content (6 tests)**:
- Webmanifest has correct name
- Webmanifest has correct short_name
- Webmanifest has icons defined
- Webmanifest has 192px icon
- Webmanifest has 512px icon
- Webmanifest has theme colors

**Logo Responsiveness (4 tests)**:
- Header logo visible on mobile (375px)
- Header logo visible on tablet (768px)
- Header logo visible on desktop (1280px)
- Footer logo visible on mobile

**Accessibility (4 tests)**:
- Header logo image is hidden from screen readers
- Footer logo image is hidden from screen readers
- Header logo link has text content for screen readers
- Footer logo link has text content for screen readers

**Total Tests:** 293 (254 + 39)

### Files Created/Modified

**Created:**
- `public/favicon.svg`
- `public/favicon-32.png`
- `public/icon-192.png`
- `public/icon-512.png`
- `public/apple-touch-icon.png`
- `public/logo-icon-40.png`
- `public/logo-header.png`
- `public/og-image.png`
- `public/site.webmanifest`
- `tests/feature-8-logo-branding.spec.ts`

**Modified:**
- `src/components/layout/Header.astro` — Added logo image
- `src/components/layout/Footer.astro` — Added logo image
- `src/layouts/BaseLayout.astro` — Added favicon links and meta tags
- `package.json` — Version bump to 0.8.0

### Accessibility Compliance

- Logo images use `aria-hidden="true"` (decorative images)
- Logo links contain text content for screen readers
- Images have explicit width/height to prevent layout shift
- Alt text is empty string for decorative images per WCAG guidelines

### PWA Ready

The site is now PWA-installable with:
- Proper web manifest configuration
- Multiple icon sizes for different devices
- Theme and background colors defined
- Standalone display mode configured

### Breaking Changes

None — existing functionality preserved.

---

*Next: Feature Slice 9 - Persona Cards & Social Proof (Verifiable)*
