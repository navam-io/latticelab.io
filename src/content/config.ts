import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const tools = defineCollection({
  type: 'content',
  schema: z.object({
    // Basic info
    name: z.string(),
    description: z.string(),
    shortDescription: z.string().optional(), // One-liner for cards

    // Visual
    icon: z.string(), // SVG path or icon identifier
    iconBg: z.string().default('bg-violet-100'), // Tailwind bg class
    iconColor: z.string().default('text-violet-600'), // Tailwind text class

    // Features and capabilities
    features: z.array(z.string()).default([]),

    // Links
    journeyLink: z.string().optional(), // Link to related journey/blog post
    docsLink: z.string().optional(), // Link to documentation

    // Meta
    order: z.number().default(0), // Sort order for display
    category: z.enum(['calculator', 'advisor', 'registry', 'data']).optional(),

    // SEO
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    featuredImage: z.string().optional(),
    author: z.string().default('Lattice Lab'),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
    updatedDate: z.coerce.date().optional(),
    journey: z.string().optional(), // Reference to original journey folder
  }),
});

const docs = defineCollection({
  type: 'content',
  schema: docsSchema(),
});

export const collections = {
  blog,
  docs,
  tools,
};
