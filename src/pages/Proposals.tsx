import { ArrowUpRight, Lightbulb, MessageSquarePlus } from "lucide-react";
import CitizenProposalForm from "../components/CitizenProposalForm";
import CommentSection from "../components/CommentSection";
import ProposalFlow from "../components/ProposalFlow";
import { proposalItems } from "../data/civicParticipation";
import { proposalTranslations } from "../data/contentTranslations/staticPrograms";
import { AUDITION_URL } from "../data/siteContent";
import { useLanguage } from "../i18n";

export default function Proposals() {
  const { language } = useLanguage();
  const ko = language === "ko";
  const items = proposalItems.map((item, index) => ko ? item : { ...item, ...proposalTranslations[index] });

  return (
    <section className="bg-paper pb-20 sm:pb-28">
      <header className="border-b border-green-deep/15 bg-ivory">
        <div className="container-page grid gap-8 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <span className="section-kicker">CITIZEN PROPOSALS</span>
            <h1 className="editorial-title mt-4 text-5xl font-bold text-navy sm:text-6xl">{ko ? "시민제안" : "Citizen Proposals"}</h1>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-charcoal/65">{ko ? "불편을 말하는 데서 멈추지 않고, 무엇을 어떻게 바꾸면 좋을지 시민의 언어로 제안합니다. 작은 제안도 근거와 실행 가능성을 붙여 공공의 의제로 키웁니다." : "We move beyond describing problems and ask what should change and how. Small ideas become public proposals when they are supported by evidence, practical design and measurable outcomes."}</p>
            <div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={() => document.getElementById("proposal-form")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="button-primary">{ko ? "시민제안 작성하기" : "Write a Proposal"}<ArrowUpRight size={16}/></button><a href={AUDITION_URL} target="_blank" rel="noreferrer" className="button-secondary">{ko ? "2분 영상으로 제안하기" : "Submit a 2-minute Video"}<ArrowUpRight size={16}/></a></div>
          </div>
        </div>
      </header>

      <div className="container-page py-12 sm:py-16">
        <section>
          <div className="max-w-3xl"><span className="section-kicker">FROM QUESTION TO ACTION</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy sm:text-4xl">{ko ? "제안은 이렇게 시민의 행동으로 자랍니다" : "How a Proposal Becomes Civic Action"}</h2><p className="mt-4 text-sm leading-7 text-charcoal/55">{ko ? "모든 제안이 곧바로 캠페인이나 정책이 되지는 않습니다. 사실을 확인하고 동료시민과 토론한 뒤, 작게 시험하고 결과를 다시 확인합니다." : "Not every idea immediately becomes a campaign or policy. We verify facts, discuss the issue with fellow citizens, test a small solution and follow up on the results."}</p></div>
          <div className="mt-8"><ProposalFlow ko={ko}/></div>
        </section>

        <div className="mt-14 sm:mt-20"><CitizenProposalForm ko={ko}/></div>

        <section className="mt-16 border-t-2 border-navy pt-8 sm:mt-24">
          <div className="max-w-3xl"><span className="section-kicker">PROPOSAL EXAMPLES</span><h2 className="editorial-title mt-3 text-3xl font-bold text-navy">{ko ? "서로 다른 시민의 자리에서 시작한 제안" : "Proposals Starting from Different Civic Perspectives"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/55">{ko ? "아래 3건은 실제 접수 기록이 아니라 다양한 시민의 시각과 말투를 반영해 편집부가 구성한 제안 예시입니다. 실제 접수 제안은 제안자와 협의한 뒤 별도로 표시합니다." : "These three items are editorially constructed examples reflecting different civic perspectives and voices; they are not records of actual submissions. Real submissions will be identified separately after consultation with each proposer."}</p></div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="flex min-h-[390px] flex-col border border-green-deep/15 bg-white p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="section-kicker">{item.tag}</span>
                <span className="rounded-full bg-[#F3E7C7] px-3 py-1 text-[11px] font-extrabold text-[#7E5D15]">{item.status}</span>
              </div>
              <p className="mt-4 text-xs font-bold text-green-mid">{item.perspective}</p>
              <Lightbulb className="mt-8 text-gold" size={28} />
              <h2 className="editorial-title mt-6 text-2xl font-bold leading-snug text-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/60">{item.summary}</p>
              <div className="mt-auto border-t border-green-deep/10 pt-5 text-xs leading-6 text-charcoal/50"><strong className="text-green-deep">{ko ? "다음 단계" : "Next step"}</strong><br />{item.nextStep}</div>
            </article>
          ))}
        </div>
        </section>

        <section className="mt-14 grid gap-6 bg-green-deep p-7 text-white sm:p-10 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div className="flex items-center gap-3"><MessageSquarePlus className="text-gold"/><h2 className="text-2xl font-extrabold">{ko ? "좋은 제안의 기준" : "What Makes a Good Proposal"}</h2></div>
          <p className="text-sm leading-8 text-white/70">{ko ? "문제가 실제로 존재하는지, 누구에게 어떤 부담을 주는지, 해결책이 자유와 책임을 함께 넓히는지, 시행 뒤 결과를 측정할 수 있는지를 봅니다. 씨드는 제안을 구호가 아니라 검증 가능한 시민의 행동으로 만들고자 합니다." : "We ask whether the problem is real, who bears the burden, whether the proposed solution expands both freedom and responsibility, and whether results can be measured after implementation. SEED aims to turn proposals from slogans into testable civic action."}</p>
        </section>

        <div className="mx-auto max-w-4xl"><CommentSection postSlug="proposals" /></div>
      </div>
    </section>
  );
}
