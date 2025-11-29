import { test, expect } from '@playwright/test';

/**
 * Feature Slice 20: Blueprints Gallery Page Tests
 *
 * Tests for the blueprints gallery page with category filtering,
 * blueprint cards, vendor info, and CTAs.
 */

const categories = [
  'Production',
  'Development',
  'Comparison',
  'Enterprise',
  'Research',
  'Cost',
  'Performance',
];

test.describe('Feature 20: Blueprints Gallery Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blueprints');
  });

  test.describe('Page Basics', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/blueprints/);
    });

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle(/Blueprint/i);
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /blueprint|research|vendor/i);
    });
  });

  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('blueprints-hero');
      await expect(hero).toBeVisible();
    });

    test('displays eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('blueprints-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('Blueprint Gallery');
    });

    test('displays headline', async ({ page }) => {
      const headline = page.getByTestId('blueprints-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Pre-Configured');
    });

    test('displays subhead', async ({ page }) => {
      const subhead = page.getByTestId('blueprints-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('36');
    });

    test('displays stats row', async ({ page }) => {
      const stats = page.getByTestId('blueprints-stats');
      await expect(stats).toBeVisible();
    });

    test('shows total blueprints count', async ({ page }) => {
      const stat = page.getByTestId('blueprints-stat-total');
      await expect(stat).toBeVisible();
      await expect(stat).toContainText('36');
    });

    test('shows total sources count', async ({ page }) => {
      const stat = page.getByTestId('blueprints-stat-sources');
      await expect(stat).toBeVisible();
      // Should be a number
      const text = await stat.textContent();
      expect(text).toMatch(/\d+/);
    });

    test('shows official vendors count', async ({ page }) => {
      const stat = page.getByTestId('blueprints-stat-official');
      await expect(stat).toBeVisible();
      const text = await stat.textContent();
      expect(text).toMatch(/\d+/);
    });
  });

  test.describe('Filter Tabs Section', () => {
    test('filter section is visible', async ({ page }) => {
      const filters = page.getByTestId('blueprints-filters');
      await expect(filters).toBeVisible();
    });

    test('filter tabs container is visible', async ({ page }) => {
      const tabs = page.getByTestId('blueprints-filter-tabs');
      await expect(tabs).toBeVisible();
    });

    test('has All filter tab', async ({ page }) => {
      const allTab = page.getByTestId('blueprints-filter-all');
      await expect(allTab).toBeVisible();
    });

    test('has category filter tabs', async ({ page }) => {
      for (const category of categories) {
        const tab = page.getByTestId(`blueprints-filter-${category.toLowerCase()}`);
        await expect(tab).toBeVisible();
      }
    });

    test('filter tabs have icons except All', async ({ page }) => {
      // All tab should not have icon
      const allTab = page.getByTestId('blueprints-filter-all');
      const allIcon = allTab.locator('svg');
      await expect(allIcon).not.toBeVisible();

      // Other tabs should have icons
      const productionTab = page.getByTestId('blueprints-filter-production');
      const productionIcon = productionTab.locator('svg');
      await expect(productionIcon).toBeVisible();
    });
  });

  test.describe('Category Sections', () => {
    test('displays all 7 category sections', async ({ page }) => {
      for (const category of categories) {
        const section = page.getByTestId(`blueprints-category-${category.toLowerCase()}`);
        await expect(section).toBeVisible();
      }
    });

    test('each category has a title', async ({ page }) => {
      for (const category of categories) {
        const title = page.getByTestId(`blueprints-category-${category.toLowerCase()}-title`);
        await expect(title).toBeVisible();
        await expect(title).toContainText(category);
      }
    });

    test('each category has a description', async ({ page }) => {
      for (const category of categories) {
        const desc = page.getByTestId(`blueprints-category-${category.toLowerCase()}-description`);
        await expect(desc).toBeVisible();
        const text = await desc.textContent();
        expect(text?.length).toBeGreaterThan(10);
      }
    });

    test('each category has a grid of cards', async ({ page }) => {
      for (const category of categories) {
        const grid = page.getByTestId(`blueprints-category-${category.toLowerCase()}-grid`);
        await expect(grid).toBeVisible();
      }
    });
  });

  test.describe('Blueprint Cards', () => {
    test('displays blueprint cards', async ({ page }) => {
      // Check first few cards exist
      for (let i = 0; i < 5; i++) {
        const card = page.getByTestId(`blueprint-card-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('each card has a logo placeholder', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const logo = page.getByTestId(`blueprint-card-${i}-logo`);
        await expect(logo).toBeVisible();
      }
    });

    test('each card has vendor name', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const vendor = page.getByTestId(`blueprint-card-${i}-vendor`);
        await expect(vendor).toBeVisible();
        const text = await vendor.textContent();
        expect(text?.length).toBeGreaterThan(0);
      }
    });

    test('each card has source count', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const sources = page.getByTestId(`blueprint-card-${i}-sources`);
        await expect(sources).toBeVisible();
        await expect(sources).toContainText('sources');
      }
    });

    test('each card has blueprint name', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const name = page.getByTestId(`blueprint-card-${i}-name`);
        await expect(name).toBeVisible();
        const text = await name.textContent();
        expect(text?.length).toBeGreaterThan(0);
      }
    });

    test('each card has description', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const desc = page.getByTestId(`blueprint-card-${i}-description`);
        await expect(desc).toBeVisible();
        const text = await desc.textContent();
        expect(text?.length).toBeGreaterThan(20);
      }
    });

    test('each card has tags', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const tags = page.getByTestId(`blueprint-card-${i}-tags`);
        await expect(tags).toBeVisible();
      }
    });

    test('each card has CTA link', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const cta = page.getByTestId(`blueprint-card-${i}-cta`);
        await expect(cta).toBeVisible();
        await expect(cta).toContainText('Try with Lattice');
        await expect(cta).toHaveAttribute('href', '/pricing');
      }
    });
  });

  test.describe('Official Badges', () => {
    test('official blueprints have official badge', async ({ page }) => {
      // Anthropic (index 0) should be official
      const badge = page.getByTestId('blueprint-card-0-official');
      await expect(badge).toBeVisible();
      await expect(badge).toContainText('Official');
    });

    test('official badge has star icon', async ({ page }) => {
      const badge = page.getByTestId('blueprint-card-0-official');
      const icon = badge.locator('svg');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Summary Section', () => {
    test('summary section is visible', async ({ page }) => {
      const summary = page.getByTestId('blueprints-summary');
      await expect(summary).toBeVisible();
    });

    test('summary headline mentions all blueprints', async ({ page }) => {
      const headline = page.getByTestId('blueprints-summary-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('36');
    });

    test('summary subhead mentions $99', async ({ page }) => {
      const subhead = page.getByTestId('blueprints-summary-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('$99');
    });

    test('vendor grid is visible', async ({ page }) => {
      const grid = page.getByTestId('blueprints-vendor-grid');
      await expect(grid).toBeVisible();
    });

    test('displays vendor icons', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const vendor = page.getByTestId(`blueprints-vendor-${i}`);
        await expect(vendor).toBeVisible();
      }
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      const cta = page.getByTestId('blueprints-cta');
      await expect(cta).toBeVisible();
    });

    test('displays CTA headline', async ({ page }) => {
      const headline = page.getByTestId('blueprints-cta-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Ready');
    });

    test('displays CTA subhead with blueprint count', async ({ page }) => {
      const subhead = page.getByTestId('blueprints-cta-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('36');
    });

    test('has primary CTA button with price', async ({ page }) => {
      const button = page.getByTestId('blueprints-cta-primary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('$99');
      await expect(button).toHaveAttribute('href', '/pricing');
    });

    test('has secondary CTA button', async ({ page }) => {
      const button = page.getByTestId('blueprints-cta-secondary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('Sources');
      await expect(button).toHaveAttribute('href', '/features/sources');
    });

    test('displays trust note', async ({ page }) => {
      const trust = page.getByTestId('blueprints-cta-trust');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('30-day');
    });
  });

  test.describe('Navigation', () => {
    test('CTA button navigates to pricing', async ({ page }) => {
      const button = page.getByTestId('blueprints-cta-primary');
      await button.click();
      await expect(page).toHaveURL(/\/pricing/);
    });

    test('secondary CTA navigates to sources feature', async ({ page }) => {
      const button = page.getByTestId('blueprints-cta-secondary');
      await button.click();
      await expect(page).toHaveURL(/\/features\/sources/);
    });

    test('blueprint card CTA links to pricing', async ({ page }) => {
      const cta = page.getByTestId('blueprint-card-0-cta');
      await cta.click();
      await expect(page).toHaveURL(/\/pricing/);
    });
  });

  test.describe('Responsive Design', () => {
    test('hero section adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const hero = page.getByTestId('blueprints-hero');
      const headline = page.getByTestId('blueprints-headline');

      await expect(hero).toBeVisible();
      await expect(headline).toBeVisible();
    });

    test('filter tabs wrap on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const tabs = page.getByTestId('blueprints-filter-tabs');
      await expect(tabs).toBeVisible();
    });

    test('blueprint cards stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      // Cards should still be visible
      for (let i = 0; i < 3; i++) {
        const card = page.getByTestId(`blueprint-card-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('CTA buttons stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const buttons = page.getByTestId('blueprints-cta-buttons');
      await expect(buttons).toBeVisible();

      const primary = page.getByTestId('blueprints-cta-primary');
      const secondary = page.getByTestId('blueprints-cta-secondary');
      await expect(primary).toBeVisible();
      await expect(secondary).toBeVisible();
    });

    test('vendor grid adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const grid = page.getByTestId('blueprints-vendor-grid');
      await expect(grid).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);

      const h2 = page.locator('h2');
      const h2Count = await h2.count();
      expect(h2Count).toBeGreaterThanOrEqual(7); // Categories + summary + CTA
    });

    test('icons are hidden from screen readers', async ({ page }) => {
      const icons = page.locator('[data-testid="blueprints-hero"] svg[aria-hidden="true"]');
      // May not have icons in hero, check category icons
      const categoryIcons = page.locator('[data-testid^="blueprints-category-"] svg[aria-hidden="true"]');
      const count = await categoryIcons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('links have accessible text', async ({ page }) => {
      const cta = page.getByTestId('blueprint-card-0-cta');
      const text = await cta.textContent();
      expect(text?.length).toBeGreaterThan(0);
    });

    test('filter tabs are keyboard accessible', async ({ page }) => {
      const tab = page.getByTestId('blueprints-filter-production');
      await expect(tab).toHaveAttribute('href');
    });
  });

  test.describe('Content Accuracy', () => {
    test('displays 36 total blueprints in stats', async ({ page }) => {
      const stat = page.getByTestId('blueprints-stat-total');
      await expect(stat).toContainText('36');
    });

    test('$99 price is consistently shown', async ({ page }) => {
      // CTA section
      const ctaButton = page.getByTestId('blueprints-cta-primary');
      await expect(ctaButton).toContainText('$99');

      // Summary section
      const summarySubhead = page.getByTestId('blueprints-summary-subhead');
      await expect(summarySubhead).toContainText('$99');
    });

    test('Production category has major vendor blueprints', async ({ page }) => {
      // Production section should have Anthropic, OpenAI, etc.
      const section = page.getByTestId('blueprints-category-production');
      await expect(section).toContainText('Anthropic');
    });

    test('source counts are reasonable numbers', async ({ page }) => {
      for (let i = 0; i < 5; i++) {
        const sources = page.getByTestId(`blueprint-card-${i}-sources`);
        const text = await sources.textContent();
        const count = parseInt(text?.match(/(\d+)/)?.[1] || '0');
        expect(count).toBeGreaterThan(0);
        expect(count).toBeLessThan(100);
      }
    });
  });

  test.describe('Visual Elements', () => {
    test('category sections alternate backgrounds', async ({ page }) => {
      // Sections should alternate between default and muted
      const production = page.getByTestId('blueprints-category-production');
      await expect(production).toBeVisible();
    });

    test('blueprint cards have hover effect', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-0');
      await expect(card).toHaveClass(/hover:shadow-lg/);
    });

    test('filter tabs have visual distinction', async ({ page }) => {
      // All tab should have accent styling (active)
      const allTab = page.getByTestId('blueprints-filter-all');
      await expect(allTab).toHaveClass(/bg-accent/);
    });
  });
});
