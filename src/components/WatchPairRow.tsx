import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";

export type WatchSide = { href: string; label: string; title: string; summary: string; image?: string; alt?: string; date?: string; external?: boolean; detailHref?: string; badge?: string };

export default function WatchPairRow({ article, record, ko, emptyRight }: { article?: WatchSide; record?: WatchSide; ko: boolean; emptyRight?: string }) {
  const source = article ?? record!;
  const content = (side: WatchSide, className: string) => {
    const body = <><div className="flex flex-wrap items-center gap-2"><span className="text-[11px] font-extrabold tracking-wide text-green-deep">{side.label}</span>{side.badge && <span className="rounded-sm bg-red-600 px-2 py-1 text-[10px] font-bold text-white">{side.badge}</span>}</div><h3 className="editorial-title mt-2 line-clamp-2 text-[1.3rem] font-bold leading-tight text-navy group-hover:text-green-deep sm:text-[1.55rem]">{side.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-7 text-charcoal/65">{side.summary}</p><div className="mt-4 flex items-center justify-between gap-3 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><span>{side.date?.replace(/-/g, ".")}</span><span className="inline-flex items-center gap-1.5 font-extrabold text-green-deep">{side.external ? (ko ? "원문 보기" : "Open source") : (ko ? "내용 보기" : "Read more")}{side.external ? <ExternalLink size={14}/> : <ArrowRight size={14}/>}</span></div></>;
    return side.external
      ? <a href={side.href} target="_blank" rel="noopener noreferrer" className={className} aria-label={`${side.label}: ${side.title}`}>{body}</a>
      : <Link to={side.href} className={className}>{body}</Link>;
  };

  return <article className="grid border-b border-green-deep/15 last:border-b-0 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,1fr)]">
    <div className="grid min-w-0 gap-5 px-5 py-6 md:grid-cols-[240px_1fr] md:items-center md:px-7">
      <Link to={source.href} className="group relative block overflow-hidden bg-green-deep">
        <SafeImage src={source.image ? (source.image.startsWith("/") ? source.image : `${import.meta.env.BASE_URL}${source.image}`) : "/images/brand/editorial-image-fallback.svg"} alt={source.alt ?? source.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"/>
        <span className="absolute bottom-2 left-2 bg-black/65 px-2 py-1 text-[10px] font-semibold text-white">{source.label}</span>
      </Link>
      {article ? content(article, "group block min-w-0") : <div className="min-w-0"><span className="text-xs font-bold text-charcoal/50">{ko ? "씨앗 논평 준비 중" : "Commentary pending"}</span>{content(record!, "group mt-2 block")}</div>}
    </div>
    <aside className="min-w-0 border-t border-green-deep/10 bg-[#F7F8F2] p-5 lg:border-l lg:border-t-0 lg:p-7">
      {record ? content(record, "group block min-w-0 rounded-md border border-green-deep/15 bg-white p-5 shadow-[0_6px_18px_rgba(31,51,73,0.055)] transition hover:border-green-deep/40 hover:bg-green-pale/40") : <div className="rounded-md border border-green-deep/15 bg-white p-5 text-sm leading-7 text-charcoal/55 shadow-[0_6px_18px_rgba(31,51,73,0.055)]"><span className="mb-2 block text-[11px] font-extrabold tracking-wide text-green-deep">{ko ? "관련 기사" : "RELATED ARTICLE"}</span>{emptyRight ?? (ko ? "연결된 기사가 아직 없습니다." : "No related article has been linked yet.")}</div>}
      {record?.detailHref && <Link to={record.detailHref} className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-green-deep hover:underline">{ko ? "씨앗의 분석 기록 보기" : "View Seed Voice analysis"}<ArrowRight size={13}/></Link>}
    </aside>
  </article>;
}
