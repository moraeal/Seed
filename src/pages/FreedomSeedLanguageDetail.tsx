import { ArrowLeft, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import { freedomArticleKo as article, freedomInfographic } from "../data/seedLanguageFreedom";

const quoteLines = [
  "자유 없는 책임은 동원이고,",
  "책임 없는 자유는 불신이며,",
  "공정 없는 자유는 특권이다.",
];

export default function FreedomSeedLanguageDetail() {
  return (
    <article className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
        <div className="container-page max-w-5xl">
          <Link to="/seed-language" className="text-link text-xs"><ArrowLeft size={14}/>씨앗언어 목록</Link>
          <div className="mt-3 border-t-2 border-navy pt-3">
            <div className="flex items-center gap-3"><span className="section-kicker">SEED LANGUAGE</span><span className="rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep">{article.term}</span></div>
            <h1 className="article-detail-title mt-2">{article.title}</h1>
            <p className="article-detail-subtitle">{article.subtitle}</p>
            <p className="article-summary">{article.summary}</p>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">
            <time>{article.date.replace(/-/g, ".")}</time>
            <span className="flex items-center gap-1"><Clock size={14}/>읽는 시간 {article.readMinutes}분</span>
            <div className="ml-auto"><ShareButton title={article.title} text={article.summary} /></div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-4xl py-8 sm:py-11">
        <div className="reading-column">
          <aside className="border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8">
            <span className="section-kicker">핵심 요약</span>
            <ul className="mt-4 space-y-3">{article.keyPoints.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold leading-7 text-navy"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{point}</span></li>)}</ul>
          </aside>

          {article.inlineImage && (
            <InteractiveFigure
              src={article.inlineImage.src}
              alt={article.inlineImage.alt}
              caption={article.inlineImage.caption}
              credit={article.inlineImage.credit}
              figureClassName="my-9 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]"
              imageClassName="aspect-[16/9] w-full object-cover"
            />
          )}

          {article.sections.map((section) => (
            <section key={section.title} className="article-section">
              <h2 className="article-section-title">{section.title}</h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <div key={paragraph.slice(0, 42)}>
                  <p className={`article-copy ${paragraphIndex >= 12 ? "font-bold text-navy" : ""}`}>{paragraph}</p>
                  {paragraphIndex === 6 && (
                    <blockquote className="my-8 border-y border-green-deep/20 bg-ivory px-5 py-6 text-lg font-extrabold leading-9 text-navy sm:px-7 sm:text-xl">
                      {quoteLines.map((line) => <p key={line}>{line}</p>)}
                    </blockquote>
                  )}
                </div>
              ))}
            </section>
          ))}

          <InteractiveFigure
            src={freedomInfographic.src}
            alt={freedomInfographic.alt}
            caption={freedomInfographic.caption}
            credit={freedomInfographic.credit}
            figureClassName="my-9 overflow-hidden border border-green-deep/10 bg-white shadow-[0_18px_55px_rgba(23,76,58,.06)]"
            imageClassName="mx-auto w-full max-w-3xl object-contain bg-white"
          />

          {article.sources && article.sources.length > 0 && (
            <aside className="my-10 border-t border-green-deep/20 pt-6">
              <h2 className="text-base font-bold text-navy">출처와 사실 확인</h2>
              <ul className="mt-4 space-y-3">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm leading-7 text-green-deep underline underline-offset-4">{source.label}</a></li>)}</ul>
            </aside>
          )}
          <ContentAccountability postSlug={`seed-language-${article.slug}`} publishedDate={article.date}/>
          <CommentSection postSlug={`seed-language-${article.slug}`}/>
        </div>
      </div>
    </article>
  );
}