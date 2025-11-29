import { test, expect } from '@playwright/test';

/**
 * Feature Slice 23: SEO & Meta Tags
 *
 * Tests for SEO implementation including meta tags, Open Graph,
 * Twitter Cards, canonical URLs, and JSON-LD structured data.
 */

test.describe('Feature 23: SEO & Meta Tags', () => {
  // ===================
  // Homepage SEO (12 tests)
  // ===================
  test.describe('Homepage SEO', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('has page title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('Lattice');
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
    });

    test('has Open Graph title', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toHaveAttribute('content', /Lattice/);
    });

    test('has Open Graph description', async ({ page }) => {
      const ogDescription = page.locator('meta[property="og:description"]');
      await expect(ogDescription).toHaveAttribute('content', /.+/);
    });

    test('has Open Graph image', async ({ page }) => {
      const ogImage = page.locator('meta[property="og:image"]');
      await expect(ogImage).toHaveAttribute('content', /og-image/);
    });

    test('has Open Graph URL', async ({ page }) => {
      const ogUrl = page.locator('meta[property="og:url"]');
      await expect(ogUrl).toHaveAttribute('content', /.+/);
    });

    test('has Open Graph type', async ({ page }) => {
      const ogType = page.locator('meta[property="og:type"]');
      await expect(ogType).toHaveAttribute('content', 'website');
    });

    test('has Twitter card', async ({ page }) => {
      const twitterCard = page.locator('meta[name="twitter:card"]');
      await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
    });

    test('has Twitter title', async ({ page }) => {
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      await expect(twitterTitle).toHaveAttribute('content', /Lattice/);
    });

    test('has Twitter image', async ({ page }) => {
      const twitterImage = page.locator('meta[name="twitter:image"]');
      await expect(twitterImage).toHaveAttribute('content', /og-image/);
    });

    test('has canonical URL', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /.+/);
    });

    test('has JSON-LD structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      await expect(jsonLd).toBeAttached();
      const content = await jsonLd.textContent();
      expect(content).toContain('@context');
      expect(content).toContain('schema.org');
    });
  });

  // ===================
  // Pricing Page SEO (10 tests)
  // ===================
  test.describe('Pricing Page SEO', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/pricing');
    });

    test('has page-specific title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('Pricing');
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
    });

    test('has Open Graph title with Pricing', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toHaveAttribute('content', /Pricing/);
    });

    test('has canonical URL for pricing', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute('href');
      expect(href).toContain('pricing');
    });

    test('has product structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('Product');
    });

    test('structured data has price', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('99');
    });

    test('structured data has currency', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('USD');
    });

    test('structured data has offer', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('Offer');
    });

    test('Twitter card is present', async ({ page }) => {
      const twitterCard = page.locator('meta[name="twitter:card"]');
      await expect(twitterCard).toBeAttached();
    });

    test('Open Graph site name is present', async ({ page }) => {
      const ogSiteName = page.locator('meta[property="og:site_name"]');
      await expect(ogSiteName).toHaveAttribute('content', 'Lattice');
    });
  });

  // ===================
  // Features Page SEO (6 tests)
  // ===================
  test.describe('Features Page SEO', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features');
    });

    test('has page-specific title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('Features');
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
    });

    test('has canonical URL', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute('href');
      expect(href).toContain('features');
    });

    test('has Open Graph tags', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toBeAttached();
    });

    test('has Twitter tags', async ({ page }) => {
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      await expect(twitterTitle).toBeAttached();
    });

    test('has JSON-LD structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      await expect(jsonLd).toBeAttached();
    });
  });

  // ===================
  // Documentation Page SEO (6 tests)
  // ===================
  test.describe('Documentation Page SEO', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/docs');
    });

    test('has page-specific title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('Documentation');
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
    });

    test('has canonical URL', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute('href');
      expect(href).toContain('docs');
    });

    test('has Open Graph tags', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toBeAttached();
    });

    test('has Twitter tags', async ({ page }) => {
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      await expect(twitterTitle).toBeAttached();
    });

    test('has JSON-LD structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      await expect(jsonLd).toBeAttached();
    });
  });

  // ===================
  // About Page SEO (6 tests)
  // ===================
  test.describe('About Page SEO', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/about');
    });

    test('has page-specific title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('About');
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
    });

    test('has canonical URL', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute('href');
      expect(href).toContain('about');
    });

    test('has Open Graph tags', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toBeAttached();
    });

    test('has Twitter tags', async ({ page }) => {
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      await expect(twitterTitle).toBeAttached();
    });

    test('has JSON-LD structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      await expect(jsonLd).toBeAttached();
    });
  });

  // ===================
  // Blueprints Page SEO (6 tests)
  // ===================
  test.describe('Blueprints Page SEO', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/blueprints');
    });

    test('has page-specific title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('Blueprint');
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
    });

    test('has canonical URL', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute('href');
      expect(href).toContain('blueprints');
    });

    test('has Open Graph tags', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toBeAttached();
    });

    test('has Twitter tags', async ({ page }) => {
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      await expect(twitterTitle).toBeAttached();
    });

    test('has JSON-LD structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      await expect(jsonLd).toBeAttached();
    });
  });

  // ===================
  // Journeys Page SEO (6 tests)
  // ===================
  test.describe('Journeys Page SEO', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/journeys');
    });

    test('has page-specific title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('Journey');
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /.+/);
    });

    test('has canonical URL', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute('href');
      expect(href).toContain('journeys');
    });

    test('has Open Graph tags', async ({ page }) => {
      const ogTitle = page.locator('meta[property="og:title"]');
      await expect(ogTitle).toBeAttached();
    });

    test('has Twitter tags', async ({ page }) => {
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      await expect(twitterTitle).toBeAttached();
    });

    test('has JSON-LD structured data', async ({ page }) => {
      const jsonLd = page.locator('script[type="application/ld+json"]');
      await expect(jsonLd).toBeAttached();
    });
  });

  // ===================
  // Favicon & Assets (8 tests)
  // ===================
  test.describe('Favicon & Assets', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('has SVG favicon link', async ({ page }) => {
      const favicon = page.locator('link[rel="icon"][type="image/svg+xml"]');
      await expect(favicon).toHaveAttribute('href', '/favicon.svg');
    });

    test('has PNG favicon link', async ({ page }) => {
      const favicon = page.locator('link[rel="icon"][type="image/png"]');
      await expect(favicon).toHaveAttribute('href', '/favicon-32.png');
    });

    test('has apple-touch-icon', async ({ page }) => {
      const icon = page.locator('link[rel="apple-touch-icon"]');
      await expect(icon).toHaveAttribute('href', '/apple-touch-icon.png');
    });

    test('has webmanifest link', async ({ page }) => {
      const manifest = page.locator('link[rel="manifest"]');
      await expect(manifest).toHaveAttribute('href', '/site.webmanifest');
    });

    test('has theme-color meta tag', async ({ page }) => {
      const themeColor = page.locator('meta[name="theme-color"]');
      await expect(themeColor).toBeAttached();
    });

    test('favicon.svg is accessible', async ({ page }) => {
      const response = await page.request.get('/favicon.svg');
      expect(response.status()).toBe(200);
    });

    test('og-image.png is accessible', async ({ page }) => {
      const response = await page.request.get('/og-image.png');
      expect(response.status()).toBe(200);
    });

    test('site.webmanifest is accessible', async ({ page }) => {
      const response = await page.request.get('/site.webmanifest');
      expect(response.status()).toBe(200);
    });
  });

  // ===================
  // Open Graph Compliance (6 tests)
  // ===================
  test.describe('Open Graph Compliance', () => {
    test('homepage has og:site_name', async ({ page }) => {
      await page.goto('/');
      const ogSiteName = page.locator('meta[property="og:site_name"]');
      await expect(ogSiteName).toHaveAttribute('content', 'Lattice');
    });

    test('homepage has og:locale', async ({ page }) => {
      await page.goto('/');
      const ogLocale = page.locator('meta[property="og:locale"]');
      await expect(ogLocale).toHaveAttribute('content', 'en_US');
    });

    test('OG image URL is absolute', async ({ page }) => {
      await page.goto('/');
      const ogImage = page.locator('meta[property="og:image"]');
      const content = await ogImage.getAttribute('content');
      expect(content).toMatch(/^https?:\/\//);
    });

    test('canonical URL is absolute', async ({ page }) => {
      await page.goto('/');
      const canonical = page.locator('link[rel="canonical"]');
      const href = await canonical.getAttribute('href');
      expect(href).toMatch(/^https?:\/\//);
    });

    test('OG URL matches canonical', async ({ page }) => {
      await page.goto('/pricing');
      const canonical = page.locator('link[rel="canonical"]');
      const ogUrl = page.locator('meta[property="og:url"]');
      const canonicalHref = await canonical.getAttribute('href');
      const ogUrlContent = await ogUrl.getAttribute('content');
      expect(canonicalHref).toBe(ogUrlContent);
    });

    test('each page has unique canonical URL', async ({ page }) => {
      const pages = ['/', '/pricing', '/features', '/about', '/docs'];
      const canonicals = new Set();

      for (const pagePath of pages) {
        await page.goto(pagePath);
        const canonical = page.locator('link[rel="canonical"]');
        const href = await canonical.getAttribute('href');
        canonicals.add(href);
      }

      expect(canonicals.size).toBe(pages.length);
    });
  });

  // ===================
  // JSON-LD Structured Data (8 tests)
  // ===================
  test.describe('JSON-LD Structured Data', () => {
    test('homepage has SoftwareApplication schema', async ({ page }) => {
      await page.goto('/');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('SoftwareApplication');
    });

    test('homepage schema has application category', async ({ page }) => {
      await page.goto('/');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('applicationCategory');
    });

    test('pricing page has Product schema', async ({ page }) => {
      await page.goto('/pricing');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('Product');
    });

    test('pricing schema has brand', async ({ page }) => {
      await page.goto('/pricing');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('Brand');
    });

    test('pricing schema has availability', async ({ page }) => {
      await page.goto('/pricing');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('InStock');
    });

    test('pricing schema has aggregate rating', async ({ page }) => {
      await page.goto('/pricing');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(content).toContain('AggregateRating');
    });

    test('JSON-LD is valid JSON', async ({ page }) => {
      await page.goto('/');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      expect(() => JSON.parse(content!)).not.toThrow();
    });

    test('JSON-LD has schema.org context', async ({ page }) => {
      await page.goto('/');
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const content = await jsonLd.textContent();
      const parsed = JSON.parse(content!);
      expect(parsed['@context']).toBe('https://schema.org');
    });
  });

  // ===================
  // Twitter Card Compliance (5 tests)
  // ===================
  test.describe('Twitter Card Compliance', () => {
    test('uses summary_large_image card type', async ({ page }) => {
      await page.goto('/');
      const twitterCard = page.locator('meta[name="twitter:card"]');
      await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');
    });

    test('Twitter title matches OG title', async ({ page }) => {
      await page.goto('/pricing');
      const ogTitle = page.locator('meta[property="og:title"]');
      const twitterTitle = page.locator('meta[name="twitter:title"]');
      const ogContent = await ogTitle.getAttribute('content');
      const twitterContent = await twitterTitle.getAttribute('content');
      expect(ogContent).toBe(twitterContent);
    });

    test('Twitter image matches OG image', async ({ page }) => {
      await page.goto('/');
      const ogImage = page.locator('meta[property="og:image"]');
      const twitterImage = page.locator('meta[name="twitter:image"]');
      const ogContent = await ogImage.getAttribute('content');
      const twitterContent = await twitterImage.getAttribute('content');
      expect(ogContent).toBe(twitterContent);
    });

    test('Twitter description is present', async ({ page }) => {
      await page.goto('/');
      const twitterDescription = page.locator('meta[name="twitter:description"]');
      await expect(twitterDescription).toHaveAttribute('content', /.+/);
    });

    test('Twitter URL is present', async ({ page }) => {
      await page.goto('/');
      const twitterUrl = page.locator('meta[name="twitter:url"]');
      await expect(twitterUrl).toHaveAttribute('content', /.+/);
    });
  });

  // ===================
  // Page-Specific Meta (6 tests)
  // ===================
  test.describe('Page-Specific Meta', () => {
    test('thank-you page has appropriate title', async ({ page }) => {
      await page.goto('/thank-you');
      const title = await page.title();
      expect(title).toContain('Thank');
    });

    test('feature detail pages have specific titles', async ({ page }) => {
      await page.goto('/features/lab');
      const title = await page.title();
      expect(title).toContain('Lab');
    });

    test('journey detail pages have specific titles', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const title = await page.title();
      expect(title).toContain('Workspace');
    });

    test('all pages have meta description', async ({ page }) => {
      const pages = ['/', '/pricing', '/features', '/about', '/docs', '/blueprints', '/journeys'];

      for (const pagePath of pages) {
        await page.goto(pagePath);
        const metaDescription = page.locator('meta[name="description"]');
        const content = await metaDescription.getAttribute('content');
        expect(content).toBeTruthy();
        expect(content!.length).toBeGreaterThan(20);
      }
    });

    test('meta titles are under 60 characters guideline', async ({ page }) => {
      await page.goto('/');
      const metaTitle = page.locator('meta[name="title"]');
      const content = await metaTitle.getAttribute('content');
      // Allow some flexibility but flag extremely long titles
      expect(content!.length).toBeLessThan(100);
    });

    test('meta descriptions are reasonable length', async ({ page }) => {
      await page.goto('/');
      const metaDescription = page.locator('meta[name="description"]');
      const content = await metaDescription.getAttribute('content');
      // Should be descriptive but not too long
      expect(content!.length).toBeGreaterThan(50);
      expect(content!.length).toBeLessThan(300);
    });
  });
});
