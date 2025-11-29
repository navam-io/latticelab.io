# Release 0.23.0

**Release Date**: November 28, 2025

---

## Feature Slice 23: SEO & Meta Tags

**Spec Reference**: `website-spec.md` → SEO & Performance (Meta Tags)

**Summary**: Created centralized SEO component with comprehensive meta tags, Open Graph, Twitter Cards, canonical URLs, and JSON-LD structured data. Refactored BaseLayout to use the new SEO component for consistent SEO across all pages.

### Completed Acceptance Criteria

- [x] `SEO.astro` component for reusable meta tags
- [x] Page-specific title and description props
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:type, og:site_name, og:locale)
- [x] Twitter Card tags (summary_large_image)
- [x] Canonical URLs
- [x] Favicon configured in `public/`
- [x] OG image placeholder in `public/og-image.png`
- [x] Structured data (JSON-LD) for product page

### SEO Component Features

#### Props Interface

```typescript
interface Props {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  structuredData?: object;
}
```

#### Meta Tags Generated

| Tag Type | Tags |
|----------|------|
| Primary | title, meta title, meta description |
| Open Graph | og:type, og:url, og:title, og:description, og:image, og:site_name, og:locale |
| Twitter | twitter:card, twitter:url, twitter:title, twitter:description, twitter:image |
| Canonical | link rel="canonical" |
| JSON-LD | script type="application/ld+json" |

#### Structured Data Types

| Page | Schema Type | Features |
|------|-------------|----------|
| Homepage | SoftwareApplication | name, applicationCategory, operatingSystem, offers |
| Pricing | Product | name, brand, offers (price, currency, availability), aggregateRating |
| Other | WebSite | name, url, description |

### Technical Implementation

**New Files**:
- `src/components/SEO.astro` — Centralized SEO component
- `tests/feature-23-seo-meta-tags.spec.ts` — 85 tests
- `releases/release-0.23.0.md`

**Modified**:
- `src/layouts/BaseLayout.astro` — Now uses SEO component
- `package.json` — Version bump to 0.23.0
- `backlog/active.md` — Mark Feature 23 complete

### Tests Added

85 new Playwright tests covering:

**Homepage SEO (12 tests)**:
- Page title, meta description
- Open Graph tags (title, description, image, URL, type)
- Twitter Card tags
- Canonical URL
- JSON-LD structured data

**Pricing Page SEO (10 tests)**:
- Page-specific title
- Open Graph with Pricing
- Canonical URL
- Product structured data with price, currency, offer

**Features Page SEO (6 tests)**:
- Page-specific title and meta
- Canonical URL, OG tags, Twitter tags, JSON-LD

**Documentation Page SEO (6 tests)**:
- Page-specific title and meta
- Full SEO tag coverage

**About Page SEO (6 tests)**:
- Page-specific title and meta
- Full SEO tag coverage

**Blueprints Page SEO (6 tests)**:
- Page-specific title and meta
- Full SEO tag coverage

**Journeys Page SEO (6 tests)**:
- Page-specific title and meta
- Full SEO tag coverage

**Favicon & Assets (8 tests)**:
- SVG favicon link
- PNG favicon link
- Apple touch icon
- Webmanifest
- Theme color
- Asset accessibility (favicon.svg, og-image.png, site.webmanifest)

**Open Graph Compliance (6 tests)**:
- og:site_name, og:locale
- Absolute URLs for images and canonical
- OG URL matches canonical
- Unique canonical per page

**JSON-LD Structured Data (8 tests)**:
- Homepage SoftwareApplication schema
- Pricing Product schema with brand, availability, rating
- Valid JSON parsing
- Schema.org context

**Twitter Card Compliance (5 tests)**:
- summary_large_image card type
- Title matches OG
- Image matches OG
- Description and URL present

**Page-Specific Meta (6 tests)**:
- Thank-you, feature detail, journey detail titles
- All pages have meta description
- Title length guidelines
- Description length guidelines

**Total Tests**: 1245 (1160 + 85)

### Build Output

```
19 page(s) built:
- / (index)
- /about
- /blueprints
- /docs
- /features (index)
- /features/sources
- /features/lab
- /features/studio
- /features/scenarios
- /journeys (index)
- /journeys/create-workspace
- /journeys/switch-workspace
- /journeys/configure-settings
- /journeys/manage-api-keys
- /journeys/browse-blueprints
- /journeys/apply-blueprint
- /pricing
- /thank-you
- /ui-showcase
```

### SEO Best Practices Implemented

1. **Unique Titles**: Each page has a unique, descriptive title
2. **Meta Descriptions**: Meaningful descriptions for search results
3. **Canonical URLs**: Absolute URLs prevent duplicate content issues
4. **Open Graph**: Rich previews when shared on social media
5. **Twitter Cards**: Large image cards for Twitter sharing
6. **Structured Data**: Rich snippets in search results
7. **Favicon Set**: Complete set of favicons for all devices

### JSON-LD Examples

**Homepage (SoftwareApplication)**:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lattice Lab",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "macOS, Linux, Windows",
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD"
  }
}
```

**Pricing (Product)**:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Lattice Lab",
  "brand": { "@type": "Brand", "name": "Lattice" },
  "offers": {
    "@type": "Offer",
    "price": "99.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
}
```

### Breaking Changes

None — SEO enhancements are backward compatible.

---

*Phase 2 Content & Journeys COMPLETE. All 23 feature slices implemented. Next: Phase 3 - Interactive Previews*
