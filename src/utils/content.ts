import { getCollection } from 'astro:content';
import { countWords } from './text';

export async function getNotesWithWords() {
  const notes = await getCollection('notes');
  return notes
    .map((note) => ({
      ...note,
      words: countWords(note.body ?? ''),
    }))
    .sort((a, b) => a.data.order - b.data.order);
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
