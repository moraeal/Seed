import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { getHotIssueClusters } from "../data/hotIssueClusters";
import { useLanguage } from "../i18n";

export default function HotIssueClusterDetail() {
  const { id = "" } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const cluster = getHotIssueClusters(language).find((item) => item.id === id);

  if (!cluster) return <Navigate to="/news" replace />;

  return (
    <article className="bg-paper pb-16 sm:pb-24">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page max-w-6xl py-8 sm:py-11">
          <Link to="/news" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "핫이슈로 돌아가기" : "Back to Hot Issues"}</Link>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="section-kicker">{ko ? `현안 ${cluster.number}` : `ISSUE ${cluster.number}`}</p>
              <h1 className="editorial-title mt-2.5 max-w-4xl break-keep text-[2rem] font-black leading-tight tracking-[-.035em] text-navy sm:text-[2.75rem]">{cluster.title}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/64 sm:text-base sm:leading-8">{cluster.summary}</p>
            </div>
            <time className="text-xs font-semibold text-charcoal/42">{ko ? "최근 갱신 " : "Updated "}{cluster.updatedAt.replace(/-/g, ".")}</time>
          </div>
        </div>
      </header>

      <div className="container-page max-w-6xl py-7 sm:py-10">
        <div className="overflow-hidden bg-ivory">
          <SafeImage src={cluster.imageSrc} alt={cluster.imageAlt} loading="eager" fetchPriority="high" referrerPolicy="no-referrer" className="aspect-[16/7.2] w-full object-cover" />
        </div>
        {cluster.imageCredit && cluster.imageSourceUrl && (
          <p className="mt-2 text-right text-xs text-charcoal/55">
            <a href={cluster.imageSourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{cluster.imageCredit}</a>
          </p>
        )}

        <div className="grid gap-5 border-b border-green-deep/15 bg-white px-5 py-5 sm:grid-cols-[.85fr_1.15fr] sm:px-7 sm:py-6">
          <div>
            <p className="text-[10px] font-black tracking-[.14em] text-green-deep">{ko ? "최근 확인된 변화" : "LATEST CHANGE"}</p>
            <p className="mt-2 text-sm font-bold leading-7 text-navy sm:text-base">{cluster.latestChange}</p>
          </div>
          <div className="border-l-[3px] border-gold pl-4">
            <p className="text-[10px] font-black tracking-[.14em] text-green-deep">{ko ? "씨앗이 묻습니다" : "SEED VOICE ASKS"}</p>
            <p className="mt-2 text-sm font-bold leading-7 text-navy sm:text-base">{cluster.focus.replace(/^지금 볼 질문 · |^Question now · /, "")}</p>
          </div>
        </div>

        <section className="mt-10 sm:mt-14" aria-labelledby="issue-records-title">
          <header className="border-b-[3px] border-navy pb-3">
            <p className="section-kicker">ISSUE RECORDS</p>
            <h2 id="issue-records-title" className="editorial-title mt-1.5 text-2xl font-bold text-navy sm:text-3xl">{ko ? "이 현안을 이해하는 기록" : "The record behind this issue"}</h2>
          </header>

          <div className="grid gap-x-7 gap-y-8 pt-6 md:grid-cols-2">
            {cluster.items.map((item, index) => (
              <Link key={item.key} to={item.to} className="group block">
                <div className="overflow-hidden bg-ivory">
                  <SafeImage src={item.imageSrc} alt={item.imageAlt} referrerPolicy="no-referrer" className="aspect-[16/8.8] w-full object-cover transition duration-500 group-hover:scale-[1.018]" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 text-[10px] font-extrabold text-green-deep">
                  <span>{String(index + 1).padStart(2, "0")} · {item.kindLabel}</span>
                  <time className="font-medium text-charcoal/40">{item.date.replace(/-/g, ".")}</time>
                </div>
                <h3 className="editorial-title mt-1.5 break-keep text-[1.15rem] font-bold leading-snug text-navy transition group-hover:text-green-mid sm:text-[1.28rem]">{item.title}</h3>
                <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-charcoal/58 sm:text-sm">{item.summary}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs font-extrabold text-green-deep">{ko ? "읽기" : "Read"}<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden="true"/></span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
