import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['知识梳理', '随记', '碎碎念', '灵感']).default('知识梳理'),
    chapter: z.string().default(''),
    summary: z.string().default(''),
    order: z.number(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    mood: z.string().default('☀️'),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    repo: z.string().url(),
    summary: z.string().default(''),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { notes, diary, skills };
