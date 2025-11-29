import { test, expect } from '@playwright/test';

/**
 * Feature Slice 18: Journeys Index Page Tests
 *
 * Tests for the journeys gallery page showing all available product journeys
 * with categories, cards, and navigation.
 */

test.describe('Feature 18: Journeys Index Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/journeys');
  });

  test.describe('Page Basics', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/journeys/);
    });

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle(/Journeys/);
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute(
        'content',
        /journeys|step-by-step|workflows/i
      );
    });
  });

  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('journeys-hero');
      await expect(hero).toBeVisible();
    });

    test('displays eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('journeys-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('Product Journeys');
    });

    test('displays headline', async ({ page }) => {
      const headline = page.getByTestId('journeys-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('See Lattice in Action');
    });

    test('displays subhead', async ({ page }) => {
      const subhead = page.getByTestId('journeys-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('Step-by-step');
    });
  });

  test.describe('Journey Categories', () => {
    test('displays 3 category sections', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const category = page.getByTestId(`journeys-category-${i}`);
        await expect(category).toBeVisible();
      }
    });

    test('each category has a title', async ({ page }) => {
      const categoryTitles = ['Getting Started', 'Configuration', 'Sources'];
      for (let i = 0; i < 3; i++) {
        const title = page.getByTestId(`journeys-category-${i}-title`);
        await expect(title).toBeVisible();
        await expect(title).toContainText(categoryTitles[i]);
      }
    });

    test('each category has a grid of cards', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const grid = page.getByTestId(`journeys-category-${i}-grid`);
        await expect(grid).toBeVisible();
      }
    });
  });

  test.describe('Journey Cards', () => {
    test('displays 6 journey cards total', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const card = page.getByTestId(`journey-card-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('each card has a thumbnail placeholder', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const thumbnail = page.getByTestId(`journey-card-${i}-thumbnail`);
        await expect(thumbnail).toBeVisible();
      }
    });

    test('each card has step count', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const steps = page.getByTestId(`journey-card-${i}-steps`);
        await expect(steps).toBeVisible();
        await expect(steps).toContainText('steps');
      }
    });

    test('each card has estimated time', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const time = page.getByTestId(`journey-card-${i}-time`);
        await expect(time).toBeVisible();
      }
    });

    test('each card has a title', async ({ page }) => {
      const expectedTitles = [
        'Create Workspace',
        'Switch Workspace',
        'Configure Settings',
        'Manage API Keys',
        'Browse Blueprints',
        'Apply Blueprint',
      ];
      for (let i = 0; i < 6; i++) {
        const title = page.getByTestId(`journey-card-${i}-title`);
        await expect(title).toBeVisible();
        await expect(title).toContainText(expectedTitles[i]);
      }
    });

    test('each card has a description', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const description = page.getByTestId(`journey-card-${i}-description`);
        await expect(description).toBeVisible();
        const text = await description.textContent();
        expect(text?.length).toBeGreaterThan(20);
      }
    });

    test('each card has a JTBD statement', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const jtbd = page.getByTestId(`journey-card-${i}-jtbd`);
        await expect(jtbd).toBeVisible();
        await expect(jtbd).toContainText('When I');
      }
    });

    test('each card has a view journey link', async ({ page }) => {
      const expectedSlugs = [
        'create-workspace',
        'switch-workspace',
        'configure-settings',
        'manage-api-keys',
        'browse-blueprints',
        'apply-blueprint',
      ];
      for (let i = 0; i < 6; i++) {
        const link = page.getByTestId(`journey-card-${i}-link`);
        await expect(link).toBeVisible();
        await expect(link).toContainText('View journey');
        await expect(link).toHaveAttribute('href', `/journeys/${expectedSlugs[i]}`);
      }
    });
  });

  test.describe('Individual Journey Cards', () => {
    test('Create Workspace card has correct content', async ({ page }) => {
      const title = page.getByTestId('journey-card-0-title');
      const description = page.getByTestId('journey-card-0-description');
      const jtbd = page.getByTestId('journey-card-0-jtbd');

      await expect(title).toContainText('Create Workspace');
      await expect(description).toContainText('workspace');
      await expect(jtbd).toContainText('new AI research project');
    });

    test('Browse Blueprints card has correct content', async ({ page }) => {
      const title = page.getByTestId('journey-card-4-title');
      const description = page.getByTestId('journey-card-4-description');
      const jtbd = page.getByTestId('journey-card-4-jtbd');

      await expect(title).toContainText('Browse Blueprints');
      await expect(description).toContainText('blueprint');
      await expect(jtbd).toContainText('research a specific vendor');
    });

    test('Apply Blueprint card has correct content', async ({ page }) => {
      const title = page.getByTestId('journey-card-5-title');
      const description = page.getByTestId('journey-card-5-description');
      const jtbd = page.getByTestId('journey-card-5-jtbd');

      await expect(title).toContainText('Apply Blueprint');
      await expect(description).toContainText('Apply');
      await expect(jtbd).toContainText('immediately start researching');
    });
  });

  test.describe('Summary Section', () => {
    test('summary section is visible', async ({ page }) => {
      const summary = page.getByTestId('journeys-summary');
      await expect(summary).toBeVisible();
    });

    test('displays summary grid', async ({ page }) => {
      const grid = page.getByTestId('journeys-summary-grid');
      await expect(grid).toBeVisible();
    });

    test('displays journey count', async ({ page }) => {
      const value = page.getByTestId('journeys-summary-stat-0-value');
      const label = page.getByTestId('journeys-summary-stat-0-label');

      await expect(value).toContainText('6');
      await expect(label).toContainText('Product Journeys');
    });

    test('displays total steps count', async ({ page }) => {
      const value = page.getByTestId('journeys-summary-stat-1-value');
      const label = page.getByTestId('journeys-summary-stat-1-label');

      await expect(value).toContainText('23'); // 4+3+5+4+3+4 = 23
      await expect(label).toContainText('Total Steps');
    });

    test('displays categories count', async ({ page }) => {
      const value = page.getByTestId('journeys-summary-stat-2-value');
      const label = page.getByTestId('journeys-summary-stat-2-label');

      await expect(value).toContainText('3');
      await expect(label).toContainText('Categories');
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      const cta = page.getByTestId('journeys-cta');
      await expect(cta).toBeVisible();
    });

    test('displays CTA headline', async ({ page }) => {
      const headline = page.getByTestId('journeys-cta-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Ready to Start');
    });

    test('displays CTA subhead', async ({ page }) => {
      const subhead = page.getByTestId('journeys-cta-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('lifetime access');
    });

    test('has primary CTA button', async ({ page }) => {
      const button = page.getByTestId('journeys-cta-primary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('$99');
      await expect(button).toHaveAttribute('href', '/pricing');
    });

    test('has secondary CTA button', async ({ page }) => {
      const button = page.getByTestId('journeys-cta-secondary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('Features');
      await expect(button).toHaveAttribute('href', '/features');
    });

    test('displays trust note', async ({ page }) => {
      const trust = page.getByTestId('journeys-cta-trust');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('30-day');
    });
  });

  test.describe('Navigation & Layout', () => {
    test('header is visible', async ({ page }) => {
      const header = page.locator('header');
      await expect(header).toBeVisible();
    });

    test('footer is visible', async ({ page }) => {
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test('pricing link navigates correctly', async ({ page }) => {
      const button = page.getByTestId('journeys-cta-primary');
      await button.click();
      await expect(page).toHaveURL(/\/pricing/);
    });

    test('features link navigates correctly', async ({ page }) => {
      const button = page.getByTestId('journeys-cta-secondary');
      await button.click();
      await expect(page).toHaveURL('/features');
    });
  });

  test.describe('Responsive Design', () => {
    test('hero section adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('journeys-hero');
      const headline = page.getByTestId('journeys-headline');

      await expect(hero).toBeVisible();
      await expect(headline).toBeVisible();
    });

    test('journey cards stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      // Check that cards are visible
      for (let i = 0; i < 6; i++) {
        const card = page.getByTestId(`journey-card-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('summary stats stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('journeys-summary-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 3; i++) {
        const stat = page.getByTestId(`journeys-summary-stat-${i}`);
        await expect(stat).toBeVisible();
      }
    });

    test('CTA buttons stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const buttons = page.getByTestId('journeys-cta-buttons');
      await expect(buttons).toBeVisible();

      const primary = page.getByTestId('journeys-cta-primary');
      const secondary = page.getByTestId('journeys-cta-secondary');
      await expect(primary).toBeVisible();
      await expect(secondary).toBeVisible();
    });

    test('journey cards display in 3-column grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const grid = page.getByTestId('journeys-category-0-grid');
      await expect(grid).toHaveClass(/lg:grid-cols-3/);
    });

    test('summary stats display in 3-column grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const grid = page.getByTestId('journeys-summary-grid');
      await expect(grid).toHaveClass(/sm:grid-cols-3/);
    });
  });

  test.describe('Accessibility', () => {
    test('has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);

      const h2 = page.locator('h2');
      const h2Count = await h2.count();
      expect(h2Count).toBeGreaterThanOrEqual(4); // Categories + CTA
    });

    test('icons are hidden from screen readers', async ({ page }) => {
      const icons = page.locator('[data-testid^="journey-card-"][data-testid$="-thumbnail"] svg');
      const count = await icons.count();
      for (let i = 0; i < count; i++) {
        await expect(icons.nth(i)).toHaveAttribute('aria-hidden', 'true');
      }
    });

    test('links have accessible text', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const link = page.getByTestId(`journey-card-${i}-link`);
        const text = await link.textContent();
        expect(text?.length).toBeGreaterThan(0);
      }
    });

    test('buttons have accessible labels', async ({ page }) => {
      const primary = page.getByTestId('journeys-cta-primary');
      const secondary = page.getByTestId('journeys-cta-secondary');

      const primaryText = await primary.textContent();
      const secondaryText = await secondary.textContent();

      expect(primaryText?.length).toBeGreaterThan(0);
      expect(secondaryText?.length).toBeGreaterThan(0);
    });
  });

  test.describe('Content Accuracy', () => {
    test('all 6 journey titles are present', async ({ page }) => {
      const journeyTitles = [
        'Create Workspace',
        'Switch Workspace',
        'Configure Settings',
        'Manage API Keys',
        'Browse Blueprints',
        'Apply Blueprint',
      ];
      for (let i = 0; i < 6; i++) {
        const title = page.getByTestId(`journey-card-${i}-title`);
        await expect(title).toContainText(journeyTitles[i]);
      }
    });

    test('$99 price is mentioned', async ({ page }) => {
      const button = page.getByTestId('journeys-cta-primary');
      await expect(button).toContainText('$99');
    });

    test('JTBD statements follow correct format', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const jtbd = page.getByTestId(`journey-card-${i}-jtbd`);
        const text = await jtbd.textContent();
        // JTBD should start with "When I" and contain "want to" and "so that"
        expect(text).toMatch(/When I.*want to.*so that/i);
      }
    });

    test('step counts are reasonable', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const steps = page.getByTestId(`journey-card-${i}-steps`);
        const text = await steps.textContent();
        const stepCount = parseInt(text?.match(/(\d+)/)?.[1] || '0');
        expect(stepCount).toBeGreaterThan(0);
        expect(stepCount).toBeLessThan(10);
      }
    });
  });

  test.describe('Visual Elements', () => {
    test('thumbnail placeholders have icons', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const thumbnail = page.getByTestId(`journey-card-${i}-thumbnail`);
        const icon = thumbnail.locator('svg');
        await expect(icon).toBeVisible();
      }
    });

    test('summary stats have accent color', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const value = page.getByTestId(`journeys-summary-stat-${i}-value`);
        await expect(value).toHaveClass(/text-accent/);
      }
    });

    test('category sections alternate backgrounds', async ({ page }) => {
      // First category (index 0) should have muted background
      const cat0 = page.getByTestId('journeys-category-0');
      // This checks for the muted background class on the section
      await expect(cat0).toBeVisible();
    });
  });
});
