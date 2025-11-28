import { test, expect } from '@playwright/test';

/**
 * Feature Slice 8: Logo & Branding Integration
 *
 * These tests verify that logo assets are correctly integrated across the website
 * including header, footer, favicon, and meta tags.
 */

test.describe('Feature 8: Logo & Branding Integration', () => {
  test.describe('Header Logo', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('header logo image is visible', async ({ page }) => {
      const logoImage = page.getByTestId('logo-image');
      await expect(logoImage).toBeVisible();
    });

    test('header logo image has correct src', async ({ page }) => {
      const logoImage = page.getByTestId('logo-image');
      const src = await logoImage.getAttribute('src');
      expect(src).toBe('/logo-icon-40.png');
    });

    test('header logo image has dimensions', async ({ page }) => {
      const logoImage = page.getByTestId('logo-image');
      const width = await logoImage.getAttribute('width');
      const height = await logoImage.getAttribute('height');
      expect(width).toBe('32');
      expect(height).toBe('32');
    });

    test('header logo image is decorative (aria-hidden)', async ({ page }) => {
      const logoImage = page.getByTestId('logo-image');
      const ariaHidden = await logoImage.getAttribute('aria-hidden');
      expect(ariaHidden).toBe('true');
    });

    test('header logo link goes to homepage', async ({ page }) => {
      const logoLink = page.getByTestId('logo');
      const href = await logoLink.getAttribute('href');
      expect(href).toBe('/');
    });

    test('header logo displays site name text', async ({ page }) => {
      const logoLink = page.getByTestId('logo');
      await expect(logoLink).toContainText('Lattice');
    });
  });

  test.describe('Footer Logo', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('footer logo is visible', async ({ page }) => {
      const footerLogo = page.getByTestId('footer-logo');
      await expect(footerLogo).toBeVisible();
    });

    test('footer logo image is visible', async ({ page }) => {
      const footerLogoImage = page.getByTestId('footer-logo-image');
      await expect(footerLogoImage).toBeVisible();
    });

    test('footer logo image has correct src', async ({ page }) => {
      const footerLogoImage = page.getByTestId('footer-logo-image');
      const src = await footerLogoImage.getAttribute('src');
      expect(src).toBe('/logo-icon-40.png');
    });

    test('footer logo link goes to homepage', async ({ page }) => {
      const footerLogo = page.getByTestId('footer-logo');
      const href = await footerLogo.getAttribute('href');
      expect(href).toBe('/');
    });

    test('footer logo displays site name text', async ({ page }) => {
      const footerLogo = page.getByTestId('footer-logo');
      await expect(footerLogo).toContainText('Lattice');
    });
  });

  test.describe('Favicon & Meta Tags', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('page has SVG favicon link', async ({ page }) => {
      const svgFavicon = page.locator('link[rel="icon"][type="image/svg+xml"]');
      const href = await svgFavicon.getAttribute('href');
      expect(href).toBe('/favicon.svg');
    });

    test('page has PNG favicon link', async ({ page }) => {
      const pngFavicon = page.locator('link[rel="icon"][type="image/png"]');
      const href = await pngFavicon.getAttribute('href');
      expect(href).toBe('/favicon-32.png');
    });

    test('page has apple-touch-icon', async ({ page }) => {
      const appleTouchIcon = page.locator('link[rel="apple-touch-icon"]');
      const href = await appleTouchIcon.getAttribute('href');
      expect(href).toBe('/apple-touch-icon.png');
    });

    test('page has webmanifest link', async ({ page }) => {
      const manifest = page.locator('link[rel="manifest"]');
      const href = await manifest.getAttribute('href');
      expect(href).toBe('/site.webmanifest');
    });

    test('page has theme-color meta tag', async ({ page }) => {
      const themeColor = page.locator('meta[name="theme-color"]');
      const content = await themeColor.getAttribute('content');
      expect(content).toBe('#1a1a1a');
    });

    test('page has OG image meta tag', async ({ page }) => {
      const ogImage = page.locator('meta[property="og:image"]');
      const content = await ogImage.getAttribute('content');
      expect(content).toContain('og-image.png');
    });
  });

  test.describe('Static Assets Exist', () => {
    test('favicon.svg is accessible', async ({ page }) => {
      const response = await page.goto('/favicon.svg');
      expect(response?.status()).toBe(200);
    });

    test('favicon-32.png is accessible', async ({ page }) => {
      const response = await page.goto('/favicon-32.png');
      expect(response?.status()).toBe(200);
    });

    test('logo-icon-40.png is accessible', async ({ page }) => {
      const response = await page.goto('/logo-icon-40.png');
      expect(response?.status()).toBe(200);
    });

    test('apple-touch-icon.png is accessible', async ({ page }) => {
      const response = await page.goto('/apple-touch-icon.png');
      expect(response?.status()).toBe(200);
    });

    test('icon-192.png is accessible', async ({ page }) => {
      const response = await page.goto('/icon-192.png');
      expect(response?.status()).toBe(200);
    });

    test('icon-512.png is accessible', async ({ page }) => {
      const response = await page.goto('/icon-512.png');
      expect(response?.status()).toBe(200);
    });

    test('og-image.png is accessible', async ({ page }) => {
      const response = await page.goto('/og-image.png');
      expect(response?.status()).toBe(200);
    });

    test('site.webmanifest is accessible', async ({ page }) => {
      const response = await page.goto('/site.webmanifest');
      expect(response?.status()).toBe(200);
    });
  });

  test.describe('Webmanifest Content', () => {
    test('webmanifest has correct name', async ({ page }) => {
      const response = await page.goto('/site.webmanifest');
      const manifest = await response?.json();
      expect(manifest.name).toBe('Lattice');
    });

    test('webmanifest has correct short_name', async ({ page }) => {
      const response = await page.goto('/site.webmanifest');
      const manifest = await response?.json();
      expect(manifest.short_name).toBe('Lattice');
    });

    test('webmanifest has icons defined', async ({ page }) => {
      const response = await page.goto('/site.webmanifest');
      const manifest = await response?.json();
      expect(manifest.icons).toBeDefined();
      expect(manifest.icons.length).toBeGreaterThanOrEqual(2);
    });

    test('webmanifest has 192px icon', async ({ page }) => {
      const response = await page.goto('/site.webmanifest');
      const manifest = await response?.json();
      const icon192 = manifest.icons.find((i: any) => i.sizes === '192x192');
      expect(icon192).toBeDefined();
      expect(icon192.src).toBe('/icon-192.png');
    });

    test('webmanifest has 512px icon', async ({ page }) => {
      const response = await page.goto('/site.webmanifest');
      const manifest = await response?.json();
      const icon512 = manifest.icons.find((i: any) => i.sizes === '512x512');
      expect(icon512).toBeDefined();
      expect(icon512.src).toBe('/icon-512.png');
    });

    test('webmanifest has theme colors', async ({ page }) => {
      const response = await page.goto('/site.webmanifest');
      const manifest = await response?.json();
      expect(manifest.theme_color).toBe('#1a1a1a');
      expect(manifest.background_color).toBe('#0a0a0a');
    });
  });

  test.describe('Logo Responsiveness', () => {
    test('header logo visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const logoImage = page.getByTestId('logo-image');
      await expect(logoImage).toBeVisible();
    });

    test('header logo visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      const logoImage = page.getByTestId('logo-image');
      await expect(logoImage).toBeVisible();
    });

    test('header logo visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const logoImage = page.getByTestId('logo-image');
      await expect(logoImage).toBeVisible();
    });

    test('footer logo visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const footerLogoImage = page.getByTestId('footer-logo-image');
      await expect(footerLogoImage).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('header logo image is hidden from screen readers', async ({ page }) => {
      const logoImage = page.getByTestId('logo-image');
      const ariaHidden = await logoImage.getAttribute('aria-hidden');
      expect(ariaHidden).toBe('true');
    });

    test('footer logo image is hidden from screen readers', async ({ page }) => {
      const footerLogoImage = page.getByTestId('footer-logo-image');
      const ariaHidden = await footerLogoImage.getAttribute('aria-hidden');
      expect(ariaHidden).toBe('true');
    });

    test('header logo link has text content for screen readers', async ({ page }) => {
      const logoLink = page.getByTestId('logo');
      const textContent = await logoLink.textContent();
      expect(textContent?.trim()).toBeTruthy();
    });

    test('footer logo link has text content for screen readers', async ({ page }) => {
      const footerLogo = page.getByTestId('footer-logo');
      const textContent = await footerLogo.textContent();
      expect(textContent?.trim()).toBeTruthy();
    });
  });
});
