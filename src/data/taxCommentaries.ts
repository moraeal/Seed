import { taxExpenditureCapCommentary } from "./taxExpenditureCapCommentary";

export type TaxCommentaryLanguage = "ko" | "en";

type LocalizedText = { ko: string; en: string };

type CommentaryEdition = {
  title: string;
  subtitle: string;
  summary: string;
  keyPoints: string[];
  heroAlt: string;
  heroCaption: string;
  sections: { title: string; paragraphs: string[]; quote?: string }[];
  chart: {
    title: string;
    description: string;
    headers: string[];
    rows: string[][];
    note: string;
    afterSection: number;
  };
  sourceNote: string;
};

export type TaxCommentary = {
  slug: string;
  relatedPolicySlug: string;
  date: string;
  readMinutes: number;
  heroSrc: string;
  bodyImage?: {
    src: string;
    afterSection: number;
    alt: LocalizedText;
    caption: LocalizedText;
  };
  sources: { label: LocalizedText; url: string }[];
  relatedReading?: Record<TaxCommentaryLanguage, {
    href: string;
    title: string;
    relationship: string;
    reason: string;
    listHref: string;
    listLabel: string;
  }>;
  editions: Record<TaxCommentaryLanguage, CommentaryEdition>;
};

export const taxCommentaries: TaxCommentary[] = [
taxExpenditureCapCommentary,
{
  slug: "content-support-one-ledger",
  relatedPolicySlug: "content-strategy-special-account-rebate-bill",
  date: "2026-09-19",
  readMinutes: 8,
  heroSrc: "images/tax/content-support-one-ledger.webp",
  sources: [
    {
      label: { ko: "국회 의안 제2221473호 — 콘텐츠산업의 국가전략산업 육성에 관한 특별법안", en: "National Assembly Bill 2221473 — Special Act on Developing Content as a National Strategic Industry" },
      url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221473/detailRP?yType=I",
    },
    {
      label: { ko: "국회 의안 제2221472호 — 국가재정법 일부개정법률안", en: "National Assembly Bill 2221472 — National Finance Act amendment" },
      url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221472/detailRP?yType=I",
    },
    {
      label: { ko: "정부 정책브리핑 — 1조 원대 K-콘텐츠 펀드와 제작비 최대 30% 세액공제", en: "Korean government briefing — KRW 1 trillion content fund and production tax credits of up to 30%" },
      url: "https://www.korea.kr/news/policyNewsView.do?newsId=148926961",
    },
    {
      label: { ko: "머니투데이 — 2026년 콘텐츠 정책펀드 7,300억 원 조성", en: "MoneyToday — KRW 730 billion content policy fund for 2026" },
      url: "https://www.mt.co.kr/culture/2026/01/23/2026012308440338275",
    },
    {
      label: { ko: "전자신문 — 2027년 K콘텐츠 예산안 1조 7,719억 원", en: "Electronic Times — KRW 1.7719 trillion proposed K-content budget for 2027" },
      url: "https://www.etnews.com/20260904000133",
    },
  ],
  editions: {
    ko: {
      title: "K콘텐츠 지원, 이름은 네 개인데 계산서는 하나다",
      subtitle: "특별회계·현금환급·세액공제·부담금 감면을 한 장부에서 봐야 합니다",
      summary: "정부는 2027년 K콘텐츠 예산안에 1조 7,719억 원을 편성했고, 2026년에는 7,300억 원 규모의 콘텐츠 정책펀드를 조성하고 있습니다. 여기에 별도 특별회계와 제작비 현금환급, 세제·정책금융 우대, 부담금 감면을 묶은 법안이 발의됐습니다. 지원의 필요성은 설명됐지만 기존 사업과의 중복, 연간 총비용, 환급률과 일몰은 보이지 않습니다. 이름은 달라도 시민이 확인할 계산서는 하나여야 합니다.",
      keyPoints: [
        "2027년 K콘텐츠 예산안 1조 7,719억 원과 2026년 7,300억 원 정책펀드가 이미 추진되는 가운데 별도의 특별회계 신설안이 나왔습니다.",
        "현금환급은 지출, 세액공제는 세수 감소, 정책금융은 위험 부담, 부담금 감면은 공적 수입 감소이므로 하나의 통합 비용표가 필요합니다.",
        "외국 제작사 환급과 OTT 상생협력금에는 국내 고용·IP 귀속·회수 조건, 자발성, 구독료 전가 여부를 확인할 장치가 필요합니다.",
      ],
      heroAlt: "콘텐츠 제작 현장의 카메라 뒤에서 영수증과 동전, 여러 재정 경로가 하나의 공공 장부로 모이는 세금감시 이미지",
      heroCaption: "콘텐츠 지원은 예산·펀드·세액공제·현금환급·부담금 감면으로 나뉩니다. 이름이 달라도 시민에게 돌아오는 재정비용은 한 장부에서 확인해야 합니다.",
      sections: [
        {
          title: "1조 7,719억 원 뒤에 또 하나의 특별회계가 옵니다",
          paragraphs: [
            "정부는 2027년 K콘텐츠 산업 예산안에 1조 7,719억 원을 편성했습니다. 2026년에는 역대 최대인 7,300억 원 규모의 콘텐츠 정책펀드를 조성하고 있습니다. 2024년에는 2028년까지 1조 200억 원 규모의 K-콘텐츠·미디어 전략펀드를 만들고 영상콘텐츠 제작비 세액공제를 최대 30%까지 확대하겠다고 발표했습니다.",
            "그런데 9월 18일 국회에는 콘텐츠전략산업발전특별회계를 새로 설치하는 법안이 발의됐습니다. 특별회계뿐만이 아닙니다. 국내 제작비 현금환급, 세제와 정책금융 우대, 지식재산권 투자펀드, 글로벌 공동제작 펀드, 지역방송 부담금 경감까지 한 법안에 담겼습니다.",
            "이 숫자들을 그대로 더해 전체 지원액이라고 부를 수는 없습니다. 연도가 다르고, 펀드에는 민간 자금이 들어가며, 예산안과 정책펀드 사이에 중복되는 사업이 있을 수 있습니다. 바로 그래서 통합 비용표가 필요합니다. 지금 공개된 자료만으로는 기존 사업을 새 특별회계로 옮기는 것인지, 기존 지원 위에 재정을 더 얹는 것인지 구분하기 어렵습니다.",
          ],
          quote: "지원의 이름은 여러 개인데, 중복을 걷어낸 계산서는 아직 없습니다.",
        },
        {
          title: "콘텐츠산업을 키워야 한다는 이유는 분명합니다",
          paragraphs: [
            "국내 제작사가 세계 시장에서 성공하고도 지식재산권과 후속 수익을 글로벌 플랫폼에 넘기는 구조는 개선할 필요가 있습니다. 영국과 캐나다를 비롯한 여러 국가가 제작비 환급과 세제 혜택으로 대형 프로젝트를 유치하는 상황에서 한국만 아무런 정책 수단 없이 경쟁하기도 어렵습니다.",
            "콘텐츠는 제작 단계에서 많은 자금이 들어가지만 흥행 여부는 불확실합니다. 담보가 부족한 제작사는 민간 금융만으로 장기 자금을 조달하기 어렵습니다. 국내 제작사의 협상력을 높이고 IP를 국내에 남기겠다는 법안의 목적에는 현실적인 근거가 있습니다.",
            "그러나 산업의 가치가 높다는 사실과 모든 지원 수단이 정당하다는 결론은 같은 말이 아닙니다. 필요성이 큰 산업일수록 지원 경쟁도 커지고, 각 부처와 기관이 만든 사업은 쉽게 사라지지 않습니다. 산업을 키우는 돈과 지원체계를 유지하는 돈을 구분하지 않으면 좋은 목적이 재정의 빈칸을 가립니다.",
          ],
        },
        {
          title: "현금환급은 지출이고 세액공제는 보이지 않는 지출입니다",
          paragraphs: [
            "법안은 국내에서 제작하거나 투자하는 외국 사업자와 일정 규모 이상의 국내 사업자에게 적격지출의 기본환급금과 추가환급을 지급할 수 있도록 합니다. 정부가 세금을 덜 걷는 세액공제와 달리 현금환급은 예산에서 직접 돈이 나갑니다. 둘 다 기업의 제작비를 낮추지만 국가 장부에 나타나는 방식은 다릅니다.",
            "정책금융 우대는 당장 보조금으로 잡히지 않아도 금리 우대와 손실 위험을 공공부문이 부담할 수 있습니다. 지역방송 부담금 감면은 지원받는 기업의 비용을 줄이는 대신 해당 부담금 수입을 감소시킵니다. 특별회계는 특정 사업이 매년 일반 예산의 우선순위 경쟁에서 비켜나 안정적인 재원을 요구할 통로가 됩니다.",
            "지출, 세수 감소, 금융 위험, 부담금 감면을 서로 다른 자료에 흩어 놓으면 각 숫자는 작아 보입니다. 하지만 시민이 부담할 전체 비용은 줄어들지 않습니다. 지원 패키지는 홍보의 단위일 수는 있어도 회계의 단위는 아닙니다.",
          ],
          quote: "현금환급은 지출이고, 세액공제와 부담금 감면은 잘 보이지 않는 재정비용입니다.",
        },
        {
          title: "외국 제작사를 지원한 뒤 한국에 무엇이 남습니까",
          paragraphs: [
            "해외 제작사를 국내로 유치하면 촬영장과 장비, 숙박, 운송, 후반작업에서 일자리와 매출이 생길 수 있습니다. 지역의 제작 기반을 키우고 한국 인력을 국제 프로젝트에 연결하는 효과도 기대할 수 있습니다.",
            "그 효과가 자동으로 생기는 것은 아닙니다. 환급률이 높고 국내 고용이나 기술 이전 조건이 약하면 해외 제작사가 한국에서 비용만 지출한 뒤 IP와 수익을 모두 가져갈 수 있습니다. 대형 국내 제작사가 기존에 하던 지출을 환급 대상으로 바꿔 받는다면 새로운 투자보다 기존 비용의 보전에 가까워질 수도 있습니다.",
            "환급률과 작품별 상한, 국내 인력 고용 비율, 중소 제작사 참여, IP의 국내 보유와 수익 환류 조건이 먼저 공개돼야 합니다. 약속한 고용과 투자가 이뤄지지 않을 때 지원금을 돌려받는 환수조항도 필요합니다. 해외 제작 유치 건수보다 지원금 1원당 국내에 남은 임금·세금·IP 수익을 확인해야 합니다.",
          ],
        },
        {
          title: "자발적 협력금이 거절하기 어려운 준조세가 되지 않는가",
          paragraphs: [
            "법안은 OTT 사업자가 자발적 협약에 따라 상생투자협력금을 내고 인센티브를 받을 수 있는 근거를 둡니다. 국내 콘텐츠 생태계에 기여하는 플랫폼을 우대하겠다는 취지입니다.",
            "정부가 규제 완화와 사업상 혜택을 결정하면서 동시에 협력금 납부를 권한다면 ‘자발적’이라는 말만으로 충분하지 않습니다. 내지 않았을 때 불이익이 없다는 점, 금액 산정과 사용처, 기금 운용 주체와 수혜기업 선정 과정이 공개돼야 실제 자발성을 확인할 수 있습니다.",
            "기업이 부담한 비용은 구독료와 광고비, 제작 단가에 반영될 수 있습니다. 협력금이 좋은 이름을 가진 준조세가 되면 최종 계산서는 플랫폼이 아니라 이용자와 제작 현장에 돌아갑니다. 상생이라는 목적도 거절할 자유와 공개된 회계 위에서만 신뢰를 얻을 수 있습니다.",
          ],
        },
        {
          title: "정부가 문화산업의 승자를 고르는 권한도 커집니다",
          paragraphs: [
            "새 콘텐츠산업전략위원회는 기본계획과 부처 간 정책조정, 재원 배분을 심의·의결하게 됩니다. 전략콘텐츠를 지정하고 계약 개선이나 IP 국내 귀속 조건에 따라 금융·세제상 우대를 달리할 수 있는 길도 열립니다.",
            "공공 지원에는 선정이 필요합니다. 그렇더라도 어떤 장르와 기업, 어떤 계약 구조를 전략적으로 우대할지 정부가 정하기 시작하면 시장의 실패를 보완하는 지원과 정부가 승자를 고르는 산업정책의 경계가 흐려집니다. 문화산업에서는 정치적 선호나 유행하는 정책 언어가 지원 기준에 들어올 위험도 가볍게 볼 수 없습니다.",
            "심사위원 명단, 이해충돌 방지, 평가표, 기업별 수혜액과 탈락 사유를 공개해야 합니다. 정부가 고른 작품의 흥행만 알릴 것이 아니라 지원받지 못한 기업과의 고용·수출·민간투자 성과를 같은 기준으로 비교해야 합니다.",
          ],
        },
        {
          title: "씨앗은 하나의 장부와 하나의 종료 기준을 보겠습니다",
          paragraphs: [
            "첫째, 기존 지원과 신규 사업을 연결한 통합표가 필요합니다. 2027년 예산안, 2026년 정책펀드, 기존 전략펀드, 제작비 세액공제와 새 특별회계 사이의 포함·중복 관계를 사업별로 밝혀야 합니다. 서로 다른 연도와 민간 출자액을 섞어 성과를 부풀리지 않고, 순수한 국고 지출과 조세지출을 따로 표시해야 합니다.",
            "둘째, 기업별 지원과 성과를 연결해야 합니다. 현금환급액, 세액공제액, 정책금융 우대, 부담금 감면을 합친 기업별 총수혜액과 국내 고용·민간투자·수출·IP 수익을 함께 공개해야 합니다. 실패한 사업과 회수하지 못한 투자도 성과표에서 빠져서는 안 됩니다.",
            "셋째, 일몰과 환수 기준을 법에 남겨야 합니다. 몇 년 뒤 어떤 지표로 지원을 줄이거나 끝낼지, 고용과 국내 지출 약속을 지키지 못하면 어떻게 환수할지 정해야 합니다. 특별회계는 한 번 만들어지면 사업의 필요성보다 회계의 존속이 앞서기 쉽습니다.",
            "K콘텐츠의 성공은 정부가 만든 작품 수가 아니라 시민과 기업이 자유롭게 도전해 세계의 선택을 받은 결과로 평가해야 합니다. 지원이 필요할 수 있습니다. 그러나 이름을 여러 개 붙여 비용을 흩어 놓을 이유는 없습니다. 이름은 네 개여도 시민이 받아볼 계산서는 하나여야 합니다.",
          ],
        },
      ],
      chart: {
        title: "K콘텐츠 지원, 서로 다른 이름과 같은 재정 질문",
        description: "기존에 추진 중인 지원과 새 법안의 수단을 단순 합산하지 않고, 각각 어떤 비용으로 남는지 구분했습니다.",
        headers: ["지원 수단", "확인된 내용", "재정에 남는 방식", "추가로 공개할 항목"],
        rows: [
          ["정부 예산", "2027년 K콘텐츠 예산안 1조 7,719억 원", "직접 재정지출", "신규·기존 사업 구분과 집행 성과"],
          ["정책펀드", "2026년 콘텐츠 정책펀드 7,300억 원", "정부 출자와 민간 출자·투자 위험", "순수 국고액, 회수액, 손실과 민간 중복"],
          ["세액공제", "영상콘텐츠 제작비 최대 30% 공제", "걷지 않은 세금인 조세지출", "기업별 감면액과 추가 투자 효과"],
          ["새 법안", "특별회계·현금환급·금융 우대·부담금 감면", "지출·세수 감소·위험 부담·공적 수입 감소", "총액, 환급률, 상한, 재원, 일몰"],
        ],
        note: "자료: 국회 의안 제2221473호·제2221472호, 정부 정책브리핑 2024년 3월 13일, 머니투데이 2026년 1월 23일, 전자신문 2026년 9월 4일. 각 수치는 연도와 구성, 정부·민간 출자 범위가 달라 단순 합산할 수 없습니다.",
        afterSection: 0,
      },
      sourceNote: "이 글은 2026년 9월 18일 발의된 국회 의안 제2221473호와 제2221472호의 제안이유·주요내용, 정부의 2024년 미디어·콘텐츠 산업융합 발전방안, 2026년 콘텐츠 정책펀드 발표와 2027년 문화체육관광부 예산안 보도를 기준으로 작성했습니다. 2026년 9월 19일 현재 의안 원문 첨부파일과 비용추계서는 공개되지 않았고, 새 특별회계의 재원·현금환급률·연간 상한·일몰도 확인되지 않습니다. 펀드와 예산안 수치는 연도 및 민간 출자 포함 범위가 달라 서로 단순 합산하지 않았습니다. 씨앗의 소리는 비용추계서, 상임위원회 검토보고서, 시행령상 환급 기준과 기업별 수혜·성과 공개 여부를 계속 확인합니다.",
    },
    en: {
      title: "Four names for content support, one bill for the public",
      subtitle: "Special accounts, cash rebates, tax credits and levy relief belong on one fiscal ledger",
      summary: "South Korea's proposed 2027 budget allocates KRW 1.7719 trillion to the content industry, while a KRW 730 billion policy fund is being formed in 2026. A new bill would add a dedicated special account, production cash rebates, tax and policy-finance preferences, and levy relief. The industrial case is clear, but the overlap with existing programs, annual public cost, rebate rates and sunset rules are not. Different labels should still produce one bill that taxpayers can inspect.",
      keyPoints: [
        "A new special account is proposed while a KRW 1.7719 trillion 2027 budget plan and a KRW 730 billion 2026 content policy fund are already in motion.",
        "Cash rebates are spending; tax credits are forgone revenue; policy finance carries public risk; and levy relief reduces public receipts. They need one consolidated cost table.",
        "Rebates for foreign productions and OTT cooperation payments need enforceable rules on Korean jobs, IP retention, clawbacks, voluntariness and consumer pass-through.",
      ],
      heroAlt: "A Korean content-production set where receipts, coins and several funding channels converge on a single public ledger",
      heroCaption: "Content support is divided among budgets, funds, tax credits, cash rebates and levy relief. Different labels do not remove the need for one public fiscal ledger.",
      sections: [
        {
          title: "Another special account follows a KRW 1.7719 trillion budget plan",
          paragraphs: [
            "South Korea's proposed 2027 budget allocates KRW 1.7719 trillion to the content industry. In 2026, the government and private investors are forming a record KRW 730 billion content policy fund. In 2024, the government announced a KRW 1.02 trillion content-and-media strategy fund through 2028 and production tax credits of up to 30%.",
            "A bill introduced on September 18 would now create a Content Strategic Industry Development Special Account. It also authorizes cash rebates for eligible Korean production spending, tax and policy-finance preferences, IP and international co-production funds, and levy relief for regional broadcasters.",
            "These figures cannot simply be added. They cover different years, some funds include private capital, and budget programs may overlap with policy funds. That is precisely why a consolidated table is needed. The public materials do not show whether the new account reorganizes existing support or adds another permanent layer on top of it.",
          ],
          quote: "Support has many labels. A cost table that removes overlap is still missing.",
        },
        {
          title: "The industrial case is real",
          paragraphs: [
            "Korean producers can achieve global success while surrendering intellectual-property rights and downstream revenue to international platforms. Major production hubs, including the United Kingdom and Canada, use rebates and tax incentives to compete for large projects. Korea cannot ignore that competition.",
            "Content production requires substantial capital before demand is known, and smaller producers often lack the collateral for long-term private financing. The bill therefore addresses real problems: bargaining power, domestic IP ownership and investment capacity.",
            "But a valuable industry does not make every support instrument self-justifying. The more attractive the policy goal, the easier it is for overlapping programs and administering institutions to survive without a common test of cost and results.",
          ],
        },
        {
          title: "A rebate is spending; a credit is spending made less visible",
          paragraphs: [
            "The bill would allow base and additional cash rebates for eligible Korean spending by foreign producers and qualifying domestic producers or investors. Unlike a tax credit, a cash rebate is paid directly from the budget. Both lower production costs, but they appear differently in public accounts.",
            "Preferential policy finance can shift funding costs and downside risk to the public sector. Levy relief for regional broadcasters lowers a company's burden by reducing a public receipt. A special account gives a policy field a more stable claim on future revenue, partly insulating it from the annual competition of the general budget.",
            "When outlays, forgone revenue, financial risk and levy relief are placed in separate documents, each number looks smaller. The total public cost does not. A support package may be a communications unit; it is not an accounting unit.",
          ],
          quote: "Cash rebates are spending. Tax credits and levy relief are fiscal costs that are easier to overlook.",
        },
        {
          title: "What remains in Korea after a foreign production leaves?",
          paragraphs: [
            "Attracting overseas productions can generate local spending on studios, equipment, accommodation, transport and post-production. It can also connect Korean workers and suppliers to international projects.",
            "Those benefits are not automatic. A generous rebate with weak employment or technology-transfer conditions may subsidize spending while leaving IP and long-term revenue abroad. Support for activity that would have occurred anyway can become compensation for existing costs rather than new investment.",
            "The rebate rate, project cap, Korean employment share, participation by smaller suppliers, IP conditions and revenue retention should be published in advance. Clawbacks are needed when promised investment or jobs do not materialize. The meaningful metric is not the number of productions attracted but the wages, tax receipts and IP income retained in Korea per won of support.",
          ],
        },
        {
          title: "A voluntary OTT payment can still become a quasi-levy",
          paragraphs: [
            "The bill would authorize incentives for streaming platforms that join voluntary agreements and make content-cooperation payments. The stated goal is to encourage platforms to contribute to the domestic production ecosystem.",
            "Voluntary language is not enough when the same government controls regulatory relief and business advantages. Genuine voluntariness requires proof that non-payment carries no disadvantage, as well as disclosure of the formula, use of funds, administrator and recipient-selection process.",
            "Platforms may pass the cost into subscription prices, advertising or production terms. If a well-named cooperation payment operates like a levy, the final bill reaches users and producers. Partnership earns trust only when refusal remains possible and the account is public.",
          ],
        },
        {
          title: "The bill also expands government's power to pick winners",
          paragraphs: [
            "A new Content Industry Strategy Committee would decide basic plans, inter-ministerial coordination and resource allocation. Strategic-content designation and contract or IP conditions could influence access to tax and financial preferences.",
            "Public support inevitably requires selection. Yet the boundary between correcting a market failure and choosing favored companies, genres or contract structures becomes blurred when government controls both the label and the money. Cultural production adds a further concern: fashionable policy language or political preferences should not become hidden eligibility tests.",
            "The public should see reviewer names, conflict safeguards, scoring rules, recipient-level benefits and reasons for rejection. Performance must compare subsidized recipients with similar unsupported firms on employment, exports and private investment—not merely celebrate the hits chosen by government.",
          ],
        },
        {
          title: "Seed Voice will follow one ledger and one exit rule",
          paragraphs: [
            "First, the government and National Assembly should map the 2027 budget plan, 2026 policy fund, earlier strategy fund, production tax credits and the proposed special account. The table should distinguish new from existing programs, remove overlap and separate pure public money from private capital.",
            "Second, support and results should be linked by recipient. Cash rebates, tax credits, preferential finance and levy relief should be combined into a recipient's total benefit and compared with Korean employment, private investment, exports and IP income. Failed projects and unrecovered investment belong in the same record.",
            "Third, the law needs sunsets and clawbacks. It should say when support will be reduced or ended and how money will be recovered when spending or employment commitments are missed. Once created, a special account can outlive the problem it was meant to solve.",
            "Korean content succeeds when citizens and firms are free to create, invest and win audiences around the world—not when government can report how many projects it selected. Support may be justified. Scattering its cost across multiple labels is not. Four names should still produce one bill for the public.",
          ],
        },
      ],
      chart: {
        title: "Different support labels, the same fiscal questions",
        description: "Existing measures and the new bill are separated by how their cost appears. The figures should not be mechanically added.",
        headers: ["Instrument", "Confirmed measure", "How the cost appears", "Disclosure still needed"],
        rows: [
          ["Budget", "KRW 1.7719tn proposed for content in 2027", "Direct public spending", "New versus existing programs and execution results"],
          ["Policy fund", "KRW 730bn content policy fund in 2026", "Public and private capital plus investment risk", "Net public contribution, recoveries, losses and overlap"],
          ["Tax credit", "Up to 30% of eligible production spending", "Forgone tax revenue", "Recipient-level relief and additional investment created"],
          ["New bill", "Special account, cash rebates, finance preferences and levy relief", "Outlays, forgone revenue, risk and lower public receipts", "Total, rates, caps, funding source and sunset"],
        ],
        note: "Sources: National Assembly Bills 2221473 and 2221472; Korean government briefing dated March 13, 2024; MoneyToday dated January 23, 2026; and Electronic Times dated September 4, 2026. The figures cover different years and funding compositions, including private capital, and cannot be added together mechanically.",
        afterSection: 0,
      },
      sourceNote: "This commentary is based on the official summaries of National Assembly Bills 2221473 and 2221472, introduced on September 18, 2026; the government's 2024 media-and-content strategy; the 2026 content policy fund announcement; and reporting on the Ministry of Culture's proposed 2027 budget. As of September 19, 2026, the full bill attachment and a fiscal-cost estimate were not available on the public legislation page. The proposed special account's funding source, rebate rates, annual caps and sunset were also unspecified. Because the budget and fund figures cover different years and may include private capital or overlapping programs, this article does not add them together. Seed Voice will track the official cost estimate, committee review, implementing rebate rules and recipient-level disclosure of benefits and outcomes.",
    },
  },
},
{
  slug: "fuel-tax-relief-needs-an-exit-rule",
  relatedPolicySlug: "fuel-tax-cut-extended-november-2026",
  date: "2026-09-18",
  readMinutes: 7,
  heroSrc: "images/monitoring/fuel-tax-extension-2026-hero.webp",
  sources: [
    {
      label: { ko: "재정경제부 — 교통·에너지·환경세법 시행령 입법예고", en: "Ministry of Economy and Finance — notice on the Transportation, Energy and Environment Tax decree" },
      url: "https://mofe.go.kr/lw/lap/detailTbPrvntcView.do?menuNo=7050300&searchBbsId1=MOSFBBS_000000000055&searchNttId1=MOSF_000000000079385",
    },
    {
      label: { ko: "재정경제부 — 개별소비세법 시행령 입법예고", en: "Ministry of Economy and Finance — notice on the Individual Consumption Tax decree" },
      url: "https://mofe.go.kr/lw/lap/detailTbPrvntcView.do?menuNo=7050300&searchBbsId1=MOSFBBS_000000000055&searchNttId1=MOSF_000000000079384",
    },
    {
      label: { ko: "매일경제 — 유류세 인하 11월 말까지 연장", en: "Maeil Business — fuel-tax cuts extended through November" },
      url: "https://www.mk.co.kr/news/economy/12156047",
    },
    {
      label: { ko: "산업통상부 — 석유 최고가격제 손실보전 재정지원 설명자료", en: "Ministry of Trade, Industry and Resources — official explanation of fiscal compensation under the petroleum price ceiling" },
      url: "https://www.motir.go.kr/kor/article/ATCLe0854704d/172198/view",
    },
    {
      label: { ko: "SBS Biz — 출구전략 못 찾는 석유 최고가격제", en: "SBS Biz — Korea struggles to find an exit from its petroleum price ceiling" },
      url: "https://biz.sbs.co.kr/article/20000334518",
    },
  ],
  relatedReading: {
    ko: {
      href: "/news/fuel-price-cap-tax-bill",
      title: "기름값 잡았다지만—4조 2천억 청구서는 누가 내나",
      relationship: "같은 기름값, 또 하나의 재정비용",
      reason: "유류세 인하와 별도로 운영되는 석유 최고가격제가 정유사 손실을 어떻게 국고 부담으로 옮기는지 설명합니다.",
      listHref: "/news",
      listLabel: "핫이슈 전체 보기",
    },
    en: {
      href: "/news/fuel-price-cap-tax-bill",
      title: "Fuel Prices Were Capped—Who Pays the KRW 4.2 Trillion Bill?",
      relationship: "THE OTHER FISCAL COST BEHIND FUEL PRICES",
      reason: "This related article explains how Korea's separate petroleum price ceiling transfers verified refinery losses to the public budget.",
      listHref: "/news",
      listLabel: "All Hot Issues",
    },
  },
  editions: {
    ko: {
      title: "기름값은 낮췄지만, 감세 비용은 보이지 않습니다",
      subtitle: "유류세 인하가 필요해도 두 달짜리 연장에는 세수와 종료 기준이 따라야 합니다",
      summary: "정부가 휘발유·경유·LPG 부탄의 유류세 인하를 2026년 11월 말까지 두 달 더 연장합니다. 운전자와 운송업의 부담을 덜어주는 조치입니다. 그러나 이번 연장으로 줄어드는 세수는 공개되지 않았고, 별도로 운영되는 석유 최고가격제의 정유사 손실은 국고가 보전합니다. 주유소에서 낮아진 가격과 국가 장부에 남는 비용을 함께 공개해야 합니다.",
      keyPoints: [
        "휘발유 15%, 경유·LPG 부탄 25%의 인하율이 11월 30일까지 유지돼 운전자와 운송업의 단기 부담을 낮춥니다.",
        "리터당 세액은 인하 전보다 휘발유 122원, 경유 145원, 부탄 51원 낮지만 실제 주유가격 반영률은 따로 확인해야 합니다.",
        "유류세는 덜 걷고 최고가격제 손실은 국고로 보전하는 만큼, 두 제도의 전체 재정비용과 각각의 종료 기준을 함께 공개해야 합니다.",
      ],
      heroAlt: "주유기에서 길게 이어진 영수증 뒤로 화물차와 LPG 택시가 이동하는 유류세 감시 이미지",
      heroCaption: "주유기 앞에서는 세금 인하가 보입니다. 국가 재정에서는 줄어드는 세수가 잘 보이지 않습니다. 유류비 부담 완화와 감세 비용은 같은 장부에서 함께 확인해야 합니다.",
      sections: [
        {
          title: "휘발유 122원, 경유 145원, 부탄 51원",
          paragraphs: [
            "정부는 9월 말 끝날 예정이던 유류세 한시 인하를 2026년 11월 30일까지 두 달 더 연장합니다. 휘발유는 15%, 경유와 LPG 부탄은 25%의 인하율이 유지됩니다. 부가가치세를 포함한 리터당 세액은 휘발유 698원, 경유 436원, 부탄 152원입니다.",
            "인하 전과 비교하면 휘발유는 리터당 122원, 경유는 145원, 부탄은 51원의 세 부담이 줄어듭니다. 자동차로 출퇴근하는 시민에게도 도움이 되지만 효과가 더 직접적인 곳은 화물·물류·택시처럼 연료비가 곧 영업비용이 되는 현장입니다.",
            "중동 정세 불안과 높은 유류비에 대응해 당장의 부담을 낮추겠다는 정부 설명에는 현실적인 이유가 있습니다. 세금은 시민의 삶을 지탱해야지, 생활과 생업을 압박하는 숫자로만 남아서는 곤란합니다.",
          ],
        },
        {
          title: "부담 완화와 세수 감소는 동시에 일어납니다",
          paragraphs: [
            "유류세를 내리면 시민과 기업의 부담은 줄어듭니다. 동시에 정부가 걷는 세금도 줄어듭니다. 두 결과는 서로 다른 일이 아니라 같은 정책의 앞면과 뒷면입니다.",
            "그런데 이번 입법예고 화면에서는 두 달 연장으로 줄어드는 세수 규모를 바로 확인하기 어렵습니다. 얼마를 덜 걷는지 알아야 감세가 필요한 상황이었는지, 다른 지출 조정 없이 감당할 수 있는지, 혜택과 비용이 누구에게 돌아가는지를 함께 판단할 수 있습니다.",
            "감세 자체를 재정 무책임으로 볼 이유는 없습니다. 세금을 줄이는 것은 시민의 돈을 시민에게 남기는 선택이기도 합니다. 다만 그 선택이 책임 있는 정책이 되려면 정부도 포기하는 세수와 조정할 지출을 같은 표 위에 올려야 합니다.",
          ],
          quote: "기름값의 122원은 보이는데, 국가 장부에서 빠지는 금액은 보이지 않습니다.",
        },
        {
          title: "덜 걷는 세금 옆에서 국고 지출도 늘어납니다",
          paragraphs: [
            "유류세 인하분을 다른 세목으로 곧바로 다시 걷는 제도는 아닙니다. 다만 지금의 기름값 대책에는 별도의 석유 최고가격제도 함께 작동하고 있습니다. 정부가 정유사의 공급가격에 상한을 두고, 그 때문에 발생한 것으로 인정되는 손실을 국고에서 보전하는 제도입니다.",
            "정부는 손실보전을 위해 올해 목적예비비 4조 2천억 원을 편성했고, 내년도 예산안에도 약 1조 4천억 원을 반영했습니다. 두 금액 모두 정유사에 이미 지급된 돈이 아니라 손실보전에 대비한 예산입니다. 산업통상부는 정유사가 원가자료를 제출하면 정산위원회 심의를 거쳐 연내 지원금을 지급할 계획이라고 밝혔습니다.",
            "결국 시민이 주유소에서 덜 내는 동안 재정은 두 방향의 부담을 집니다. 한쪽에서는 유류세 수입이 줄고, 다른 한쪽에서는 최고가격제 손실보전 지출이 생깁니다. 두 제도는 법적 구조가 다르지만 국민의 장부에서는 함께 보아야 할 비용입니다.",
          ],
          quote: "주유소에서 줄어든 부담이 국가 장부에서 사라지는 것은 아닙니다.",
        },
        {
          title: "두 달짜리 연장은 예측 가능한 세제가 아닙니다",
          paragraphs: [
            "정부는 국제유가와 중동 정세를 보며 대응 여력을 남기기 위해 두 달만 연장한다고 설명합니다. 급변하는 상황에 탄력적으로 대응하려는 취지는 이해할 수 있습니다. 그러나 짧은 연장이 반복될수록 시민과 기업은 두 달 뒤 세금이 어떻게 바뀔지 다시 기다려야 합니다.",
            "화물운송 계약, 택시 운영비, 물류 단가와 기업의 비용 계획은 하루 단위로 바꾸기 어렵습니다. 세율이 오를 가능성과 다시 연장될 가능성을 동시에 열어두면 정부에는 재량이 남지만 현장에는 불확실성이 남습니다.",
            "국제유가, 원·달러 환율, 소비자물가 가운데 어떤 수치가 어느 수준에 이르면 인하율을 조정하거나 종료할지 기준을 미리 밝힐 수 있습니다. 세금은 예고 없이 움직이는 가격표가 아니라 시민과 기업이 계획을 세울 수 있는 규칙이어야 합니다.",
          ],
        },
        {
          title: "씨앗은 두 장부와 두 종료 기준을 계속 보겠습니다",
          paragraphs: [
            "첫째는 실제 주유가격입니다. 세금 인하분이 정유·도매·소매 단계를 거쳐 소비자가격에 얼마나 반영됐는지 유종별로 확인해야 합니다. 국제유가나 환율이 올랐다는 설명만으로는 세금 인하 효과가 어디에서 줄었는지 알 수 없습니다.",
            "둘째는 세수 감소액입니다. 두 달간 덜 걷는 교통·에너지·환경세와 개별소비세, 이에 연동되는 세입을 합쳐 공개해야 합니다. 최고가격제에서는 정유사별 청구액, 정산위원회 인정액과 실제 지급액을 차례로 확인해야 합니다. 올해 4조 2천억 원과 내년도 약 1조 4천억 원의 예산 규모가 아니라 정산 뒤 국고에서 실제로 나간 돈이 최종 비용입니다.",
            "마지막은 두 제도의 종료 기준입니다. 유류세 인하의 연장·축소·종료와 최고가격제의 유지·해제를 각각 어떤 수치로 결정하는지 공개해야 합니다. 세금은 덜 걷고 보전금은 지출하면서 가격표만 낮아졌다고 말한다면 시민은 절반의 장부만 보게 됩니다.",
            "당장의 부담을 낮추는 일과 장기 재정을 지키는 일은 서로 반대편에 있지 않습니다. 세금을 덜 걷는다면 그 이유와 비용을 밝히고, 다시 걷는다면 그 기준과 시점을 예고하면 됩니다. 부담 완화는 환영받을 수 있습니다. 불투명한 연장은 감시받아야 합니다.",
          ],
        },
      ],
      chart: {
        title: "유류세 인하 연장, 함께 봐야 할 네 가지",
        description: "정부가 밝힌 부담 완화 효과와 아직 공개가 필요한 비용·기준을 나란히 놓았습니다.",
        headers: ["확인 항목", "정부가 밝힌 내용", "아직 보이지 않는 내용", "시민·기업이 볼 지점"],
        rows: [
          ["적용 기간", "2026년 11월 30일까지 두 달 연장", "11월 말 이후의 조정 원칙", "계약과 비용 계획의 예측 가능성"],
          ["세 부담", "휘발유 15%, 경유·부탄 25% 인하", "주유가격에 실제 반영된 비율", "유종별·지역별 판매가격 변화"],
          ["재정 비용", "유류세 인하와 최고가격제 병행", "두 달간 줄어드는 세수·정유사 손실 실제 지급액", "덜 걷는 돈과 국고 지출을 합산해 비교"],
          ["종료 기준", "중동 정세와 대응 여력 고려", "유가·환율·물가의 객관적 기준", "연장·축소·종료 결정의 근거"],
        ],
        note: "출처: 재정경제부 2026년 9월 18일 시행령 개정안 입법예고, 산업통상부 2026년 9월 14일 설명자료, SBS Biz 2026년 9월 14일 보도. 리터당 세액은 부가가치세를 포함한 금액입니다. 올해 목적예비비 4조 2천억 원과 내년도 예산안 약 1조 4천억 원은 실제 지급액이 아니라 손실보전에 대비한 예산입니다.",
        afterSection: 0,
      },
      sourceNote: "이 글은 2026년 9월 18일 공개된 재정경제부의 교통·에너지·환경세법 시행령 및 개별소비세법 시행령 개정안 입법예고와 9월 14일 산업통상부 설명자료를 기준으로 작성했습니다. 유류세 인하와 석유 최고가격제는 서로 다른 제도이며, 유류세 감면액을 특정 세목으로 자동 환수하는 구조는 아닙니다. 다만 세수 감소와 최고가격제 손실보전은 모두 국민이 함께 확인해야 할 재정비용입니다. 씨앗의 소리는 세수 감소액, 정유사별 청구·인정·지급액과 두 제도의 종료 기준을 계속 확인합니다.",
    },
    en: {
      title: "Fuel bills fall, but the fiscal cost remains out of sight",
      subtitle: "Even justified relief needs a revenue estimate and a predictable exit rule",
      summary: "South Korea will extend temporary fuel-tax cuts on gasoline, diesel and LPG butane through November 2026. The measure offers real relief to drivers and transport businesses. Yet the revenue loss remains undisclosed, while a separate petroleum price ceiling compensates verified refinery losses from the public budget. The lower price at the pump and the cost left on the public ledger should be disclosed together.",
      keyPoints: [
        "The 15% gasoline cut and 25% diesel and LPG butane cuts continue through November 30, lowering near-term costs for drivers and transport businesses.",
        "Per-liter tax remains KRW 122 lower for gasoline, KRW 145 lower for diesel and KRW 51 lower for butane, but actual pass-through at the pump still needs verification.",
        "Because Korea is both collecting less fuel tax and financing losses under a separate price ceiling, citizens need the total fiscal cost and exit rules for both measures.",
      ],
      heroAlt: "Fuel pumps with a long receipt stretching toward a delivery truck and an LPG taxi",
      heroCaption: "The tax cut is visible at the pump. The revenue forgone in the public ledger is harder to see. Fuel-cost relief and its fiscal cost belong in the same account.",
      sections: [
        {
          title: "KRW 122 for gasoline, KRW 145 for diesel, KRW 51 for butane",
          paragraphs: [
            "The government will extend the temporary fuel-tax cuts, previously due to end in September, through November 30, 2026. The reduction remains 15% for gasoline and 25% for diesel and LPG butane. Including VAT, per-liter tax stays at KRW 698 for gasoline, KRW 436 for diesel and KRW 152 for butane.",
            "Compared with the pre-cut rates, the tax burden is KRW 122 lower per liter for gasoline, KRW 145 lower for diesel and KRW 51 lower for butane. Commuters benefit, but the most direct effect falls on freight, logistics and taxi operators for whom fuel is a core business cost.",
            "The government's case—easing pressure amid instability in the Middle East and elevated fuel costs—has practical force. Tax policy should support daily life and productive activity, not treat them as abstractions on a revenue sheet.",
          ],
        },
        {
          title: "Relief and lost revenue occur at the same time",
          paragraphs: [
            "Lower fuel tax reduces costs for households and businesses. It also reduces government revenue. These are not separate events but two sides of the same policy choice.",
            "The public notice page does not prominently state how much revenue the two-month extension will forgo. That figure is needed to assess whether the relief is proportionate, whether it can be absorbed without other spending adjustments and how benefits and costs are distributed.",
            "A tax cut is not inherently fiscally irresponsible. Leaving money with citizens can itself be a legitimate policy choice. Responsibility requires the government to place the forgone revenue and any spending adjustment on the same public ledger.",
          ],
          quote: "The KRW 122 at the pump is visible. The amount missing from the public ledger is not.",
        },
        {
          title: "Lower tax receipts sit beside higher public spending",
          paragraphs: [
            "The fuel-tax reduction is not automatically recouped through another named tax. But a separate petroleum price ceiling is operating alongside it. The government caps refinery supply prices and compensates losses recognized as resulting from that ceiling with public funds.",
            "The government allocated KRW 4.2 trillion in this year's contingency reserves and included about KRW 1.4 trillion in next year's budget proposal for compensation. Both are budget provisions, not money already paid to refiners. The Ministry of Trade, Industry and Resources says compensation will be paid after refiners submit cost data and a settlement committee reviews the claims.",
            "The public ledger therefore absorbs pressure in two directions while motorists pay less at the pump: fuel-tax receipts fall, and compensation spending arises under the price ceiling. The two policies are legally distinct, but their fiscal costs belong in the same public account.",
          ],
          quote: "A smaller bill at the pump does not make the cost disappear from the public ledger.",
        },
        {
          title: "A two-month extension is not a predictable tax rule",
          paragraphs: [
            "Officials say a short extension preserves flexibility while oil markets and regional tensions remain uncertain. The case for flexibility is understandable. But every short extension leaves households and businesses waiting to learn what their tax bill will be only weeks later.",
            "Freight contracts, taxi operations, logistics pricing and corporate budgets cannot be redesigned overnight. Keeping both another extension and a sudden increase open preserves discretion for government while transferring uncertainty to the field.",
            "The government can publish thresholds for international oil prices, the won-dollar exchange rate and consumer inflation that would trigger an adjustment or end the cuts. Tax should be a rule that citizens and firms can plan around, not a price tag that changes without a visible formula.",
          ],
        },
        {
          title: "Seed Voice will track both ledgers and both exit rules",
          paragraphs: [
            "First is the pump-price pass-through. The government should show how much of each fuel's tax reduction reaches retail prices after refining, wholesale and retail margins. General references to crude prices or exchange rates do not identify where the benefit was absorbed.",
            "Second is total forgone revenue, including the transportation-energy-environment tax, individual consumption tax and linked receipts. Under the price ceiling, the government should disclose each refiner's claim, the amount recognized by the settlement committee and the amount actually paid. The final cost is not this year's KRW 4.2 trillion reserve or the roughly KRW 1.4 trillion proposed for next year, but the money disbursed after settlement.",
            "The final test is the exit rule for each policy. The government should disclose the indicators that will determine whether the fuel-tax cut is extended, narrowed or ended, and whether the petroleum price ceiling is maintained or lifted. Reporting only the lower price while omitting both forgone revenue and compensation would show citizens only half the ledger.",
            "Near-term relief and long-term fiscal responsibility are not opposites. If government collects less, it should disclose the reason and cost. If it later collects more, it should announce the threshold and timing. Relief can be welcomed. Opaque extensions still deserve scrutiny.",
          ],
        },
      ],
      chart: {
        title: "Four parts of the fuel-tax extension to read together",
        description: "The government's stated relief is placed beside the costs and rules that still require disclosure.",
        headers: ["Item", "Government disclosure", "Still missing", "What citizens and firms should watch"],
        rows: [
          ["Period", "Two-month extension through November 30, 2026", "Rule after November", "Predictability for contracts and budgets"],
          ["Tax burden", "15% gasoline cut; 25% diesel and butane cuts", "Actual retail pass-through", "Price changes by fuel and region"],
          ["Fiscal cost", "Tax cut and petroleum price ceiling operating together", "Two-month revenue loss and actual refinery-compensation payments", "Compare forgone revenue and public spending together"],
          ["Exit rule", "Middle East risks and policy flexibility", "Oil, exchange-rate and inflation thresholds", "Evidence for extending, narrowing or ending the cuts"],
        ],
        note: "Sources: Ministry of Economy and Finance decree notices dated September 18, 2026; the Ministry of Trade, Industry and Resources explanation dated September 14, 2026; and SBS Biz reporting dated September 14, 2026. Per-liter tax figures include VAT. This year's KRW 4.2 trillion reserve and the roughly KRW 1.4 trillion proposed for next year are budget provisions, not amounts already paid.",
        afterSection: 0,
      },
      sourceNote: "This commentary is based on the Ministry of Economy and Finance's September 18, 2026 decree notices and the Ministry of Trade, Industry and Resources' September 14 explanation. The fuel-tax cut and petroleum price ceiling are separate policies; the tax reduction is not automatically recovered through another named tax. Yet forgone revenue and compensation paid under the ceiling are both public fiscal costs. Seed Voice will track forgone revenue, refinery claims, recognized losses, actual payments and the exit criteria for both measures.",
    },
  },
},
{
  slug: "expiring-tax-renamed",
  relatedPolicySlug: "local-housing-welfare-tax",
  date: "2026-09-18",
  readMinutes: 6,
  heroSrc: "images/tax/expiring-tax-renamed.webp",
  sources: [
    {
      label: { ko: "행정안전부 — 2026년 지방세제 개편안", en: "Ministry of the Interior and Safety — 2026 local tax reform plan" },
      url: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=129005",
    },
    {
      label: { ko: "법제처 국민참여입법센터 — 지방세입 관계법률 입법예고", en: "Ministry of Government Legislation — public notice on local tax legislation" },
      url: "https://opinion.lawmaking.go.kr/gcom/ogLmPp",
    },
  ],
  editions: {
    ko: {
      title: "없어질 세금이 이름만 바꿔 남는다면",
      subtitle: "주거복지의 필요와 세금을 계속 걷을 근거는 별개의 질문입니다",
      summary: "정부는 2026년 말 끝날 담배분 지방교육세를 지방주거복지세로 바꿔 연간 약 1조5천억 원의 세수를 유지하려 합니다. 지금보다 더 걷지 않는다는 설명만으로는 부족합니다. 종료될 세금을 계속 걷으려면 새 목적과 성과, 재검토 기한을 다시 시민에게 설명해야 합니다.",
      keyPoints: [
        "현재 세액과 비교하면 인상이 아니지만, 예정된 2027년 일몰과 비교하면 시민의 부담 감소가 사라집니다.",
        "교육재정에 쓰던 담배 관련 세수를 주거복지로 돌리는 만큼, 과세 대상과 사용 목적 사이의 근거를 새로 밝혀야 합니다.",
        "연간 약 1조5천억 원의 배분 기준·사업별 성과·일몰 또는 재검토 시점을 법과 집행자료에 남겨야 합니다.",
      ],
      heroAlt: "낡은 서류함에서 새 서류함으로 문서를 옮기는 동안 동전의 흐름은 끊기지 않는 세금 연장의 상징 사진",
      heroCaption: "세금의 이름과 사용처가 바뀌어도 시민이 내는 부담은 이어집니다. 정부는 ‘새 세금이 아니다’라고 설명하는 데서 멈추지 말고, 왜 계속 걷어야 하는지 다시 입증해야 합니다.",
      sections: [
        {
          title: "정부의 설명은 절반만 맞습니다",
          paragraphs: [
            "정부는 2026년 말 종료될 담배분 지방교육세를 지방주거복지세로 전환하는 방안을 내놓았습니다. 지방자치단체가 공공주택 공급과 지역 주거복지 사업을 안정적으로 추진할 수 있도록 연간 약 1조5천억 원의 재원을 확보한다는 구상입니다.",
            "정부는 현재 내는 세금의 총액이 늘지 않으므로 새로운 부담이 아니라고 설명합니다. 2026년의 세액만 놓고 보면 맞는 말입니다. 그러나 현행 제도대로라면 이 세금은 2026년 말 끝납니다. 2027년을 기준으로 보면 줄어들 예정이던 부담이 다른 이름으로 계속 남습니다.",
            "비교 기준을 어디에 두느냐에 따라 같은 정책이 ‘증세 없는 전환’으로도, ‘일몰될 세금의 연장’으로도 보입니다. 시민에게 필요한 설명은 둘 가운데 편리한 한쪽만이 아니라 두 기준을 함께 보여주는 일입니다.",
          ],
        },
        {
          title: "주거복지가 필요하다는 말만으로 충분하지 않습니다",
          paragraphs: [
            "공공주택과 주거취약계층 지원에는 재원이 필요합니다. 그렇다고 그 필요가 어떤 세금이든 계속 걷을 수 있는 근거가 되는 것은 아닙니다. 특히 담배소비와 주거복지 사이에는 교육재정 때와 다른 정책적 연결 설명이 필요합니다.",
            "정부가 특정 목적의 재원을 별도 세금으로 고정하면 사업은 안정될 수 있습니다. 반면 예산 심사 과정에서 사업의 우선순위와 성과를 다시 따지는 힘은 약해질 수 있습니다. 세입이 먼저 확보되고 사용처가 뒤따르는 구조가 되면, 필요한 사업을 골라 재원을 배분하는 것이 아니라 확보된 재원을 소진할 사업을 찾게 될 위험도 있습니다.",
          ],
          quote: "좋은 목적은 세금의 필요조건일 수 있지만, 계속 걷을 충분조건은 아닙니다.",
        },
        {
          title: "1조5천억 원의 흐름을 먼저 공개해야 합니다",
          paragraphs: [
            "새 세금을 도입하려면 지방자치단체별 배분 기준부터 분명해야 합니다. 인구와 주택가격, 주거취약계층 규모, 공공주택 공급 실적 가운데 무엇을 기준으로 삼을지 공개해야 지역 간 나눠 먹기나 정치적 배분을 줄일 수 있습니다.",
            "사업별 지출과 수혜자, 주거비 부담 감소와 공급 확대 같은 결과도 매년 확인할 수 있어야 합니다. 세입 규모만 안정시키고 성과를 측정하지 않으면 주거복지세는 목적세라는 이름만 남을 수 있습니다.",
            "무엇보다 새 세금에 일몰기한이나 의무 재검토 조항을 두어야 합니다. 종료 시점이 있는 세금을 대체하면서 새 세금에는 종료 장치를 두지 않는다면, 한시 부담을 영구 재원으로 바꾸는 결정이 됩니다.",
          ],
        },
        {
          title: "씨앗은 세금의 이름보다 정부의 입증을 보겠습니다",
          paragraphs: [
            "세금은 이름이 아니라 시민이 실제로 내는 부담입니다. 정부는 ‘추가 부담이 없다’는 문장 뒤에 숨지 말고, 예정된 일몰과 비교한 부담, 과세 대상과 사용처의 관계, 다른 재원 조달 방식과의 차이를 함께 제시해야 합니다.",
            "국회도 주거복지의 명분만 확인해서는 부족합니다. 1조5천억 원을 누가 어떻게 배분하고, 무엇을 성과로 판단하며, 언제 다시 존속 여부를 심사할지를 법률에 남겨야 합니다.",
            "씨앗은 세금의 간판이 바뀌는 순간보다 그 뒤의 돈의 흐름을 추적하겠습니다. 세금이 계속되는 만큼 정부의 설명 책임과 시민의 감시 권한도 함께 계속되어야 합니다.",
          ],
        },
      ],
      chart: {
        title: "‘추가 부담 없음’과 ‘일몰 연장’은 무엇이 다른가",
        description: "같은 정책도 비교 기준에 따라 시민에게 전혀 다르게 보입니다.",
        headers: ["비교 기준", "2026년", "2027년 이후", "시민이 확인할 점"],
        rows: [
          ["정부 설명", "담배분 지방교육세 납부", "비슷한 규모의 지방주거복지세 납부", "현재보다 세액이 늘어나는가"],
          ["현행 일몰 기준", "담배분 지방교육세 납부", "세금 종료 예정", "종료될 부담이 왜 계속되는가"],
          ["재정 사용처", "지방교육재정", "공공주택·주거복지", "배분 기준과 사업별 성과가 공개되는가"],
          ["통제 장치", "2026년 말 일몰", "새 세금의 존속 기간 확인 필요", "일몰·의무 재검토 조항이 있는가"],
        ],
        note: "출처: 행정안전부 2026년 지방세제 개편안과 지방세입 관계법률 입법예고. 연간 약 1조5천억 원은 정부 발표 기준이며 국회 심사 과정에서 달라질 수 있습니다.",
        afterSection: 1,
      },
      sourceNote: "이 글은 2026년 9월 18일 현재 공개된 행정안전부 지방세제 개편안과 법제처 국민참여입법센터 자료를 기준으로 작성했습니다. 정책은 입법예고와 국회 심사 과정에서 변경될 수 있으며, 씨앗의 소리는 세율·배분 기준·일몰 조항과 집행 결과를 계속 확인합니다.",
    },
    en: {
      title: "When an expiring tax survives under a new name",
      subtitle: "The need for housing welfare and the case for preserving a tax are separate questions",
      summary: "The government plans to replace a tobacco-linked local education tax due to expire at the end of 2026 with a local housing welfare tax, preserving roughly KRW 1.5 trillion in annual revenue. Saying that taxpayers will pay no more than today is not enough. Continuing an expiring burden requires a fresh public case for its purpose, results and review date.",
      keyPoints: [
        "The measure is not an increase against the 2026 bill, but it removes the reduction taxpayers were due to receive in 2027.",
        "Redirecting tobacco-linked revenue from education to housing requires a new explanation connecting the tax base to its purpose.",
        "Allocation rules, program results and a statutory expiry or review date should accompany the roughly KRW 1.5 trillion revenue stream.",
      ],
      heroAlt: "Documents moving from an old file box to a new one while an uninterrupted line of coins symbolizes continuation of a renamed tax",
      heroCaption: "A change in name and spending purpose does not interrupt the burden borne by citizens. The government must explain anew why collection should continue.",
      sections: [
        {
          title: "The government's claim is only half the comparison",
          paragraphs: [
            "The government proposes replacing the tobacco-linked local education tax, scheduled to expire at the end of 2026, with a local housing welfare tax. The stated goal is to give local governments roughly KRW 1.5 trillion a year for public housing and locally tailored housing programs.",
            "Officials argue that the measure creates no new burden because the amount collected today would not rise. That is accurate when 2026 is the baseline. Under current law, however, the levy ends after 2026. Against the 2027 baseline, a scheduled reduction disappears and the burden continues under a different name.",
            "Depending on the baseline, the same measure can be presented as a revenue-neutral transition or an extension of an expiring tax. Citizens should be shown both comparisons, not only the one most convenient to the government.",
          ],
        },
        {
          title: "Housing need alone does not settle the tax question",
          paragraphs: [
            "Public housing and support for vulnerable households require funding. But a worthy purpose does not by itself justify preserving any particular tax. Moving tobacco-linked revenue from education to housing calls for a new policy rationale connecting who pays with how the money is used.",
            "Earmarked revenue can stabilize programs. It can also weaken annual scrutiny of priorities and results. When revenue is secured first and programs follow, government may start searching for ways to spend an existing stream rather than selecting the best programs and then funding them.",
          ],
          quote: "A good purpose may be necessary for a tax, but it is not sufficient reason to collect it indefinitely.",
        },
        {
          title: "Disclose the KRW 1.5 trillion flow first",
          paragraphs: [
            "Allocation rules among local governments should be public before the new tax is enacted. Population, housing costs, the number of vulnerable households and public-housing delivery could all matter. Clear rules are needed to limit political allocation and regional competition for shares.",
            "Annual reporting should show program-level spending, beneficiaries and results such as lower housing costs or additional supply. Stable revenue without measurable outcomes would leave little more than the label of a purpose tax.",
            "The replacement tax also needs an expiry date or mandatory review. Replacing a temporary levy with one that has no termination mechanism would convert a time-limited burden into a permanent funding stream.",
          ],
        },
        {
          title: "Seed Voice will follow the proof, not the label",
          paragraphs: [
            "Taxes are the burdens citizens actually pay, not the names attached to them. The government should disclose the 2027 comparison, explain the relationship between the tax base and the new purpose, and compare alternative funding options.",
            "The National Assembly should do more than endorse the goal of housing welfare. The law should state who allocates the KRW 1.5 trillion, how performance is measured and when continued collection will be reconsidered.",
            "Seed Voice will track the money after the label changes. If the tax continues, public explanation and citizens' power to scrutinize it must continue as well.",
          ],
        },
      ],
      chart: {
        title: "‘No added burden’ versus ‘extension of an expiry’",
        description: "The policy looks different depending on the baseline used.",
        headers: ["Baseline", "2026", "From 2027", "Question for citizens"],
        rows: [
          ["Government framing", "Education tax paid", "Similar housing welfare tax paid", "Does the amount rise from today's level?"],
          ["Current-law expiry", "Education tax paid", "Tax scheduled to end", "Why should the expiring burden continue?"],
          ["Use of revenue", "Local education finance", "Housing and public-housing programs", "Are allocation and results disclosed?"],
          ["Control mechanism", "Expiry at end-2026", "Duration of replacement unclear", "Is there an expiry or mandatory review?"],
        ],
        note: "Sources: the Interior Ministry's 2026 local tax reform plan and public legislative notice. The roughly KRW 1.5 trillion figure is the government's estimate and may change during legislative review.",
        afterSection: 1,
      },
      sourceNote: "This commentary reflects the Interior Ministry's local tax reform plan and public legislative materials available on September 18, 2026. The proposal may change during public consultation and National Assembly review. Seed Voice will continue to track rates, allocation rules, expiry provisions and implementation results.",
    },
  },
}];

export const getTaxCommentary = (slug: string) => taxCommentaries.find((item) => item.slug === slug);
export const getTaxCommentaryForPolicy = (policySlug: string) => taxCommentaries.find((item) => item.relatedPolicySlug === policySlug);
export const getTaxCommentaryEdition = (item: TaxCommentary, language: TaxCommentaryLanguage) => item.editions[language];
