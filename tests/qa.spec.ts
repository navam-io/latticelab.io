import { test, expect } from '@playwright/test';

/**
 * Final QA Tests
 *
 * Validates overall site quality:
 * - All critical pages load
 * - No JavaScript errors
 * - Key navigation works
 * - Mobile responsiveness
 * - Accessibility basics
 */
test.describe('Final QA', () => {
  test.describe('Critical Pages Load', () => {
    const criticalPages = [
      { path: '/', name: 'Homepage' },
      { path: '/features', name: 'Features Index' },
      { path: '/features/sources', name: 'Sources Feature' },
      { path: '/features/lab', name: 'Lab Feature' },
      { path: '/features/studio', name: 'Studio Feature' },
      { path: '/features/blueprints', name: 'Blueprints Feature' },
      { path: '/tools', name: 'Tools Hub' },
      { path: '/tools/memory-calculator', name: 'Memory Calculator' },
      { path: '/blog', name: 'Blog' },
      { path: '/docs/getting-started/quickstart', name: 'Docs Quickstart' },
    ];

    for (const page of criticalPages) {
      test(`${page.name} loads without error`, async ({ page: browserPage }) => {
        const errors: string[] = [];
        browserPage.on('pageerror', (error) => {
          errors.push(error.message);
        });

        const response = await browserPage.goto(page.path);
        expect(response?.status()).toBeLessThan(400);
        expect(errors).toHaveLength(0);
      });
    }
  });

  test.describe('No Console Errors', () => {
    test('homepage has no JavaScript errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => {
        errors.push(error.message);
      });

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      expect(errors).toHaveLength(0);
    });

    test('features page has no JavaScript errors', async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => {
        errors.push(error.message);
      });

      await page.goto('/features');
      await page.waitForLoadState('networkidle');

      expect(errors).toHaveLength(0);
    });
  });

  test.describe('Navigation Works', () => {
    test('can navigate to features page', async ({ page }) => {
      await page.goto('/features');

      await expect(page).toHaveURL('/features');
      const hero = page.getByTestId('features-hero');
      await expect(hero).toBeVisible();
    });

    test('can navigate to tools page', async ({ page }) => {
      await page.goto('/tools');

      await expect(page).toHaveURL('/tools');
      const content = page.locator('main');
      await expect(content).toBeVisible();
    });

    test('pricing section anchor works', async ({ page }) => {
      await page.goto('/#pricing');

      const pricing = page.getByTestId('homepage-pricing');
      await expect(pricing).toBeVisible();
    });
  });

  test.describe('Mobile Responsiveness', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
    });

    test('homepage renders on mobile', async ({ page }) => {
      await page.goto('/');

      const hero = page.getByTestId('homepage-hero');
      await expect(hero).toBeVisible();

      const pricing = page.getByTestId('homepage-pricing');
      await expect(pricing).toBeVisible();
    });

    test('mobile menu opens', async ({ page }) => {
      await page.goto('/');

      const hamburger = page.getByTestId('header-mobile-trigger');
      await expect(hamburger).toBeVisible();

      await hamburger.click();

      const mobilePanel = page.getByTestId('header-mobile-panel');
      await expect(mobilePanel).toBeVisible();
    });

    test('features page renders on mobile', async ({ page }) => {
      await page.goto('/features');

      const hero = page.getByTestId('features-hero');
      await expect(hero).toBeVisible();
    });
  });

  test.describe('Accessibility Basics', () => {
    test('homepage has proper heading hierarchy', async ({ page }) => {
      await page.goto('/');

      // Should have exactly one h1
      const h1s = page.locator('h1');
      await expect(h1s).toHaveCount(1);

      // h1 should be visible
      await expect(h1s.first()).toBeVisible();
    });

    test('all images have alt text', async ({ page }) => {
      await page.goto('/');

      const images = page.locator('img');
      const count = await images.count();

      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        expect(alt, `Image ${i} should have alt text`).toBeTruthy();
      }
    });

    test('page has lang attribute', async ({ page }) => {
      await page.goto('/');

      const html = page.locator('html');
      const lang = await html.getAttribute('lang');
      expect(lang).toBe('en');
    });

    test('focus is visible on interactive elements', async ({ page }) => {
      await page.goto('/');

      // Tab to first focusable element
      await page.keyboard.press('Tab');

      // Check that something is focused
      const focused = page.locator(':focus');
      await expect(focused).toBeVisible();
    });
  });

  test.describe('Legal Pages Exist', () => {
    test('privacy policy page loads', async ({ page }) => {
      const response = await page.goto('/docs/resources/privacy');
      expect(response?.status()).toBeLessThan(400);

      await expect(page.locator('h1')).toContainText('Privacy');
    });

    test('terms of service page loads', async ({ page }) => {
      const response = await page.goto('/docs/resources/terms');
      expect(response?.status()).toBeLessThan(400);

      await expect(page.locator('h1')).toContainText('Terms');
    });
  });

  test.describe('SEO Basics', () => {
    test('homepage has meta description', async ({ page }) => {
      await page.goto('/');

      const metaDescription = page.locator('meta[name="description"]');
      const content = await metaDescription.getAttribute('content');
      expect(content).toBeTruthy();
      expect(content?.length).toBeGreaterThan(50);
    });

    test('homepage has title', async ({ page }) => {
      await page.goto('/');

      const title = await page.title();
      expect(title).toContain('Lattice');
    });

    test('homepage has og:title', async ({ page }) => {
      await page.goto('/');

      const ogTitle = page.locator('meta[property="og:title"]');
      const content = await ogTitle.getAttribute('content');
      expect(content).toBeTruthy();
    });
  });
});
