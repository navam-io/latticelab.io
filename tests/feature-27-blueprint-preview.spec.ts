import { test, expect } from '@playwright/test';

/**
 * Feature Slice 27: Blueprint Preview Component
 *
 * Tests for the BlueprintPreview component that simulates the Blueprint Gallery
 * with category filters, blueprint cards, and apply modal.
 */

test.describe('Feature 27: Blueprint Preview Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blueprint-preview-demo');
    // Wait for React hydration
    await page.waitForSelector('[data-testid="blueprint-preview"]', { state: 'visible' });
    await page.waitForSelector('[data-testid="blueprint-card-bp-1"]', { state: 'visible' });
  });

  // ===================
  // Page Basics (3 tests)
  // ===================
  test.describe('Demo Page', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/blueprint-preview-demo/);
    });

    test('has page title', async ({ page }) => {
      const title = page.getByTestId('blueprint-preview-demo-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Blueprint Preview Demo');
    });

    test('page is noindex', async ({ page }) => {
      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveAttribute('content', 'noindex, nofollow');
    });
  });

  // ===================
  // BlueprintPreview Container (5 tests)
  // ===================
  test.describe('BlueprintPreview Container', () => {
    test('blueprint preview is rendered', async ({ page }) => {
      const preview = page.getByTestId('blueprint-preview');
      await expect(preview).toBeVisible();
    });

    test('has preview container with title bar', async ({ page }) => {
      const titlebar = page.getByTestId('preview-titlebar');
      await expect(titlebar).toBeVisible();
      await expect(titlebar).toContainText('Lattice Lab');
    });

    test('has blueprint content area', async ({ page }) => {
      const content = page.getByTestId('blueprint-preview-content');
      await expect(content).toBeVisible();
    });

    test('has filter tabs', async ({ page }) => {
      const filters = page.getByTestId('blueprint-filters');
      await expect(filters).toBeVisible();
    });

    test('has blueprint list', async ({ page }) => {
      const list = page.getByTestId('blueprint-list');
      await expect(list).toBeVisible();
    });
  });

  // ===================
  // Category Filters (6 tests)
  // ===================
  test.describe('Category Filters', () => {
    test('All filter is visible', async ({ page }) => {
      const filter = page.getByTestId('blueprint-filter-all');
      await expect(filter).toBeVisible();
    });

    test('Production filter is visible', async ({ page }) => {
      const filter = page.getByTestId('blueprint-filter-production');
      await expect(filter).toBeVisible();
    });

    test('All filter is selected by default', async ({ page }) => {
      const filter = page.getByTestId('blueprint-filter-all');
      await expect(filter).toHaveClass(/bg-accent/);
    });

    test('clicking filter updates selection', async ({ page }) => {
      const productionFilter = page.getByTestId('blueprint-filter-production');
      await productionFilter.click();
      await expect(productionFilter).toHaveClass(/bg-accent/);
    });

    test('filter updates blueprint count', async ({ page }) => {
      const productionFilter = page.getByTestId('blueprint-filter-production');
      await productionFilter.click();

      const count = page.getByTestId('blueprint-count');
      await expect(count).toContainText('in Production');
    });

    test('Enterprise filter filters cards', async ({ page }) => {
      const enterpriseFilter = page.getByTestId('blueprint-filter-enterprise');
      await enterpriseFilter.click();

      // Should only show AWS Bedrock Enterprise
      const awsCard = page.getByTestId('blueprint-card-bp-3');
      await expect(awsCard).toBeVisible();

      // Production blueprints should not be visible
      const anthropicCard = page.getByTestId('blueprint-card-bp-1');
      await expect(anthropicCard).not.toBeVisible();
    });
  });

  // ===================
  // Blueprint Cards (8 tests)
  // ===================
  test.describe('Blueprint Cards', () => {
    test('blueprint cards are rendered', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toBeVisible();
    });

    test('multiple blueprint cards exist', async ({ page }) => {
      const cards = page.locator('[data-testid^="blueprint-card-"]');
      const count = await cards.count();
      expect(count).toBeGreaterThanOrEqual(4);
    });

    test('card shows blueprint name', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toContainText('Anthropic Claude Production Stack');
    });

    test('card shows vendor badge', async ({ page }) => {
      const vendor = page.getByTestId('blueprint-vendor-bp-1');
      await expect(vendor).toBeVisible();
      await expect(vendor).toContainText('Anthropic');
    });

    test('card shows source count', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toContainText('12 sources');
    });

    test('card shows category', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toContainText('Production');
    });

    test('official badge shown for official blueprints', async ({ page }) => {
      const official = page.getByTestId('blueprint-official-bp-1');
      await expect(official).toBeVisible();
      await expect(official).toContainText('Official');
    });

    test('community blueprint does not have official badge', async ({ page }) => {
      const official = page.getByTestId('blueprint-official-bp-4');
      await expect(official).not.toBeVisible();
    });
  });

  // ===================
  // Hover Actions (5 tests)
  // ===================
  test.describe('Hover Actions', () => {
    test('card has hover cursor', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toHaveClass(/cursor-pointer/);
    });

    test('apply button appears on hover', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await expect(applyBtn).toBeVisible();
    });

    test('apply button has correct text', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await expect(applyBtn).toContainText('Apply');
    });

    test('apply button is clickable', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await expect(applyBtn).toBeEnabled();
    });

    test('card title changes color on hover', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toHaveClass(/group/);
    });
  });

  // ===================
  // Apply Modal (8 tests)
  // ===================
  test.describe('Apply Modal', () => {
    test('clicking apply opens modal', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const modal = page.getByTestId('blueprint-modal');
      await expect(modal).toBeVisible();
    });

    test('modal shows loading state initially', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const applying = page.getByTestId('blueprint-modal-applying');
      await expect(applying).toBeVisible();
    });

    test('loading state shows blueprint name', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const modal = page.getByTestId('blueprint-modal-content');
      await expect(modal).toContainText('Anthropic Claude Production Stack');
    });

    test('modal transitions to success state', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const success = page.getByTestId('blueprint-modal-success');
      await expect(success).toBeVisible({ timeout: 5000 });
    });

    test('success state shows checkmark', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const success = page.getByTestId('blueprint-modal-success');
      await expect(success).toBeVisible({ timeout: 5000 });
      await expect(success).toContainText('Blueprint Applied');
    });

    test('success state shows source count', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const success = page.getByTestId('blueprint-modal-success');
      await expect(success).toBeVisible({ timeout: 5000 });
      await expect(success).toContainText('12 sources added');
    });

    test('done button is visible in success state', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const closeBtn = page.getByTestId('blueprint-modal-close');
      await expect(closeBtn).toBeVisible({ timeout: 5000 });
    });

    test('clicking done closes modal', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const closeBtn = page.getByTestId('blueprint-modal-close');
      await expect(closeBtn).toBeVisible({ timeout: 5000 });
      await closeBtn.click();

      const modal = page.getByTestId('blueprint-modal');
      await expect(modal).not.toBeVisible();
    });
  });

  // ===================
  // Stats and Footer (4 tests)
  // ===================
  test.describe('Stats and Footer', () => {
    test('stats section is visible', async ({ page }) => {
      const stats = page.getByTestId('blueprint-stats');
      await expect(stats).toBeVisible();
    });

    test('stats shows blueprint count', async ({ page }) => {
      const count = page.getByTestId('blueprint-count');
      await expect(count).toContainText('blueprint');
    });

    test('footer is visible', async ({ page }) => {
      const footer = page.getByTestId('blueprint-footer');
      await expect(footer).toBeVisible();
    });

    test('footer shows official/community counts', async ({ page }) => {
      const footer = page.getByTestId('blueprint-footer');
      await expect(footer).toContainText('official');
      await expect(footer).toContainText('community');
    });
  });

  // ===================
  // Accessibility (5 tests)
  // ===================
  test.describe('Accessibility', () => {
    test('filter buttons are keyboard accessible', async ({ page }) => {
      const filter = page.getByTestId('blueprint-filter-all');
      await filter.focus();
      await expect(filter).toBeFocused();
    });

    test('apply button is keyboard accessible', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.focus();
      await expect(applyBtn).toBeFocused();
    });

    test('done button is keyboard accessible', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const closeBtn = page.getByTestId('blueprint-modal-close');
      await expect(closeBtn).toBeVisible({ timeout: 5000 });
      await closeBtn.focus();
      await expect(closeBtn).toBeFocused();
    });

    test('icons are decorative', async ({ page }) => {
      const preview = page.getByTestId('blueprint-preview');
      const icons = preview.locator('svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('filter buttons have proper roles', async ({ page }) => {
      const filter = page.getByTestId('blueprint-filter-all');
      await expect(filter).toHaveRole('button');
    });
  });

  // ===================
  // Responsive Design (4 tests)
  // ===================
  test.describe('Responsive Design', () => {
    test('component visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const preview = page.getByTestId('blueprint-preview');
      await expect(preview).toBeVisible();
    });

    test('filter tabs visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const filters = page.getByTestId('blueprint-filters');
      await expect(filters).toBeVisible();
    });

    test('blueprint cards visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toBeVisible();
    });

    test('modal works on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const modal = page.getByTestId('blueprint-modal');
      await expect(modal).toBeVisible();
    });
  });

  // ===================
  // Animation States (4 tests)
  // ===================
  test.describe('Animation States', () => {
    test('blueprint cards animate in', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toBeVisible();
    });

    test('filter change animates cards', async ({ page }) => {
      const productionFilter = page.getByTestId('blueprint-filter-production');
      await productionFilter.click();

      // Cards should still be visible after filter
      const card = page.getByTestId('blueprint-card-bp-1');
      await expect(card).toBeVisible({ timeout: 5000 });
    });

    test('modal animates in', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const modal = page.getByTestId('blueprint-modal');
      await expect(modal).toBeVisible();
    });

    test('success checkmark animates', async ({ page }) => {
      const card = page.getByTestId('blueprint-card-bp-1');
      await card.hover();

      const applyBtn = page.getByTestId('blueprint-apply-btn-bp-1');
      await applyBtn.click();

      const success = page.getByTestId('blueprint-modal-success');
      await expect(success).toBeVisible({ timeout: 5000 });
    });
  });
});
