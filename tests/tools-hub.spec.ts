import { test, expect } from '@playwright/test'

test.describe('Tools Hub Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/tools')
  })

  test.describe('Hero Section', () => {
    test('renders hero section', async ({ page }) => {
      const hero = page.getByTestId('tools-hero')
      await expect(hero).toBeVisible()
    })

    test('has main title', async ({ page }) => {
      const title = page.getByTestId('tools-hero-title')
      await expect(title).toBeVisible()
      await expect(title).toContainText('Eight Tools')
    })

    test('has description', async ({ page }) => {
      const description = page.getByTestId('tools-hero-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('Plan your AI infrastructure')
    })

    test('hero has gradient background', async ({ page }) => {
      const hero = page.getByTestId('tools-hero')
      await expect(hero).toHaveClass(/bg-gradient-to-br/)
    })
  })

  test.describe('Calculators Section', () => {
    test('renders calculators section', async ({ page }) => {
      const section = page.getByTestId('tools-calculators-section')
      await expect(section).toBeVisible()
    })

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('tools-calculators-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Calculators')
    })

    test('has section description', async ({ page }) => {
      const description = page.getByTestId('tools-calculators-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('Estimate costs and resource requirements')
    })

    test('has calculators grid', async ({ page }) => {
      const grid = page.getByTestId('tools-calculators-grid')
      await expect(grid).toBeVisible()
    })

    test('displays memory calculator card', async ({ page }) => {
      const card = page.getByTestId('tool-card-memory-calculator')
      await expect(card).toBeVisible()
    })

    test('memory calculator has correct title', async ({ page }) => {
      const title = page.getByTestId('tool-card-memory-calculator-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Memory Calculator')
    })

    test('displays TCO calculator card', async ({ page }) => {
      const card = page.getByTestId('tool-card-tco-calculator')
      await expect(card).toBeVisible()
    })

    test('TCO calculator has correct title', async ({ page }) => {
      const title = page.getByTestId('tool-card-tco-calculator-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('TCO Calculator')
    })

    test('calculator cards show taglines', async ({ page }) => {
      const tagline = page.getByTestId('tool-card-memory-calculator-tagline')
      await expect(tagline).toBeVisible()
    })

    test('calculator cards have links to tool pages', async ({ page }) => {
      const link = page.getByTestId('tool-card-memory-calculator-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/tools/memory-calculator')
    })
  })

  test.describe('Advisors Section', () => {
    test('renders advisors section', async ({ page }) => {
      const section = page.getByTestId('tools-advisors-section')
      await expect(section).toBeVisible()
    })

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('tools-advisors-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Advisors')
    })

    test('has section description', async ({ page }) => {
      const description = page.getByTestId('tools-advisors-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('optimization recommendations')
    })

    test('has advisors grid', async ({ page }) => {
      const grid = page.getByTestId('tools-advisors-grid')
      await expect(grid).toBeVisible()
    })

    test('displays parallelism advisor card', async ({ page }) => {
      const card = page.getByTestId('tool-card-parallelism-advisor')
      await expect(card).toBeVisible()
    })

    test('displays quantization advisor card', async ({ page }) => {
      const card = page.getByTestId('tool-card-quantization-advisor')
      await expect(card).toBeVisible()
    })

    test('displays spot advisor card', async ({ page }) => {
      const card = page.getByTestId('tool-card-spot-advisor')
      await expect(card).toBeVisible()
    })

    test('advisor cards show taglines', async ({ page }) => {
      const tagline = page.getByTestId('tool-card-parallelism-advisor-tagline')
      await expect(tagline).toBeVisible()
    })

    test('advisor cards have links to tool pages', async ({ page }) => {
      const link = page.getByTestId('tool-card-spot-advisor-link')
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('href', '/tools/spot-advisor')
    })
  })

  test.describe('Registry Section', () => {
    test('renders registry section', async ({ page }) => {
      const section = page.getByTestId('tools-registry-section')
      await expect(section).toBeVisible()
    })

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('tools-registry-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Registry')
    })

    test('has section description', async ({ page }) => {
      const description = page.getByTestId('tools-registry-description')
      await expect(description).toBeVisible()
    })

    test('displays model registry card', async ({ page }) => {
      const card = page.getByTestId('tool-card-model-registry')
      await expect(card).toBeVisible()
    })

    test('model registry has correct title', async ({ page }) => {
      const title = page.getByTestId('tool-card-model-registry-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Model Registry')
    })

    test('displays accelerator registry card', async ({ page }) => {
      const card = page.getByTestId('tool-card-accelerator-registry')
      await expect(card).toBeVisible()
    })

    test('accelerator registry has correct title', async ({ page }) => {
      const title = page.getByTestId('tool-card-accelerator-registry-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Accelerator Registry')
    })

    test('registry cards show taglines', async ({ page }) => {
      const modelTagline = page.getByTestId('tool-card-model-registry-tagline')
      const accelTagline = page.getByTestId('tool-card-accelerator-registry-tagline')
      await expect(modelTagline).toBeVisible()
      await expect(accelTagline).toBeVisible()
    })

    test('registry cards have links to tool pages', async ({ page }) => {
      const modelLink = page.getByTestId('tool-card-model-registry-link')
      const accelLink = page.getByTestId('tool-card-accelerator-registry-link')
      await expect(modelLink).toHaveAttribute('href', '/tools/model-registry')
      await expect(accelLink).toHaveAttribute('href', '/tools/accelerator-registry')
    })
  })

  test.describe('Data Section', () => {
    test('renders data section', async ({ page }) => {
      const section = page.getByTestId('tools-data-section')
      await expect(section).toBeVisible()
    })

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('tools-data-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Data')
    })

    test('has section description', async ({ page }) => {
      const description = page.getByTestId('tools-data-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('current')
    })

    test('displays live data feeds card', async ({ page }) => {
      const card = page.getByTestId('tool-card-live-data-feeds')
      await expect(card).toBeVisible()
    })

    test('live data feeds has correct title', async ({ page }) => {
      const title = page.getByTestId('tool-card-live-data-feeds-title')
      await expect(title).toBeVisible()
      await expect(title).toContainText('Live Data Feeds')
    })

    test('data card shows tagline', async ({ page }) => {
      const tagline = page.getByTestId('tool-card-live-data-feeds-tagline')
      await expect(tagline).toBeVisible()
    })
  })

  test.describe('CTA Section', () => {
    test('renders CTA section', async ({ page }) => {
      const section = page.getByTestId('tools-cta-section')
      await expect(section).toBeVisible()
    })

    test('has CTA title', async ({ page }) => {
      const title = page.getByTestId('tools-cta-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Make Smarter Infrastructure Decisions')
    })

    test('has CTA description', async ({ page }) => {
      const description = page.getByTestId('tools-cta-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('lifetime access')
    })

    test('has CTA button', async ({ page }) => {
      const button = page.getByTestId('tools-cta-button')
      await expect(button).toBeVisible()
      await expect(button).toContainText('Get Lattice for $99')
    })

    test('CTA button links to pricing', async ({ page }) => {
      const button = page.getByTestId('tools-cta-button')
      await expect(button).toHaveAttribute('href', '/#pricing')
    })

    test('CTA has gradient background', async ({ page }) => {
      const section = page.getByTestId('tools-cta-section')
      await expect(section).toHaveClass(/bg-gradient-to-r/)
    })
  })

  test.describe('Tool Cards Display', () => {
    test('tool cards have icons', async ({ page }) => {
      const icon = page.getByTestId('tool-card-memory-calculator-icon')
      await expect(icon).toBeVisible()
    })

    test('tool cards have descriptions', async ({ page }) => {
      const description = page.getByTestId('tool-card-memory-calculator-description')
      await expect(description).toBeVisible()
    })
  })

  test.describe('Layout and Navigation', () => {
    test('page has main container', async ({ page }) => {
      const main = page.getByTestId('tools-hub')
      await expect(main).toBeVisible()
    })

    test('sections have proper background alternation', async ({ page }) => {
      const calcSection = page.getByTestId('tools-calculators-section')
      const advisorSection = page.getByTestId('tools-advisors-section')

      await expect(calcSection).toHaveClass(/bg-gray-50/)
      await expect(advisorSection).toHaveClass(/bg-white/)
    })
  })

  test.describe('All 8 Tools Present', () => {
    test('all 8 tools are displayed on the page', async ({ page }) => {
      // 2 Calculators
      await expect(page.getByTestId('tool-card-memory-calculator')).toBeVisible()
      await expect(page.getByTestId('tool-card-tco-calculator')).toBeVisible()

      // 2 Registries
      await expect(page.getByTestId('tool-card-model-registry')).toBeVisible()
      await expect(page.getByTestId('tool-card-accelerator-registry')).toBeVisible()

      // 3 Advisors
      await expect(page.getByTestId('tool-card-parallelism-advisor')).toBeVisible()
      await expect(page.getByTestId('tool-card-quantization-advisor')).toBeVisible()
      await expect(page.getByTestId('tool-card-spot-advisor')).toBeVisible()

      // 1 Data
      await expect(page.getByTestId('tool-card-live-data-feeds')).toBeVisible()
    })
  })
})
