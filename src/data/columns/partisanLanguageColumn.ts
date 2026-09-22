import { partisanLanguageArticleEn, partisanLanguageArticleKo } from "../seedLanguagePartisanLanguage";
import type { SeedColumn } from "../columnsLegacy";
import type { SeedLanguageArticle } from "../seedLanguageBase";

const toColumn = (article: SeedLanguageArticle, english = false): SeedColumn => ({
  slug: article.slug,
  issue: 29,
  title: article.title,
  subtitle: article.subtitle,
  date: article.date,
  author: english ? "Small Seed" : "작은씨앗",
  readMinutes: article.readMinutes,
  summary: article.summary,
  displayInlineImage: false,
  heroImage: { ...article.heroImage, sourceUrl: "" },
  inlineImage: { ...(article.inlineImage ?? article.heroImage), sourceUrl: "" },
  additionalImages: article.inlineImage ? [{
    afterSection: article.inlineImageAfterSection ?? 3,
    ...article.inlineImage,
    sourceUrl: "",
    contain: article.inlineImage.src.endsWith(".svg"),
  }] : undefined,
  sections: [
    ...(article.leadParagraphs?.length ? [{ title: "", paragraphs: article.leadParagraphs }] : []),
    ...article.sections,
  ].map((section) => ({ title: section.title, paragraphs: section.paragraphs })),
  sourceNote: english
    ? "This column examines how partisan labels, group identity and engagement-driven platforms can turn language from a tool of explanation into a tool of judgment. Its purpose is not to ban rough speech, but to restore specific questions about evidence, rights, cost, results and responsibility."
    : "이 글은 진영의 꼬리표와 집단 정체성, 참여를 좇는 플랫폼이 언어를 설명의 도구에서 사람을 판결하는 도구로 바꾸는 과정을 살펴본 칼럼입니다. 거친 말을 금지하자는 것이 아니라, 근거와 권리, 비용과 결과, 책임을 구체적으로 묻는 언어를 되찾자는 취지입니다.",
  sources: article.sources,
});

export const partisanLanguageColumn = toColumn(partisanLanguageArticleKo);
export const partisanLanguageColumnEn = toColumn(partisanLanguageArticleEn, true);
