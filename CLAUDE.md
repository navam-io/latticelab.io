# CLAUDE.md - Project Guidelines for Lattice Lab Website

## Project Overview
Lattice Lab marketing website built with Astro + Vue. Static site generation with interactive Vue components.

## Tech Stack
- **Framework**: Astro 5.x with Vue integration
- **Styling**: Tailwind CSS 4.x
- **Components**: Vue 3 (Composition API with `<script setup>`)
- **Content**: Astro Content Collections (MDX for blog posts)
- **Build**: Static output to `dist/`

## Key Commands
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure
```
src/
├── components/
│   ├── blog/         # Blog-specific Vue components
│   ├── home/         # Homepage section components
│   ├── ui/           # Reusable UI components (Button, Card, Badge)
│   ├── Header.vue    # Site header
│   └── Footer.vue    # Site footer
├── content/
│   └── blog/         # MDX blog posts
├── layouts/
│   └── Layout.astro  # Base layout
├── pages/            # Astro pages
└── styles/
    └── global.css    # Global styles and Tailwind config
```

## Design Guidelines

### Icons
**IMPORTANT: Do not use emojis anywhere on the site.**
- Use inline SVG icons consistently (Heroicons outline style)
- Icon size: `w-4 h-4` for inline, `w-5 h-5` or `w-7 h-7` for feature icons
- Always use `fill="none" stroke="currentColor"` for outline icons
- Example:
```html
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..." />
</svg>
```

### Colors
- Primary: Violet (`violet-600`, `violet-700`)
- Secondary: Indigo/Blue gradients
- Text: `gray-900` (primary), `gray-600` (secondary), `gray-500` (muted)
- Backgrounds: White, `gray-50`, `gray-100`

### Typography
- Font: Inter (sans-serif)
- Headings: `font-bold`, sizes from `text-lg` to `text-6xl`
- Body: `text-gray-600`, `text-sm` to `text-lg`

### Components
- Rounded corners: `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full` (pills)
- Shadows: `shadow-md`, `shadow-lg`, `shadow-xl` on hover
- Transitions: `transition-all duration-300`
- Borders: `border border-gray-200`, `hover:border-violet-300`

## Blog Content
- Posts in `src/content/blog/*.mdx`
- Frontmatter schema in `src/content/config.ts`
- Required fields: `title`, `pubDate`
- Optional: `description`, `tags`, `featuredImage`, `featured`

## Vue Component Conventions
- Use Composition API with `<script setup lang="ts">`
- Props defined with `defineProps<{...}>()`
- Reactive state with `ref()` and `computed()`
- Client-side hydration: `client:load` directive in Astro
