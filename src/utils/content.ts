import { getCollection } from 'astro:content';
import { countWords } from './text';

export const CATEGORIES = ['知识梳理', '随记', '碎碎念', '灵感'] as const;

type NoteLike = { id: string; data: { category?: string; order: number } };

export function noteCategory(note: NoteLike): string {
  return note.data.category || '知识梳理';
}

export async function getNotesWithWords() {
  const notes = await getCollection('notes');
  return notes
    .map((note) => ({
      ...note,
      words: countWords(note.body ?? ''),
    }))
    .sort((a, b) => a.data.order - b.data.order);
}

/** 每个分类内部独立编号：知识梳理 1..n、随记 1..n …… */
export function buildCategoryIndex(notes: NoteLike[]): Map<string, number> {
  const sorted = [...notes].sort((a, b) => a.data.order - b.data.order);
  const counters = new Map<string, number>();
  const result = new Map<string, number>();
  for (const note of sorted) {
    const cat = noteCategory(note);
    const next = (counters.get(cat) ?? 0) + 1;
    counters.set(cat, next);
    result.set(note.id, next);
  }
  return result;
}

/** 按四个分类分组（组内按 order 排序） */
export function groupNotesByCategory<T extends NoteLike>(notes: T[]) {
  const sorted = [...notes].sort((a, b) => a.data.order - b.data.order);
  return CATEGORIES.map((category) => ({
    category,
    notes: sorted.filter((note) => noteCategory(note) === category),
  }));
}

export async function getDiaryEntries() {
  const entries = await getCollection('diary');
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(date)
    .replace(/\//g, ' · ');
}
