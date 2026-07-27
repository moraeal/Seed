import { ArrowRight, BookOpenCheck, FlaskConical, Landmark, LineChart, MessageCircle, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { AUDITION_URL, getContent } from "../data/siteContent";
import { useLanguage } from "../i18n";

const pillarIcons = [Sprout, Landmark, LineChart, BookOpenCheck];
const programIcons = [MessageCircle, BookOpenCheck, FlaskConical, Sprout];

export default function Home() {
  const { language } = useLanguage();
  const t = getContent(language).home;

  return (
    <>
      <section className="overflow-hidden bg-ivory py-12 sm:py-16 lg:py-20">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="section-kicker">{t.kicker}</span>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.15] text-navy sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/70">{t.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="button-primary">
                {t.primary}
                <ArrowRight size={17} />
              </Link>
              <a href={AUDITION_URL} target="_blank" rel="noopener noreferrer" className="button-secondary">
                {t.secondary}
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-green-deep p-7 text-white shadow-soft sm:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold tracking-[0.16em] text-gold">SEED</p>
                <h2 className="mt-3 text-2xl font-extrabold">
                  {language === "en" ? "Subject, Ethics, Evolution, Duty" : "Subject, Ethics, Evolution, Duty"}
                </h2>
              </div>
              <img
                src={`${import.meta.env.BASE_URL}images/brand/seed-sprout-draw.gif`}
                alt=""
                className="size-20 rounded-full bg-white/10 object-contain p-2"
              />
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/15 bg-white/[0.07] p-4">
                  <p className="text-3xl font-extrabold text-gold">{value}</p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-white/70">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/65">
              {language === "en"
                ? "SEED turns liberty from an abstract ideological debate into practical civic infrastructure rooted in citizens' everyday problems."
                : "씨앗연대는 자유를 추상적 이념 논쟁이 아니라 시민의 일상 문제에서 출발하는 실천적 시민 인프라로 바꿉니다."}
            </p>
          </div>
        </div>
      </section>

      <section className="section-band bg-paper">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <span className="section-kicker">VALUES</span>
              <h2>{t.pillarsTitle}</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.pillars.map(([title, description], index) => {
              const Icon = pillarIcons[index];
              return (
                <article key={title} className="content-card">
                  <Icon className="text-green-mid" size={26} />
                  <h3 className="mt-5 text-xl font-extrabold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/60">{description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band bg-[#F4F5F2]">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <span className="section-kicker">PROGRAMS</span>
              <h2>{t.programsTitle}</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {t.programs.map(([title, description], index) => {
              const Icon = programIcons[index];
              return (
                <article key={title} className="content-card flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-md bg-green-pale text-green-deep">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/60">{description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band bg-paper">
        <div className="container-page">
          <div className="section-heading">
            <div>
              <span className="section-kicker">CIVIC AGENDAS</span>
              <h2>{t.issueTitle}</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.issues.map(([title, description]) => (
              <article key={title} className="content-card bg-[#F6F8F1]">
                <h3 className="text-xl font-extrabold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-deep py-16 text-white sm:py-20">
        <div className="container-page text-center">
          <Sprout className="mx-auto text-gold" size={38} />
          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl">{t.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-white/70">{t.ctaDescription}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/about" className="button-light">
              {language === "en" ? "Read About SEED" : "씨앗연대 소개"}
            </Link>
            <a href={AUDITION_URL} target="_blank" rel="noopener noreferrer" className="button-outline-light">
              {language === "en" ? "Citizen Proposals" : "시민제안 참여"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
