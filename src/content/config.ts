import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const studyGuidesCollection = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/study-guides' }),
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        categories: z.array(z.string()),
        title: z.string(),
        cards: z.array(z.array(z.string()))

    }),
});

export const collections = { studyGuidesCollection }