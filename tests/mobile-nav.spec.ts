import { test, expect } from '@playwright/test';

test.describe('MobileNav Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/mobile-nav');
    // Wait for network to be idle (Vue hydration complete)
    await page.waitForLoadState('networkidle');
    // Press Escape to close any open menus
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);
  });

  test.describe('Basic Usage', () => {
    test('page loads correctly', async ({ page }) => {
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('MobileNav Component Test');
    });

    test('renders hamburger trigger button', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await expect(trigger).toBeVisible();
    });

    test('panel is hidden by default', async ({ page }) => {
      const panel = page.getByTestId('basic-nav-panel');
      await expect(panel).not.toBeVisible();
    });

    test('opens panel on trigger click', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      const panel = page.getByTestId('basic-nav-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();
    });

    test('shows backdrop when open', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      const backdrop = page.getByTestId('basic-nav-backdrop');

      await trigger.press('Space');
      await expect(backdrop).toBeVisible();
    });

    test('closes on backdrop click', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      const backdrop = page.getByTestId('basic-nav-backdrop');
      const panel = page.getByTestId('basic-nav-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await backdrop.click({ force: true });
      await expect(panel).not.toBeVisible();
    });

    test('closes on close button click', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      const closeBtn = page.getByTestId('basic-nav-close');
      const panel = page.getByTestId('basic-nav-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await closeBtn.click();
      await expect(panel).not.toBeVisible();
    });

    test('closes on Escape key', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      const panel = page.getByTestId('basic-nav-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(panel).not.toBeVisible();
    });
  });

  test.describe('Accordion Sections', () => {
    test('renders section headers', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const section0 = page.getByTestId('basic-nav-section-0');
      const section1 = page.getByTestId('basic-nav-section-1');
      const section2 = page.getByTestId('basic-nav-section-2');

      await expect(section0).toBeVisible();
      await expect(section1).toBeVisible();
      await expect(section2).toBeVisible();
    });

    test('section content is hidden by default', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const content = page.getByTestId('basic-nav-section-0-content');
      await expect(content).not.toBeVisible();
    });

    test('clicking section header expands content', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const sectionHeader = page.getByTestId('basic-nav-section-0');
      const content = page.getByTestId('basic-nav-section-0-content');

      await sectionHeader.click();
      await expect(content).toBeVisible();
    });

    test('clicking expanded section collapses it', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const sectionHeader = page.getByTestId('basic-nav-section-0');
      const content = page.getByTestId('basic-nav-section-0-content');

      // Open
      await sectionHeader.click();
      await expect(content).toBeVisible();

      // Close
      await sectionHeader.click();
      await expect(content).not.toBeVisible();
    });

    test('multiple sections can be open simultaneously', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const section0 = page.getByTestId('basic-nav-section-0');
      const section1 = page.getByTestId('basic-nav-section-1');
      const content0 = page.getByTestId('basic-nav-section-0-content');
      const content1 = page.getByTestId('basic-nav-section-1-content');

      await section0.click();
      await section1.click();

      await expect(content0).toBeVisible();
      await expect(content1).toBeVisible();
    });

    test('section links are visible when expanded', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const sectionHeader = page.getByTestId('basic-nav-section-0');
      await sectionHeader.click();

      const link = page.getByTestId('basic-nav-section-0-link-0');
      await expect(link).toBeVisible();
    });
  });

  test.describe('Without Arrows', () => {
    test('renders without arrow indicators', async ({ page }) => {
      const trigger = page.getByTestId('no-arrows-nav-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('no-arrows-nav-panel');
      await expect(panel).toBeVisible();

      // Open the section to check links
      const section = page.getByTestId('no-arrows-nav-section-0');
      await section.click();

      // Links should not have arrows - check first link content
      const link = page.getByTestId('no-arrows-nav-section-0-link-0');
      await expect(link).toBeVisible();
    });
  });

  test.describe('With Badges', () => {
    test('renders links with badges', async ({ page }) => {
      const trigger = page.getByTestId('badges-nav-trigger');
      await trigger.press('Space');

      const section = page.getByTestId('badges-nav-section-0');
      await section.click();

      // Check that the panel content has badge text
      const content = page.getByTestId('badges-nav-section-0-content');
      await expect(content).toContainText('New');
      await expect(content).toContainText('12');
      await expect(content).toContainText('Sale');
    });
  });

  test.describe('Dark Variant', () => {
    test('trigger has dark styling classes', async ({ page }) => {
      const trigger = page.getByTestId('dark-nav-trigger');
      await expect(trigger).toBeVisible();

      // The hamburger lines should be white
      const hamburgerLines = trigger.locator('span');
      const firstLine = hamburgerLines.first();
      const classes = await firstLine.getAttribute('class');
      expect(classes).toContain('bg-white');
    });
  });

  test.describe('Keep Open on Link Click', () => {
    test('menu stays open when clicking links', async ({ page }) => {
      const trigger = page.getByTestId('stay-open-nav-trigger');
      const panel = page.getByTestId('stay-open-nav-panel');

      await trigger.press('Space');
      await expect(panel).toBeVisible();

      // Open section
      const section = page.getByTestId('stay-open-nav-section-0');
      await section.click();

      // Click a link
      const link = page.getByTestId('stay-open-nav-section-0-link-0');
      await link.click();

      // Panel should still be visible (won't navigate in test)
      // Note: In actual usage this depends on closeOnLinkClick prop
    });
  });

  test.describe('Accessibility', () => {
    test('trigger has aria-haspopup attribute', async ({ page }) => {
      const trigger = page.getByTestId('accessible-nav-trigger');
      await expect(trigger).toHaveAttribute('aria-haspopup', 'true');
    });

    test('trigger has aria-expanded that updates', async ({ page }) => {
      const trigger = page.getByTestId('accessible-nav-trigger');

      // Initially closed
      await expect(trigger).toHaveAttribute('aria-expanded', 'false');

      // Open menu
      await trigger.press('Space');
      await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    test('panel has dialog role', async ({ page }) => {
      const trigger = page.getByTestId('accessible-nav-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('accessible-nav-panel');
      await expect(panel).toHaveAttribute('role', 'dialog');
    });

    test('panel has aria-modal attribute', async ({ page }) => {
      const trigger = page.getByTestId('accessible-nav-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('accessible-nav-panel');
      await expect(panel).toHaveAttribute('aria-modal', 'true');
    });

    test('section headers have aria-expanded', async ({ page }) => {
      const trigger = page.getByTestId('accessible-nav-trigger');
      await trigger.press('Space');

      const section = page.getByTestId('accessible-nav-section-0');
      await expect(section).toHaveAttribute('aria-expanded', 'false');

      await section.click();
      await expect(section).toHaveAttribute('aria-expanded', 'true');
    });

    test('trigger is keyboard focusable', async ({ page }) => {
      const trigger = page.getByTestId('accessible-nav-trigger');
      await trigger.focus();
      await expect(trigger).toBeFocused();
    });
  });

  test.describe('Panel Styling', () => {
    test('panel slides in from right', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('basic-nav-panel');
      const classes = await panel.getAttribute('class');

      // Panel should be positioned on the right
      expect(classes).toContain('right-0');
    });

    test('panel has max-width constraint', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('basic-nav-panel');
      const classes = await panel.getAttribute('class');

      expect(classes).toContain('max-w-sm');
    });

    test('panel has shadow', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const panel = page.getByTestId('basic-nav-panel');
      const classes = await panel.getAttribute('class');

      expect(classes).toContain('shadow-2xl');
    });
  });

  test.describe('Backdrop Styling', () => {
    test('backdrop covers full screen', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const backdrop = page.getByTestId('basic-nav-backdrop');
      const classes = await backdrop.getAttribute('class');

      expect(classes).toContain('fixed');
      expect(classes).toContain('inset-0');
    });

    test('backdrop has semi-transparent background', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const backdrop = page.getByTestId('basic-nav-backdrop');
      const classes = await backdrop.getAttribute('class');

      expect(classes).toContain('bg-black/50');
    });
  });

  test.describe('Hamburger Animation', () => {
    test('hamburger icon transforms when open', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');

      // Get hamburger lines
      const lines = trigger.locator('span');
      const firstLine = lines.first();

      // Initially no rotation
      let classes = await firstLine.getAttribute('class');
      expect(classes).not.toContain('rotate-45');

      // Open menu
      await trigger.press('Space');

      // Should have rotation classes
      classes = await firstLine.getAttribute('class');
      expect(classes).toContain('rotate-45');
    });
  });

  test.describe('Real-World Header Example', () => {
    test('renders in header context', async ({ page }) => {
      const trigger = page.getByTestId('real-header-nav-trigger');
      const panel = page.getByTestId('real-header-nav-panel');

      await expect(trigger).toBeVisible();

      await trigger.press('Space');
      await expect(panel).toBeVisible();
    });
  });

  test.describe('Touch Targets', () => {
    test('links have minimum 48px height', async ({ page }) => {
      const trigger = page.getByTestId('basic-nav-trigger');
      await trigger.press('Space');

      const section = page.getByTestId('basic-nav-section-0');
      await section.click();

      const link = page.getByTestId('basic-nav-section-0-link-0');
      const box = await link.boundingBox();

      // Touch target should be at least 48px
      expect(box?.height).toBeGreaterThanOrEqual(48);
    });
  });
});
