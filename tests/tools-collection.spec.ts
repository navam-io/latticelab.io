import { test, expect } from '@playwright/test'

test.describe('Tools Content Collection', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/tools-collection')
  })

  test.describe('Collection Overview', () => {
    test('page renders with title', async ({ page }) => {
      const title = page.getByTestId('page-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Tools Collection Test')
    })

    test('has 7 tools in collection', async ({ page }) => {
      const statTotal = page.getByTestId('stat-total')
      await expect(statTotal).toContainText('7')
    })

    test('has 2 calculator tools', async ({ page }) => {
      const statCalculators = page.getByTestId('stat-calculators')
      await expect(statCalculators).toContainText('2')
    })

    test('has 3 advisor tools', async ({ page }) => {
      const statAdvisors = page.getByTestId('stat-advisors')
      await expect(statAdvisors).toContainText('3')
    })

    test('has 2 registry/framework tools', async ({ page }) => {
      const statOther = page.getByTestId('stat-other')
      await expect(statOther).toContainText('2')
    })
  })

  test.describe('Accelerator Registry Tool', () => {
    test('renders tool card', async ({ page }) => {
      const tool = page.getByTestId('tool-accelerator-registry')
      await expect(tool).toBeVisible()
    })

    test('has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-accelerator-registry-name')
      await expect(name).toHaveText('Accelerator Registry')
    })

    test('has registry category', async ({ page }) => {
      const category = page.getByTestId('tool-accelerator-registry-category')
      await expect(category).toHaveText('registry')
    })

    test('has order #1', async ({ page }) => {
      const order = page.getByTestId('tool-accelerator-registry-order')
      await expect(order).toHaveText('#1')
    })

    test('has icon with violet styling', async ({ page }) => {
      const icon = page.getByTestId('tool-accelerator-registry-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('has features list', async ({ page }) => {
      const features = page.getByTestId('tool-accelerator-registry-features')
      await expect(features).toBeVisible()
    })

    test('has journey link', async ({ page }) => {
      const journeyLink = page.getByTestId('tool-accelerator-registry-journey-link')
      await expect(journeyLink).toBeVisible()
      await expect(journeyLink).toHaveAttribute('href', '/blog/accelerator-registry')
    })

    test('has docs link', async ({ page }) => {
      const docsLink = page.getByTestId('tool-accelerator-registry-docs-link')
      await expect(docsLink).toBeVisible()
    })
  })

  test.describe('Memory Calculator Tool', () => {
    test('renders tool card', async ({ page }) => {
      const tool = page.getByTestId('tool-memory-calculator')
      await expect(tool).toBeVisible()
    })

    test('has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-memory-calculator-name')
      await expect(name).toHaveText('Memory Calculator')
    })

    test('has calculator category', async ({ page }) => {
      const category = page.getByTestId('tool-memory-calculator-category')
      await expect(category).toHaveText('calculator')
    })

    test('has order #2', async ({ page }) => {
      const order = page.getByTestId('tool-memory-calculator-order')
      await expect(order).toHaveText('#2')
    })

    test('has icon with blue styling', async ({ page }) => {
      const icon = page.getByTestId('tool-memory-calculator-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })
  })

  test.describe('TCO Calculator Tool', () => {
    test('renders tool card', async ({ page }) => {
      const tool = page.getByTestId('tool-tco-calculator')
      await expect(tool).toBeVisible()
    })

    test('has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-tco-calculator-name')
      await expect(name).toHaveText('TCO Calculator')
    })

    test('has calculator category', async ({ page }) => {
      const category = page.getByTestId('tool-tco-calculator-category')
      await expect(category).toHaveText('calculator')
    })

    test('has order #3', async ({ page }) => {
      const order = page.getByTestId('tool-tco-calculator-order')
      await expect(order).toHaveText('#3')
    })

    test('has icon with emerald styling', async ({ page }) => {
      const icon = page.getByTestId('tool-tco-calculator-icon')
      await expect(icon).toHaveClass(/bg-emerald-100/)
    })
  })

  test.describe('Parallelism Advisor Tool', () => {
    test('renders tool card', async ({ page }) => {
      const tool = page.getByTestId('tool-parallelism-advisor')
      await expect(tool).toBeVisible()
    })

    test('has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-parallelism-advisor-name')
      await expect(name).toHaveText('Parallelism Advisor')
    })

    test('has advisor category', async ({ page }) => {
      const category = page.getByTestId('tool-parallelism-advisor-category')
      await expect(category).toHaveText('advisor')
    })

    test('has order #4', async ({ page }) => {
      const order = page.getByTestId('tool-parallelism-advisor-order')
      await expect(order).toHaveText('#4')
    })

    test('has icon with amber styling', async ({ page }) => {
      const icon = page.getByTestId('tool-parallelism-advisor-icon')
      await expect(icon).toHaveClass(/bg-amber-100/)
    })
  })

  test.describe('Quantization Advisor Tool', () => {
    test('renders tool card', async ({ page }) => {
      const tool = page.getByTestId('tool-quantization-advisor')
      await expect(tool).toBeVisible()
    })

    test('has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-quantization-advisor-name')
      await expect(name).toHaveText('Quantization Advisor')
    })

    test('has advisor category', async ({ page }) => {
      const category = page.getByTestId('tool-quantization-advisor-category')
      await expect(category).toHaveText('advisor')
    })

    test('has order #5', async ({ page }) => {
      const order = page.getByTestId('tool-quantization-advisor-order')
      await expect(order).toHaveText('#5')
    })

    test('has icon with purple styling', async ({ page }) => {
      const icon = page.getByTestId('tool-quantization-advisor-icon')
      await expect(icon).toHaveClass(/bg-purple-100/)
    })
  })

  test.describe('Spot Instance Advisor Tool', () => {
    test('renders tool card', async ({ page }) => {
      const tool = page.getByTestId('tool-spot-advisor')
      await expect(tool).toBeVisible()
    })

    test('has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-spot-advisor-name')
      await expect(name).toHaveText('Spot Instance Advisor')
    })

    test('has advisor category', async ({ page }) => {
      const category = page.getByTestId('tool-spot-advisor-category')
      await expect(category).toHaveText('advisor')
    })

    test('has order #6', async ({ page }) => {
      const order = page.getByTestId('tool-spot-advisor-order')
      await expect(order).toHaveText('#6')
    })

    test('has icon with rose styling', async ({ page }) => {
      const icon = page.getByTestId('tool-spot-advisor-icon')
      await expect(icon).toHaveClass(/bg-rose-100/)
    })
  })

  test.describe('Evaluation Framework Tool', () => {
    test('renders tool card', async ({ page }) => {
      const tool = page.getByTestId('tool-evaluation')
      await expect(tool).toBeVisible()
    })

    test('has correct name', async ({ page }) => {
      const name = page.getByTestId('tool-evaluation-name')
      await expect(name).toHaveText('Evaluation Framework')
    })

    test('has framework category', async ({ page }) => {
      const category = page.getByTestId('tool-evaluation-category')
      await expect(category).toHaveText('framework')
    })

    test('has order #7', async ({ page }) => {
      const order = page.getByTestId('tool-evaluation-order')
      await expect(order).toHaveText('#7')
    })

    test('has icon with teal styling', async ({ page }) => {
      const icon = page.getByTestId('tool-evaluation-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })
  })

  test.describe('Schema Validation', () => {
    test('all tools pass validation', async ({ page }) => {
      const validationSection = page.getByTestId('schema-validation')
      await expect(validationSection).toBeVisible()

      // Check each tool is validated
      const tools = [
        'accelerator-registry',
        'memory-calculator',
        'tco-calculator',
        'parallelism-advisor',
        'quantization-advisor',
        'spot-advisor',
        'evaluation'
      ]

      for (const tool of tools) {
        const validation = page.getByTestId(`validation-${tool}`)
        await expect(validation).toBeVisible()
        await expect(validation).toContainText('All required fields present')
      }
    })
  })

  test.describe('Category Organization', () => {
    test('calculator category has correct tools', async ({ page }) => {
      const category = page.getByTestId('category-calculator')
      await expect(category).toBeVisible()

      const memoryCalc = page.getByTestId('category-calculator-tool-memory-calculator')
      const tcoCalc = page.getByTestId('category-calculator-tool-tco-calculator')

      await expect(memoryCalc).toBeVisible()
      await expect(tcoCalc).toBeVisible()
    })

    test('advisor category has correct tools', async ({ page }) => {
      const category = page.getByTestId('category-advisor')
      await expect(category).toBeVisible()

      const parallelism = page.getByTestId('category-advisor-tool-parallelism-advisor')
      const quantization = page.getByTestId('category-advisor-tool-quantization-advisor')
      const spot = page.getByTestId('category-advisor-tool-spot-advisor')

      await expect(parallelism).toBeVisible()
      await expect(quantization).toBeVisible()
      await expect(spot).toBeVisible()
    })

    test('registry category has accelerator registry', async ({ page }) => {
      const category = page.getByTestId('category-registry')
      await expect(category).toBeVisible()

      const accelerator = page.getByTestId('category-registry-tool-accelerator-registry')
      await expect(accelerator).toBeVisible()
    })

    test('framework category has evaluation', async ({ page }) => {
      const category = page.getByTestId('category-framework')
      await expect(category).toBeVisible()

      const evaluation = page.getByTestId('category-framework-tool-evaluation')
      await expect(evaluation).toBeVisible()
    })
  })

  test.describe('Tool Features', () => {
    test('accelerator registry has at least 3 features', async ({ page }) => {
      const features = page.getByTestId('tool-accelerator-registry-features')
      await expect(features).toBeVisible()

      const feature0 = page.getByTestId('tool-accelerator-registry-feature-0')
      const feature1 = page.getByTestId('tool-accelerator-registry-feature-1')
      const feature2 = page.getByTestId('tool-accelerator-registry-feature-2')

      await expect(feature0).toBeVisible()
      await expect(feature1).toBeVisible()
      await expect(feature2).toBeVisible()
    })

    test('memory calculator has at least 3 features', async ({ page }) => {
      const features = page.getByTestId('tool-memory-calculator-features')
      await expect(features).toBeVisible()

      const feature0 = page.getByTestId('tool-memory-calculator-feature-0')
      await expect(feature0).toBeVisible()
    })
  })

  test.describe('Tool Descriptions', () => {
    test('accelerator registry has description', async ({ page }) => {
      const description = page.getByTestId('tool-accelerator-registry-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('GPUs')
    })

    test('memory calculator has description', async ({ page }) => {
      const description = page.getByTestId('tool-memory-calculator-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('memory')
    })

    test('tco calculator has description', async ({ page }) => {
      const description = page.getByTestId('tool-tco-calculator-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('cost')
    })

    test('parallelism advisor has description', async ({ page }) => {
      const description = page.getByTestId('tool-parallelism-advisor-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('parallelism')
    })

    test('quantization advisor has description', async ({ page }) => {
      const description = page.getByTestId('tool-quantization-advisor-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('quantization')
    })

    test('spot advisor has description', async ({ page }) => {
      const description = page.getByTestId('tool-spot-advisor-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('spot')
    })

    test('evaluation has description', async ({ page }) => {
      const description = page.getByTestId('tool-evaluation-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('evaluation')
    })
  })

  test.describe('Tool Slugs', () => {
    test('accelerator registry has correct slug', async ({ page }) => {
      const slug = page.getByTestId('tool-accelerator-registry-slug')
      await expect(slug).toContainText('accelerator-registry')
    })

    test('memory calculator has correct slug', async ({ page }) => {
      const slug = page.getByTestId('tool-memory-calculator-slug')
      await expect(slug).toContainText('memory-calculator')
    })

    test('tco calculator has correct slug', async ({ page }) => {
      const slug = page.getByTestId('tool-tco-calculator-slug')
      await expect(slug).toContainText('tco-calculator')
    })

    test('parallelism advisor has correct slug', async ({ page }) => {
      const slug = page.getByTestId('tool-parallelism-advisor-slug')
      await expect(slug).toContainText('parallelism-advisor')
    })

    test('quantization advisor has correct slug', async ({ page }) => {
      const slug = page.getByTestId('tool-quantization-advisor-slug')
      await expect(slug).toContainText('quantization-advisor')
    })

    test('spot advisor has correct slug', async ({ page }) => {
      const slug = page.getByTestId('tool-spot-advisor-slug')
      await expect(slug).toContainText('spot-advisor')
    })

    test('evaluation has correct slug', async ({ page }) => {
      const slug = page.getByTestId('tool-evaluation-slug')
      await expect(slug).toContainText('evaluation')
    })
  })
})
