import { test, expect } from '@playwright/test'

test.describe('Studio Feature Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features/studio')
  })

  test.describe('Page Structure', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Studio/)
    })

    test('has correct meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content', /Save AI responses as reusable artifacts/)
    })
  })

  test.describe('Sticky Navigation', () => {
    test('renders sticky nav', async ({ page }) => {
      const nav = page.getByTestId('studio-nav')
      await expect(nav).toBeVisible()
    })

    test('displays feature name', async ({ page }) => {
      const title = page.getByTestId('studio-nav-title')
      await expect(title).toHaveText('Studio')
    })

    test('has overview link', async ({ page }) => {
      const link = page.getByTestId('studio-nav-link-0')
      await expect(link).toContainText('Overview')
    })

    test('has capabilities link', async ({ page }) => {
      const link = page.getByTestId('studio-nav-link-1')
      await expect(link).toContainText('Capabilities')
    })

    test('has tech specs link', async ({ page }) => {
      const link = page.getByTestId('studio-nav-link-2')
      await expect(link).toContainText('Tech Specs')
    })

    test('has resources link', async ({ page }) => {
      const link = page.getByTestId('studio-nav-link-3')
      await expect(link).toContainText('Resources')
    })

    test('has buy button', async ({ page }) => {
      const buyButton = page.getByTestId('studio-nav-buy-button')
      await expect(buyButton).toBeVisible()
      await expect(buyButton).toHaveText('Get Lattice')
    })
  })

  test.describe('Hero Section', () => {
    test('renders hero section', async ({ page }) => {
      const hero = page.getByTestId('studio-hero')
      await expect(hero).toBeVisible()
    })

    test('has correct headline', async ({ page }) => {
      const headline = page.getByTestId('studio-hero-headline')
      await expect(headline).toContainText('Decisions. Documented.')
    })

    test('has tagline with period-separated format', async ({ page }) => {
      const tagline = page.getByTestId('studio-hero-tagline')
      await expect(tagline).toContainText('Save. Export. Share.')
    })

    test('has description mentioning artifacts', async ({ page }) => {
      const description = page.getByTestId('studio-hero-description')
      await expect(description).toContainText('artifacts')
    })

    test('has product image', async ({ page }) => {
      const screenshot = page.getByTestId('studio-hero-screenshot')
      await expect(screenshot).toBeVisible()
    })

    test('has primary CTA', async ({ page }) => {
      const cta = page.getByTestId('studio-hero-buy-button')
      await expect(cta).toContainText('Get Lattice')
    })

    test('has secondary CTA', async ({ page }) => {
      const cta = page.getByTestId('studio-hero-learn-more')
      await expect(cta).toContainText('View docs')
    })
  })

  test.describe('Capabilities - Save Artifacts', () => {
    test('renders save section', async ({ page }) => {
      const section = page.getByTestId('studio-save')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('studio-save-title')
      await expect(title).toHaveText('Save Artifacts')
    })

    test('has teal icon color', async ({ page }) => {
      const icon = page.getByTestId('studio-save-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('mentions one-click save', async ({ page }) => {
      const features = page.getByTestId('studio-save-features')
      await expect(features).toContainText('One-click save')
    })

    test('has journey link', async ({ page }) => {
      const link = page.getByTestId('studio-save-journey-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/blog/journey-save-artifact')
    })
  })

  test.describe('Capabilities - Artifact Types', () => {
    test('renders types section', async ({ page }) => {
      const section = page.getByTestId('studio-types')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('studio-types-title')
      await expect(title).toHaveText('Artifact Types')
    })

    test('has blue icon color', async ({ page }) => {
      const icon = page.getByTestId('studio-types-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('is positioned right', async ({ page }) => {
      const imageSide = page.getByTestId('studio-types-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('has gray background', async ({ page }) => {
      const section = page.getByTestId('studio-types')
      await expect(section).toHaveClass(/bg-gray-50/)
    })

    test('mentions comparison tables', async ({ page }) => {
      const features = page.getByTestId('studio-types-features')
      await expect(features).toContainText('Comparison tables')
    })
  })

  test.describe('Capabilities - Export Options', () => {
    test('renders export section', async ({ page }) => {
      const section = page.getByTestId('studio-export')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('studio-export-title')
      await expect(title).toHaveText('Export Options')
    })

    test('has violet icon color', async ({ page }) => {
      const icon = page.getByTestId('studio-export-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('mentions CSV export', async ({ page }) => {
      const features = page.getByTestId('studio-export-features')
      await expect(features).toContainText('CSV')
    })

    test('mentions JSON export', async ({ page }) => {
      const features = page.getByTestId('studio-export-features')
      await expect(features).toContainText('JSON')
    })

    test('mentions Markdown export', async ({ page }) => {
      const features = page.getByTestId('studio-export-features')
      await expect(features).toContainText('Markdown')
    })
  })

  test.describe('Capabilities - Version History', () => {
    test('renders history section', async ({ page }) => {
      const section = page.getByTestId('studio-history')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('studio-history-title')
      await expect(title).toHaveText('Version History')
    })

    test('has amber icon color', async ({ page }) => {
      const icon = page.getByTestId('studio-history-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })

    test('mentions version tracking', async ({ page }) => {
      const features = page.getByTestId('studio-history-features')
      await expect(features).toContainText('Version tracking')
    })
  })

  test.describe('Tech Specs Section', () => {
    test('renders specs section', async ({ page }) => {
      const section = page.getByTestId('studio-specs')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('studio-specs-title')
      await expect(title).toHaveText('Technical Specifications')
    })

    test('shows Artifact Types specs', async ({ page }) => {
      const spec = page.getByTestId('studio-specs-spec-0-name')
      await expect(spec).toHaveText('Artifact Types')
    })

    test('shows Export Formats specs', async ({ page }) => {
      const spec = page.getByTestId('studio-specs-spec-1-name')
      await expect(spec).toHaveText('Export Formats')
    })

    test('shows Organization specs', async ({ page }) => {
      const spec = page.getByTestId('studio-specs-spec-2-name')
      await expect(spec).toHaveText('Organization')
    })

    test('has docs link', async ({ page }) => {
      const link = page.getByTestId('studio-specs-docs-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/docs/features/studio')
    })
  })

  test.describe('Related Resources Section', () => {
    test('renders resources section', async ({ page }) => {
      const section = page.getByTestId('studio-resources')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('studio-resources-title')
      await expect(title).toHaveText('Learn More About Studio')
    })

    test('shows journey guides', async ({ page }) => {
      const journeys = page.getByTestId('studio-resources-journeys')
      await expect(journeys).toBeVisible()
    })

    test('has save-artifact journey', async ({ page }) => {
      const journey = page.getByTestId('studio-resources-journey-0')
      await expect(journey).toContainText('Saving Artifacts')
    })

    test('has view-artifact journey', async ({ page }) => {
      const journey = page.getByTestId('studio-resources-journey-1')
      await expect(journey).toContainText('Viewing Artifacts')
    })

    test('has export-artifact journey', async ({ page }) => {
      const journey = page.getByTestId('studio-resources-journey-2')
      await expect(journey).toContainText('Exporting Artifacts')
    })

    test('shows documentation links', async ({ page }) => {
      const docs = page.getByTestId('studio-resources-docs')
      await expect(docs).toBeVisible()
    })

    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('studio-resources-cta')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('View Studio documentation')
    })
  })

  test.describe('CTA Section', () => {
    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('studio-cta-button')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('Get Lattice for $99')
    })

    test('CTA links to pricing', async ({ page }) => {
      const cta = page.getByTestId('studio-cta-button')
      await expect(cta).toHaveAttribute('href', '/#pricing')
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const hero = page.getByTestId('studio-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const hero = page.getByTestId('studio-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const hero = page.getByTestId('studio-hero')
      await expect(hero).toBeVisible()
    })

    test('nav scrollable on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const nav = page.getByTestId('studio-nav')
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
