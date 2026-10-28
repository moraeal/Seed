import { columns, type SeedColumn } from "./columns";
import { localizeColumn } from "./localizedContent";
import type { Language } from "../i18n";

// The public columns registry is the source of truth. A story appears in a
// series only after it has been registered as a published column. Drafts are
// deliberately not enumerated here.
type Localized = { ko: string; en: string };
type SeriesSpec = {
  slug: string;
  title: Localized;
  description: Localized;
  matches: (column: SeedColumn) => boolean;
};

const seriesSpecs: SeriesSpec[] = [
  {
    slug: "civil-society",
    title: { ko: "누가 시민사회를 대표하는가", en: "Who Represents Civil Society?" },
    description: {
      ko: "시민참여기본법에서 AI 시대 시민운동의 미래까지. 시민사회가 국가와 정치권력을 감시할 자유를 묻습니다.",
      en: "From civic participation legislation to the future of civic action in the AI era.",
    },
    matches: (item) => item.subtitle.includes("누가 시민사회를 대표하는가") || item.slug.startsWith("who-represents-civil-society-"),
  },
  {
    slug: "china",
    title: { ko: "우리에게 중국은 무엇인가", en: "What Does China Mean to Korea?" },
    description: {
      ko: "중국의 경제적 부상과 기술경쟁 속에서 한국의 산업안보와 기업의 자유를 살펴봅니다.",
      en: "Korea's industrial security and business freedom in an era of Chinese competition.",
    },
    matches: (item) => item.subtitle.includes("우리에게 중국은 무엇인가") || item.title.trim() === "우리에게 중국은 무엇인가",
  },
  {
    slug: "taxpayer-movement",
    title: { ko: "한국형 세금감시운동", en: "A Korean Taxpayer Watch Movement" },
    description: {
      ko: "시민이 세금과 예산을 감시하는 방법. 미국 납세자운동 사례와 한국의 실천을 연결합니다.",
      en: "How citizens can monitor taxation, spending, and public accountability.",
    },
    matches: (item) => /^(?:atr-)?taxpayer-movement-\d+/.test(item.slug) || item.subtitle.includes("세금 내는 시민이 정치를 바꾸다"),
  },
  {
    slug: "citizens-dilemma",
    title: { ko: "시민의 딜레마", en: "Everyday Civic Dilemmas" },
    description: {
      ko: "일상에서 충돌하는 자유와 책임, 배려와 권리의 경계를 구체적인 사례로 살펴봅니다.",
      en: "Everyday situations where freedom, responsibility, rights, and courtesy meet.",
    },
    matches: (item) => /^citizens-dilemma-\d+/.test(item.slug),
  },
];

export type EditorialSeriesChapter = {
  path: string;
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  readMinutes: number;
  image: { src: string; alt: string };
  sequence: number;
};

export type EditorialSeries = {
  slug: string;
  title: string;
  description: string;
  chapters: EditorialSeriesChapter[];
  latest: EditorialSeriesChapter;
};

const markers = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫"];
const chapterOrder = (item: SeedColumn) => {
  const marker = markers.findIndex((symbol) => item.subtitle.includes(symbol));
  if (marker >= 0) return marker + 1;
  const match = item.slug.match(/-(?:0?([1-9])|1([0-2]))(?:-|$)/);
  return match ? Number(match[1] || ("1" + match[2])) : 0;
};

export function getEditorialSeries(language: Language): EditorialSeries[] {
  return seriesSpecs.flatMap((spec) => {
    const matched = columns
      .filter((column) => spec.matches(column))
      .sort((a, b) => {
        const aIndex = chapterOrder(a);
        const bIndex = chapterOrder(b);
        if (aIndex && bIndex && aIndex !== bIndex) return aIndex - bIndex;
        return a.date.localeCompare(b.date) || a.issue - b.issue;
      });
    if (!matched.length) return [];
    const chapters = matched.map((item, index): EditorialSeriesChapter => {
      const translated = localizeColumn(item, language);
      return {
        path: "/columns/" + item.slug,
        title: translated.title,
        subtitle: translated.subtitle,
        summary: translated.summary,
        date: item.date,
        readMinutes: item.readMinutes,
        image: translated.heroImage,
        sequence: index + 1,
      };
    });
    return [{
      slug: spec.slug,
      title: spec.title[language],
      description: spec.description[language],
      chapters,
      latest: [...chapters].sort((a, b) => b.date.localeCompare(a.date))[0],
    }];
  });
}

export function getSeriesForArticle(slug: string, language: Language) {
  const path = "/columns/" + slug;
  for (const series of getEditorialSeries(language)) {
    const index = series.chapters.findIndex((chapter) => chapter.path === path);
    if (index >= 0) return { series, index };
  }
  return null;
}
