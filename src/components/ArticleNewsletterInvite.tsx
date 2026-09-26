import { useLocation } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import NewsletterSignup from "./NewsletterSignup";
import { isReadingPage } from "../lib/readingRoutes";

export default function ArticleNewsletterInvite() {
  const { pathname } = useLocation();
  const { isVerified, loading } = useAuth();
  const { language } = useLanguage();
  if (!isReadingPage(pathname) || loading || isVerified) return null;

  const ko = language === "ko";
  return (
    <section className="border-t border-green-deep/15 bg-green-pale py-8 sm:py-10" aria-labelledby="article-newsletter-title">
      <div className="container-page grid max-w-5xl gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-10">
        <div>
          <span className="section-kicker">SEED LETTER</span>
          <h2 id="article-newsletter-title" className="editorial-title mt-2 text-2xl font-bold text-navy sm:text-3xl">{ko ? "읽은 뒤에도, 계속 확인하세요" : "Keep following the story"}</h2>
          <p className="mt-2 text-base leading-7 text-charcoal/70">{ko ? "씨앗의 소리가 새로 발행하는 기사와 주요 소식을 이메일로 전합니다." : "Get new SEED VOICE stories and important updates by email."}</p>
        </div>
        <NewsletterSignup embedded />
      </div>
    </section>
  );
}
