import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { getPublicInterestColumnsNewestFirst } from "../data/columns";
import { localizeColumn } from "../data/localizedContent";
import { civicWatchCases } from "../data/publicInterestWatch";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) || src.startsWith("/") ? src : `${import.meta.env.BASE_URL}${src}`;

export default function PublicInterestWatch() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const articles = getPublicInterestColumnsNewestFirst().map((item) => localizeColumn(item, language)).map((item) => ({
    key: `article-${item.slug}`,
    href: `/columns/${item.slug}`,
    label: ko ? "공익감시 기사" : "PUBLIC-INTEREST ARTICLE",
    title: item.title,
    summary: item.summary,
    date: item.date,
    image: item.heroImage.src,
    alt: item.heroImage.alt,
  }));
  const records = civicWatchCases.map((item) => ({
    key: `record-${item.slug}`,
    href: `/monitoring/${item.slug}`,
    label: `${item.organization[language]} · ${item.status[language]}`,
    title: item.title[language],
    summary: item.summary[language],
    date: item.updatedAt,
    image: item.heroImage?.src,
    alt: item.heroImage?.alt[language] ?? item.title[language],
  }));
  const rows = [...articles, ...records]
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

  return <section className="min-h-[70vh] bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page grid gap-3 py-5 sm:py-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div><span className="section-kicker">PUBLIC-INTEREST WATCH</span><h1 className="editorial-title mt-1.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "공익감시" : "Public-Interest Watch"}</h1></div>
        <p className="max-w-2xl text-base leading-7 text-charcoal/65">{ko ? "공공기관·공익기관·시민단체의 예산뿐 아니라 추진하는 사업과 활동, 발표하는 성명서까지 살핍니다. 공개자료와 실제 결과를 대조하고, 공익을 내세운 주장에도 근거와 시민에게 미치는 영향을 묻습니다." : "We examine the budgets, programs and activities of public institutions and civic groups, along with the statements they issue. We compare their claims with public records and real outcomes, and ask how their work affects citizens."}</p>
      </div>
    </header>

    <div className="container-page pt-6 sm:pt-8">
      <div>{rows.map((item) => <Link key={item.key} to={item.href} className="group grid gap-5 border-b border-green-deep/15 px-5 py-6 transition-colors hover:bg-green-pale/65 md:grid-cols-[240px_1fr] md:items-center md:px-7">
        <div className="overflow-hidden bg-green-deep"><SafeImage src={item.image ? imageSrc(item.image) : "/images/brand/editorial-image-fallback.svg"} alt={item.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"/></div>
        <div className="min-w-0"><span className="text-[11px] font-extrabold tracking-wide text-green-deep">{item.label}</span><h3 className="editorial-title mt-2 line-clamp-2 text-[1.3rem] font-bold leading-tight text-navy group-hover:text-green-deep sm:text-[1.55rem]">{item.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-7 text-charcoal/65">{item.summary}</p><div className="mt-4 flex items-center justify-between gap-3 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{item.date.replace(/-/g, ".")}</time><span className="inline-flex items-center gap-1.5 font-extrabold text-green-deep">{ko ? "내용 보기" : "Read more"}<ArrowRight size={14}/></span></div></div>
      </Link>)}</div>
      {!rows.length && <p className="py-14 text-center text-sm text-charcoal/55">{ko ? "아직 공개된 기록이 없습니다." : "No published records yet."}</p>}
      <aside className="mt-12 grid gap-6 border-t-2 border-navy pt-9 lg:grid-cols-[.7fr_1.3fr] lg:items-start"><div className="flex items-center gap-3 text-navy"><ShieldCheck className="text-gold"/><h2 className="text-2xl font-extrabold">{ko ? "공익감시가 지키는 원칙" : "The public-interest watch standard"}</h2></div><p className="text-sm leading-8 text-charcoal/65">{ko ? "진영이나 명성보다 사실과 시민이 치르는 비용을 봅니다. 확인된 사실, 아직 남은 질문, 씨앗의 판단을 구분하고 충분한 반론권과 정정 절차를 보장합니다. 선한 목적은 검증의 면허가 아닙니다." : "We examine facts and the cost borne by citizens, not reputation or partisan convenience. Confirmed facts, open questions and Seed Voice's judgment are kept separate, with a right of reply and correction. Good intentions are not immunity from scrutiny."}</p></aside>
    </div>
  </section>;
}
