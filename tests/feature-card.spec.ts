import { test, expect } from '@playwright/test';

test.describe('FeatureCard Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/feature-card');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Basic Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('FeatureCard Component Test');
    });

    test('basic card is visible', async ({ page }) => {
      const card = page.getByTestId('basic-card');
      await expect(card).toBeVisible();
    });

    test('card has rounded corners', async ({ page }) => {
      const card = page.getByTestId('basic-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('rounded-3xl');
    });

    test('card has border', async ({ page }) => {
      const card = page.getByTestId('basic-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('border');
    });

    test('card has white background', async ({ page }) => {
      const card = page.getByTestId('basic-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('bg-white');
    });
  });

  test.describe('Title and Tagline', () => {
    test('title is visible', async ({ page }) => {
      const title = page.getByTestId('basic-card-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Sources');
    });

    test('tagline is visible', async ({ page }) => {
      const tagline = page.getByTestId('basic-card-tagline');
      await expect(tagline).toBeVisible();
      await expect(tagline).toContainText('Your Knowledge, Indexed');
    });

    test('title has correct styling', async ({ page }) => {
      const title = page.getByTestId('basic-card-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('font-bold');
      expect(classes).toContain('text-gray-900');
    });

    test('tagline has muted styling', async ({ page }) => {
      const tagline = page.getByTestId('basic-card-tagline');
      const classes = await tagline.getAttribute('class');
      expect(classes).toContain('text-gray-500');
    });
  });

  test.describe('Icon', () => {
    test('icon container is visible', async ({ page }) => {
      const icon = page.getByTestId('basic-card-icon');
      await expect(icon).toBeVisible();
    });

    test('icon has rounded container', async ({ page }) => {
      const icon = page.getByTestId('basic-card-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('rounded-xl');
    });

    test('violet variant has violet icon bg', async ({ page }) => {
      const icon = page.getByTestId('variant-violet-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-violet-100');
    });

    test('blue variant has blue icon bg', async ({ page }) => {
      const icon = page.getByTestId('variant-blue-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-blue-100');
    });
  });

  test.describe('Screenshot', () => {
    test('screenshot is visible when provided', async ({ page }) => {
      const screenshot = page.getByTestId('screenshot-card-screenshot');
      await expect(screenshot).toBeVisible();
    });

    test('screenshot has alt text', async ({ page }) => {
      const screenshot = page.getByTestId('screenshot-card-screenshot');
      const alt = await screenshot.getAttribute('alt');
      expect(alt).toContain('Lab');
    });

    test('placeholder shown when no screenshot', async ({ page }) => {
      const placeholder = page.getByTestId('placeholder-card-placeholder');
      await expect(placeholder).toBeVisible();
    });

    test('image container has rounded corners', async ({ page }) => {
      const container = page.getByTestId('basic-card-image-container');
      const classes = await container.getAttribute('class');
      expect(classes).toContain('rounded-xl');
    });
  });

  test.describe('Description', () => {
    test('description is visible when provided', async ({ page }) => {
      const description = page.getByTestId('screenshot-card-description');
      await expect(description).toBeVisible();
      await expect(description).toContainText('Chat with an AI research agent');
    });

    test('description has correct styling', async ({ page }) => {
      const description = page.getByTestId('screenshot-card-description');
      const classes = await description.getAttribute('class');
      expect(classes).toContain('text-gray-600');
    });
  });

  test.describe('Badge', () => {
    test('badge is visible when provided', async ({ page }) => {
      const badge = page.getByTestId('badge-card-badge');
      await expect(badge).toBeVisible();
      await expect(badge).toContainText('36 Blueprints');
    });

    test('badge has rounded styling', async ({ page }) => {
      const badge = page.getByTestId('badge-card-badge');
      const badgeSpan = badge.locator('span');
      const classes = await badgeSpan.getAttribute('class');
      expect(classes).toContain('rounded-full');
    });
  });

  test.describe('CTAs', () => {
    test('simple link is visible', async ({ page }) => {
      const link = page.getByTestId('basic-card-link');
      await expect(link).toBeVisible();
      await expect(link).toContainText('Learn more');
    });

    test('simple link has correct href', async ({ page }) => {
      const link = page.getByTestId('basic-card-link');
      await expect(link).toHaveAttribute('href', '/features/sources');
    });

    test('dual CTAs are visible when configured', async ({ page }) => {
      const primaryCTA = page.getByTestId('dual-cta-card-primary-cta');
      const secondaryCTA = page.getByTestId('dual-cta-card-secondary-cta');

      await expect(primaryCTA).toBeVisible();
      await expect(secondaryCTA).toBeVisible();
    });

    test('primary CTA has correct label', async ({ page }) => {
      const primaryCTA = page.getByTestId('dual-cta-card-primary-cta');
      await expect(primaryCTA).toContainText('Try Studio');
    });

    test('secondary CTA has correct label', async ({ page }) => {
      const secondaryCTA = page.getByTestId('dual-cta-card-secondary-cta');
      await expect(secondaryCTA).toContainText('Learn more');
    });

    test('CTAs have correct hrefs', async ({ page }) => {
      const primaryCTA = page.getByTestId('dual-cta-card-primary-cta');
      const secondaryCTA = page.getByTestId('dual-cta-card-secondary-cta');

      await expect(primaryCTA).toHaveAttribute('href', '/features/studio#demo');
      await expect(secondaryCTA).toHaveAttribute('href', '/features/studio');
    });
  });

  test.describe('Hover Effects', () => {
    test('card has hover transition classes', async ({ page }) => {
      const card = page.getByTestId('basic-card');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('transition-all');
      expect(classes).toContain('hover:shadow-xl');
      expect(classes).toContain('hover:-translate-y-1');
    });

    test('glow element is present', async ({ page }) => {
      const glow = page.getByTestId('basic-card-glow');
      await expect(glow).toBeAttached();
    });

    test('glow element is hidden by default', async ({ page }) => {
      const glow = page.getByTestId('basic-card-glow');
      const classes = await glow.getAttribute('class');
      expect(classes).toContain('opacity-0');
    });

    test('no glow when disabled', async ({ page }) => {
      const card = page.getByTestId('no-glow-card');
      const glow = page.getByTestId('no-glow-card-glow');

      await expect(card).toBeVisible();
      await expect(glow).not.toBeAttached();
    });
  });

  test.describe('Color Variants', () => {
    test('all color variants render', async ({ page }) => {
      const variants = ['violet', 'blue', 'teal', 'amber', 'emerald', 'purple'];

      for (const variant of variants) {
        const card = page.getByTestId(`variant-${variant}`);
        await expect(card).toBeVisible();
      }
    });

    test('teal variant has teal icon', async ({ page }) => {
      const icon = page.getByTestId('variant-teal-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-teal-100');
      expect(classes).toContain('text-teal-600');
    });

    test('amber variant has amber icon', async ({ page }) => {
      const icon = page.getByTestId('variant-amber-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-amber-100');
      expect(classes).toContain('text-amber-600');
    });

    test('emerald variant has emerald icon', async ({ page }) => {
      const icon = page.getByTestId('variant-emerald-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-emerald-100');
      expect(classes).toContain('text-emerald-600');
    });
  });

  test.describe('Grid Layout', () => {
    test('grid cards are visible', async ({ page }) => {
      const sources = page.getByTestId('grid-sources');
      const lab = page.getByTestId('grid-lab');
      const studio = page.getByTestId('grid-studio');
      const blueprints = page.getByTestId('grid-blueprints');

      await expect(sources).toBeVisible();
      await expect(lab).toBeVisible();
      await expect(studio).toBeVisible();
      await expect(blueprints).toBeVisible();
    });

    test('grid sources has correct title', async ({ page }) => {
      const title = page.getByTestId('grid-sources-title');
      await expect(title).toContainText('Sources');
    });

    test('grid blueprints has badge', async ({ page }) => {
      const badge = page.getByTestId('grid-blueprints-badge');
      await expect(badge).toBeVisible();
    });
  });

  test.describe('Responsive Behavior', () => {
    test('card is visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const card = page.getByTestId('basic-card');
      await expect(card).toBeVisible();
    });

    test('card is visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const card = page.getByTestId('basic-card');
      await expect(card).toBeVisible();
    });

    test('card is visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const card = page.getByTestId('basic-card');
      await expect(card).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('card is an article element', async ({ page }) => {
      const card = page.getByTestId('basic-card');
      const tagName = await card.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('article');
    });

    test('title is h3 element', async ({ page }) => {
      const title = page.getByTestId('basic-card-title');
      const tagName = await title.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h3');
    });

    test('link is keyboard focusable', async ({ page }) => {
      const link = page.getByTestId('basic-card-link');
      await link.focus();
      await expect(link).toBeFocused();
    });

    test('screenshot has alt attribute', async ({ page }) => {
      const screenshot = page.getByTestId('screenshot-card-screenshot');
      const alt = await screenshot.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt!.length).toBeGreaterThan(0);
    });
  });
});
