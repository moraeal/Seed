import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import TipDialog from "../components/TipDialog";

const copy = {
  ko: {
    eyebrow: "THE PEOPLE BEHIND SEED VOICE",
    title: "서로 다른 자리에서, 함께 묻습니다",
    lead: "한 사람이 모든 현장을 알 수는 없으니까요. 씨앗의 소리는 서로 다른 경험을 가진 필진이 각자의 자리에서 보고 들은 것을 가져와 함께 확인합니다.",
    penNameTitle: "필명으로 쓰는 이유",
    penNameOpening: "씨앗들이 모여 씨앗의 목소리가 됩니다. 씨앗의 소리는 우리 주변 평범한 씨앗 시민들의 이야기를 모아 담고자 합니다.",
    penNameReason: "이름과 경력, 직함이 소리의 색깔과 깊이를 가리지 않도록 하기 위함입니다. 누가 말했는가보다 무엇을 보고 겪었으며, 어떤 생각을 전하고 싶은지에 귀 기울여 주세요.",
    penNameResponsibility: "필명으로 쓴 글의 사실과 주장에 대한 책임은 씨앗의 소리가 지겠습니다.",
    intro: "이런 사람들이 씨앗에 글을 씁니다",
    writers: [
      { name: "작은씨앗", focus: "시민사회 · 공익 · 권력감시", description: "시민사회와 공공영역, 기업 현장을 두루 경험했습니다. 제도와 권력이 시민의 일상에 어떤 영향을 주는지 묻습니다." },
      { name: "경계의 시민", focus: "국방 · 안보 · 북한", description: "군 현장을 경험하고 북한과 국제관계를 연구합니다. 안보를 이야기할 때도 시민의 자유와 권리를 함께 살핍니다." },
      { name: "생각 너머", focus: "과학 · 에너지 · 환경", description: "오래 믿었던 생각도 새 자료 앞에서 다시 확인합니다. 에너지와 환경 문제를 측정과 근거를 따라 읽습니다." },
      { name: "푸른지평", focus: "시장경제 · 기업 · 지속가능성", description: "시장경제와 기업정책을 연구했고 지금은 환경 분야에서 일합니다. 성장과 지속가능성이 만나는 길을 찾습니다." },
      { name: "이음", focus: "기업 · 시민사회 · 사회적 책임", description: "기업과 시민사회가 함께 일하는 현장을 이어 왔습니다. 서로 다른 이해관계 사이에서 현실적인 해법을 생각합니다." },
    ],
    closing: "관점은 달라도, 사실을 확인하고 시민의 자리에서 묻는 마음은 같습니다.",
    proposalTitle: "씨앗의 소리는 누구에게나 열려 있습니다",
    proposalBody: "우리 주변에서 지나치기 쉬운 이야기, 함께 살펴볼 문제, 시민의 삶에서 출발한 생각을 들려주세요. 작은 목소리도 모이면 세상을 보는 새로운 눈이 됩니다.",
    proposalButton: "이야기 제안하기",
    back: "씨앗의 소리 소개로 돌아가기",
    imageAlt: "여러 사람이 자료를 살피고 메모하며 함께 글을 준비하는 모습",
  },
  en: {
    eyebrow: "THE PEOPLE BEHIND SEED VOICE",
    title: "Different paths, shared questions",
    lead: "No one can know every field firsthand. Our contributors bring experience from different places, then examine the facts together from a citizen's point of view.",
    penNameTitle: "Why we write under pen names",
    penNameOpening: "Many seeds come together to form a voice. SEED VOICE gathers stories from ordinary citizens around us.",
    penNameReason: "We use pen names so that names, credentials and titles do not obscure the color and depth of each voice. Listen first to what people have seen, experienced and want to say.",
    penNameResponsibility: "SEED VOICE takes responsibility for the facts and arguments in articles published under pen names.",
    intro: "Meet the contributors",
    writers: [
      { name: "Small Seed", focus: "Civil society · Public interest · Accountability", description: "With experience in civil society, public institutions and business, Small Seed asks how power and policy affect everyday life." },
      { name: "Citizen at the Boundary", focus: "Defense · Security · North Korea", description: "Drawing on military service and research into North Korea and international affairs, this contributor considers security alongside civic freedom and rights." },
      { name: "Beyond Thought", focus: "Science · Energy · Environment", description: "Willing to revisit old convictions when evidence changes, this contributor follows measurements and research on energy and the environment." },
      { name: "Blue Horizon", focus: "Markets · Enterprise · Sustainability", description: "A former researcher in market and business policy now working in environmental planning, Blue Horizon explores how growth and sustainability can meet." },
      { name: "Link", focus: "Enterprise · Civil society · Social responsibility", description: "Having connected businesses and civic groups in collaborative work, Link looks for practical answers where different interests meet." },
    ],
    closing: "Our perspectives differ. Our commitment to checking facts and asking questions as citizens is shared.",
    proposalTitle: "SEED VOICE is open to everyone",
    proposalBody: "Tell us about a story we may have missed, an issue worth examining or an idea drawn from everyday life. Small voices together can offer a new way to see the world.",
    proposalButton: "Share your story",
    back: "Back to SEED VOICE",
    imageAlt: "Contributors reviewing records and taking notes together",
  },
};

export default function Contributors() {
  const { language } = useLanguage();
  const content = copy[language];
  const [tipOpen, setTipOpen] = useState(false);

  return (
    <div className="bg-[#fffaf0] text-green-deep">
      <header className="bg-[linear-gradient(135deg,#f7ecc2_0%,#f9f2d9_58%,#e4f0cf_100%)]">
        <div className="container-page grid max-w-6xl items-center gap-8 py-14 sm:py-20 md:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="section-kicker">{content.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,4.4vw,4.25rem)] font-black leading-[1.2] tracking-[-.055em]">{content.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-green-deep/85">{content.lead}</p>
          </div>
          <div className="mx-auto w-full max-w-[420px] rounded-[2.5rem] bg-white/70 p-3 shadow-[10px_14px_0_rgba(84,121,57,.16),0_24px_45px_rgba(30,65,51,.12)]">
            <img src={`${import.meta.env.BASE_URL}images/about/contributors-writing.webp`} alt={content.imageAlt} className="aspect-[4/3] w-full rounded-[2rem] object-cover" width="1200" height="800" />
          </div>
        </div>
      </header>

      <main className="container-page max-w-6xl py-14 sm:py-20">
        <section className="mb-14 rounded-3xl border border-green-deep/15 bg-white p-7 shadow-[6px_8px_0_rgba(44,90,58,.10)] sm:p-10" aria-labelledby="pen-name-title">
          <h2 id="pen-name-title" className="text-2xl font-extrabold tracking-[-.04em] sm:text-3xl">{content.penNameTitle}</h2>
          <p className="mt-5 text-base leading-8 text-charcoal/80">{content.penNameOpening}</p>
          <p className="mt-3 text-base leading-8 text-charcoal/80">{content.penNameReason}</p>
          <p className="mt-3 text-base leading-8 text-charcoal/80">{content.penNameResponsibility}</p>
        </section>
        <h2 className="text-3xl font-extrabold tracking-[-.04em] sm:text-4xl">{content.intro}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {content.writers.map((writer, index) => (
            <article key={writer.name} className="rounded-2xl border border-green-deep/15 bg-white p-6 shadow-[6px_8px_0_rgba(44,90,58,.12)] sm:p-8">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#edf4df] text-sm font-black text-green-mid" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-[-.03em]">{writer.name}</h3>
                  <p className="mt-1 text-sm font-bold leading-6 text-green-mid">{writer.focus}</p>
                </div>
              </div>
              <p className="mt-5 text-base leading-8 text-charcoal/80">{writer.description}</p>
            </article>
          ))}
        </div>
        <section className="mt-14 rounded-3xl bg-[#edf4df] p-7 shadow-[6px_8px_0_rgba(44,90,58,.10)] sm:p-10" aria-labelledby="proposal-title">
          <h2 id="proposal-title" className="text-2xl font-extrabold tracking-[-.04em] sm:text-3xl">{content.proposalTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-charcoal/80">{content.proposalBody}</p>
          <button type="button" onClick={() => setTipOpen(true)} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-green-deep px-6 py-3 text-sm font-bold text-white hover:bg-green-mid">{content.proposalButton}<ArrowUpRight size={16} aria-hidden="true" /></button>
        </section>
      </main>

      <footer className="bg-[#edf4df] py-12 text-center sm:py-16">
        <div className="container-page max-w-4xl">
          <p className="text-xl font-extrabold leading-relaxed tracking-[-.03em] sm:text-2xl">{content.closing}</p>
          <Link to="/about" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-green-deep px-6 py-3 text-sm font-bold text-white hover:bg-green-mid">{content.back}<ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </footer>
      <TipDialog open={tipOpen} onClose={() => setTipOpen(false)} language={language} />
    </div>
  );
}
