import { test, expect } from '@playwright/test'

test.describe('Scenarios Feature Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features/scenarios')
  })

  test.describe('Page Structure', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Scenarios/)
    })

    test('has correct meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content', /workload types/)
    })
  })

  test.describe('Sticky Navigation', () => {
    test('renders sticky nav', async ({ page }) => {
      const nav = page.getByTestId('scenarios-nav')
      await expect(nav).toBeVisible()
    })

    test('displays feature name', async ({ page }) => {
      const title = page.getByTestId('scenarios-nav-title')
      await expect(title).toHaveText('Scenarios')
    })

    test('has overview link', async ({ page }) => {
      const link = page.getByTestId('scenarios-nav-link-0')
      await expect(link).toContainText('Overview')
    })

    test('has capabilities link', async ({ page }) => {
      const link = page.getByTestId('scenarios-nav-link-1')
      await expect(link).toContainText('Capabilities')
    })

    test('has tech specs link', async ({ page }) => {
      const link = page.getByTestId('scenarios-nav-link-2')
      await expect(link).toContainText('Tech Specs')
    })

    test('has resources link', async ({ page }) => {
      const link = page.getByTestId('scenarios-nav-link-3')
      await expect(link).toContainText('Resources')
    })

    test('has buy button', async ({ page }) => {
      const buyButton = page.getByTestId('scenarios-nav-buy-button')
      await expect(buyButton).toBeVisible()
      await expect(buyButton).toHaveText('Get Lattice')
    })
  })

  test.describe('Hero Section', () => {
    test('renders hero section', async ({ page }) => {
      const hero = page.getByTestId('scenarios-hero')
      await expect(hero).toBeVisible()
    })

    test('has correct headline', async ({ page }) => {
      const headline = page.getByTestId('scenarios-hero-headline')
      await expect(headline).toContainText('Define Your Workload.')
    })

    test('has tagline with period-separated format', async ({ page }) => {
      const tagline = page.getByTestId('scenarios-hero-tagline')
      await expect(tagline).toContainText('Configure. Target. Optimize.')
    })

    test('has description mentioning scenarios', async ({ page }) => {
      const description = page.getByTestId('scenarios-hero-description')
      await expect(description).toContainText('Scenarios capture everything')
    })

    test('has product image', async ({ page }) => {
      const screenshot = page.getByTestId('scenarios-hero-screenshot')
      await expect(screenshot).toBeVisible()
    })

    test('has primary CTA', async ({ page }) => {
      const cta = page.getByTestId('scenarios-hero-buy-button')
      await expect(cta).toContainText('Get Lattice')
    })

    test('has secondary CTA', async ({ page }) => {
      const cta = page.getByTestId('scenarios-hero-learn-more')
      await expect(cta).toContainText('View docs')
    })
  })

  test.describe('Capabilities - Workload Classification', () => {
    test('renders workloads section', async ({ page }) => {
      const section = page.getByTestId('scenarios-workloads')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('scenarios-workloads-title')
      await expect(title).toHaveText('Workload Classification')
    })

    test('has amber icon color', async ({ page }) => {
      const icon = page.getByTestId('scenarios-workloads-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })

    test('mentions High-Volume Chat', async ({ page }) => {
      const features = page.getByTestId('scenarios-workloads-features')
      await expect(features).toContainText('High-Volume Chat')
    })

    test('mentions RAG Applications', async ({ page }) => {
      const features = page.getByTestId('scenarios-workloads-features')
      await expect(features).toContainText('RAG Applications')
    })

    test('has journey link', async ({ page }) => {
      const link = page.getByTestId('scenarios-workloads-journey-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/blog/journey-create-scenario')
    })
  })

  test.describe('Capabilities - SLO Configuration', () => {
    test('renders SLO section', async ({ page }) => {
      const section = page.getByTestId('scenarios-slo')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('scenarios-slo-title')
      await expect(title).toHaveText('SLO Configuration')
    })

    test('has blue icon color', async ({ page }) => {
      const icon = page.getByTestId('scenarios-slo-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('is positioned right', async ({ page }) => {
      const imageSide = page.getByTestId('scenarios-slo-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('has gray background', async ({ page }) => {
      const section = page.getByTestId('scenarios-slo')
      await expect(section).toHaveClass(/bg-gray-50/)
    })

    test('mentions P95 Latency', async ({ page }) => {
      const features = page.getByTestId('scenarios-slo-features')
      await expect(features).toContainText('P95 Latency')
    })
  })

  test.describe('Capabilities - Budget & Cost', () => {
    test('renders budget section', async ({ page }) => {
      const section = page.getByTestId('scenarios-budget')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('scenarios-budget-title')
      await expect(title).toHaveText('Budget & Cost Constraints')
    })

    test('has teal icon color', async ({ page }) => {
      const icon = page.getByTestId('scenarios-budget-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('mentions Monthly Spend', async ({ page }) => {
      const features = page.getByTestId('scenarios-budget-features')
      await expect(features).toContainText('Monthly Spend')
    })

    test('mentions Cost-per-Request', async ({ page }) => {
      const features = page.getByTestId('scenarios-budget-features')
      await expect(features).toContainText('Cost-per-Request')
    })
  })

  test.describe('Capabilities - Compliance & Privacy', () => {
    test('renders compliance section', async ({ page }) => {
      const section = page.getByTestId('scenarios-compliance')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('scenarios-compliance-title')
      await expect(title).toHaveText('Compliance & Privacy')
    })

    test('has violet icon color', async ({ page }) => {
      const icon = page.getByTestId('scenarios-compliance-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('mentions HIPAA/SOC2', async ({ page }) => {
      const features = page.getByTestId('scenarios-compliance-features')
      await expect(features).toContainText('HIPAA/SOC2')
    })
  })

  test.describe('Tech Specs Section', () => {
    test('renders specs section', async ({ page }) => {
      const section = page.getByTestId('scenarios-specs')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('scenarios-specs-title')
      await expect(title).toHaveText('Technical Specifications')
    })

    test('shows Workload Categories specs', async ({ page }) => {
      const spec = page.getByTestId('scenarios-specs-spec-0-name')
      await expect(spec).toHaveText('Workload Categories')
    })

    test('shows SLO Parameters specs', async ({ page }) => {
      const spec = page.getByTestId('scenarios-specs-spec-1-name')
      await expect(spec).toHaveText('SLO Parameters')
    })

    test('shows Profile Options specs', async ({ page }) => {
      const spec = page.getByTestId('scenarios-specs-spec-2-name')
      await expect(spec).toHaveText('Profile Options')
    })

    test('has docs link', async ({ page }) => {
      const link = page.getByTestId('scenarios-specs-docs-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/docs/features/scenarios')
    })
  })

  test.describe('Related Resources Section', () => {
    test('renders resources section', async ({ page }) => {
      const section = page.getByTestId('scenarios-resources')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('scenarios-resources-title')
      await expect(title).toHaveText('Learn More About Scenarios')
    })

    test('shows journey guides', async ({ page }) => {
      const journeys = page.getByTestId('scenarios-resources-journeys')
      await expect(journeys).toBeVisible()
    })

    test('has create-scenario journey', async ({ page }) => {
      const journey = page.getByTestId('scenarios-resources-journey-0')
      await expect(journey).toContainText('Creating Scenarios')
    })

    test('has edit-scenario journey', async ({ page }) => {
      const journey = page.getByTestId('scenarios-resources-journey-1')
      await expect(journey).toContainText('Editing Scenarios')
    })

    test('has compare-scenarios journey', async ({ page }) => {
      const journey = page.getByTestId('scenarios-resources-journey-2')
      await expect(journey).toContainText('Comparing Scenarios')
    })

    test('shows documentation links', async ({ page }) => {
      const docs = page.getByTestId('scenarios-resources-docs')
      await expect(docs).toBeVisible()
    })

    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('scenarios-resources-cta')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('View Scenarios documentation')
    })
  })

  test.describe('CTA Section', () => {
    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('scenarios-cta-button')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('Get Lattice for $99')
    })

    test('CTA links to pricing', async ({ page }) => {
      const cta = page.getByTestId('scenarios-cta-button')
      await expect(cta).toHaveAttribute('href', '/#pricing')
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const hero = page.getByTestId('scenarios-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const hero = page.getByTestId('scenarios-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const hero = page.getByTestId('scenarios-hero')
      await expect(hero).toBeVisible()
    })

    test('nav scrollable on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const nav = page.getByTestId('scenarios-nav')
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
