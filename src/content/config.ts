import { defineCollection, z } from "astro:content";

const seoSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  canonical: z.string().url().optional(),
  noindex: z.boolean().default(false)
});

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    icon: z.string().optional(),
    heroImage: z.string().optional(),
    serviceType: z.string().optional(),
    seo: seoSchema.optional()
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    template: z.enum(["default"]).default("default"),
    seo: seoSchema.optional()
  })
});

const gallery = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    alt: z.string(),
    category: z.string().default("general"),
    order: z.number().default(0)
  })
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    location: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    quote: z.string(),
    order: z.number().default(0)
  })
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().default("general"),
    order: z.number().default(0)
  })
});

const areas = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(0),
    serviceAreaType: z.string().default("City"),
    seo: seoSchema.optional()
  })
});

export const collections = {
  services,
  pages,
  gallery,
  testimonials,
  faq,
  areas
};
