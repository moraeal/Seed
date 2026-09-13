import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleContinuation from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import { getEditorialContinuation } from "../data/editorialContinuations";
import type { PublicInterestWatchCase } from "../data/publicInterestWatch";
import { yeosuIslandExpoArticle } from "../data/yeosuIslandExpoWatch";
import type { WatchArticleParagraph } from "../data/yeosuIslandExpoWatch";
import type { Language } from "../i18n";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function Paragraph({ paragraph }: { paragraph: WatchArticleParagraph }) {
  return (
    <p className="text-[15px] leading-8 text-charcoal/78 sm:text-[17px] sm:leading-9">
      {paragraph.text}
      {paragraph.links?.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="ml-2 inline-flex items-center gap-1 font-bold text-green-deep underline decoration-green-deep/25 underline-offset-4 hover:text-green-mid">
          {link.label}<ExternalLink size={13}/>
        </a>
      ))}
    </p>
  );
}

export default function YeosuIslandExpoWatchArticle({ item, language }: { item: PublicInterestWatchCase; language: Language }) {
  const ko = language === "ko";
  const article = yeosuIslandExpoArticle[language];
  const continuation = getEditorialContinuation("monitoring", item.slug, language);
  const title = item.title[language];

  return (
    <article className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page max-w-5xl py-5 sm:py-8">
          <Link to="/monitoring" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "공익감시 목록" : "Public-Interest Watch"}</Link>
          <div className="mt-4 border-t-2 border-navy pt-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-kicker">{item.eyebrow[language]}</span>
              <span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{item.status[language]}</span>
            </div>
            <h1 className="article-detail-title mt-4">{title}</h1>
            <p className="mt-4 max-w-4xl text-lg font-extrabold leading-8 text-green-deep sm:text-xl">{article.subtitle}</p>
            <div className="mt-6 grid gap-3 border-y border-green-deep/12 py-5 sm:grid-cols-2">
              {article.highlights.map((line, index) => (
                <p key={line} className="grid grid-cols-[2rem_1fr] gap-2 text-sm font-bold leading-6 text-charcoal/72 sm:text-[15px]">
                  <span className="text-gold">{String(index + 1).padStart(2, "0")}</span><span>{line}</span>
                </p>
              ))}
            </div>
            <div className="mt-3 text-xs text-charcoal/45">{ko ? "작성" : "Published"} {item.updatedAt.replace(/-/g, ".")}</div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-5xl py-8 sm:py-12">
        <figure>
          <img src={asset("images/monitoring/yeosu-island-expo-budget-accountability.webp?v=20260913")} alt={article.heroAlt} className="aspect-[16/9] w-full object-cover shadow-soft" />
          <figcaption className="mt-3 text-xs leading-6 text-charcoal/50">{article.heroCaption} <span className="font-bold">{ko ? "SEED VOICE 편집 일러스트" : "SEED VOICE editorial illustration"}</span></figcaption>
        </figure>

        <div className="mx-auto mt-9 max-w-4xl space-y-6">
          {article.intro.map((paragraph) => <Paragraph key={paragraph.text} paragraph={paragraph}/>) }
        </div>

        {article.sections.map((section, index) => (
          <section key={section.heading} className="mx-auto mt-12 max-w-4xl border-t border-green-deep/15 pt-8 sm:mt-16 sm:pt-10">
            <span className="text-xs font-extrabold tracking-[.18em] text-gold">{String(index + 1).padStart(2, "0")}</span>
            <h2 className="editorial-title mt-2 text-2xl font-bold leading-tight text-navy sm:text-3xl">{section.heading}</h2>
            <div className="mt-6 space-y-6">{section.paragraphs.map((paragraph) => <Paragraph key={paragraph.text} paragraph={paragraph}/>)}</div>

            {index === 0 && (
              <figure className="mt-9">
                <img src={asset(`images/monitoring/yeosu-island-expo-key-figures-${ko ? "ko" : "en"}.svg?v=20260913`)} alt={article.infographicAlt} className="w-full" />
                <figcaption className="mt-3 text-xs leading-6 text-charcoal/50">{article.infographicCaption} <span className="font-bold">{ko ? "SEED VOICE 인포그래픽" : "SEED VOICE infographic"}</span></figcaption>
              </figure>
            )}

            {index === 1 && (
              <figure className="mt-9">
                <img src={asset("images/monitoring/yeosu-island-expo-outsourcing-responsibility.webp?v=20260913")} alt={article.bodyAlt} className="aspect-[16/9] w-full object-cover shadow-soft" />
                <figcaption className="mt-3 text-xs leading-6 text-charcoal/50">{article.bodyCaption} <span className="font-bold">{ko ? "SEED VOICE 편집 일러스트" : "SEED VOICE editorial illustration"}</span></figcaption>
              </figure>
            )}
          </section>
        ))}

        <section className="mx-auto mt-14 max-w-4xl border-t-2 border-navy pt-9 sm:mt-16">
          <span className="section-kicker">PUBLIC-INTEREST WATCH</span>
          <h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{article.watchHeading}</h2>
          <p className="mt-5 text-[15px] font-bold leading-8 text-charcoal/70 sm:text-base">{article.watchIntro}</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {article.watchItems.map((watchItem, index) => (
              <li key={watchItem} className="grid grid-cols-[2.25rem_1fr] gap-3 border border-green-deep/12 bg-white p-4 sm:p-5">
                <span className="font-extrabold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold leading-7 text-charcoal/75">{watchItem}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mx-auto mt-10 max-w-4xl space-y-6 border-t border-green-deep/12 pt-8">
          {article.closing.map((paragraph, index) => (
            <p key={paragraph} className={index === article.closing.length - 1 ? "text-xl font-extrabold leading-9 text-navy sm:text-2xl" : "text-[15px] leading-8 text-charcoal/78 sm:text-[17px] sm:leading-9"}>{paragraph}</p>
          ))}
        </div>

        <div className="mx-auto max-w-4xl">
          <ContentAccountability postSlug={`monitoring-${item.slug}`} publishedDate={item.updatedAt} />
          <CommentSection postSlug={`monitoring-${item.slug}`} />
          {continuation && <ArticleContinuation item={continuation} />}
        </div>
      </div>
    </article>
  );
}
