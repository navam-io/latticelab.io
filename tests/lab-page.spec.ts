import { test, expect } from '@playwright/test'

test.describe('Lab Feature Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/features/lab')
  })

  test.describe('Page Structure', () => {
    test('page loads successfully', async ({ page }) => {
      await expect(page).toHaveTitle(/Lab/)
    })

    test('has correct meta description', async ({ page }) => {
      const metaDescription = page.locator('meta[name="description"]')
      await expect(metaDescription).toHaveAttribute('content', /LangGraph-powered research agent/)
    })
  })

  test.describe('Sticky Navigation', () => {
    test('renders sticky nav', async ({ page }) => {
      const nav = page.getByTestId('lab-nav')
      await expect(nav).toBeVisible()
    })

    test('displays feature name', async ({ page }) => {
      const title = page.getByTestId('lab-nav-title')
      await expect(title).toHaveText('Lab')
    })

    test('has overview link', async ({ page }) => {
      const link = page.getByTestId('lab-nav-link-0')
      await expect(link).toContainText('Overview')
    })

    test('has capabilities link', async ({ page }) => {
      const link = page.getByTestId('lab-nav-link-1')
      await expect(link).toContainText('Capabilities')
    })

    test('has tech specs link', async ({ page }) => {
      const link = page.getByTestId('lab-nav-link-2')
      await expect(link).toContainText('Tech Specs')
    })

    test('has resources link', async ({ page }) => {
      const link = page.getByTestId('lab-nav-link-3')
      await expect(link).toContainText('Resources')
    })

    test('has buy button', async ({ page }) => {
      const buyButton = page.getByTestId('lab-nav-buy-button')
      await expect(buyButton).toBeVisible()
      await expect(buyButton).toHaveText('Get Lattice')
    })
  })

  test.describe('Hero Section', () => {
    test('renders hero section', async ({ page }) => {
      const hero = page.getByTestId('lab-hero')
      await expect(hero).toBeVisible()
    })

    test('has correct headline', async ({ page }) => {
      const headline = page.getByTestId('lab-hero-headline')
      await expect(headline).toContainText('Research Agent. Grounded.')
    })

    test('has tagline with period-separated format', async ({ page }) => {
      const tagline = page.getByTestId('lab-hero-tagline')
      await expect(tagline).toContainText('Think. Verify. Trust.')
    })

    test('has description mentioning LangGraph', async ({ page }) => {
      const description = page.getByTestId('lab-hero-description')
      await expect(description).toContainText('LangGraph')
    })

    test('has product image', async ({ page }) => {
      const screenshot = page.getByTestId('lab-hero-screenshot')
      await expect(screenshot).toBeVisible()
    })

    test('has primary CTA', async ({ page }) => {
      const cta = page.getByTestId('lab-hero-buy-button')
      await expect(cta).toContainText('Get Lattice')
    })

    test('has secondary CTA', async ({ page }) => {
      const cta = page.getByTestId('lab-hero-learn-more')
      await expect(cta).toContainText('View docs')
    })
  })

  test.describe('Capabilities - LangGraph Research Agent', () => {
    test('renders agent section', async ({ page }) => {
      const section = page.getByTestId('lab-agent')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('lab-agent-title')
      await expect(title).toHaveText('LangGraph Research Agent')
    })

    test('has icon', async ({ page }) => {
      const icon = page.getByTestId('lab-agent-icon')
      await expect(icon).toBeVisible()
    })

    test('mentions multi-step reasoning', async ({ page }) => {
      const features = page.getByTestId('lab-agent-features')
      await expect(features).toContainText('Multi-step reasoning')
    })

    test('mentions LangGraph', async ({ page }) => {
      const features = page.getByTestId('lab-agent-features')
      await expect(features).toContainText('LangGraph')
    })

    test('has journey link', async ({ page }) => {
      const link = page.getByTestId('lab-agent-journey-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/blog/journey-chat-with-ai')
    })
  })

  test.describe('Capabilities - Grounded Recommendations', () => {
    test('renders grounded section', async ({ page }) => {
      const section = page.getByTestId('lab-grounded')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('lab-grounded-title')
      await expect(title).toHaveText('Grounded Recommendations')
    })

    test('has teal icon color', async ({ page }) => {
      const icon = page.getByTestId('lab-grounded-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('is positioned right', async ({ page }) => {
      const imageSide = page.getByTestId('lab-grounded-image')
      await expect(imageSide).toHaveClass(/lg:order-2/)
    })

    test('has gray background', async ({ page }) => {
      const section = page.getByTestId('lab-grounded')
      await expect(section).toHaveClass(/bg-gray-50/)
    })

    test('mentions citations', async ({ page }) => {
      const features = page.getByTestId('lab-grounded-features')
      await expect(features).toContainText('inline citations')
    })
  })

  test.describe('Capabilities - Conversation Extraction', () => {
    test('renders extraction section', async ({ page }) => {
      const section = page.getByTestId('lab-extraction')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('lab-extraction-title')
      await expect(title).toHaveText('Conversation Extraction')
    })

    test('has violet icon color', async ({ page }) => {
      const icon = page.getByTestId('lab-extraction-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('mentions scenarios', async ({ page }) => {
      const features = page.getByTestId('lab-extraction-features')
      await expect(features).toContainText('scenarios')
    })

    test('has journey link to create-scenario', async ({ page }) => {
      const link = page.getByTestId('lab-extraction-journey-link')
      await expect(link).toHaveAttribute('href', '/blog/journey-create-scenario')
    })
  })

  test.describe('Capabilities - Smart Prompts', () => {
    test('renders prompts section', async ({ page }) => {
      const section = page.getByTestId('lab-prompts')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('lab-prompts-title')
      await expect(title).toHaveText('Smart Prompts')
    })

    test('has teal icon color', async ({ page }) => {
      const icon = page.getByTestId('lab-prompts-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })

    test('mentions @ mentions', async ({ page }) => {
      const features = page.getByTestId('lab-prompts-features')
      await expect(features).toContainText('@ mentions')
    })
  })

  test.describe('Tech Specs Section', () => {
    test('renders specs section', async ({ page }) => {
      const section = page.getByTestId('lab-specs')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('lab-specs-title')
      await expect(title).toHaveText('Technical Specifications')
    })

    test('shows AI Engine specs', async ({ page }) => {
      const spec = page.getByTestId('lab-specs-spec-0-name')
      await expect(spec).toHaveText('AI Engine')
    })

    test('shows Conversation specs', async ({ page }) => {
      const spec = page.getByTestId('lab-specs-spec-1-name')
      await expect(spec).toHaveText('Conversation')
    })

    test('shows Transparency specs', async ({ page }) => {
      const spec = page.getByTestId('lab-specs-spec-2-name')
      await expect(spec).toHaveText('Transparency')
    })

    test('has docs link', async ({ page }) => {
      const link = page.getByTestId('lab-specs-docs-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/docs/features/lab')
    })
  })

  test.describe('Related Resources Section', () => {
    test('renders resources section', async ({ page }) => {
      const section = page.getByTestId('lab-resources')
      await expect(section).toBeVisible()
    })

    test('has correct title', async ({ page }) => {
      const title = page.getByTestId('lab-resources-title')
      await expect(title).toHaveText('Learn More About Lab')
    })

    test('shows journey guides', async ({ page }) => {
      const journeys = page.getByTestId('lab-resources-journeys')
      await expect(journeys).toBeVisible()
    })

    test('has chat-with-ai journey', async ({ page }) => {
      const journey = page.getByTestId('lab-resources-journey-0')
      await expect(journey).toContainText('Chatting with AI')
    })

    test('has ask-about-scenarios journey', async ({ page }) => {
      const journey = page.getByTestId('lab-resources-journey-1')
      await expect(journey).toContainText('Scenarios')
    })

    test('has create-scenario journey', async ({ page }) => {
      const journey = page.getByTestId('lab-resources-journey-2')
      await expect(journey).toContainText('Creating Scenarios')
    })

    test('shows documentation links', async ({ page }) => {
      const docs = page.getByTestId('lab-resources-docs')
      await expect(docs).toBeVisible()
    })

    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('lab-resources-cta')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('View Lab documentation')
    })
  })

  test.describe('CTA Section', () => {
    test('has CTA button', async ({ page }) => {
      const cta = page.getByTestId('lab-cta-button')
      await expect(cta).toBeVisible()
      await expect(cta).toContainText('Get Lattice for $99')
    })

    test('CTA links to pricing', async ({ page }) => {
      const cta = page.getByTestId('lab-cta-button')
      await expect(cta).toHaveAttribute('href', '/#pricing')
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const hero = page.getByTestId('lab-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const hero = page.getByTestId('lab-hero')
      await expect(hero).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const hero = page.getByTestId('lab-hero')
      await expect(hero).toBeVisible()
    })

    test('nav scrollable on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const nav = page.getByTestId('lab-nav')
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
