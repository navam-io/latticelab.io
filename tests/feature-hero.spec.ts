import { test, expect } from '@playwright/test'

test.describe('FeatureHero Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/feature-hero')
  })

  test.describe('Structure', () => {
    test('renders section element', async ({ page }) => {
      const section = page.getByTestId('feature-hero-default')
      await expect(section).toBeVisible()
    })

    test('has pattern background', async ({ page }) => {
      const pattern = page.getByTestId('feature-hero-default-pattern')
      await expect(pattern).toBeVisible()
    })

    test('has bottom fade element', async ({ page }) => {
      const fade = page.getByTestId('feature-hero-default-fade')
      await expect(fade).toBeVisible()
    })
  })

  test.describe('Headline', () => {
    test('renders headline text', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-default-headline')
      await expect(headline).toBeVisible()
      await expect(headline).toContainText('Your Knowledge. Unified.')
    })

    test('headline is h1 element', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-default-headline')
      await expect(headline).toHaveAttribute('data-testid', 'feature-hero-default-headline')
      const tagName = await headline.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h1')
    })

    test('headline has gradient styling', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-default-headline')
      await expect(headline).toHaveClass(/gradient-text/)
    })
  })

  test.describe('Tagline', () => {
    test('renders tagline with period-separated format', async ({ page }) => {
      const tagline = page.getByTestId('feature-hero-default-tagline')
      await expect(tagline).toBeVisible()
      await expect(tagline).toContainText('Personal. Private. Powerful.')
    })

    test('pre-formatted tagline displays correctly', async ({ page }) => {
      const tagline = page.getByTestId('feature-hero-blue-tagline')
      await expect(tagline).toHaveText('Intelligent. Transparent. Traceable.')
    })

    test('tagline auto-formats words without periods', async ({ page }) => {
      // The "Save Export Share" should become "Save. Export. Share."
      const tagline = page.getByTestId('feature-hero-placeholder-tagline')
      await expect(tagline).toContainText('Save. Export. Share.')
    })
  })

  test.describe('Description', () => {
    test('renders description paragraph', async ({ page }) => {
      const description = page.getByTestId('feature-hero-default-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('Build a curated knowledge base')
    })

    test('description has proper text styling', async ({ page }) => {
      const description = page.getByTestId('feature-hero-default-description')
      await expect(description).toHaveClass(/text-white/)
    })
  })

  test.describe('CTAs', () => {
    test('renders CTA container', async ({ page }) => {
      const ctas = page.getByTestId('feature-hero-default-ctas')
      await expect(ctas).toBeVisible()
    })

    test('renders primary CTA button', async ({ page }) => {
      const buyButton = page.getByTestId('feature-hero-default-buy-button')
      await expect(buyButton).toBeVisible()
      await expect(buyButton).toHaveText(/Get Lattice/)
    })

    test('primary CTA links to pricing', async ({ page }) => {
      const buyButton = page.getByTestId('feature-hero-default-buy-button')
      await expect(buyButton).toHaveAttribute('href', '/#pricing')
    })

    test('renders secondary CTA button', async ({ page }) => {
      const learnMore = page.getByTestId('feature-hero-default-learn-more')
      await expect(learnMore).toBeVisible()
      await expect(learnMore).toHaveText(/View docs/)
    })

    test('secondary CTA links to overview', async ({ page }) => {
      const learnMore = page.getByTestId('feature-hero-default-learn-more')
      await expect(learnMore).toHaveAttribute('href', '#overview')
    })

    test('CTAs hidden when showCTAs is false', async ({ page }) => {
      const ctas = page.getByTestId('feature-hero-no-ctas-ctas')
      await expect(ctas).not.toBeVisible()
    })
  })

  test.describe('Product Image', () => {
    test('renders product image container', async ({ page }) => {
      const imageContainer = page.getByTestId('feature-hero-default-product-image')
      await expect(imageContainer).toBeVisible()
    })

    test('renders glow effect', async ({ page }) => {
      const glow = page.getByTestId('feature-hero-default-glow')
      await expect(glow).toBeVisible()
    })

    test('renders screenshot image', async ({ page }) => {
      const screenshot = page.getByTestId('feature-hero-default-screenshot')
      await expect(screenshot).toBeVisible()
      await expect(screenshot).toHaveAttribute('alt', 'Lattice Sources panel')
    })

    test('screenshot has correct src', async ({ page }) => {
      const screenshot = page.getByTestId('feature-hero-default-screenshot')
      await expect(screenshot).toHaveAttribute('src', '/images/journeys/view-source/view-source-03.png')
    })
  })

  test.describe('Placeholder Image', () => {
    test('shows placeholder when showImagePlaceholder is true', async ({ page }) => {
      const placeholder = page.getByTestId('feature-hero-placeholder-placeholder')
      await expect(placeholder).toBeVisible()
    })

    test('placeholder contains text', async ({ page }) => {
      const placeholder = page.getByTestId('feature-hero-placeholder-placeholder')
      await expect(placeholder).toContainText('Product Screenshot')
    })
  })

  test.describe('Color Schemes', () => {
    test('default has violet gradient', async ({ page }) => {
      const section = page.getByTestId('feature-hero-default')
      await expect(section).toHaveClass(/from-violet-900/)
    })

    test('blue scheme has blue gradient', async ({ page }) => {
      const section = page.getByTestId('feature-hero-blue')
      await expect(section).toHaveClass(/from-blue-900/)
    })

    test('teal scheme has teal gradient', async ({ page }) => {
      const section = page.getByTestId('feature-hero-placeholder')
      await expect(section).toHaveClass(/from-teal-900/)
    })

    test('amber scheme has amber gradient', async ({ page }) => {
      const section = page.getByTestId('feature-hero-no-ctas')
      await expect(section).toHaveClass(/from-amber-900/)
    })

    test('rose scheme has rose gradient', async ({ page }) => {
      const section = page.getByTestId('feature-hero-minimal')
      await expect(section).toHaveClass(/from-rose-900/)
    })
  })

  test.describe('Minimal Configuration', () => {
    test('renders with only headline', async ({ page }) => {
      const section = page.getByTestId('feature-hero-minimal')
      await expect(section).toBeVisible()

      const headline = page.getByTestId('feature-hero-minimal-headline')
      await expect(headline).toHaveText('Configure Infrastructure')
    })

    test('no tagline when not provided', async ({ page }) => {
      const tagline = page.getByTestId('feature-hero-minimal-tagline')
      await expect(tagline).not.toBeVisible()
    })

    test('no description when not provided', async ({ page }) => {
      const description = page.getByTestId('feature-hero-minimal-description')
      await expect(description).not.toBeVisible()
    })

    test('no CTAs when disabled', async ({ page }) => {
      const ctas = page.getByTestId('feature-hero-minimal-ctas')
      await expect(ctas).not.toBeVisible()
    })

    test('no image placeholder when disabled', async ({ page }) => {
      const placeholder = page.getByTestId('feature-hero-minimal-placeholder')
      await expect(placeholder).not.toBeVisible()

      const productImage = page.getByTestId('feature-hero-minimal-product-image')
      await expect(productImage).not.toBeVisible()
    })
  })

  test.describe('Fade Background', () => {
    test('default fades to white', async ({ page }) => {
      const fade = page.getByTestId('feature-hero-default-fade')
      await expect(fade).toHaveClass(/from-white/)
    })

    test('can fade to gray', async ({ page }) => {
      const fade = page.getByTestId('feature-hero-no-ctas-fade')
      await expect(fade).toHaveClass(/from-gray-50/)
    })
  })

  test.describe('Browser Frame', () => {
    test('shows browser URL', async ({ page }) => {
      const imageContainer = page.getByTestId('feature-hero-default-product-image')
      await expect(imageContainer).toContainText('lattice.app/sources')
    })

    test('shows browser controls (red, yellow, green)', async ({ page }) => {
      const imageContainer = page.getByTestId('feature-hero-default-product-image')
      const redDot = imageContainer.locator('.bg-red-500')
      const yellowDot = imageContainer.locator('.bg-yellow-500')
      const greenDot = imageContainer.locator('.bg-green-500')

      await expect(redDot).toBeVisible()
      await expect(yellowDot).toBeVisible()
      await expect(greenDot).toBeVisible()
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const section = page.getByTestId('feature-hero-default')
      await expect(section).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const section = page.getByTestId('feature-hero-default')
      await expect(section).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const section = page.getByTestId('feature-hero-default')
      await expect(section).toBeVisible()
    })

    test('headline visible on all viewports', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const headline = page.getByTestId('feature-hero-default-headline')
      await expect(headline).toBeVisible()
    })
  })

  test.describe('Animations', () => {
    test('headline has fade-in animation class', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-default-headline')
      await expect(headline).toHaveClass(/animate-fade-in/)
    })

    test('tagline has slide-up animation class', async ({ page }) => {
      const tagline = page.getByTestId('feature-hero-default-tagline')
      await expect(tagline).toHaveClass(/animate-slide-up/)
    })

    test('CTAs have delayed animation class', async ({ page }) => {
      const ctas = page.getByTestId('feature-hero-default-ctas')
      await expect(ctas).toHaveClass(/animate-slide-up-delayed/)
    })

    test('product image has delayed fade-in animation', async ({ page }) => {
      const imageContainer = page.getByTestId('feature-hero-default-product-image')
      await expect(imageContainer).toHaveClass(/animate-fade-in-delayed/)
    })
  })

  test.describe('Gradient Variants', () => {
    test('hero variant applied to default headline', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-default-headline')
      await expect(headline).toHaveClass(/gradient-text-hero/)
    })

    test('light variant can be applied', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-light-headline')
      await expect(headline).toHaveClass(/gradient-text-light/)
    })
  })

  test.describe('Headline Sizes', () => {
    test('default uses display-xl size', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-default-headline')
      await expect(headline).toHaveClass(/text-display-xl/)
    })

    test('display-lg size can be applied', async ({ page }) => {
      const headline = page.getByTestId('feature-hero-blue-headline')
      await expect(headline).toHaveClass(/text-display-lg/)
    })
  })
})
