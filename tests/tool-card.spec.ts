import { test, expect } from '@playwright/test'

test.describe('ToolCard Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/tool-card')
  })

  test.describe('Default Card', () => {
    test('renders card', async ({ page }) => {
      const card = page.getByTestId('tool-card-default')
      await expect(card).toBeVisible()
    })

    test('has icon', async ({ page }) => {
      const icon = page.getByTestId('tool-card-default-icon')
      await expect(icon).toBeVisible()
    })

    test('has name', async ({ page }) => {
      const name = page.getByTestId('tool-card-default-name')
      await expect(name).toBeVisible()
      await expect(name).toHaveText('Accelerator Registry')
    })

    test('has description', async ({ page }) => {
      const description = page.getByTestId('tool-card-default-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('GPUs')
    })

    test('has explore link', async ({ page }) => {
      const explore = page.getByTestId('tool-card-default-explore')
      await expect(explore).toBeVisible()
      await expect(explore).toHaveAttribute('href', '/tools/accelerator-registry')
    })

    test('explore has default text', async ({ page }) => {
      const explore = page.getByTestId('tool-card-default-explore')
      await expect(explore).toContainText('Explore')
    })

    test('has CTAs container', async ({ page }) => {
      const ctas = page.getByTestId('tool-card-default-ctas')
      await expect(ctas).toBeVisible()
    })

    test('has hover styles', async ({ page }) => {
      const card = page.getByTestId('tool-card-default')
      await expect(card).toHaveClass(/hover:border-violet-300/)
      await expect(card).toHaveClass(/hover:shadow-lg/)
    })
  })

  test.describe('Card with Features', () => {
    test('renders features container', async ({ page }) => {
      const features = page.getByTestId('tool-card-features-features')
      await expect(features).toBeVisible()
    })

    test('shows first feature', async ({ page }) => {
      const feature0 = page.getByTestId('tool-card-features-feature-0')
      await expect(feature0).toBeVisible()
      await expect(feature0).toContainText('Multi-cloud comparison')
    })

    test('shows second feature', async ({ page }) => {
      const feature1 = page.getByTestId('tool-card-features-feature-1')
      await expect(feature1).toBeVisible()
      await expect(feature1).toContainText('Real-time pricing')
    })

    test('shows third feature', async ({ page }) => {
      const feature2 = page.getByTestId('tool-card-features-feature-2')
      await expect(feature2).toBeVisible()
      await expect(feature2).toContainText('Performance metrics')
    })

    test('shows more features indicator', async ({ page }) => {
      const more = page.getByTestId('tool-card-features-features-more')
      await expect(more).toBeVisible()
      await expect(more).toContainText('+3 more features')
    })

    test('has blue icon styling', async ({ page }) => {
      const icon = page.getByTestId('tool-card-features-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
      await expect(icon).toHaveClass(/text-blue-600/)
    })
  })

  test.describe('Card with Category', () => {
    test('renders category badge', async ({ page }) => {
      const category = page.getByTestId('tool-card-category-category')
      await expect(category).toBeVisible()
    })

    test('category shows correct text', async ({ page }) => {
      const category = page.getByTestId('tool-card-category-category')
      await expect(category).toHaveText('calculator')
    })

    test('category has styling', async ({ page }) => {
      const category = page.getByTestId('tool-card-category-category')
      await expect(category).toHaveClass(/bg-gray-100/)
      await expect(category).toHaveClass(/text-gray-600/)
    })

    test('has emerald icon styling', async ({ page }) => {
      const icon = page.getByTestId('tool-card-category-icon')
      await expect(icon).toHaveClass(/bg-emerald-100/)
      await expect(icon).toHaveClass(/text-emerald-600/)
    })
  })

  test.describe('Card with Demo Button', () => {
    test('renders demo button', async ({ page }) => {
      const demo = page.getByTestId('tool-card-demo-demo')
      await expect(demo).toBeVisible()
    })

    test('demo button has correct href', async ({ page }) => {
      const demo = page.getByTestId('tool-card-demo-demo')
      await expect(demo).toHaveAttribute('href', '/tools/spot-advisor/demo')
    })

    test('demo button has default text', async ({ page }) => {
      const demo = page.getByTestId('tool-card-demo-demo')
      await expect(demo).toHaveText('Try Demo')
    })

    test('has rose icon styling', async ({ page }) => {
      const icon = page.getByTestId('tool-card-demo-icon')
      await expect(icon).toHaveClass(/bg-rose-100/)
      await expect(icon).toHaveClass(/text-rose-600/)
    })
  })

  test.describe('Small Size Card', () => {
    test('has small padding', async ({ page }) => {
      const card = page.getByTestId('tool-card-sm')
      await expect(card).toHaveClass(/p-4/)
    })

    test('has smaller icon', async ({ page }) => {
      const icon = page.getByTestId('tool-card-sm-icon')
      await expect(icon).toHaveClass(/w-10/)
      await expect(icon).toHaveClass(/h-10/)
    })

    test('features are hidden', async ({ page }) => {
      const features = page.getByTestId('tool-card-sm-features')
      await expect(features).not.toBeVisible()
    })

    test('has amber icon styling', async ({ page }) => {
      const icon = page.getByTestId('tool-card-sm-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
      await expect(icon).toHaveClass(/text-amber-600/)
    })
  })

  test.describe('Large Size Card', () => {
    test('has large padding', async ({ page }) => {
      const card = page.getByTestId('tool-card-lg')
      await expect(card).toHaveClass(/p-8/)
    })

    test('has larger icon', async ({ page }) => {
      const icon = page.getByTestId('tool-card-lg-icon')
      await expect(icon).toHaveClass(/w-14/)
      await expect(icon).toHaveClass(/h-14/)
    })

    test('has teal icon styling', async ({ page }) => {
      const icon = page.getByTestId('tool-card-lg-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
      await expect(icon).toHaveClass(/text-teal-600/)
    })
  })

  test.describe('Custom CTA Text', () => {
    test('explore has custom text', async ({ page }) => {
      const explore = page.getByTestId('tool-card-custom-text-explore')
      await expect(explore).toContainText('Learn More')
    })

    test('demo has custom text', async ({ page }) => {
      const demo = page.getByTestId('tool-card-custom-text-demo')
      await expect(demo).toHaveText('Interactive Demo')
    })

    test('has purple icon styling', async ({ page }) => {
      const icon = page.getByTestId('tool-card-custom-text-icon')
      await expect(icon).toHaveClass(/bg-purple-100/)
      await expect(icon).toHaveClass(/text-purple-600/)
    })
  })

  test.describe('Card Grid', () => {
    test('first card visible', async ({ page }) => {
      const card = page.getByTestId('tool-card-grid-1')
      await expect(card).toBeVisible()
    })

    test('second card visible', async ({ page }) => {
      const card = page.getByTestId('tool-card-grid-2')
      await expect(card).toBeVisible()
    })

    test('third card visible', async ({ page }) => {
      const card = page.getByTestId('tool-card-grid-3')
      await expect(card).toBeVisible()
    })

    test('first card has registry category', async ({ page }) => {
      const category = page.getByTestId('tool-card-grid-1-category')
      await expect(category).toHaveText('registry')
    })

    test('second card has calculator category', async ({ page }) => {
      const category = page.getByTestId('tool-card-grid-2-category')
      await expect(category).toHaveText('calculator')
    })

    test('third card has advisor category', async ({ page }) => {
      const category = page.getByTestId('tool-card-grid-3-category')
      await expect(category).toHaveText('advisor')
    })
  })

  test.describe('All Features Card', () => {
    test('shows all 6 features', async ({ page }) => {
      for (let i = 0; i < 6; i++) {
        const feature = page.getByTestId(`tool-card-all-features-feature-${i}`)
        await expect(feature).toBeVisible()
      }
    })

    test('no more features indicator when all shown', async ({ page }) => {
      const more = page.getByTestId('tool-card-all-features-features-more')
      await expect(more).not.toBeVisible()
    })

    test('has category badge', async ({ page }) => {
      const category = page.getByTestId('tool-card-all-features-category')
      await expect(category).toBeVisible()
      await expect(category).toHaveText('advisor')
    })

    test('has demo button', async ({ page }) => {
      const demo = page.getByTestId('tool-card-all-features-demo')
      await expect(demo).toBeVisible()
    })
  })

  test.describe('Card Styling', () => {
    test('default card has rounded corners', async ({ page }) => {
      const card = page.getByTestId('tool-card-default')
      await expect(card).toHaveClass(/rounded-2xl/)
    })

    test('default card has border', async ({ page }) => {
      const card = page.getByTestId('tool-card-default')
      await expect(card).toHaveClass(/border/)
      await expect(card).toHaveClass(/border-gray-200/)
    })

    test('default card has white background', async ({ page }) => {
      const card = page.getByTestId('tool-card-default')
      await expect(card).toHaveClass(/bg-white/)
    })

    test('default card has transition', async ({ page }) => {
      const card = page.getByTestId('tool-card-default')
      await expect(card).toHaveClass(/transition-all/)
      await expect(card).toHaveClass(/duration-300/)
    })
  })

  test.describe('Explore Link Styling', () => {
    test('has violet color', async ({ page }) => {
      const explore = page.getByTestId('tool-card-default-explore')
      await expect(explore).toHaveClass(/text-violet-600/)
    })

    test('has hover color', async ({ page }) => {
      const explore = page.getByTestId('tool-card-default-explore')
      await expect(explore).toHaveClass(/hover:text-violet-700/)
    })

    test('has font medium', async ({ page }) => {
      const explore = page.getByTestId('tool-card-default-explore')
      await expect(explore).toHaveClass(/font-medium/)
    })
  })

  test.describe('Accessibility', () => {
    test('card is an article element', async ({ page }) => {
      const card = page.getByTestId('tool-card-default')
      await expect(card).toHaveRole('article')
    })

    test('name is a heading', async ({ page }) => {
      const name = page.getByTestId('tool-card-default-name')
      await expect(name).toHaveRole('heading')
    })

    test('explore is a link', async ({ page }) => {
      const explore = page.getByTestId('tool-card-default-explore')
      await expect(explore).toHaveRole('link')
    })
  })
})
