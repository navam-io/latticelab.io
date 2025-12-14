import { test, expect } from '@playwright/test'

test.describe('Sources Feature Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features/sources')
  })

  test.describe('Page Structure', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Sources/)
    })

    test('has correct meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content', /Multi-source knowledge ingestion/)
    })
  })

  test.describe('Sticky Navigation', () => {
    test('renders sticky nav', async ({ page }) => {
      const nav = page.getByTestId('sources-nav')
      await expect(nav).toBeVisible()
    })

    test('displays feature name', async ({ page }) => {
      const title = page.getByTestId('sources-nav-title')
      await expect(title).toHaveText('Sources')
    })

    test('has overview link', async ({ page }) => {
      const link = page.getByTestId('sources-nav-link-0')
      await expect(link).toContainText('Overview')
    })

    test('has capabilities link', async ({ page }) => {
      const link = page.getByTestId('sources-nav-link-1')
      await expect(link).toContainText('Capabilities')
    })

    test('has tech specs link', async ({ page }) => {
      const link = page.getByTestId('sources-nav-link-2')
      await expect(link).toContainText('Tech Specs')
    })

    test('has resources link', async ({ page }) => {
      const link = page.getByTestId('sources-nav-link-3')
      await expect(link).toContainText('Resources')
    })

    test('has buy button', async ({ page }) => {
      const buyButton = page.getByTestId('sources-nav-buy-button')
      await expect(buyButton).toBeVisible()
      await expect(buyButton).toHaveText('Get Lattice')
    })
  })

  test.describe('Hero Section', () => {
    test('renders hero section', async ({ page }) => {
      const hero = page.getByTestId('sources-hero')
      await expect(hero).toBeVisible()
    })

    test('has correct headline', async ({ page }) => {
      const headline = page.getByTestId('sources-hero-headline')
      await expect(headline).toContainText('Your Knowledge. Unified.')
    })

    test('has tagline with period-separated format', async ({ page }) => {
      const tagline = page.getByTestId('sources-hero-tagline')
      await expect(tagline).toContainText('Personal. Private. Powerful.')
    })

    test('has description', async ({ page }) => {
      const description = page.getByTestId('sources-hero-description')
      await expect(description).toContainText('curated knowledge base')
    })

    test('has product image', async ({ page }) => {
      const screenshot = page.getByTestId('sources-hero-screenshot')
      await expect(screenshot).toBeVisible()
    })

    test('has primary CTA', async ({ page }) => {
      const cta = page.getByTestId('sources-hero-buy-button')
      await expect(cta).toContainText('Get Lattice')
    })

    test('has secondary CTA', async ({ page }) => {
      const cta = page.getByTestId('sources-hero-learn-more')
      await expect(cta).toContainText('View docs')
    })
  })

  test.describe('Capabilities - Multi-Source Ingestion', () => {
    test('renders ingestion section', async ({ page }) => {
      const section = page.getByTestId('sources-ingestion')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('sources-ingestion-title')
      await expect(title).toHaveText('Multi-Source Ingestion')
    })

    test('has icon', async ({ page }) => {
      const icon = page.getByTestId('sources-ingestion-icon')
      await expect(icon).toBeVisible()
    })

    test('lists PDF support', async ({ page }) => {
      const features = page.getByTestId('sources-ingestion-features')
      await expect(features).toContainText('PDF Documents')
    })

    test('lists Google Docs support with version', async ({ page }) => {
      const features = page.getByTestId('sources-ingestion-features')
      await expect(features).toContainText('Google Docs')
      await expect(features).toContainText('v0.6.2')
    })

    test('has journey link', async ({ page }) => {
      const link = page.getByTestId('sources-ingestion-journey-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/blog/journey-add-sources')
    })
  })

  test.describe('Capabilities - Hybrid Search', () => {
    test('renders search section', async ({ page }) => {
      const section = page.getByTestId('sources-search')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('sources-search-title')
      await expect(title).toHaveText('Hybrid Semantic Search')
    })

    test('has blue icon color', async ({ page }) => {
      const icon = page.getByTestId('sources-search-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('is positioned right', async ({ page }) => {
      const imageSide = page.getByTestId('sources-search-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('has gray background', async ({ page }) => {
      const section = page.getByTestId('sources-search')
      await expect(section).toHaveClass(/bg-gray-50/)
    })
  })

  test.describe('Capabilities - Citation Tracking', () => {
    test('renders citation section', async ({ page }) => {
      const section = page.getByTestId('sources-citations')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('sources-citations-title')
      await expect(title).toHaveText('Citation Tracking')
    })

    test('has teal icon color', async ({ page }) => {
      const icon = page.getByTestId('sources-citations-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('mentions inline citations', async ({ page }) => {
      const features = page.getByTestId('sources-citations-features')
      await expect(features).toContainText('inline citations')
    })
  })

  test.describe('Capabilities - Real-time Indexing', () => {
    test('renders indexing section', async ({ page }) => {
      const section = page.getByTestId('sources-indexing')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('sources-indexing-title')
      await expect(title).toHaveText('Real-time Indexing')
    })

    test('has amber icon color', async ({ page }) => {
      const icon = page.getByTestId('sources-indexing-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })

    test('shows placeholder (no screenshot yet)', async ({ page }) => {
      const placeholder = page.getByTestId('sources-indexing-placeholder')
      await expect(placeholder).toBeVisible()
    })
  })

  test.describe('Tech Specs Section', () => {
    test('renders specs section', async ({ page }) => {
      const section = page.getByTestId('sources-specs')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('sources-specs-title')
      await expect(title).toHaveText('Technical Specifications')
    })

    test('shows supported formats', async ({ page }) => {
      const spec = page.getByTestId('sources-specs-spec-0-name')
      await expect(spec).toHaveText('Supported Formats')
    })

    test('shows cloud integrations', async ({ page }) => {
      const spec = page.getByTestId('sources-specs-spec-1-name')
      await expect(spec).toHaveText('Cloud Integrations')
    })

    test('shows processing specs', async ({ page }) => {
      const spec = page.getByTestId('sources-specs-spec-2-name')
      await expect(spec).toHaveText('Processing')
    })

    test('has docs link', async ({ page }) => {
      const link = page.getByTestId('sources-specs-docs-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/docs/features/sources')
    })
  })

  test.describe('Related Resources Section', () => {
    test('renders resources section', async ({ page }) => {
      const section = page.getByTestId('sources-resources')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('sources-resources-title')
      await expect(title).toHaveText('Learn More About Sources')
    })

    test('shows journey guides', async ({ page }) => {
      const journeys = page.getByTestId('sources-resources-journeys')
      await expect(journeys).toBeVisible()
    })

    test('has add-sources journey', async ({ page }) => {
      const journey = page.getByTestId('sources-resources-journey-0')
      await expect(journey).toContainText('Adding Sources')
    })

    test('has browse-sources journey', async ({ page }) => {
      const journey = page.getByTestId('sources-resources-journey-1')
      await expect(journey).toContainText('Browsing')
    })

    test('has view-source journey', async ({ page }) => {
      const journey = page.getByTestId('sources-resources-journey-2')
      await expect(journey).toContainText('Viewing Source')
    })

    test('shows documentation links', async ({ page }) => {
      const docs = page.getByTestId('sources-resources-docs')
      await expect(docs).toBeVisible()
    })

    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('sources-resources-cta')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('View Sources documentation')
    })
  })

  test.describe('CTA Section', () => {
    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('sources-cta-button')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('Get Lattice for $99')
    })

    test('CTA links to pricing', async ({ page }) => {
      const cta = page.getByTestId('sources-cta-button')
      await expect(cta).toHaveAttribute('href', '/#pricing')
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const hero = page.getByTestId('sources-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const hero = page.getByTestId('sources-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const hero = page.getByTestId('sources-hero')
      await expect(hero).toBeVisible()
    })

    test('nav scrollable on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const nav = page.getByTestId('sources-nav')
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
