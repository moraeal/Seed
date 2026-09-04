import { ArrowRight, Bot, FileCheck2, MessageSquareQuote, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function About() {
  const { language } = useLanguage();
  const ko = language === "ko";

  const editorialWork = ko
    ? [
        [Newspaper, "씨드뉴스", "하루의 뉴스 가운데 시민이 꼭 알아야 할 사안을 골라 사실과 주장을 구분합니다."],
        [FileCheck2, "시민브리핑", "복잡한 정책과 제도를 사실, 맥락, 쟁점과 관찰 지점의 순서로 설명합니다."],
        [MessageSquareQuote, "칼럼", "자유·법치·책임과 강한 시민사회의 관점에서 분명한 판단을 제시합니다."],
      ]
    : [
        [Newspaper, "SEED News", "Selects the public issues citizens need to understand and separates verified facts from unverified claims."],
        [FileCheck2, "Civic Briefings", "Explains complex policy and institutions through facts, context, disputes, and points to watch."],
        [MessageSquareQuote, "Columns", "Offers clear judgments grounded in freedom, the rule of law, responsibility, and a strong civil society."],
      ];

  return (
    <main className="bg-paper">
      <header className="border-b border-green-deep/15 bg-ivory py-12 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="section-kicker">ABOUT THE PUBLISHER</p>
            <h1 className="editorial-title mt-4 max-w-4xl text-4xl font-bold leading-[1.12] text-navy sm:text-6xl">{ko ? "한 사람의 질문에서 시작한 독립 시민미디어" : "An independent civic media outlet that began with one person’s questions"}</h1>
          </div>
          <p className="border-l-2 border-gold pl-6 text-base leading-8 text-charcoal/70 sm:text-lg">{ko ? "씨앗의 소리는 박경석이 혼자 만들고 운영하는 1인 미디어입니다. 규모와 조직보다 한 시민의 질문, 판단과 책임 있는 목소리를 앞세웁니다." : "SEED VOICE is a one-person independent media outlet created and run by Park Kyung-seuk. It puts one citizen’s questions, judgment, and accountable voice before organizational size."}</p>
        </div>
      </header>

      <section className="py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
            <div><p className="section-kicker">WHY I BEGAN</p><h2 className="editorial-title mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">{ko ? "내 생각이 정말 나의 것인지 묻는 데서 시작했습니다" : "It began by asking whether my thoughts were truly my own"}</h2></div>
            <div className="space-y-4 text-base leading-8 text-charcoal/70">
              <p>{ko ? "레거시 미디어의 영향력이 약해진 자리에 영상과 쇼츠, 알고리즘이 들어왔습니다. 우리는 끝없이 정보를 소비하지만 시민으로서 꼭 알아야 할 사실과 질문은 오히려 놓치기 쉽습니다." : "As legacy media lost influence, video feeds, short-form content, and algorithms moved in. We consume an endless stream of information while easily missing the facts and questions citizens most need."}</p>
              <p>{ko ? "저 역시 누군가의 생각에 올라탄 채 세상을 비판하는 데 머물지 않았는지 돌아보았습니다. 그래서 작은 목소리라도 내 이름으로 질문하고, 확인하고, 판단해 기록하기로 했습니다." : "I also had to ask whether I was merely borrowing other people’s conclusions while criticizing the world. I decided to question, verify, judge, and write in my own name, however small my voice might be."}</p>
              <p className="font-semibold text-navy">{ko ? "씨앗의 소리는 완성된 언론사가 아니라, 한 시민이 자신의 생각을 세우며 성장하는 공개 편집실입니다." : "SEED VOICE is not a finished media institution. It is an open editorial room where one citizen develops his own judgment in public."}</p>
            </div>
          </div>

          <figure className="mt-9 overflow-hidden border border-green-deep/15 bg-white">
            <img src={`${import.meta.env.BASE_URL}images/about/seed-journal-origin-watercolor.webp`} alt={ko ? "한 시민이 작은 씨앗과 노트북을 앞에 두고 생각을 글로 키워가는 따뜻한 수채화" : "Warm watercolor of one citizen developing small seeds of thought through writing and a laptop"} className="aspect-[16/7.2] w-full object-cover" />
            <figcaption className="flex flex-col gap-1 border-t border-green-deep/10 px-5 py-3 text-[13px] leading-6 text-charcoal/58 sm:flex-row sm:justify-between sm:gap-6">
              <span>{ko ? "한 사람의 작은 사유가 기록되고 연결될 때 시민의 목소리가 됩니다." : "A citizen’s small reflections become a public voice when they are recorded and connected."}</span>
              <span className="shrink-0 text-right font-semibold text-green-deep/70">{ko ? "© 2026 씨앗의 소리" : "© 2026 SEED VOICE"}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-y border-green-deep/15 bg-[#F1F2EC] py-10 sm:py-14">
        <div className="container-page max-w-5xl grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <div><Bot size={28} className="text-gold"/><h2 className="editorial-title mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl">{ko ? "AI와 함께 쓰되, 판단은 내 이름으로 합니다" : "I write with AI, but the judgment remains mine"}</h2></div>
          <div className="space-y-4 text-base leading-8 text-charcoal/70">
            <p>{ko ? "코딩과 개발을 배우지 않은 한 사람이 AI의 도움으로 이 사이트를 만들고 있습니다. 글의 주제와 문제의식, 말하고 싶은 방향은 제가 정하고, AI는 자료를 찾고 사실관계와 데이터, 논리의 빈틈을 점검하는 데 활용합니다." : "I built this site without a background in coding or web development, using AI as an enabling tool. I choose the subject, the questions, and the direction; AI helps research sources, check facts and data, and test gaps in the reasoning."}</p>
            <p>{ko ? "AI가 저자를 대신하지는 않습니다. 무엇을 중요하게 볼지, 어떤 결론을 책임질지, 잘못이 발견됐을 때 무엇을 고칠지는 결국 제 몫입니다. 불완전함을 숨기기보다 독자 앞에서 고치고 성장하겠습니다." : "AI does not replace the author. Deciding what matters, taking responsibility for a conclusion, and correcting mistakes remain my work. I would rather revise and grow in public than hide imperfection."}</p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container-page max-w-5xl">
          <div className="border-b-2 border-navy pb-4"><p className="section-kicker">WHAT I PUBLISH</p><h2 className="editorial-title mt-2 text-3xl font-bold text-navy">{ko ? "세 가지 방식으로 시민의 판단을 돕습니다" : "Three ways to support civic judgment"}</h2></div>
          <div className="grid md:grid-cols-3 md:divide-x md:divide-green-deep/15">
            {editorialWork.map(([Icon, title, description]) => {
              const Component = Icon as typeof Newspaper;
              return <article key={title as string} className="border-b border-green-deep/15 py-7 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0"><Component size={25} className="text-gold"/><h3 className="editorial-title mt-4 text-2xl font-bold text-navy">{title as string}</h3><p className="mt-3 text-sm leading-7 text-charcoal/62">{description as string}</p></article>;
            })}
          </div>

          <div className="mt-8 flex flex-col gap-5 border-y-2 border-green-deep bg-[#fbf4e5] px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div><p className="section-kicker">STATEMENT OF PURPOSE</p><p className="editorial-title mt-2 text-2xl font-bold text-green-deep">{ko ? "씨앗의 소리가 왜 시작되었는지 더 자세히 읽어보세요." : "Read why SEED VOICE was created and what it seeks to do."}</p></div>
            <Link to="/founding-statement" className="button-primary shrink-0">{ko ? "씨앗의 소리 취지문" : "Statement of Purpose"}<ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="border-t border-green-deep/15 bg-ivory py-10 sm:py-14">
        <div className="container-page max-w-5xl grid gap-8 sm:grid-cols-[210px_1fr] sm:items-center lg:gap-12">
          <img src={`${import.meta.env.BASE_URL}images/about/park-kyung-seok.jpg`} alt={ko ? "씨앗의 소리 발행인 박경석" : "Park Kyung-seuk, publisher of SEED VOICE"} className="w-[190px] border border-green-deep/15 bg-white object-cover shadow-[12px_12px_0_rgba(23,76,58,.08)] sm:w-full" />
          <div>
            <p className="section-kicker">PUBLISHER</p>
            <h2 className="editorial-title mt-3 text-4xl font-bold text-navy">{ko ? "박경석" : "Park Kyung-seuk"}</h2>
            <p className="mt-2 text-sm font-bold text-green-deep">{ko ? "씨앗의 소리 발행인" : "Publisher, SEED VOICE"}</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-charcoal/68">{ko ? "시민사회 현장에서 오래 일했습니다. 사회통합위원회 대외협력관, 범시민사회단체연합 사무총장과 공기업 임원 등을 지냈습니다. 지금은 한 사람의 시민도 자신의 생각을 세우고 공공의 목소리를 낼 수 있다는 가능성을 보여주기 위해 1인 독립 시민미디어 씨앗의 소리를 만들고 있습니다." : "He has worked for many years in Korean civil society, including roles in social integration, civic-sector cooperation, and public enterprise. He now publishes SEED VOICE to demonstrate that one citizen can develop an independent judgment and bring an accountable public voice into the world."}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
