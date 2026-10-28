import { ArrowRight, BookOpenText, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { getSeedLanguageEnvironmentArticle, seedLanguageEnvironmentArticlesKo } from "../data/seedLanguageEnvironment";
import { seedLanguageTerms } from "../data/seedLanguageTerms";
import { useLanguage } from "../i18n";
import SafeImage from "../components/SafeImage";
import ArticleArchive, { RECENT_ARTICLE_COUNT } from "../components/ArticleArchive";

const ENVIRONMENT_HERO = "images/seed-language/environment-shared-condition-hero.webp";

export default function SeedLanguage() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const articleIndex = [...seedLanguageEnvironmentArticlesKo, ...seedLanguageArticlesKo]
    .filter((item) => item.listingEligible !== false)
    .sort((a, b) => b.date.localeCompare(a.date));
  const articles = articleIndex
    .map((item) => getSeedLanguageEnvironmentArticle(item.slug, language) ?? getSeedLanguageArticle(item.slug, language))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const recentArticles = articles.slice(0, RECENT_ARTICLE_COUNT);
  const archiveArticles = articles.slice(RECENT_ARTICLE_COUNT);

  return (
    <div className="min-h-[68vh] bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-5 sm:py-6">
        <div className="container-page max-w-5xl">
          <p className="section-kicker">GLOSSARY</p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-between">
            <h1 className="editorial-title flex items-center text-[2.1rem] font-bold leading-tight text-navy sm:text-[2.625rem]">{ko ? "시민언어" : "Glossary"}</h1>
            <Link
              to="/seed-language/why-civic-language"
              className="group flex items-center gap-4 bg-green-deep px-5 py-3 text-white transition-colors hover:bg-green-mid sm:min-w-72 sm:px-6"
              aria-label={ko ? "시민언어가 필요한 이유 읽기" : "Read why the glossary matters"}
            >
              <BookOpenText size={28} className="shrink-0 text-gold-light" />
              <div>
                <p className="text-[11px] font-extrabold tracking-[.16em] text-gold-light">WORDS IN QUESTION</p>
                <p className="editorial-title mt-1 text-xl font-bold leading-tight">{ko ? "시민언어가 필요한 이유" : "Why the Glossary Matters"}</p>
                <span className="mt-2 flex items-center gap-1.5 text-xs font-bold text-white/75 transition-colors group-hover:text-white">
                  {ko ? "내용 보기" : "Read more"}<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </div>
          <div className="mt-3 max-w-5xl border-l-2 border-gold pl-6 text-base leading-7 text-charcoal/70 sm:text-lg sm:leading-8">
            {ko ? (
              <>
                <p>자유, 공정, 평등, 공익. 우리가 익숙하게 사용하는 말도 정치와 사회에서 서로 다른 의미로 쓰이고 있습니다.</p>
                <p>시민언어는 말의 기원과 본래 뜻, 시대에 따라 달라진 의미와 현실에서의 쓰임을 시민의 눈높이에서 살펴봅니다.</p>
                <p>정치적 진영의 구호에 가려진 말의 참뜻을 되찾고, 시민이 스스로 생각하고 판단할 수 있는 언어를 만들어갑니다.</p>
              </>
            ) : (
              <>
                <p>Freedom, fairness, equality and the public interest: even familiar words take on different meanings in politics and society.</p>
                <p>Civic Language explores where these words came from, what they originally meant, how their meanings have changed, and how they are used in everyday life.</p>
                <p>We seek to recover meanings obscured by partisan slogans and help citizens develop the language to think and judge for themselves.</p>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container-page max-w-5xl py-8 sm:py-10">
        <section aria-label={ko ? "시민언어 콘텐츠" : "Glossary articles"}>
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
              <div className="overflow-hidden bg-green-deep"><SafeImage src={heroSrc} alt={heroAlt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"/></div>
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
        <ArticleArchive
          ko={ko}
          items={archiveArticles.map((article) => {
            const termMeta = ko ? seedLanguageTerms[article.term] : undefined;
            return {
              key: article.slug,
              to: `/seed-language/${article.slug}`,
              title: article.title,
              summary: article.summary,
              date: article.date,
              term: ko ? article.term : article.term.toUpperCase(),
              termHanja: termMeta?.hanja,
              termEnglish: termMeta?.english,
            };
          })}
        />
      </main>
    </div>
  );
}
