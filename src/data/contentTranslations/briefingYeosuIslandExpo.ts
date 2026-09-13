import { yeosuIslandExpoArticle } from "../yeosuIslandExpoWatch";
import type { BriefingTranslation } from "./types";

const article = yeosuIslandExpoArticle.en;

export const yeosuIslandExpoBriefingTranslation: BriefingTranslation = {
  category: "SEED CIVIC BRIEFING · PUBLIC-INTEREST WATCH",
  title: "The Yeosu World Island Expo Must Not Repeat the Jamboree",
  subtitle: article.subtitle,
  summary: "An event approved at KRW 24.8 billion has grown to KRW 71.3 billion. SEED tracks accountability for its 3 million visitor target, KRW 12 billion revenue plan and major outsourced operations contract.",
  keyHighlights: article.highlights,
  author: "SEED VOICE",
  images: [
    { alt: article.heroAlt, caption: article.heroCaption, credit: "Image by SEED VOICE" },
    { src: "images/monitoring/yeosu-island-expo-key-figures-en.svg", alt: article.infographicAlt, caption: article.infographicCaption, credit: "Infographic by SEED VOICE" },
    { alt: article.bodyAlt, caption: article.bodyCaption, credit: "Image by SEED VOICE" },
  ],
  content: article.intro.map((paragraph) => paragraph.text),
  sections: article.sections.map((section) => ({
    title: section.heading,
    paragraphs: section.paragraphs.map((paragraph) => paragraph.text),
  })),
  paragraphLinks: article.sections.flatMap((section, sectionIndex) => section.paragraphs.flatMap((paragraph, paragraphIndex) => paragraph.links ? [{ sectionIndex, paragraphIndex, links: paragraph.links }] : [])),
  watchTitle: article.watchHeading,
  watchIntro: article.watchIntro,
  watchPoints: article.watchItems,
  closing: article.closing.slice(0, 2),
  quote: article.closing[2],
  sourceNote: "As of September 13, 2026, SEED rechecked international-event approval records, provincial budget materials, tender and award records, organizer statements and multiple field reports.",
  sourceLabels: [
    "Yonhap — International-event approval for the 2026 Yeosu World Island Expo",
    "2026 Yeosu World Island Expo Organizing Committee — Event overview",
    "Hankook Ilbo — Budget expansion and detailed allocations",
    "Jeollanam-do — 2026 budget explanatory materials",
    "Sankun — Operations tender and award information",
    "KBC — Report on selection of the operations contractor",
    "Yonhap — Saemangeum Jamboree audit results",
    "Yonhap — Concentration of Jamboree contracts and organizer response",
    "Yonhap — Investigation of alleged tour-bus bid collusion",
    "Maeil Business Newspaper — Opening-day outage and merchant losses",
    "Yeosu City and organizing committee — Response on the Gaedo restaurant report",
    "MBC — Review of foreign-language services",
    "Jeonnam Ilbo — Opening-weekend visitor count",
    "Yonhap — Cumulative visitor count for the first three days",
    "Organizing committee press day — Pre-opening business revenue secured",
  ],
};
