import { newsArticles } from './news';
import { getAllBriefingsNewestFirst } from './allBriefings';
import { columns } from './columns';
import { seedLanguageArticlesKo } from './seedLanguage';
import { seedLanguageEnvironmentArticlesKo } from './seedLanguageEnvironment';
import { publicInterestWatchCases } from './newsTrackerRegistry';
import { legislativeCommentaries } from './legislativeCommentaries';
import { taxCommentaries } from './taxCommentaries';
import { taxPolicies } from './taxWatch';
import { communityChestResearch } from './communityChestResearch';
import sourceImages from './trackerSourceImages.json';
import type { LegislativeBill } from '../lib/legislativeMonitoring';

export type ArchiveUse = { title: string; path: string; date: string; category: string };
export type ArchiveImage = { src: string; alt: string; uses: ArchiveUse[] };
const text = (value: unknown): string => typeof value === 'string' ? value : value && typeof value === 'object' ? text((value as Record<string, unknown>).ko) : '';
const sources = sourceImages as Record<string, { src: string }>;
const imageUrl = (value: string) => /(?:\.(?:png|jpe?g|webp|gif|svg|avif)(?:[?#].*)?$)/i.test(value) && !/images\/brand\//.test(value) && /^(?:\/?images\/|https:\/\/)/.test(value);

// Rebuilt from the same article objects that render published pages. No drafts,
// discarded variants, member records or private uploads enter this catalog.
export function getArticleImageArchive(bills: LegislativeBill[] = []): ArchiveImage[] {
  const images = new Map<string, ArchiveImage>();
  function add(src: string, alt: string, use: ArchiveUse) {
    if (!imageUrl(src)) return;
    const key = src.replace(/^\//, '').split(/[?#]/)[0];
    const entry = images.get(key) ?? { src, alt: alt || use.title, uses: [] };
    if (!entry.uses.some(item => item.path === use.path)) entry.uses.push(use);
    images.set(key, entry);
  }
  function visit(value: unknown, use: ArchiveUse, inheritedAlt = '') {
    if (typeof value === 'string') {
      if (imageUrl(value)) add(value, inheritedAlt, use);
      // Timeline photos are resolved by source article URL when rendered.
      if (sources[value]) add(sources[value].src, inheritedAlt, use);
      return;
    }
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) { value.forEach(item => visit(item, use, inheritedAlt)); return; }
    const object = value as Record<string, unknown>;
    const alt = text(object.alt) || text(object.alt_ko) || text(object.caption) || inheritedAlt;
    Object.entries(object).forEach(([, item]) => visit(item, use, alt));
  }
  function collection(items: unknown[], prefix: string, category: string) {
    items.forEach(item => {
      const object = item as Record<string, unknown>;
      const use = { title: text(object.title), path: `${prefix}/${object.slug}`, date: text(object.updatedAt) || text(object.date) || text(object.checkedAt), category };
      visit(item, use);
    });
  }
  collection(newsArticles, '/news', '뉴스');
  collection(getAllBriefingsNewestFirst(), '/briefings', '브리핑');
  collection(columns, '/columns', '칼럼');
  collection([...seedLanguageArticlesKo, ...seedLanguageEnvironmentArticlesKo], '/seed-language', '시민언어');
  collection(publicInterestWatchCases, '/monitoring', '시민감시');
  collection(legislativeCommentaries, '/monitoring/legislation/commentary', '입법감시');
  collection(taxCommentaries, '/monitoring/tax/commentary', '세금감시');
  collection(taxPolicies, '/monitoring/tax', '세금감시');
  add('images/briefings/briefing-09-bcorp-market-trust-data.svg', '비콥 기업의 사회적 성과와 시장 신뢰', { title: '비콥: 기업의 사회적 성과와 시장 신뢰', path: '/briefings/social-economy-fair-competition/b-corp', date: '2026-09-06', category: '심층연구' });
  add('images/monitoring/community-chest-deep-hero.png?v=20260910-2', communityChestResearch.ko.heroAlt, { title: communityChestResearch.ko.title, path: '/research/community-chest-of-korea', date: communityChestResearch.ko.date, category: '심층연구' });
  bills.filter(bill => bill.review_state === 'published' && bill.editorial_image?.status === 'ready' && bill.editorial_image.verified_at).forEach(bill => {
    if (bill.editorial_image?.src) add(bill.editorial_image.src, bill.editorial_image.alt_ko || bill.title, { title: bill.title, path: `/monitoring/legislation/${bill.slug}`, date: bill.editorial_updated_at || bill.published_at || '', category: '입법감시' });
  });
  return [...images.values()].map(image => ({ ...image, uses: image.uses.sort((a, b) => b.date.localeCompare(a.date)) })).sort((a, b) => b.uses[0].date.localeCompare(a.uses[0].date));
}
