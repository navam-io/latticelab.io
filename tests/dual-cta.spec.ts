import { test, expect } from '@playwright/test';

test.describe('DualCTA Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/dual-cta');
  });

  test.describe('Default Variant', () => {
    test('renders with default labels', async ({ page }) => {
      const primary = page.getByTestId('dual-cta-primary');
      const secondary = page.getByTestId('dual-cta-secondary');

      await expect(primary).toBeVisible();
      await expect(secondary).toBeVisible();
      await expect(primary).toHaveText('Buy');
      await expect(secondary).toHaveText('Learn more');
    });

    test('renders with custom labels', async ({ page }) => {
      const primary = page.getByTestId('custom-primary');
      const secondary = page.getByTestId('custom-secondary');

      await expect(primary).toHaveText('Get Started');
      await expect(secondary).toHaveText('View Demo');
    });

    test('renders buttons as links when href provided', async ({ page }) => {
      const primary = page.getByTestId('linked-primary');
      const secondary = page.getByTestId('linked-secondary');

      await expect(primary).toHaveAttribute('href', '/pricing');
      await expect(secondary).toHaveAttribute('href', '/features');
    });

    test('primary button has filled background style', async ({ page }) => {
      const primary = page.getByTestId('dual-cta-primary');

      const backgroundColor = await primary.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      // Violet-600 color
      expect(backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
      expect(backgroundColor).not.toBe('transparent');
    });

    test('secondary button has transparent background', async ({ page }) => {
      const secondary = page.getByTestId('dual-cta-secondary');

      const backgroundColor = await secondary.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      expect(['rgba(0, 0, 0, 0)', 'transparent']).toContain(backgroundColor);
    });
  });

  test.describe('Size Variants', () => {
    test('small size has smaller padding and font', async ({ page }) => {
      const primary = page.getByTestId('size-sm-primary');

      const styles = await primary.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          fontSize: parseFloat(computed.fontSize),
          paddingLeft: parseFloat(computed.paddingLeft),
        };
      });

      expect(styles.fontSize).toBeLessThanOrEqual(14); // text-sm is 14px
      expect(styles.paddingLeft).toBeLessThanOrEqual(16); // px-4 is 16px
    });

    test('medium size has default padding and font', async ({ page }) => {
      const primary = page.getByTestId('size-md-primary');

      const fontSize = await primary.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );

      expect(fontSize).toBeGreaterThanOrEqual(14); // text-base is 16px
    });

    test('large size has larger padding and font', async ({ page }) => {
      const primary = page.getByTestId('size-lg-primary');

      const styles = await primary.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          fontSize: parseFloat(computed.fontSize),
          paddingLeft: parseFloat(computed.paddingLeft),
        };
      });

      expect(styles.fontSize).toBeGreaterThanOrEqual(16); // text-lg is 18px
      expect(styles.paddingLeft).toBeGreaterThanOrEqual(20); // px-6 is 24px
    });
  });

  test.describe('Dark Variant', () => {
    test('primary button has white background on dark variant', async ({ page }) => {
      const primary = page.getByTestId('dark-primary');

      const backgroundColor = await primary.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      // White is rgb(255, 255, 255)
      expect(backgroundColor).toContain('255');
    });

    test('secondary button has transparent background on dark variant', async ({ page }) => {
      const secondary = page.getByTestId('dark-secondary');

      const backgroundColor = await secondary.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      expect(['rgba(0, 0, 0, 0)', 'transparent']).toContain(backgroundColor);
    });

    test('secondary button has white text on dark variant', async ({ page }) => {
      const secondary = page.getByTestId('dark-secondary');

      const color = await secondary.evaluate((el) =>
        window.getComputedStyle(el).color
      );
      // White is rgb(255, 255, 255)
      expect(color).toContain('255');
    });
  });

  test.describe('Light Variant', () => {
    test('primary button has dark background on light variant', async ({ page }) => {
      const primary = page.getByTestId('light-primary');

      const backgroundColor = await primary.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      // Gray-900 is dark
      expect(backgroundColor).not.toBe('rgb(255, 255, 255)');
    });

    test('primary button has white text on light variant', async ({ page }) => {
      const primary = page.getByTestId('light-primary');

      const color = await primary.evaluate((el) =>
        window.getComputedStyle(el).color
      );
      // White text
      expect(color).toContain('255');
    });
  });

  test.describe('Alignment Variants', () => {
    test('left alignment aligns buttons to start', async ({ page }) => {
      const container = page.getByTestId('align-left-container');

      const justifyContent = await container.evaluate((el) =>
        window.getComputedStyle(el).justifyContent
      );
      expect(['flex-start', 'start', 'normal']).toContain(justifyContent);
    });

    test('center alignment centers buttons', async ({ page }) => {
      const container = page.getByTestId('align-center-container');

      const justifyContent = await container.evaluate((el) =>
        window.getComputedStyle(el).justifyContent
      );
      expect(justifyContent).toBe('center');
    });

    test('right alignment aligns buttons to end', async ({ page }) => {
      const container = page.getByTestId('align-right-container');

      const justifyContent = await container.evaluate((el) =>
        window.getComputedStyle(el).justifyContent
      );
      expect(['flex-end', 'end']).toContain(justifyContent);
    });
  });

  test.describe('Stacked Layout', () => {
    test('stacked layout uses flex-direction column', async ({ page }) => {
      const container = page.getByTestId('stacked-left-container');

      const flexDirection = await container.evaluate((el) =>
        window.getComputedStyle(el).flexDirection
      );
      expect(flexDirection).toBe('column');
    });

    test('stacked center aligns buttons to center', async ({ page }) => {
      const container = page.getByTestId('stacked-center-container');

      const alignItems = await container.evaluate((el) =>
        window.getComputedStyle(el).alignItems
      );
      expect(alignItems).toBe('center');
    });
  });

  test.describe('With Arrows', () => {
    test('shows arrow icons when showArrows is true', async ({ page }) => {
      const container = page.getByTestId('arrows-default');
      const arrows = container.locator('svg');

      await expect(arrows).toHaveCount(2); // One for each button
    });

    test('arrows are visible in dark variant', async ({ page }) => {
      const container = page.getByTestId('arrows-dark');
      const arrows = container.locator('svg');

      await expect(arrows).toHaveCount(2);
      await expect(arrows.first()).toBeVisible();
    });

    test('arrows have correct dimensions', async ({ page }) => {
      const arrow = page.getByTestId('arrows-primary').locator('svg');

      const dimensions = await arrow.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          width: computed.width,
          height: computed.height,
        };
      });

      expect(dimensions.width).toBe('16px'); // w-4
      expect(dimensions.height).toBe('16px'); // h-4
    });
  });

  test.describe('Gap Variants', () => {
    test('small gap has smaller spacing', async ({ page }) => {
      const container = page.getByTestId('gap-sm-container');

      const gap = await container.evaluate((el) =>
        window.getComputedStyle(el).gap
      );
      // gap-2 is 8px (0.5rem)
      expect(parseFloat(gap)).toBeLessThanOrEqual(8);
    });

    test('large gap has larger spacing', async ({ page }) => {
      const container = page.getByTestId('gap-lg-container');

      const gap = await container.evaluate((el) =>
        window.getComputedStyle(el).gap
      );
      // gap-4 is 16px (1rem) minimum on mobile
      expect(parseFloat(gap)).toBeGreaterThanOrEqual(16);
    });
  });

  test.describe('Button Styling', () => {
    test('buttons have rounded-full border radius', async ({ page }) => {
      const primary = page.getByTestId('dual-cta-primary');

      const borderRadius = await primary.evaluate((el) =>
        window.getComputedStyle(el).borderRadius
      );
      // rounded-full is 9999px
      expect(parseFloat(borderRadius)).toBeGreaterThanOrEqual(9999);
    });

    test('buttons have font-semibold weight', async ({ page }) => {
      const primary = page.getByTestId('dual-cta-primary');

      const fontWeight = await primary.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('600');
    });

    test('buttons have transition property', async ({ page }) => {
      const primary = page.getByTestId('dual-cta-primary');

      const transition = await primary.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transition).not.toBe('none');
    });
  });

  test.describe('Real-World Usage Examples', () => {
    test('hero section renders correctly', async ({ page }) => {
      const heroPrimary = page.getByTestId('hero-primary');
      const heroSecondary = page.getByTestId('hero-secondary');

      await expect(heroPrimary).toBeVisible();
      await expect(heroSecondary).toBeVisible();
      await expect(heroPrimary).toHaveText('Buy $99');
      await expect(heroSecondary).toHaveText('Learn more');
      await expect(heroPrimary).toHaveAttribute('href', '/pricing');
    });

    test('feature card example renders correctly', async ({ page }) => {
      const featurePrimary = page.getByTestId('feature-card-primary');
      const featureSecondary = page.getByTestId('feature-card-secondary');

      await expect(featurePrimary).toBeVisible();
      await expect(featureSecondary).toBeVisible();
      await expect(featurePrimary).toHaveText(/Explore/);
      await expect(featureSecondary).toHaveText(/Learn more/);
    });

    test('CTA banner example renders correctly', async ({ page }) => {
      const bannerPrimary = page.getByTestId('banner-primary');
      const bannerSecondary = page.getByTestId('banner-secondary');

      await expect(bannerPrimary).toBeVisible();
      await expect(bannerSecondary).toBeVisible();
      await expect(bannerPrimary).toHaveText('Get Started');
      await expect(bannerSecondary).toHaveText('View Documentation');
    });
  });

  test.describe('Accessibility', () => {
    test('buttons are keyboard focusable', async ({ page }) => {
      const primary = page.getByTestId('dual-cta-primary');

      await primary.focus();
      await expect(primary).toBeFocused();
    });

    test('links render as anchor elements', async ({ page }) => {
      const linkedPrimary = page.getByTestId('linked-primary');

      const tagName = await linkedPrimary.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');
    });

    test('buttons without href render as button elements', async ({ page }) => {
      const primary = page.getByTestId('dual-cta-primary');

      const tagName = await primary.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('button');
    });
  });

  test.describe('Responsive Behavior', () => {
    test('buttons are inline on desktop viewport', async ({ page }) => {
      // Set desktop viewport
      await page.setViewportSize({ width: 1024, height: 768 });
      await page.goto('/test-utils/dual-cta');

      const container = page.getByTestId('responsive-container');

      const flexDirection = await container.evaluate((el) =>
        window.getComputedStyle(el).flexDirection
      );
      expect(flexDirection).toBe('row');
    });

    test('buttons stack on mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/test-utils/dual-cta');

      const container = page.getByTestId('responsive-container');

      const flexDirection = await container.evaluate((el) =>
        window.getComputedStyle(el).flexDirection
      );
      expect(flexDirection).toBe('column');
    });
  });
});
