import { test, expect } from '@playwright/test';

test.describe('FooterColumn Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/footer-column');
    await page.waitForLoadState('domcontentloaded');
  });

  test.describe('Page Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('FooterColumn Component Test');
    });
  });

  test.describe('FooterLinks Basic Structure', () => {
    test('footer links container is visible', async ({ page }) => {
      const links = page.getByTestId('links-normal');
      await expect(links).toBeVisible();
    });

    test('footer links is a ul element', async ({ page }) => {
      const links = page.getByTestId('links-normal');
      const tagName = await links.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('ul');
    });

    test('links have correct number of items', async ({ page }) => {
      const links = page.getByTestId('links-normal');
      const items = links.locator('li');
      await expect(items).toHaveCount(5);
    });

    test('each link item contains an anchor', async ({ page }) => {
      const link = page.getByTestId('links-normal-link-0');
      await expect(link).toBeAttached();
      const tagName = await link.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('a');
    });

    test('link has correct href', async ({ page }) => {
      const link = page.getByTestId('links-normal-link-0');
      await expect(link).toHaveAttribute('href', '/features');
    });

    test('link has correct text', async ({ page }) => {
      const link = page.getByTestId('links-normal-link-0');
      await expect(link).toContainText('All Features');
    });
  });

  test.describe('FooterLinks Spacing', () => {
    test('normal spacing has correct class', async ({ page }) => {
      const links = page.getByTestId('links-normal');
      const classes = await links.getAttribute('class');
      expect(classes).toContain('space-y-2');
    });

    test('tight spacing has correct class', async ({ page }) => {
      const links = page.getByTestId('links-tight');
      const classes = await links.getAttribute('class');
      expect(classes).toContain('space-y-1');
    });

    test('relaxed spacing has correct class', async ({ page }) => {
      const links = page.getByTestId('links-relaxed');
      const classes = await links.getAttribute('class');
      expect(classes).toContain('space-y-3');
    });
  });

  test.describe('FooterLinks External Links', () => {
    test('external link has target blank', async ({ page }) => {
      // Navam.io is external (index 1)
      const link = page.getByTestId('links-external-link-1');
      await expect(link).toHaveAttribute('target', '_blank');
    });

    test('external link has rel noopener noreferrer', async ({ page }) => {
      const link = page.getByTestId('links-external-link-1');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    test('external link has external icon', async ({ page }) => {
      const icon = page.getByTestId('links-external-external-icon-1');
      await expect(icon).toBeAttached();
    });

    test('internal link has no target', async ({ page }) => {
      const link = page.getByTestId('links-external-link-0');
      const target = await link.getAttribute('target');
      expect(target).toBeNull();
    });

    test('internal link has no external icon', async ({ page }) => {
      const icon = page.getByTestId('links-external-external-icon-0');
      await expect(icon).not.toBeAttached();
    });
  });

  test.describe('FooterLinks Sizes', () => {
    test('small size has text-sm class', async ({ page }) => {
      const link = page.getByTestId('links-sm-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('text-sm');
    });

    test('medium size has text-base class', async ({ page }) => {
      const link = page.getByTestId('links-md-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('text-base');
    });
  });

  test.describe('FooterLinks Hover States', () => {
    test('link has hover class', async ({ page }) => {
      const link = page.getByTestId('links-normal-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('hover:text-gray-900');
    });

    test('link has transition class', async ({ page }) => {
      const link = page.getByTestId('links-normal-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('transition-colors');
    });
  });

  test.describe('FooterColumn Basic Structure', () => {
    test('footer column is visible', async ({ page }) => {
      const column = page.getByTestId('column-default');
      await expect(column).toBeVisible();
    });

    test('footer column title is visible', async ({ page }) => {
      const title = page.getByTestId('column-default-title');
      await expect(title).toBeVisible();
    });

    test('footer column title is h3', async ({ page }) => {
      const title = page.getByTestId('column-default-title');
      const tagName = await title.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h3');
    });

    test('footer column title text is correct', async ({ page }) => {
      const title = page.getByTestId('column-default-title');
      await expect(title).toContainText('Features');
    });

    test('footer column contains links', async ({ page }) => {
      const links = page.getByTestId('column-default-links');
      await expect(links).toBeAttached();
    });
  });

  test.describe('FooterColumn Title Sizes', () => {
    test('small title has uppercase class', async ({ page }) => {
      const title = page.getByTestId('column-title-sm-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('uppercase');
      expect(classes).toContain('tracking-wider');
    });

    test('small title has text-xs class', async ({ page }) => {
      const title = page.getByTestId('column-title-sm-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('text-xs');
    });

    test('medium title has text-sm class', async ({ page }) => {
      const title = page.getByTestId('column-title-md-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('text-sm');
    });

    test('large title has text-base class', async ({ page }) => {
      const title = page.getByTestId('column-title-lg-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('text-base');
    });
  });

  test.describe('FooterColumn Title Styling', () => {
    test('title has font-semibold class', async ({ page }) => {
      const title = page.getByTestId('column-default-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('font-semibold');
    });

    test('title has gray-900 text color', async ({ page }) => {
      const title = page.getByTestId('column-default-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('text-gray-900');
    });

    test('title has margin bottom', async ({ page }) => {
      const title = page.getByTestId('column-default-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('mb-4');
    });
  });

  test.describe('FooterColumn with External Links', () => {
    test('column contains external link icons', async ({ page }) => {
      // Check for Navam.io external icon
      const icon = page.getByTestId('column-external-links-external-icon-1');
      await expect(icon).toBeAttached();
    });

    test('internal links in column have no icon', async ({ page }) => {
      const icon = page.getByTestId('column-external-links-external-icon-0');
      await expect(icon).not.toBeAttached();
    });
  });

  test.describe('FooterColumn Link Spacing', () => {
    test('column with tight spacing passes to links', async ({ page }) => {
      const links = page.getByTestId('column-spacing-tight-links');
      const classes = await links.getAttribute('class');
      expect(classes).toContain('space-y-1');
    });

    test('column with normal spacing passes to links', async ({ page }) => {
      const links = page.getByTestId('column-spacing-normal-links');
      const classes = await links.getAttribute('class');
      expect(classes).toContain('space-y-2');
    });

    test('column with relaxed spacing passes to links', async ({ page }) => {
      const links = page.getByTestId('column-spacing-relaxed-links');
      const classes = await links.getAttribute('class');
      expect(classes).toContain('space-y-3');
    });
  });

  test.describe('6-Column Footer Preview', () => {
    test('features column is visible', async ({ page }) => {
      const column = page.getByTestId('preview-features');
      await expect(column).toBeVisible();
    });

    test('tools column is visible', async ({ page }) => {
      const column = page.getByTestId('preview-tools');
      await expect(column).toBeVisible();
    });

    test('resources column is visible', async ({ page }) => {
      const column = page.getByTestId('preview-resources');
      await expect(column).toBeVisible();
    });

    test('solutions column is visible', async ({ page }) => {
      const column = page.getByTestId('preview-solutions');
      await expect(column).toBeVisible();
    });

    test('company column is visible', async ({ page }) => {
      const column = page.getByTestId('preview-company');
      await expect(column).toBeVisible();
    });

    test('support column is visible', async ({ page }) => {
      const column = page.getByTestId('preview-support');
      await expect(column).toBeVisible();
    });
  });

  test.describe('Responsive Behavior', () => {
    test('columns visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const column = page.getByTestId('column-default');
      await expect(column).toBeVisible();
    });

    test('columns visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const column = page.getByTestId('column-default');
      await expect(column).toBeVisible();
    });

    test('columns visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const column = page.getByTestId('column-default');
      await expect(column).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('links are focusable', async ({ page }) => {
      const link = page.getByTestId('links-normal-link-0');
      await link.focus();
      await expect(link).toBeFocused();
    });

    test('column title uses proper heading', async ({ page }) => {
      const title = page.getByTestId('column-default-title');
      const tagName = await title.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h3');
    });

    test('external links indicate new window', async ({ page }) => {
      // External links have rel attribute for accessibility
      const link = page.getByTestId('links-external-link-1');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
