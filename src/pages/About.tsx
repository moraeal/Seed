import { ArrowRight, Check, Mail, Network, ShieldCheck, Sprout, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { AUDITION_URL, getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function About() {
  const { language } = useLanguage();
  const t = getContent(language).about;

  return (
    <>
      <section className="overflow-hidden bg-ivory py-16 sm:py-20 lg:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="section-kicker">{t.kicker}</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.18] text-navy sm:text-5xl">{t.title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/70">{t.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={AUDITION_URL} target="_blank" rel="noopener noreferrer" className="button-primary">
                {language === "en" ? "Join Citizen Proposals" : "시민제안 참여하기"}
                <ArrowRight size={16} />
              </a>
              <Link to="/support" className="button-secondary">
                {language === "en" ? "Support SEED" : "후원하기"}
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-green-deep p-7 text-white shadow-soft sm:p-10">
            <Sprout className="text-gold" size={42} />
            <p className="mt-8 text-xs font-extrabold tracking-[0.14em] text-gold">OPERATING PRINCIPLES</p>
            <div className="mt-6 grid gap-3">
              {t.principles.map(([title, description]) => (
                <div key={title} className="rounded-lg border border-white/15 bg-white/[0.07] p-4">
                  <h3 className="font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band bg-paper">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          <article className="content-card lg:col-span-1">
            <Sprout className="text-green-mid" size={28} />
            <h2 className="mt-5 text-2xl font-extrabold text-navy">{t.missionTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/65">{t.mission}</p>
          </article>
          <article className="content-card lg:col-span-1">
            <ShieldCheck className="text-green-mid" size={28} />
            <h2 className="mt-5 text-2xl font-extrabold text-navy">{t.independenceTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/65">{t.independence}</p>
          </article>
          <article className="content-card lg:col-span-1">
            <Check className="text-green-mid" size={28} />
            <h2 className="mt-5 text-2xl font-extrabold text-navy">{t.valuesTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-charcoal/65">{t.values}</p>
          </article>
        </div>
      </section>

      <section className="section-band bg-[#F4F5F2]">
        <div className="container-page">
          <span className="section-kicker">PROGRAMS</span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy">{t.programsTitle}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.programs.map(([title, description]) => (
              <article key={title} className="content-card">
                <h3 className="text-xl font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band bg-paper">
        <div className="container-page grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg bg-navy p-8 text-white sm:p-10">
            <Users className="text-gold" size={30} />
            <h2 className="mt-5 text-2xl font-extrabold">{t.leadershipTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{t.leadership}</p>
          </article>
          <article className="rounded-lg bg-green-deep p-8 text-white sm:p-10">
            <Mail className="text-gold" size={30} />
            <h2 className="mt-5 text-2xl font-extrabold">{t.contactTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{t.contact}</p>
          </article>
        </div>
      </section>

      {language === "en" && (
        <section className="section-band bg-[#F4F5F2]">
          <div className="container-page">
            <span className="section-kicker">LEADERSHIP</span>
            <article className="mt-5 max-w-4xl rounded-lg border border-green-deep/10 bg-paper p-7 shadow-soft sm:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-green-mid">{t.founderTitle}</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy">{t.founderName}</h2>
              <p className="mt-5 text-sm leading-7 text-charcoal/70">{t.founderBio}</p>
            </article>
          </div>
        </section>
      )}

      <section className="bg-ivory py-14">
        <div className="container-page flex flex-col gap-5 rounded-lg border border-green-deep/10 bg-paper p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <Network className="mt-1 shrink-0 text-green-mid" size={28} />
            <div>
              <h2 className="text-xl font-extrabold text-navy">
                {language === "en" ? "Independent, nonpartisan, and ready to collaborate." : "정당 정치가 아니라 자유를 위한 시민 플랫폼입니다."}
              </h2>
              <p className="mt-2 text-sm leading-7 text-charcoal/60">
                {language === "en"
                  ? "SEED connects citizens, researchers, civic groups, foundations, companies, and international partners through dialogue, transparent records, and practical experiments."
                  : "씨앗연대는 시민, 전문가, 시민단체, 기업, 후원자를 투명한 기록과 실천적 실험으로 연결합니다."}
              </p>
            </div>
          </div>
          <Link to="/" className="button-secondary shrink-0">
            {language === "en" ? "Back Home" : "메인으로"}
          </Link>
        </div>
      </section>
    </>
  );
}
