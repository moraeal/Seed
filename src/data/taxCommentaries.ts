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
  sources: { label: LocalizedText; url: string }[];
  editions: Record<TaxCommentaryLanguage, CommentaryEdition>;
};

export const taxCommentaries: TaxCommentary[] = [
{
  slug: "fuel-tax-relief-needs-an-exit-rule",
  relatedPolicySlug: "fuel-tax-cut-extended-november-2026",
  date: "2026-09-18",
  readMinutes: 6,
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
  ],
  editions: {
    ko: {
      title: "기름값은 낮췄지만, 감세 비용은 보이지 않습니다",
      subtitle: "유류세 인하가 필요해도 두 달짜리 연장에는 세수와 종료 기준이 따라야 합니다",
      summary: "정부가 휘발유·경유·LPG 부탄의 유류세 인하를 2026년 11월 말까지 두 달 더 연장합니다. 운전자와 운송업의 부담을 덜어주는 조치입니다. 그러나 이번 연장으로 줄어드는 세수와 인하 종료 기준은 입법예고 화면에서 확인하기 어렵습니다. 오늘의 기름값만큼 내일의 재정비용도 함께 공개해야 합니다.",
      keyPoints: [
        "휘발유 15%, 경유·LPG 부탄 25%의 인하율이 11월 30일까지 유지돼 운전자와 운송업의 단기 부담을 낮춥니다.",
        "리터당 세액은 인하 전보다 휘발유 122원, 경유 145원, 부탄 51원 낮지만 실제 주유가격 반영률은 따로 확인해야 합니다.",
        "두 달간의 세수 감소 규모와 객관적인 종료 기준이 공개돼야 감세의 편익과 비용을 함께 판단할 수 있습니다.",
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
          title: "두 달짜리 연장은 예측 가능한 세제가 아닙니다",
          paragraphs: [
            "정부는 국제유가와 중동 정세를 보며 대응 여력을 남기기 위해 두 달만 연장한다고 설명합니다. 급변하는 상황에 탄력적으로 대응하려는 취지는 이해할 수 있습니다. 그러나 짧은 연장이 반복될수록 시민과 기업은 두 달 뒤 세금이 어떻게 바뀔지 다시 기다려야 합니다.",
            "화물운송 계약, 택시 운영비, 물류 단가와 기업의 비용 계획은 하루 단위로 바꾸기 어렵습니다. 세율이 오를 가능성과 다시 연장될 가능성을 동시에 열어두면 정부에는 재량이 남지만 현장에는 불확실성이 남습니다.",
            "국제유가, 원·달러 환율, 소비자물가 가운데 어떤 수치가 어느 수준에 이르면 인하율을 조정하거나 종료할지 기준을 미리 밝힐 수 있습니다. 세금은 예고 없이 움직이는 가격표가 아니라 시민과 기업이 계획을 세울 수 있는 규칙이어야 합니다.",
          ],
        },
        {
          title: "씨앗은 세 가지 숫자를 계속 보겠습니다",
          paragraphs: [
            "첫째는 실제 주유가격입니다. 세금 인하분이 정유·도매·소매 단계를 거쳐 소비자가격에 얼마나 반영됐는지 유종별로 확인해야 합니다. 국제유가나 환율이 올랐다는 설명만으로는 세금 인하 효과가 어디에서 줄었는지 알 수 없습니다.",
            "둘째는 세수 감소액입니다. 두 달간 덜 걷는 교통·에너지·환경세와 개별소비세, 이에 연동되는 세입을 합쳐 공개해야 합니다. 셋째는 종료 기준입니다. 11월 말 이후 연장·축소·종료 가운데 어떤 결정을 내리는지보다 그 결정을 어떤 수치로 설명하는지가 더 중요합니다.",
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
          ["재정 비용", "국민 유류비 부담 경감", "두 달간 줄어드는 전체 세수", "감세 편익과 재정비용의 비교"],
          ["종료 기준", "중동 정세와 대응 여력 고려", "유가·환율·물가의 객관적 기준", "연장·축소·종료 결정의 근거"],
        ],
        note: "출처: 재정경제부 2026년 9월 18일 시행령 개정안 입법예고와 당일 발표 내용. 리터당 세액은 부가가치세를 포함한 금액입니다.",
        afterSection: 0,
      },
      sourceNote: "이 글은 2026년 9월 18일 공개된 재정경제부의 교통·에너지·환경세법 시행령 및 개별소비세법 시행령 개정안 입법예고를 기준으로 작성했습니다. 의견 제출 기한은 9월 23일이며, 두 시행령은 국무회의 의결을 거쳐 시행될 예정입니다. 씨앗의 소리는 세수 감소액, 주유가격 반영률과 11월 말 이후의 종료 기준을 계속 확인합니다.",
    },
    en: {
      title: "Fuel bills fall, but the fiscal cost remains out of sight",
      subtitle: "Even justified relief needs a revenue estimate and a predictable exit rule",
      summary: "South Korea will extend temporary fuel-tax cuts on gasoline, diesel and LPG butane through November 2026. The measure offers real relief to drivers and transport businesses. Yet the public notice does not prominently state the revenue cost or the conditions for ending the cuts. Today's lower fuel bill should be presented alongside tomorrow's fiscal cost.",
      keyPoints: [
        "The 15% gasoline cut and 25% diesel and LPG butane cuts continue through November 30, lowering near-term costs for drivers and transport businesses.",
        "Per-liter tax remains KRW 122 lower for gasoline, KRW 145 lower for diesel and KRW 51 lower for butane, but actual pass-through at the pump still needs verification.",
        "Citizens need the two-month revenue estimate and objective exit criteria to judge the relief and its fiscal cost together.",
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
          title: "A two-month extension is not a predictable tax rule",
          paragraphs: [
            "Officials say a short extension preserves flexibility while oil markets and regional tensions remain uncertain. The case for flexibility is understandable. But every short extension leaves households and businesses waiting to learn what their tax bill will be only weeks later.",
            "Freight contracts, taxi operations, logistics pricing and corporate budgets cannot be redesigned overnight. Keeping both another extension and a sudden increase open preserves discretion for government while transferring uncertainty to the field.",
            "The government can publish thresholds for international oil prices, the won-dollar exchange rate and consumer inflation that would trigger an adjustment or end the cuts. Tax should be a rule that citizens and firms can plan around, not a price tag that changes without a visible formula.",
          ],
        },
        {
          title: "Seed Voice will track three numbers",
          paragraphs: [
            "First is the pump-price pass-through. The government should show how much of each fuel's tax reduction reaches retail prices after refining, wholesale and retail margins. General references to crude prices or exchange rates do not identify where the benefit was absorbed.",
            "Second is total forgone revenue, including the transportation-energy-environment tax, individual consumption tax and linked receipts. Third is the exit rule. Whether the government extends, narrows or ends the cuts after November matters less than whether it explains the decision with measurable criteria.",
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
          ["Fiscal cost", "Relief from fuel expenses", "Total two-month revenue loss", "Comparison of benefits and fiscal cost"],
          ["Exit rule", "Middle East risks and policy flexibility", "Oil, exchange-rate and inflation thresholds", "Evidence for extending, narrowing or ending the cuts"],
        ],
        note: "Sources: Ministry of Economy and Finance decree notices and statements dated September 18, 2026. Per-liter tax figures include VAT.",
        afterSection: 0,
      },
      sourceNote: "This commentary is based on the Ministry of Economy and Finance's September 18, 2026 notices amending the transportation-energy-environment tax and individual consumption tax decrees. Public comments close on September 23, and Cabinet approval is required before implementation. Seed Voice will continue to track forgone revenue, retail pass-through and the post-November exit rule.",
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
export const getTaxCommentaryEdition = (item: TaxCommentary, language: TaxCommentaryLanguage) => item.editions[language];
