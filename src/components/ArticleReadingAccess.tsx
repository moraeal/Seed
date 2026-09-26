import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { isReadingPage } from "../lib/readingRoutes";

const FIRST_ARTICLE_KEY = "seed-first-free-article-v1";

export default function ArticleReadingAccess({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { isVerified, loading } = useAuth();
  const { language } = useLanguage();
  const reading = isReadingPage(pathname);
  const [preview, setPreview] = useState<{ title: string; description: string } | null>(null);
  const firstArticle = (() => {
    if (!reading || loading) return null;
    try {
      const stored = sessionStorage.getItem(FIRST_ARTICLE_KEY);
      if (stored) return stored;
      const first = pathname.replace(/\/$/, "");
      sessionStorage.setItem(FIRST_ARTICLE_KEY, first);
      return first;
    } catch {
      // Reading stays available when browser storage is disabled.
      return pathname.replace(/\/$/, "");
    }
  })();

  useEffect(() => {
    if (!reading || loading || isVerified || firstArticle === pathname.replace(/\/$/, "")) return;
    let active = true;
    void import("../seo").then(({ getSeoRoute }) => {
      const route = getSeoRoute(pathname);
      if (active) setPreview(route ? { title: route.title, description: route.description } : null);
    });
    return () => { active = false; };
  }, [reading, loading, isVerified, firstArticle, pathname]);

  if (!reading) return <>{children}</>;
  if (loading) return <div className="container-page min-h-[45vh] py-16" role="status">{language === "ko" ? "구독 상태를 확인하는 중입니다…" : "Checking subscription…"}</div>;
  if (isVerified || firstArticle === pathname.replace(/\/$/, "")) return <>{children}</>;

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
      <section className="container-page mt-10 max-w-3xl rounded-xl border border-green-deep/15 bg-white px-6 py-8 text-center shadow-[0_16px_40px_rgba(23,76,58,.12)] sm:px-10" aria-label={ko ? "무료 구독 안내" : "Free subscription"}>
        <h2 className="editorial-title text-2xl font-bold text-navy">{ko ? "이어서 읽으려면 무료 구독신청을 해주세요" : "Subscribe for free to keep reading"}</h2>
        <p className="mt-3 text-base leading-7 text-charcoal/70">{ko ? "첫 기사는 모두 읽을 수 있습니다. 구독 후에는 씨앗의 모든 기사를 끝까지 읽고 새 소식도 이메일로 받아볼 수 있습니다." : "Your first article is free to read. Subscribe to read every story in full and receive new stories by email."}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link to={`/account?mode=signup&returnTo=${returnTo}`} className="button-primary">{ko ? "무료 구독신청" : "Subscribe for free"}</Link>
          <Link to={`/account?mode=login&returnTo=${returnTo}`} className="button-secondary">{ko ? "이미 구독 중이라면 로그인" : "Already subscribed? Log in"}</Link>
        </div>
      </section>
    </article>
  );
}
