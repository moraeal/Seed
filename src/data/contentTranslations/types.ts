import type { Briefing } from "../briefings";
import type { SeedColumn } from "../columns";
import type { NewsArticle } from "../news";

export type ColumnTranslation = {
  title: string;
  subtitle: string;
  author?: string;
  summary: string;
  heroImage?: Partial<Pick<SeedColumn["heroImage"], "alt" | "caption" | "credit">>;
  referenceVideo?: Partial<Pick<NonNullable<SeedColumn["referenceVideo"]>, "thumbnailAlt" | "title" | "description" | "credit">>;
  inlineImage?: Partial<Pick<SeedColumn["inlineImage"], "alt" | "caption" | "credit">>;
  additionalImages?: Array<{ src?: string; alt: string; caption: string; credit?: string }>;
  sections: SeedColumn["sections"];
  sourceNote: string;
  sourceLabels?: string[];
};

export type NewsTranslation = {
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  keySentence: string;
  video?: NonNullable<NewsArticle["video"]>;
  selectedNews: Omit<NewsArticle["selectedNews"], "url" | "publishedAt">;
  heroImage?: Partial<Pick<NewsArticle["heroImage"], "alt" | "caption" | "credit">>;
  inlineImage?: Partial<Pick<NewsArticle["inlineImage"], "alt" | "caption" | "credit">>;
  sections: NewsArticle["sections"];
  watchPoints: string[];
  seedPerspective: string[];
  sourceLabels?: string[];
};

export type BriefingTranslation = {
  category: string;
  title: string;
  summary: string;
  author?: string;
  images?: Array<{ src?: string; alt: string; caption: string; credit?: string }>;
  content: string[];
  sections?: NonNullable<Briefing["sections"]>;
  verdicts?: NonNullable<Briefing["verdicts"]>;
  watchPoints: string[];
  quote?: string;
  sourceNote?: string;
  sourceLabels?: string[];
  commentary?: NonNullable<Briefing["commentary"]>;
};
