import { FlaskConical } from "lucide-react";
import CommentSection from "../components/CommentSection";
import { experimentItems } from "../data/programContent";

export default function Experiments() {
  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">CIVIC EXPERIMENTS</span>
            <h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">시민실험</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            큰 구호보다 작고 검증 가능한 해법부터 시험합니다. 무엇이 효과가 있었고 무엇이 실패했는지 공개 기록으로 남깁니다.
          </p>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {experimentItems.map((item) => (
            <article key={item.title} className="flex min-h-[300px] flex-col border border-green-deep/15 bg-white p-7">
              <span className="section-kicker">{item.status}</span>
              <FlaskConical className="mt-8 text-gold" size={28} />
              <h2 className="editorial-title mt-6 text-2xl font-bold leading-snug text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/60">{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-4xl">
          <CommentSection postSlug="experiments" />
        </div>
      </div>
    </section>
  );
}
