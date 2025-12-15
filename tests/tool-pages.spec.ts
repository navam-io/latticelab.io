import { test, expect } from '@playwright/test'

// Test all 7 tool pages
const tools = [
  { slug: 'memory-calculator', name: 'Memory Calculator', category: 'calculator' },
  { slug: 'tco-calculator', name: 'TCO Calculator', category: 'calculator' },
  { slug: 'accelerator-registry', name: 'Accelerator Registry', category: 'registry' },
  { slug: 'parallelism-advisor', name: 'Parallelism Advisor', category: 'advisor' },
  { slug: 'quantization-advisor', name: 'Quantization Advisor', category: 'advisor' },
  { slug: 'spot-advisor', name: 'Spot Advisor', category: 'advisor' },
  { slug: 'evaluation', name: 'Evaluation Framework', category: 'framework' }
]

test.describe('Dynamic Tool Pages', () => {
  // Test Memory Calculator as representative page
  test.describe('Memory Calculator Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/tools/memory-calculator')
    })

    test('renders page container', async ({ page }) => {
      const container = page.getByTestId('tool-page-memory-calculator')
      await expect(container).toBeVisible()
    })

    test.describe('Hero Section', () => {
      test('renders hero section', async ({ page }) => {
        const hero = page.getByTestId('tool-hero')
        await expect(hero).toBeVisible()
      })

      test('has breadcrumb navigation', async ({ page }) => {
        const breadcrumb = page.getByTestId('tool-breadcrumb')
        await expect(breadcrumb).toBeVisible()
        await expect(breadcrumb).toContainText('Tools')
        await expect(breadcrumb).toContainText('Memory Calculator')
      })

      test('has tool icon', async ({ page }) => {
        const icon = page.getByTestId('tool-icon')
        await expect(icon).toBeVisible()
      })

      test('has category badge', async ({ page }) => {
        const category = page.getByTestId('tool-category')
        await expect(category).toBeVisible()
        await expect(category).toHaveText('calculator')
      })

      test('has tool title', async ({ page }) => {
        const title = page.getByTestId('tool-title')
        await expect(title).toBeVisible()
        await expect(title).toHaveText('Memory Calculator')
      })

      test('has tool description', async ({ page }) => {
        const description = page.getByTestId('tool-description')
        await expect(description).toBeVisible()
        await expect(description).toContainText('memory requirements')
      })

      test('has links container', async ({ page }) => {
        const links = page.getByTestId('tool-links')
        await expect(links).toBeVisible()
      })

      test('has docs link', async ({ page }) => {
        const docsLink = page.getByTestId('tool-docs-link')
        await expect(docsLink).toBeVisible()
        await expect(docsLink).toContainText('View Documentation')
      })
    })

    test.describe('Features Section', () => {
      test('renders features section', async ({ page }) => {
        const section = page.getByTestId('tool-features-section')
        await expect(section).toBeVisible()
      })

      test('has section title', async ({ page }) => {
        const title = page.getByTestId('tool-features-title')
        await expect(title).toBeVisible()
        await expect(title).toHaveText('Key Features')
      })

      test('has features grid', async ({ page }) => {
        const grid = page.getByTestId('tool-features-grid')
        await expect(grid).toBeVisible()
      })

      test('displays multiple features', async ({ page }) => {
        const feature0 = page.getByTestId('tool-feature-0')
        const feature1 = page.getByTestId('tool-feature-1')
        await expect(feature0).toBeVisible()
        await expect(feature1).toBeVisible()
      })
    })

    test.describe('Demo Section', () => {
      test('renders demo section', async ({ page }) => {
        const section = page.getByTestId('tool-demo-section')
        await expect(section).toBeVisible()
      })

      test('has section title', async ({ page }) => {
        const title = page.getByTestId('tool-demo-title')
        await expect(title).toBeVisible()
        await expect(title).toHaveText('Try It Out')
      })

      test('has ToolDemo component', async ({ page }) => {
        const demo = page.getByTestId('tool-demo-memory-calculator')
        await expect(demo).toBeVisible()
      })

      test('demo shows placeholder state', async ({ page }) => {
        const placeholder = page.getByTestId('tool-demo-memory-calculator-placeholder')
        await expect(placeholder).toBeVisible()
        await expect(placeholder).toContainText('Demo Coming Soon')
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

    test.describe('Related Tools Section', () => {
      test('renders related tools section', async ({ page }) => {
        const section = page.getByTestId('tool-related-section')
        await expect(section).toBeVisible()
      })

      test('has section title', async ({ page }) => {
        const title = page.getByTestId('tool-related-title')
        await expect(title).toBeVisible()
        await expect(title).toHaveText('Related Tools')
      })

      test('has related tools grid', async ({ page }) => {
        const grid = page.getByTestId('tool-related-grid')
        await expect(grid).toBeVisible()
      })

      test('shows TCO calculator as related', async ({ page }) => {
        const relatedTool = page.getByTestId('related-tool-tco-calculator')
        await expect(relatedTool).toBeVisible()
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

        // Verify title
        const title = page.getByTestId('tool-title')
        await expect(title).toContainText(tool.name.split(' ')[0]) // First word of name

        // Verify category
        const category = page.getByTestId('tool-category')
        await expect(category).toHaveText(tool.category)

        // Verify features section
        const featuresSection = page.getByTestId('tool-features-section')
        await expect(featuresSection).toBeVisible()

        // Verify demo section
        const demoSection = page.getByTestId('tool-demo-section')
        await expect(demoSection).toBeVisible()

        // Verify CTA section
        const ctaSection = page.getByTestId('tool-cta-section')
        await expect(ctaSection).toBeVisible()
      })
    }
  })

  // Test category color schemes
  test.describe('Category Color Schemes', () => {
    test('calculator pages have blue color scheme', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      const demo = page.getByTestId('tool-demo-memory-calculator-icon')
      await expect(demo).toHaveClass(/bg-blue-100/)
    })

    test('advisor pages have emerald color scheme', async ({ page }) => {
      await page.goto('/tools/parallelism-advisor')
      const demo = page.getByTestId('tool-demo-parallelism-advisor-icon')
      await expect(demo).toHaveClass(/bg-emerald-100/)
    })

    test('registry pages have violet color scheme', async ({ page }) => {
      await page.goto('/tools/accelerator-registry')
      const demo = page.getByTestId('tool-demo-accelerator-registry-icon')
      await expect(demo).toHaveClass(/bg-violet-100/)
    })

    test('framework pages have amber color scheme', async ({ page }) => {
      await page.goto('/tools/evaluation')
      const demo = page.getByTestId('tool-demo-evaluation-icon')
      await expect(demo).toHaveClass(/bg-amber-100/)
    })
  })

  // Test navigation between tools
  test.describe('Navigation', () => {
    test('breadcrumb links to tools hub', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      const breadcrumbLink = page.getByTestId('tool-breadcrumb').locator('a')
      await expect(breadcrumbLink).toHaveAttribute('href', '/tools')
    })

    test('related tool links work', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      const relatedLink = page.getByTestId('related-tool-tco-calculator')
      await expect(relatedLink).toHaveAttribute('href', '/tools/tco-calculator')
    })

    test('browse all tools button navigates to hub', async ({ page }) => {
      await page.goto('/tools/memory-calculator')
      const browseButton = page.getByTestId('tool-browse-button')
      await browseButton.click()
      await expect(page).toHaveURL('/tools')
    })
  })
})
