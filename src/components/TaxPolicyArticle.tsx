import { ArticleText, ArticleSources } from "./ArticleCitations";
import { createArticleCitations } from "../lib/articleCitations";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import type { TaxPolicy } from "../data/taxWatch";
import { getTaxCommentaryForPolicy } from "../data/taxCommentaries";
import InteractiveFigure from "./InteractiveFigure";
import ContentAccountability from "./ContentAccountability";
import ShareButton from "./ShareButton";

export default function TaxPolicyArticle({ policy }: { policy: TaxPolicy }) {
  const { language } = useLanguage();
  const lang = language === "ko" ? "ko" : "en";
  const ko = lang === "ko";
  const article = policy.article!;
  const citations = createArticleCitations(policy.sources, {intro: article.intro[lang], sections: article.sections[lang]}, lang);
  const related = getTaxCommentaryForPolicy(policy.slug);
  const relatedLink = related && <Link to={`/monitoring/tax/commentary/${related.slug}`} className="my-8 block border-l-4 border-green-deep bg-green-pale px-5 py-4 font-bold leading-7 text-green-deep underline underline-offset-4">{ko ? "씨앗의 관점 읽기: " : "Read Seed Voice's commentary: "}{related.editions[lang].title}</Link>;
  return <article className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory py-9"><div className="container-page max-w-5xl">
      <Link to="/monitoring/tax" className="text-link text-xs">← {ko ? "세금감시" : "Tax Watch"}</Link>
      <p className="section-kicker mt-4">{policy.status[lang]}</p>
      <h1 className="article-detail-title mt-3">{policy.title[lang]}</h1><p className="article-summary">{policy.summary[lang]}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/50"><time>{policy.checkedAt.replace(/-/g, ".")}</time><span>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span><ShareButton title={policy.title[lang]} text={policy.summary[lang]} className="ml-auto"/></div>
    </div></header>
    <div className="article-content-frame py-9">
      <InteractiveFigure src={policy.heroImage[lang]} alt={policy.heroImage.alt[lang]} caption={policy.heroImage.caption?.[lang]} credit="AI image" imageClassName="aspect-video w-full object-cover"/>
      <div className="reading-column mt-9">
        <aside className="border-l-4 border-gold bg-green-pale px-6 py-6"><p className="section-kicker">{ko ? "먼저 이것만" : "THE KEY CHANGE"}</p><p className="mt-3 font-semibold leading-8 text-navy">{policy.oneSentence[lang]}</p></aside>
        {article.intro[lang].map((text, i) => <p key={i} className="article-copy"><ArticleText text={text} citations={citations}/></p>)}
        {relatedLink}
        {article.sections[lang].map((section, i) => <Fragment key={section.title}>
          <section className="article-section"><h2 className="article-section-title">{section.title}</h2>{section.blocks.map((block, j) => block.type === "paragraph" ? <p key={j} className="article-copy"><ArticleText text={block.text} citations={citations}/></p> : <div key={j} className="my-7 max-w-full overflow-x-auto"><table className="w-full min-w-[640px] border-collapse text-left text-sm leading-6"><thead className="bg-green-deep text-white"><tr>{block.headers.map((heading) => <th key={heading} className="px-4 py-4" scope="col"><ArticleText text={heading} citations={citations}/></th>)}</tr></thead><tbody>{block.rows.map((row, r) => <tr key={r} className="border-b border-green-deep/15 odd:bg-green-pale/35">{row.map((cell, c) => c === 0 ? <th key={c} scope="row" className="px-4 py-4 font-semibold"><ArticleText text={cell} citations={citations}/></th> : <td key={c} className="px-4 py-4"><ArticleText text={cell} citations={citations}/></td>)}</tr>)}</tbody></table></div>)}</section>
          {i === article.chartImage.afterSection && <InteractiveFigure src={article.chartImage.src[lang]} alt={article.chartImage.alt[lang]} caption={article.chartImage.caption[lang]} credit={ko ? "씨앗 계산" : "Seed Voice calculations"} figureClassName="my-12 overflow-hidden border border-green-deep/10 bg-white shadow-sm" imageClassName="w-full h-auto"/>}
          {i === article.bodyImage.afterSection && <InteractiveFigure src={article.bodyImage.src} alt={article.bodyImage.alt[lang]} caption={article.bodyImage.caption[lang]} credit="AI image" figureClassName="my-12 overflow-hidden border border-green-deep/10 bg-white shadow-sm" imageClassName="aspect-video w-full object-cover"/>}
        </Fragment>)}
        <ArticleSources citations={citations} note={policy.processNote?.[lang]}/>
        {relatedLink}
        <ContentAccountability postSlug={`tax-${policy.slug}`} publishedDate={policy.checkedAt}/>
      </div>
    </div>
  </article>;
}
