import PillarCard from "../components/PillarCard";
import SectionTitle from "../components/SectionTitle";

const pillars = [
  ["주체성", "Subject", "시민이 스스로 말하고 제안하는 구조를 만듭니다."],
  ["윤리성", "Ethics", "자유와 책임이 함께 작동하는 태도를 지향합니다."],
  ["진화성", "Evolution", "현장의 경험에서 배우며 계속 수정하고 확장합니다."],
  ["책임성", "Duty", "대안, 실행, 후속 점검까지 책임지는 문화를 세웁니다."],
];

const sections = [
  ["운영 원칙", "투명한 후원 관리, 공개 가능한 사업 목적, 책임 있는 공론장 운영을 기본 원칙으로 삼습니다."],
  ["조직 구조", "시민언어센터, 오늘의 프레임 편집팀, 제안소 운영팀, 후원자 신뢰 파트로 구성합니다."],
  ["자문위원회 예정 구조", "법치, 교육, 기업, 지역, 청년 분야의 전문가 자문 구조를 단계적으로 마련합니다."],
  ["청년 씨앗위원회", "청년을 수혜자가 아니라 시민언어와 공론장의 공동 설계자로 세웁니다."],
  ["지역 씨앗모임", "지역의 생활 의제를 자유와 책임의 언어로 정리하고 제안하는 모임을 만듭니다."],
];

export default function About() {
  return (
    <section className="section-band">
      <div className="container-page">
        <SectionTitle
          eyebrow="About"
          title="씨앗연대 소개"
          description="씨앗연대는 진영의 언어가 아니라 시민의 언어로 공공성을 다시 세우려는 플랫폼입니다."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-2xl font-bold text-green-deep">비전</h3>
            <p className="mt-4 leading-8 text-charcoal/75">
              자유롭게 판단하고 책임 있게 참여하는 시민이 공공성의 주체로 자라나는
              시민사회를 만듭니다.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="text-2xl font-bold text-green-deep">미션</h3>
            <p className="mt-4 leading-8 text-charcoal/75">
              시민언어 사전, 오늘의 프레임, 제안소, 공론장을 통해 자유와 책임의
              시민사회 인프라를 구축합니다.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map(([title, english, description], index) => (
            <PillarCard
              key={title}
              title={title}
              english={english}
              description={description}
              index={index + 1}
            />
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map(([title, text]) => (
            <article key={title} className="card p-6">
              <h3 className="text-xl font-bold text-green-deep">{title}</h3>
              <p className="mt-4 leading-8 text-charcoal/74">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
