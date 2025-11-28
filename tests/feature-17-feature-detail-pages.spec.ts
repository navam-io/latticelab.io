import { test, expect } from '@playwright/test';

/**
 * Feature Slice 17: Feature Detail Pages Tests
 *
 * Tests for the dynamic feature detail pages (Sources, Lab, Studio, Scenarios)
 * generated from MDX content collections.
 */

const features = [
  { slug: 'sources', title: 'Sources', subtitle: 'Knowledge Management', color: 'blue' },
  { slug: 'lab', title: 'Lab', subtitle: 'AI Research Agent', color: 'purple' },
  { slug: 'studio', title: 'Studio', subtitle: 'Artifacts & Exports', color: 'green' },
  { slug: 'scenarios', title: 'Scenarios', subtitle: 'Stack Intelligence', color: 'orange' },
];

test.describe('Feature 17: Feature Detail Pages', () => {
  test.describe('All Feature Pages Load', () => {
    for (const feature of features) {
      test(`${feature.title} page loads successfully`, async ({ page }) => {
        await page.goto(`/features/${feature.slug}`);
        await expect(page).toHaveURL(`/features/${feature.slug}`);
      });
    }
  });

  test.describe('Page Title and Meta', () => {
    for (const feature of features) {
      test(`${feature.title} page has correct title`, async ({ page }) => {
        await page.goto(`/features/${feature.slug}`);
        await expect(page).toHaveTitle(new RegExp(feature.title));
      });
    }

    test('feature pages have meta descriptions', async ({ page }) => {
      await page.goto('/features/sources');
      const metaDescription = page.locator('meta[name="description"]');
      await expect(metaDescription).toHaveAttribute('content', /PDF|blueprint|knowledge/i);
    });
  });

  test.describe('Hero Section Structure', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/sources');
    });

    test('hero section is visible', async ({ page }) => {
      const hero = page.getByTestId('feature-detail-hero');
      await expect(hero).toBeVisible();
    });

    test('displays feature icon', async ({ page }) => {
      const icon = page.getByTestId('feature-detail-icon');
      await expect(icon).toBeVisible();
    });

    test('displays feature subtitle', async ({ page }) => {
      const subtitle = page.getByTestId('feature-detail-subtitle');
      await expect(subtitle).toBeVisible();
      await expect(subtitle).toContainText('Knowledge Management');
    });

    test('displays feature title', async ({ page }) => {
      const title = page.getByTestId('feature-detail-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Sources');
    });

    test('displays feature description', async ({ page }) => {
      const description = page.getByTestId('feature-detail-description');
      await expect(description).toBeVisible();
      const text = await description.textContent();
      expect(text?.length).toBeGreaterThan(50);
    });
  });

  test.describe('Sources Feature Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/sources');
    });

    test('displays correct title and subtitle', async ({ page }) => {
      const title = page.getByTestId('feature-detail-title');
      const subtitle = page.getByTestId('feature-detail-subtitle');

      await expect(title).toContainText('Sources');
      await expect(subtitle).toContainText('Knowledge Management');
    });

    test('has highlights section', async ({ page }) => {
      const highlights = page.getByTestId('feature-detail-highlights');
      await expect(highlights).toBeVisible();
    });

    test('displays 6 highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 6; i++) {
        const highlight = page.getByTestId(`feature-detail-highlight-${i}`);
        await expect(highlight).toBeVisible();
      }
    });

    test('mentions PDF ingestion in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('PDF');
    });

    test('mentions blueprint bundles in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('blueprint');
    });

    test('has 3 use cases', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-usecases-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 3; i++) {
        const useCase = page.getByTestId(`feature-detail-usecase-${i}`);
        await expect(useCase).toBeVisible();
      }
    });

    test('use cases include AI Engineer persona', async ({ page }) => {
      const persona = page.getByTestId('feature-detail-usecase-0-persona');
      await expect(persona).toContainText('AI Engineer');
    });
  });

  test.describe('Lab Feature Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/lab');
    });

    test('displays correct title and subtitle', async ({ page }) => {
      const title = page.getByTestId('feature-detail-title');
      const subtitle = page.getByTestId('feature-detail-subtitle');

      await expect(title).toContainText('Lab');
      await expect(subtitle).toContainText('AI Research Agent');
    });

    test('mentions citations in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('Citation');
    });

    test('mentions thinking steps in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('thinking');
    });
  });

  test.describe('Studio Feature Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/studio');
    });

    test('displays correct title and subtitle', async ({ page }) => {
      const title = page.getByTestId('feature-detail-title');
      const subtitle = page.getByTestId('feature-detail-subtitle');

      await expect(title).toContainText('Studio');
      await expect(subtitle).toContainText('Artifacts');
    });

    test('mentions export in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('Export');
    });

    test('mentions comparison tables in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('Comparison');
    });
  });

  test.describe('Scenarios Feature Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/features/scenarios');
    });

    test('displays correct title and subtitle', async ({ page }) => {
      const title = page.getByTestId('feature-detail-title');
      const subtitle = page.getByTestId('feature-detail-subtitle');

      await expect(title).toContainText('Scenarios');
      await expect(subtitle).toContainText('Stack Intelligence');
    });

    test('mentions cost estimation in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('Cost');
    });

    test('mentions workload configuration in highlights', async ({ page }) => {
      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toContainText('Workload');
    });
  });

  test.describe('Highlights Section', () => {
    test('highlights section has title', async ({ page }) => {
      await page.goto('/features/sources');
      const title = page.getByTestId('feature-detail-highlights-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Key Capabilities');
    });

    test('highlights have checkmark icons', async ({ page }) => {
      await page.goto('/features/sources');
      const grid = page.getByTestId('feature-detail-highlights-grid');
      const icons = grid.locator('svg');
      const count = await icons.count();
      expect(count).toBeGreaterThanOrEqual(6);
    });
  });

  test.describe('Screenshot Placeholder Section', () => {
    test('screenshot section is visible', async ({ page }) => {
      await page.goto('/features/sources');
      const section = page.getByTestId('feature-detail-screenshot');
      await expect(section).toBeVisible();
    });

    test('screenshot placeholder is visible', async ({ page }) => {
      await page.goto('/features/sources');
      const placeholder = page.getByTestId('feature-detail-screenshot-placeholder');
      await expect(placeholder).toBeVisible();
    });
  });

  test.describe('Use Cases Section', () => {
    test('use cases section has title', async ({ page }) => {
      await page.goto('/features/sources');
      const title = page.getByTestId('feature-detail-usecases-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Use Cases');
    });

    test('each use case has persona badge', async ({ page }) => {
      await page.goto('/features/sources');
      for (let i = 0; i < 3; i++) {
        const persona = page.getByTestId(`feature-detail-usecase-${i}-persona`);
        await expect(persona).toBeVisible();
      }
    });

    test('each use case has title and description', async ({ page }) => {
      await page.goto('/features/sources');
      for (let i = 0; i < 3; i++) {
        const title = page.getByTestId(`feature-detail-usecase-${i}-title`);
        const description = page.getByTestId(`feature-detail-usecase-${i}-description`);

        await expect(title).toBeVisible();
        await expect(description).toBeVisible();
      }
    });
  });

  test.describe('MDX Content Section', () => {
    test('content section is visible', async ({ page }) => {
      await page.goto('/features/sources');
      const content = page.getByTestId('feature-detail-content');
      await expect(content).toBeVisible();
    });

    test('prose content is rendered', async ({ page }) => {
      await page.goto('/features/sources');
      const prose = page.getByTestId('feature-detail-prose');
      await expect(prose).toBeVisible();

      // Check for rendered headings from MDX
      const h2 = prose.locator('h2');
      await expect(h2.first()).toBeVisible();
    });

    test('MDX content includes lists', async ({ page }) => {
      await page.goto('/features/sources');
      const prose = page.getByTestId('feature-detail-prose');
      const lists = prose.locator('ul, ol');
      const count = await lists.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('CTA Section', () => {
    test('CTA section is visible', async ({ page }) => {
      await page.goto('/features/sources');
      const section = page.getByTestId('feature-detail-cta');
      await expect(section).toBeVisible();
    });

    test('displays CTA headline with feature name', async ({ page }) => {
      await page.goto('/features/sources');
      const headline = page.getByTestId('feature-detail-cta-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Sources');
    });

    test('displays CTA subhead with price', async ({ page }) => {
      await page.goto('/features/sources');
      const subhead = page.getByTestId('feature-detail-cta-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('$99');
    });

    test('has primary CTA button', async ({ page }) => {
      await page.goto('/features/sources');
      const button = page.getByTestId('feature-detail-cta-primary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('$99');
      await expect(button).toHaveAttribute('href', '/pricing');
    });

    test('has secondary CTA button', async ({ page }) => {
      await page.goto('/features/sources');
      const button = page.getByTestId('feature-detail-cta-secondary');
      await expect(button).toBeVisible();
      await expect(button).toContainText('All Features');
      await expect(button).toHaveAttribute('href', '/features');
    });

    test('displays trust note', async ({ page }) => {
      await page.goto('/features/sources');
      const trust = page.getByTestId('feature-detail-cta-trust');
      await expect(trust).toBeVisible();
      await expect(trust).toContainText('30-day');
    });
  });

  test.describe('Navigation & Layout', () => {
    test('header is visible', async ({ page }) => {
      await page.goto('/features/sources');
      const header = page.locator('header');
      await expect(header).toBeVisible();
    });

    test('footer is visible', async ({ page }) => {
      await page.goto('/features/sources');
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    });

    test('pricing link works', async ({ page }) => {
      await page.goto('/features/sources');
      const button = page.getByTestId('feature-detail-cta-primary');
      await button.click();
      await expect(page).toHaveURL(/\/pricing/);
    });

    test('features link works', async ({ page }) => {
      await page.goto('/features/sources');
      const button = page.getByTestId('feature-detail-cta-secondary');
      await button.click();
      await expect(page).toHaveURL('/features');
    });
  });

  test.describe('Responsive Design', () => {
    test('hero adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/features/sources');

      const hero = page.getByTestId('feature-detail-hero');
      const title = page.getByTestId('feature-detail-title');

      await expect(hero).toBeVisible();
      await expect(title).toBeVisible();
    });

    test('highlights grid adapts to mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/features/sources');

      const grid = page.getByTestId('feature-detail-highlights-grid');
      await expect(grid).toBeVisible();

      // All highlights should still be visible
      for (let i = 0; i < 6; i++) {
        const highlight = page.getByTestId(`feature-detail-highlight-${i}`);
        await expect(highlight).toBeVisible();
      }
    });

    test('use cases stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/features/sources');

      const grid = page.getByTestId('feature-detail-usecases-grid');
      await expect(grid).toBeVisible();

      for (let i = 0; i < 3; i++) {
        const useCase = page.getByTestId(`feature-detail-usecase-${i}`);
        await expect(useCase).toBeVisible();
      }
    });

    test('CTA buttons stack on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/features/sources');

      const buttons = page.getByTestId('feature-detail-cta-buttons');
      await expect(buttons).toBeVisible();

      const primary = page.getByTestId('feature-detail-cta-primary');
      const secondary = page.getByTestId('feature-detail-cta-secondary');

      await expect(primary).toBeVisible();
      await expect(secondary).toBeVisible();
    });

    test('page renders correctly on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/features/sources');

      const hero = page.getByTestId('feature-detail-hero');
      const highlights = page.getByTestId('feature-detail-highlights');
      const useCases = page.getByTestId('feature-detail-usecases');
      const cta = page.getByTestId('feature-detail-cta');

      await expect(hero).toBeVisible();
      await expect(highlights).toBeVisible();
      await expect(useCases).toBeVisible();
      await expect(cta).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('has proper heading hierarchy', async ({ page }) => {
      await page.goto('/features/sources');

      const h1 = page.locator('h1');
      await expect(h1).toHaveCount(1);

      const h2 = page.locator('h2');
      const h2Count = await h2.count();
      expect(h2Count).toBeGreaterThanOrEqual(3);
    });

    test('icons are hidden from screen readers', async ({ page }) => {
      await page.goto('/features/sources');

      const icon = page.getByTestId('feature-detail-icon').locator('svg');
      await expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    test('buttons have accessible labels', async ({ page }) => {
      await page.goto('/features/sources');

      const primary = page.getByTestId('feature-detail-cta-primary');
      const secondary = page.getByTestId('feature-detail-cta-secondary');

      const primaryText = await primary.textContent();
      const secondaryText = await secondary.textContent();

      expect(primaryText?.length).toBeGreaterThan(0);
      expect(secondaryText?.length).toBeGreaterThan(0);
    });
  });

  test.describe('Content Accuracy', () => {
    test('Sources page mentions 36 vendor blueprints', async ({ page }) => {
      await page.goto('/features/sources');
      // 36 is mentioned in highlights or description
      const highlights = page.getByTestId('feature-detail-highlights-grid');
      await expect(highlights).toContainText('36');
    });

    test('Lab page mentions citations', async ({ page }) => {
      await page.goto('/features/lab');
      const content = page.getByTestId('feature-detail-prose');
      await expect(content).toContainText('citation');
    });

    test('Studio page mentions artifacts', async ({ page }) => {
      await page.goto('/features/studio');
      const content = page.getByTestId('feature-detail-prose');
      await expect(content).toContainText('artifact');
    });

    test('Scenarios page mentions cost', async ({ page }) => {
      await page.goto('/features/scenarios');
      const content = page.getByTestId('feature-detail-prose');
      await expect(content).toContainText('cost');
    });

    test('$99 price is consistent across all feature pages', async ({ page }) => {
      for (const feature of features) {
        await page.goto(`/features/${feature.slug}`);
        const subhead = page.getByTestId('feature-detail-cta-subhead');
        await expect(subhead).toContainText('$99');
      }
    });
  });

  test.describe('Cross-Feature Navigation', () => {
    test('can navigate from features index to Sources', async ({ page }) => {
      await page.goto('/features');
      const link = page.getByTestId('feature-card-0-link');
      await link.click();
      await expect(page).toHaveURL('/features/sources');
    });

    test('can navigate from features index to Lab', async ({ page }) => {
      await page.goto('/features');
      const link = page.getByTestId('feature-card-1-link');
      await link.click();
      await expect(page).toHaveURL('/features/lab');
    });

    test('can navigate from features index to Studio', async ({ page }) => {
      await page.goto('/features');
      const link = page.getByTestId('feature-card-2-link');
      await link.click();
      await expect(page).toHaveURL('/features/studio');
    });

    test('can navigate from features index to Scenarios', async ({ page }) => {
      await page.goto('/features');
      const link = page.getByTestId('feature-card-3-link');
      await link.click();
      await expect(page).toHaveURL('/features/scenarios');
    });

    test('can navigate back to features index from detail page', async ({ page }) => {
      await page.goto('/features/sources');
      const button = page.getByTestId('feature-detail-cta-secondary');
      await button.click();
      await expect(page).toHaveURL('/features');
    });
  });
});
