/**
 * 访问量计数器（Cloudflare Worker + KV）
 * 需与 Worker 的 ALLOWED_ORIGINS 白名单保持一致。
 */
export const COUNTER_URL = 'https://wanshu-counter.959741365.workers.dev';
export const COUNTER_TIMEOUT_MS = 3000;
