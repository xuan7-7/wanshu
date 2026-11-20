const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : RAW_BASE + '/';

/**
 * 把站内绝对路径转成带 base 前缀的路径。
 * 部署到 GitHub Pages 项目页（/wanshu/）时，所有站内链接和图片都必须走这里。
 */
export function url(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return BASE + clean;
}
