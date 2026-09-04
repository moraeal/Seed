import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBriefingsNewestFirst } from "../data/allBriefings";
import { localizeBriefing } from "../data/localizedContent";
import { useLanguage } from "../i18n";

const imageSrc = (src: string) => /^https?:\/\//i.test(src) ? src : `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

export default function Briefings() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const briefings = getAllBriefingsNewestFirst().map((briefing) => localizeBriefing(briefing, language));

  return (
    <section className="bg-paper pb-12 sm:pb-16">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-6 py-9 sm:py-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">SEED CITIZEN BRIEFING</span>
            <h1 className="editorial-title mt-2.5 text-[2.1rem] font-bold text-navy sm:text-[2.625rem]">{ko ? "씨앗브리핑" : "SEED Briefings"}</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            {ko ? "가짜뉴스와 왜곡된 정보가 넘치는 시대, 확인된 사실과 맥락을 시민의 언어로 설명합니다. 복잡한 현안을 쉽게 풀어 시민이 스스로 판단할 수 있도록 돕습니다." : "In an age of misinformation and partisan distortion, SEED Civic Briefings explain verified facts and context in accessible language so citizens can form their own judgments."}
          </p>
        </div>
      </header>

      <div className="container-page py-8 sm:py-10">
        <div className="border-t-2 border-navy">
          {briefings.map((briefing) => {
            const image = briefing.images?.[0];

            return (
              <Link
                key={briefing.slug}
                to={`/briefings/${briefing.slug}`}
                className="group grid gap-5 border-b border-green-deep/15 px-5 py-6 transition-colors hover:bg-green-pale/65 md:grid-cols-[280px_1fr] md:items-center md:px-7"
              >
                <div className="overflow-hidden bg-green-deep">
                  {image ? (
                    <img
                      src={imageSrc(image.src)}
                      alt={image.alt}
                      className="aspect-[4/3] w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-[1.025]"
                    />
                  ) : (
                    <div className="grid aspect-[4/3] place-items-center bg-green-deep px-6 text-center text-xs font-bold tracking-[.18em] text-gold-light">
                      SEED CITIZEN BRIEFING
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="editorial-title text-[1.3rem] font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-[1.575rem]">
                    {briefing.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-charcoal/55">{briefing.summary}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-charcoal/45">
                    <time>{briefing.date.replace(/-/g, ".")}</time>
                    <span>{briefing.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {ko ? `${briefing.readMinutes}분` : `${briefing.readMinutes} min`}
                    </span>
                    <span className="ml-auto flex items-center gap-2 font-bold text-green-deep">
                      {ko ? "브리핑 읽기" : "Read briefing"}
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
