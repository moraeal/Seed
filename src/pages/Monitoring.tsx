import { ArrowRight, BookOpenText, Eye, FileSearch, Landmark, Scale, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleArchive, { RECENT_ARTICLE_COUNT } from "../components/ArticleArchive";
import CommentSection from "../components/CommentSection";
import SafeImage from "../components/SafeImage";
import { getAllBriefing } from "../data/allBriefings";
import { getColumn } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsArticle } from "../data/news";
import { civicWatchCases, type LocalizedText } from "../data/publicInterestWatch";
import { seedWatchReferences, type SeedWatchReference } from "../data/seedWatchIndex";
import { useLanguage, type Language } from "../i18n";

type ResolvedWatchArticle = {
  key: string;
  to: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  imageAlt: string;
  topic: string;
  status: string;
  sourceMenu: string;
};

const imageSrc = (src: string) => src.startsWith("/") ? src : `/${src}`;

function resolveWatchArticle(reference: SeedWatchReference, language: Language): ResolvedWatchArticle | null {
  const topic = reference.topic[language];
  const status = reference.status[language];

  if (reference.kind === "news") {
    const original = getNewsArticle(reference.slug);
    if (!original) return null;
    const article = localizeNewsArticle(original, language);
    return {
      key: `news-${article.slug}`,
      to: `/news/${article.slug}`,
      title: article.title,
      summary: article.summary,
      date: article.date,
      image: imageSrc(article.heroImage.src),
      imageAlt: article.heroImage.alt,
      topic,
      status,
      sourceMenu: language === "ko" ? "핫이슈" : "Hot Issues",
    };
  }

  if (reference.kind === "briefing") {
    const original = getAllBriefing(reference.slug);
    if (!original) return null;
    const article = localizeBriefing(original, language);
    const image = article.images?.[0];
    return {
      key: `briefing-${article.slug}`,
      to: `/briefings/${article.slug}`,
      title: article.title,
      summary: article.summary,
      date: article.date,
      image: imageSrc(image?.src ?? "/images/brand/editorial-image-fallback.svg"),
      imageAlt: image?.alt ?? article.title,
      topic,
      status,
      sourceMenu: language === "ko" ? "브리핑" : "Briefings",
    };
  }

  const original = getColumn(reference.slug);
  if (!original) return null;
  const article = localizeColumn(original, language);
  return {
    key: `column-${article.slug}`,
    to: `/columns/${article.slug}`,
    title: article.title,
    summary: article.summary,
    date: article.date,
    image: imageSrc(article.heroImage.src),
    imageAlt: article.heroImage.alt,
    topic,
    status,
    sourceMenu: language === "ko" ? "칼럼" : "Columns",
  };
}

export default function Monitoring() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const t = (value: LocalizedText) => value[language];
  const curatedArticles = seedWatchReferences
    .map((reference) => resolveWatchArticle(reference, language))
    .filter((article): article is ResolvedWatchArticle => article !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
  const recentArticles = curatedArticles.slice(0, RECENT_ARTICLE_COUNT);
  const archivedArticles = curatedArticles.slice(RECENT_ARTICLE_COUNT);
  const criteria = [
    { icon: Landmark, ko: "입법과 권력", en: "Legislation & power", detailKo: "법안·절차·결정권", detailEn: "Bills, procedure and authority" },
    { icon: Scale, ko: "예산과 성과", en: "Budgets & outcomes", detailKo: "돈의 흐름과 실제 결과", detailEn: "Money flows and results" },
    { icon: Eye, ko: "시민의 권리", en: "Civic rights", detailKo: "참여·선택·이의제기", detailEn: "Voice, choice and appeal" },
    { icon: FileSearch, ko: "답변과 후속", en: "Replies & follow-up", detailKo: "질의·반론·변화 기록", detailEn: "Questions, replies and change" },
  ];

  return (
    <section className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">PUBLIC-INTEREST WATCH</span>
            <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "시민감시" : "Civic Watch"}</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            {ko
              ? "시민감시는 국회와 입법 과정, 국가와 지방정부, 공공기관과 시민사회가 가진 권력을 감시합니다. 법안과 제도가 시민의 권리와 기업의 자유를 어떻게 바꾸는지, 세금과 기부금이 어떻게 쓰이는지 살핍니다. 선한 목적이나 명성도 검증을 대신할 수 없습니다. 공개자료와 기관의 답변, 시행 이후의 실제 결과를 끝까지 기록합니다."
              : "Civic Watch scrutinizes legislatures and lawmaking, national and local government, public institutions and civil-society power. We examine how bills and institutions change civic rights and economic freedom, and how taxes and donations are used. Good intentions or reputation do not replace verification. We follow public records, institutional replies and real-world outcomes after implementation."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-10">
        <section>
          <div className="mb-4 flex items-end justify-between gap-4 border-b-2 border-navy pb-3">
            <div>
              <span className="section-kicker">LATEST</span>
              <h2 className="mt-1.5 text-2xl font-extrabold text-navy">{ko ? "최근 기사" : "Latest articles"}</h2>
            </div>
            <p className="text-xs font-semibold text-charcoal/45">{ko ? "최근 5건" : "Latest five"}</p>
          </div>

          <div>
            {recentArticles.map((article) => (
              <Link
                key={article.key}
                to={article.to}
                className="group grid gap-5 border-b border-green-deep/15 px-5 py-6 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7"
              >
                <div className="overflow-hidden bg-green-deep">
                  <SafeImage
                    src={article.image}
                    alt={article.imageAlt}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>

                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-extrabold">
                    <span className="bg-green-deep px-2.5 py-1 text-white">{article.status}</span>
                    <span className="text-green-deep">{article.topic}</span>
                    <span className="text-charcoal/42">{article.sourceMenu}</span>
                  </div>
                  <h3 className="editorial-title line-clamp-2 text-balance text-[1.3rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-[1.575rem]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 max-w-3xl text-base leading-7 text-charcoal/60">{article.summary}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-green-deep/10 pt-3 text-xs text-charcoal/45">
                    <time>{article.date.replace(/-/g, ".")}</time>
                    <span className="ml-auto flex items-center gap-2 font-extrabold text-green-deep">
                      {ko ? "기사 읽기" : "Read article"}<ArrowRight size={15}/>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <ArticleArchive items={archivedArticles.map((article) => ({ key: article.key, to: article.to, title: article.title, summary: article.summary, date: article.date }))} ko={ko} />
        </section>

        <section className="mt-16" aria-labelledby="native-watch-title">
          <div className="flex flex-col gap-3 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">WATCH RECORDS</span>
              <h2 id="native-watch-title" className="mt-2 text-3xl font-extrabold text-navy">{ko ? "자료로 만든 감시기록" : "Watch records built from evidence"}</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-charcoal/55">{ko ? "공개자료, 확인할 질문, 기관의 답변과 정정 내역을 한 기록에 쌓습니다." : "Public records, open questions, institutional replies and corrections stay together."}</p>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {civicWatchCases.map((item) => (
              <Link key={item.slug} to={`/monitoring/${item.slug}`} className="group flex min-h-[300px] flex-col border border-green-deep/15 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(23,76,58,.10)] sm:p-6">
                <div className="flex items-center justify-between gap-3"><span className="section-kicker">{t(item.eyebrow)}</span><span className="rounded-full bg-green-pale px-3 py-1 text-[11px] font-extrabold text-green-deep">{t(item.status)}</span></div>
                <BookOpenText className="mt-5 text-gold" size={25}/>
                <p className="mt-4 text-sm font-extrabold text-green-deep">{t(item.organization)}</p>
                <h3 className="editorial-title mt-2 text-[1.3rem] font-bold leading-snug text-navy group-hover:text-green-mid sm:text-[1.575rem]">{t(item.title)}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/60">{t(item.summary)}</p>
                <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-extrabold text-green-deep">{ko ? "감시 기록과 원문 보기" : "View record and sources"}<ArrowRight size={15}/></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {criteria.map(({ icon: Icon, ...criterion }) => (
            <div key={criterion.ko} className="border border-green-deep/10 bg-ivory p-5">
              <Icon className="text-gold" size={20}/>
              <strong className="mt-4 block text-sm text-navy">{ko ? criterion.ko : criterion.en}</strong>
              <span className="mt-1 block text-xs text-charcoal/45">{ko ? criterion.detailKo : criterion.detailEn}</span>
            </div>
          ))}
        </section>

        <aside className="mt-12 grid gap-6 border-t-2 border-navy pt-9 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div className="flex items-center gap-3 text-navy"><ShieldCheck className="text-gold"/><h2 className="text-2xl font-extrabold">{ko ? "시민감시가 지키는 원칙" : "The Civic Watch standard"}</h2></div>
          <p className="text-sm leading-8 text-charcoal/65">{ko ? "진영이나 명성보다 사실과 시민이 치르는 비용을 봅니다. 확인된 사실, 아직 남은 질문, 씨앗의 판단을 구분하고 충분한 반론권과 정정 절차를 보장합니다. 선한 목적은 검증의 면허가 아닙니다. 감시는 낙인이 아니라 시민이 다음 결과를 확인할 수 있게 만드는 공공 기록입니다." : "We examine facts and the cost borne by citizens, not reputation or partisan convenience. Confirmed facts, open questions and SEED's judgment are separated, with a right of reply and correction. Good intentions are not immunity from scrutiny. Watch records let citizens verify what happens next; they do not brand institutions."}</p>
        </aside>

        <div className="mx-auto max-w-4xl"><CommentSection postSlug="monitoring" /></div>
      </div>
    </section>
  );
}
