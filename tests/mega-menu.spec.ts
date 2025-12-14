import { test, expect } from '@playwright/test';

test.describe('MegaMenu Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/mega-menu');
    // Wait for network to be idle (Vue hydration complete)
    await page.waitForLoadState('networkidle');
    // Scroll to top and move mouse completely out of viewport
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.mouse.move(-100, -100);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  });

  test.describe('Basic Usage', () => {
    test('page loads correctly', async ({ page }) => {
      // Check if page title exists
      const heading = page.locator('h1').first();
      await expect(heading).toContainText('MegaMenu Component Test');
    });

    test('renders trigger button with label', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await expect(trigger).toBeVisible();
      await expect(trigger).toContainText('Features');
    });

    test('shows chevron icon by default', async ({ page }) => {
      const chevron = page.getByTestId('basic-menu-chevron');
      await expect(chevron).toBeVisible();
    });

    test('panel is hidden by default', async ({ page }) => {
      const panel = page.getByTestId('basic-menu-panel');
      await expect(panel).not.toBeVisible();
    });

    test('opens panel on keyboard activation', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      const panel = page.getByTestId('basic-menu-panel');

      await trigger.focus();
      await page.keyboard.press('Enter');
      await expect(panel).toBeVisible();
    });

    test('shows backdrop when open', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      const backdrop = page.getByTestId('basic-menu-backdrop');

      await trigger.focus();
      await page.keyboard.press('Enter');
      await expect(backdrop).toBeVisible();
    });

    test('closes on backdrop click', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      const backdrop = page.getByTestId('basic-menu-backdrop');
      const panel = page.getByTestId('basic-menu-panel');

      await trigger.focus();
      await page.keyboard.press('Enter');
      await expect(panel).toBeVisible();

      await backdrop.click({ force: true });
      await expect(panel).not.toBeVisible();
    });

    test('contains NavDropdown columns when open', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      const exploreDropdown = page.getByTestId('basic-explore');
      const configureDropdown = page.getByTestId('basic-configure');
      const moreDropdown = page.getByTestId('basic-more');

      await expect(exploreDropdown).toBeVisible();
      await expect(configureDropdown).toBeVisible();
      await expect(moreDropdown).toBeVisible();
    });
  });

  test.describe('Multiple Menus', () => {
    test('renders all three menu triggers', async ({ page }) => {
      const features = page.getByTestId('multi-features-trigger');
      const solutions = page.getByTestId('multi-solutions-trigger');
      const resources = page.getByTestId('multi-resources-trigger');

      await expect(features).toBeVisible();
      await expect(solutions).toBeVisible();
      await expect(resources).toBeVisible();
    });

    test('Features menu has correct columns', async ({ page }) => {
      const trigger = page.getByTestId('multi-features-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      await expect(page.getByTestId('multi-features-explore-title')).toHaveText('Explore');
      await expect(page.getByTestId('multi-features-configure-title')).toHaveText('Configure');
      await expect(page.getByTestId('multi-features-more-title')).toHaveText('More');
    });

    test('Solutions menu has correct columns', async ({ page }) => {
      const trigger = page.getByTestId('multi-solutions-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      await expect(page.getByTestId('multi-solutions-role-title')).toHaveText('By Role');
      await expect(page.getByTestId('multi-solutions-workload-title')).toHaveText('By Workload');
      await expect(page.getByTestId('multi-solutions-industry-title')).toHaveText('By Industry');
    });

    test('Resources menu has correct columns', async ({ page }) => {
      const trigger = page.getByTestId('multi-resources-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      await expect(page.getByTestId('multi-resources-learn-title')).toHaveText('Learn');
      await expect(page.getByTestId('multi-resources-tools-title')).toHaveText('Tools');
      await expect(page.getByTestId('multi-resources-community-title')).toHaveText('Community');
    });
  });

  test.describe('Without Chevron', () => {
    test('does not show chevron when showChevron is false', async ({ page }) => {
      const chevron = page.getByTestId('no-chevron-menu-chevron');
      await expect(chevron).not.toBeVisible();
    });

    test('trigger still works without chevron', async ({ page }) => {
      const trigger = page.getByTestId('no-chevron-menu-trigger');
      const panel = page.getByTestId('no-chevron-menu-panel');

      await trigger.focus();
      await page.keyboard.press('Enter');
      await expect(panel).toBeVisible();
    });
  });

  test.describe('Variants', () => {
    test('light variant trigger has correct styling', async ({ page }) => {
      const trigger = page.getByTestId('light-menu-trigger');
      const classes = await trigger.getAttribute('class');
      expect(classes).toContain('text-gray-600');
    });

    test('dark variant trigger has correct styling', async ({ page }) => {
      const trigger = page.getByTestId('dark-menu-trigger');
      const classes = await trigger.getAttribute('class');
      expect(classes).toContain('text-white/70');
    });
  });

  test.describe('Custom Trigger', () => {
    test('renders custom trigger slot content', async ({ page }) => {
      const trigger = page.getByTestId('custom-trigger-menu-trigger');
      await expect(trigger).toContainText('Custom Menu');
    });

    test('opens panel with custom trigger', async ({ page }) => {
      const trigger = page.getByTestId('custom-trigger-menu-trigger');
      const panel = page.getByTestId('custom-trigger-menu-panel');

      await trigger.focus();
      await page.keyboard.press('Enter');
      await expect(panel).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('trigger has aria-haspopup attribute', async ({ page }) => {
      const trigger = page.getByTestId('accessible-menu-trigger');
      await expect(trigger).toHaveAttribute('aria-haspopup', 'true');
    });

    test('trigger has aria-expanded attribute that updates', async ({ page }) => {
      const trigger = page.getByTestId('accessible-menu-trigger');
      const panel = page.getByTestId('accessible-menu-panel');

      // Initially closed
      await expect(trigger).toHaveAttribute('aria-expanded', 'false');

      // Open menu by pressing Space (more reliable than Enter for buttons)
      await trigger.press('Space');
      await expect(panel).toBeVisible();
      await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    test('closes on Escape key', async ({ page }) => {
      const trigger = page.getByTestId('accessible-menu-trigger');
      const panel = page.getByTestId('accessible-menu-panel');

      await trigger.focus();
      await page.keyboard.press('Enter');
      await expect(panel).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(panel).not.toBeVisible();
    });

    test('trigger is keyboard focusable', async ({ page }) => {
      const trigger = page.getByTestId('accessible-menu-trigger');
      await trigger.focus();
      await expect(trigger).toBeFocused();
    });
  });

  test.describe('Panel Styling', () => {
    test('panel has backdrop blur', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      const panel = page.getByTestId('basic-menu-panel');
      const classes = await panel.getAttribute('class');
      expect(classes).toContain('backdrop-blur');
    });

    test('panel is full-width by default', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      const panel = page.getByTestId('basic-menu-panel');
      const classes = await panel.getAttribute('class');
      expect(classes).toContain('left-0');
      expect(classes).toContain('right-0');
    });

    test('panel has proper z-index', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      const panel = page.getByTestId('basic-menu-panel');
      const classes = await panel.getAttribute('class');
      expect(classes).toContain('z-[50]');
    });
  });

  test.describe('Trigger Styling', () => {
    test('trigger has flex display', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      const classes = await trigger.getAttribute('class');
      expect(classes).toContain('flex');
      expect(classes).toContain('items-center');
    });

    test('trigger has transition effects', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      const classes = await trigger.getAttribute('class');
      expect(classes).toContain('transition-colors');
    });

    test('chevron rotates when open', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      const chevron = page.getByTestId('basic-menu-chevron');
      const panel = page.getByTestId('basic-menu-panel');

      // Closed state - no rotation
      let classes = await chevron.getAttribute('class');
      expect(classes).not.toContain('rotate-180');

      // Open state - rotated
      await trigger.press('Space');
      await expect(panel).toBeVisible();
      classes = await chevron.getAttribute('class');
      expect(classes).toContain('rotate-180');
    });
  });

  test.describe('Backdrop Styling', () => {
    test('backdrop covers full screen', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      const backdrop = page.getByTestId('basic-menu-backdrop');
      const classes = await backdrop.getAttribute('class');
      expect(classes).toContain('fixed');
      expect(classes).toContain('inset-0');
    });

    test('backdrop has lower z-index than panel', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      const backdrop = page.getByTestId('basic-menu-backdrop');
      const classes = await backdrop.getAttribute('class');
      expect(classes).toContain('z-[45]');
    });
  });

  test.describe('Content Container', () => {
    test('panel content has proper container styling', async ({ page }) => {
      const trigger = page.getByTestId('basic-menu-trigger');
      await trigger.focus();
      await page.keyboard.press('Enter');

      const panel = page.getByTestId('basic-menu-panel');
      const container = panel.locator('> div').first();
      const classes = await container.getAttribute('class');
      expect(classes).toContain('container');
      expect(classes).toContain('mx-auto');
    });
  });
});
