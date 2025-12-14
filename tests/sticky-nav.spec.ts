import { test, expect } from '@playwright/test'

test.describe('StickyNav Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/sticky-nav')
  })

  test.describe('Structure', () => {
    test('renders nav element', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toBeVisible()
    })

    test('has feature name title', async ({ page }) => {
      const title = page.getByTestId('sticky-nav-default-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Sources')
    })

    test('has navigation links container', async ({ page }) => {
      const links = page.getByTestId('sticky-nav-default-links')
      await expect(links).toBeVisible()
    })

    test('has aria-label for accessibility', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toHaveAttribute('aria-label', 'Page navigation')
    })
  })

  test.describe('Default Navigation Items', () => {
    test('renders Overview link', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-0')
      await expect(link).toBeVisible()
      await expect(link).toHaveText('Overview')
      await expect(link).toHaveAttribute('href', '#overview')
    })

    test('renders Capabilities link', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-1')
      await expect(link).toBeVisible()
      await expect(link).toHaveText('Capabilities')
      await expect(link).toHaveAttribute('href', '#capabilities')
    })

    test('renders Use Cases link', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-2')
      await expect(link).toBeVisible()
      await expect(link).toHaveText('Use Cases')
      await expect(link).toHaveAttribute('href', '#use-cases')
    })

    test('has 3 default nav items', async ({ page }) => {
      const links = page.getByTestId('sticky-nav-default-links').locator('a[href^="#"]')
      await expect(links).toHaveCount(3)
    })
  })

  test.describe('Buy Button', () => {
    test('renders buy button by default', async ({ page }) => {
      const buyButton = page.getByTestId('sticky-nav-default-buy-button')
      await expect(buyButton).toBeVisible()
    })

    test('buy button has correct text', async ({ page }) => {
      const buyButton = page.getByTestId('sticky-nav-default-buy-button')
      await expect(buyButton).toHaveText('Buy')
    })

    test('buy button links to pricing', async ({ page }) => {
      const buyButton = page.getByTestId('sticky-nav-default-buy-button')
      await expect(buyButton).toHaveAttribute('href', '/#pricing')
    })

    test('buy button has violet background', async ({ page }) => {
      const buyButton = page.getByTestId('sticky-nav-default-buy-button')
      await expect(buyButton).toHaveClass(/bg-violet-600/)
    })
  })

  test.describe('Custom Navigation Items', () => {
    test('renders custom feature name', async ({ page }) => {
      const title = page.getByTestId('sticky-nav-custom-title')
      await expect(title).toHaveText('Blueprints')
    })

    test('renders custom nav items', async ({ page }) => {
      const link0 = page.getByTestId('sticky-nav-custom-link-0')
      const link1 = page.getByTestId('sticky-nav-custom-link-1')
      const link2 = page.getByTestId('sticky-nav-custom-link-2')
      const link3 = page.getByTestId('sticky-nav-custom-link-3')

      await expect(link0).toHaveText('Vendors')
      await expect(link1).toHaveText('Categories')
      await expect(link2).toHaveText('Quick Setup')
      await expect(link3).toHaveText('Customization')
    })

    test('custom nav has 4 items', async ({ page }) => {
      const links = page.getByTestId('sticky-nav-custom-links').locator('a[href^="#"]')
      await expect(links).toHaveCount(4)
    })

    test('custom buy button text', async ({ page }) => {
      const buyButton = page.getByTestId('sticky-nav-custom-buy-button')
      await expect(buyButton).toHaveText('Get Started')
    })
  })

  test.describe('No Buy Button Configuration', () => {
    test('buy button is hidden when showBuyButton is false', async ({ page }) => {
      const buyButton = page.getByTestId('sticky-nav-no-buy-buy-button')
      await expect(buyButton).not.toBeVisible()
    })

    test('nav items still visible without buy button', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-no-buy-link-0')
      await expect(link).toBeVisible()
    })
  })

  test.describe('Mobile Horizontal Scroll', () => {
    test('renders many nav items', async ({ page }) => {
      const links = page.getByTestId('sticky-nav-mobile-links').locator('a[href^="#"]')
      await expect(links).toHaveCount(6)
    })

    test('links container has overflow scroll', async ({ page }) => {
      const container = page.getByTestId('sticky-nav-mobile-links')
      await expect(container).toHaveClass(/overflow-x-auto/)
    })

    test('all mobile nav items visible', async ({ page }) => {
      const navItems = ['Introduction', 'Features', 'Benefits', 'Pricing', 'Comparison', 'FAQ']
      for (let i = 0; i < navItems.length; i++) {
        const link = page.getByTestId(`sticky-nav-mobile-link-${i}`)
        await expect(link).toHaveText(navItems[i])
      }
    })
  })

  test.describe('Smooth Scroll Behavior', () => {
    test('clicking Overview scrolls to section', async ({ page }) => {
      // Scroll down first
      await page.evaluate(() => window.scrollTo(0, 1500))
      await page.waitForTimeout(300)

      // Click Overview link
      const link = page.getByTestId('sticky-nav-default-link-0')
      await link.click()

      // Wait for scroll
      await page.waitForTimeout(500)

      // Check that overview section is in view
      const section = page.getByTestId('section-overview')
      await expect(section).toBeInViewport()
    })

    test('clicking Capabilities scrolls to section', async ({ page }) => {
      // Click Capabilities link
      const link = page.getByTestId('sticky-nav-default-link-1')
      await link.click()

      // Wait for scroll
      await page.waitForTimeout(500)

      // Check that capabilities section is in view
      const section = page.getByTestId('section-capabilities')
      await expect(section).toBeInViewport()
    })

    test('clicking Use Cases scrolls to section', async ({ page }) => {
      // Click Use Cases link
      const link = page.getByTestId('sticky-nav-default-link-2')
      await link.click()

      // Wait for scroll
      await page.waitForTimeout(500)

      // Check that use cases section is in view
      const section = page.getByTestId('section-use-cases')
      await expect(section).toBeInViewport()
    })
  })

  test.describe('Sticky Behavior', () => {
    test('nav is initially not fixed', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).not.toHaveClass(/fixed/)
    })

    test('nav becomes sticky after scrolling past hero', async ({ page }) => {
      // Scroll past the hero section
      await page.evaluate(() => window.scrollTo(0, 500))
      await page.waitForTimeout(300)

      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toHaveClass(/fixed/)
    })

    test('nav has shadow when sticky', async ({ page }) => {
      // Scroll past the hero section
      await page.evaluate(() => window.scrollTo(0, 500))
      await page.waitForTimeout(300)

      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toHaveClass(/shadow-sm/)
    })

    test('nav has backdrop blur', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toHaveClass(/backdrop-blur-sm/)
    })
  })

  test.describe('Active State Highlighting', () => {
    test('first item is active by default', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-0')
      await expect(link).toHaveClass(/bg-violet-100/)
      await expect(link).toHaveClass(/text-violet-700/)
    })

    test('inactive items have gray styling', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-1')
      await expect(link).toHaveClass(/text-gray-600/)
    })

    test('active state updates when scrolling to capabilities', async ({ page }) => {
      // Scroll to capabilities section
      await page.evaluate(() => {
        const element = document.getElementById('capabilities')
        if (element) {
          element.scrollIntoView()
        }
      })
      await page.waitForTimeout(500)

      const link = page.getByTestId('sticky-nav-default-link-1')
      await expect(link).toHaveClass(/bg-violet-100/)
    })

    test('active state updates when scrolling to use cases', async ({ page }) => {
      // Scroll to use cases section
      await page.evaluate(() => {
        const element = document.getElementById('use-cases')
        if (element) {
          element.scrollIntoView()
        }
      })
      await page.waitForTimeout(500)

      const link = page.getByTestId('sticky-nav-default-link-2')
      await expect(link).toHaveClass(/bg-violet-100/)
    })
  })

  test.describe('Link Styling', () => {
    test('nav links have rounded-full styling', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-0')
      await expect(link).toHaveClass(/rounded-full/)
    })

    test('nav links have whitespace-nowrap', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-0')
      await expect(link).toHaveClass(/whitespace-nowrap/)
    })

    test('nav links have transition effect', async ({ page }) => {
      const link = page.getByTestId('sticky-nav-default-link-0')
      await expect(link).toHaveClass(/transition/)
    })
  })

  test.describe('Responsive Behavior', () => {
    test('nav visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toBeVisible()
    })

    test('nav visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toBeVisible()
    })

    test('nav visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toBeVisible()
    })

    test('title truncates on mobile with small viewport', async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 568 })
      const title = page.getByTestId('sticky-nav-default-title')
      await expect(title).toHaveClass(/truncate/)
    })
  })

  test.describe('Container Styling', () => {
    test('nav has border bottom', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toHaveClass(/border-b/)
    })

    test('nav has white background with opacity', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toHaveClass(/bg-white/)
    })

    test('nav has z-index for stacking', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      await expect(nav).toHaveClass(/z-40/)
    })

    test('nav has fixed height', async ({ page }) => {
      const nav = page.getByTestId('sticky-nav-default')
      const innerContainer = nav.locator('.h-12')
      await expect(innerContainer).toBeVisible()
    })
  })
})
