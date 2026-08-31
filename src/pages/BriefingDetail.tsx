import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import { getBriefing } from "../data/briefings";

export default function BriefingDetail() {
  const { slug = "" } = useParams();
  const briefing = getBriefing(slug);
  if (!briefing) return <div className="container-page py-24 text-center"><h1 className="text-3xl font-extrabold text-navy">브리핑을 찾을 수 없습니다.</h1><Link to="/briefings" className="button-primary mt-7">목록으로</Link></div>;

  const share = async () => {
    if (navigator.share) await navigator.share({ title: briefing.title, text: briefing.summary, url: location.href });
    else { await navigator.clipboard.writeText(location.href); alert("주소를 복사했습니다."); }
  };

  return <article className="bg-paper">
    <header className="border-b border-green-deep/10 bg-ivory py-12 sm:py-16"><div className="container-page max-w-4xl"><Link to="/briefings" className="text-link"><ArrowLeft size={16} />시민브리핑 목록</Link><span className="section-kicker mt-9 block">{briefing.category}</span><h1 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-5xl">{briefing.title}</h1><p className="mt-5 text-base leading-8 text-charcoal/65 sm:text-lg">{briefing.summary}</p><div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-charcoal/45"><span>{briefing.author}</span><time>{briefing.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={14} />읽는 시간 {briefing.readMinutes}분</span><button onClick={share} className="ml-auto flex items-center gap-1.5 font-bold text-green-deep"><Share2 size={15} />공유</button></div></div></header>
    <div className="container-page max-w-4xl py-12 sm:py-16">
      <div className="space-y-7">{briefing.content.map((paragraph) => <p key={paragraph.slice(0, 20)} className="text-base leading-9 text-charcoal/80 sm:text-lg">{paragraph}</p>)}</div>
      <aside className="mt-12 rounded-lg border-l-4 border-gold bg-green-pale p-6 sm:p-8"><h2 className="text-xl font-extrabold text-green-deep">지속해서 관찰할 지점</h2><ul className="mt-5 space-y-3">{briefing.watchPoints.map((point) => <li key={point} className="flex gap-3 text-sm leading-7 text-charcoal/75"><span className="font-serif text-gold">●</span>{point}</li>)}</ul></aside>
      <CommentSection postSlug={briefing.slug} />
    </div>
  </article>;
}
