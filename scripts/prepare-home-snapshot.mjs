import { readFile, writeFile } from 'node:fs/promises';

const url = (process.env.VITE_SUPABASE_URL || 'https://wajlmbahjyazkftwaeem.supabase.co').replace(/\/$/, '');
const key = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje';
async function read(query) {
  const response = await fetch(`${url}/rest/v1/${query}`, { headers: { apikey: key }, signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`Homepage snapshot: HTTP ${response.status}`);
  const rows = await response.json();
  if (!Array.isArray(rows)) throw new Error('Invalid homepage snapshot');
  return rows;
}
const [selection, history, bills] = await Promise.all([
  read('homepage_featured_content?slot=eq.primary&select=content_path&limit=1'),
  (async () => {
    const history = [];
    for (let offset = 0; ; offset += 1000) {
      const rows = await read(`homepage_featured_history?select=content_path,featured_at&order=featured_at.desc,content_path.asc&limit=1000&offset=${offset}`);
      history.push(...rows);
      if (rows.length < 1000) return history;
    }
  })(),
  readFile('.seed-build/published-bills.json', 'utf8').then(JSON.parse),
]);
const snapshot = { generatedAt: new Date().toISOString(), featuredPath: selection[0]?.content_path?.trim() || null, history, bills: bills.map((bill) => ({ bill_id: bill.bill_id, slug: bill.slug, title: bill.title, editorial_image: bill.editorial_image, review_state: bill.review_state, importance_score: bill.importance_score, proposed_date: bill.proposed_date, published_at: bill.published_at, editorial_updated_at: bill.editorial_updated_at, updated_at: bill.updated_at, official_summary: bill.official_summary, public_summary_ko: bill.public_summary_ko, public_summary_en: bill.public_summary_en, analysis: { title_en: bill.analysis?.title_en, summary_ko: bill.analysis?.summary_ko, summary_en: bill.analysis?.summary_en } })) };
await writeFile('src/data/homeSnapshot.json', JSON.stringify(snapshot));
console.log(`Homepage snapshot prepared: ${history.length} selections, ${bills.length} published bills`);
