import { test, expect } from '@playwright/test';

/**
 * Feature Slice 19: Journey Detail Pages Tests
 *
 * Tests for the journey detail pages with step-by-step guides,
 * JTBD statements, MDX content, and navigation.
 */

const journeys = [
  {
    slug: 'create-workspace',
    title: 'Create Workspace',
    category: 'Getting Started',
    stepCount: 4,
    estimatedTime: '2 minutes',
  },
  {
    slug: 'switch-workspace',
    title: 'Switch Workspace',
    category: 'Getting Started',
    stepCount: 3,
    estimatedTime: '30 seconds',
  },
  {
    slug: 'configure-settings',
    title: 'Configure Settings',
    category: 'Configuration',
    stepCount: 5,
    estimatedTime: '3 minutes',
  },
  {
    slug: 'manage-api-keys',
    title: 'Manage API Keys',
    category: 'Configuration',
    stepCount: 4,
    estimatedTime: '2 minutes',
  },
  {
    slug: 'browse-blueprints',
    title: 'Browse Blueprints',
    category: 'Sources',
    stepCount: 3,
    estimatedTime: '1 minute',
  },
  {
    slug: 'apply-blueprint',
    title: 'Apply Blueprint',
    category: 'Sources',
    stepCount: 4,
    estimatedTime: '1 minute',
  },
];

test.describe('Feature 19: Journey Detail Pages', () => {
  test.describe('Page Basics', () => {
    test('all 6 journey pages load successfully', async ({ page }) => {
      for (const journey of journeys) {
        await page.goto(`/journeys/${journey.slug}`);
        await expect(page).toHaveURL(new RegExp(`/journeys/${journey.slug}`));
      }
    });

    test('each journey page has correct title', async ({ page }) => {
      for (const journey of journeys) {
        await page.goto(`/journeys/${journey.slug}`);
        await expect(page).toHaveTitle(new RegExp(journey.title));
      }
    });

    test('each journey page has meta description', async ({ page }) => {
      for (const journey of journeys) {
        await page.goto(`/journeys/${journey.slug}`);
        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', /.+/);
      }
    });
  });

  test.describe('Hero Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/journeys/create-workspace');
    });

    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('journey-detail-hero');
      await expect(hero).toBeVisible();
    });

    test('displays breadcrumb navigation', async ({ page }) => {
      const breadcrumb = page.getByTestId('journey-detail-breadcrumb');
      await expect(breadcrumb).toBeVisible();
      await expect(breadcrumb).toContainText('Journeys');
    });

    test('displays category badge', async ({ page }) => {
      const category = page.getByTestId('journey-detail-category');
      await expect(category).toBeVisible();
      await expect(category).toContainText('Getting Started');
    });

    test('displays estimated time', async ({ page }) => {
      const time = page.getByTestId('journey-detail-time');
      await expect(time).toBeVisible();
      await expect(time).toContainText('2 minutes');
    });

    test('displays journey title', async ({ page }) => {
      const title = page.getByTestId('journey-detail-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Create Workspace');
    });

    test('displays journey description', async ({ page }) => {
      const description = page.getByTestId('journey-detail-description');
      await expect(description).toBeVisible();
      const text = await description.textContent();
      expect(text?.length).toBeGreaterThan(20);
    });

    test('displays JTBD statement', async ({ page }) => {
      const jtbd = page.getByTestId('journey-detail-jtbd');
      await expect(jtbd).toBeVisible();
      await expect(jtbd).toContainText('When I');
    });
  });

  test.describe('Steps Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/journeys/create-workspace');
    });

    test('steps section is visible', async ({ page }) => {
      const steps = page.getByTestId('journey-detail-steps');
      await expect(steps).toBeVisible();
    });

    test('displays steps title', async ({ page }) => {
      const title = page.getByTestId('journey-detail-steps-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Step-by-Step Guide');
    });

    test('displays correct number of steps', async ({ page }) => {
      const stepsList = page.getByTestId('journey-detail-steps-list');
      await expect(stepsList).toBeVisible();

      // Create workspace has 4 steps
      for (let i = 0; i < 4; i++) {
        const step = page.getByTestId(`journey-step-${i}`);
        await expect(step).toBeVisible();
      }
    });

    test('each step has a number', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const stepNumber = page.getByTestId(`journey-step-${i}-number`);
        await expect(stepNumber).toBeVisible();
        await expect(stepNumber).toContainText(`${i + 1}`);
      }
    });

    test('each step has a title', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const stepTitle = page.getByTestId(`journey-step-${i}-title`);
        await expect(stepTitle).toBeVisible();
        const text = await stepTitle.textContent();
        expect(text?.length).toBeGreaterThan(5);
      }
    });

    test('each step has a description', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const stepDescription = page.getByTestId(`journey-step-${i}-description`);
        await expect(stepDescription).toBeVisible();
        const text = await stepDescription.textContent();
        expect(text?.length).toBeGreaterThan(20);
      }
    });

    test('each step has a screenshot placeholder', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const screenshot = page.getByTestId(`journey-step-${i}-screenshot`);
        await expect(screenshot).toBeVisible();
      }
    });

    test('steps with tips display the tip', async ({ page }) => {
      // First step should have a tip
      const tip = page.getByTestId('journey-step-0-tip');
      await expect(tip).toBeVisible();
      await expect(tip).toContainText('Tip:');
    });
  });

  test.describe('MDX Content Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/journeys/create-workspace');
    });

    test('content section is visible', async ({ page }) => {
      const content = page.getByTestId('journey-detail-content');
      await expect(content).toBeVisible();
    });

    test('prose container is present', async ({ page }) => {
      const prose = page.getByTestId('journey-detail-prose');
      await expect(prose).toBeVisible();
    });

    test('MDX content renders headings', async ({ page }) => {
      const prose = page.getByTestId('journey-detail-prose');
      const h2 = prose.locator('h2').first();
      await expect(h2).toBeVisible();
    });
  });

  test.describe('Navigation Section', () => {
    test('navigation section is visible', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const nav = page.getByTestId('journey-detail-nav');
      await expect(nav).toBeVisible();
    });

    test('back to journeys link is present', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const backLink = page.getByTestId('journey-detail-nav-back');
      await expect(backLink).toBeVisible();
      await expect(backLink).toContainText('All Journeys');
    });

    test('first journey has next but no previous', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const prev = page.getByTestId('journey-detail-nav-prev');
      const next = page.getByTestId('journey-detail-nav-next');

      await expect(prev).not.toBeVisible();
      await expect(next).toBeVisible();
    });

    test('last journey has previous but no next', async ({ page }) => {
      await page.goto('/journeys/apply-blueprint');
      const prev = page.getByTestId('journey-detail-nav-prev');
      const next = page.getByTestId('journey-detail-nav-next');

      await expect(prev).toBeVisible();
      await expect(next).not.toBeVisible();
    });

    test('middle journey has both previous and next', async ({ page }) => {
      await page.goto('/journeys/configure-settings');
      const prev = page.getByTestId('journey-detail-nav-prev');
      const next = page.getByTestId('journey-detail-nav-next');

      await expect(prev).toBeVisible();
      await expect(next).toBeVisible();
    });

    test('next navigation works', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const next = page.getByTestId('journey-detail-nav-next');
      await next.click();
      await expect(page).toHaveURL(/\/journeys\/switch-workspace/);
    });

    test('previous navigation works', async ({ page }) => {
      await page.goto('/journeys/switch-workspace');
      const prev = page.getByTestId('journey-detail-nav-prev');
      await prev.click();
      await expect(page).toHaveURL(/\/journeys\/create-workspace/);
    });

    test('back to journeys link navigates correctly', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const backLink = page.getByTestId('journey-detail-nav-back');
      await backLink.click();
      await expect(page).toHaveURL(/\/journeys\/?$/);
    });
  });

  test.describe('CTA Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/journeys/create-workspace');
    });

    test('CTA section is visible', async ({ page }) => {
      const cta = page.getByTestId('journey-detail-cta');
      await expect(cta).toBeVisible();
    });

    test('displays CTA headline', async ({ page }) => {
      const headline = page.getByTestId('journey-detail-cta-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Ready to Try');
    });

    test('displays CTA subhead', async ({ page }) => {
      const subhead = page.getByTestId('journey-detail-cta-subhead');
      await expect(subhead).toBeVisible();
    });

    test('has primary CTA button with price', async ({ page }) => {
      const button = page.getByTestId('journey-detail-cta-primary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('$99');
      await expect(button).toHaveAttribute('href', '/pricing');
    });

    test('has secondary CTA button', async ({ page }) => {
      const button = page.getByTestId('journey-detail-cta-secondary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('Browse All Journeys');
      await expect(button).toHaveAttribute('href', '/journeys');
    });

    test('displays trust note', async ({ page }) => {
      const trust = page.getByTestId('journey-detail-cta-trust');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('30-day');
    });
  });

  test.describe('Journey-Specific Content', () => {
    test('Create Workspace has correct step titles', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const step0 = page.getByTestId('journey-step-0-title');
      await expect(step0).toContainText('Workspace Menu');
    });

    test('Configure Settings has 5 steps', async ({ page }) => {
      await page.goto('/journeys/configure-settings');
      for (let i = 0; i < 5; i++) {
        const step = page.getByTestId(`journey-step-${i}`);
        await expect(step).toBeVisible();
      }
      // Step 5 should not exist
      const step5 = page.getByTestId('journey-step-5');
      await expect(step5).not.toBeVisible();
    });

    test('Browse Blueprints has 3 steps', async ({ page }) => {
      await page.goto('/journeys/browse-blueprints');
      for (let i = 0; i < 3; i++) {
        const step = page.getByTestId(`journey-step-${i}`);
        await expect(step).toBeVisible();
      }
    });

    test('Manage API Keys mentions security', async ({ page }) => {
      await page.goto('/journeys/manage-api-keys');
      const prose = page.getByTestId('journey-detail-prose');
      await expect(prose).toContainText('Security');
    });
  });

  test.describe('Responsive Design', () => {
    test('hero section adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/journeys/create-workspace');

      const hero = page.getByTestId('journey-detail-hero');
      const title = page.getByTestId('journey-detail-title');

      await expect(hero).toBeVisible();
      await expect(title).toBeVisible();
    });

    test('steps display correctly on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/journeys/create-workspace');

      for (let i = 0; i < 4; i++) {
        const step = page.getByTestId(`journey-step-${i}`);
        await expect(step).toBeVisible();
      }
    });

    test('navigation adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/journeys/configure-settings');

      const navLinks = page.getByTestId('journey-detail-nav-links');
      await expect(navLinks).toBeVisible();
    });

    test('CTA buttons stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/journeys/create-workspace');

      const buttons = page.getByTestId('journey-detail-cta-buttons');
      await expect(buttons).toBeVisible();

      const primary = page.getByTestId('journey-detail-cta-primary');
      const secondary = page.getByTestId('journey-detail-cta-secondary');
      await expect(primary).toBeVisible();
      await expect(secondary).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/journeys/create-workspace');
    });

    test('has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);

      const h2 = page.locator('h2');
      const h2Count = await h2.count();
      expect(h2Count).toBeGreaterThanOrEqual(2);
    });

    test('breadcrumb has aria-label', async ({ page }) => {
      const breadcrumb = page.getByTestId('journey-detail-breadcrumb');
      await expect(breadcrumb).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    test('icons are hidden from screen readers', async ({ page }) => {
      const icons = page.locator('[data-testid="journey-detail-hero"] svg[aria-hidden="true"]');
      const count = await icons.count();
      expect(count).toBeGreaterThan(0);
    });

    test('links have accessible text', async ({ page }) => {
      const backLink = page.getByTestId('journey-detail-nav-back');
      const text = await backLink.textContent();
      expect(text?.length).toBeGreaterThan(0);
    });
  });

  test.describe('Content Accuracy', () => {
    test('JTBD statements follow correct format', async ({ page }) => {
      for (const journey of journeys) {
        await page.goto(`/journeys/${journey.slug}`);
        const jtbd = page.getByTestId('journey-detail-jtbd');
        const text = await jtbd.textContent();
        expect(text).toMatch(/When I.*want to.*so that/i);
      }
    });

    test('all journeys have category from allowed list', async ({ page }) => {
      const allowedCategories = ['Getting Started', 'Configuration', 'Sources'];
      for (const journey of journeys) {
        await page.goto(`/journeys/${journey.slug}`);
        const category = page.getByTestId('journey-detail-category');
        const text = await category.textContent();
        const hasValidCategory = allowedCategories.some((cat) => text?.includes(cat));
        expect(hasValidCategory).toBe(true);
      }
    });

    test('$99 price is consistently shown in CTAs', async ({ page }) => {
      for (const journey of journeys) {
        await page.goto(`/journeys/${journey.slug}`);
        const button = page.getByTestId('journey-detail-cta-primary');
        await expect(button).toContainText('$99');
      }
    });
  });

  test.describe('Integration with Journeys Index', () => {
    test('clicking journey card navigates to detail page', async ({ page }) => {
      await page.goto('/journeys');
      const link = page.getByTestId('journey-card-0-link');
      await link.click();
      await expect(page).toHaveURL(/\/journeys\/create-workspace/);
    });

    test('back navigation from detail returns to index', async ({ page }) => {
      await page.goto('/journeys/create-workspace');
      const backLink = page.getByTestId('journey-detail-nav-back');
      await backLink.click();
      await expect(page).toHaveURL(/\/journeys\/?$/);
    });
  });
});
