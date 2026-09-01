import { ArrowUpRight, Lightbulb, MessageSquarePlus } from "lucide-react";
import { proposalItems } from "../data/civicParticipation";
import { AUDITION_URL } from "../data/siteContent";

export default function Proposals() {
  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">CITIZEN PROPOSALS</span>
            <h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">시민제안</h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-charcoal/65">불편을 말하는 데서 멈추지 않고, 무엇을 어떻게 바꾸면 좋을지 시민의 언어로 제안합니다. 작은 제안도 근거와 실행 가능성을 붙여 공공의 의제로 키웁니다.</p>
            <a href={AUDITION_URL} target="_blank" rel="noreferrer" className="button-primary mt-6 inline-flex">시민제안 올리기<ArrowUpRight size={16}/></a>
          </div>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-5 lg:grid-cols-3">
          {proposalItems.map((item) => (
            <article key={item.title} className="flex min-h-[340px] flex-col border border-green-deep/15 bg-white p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="section-kicker">{item.tag}</span>
                <span className="rounded-full bg-[#F3E7C7] px-3 py-1 text-[11px] font-extrabold text-[#7E5D15]">{item.status}</span>
              </div>
              <Lightbulb className="mt-8 text-gold" size={28} />
              <h2 className="editorial-title mt-6 text-2xl font-bold leading-snug text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/60">{item.summary}</p>
              <div className="mt-auto border-t border-green-deep/10 pt-5 text-xs leading-6 text-charcoal/50"><strong className="text-green-deep">다음 단계</strong><br />{item.nextStep}</div>
            </article>
          ))}
        </div>

        <section className="mt-14 grid gap-6 bg-green-deep p-7 text-white sm:p-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div className="flex items-center gap-3"><MessageSquarePlus className="text-gold"/><h2 className="text-2xl font-extrabold">좋은 제안의 기준</h2></div>
          <p className="text-sm leading-8 text-white/70">문제가 실제로 존재하는지, 누구에게 어떤 부담을 주는지, 해결책이 자유와 책임을 함께 넓히는지, 시행 뒤 결과를 측정할 수 있는지를 봅니다. 씨드는 제안을 구호가 아니라 검증 가능한 시민의 행동으로 만들고자 합니다.</p>
        </section>
      </div>
    </section>
  );
}
