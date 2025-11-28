import { defineCollection, z } from 'astro:content';

const features = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    color: z.enum(['blue', 'purple', 'green', 'orange']).default('blue'),
    order: z.number().default(0),
    highlights: z.array(z.string()).default([]),
    useCases: z.array(z.object({
      persona: z.string(),
      title: z.string(),
      description: z.string(),
    })).default([]),
    screenshot: z.string().optional(),
  }),
});

const journeys = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    jtbd: z.string(), // Jobs to be done statement
    thumbnail: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  features,
  journeys,
};
