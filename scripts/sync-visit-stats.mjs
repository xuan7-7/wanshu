// 从 51LA 开放接口汇总访问数据，写入 src/data/visit-stats.json
// 口径：总访问量=每日 PV 之和；总访客数=每日 UV 之和（51LA 不提供终身去重 UV）

import fs from 'node:fs';

const AK = process.env.LA_AK || '';
const MASK_ID = process.env.LA_MASK_ID || '';
const START_DAY = '2026-11-20';

const pad = (n) => String(n).padStart(2, '0');
const now = new Date();
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const monthPrefix = today.slice(0, 7);

if (!AK || !MASK_ID) {
  console.error('缺少 LA_AK / LA_MASK_ID，请配置 GitHub Secrets');
  process.exit(1);
}

const res = await fetch('https://v6-open.51.la/open/trend/day', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    maskId: MASK_ID,
    startDay: START_DAY,
    endDay: today,
    accessKey: AK,
    nonce: 'a7k2',
    timestamp: String(Date.now()),
    sign: AK,
  }),
});

const json = await res.json();
if (!json.success) {
  console.error('51LA 接口返回失败:', json.code, json.message);
  process.exit(1);
}

let total = 0;
let visitors = 0;
let todayPv = 0;
let todayUv = 0;
let monthPv = 0;
let monthUv = 0;

for (const item of json.data || []) {
  const pv = Number(item.pv) || 0;
  const uv = Number(item.uv) || 0;
  total += pv;
  visitors += uv;
  if (item.time === today) {
    todayPv = pv;
    todayUv = uv;
  }
  if (String(item.time || '').startsWith(monthPrefix)) {
    monthPv += pv;
    monthUv += uv;
  }
}

const out = {
  total,
  visitors,
  todayPv,
  todayUv,
  monthPv,
  monthUv,
  updatedAt: new Date().toISOString(),
};

fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/visit-stats.json', JSON.stringify(out, null, 2) + '\n');
console.log('写入完成', out);
