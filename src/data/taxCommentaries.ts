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

export const taxCommentaries: TaxCommentary[] = [{
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
