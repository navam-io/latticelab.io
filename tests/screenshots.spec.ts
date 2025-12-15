import { test, expect } from '@playwright/test';

/**
 * Screenshot Validation Tests
 *
 * Validates that all product screenshots load correctly:
 * - Feature page screenshots (Sources, Lab, Studio, Blueprints)
 * - Tool page screenshots
 * - Homepage hero images
 */
test.describe('Screenshot Validation', () => {
  test.describe('Feature Page Screenshots', () => {
    test('Sources panel screenshots load', async ({ page }) => {
      await page.goto('/features/sources');

      // Check primary product image
      const productImage = page.locator('img[src*="view-source"]').first();
      await expect(productImage).toBeVisible();

      // Verify image loads without error
      const naturalWidth = await productImage.evaluate(
        (img: HTMLImageElement) => img.naturalWidth
      );
      expect(naturalWidth).toBeGreaterThan(0);
    });

    test('Lab panel screenshots load', async ({ page }) => {
      await page.goto('/features/lab');

      const productImage = page.locator('img[src*="chat-with-ai"]').first();
      await expect(productImage).toBeVisible();

      const naturalWidth = await productImage.evaluate(
        (img: HTMLImageElement) => img.naturalWidth
      );
      expect(naturalWidth).toBeGreaterThan(0);
    });

    test('Studio screenshots load', async ({ page }) => {
      await page.goto('/features/studio');

      const productImage = page.locator('img[src*="view-artifact"]').first();
      await expect(productImage).toBeVisible();

      const naturalWidth = await productImage.evaluate(
        (img: HTMLImageElement) => img.naturalWidth
      );
      expect(naturalWidth).toBeGreaterThan(0);
    });

    test('Blueprints gallery screenshots load', async ({ page }) => {
      await page.goto('/features/blueprints');

      const productImage = page.locator('img[src*="browse-blueprints"]').first();
      await expect(productImage).toBeVisible();

      const naturalWidth = await productImage.evaluate(
        (img: HTMLImageElement) => img.naturalWidth
      );
      expect(naturalWidth).toBeGreaterThan(0);
    });
  });

  test.describe('Tool Page Screenshots', () => {
    const tools = [
      { slug: 'memory-calculator', image: 'memory-calculator' },
      { slug: 'parallelism-advisor', image: 'parallelism-advisor' },
      { slug: 'quantization-advisor', image: 'quantization-advisor' },
      { slug: 'tco-calculator', image: 'tco-calculator' },
      { slug: 'spot-advisor', image: 'spot-advisor' },
      { slug: 'model-registry', image: 'model-registry' },
      { slug: 'accelerator-registry', image: 'accelerator-registry' },
      { slug: 'live-data-feeds', image: 'live-data-feeds' },
    ];

    for (const tool of tools) {
      test(`${tool.slug} screenshot loads`, async ({ page }) => {
        await page.goto(`/tools/${tool.slug}`);

        const productImage = page.locator(`img[src*="${tool.image}"]`).first();
        await expect(productImage).toBeVisible();

        const naturalWidth = await productImage.evaluate(
          (img: HTMLImageElement) => img.naturalWidth
        );
        expect(naturalWidth).toBeGreaterThan(0);
      });
    }
  });

  test.describe('Homepage Screenshots', () => {
    test('hero image loads', async ({ page }) => {
      await page.goto('/');

      const heroImage = page.locator('img[src*="hero-lattice-app"]');
      await expect(heroImage).toBeVisible();

      const naturalWidth = await heroImage.evaluate(
        (img: HTMLImageElement) => img.naturalWidth
      );
      expect(naturalWidth).toBeGreaterThan(0);
    });

    test('feature grid screenshots load', async ({ page }) => {
      await page.goto('/');

      // Check that at least one feature screenshot is visible in the grid
      const featureImages = page.locator(
        '[data-testid="homepage-features"] img[src*="/images/journeys/"]'
      );
      const count = await featureImages.count();
      expect(count).toBeGreaterThan(0);

      // Verify first image loads
      const firstImage = featureImages.first();
      await expect(firstImage).toBeVisible();
    });
  });

  test.describe('Features Index Screenshots', () => {
    test('feature cards show screenshots', async ({ page }) => {
      await page.goto('/features');

      // Check that feature cards have images
      const featureImages = page.locator('img[src*="/images/journeys/"]');
      const count = await featureImages.count();
      expect(count).toBeGreaterThan(0);
    });
  });
});
