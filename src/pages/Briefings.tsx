import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getBriefingsNewestFirst } from "../data/briefings";

export default function Briefings() {
  const briefings = getBriefingsNewestFirst();

  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">SEED CITIZEN BRIEFING</span>
            <h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">시민브리핑</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            가짜뉴스와 왜곡된 정보가 넘치는 시대, 확인된 사실과 맥락을 시민의 언어로 설명합니다.
            복잡한 현안을 쉽게 풀어 시민이 스스로 판단할 수 있도록 돕습니다.
          </p>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <div className="border-t-2 border-navy">
          {briefings.map((briefing) => {
            const image = briefing.images?.[0];
            const issueLabel = briefing.issueNumber
              ? `시민브리핑 ${String(briefing.issueNumber).padStart(2, "0")}`
              : briefing.category;

            return (
              <Link
                key={briefing.slug}
                to={`/briefings/${briefing.slug}`}
                className="group grid gap-7 border-b border-green-deep/15 py-9 md:grid-cols-[280px_1fr] md:items-center"
              >
                <div className="overflow-hidden bg-green-deep">
                  {image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${image.src}`}
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
                  <span className="section-kicker">{issueLabel}</span>
                  <h2 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy transition group-hover:text-green-mid sm:text-4xl">
                    {briefing.title}
                  </h2>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-charcoal/55">{briefing.summary}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-charcoal/45">
                    <time>{briefing.date.replace(/-/g, ".")}</time>
                    <span>{briefing.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {briefing.readMinutes}분
                    </span>
                    <span className="ml-auto flex items-center gap-2 font-bold text-green-deep">
                      브리핑 읽기
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
