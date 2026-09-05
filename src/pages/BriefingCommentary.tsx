import { ArrowLeft, Download } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";
import { getBriefing } from "../data/briefings";
import { localizeBriefing } from "../data/localizedContent";
import { useLanguage } from "../i18n";

export default function BriefingCommentary() {
  const { slug = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const originalBriefing = getBriefing(slug);
  const briefing = originalBriefing ? localizeBriefing(originalBriefing, language) : undefined;

  if (!briefing?.commentary) {
    return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">{ko ? "논평을 찾을 수 없습니다." : "Commentary not found."}</h1><Link to="/briefings" className="button-primary mt-7">{ko ? "목록으로" : "Briefings"}</Link></div>;
  }

  return <article className="bg-paper">
    <header className="border-b border-green-deep/10 bg-green-deep py-4 text-white sm:py-5">
      <div className="container-page max-w-4xl">
        <Link to={`/briefings/${briefing.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-white/75 hover:text-white"><ArrowLeft size={14} />{ko ? "특별브리핑으로 돌아가기" : "Back to briefing"}</Link>
        <span className="mt-3 block text-[11px] font-extrabold tracking-[0.18em] text-gold-light">SEED SPECIAL COMMENTARY</span>
        <p className="mt-1.5 text-xs font-bold text-white/60">{ko ? "씨드 특별논평" : "SEED Commentary"}</p>
        <h1 className="mt-2 text-[1.3rem] font-extrabold leading-tight sm:text-[1.85rem]">{briefing.commentary.title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/75 sm:text-[15px]">{briefing.commentary.summary}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/55"><span>{briefing.author}</span><time>{briefing.date.replace(/-/g, ".")} {ko ? "기준" : "as of"}</time>{briefing.pdfPath && <a href={`${import.meta.env.BASE_URL}${briefing.pdfPath}`} download className="button-light ml-auto min-h-8 px-3 py-1.5 text-xs"><Download size={15} />{ko ? "PDF 원문 내려받기" : "Download PDF"}</a>}</div>
      </div>
    </header>

    <div className="container-page max-w-3xl py-8 sm:py-11">
      <div className="space-y-4">{briefing.commentary.paragraphs.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 24)}`} className={`text-base leading-8 text-charcoal/80 sm:text-[17px] ${index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-green-deep" : ""}`}>{paragraph}</p>)}</div>
      {briefing.quote && <blockquote className="mt-8 rounded-xl bg-green-pale p-6 font-serif text-lg font-bold leading-8 text-green-deep sm:p-7 sm:text-xl">“{briefing.quote}”</blockquote>}
      <div className="mt-7 flex flex-wrap gap-3"><Link to={`/briefings/${briefing.slug}`} className="button-secondary"><ArrowLeft size={16} />{ko ? "브리핑 본문 보기" : "Read briefing"}</Link>{briefing.pdfPath && <a href={`${import.meta.env.BASE_URL}${briefing.pdfPath}`} download className="button-primary"><Download size={16} />{ko ? "PDF 원문 내려받기" : "Download PDF"}</a>}</div>
      <ContentAccountability postSlug={`${briefing.slug}-commentary`} publishedDate={briefing.date} />
      <CommentSection postSlug={`${briefing.slug}-commentary`} />
    </div>
  </article>;
}
