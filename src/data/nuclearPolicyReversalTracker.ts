import type { PublicInterestWatchCase } from "./publicInterestWatch";

export const nuclearPolicyReversalTracker: PublicInterestWatchCase = {
  slug: "democratic-party-nuclear-policy-reversal-tracker",
  organization: {
    ko: "대한민국 에너지·산업입지 정책",
    en: "South Korea's energy and industrial-location policy",
  },
  eyebrow: {
    ko: "원전정책·기업이전·지역균형성장",
    en: "Nuclear policy · Corporate relocation · Regional growth",
  },
  title: {
    ko: "탈원전에서 신규 원전 추진까지",
    en: "From a Nuclear Phase-Down to New Reactor Construction",
  },
  summary: {
    ko: "2017년 신규 원전 6기 백지화에서 2026년 신규 대형원전 2기 추진과 추가 원전 검토까지, 민주당 정부의 원전정책 변화를 날짜별로 기록합니다. 서남권 반도체 산단과 AI 데이터센터의 전력수요, 지역별 전기요금과 기업 이전 정책이 원전 논의와 어떻게 연결되는지도 함께 추적합니다.",
    en: "This tracker records the shift from cancelling six planned reactors in 2017 to proceeding with two large reactors and considering more in 2026. It also follows how power demand from southwest semiconductor projects and AI data centers, regional electricity pricing and corporate-relocation policy became linked to the nuclear debate.",
  },
  status: {
    ko: "정책 전환·추가 원전 검토",
    en: "Policy reversal · Further reactors under review",
  },
  openedAt: "2017-10-24",
  updatedAt: "2026-09-17",
  nextCheck: {
    ko: "제12차 전력수급기본계획의 추가 원전 기수와 수요 산정 근거, 서남권 투자계획의 기업별 확정 여부, HMM을 포함한 기업 이전 과정의 동의·거부 절차, 탈원전에서 원전 확대로 바뀌며 발생한 전환비용",
    en: "The number of additional reactors and demand assumptions in the 12th electricity plan; firm-level commitments in the southwest investment package; consent and refusal rights in corporate relocations including HMM; and the transition costs created by reversing the phase-down policy",
  },
  heroImage: {
    src: "images/monitoring/nuclear-policy-reversal-tracker-hero.webp",
    alt: {
      ko: "회의실 창밖의 원전과 취소 표시가 남은 옛 설계도, 새 전력망 계획이 한 테이블에 놓인 모습",
      en: "A nuclear plant outside a planning-room window, with a cancelled older blueprint and a newly illuminated grid plan on the same table",
    },
    caption: {
      ko: "한때 백지화했던 원전 건설이 지역 산업단지의 전력수요를 이유로 다시 추진되고 있습니다. 쟁점은 원전 찬반만이 아니라 국가의 장기약속이 어떤 절차와 설명으로 바뀌는가입니다.",
      en: "Reactor construction once cancelled is returning, now justified by regional industrial power demand. The issue is not only nuclear power itself, but how a long-term national commitment is reversed and explained.",
    },
    credit: {
      ko: "씨앗의 소리 AI 제작 이미지",
      en: "AI-assisted image by SEED VOICE",
    },
  },
  sourceBasis: {
    ko: "2017년 에너지전환 로드맵, 제11차 전력수급기본계획, 제21대 대통령선거 후보자토론회, 정부 정책브리핑과 관계 부처 발표, HMM 노조의 부산 이전 반발 및 산업용 지역 전기요금제 보도를 날짜별로 대조했습니다. 제11차 계획은 윤석열 정부가 확정했다는 점과 이재명 정부가 재검토 뒤 이어받았다는 점을 구분했습니다. 원전 필요성에 대한 판단과 정책 전환의 설명 책임도 따로 살폈습니다.",
    en: "This record cross-checks the 2017 Energy Transition Roadmap, the 11th Basic Plan for Electricity Supply and Demand, the 2025 presidential debate, government briefings, ministerial announcements, labor opposition to HMM's proposed relocation and reporting on regional industrial electricity rates. It distinguishes the previous administration's adoption of the 11th plan from the current administration's decision to retain it after review, and separates the case for nuclear power from the duty to explain a major policy reversal.",
  },
  caution: {
    ko: "제11차 전력수급기본계획의 신규 대형원전 2기는 윤석열 정부가 확정했습니다. 이재명 정부의 정책 전환은 이 계획을 새로 만든 것이 아니라 재검토 뒤 계획대로 추진하고, 이후 산업 전력수요를 근거로 추가 원전 검토까지 나아간 데 있습니다. 반도체 투자는 기업과 정부의 협의안이지만 HMM처럼 정부가 이전 방침을 먼저 밝힌 사례에서는 강제 이전이라는 반발이 제기됐습니다.",
    en: "The previous administration finalized the two large reactors in the 11th electricity plan. The current administration's reversal lies in retaining that plan after review and then moving toward possible additional reactors on the basis of industrial demand. Semiconductor investment plans were negotiated with companies, while the HMM case drew allegations of forced relocation after the government announced the destination first.",
  },
  keyChanges: [
    {
      date: "2025-09-13",
      text: {
        ko: "새 정부가 제11차 계획의 신규 원전 건설을 국민 공론 뒤 다시 판단하겠다고 밝혔습니다.",
        en: "The new government said the planned reactors would be reconsidered after a public consultation.",
      },
    },
    {
      date: "2026-01-27",
      text: {
        ko: "재검토하던 신규 대형원전 2기를 계획대로 추진하기로 확정했습니다.",
        en: "The government decided to proceed with the two large reactors as planned.",
      },
    },
    {
      date: "2026-07-03",
      text: {
        ko: "서남권 반도체 산단 확대에 필요한 전력수요를 근거로 추가 원전 검토가 공식화됐습니다.",
        en: "Additional reactors entered formal consideration, justified by power demand from expanded regional semiconductor projects.",
      },
    },
  ],
  timeline: [
    {
      date: "2017-10-24",
      title: {
        ko: "신규 원전 백지화와 단계적 감축",
        en: "New reactor plans cancelled and a gradual phase-down begins",
      },
      description: {
        ko: "문재인 정부는 국무회의에서 에너지전환 로드맵을 확정했습니다. 계획된 신규 원전 6기를 백지화하고 노후 원전 수명연장을 금지하며 월성 1호기 조기폐쇄를 추진하는 내용이 담겼습니다. 원전은 2017년 24기에서 2038년 14기로 단계적으로 줄이겠다는 계획이었습니다.",
        en: "The Moon Jae-in administration adopted its Energy Transition Roadmap, cancelling six planned reactors, rejecting lifetime extensions for aging units and moving to close Wolsong Unit 1 early. The plan projected a decline from 24 reactors in 2017 to 14 in 2038.",
      },
      change: {
        ko: "탈원전이 민주당 정부의 장기 국가정책으로 확정",
        en: "A nuclear phase-down becomes a long-term Democratic administration policy",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "산업통상자원부", en: "Ministry of Trade, Industry and Energy" },
          title: { ko: "에너지전환 로드맵", en: "Energy Transition Roadmap" },
          url: "https://www.kaif.or.kr/upload/nuclear1/20171031103352_6cc4cade.pdf",
          publishedAt: "2017-10-24",
          thumbnailSrc: "/images/monitoring/nuclear-policy/energy-transition-2017.webp",
          kind: "document",
        },
      ],
    },
    {
      date: "2025-02-21",
      title: {
        ko: "윤석열 정부가 신규 대형원전 2기와 SMR 1기를 확정",
        en: "Yoon administration approves two large reactors and one SMR demonstration",
      },
      description: {
        ko: "제11차 전력수급기본계획은 이재명 정부가 만든 계획이 아닙니다. 윤석열 정부가 2023년 7월 수립을 시작해 2025년 2월 확정했습니다. 이 계획에는 2037년과 2038년 신규 대형원전 2기, 2035년 소형모듈원자로 1기 실증이 반영됐습니다.",
        en: "The 11th electricity plan was not written by the Lee Jae-myung administration. Work began under the Yoon Suk Yeol administration in July 2023 and the plan was finalized in February 2025. It included two large reactors for 2037 and 2038 and an SMR demonstration targeted for 2035.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "산업통상자원부", en: "Ministry of Trade, Industry and Energy" },
          title: { ko: "제11차 전력수급기본계획 확정", en: "11th electricity plan finalized" },
          url: "https://www.motir.go.kr/kor/article/ATCL3f49a5a8c/170183/view",
          publishedAt: "2025-02-21",
          thumbnailSrc: "/images/monitoring/nuclear-policy/electricity-plan-2025.webp",
          kind: "document",
        },
      ],
    },
    {
      date: "2025-05-23",
      title: {
        ko: "이재명 후보는 재생에너지 전환을 강조",
        en: "Candidate Lee emphasizes a renewable-energy transition",
      },
      description: {
        ko: "대선 후보 토론에서 이재명 후보는 원전 한 기를 짓는 데 보통 10년에서 15년이 걸린다고 말했습니다. 원전 비중을 크게 높일 경우 RE100 수요에 대응하기 어렵다며 재생에너지 확대와 전력망 확충을 강조했습니다.",
        en: "During a presidential debate, Lee said a nuclear plant typically takes 10 to 15 years to build. He argued that sharply increasing nuclear power would make it harder to meet RE100 demand and stressed renewable expansion and grid investment.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "중앙선거방송토론위원회", en: "National Election Broadcast Debate Commission" },
          title: { ko: "제21대 대통령선거 후보자토론회", en: "2025 presidential candidates' debate" },
          url: "https://www.debates.go.kr/2025_president2/sub/sub01_01.php?id=1840&subtype=2",
          publishedAt: "2025-05-23",
          thumbnailSrc: "/images/monitoring/nuclear-policy/presidential-debate-2025.webp",
          kind: "video",
        },
      ],
    },
    {
      date: "2025-09-13",
      title: {
        ko: "새 정부는 신규 원전 계획을 다시 검토",
        en: "New government reopens the reactor decision",
      },
      description: {
        ko: "김성환 장관은 제11차 전력수급기본계획의 신규 원전 건설을 국민 공론을 거쳐 다시 판단하겠다고 밝혔습니다. 동시에 기존 원전은 안전을 전제로 계속 운전할 수 있다며 전면적인 탈원전과는 선을 그었습니다.",
        en: "Minister Kim Sung-hwan said the planned reactors would be reconsidered after public deliberation. At the same time, he said existing plants could continue operating when safety was assured, distancing the government from a full nuclear exit.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "YTN", en: "YTN" },
          title: { ko: "신규 원전 계획, 국민 공론 거쳐 재검토", en: "Planned reactors to be reconsidered after public consultation" },
          url: "https://www.ytn.co.kr/_ln/0103_202509132306589108",
          publishedAt: "2025-09-13",
          thumbnailSrc: "/images/monitoring/nuclear-policy/nuclear-review-ytn-2025.webp",
          kind: "article",
        },
      ],
    },
    {
      date: "2025-12-04",
      title: {
        ko: "HMM 노동조합이 부산 이전을 강제 이전이라고 규정",
        en: "HMM union condemns proposed Busan move as forced relocation",
      },
      description: {
        ko: "정부가 HMM 본사의 부산 이전을 국정과제로 추진하자 HMM 육상노조는 ‘본사 강제 이전 규탄 기자회견’을 열었습니다. 정부는 지역균형발전과 해양산업 집적을 내세웠고, 노조는 상장회사의 자율성과 직원의 생활기반을 침해한다고 반발했습니다.",
        en: "After the government made relocation of HMM's headquarters to Busan a national policy goal, the company's land-based workers' union held a press conference condemning what it called a forced move. The government cited balanced development and maritime clustering; the union cited corporate autonomy and workers' livelihoods.",
      },
      change: {
        ko: "지역균형성장과 기업 자율성의 충돌이 구체적 사례로 드러남",
        en: "The conflict between regional policy and corporate autonomy becomes concrete",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "뉴스1", en: "News1 Korea" },
          title: { ko: "HMM 노조, 본사 강제 이전 규탄", en: "HMM union condemns forced headquarters relocation" },
          url: "https://www.news1.kr/",
          publishedAt: "2025-12-04",
          thumbnailSrc: "/images/monitoring/nuclear-policy/hmm-relocation-protest-2025.webp",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-01-27",
      title: {
        ko: "이재명 정부가 신규 대형원전 2기 추진을 확정",
        en: "Lee administration confirms two large reactors will proceed",
      },
      description: {
        ko: "정부는 두 차례 정책토론회와 두 개 기관의 여론조사를 거쳐 제11차 계획에 포함된 신규 대형원전 2기를 계획대로 추진한다고 발표했습니다. 정부는 원전 필요 의견이 80% 이상, 신규 원전 추진 찬성이 60% 이상이었다고 설명했습니다.",
        en: "After two policy forums and surveys by two polling organizations, the government announced that the two large reactors in the 11th plan would proceed. It said more than 80 percent of respondents regarded nuclear power as necessary and more than 60 percent supported the new-build plan.",
      },
      change: {
        ko: "재검토에서 계획대로 추진으로 전환",
        en: "Policy moves from reconsideration to implementation",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "대한민국 정책브리핑", en: "Korea Policy Briefing" },
          title: { ko: "제11차 전기본 신규 원전 계획대로 추진", en: "New reactors in the 11th plan to proceed" },
          url: "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156741515",
          publishedAt: "2026-01-27",
          thumbnailSrc: "/images/monitoring/nuclear-policy/new-reactors-briefing-2026.webp",
          kind: "document",
        },
      ],
    },
    {
      date: "2026-06-29",
      title: {
        ko: "서남권 반도체 800조원 투자 구상 발표",
        en: "Government unveils a KRW 800 trillion southwest semiconductor proposal",
      },
      description: {
        ko: "정부는 서남권에 메모리 팹 4기를 구축하는 800조원 규모 기업투자 구상을 포함한 3대 메가프로젝트를 발표했습니다. 지역균형성장을 위해 정부가 산업 입지와 전력·용수·인허가를 함께 설계하는 방식입니다.",
        en: "The government announced three national megaprojects, including a proposal for KRW 800 trillion in corporate investment and four memory-chip fabs in the southwest. The regional-growth approach links industrial location with state planning for electricity, water and permits.",
      },
      status: "confirmed",
      sources: [
        {
          publisher: { ko: "산업통상부", en: "Ministry of Trade and Industry" },
          title: { ko: "대한민국 대도약 3대 메가프로젝트 국민보고회", en: "National briefing on three megaprojects" },
          url: "https://www.motir.go.kr/",
          publishedAt: "2026-06-29",
          thumbnailSrc: "/images/monitoring/nuclear-policy/megaproject-briefing-2026.webp",
          kind: "document",
        },
      ],
    },
    {
      date: "2026-07-03",
      title: {
        ko: "산업 수요를 근거로 추가 원전 검토",
        en: "Additional reactors considered on the basis of industrial demand",
      },
      description: {
        ko: "기후에너지환경부는 용인과 서남권 반도체 클러스터에 각각 15GW와 6.3GW의 전력이 필요하다고 추산했습니다. 두 지역의 수요만 APR1400 원전 약 15기의 설비용량에 해당합니다. 김성환 장관은 반도체 산단이 확대되면 재생에너지만으로 24시간 안정적인 전력을 공급하기 어렵다며 추가 원전을 빨리 검토해야 한다고 말했습니다.",
        en: "The climate and energy ministry estimated power demand of 15 GW for Yongin's semiconductor cluster and 6.3 GW for the southwest cluster—together roughly the capacity of 15 APR1400 reactors. Kim said expanded chipmaking would make round-the-clock supply difficult with renewables alone and called for a rapid review of additional nuclear capacity.",
      },
      change: {
        ko: "신규 2기 이행에서 추가 원전 검토로 확대",
        en: "The debate expands from two planned reactors to further capacity",
      },
      status: "new",
      sources: [
        {
          publisher: { ko: "연합뉴스", en: "Yonhap News Agency" },
          title: { ko: "반도체 전력수요에 추가 원전 검토", en: "Additional nuclear capacity reviewed for semiconductor demand" },
          url: "https://www.yna.co.kr/view/AKR20260703109800530",
          publishedAt: "2026-07-03",
          thumbnailSrc: "/images/monitoring/nuclear-policy/additional-reactors-2026.webp",
          kind: "article",
        },
      ],
    },
    {
      date: "2026-08-26",
      title: {
        ko: "전기요금으로 기업의 지역 이전과 투자를 유도",
        en: "Regional power pricing is designed to steer corporate location",
      },
      description: {
        ko: "정부와 한국전력은 산업용 지역 전기요금제 설계안을 공개했습니다. 남부권은 산업용 전력 평균 판매단가의 약 10%인 최대 18원까지 낮추는 방안입니다. 정부는 전력 다소비 기업의 비수도권 투자와 이전을 유도해 지역 일자리와 산업을 키우겠다고 설명했습니다.",
        en: "The government and Korea Electric Power unveiled a regional industrial-rate design. The proposal would reduce rates in southern regions by as much as KRW 18 per kWh, about 10 percent of the average industrial selling price. The government said the measure was intended to induce power-intensive firms to invest or relocate outside the capital region.",
      },
      status: "new",
      sources: [
        {
          publisher: { ko: "ZDNet Korea", en: "ZDNet Korea" },
          title: { ko: "산업용 지역 전기요금제 설계안", en: "Regional industrial electricity-rate proposal" },
          url: "https://zdnet.co.kr/view/?no=20260826180332",
          publishedAt: "2026-08-26",
          thumbnailSrc: "/images/monitoring/nuclear-policy/regional-electricity-tariff-2026.webp",
          kind: "article",
        },
      ],
    },
  ],
  confirmedFacts: [
    {
      ko: "2017년 에너지전환 로드맵은 신규 원전 6기 백지화와 원전의 단계적 감축을 명시했습니다.",
      en: "The 2017 Energy Transition Roadmap explicitly cancelled six planned reactors and set a gradual nuclear phase-down.",
    },
    {
      ko: "제11차 전력수급기본계획은 윤석열 정부가 확정했고, 이재명 정부는 재검토 뒤 신규 대형원전 2기를 이어받았습니다.",
      en: "The Yoon administration finalized the 11th electricity plan, and the Lee administration retained its two large reactors after review.",
    },
    {
      ko: "정부는 서남권 반도체 산단과 AI 데이터센터의 전력수요를 제12차 전력수급기본계획에 반영하고 추가 원전을 검토하고 있습니다.",
      en: "The government is incorporating power demand from the southwest semiconductor complex and AI data centers into the 12th electricity plan while reviewing further nuclear capacity.",
    },
    {
      ko: "정부는 전기요금과 기반시설을 활용해 전력 다소비 기업의 비수도권 투자와 이전을 유도하고 있습니다.",
      en: "The government is using electricity pricing and infrastructure policy to steer power-intensive investment and relocation outside the capital region.",
    },
  ],
  currentControversies: [
    {
      title: {
        ko: "정책 전환의 근거와 비용",
        en: "Grounds and costs of the policy reversal",
      },
      description: {
        ko: "정부는 전력수요 증가와 원전 필요 여론을 추진 근거로 제시했습니다. 앞으로는 2017년 정책의 어떤 전제가 달라졌는지, 정책 전환 과정에서 기업·지역·원전 생태계가 부담한 비용이 얼마인지 확인해야 합니다.",
        en: "The government has cited rising demand and public support for nuclear power. The remaining questions are which assumptions behind the 2017 policy changed and what transition costs were borne by companies, regions and the nuclear supply chain.",
      },
    },
    {
      title: {
        ko: "산업 입지계획과 추가 원전의 연결",
        en: "The link between industrial location and additional reactors",
      },
      description: {
        ko: "정부는 서남권 반도체 투자를 지역성장 사업으로 배치한 뒤 이 사업에서 생길 전력수요를 추가 원전 검토의 근거로 제시했습니다. 제12차 전력수급기본계획에서 산업 수요와 발전설비 계획이 어떤 계산으로 연결되는지 확인할 필요가 있습니다.",
        en: "After placing southwest semiconductor investment within its regional-growth strategy, the government cited the resulting demand as a reason to consider more reactors. The 12th electricity plan must show how industrial forecasts are translated into generation capacity.",
      },
    },
    {
      title: {
        ko: "기업 이전의 동의와 거부 절차",
        en: "Consent and refusal procedures in corporate relocation",
      },
      description: {
        ko: "반도체 투자는 기업과 정부의 협의안이며 지역별 전기요금과 세제·보조금은 유인책으로 제시됐습니다. HMM 사례에서는 정부가 이전 방침을 먼저 밝힌 뒤 노조가 강제 이전이라고 반발했습니다. 이사회·주주·노동자의 동의와 거부 절차가 실제로 어떻게 보장되는지가 남은 쟁점입니다.",
        en: "Semiconductor investment was negotiated with companies, while regional rates, taxes and subsidies were presented as incentives. In HMM's case, the union called the move coercive after the government announced the destination first. The remaining issue is how consent and refusal rights for boards, shareholders and workers operate in practice.",
      },
    },
    {
      title: {
        ko: "재생에너지 전략과 신규 원전의 결합 원칙",
        en: "How renewables and new reactors will be combined",
      },
      description: {
        ko: "이재명 후보는 대선 토론에서 재생에너지 확대와 전력망 확충을 강조했습니다. 정부가 신규 원전과 추가 원전 검토를 이어가면서 재생에너지 비중, RE100 대응, 원전 건설기간과 비용을 어떤 원칙으로 조정할지는 아직 구체화되지 않았습니다.",
        en: "During the campaign, Lee emphasized renewable expansion and grid investment. As the government proceeds with new reactors and considers more, it has yet to specify how renewable targets, RE100 demand, construction time and reactor costs will be reconciled.",
      },
    },
  ],
  followUpChecks: [
    {
      ko: "제12차 전력수급기본계획이 반도체와 AI 수요를 중복 계산하지 않았는지, 수요가 줄어들 때 설비계획을 조정할 장치가 있는지",
      en: "Whether the 12th electricity plan double-counts semiconductor and AI demand, and whether capacity can be adjusted if demand falls",
    },
    {
      ko: "추가 원전의 기수와 부지, 건설비, 사용후핵연료 처리비용, 송전망 비용을 함께 공개하는지",
      en: "Whether the number, sites, construction costs, spent-fuel costs and transmission costs of additional reactors are disclosed together",
    },
    {
      ko: "기업 이전과 지역투자 과정에서 정부 지원과 불이익, 기업의 자율적 의사결정 절차를 구분해 공개하는지",
      en: "Whether support, penalties and independent corporate decision-making are separately disclosed in relocation and regional-investment plans",
    },
    {
      ko: "과거 탈원전 정책으로 발생한 비용과 현재 원전 확대 정책의 비용을 같은 기준으로 계산하는지",
      en: "Whether the costs of the earlier nuclear phase-down and the current expansion are calculated on the same basis",
    },
    {
      ko: "정권이 바뀌어도 유지될 수 있는 에너지 정책의 변경 절차와 초당적 합의를 마련하는지",
      en: "Whether a durable procedure and cross-party basis are established for future changes in energy policy",
    },
  ],
  sectionHeadings: {
    facts: {
      ko: "확인된 사실",
      en: "Confirmed facts",
    },
    controversies: {
      ko: "아직 남은 문제",
      en: "Questions that remain",
    },
    followUp: {
      ko: "앞으로 지켜볼 기준",
      en: "What to watch next",
    },
  },
  continuationEligible: true,
  questions: [],
  proposals: [],
  sources: [
    {
      label: { ko: "2017년 에너지전환 로드맵", en: "2017 Energy Transition Roadmap" },
      url: "https://www.kaif.or.kr/upload/nuclear1/20171031103352_6cc4cade.pdf",
    },
    {
      label: { ko: "제11차 전력수급기본계획 확정", en: "11th Basic Plan for Electricity Supply and Demand" },
      url: "https://www.motir.go.kr/kor/article/ATCL3f49a5a8c/170183/view",
    },
    {
      label: { ko: "제21대 대통령선거 후보자토론회", en: "2025 presidential candidates' debate" },
      url: "https://www.debates.go.kr/2025_president2/sub/sub01_01.php?id=1840&subtype=2",
    },
    {
      label: { ko: "신규 원전 건설 재검토 보도", en: "Report on reconsideration of planned reactors" },
      url: "https://www.ytn.co.kr/_ln/0103_202509132306589108",
    },
    {
      label: { ko: "제11차 전기본 신규 원전 계획대로 추진", en: "Decision to proceed with reactors in the 11th plan" },
      url: "https://www.korea.kr/briefing/policyBriefingView.do?newsId=156741515",
    },
    {
      label: { ko: "3대 메가프로젝트와 추가 원전 검토", en: "Three megaprojects and review of additional reactors" },
      url: "https://www.yna.co.kr/view/AKR20260703109800530",
    },
    {
      label: { ko: "산업용 지역 전기요금제 설계안", en: "Regional industrial electricity-rate proposal" },
      url: "https://zdnet.co.kr/view/?no=20260826180332",
    },
  ],
};
