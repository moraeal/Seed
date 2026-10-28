import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { getEditorialSeries } from "../data/editorialSeries";
import { useLanguage } from "../i18n";

const resolveImageSrc = (src: string) => /^https?:\/\//i.test(src)
  ? src
  : import.meta.env.BASE_URL + src.replace(/^\//, "");

export default function EditorialSeriesPage() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const ko = language === "ko";
  const series = getEditorialSeries(language);
  const selected = slug ? series.find((item) => item.slug === slug) : undefined;

  if (slug && !selected) return (
    <div className="container-page py-20">
      <h1 className="text-2xl font-extrabold text-navy">{ko ? "연재를 찾을 수 없습니다." : "Series not found."}</h1>
      <Link to="/series" className="mt-5 inline-flex items-center gap-2 font-bold text-green-deep"><ArrowLeft size={16}/>{ko ? "기획연재 전체보기" : "Browse series"}</Link>
    </div>
  );

  if (selected) return (
    <div className="bg-paper pb-16">
      <header className="border-b border-green-deep/15 bg-ivory py-8 sm:py-12">
        <div className="container-page">
          <Link to="/series" className="inline-flex items-center gap-2 text-xs font-extrabold text-green-deep hover:underline"><ArrowLeft size={14}/>{ko ? "기획연재 전체보기" : "All series"}</Link>
          <p className="section-kicker mt-6">SPECIAL SERIES</p>
          <h1 className="editorial-title mt-2 break-keep text-3xl font-extrabold leading-tight text-navy sm:text-5xl">{selected.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/70 sm:text-lg">{selected.description}</p>
          <div className="mt-5 flex items-center gap-2 text-xs font-bold text-green-deep"><BookOpen size={16}/>{ko ? "공개된 기사 " + selected.chapters.length + "편" : selected.chapters.length + " published chapters"}</div>
        </div>
      </header>
      <section className="container-page py-8 sm:py-12">
        <h2 className="editorial-title mb-5 text-2xl font-bold text-navy">{ko ? "연재 목차" : "Series chapters"}</h2>
        <ol className="divide-y divide-green-deep/15 border-y border-green-deep/15">
          {selected.chapters.map((chapter) => (
            <li key={chapter.path}>
              <Link to={chapter.path} className="group grid gap-4 py-5 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-center sm:gap-7">
                <div className="min-w-0">
                  <p className="text-xs font-black tracking-[.12em] text-green-mid">{ko ? "제" + chapter.sequence + "편" : "CHAPTER " + chapter.sequence}</p>
                  <h3 className="editorial-title mt-2 break-keep text-lg font-bold leading-snug text-navy transition-colors group-hover:text-green-mid sm:text-2xl">{chapter.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/65">{chapter.summary}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-charcoal/50"><time dateTime={chapter.date}>{chapter.date.replace(/-/g, ".")}</time><span className="inline-flex items-center gap-1"><Clock size={13}/>{chapter.readMinutes}{ko ? "분 읽기" : " min"}</span></div>
                </div>
                <div className="overflow-hidden bg-green-pale">
                  <SafeImage src={resolveImageSrc(chapter.image.src)} alt={chapter.image.alt} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
              </Link>
            </li>
          ))}
        </ol>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 font-bold text-green-deep hover:underline"><ArrowLeft size={16}/>{ko ? "메인으로" : "Back to home"}</Link>
      </section>
    </div>
  );

  return (
    <div className="bg-paper pb-16">
      <header className="border-b border-green-deep/15 bg-ivory py-8 sm:py-12">
        <div className="container-page">
          <p className="section-kicker">SPECIAL SERIES</p>
          <h1 className="editorial-title mt-2 text-3xl font-extrabold text-navy sm:text-5xl">{ko ? "기획연재" : "Editorial Series"}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/70 sm:text-lg">{ko ? "하나의 문제를 여러 편의 기사로 깊이 살펴봅니다. 공개된 회차를 첫 편부터 차례대로 읽을 수 있습니다." : "Explore major questions through connected chapters, from the beginning."}</p>
        </div>
      </header>
      <section className="container-page py-8 sm:py-12">
        <div className="grid gap-5 sm:grid-cols-2 xl:gap-7">
          {series.map((item) => (
            <Link key={item.slug} to={"/series/" + item.slug} className="group flex flex-col overflow-hidden border border-green-deep/15 bg-white transition-colors hover:border-green-deep/35">
              <div className="overflow-hidden bg-green-pale">
                <SafeImage src={resolveImageSrc(item.latest.image.src)} alt={item.latest.image.alt} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="section-kicker">SPECIAL SERIES · {ko ? item.chapters.length + "편 공개" : item.chapters.length + " chapters"}</p>
                <h2 className="editorial-title mt-2 break-keep text-xl font-extrabold text-navy transition-colors group-hover:text-green-mid sm:text-2xl">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-charcoal/65">{item.description}</p>
                <div className="mt-5 border-t border-green-deep/10 pt-3">
                  <p className="text-[11px] font-bold text-green-deep">{ko ? "최근 회차" : "Latest chapter"}</p>
                  <p className="mt-1 line-clamp-1 text-sm font-semibold text-navy">{item.latest.title}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-green-deep">{ko ? "목차부터 읽기" : "Read the series"}<ArrowRight size={16}/></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
