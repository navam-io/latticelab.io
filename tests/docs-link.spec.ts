import { test, expect } from '@playwright/test';

test.describe('DocsLink Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/docs-link');
  });

  test.describe('Basic Usage', () => {
    test('renders with title only', async ({ page }) => {
      const link = page.getByTestId('basic-link');
      await expect(link).toBeVisible();

      const title = link.getByTestId('docs-link-title');
      await expect(title).toHaveText('Getting Started');
    });

    test('renders with title and description', async ({ page }) => {
      const link = page.getByTestId('basic-with-desc');
      await expect(link).toBeVisible();

      const title = link.getByTestId('docs-link-title');
      const description = link.getByTestId('docs-link-description');

      await expect(title).toHaveText('Getting Started Guide');
      await expect(description).toHaveText('Learn how to install and configure Lattice for your first project.');
    });

    test('renders as anchor element with href', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      const tagName = await link.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');

      await expect(link).toHaveAttribute('href', '/docs/getting-started');
    });
  });

  test.describe('Icon Variants', () => {
    test('document icon (default) renders correctly', async ({ page }) => {
      const link = page.getByTestId('icon-document-link');
      const icon = link.getByTestId('icon-document');
      await expect(icon).toBeVisible();
    });

    test('book icon renders correctly', async ({ page }) => {
      const link = page.getByTestId('icon-book-link');
      const icon = link.getByTestId('icon-book');
      await expect(icon).toBeVisible();
    });

    test('code icon renders correctly', async ({ page }) => {
      const link = page.getByTestId('icon-code-link');
      const icon = link.getByTestId('icon-code');
      await expect(icon).toBeVisible();
    });

    test('guide icon renders correctly', async ({ page }) => {
      const link = page.getByTestId('icon-guide-link');
      const icon = link.getByTestId('icon-guide');
      await expect(icon).toBeVisible();
    });

    test('api icon renders correctly', async ({ page }) => {
      const link = page.getByTestId('icon-api-link');
      const icon = link.getByTestId('icon-api');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Style Variants', () => {
    test('default variant has gray background', async ({ page }) => {
      const link = page.getByTestId('variant-default-link');

      const backgroundColor = await link.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      // Gray-50 has a background (not transparent)
      expect(['rgba(0, 0, 0, 0)', 'transparent']).not.toContain(backgroundColor);
      expect(backgroundColor).not.toBe('rgb(255, 255, 255)');
    });

    test('subtle variant has transparent background', async ({ page }) => {
      const link = page.getByTestId('variant-subtle-link');

      const backgroundColor = await link.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      expect(['rgba(0, 0, 0, 0)', 'transparent']).toContain(backgroundColor);
    });

    test('bordered variant has white background and border', async ({ page }) => {
      const link = page.getByTestId('variant-bordered-link');

      const styles = await link.evaluate((el) => {
        const computed = window.getComputedStyle(el);
        return {
          backgroundColor: computed.backgroundColor,
          borderWidth: computed.borderWidth,
        };
      });

      // White background
      expect(styles.backgroundColor).toContain('255');
      // Has border
      expect(parseFloat(styles.borderWidth)).toBeGreaterThan(0);
    });

    test('filled variant has violet background', async ({ page }) => {
      const link = page.getByTestId('variant-filled-link');

      const backgroundColor = await link.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      // Violet-50 is light purple
      expect(backgroundColor).not.toBe('rgb(255, 255, 255)');
      expect(backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    });
  });

  test.describe('Size Variants', () => {
    test('small size has smaller padding', async ({ page }) => {
      const link = page.getByTestId('size-sm-link');

      const padding = await link.evaluate((el) =>
        window.getComputedStyle(el).padding
      );
      // p-3 is 12px
      expect(parseFloat(padding)).toBeLessThanOrEqual(12);
    });

    test('medium size has default padding', async ({ page }) => {
      const link = page.getByTestId('size-md-link');

      const padding = await link.evaluate((el) =>
        window.getComputedStyle(el).padding
      );
      // p-4 is 16px
      expect(parseFloat(padding)).toBe(16);
    });

    test('large size has larger padding', async ({ page }) => {
      const link = page.getByTestId('size-lg-link');

      const padding = await link.evaluate((el) =>
        window.getComputedStyle(el).padding
      );
      // p-5 is 20px
      expect(parseFloat(padding)).toBeGreaterThanOrEqual(20);
    });

    test('small size has smaller title font', async ({ page }) => {
      const title = page.getByTestId('size-sm-link').getByTestId('docs-link-title');

      const fontSize = await title.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      // text-sm is 14px
      expect(fontSize).toBeLessThanOrEqual(14);
    });

    test('large size has larger title font', async ({ page }) => {
      const title = page.getByTestId('size-lg-link').getByTestId('docs-link-title');

      const fontSize = await title.evaluate((el) =>
        parseFloat(window.getComputedStyle(el).fontSize)
      );
      // text-lg is 18px
      expect(fontSize).toBeGreaterThanOrEqual(18);
    });
  });

  test.describe('External Links', () => {
    test('internal link shows chevron arrow', async ({ page }) => {
      const link = page.getByTestId('internal-link-test');
      const arrow = link.getByTestId('arrow-internal');

      await expect(arrow).toBeVisible();
    });

    test('internal link does not have target="_blank"', async ({ page }) => {
      const link = page.getByTestId('internal-link-test');

      const target = await link.getAttribute('target');
      expect(target).toBeNull();
    });

    test('external link shows external arrow icon', async ({ page }) => {
      const link = page.getByTestId('external-link-test');
      const arrow = link.getByTestId('arrow-external');

      await expect(arrow).toBeVisible();
    });

    test('external link has target="_blank"', async ({ page }) => {
      const link = page.getByTestId('external-link-test');

      await expect(link).toHaveAttribute('target', '_blank');
    });

    test('external link has rel="noopener noreferrer"', async ({ page }) => {
      const link = page.getByTestId('external-link-test');

      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  test.describe('Styling', () => {
    test('has rounded corners', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      const borderRadius = await link.evaluate((el) =>
        window.getComputedStyle(el).borderRadius
      );
      // rounded-xl is 12px
      expect(parseFloat(borderRadius)).toBeGreaterThanOrEqual(12);
    });

    test('has transition property', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      const transition = await link.evaluate((el) =>
        window.getComputedStyle(el).transitionProperty
      );
      expect(transition).not.toBe('none');
    });

    test('title has font-semibold weight', async ({ page }) => {
      const title = page.getByTestId('basic-link').getByTestId('docs-link-title');

      const fontWeight = await title.evaluate((el) =>
        window.getComputedStyle(el).fontWeight
      );
      expect(fontWeight).toBe('600');
    });

    test('has no text decoration (no underline)', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      const textDecoration = await link.evaluate((el) =>
        window.getComputedStyle(el).textDecoration
      );
      expect(textDecoration).toContain('none');
    });
  });

  test.describe('Real-World Usage Examples', () => {
    test('feature page link renders correctly', async ({ page }) => {
      const link = page.getByTestId('feature-page-link');
      await expect(link).toBeVisible();

      const title = link.getByTestId('docs-link-title');
      await expect(title).toHaveText('Sources Documentation');
    });

    test('quick start link renders correctly', async ({ page }) => {
      const link = page.getByTestId('quickstart-link');
      await expect(link).toBeVisible();

      const icon = link.getByTestId('icon-guide');
      await expect(icon).toBeVisible();
    });

    test('API reference link uses filled variant', async ({ page }) => {
      const link = page.getByTestId('api-ref-link');
      await expect(link).toBeVisible();

      const backgroundColor = await link.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      // Should have violet background (not white or transparent)
      expect(backgroundColor).not.toBe('rgb(255, 255, 255)');
      expect(['rgba(0, 0, 0, 0)', 'transparent']).not.toContain(backgroundColor);
    });

    test('in-content link uses subtle variant', async ({ page }) => {
      const link = page.getByTestId('in-content-link');
      await expect(link).toBeVisible();

      const backgroundColor = await link.evaluate((el) =>
        window.getComputedStyle(el).backgroundColor
      );
      expect(['rgba(0, 0, 0, 0)', 'transparent']).toContain(backgroundColor);
    });
  });

  test.describe('Combined Options', () => {
    test('combined link has all specified properties', async ({ page }) => {
      const link = page.getByTestId('combined-link');
      await expect(link).toBeVisible();

      // Has external link icon
      const arrow = link.getByTestId('arrow-external');
      await expect(arrow).toBeVisible();

      // Has API icon
      const icon = link.getByTestId('icon-api');
      await expect(icon).toBeVisible();

      // Is external link
      await expect(link).toHaveAttribute('target', '_blank');

      // Has large size padding
      const padding = await link.evaluate((el) =>
        window.getComputedStyle(el).padding
      );
      expect(parseFloat(padding)).toBeGreaterThanOrEqual(20);
    });
  });

  test.describe('Accessibility', () => {
    test('link is keyboard focusable', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      await link.focus();
      await expect(link).toBeFocused();
    });

    test('link has accessible name from title', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      const text = await link.textContent();
      expect(text).toContain('Getting Started');
    });

    test('icons have no accessible text (decorative)', async ({ page }) => {
      const link = page.getByTestId('icon-book-link');
      const svg = link.getByTestId('icon-book');

      // SVG should not have accessible text that interferes
      const ariaHidden = await svg.getAttribute('aria-hidden');
      // Either aria-hidden or no role - both acceptable for decorative icons
      expect(ariaHidden === 'true' || ariaHidden === null).toBeTruthy();
    });
  });

  test.describe('Layout', () => {
    test('uses flexbox layout', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      const display = await link.evaluate((el) =>
        window.getComputedStyle(el).display
      );
      expect(display).toBe('flex');
    });

    test('icon, content, and arrow are properly aligned', async ({ page }) => {
      const link = page.getByTestId('basic-with-desc');

      const alignItems = await link.evaluate((el) =>
        window.getComputedStyle(el).alignItems
      );
      expect(['flex-start', 'start']).toContain(alignItems);
    });

    test('has gap between elements', async ({ page }) => {
      const link = page.getByTestId('basic-link');

      const gap = await link.evaluate((el) =>
        window.getComputedStyle(el).gap
      );
      // gap-4 is 16px
      expect(parseFloat(gap)).toBeGreaterThanOrEqual(16);
    });
  });
});
