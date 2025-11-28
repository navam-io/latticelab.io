import { test, expect } from '@playwright/test';

/**
 * Feature Slice 16: Features Index Page Tests
 *
 * Tests for the features overview page with cards linking to
 * individual feature detail pages (Sources, Lab, Studio, Scenarios).
 */

test.describe('Feature 16: Features Index Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features');
  });

  test.describe('Page Basics', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveURL(/\/features/);
    });

    test('has correct page title', async ({ page }) => {
      await expect(page).toHaveTitle(/Features/);
    });

    test('has meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute(
        'content',
        /features|Sources|Lab|Studio|Scenarios/i
      );
    });
  });

  test.describe('Hero Section', () => {
    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('features-hero');
      await expect(hero).toBeVisible();
    });

    test('displays eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('features-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('Product Features');
    });

    test('displays headline', async ({ page }) => {
      const headline = page.getByTestId('features-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Everything You Need');
    });

    test('displays subhead', async ({ page }) => {
      const subhead = page.getByTestId('features-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('Four integrated tools');
    });
  });

  test.describe('Feature Cards Grid', () => {
    test('features grid section is visible', async ({ page }) => {
      const section = page.getByTestId('features-grid-section');
      await expect(section).toBeVisible();
    });

    test('displays 4 feature cards', async ({ page }) => {
      const grid = page.getByTestId('features-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 4; i++) {
        const card = page.getByTestId(`feature-card-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('each card has an icon', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const icon = page.getByTestId(`feature-card-${i}-icon`);
        await expect(icon).toBeVisible();
      }
    });

    test('each card has a title', async ({ page }) => {
      const expectedTitles = ['Sources', 'Lab', 'Studio', 'Scenarios'];
      for (let i = 0; i < 4; i++) {
        const title = page.getByTestId(`feature-card-${i}-title`);
        await expect(title).toBeVisible();
        await expect(title).toContainText(expectedTitles[i]);
      }
    });

    test('each card has a subtitle', async ({ page }) => {
      const expectedSubtitles = [
        'Knowledge Management',
        'AI Research Agent',
        'Artifacts & Exports',
        'Stack Intelligence',
      ];
      for (let i = 0; i < 4; i++) {
        const subtitle = page.getByTestId(`feature-card-${i}-subtitle`);
        await expect(subtitle).toBeVisible();
        await expect(subtitle).toContainText(expectedSubtitles[i]);
      }
    });

    test('each card has a description', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const description = page.getByTestId(`feature-card-${i}-description`);
        await expect(description).toBeVisible();
        const text = await description.textContent();
        expect(text?.length).toBeGreaterThan(50);
      }
    });

    test('each card has highlights list', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const highlights = page.getByTestId(`feature-card-${i}-highlights`);
        await expect(highlights).toBeVisible();
        const items = highlights.locator('li');
        await expect(items).toHaveCount(4);
      }
    });

    test('each card has a learn more link', async ({ page }) => {
      const expectedSlugs = ['sources', 'lab', 'studio', 'scenarios'];
      for (let i = 0; i < 4; i++) {
        const link = page.getByTestId(`feature-card-${i}-link`);
        await expect(link).toBeVisible();
        await expect(link).toContainText('Learn more');
        await expect(link).toHaveAttribute('href', `/features/${expectedSlugs[i]}`);
      }
    });
  });

  test.describe('Feature Card: Sources', () => {
    test('Sources card displays correct content', async ({ page }) => {
      const title = page.getByTestId('feature-card-0-title');
      const description = page.getByTestId('feature-card-0-description');

      await expect(title).toContainText('Sources');
      await expect(description).toContainText('PDF');
      await expect(description).toContainText('blueprint bundles');
    });

    test('Sources card has relevant highlights', async ({ page }) => {
      const highlight0 = page.getByTestId('feature-card-0-highlight-0');
      const highlight1 = page.getByTestId('feature-card-0-highlight-1');

      await expect(highlight0).toContainText('PDF');
      await expect(highlight1).toContainText('blueprint');
    });
  });

  test.describe('Feature Card: Lab', () => {
    test('Lab card displays correct content', async ({ page }) => {
      const title = page.getByTestId('feature-card-1-title');
      const description = page.getByTestId('feature-card-1-description');

      await expect(title).toContainText('Lab');
      await expect(description).toContainText('AI');
      await expect(description).toContainText('citations');
    });

    test('Lab card has relevant highlights', async ({ page }) => {
      const highlight0 = page.getByTestId('feature-card-1-highlight-0');
      const highlight1 = page.getByTestId('feature-card-1-highlight-1');

      await expect(highlight0).toContainText('Citation');
      await expect(highlight1).toContainText('thinking');
    });
  });

  test.describe('Feature Card: Studio', () => {
    test('Studio card displays correct content', async ({ page }) => {
      const title = page.getByTestId('feature-card-2-title');
      const description = page.getByTestId('feature-card-2-description');

      await expect(title).toContainText('Studio');
      await expect(description).toContainText('artifacts');
      await expect(description).toContainText('Export');
    });

    test('Studio card has relevant highlights', async ({ page }) => {
      const highlight0 = page.getByTestId('feature-card-2-highlight-0');
      const highlight2 = page.getByTestId('feature-card-2-highlight-2');

      await expect(highlight0).toContainText('Comparison');
      await expect(highlight2).toContainText('Export');
    });
  });

  test.describe('Feature Card: Scenarios', () => {
    test('Scenarios card displays correct content', async ({ page }) => {
      const title = page.getByTestId('feature-card-3-title');
      const description = page.getByTestId('feature-card-3-description');

      await expect(title).toContainText('Scenarios');
      await expect(description).toContainText('stack');
      await expect(description).toContainText('recommendations');
    });

    test('Scenarios card has relevant highlights', async ({ page }) => {
      const highlight0 = page.getByTestId('feature-card-3-highlight-0');
      const highlight1 = page.getByTestId('feature-card-3-highlight-1');

      await expect(highlight0).toContainText('Workload');
      await expect(highlight1).toContainText('Cost');
    });
  });

  test.describe('Benefits Section', () => {
    test('benefits section is visible', async ({ page }) => {
      const section = page.getByTestId('features-benefits');
      await expect(section).toBeVisible();
    });

    test('displays benefits headline', async ({ page }) => {
      const headline = page.getByTestId('features-benefits-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Enterprise');
    });

    test('displays benefits subhead', async ({ page }) => {
      const subhead = page.getByTestId('features-benefits-subhead');
      await expect(subhead).toBeVisible();
    });

    test('displays 3 benefit items', async ({ page }) => {
      const grid = page.getByTestId('features-benefits-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 3; i++) {
        const benefit = page.getByTestId(`features-benefit-${i}`);
        await expect(benefit).toBeVisible();
      }
    });

    test('each benefit has title and description', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const title = page.getByTestId(`features-benefit-${i}-title`);
        const description = page.getByTestId(`features-benefit-${i}-description`);

        await expect(title).toBeVisible();
        await expect(description).toBeVisible();
      }
    });

    test('benefits mention key value props', async ({ page }) => {
      const benefit0Title = page.getByTestId('features-benefit-0-title');
      const benefit1Title = page.getByTestId('features-benefit-1-title');
      const benefit2Title = page.getByTestId('features-benefit-2-title');

      await expect(benefit0Title).toContainText('Privacy');
      await expect(benefit1Title).toContainText('Fast');
      await expect(benefit2Title).toContainText('Unlimited');
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      const section = page.getByTestId('features-cta');
      await expect(section).toBeVisible();
    });

    test('displays CTA headline', async ({ page }) => {
      const headline = page.getByTestId('features-cta-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Transform');
    });

    test('displays CTA subhead with price', async ({ page }) => {
      const subhead = page.getByTestId('features-cta-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('$99');
    });

    test('has primary CTA button', async ({ page }) => {
      const primaryBtn = page.getByTestId('features-cta-primary');
      await expect(primaryBtn).toBeVisible();
      await expect(primaryBtn).toContainText('$99');
      await expect(primaryBtn).toHaveAttribute('href', '/pricing');
    });

    test('has secondary CTA button', async ({ page }) => {
      const secondaryBtn = page.getByTestId('features-cta-secondary');
      await expect(secondaryBtn).toBeVisible();
      await expect(secondaryBtn).toContainText('Homepage');
      await expect(secondaryBtn).toHaveAttribute('href', '/');
    });

    test('displays trust note', async ({ page }) => {
      const trust = page.getByTestId('features-cta-trust');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('30-day');
      await expect(trust).toContainText('Self-hosted');
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
      const primaryBtn = page.getByTestId('features-cta-primary');
      await primaryBtn.click();
      await expect(page).toHaveURL(/\/pricing/);
    });

    test('homepage link navigates correctly', async ({ page }) => {
      const secondaryBtn = page.getByTestId('features-cta-secondary');
      await secondaryBtn.click();
      await expect(page).toHaveURL('/');
    });
  });

  test.describe('Responsive Design', () => {
    test('hero section adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hero = page.getByTestId('features-hero');
      const headline = page.getByTestId('features-headline');

      await expect(hero).toBeVisible();
      await expect(headline).toBeVisible();
    });

    test('feature cards stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('features-grid');
      await expect(grid).toBeVisible();

      // All cards should still be visible
      for (let i = 0; i < 4; i++) {
        const card = page.getByTestId(`feature-card-${i}`);
        await expect(card).toBeVisible();
      }
    });

    test('benefits stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('features-benefits-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 3; i++) {
        const benefit = page.getByTestId(`features-benefit-${i}`);
        await expect(benefit).toBeVisible();
      }
    });

    test('CTA buttons stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const buttons = page.getByTestId('features-cta-buttons');
      await expect(buttons).toBeVisible();

      const primaryBtn = page.getByTestId('features-cta-primary');
      const secondaryBtn = page.getByTestId('features-cta-secondary');
      await expect(primaryBtn).toBeVisible();
      await expect(secondaryBtn).toBeVisible();
    });

    test('feature cards display in 2-column grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const grid = page.getByTestId('features-grid');
      await expect(grid).toHaveClass(/sm:grid-cols-2/);
    });

    test('benefits display in 3-column grid on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const grid = page.getByTestId('features-benefits-grid');
      await expect(grid).toHaveClass(/sm:grid-cols-3/);
    });
  });

  test.describe('Accessibility', () => {
    test('has proper heading hierarchy', async ({ page }) => {
      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);

      const h2 = page.locator('h2');
      const h2Count = await h2.count();
      expect(h2Count).toBeGreaterThanOrEqual(4); // Feature titles + benefits + CTA
    });

    test('icons are hidden from screen readers', async ({ page }) => {
      const icons = page.locator('[data-testid^="feature-card-"][data-testid$="-icon"] svg');
      const count = await icons.count();
      for (let i = 0; i < count; i++) {
        await expect(icons.nth(i)).toHaveAttribute('aria-hidden', 'true');
      }
    });

    test('links have accessible text', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const link = page.getByTestId(`feature-card-${i}-link`);
        const text = await link.textContent();
        expect(text?.length).toBeGreaterThan(0);
      }
    });

    test('buttons have accessible labels', async ({ page }) => {
      const primaryBtn = page.getByTestId('features-cta-primary');
      const secondaryBtn = page.getByTestId('features-cta-secondary');

      const primaryText = await primaryBtn.textContent();
      const secondaryText = await secondaryBtn.textContent();

      expect(primaryText?.length).toBeGreaterThan(0);
      expect(secondaryText?.length).toBeGreaterThan(0);
    });
  });

  test.describe('Content Accuracy', () => {
    test('mentions 36 vendor blueprints', async ({ page }) => {
      const description = page.getByTestId('feature-card-0-description');
      await expect(description).toContainText('36');
    });

    test('mentions $99 price consistently', async ({ page }) => {
      const subhead = page.getByTestId('features-cta-subhead');
      const primaryBtn = page.getByTestId('features-cta-primary');

      await expect(subhead).toContainText('$99');
      await expect(primaryBtn).toContainText('$99');
    });

    test('mentions self-hosted/privacy', async ({ page }) => {
      const benefit = page.getByTestId('features-benefit-0-description');
      await expect(benefit).toContainText('Self-hosted');
    });

    test('mentions Docker setup', async ({ page }) => {
      const benefit = page.getByTestId('features-benefit-1-description');
      await expect(benefit).toContainText('Docker');
    });

    test('all four feature names are present', async ({ page }) => {
      const featureNames = ['Sources', 'Lab', 'Studio', 'Scenarios'];
      for (let i = 0; i < 4; i++) {
        const title = page.getByTestId(`feature-card-${i}-title`);
        await expect(title).toContainText(featureNames[i]);
      }
    });
  });

  test.describe('Visual Elements', () => {
    test('feature cards have colored icons', async ({ page }) => {
      // Each icon container should have color-specific classes
      const icon0 = page.getByTestId('feature-card-0-icon');
      const icon1 = page.getByTestId('feature-card-1-icon');
      const icon2 = page.getByTestId('feature-card-2-icon');
      const icon3 = page.getByTestId('feature-card-3-icon');

      await expect(icon0).toHaveClass(/bg-blue/);
      await expect(icon1).toHaveClass(/bg-purple/);
      await expect(icon2).toHaveClass(/bg-green/);
      await expect(icon3).toHaveClass(/bg-orange/);
    });

    test('highlights have check icons', async ({ page }) => {
      for (let i = 0; i < 4; i++) {
        const highlights = page.getByTestId(`feature-card-${i}-highlights`);
        const checkIcons = highlights.locator('svg');
        const count = await checkIcons.count();
        expect(count).toBe(4);
      }
    });

    test('benefit items have icons', async ({ page }) => {
      for (let i = 0; i < 3; i++) {
        const benefit = page.getByTestId(`features-benefit-${i}`);
        const icon = benefit.locator('svg');
        await expect(icon).toBeVisible();
      }
    });
  });
});
