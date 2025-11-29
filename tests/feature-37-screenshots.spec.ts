/**
 * Feature Slice 37: Product Screenshots Integration Tests
 *
 * Tests for verifying product screenshots are properly integrated:
 * - Hero section has real screenshot
 * - Solution section has real screenshot
 * - Feature pages have screenshots or interactive previews
 * - All screenshots load without errors
 * - Alt text is present for accessibility
 * - WebP format is available with PNG fallback
 */
import { test, expect } from '@playwright/test';

test.describe('Feature 37: Product Screenshots Integration', () => {
  test.describe('Hero Section Screenshot', () => {
    test('hero has product screenshot image', async ({ page }) => {
      await page.goto('/');

      const heroScreenshot = page.getByTestId('hero-screenshot');
      await expect(heroScreenshot).toBeVisible();

      // Should contain a picture element with source and img
      const picture = heroScreenshot.locator('picture');
      await expect(picture).toBeVisible();

      const source = picture.locator('source');
      await expect(source).toHaveAttribute('srcset', /hero-main\.webp/);
      await expect(source).toHaveAttribute('type', 'image/webp');

      const img = picture.locator('img');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('src', /hero-main\.png/);
    });

    test('hero screenshot has descriptive alt text', async ({ page }) => {
      await page.goto('/');

      const img = page
        .getByTestId('hero-screenshot')
        .locator('picture img');
      const alt = await img.getAttribute('alt');

      expect(alt).toBeTruthy();
      expect(alt!.length).toBeGreaterThan(20);
      expect(alt!.toLowerCase()).toContain('lattice');
    });

    test('hero screenshot loads successfully', async ({ page }) => {
      await page.goto('/');

      const img = page
        .getByTestId('hero-screenshot')
        .locator('picture img');

      // Wait for image to load
      await expect(img).toBeVisible();

      // Check image has natural dimensions (loaded successfully)
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    });

    test('hero screenshot has proper dimensions', async ({ page }) => {
      await page.goto('/');

      const img = page
        .getByTestId('hero-screenshot')
        .locator('picture img');

      await expect(img).toHaveAttribute('width', '1200');
      await expect(img).toHaveAttribute('height', '900');
    });
  });

  test.describe('Solution Section Screenshot', () => {
    test('solution section has product screenshot', async ({ page }) => {
      await page.goto('/');

      const solutionScreenshot = page.getByTestId('solution-screenshot');
      await solutionScreenshot.scrollIntoViewIfNeeded();
      await expect(solutionScreenshot).toBeVisible();

      // Should contain a picture element
      const picture = solutionScreenshot.locator('picture');
      await expect(picture).toBeVisible();

      const source = picture.locator('source');
      await expect(source).toHaveAttribute('srcset', /solution-main\.webp/);

      const img = picture.locator('img');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('src', /solution-main\.png/);
    });

    test('solution screenshot has descriptive alt text', async ({ page }) => {
      await page.goto('/');

      const solutionScreenshot = page.getByTestId('solution-screenshot');
      await solutionScreenshot.scrollIntoViewIfNeeded();

      const img = solutionScreenshot.locator('picture img');
      const alt = await img.getAttribute('alt');

      expect(alt).toBeTruthy();
      expect(alt!.length).toBeGreaterThan(30);
      expect(alt!.toLowerCase()).toContain('panel');
    });

    test('solution screenshot loads successfully', async ({ page }) => {
      await page.goto('/');

      const solutionScreenshot = page.getByTestId('solution-screenshot');
      await solutionScreenshot.scrollIntoViewIfNeeded();

      const img = solutionScreenshot.locator('picture img');
      await expect(img).toBeVisible();

      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    });

    test('solution screenshot uses lazy loading', async ({ page }) => {
      await page.goto('/');

      const img = page
        .getByTestId('solution-screenshot')
        .locator('picture img');

      await expect(img).toHaveAttribute('loading', 'lazy');
    });
  });

  test.describe('Feature Page Screenshots', () => {
    test('studio feature page has screenshot', async ({ page }) => {
      await page.goto('/features/studio');

      const screenshotContainer = page.getByTestId('feature-detail-screenshot-container');
      await screenshotContainer.scrollIntoViewIfNeeded();
      await expect(screenshotContainer).toBeVisible();

      const picture = screenshotContainer.locator('picture');
      await expect(picture).toBeVisible();

      const source = picture.locator('source');
      await expect(source).toHaveAttribute('srcset', /studio-01\.webp/);

      const img = picture.locator('img');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('src', /studio-01\.png/);
    });

    test('studio screenshot has descriptive alt text', async ({ page }) => {
      await page.goto('/features/studio');

      const img = page
        .getByTestId('feature-detail-screenshot-container')
        .locator('picture img');

      await img.scrollIntoViewIfNeeded();
      const alt = await img.getAttribute('alt');

      expect(alt).toBeTruthy();
      expect(alt!.toLowerCase()).toContain('studio');
    });

    test('lab feature page has interactive preview (not screenshot)', async ({ page }) => {
      await page.goto('/features/lab');

      // Lab has an interactive preview, not a static screenshot
      const tryItSection = page.getByTestId('try-it-section');
      await tryItSection.scrollIntoViewIfNeeded();
      await expect(tryItSection).toBeVisible();
    });

    test('sources feature page has interactive preview', async ({ page }) => {
      await page.goto('/features/sources');

      const tryItSection = page.getByTestId('try-it-section');
      await tryItSection.scrollIntoViewIfNeeded();
      await expect(tryItSection).toBeVisible();
    });

    test('scenarios feature page has interactive preview', async ({ page }) => {
      await page.goto('/features/scenarios');

      const tryItSection = page.getByTestId('try-it-section');
      await tryItSection.scrollIntoViewIfNeeded();
      await expect(tryItSection).toBeVisible();
    });
  });

  test.describe('Screenshot Asset Files', () => {
    test('hero screenshot WebP file exists and is served', async ({ page }) => {
      const response = await page.request.get('/images/screenshots/hero/hero-main.webp');
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toContain('image/webp');
    });

    test('hero screenshot PNG fallback exists', async ({ page }) => {
      const response = await page.request.get('/images/screenshots/hero/hero-main.png');
      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toContain('image/png');
    });

    test('solution screenshot WebP file exists', async ({ page }) => {
      const response = await page.request.get('/images/screenshots/solution/solution-main.webp');
      expect(response.status()).toBe(200);
    });

    test('feature screenshots exist', async ({ page }) => {
      const screenshots = [
        '/images/screenshots/features/sources-01.webp',
        '/images/screenshots/features/lab-01.webp',
        '/images/screenshots/features/studio-01.webp',
        '/images/screenshots/features/scenarios-01.webp',
      ];

      for (const screenshot of screenshots) {
        const response = await page.request.get(screenshot);
        expect(response.status(), `${screenshot} should exist`).toBe(200);
      }
    });

    test('blueprints screenshots exist', async ({ page }) => {
      const screenshots = [
        '/images/screenshots/blueprints/gallery.webp',
        '/images/screenshots/blueprints/discovery.webp',
        '/images/screenshots/blueprints/detail.webp',
      ];

      for (const screenshot of screenshots) {
        const response = await page.request.get(screenshot);
        expect(response.status(), `${screenshot} should exist`).toBe(200);
      }
    });
  });

  test.describe('Screenshot Optimization', () => {
    test('WebP files are smaller than PNG fallbacks', async ({ page }) => {
      const webpResponse = await page.request.get('/images/screenshots/hero/hero-main.webp');
      const pngResponse = await page.request.get('/images/screenshots/hero/hero-main.png');

      const webpSize = Number(webpResponse.headers()['content-length'] || 0);
      const pngSize = Number(pngResponse.headers()['content-length'] || 0);

      // WebP should be significantly smaller (at least 50% smaller)
      expect(webpSize).toBeLessThan(pngSize * 0.5);
    });

    test('screenshots are reasonably sized for web', async ({ page }) => {
      const response = await page.request.get('/images/screenshots/hero/hero-main.webp');
      const size = Number(response.headers()['content-length'] || 0);

      // Hero image should be under 100KB for good performance
      expect(size).toBeLessThan(100 * 1024);
    });
  });

  test.describe('Accessibility', () => {
    test('all homepage images have alt text', async ({ page }) => {
      await page.goto('/');

      // Check hero screenshot
      const heroImg = page.getByTestId('hero-screenshot').locator('img');
      await expect(heroImg).toHaveAttribute('alt', /.+/);

      // Check solution screenshot
      const solutionImg = page.getByTestId('solution-screenshot').locator('img');
      await solutionImg.scrollIntoViewIfNeeded();
      await expect(solutionImg).toHaveAttribute('alt', /.+/);
    });

    test('feature page screenshot has alt text', async ({ page }) => {
      await page.goto('/features/studio');

      const img = page.getByTestId('feature-detail-screenshot-container').locator('img');
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveAttribute('alt', /.+/);
    });

    test('screenshots have async decoding for performance', async ({ page }) => {
      await page.goto('/');

      const heroImg = page.getByTestId('hero-screenshot').locator('img');
      await expect(heroImg).toHaveAttribute('decoding', 'async');
    });
  });
});
