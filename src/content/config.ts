import { defineCollection, z } from 'astro:content';

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

export const collections = {
  blog,
};
