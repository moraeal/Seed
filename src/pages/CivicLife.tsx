import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../components/SafeImage";
import { campaignPending, civicSections, getCivicSectionArticles } from "../data/civicSections";
import { civicNoticeDeadline, civicNoticeSlug } from "../data/civicHubArticles";
import { useLanguage } from "../i18n";

export default function CivicLife() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Seoul" });
  return <div className="container-page py-8 sm:py-12">
    <header className="border-b-2 border-navy pb-6">
      <h1 className="editorial-title text-3xl font-black text-navy sm:text-4xl">{ko ? "시민생활" : "Civic Life"}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-charcoal/70">{ko ? "시민이 제안하는 캠페인, 함께 배울 시민운동 사례, 참여할 수 있는 소식을 모았습니다." : "Civic campaigns, lessons from citizen movements, and opportunities to participate."}</p>
    </header>
    <div className="mt-8 space-y-10">
      {civicSections.map((section) => {
        const articles = getCivicSectionArticles(section.key, language).slice(0, 3);
        return <section key={section.key} aria-labelledby={`civic-${section.key}`}>
          <Link to={section.path} className="group flex items-center justify-between gap-4 border-b border-green-deep/20 pb-3 text-green-deep transition hover:text-green-mid"><h2 id={`civic-${section.key}`} className="text-xl font-extrabold sm:text-2xl">{section.title[language]}</h2><ArrowRight size={20} className="shrink-0 transition group-hover:translate-x-1" /></Link>
          <p className="mt-3 text-base leading-7 text-charcoal/70">{section.description[language]}</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {articles.map((article) => <Link key={article.path} to={article.path} className="group overflow-hidden rounded-lg border border-green-deep/15 bg-white shadow-sm transition hover:border-green-mid hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-deep">
              <SafeImage src={article.image.src} alt={article.image.alt} className="aspect-[16/9] w-full object-cover" />
              <div className="p-5"><p className="text-sm text-charcoal/55">{article.date.replace(/-/g, ".")}{article.path.endsWith(civicNoticeSlug) && <span className="ml-2 font-bold text-green-deep">{today > civicNoticeDeadline ? (ko ? "접수 마감" : "Closed") : (ko ? "10월 21일 마감" : "Closes October 21")}</span>}</p><h3 className="mt-2 text-xl font-bold leading-8 text-navy group-hover:text-green-mid">{article.title}</h3><p className="mt-3 text-base leading-7 text-charcoal/75">{article.summary}</p></div>
            </Link>)}
            {!articles.length && <div className="rounded-lg bg-ivory p-6 md:col-span-3"><p className="text-sm font-bold text-green-deep">{ko ? "준비 중" : "In preparation"}</p><h3 className="mt-2 text-xl font-bold text-navy">{section.key === "campaign" ? campaignPending.title[language] : section.title[language]}</h3><p className="mt-3 text-base leading-7 text-charcoal/75">{section.key === "campaign" ? campaignPending.summary[language] : section.description[language]}</p></div>}
          </div>
        </section>;
      })}
    </div>
  </div>;
}
