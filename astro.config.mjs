// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.latticelab.io',
  base: '/',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url))
      }
    }
  },
  integrations: [
    starlight({
      title: 'Lattice Docs',
      description: 'Documentation for Lattice - the Agentic AI Lab Assistant for confident AI infrastructure decisions.',
      logo: {
        light: './src/assets/lattice-logo-light.png',
        dark: './src/assets/lattice-logo-dark.png',
        replacesTitle: false,
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/navam-io' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/Navam_io' },
      ],
      customCss: [
        './src/styles/starlight-custom.css',
      ],
      editLink: {
        baseUrl: 'https://github.com/navam-io/latticelab.io/edit/main/',
      },
      plugins: [
        starlightOpenAPI([
          {
            base: 'docs/api',
            label: 'Lattice API',
            schema: './src/content/docs/docs/api/openapi.yaml',
          },
        ]),
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'docs/getting-started/introduction' },
            { label: 'Quick Start', slug: 'docs/getting-started/quickstart' },
            { label: 'Core Concepts', slug: 'docs/getting-started/concepts' },
          ],
        },
        {
          label: 'Features',
          collapsed: false,
          items: [
            { label: 'Workspaces', slug: 'docs/features/workspaces' },
            { label: 'Sources', slug: 'docs/features/sources' },
            { label: 'Lab (Chat)', slug: 'docs/features/lab' },
            { label: 'Studio (Artifacts)', slug: 'docs/features/studio' },
            { label: 'Scenarios', slug: 'docs/features/scenarios' },
            { label: 'Stacks', slug: 'docs/features/stacks' },
            { label: 'Blueprints', slug: 'docs/features/blueprints' },
          ],
        },
        {
          label: 'Guides',
          collapsed: true,
          items: [
            { label: 'Evaluate AI Models', slug: 'docs/guides/evaluate-models' },
            { label: 'Compare Providers', slug: 'docs/guides/compare-providers' },
            { label: 'Configure Scenarios', slug: 'docs/guides/configure-scenarios' },
            { label: 'Build Stacks', slug: 'docs/guides/build-stacks' },
          ],
        },
        {
          label: 'API Reference',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'docs/api/overview' },
            ...openAPISidebarGroups,
          ],
        },
        {
          label: 'Resources',
          collapsed: true,
          items: [
            { label: 'GitHub Access', slug: 'docs/resources/github-access' },
            { label: 'Roadmap', slug: 'docs/resources/roadmap' },
            { label: 'Changelog', slug: 'docs/resources/changelog' },
            { label: 'Privacy Policy', slug: 'docs/resources/privacy' },
            { label: 'Terms of Service', slug: 'docs/resources/terms' },
          ],
        },
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/x-icon',
          },
        },
      ],
      components: {
        SiteTitle: './src/components/docs/SiteTitle.astro',
      },
      disable404Route: true,
    }),
    vue(),
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://www.latticelab.io/404',
      customPages: [],
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
        },
      },
    })
  ]
});
