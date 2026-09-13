import { ArrowRight, BookOpenText, Clock, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { useLanguage } from "../i18n";
import SafeImage from "../components/SafeImage";
import ArticleArchive, { RECENT_ARTICLE_COUNT } from "../components/ArticleArchive";

const ENVIRONMENT_HERO = "images/seed-language/environment-shared-condition-hero.webp";

export default function SeedLanguage() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const articleIndex = [...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo]
    .filter((item) => item.listingEligible !== false && item.readMinutes < 12)
    .sort((a, b) => b.date.localeCompare(a.date));
  const articles = articleIndex
    .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const recentArticles = articles.slice(0, RECENT_ARTICLE_COUNT);
  const archiveArticles = articles.slice(RECENT_ARTICLE_COUNT);

  return (
    <div className="min-h-[68vh] bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-8 sm:py-11">
        <div className="container-page max-w-5xl">
          <p className="section-kicker">SEED LANGUAGE</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between">
            <h1 className="editorial-title flex items-center text-[2.1rem] font-bold leading-tight text-navy sm:text-[2.625rem]">{ko ? "씨앗언어" : "SEED Language"}</h1>
            <div className="flex items-center gap-4 bg-green-deep px-5 py-4 text-white sm:min-w-72 sm:px-6">
              <BookOpenText size={28} className="shrink-0 text-gold-light" />
              <div>
                <p className="text-[11px] font-extrabold tracking-[.16em] text-gold-light">WORDS IN QUESTION</p>
                <p className="editorial-title mt-1 text-xl font-bold leading-tight">{ko ? "씨앗언어 읽기" : "Read SEED Language"}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 max-w-5xl border-l-2 border-gold pl-6 text-base leading-7 text-charcoal/70 sm:text-lg sm:leading-8">
            {ko ? (
              <>
                <p>진영과 온라인의 언어는 시민을 이해하기보다 편으로 나누고, 좋은 가치마저 질문하기 어려운 구호로 만듭니다.</p>
                <p>씨앗언어는 익숙한 말과 새로 생긴 말에 숨은 전제와 권력을 드러냅니다.</p>
                <p>사람을 적으로 규정하지 않고 문제를 근거·비용·결과·책임으로 판단하도록 시민에게 언어를 돌려줍니다.</p>
              </>
            ) : (
              <>
                <p>Political and online language can divide citizens into camps instead of helping us understand one another, turning even worthy values into slogans that resist questions.</p>
                <p>SEED Language examines both partisan vocabulary and emerging expressions to reveal the assumptions and power embedded within them.</p>
                <p>It returns language to citizens so they can judge problems through evidence, cost, outcomes and responsibility rather than treating people as enemies.</p>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container-page max-w-5xl py-8 sm:py-10">
        <section className="overflow-hidden border-y-2 border-green-deep bg-white">
          <Link to="/seed-language/words-turn-citizens-into-enemies" className="group block p-5 transition-colors hover:bg-green-pale/45 sm:p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <Quote size={26} className="text-gold" />
                <p className="mt-4 text-[11px] font-extrabold tracking-[.14em] text-green-deep">{ko ? "씨앗언어가 필요한 이유" : "WHY SEED LANGUAGE MATTERS"}</p>
                <h2 className="editorial-title mt-2 text-[1.45rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-[1.8rem]">
                  {ko ? "말이 시민을 적으로 만든다" : "When Words Turn Citizens into Enemies"}
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-charcoal/70 sm:leading-8">
                  {ko ? "진영의 딱지와 신조어, 알고리즘이 시민의 판단과 관계를 어떻게 바꾸는지 살펴봅니다. 사람을 편으로 나누는 언어를 넘어, 문제를 구체적으로 묻는 시민의 언어가 왜 필요한지 설명합니다." : "This guide examines how partisan labels, new expressions and algorithms reshape civic judgment and relationships—and why citizens need language that questions problems instead of sorting people into camps."}
                </p>
              </div>
              <ArrowRight size={22} className="mt-1 shrink-0 text-green-deep transition-transform group-hover:translate-x-1" />
            </div>
            <div className="mt-4 flex items-center gap-2 border-t border-green-deep/10 pt-3 text-sm font-extrabold text-green-deep">
              <span>{ko ? "설명 글 읽기" : "Read the guide"}</span><ArrowRight size={15} />
            </div>
          </Link>
        </section>

        <section className="mt-7" aria-label={ko ? "씨앗언어 콘텐츠" : "SEED Language articles"}>
          <div className="mb-4 flex items-end justify-between gap-4 border-b-2 border-navy pb-3">
            <div><span className="section-kicker">LATEST</span><h2 className="mt-1.5 text-2xl font-extrabold text-navy">{ko ? "최근 기사" : "Latest articles"}</h2></div>
            <p className="text-xs font-semibold text-charcoal/45">{ko ? "최근 5건" : "Latest five"}</p>
          </div>
          <div>
          {recentArticles.map((article) => {
            const heroSrc = article.slug.startsWith("environment-") ? ENVIRONMENT_HERO : article.heroImage.src;
            const heroAlt = article.slug.startsWith("environment-")
              ? (ko ? "강과 녹지, 시민의 일상, 도시와 산업시설이 함께 놓인 환경 풍경" : "A river, green space, everyday civic life, city and industry sharing one landscape")
              : article.heroImage.alt;

            return <Link key={article.slug} to={`/seed-language/${article.slug}`} className="group grid gap-5 border-b border-green-deep/15 px-5 py-6 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7">
              <div className="overflow-hidden bg-green-deep"><SafeImage src={`${import.meta.env.BASE_URL}${heroSrc}`} alt={heroAlt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"/></div>
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="rounded-full bg-green-pale px-2.5 py-1 font-extrabold text-green-deep">{article.term}</span></div>
                <h3 className="editorial-title line-clamp-2 text-balance text-[1.3rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-[1.575rem]">{article.title}</h3>
                <p className="mt-2 line-clamp-2 max-w-3xl text-base leading-7 text-charcoal/60">{article.summary}</p>
                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={13}/>{ko ? `${article.readMinutes}분` : `${article.readMinutes} min`}</span><span className="ml-auto flex items-center gap-2 font-extrabold text-green-deep">{ko ? "글 읽기" : "Read article"}<ArrowRight size={15}/></span></div>
              </div>
            </Link>;
          })}
          </div>
        </section>
        <ArticleArchive ko={ko} items={archiveArticles.map((article) => ({ key: article.slug, to: `/seed-language/${article.slug}`, title: article.title, summary: article.summary, date: article.date }))} />
      </main>
    </div>
  );
}
