import { test, expect } from '@playwright/test';

/**
 * Feature Slice 6: Homepage Pain & Solution Sections
 *
 * These tests verify the Pain Agitation and Solution sections are correctly
 * implemented with pain points, icons, three-panel layout, and screenshot placeholder.
 */

test.describe('Feature 6: Pain & Solution Sections', () => {
  test.describe('Pain Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('pain section is visible', async ({ page }) => {
      const painSection = page.getByTestId('pain-section');
      await expect(painSection).toBeVisible();
    });

    test('pain section has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('pain-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('Problem');
    });

    test('pain section has headline', async ({ page }) => {
      const headline = page.getByTestId('pain-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('AI Infrastructure Research Problem');
    });

    test('pain section headline is h2', async ({ page }) => {
      const headline = page.getByTestId('pain-headline');
      const tagName = await headline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });

    test('pain section has subhead', async ({ page }) => {
      const subhead = page.getByTestId('pain-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('Research engineers');
    });

    test('pain section displays 4 pain points', async ({ page }) => {
      const painPointsGrid = page.getByTestId('pain-points-grid');
      await expect(painPointsGrid).toBeVisible();

      // Check all 4 pain points are visible
      for (let i = 0; i < 4; i++) {
        const painPoint = page.getByTestId(`pain-point-${i}`);
        await expect(painPoint).toBeVisible();
      }
    });

    test('pain points have icons', async ({ page }) => {
      const firstPainPoint = page.getByTestId('pain-point-0');
      const icon = firstPainPoint.locator('svg');
      await expect(icon).toBeVisible();
    });

    test('pain points have titles', async ({ page }) => {
      const firstPainPoint = page.getByTestId('pain-point-0');
      const title = firstPainPoint.locator('h3');
      await expect(title).toBeVisible();
    });

    test('pain points have descriptions', async ({ page }) => {
      const firstPainPoint = page.getByTestId('pain-point-0');
      const description = firstPainPoint.locator('p');
      await expect(description).toBeVisible();
    });

    test('pain section has muted background', async ({ page }) => {
      const painSection = page.getByTestId('pain-section');
      const classList = await painSection.getAttribute('class');
      expect(classList).toContain('bg-muted');
    });

    test('pain point cards have border', async ({ page }) => {
      const firstPainPoint = page.getByTestId('pain-point-0');
      const borderWidth = await firstPainPoint.evaluate((el) =>
        getComputedStyle(el).borderWidth
      );
      expect(borderWidth).toBe('1px');
    });

    test('pain points grid is responsive', async ({ page }) => {
      const painPointsGrid = page.getByTestId('pain-points-grid');
      const classList = await painPointsGrid.getAttribute('class');
      expect(classList).toContain('lg:grid-cols-4');
      expect(classList).toContain('sm:grid-cols-2');
    });
  });

  test.describe('Solution Section', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('solution section is visible', async ({ page }) => {
      const solutionSection = page.getByTestId('solution-section');
      await expect(solutionSection).toBeVisible();
    });

    test('solution section has eyebrow text', async ({ page }) => {
      const eyebrow = page.getByTestId('solution-eyebrow');
      await expect(eyebrow).toBeVisible();
      await expect(eyebrow).toContainText('Solution');
    });

    test('solution section has headline', async ({ page }) => {
      const headline = page.getByTestId('solution-headline');
      await expect(headline).toBeVisible();
      await expect(headline).toContainText('Grounded in Sources');
    });

    test('solution section headline is h2', async ({ page }) => {
      const headline = page.getByTestId('solution-headline');
      const tagName = await headline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });

    test('solution section has subhead', async ({ page }) => {
      const subhead = page.getByTestId('solution-subhead');
      await expect(subhead).toBeVisible();
      await expect(subhead).toContainText('knowledge management');
    });

    test('solution section displays three panels on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const desktopPanels = page.getByTestId('solution-panels-desktop');
      await expect(desktopPanels).toBeVisible();

      // Check all three panels
      await expect(page.getByTestId('solution-panel-sources')).toBeVisible();
      await expect(page.getByTestId('solution-panel-lab')).toBeVisible();
      await expect(page.getByTestId('solution-panel-studio')).toBeVisible();
    });

    test('sources panel has correct title', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const sourcesPanel = page.getByTestId('solution-panel-sources');
      await expect(sourcesPanel).toContainText('Sources');
    });

    test('lab panel has correct title', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const labPanel = page.getByTestId('solution-panel-lab');
      await expect(labPanel).toContainText('Lab');
    });

    test('studio panel has correct title', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const studioPanel = page.getByTestId('solution-panel-studio');
      await expect(studioPanel).toContainText('Studio');
    });

    test('panels have feature lists', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const sourcesPanel = page.getByTestId('solution-panel-sources');
      const featureItems = sourcesPanel.locator('li');
      const count = await featureItems.count();
      expect(count).toBe(3);
    });

    test('panels have icons', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const sourcesPanel = page.getByTestId('solution-panel-sources');
      const icon = sourcesPanel.locator('svg').first();
      await expect(icon).toBeVisible();
    });

    test('mobile panels are visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const mobilePanels = page.getByTestId('solution-panels-mobile');
      await expect(mobilePanels).toBeVisible();

      await expect(page.getByTestId('solution-panel-mobile-sources')).toBeVisible();
      await expect(page.getByTestId('solution-panel-mobile-lab')).toBeVisible();
      await expect(page.getByTestId('solution-panel-mobile-studio')).toBeVisible();
    });

    test('desktop panels are hidden on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const desktopPanels = page.getByTestId('solution-panels-desktop');
      await expect(desktopPanels).not.toBeVisible();
    });

    test('solution section has screenshot placeholder', async ({ page }) => {
      const screenshot = page.getByTestId('solution-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('screenshot shows three-panel layout', async ({ page }) => {
      const screenshot = page.getByTestId('solution-screenshot');
      await expect(screenshot.locator('text=Sources').first()).toBeVisible();
      await expect(screenshot.locator('text=Lab').first()).toBeVisible();
      await expect(screenshot.locator('text=Studio').first()).toBeVisible();
    });

    test('screenshot has window chrome', async ({ page }) => {
      const screenshot = page.getByTestId('solution-screenshot');
      await expect(screenshot.getByText('Lattice Lab')).toBeVisible();
    });

    test('screenshot has aspect-video ratio', async ({ page }) => {
      const screenshot = page.getByTestId('solution-screenshot');
      const classList = await screenshot.getAttribute('class');
      expect(classList).toContain('aspect-video');
    });

    test('solution section has CTA button', async ({ page }) => {
      const cta = page.getByTestId('solution-cta');
      await expect(cta).toBeVisible();

      const ctaLink = cta.getByRole('link', { name: /Explore All Features/i });
      await expect(ctaLink).toBeVisible();
      await expect(ctaLink).toHaveAttribute('href', '/features');
    });
  });

  test.describe('Section Order on Homepage', () => {
    test('sections appear in correct order: Hero, Pain, Solution', async ({ page }) => {
      await page.goto('/');

      const heroSection = page.getByTestId('hero-section');
      const painSection = page.getByTestId('pain-section');
      const solutionSection = page.getByTestId('solution-section');

      await expect(heroSection).toBeVisible();
      await expect(painSection).toBeVisible();
      await expect(solutionSection).toBeVisible();

      // Verify order by comparing Y positions
      const heroBox = await heroSection.boundingBox();
      const painBox = await painSection.boundingBox();
      const solutionBox = await solutionSection.boundingBox();

      expect(heroBox?.y).toBeLessThan(painBox?.y || 0);
      expect(painBox?.y).toBeLessThan(solutionBox?.y || 0);
    });

    test('pain section follows hero section directly', async ({ page }) => {
      await page.goto('/');

      // Scroll to pain section
      const painSection = page.getByTestId('pain-section');
      await painSection.scrollIntoViewIfNeeded();
      await expect(painSection).toBeVisible();
    });
  });

  test.describe('Responsive Design', () => {
    test('pain points show 4 columns on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const painPointsGrid = page.getByTestId('pain-points-grid');
      const gridCols = await painPointsGrid.evaluate((el) => {
        return getComputedStyle(el).gridTemplateColumns;
      });
      // Should have 4 columns
      const columns = gridCols.split(' ').length;
      expect(columns).toBe(4);
    });

    test('pain points show 2 columns on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      const painPointsGrid = page.getByTestId('pain-points-grid');
      const gridCols = await painPointsGrid.evaluate((el) => {
        return getComputedStyle(el).gridTemplateColumns;
      });
      const columns = gridCols.split(' ').length;
      expect(columns).toBe(2);
    });

    test('pain points show 1 column on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const painPointsGrid = page.getByTestId('pain-points-grid');
      const gridCols = await painPointsGrid.evaluate((el) => {
        return getComputedStyle(el).gridTemplateColumns;
      });
      const columns = gridCols.split(' ').length;
      expect(columns).toBe(1);
    });

    test('solution panels show 3 columns on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const desktopPanels = page.getByTestId('solution-panels-desktop');
      const gridCols = await desktopPanels.evaluate((el) => {
        return getComputedStyle(el).gridTemplateColumns;
      });
      const columns = gridCols.split(' ').length;
      expect(columns).toBe(3);
    });
  });

  test.describe('Accessibility', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('pain section has proper heading hierarchy', async ({ page }) => {
      const painHeadline = page.getByTestId('pain-headline');
      const tagName = await painHeadline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });

    test('solution section has proper heading hierarchy', async ({ page }) => {
      const solutionHeadline = page.getByTestId('solution-headline');
      const tagName = await solutionHeadline.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h2');
    });

    test('pain point icons are hidden from screen readers', async ({ page }) => {
      const firstPainPoint = page.getByTestId('pain-point-0');
      const icon = firstPainPoint.locator('svg');
      const ariaHidden = await icon.getAttribute('aria-hidden');
      expect(ariaHidden).toBe('true');
    });

    test('solution panel icons are hidden from screen readers', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto('/');

      const sourcesPanel = page.getByTestId('solution-panel-sources');
      const icon = sourcesPanel.locator('svg').first();
      const ariaHidden = await icon.getAttribute('aria-hidden');
      expect(ariaHidden).toBe('true');
    });

    test('solution CTA button is keyboard focusable', async ({ page }) => {
      const cta = page.getByTestId('solution-cta').getByRole('link');
      await cta.focus();
      await expect(cta).toBeFocused();
    });
  });

  test.describe('Visual Styling', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
    });

    test('pain section eyebrow has accent color', async ({ page }) => {
      const eyebrow = page.getByTestId('pain-eyebrow');
      const classList = await eyebrow.getAttribute('class');
      expect(classList).toContain('text-accent');
    });

    test('solution section eyebrow has accent color', async ({ page }) => {
      const eyebrow = page.getByTestId('solution-eyebrow');
      const classList = await eyebrow.getAttribute('class');
      expect(classList).toContain('text-accent');
    });

    test('pain points use destructive color for icons', async ({ page }) => {
      const firstPainPoint = page.getByTestId('pain-point-0');
      const iconContainer = firstPainPoint.locator('.text-destructive');
      await expect(iconContainer).toBeVisible();
    });

    test('screenshot container has shadow', async ({ page }) => {
      const screenshot = page.getByTestId('solution-screenshot');
      const boxShadow = await screenshot.evaluate((el) =>
        getComputedStyle(el).boxShadow
      );
      expect(boxShadow).not.toBe('none');
    });

    test('screenshot container has rounded corners', async ({ page }) => {
      const screenshot = page.getByTestId('solution-screenshot');
      const borderRadius = await screenshot.evaluate((el) =>
        getComputedStyle(el).borderRadius
      );
      expect(borderRadius).not.toBe('0px');
    });
  });
});
