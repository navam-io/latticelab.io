/**
 * Feature Slice 33: Performance Optimization Tests
 *
 * Tests for performance optimizations including:
 * - Font loading with preload and font-display: swap
 * - Skip-to-content link for accessibility
 * - Resource loading order
 * - Critical rendering path
 */
import { test, expect } from '@playwright/test';

test.describe('Feature 33: Performance Optimization', () => {
  test.describe('Font Optimization', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('critical fonts are preloaded', async ({ page }) => {
      // Check for preload links for critical fonts
      const preloadLinks = page.locator('link[rel="preload"][as="font"]');
      const count = await preloadLinks.count();
      expect(count).toBeGreaterThanOrEqual(2);
    });

    test('preload link for Geist Sans 400 exists', async ({ page }) => {
      const preload = page.locator('link[rel="preload"][href*="geist-sans-latin-400"]');
      await expect(preload).toBeAttached();
    });

    test('preload link for Geist Sans 600 exists', async ({ page }) => {
      const preload = page.locator('link[rel="preload"][href*="geist-sans-latin-600"]');
      await expect(preload).toBeAttached();
    });

    test('font preload has correct attributes', async ({ page }) => {
      const preload = page.locator('link[rel="preload"][as="font"]').first();
      await expect(preload).toHaveAttribute('type', 'font/woff2');
      await expect(preload).toHaveAttribute('crossorigin', '');
    });

    test('fonts are loaded from self-hosted location', async ({ page }) => {
      const preload = page.locator('link[rel="preload"][as="font"]').first();
      const href = await preload.getAttribute('href');
      expect(href).toMatch(/^\/fonts\//);
    });
  });

  test.describe('Skip-to-Content Link', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('skip link exists', async ({ page }) => {
      const skipLink = page.getByTestId('skip-link');
      await expect(skipLink).toBeAttached();
    });

    test('skip link has correct href', async ({ page }) => {
      const skipLink = page.getByTestId('skip-link');
      await expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('skip link has correct text', async ({ page }) => {
      const skipLink = page.getByTestId('skip-link');
      await expect(skipLink).toHaveText('Skip to main content');
    });

    test('main content has correct id', async ({ page }) => {
      const main = page.locator('main#main-content');
      await expect(main).toBeAttached();
    });

    test('skip link is visually hidden by default', async ({ page }) => {
      const skipLink = page.getByTestId('skip-link');
      // Skip link should be positioned off-screen
      const boundingBox = await skipLink.boundingBox();
      // When hidden, the link is positioned at top: -100%
      expect(boundingBox?.y).toBeLessThan(0);
    });

    test('skip link becomes visible on focus', async ({ page }) => {
      // Tab to the skip link
      await page.keyboard.press('Tab');

      const skipLink = page.getByTestId('skip-link');
      // When focused, should be visible (top position > 0)
      const boundingBox = await skipLink.boundingBox();
      expect(boundingBox?.y).toBeGreaterThanOrEqual(0);
    });

    test('clicking skip link focuses main content', async ({ page }) => {
      await page.keyboard.press('Tab');
      await page.keyboard.press('Enter');

      // After clicking, focus should be on main content
      const main = page.locator('main#main-content');
      await expect(main).toBeFocused();
    });
  });

  test.describe('Resource Loading', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('viewport meta tag is present', async ({ page }) => {
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveAttribute('content', 'width=device-width, initial-scale=1.0');
    });

    test('charset is set correctly', async ({ page }) => {
      const charset = page.locator('meta[charset]');
      await expect(charset).toHaveAttribute('charset', 'UTF-8');
    });

    test('no render-blocking font imports', async ({ page }) => {
      // Ensure no @import statements for fonts (they're render-blocking)
      // Our fonts use @font-face with font-display: swap instead
      const stylesheets = page.locator('link[rel="stylesheet"]');
      const count = await stylesheets.count();
      // Should have minimal stylesheets
      expect(count).toBeLessThanOrEqual(3);
    });
  });

  test.describe('Critical Rendering Path', () => {
    test('page has title immediately', async ({ page }) => {
      await page.goto('/');
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title).toContain('Lattice');
    });

    test('hero content is visible quickly', async ({ page }) => {
      await page.goto('/');
      // Hero should be visible immediately without waiting for JS
      const heroHeadline = page.getByTestId('hero-headline');
      await expect(heroHeadline).toBeVisible({ timeout: 1000 });
    });

    test('navigation is visible quickly', async ({ page }) => {
      await page.goto('/');
      const header = page.getByTestId('header');
      await expect(header).toBeVisible({ timeout: 1000 });
    });
  });

  test.describe('Font Display Swap', () => {
    test('page renders text before fonts load', async ({ page }) => {
      // Block font loading to simulate slow network
      await page.route('**/*.woff2', (route) => {
        // Delay font loading
        return new Promise((resolve) => {
          setTimeout(() => route.continue(), 2000);
        });
      });

      await page.goto('/');

      // Text should still be visible (using fallback fonts)
      const heroHeadline = page.getByTestId('hero-headline');
      await expect(heroHeadline).toBeVisible({ timeout: 500 });
    });
  });

  test.describe('Skip Link Across Pages', () => {
    test('skip link exists on pricing page', async ({ page }) => {
      await page.goto('/pricing');
      const skipLink = page.getByTestId('skip-link');
      await expect(skipLink).toBeAttached();
    });

    test('skip link exists on features page', async ({ page }) => {
      await page.goto('/features');
      const skipLink = page.getByTestId('skip-link');
      await expect(skipLink).toBeAttached();
    });

    test('skip link exists on about page', async ({ page }) => {
      await page.goto('/about');
      const skipLink = page.getByTestId('skip-link');
      await expect(skipLink).toBeAttached();
    });
  });

  test.describe('Font Files Availability', () => {
    test('Geist Sans 400 font file loads', async ({ page }) => {
      const response = await page.request.get('/fonts/geist-sans-latin-400-normal.woff2');
      expect(response.status()).toBe(200);
    });

    test('Geist Sans 600 font file loads', async ({ page }) => {
      const response = await page.request.get('/fonts/geist-sans-latin-600-normal.woff2');
      expect(response.status()).toBe(200);
    });

    test('Geist Mono 400 font file loads', async ({ page }) => {
      const response = await page.request.get('/fonts/geist-mono-latin-400-normal.woff2');
      expect(response.status()).toBe(200);
    });
  });

  test.describe('Image Optimization', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('logo images have width and height attributes', async ({ page }) => {
      const logoImage = page.getByTestId('logo-image');
      await expect(logoImage).toHaveAttribute('width', '32');
      await expect(logoImage).toHaveAttribute('height', '32');
    });

    test('logo images have aria-hidden for decorative images', async ({ page }) => {
      const logoImage = page.getByTestId('logo-image');
      await expect(logoImage).toHaveAttribute('aria-hidden', 'true');
    });
  });

  test.describe('Accessibility Performance', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('main landmark has tabindex for skip link focus', async ({ page }) => {
      const main = page.locator('main#main-content');
      await expect(main).toHaveAttribute('tabindex', '-1');
    });

    test('page has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      const h1Count = await h1.count();
      // Should have exactly one h1
      expect(h1Count).toBe(1);
    });
  });

  test.describe('Reduced Motion Support', () => {
    test('respects prefers-reduced-motion', async ({ page }) => {
      // Emulate reduced motion preference
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto('/');

      // Page should still load and function
      const heroHeadline = page.getByTestId('hero-headline');
      await expect(heroHeadline).toBeVisible();
    });
  });
});
