import { BookOpenCheck } from "lucide-react";
import CommentSection from "../components/CommentSection";
import { academyItems } from "../data/programContent";

export default function Academy() {
  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">SEED ACADEMY</span>
            <h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">씨드 아카데미</h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-charcoal/65">
            시민이 사실을 읽고 권력을 이해하며 제안으로 이어갈 수 있도록, 실제 정치·사회 이슈를 시민의 언어로 배우는 과정입니다.
          </p>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {academyItems.map((item) => (
            <article key={item.title} className="flex min-h-[300px] flex-col border border-green-deep/15 bg-white p-7">
              <span className="section-kicker">{item.status}</span>
              <BookOpenCheck className="mt-8 text-green-mid" size={28} />
              <h2 className="editorial-title mt-6 text-2xl font-bold leading-snug text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/60">{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto max-w-4xl">
          <CommentSection postSlug="academy" />
        </div>
      </div>
    </section>
  );
}
