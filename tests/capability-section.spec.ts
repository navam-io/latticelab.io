import { test, expect } from '@playwright/test'

test.describe('CapabilitySection Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/capability-section')
  })

  test.describe('Structure', () => {
    test('renders section element', async ({ page }) => {
      const section = page.getByTestId('capability-default')
      await expect(section).toBeVisible()
    })

    test('renders image container', async ({ page }) => {
      const image = page.getByTestId('capability-default-image')
      await expect(image).toBeVisible()
    })

    test('renders content container', async ({ page }) => {
      const content = page.getByTestId('capability-default-content')
      await expect(content).toBeVisible()
    })
  })

  test.describe('Title', () => {
    test('renders title text', async ({ page }) => {
      const title = page.getByTestId('capability-default-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Multi-Source Ingestion')
    })

    test('title is h3 element', async ({ page }) => {
      const title = page.getByTestId('capability-default-title')
      const tagName = await title.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h3')
    })

    test('title has proper styling', async ({ page }) => {
      const title = page.getByTestId('capability-default-title')
      await expect(title).toHaveClass(/font-bold/)
    })
  })

  test.describe('Description', () => {
    test('renders description paragraph', async ({ page }) => {
      const description = page.getByTestId('capability-default-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('Build a comprehensive knowledge base')
    })

    test('description has proper text color', async ({ page }) => {
      const description = page.getByTestId('capability-default-description')
      await expect(description).toHaveClass(/text-gray-600/)
    })
  })

  test.describe('Features List', () => {
    test('renders features container', async ({ page }) => {
      const features = page.getByTestId('capability-default-features')
      await expect(features).toBeVisible()
    })

    test('renders correct number of features', async ({ page }) => {
      const features = page.getByTestId('capability-default-features')
      const items = features.locator('li')
      await expect(items).toHaveCount(4)
    })

    test('features have checkmark icons', async ({ page }) => {
      const feature = page.getByTestId('capability-default-feature-0')
      const svg = feature.locator('svg')
      await expect(svg).toBeVisible()
      await expect(svg).toHaveClass(/text-green-500/)
    })

    test('features render HTML content', async ({ page }) => {
      const feature = page.getByTestId('capability-default-feature-0')
      const strong = feature.locator('strong')
      await expect(strong).toBeVisible()
    })
  })

  test.describe('Icon', () => {
    test('renders icon container', async ({ page }) => {
      const icon = page.getByTestId('capability-default-icon')
      await expect(icon).toBeVisible()
    })

    test('icon has correct background for violet', async ({ page }) => {
      const icon = page.getByTestId('capability-default-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('icon has correct background for blue', async ({ page }) => {
      const icon = page.getByTestId('capability-right-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('icon has correct background for teal', async ({ page }) => {
      const icon = page.getByTestId('capability-teal-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('icon has correct background for amber', async ({ page }) => {
      const icon = page.getByTestId('capability-amber-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })

    test('icon has correct background for rose', async ({ page }) => {
      const icon = page.getByTestId('capability-minimal-icon')
      await expect(icon).toHaveClass(/bg-rose-100/)
    })
  })

  test.describe('Image Position', () => {
    test('default has image on left', async ({ page }) => {
      const imageSide = page.getByTestId('capability-default-image')
      await expect(imageSide).toHaveClass(/order-1/)
      await expect(imageSide).toHaveClass(/lg:order-1/)
    })

    test('right position has image on right', async ({ page }) => {
      const imageSide = page.getByTestId('capability-right-image')
      await expect(imageSide).toHaveClass(/order-1/)
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('content side adjusts for right image', async ({ page }) => {
      const contentSide = page.getByTestId('capability-right-content')
      await expect(contentSide).toHaveClass(/order-2/)
      await expect(contentSide).toHaveClass(/lg:order-1/)
    })
  })

  test.describe('Background', () => {
    test('white background applied correctly', async ({ page }) => {
      const section = page.getByTestId('capability-default')
      await expect(section).toHaveClass(/bg-white/)
    })

    test('gray background applied correctly', async ({ page }) => {
      const section = page.getByTestId('capability-right')
      await expect(section).toHaveClass(/bg-gray-50/)
    })
  })

  test.describe('Browser Frame', () => {
    test('shows browser frame when enabled', async ({ page }) => {
      const imageContainer = page.getByTestId('capability-default-image')
      const frame = imageContainer.locator('.bg-gray-100')
      await expect(frame).toBeVisible()
    })

    test('shows browser controls in frame', async ({ page }) => {
      const imageContainer = page.getByTestId('capability-default-image')
      const redDot = imageContainer.locator('.bg-red-400')
      const yellowDot = imageContainer.locator('.bg-yellow-400')
      const greenDot = imageContainer.locator('.bg-green-400')

      await expect(redDot).toBeVisible()
      await expect(yellowDot).toBeVisible()
      await expect(greenDot).toBeVisible()
    })

    test('no browser frame when disabled', async ({ page }) => {
      const imageContainer = page.getByTestId('capability-amber-image')
      const frame = imageContainer.locator('.bg-gray-100')
      await expect(frame).not.toBeVisible()
    })
  })

  test.describe('Screenshot', () => {
    test('renders screenshot image', async ({ page }) => {
      const screenshot = page.getByTestId('capability-default-screenshot')
      await expect(screenshot).toBeVisible()
    })

    test('screenshot has correct alt text', async ({ page }) => {
      const screenshot = page.getByTestId('capability-default-screenshot')
      await expect(screenshot).toHaveAttribute('alt', 'Sources panel showing document list')
    })

    test('screenshot has lazy loading', async ({ page }) => {
      const screenshot = page.getByTestId('capability-default-screenshot')
      await expect(screenshot).toHaveAttribute('loading', 'lazy')
    })
  })

  test.describe('Placeholder', () => {
    test('shows placeholder when enabled and no image', async ({ page }) => {
      const placeholder = page.getByTestId('capability-green-placeholder')
      await expect(placeholder).toBeVisible()
    })

    test('placeholder shows text', async ({ page }) => {
      const placeholder = page.getByTestId('capability-green-placeholder')
      await expect(placeholder).toContainText('Screenshot')
    })
  })

  test.describe('Journey Link', () => {
    test('renders journey link when provided', async ({ page }) => {
      const link = page.getByTestId('capability-default-journey-link')
      await expect(link).toBeVisible()
    })

    test('journey link has correct href', async ({ page }) => {
      const link = page.getByTestId('capability-default-journey-link')
      await expect(link).toHaveAttribute('href', '/journeys/add-sources')
    })

    test('journey link has custom text', async ({ page }) => {
      const link = page.getByTestId('capability-default-journey-link')
      await expect(link).toContainText('Learn how to add sources')
    })

    test('journey link has default text', async ({ page }) => {
      const link = page.getByTestId('capability-amber-journey-link')
      await expect(link).toContainText('View journey guide')
    })

    test('no journey link when not provided', async ({ page }) => {
      const link = page.getByTestId('capability-no-link-journey-link')
      await expect(link).not.toBeVisible()
    })

    test('journey link has arrow icon', async ({ page }) => {
      const link = page.getByTestId('capability-default-journey-link')
      const svg = link.locator('svg')
      await expect(svg).toBeVisible()
    })
  })

  test.describe('Glow Effect', () => {
    test('shows glow when enabled', async ({ page }) => {
      const imageContainer = page.getByTestId('capability-teal-image')
      const glow = imageContainer.locator('.blur-2xl')
      await expect(glow).toBeVisible()
    })

    test('no glow by default', async ({ page }) => {
      const imageContainer = page.getByTestId('capability-default-image')
      const glow = imageContainer.locator('.blur-2xl')
      await expect(glow).not.toBeVisible()
    })

    test('glow has correct color for teal', async ({ page }) => {
      const imageContainer = page.getByTestId('capability-teal-image')
      const glow = imageContainer.locator('.blur-2xl')
      await expect(glow).toHaveClass(/from-teal-400/)
    })
  })

  test.describe('Minimal Configuration', () => {
    test('renders with only title and icon', async ({ page }) => {
      const section = page.getByTestId('capability-minimal')
      await expect(section).toBeVisible()
    })

    test('title visible in minimal config', async ({ page }) => {
      const title = page.getByTestId('capability-minimal-title')
      await expect(title).toHaveText('Quick Configuration')
    })

    test('no description in minimal config', async ({ page }) => {
      const description = page.getByTestId('capability-minimal-description')
      await expect(description).not.toBeVisible()
    })

    test('no features in minimal config', async ({ page }) => {
      const features = page.getByTestId('capability-minimal-features')
      await expect(features).not.toBeVisible()
    })

    test('no journey link in minimal config', async ({ page }) => {
      const link = page.getByTestId('capability-minimal-journey-link')
      await expect(link).not.toBeVisible()
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const section = page.getByTestId('capability-default')
      await expect(section).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const section = page.getByTestId('capability-default')
      await expect(section).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const section = page.getByTestId('capability-default')
      await expect(section).toBeVisible()
    })

    test('grid layout on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const section = page.getByTestId('capability-default')
      const grid = section.locator('.lg\\:grid-cols-2')
      await expect(grid).toBeVisible()
    })
  })

  test.describe('Alternating Layout Pattern', () => {
    test('first section has image left', async ({ page }) => {
      const imageSide = page.getByTestId('capability-default-image')
      await expect(imageSide).toHaveClass(/lg:order-1/)
    })

    test('second section has image right', async ({ page }) => {
      const imageSide = page.getByTestId('capability-right-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('third section has image left', async ({ page }) => {
      const imageSide = page.getByTestId('capability-teal-image')
      await expect(imageSide).toHaveClass(/lg:order-1/)
    })

    test('fourth section has image right', async ({ page }) => {
      const imageSide = page.getByTestId('capability-amber-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })
  })

  test.describe('Color Scheme Variations', () => {
    test('violet icon color class', async ({ page }) => {
      const icon = page.getByTestId('capability-default-icon')
      const svg = icon.locator('svg')
      await expect(svg).toHaveClass(/text-violet-600/)
    })

    test('blue icon color class', async ({ page }) => {
      const icon = page.getByTestId('capability-right-icon')
      const svg = icon.locator('svg')
      await expect(svg).toHaveClass(/text-blue-600/)
    })

    test('teal icon color class', async ({ page }) => {
      const icon = page.getByTestId('capability-teal-icon')
      const svg = icon.locator('svg')
      await expect(svg).toHaveClass(/text-teal-600/)
    })

    test('amber icon color class', async ({ page }) => {
      const icon = page.getByTestId('capability-amber-icon')
      const svg = icon.locator('svg')
      await expect(svg).toHaveClass(/text-amber-600/)
    })

    test('rose icon color class', async ({ page }) => {
      const icon = page.getByTestId('capability-minimal-icon')
      const svg = icon.locator('svg')
      await expect(svg).toHaveClass(/text-rose-600/)
    })
  })

  test.describe('No Icon Configuration', () => {
    test('no icon container when icon not provided', async ({ page }) => {
      const icon = page.getByTestId('capability-green-icon')
      await expect(icon).not.toBeVisible()
    })

    test('title still visible without icon', async ({ page }) => {
      const title = page.getByTestId('capability-green-title')
      await expect(title).toHaveText('Performance Optimization')
    })
  })
})
