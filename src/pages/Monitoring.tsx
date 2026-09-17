import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import MonitoringSubnav from "../components/MonitoringSubnav";
import { newsTrackerCases, type LocalizedText } from "../data/publicInterestWatch";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => src.startsWith("/") ? src : `/${src}`;

export default function Monitoring() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const t = (value: LocalizedText) => value[language];
  const trackers = [...newsTrackerCases].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  return <section className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">CIVIC WATCH</span><h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "시민감시" : "Civic Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "사건의 흐름, 법안, 세금정책, 시민의 이름으로 쓰이는 권한과 돈을 나누어 기록합니다. 확인된 사실과 남은 질문, 씨앗의 판단을 구분합니다." : "We keep separate records for events, legislation, tax policy, and the use of power and money in the public interest—distinguishing facts, open questions and Seed Voice's judgment."}</p>
      </div>
    </header>

    <MonitoringSubnav />

    <div className="container-page py-10 sm:py-12">
      <section aria-labelledby="issue-watch-title">
        <div className="flex flex-col gap-3 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div><span className="section-kicker">ISSUE WATCH</span><h2 id="issue-watch-title" className="mt-2 text-3xl font-extrabold text-navy">{ko ? "이슈감시" : "Issue Watch"}</h2></div>
          <p className="max-w-lg text-sm leading-7 text-charcoal/55">{ko ? "한 번의 보도로 끝내지 않고, 확인된 사실과 새로 달라진 내용을 날짜별로 이어 기록합니다." : "Instead of ending with one report, we keep a dated record of verified facts and every material change."}</p>
        </div>

        <div>{trackers.map((item) => <Link key={item.slug} to={`/monitoring/${item.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-5 py-6 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7">
          <div className="relative overflow-hidden bg-green-deep"><SafeImage src={imageSrc(item.heroImage?.src ?? "/images/brand/editorial-image-fallback.svg")} alt={t(item.heroImage?.alt ?? item.title)} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"/><span className="absolute bottom-2 left-2 rounded-sm bg-black/65 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">{ko ? "이슈감시" : "Issue watch"}</span></div>
          <div><div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-extrabold"><span className="bg-green-deep px-2.5 py-1 text-white">{t(item.status)}</span><span className="text-green-deep">{t(item.eyebrow)}</span></div><h3 className="editorial-title line-clamp-2 text-balance text-[1.3rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-[1.575rem]">{t(item.title)}</h3><p className="mt-2 line-clamp-2 max-w-3xl text-base leading-7 text-charcoal/60">{t(item.summary)}</p><div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{item.updatedAt.replace(/-/g, ".")}</time><span className="ml-auto flex items-center gap-2 font-extrabold text-green-deep">{ko ? "기록 보기" : "View record"}<ArrowRight size={15}/></span></div></div>
        </Link>)}</div>
      </section>
    </div>
  </section>;
}
