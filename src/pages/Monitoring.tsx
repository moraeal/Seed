import { ArrowRight, BookOpenText, Eye, FileSearch, Landmark, Scale, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ArticleArchive, { RECENT_ARTICLE_COUNT } from "../components/ArticleArchive";
import CommentSection from "../components/CommentSection";
import SafeImage from "../components/SafeImage";
import { getAllBriefing } from "../data/allBriefings";
import { getColumn } from "../data/columns";
import { localizeBriefing, localizeColumn, localizeNewsArticle } from "../data/localizedContent";
import { getNewsArticle } from "../data/news";
import { publicInterestWatchCases, type LocalizedText } from "../data/publicInterestWatch";
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
      sourceMenu: language === "ko" ? "오늘의 뉴스" : "Today's News",
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
      sourceMenu: language === "ko" ? "씨앗브리핑" : "SEED Briefings",
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
    sourceMenu: language === "ko" ? "씨앗의 소리" : "Voice of the Seed",
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
  const leadArticle = recentArticles[0];
  const sideArticles = recentArticles.slice(1);
  const archivedArticles = curatedArticles.slice(RECENT_ARTICLE_COUNT);
  const criteria = [
    { icon: Landmark, ko: "권력과 절차", en: "Power & procedure", detailKo: "결정권과 검증 절차", detailEn: "Authority and due process" },
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
            <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "씨앗의 눈" : "SEED Watch"}</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            {ko
              ? "씨앗의 눈은 국가와 지방정부, 공공기관과 시민사회가 가진 권력, 그리고 세금과 기부금이 어떻게 쓰이는지를 감시합니다. 선한 목적이나 명성도 검증을 대신할 수 없습니다. 공개자료와 기관의 답변, 사업의 실제 결과를 끝까지 기록합니다."
              : "SEED Watch scrutinizes power exercised by national and local government, public institutions and civil society—and how taxes and donations are used. Good intentions or reputation do not replace verification. We follow public records, institutional replies and real-world outcomes."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-10">
        <section aria-labelledby="connected-watch-title">
          <div className="flex flex-col gap-3 border-b-2 border-navy pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-kicker">CONNECTED WATCH</span>
              <h2 id="connected-watch-title" className="mt-2 text-3xl font-extrabold text-navy">{ko ? "기사에서 이어지는 감시" : "Watch threads from our reporting"}</h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-charcoal/55">{ko ? "원문의 형식과 주소는 유지하고, 감시해야 할 쟁점을 이곳에서 이어 봅니다." : "Original formats and URLs remain unchanged while the issues that require scrutiny are followed here."}</p>
          </div>

          {leadArticle && (
            <div className="mt-5 grid gap-5 lg:grid-cols-[1.16fr_.84fr]">
              <Link to={leadArticle.to} className="group relative min-h-[430px] overflow-hidden bg-navy text-white">
                <SafeImage src={leadArticle.image} alt={leadArticle.imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-55" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent" />
                <div className="relative flex min-h-[430px] flex-col justify-end p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold tracking-[.08em]">
                    <span className="bg-gold px-2.5 py-1 text-navy">{leadArticle.status}</span>
                    <span className="text-white/72">{leadArticle.topic} · {leadArticle.sourceMenu}</span>
                  </div>
                  <h3 className="editorial-title mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">{leadArticle.title}</h3>
                  <p className="mt-4 line-clamp-3 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">{leadArticle.summary}</p>
                  <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-gold">{ko ? "원문 기사 보기" : "Read the original"}<ArrowRight size={16}/></span>
                </div>
              </Link>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {sideArticles.map((article) => (
                  <Link key={article.key} to={article.to} className="group grid grid-cols-[6.5rem_1fr] gap-4 border border-green-deep/15 bg-white p-3 transition hover:border-green-deep/35 hover:bg-green-pale/35">
                    <SafeImage src={article.image} alt={article.imageAlt} className="h-full min-h-28 w-full object-cover" />
                    <div className="min-w-0 py-1">
                      <div className="flex flex-wrap gap-x-2 text-[10px] font-extrabold tracking-wide text-green-deep"><span>{article.status}</span><span className="text-charcoal/42">{article.sourceMenu}</span></div>
                      <h3 className="editorial-title mt-2 line-clamp-2 text-lg font-bold leading-snug text-navy group-hover:text-green-mid">{article.title}</h3>
                      <p className="mt-2 text-[11px] font-semibold text-charcoal/42">{article.date.replace(/-/g, ".")}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

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
            {publicInterestWatchCases.map((item) => (
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
          <div className="flex items-center gap-3 text-navy"><ShieldCheck className="text-gold"/><h2 className="text-2xl font-extrabold">{ko ? "씨앗의 눈이 지키는 원칙" : "The SEED Watch standard"}</h2></div>
          <p className="text-sm leading-8 text-charcoal/65">{ko ? "진영이나 명성보다 사실과 시민이 치르는 비용을 봅니다. 확인된 사실, 아직 남은 질문, 씨앗의 판단을 구분하고 충분한 반론권과 정정 절차를 보장합니다. 선한 목적은 검증의 면허가 아닙니다. 감시는 낙인이 아니라 시민이 다음 결과를 확인할 수 있게 만드는 공공 기록입니다." : "We examine facts and the cost borne by citizens, not reputation or partisan convenience. Confirmed facts, open questions and SEED's judgment are separated, with a right of reply and correction. Good intentions are not immunity from scrutiny. Watch records let citizens verify what happens next; they do not brand institutions."}</p>
        </aside>

        <div className="mx-auto max-w-4xl"><CommentSection postSlug="monitoring" /></div>
      </div>
    </section>
  );
}
