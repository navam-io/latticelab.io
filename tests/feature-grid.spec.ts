import { test, expect } from '@playwright/test';

test.describe('FeatureGrid Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/feature-grid');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Basic Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('FeatureGrid Component Test');
    });

    test('default grid is visible', async ({ page }) => {
      const grid = page.getByTestId('default-grid');
      await expect(grid).toBeVisible();
    });

    test('grid section is a section element', async ({ page }) => {
      const grid = page.getByTestId('default-grid');
      const tagName = await grid.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('section');
    });

    test('grid container has max width', async ({ page }) => {
      const gridContainer = page.getByTestId('default-grid-grid');
      const classes = await gridContainer.getAttribute('class');
      expect(classes).toContain('max-w-5xl');
    });
  });

  test.describe('Section Header', () => {
    test('header is visible by default', async ({ page }) => {
      const header = page.getByTestId('default-grid-header');
      await expect(header).toBeVisible();
    });

    test('title displays correctly', async ({ page }) => {
      const title = page.getByTestId('default-grid-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Core Features');
    });

    test('description displays correctly', async ({ page }) => {
      const description = page.getByTestId('default-grid-description');
      await expect(description).toBeVisible();
      await expect(description).toContainText('Four powerful panels');
    });

    test('header is hidden when showHeader is false', async ({ page }) => {
      const header = page.getByTestId('no-header-grid-header');
      await expect(header).not.toBeAttached();
    });

    test('custom title displays correctly', async ({ page }) => {
      const title = page.getByTestId('custom-header-grid-title');
      await expect(title).toContainText('Explore Our Platform');
    });

    test('custom description displays correctly', async ({ page }) => {
      const description = page.getByTestId('custom-header-grid-description');
      await expect(description).toContainText('Discover the tools');
    });

    test('title has correct styling', async ({ page }) => {
      const title = page.getByTestId('default-grid-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('font-bold');
      expect(classes).toContain('text-gray-900');
    });

    test('description has muted styling', async ({ page }) => {
      const description = page.getByTestId('default-grid-description');
      const classes = await description.getAttribute('class');
      expect(classes).toContain('text-gray-600');
    });
  });

  test.describe('Grid Layout', () => {
    test('grid has correct layout classes', async ({ page }) => {
      const gridContainer = page.getByTestId('default-grid-grid');
      const classes = await gridContainer.getAttribute('class');
      expect(classes).toContain('grid');
      expect(classes).toContain('grid-cols-1');
      expect(classes).toContain('md:grid-cols-2');
    });

    test('grid has gap between cards', async ({ page }) => {
      const gridContainer = page.getByTestId('default-grid-grid');
      const classes = await gridContainer.getAttribute('class');
      expect(classes).toContain('gap-6');
    });
  });

  test.describe('Feature Cards - Sources', () => {
    test('Sources card is visible', async ({ page }) => {
      const card = page.getByTestId('default-grid-sources');
      await expect(card).toBeVisible();
    });

    test('Sources card has correct title', async ({ page }) => {
      const title = page.getByTestId('default-grid-sources-title');
      await expect(title).toContainText('Sources');
    });

    test('Sources card has correct tagline', async ({ page }) => {
      const tagline = page.getByTestId('default-grid-sources-tagline');
      await expect(tagline).toContainText('Your Knowledge, Indexed');
    });

    test('Sources card has violet variant', async ({ page }) => {
      const icon = page.getByTestId('default-grid-sources-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-violet-100');
    });

    test('Sources card links to features page', async ({ page }) => {
      const link = page.getByTestId('default-grid-sources-link');
      await expect(link).toHaveAttribute('href', '/features/sources');
    });
  });

  test.describe('Feature Cards - Lab', () => {
    test('Lab card is visible', async ({ page }) => {
      const card = page.getByTestId('default-grid-lab');
      await expect(card).toBeVisible();
    });

    test('Lab card has correct title', async ({ page }) => {
      const title = page.getByTestId('default-grid-lab-title');
      await expect(title).toContainText('Lab');
    });

    test('Lab card has correct tagline', async ({ page }) => {
      const tagline = page.getByTestId('default-grid-lab-tagline');
      await expect(tagline).toContainText('Research Agent');
    });

    test('Lab card has blue variant', async ({ page }) => {
      const icon = page.getByTestId('default-grid-lab-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-blue-100');
    });

    test('Lab card links to features page', async ({ page }) => {
      const link = page.getByTestId('default-grid-lab-link');
      await expect(link).toHaveAttribute('href', '/features/lab');
    });
  });

  test.describe('Feature Cards - Studio', () => {
    test('Studio card is visible', async ({ page }) => {
      const card = page.getByTestId('default-grid-studio');
      await expect(card).toBeVisible();
    });

    test('Studio card has correct title', async ({ page }) => {
      const title = page.getByTestId('default-grid-studio-title');
      await expect(title).toContainText('Studio');
    });

    test('Studio card has correct tagline', async ({ page }) => {
      const tagline = page.getByTestId('default-grid-studio-tagline');
      await expect(tagline).toContainText('Artifacts That Matter');
    });

    test('Studio card has teal variant', async ({ page }) => {
      const icon = page.getByTestId('default-grid-studio-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-teal-100');
    });

    test('Studio card links to features page', async ({ page }) => {
      const link = page.getByTestId('default-grid-studio-link');
      await expect(link).toHaveAttribute('href', '/features/studio');
    });
  });

  test.describe('Feature Cards - Blueprints', () => {
    test('Blueprints card is visible', async ({ page }) => {
      const card = page.getByTestId('default-grid-blueprints');
      await expect(card).toBeVisible();
    });

    test('Blueprints card has correct title', async ({ page }) => {
      const title = page.getByTestId('default-grid-blueprints-title');
      await expect(title).toContainText('Blueprints');
    });

    test('Blueprints card has correct tagline', async ({ page }) => {
      const tagline = page.getByTestId('default-grid-blueprints-tagline');
      await expect(tagline).toContainText('36 Vendor Blueprints');
    });

    test('Blueprints card has purple variant', async ({ page }) => {
      const icon = page.getByTestId('default-grid-blueprints-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-purple-100');
    });

    test('Blueprints card has badge', async ({ page }) => {
      const badge = page.getByTestId('default-grid-blueprints-badge');
      await expect(badge).toBeVisible();
      await expect(badge).toContainText('36 Blueprints');
    });

    test('Blueprints card links to features page', async ({ page }) => {
      const link = page.getByTestId('default-grid-blueprints-link');
      await expect(link).toHaveAttribute('href', '/features/blueprints');
    });
  });

  test.describe('Card Descriptions', () => {
    test('descriptions visible by default', async ({ page }) => {
      const sourcesDesc = page.getByTestId('default-grid-sources-description');
      await expect(sourcesDesc).toBeVisible();
      await expect(sourcesDesc).toContainText('curated knowledge base');
    });

    test('descriptions hidden when showDescriptions is false', async ({ page }) => {
      const sourcesDesc = page.getByTestId('no-desc-grid-sources-description');
      await expect(sourcesDesc).not.toBeAttached();
    });

    test('Lab description is visible', async ({ page }) => {
      const labDesc = page.getByTestId('default-grid-lab-description');
      await expect(labDesc).toBeVisible();
      await expect(labDesc).toContainText('AI research agent');
    });

    test('Studio description is visible', async ({ page }) => {
      const studioDesc = page.getByTestId('default-grid-studio-description');
      await expect(studioDesc).toBeVisible();
      await expect(studioDesc).toContainText('reusable artifacts');
    });

    test('Blueprints description is visible', async ({ page }) => {
      const blueprintsDesc = page.getByTestId('default-grid-blueprints-description');
      await expect(blueprintsDesc).toBeVisible();
      await expect(blueprintsDesc).toContainText('Pre-configured');
    });
  });

  test.describe('Background Variants', () => {
    test('default has gray background', async ({ page }) => {
      const grid = page.getByTestId('default-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('bg-gray-50');
    });

    test('white background variant', async ({ page }) => {
      const grid = page.getByTestId('white-bg-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('bg-white');
    });

    test('gradient background variant', async ({ page }) => {
      const grid = page.getByTestId('gradient-bg-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-b');
    });
  });

  test.describe('Responsive Behavior', () => {
    test('grid visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const grid = page.getByTestId('default-grid-grid');
      await expect(grid).toBeVisible();
    });

    test('grid visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const grid = page.getByTestId('default-grid-grid');
      await expect(grid).toBeVisible();
    });

    test('grid visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const grid = page.getByTestId('default-grid-grid');
      await expect(grid).toBeVisible();
    });

    test('all four cards visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page.getByTestId('default-grid-sources')).toBeVisible();
      await expect(page.getByTestId('default-grid-lab')).toBeVisible();
      await expect(page.getByTestId('default-grid-studio')).toBeVisible();
      await expect(page.getByTestId('default-grid-blueprints')).toBeVisible();
    });

    test('all four cards visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await expect(page.getByTestId('default-grid-sources')).toBeVisible();
      await expect(page.getByTestId('default-grid-lab')).toBeVisible();
      await expect(page.getByTestId('default-grid-studio')).toBeVisible();
      await expect(page.getByTestId('default-grid-blueprints')).toBeVisible();
    });
  });

  test.describe('Minimal Configuration', () => {
    test('minimal grid shows only cards', async ({ page }) => {
      const grid = page.getByTestId('minimal-grid');
      await expect(grid).toBeVisible();
    });

    test('minimal grid has no header', async ({ page }) => {
      const header = page.getByTestId('minimal-grid-header');
      await expect(header).not.toBeAttached();
    });

    test('minimal grid cards have no descriptions', async ({ page }) => {
      const sourcesDesc = page.getByTestId('minimal-grid-sources-description');
      await expect(sourcesDesc).not.toBeAttached();
    });

    test('minimal grid cards still have titles', async ({ page }) => {
      const sourcesTitle = page.getByTestId('minimal-grid-sources-title');
      await expect(sourcesTitle).toBeVisible();
      await expect(sourcesTitle).toContainText('Sources');
    });
  });

  test.describe('Icons', () => {
    test('Sources card has icon', async ({ page }) => {
      const icon = page.getByTestId('default-grid-sources-icon');
      await expect(icon).toBeVisible();
    });

    test('Lab card has icon', async ({ page }) => {
      const icon = page.getByTestId('default-grid-lab-icon');
      await expect(icon).toBeVisible();
    });

    test('Studio card has icon', async ({ page }) => {
      const icon = page.getByTestId('default-grid-studio-icon');
      await expect(icon).toBeVisible();
    });

    test('Blueprints card has icon', async ({ page }) => {
      const icon = page.getByTestId('default-grid-blueprints-icon');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Screenshots', () => {
    test('Sources card has screenshot', async ({ page }) => {
      const screenshot = page.getByTestId('default-grid-sources-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('Lab card has screenshot', async ({ page }) => {
      const screenshot = page.getByTestId('default-grid-lab-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('Studio card has screenshot', async ({ page }) => {
      const screenshot = page.getByTestId('default-grid-studio-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('Blueprints card has screenshot', async ({ page }) => {
      const screenshot = page.getByTestId('default-grid-blueprints-screenshot');
      await expect(screenshot).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('section has padding', async ({ page }) => {
      const grid = page.getByTestId('default-grid');
      const classes = await grid.getAttribute('class');
      expect(classes).toContain('py-16');
    });

    test('header is centered', async ({ page }) => {
      const header = page.getByTestId('default-grid-header');
      const classes = await header.getAttribute('class');
      expect(classes).toContain('text-center');
    });

    test('grid is centered', async ({ page }) => {
      const gridContainer = page.getByTestId('default-grid-grid');
      const classes = await gridContainer.getAttribute('class');
      expect(classes).toContain('mx-auto');
    });
  });
});
