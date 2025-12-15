import { test, expect } from '@playwright/test'

// Test all 8 tool pages
const tools = [
  { slug: 'memory-calculator', name: 'Memory Calculator', category: 'calculator' },
  { slug: 'tco-calculator', name: 'TCO Calculator', category: 'calculator' },
  { slug: 'model-registry', name: 'Model Registry', category: 'registry' },
  { slug: 'accelerator-registry', name: 'Accelerator Registry', category: 'registry' },
  { slug: 'parallelism-advisor', name: 'Parallelism Advisor', category: 'advisor' },
  { slug: 'quantization-advisor', name: 'Quantization Advisor', category: 'advisor' },
  { slug: 'spot-advisor', name: 'Spot Advisor', category: 'advisor' },
  { slug: 'live-data-feeds', name: 'Live Data Feeds', category: 'data' }
]

test.describe('Dynamic Tool Pages', () => {
  // Test Memory Calculator as representative page (matching feature page design)
  test.describe('Memory Calculator Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/tools/memory-calculator')
    })

    test('renders page container', async ({ page }) => {
      const container = page.getByTestId('tool-page-memory-calculator')
      await expect(container).toBeVisible()
    })

    test.describe('Sticky Navigation', () => {
      test('renders sticky nav', async ({ page }) => {
        const nav = page.getByTestId('memory-calculator-nav')
        await expect(nav).toBeVisible()
      })

      test('has feature name in nav', async ({ page }) => {
        const nav = page.getByTestId('memory-calculator-nav')
        await expect(nav).toContainText('Memory Calculator')
      })
    })

    test.describe('Hero Section', () => {
      test('renders hero section', async ({ page }) => {
        const hero = page.getByTestId('memory-calculator-hero')
        await expect(hero).toBeVisible()
      })

      test('has tool headline', async ({ page }) => {
        const headline = page.getByTestId('memory-calculator-hero-headline')
        await expect(headline).toBeVisible()
        await expect(headline).toContainText('Memory Calculator')
      })

      test('has tagline', async ({ page }) => {
        const tagline = page.getByTestId('memory-calculator-hero-tagline')
        await expect(tagline).toBeVisible()
      })

      test('has description', async ({ page }) => {
        const description = page.getByTestId('memory-calculator-hero-description')
        await expect(description).toBeVisible()
      })

      test('has primary CTA button', async ({ page }) => {
        const cta = page.getByTestId('memory-calculator-hero-buy-button')
        await expect(cta).toBeVisible()
        await expect(cta).toContainText('Get Lattice')
      })
    })

    test.describe('Capabilities Section', () => {
      test('renders first capabilities section', async ({ page }) => {
        const section = page.getByTestId('memory-calculator-capabilities-1')
        await expect(section).toBeVisible()
      })

      test('first section has title', async ({ page }) => {
        const title = page.getByTestId('memory-calculator-capabilities-1-title')
        await expect(title).toBeVisible()
        await expect(title).toContainText('Key Capabilities')
      })

      test('displays capability features', async ({ page }) => {
        const features = page.getByTestId('memory-calculator-capabilities-1-features')
        await expect(features).toBeVisible()
      })
    })

    test.describe('Content Section', () => {
      test('renders content section', async ({ page }) => {
        const section = page.getByTestId('tool-content-section')
        await expect(section).toBeVisible()
      })

      test('has prose content', async ({ page }) => {
        const content = page.getByTestId('tool-content')
        await expect(content).toBeVisible()
      })

      test('content includes overview', async ({ page }) => {
        const content = page.getByTestId('tool-content')
        await expect(content).toContainText('Overview')
      })

      test('content includes key capabilities', async ({ page }) => {
        const content = page.getByTestId('tool-content')
        await expect(content).toContainText('Key Capabilities')
      })
    })

    test.describe('Tech Specs Section', () => {
      test('renders specs section', async ({ page }) => {
        const section = page.getByTestId('memory-calculator-specs')
        await expect(section).toBeVisible()
      })

      test('has specs title', async ({ page }) => {
        const title = page.getByTestId('memory-calculator-specs-title')
        await expect(title).toBeVisible()
        await expect(title).toContainText('Technical Details')
      })
    })

    test.describe('Resources Section', () => {
      test('renders resources section', async ({ page }) => {
        const section = page.getByTestId('memory-calculator-resources')
        await expect(section).toBeVisible()
      })

      test('has resources title', async ({ page }) => {
        const title = page.getByTestId('memory-calculator-resources-title')
        await expect(title).toBeVisible()
      })

      test('has browse tools CTA', async ({ page }) => {
        const cta = page.getByTestId('memory-calculator-resources-cta')
        await expect(cta).toBeVisible()
        await expect(cta).toContainText('Browse all tools')
      })
    })

    test.describe('CTA Section', () => {
      test('renders CTA section', async ({ page }) => {
        const section = page.getByTestId('tool-cta-section')
        await expect(section).toBeVisible()
      })

      test('has CTA title', async ({ page }) => {
        const title = page.getByTestId('tool-cta-title')
        await expect(title).toBeVisible()
        await expect(title).toHaveText('Get Full Access to All Tools')
      })

      test('has CTA description', async ({ page }) => {
        const description = page.getByTestId('tool-cta-description')
        await expect(description).toBeVisible()
        await expect(description).toContainText('Memory Calculator')
      })

      test('has pricing button', async ({ page }) => {
        const button = page.getByTestId('tool-cta-button')
        await expect(button).toBeVisible()
        await expect(button).toContainText('Get Lattice for $99')
        await expect(button).toHaveAttribute('href', '/#pricing')
      })

      test('has browse tools button', async ({ page }) => {
        const button = page.getByTestId('tool-browse-button')
        await expect(button).toBeVisible()
        await expect(button).toContainText('Browse All Tools')
        await expect(button).toHaveAttribute('href', '/tools')
      })
    })
  })

  // Test all 7 tools exist and have correct structure
  test.describe('All Tool Pages Accessible', () => {
    for (const tool of tools) {
      test(`${tool.name} page loads correctly`, async ({ page }) => {
        await page.goto(`/tools/${tool.slug}`)

        // Verify page container
        const container = page.getByTestId(`tool-page-${tool.slug}`)
        await expect(container).toBeVisible()

        // Verify hero section
        const hero = page.getByTestId(`${tool.slug}-hero`)
        await expect(hero).toBeVisible()

        // Verify sticky nav
        const nav = page.getByTestId(`${tool.slug}-nav`)
        await expect(nav).toBeVisible()

        // Verify specs section
        const specs = page.getByTestId(`${tool.slug}-specs`)
        await expect(specs).toBeVisible()

        // Verify CTA section
        const ctaSection = page.getByTestId('tool-cta-section')
        await expect(ctaSection).toBeVisible()
      })
    }
  })

  // Test navigation between tools
  test.describe('Navigation', () => {
    test('browse all tools button navigates to hub', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      const browseButton = page.getByTestId('tool-browse-button')
      await browseButton.click()
      await expect(page).toHaveURL('/tools')
    })

    test('resources CTA links to tools hub', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      const ctaLink = page.getByTestId('memory-calculator-resources-cta')
      await expect(ctaLink).toHaveAttribute('href', '/tools')
    })
  })
})
