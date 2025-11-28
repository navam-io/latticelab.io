import { defineCollection, z } from 'astro:content';

const features = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
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
