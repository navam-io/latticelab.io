import { test, expect } from '@playwright/test'

test.describe('Blueprints Feature Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features/blueprints')
  })

  test.describe('Page Structure', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Blueprints/)
    })

    test('has correct meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content', /Pre-built knowledge bundles/)
    })
  })

  test.describe('Sticky Navigation', () => {
    test('renders sticky nav', async ({ page }) => {
      const nav = page.getByTestId('blueprints-nav')
      await expect(nav).toBeVisible()
    })

    test('displays feature name', async ({ page }) => {
      const title = page.getByTestId('blueprints-nav-title')
      await expect(title).toHaveText('Blueprints')
    })

    test('has overview link', async ({ page }) => {
      const link = page.getByTestId('blueprints-nav-link-0')
      await expect(link).toContainText('Overview')
    })

    test('has capabilities link', async ({ page }) => {
      const link = page.getByTestId('blueprints-nav-link-1')
      await expect(link).toContainText('Capabilities')
    })

    test('has tech specs link', async ({ page }) => {
      const link = page.getByTestId('blueprints-nav-link-2')
      await expect(link).toContainText('Tech Specs')
    })

    test('has resources link', async ({ page }) => {
      const link = page.getByTestId('blueprints-nav-link-3')
      await expect(link).toContainText('Resources')
    })

    test('has buy button', async ({ page }) => {
      const buyButton = page.getByTestId('blueprints-nav-buy-button')
      await expect(buyButton).toBeVisible()
      await expect(buyButton).toHaveText('Get Lattice')
    })
  })

  test.describe('Hero Section', () => {
    test('renders hero section', async ({ page }) => {
      const hero = page.getByTestId('blueprints-hero')
      await expect(hero).toBeVisible()
    })

    test('has correct headline', async ({ page }) => {
      const headline = page.getByTestId('blueprints-hero-headline')
      await expect(headline).toContainText('36 Blueprints. 10+ Vendors.')
    })

    test('has tagline with period-separated format', async ({ page }) => {
      const tagline = page.getByTestId('blueprints-hero-tagline')
      await expect(tagline).toContainText('Browse. Apply. Research.')
    })

    test('has description mentioning knowledge bundles', async ({ page }) => {
      const description = page.getByTestId('blueprints-hero-description')
      await expect(description).toContainText('knowledge bundles')
    })

    test('has product image', async ({ page }) => {
      const screenshot = page.getByTestId('blueprints-hero-screenshot')
      await expect(screenshot).toBeVisible()
    })

    test('has primary CTA', async ({ page }) => {
      const cta = page.getByTestId('blueprints-hero-buy-button')
      await expect(cta).toContainText('Get Lattice')
    })

    test('has secondary CTA', async ({ page }) => {
      const cta = page.getByTestId('blueprints-hero-learn-more')
      await expect(cta).toContainText('View docs')
    })
  })

  test.describe('Capabilities - Vendor Coverage', () => {
    test('renders vendors section', async ({ page }) => {
      const section = page.getByTestId('blueprints-vendors')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('blueprints-vendors-title')
      await expect(title).toHaveText('Vendor Coverage')
    })

    test('has violet icon color', async ({ page }) => {
      const icon = page.getByTestId('blueprints-vendors-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('mentions Anthropic', async ({ page }) => {
      const features = page.getByTestId('blueprints-vendors-features')
      await expect(features).toContainText('Anthropic')
    })

    test('mentions AWS Bedrock', async ({ page }) => {
      const features = page.getByTestId('blueprints-vendors-features')
      await expect(features).toContainText('AWS Bedrock')
    })

    test('has journey link', async ({ page }) => {
      const link = page.getByTestId('blueprints-vendors-journey-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/blog/journey-browse-blueprints')
    })
  })

  test.describe('Capabilities - One-Click Setup', () => {
    test('renders setup section', async ({ page }) => {
      const section = page.getByTestId('blueprints-setup')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('blueprints-setup-title')
      await expect(title).toHaveText('One-Click Setup')
    })

    test('has blue icon color', async ({ page }) => {
      const icon = page.getByTestId('blueprints-setup-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('is positioned right', async ({ page }) => {
      const imageSide = page.getByTestId('blueprints-setup-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('has gray background', async ({ page }) => {
      const section = page.getByTestId('blueprints-setup')
      await expect(section).toHaveClass(/bg-gray-50/)
    })

    test('mentions curated sources', async ({ page }) => {
      const features = page.getByTestId('blueprints-setup-features')
      await expect(features).toContainText('Curated sources')
    })
  })

  test.describe('Capabilities - Curated Contents', () => {
    test('renders contents section', async ({ page }) => {
      const section = page.getByTestId('blueprints-contents')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('blueprints-contents-title')
      await expect(title).toHaveText('Curated Contents')
    })

    test('has teal icon color', async ({ page }) => {
      const icon = page.getByTestId('blueprints-contents-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('mentions sources count', async ({ page }) => {
      const features = page.getByTestId('blueprints-contents-features')
      await expect(features).toContainText('3-6 Sources')
    })

    test('mentions scenarios', async ({ page }) => {
      const features = page.getByTestId('blueprints-contents-features')
      await expect(features).toContainText('Scenarios')
    })
  })

  test.describe('Capabilities - Cross-Vendor Comparison', () => {
    test('renders comparison section', async ({ page }) => {
      const section = page.getByTestId('blueprints-comparison')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('blueprints-comparison-title')
      await expect(title).toHaveText('Cross-Vendor Comparison')
    })

    test('has amber icon color', async ({ page }) => {
      const icon = page.getByTestId('blueprints-comparison-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })

    test('mentions multi-provider', async ({ page }) => {
      const features = page.getByTestId('blueprints-comparison-features')
      await expect(features).toContainText('Multi-provider')
    })
  })

  test.describe('Tech Specs Section', () => {
    test('renders specs section', async ({ page }) => {
      const section = page.getByTestId('blueprints-specs')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('blueprints-specs-title')
      await expect(title).toHaveText('Technical Specifications')
    })

    test('shows Vendors specs', async ({ page }) => {
      const spec = page.getByTestId('blueprints-specs-spec-0-name')
      await expect(spec).toHaveText('Vendors')
    })

    test('shows Blueprint Contents specs', async ({ page }) => {
      const spec = page.getByTestId('blueprints-specs-spec-1-name')
      await expect(spec).toHaveText('Blueprint Contents')
    })

    test('shows Features specs', async ({ page }) => {
      const spec = page.getByTestId('blueprints-specs-spec-2-name')
      await expect(spec).toHaveText('Features')
    })

    test('has docs link', async ({ page }) => {
      const link = page.getByTestId('blueprints-specs-docs-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/docs/features/blueprints')
    })
  })

  test.describe('Related Resources Section', () => {
    test('renders resources section', async ({ page }) => {
      const section = page.getByTestId('blueprints-resources')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('blueprints-resources-title')
      await expect(title).toHaveText('Learn More About Blueprints')
    })

    test('shows journey guides', async ({ page }) => {
      const journeys = page.getByTestId('blueprints-resources-journeys')
      await expect(journeys).toBeVisible()
    })

    test('has browse-blueprints journey', async ({ page }) => {
      const journey = page.getByTestId('blueprints-resources-journey-0')
      await expect(journey).toContainText('Browsing Blueprints')
    })

    test('has apply-blueprint journey', async ({ page }) => {
      const journey = page.getByTestId('blueprints-resources-journey-1')
      await expect(journey).toContainText('Applying Blueprints')
    })

    test('has filter-blueprints journey', async ({ page }) => {
      const journey = page.getByTestId('blueprints-resources-journey-2')
      await expect(journey).toContainText('Filtering Blueprints')
    })

    test('shows documentation links', async ({ page }) => {
      const docs = page.getByTestId('blueprints-resources-docs')
      await expect(docs).toBeVisible()
    })

    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('blueprints-resources-cta')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('View Blueprints documentation')
    })
  })

  test.describe('CTA Section', () => {
    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('blueprints-cta-button')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('Get Lattice for $99')
    })

    test('CTA links to pricing', async ({ page }) => {
      const cta = page.getByTestId('blueprints-cta-button')
      await expect(cta).toHaveAttribute('href', '/#pricing')
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const hero = page.getByTestId('blueprints-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const hero = page.getByTestId('blueprints-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const hero = page.getByTestId('blueprints-hero')
      await expect(hero).toBeVisible()
    })

    test('nav scrollable on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const nav = page.getByTestId('blueprints-nav')
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
