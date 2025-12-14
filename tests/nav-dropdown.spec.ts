import { test, expect } from '@playwright/test';

test.describe('NavDropdown Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/nav-dropdown');
  });

  test.describe('Basic Usage', () => {
    test('renders title', async ({ page }) => {
      const title = page.getByTestId('basic-dropdown-title');
      await expect(title).toBeVisible();
      await expect(title).toHaveText('Explore Lattice');
    });

    test('renders all links', async ({ page }) => {
      const dropdown = page.getByTestId('basic-dropdown');
      const links = dropdown.locator('a[role="menuitem"]');
      await expect(links).toHaveCount(4);
    });

    test('links have correct href attributes', async ({ page }) => {
      const link0 = page.getByTestId('basic-dropdown-link-0');
      const link1 = page.getByTestId('basic-dropdown-link-1');
      const link2 = page.getByTestId('basic-dropdown-link-2');
      const link3 = page.getByTestId('basic-dropdown-link-3');

      await expect(link0).toHaveAttribute('href', '/features');
      await expect(link1).toHaveAttribute('href', '/features/sources');
      await expect(link2).toHaveAttribute('href', '/features/lab');
      await expect(link3).toHaveAttribute('href', '/features/studio');
    });

    test('links display labels', async ({ page }) => {
      const link0 = page.getByTestId('basic-dropdown-link-0');
      await expect(link0).toContainText('All Features');
    });

    test('links display descriptions when showDescriptions is true', async ({ page }) => {
      const link1 = page.getByTestId('basic-dropdown-link-1');
      await expect(link1).toContainText('Knowledge Management');
    });
  });

  test.describe('Without Descriptions', () => {
    test('renders links without descriptions', async ({ page }) => {
      const dropdown = page.getByTestId('no-desc-dropdown');
      const link0 = page.getByTestId('no-desc-dropdown-link-0');

      await expect(link0).toContainText('Getting Started');
      // Description should not be visible
      const descriptionText = await link0.textContent();
      expect(descriptionText).not.toContain('Overview');
    });

    test('renders correct number of links', async ({ page }) => {
      const dropdown = page.getByTestId('no-desc-dropdown');
      const links = dropdown.locator('a[role="menuitem"]');
      await expect(links).toHaveCount(4);
    });
  });

  test.describe('Compact Variant', () => {
    test('renders with compact styling', async ({ page }) => {
      const section = page.locator('[data-testid="compact-variant"]');
      const link = section.getByTestId('compact-dropdown-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('p-2');
    });

    test('title has compact styling', async ({ page }) => {
      const section = page.locator('[data-testid="compact-variant"]');
      const title = section.getByTestId('compact-dropdown-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('text-xs');
    });
  });

  test.describe('Featured Variant', () => {
    test('featured links have gradient background', async ({ page }) => {
      const section = page.locator('[data-testid="featured-variant"]');
      const featuredLink = section.getByTestId('featured-dropdown-link-0');
      const classes = await featuredLink.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-r');
      expect(classes).toContain('from-violet-50');
      expect(classes).toContain('to-blue-50');
    });

    test('featured links have border styling', async ({ page }) => {
      const section = page.locator('[data-testid="featured-variant"]');
      const featuredLink = section.getByTestId('featured-dropdown-link-0');
      const classes = await featuredLink.getAttribute('class');
      expect(classes).toContain('border');
      expect(classes).toContain('border-violet-100');
    });

    test('featured links show arrow icon', async ({ page }) => {
      const section = page.locator('[data-testid="featured-variant"]');
      const featuredLink = section.getByTestId('featured-dropdown-link-0');
      const arrow = featuredLink.locator('svg');
      await expect(arrow).toBeVisible();
    });

    test('non-featured links in featured variant have default styling', async ({ page }) => {
      const section = page.locator('[data-testid="featured-variant"]');
      const regularLink = section.getByTestId('featured-dropdown-link-1');
      const classes = await regularLink.getAttribute('class');
      expect(classes).not.toContain('bg-gradient-to-r');
    });
  });

  test.describe('With Badges', () => {
    test('renders badges on links', async ({ page }) => {
      const link0 = page.getByTestId('badges-dropdown-link-0');
      await expect(link0).toContainText('36');
    });

    test('badge has correct styling', async ({ page }) => {
      const link0 = page.getByTestId('badges-dropdown-link-0');
      const badge = link0.locator('span').filter({ hasText: '36' });
      const classes = await badge.getAttribute('class');
      expect(classes).toContain('rounded-full');
      expect(classes).toContain('bg-violet-100');
      expect(classes).toContain('text-violet-700');
    });

    test('New badge renders correctly', async ({ page }) => {
      const link1 = page.getByTestId('badges-dropdown-link-1');
      await expect(link1).toContainText('New');
    });
  });

  test.describe('With Footer Link', () => {
    test('renders footer link', async ({ page }) => {
      const footerLink = page.getByTestId('footer-dropdown-footer-link');
      await expect(footerLink).toBeVisible();
      await expect(footerLink).toHaveText(/View all resources/);
    });

    test('footer link has correct href', async ({ page }) => {
      const footerLink = page.getByTestId('footer-dropdown-footer-link');
      await expect(footerLink).toHaveAttribute('href', '/resources');
    });

    test('footer link has arrow icon', async ({ page }) => {
      const footerLink = page.getByTestId('footer-dropdown-footer-link');
      const arrow = footerLink.locator('svg');
      await expect(arrow).toBeVisible();
    });

    test('footer link has violet color', async ({ page }) => {
      const footerLink = page.getByTestId('footer-dropdown-footer-link');
      const classes = await footerLink.getAttribute('class');
      expect(classes).toContain('text-violet-600');
    });
  });

  test.describe('With Arrows', () => {
    test('all links show arrows when showArrows is true', async ({ page }) => {
      const link0 = page.getByTestId('arrows-dropdown-link-0');
      const link1 = page.getByTestId('arrows-dropdown-link-1');
      const link2 = page.getByTestId('arrows-dropdown-link-2');

      const arrow0 = link0.locator('svg');
      const arrow1 = link1.locator('svg');
      const arrow2 = link2.locator('svg');

      await expect(arrow0).toBeVisible();
      await expect(arrow1).toBeVisible();
      await expect(arrow2).toBeVisible();
    });
  });

  test.describe('Without Title', () => {
    test('renders without title when title prop is not provided', async ({ page }) => {
      const dropdown = page.getByTestId('no-title-dropdown');
      const title = page.getByTestId('no-title-dropdown-title');

      await expect(dropdown).toBeVisible();
      await expect(title).not.toBeVisible();
    });

    test('links still render correctly without title', async ({ page }) => {
      const link0 = page.getByTestId('no-title-dropdown-link-0');
      await expect(link0).toContainText('Profile');
    });
  });

  test.describe('3-Column Layout', () => {
    test('renders three columns', async ({ page }) => {
      const col1 = page.getByTestId('col1-dropdown');
      const col2 = page.getByTestId('col2-dropdown');
      const col3 = page.getByTestId('col3-dropdown');

      await expect(col1).toBeVisible();
      await expect(col2).toBeVisible();
      await expect(col3).toBeVisible();
    });

    test('each column has its own title', async ({ page }) => {
      const title1 = page.getByTestId('col1-dropdown-title');
      const title2 = page.getByTestId('col2-dropdown-title');
      const title3 = page.getByTestId('col3-dropdown-title');

      await expect(title1).toHaveText('Explore Lattice');
      await expect(title2).toHaveText('Configure');
      await expect(title3).toHaveText('More from Lattice');
    });

    test('column 3 has footer link', async ({ page }) => {
      const footerLink = page.getByTestId('col3-dropdown-footer-link');
      await expect(footerLink).toBeVisible();
      await expect(footerLink).toContainText('Compare Features');
    });
  });

  test.describe('Featured Items Mix', () => {
    test('first item is featured with special styling', async ({ page }) => {
      const featuredLink = page.getByTestId('featured-mix-dropdown-link-0');
      const classes = await featuredLink.getAttribute('class');
      expect(classes).toContain('bg-gradient-to-r');
    });

    test('subsequent items are not featured', async ({ page }) => {
      const link1 = page.getByTestId('featured-mix-dropdown-link-1');
      const link2 = page.getByTestId('featured-mix-dropdown-link-2');

      const classes1 = await link1.getAttribute('class');
      const classes2 = await link2.getAttribute('class');

      expect(classes1).not.toContain('bg-gradient-to-r');
      expect(classes2).not.toContain('bg-gradient-to-r');
    });
  });

  test.describe('Real-World Mega Menu', () => {
    test('renders By Role column', async ({ page }) => {
      const dropdown = page.getByTestId('role-dropdown');
      await expect(dropdown).toBeVisible();

      const title = page.getByTestId('role-dropdown-title');
      await expect(title).toHaveText('By Role');
    });

    test('renders By Workload column', async ({ page }) => {
      const dropdown = page.getByTestId('workload-dropdown');
      await expect(dropdown).toBeVisible();

      const title = page.getByTestId('workload-dropdown-title');
      await expect(title).toHaveText('By Workload');
    });

    test('renders By Industry column', async ({ page }) => {
      const dropdown = page.getByTestId('industry-dropdown');
      await expect(dropdown).toBeVisible();

      const title = page.getByTestId('industry-dropdown-title');
      await expect(title).toHaveText('By Industry');
    });

    test('industry column has footer link', async ({ page }) => {
      const footerLink = page.getByTestId('industry-dropdown-footer-link');
      await expect(footerLink).toBeVisible();
      await expect(footerLink).toContainText('View all solutions');
    });
  });

  test.describe('Accessibility', () => {
    test('links have menuitem role', async ({ page }) => {
      const link = page.getByTestId('basic-dropdown-link-0');
      await expect(link).toHaveAttribute('role', 'menuitem');
    });

    test('list has menu role', async ({ page }) => {
      const dropdown = page.getByTestId('basic-dropdown');
      const menu = dropdown.locator('ul[role="menu"]');
      await expect(menu).toBeVisible();
    });

    test('list items have none role', async ({ page }) => {
      const dropdown = page.getByTestId('basic-dropdown');
      const listItem = dropdown.locator('li[role="none"]').first();
      await expect(listItem).toBeVisible();
    });

    test('links are keyboard focusable', async ({ page }) => {
      const link = page.getByTestId('basic-dropdown-link-0');
      await link.focus();
      await expect(link).toBeFocused();
    });
  });

  test.describe('Styling', () => {
    test('title has uppercase styling', async ({ page }) => {
      const title = page.getByTestId('basic-dropdown-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('uppercase');
      expect(classes).toContain('tracking-wider');
    });

    test('title has correct font weight', async ({ page }) => {
      const title = page.getByTestId('basic-dropdown-title');
      const classes = await title.getAttribute('class');
      expect(classes).toContain('font-semibold');
    });

    test('links have rounded corners', async ({ page }) => {
      const link = page.getByTestId('basic-dropdown-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('rounded-xl');
    });

    test('links have transition effects', async ({ page }) => {
      const link = page.getByTestId('basic-dropdown-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('transition-all');
      expect(classes).toContain('duration-200');
    });

    test('container uses flexbox', async ({ page }) => {
      const dropdown = page.getByTestId('basic-dropdown');
      const classes = await dropdown.getAttribute('class');
      expect(classes).toContain('flex');
      expect(classes).toContain('flex-col');
    });

    test('links list has proper spacing', async ({ page }) => {
      const dropdown = page.getByTestId('basic-dropdown');
      const list = dropdown.locator('ul');
      const classes = await list.getAttribute('class');
      expect(classes).toContain('space-y-1');
    });
  });

  test.describe('Link Content', () => {
    test('label has proper font styling', async ({ page }) => {
      const link = page.getByTestId('basic-dropdown-link-0');
      const label = link.locator('span').first();
      const classes = await label.getAttribute('class');
      expect(classes).toContain('font-semibold');
    });

    test('description has muted color', async ({ page }) => {
      const link = page.getByTestId('basic-dropdown-link-1');
      const description = link.locator('span').nth(1);
      const classes = await description.getAttribute('class');
      expect(classes).toContain('text-gray-500');
    });

    test('content container uses flexbox for alignment', async ({ page }) => {
      const link = page.getByTestId('basic-dropdown-link-0');
      const classes = await link.getAttribute('class');
      expect(classes).toContain('flex');
      expect(classes).toContain('items-start');
      expect(classes).toContain('gap-3');
    });
  });

  test.describe('Footer Link Styling', () => {
    test('footer has top border', async ({ page }) => {
      const dropdown = page.getByTestId('footer-dropdown');
      const footerContainer = dropdown.locator('div').filter({ has: page.getByTestId('footer-dropdown-footer-link') });
      const classes = await footerContainer.getAttribute('class');
      expect(classes).toContain('border-t');
      expect(classes).toContain('border-gray-100');
    });

    test('footer has top margin and padding', async ({ page }) => {
      const dropdown = page.getByTestId('footer-dropdown');
      const footerContainer = dropdown.locator('div').filter({ has: page.getByTestId('footer-dropdown-footer-link') });
      const classes = await footerContainer.getAttribute('class');
      expect(classes).toContain('mt-4');
      expect(classes).toContain('pt-4');
    });
  });
});
