import { test, expect } from '@playwright/test'

test.describe('TechSpecs Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/tech-specs')
  })

  test.describe('Structure', () => {
    test('renders section element', async ({ page }) => {
      const section = page.getByTestId('tech-specs-default')
      await expect(section).toBeVisible()
    })

    test('renders header when title provided', async ({ page }) => {
      const header = page.getByTestId('tech-specs-default-header')
      await expect(header).toBeVisible()
    })

    test('renders grid when specs provided', async ({ page }) => {
      const grid = page.getByTestId('tech-specs-default-grid')
      await expect(grid).toBeVisible()
    })
  })

  test.describe('Title and Description', () => {
    test('renders title text', async ({ page }) => {
      const title = page.getByTestId('tech-specs-default-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Technical Specifications')
    })

    test('title is h2 element', async ({ page }) => {
      const title = page.getByTestId('tech-specs-default-title')
      const tagName = await title.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h2')
    })

    test('renders description', async ({ page }) => {
      const description = page.getByTestId('tech-specs-default-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('Sources panel capabilities')
    })
  })

  test.describe('Header Icon', () => {
    test('renders icon when provided', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-default-icon')
      await expect(icon).toBeVisible()
    })

    test('icon has correct background for violet', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-default-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('icon has correct background for blue', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-four-col-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('icon has correct background for teal', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-table-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('no icon when not provided', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-two-col-icon')
      await expect(icon).not.toBeVisible()
    })
  })

  test.describe('Specs Grid', () => {
    test('renders correct number of spec cards', async ({ page }) => {
      // Check that each of the 3 spec cards exists
      const spec0 = page.getByTestId('tech-specs-default-spec-0')
      const spec1 = page.getByTestId('tech-specs-default-spec-1')
      const spec2 = page.getByTestId('tech-specs-default-spec-2')

      await expect(spec0).toBeVisible()
      await expect(spec1).toBeVisible()
      await expect(spec2).toBeVisible()
    })

    test('spec card has category name', async ({ page }) => {
      const categoryName = page.getByTestId('tech-specs-default-spec-0-name')
      await expect(categoryName).toBeVisible()
      await expect(categoryName).toHaveText('Supported Formats')
    })

    test('spec card has items list', async ({ page }) => {
      const items = page.getByTestId('tech-specs-default-spec-0-items')
      await expect(items).toBeVisible()
    })

    test('spec items render HTML content', async ({ page }) => {
      const item = page.getByTestId('tech-specs-default-spec-0-item-0')
      const strong = item.locator('strong')
      await expect(strong).toBeVisible()
      await expect(strong).toHaveText('PDF')
    })

    test('spec items have checkmark icons', async ({ page }) => {
      const item = page.getByTestId('tech-specs-default-spec-0-item-0')
      const svg = item.locator('svg')
      await expect(svg).toBeVisible()
      await expect(svg).toHaveClass(/text-green-500/)
    })
  })

  test.describe('Spec Card Icons', () => {
    test('spec card has icon when provided', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-default-spec-0-icon')
      await expect(icon).toBeVisible()
    })

    test('spec icon has correct color (violet)', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-default-spec-0-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('spec icon has correct color (blue)', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-default-spec-1-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('spec icon has correct color (teal)', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-default-spec-2-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })
  })

  test.describe('Grid Columns', () => {
    test('3 columns by default on large screens', async ({ page }) => {
      const grid = page.getByTestId('tech-specs-default-grid')
      await expect(grid).toHaveClass(/lg:grid-cols-3/)
    })

    test('4 columns when specified', async ({ page }) => {
      const grid = page.getByTestId('tech-specs-four-col-grid')
      await expect(grid).toHaveClass(/lg:grid-cols-4/)
    })

    test('2 columns when specified', async ({ page }) => {
      const grid = page.getByTestId('tech-specs-two-col-grid')
      await expect(grid).toHaveClass(/md:grid-cols-2/)
    })
  })

  test.describe('Background', () => {
    test('white background by default', async ({ page }) => {
      const section = page.getByTestId('tech-specs-default')
      await expect(section).toHaveClass(/bg-white/)
    })

    test('gray background when specified', async ({ page }) => {
      const section = page.getByTestId('tech-specs-four-col')
      await expect(section).toHaveClass(/bg-gray-50/)
    })
  })

  test.describe('Table View', () => {
    test('renders table container', async ({ page }) => {
      const tableContainer = page.getByTestId('tech-specs-table-table-container')
      await expect(tableContainer).toBeVisible()
    })

    test('renders table element', async ({ page }) => {
      const table = page.getByTestId('tech-specs-table-table')
      await expect(table).toBeVisible()
    })

    test('renders table headers', async ({ page }) => {
      const header0 = page.getByTestId('tech-specs-table-table-header-0')
      await expect(header0).toHaveText('Vendor')

      const header1 = page.getByTestId('tech-specs-table-table-header-1')
      await expect(header1).toHaveText('GPUs Available')
    })

    test('renders table rows', async ({ page }) => {
      const row0 = page.getByTestId('tech-specs-table-table-row-0')
      await expect(row0).toBeVisible()
    })

    test('renders table cells', async ({ page }) => {
      const cell = page.getByTestId('tech-specs-table-table-cell-0-0')
      await expect(cell).toHaveText('AWS')
    })

    test('renders boolean true as checkmark', async ({ page }) => {
      const cell = page.getByTestId('tech-specs-table-table-cell-0-2')
      const checkmark = cell.locator('svg.text-green-500')
      await expect(checkmark).toBeVisible()
    })

    test('renders boolean false as X', async ({ page }) => {
      const cell = page.getByTestId('tech-specs-table-table-cell-3-2')
      const xMark = cell.locator('svg.text-gray-300')
      await expect(xMark).toBeVisible()
    })
  })

  test.describe('Docs Link', () => {
    test('renders docs link when provided', async ({ page }) => {
      const link = page.getByTestId('tech-specs-default-docs-link')
      await expect(link).toBeVisible()
    })

    test('docs link has correct href', async ({ page }) => {
      const link = page.getByTestId('tech-specs-default-docs-link')
      await expect(link).toHaveAttribute('href', '/docs/features/sources')
    })

    test('docs link has custom text', async ({ page }) => {
      const link = page.getByTestId('tech-specs-default-docs-link')
      await expect(link).toContainText('View Sources documentation')
    })

    test('docs link has default text', async ({ page }) => {
      const link = page.getByTestId('tech-specs-four-col-docs-link')
      await expect(link).toContainText('View full documentation')
    })

    test('docs link has arrow icon', async ({ page }) => {
      const link = page.getByTestId('tech-specs-default-docs-link')
      const svg = link.locator('svg')
      await expect(svg).toBeVisible()
    })

    test('no docs link when not provided', async ({ page }) => {
      const link = page.getByTestId('tech-specs-minimal-docs-link')
      await expect(link).not.toBeVisible()
    })
  })

  test.describe('Minimal Configuration', () => {
    test('renders without header', async ({ page }) => {
      const section = page.getByTestId('tech-specs-minimal')
      await expect(section).toBeVisible()

      const header = page.getByTestId('tech-specs-minimal-header')
      await expect(header).not.toBeVisible()
    })

    test('specs still visible without header', async ({ page }) => {
      const grid = page.getByTestId('tech-specs-minimal-grid')
      await expect(grid).toBeVisible()
    })
  })

  test.describe('Color Variants', () => {
    test('amber icon color', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-colors-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })

    test('amber spec card icon', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-colors-spec-0-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })

    test('rose spec card icon', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-colors-spec-1-icon')
      await expect(icon).toHaveClass(/bg-rose-100/)
    })

    test('green spec card icon', async ({ page }) => {
      const icon = page.getByTestId('tech-specs-colors-spec-2-icon')
      await expect(icon).toHaveClass(/bg-green-100/)
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const section = page.getByTestId('tech-specs-default')
      await expect(section).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const section = page.getByTestId('tech-specs-default')
      await expect(section).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const section = page.getByTestId('tech-specs-default')
      await expect(section).toBeVisible()
    })

    test('table scrollable on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const tableContainer = page.getByTestId('tech-specs-table-table-container')
      await expect(tableContainer).toHaveClass(/overflow-x-auto/)
    })
  })

  test.describe('Accessibility', () => {
    test('title is h2 element', async ({ page }) => {
      const title = page.getByTestId('tech-specs-default-title')
      const tagName = await title.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h2')
    })

    test('spec category is h3 element', async ({ page }) => {
      const category = page.getByTestId('tech-specs-default-spec-0-name')
      const tagName = await category.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h3')
    })

    test('table has proper structure', async ({ page }) => {
      const table = page.getByTestId('tech-specs-table-table')
      const thead = table.locator('thead')
      const tbody = table.locator('tbody')

      await expect(thead).toBeVisible()
      await expect(tbody).toBeVisible()
    })
  })
})
