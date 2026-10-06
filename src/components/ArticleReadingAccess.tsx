import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { isReadingPage } from "../lib/readingRoutes";
import ReadingTools from "./ReadingTools";

const FIRST_ARTICLE_KEY = "seed-first-free-article-v1";
const FREE_ARTICLES_KEY = "seed-free-articles-v2";
const FREE_ARTICLE_LIMIT = 3;

function canReadFreeArticle(pathname: string) {
  const article = pathname.replace(/\/$/, "");
  try {
    const saved = JSON.parse(localStorage.getItem(FREE_ARTICLES_KEY) || "null");
    const firstArticle = sessionStorage.getItem(FIRST_ARTICLE_KEY);
    const articles: string[] = Array.isArray(saved)
      ? saved.filter((path): path is string => typeof path === "string")
      : firstArticle ? [firstArticle] : [];
    if (articles.includes(article)) return true;
    if (articles.length >= FREE_ARTICLE_LIMIT) return false;
    localStorage.setItem(FREE_ARTICLES_KEY, JSON.stringify([...articles, article]));
    return true;
  } catch {
    // Reading stays available when browser storage is disabled.
    return true;
  }
}

export default function ArticleReadingAccess({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { isVerified, loading } = useAuth();
  const { language } = useLanguage();
  const reading = isReadingPage(pathname);
  const [preview, setPreview] = useState<{ title: string; description: string; image?: string; imageAlt?: string } | null>(null);
  const canRead = !reading || loading || isVerified || canReadFreeArticle(pathname);

  useEffect(() => {
    if (canRead) return;
    let active = true;
    setPreview(null);
    const billSlug = pathname.match(/^\/monitoring\/legislation\/(bill-[^/]+)\/?$/)?.[1];
    if (billSlug) {
      void import("../lib/legislativeMonitoring").then(({ getLegislativeBillBySlug }) => getLegislativeBillBySlug(billSlug))
        .then((bill) => {
          if (!active || !bill) return;
          const ko = language === "ko";
          setPreview({
            title: ko ? bill.title : bill.analysis?.title_en || bill.title,
            description: (ko ? bill.public_summary_ko || bill.analysis?.summary_ko : bill.public_summary_en || bill.analysis?.summary_en) || bill.official_summary || "",
          });
        }).catch(() => {});
    } else {
      void import("../seo").then(({ getSeoRoute }) => {
        const route = getSeoRoute(pathname);
        if (active) setPreview(route ? { title: route.title, description: route.description, image: route.image, imageAlt: route.imageAlt } : null);
      });
    }
    return () => { active = false; };
  }, [canRead, pathname, language]);

  if (!reading) return <>{children}</>;
  if (loading) return <div className="container-page min-h-[45vh] py-16" role="status">{language === "ko" ? "구독 상태를 확인하는 중입니다…" : "Checking subscription…"}</div>;
  if (canRead) return <ReadingTools>{children}</ReadingTools>;

  const ko = language === "ko";
  const returnTo = encodeURIComponent(pathname);
  return (
    <article className="bg-paper pb-20">
      <div className="border-b border-green-deep/15 bg-ivory py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <p className="section-kicker">{ko ? "기사 미리보기" : "ARTICLE PREVIEW"}</p>
          <h1 className="article-detail-title mt-3">{preview?.title.replace(/ \| .*$/, "") ?? (ko ? "기사 미리보기" : "Article preview")}</h1>
          {preview?.description && <p className="article-summary">{preview.description}</p>}
        </div>
      </div>
      {pathname.replace(/\/$/, "") === "/monitoring/tax/commentary/inheritance-tax-automatic-increase-2026" && <section className="container-page mt-8 max-w-3xl" aria-labelledby="inheritance-tax-short-title">
        <h2 id="inheritance-tax-short-title" className="mb-4 text-xl font-extrabold text-navy sm:text-2xl">{ko ? "상속세의 조용한 증세 — 쇼츠로 보기" : "Inheritance Tax's Quiet Increase — Watch the Short"}</h2>
        <div className="mx-auto aspect-[9/16] w-full max-w-[24rem] overflow-hidden bg-black shadow-[0_12px_34px_rgba(23,76,58,.08)]">
          <iframe src="https://www.youtube-nocookie.com/embed/AAR1Gi1vKH4?rel=0" title={ko ? "세율은 그대로, 납세자는 늘었다… 상속세의 조용한 증세 — 씨앗의 소리 쇼츠" : "Unchanged Rates, More Taxpayers: Inheritance Tax's Quiet Increase — SEED VOICE Short in Korean"} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        </div>
        <p className="mt-3 text-center text-sm"><a href="https://youtube.com/shorts/AAR1Gi1vKH4" target="_blank" rel="noreferrer" className="font-semibold text-green-deep underline decoration-green-deep/30 underline-offset-4">{ko ? "유튜브에서 보기" : "Watch on YouTube"}</a></p>
      </section>}
      {preview?.image && <div className="container-page mt-8 max-w-3xl">
        <img src={preview.image} alt={preview.imageAlt || ""} className="aspect-[16/9] w-full rounded-lg object-cover shadow-[0_12px_34px_rgba(23,76,58,.08)]" loading="eager" decoding="async" />
      </div>}
      <section className="container-page mt-10 max-w-3xl rounded-xl border border-green-deep/15 bg-white px-6 py-8 text-center shadow-[0_16px_40px_rgba(23,76,58,.12)] sm:px-10" aria-label={ko ? "무료 구독 안내" : "Free subscription"}>
        <h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "이어서 읽으려면 무료 구독신청을 해주세요" : "Subscribe for free to keep reading"}</h2>
        <p className="mt-3 text-base leading-7 text-charcoal/70">{ko ? "구독 없이 기사 3편까지 모두 읽을 수 있습니다. 구독 후에는 씨앗의 모든 기사를 끝까지 읽고 새 소식도 이메일로 받아볼 수 있습니다." : "You can read three articles in full without subscribing. Subscribe to read every story in full and receive new stories by email."}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to={`/account?mode=signup&returnTo=${returnTo}`} className="button-primary">{ko ? "무료 구독신청" : "Subscribe for free"}</Link>
          <Link to={`/account?mode=login&returnTo=${returnTo}`} className="button-secondary">{ko ? "이미 구독 중이라면 로그인" : "Already subscribed? Log in"}</Link>
        </div>
      </section>
    </article>
  );
}
