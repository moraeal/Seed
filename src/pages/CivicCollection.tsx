import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { useLanguage } from "../i18n";
import { campaignPending, civicSections, getCivicSectionArticles, getTaxWatchMovementArticles, type CivicSectionKey } from "../data/civicSections";
import { civicNoticeDeadline, civicNoticeSlug } from "../data/civicHubArticles";

export default function CivicCollection({ sectionKey }: { sectionKey: CivicSectionKey }) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const section = civicSections.find((item) => item.key === sectionKey)!;
  const articles = getCivicSectionArticles(sectionKey, language);
  const lead = sectionKey === "cases" ? getTaxWatchMovementArticles(language)[0] : undefined;
  const listing = articles.filter((article) => article.path !== lead?.path);
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  return <div className="container-page py-8 sm:py-12">
    <header className="border-b-2 border-navy pb-6">
      <h1 className="editorial-title text-3xl font-black text-navy sm:text-4xl">{section.title[language]}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-charcoal/70">{section.description[language]}</p>
      <Link to="/civic-life" className="mt-4 inline-block text-sm font-bold text-green-deep hover:underline">{ko ? "← 시민생활" : "← Civic Life"}</Link>
    </header>
    {lead && <article className="mt-6 grid gap-5 border-b-2 border-navy pb-8 lg:grid-cols-2 lg:gap-8">
      <Link to={lead.path}><SafeImage src={lead.image.src} alt={lead.image.alt} className="aspect-[16/9] w-full object-cover" /></Link>
      <div className="self-center">
        <p className="text-sm font-bold text-green-deep">{ko ? "세금감시운동 · 제안과 실천" : "TAX WATCH MOVEMENT · IDEAS AND ACTION"}</p>
        <Link to={lead.path}><h2 className="editorial-title mt-3 text-2xl font-black leading-snug text-navy hover:text-green-mid sm:text-3xl">{lead.title}</h2></Link>
        <p className="mt-3 text-base leading-7 text-charcoal/75">{lead.summary}</p>
        <p className="mt-3 text-sm text-charcoal/55">{lead.date.replace(/-/g, ".")}</p>
        <Link to={lead.path} className="mt-4 inline-block text-base font-bold text-green-deep underline underline-offset-4">{ko ? "자세히 읽기" : "Read more"}</Link>
      </div>
    </article>}
    <div className="mt-6 space-y-6">
      {sectionKey === "cases" && <h2 className="text-2xl font-bold text-navy">{ko ? "세금감시 논평과 운동 사례" : "Tax Commentaries and Movement Case Studies"}</h2>}
      {listing.map((article) => <article key={article.path} className="grid gap-4 border-b border-green-deep/15 pb-6 sm:grid-cols-[220px_minmax(0,1fr)]">
        <Link to={article.path}><SafeImage src={article.image.src} alt={article.image.alt} className="aspect-[16/9] w-full object-cover shadow-sm" /></Link>
        <div><p className="text-sm text-charcoal/55">{article.date.replace(/-/g, ".")}{article.path.endsWith(civicNoticeSlug) && <span className="ml-3 font-bold text-green-deep">{today > civicNoticeDeadline ? (ko ? "접수 마감" : "Closed") : (ko ? "10월 21일 마감" : "Deadline: October 21")}</span>}</p><Link to={article.path}><h2 className="mt-2 text-xl font-bold leading-8 text-navy hover:text-green-mid">{article.title}</h2></Link><p className="mt-2 text-base leading-7 text-charcoal/75">{article.summary}</p><Link to={article.path} className="mt-3 inline-block text-sm font-bold text-green-deep underline underline-offset-4">{ko ? "자세히 읽기" : "Read more"}</Link></div>
      </article>)}
      {sectionKey === "campaign" && !articles.length && <article className="bg-ivory p-6 shadow-sm"><p className="text-sm font-bold text-green-deep">{ko ? "준비 중" : "In preparation"}</p><h2 className="mt-2 text-2xl font-bold text-navy">{campaignPending.title[language]}</h2><p className="mt-3 text-base leading-7 text-charcoal/75">{campaignPending.summary[language]}</p><p className="mt-3 text-sm text-charcoal/55">{ko ? "원고를 마무리한 뒤 이곳에서 공개합니다." : "The article will appear here when publication is complete."}</p></article>}
    </div>
  </div>;
}
