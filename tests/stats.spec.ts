import { test, expect } from '@playwright/test';

/**
 * Stats Validation Tests
 *
 * Validates that stats across the site match the source of truth:
 * - 34 Blueprints (from Lattice backend seed_blueprints.py)
 * - 29 Models (from Lattice backend seed_registries.py)
 * - 15 Accelerators (from Lattice backend seed_registries.py)
 * - 6 Vendors: Anthropic, OpenAI, AWS, Google Cloud, NVIDIA, Azure
 */
test.describe('Stats Validation', () => {
  test.describe('Homepage Stats', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');
    });

    test('vendor ticker displays correct stats', async ({ page }) => {
      const ticker = page.locator('text=34 Blueprints | 29 Models | 15 Accelerators');
      await expect(ticker).toBeVisible();
    });

    test('feature grid shows 34 blueprints', async ({ page }) => {
      const blueprintsCard = page.getByTestId('homepage-features-blueprints');
      await expect(blueprintsCard).toContainText('34');
    });

    test('pricing mentions 34 blueprints', async ({ page }) => {
      const pricingFeatures = page.getByTestId('homepage-pricing-features');
      await expect(pricingFeatures).toContainText('34 curated vendor blueprints');
    });
  });

  test.describe('Blueprints Feature Page Stats', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/blueprints');
      await page.waitForLoadState('domcontentloaded');
    });

    test('hero headline shows 34 blueprints and 6 vendors', async ({ page }) => {
      const headline = page.getByTestId('blueprints-hero-headline');
      await expect(headline).toContainText('34 Blueprints');
      await expect(headline).toContainText('6 Vendors');
    });

    test('tech specs show correct vendor counts', async ({ page }) => {
      const specsSection = page.getByTestId('blueprints-specs');
      await expect(specsSection).toContainText('Anthropic');
      await expect(specsSection).toContainText('3 Blueprints');
      await expect(specsSection).toContainText('AWS');
      await expect(specsSection).toContainText('8 Blueprints');
    });
  });

  test.describe('Features Index Page Stats', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features');
      await page.waitForLoadState('domcontentloaded');
    });

    test('blueprints card shows 34 blueprints', async ({ page }) => {
      const blueprintsCard = page.getByTestId('features-blueprints-card');
      await expect(blueprintsCard).toContainText('34');
    });
  });

  test.describe('Tool Page Stats', () => {
    test('model registry shows 29 models', async ({ page }) => {
      await page.goto('/tools/model-registry');
      await page.waitForLoadState('domcontentloaded');

      // Check page title or description
      const content = page.locator('main');
      await expect(content).toContainText('29');
    });

    test('accelerator registry shows 15 accelerators', async ({ page }) => {
      await page.goto('/tools/accelerator-registry');
      await page.waitForLoadState('domcontentloaded');

      // Check page title or description
      const content = page.locator('main');
      await expect(content).toContainText('15');
    });
  });

  test.describe('Header Navigation Stats', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');
    });

    test('header blueprints badge shows 34', async ({ page }) => {
      // Open navigation menu on desktop
      const featuresLink = page.locator('nav').getByText('Features').first();
      if (await featuresLink.isVisible()) {
        await featuresLink.hover();
        // Look for badge in dropdown
        const badge = page.locator('text=34').first();
        await expect(badge).toBeAttached();
      }
    });
  });

  test.describe('FAQ Stats', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('domcontentloaded');
    });

    test('FAQ mentions 34 blueprints', async ({ page }) => {
      // Scroll to FAQ section
      const faq = page.locator('section').filter({ hasText: 'Frequently Asked Questions' });
      await faq.scrollIntoViewIfNeeded();

      // Click on the blueprints question
      const blueprintsQuestion = page.locator('text=What are blueprints?').first();
      if (await blueprintsQuestion.isVisible()) {
        await blueprintsQuestion.click();
        // Look for the answer that includes vendor names
        const answer = page.getByText('Blueprints are curated knowledge bundles');
        await expect(answer).toContainText('34 blueprints');
      }
    });
  });
});
