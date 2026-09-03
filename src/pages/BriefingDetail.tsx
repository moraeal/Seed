import { ArrowLeft, Clock, Download, FileText, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import { getAllBriefing } from "../data/allBriefings";
import { localizeBriefing } from "../data/localizedContent";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src: string) => {
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

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

  const share = async () => {
    if (navigator.share) await navigator.share({ title: briefing.title, text: briefing.summary, url: location.href });
    else {
      await navigator.clipboard.writeText(location.href);
      alert(ko ? "주소를 복사했습니다." : "Link copied.");
    }
  };

  const renderFigure = (image: NonNullable<typeof briefing.images>[number], prominent = false) => (
    <figure className={`${prominent ? "mb-12 shadow-[0_18px_55px_rgba(23,76,58,.08)]" : "mt-12"} overflow-hidden border border-green-deep/10 bg-white`}>
      <img
        src={resolveImageSrc(image.src)}
        alt={image.alt}
        className={`${prominent ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/9]"} w-full ${image.contain ? "bg-[#f7f4e9] object-contain" : "object-cover"}`}
      />
      <figcaption className="flex flex-col gap-2 border-t border-green-deep/10 px-5 py-4 text-xs leading-6 text-charcoal/55 sm:flex-row sm:items-start sm:justify-between">
        <span className="max-w-2xl">{image.caption}</span>
        {image.sourceUrl ? (
          <a href={image.sourceUrl} target="_blank" rel="noreferrer" className="shrink-0 underline decoration-green-deep/25 underline-offset-4 hover:text-green-deep">
            {image.credit}
          </a>
        ) : <span className="shrink-0">{image.credit}</span>}
      </figcaption>
    </figure>
  );

  return (
    <article className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-20">
        <div className="container-page max-w-5xl">
          <Link to="/briefings" className="text-link"><ArrowLeft size={16} />{ko ? "시민브리핑 목록" : "Civic Briefings"}</Link>
          <div className="mt-10 border-t-2 border-navy pt-8">
            <h1 className="editorial-title max-w-4xl text-4xl font-bold leading-[1.12] text-navy sm:text-6xl">{briefing.title}</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-charcoal/65 sm:text-xl">{briefing.summary}</p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-green-deep/10 pt-5 text-xs text-charcoal/45">
            <span>{briefing.author}</span>
            <time>{briefing.date.replace(/-/g, ".")} {ko ? "기준" : "as of"}</time>
            <span className="flex items-center gap-1"><Clock size={14} />{ko ? `읽는 시간 ${briefing.readMinutes}분` : `${briefing.readMinutes} min read`}</span>
            <div className="flex w-full flex-wrap gap-2 sm:ml-auto sm:w-auto">
              <button onClick={share} className="button-secondary min-h-9 px-3 py-2 text-xs"><Share2 size={15} />{ko ? "공유" : "Share"}</button>
              {briefing.commentary && <Link to={`/briefings/${briefing.slug}/commentary`} className="button-secondary min-h-9 px-3 py-2 text-xs"><FileText size={15} />{ko ? "논평 보기" : "Read commentary"}</Link>}
              {briefing.pdfPath && <a href={`${import.meta.env.BASE_URL}${briefing.pdfPath}`} download className="button-primary min-h-9 px-3 py-2 text-xs"><Download size={15} />{ko ? "PDF 원문 내려받기" : "Download PDF"}</a>}
            </div>
          </div>
        </div>
      </header>

      <div className="container-page max-w-4xl py-12 sm:py-20">
        {briefing.images?.[0] && renderFigure(briefing.images[0], true)}

        <div className="space-y-7">
          {briefing.content.map((paragraph, index) => (
            <p key={`${index}-${paragraph.slice(0, 20)}`} className="text-base leading-9 text-charcoal/80 sm:text-lg">{paragraph}</p>
          ))}
        </div>

        {briefing.images?.[1] && renderFigure(briefing.images[1])}

        {briefing.sections?.map((section, index) => (
          <div key={`${index}-${section.title}`}>
            <section className="mt-12 border-t border-green-deep/10 pt-9">
              <h2 className="text-2xl font-extrabold leading-snug text-navy sm:text-3xl">{section.title}</h2>
              {section.paragraphs && <div className="mt-5 space-y-5">{section.paragraphs.map((paragraph, paragraphIndex) => <p key={`${paragraphIndex}-${paragraph.slice(0, 24)}`} className="text-base leading-8 text-charcoal/75">{paragraph}</p>)}</div>}
              {section.bullets && <ul className="mt-6 space-y-4">{section.bullets.map((bullet, bulletIndex) => <li key={`${bulletIndex}-${bullet.slice(0, 24)}`} className="flex gap-3 text-base leading-8 text-charcoal/75"><span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" />{bullet}</li>)}</ul>}
            </section>
            {briefing.images?.slice(2).filter((image) => image.afterSection === index).map((image) => (
              <div key={image.src}>{renderFigure(image)}</div>
            ))}
          </div>
        ))}

        {briefing.verdicts && (
          <section className="mt-12">
            <span className="section-kicker">CITIZEN VERDICT</span>
            <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">{ko ? "현재까지의 시민 판정" : "Citizen assessment so far"}</h2>
            <div className="mt-6 overflow-x-auto rounded-lg border border-green-deep/10">
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

        <aside className="mt-12 rounded-lg border-l-4 border-gold bg-green-pale p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-green-deep">{ko ? "지속해서 관찰할 지점" : "What to keep watching"}</h2>
          <ul className="mt-5 space-y-3">{briefing.watchPoints.map((point, index) => <li key={`${index}-${point}`} className="flex gap-3 text-sm leading-7 text-charcoal/75"><span className="font-serif text-gold">●</span>{point}</li>)}</ul>
        </aside>

        {briefing.quote && <blockquote className="mt-12 rounded-xl bg-green-deep p-7 font-serif text-xl font-bold leading-9 text-white sm:p-10 sm:text-2xl">“{briefing.quote}”</blockquote>}
        {briefing.sourceNote && <p className="mt-8 rounded-lg border border-green-deep/10 bg-white p-5 text-sm leading-7 text-charcoal/60">{briefing.sourceNote}</p>}

        {briefing.sources && (
          <section className="mt-12 border-t border-green-deep/10 pt-9">
            <h2 className="text-xl font-extrabold text-navy">{ko ? "자료 출처 및 확인 기준" : "Sources and verification basis"}</h2>
            <ol className="mt-5 space-y-3">{briefing.sources.map((source, index) => <li key={source.url} className="flex gap-3 text-sm leading-6"><span className="font-serif text-gold">{index + 1}.</span><a href={source.url} target="_blank" rel="noreferrer" className="text-charcoal/65 underline decoration-green-deep/20 underline-offset-4 hover:text-green-deep">{source.label}</a></li>)}</ol>
            <p className="mt-6 text-xs leading-6 text-charcoal/45">{ko ? "확인 기준: 각 브리핑의 기준일 현재 공개자료입니다. 이후 판결·법령·공식 발표가 나오면 판단은 업데이트될 수 있습니다." : "Verification basis: public materials available as of each briefing's reference date. Later court decisions, laws or official announcements may require updates."}</p>
          </section>
        )}

        <CommentSection postSlug={briefing.slug} />
      </div>
    </article>
  );
}
