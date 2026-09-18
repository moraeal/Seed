import { ArrowLeft, ArrowRight, Clock, ExternalLink, FileText } from "lucide-react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import { getTaxCommentary, getTaxCommentaryEdition } from "../data/taxCommentaries";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function TaxCommentaryDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const article = getTaxCommentary(slug);

  if (!article) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "세금 논평을 찾을 수 없습니다." : "Tax commentary not found."}</h1><Link to="/monitoring/tax" className="button-primary mt-7">{ko ? "세금감시로 돌아가기" : "Back to Tax Watch"}</Link></div>;

  const edition = getTaxCommentaryEdition(article, ko ? "ko" : "en");
  const renderChart = (sectionIndex: number) => edition.chart.afterSection === sectionIndex && <figure className="my-12 overflow-hidden border border-green-deep/15 bg-white shadow-[0_18px_55px_rgba(23,76,58,.08)]" aria-labelledby="tax-commentary-chart-title">
    <figcaption className="border-b border-green-deep/10 bg-ivory px-5 py-5 sm:px-7"><span className="section-kicker">{ko ? "핵심 도표" : "KEY CHART"}</span><h3 id="tax-commentary-chart-title" className="mt-2 text-xl font-extrabold leading-7 text-navy">{edition.chart.title}</h3><p className="mt-2 text-sm leading-6 text-charcoal/60">{edition.chart.description}</p></figcaption>
    <div className="max-w-full overflow-x-auto" role="region" aria-label={edition.chart.title} tabIndex={0}><table className="w-full min-w-[760px] border-collapse text-left text-sm leading-6"><thead className="bg-green-deep text-white"><tr>{edition.chart.headers.map((header) => <th key={header} scope="col" className="px-4 py-4 font-extrabold first:w-[17%] sm:px-5">{header}</th>)}</tr></thead><tbody>{edition.chart.rows.map((row) => <tr key={row[0]} className="border-b border-green-deep/15 odd:bg-green-pale/35">{row.map((cell, index) => index === 0 ? <th key={cell} scope="row" className="px-4 py-4 align-top font-extrabold text-navy sm:px-5">{cell}</th> : <td key={`${row[0]}-${cell}`} className={`px-4 py-4 align-top sm:px-5 ${index === row.length - 1 ? "font-semibold text-green-deep" : "text-charcoal/75"}`}>{cell}</td>)}</tr>)}</tbody></table></div>
    <p className="border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/50 sm:px-7">{edition.chart.note}</p>
  </figure>;

  return <article className="bg-paper pb-12 sm:pb-16">
    <header className="border-b border-green-deep/15 bg-ivory py-5 sm:py-7"><div className="container-page max-w-5xl"><Link to="/monitoring/tax" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "세금감시" : "Tax Watch"}</Link><div className="pt-4 text-center"><span className="section-kicker">TAX COMMENTARY</span><h1 className="article-detail-title mt-2">{edition.title}</h1><p className="article-detail-subtitle">{edition.subtitle}</p><p className="article-summary">{edition.summary}</p></div><div className="mt-4 flex flex-wrap items-center gap-3 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><span className="font-extrabold text-green-deep">{ko ? "세금 논평" : "Tax commentary"}</span><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14}/>{ko ? `읽는 시간 ${article.readMinutes}분` : `${article.readMinutes} min read`}</span><ShareButton title={edition.title} text={edition.summary} className="ml-auto" /></div></div></header>
    <div className="article-content-frame py-8 sm:py-12">
      <InteractiveFigure src={imageSrc(article.heroSrc)} alt={edition.heroAlt} caption={edition.heroCaption} credit={ko ? "씨앗의 소리 AI 제작 이미지" : "AI-generated editorial image by SEED VOICE"} figureClassName="overflow-hidden border border-green-deep/10 bg-white shadow-[0_22px_65px_rgba(23,76,58,.1)]" imageClassName="aspect-[16/9] w-full object-cover" />
      <aside className="reading-column mt-9 border-l-4 border-gold bg-green-pale px-6 py-6 sm:px-8"><span className="section-kicker">{ko ? "핵심 요약" : "KEY POINTS"}</span><ul className="mt-4 space-y-3">{edition.keyPoints.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold leading-7 text-navy"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold"/><span>{point}</span></li>)}</ul></aside>
      <div className="reading-column mt-10">
        {edition.sections.map((section, index) => <Fragment key={section.title}><section className={index === 0 ? "" : "article-section"}><h2 className="article-section-title">{section.title}</h2>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 30)}`} className="article-copy">{paragraph}</p>)}{section.quote && <blockquote className="my-7 border-l-4 border-gold bg-green-pale px-5 py-5 text-lg font-bold leading-8 text-green-deep sm:px-6 sm:text-xl">{section.quote}</blockquote>}</section>{renderChart(index)}</Fragment>)}
        <Link to={`/monitoring/tax/${article.relatedPolicySlug}`} className="mt-10 flex items-center justify-between gap-4 border-2 border-green-deep bg-white px-5 py-5 text-green-deep transition hover:bg-green-pale sm:px-6"><span><span className="section-kicker">{ko ? "연결된 세금감시 기록" : "RELATED TAX RECORD"}</span><strong className="mt-1 block text-base leading-7 text-navy">{ko ? "지방주거복지세의 정책 내용과 진행 상황 보기" : "View the local housing welfare tax record and status"}</strong></span><ArrowRight className="shrink-0" size={18}/></Link>
        <aside className="mt-10 border-t-2 border-navy pt-6"><span className="section-kicker">{ko ? "자료와 확인 기준" : "SOURCES AND SCOPE"}</span><p className="mt-3 text-sm leading-7 text-charcoal/60">{edition.sourceNote}</p><ul className="mt-5 divide-y divide-green-deep/10 border-y border-green-deep/10">{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="flex items-start gap-3 py-4 text-sm font-semibold leading-6 text-green-deep hover:text-navy"><FileText size={16} className="mt-1 shrink-0"/><span className="flex-1">{source.label[ko ? "ko" : "en"]}</span><ExternalLink size={14} className="mt-1 shrink-0"/></a></li>)}</ul></aside>
        <ContentAccountability postSlug={`tax-commentary-${article.slug}`} publishedDate={article.date}/><CommentSection postSlug={`tax-commentary-${article.slug}`}/>
      </div>
    </div>
  </article>;
}
