import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { columns } from "../data/columns";
import { localizeColumn } from "../data/localizedContent";
import { useLanguage } from "../i18n";

export default function Columns() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const localizedColumns = [...columns]
    .sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue)
    .map((column) => localizeColumn(column, language));

  return <section className="bg-paper pb-20 sm:pb-28">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><span className="section-kicker">OPINION & IDEAS</span><h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">{ko ? "씨앗의 소리" : "Voice of the Seed"}</h1></div>
        <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "시민과 사회, 자유와 책임을 씨드 시민저널의 관점으로 깊이 생각합니다. 사실을 설명하는 브리핑에서 한 걸음 더 나아가 오늘의 사건이 시민사회에 던지는 의미와 방향을 논합니다." : "Voice of the Seed examines citizens and society, freedom and responsibility, and the institutions of civil society. It moves beyond explanation to offer clear arguments for civic life."}</p>
      </div>
    </header>
    <div className="container-page py-12 sm:py-16">
      <div className="border-t-2 border-navy">
        {localizedColumns.map((column) => <Link key={column.slug} to={`/columns/${column.slug}`} className="group grid gap-7 border-b border-green-deep/15 px-5 py-9 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7">
          <div className="overflow-hidden bg-green-deep"><img src={`${import.meta.env.BASE_URL}${column.heroImage.src.replace(/^\//, "")}`} alt={column.heroImage.alt} className="aspect-[4/3] w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-[1.025]" /></div>
          <div><h2 className="editorial-title text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-4xl">{column.title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/55">{column.summary}</p><div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-charcoal/45"><time>{column.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={13}/>{ko ? `${column.readMinutes}분` : `${column.readMinutes} min`}</span><span className="ml-auto flex items-center gap-2 font-bold text-green-deep">{ko ? "글 읽기" : "Read"}<ArrowRight size={15}/></span></div></div>
        </Link>)}
      </div>
    </div>
  </section>;
}
