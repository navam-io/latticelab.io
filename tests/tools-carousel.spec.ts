import { test, expect } from '@playwright/test';

test.describe('ToolsCarousel Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/tools-carousel');
    await page.waitForLoadState('networkidle');
  });

  test.describe('Basic Structure', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('ToolsCarousel Component Test');
    });

    test('default carousel is visible', async ({ page }) => {
      const carousel = page.getByTestId('default-carousel');
      await expect(carousel).toBeVisible();
    });

    test('carousel section is a section element', async ({ page }) => {
      const carousel = page.getByTestId('default-carousel');
      const tagName = await carousel.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('section');
    });

    test('carousel container exists', async ({ page }) => {
      const container = page.getByTestId('default-carousel-container');
      await expect(container).toBeVisible();
    });

    test('carousel track exists', async ({ page }) => {
      const track = page.getByTestId('default-carousel-track');
      await expect(track).toBeVisible();
    });
  });

  test.describe('Section Header', () => {
    test('header is visible by default', async ({ page }) => {
      const header = page.getByTestId('default-carousel-header');
      await expect(header).toBeVisible();
    });

    test('title displays correctly', async ({ page }) => {
      const title = page.getByTestId('default-carousel-title');
      await expect(title).toBeVisible();
      await expect(title).toContainText('Powerful Tools');
    });

    test('description displays correctly', async ({ page }) => {
      const description = page.getByTestId('default-carousel-description');
      await expect(description).toBeVisible();
      await expect(description).toContainText('Seven specialized tools');
    });

    test('header is hidden when showHeader is false', async ({ page }) => {
      const header = page.getByTestId('no-header-carousel-header');
      await expect(header).not.toBeAttached();
    });

    test('custom title displays correctly', async ({ page }) => {
      const title = page.getByTestId('custom-header-carousel-title');
      await expect(title).toContainText('AI Infrastructure Tools');
    });

    test('custom description displays correctly', async ({ page }) => {
      const description = page.getByTestId('custom-header-carousel-description');
      await expect(description).toContainText('Everything you need');
    });

    test('title has correct styling', async ({ page }) => {
      const title = page.getByTestId('default-carousel-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('font-bold');
      expect(classes).toContain('text-gray-900');
    });
  });

  test.describe('Tool Cards - All 7 Tools', () => {
    test('Accelerator Registry card exists', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-accelerator-registry');
      await expect(card).toBeVisible();
    });

    test('Memory Calculator card exists', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-memory-calculator');
      await expect(card).toBeVisible();
    });

    test('TCO Calculator card exists', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-tco-calculator');
      await expect(card).toBeVisible();
    });

    test('Parallelism Advisor card exists', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-parallelism-advisor');
      await expect(card).toBeVisible();
    });

    test('Quantization Advisor card exists', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-quantization-advisor');
      await expect(card).toBeVisible();
    });

    test('Spot Instance Advisor card exists', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-spot-advisor');
      await expect(card).toBeVisible();
    });

    test('Evaluation Framework card exists', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-evaluation');
      await expect(card).toBeVisible();
    });
  });

  test.describe('Tool Card Content', () => {
    test('Accelerator Registry has correct name', async ({ page }) => {
      const name = page.getByTestId('default-carousel-tool-accelerator-registry-name');
      await expect(name).toContainText('Accelerator Registry');
    });

    test('Accelerator Registry has icon', async ({ page }) => {
      const icon = page.getByTestId('default-carousel-tool-accelerator-registry-icon');
      await expect(icon).toBeVisible();
    });

    test('Accelerator Registry has description', async ({ page }) => {
      const desc = page.getByTestId('default-carousel-tool-accelerator-registry-description');
      await expect(desc).toBeVisible();
      await expect(desc).toContainText('Compare GPUs');
    });

    test('Accelerator Registry has explore link', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-accelerator-registry-link');
      await expect(link).toBeVisible();
      await expect(link).toContainText('Explore');
      await expect(link).toHaveAttribute('href', '/tools/accelerator-registry');
    });

    test('Memory Calculator has correct link', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-memory-calculator-link');
      await expect(link).toHaveAttribute('href', '/tools/memory-calculator');
    });

    test('TCO Calculator has correct link', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-tco-calculator-link');
      await expect(link).toHaveAttribute('href', '/tools/tco-calculator');
    });

    test('Parallelism Advisor has correct link', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-parallelism-advisor-link');
      await expect(link).toHaveAttribute('href', '/tools/parallelism-advisor');
    });

    test('Quantization Advisor has correct link', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-quantization-advisor-link');
      await expect(link).toHaveAttribute('href', '/tools/quantization-advisor');
    });

    test('Spot Advisor has correct link', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-spot-advisor-link');
      await expect(link).toHaveAttribute('href', '/tools/spot-advisor');
    });

    test('Evaluation has correct link', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-evaluation-link');
      await expect(link).toHaveAttribute('href', '/tools/evaluation');
    });
  });

  test.describe('Tool Card Styling', () => {
    test('card has rounded corners', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-accelerator-registry');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('rounded-2xl');
    });

    test('card has border', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-accelerator-registry');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('border');
    });

    test('card has white background', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-accelerator-registry');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('bg-white');
    });

    test('card has hover transition', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-accelerator-registry');
      const classes = await card.getAttribute('class');
      expect(classes).toContain('transition-all');
      expect(classes).toContain('duration-300');
    });

    test('icon has colored background', async ({ page }) => {
      const icon = page.getByTestId('default-carousel-tool-accelerator-registry-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-violet-100');
    });

    test('TCO Calculator icon has emerald color', async ({ page }) => {
      const icon = page.getByTestId('default-carousel-tool-tco-calculator-icon');
      const classes = await icon.getAttribute('class');
      expect(classes).toContain('bg-emerald-100');
    });
  });

  test.describe('Scroll Track', () => {
    test('track has horizontal scroll', async ({ page }) => {
      const track = page.getByTestId('default-carousel-track');
      const classes = await track.getAttribute('class');
      expect(classes).toContain('overflow-x-auto');
    });

    test('track has smooth scroll', async ({ page }) => {
      const track = page.getByTestId('default-carousel-track');
      const classes = await track.getAttribute('class');
      expect(classes).toContain('scroll-smooth');
    });

    test('track has snap behavior', async ({ page }) => {
      const track = page.getByTestId('default-carousel-track');
      const classes = await track.getAttribute('class');
      expect(classes).toContain('snap-x');
    });

    test('track has gap between cards', async ({ page }) => {
      const track = page.getByTestId('default-carousel-track');
      const classes = await track.getAttribute('class');
      expect(classes).toContain('gap-4');
    });
  });

  test.describe('Background Variants', () => {
    test('default has white background', async ({ page }) => {
      const carousel = page.getByTestId('default-carousel');
      const classes = await carousel.getAttribute('class');
      expect(classes).toContain('bg-white');
    });

    test('gray background variant', async ({ page }) => {
      const carousel = page.getByTestId('gray-bg-carousel');
      const classes = await carousel.getAttribute('class');
      expect(classes).toContain('bg-gray-50');
    });

    test('gradient background variant', async ({ page }) => {
      const carousel = page.getByTestId('gradient-bg-carousel');
      const classes = await carousel.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-b');
    });
  });

  test.describe('Scroll Dots (Mobile)', () => {
    test('dots container exists by default', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const dots = page.getByTestId('default-carousel-dots');
      await expect(dots).toBeVisible();
    });

    test('dots hidden when showDots is false', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const dots = page.getByTestId('no-dots-carousel-dots');
      await expect(dots).not.toBeAttached();
    });

    test('first dot exists', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const dot = page.getByTestId('default-carousel-dot-0');
      await expect(dot).toBeVisible();
    });

    test('all 7 dots exist for 7 tools', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      for (let i = 0; i < 7; i++) {
        const dot = page.getByTestId(`default-carousel-dot-${i}`);
        await expect(dot).toBeVisible();
      }
    });
  });

  test.describe('Responsive Behavior', () => {
    test('carousel visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const carousel = page.getByTestId('default-carousel');
      await expect(carousel).toBeVisible();
    });

    test('carousel visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const carousel = page.getByTestId('default-carousel');
      await expect(carousel).toBeVisible();
    });

    test('carousel visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const carousel = page.getByTestId('default-carousel');
      await expect(carousel).toBeVisible();
    });

    test('all tools visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const track = page.getByTestId('default-carousel-track');
      await expect(track).toBeVisible();
      // First tool should be visible
      const firstTool = page.getByTestId('default-carousel-tool-accelerator-registry');
      await expect(firstTool).toBeVisible();
    });

    test('dots hidden on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
      const dots = page.getByTestId('default-carousel-dots');
      // md:hidden class should hide dots on desktop
      await expect(dots).toBeHidden();
    });
  });

  test.describe('Minimal Configuration', () => {
    test('minimal carousel has no header', async ({ page }) => {
      const header = page.getByTestId('minimal-carousel-header');
      await expect(header).not.toBeAttached();
    });

    test('minimal carousel has no dots', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const dots = page.getByTestId('minimal-carousel-dots');
      await expect(dots).not.toBeAttached();
    });

    test('minimal carousel still has tools', async ({ page }) => {
      const tool = page.getByTestId('minimal-carousel-tool-accelerator-registry');
      await expect(tool).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('section has padding', async ({ page }) => {
      const carousel = page.getByTestId('default-carousel');
      const classes = await carousel.getAttribute('class');
      expect(classes).toContain('py-16');
    });

    test('explore links are accessible', async ({ page }) => {
      const link = page.getByTestId('default-carousel-tool-accelerator-registry-link');
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
    });

    test('card is an article element', async ({ page }) => {
      const card = page.getByTestId('default-carousel-tool-accelerator-registry');
      const tagName = await card.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('article');
    });

    test('tool name is h3 element', async ({ page }) => {
      const name = page.getByTestId('default-carousel-tool-accelerator-registry-name');
      const tagName = await name.evaluate((el) => el.tagName.toLowerCase());
      expect(tagName).toBe('h3');
    });
  });
});
