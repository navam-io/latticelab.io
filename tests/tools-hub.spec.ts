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

    test('has badge with tool count', async ({ page }) => {
      const badge = page.getByTestId('tools-hero-badge')
      await expect(badge).toBeVisible()
      await expect(badge).toContainText('7 Interactive Tools')
    })

    test('has main title', async ({ page }) => {
      const title = page.getByTestId('tools-hero-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('AI Infrastructure Tools')
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

    test('memory calculator has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-card-memory-calculator-name')
      await expect(name).toBeVisible()
      await expect(name).toHaveText('Memory Calculator')
    })

    test('displays TCO calculator card', async ({ page }) => {
      const card = page.getByTestId('tool-card-tco-calculator')
      await expect(card).toBeVisible()
    })

    test('TCO calculator has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-card-tco-calculator-name')
      await expect(name).toBeVisible()
      await expect(name).toHaveText('TCO Calculator')
    })

    test('calculator cards show category badges', async ({ page }) => {
      const memoryCategory = page.getByTestId('tool-card-memory-calculator-category')
      await expect(memoryCategory).toBeVisible()
      await expect(memoryCategory).toHaveText('calculator')
    })

    test('calculator cards have explore links', async ({ page }) => {
      const exploreLink = page.getByTestId('tool-card-memory-calculator-explore')
      await expect(exploreLink).toBeVisible()
      await expect(exploreLink).toHaveAttribute('href', '/tools/memory-calculator')
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

    test('advisor cards show category badges', async ({ page }) => {
      const category = page.getByTestId('tool-card-parallelism-advisor-category')
      await expect(category).toBeVisible()
      await expect(category).toHaveText('advisor')
    })

    test('advisor cards have explore links', async ({ page }) => {
      const exploreLink = page.getByTestId('tool-card-spot-advisor-explore')
      await expect(exploreLink).toBeVisible()
      await expect(exploreLink).toHaveAttribute('href', '/tools/spot-advisor')
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
      await expect(description).toContainText('hardware and provider database')
    })

    test('has registry grid', async ({ page }) => {
      const grid = page.getByTestId('tools-registry-grid')
      await expect(grid).toBeVisible()
    })

    test('displays accelerator registry card', async ({ page }) => {
      const card = page.getByTestId('tool-card-accelerator-registry')
      await expect(card).toBeVisible()
    })

    test('accelerator registry has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-card-accelerator-registry-name')
      await expect(name).toBeVisible()
      await expect(name).toHaveText('Accelerator Registry')
    })

    test('registry card shows category badge', async ({ page }) => {
      const category = page.getByTestId('tool-card-accelerator-registry-category')
      await expect(category).toBeVisible()
      await expect(category).toHaveText('registry')
    })

    test('registry card has explore link', async ({ page }) => {
      const exploreLink = page.getByTestId('tool-card-accelerator-registry-explore')
      await expect(exploreLink).toBeVisible()
      await expect(exploreLink).toHaveAttribute('href', '/tools/accelerator-registry')
    })
  })

  test.describe('Framework Section', () => {
    test('renders framework section', async ({ page }) => {
      const section = page.getByTestId('tools-framework-section')
      await expect(section).toBeVisible()
    })

    test('has section title', async ({ page }) => {
      const title = page.getByTestId('tools-framework-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Framework')
    })

    test('has section description', async ({ page }) => {
      const description = page.getByTestId('tools-framework-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('Structured approaches')
    })

    test('has framework grid', async ({ page }) => {
      const grid = page.getByTestId('tools-framework-grid')
      await expect(grid).toBeVisible()
    })

    test('displays evaluation framework card', async ({ page }) => {
      const card = page.getByTestId('tool-card-evaluation')
      await expect(card).toBeVisible()
    })

    test('evaluation framework has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-card-evaluation-name')
      await expect(name).toBeVisible()
      await expect(name).toContainText('Evaluation')
    })

    test('framework card shows category badge', async ({ page }) => {
      const category = page.getByTestId('tool-card-evaluation-category')
      await expect(category).toBeVisible()
      await expect(category).toHaveText('framework')
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

  test.describe('Tool Cards Display Features', () => {
    test('memory calculator shows features list', async ({ page }) => {
      const features = page.getByTestId('tool-card-memory-calculator-features')
      await expect(features).toBeVisible()
    })

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
      const registrySection = page.getByTestId('tools-registry-section')

      await expect(calcSection).toHaveClass(/bg-white/)
      await expect(advisorSection).toHaveClass(/bg-gray-50/)
      await expect(registrySection).toHaveClass(/bg-white/)
    })
  })

  test.describe('All 7 Tools Present', () => {
    test('all 7 tools are displayed on the page', async ({ page }) => {
      // 2 Calculators
      await expect(page.getByTestId('tool-card-memory-calculator')).toBeVisible()
      await expect(page.getByTestId('tool-card-tco-calculator')).toBeVisible()

      // 3 Advisors
      await expect(page.getByTestId('tool-card-parallelism-advisor')).toBeVisible()
      await expect(page.getByTestId('tool-card-quantization-advisor')).toBeVisible()
      await expect(page.getByTestId('tool-card-spot-advisor')).toBeVisible()

      // 1 Registry
      await expect(page.getByTestId('tool-card-accelerator-registry')).toBeVisible()

      // 1 Framework
      await expect(page.getByTestId('tool-card-evaluation')).toBeVisible()
    })
  })
})
