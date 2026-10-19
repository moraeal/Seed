import { Link } from "react-router-dom";
import CampaignSignature from "../components/CampaignSignature";
import SafeImage from "../components/SafeImage";
import { useLanguage } from "../i18n";
import { civicSections, getCivicSectionArticles, getTaxWatchMovementArticles, type CivicSectionKey } from "../data/civicSections";
import { civicNoticeDeadline, civicNoticeSlug } from "../data/civicHubArticles";

export default function CivicCollection({ sectionKey }: { sectionKey: CivicSectionKey }) {
  const { language } = useLanguage();
  const ko = language === "ko";
  const section = civicSections.find((item) => item.key === sectionKey)!;
  const articles = getCivicSectionArticles(sectionKey, language);
  const lead = sectionKey === "cases" ? getTaxWatchMovementArticles(language)[0] : undefined;
  const listing = articles.filter((article) => article.path !== lead?.path);
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  return <div className={sectionKey === "campaign" ? "container-page pb-8 pt-3 sm:pb-12 sm:pt-4" : "container-page py-8 sm:py-12"}>
    {sectionKey !== "campaign" && <header className="border-b-2 border-navy pb-6">
      <h1 className="editorial-title text-3xl font-black text-navy sm:text-4xl">{section.title[language]}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-charcoal/70">{section.description[language]}</p>
      <Link to="/civic-life" className="mt-4 inline-block text-sm font-bold text-green-deep hover:underline">{ko ? "← 시민생활" : "← Civic Life"}</Link>
    </header>}
    {sectionKey === "cases" && <aside aria-label={ko ? "No More Tax 증세반대운동 참여 안내" : "No More Tax campaign participation"} className="mt-6 flex flex-col gap-4 border border-green-deep/20 bg-ivory p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="max-w-2xl">
        <p className="text-xs font-black tracking-wider text-green-deep">NO MORE TAX · SEED VOICE</p>
        <h2 className="mt-2 text-xl font-black text-navy">{ko ? "지금 진행 중인 증세반대 시민 서명운동" : "Join the ongoing campaign against tax increases"}</h2>
        <p className="mt-2 text-sm leading-7 text-charcoal/75">{ko ? "씨앗의 소리는 No More Tax 운동을 통해 세금 인상의 근거를 검증하고 국가재정의 지출과 책임을 감시합니다. 공식 운동 소개와 서명 참여는 시민캠페인 페이지에서 확인할 수 있습니다." : "SEED VOICE's No More Tax campaign examines the case for tax increases and scrutinizes public spending and accountability. Read about the campaign and sign the petition on its official page."}</p>
      </div>
      <Link to="/civic-campaign" className="inline-flex shrink-0 items-center justify-center bg-green-deep px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-deep">{ko ? "운동 소개·서명 참여" : "Read and sign"}</Link>
    </aside>}
    {sectionKey === "campaign" && <CampaignSignature />}
    {lead && <div className="mt-6 border-b-2 border-navy pb-8">
    <article className="grid min-w-0 gap-5 lg:grid-cols-2 lg:gap-6">
      <Link to={lead.path}><SafeImage src={lead.image.src} alt={lead.image.alt} className="aspect-[16/9] w-full object-cover" /></Link>
      <div className="self-center">
        <p className="text-sm font-bold text-green-deep">{ko ? "세금감시운동 · 제안과 실천" : "TAX WATCH MOVEMENT · IDEAS AND ACTION"}</p>
        <Link to={lead.path}><h2 className="editorial-title mt-3 text-2xl font-black leading-snug text-navy hover:text-green-mid sm:text-3xl">{lead.title}</h2></Link>
        <p className="mt-3 text-base leading-7 text-charcoal/75">{lead.summary}</p>
        <p className="mt-3 text-sm text-charcoal/55">{lead.date.replace(/-/g, ".")}</p>
        <Link to={lead.path} className="mt-4 inline-block text-base font-bold text-green-deep underline underline-offset-4">{ko ? "자세히 읽기" : "Read more"}</Link>
      </div>
    </article>
    </div>}
    {sectionKey !== "campaign" && <div className="mt-6 space-y-6">
      {sectionKey === "cases" && <h2 className="text-2xl font-bold text-navy">{ko ? "세금감시 논평과 운동 사례" : "Tax Commentaries and Movement Case Studies"}</h2>}
      {listing.map((article) => <article key={article.path} className="grid gap-4 border-b border-green-deep/15 pb-6 sm:grid-cols-[220px_minmax(0,1fr)]">
        <Link to={article.path}><SafeImage src={article.image.src} alt={article.image.alt} className="aspect-[16/9] w-full object-cover shadow-sm" /></Link>
        <div><p className="text-sm text-charcoal/55">{article.date.replace(/-/g, ".")}{article.path.endsWith(civicNoticeSlug) && <span className="ml-3 font-bold text-green-deep">{today > civicNoticeDeadline ? (ko ? "접수 마감" : "Closed") : (ko ? "10월 21일 마감" : "Deadline: October 21")}</span>}</p><Link to={article.path}><h2 className="mt-2 text-xl font-bold leading-8 text-navy hover:text-green-mid">{article.title}</h2></Link><p className="mt-2 text-base leading-7 text-charcoal/75">{article.summary}</p><Link to={article.path} className="mt-3 inline-block text-sm font-bold text-green-deep underline underline-offset-4">{ko ? "자세히 읽기" : "Read more"}</Link></div>
      </article>)}
    </div>}
  </div>;
}
