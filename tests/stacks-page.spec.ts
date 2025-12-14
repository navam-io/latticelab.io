import { test, expect } from '@playwright/test'

test.describe('Stacks Feature Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features/stacks')
  })

  test.describe('Page Structure', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Stacks/)
    })

    test('has correct meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content', /AI infrastructure/)
    })
  })

  test.describe('Sticky Navigation', () => {
    test('renders sticky nav', async ({ page }) => {
      const nav = page.getByTestId('stacks-nav')
      await expect(nav).toBeVisible()
    })

    test('displays feature name', async ({ page }) => {
      const title = page.getByTestId('stacks-nav-title')
      await expect(title).toHaveText('Stacks')
    })

    test('has overview link', async ({ page }) => {
      const link = page.getByTestId('stacks-nav-link-0')
      await expect(link).toContainText('Overview')
    })

    test('has capabilities link', async ({ page }) => {
      const link = page.getByTestId('stacks-nav-link-1')
      await expect(link).toContainText('Capabilities')
    })

    test('has tech specs link', async ({ page }) => {
      const link = page.getByTestId('stacks-nav-link-2')
      await expect(link).toContainText('Tech Specs')
    })

    test('has resources link', async ({ page }) => {
      const link = page.getByTestId('stacks-nav-link-3')
      await expect(link).toContainText('Resources')
    })

    test('has buy button', async ({ page }) => {
      const buyButton = page.getByTestId('stacks-nav-buy-button')
      await expect(buyButton).toBeVisible()
      await expect(buyButton).toHaveText('Get Lattice')
    })
  })

  test.describe('Hero Section', () => {
    test('renders hero section', async ({ page }) => {
      const hero = page.getByTestId('stacks-hero')
      await expect(hero).toBeVisible()
    })

    test('has correct headline', async ({ page }) => {
      const headline = page.getByTestId('stacks-hero-headline')
      await expect(headline).toContainText('Configure Infrastructure.')
    })

    test('has tagline with period-separated format', async ({ page }) => {
      const tagline = page.getByTestId('stacks-hero-tagline')
      await expect(tagline).toContainText('Model. Hardware. Framework.')
    })

    test('has description mentioning stacks', async ({ page }) => {
      const description = page.getByTestId('stacks-hero-description')
      await expect(description).toContainText('Stacks define your AI infrastructure')
    })

    test('has product image', async ({ page }) => {
      const screenshot = page.getByTestId('stacks-hero-screenshot')
      await expect(screenshot).toBeVisible()
    })

    test('has primary CTA', async ({ page }) => {
      const cta = page.getByTestId('stacks-hero-buy-button')
      await expect(cta).toContainText('Get Lattice')
    })

    test('has secondary CTA', async ({ page }) => {
      const cta = page.getByTestId('stacks-hero-learn-more')
      await expect(cta).toContainText('View docs')
    })
  })

  test.describe('Capabilities - Model Selection', () => {
    test('renders models section', async ({ page }) => {
      const section = page.getByTestId('stacks-models')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('stacks-models-title')
      await expect(title).toHaveText('Model Selection')
    })

    test('has green icon color', async ({ page }) => {
      const icon = page.getByTestId('stacks-models-icon')
      await expect(icon).toHaveClass(/bg-green-100/)
    })

    test('mentions Anthropic Claude', async ({ page }) => {
      const features = page.getByTestId('stacks-models-features')
      await expect(features).toContainText('Anthropic Claude')
    })

    test('mentions OpenAI', async ({ page }) => {
      const features = page.getByTestId('stacks-models-features')
      await expect(features).toContainText('OpenAI')
    })

    test('has journey link', async ({ page }) => {
      const link = page.getByTestId('stacks-models-journey-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/blog/journey-create-stack')
    })
  })

  test.describe('Capabilities - Hardware Configuration', () => {
    test('renders hardware section', async ({ page }) => {
      const section = page.getByTestId('stacks-hardware')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('stacks-hardware-title')
      await expect(title).toHaveText('Hardware Configuration')
    })

    test('has blue icon color', async ({ page }) => {
      const icon = page.getByTestId('stacks-hardware-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('is positioned right', async ({ page }) => {
      const imageSide = page.getByTestId('stacks-hardware-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('has gray background', async ({ page }) => {
      const section = page.getByTestId('stacks-hardware')
      await expect(section).toHaveClass(/bg-gray-50/)
    })

    test('mentions NVIDIA GPUs', async ({ page }) => {
      const features = page.getByTestId('stacks-hardware-features')
      await expect(features).toContainText('NVIDIA GPUs')
    })
  })

  test.describe('Capabilities - Framework Selection', () => {
    test('renders frameworks section', async ({ page }) => {
      const section = page.getByTestId('stacks-frameworks')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('stacks-frameworks-title')
      await expect(title).toHaveText('Framework Selection')
    })

    test('has teal icon color', async ({ page }) => {
      const icon = page.getByTestId('stacks-frameworks-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('mentions vLLM', async ({ page }) => {
      const features = page.getByTestId('stacks-frameworks-features')
      await expect(features).toContainText('vLLM')
    })

    test('mentions TensorRT-LLM', async ({ page }) => {
      const features = page.getByTestId('stacks-frameworks-features')
      await expect(features).toContainText('TensorRT-LLM')
    })
  })

  test.describe('Capabilities - AI Suggestions', () => {
    test('renders suggestions section', async ({ page }) => {
      const section = page.getByTestId('stacks-suggestions')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('stacks-suggestions-title')
      await expect(title).toHaveText('AI-Suggested Stacks')
    })

    test('has violet icon color', async ({ page }) => {
      const icon = page.getByTestId('stacks-suggestions-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('mentions Scenario-Optimized', async ({ page }) => {
      const features = page.getByTestId('stacks-suggestions-features')
      await expect(features).toContainText('Scenario-Optimized')
    })
  })

  test.describe('Tech Specs Section', () => {
    test('renders specs section', async ({ page }) => {
      const section = page.getByTestId('stacks-specs')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('stacks-specs-title')
      await expect(title).toHaveText('Technical Specifications')
    })

    test('shows Model Providers specs', async ({ page }) => {
      const spec = page.getByTestId('stacks-specs-spec-0-name')
      await expect(spec).toHaveText('Model Providers')
    })

    test('shows Hardware Options specs', async ({ page }) => {
      const spec = page.getByTestId('stacks-specs-spec-1-name')
      await expect(spec).toHaveText('Hardware Options')
    })

    test('shows Frameworks specs', async ({ page }) => {
      const spec = page.getByTestId('stacks-specs-spec-2-name')
      await expect(spec).toHaveText('Frameworks')
    })

    test('has docs link', async ({ page }) => {
      const link = page.getByTestId('stacks-specs-docs-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/docs/features/stacks')
    })
  })

  test.describe('Related Resources Section', () => {
    test('renders resources section', async ({ page }) => {
      const section = page.getByTestId('stacks-resources')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('stacks-resources-title')
      await expect(title).toHaveText('Learn More About Stacks')
    })

    test('shows journey guides', async ({ page }) => {
      const journeys = page.getByTestId('stacks-resources-journeys')
      await expect(journeys).toBeVisible()
    })

    test('has create-stack journey', async ({ page }) => {
      const journey = page.getByTestId('stacks-resources-journey-0')
      await expect(journey).toContainText('Creating Stacks')
    })

    test('has configure-hardware journey', async ({ page }) => {
      const journey = page.getByTestId('stacks-resources-journey-1')
      await expect(journey).toContainText('Configure Hardware')
    })

    test('has configure-framework journey', async ({ page }) => {
      const journey = page.getByTestId('stacks-resources-journey-2')
      await expect(journey).toContainText('Configure Framework')
    })

    test('shows documentation links', async ({ page }) => {
      const docs = page.getByTestId('stacks-resources-docs')
      await expect(docs).toBeVisible()
    })

    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('stacks-resources-cta')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('View Stacks documentation')
    })
  })

  test.describe('CTA Section', () => {
    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('stacks-cta-button')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('Get Lattice for $99')
    })

    test('CTA links to pricing', async ({ page }) => {
      const cta = page.getByTestId('stacks-cta-button')
      await expect(cta).toHaveAttribute('href', '/#pricing')
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const hero = page.getByTestId('stacks-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const hero = page.getByTestId('stacks-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const hero = page.getByTestId('stacks-hero')
      await expect(hero).toBeVisible()
    })

    test('nav scrollable on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const nav = page.getByTestId('stacks-nav')
      await expect(nav).toBeVisible()
    })
  })

  test.describe('Section Anchors', () => {
    test('overview section has id', async ({ page }) => {
      const section = page.locator('#overview')
      await expect(section).toBeVisible()
    })

    test('capabilities section has id', async ({ page }) => {
      const section = page.locator('#capabilities')
      await expect(section).toBeVisible()
    })

    test('specs section has id', async ({ page }) => {
      const section = page.locator('#specs')
      await expect(section).toBeVisible()
    })

    test('resources section has id', async ({ page }) => {
      const section = page.locator('#resources')
      await expect(section).toBeVisible()
    })
  })
})
