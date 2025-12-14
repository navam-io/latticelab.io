import { test, expect } from '@playwright/test'

test.describe('ToolDemo Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/tool-demo')
  })

  test.describe('Default Demo (Placeholder State)', () => {
    test('renders container', async ({ page }) => {
      const demo = page.getByTestId('tool-demo-default')
      await expect(demo).toBeVisible()
    })

    test('has header', async ({ page }) => {
      const header = page.getByTestId('tool-demo-default-header')
      await expect(header).toBeVisible()
    })

    test('has icon', async ({ page }) => {
      const icon = page.getByTestId('tool-demo-default-icon')
      await expect(icon).toBeVisible()
    })

    test('has title', async ({ page }) => {
      const title = page.getByTestId('tool-demo-default-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Memory Calculator')
    })

    test('has subtitle', async ({ page }) => {
      const subtitle = page.getByTestId('tool-demo-default-subtitle')
      await expect(subtitle).toBeVisible()
      await expect(subtitle).toHaveText('Estimate GPU memory requirements')
    })

    test('has content area', async ({ page }) => {
      const content = page.getByTestId('tool-demo-default-content')
      await expect(content).toBeVisible()
    })

    test('shows placeholder', async ({ page }) => {
      const placeholder = page.getByTestId('tool-demo-default-placeholder')
      await expect(placeholder).toBeVisible()
    })

    test('has placeholder icon', async ({ page }) => {
      const icon = page.getByTestId('tool-demo-default-placeholder-icon')
      await expect(icon).toBeVisible()
    })

    test('has start button', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-default-start-btn')
      await expect(btn).toBeVisible()
      await expect(btn).toHaveText('Start Demo')
    })

    test('has reset button', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-default-reset-btn')
      await expect(btn).toBeVisible()
    })

    test('has actions container', async ({ page }) => {
      const actions = page.getByTestId('tool-demo-default-actions')
      await expect(actions).toBeVisible()
    })
  })

  test.describe('Loading State', () => {
    test('shows loading indicator', async ({ page }) => {
      const loading = page.getByTestId('tool-demo-loading-loading')
      await expect(loading).toBeVisible()
    })

    test('has loading text', async ({ page }) => {
      const loading = page.getByTestId('tool-demo-loading-loading')
      await expect(loading).toContainText('Calculating costs...')
    })

    test('has spinner', async ({ page }) => {
      const loading = page.getByTestId('tool-demo-loading-loading')
      const spinner = loading.locator('.animate-spin')
      await expect(spinner).toBeVisible()
    })

    test('placeholder is not visible', async ({ page }) => {
      const placeholder = page.getByTestId('tool-demo-loading-placeholder')
      await expect(placeholder).not.toBeVisible()
    })
  })

  test.describe('Error State', () => {
    test('shows error container', async ({ page }) => {
      const error = page.getByTestId('tool-demo-error-error')
      await expect(error).toBeVisible()
    })

    test('has error title', async ({ page }) => {
      const error = page.getByTestId('tool-demo-error-error')
      await expect(error).toContainText('Connection Failed')
    })

    test('has error message', async ({ page }) => {
      const error = page.getByTestId('tool-demo-error-error')
      await expect(error).toContainText('Unable to fetch spot instance data')
    })

    test('has retry button', async ({ page }) => {
      const retryBtn = page.getByTestId('tool-demo-error-retry-btn')
      await expect(retryBtn).toBeVisible()
      await expect(retryBtn).toHaveText('Try Again')
    })

    test('error has red styling', async ({ page }) => {
      const error = page.getByTestId('tool-demo-error-error')
      await expect(error).toHaveClass(/bg-red-50/)
    })
  })

  test.describe('With Demo Content', () => {
    test('renders slot content', async ({ page }) => {
      const slotContent = page.getByTestId('demo-slot-content')
      await expect(slotContent).toBeVisible()
    })

    test('placeholder is not visible', async ({ page }) => {
      const placeholder = page.getByTestId('tool-demo-content-placeholder')
      await expect(placeholder).not.toBeVisible()
    })

    test('has header with title', async ({ page }) => {
      const title = page.getByTestId('tool-demo-content-title')
      await expect(title).toHaveText('Parallelism Advisor')
    })
  })

  test.describe('Height Variants', () => {
    test('small height has min-h-[200px]', async ({ page }) => {
      const content = page.getByTestId('tool-demo-sm-content')
      await expect(content).toHaveClass(/min-h-\[200px\]/)
    })

    test('large height has min-h-[400px]', async ({ page }) => {
      const content = page.getByTestId('tool-demo-lg-content')
      await expect(content).toHaveClass(/min-h-\[400px\]/)
    })
  })

  test.describe('Blue Color Scheme', () => {
    test('icon has blue styling', async ({ page }) => {
      const icon = page.getByTestId('tool-demo-blue-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
      await expect(icon).toHaveClass(/text-blue-600/)
    })

    test('placeholder icon has blue styling', async ({ page }) => {
      const icon = page.getByTestId('tool-demo-blue-placeholder-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
      await expect(icon).toHaveClass(/text-blue-600/)
    })

    test('start button has blue styling', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-blue-start-btn')
      await expect(btn).toHaveClass(/bg-blue-600/)
    })
  })

  test.describe('Emerald Color Scheme', () => {
    test('icon has emerald styling', async ({ page }) => {
      const icon = page.getByTestId('tool-demo-emerald-icon')
      await expect(icon).toHaveClass(/bg-emerald-100/)
      await expect(icon).toHaveClass(/text-emerald-600/)
    })

    test('start button has emerald styling', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-emerald-start-btn')
      await expect(btn).toHaveClass(/bg-emerald-600/)
    })
  })

  test.describe('Rose Color Scheme', () => {
    test('icon has rose styling', async ({ page }) => {
      const icon = page.getByTestId('tool-demo-rose-icon')
      await expect(icon).toHaveClass(/bg-rose-100/)
      await expect(icon).toHaveClass(/text-rose-600/)
    })

    test('start button has rose styling', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-rose-start-btn')
      await expect(btn).toHaveClass(/bg-rose-600/)
    })
  })

  test.describe('With Footer', () => {
    test('footer is visible', async ({ page }) => {
      const footer = page.getByTestId('tool-demo-footer-footer')
      await expect(footer).toBeVisible()
    })

    test('footer has text', async ({ page }) => {
      const footer = page.getByTestId('tool-demo-footer-footer')
      await expect(footer).toContainText('Demo data is not persisted')
    })

    test('has docs link', async ({ page }) => {
      const link = page.getByTestId('tool-demo-footer-docs-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/docs/guides/evaluate-models')
    })
  })

  test.describe('Without Header', () => {
    test('header is not visible', async ({ page }) => {
      const header = page.getByTestId('tool-demo-no-header-header')
      await expect(header).not.toBeVisible()
    })

    test('content is still visible', async ({ page }) => {
      const content = page.getByTestId('tool-demo-no-header-content')
      await expect(content).toBeVisible()
    })
  })

  test.describe('Custom Placeholder', () => {
    test('has custom placeholder title', async ({ page }) => {
      const placeholder = page.getByTestId('tool-demo-custom-placeholder')
      await expect(placeholder).toContainText('Precision Analysis Ready')
    })

    test('has custom placeholder description', async ({ page }) => {
      const placeholder = page.getByTestId('tool-demo-custom-placeholder')
      await expect(placeholder).toContainText('Analyze INT8, FP16, and INT4')
    })

    test('has custom start button text', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-custom-start-btn')
      await expect(btn).toHaveText('Analyze Model')
    })

    test('has amber color scheme', async ({ page }) => {
      const icon = page.getByTestId('tool-demo-custom-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })
  })

  test.describe('With Fullscreen Button', () => {
    test('fullscreen button is visible', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-fullscreen-fullscreen-btn')
      await expect(btn).toBeVisible()
    })

    test('fullscreen button has aria-label', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-fullscreen-fullscreen-btn')
      await expect(btn).toHaveAttribute('aria-label', 'Toggle fullscreen')
    })
  })

  test.describe('Without Start Button', () => {
    test('start button is not visible', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-no-start-start-btn')
      await expect(btn).not.toBeVisible()
    })

    test('placeholder still visible', async ({ page }) => {
      const placeholder = page.getByTestId('tool-demo-no-start-placeholder')
      await expect(placeholder).toBeVisible()
    })

    test('has custom placeholder text', async ({ page }) => {
      const placeholder = page.getByTestId('tool-demo-no-start-placeholder')
      await expect(placeholder).toContainText('View Only Mode')
    })
  })

  test.describe('Container Styling', () => {
    test('has rounded corners', async ({ page }) => {
      const demo = page.getByTestId('tool-demo-default')
      await expect(demo).toHaveClass(/rounded-2xl/)
    })

    test('has border', async ({ page }) => {
      const demo = page.getByTestId('tool-demo-default')
      await expect(demo).toHaveClass(/border/)
      await expect(demo).toHaveClass(/border-gray-200/)
    })

    test('has white background', async ({ page }) => {
      const demo = page.getByTestId('tool-demo-default')
      await expect(demo).toHaveClass(/bg-white/)
    })

    test('has shadow', async ({ page }) => {
      const demo = page.getByTestId('tool-demo-default')
      await expect(demo).toHaveClass(/shadow-sm/)
    })

    test('content area has gray background', async ({ page }) => {
      const content = page.getByTestId('tool-demo-default-content')
      await expect(content).toHaveClass(/bg-gray-50/)
    })
  })

  test.describe('Accessibility', () => {
    test('reset button has aria-label', async ({ page }) => {
      const btn = page.getByTestId('tool-demo-default-reset-btn')
      await expect(btn).toHaveAttribute('aria-label', 'Reset demo')
    })

    test('title is a heading', async ({ page }) => {
      const title = page.getByTestId('tool-demo-default-title')
      await expect(title).toHaveRole('heading')
    })

    test('docs link is accessible', async ({ page }) => {
      const link = page.getByTestId('tool-demo-footer-docs-link')
      await expect(link).toHaveRole('link')
    })
  })
})
