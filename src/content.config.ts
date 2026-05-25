import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Dominique Bernaert"),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    lang: z.enum(["nl", "fr"]).default("nl"),
  }),
});

const realisaties = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/realisaties" }),
  schema: z.object({
    title: z.string(),
    customer: z.string(),
    sector: z.string(),
    platform: z.enum(["Maatwerk", "CreditSoft", "CleanOps", "Nimble"]).default("Maatwerk"),
    year: z.string(),
    summary: z.string(),
    heroImage: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    capabilities: z
      .array(
        z.object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    lang: z.enum(["nl", "fr"]).default("nl"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, realisaties };
