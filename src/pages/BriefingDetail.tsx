import { ArrowLeft, Clock, Download } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ArticleContinuation, { getFollowingItem } from "../components/ArticleContinuation";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import DeepReadBanner from "../components/DeepReadBanner";
import InteractiveFigure from "../components/InteractiveFigure";
import ShareButton from "../components/ShareButton";
import { getAllBriefing, getAllBriefingsNewestFirst } from "../data/allBriefings";
import { localizeBriefing } from "../data/localizedContent";
import { useLanguage } from "../i18n";

export default function BriefingDetail() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const originalBriefing = getAllBriefing(slug);
  const briefing = originalBriefing ? localizeBriefing(originalBriefing, language) : undefined;

  if (!briefing) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-extrabold text-navy">{ko ? "브리핑을 찾을 수 없습니다." : "Briefing not found."}</h1>
        <Link to="/briefings" className="button-primary mt-7">{ko ? "목록으로" : "Briefings"}</Link>
      </div>
    );
  }

  const isLongRead = briefing.readMinutes >= 8;
  const nextOriginalBriefing = getFollowingItem(getAllBriefingsNewestFirst(), briefing.slug);
  const nextBriefing = nextOriginalBriefing ? localizeBriefing(nextOriginalBriefing, language) : undefined;

  const renderFigure = (image: NonNullable<typeof briefing.images>[number], prominent = false) => (
    <InteractiveFigure src={image.src} alt={image.alt} caption={image.caption} credit={image.credit} sourceUrl={image.sourceUrl} figureClassName={`${prominent ? "mb-8 shadow-[0_18px_55px_rgba(23,76,58,.08)]" : "mt-8"} overflow-hidden border border-green-deep/10 bg-white`} imageClassName={image.contain ? "block h-auto w-full" : `${prominent ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/9]"} w-full object-cover`} />
  );

  return (
    <article className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-4 sm:py-5">
        <div className="container-page max-w-5xl">
          <Link to="/briefings" className="text-link text-xs"><ArrowLeft size={14} />{ko ? "시민브리핑 목록" : "Civic Briefings"}</Link>
          <div className="mt-3 border-t-2 border-navy pt-3">
            <h1 className="article-detail-title max-w-4xl">{briefing.title}</h1>
            <p className="article-summary">{briefing.summary}</p>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-green-deep/10 pt-2 text-xs text-charcoal/45">
            <span>{briefing.author}</span>
            <time>{briefing.date.replace(/-/g, ".")} {ko ? "기준" : "as of"}</time>
            <span className="flex items-center gap-1"><Clock size={14} />{ko ? `읽는 시간 ${briefing.readMinutes}분` : `${briefing.readMinutes} min read`}</span>
            <div className="flex w-full flex-wrap gap-2 sm:ml-auto sm:w-auto">
              <ShareButton title={briefing.title} text={briefing.summary} />
              {briefing.pdfPath && <a href={`${import.meta.env.BASE_URL}${briefing.pdfPath}`} download className="button-primary min-h-8 px-3 py-1.5 text-xs"><Download size={15} />{ko ? "PDF 원문 내려받기" : "Download PDF"}</a>}
            </div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-4xl py-8 sm:py-12">
        {briefing.images?.[0] && renderFigure(briefing.images[0], true)}

        <div className="reading-column">
          {briefing.content.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 20)}`} className={`${index === 0 ? "mt-0" : ""} article-copy ${isLongRead ? "article-copy-long" : ""}`}>{paragraph}</p>
          ))}
        </div>

        {briefing.images?.[1] && renderFigure(briefing.images[1])}

        {briefing.sections?.map((section, index) => (
          <div key={`${index}-${section.title}`}>
            <section className={`article-section reading-column ${isLongRead ? "article-section-long" : ""}`}>
              <h2 className="article-section-title">{section.title}</h2>
              {section.paragraphs && <div>{section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 24)}`} className={`article-copy ${isLongRead ? "article-copy-long" : ""}`}>{paragraph}</p>)}</div>}
              {section.bullets && <ul className="mt-5 space-y-3">{section.bullets.map((bullet, bulletIndex) => <li key={`${bulletIndex}-${bullet.slice(0, 24)}`} className="flex gap-3 text-[17px] leading-[1.78] text-charcoal/80 sm:text-lg"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" />{bullet}</li>)}</ul>}
            </section>
            {briefing.images?.slice(2).filter((image) => image.afterSection === index).map((image) => (
              <div key={image.src}>{renderFigure(image)}</div>
            ))}
          </div>
        ))}

        {briefing.verdicts && (
          <section className="mt-9">
            <span className="section-kicker">CITIZEN VERDICT</span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">{ko ? "현재까지의 시민 판정" : "Citizen assessment so far"}</h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-green-deep/10">
              <table className="w-full min-w-[680px] border-collapse bg-white text-left text-sm">
                <thead className="bg-green-deep text-white"><tr><th className="px-5 py-4">{ko ? "주장" : "Claim"}</th><th className="px-5 py-4">{ko ? "시민 판정" : "Assessment"}</th><th className="px-5 py-4">{ko ? "이유" : "Basis"}</th></tr></thead>
                <tbody className="divide-y divide-green-deep/10">
                  {briefing.verdicts.map((item) => (
                    <tr key={item.claim}><td className="px-5 py-4 leading-6 text-charcoal/75">{item.claim}</td><td className="whitespace-nowrap px-5 py-4 font-extrabold text-green-deep">{item.status}</td><td className="px-5 py-4 leading-6 text-charcoal/60">{item.basis}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {briefing.images?.slice(2).filter((image) => image.afterSection === undefined).map((image) => <div key={image.src}>{renderFigure(image)}</div>)}

        <aside className="mt-9 rounded-lg border-l-4 border-gold bg-green-pale p-5 sm:p-6">
          <h2 className="text-xl font-extrabold text-green-deep">{ko ? "지속해서 관찰할 지점" : "What to keep watching"}</h2>
          <ul className="mt-4 space-y-2">{briefing.watchPoints.map((point, index) => <li key={`${index}-${point}`} className="flex gap-3 text-sm leading-6 text-charcoal/75"><span className="font-serif text-gold">●</span>{point}</li>)}</ul>
        </aside>

        {briefing.quote && <blockquote className="mt-9 rounded-xl bg-green-deep p-6 text-lg font-bold leading-8 text-white sm:p-7 sm:text-xl">“{briefing.quote}”</blockquote>}
        {briefing.sourceNote && <p className="mt-6 rounded-lg border border-green-deep/10 bg-white p-4 text-sm leading-6 text-charcoal/60">{briefing.sourceNote}</p>}

        {briefing.sources && (
          <section className="mt-9 border-t border-green-deep/10 pt-6">
            <h2 className="text-xl font-extrabold text-navy">{ko ? "자료 출처 및 확인 기준" : "Sources and verification basis"}</h2>
            <ol className="mt-4 space-y-2">{briefing.sources.map((source, index) => <li key={source.url} className="flex gap-3 text-sm leading-6"><span className="font-serif text-gold">{index + 1}.</span><a href={source.url} target="_blank" rel="noreferrer" className="text-charcoal/65 underline decoration-green-deep/20 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ol>
            <p className="mt-4 text-xs leading-6 text-charcoal/45">{ko ? "확인 기준: 각 브리핑의 기준일 현재 공개자료입니다. 이후 판결·법령·공식 발표가 나오면 판단은 업데이트될 수 있습니다." : "Verification basis: public materials available as of each briefing's reference date. Later court decisions, laws or official announcements may require updates."}</p>
          </section>
        )}

        {briefing.commentary && <DeepReadBanner href={`/briefings/${briefing.slug}/commentary`} />}
        <ContentAccountability postSlug={briefing.slug} publishedDate={briefing.date} />
        <CommentSection postSlug={briefing.slug} />
        {nextBriefing && <ArticleContinuation item={{ href: `/briefings/${nextBriefing.slug}`, title: nextBriefing.title, summary: nextBriefing.summary }} listHref="/briefings" listLabel={ko ? "시민브리핑 전체 보기" : "All briefings"} />}
      </div>

    </article>
  );
}
