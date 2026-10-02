import { Link } from "react-router-dom";
import type { NewsTrackingCard as TrackingCard } from "../data/newsTracking";
import { useLanguage } from "../i18n";
import SafeImage from "./SafeImage";

export default function NewsTrackingCard({ card }: { card: TrackingCard }) {
  const { language } = useLanguage();
  const ko = language === "ko";
  return (
    <Link to={card.to} className="group flex h-full min-w-0 flex-col overflow-hidden border-t-[3px] border-green-deep bg-white shadow-[0_10px_26px_rgba(20,55,45,.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(20,55,45,.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4">
      <div className="overflow-hidden bg-ivory">
        <SafeImage src={card.imageSrc} alt={card.imageAlt} referrerPolicy="no-referrer" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-charcoal/55">
          <span>{ko ? "최근 변화" : "Latest development"}</span>
          <time dateTime={card.changeDate}>{card.changeDate.replace(/-/g, ".")}</time>
        </div>
        <h3 className="editorial-title mt-2 line-clamp-3 break-keep text-lg font-bold leading-snug text-navy transition group-hover:text-green-mid">{card.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/65">{card.latestChange}</p>
        <span className="mt-auto pt-4 text-sm font-extrabold text-green-deep">{ko ? "진행 상황 보기" : "Follow the story"}</span>
      </div>
    </Link>
  );
}
