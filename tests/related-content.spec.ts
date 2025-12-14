import { test, expect } from '@playwright/test'

test.describe('RelatedContent Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-utils/related-content')
  })

  test.describe('Structure', () => {
    test('renders section element', async ({ page }) => {
      const section = page.getByTestId('related-default')
      await expect(section).toBeVisible()
    })

    test('renders header when title provided', async ({ page }) => {
      const header = page.getByTestId('related-default-header')
      await expect(header).toBeVisible()
    })

    test('renders grid container', async ({ page }) => {
      const grid = page.getByTestId('related-default-grid')
      await expect(grid).toBeVisible()
    })
  })

  test.describe('Title and Description', () => {
    test('renders title text', async ({ page }) => {
      const title = page.getByTestId('related-default-title')
      await expect(title).toBeVisible()
      await expect(title).toHaveText('Learn More About Sources')
    })

    test('title is h2 element', async ({ page }) => {
      const title = page.getByTestId('related-default-title')
      const tagName = await title.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h2')
    })

    test('renders description', async ({ page }) => {
      const description = page.getByTestId('related-default-description')
      await expect(description).toBeVisible()
      await expect(description).toContainText('Explore guides')
    })
  })

  test.describe('Header Icon', () => {
    test('renders icon when provided', async ({ page }) => {
      const icon = page.getByTestId('related-default-icon')
      await expect(icon).toBeVisible()
    })

    test('icon has correct background for violet', async ({ page }) => {
      const icon = page.getByTestId('related-default-icon')
      await expect(icon).toHaveClass(/bg-violet-100/)
    })

    test('icon has correct background for blue', async ({ page }) => {
      const icon = page.getByTestId('related-lab-icon')
      await expect(icon).toHaveClass(/bg-blue-100/)
    })

    test('icon has correct background for teal', async ({ page }) => {
      const icon = page.getByTestId('related-docs-only-icon')
      await expect(icon).toHaveClass(/bg-teal-100/)
    })
  })

  test.describe('Journey Guides Section', () => {
    test('renders journeys container', async ({ page }) => {
      const journeys = page.getByTestId('related-default-journeys')
      await expect(journeys).toBeVisible()
    })

    test('renders journeys title', async ({ page }) => {
      const title = page.getByTestId('related-default-journeys-title')
      await expect(title).toContainText('Journey Guides')
    })

    test('renders correct number of journey links', async ({ page }) => {
      const journey0 = page.getByTestId('related-default-journey-0')
      const journey1 = page.getByTestId('related-default-journey-1')
      const journey2 = page.getByTestId('related-default-journey-2')

      await expect(journey0).toBeVisible()
      await expect(journey1).toBeVisible()
      await expect(journey2).toBeVisible()
    })

    test('journey link has correct href', async ({ page }) => {
      const journey = page.getByTestId('related-default-journey-0')
      await expect(journey).toHaveAttribute('href', '/blog/journey-add-sources')
    })

    test('journey link has title', async ({ page }) => {
      const title = page.getByTestId('related-default-journey-0-title')
      await expect(title).toHaveText('Adding Sources to Your Workspace')
    })

    test('journey link has description', async ({ page }) => {
      const desc = page.getByTestId('related-default-journey-0-description')
      await expect(desc).toHaveText('Learn how to import PDFs, URLs, and more')
    })
  })

  test.describe('Blog Posts Section', () => {
    test('renders blogs container', async ({ page }) => {
      const blogs = page.getByTestId('related-default-blogs')
      await expect(blogs).toBeVisible()
    })

    test('renders blogs title', async ({ page }) => {
      const title = page.getByTestId('related-default-blogs-title')
      await expect(title).toContainText('Related Posts')
    })

    test('renders correct number of blog links', async ({ page }) => {
      const blog0 = page.getByTestId('related-default-blog-0')
      const blog1 = page.getByTestId('related-default-blog-1')

      await expect(blog0).toBeVisible()
      await expect(blog1).toBeVisible()
    })

    test('blog link has correct href', async ({ page }) => {
      const blog = page.getByTestId('related-default-blog-0')
      await expect(blog).toHaveAttribute('href', '/blog/hybrid-search-explained')
    })

    test('blog link has title', async ({ page }) => {
      const title = page.getByTestId('related-default-blog-0-title')
      await expect(title).toHaveText('Understanding Hybrid Search')
    })
  })

  test.describe('Documentation Section', () => {
    test('renders docs container', async ({ page }) => {
      const docs = page.getByTestId('related-default-docs')
      await expect(docs).toBeVisible()
    })

    test('renders docs title', async ({ page }) => {
      const title = page.getByTestId('related-default-docs-title')
      await expect(title).toContainText('Documentation')
    })

    test('renders correct number of doc links', async ({ page }) => {
      const doc0 = page.getByTestId('related-default-doc-0')
      const doc1 = page.getByTestId('related-default-doc-1')

      await expect(doc0).toBeVisible()
      await expect(doc1).toBeVisible()
    })

    test('doc link has correct href', async ({ page }) => {
      const doc = page.getByTestId('related-default-doc-0')
      await expect(doc).toHaveAttribute('href', '/docs/api/sources')
    })

    test('doc link has title', async ({ page }) => {
      const title = page.getByTestId('related-default-doc-0-title')
      await expect(title).toHaveText('Sources API Reference')
    })
  })

  test.describe('CTA Button', () => {
    test('renders CTA when provided', async ({ page }) => {
      const cta = page.getByTestId('related-default-cta')
      await expect(cta).toBeVisible()
    })

    test('CTA has correct href', async ({ page }) => {
      const cta = page.getByTestId('related-default-cta')
      await expect(cta).toHaveAttribute('href', '/docs/features/sources')
    })

    test('CTA has custom text', async ({ page }) => {
      const cta = page.getByTestId('related-default-cta')
      await expect(cta).toContainText('View Sources documentation')
    })

    test('CTA has default text', async ({ page }) => {
      const cta = page.getByTestId('related-docs-only-cta')
      await expect(cta).toContainText('View all resources')
    })

    test('no CTA when not provided', async ({ page }) => {
      const cta = page.getByTestId('related-lab-cta')
      await expect(cta).not.toBeVisible()
    })
  })

  test.describe('Background', () => {
    test('white background by default', async ({ page }) => {
      const section = page.getByTestId('related-default')
      await expect(section).toHaveClass(/bg-white/)
    })

    test('gray background when specified', async ({ page }) => {
      const section = page.getByTestId('related-lab')
      await expect(section).toHaveClass(/bg-gray-50/)
    })
  })

  test.describe('Single Section Configurations', () => {
    test('journeys only renders correctly', async ({ page }) => {
      const section = page.getByTestId('related-journeys-only')
      await expect(section).toBeVisible()

      const journeys = page.getByTestId('related-journeys-only-journeys')
      await expect(journeys).toBeVisible()

      const blogs = page.getByTestId('related-journeys-only-blogs')
      await expect(blogs).not.toBeVisible()

      const docs = page.getByTestId('related-journeys-only-docs')
      await expect(docs).not.toBeVisible()
    })

    test('docs only renders correctly', async ({ page }) => {
      const section = page.getByTestId('related-docs-only')
      await expect(section).toBeVisible()

      const docs = page.getByTestId('related-docs-only-docs')
      await expect(docs).toBeVisible()

      const journeys = page.getByTestId('related-docs-only-journeys')
      await expect(journeys).not.toBeVisible()
    })

    test('blogs only renders correctly', async ({ page }) => {
      const section = page.getByTestId('related-blogs-only')
      await expect(section).toBeVisible()

      const blogs = page.getByTestId('related-blogs-only-blogs')
      await expect(blogs).toBeVisible()

      const journeys = page.getByTestId('related-blogs-only-journeys')
      await expect(journeys).not.toBeVisible()
    })
  })

  test.describe('Minimal Configuration', () => {
    test('renders without header', async ({ page }) => {
      const section = page.getByTestId('related-minimal')
      await expect(section).toBeVisible()

      const header = page.getByTestId('related-minimal-header')
      await expect(header).not.toBeVisible()
    })

    test('journeys still visible without header', async ({ page }) => {
      const journeys = page.getByTestId('related-minimal-journeys')
      await expect(journeys).toBeVisible()
    })
  })

  test.describe('Grid Columns', () => {
    test('3 columns when specified', async ({ page }) => {
      const grid = page.getByTestId('related-three-col-grid')
      await expect(grid).toHaveClass(/lg:grid-cols-3/)
    })

    test('2 columns when specified', async ({ page }) => {
      const grid = page.getByTestId('related-two-col-grid')
      await expect(grid).toHaveClass(/md:grid-cols-2/)
    })

    test('auto columns based on content', async ({ page }) => {
      // related-default has 3 sections, should auto to 3 columns
      const grid = page.getByTestId('related-default-grid')
      await expect(grid).toHaveClass(/lg:grid-cols-3/)
    })
  })

  test.describe('Responsive Behavior', () => {
    test('visible on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 })
      const section = page.getByTestId('related-default')
      await expect(section).toBeVisible()
    })

    test('visible on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 })
      const section = page.getByTestId('related-default')
      await expect(section).toBeVisible()
    })

    test('visible on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 })
      const section = page.getByTestId('related-default')
      await expect(section).toBeVisible()
    })
  })

  test.describe('Links Without Descriptions', () => {
    test('minimal journey link works', async ({ page }) => {
      const journey = page.getByTestId('related-minimal-journey-0')
      await expect(journey).toBeVisible()

      const title = page.getByTestId('related-minimal-journey-0-title')
      await expect(title).toHaveText('Getting Started')
    })

    test('doc link without description works', async ({ page }) => {
      const doc = page.getByTestId('related-lab-doc-1')
      await expect(doc).toBeVisible()

      const title = page.getByTestId('related-lab-doc-1-title')
      await expect(title).toHaveText('LangGraph Integration')

      // Description should not be visible
      const desc = page.getByTestId('related-lab-doc-1-description')
      await expect(desc).not.toBeVisible()
    })
  })

  test.describe('Accessibility', () => {
    test('title is h2 element', async ({ page }) => {
      const title = page.getByTestId('related-default-title')
      const tagName = await title.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h2')
    })

    test('section titles are h3 elements', async ({ page }) => {
      const journeysTitle = page.getByTestId('related-default-journeys-title')
      const tagName = await journeysTitle.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h3')
    })

    test('link titles are h4 elements', async ({ page }) => {
      const linkTitle = page.getByTestId('related-default-journey-0-title')
      const tagName = await linkTitle.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('h4')
    })

    test('all links are anchor elements', async ({ page }) => {
      const journey = page.getByTestId('related-default-journey-0')
      const tagName = await journey.evaluate(el => el.tagName.toLowerCase())
      expect(tagName).toBe('a')
    })
  })
})
