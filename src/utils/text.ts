export function countWords(markdown: string): number {
  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/[*_>~]/g, ' ');

  const cjk = text.match(/[\u4e00-\u9fa5]/g)?.length ?? 0;
  const latin = text.match(/[A-Za-z][A-Za-z'-]*/g)?.length ?? 0;
  const numbers = text.match(/\d+(?:\.\d+)?/g)?.length ?? 0;

  return cjk + latin + numbers;
}

export function formatWords(n: number): string {
  return n.toLocaleString('zh-CN');
}

export function readingMinutes(n: number): number {
  return Math.max(1, Math.round(n / 400));
}
