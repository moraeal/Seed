import { ArrowRight, BookOpenText, Clock, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { getSeedLanguageArticle, seedLanguageArticlesKo } from "../data/seedLanguage";
import { useLanguage } from "../i18n";

export default function SeedLanguage() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const articles = seedLanguageArticlesKo.map((item) => getSeedLanguageArticle(item.slug, language)!);

  return (
    <div className="min-h-[68vh] bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-16">
        <div className="container-page max-w-5xl">
          <p className="section-kicker">SEED LANGUAGE</p>
          <h1 className="editorial-title mt-4 text-4xl font-bold leading-tight text-navy sm:text-6xl">{ko ? "씨앗언어" : "SEED Language"}</h1>
          <p className="mt-5 max-w-3xl border-l-2 border-gold pl-6 text-lg leading-8 text-charcoal/70 sm:text-xl">
            {ko ? "진영이 독점한 시민사회의 언어를 해체하고, 본래의 의미를 되살려 시민이 스스로 생각하고 말할 수 있는 씨앗의 언어로 다시 구성합니다." : "We will examine civic language captured by partisan camps, recover its original meaning, and rebuild it as a language citizens can use to think and speak for themselves."}
          </p>
        </div>
      </header>

      <main className="container-page max-w-5xl py-10 sm:py-14">
        <section className="grid overflow-hidden border-y-2 border-green-deep bg-white lg:grid-cols-[.7fr_1.3fr]">
          <div className="flex min-h-56 flex-col justify-between bg-green-deep p-7 text-white sm:p-9">
            <BookOpenText size={34} className="text-gold-light" />
            <div>
              <p className="text-xs font-extrabold tracking-[.18em] text-gold-light">WORDS IN QUESTION</p>
              <h2 className="editorial-title mt-3 text-3xl font-bold leading-tight">{ko ? "씨앗언어 읽기" : "Read SEED Language"}</h2>
            </div>
          </div>

          <div className="p-7 sm:p-9">
            <Quote size={26} className="text-gold" />
            <div className="mt-4 space-y-4 text-base leading-8 text-charcoal/70">
              <p>{ko ? "자유, 민주주의, 공익, 시민사회처럼 모두의 것이어야 할 말들이 특정 진영의 구호와 정체성을 나타내는 언어로 굳어졌습니다. 익숙한 단어를 그대로 사용하면서도 우리는 그 안에 어떤 전제와 권력이 숨어 있는지 충분히 묻지 못했습니다." : "Words such as freedom, democracy, public interest, and civil society should belong to everyone. Yet many have hardened into slogans and identity markers claimed by particular political camps."}</p>
              <p className="font-semibold text-navy">{ko ? "씨앗언어는 진영화된 말의 쓰임을 살피고, 왜곡되거나 잊힌 본래 의미를 찾아 시민의 삶과 책임에 맞는 새로운 정의를 제안하는 작업이 될 것입니다." : "SEED Language will examine how such words became partisan, recover meanings that were distorted or forgotten, and propose definitions grounded in citizens’ lives and responsibilities."}</p>
            </div>

          </div>
        </section>

        <section className="mt-10 border-t-2 border-navy" aria-label={ko ? "씨앗언어 콘텐츠" : "SEED Language articles"}>
          {articles.map((article) => <Link key={article.slug} to={`/seed-language/${article.slug}`} className="group grid gap-7 border-b border-green-deep/15 px-5 py-9 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7">
            <div className="overflow-hidden bg-green-deep"><img src={`${import.meta.env.BASE_URL}${article.heroImage.src}`} alt={article.heroImage.alt} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"/></div>
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-charcoal/45"><span className="rounded-full bg-green-pale px-2.5 py-1 font-extrabold text-green-deep">{article.term}</span></div>
              <h3 className="editorial-title text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-4xl">{article.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal/55">{article.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-charcoal/45"><time>{article.date.replace(/-/g, ".")}</time><span className="flex items-center gap-1"><Clock size={13}/>{ko ? `${article.readMinutes}분` : `${article.readMinutes} min`}</span><span className="ml-auto flex items-center gap-2 font-bold text-green-deep">{ko ? "글 읽기" : "Read article"}<ArrowRight size={15}/></span></div>
            </div>
          </Link>)}
        </section>
      </main>
    </div>
  );
}
