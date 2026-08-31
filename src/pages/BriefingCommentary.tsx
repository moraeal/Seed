import { ArrowLeft, Download } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import { getBriefing } from "../data/briefings";

export default function BriefingCommentary() {
  const { slug = "" } = useParams();
  const briefing = getBriefing(slug);

  if (!briefing?.commentary) {
    return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">논평을 찾을 수 없습니다.</h1><Link to="/briefings" className="button-primary mt-7">목록으로</Link></div>;
  }

  return <article className="bg-paper">
    <header className="border-b border-green-deep/10 bg-green-deep py-12 text-white sm:py-16">
      <div className="container-page max-w-4xl">
        <Link to={`/briefings/${briefing.slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-white/75 hover:text-white"><ArrowLeft size={16} />특별브리핑으로 돌아가기</Link>
        <span className="mt-9 block text-[11px] font-extrabold tracking-[0.18em] text-gold-light">SEED SPECIAL COMMENTARY</span>
        <p className="mt-3 text-sm font-bold text-white/60">씨드 특별논평</p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">{briefing.commentary.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">{briefing.commentary.summary}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/55"><span>{briefing.author}</span><time>{briefing.date.replace(/-/g, ".")} 기준</time>{briefing.pdfPath && <a href={`${import.meta.env.BASE_URL}${briefing.pdfPath}`} download className="button-light ml-auto min-h-9 px-3 py-2 text-xs"><Download size={15} />PDF 원문 내려받기</a>}</div>
      </div>
    </header>

    <div className="container-page max-w-3xl py-12 sm:py-16">
      <div className="space-y-7">{briefing.commentary.paragraphs.map((paragraph, index) => <p key={paragraph.slice(0, 24)} className={`text-base leading-9 text-charcoal/80 sm:text-lg ${index === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-green-deep" : ""}`}>{paragraph}</p>)}</div>
      <blockquote className="mt-12 rounded-xl bg-green-pale p-7 font-serif text-xl font-bold leading-9 text-green-deep sm:p-10 sm:text-2xl">“{briefing.quote}”</blockquote>
      <div className="mt-10 flex flex-wrap gap-3"><Link to={`/briefings/${briefing.slug}`} className="button-secondary"><ArrowLeft size={16} />브리핑 본문 보기</Link>{briefing.pdfPath && <a href={`${import.meta.env.BASE_URL}${briefing.pdfPath}`} download className="button-primary"><Download size={16} />PDF 원문 내려받기</a>}</div>
      <CommentSection postSlug={`${briefing.slug}-commentary`} />
    </div>
  </article>;
}
