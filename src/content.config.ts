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
    bannerColor: z
      .enum([
        "sky",
        "blue",
        "teal",
        "purple",
        "indigo",
        "emerald",
        "rose",
        "amber",
        "violet",
        "cyan",
        "fuchsia",
        "slate",
      ])
      .optional(),
    bannerLogo: z.string().optional(),
    bannerIcon: z
      .enum([
        "document",
        "currency",
        "users",
        "computer",
        "link",
        "layers",
        "chart",
        "sparkle",
      ])
      .optional(),
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
    customerLogo: z.string().optional(),
    brandColor: z
      .enum([
        "sky",
        "blue",
        "teal",
        "purple",
        "indigo",
        "emerald",
        "rose",
        "amber",
        "violet",
        "cyan",
        "fuchsia",
        "slate",
      ])
      .optional(),
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
