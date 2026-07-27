import { Mail, Network, ShieldCheck } from "lucide-react";
import { PARTNERSHIP_URL, getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Support() {
  const { language } = useLanguage();
  const t = getContent(language).support;

  return (
    <section className="bg-ivory py-16 sm:py-20">
      <div className="container-page">
        <span className="section-kicker">PARTNERSHIP</span>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight text-navy sm:text-5xl">{t.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal/70">{t.subtitle}</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-lg bg-green-deep p-8 text-white shadow-soft sm:p-10">
            <Network className="text-gold" size={32} />
            <h2 className="mt-5 text-2xl font-extrabold">{language === "en" ? "How to Work With SEED" : "씨앗연대와 함께하는 방법"}</h2>
            <div className="mt-5 grid gap-4">
              {t.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-white/72">{paragraph}</p>
              ))}
            </div>
            <a href={PARTNERSHIP_URL} className="button-light mt-7" aria-label={language === "en" ? "Contact SEED by email" : "씨앗연대에 이메일로 문의하기"}>
              <Mail size={16} />
              {t.button}
            </a>
          </article>

          <article className="content-card">
            <ShieldCheck className="text-green-mid" size={30} />
            <h2 className="mt-5 text-2xl font-extrabold text-navy">
              {language === "en" ? "Transparency Notice" : "투명성 안내"}
            </h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/65">
              {language === "en"
                ? "SEED Civic Partners does not present itself as an approved partner of any international network before formal approval. We do not operate a public online donation system yet."
                : "씨앗연대는 공식 승인 전 국제 네트워크의 승인된 파트너로 표시하지 않습니다. 또한 공개 온라인 기부 시스템은 아직 운영하지 않습니다."}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
