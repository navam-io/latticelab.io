import { test, expect } from '@playwright/test';

test.describe('Features Index Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features');
  });

  test.describe('Page Structure', () => {
    test('should load successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Features/);
    });

    test('should have proper meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /seven powerful features|Sources|Lab|Studio/i);
    });

    test('should have main container', async ({ page }) => {
      const main = page.getByTestId('features-index');
      await expect(main).toBeVisible();
    });
  });

  test.describe('Hero Section', () => {
    test('should display hero section', async ({ page }) => {
      const hero = page.getByTestId('features-hero');
      await expect(hero).toBeVisible();
    });

    test('should show headline', async ({ page }) => {
      const title = page.getByTestId('features-hero-title');
      await expect(title).toContainText('Seven Features');
    });

    test('should show description', async ({ page }) => {
      const description = page.getByTestId('features-hero-description');
      await expect(description).toContainText('knowledge management');
    });

    test('should have gradient background', async ({ page }) => {
      const hero = page.getByTestId('features-hero');
      await expect(hero).toHaveClass(/bg-gradient/);
    });
  });

  test.describe('Core Panels Section', () => {
    test('should display core section', async ({ page }) => {
      const section = page.getByTestId('features-core-section');
      await expect(section).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const title = page.getByTestId('features-core-title');
      await expect(title).toContainText('Core Panels');
    });

    test('should show section description', async ({ page }) => {
      const description = page.getByTestId('features-core-description');
      await expect(description).toContainText('three-panel interface');
    });

    test('should have grid layout', async ({ page }) => {
      const grid = page.getByTestId('features-core-grid');
      await expect(grid).toBeVisible();
    });

    test('should display Sources card', async ({ page }) => {
      const card = page.getByTestId('features-sources-card');
      await expect(card).toBeVisible();
    });

    test('should display Lab card', async ({ page }) => {
      const card = page.getByTestId('features-lab-card');
      await expect(card).toBeVisible();
    });

    test('should display Studio card', async ({ page }) => {
      const card = page.getByTestId('features-studio-card');
      await expect(card).toBeVisible();
    });

    test('should have 3 cards in core grid', async ({ page }) => {
      const grid = page.getByTestId('features-core-grid');
      const cards = grid.locator('article');
      await expect(cards).toHaveCount(3);
    });
  });

  test.describe('Configuration Section', () => {
    test('should display config section', async ({ page }) => {
      const section = page.getByTestId('features-config-section');
      await expect(section).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const title = page.getByTestId('features-config-title');
      await expect(title).toContainText('Configuration');
    });

    test('should show section description', async ({ page }) => {
      const description = page.getByTestId('features-config-description');
      await expect(description).toContainText('Define your requirements');
    });

    test('should have grid layout', async ({ page }) => {
      const grid = page.getByTestId('features-config-grid');
      await expect(grid).toBeVisible();
    });

    test('should display Scenarios card', async ({ page }) => {
      const card = page.getByTestId('features-scenarios-card');
      await expect(card).toBeVisible();
    });

    test('should display Stacks card', async ({ page }) => {
      const card = page.getByTestId('features-stacks-card');
      await expect(card).toBeVisible();
    });

    test('should display Settings card', async ({ page }) => {
      const card = page.getByTestId('features-settings-card');
      await expect(card).toBeVisible();
    });

    test('should have 3 cards in config grid', async ({ page }) => {
      const grid = page.getByTestId('features-config-grid');
      const cards = grid.locator('article');
      await expect(cards).toHaveCount(3);
    });
  });

  test.describe('Blueprints Section', () => {
    test('should display blueprints section', async ({ page }) => {
      const section = page.getByTestId('features-blueprints-section');
      await expect(section).toBeVisible();
    });

    test('should show section title', async ({ page }) => {
      const title = page.getByTestId('features-blueprints-title');
      await expect(title).toContainText('Knowledge Bundles');
    });

    test('should show section description', async ({ page }) => {
      const description = page.getByTestId('features-blueprints-description');
      await expect(description).toContainText('Pre-built configurations');
    });

    test('should display Blueprints card', async ({ page }) => {
      const card = page.getByTestId('features-blueprints-card');
      await expect(card).toBeVisible();
    });

    test('should show Blueprints badge', async ({ page }) => {
      const badge = page.getByTestId('features-blueprints-card-badge');
      await expect(badge).toContainText('36 Blueprints');
    });
  });

  test.describe('Feature Card Content', () => {
    test('Sources card has correct title', async ({ page }) => {
      const title = page.getByTestId('features-sources-card-title');
      await expect(title).toContainText('Sources');
    });

    test('Sources card has correct tagline', async ({ page }) => {
      const tagline = page.getByTestId('features-sources-card-tagline');
      await expect(tagline).toContainText('Your Knowledge, Indexed');
    });

    test('Lab card has correct title', async ({ page }) => {
      const title = page.getByTestId('features-lab-card-title');
      await expect(title).toContainText('Lab');
    });

    test('Studio card has correct title', async ({ page }) => {
      const title = page.getByTestId('features-studio-card-title');
      await expect(title).toContainText('Studio');
    });

    test('Scenarios card has correct title', async ({ page }) => {
      const title = page.getByTestId('features-scenarios-card-title');
      await expect(title).toContainText('Scenarios');
    });

    test('Stacks card has correct title', async ({ page }) => {
      const title = page.getByTestId('features-stacks-card-title');
      await expect(title).toContainText('Stacks');
    });

    test('Settings card has correct title', async ({ page }) => {
      const title = page.getByTestId('features-settings-card-title');
      await expect(title).toContainText('Settings');
    });

    test('Blueprints card has correct title', async ({ page }) => {
      const title = page.getByTestId('features-blueprints-card-title');
      await expect(title).toContainText('Blueprints');
    });
  });

  test.describe('CTA Section', () => {
    test('should display CTA section', async ({ page }) => {
      const section = page.getByTestId('features-cta-section');
      await expect(section).toBeVisible();
    });

    test('should show CTA title', async ({ page }) => {
      const title = page.getByTestId('features-cta-title');
      await expect(title).toContainText('Ready for Smart AI System Decisions');
    });

    test('should show CTA description', async ({ page }) => {
      const description = page.getByTestId('features-cta-description');
      await expect(description).toContainText('lifetime access');
    });

    test('should have CTA button', async ({ page }) => {
      const button = page.getByTestId('features-cta-button');
      await expect(button).toBeVisible();
    });

    test('should have pricing link', async ({ page }) => {
      const button = page.getByTestId('features-cta-button');
      await expect(button).toHaveAttribute('href', '/#pricing');
    });

    test('CTA button has correct text', async ({ page }) => {
      const button = page.getByTestId('features-cta-button');
      await expect(button).toContainText('Get Lattice for $99');
    });
  });

  test.describe('Navigation Links', () => {
    test('Sources card links to sources page', async ({ page }) => {
      const link = page.getByTestId('features-sources-card-link');
      await expect(link).toHaveAttribute('href', '/features/sources');
    });

    test('Lab card links to lab page', async ({ page }) => {
      const link = page.getByTestId('features-lab-card-link');
      await expect(link).toHaveAttribute('href', '/features/lab');
    });

    test('Studio card links to studio page', async ({ page }) => {
      const link = page.getByTestId('features-studio-card-link');
      await expect(link).toHaveAttribute('href', '/features/studio');
    });

    test('Scenarios card links to scenarios page', async ({ page }) => {
      const link = page.getByTestId('features-scenarios-card-link');
      await expect(link).toHaveAttribute('href', '/features/scenarios');
    });

    test('Stacks card links to stacks page', async ({ page }) => {
      const link = page.getByTestId('features-stacks-card-link');
      await expect(link).toHaveAttribute('href', '/features/stacks');
    });

    test('Settings card links to settings page', async ({ page }) => {
      const link = page.getByTestId('features-settings-card-link');
      await expect(link).toHaveAttribute('href', '/features/settings');
    });

    test('Blueprints card links to blueprints page', async ({ page }) => {
      const link = page.getByTestId('features-blueprints-card-link');
      await expect(link).toHaveAttribute('href', '/features/blueprints');
    });
  });

  test.describe('Responsive Behavior', () => {
    test('should be responsive on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('features-hero');
      await expect(hero).toBeVisible();
    });

    test('should be responsive on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const hero = page.getByTestId('features-hero');
      await expect(hero).toBeVisible();
    });

    test('should be responsive on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      const hero = page.getByTestId('features-hero');
      await expect(hero).toBeVisible();
    });

    test('should show all 7 feature cards on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page.getByTestId('features-sources-card')).toBeVisible();
      await expect(page.getByTestId('features-lab-card')).toBeVisible();
      await expect(page.getByTestId('features-studio-card')).toBeVisible();
      await expect(page.getByTestId('features-scenarios-card')).toBeVisible();
      await expect(page.getByTestId('features-stacks-card')).toBeVisible();
      await expect(page.getByTestId('features-settings-card')).toBeVisible();
      await expect(page.getByTestId('features-blueprints-card')).toBeVisible();
    });
  });

  test.describe('Total Feature Count', () => {
    test('should display all 7 features', async ({ page }) => {
      // Count all feature cards on the page
      const allCards = page.locator('[data-testid$="-card"]').filter({ has: page.locator('[data-testid$="-title"]') });
      await expect(allCards).toHaveCount(7);
    });
  });
});
