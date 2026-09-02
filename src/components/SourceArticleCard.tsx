import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { SelectedNews } from "../data/news";

type SourceArticleCardProps = {
  news: SelectedNews;
  compact?: boolean;
  ko: boolean;
};

const resolveImageSrc = (src?: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
};

export default function SourceArticleCard({ news, compact = false, ko }: SourceArticleCardProps) {
  const thumbnail = resolveImageSrc(news.thumbnailUrl);

  if (compact) {
    return (
      <a
        href={news.url}
        target="_blank"
        rel="noreferrer"
        className="group/source mt-auto grid grid-cols-[1fr_92px] overflow-hidden border border-green-deep/15 bg-ivory transition hover:border-green-deep/30 hover:bg-green-pale/45"
        aria-label={`${news.outlet}: ${news.headline}`}
      >
        <div className="min-w-0 px-4 py-3">
          <div className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-[.11em] text-green-deep"><ExternalLink size={11}/>{news.outlet}</div>
          <p className="mt-1.5 line-clamp-2 text-sm font-bold leading-5 text-navy transition group-hover/source:text-green-mid">{news.headline}</p>
          <p className="mt-1 line-clamp-1 text-xs leading-5 text-charcoal/45">{news.summary[0]}</p>
        </div>
        {thumbnail && <img src={thumbnail} alt={news.thumbnailAlt ?? ""} loading="lazy" referrerPolicy="no-referrer" className="h-full min-h-[92px] w-full object-cover"/>}
      </a>
    );
  }

  return (
    <section className="mb-10 overflow-hidden border border-green-deep/15 bg-white shadow-[0_16px_45px_rgba(23,76,58,.08)]">
      {thumbnail && (
        <a href={news.url} target="_blank" rel="noreferrer" className="group/image block overflow-hidden bg-green-deep">
          <img src={thumbnail} alt={news.thumbnailAlt ?? ""} referrerPolicy="no-referrer" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover/image:scale-[1.015]"/>
          {news.thumbnailCaption && <span className="block border-t border-green-deep/10 bg-white px-5 py-3 text-xs leading-5 text-charcoal/50">{news.thumbnailCaption}</span>}
        </a>
      )}
      <div className="p-6 sm:p-9">
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-charcoal/50"><span className="section-kicker">{ko ? "오늘 씨드가 선정한 뉴스" : "SEED'S SELECTED NEWS"}</span><span>{news.outlet}</span><time>{news.publishedAt}</time></div>
        <h2 className="editorial-title mt-5 text-2xl font-bold leading-snug text-navy sm:text-3xl">{news.headline}</h2>
        <div className="mt-6 border-t border-green-deep/10 pt-5"><span className="text-xs font-extrabold tracking-[.16em] text-green-deep">{ko ? "기사 핵심 요약" : "KEY POINTS"}</span><ul className="mt-4 grid gap-3 text-sm leading-7 text-charcoal/70 sm:text-base">{news.summary.map((item, index) => <li key={`${index}-${item}`} className="flex gap-3"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"/><span>{item}</span></li>)}</ul></div>
        <a href={news.url} target="_blank" rel="noreferrer" className="button-secondary mt-7 inline-flex text-sm">{news.linkLabel}<ArrowUpRight size={15}/></a>
        <p className="mt-3 text-[11px] leading-5 text-charcoal/40">{ko ? "기사 사진과 제목의 저작권은 해당 언론사·제공자에게 있으며, 원문 소개와 출처 확인을 위해 인용했습니다." : "The article image and headline remain the property of the publisher or credited provider and are shown here for source identification and access to the original report."}</p>
      </div>
    </section>
  );
}
