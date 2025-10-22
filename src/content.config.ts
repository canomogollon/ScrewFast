// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const productsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/products" }),
    schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    main: z.object({
      id: z.number(),
      content: z.string(),
      imgCard: image(),
      imgMain: image(),
      imgAlt: z.string(),
    }),
    tabs: z.array(
      z.object({
        id: z.string(),
        dataTab: z.string(),
        title: z.string(),
      })
    ),
    longDescription: z.object({
      title: z.string(),
      subTitle: z.string(),
      btnTitle: z.string(),
      btnURL: z.string(),
    }),
    descriptionList: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsLeft: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ),
    specificationsRight: z.array(
      z.object({
        title: z.string(),
        subTitle: z.string(),
      })
    ).optional(),
    tableData: z.array(
      z.object({
        feature: z.array(z.string()),
        description: z.array(z.array(z.string())),
      })
    ).optional(),
    blueprints: z.object({
      first: image().optional(),
      second: image().optional(),
    }),
    useCases: z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string().optional(),
        icon: z.string().optional(),
      })).optional(),
    }).optional(),
    pricing: z.object({
      title: z.string(),
      subTitle: z.string().optional(),
      plans: z.array(z.object({
        name: z.string(),
        price: z.string(),
        period: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        cta: z.object({
          text: z.string(),
          url: z.string(),
        }),
        popular: z.boolean().optional().default(false),
      })),
    }).optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: ({ image }) => z.object ({
  // Campos obligatorios
    title: z.string(),
    description: z.string(),
    author: z.string(),
    authorImage: image(),
    authorImageAlt: z.string(),
    pubDate: z.date(),
    cardImage: image(),
    cardImageAlt: z.string(),
    readTime: z.number(),
    
    // Campos opcionales para SEO/organización
    tags: z.array(z.string()).optional(),
    excerpt: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
    relatedTopics: z.array(z.string()).optional(),
    
    // Opcional: Para compatibilidad con el sistema actual
    //contents: z.array(z.string()).optional(),
    
    // Campos avanzados opcionales
    seoKeywords: z.array(z.string()).optional(),
    lastModified: z.date().optional(),
  }),
});

const insightsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/insights" }),
  schema: ({ image }) => z.object({
    // Campos obligatorios
    title: z.string(),
    description: z.string(),
    cardImage: image(),
    cardImageAlt: z.string(),
    
    // Campos opcionales para SEO/organización
    excerpt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    relatedTopics: z.array(z.string()).optional(),
    
    // Campos específicos para insights
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
    estimatedReadTime: z.number().optional(),
    
    // Campos avanzados opcionales para SEO
    seoKeywords: z.array(z.string()).optional(),
    lastUpdated: z.date().optional(),
    
    // Campos para autoridad y credibilidad
    sources: z.array(z.object({
      title: z.string(),
      url: z.string(),
      type: z.enum(["article", "research", "whitepaper", "documentation"]).optional(),
    })).optional(),
    
    // Metadatos adicionales
    industry: z.array(z.string()).optional(), // ["IA", "tecnologia", "colombia"]
    audience: z.array(z.string()).optional(), // ["empresarios", "desarrolladores", "ejecutivos"]
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  'products': productsCollection,
  'blog': blogCollection,
  'insights': insightsCollection,
};