import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const sources = [
  { label: "B Lab — B Corp Certification", url: "https://www.bcorporation.net/en-us/certification/" },
  { label: "B Lab — 2026 Certification Hub", url: "https://www.bcorporation.net/en-us/standards/certification-hub/" },
  { label: "B Lab — B Lab Standards", url: "https://www.bcorporation.net/en-us/standards/performance-requirements/" },
  { label: "B Lab — Standards governance and development", url: "https://www.bcorporation.net/en-us/standards/development/" },
  { label: "B Lab — Nespresso certification profile", url: "https://www.bcorporation.net/en-us/find-a-b-corp/company/nespresso-global/" },
  { label: "B Lab — Common concerns about B Corp Certification", url: "https://www.bcorporation.net/en-us/news/blog/common-concerns-about-b-corp-certification-a-q-and-a/" },
  { label: "The Guardian — B Corp standards overhaul", url: "https://www.theguardian.com/business/2026/apr/06/b-corp-status-standards-overhaul-certification-companies" },
  { label: "The Guardian — BrewDog loses B Corp status", url: "https://www.theguardian.com/business/2022/dec/01/brewdog-loses-its-ethical-b-corp-certificate" },
];

export default function BCorpDeepDive() {
  return (
    <article className="bg-paper">
      <header className="border-b border-green-deep/10 bg-green-deep py-5 text-white sm:py-7">
        <div className="container-page max-w-4xl">
          <Link to="/briefings/social-solidarity-economy-youth-mall-lessons" className="inline-flex items-center gap-1.5 text-xs font-bold text-white/75 hover:text-white">
            <ArrowLeft size={14} /> 시민브리핑으로 돌아가기
          </Link>
          <span className="mt-4 block text-[11px] font-extrabold tracking-[0.18em] text-gold-light">SEED BRIEFING · DEEP ANALYSIS</span>
          <h1 className="article-detail-title-dark mt-2">국가가 고르지 않아도 좋은 기업은 자랄 수 있을까</h1>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-white/75 sm:text-[15px]">
            B Corp는 정부가 사회적기업을 지정하고 보조금·공공조달 혜택을 주는 방식과 무엇이 다른지, 그리고 민간 인증이 실제 대안이 될 수 있는지 살펴봅니다.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/55"><span>씨앗의 소리 심층분석</span><time>2026.09.11 기준</time><span>읽는 시간 12분</span></div>
        </div>
      </header>

      <div className="container-page max-w-[50rem] py-9 sm:py-12">
        <section className="reading-column">
          <p className="article-copy article-copy-long mt-0">한국의 사회적경제 논쟁은 자주 두 극단으로 갈립니다. 국가가 사회적기업을 적극적으로 지정하고 지원해야 한다는 주장과, 시장에 맡기고 정부는 손을 떼야 한다는 주장입니다. 그러나 두 선택지만 있는 것은 아닙니다. 국가가 특정 기업을 ‘좋은 기업’으로 선별하지 않더라도 시민과 소비자, 투자자와 민간기관이 사회적 가치를 평가하고 선택하게 만드는 제도를 설계할 수 있습니다.</p>
          <p className="article-copy article-copy-long">B Corp는 그 가능성을 보여주는 대표적 사례입니다. B Corp 인증은 정부가 발급하는 사회적기업 지위가 아니라 비영리조직 B Lab이 운영하는 민간 인증입니다. 기업은 사회·환경·거버넌스에 관한 기준을 충족하고 외부 검증을 받아야 하며, 인증을 받은 뒤에도 갱신과 검증을 거칩니다. 2026년부터 적용되는 새 기준은 모든 기업이 인권, 기후행동, 공정한 노동, 환경책임, 이해관계자 거버넌스 등 핵심 분야에서 각각 최소요건을 충족하도록 구조를 강화했습니다.</p>
        </section>

        <section className="article-section article-section-long reading-column">
          <h2 className="article-section-title">1. 가장 큰 차이 — 정부의 ‘지정’이 아니라 민간의 ‘신뢰 표지’</h2>
          <p className="article-copy article-copy-long">정부 인증형 사회적기업 제도에서는 기업의 법적 지위와 지원정책이 결합되기 쉽습니다. 인증을 받으면 인건비, 정책금융, 공공구매, 위탁사업 등 여러 혜택으로 이어질 수 있습니다. 이때 인증기관인 국가가 사실상 시장의 참가자에게 서로 다른 출발선을 만들어주는 문제가 생깁니다.</p>
          <p className="article-copy article-copy-long">B Corp의 기본 구조는 다릅니다. 인증을 받았다는 이유만으로 정부가 해당 기업의 상품을 사주거나 경쟁기업보다 유리한 공공계약을 보장하지 않습니다. 인증의 직접적인 보상은 소비자와 투자자, 노동시장과 거래상대방에게 ‘이 기업이 일정한 사회·환경 기준을 검증받았다’는 정보를 제공하는 데 있습니다. 결국 인증의 경제적 가치는 시민과 시장이 그 표지를 얼마나 신뢰하고 선택하느냐에 달려 있습니다.</p>
          <div className="my-7 rounded-xl border border-green-deep/10 bg-white p-5 sm:p-6">
            <p className="text-sm font-extrabold text-green-deep">두 모델의 차이</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-ivory p-4"><strong className="text-navy">국가 선별형</strong><p className="mt-2 text-sm leading-6 text-charcoal/70">정부가 자격을 인정하고 그 자격에 보조금·정책금융·공공조달 우대를 연결합니다. 잘못 설계하면 일반기업과의 경쟁조건이 달라질 수 있습니다.</p></div>
              <div className="rounded-lg bg-green-pale p-4"><strong className="text-green-deep">시장 신뢰형</strong><p className="mt-2 text-sm leading-6 text-charcoal/70">민간기관이 공개 기준으로 평가하고 소비자·투자자가 인증을 참고해 선택합니다. 정부가 구매자나 후원자로 시장 결과를 직접 만들 필요가 줄어듭니다.</p></div>
            </div>
          </div>
        </section>

        <section className="article-section article-section-long reading-column">
          <h2 className="article-section-title">2. 무엇을 평가하는가 — 선한 의도가 아니라 기업의 행동</h2>
          <p className="article-copy article-copy-long">B Lab의 최신 기준은 기업이 스스로 ‘우리는 좋은 일을 한다’고 선언하는 것만으로는 충분하지 않다는 방향으로 강화됐습니다. 기업의 목적과 이해관계자 거버넌스뿐 아니라 인권, 기후행동, 공정한 노동, 환경관리와 순환경제, 공정성과 포용, 정부관계와 집단행동 등 구체적인 영역을 검증합니다.</p>
          <p className="article-copy article-copy-long">여기서 씨앗이 주목할 지점은 기업의 ‘신분’보다 행동과 결과를 본다는 것입니다. 사회적기업이라는 법적 간판이 있다고 해서 자동으로 더 좋은 기업이 되는 것도 아니고 일반 영리기업이라고 해서 사회적 가치를 만들 수 없는 것도 아닙니다. 일반기업도 노동조건을 개선하고 지역사회에 투자하고 환경비용을 줄이면 같은 평가의 대상이 될 수 있습니다.</p>
        </section>

        <section className="article-section article-section-long reading-column">
          <h2 className="article-section-title">3. 그렇다고 B Corp가 정답은 아닙니다</h2>
          <p className="article-copy article-copy-long">민간 인증이라고 해서 권위와 오류의 문제가 사라지는 것은 아닙니다. 인증기관이 커질수록 ‘누가 좋은 기업인지 결정하는 민간 권력’이 될 수도 있습니다. 평가기준이 불투명하거나 인증 확산 자체가 조직의 이해관계가 되면 인증의 신뢰도는 떨어집니다.</p>
          <p className="article-copy article-copy-long">실제로 2022년 네스프레소가 B Corp 인증을 받은 뒤 기존 B Corp 기업과 시민단체 일부가 공개적으로 문제를 제기했습니다. 대기업의 공급망·노동·환경 논란을 충분히 반영하지 못한 채 인증을 허용하면 B Corp가 ‘그린워싱’ 수단으로 이용될 수 있다는 비판이었습니다. B Lab도 이런 논쟁이 커지자 인증체계를 개편했고, 2025년 새 기준을 발표한 뒤 2026년부터 더 엄격한 최소요건과 제3자 감사를 도입하고 있습니다.</p>
          <p className="article-copy article-copy-long">BrewDog 사례는 반대 방향의 교훈도 줍니다. 회사가 직원 처우와 조직문화 문제로 거센 비판을 받은 뒤 B Corp 지위를 잃었습니다. 인증이 영구적인 면허가 아니라 기업 행동에 따라 회수될 수 있어야 신뢰가 유지된다는 점을 보여줍니다.</p>
        </section>

        <section className="article-section article-section-long reading-column">
          <h2 className="article-section-title">4. 한국에 적용한다면 — ‘사회적기업’보다 ‘사회적 성과’를 열어라</h2>
          <p className="article-copy article-copy-long">한국이 B Corp에서 배울 핵심은 B Corp 인증 자체를 정부제도로 복제하는 것이 아닙니다. 오히려 여러 민간 평가기관과 시민단체, 소비자단체, 투자기관이 서로 다른 기준을 만들고 경쟁하도록 하는 것이 중요합니다. 정부가 하나의 사회적 가치 기준을 독점하면 다시 국가 선별형 구조로 돌아가기 때문입니다.</p>
          <p className="article-copy article-copy-long">공공조달도 기업의 법적 신분을 우대하기보다 구체적인 성과를 평가하는 방식으로 바꿀 수 있습니다. 예를 들어 장애인 고용, 지역고용, 탄소감축, 이용자 만족도처럼 계약 목적과 직접 관련된 성과를 모든 참여기업에 동일한 기준으로 평가한다면 일반 중소기업과 사회적기업이 같은 경기장에서 경쟁할 수 있습니다.</p>
          <p className="article-copy article-copy-long">지원방식도 조직에 직접 돈을 주는 방식에서 시민의 선택을 돕는 방식으로 이동할 수 있습니다. 사회적 성과 정보를 공개하고, 시민과 민간투자자가 검증된 기업에 투자하기 쉽게 하며, 허위·과장된 사회적 가치 표시를 엄격히 규제하는 것입니다. 국가는 특정 기업의 후견인이 아니라 신뢰할 수 있는 정보와 공정한 규칙을 제공하는 심판이 됩니다.</p>
        </section>

        <section className="article-section article-section-long reading-column">
          <h2 className="article-section-title">5. 씨앗이 제안하는 원칙</h2>
          <div className="mt-5 space-y-3">
            {[
              "국가는 ‘좋은 기업’을 지정하기보다 모든 기업이 사회적 성과를 증명할 수 있는 공통 규칙을 만들 것",
              "정부 인증 하나에 보조금·금융·공공조달 혜택을 중첩해서 연결하지 않을 것",
              "민간 인증기관도 평가기준·수수료·이해관계·인증 취소 절차를 투명하게 공개할 것",
              "공공조달에서는 기업의 신분보다 가격·품질·계약 목적과 직접 연결된 사회적 성과를 평가할 것",
              "최종적인 보상은 정부의 우대보다 소비자·투자자·지역사회의 선택에서 나오도록 할 것",
            ].map((item) => <div key={item} className="flex gap-3 rounded-lg border border-green-deep/10 bg-white p-4 text-[16px] leading-7 text-charcoal/75"><span className="font-serif text-gold">●</span>{item}</div>)}
          </div>
        </section>

        <blockquote className="mt-9 rounded-xl bg-green-deep p-6 text-lg font-bold leading-8 text-white sm:p-7 sm:text-xl">“국가가 좋은 기업을 골라주는 사회보다 시민이 좋은 기업을 골라낼 수 있는 사회가 더 건강합니다.”</blockquote>

        <section className="mt-9 border-t border-green-deep/10 pt-6">
          <h2 className="text-xl font-extrabold text-navy">자료 출처 및 확인 기준</h2>
          <ol className="mt-4 space-y-2">{sources.map((source, index) => <li key={source.url} className="flex gap-3 text-sm leading-6"><span className="font-serif text-gold">{index + 1}.</span><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-charcoal/65 underline decoration-green-deep/20 underline-offset-4 hover:text-green-deep">{source.label}<ExternalLink size={12} /></a></li>)}</ol>
          <p className="mt-4 text-xs leading-6 text-charcoal/45">확인 기준: 2026년 9월 11일 현재 공개된 B Lab 공식자료와 관련 보도를 대조했습니다. B Corp는 정부가 부여하는 법적 기업형태가 아니라 민간 비영리기관 B Lab의 인증이며, 국가별 법제와 공공조달 제도는 별도로 작동합니다.</p>
        </section>

        <div className="mt-8"><Link to="/briefings/social-solidarity-economy-youth-mall-lessons" className="button-secondary"><ArrowLeft size={16} /> 시민브리핑으로 돌아가기</Link></div>
      </div>
    </article>
  );
}
