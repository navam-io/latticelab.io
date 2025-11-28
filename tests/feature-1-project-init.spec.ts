import { test, expect } from '@playwright/test';

/**
 * Feature Slice 1: Project Initialization Tests
 *
 * These tests verify that the Astro 5.x project is correctly initialized
 * with all required dependencies and configurations.
 */

test.describe('Feature 1: Project Initialization', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Lattice/);
  });

  test('homepage displays site name', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toContainText('Lattice');
  });

  test('homepage displays tagline', async ({ page }) => {
    await page.goto('/');
    // The tagline includes "Agentic AI Lab Assistant for Research Engineers"
    const tagline = page.getByText(/Agentic AI Lab Assistant/);
    await expect(tagline.first()).toBeVisible();
  });

  test('homepage displays value proposition', async ({ page }) => {
    await page.goto('/');
    // Updated to match new Hero section messaging
    const valueText = page.getByText(/Stop spending weeks/);
    await expect(valueText).toBeVisible();
  });

  test('primary CTA button is visible', async ({ page }) => {
    await page.goto('/');
    const ctaButton = page.getByRole('link', { name: /Buy Lattice.*\$99/i });
    await expect(ctaButton).toBeVisible();
  });

  test('secondary CTA button is visible', async ({ page }) => {
    await page.goto('/');
    const secondaryButton = page.getByRole('link', { name: /View Features/i });
    await expect(secondaryButton).toBeVisible();
  });

  test('page has correct meta description', async ({ page }) => {
    await page.goto('/');
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toContain('Agentic AI Lab Assistant');
  });

  test('page has Open Graph tags', async ({ page }) => {
    await page.goto('/');
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
    expect(ogTitle).toContain('Lattice');
  });

  test('page has correct canonical URL', async ({ page }) => {
    await page.goto('/');
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBeTruthy();
  });

  test('page loads Geist font styles', async ({ page }) => {
    await page.goto('/');
    // Check that custom CSS variables are defined
    const fontFamily = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--font-sans');
    });
    expect(fontFamily).toContain('Geist');
  });

  test('design system CSS variables are loaded', async ({ page }) => {
    await page.goto('/');
    const bgColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-background');
    });
    expect(bgColor.trim()).not.toBe('');
  });

  test('Tailwind CSS is working', async ({ page }) => {
    await page.goto('/');
    // Check that Tailwind classes are being applied
    const heading = page.locator('h1');
    const classList = await heading.getAttribute('class');
    expect(classList).toContain('text-');
  });

  test('page has no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    // Filter out known acceptable errors (like favicon 404 in dev)
    const criticalErrors = errors.filter(
      (e) => !e.includes('favicon') && !e.includes('404')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('page renders without JavaScript errors', async ({ page }) => {
    let hasJsError = false;
    page.on('pageerror', () => {
      hasJsError = true;
    });

    await page.goto('/');
    expect(hasJsError).toBe(false);
  });
});

test.describe('Responsive Design', () => {
  test('homepage is responsive on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('homepage is responsive on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });

  test('homepage is responsive on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test('page has lang attribute', async ({ page }) => {
    await page.goto('/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en');
  });

  test('page has proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });

  test('links are keyboard accessible', async ({ page }) => {
    await page.goto('/');
    // Tab to first link and verify it's focusable
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName.toLowerCase();
    });
    expect(focusedElement).toBe('a');
  });
});
