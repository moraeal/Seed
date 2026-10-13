import type { SeedLanguageArticle } from "./seedLanguageBase";

const sources = [
  { label: "BIEN, 기본소득의 정의", url: "https://basicincome.org/" },
  { label: "Stanford Basic Income Lab, 기본소득의 역사와 주요 논리", url: "https://basicincome.stanford.edu/about/what-is-basic-income/" },
  { label: "경향신문, 오건호·이승윤 기본소득 대담, 2021.1.1", url: "https://www.khan.co.kr/article/202101010600085" },
  { label: "OECD, Basic Income as a Policy Option: Can It Add Up?, 2017", url: "https://www.oecd.org/en/publications/basic-income-as-a-policy-option_77d7fe00-en.html" },
  { label: "뉴시스, 농어촌 기본소득 18개 군 추가 선정…국비 지원 확대, 2026.10.8", url: "https://nwww.newsis.com/view/NISX20261008_0003819214" },
  { label: "매일신문 사설, 농어촌 기본소득의 지방재정 부담, 2025.12.22", url: "https://www.imaeil.com/page/view/2025122116595380931" },
  { label: "연합뉴스, 농어촌 기본소득 시범사업 인구·상권 지표 보도, 2026.10.7", url: "https://www.yna.co.kr/view/AKR20261007032900055" },
  { label: "농민신문 사설, 논란 중인 기본소득 시범사업…조기 안착하려면, 2025.12.29", url: "https://www.nongmin.com/article/20251226500532" },
  { label: "Kela 등, 핀란드 기본소득 실험 평가, 2020", url: "https://tietotarjotin.fi/en/publication/116455/evaluation-of-the-finnish-basic-income-experiment" },
  { label: "University of Helsinki, 핀란드 기본소득 실험 결과의 해석과 한계, 2020", url: "https://www.helsinki.fi/en/news/society-and-learning/basic-income-experiment-finland-yields-surprising-results" },
  { label: "Vivalt 등, 미국 두 주의 보장소득 실험 연구, 2024년 보고서", url: "https://economics.yale.edu/sites/default/files/2024-08/Vivalt-et-al.-ORUS-employment.pdf" },
];

export const basicIncomeArticleKo: SeedLanguageArticle = {
  slug: "basic-income-universal-payments-public-cost-2026",
  term: "기본소득",
  date: "2026-10-13",
  readMinutes: 10,
  newsletterEligible: false,
  title: "기본소득, ‘모두에게’라는 말이 가리는 것",
  subtitle: "생계의 안전판과 전 국민에게 돈을 나눠주는 정책은 다르다",
  summary: "씨앗은 기본소득을 시민 전체의 부담으로 유지되는 재정 약속으로 본다. 진보 내부에서도 일괄 지급이 가장 어려운 사람의 보호를 약화할 수 있다는 비판이 나왔다. 지급의 확대보다 비용·효과와 중단 가능한 실험을 먼저 살핀다.",
  keyPoints: [
    "모두에게 같은 돈을 주는 것과 필요한 보호를 제공하는 것은 다르다.",
    "새로운 지급을 더하면 재정이 커지고, 기존 복지를 줄이면 취약계층이 손해를 볼 수 있다.",
    "기본소득은 기간·예산·평가·중단 기준을 갖춘 신중한 실험 과제다."
  ],
  leadParagraphs: [
    "형편이 넉넉한 사람과 당장 월세를 내지 못하는 사람에게 같은 돈을 지급한다. 기본소득이 내세우는 평등이다. 그러나 쓸 수 있는 예산이 정해져 있다면, 넉넉한 사람에게 지급한 돈만큼 어려운 사람에게 돌아갈 지원은 줄어든다.",
    "모두에게 똑같이 주는 것이 언제나 공정한가. 기본소득을 둘러싼 논쟁은 여기서 출발한다."
  ],
  heroImage: {
    src: "images/seed-language/basic-income-public-cost-2026.jpg",
    alt: "한정된 동전을 서로 다른 형편의 시민에게 같은 몫으로 나누는 모습을 표현한 상징 그림",
    caption: "같은 액수의 지급과 필요한 보호는 다르다. 한정된 재원으로 누구의 삶이 얼마나 회복되는지가 판단의 기준이다.",
    credit: "AI 이미지"
  },
  sections: [
    { title: "기본소득은 시민 전체가 부담하는 재정 약속이다", paragraphs: [
      "씨앗의 소리는 기본소득을 ‘소득과 노동 여부를 묻지 않고 개인에게 정기적으로 돈을 지급하는 제도이며, 시민 전체의 부담으로 유지되는 재정 약속’으로 이해한다. 앞부분은 지급 방식에 대한 정의이고, 뒷부분은 그 제도를 바라보는 씨앗의 관점이다.",
      "기본소득지구네트워크(BIEN)의 정의에서도 핵심은 모든 개인에게 조건 없이 정기적으로 현금을 지급한다는 것이다. 다만 ‘기본’이라는 이름이 붙었다고 그 금액으로 기본생활이 보장되는 것은 아니다. 적은 금액도 지급 방식에 따라 기본소득으로 논의될 수 있다. [1]",
      "이 말은 시민에게 돌아오는 돈을 먼저 보여준다. 그 돈을 마련하기 위해 시민이 부담할 세금, 줄어들 다른 지원, 미래에 남을 빚은 이름에서 드러나지 않는다.",
      "씨앗이 기본소득을 경계하는 이유는 재정 팽창에 대한 반대에 있다. 정부가 새로운 정기 지급을 약속할 때에는 일시적인 지출보다 더 큰 책임이 생긴다. 지급이 계속되는 동안 재원도 계속 필요하다. 현재의 지원을 늘리기 위해 미래의 납세 부담을 키우는 선택까지 ‘기본’이라는 말로 정당화할 수는 없다."
    ]},
    { title: "공동 자산의 수익과 세금으로 마련한 지급은 다르다", paragraphs: [
      "이 생각의 출발이 모두 국가의 현금 지원에 있었던 것은 아니다. 토머스 페인은 1797년 『토지정의』에서 토지가 본래 인류 공동의 자산이었다는 관점으로 성년에게 일시금을, 일정 연령 이상에게 연금을 지급하는 구상을 제시했다. 조제프 샤를리에는 1848년 토지에서 생기는 수입을 바탕으로 모든 시민에게 정기적으로 몫을 나누는 방안을 제안했다. 초기 구상에는 공동의 자산에서 나온 수익을 돌려준다는 생각이 있었다. [2]",
      "공동 자산의 실제 수익을 나누는 것과 세금이나 빚으로 지급액을 마련하는 것은 다르다. 오늘의 기본소득 논의에서도 이 차이는 남는다. 이름이 같다고 재원까지 같은 것은 아니다."
    ]},
    { title: "진보 내부에서도 ‘모두에게’에 대한 반론이 나왔다", paragraphs: [
      "진보 측의 가장 강한 주장은 기존 복지가 사람을 놓친다는 것이다. 일자리가 불안정한 사람, 소득을 증명하기 어려운 사람, 가족을 돌보느라 유급 노동을 하지 못하는 사람은 지원제도의 경계 밖에 남을 수 있다. 모두에게 지급하면 누락을 줄이고, 가난을 증명해야 받는다는 부담도 덜 수 있다. 일정한 소득이 있으면 부당한 노동조건을 거절할 여지도 생긴다. [2]",
      "이 문제의식은 이해할 수 있다. 그러나 지원에서 빠지는 사람이 있다는 사실이 곧 부유한 사람에게도 같은 돈을 지급할 이유가 되지는 않는다. 누락된 사람을 찾아 지원하는 제도를 개선하는 길과 모든 사람에게 지급하는 길은 비용과 효과가 다르다.",
      "기본소득에 대한 중요한 반론은 진보 내부에서도 나왔다.",
      "복지 연구자 오건호는 모두에게 돈을 지급하면 겉으로는 지원에서 빠지는 사람이 없어지지만, 정작 어려운 사람에게 충분한 보호를 제공하지 못할 수 있다고 지적했다. 쉽게 말하면, 지원받는 사람의 수는 늘어도 가장 절박한 사람의 생활은 여전히 나아지지 않을 수 있다는 뜻이다. [3]",
      "가령 지원 예산이 100만원이고 시민이 10명이라고 해보자. 모두에게 지급하면 한 사람당 10만원이다. 그중 두 사람이 생계를 이어가기 어려운 처지라면, 두 사람에게 집중할 경우 각각 50만원을 지원할 수 있다.",
      "실제 정책은 이보다 복잡하다. 지원 대상이 된 사람이 불이익을 받거나, 필요한 사람이 선정에서 빠질 수도 있다. 그럼에도 이 예시는 일괄 지급의 한계를 보여준다. 모두에게 같은 액수를 지급하는 것과 모두에게 필요한 보호를 제공하는 것은 다른 일이다."
    ]},
    { title: "새로 더하면 재정이 커지고, 바꾸면 보호가 약해질 수 있다", paragraphs: [
      "장애가 있는 사람, 큰 병을 앓는 사람, 돌봄이 필요한 사람에게 드는 비용도 서로 다르다. 같은 금액의 기본소득으로 이 차이를 해결하기 어렵다. 기존의 맞춤 지원을 유지하면서 기본소득을 추가하면 총지출이 커지고, 기존 지원을 줄여 재원을 마련하면 보호가 절실한 사람이 손해를 볼 수 있다.",
      "OECD의 연구도 이 문제를 보여준다. 기존 복지와 세금 공제를 없애고 그 재원으로 기본소득을 지급하는 가상 분석에서는 일부 저소득층의 형편이 오히려 나빠졌다. 필요에 따라 받던 지원보다 모두에게 나눠주는 금액이 적어질 수 있기 때문이다. 모든 기본소득안이 같은 결과를 낸다는 뜻은 아니지만, 보편 지급 자체가 빈곤 해결을 보장하지는 않는다. [4]",
      "보수의 관점에서 이 반론은 중요하다. 복지의 목적이 어려운 시민의 회복이라면, 정책의 성과는 지급 대상의 숫자보다 그 시민이 실제로 얼마나 나아졌는지에 달려 있다. 넓게 나눠준다는 이유로 지원의 깊이가 얕아지는 것은 좋은 복지라고 보기 어렵다."
    ]},
    { title: "보수의 소득 안전판은 전 국민 일괄 지급과 다르다", paragraphs: [
      "기본소득 지지자들은 보수 경제학자 밀턴 프리드먼도 비슷한 구상을 했다고 설명한다. 하지만 프리드먼이 제안한 ‘음의 소득세’는 소득이 일정 기준보다 낮으면 돈을 지원하고, 소득이 늘수록 지원액을 줄이는 방식이다. 복잡한 복지를 단순하게 만들면서 낮은 소득을 보완하려는 구상이었다. 전 국민에게 같은 금액을 지급하는 기본소득과는 차이가 있다. [2]",
      "보수적 관점에서도 생계의 안전판은 논의할 수 있다. 다만 그것이 끝없이 커지는 정부 지출을 뜻하지는 않는다. 개인의 선택을 넓히면서 지원을 필요한 곳에 집중하고, 시민과 기업의 활동에 가해지는 부담을 줄이는 방향이 함께 고려된다."
    ]},
    { title: "농어촌 실험의 비용과 성과를 함께 읽는다", paragraphs: [
      "지금 정부의 농어촌 기본소득은 이 기준으로 살필 대상이다.",
      "2026년 10월 13일 기준, 올해 시작한 시범사업은 현재 17개 군에서 주민에게 월 15만원 상당의 지역사랑상품권을 지급한다. 농민만 받는 수당이 아니라 대상 지역 주민에게 지급하는 사업이다. 정부는 내년에 약 18개 군을 추가하고 국비 부담률을 40%에서 50%로 높이는 확대안을 추진하고 있다. 최종 규모와 내용은 국회의 예산 확정에 따라 달라질 수 있다. [5]",
      "이 사업은 전국적인 기본소득과 다르다. 지역 안에서는 소득과 관계없이 지급하지만, 어느 지역에 사느냐에 따라 지급 여부가 달라진다. 사용처가 제한된 상품권이라는 점에서도 개인이 자유롭게 쓰는 현금과 차이가 있다.",
      "정부가 지방비 부담을 줄이는 방향을 제시한 것은 사실이다. 그러나 국비 비중을 높인다고 국민 전체의 비용이 줄어드는 것은 아니다. 지방정부가 부담하던 일부를 중앙정부가 부담하게 되는 것이다. 돈의 출처가 달라져도 납세자의 부담은 남는다.",
      "기존 사업과의 충돌도 있었다. 매일신문은 지난해 12월 사설에서 기본소득 재원을 마련하는 과정에서 다른 수당과 기반시설 예산이 압박받는 문제를 비판했다. 새로운 지급을 위해 기존 보호와 지역의 생활 기반을 약화시킨다면, 주민이 얻은 것과 잃은 것을 함께 계산할 필요가 있다. [6]",
      "성과 발표 역시 확대의 근거로 곧바로 받아들이기 어렵다. 지난 10월 7일 보도된 농식품부 자료에서는 먼저 사업을 시작한 10개 군의 인구가 선정 전월보다 5.0% 늘고 지역화폐 가맹점도 증가한 것으로 나타났다. 긍정적인 변화로 살필 수 있다. [7]",
      "그러나 한 지역으로 사람이 옮겨왔다고 국가 전체의 인구 감소가 해결된 것은 아니다. 지원 때문에 잠시 이동했는지, 일자리를 얻어 정착했는지, 지급이 끝난 뒤에도 남는지는 다른 질문이다. 가맹점이 늘었다는 사실도 지속적인 매출과 고용 증가를 모두 설명하지는 않는다.",
      "농민신문도 지난해 12월 사설에서 인구유치가 지역 간 뺏고 뺏기는 경쟁이 될 수 있다고 지적했다. 이 신문이 강조한 것은 주민의 삶의 질과 공동체 유지였다. 사업에 기대를 거는 쪽에서도 인구 숫자만으로 성공을 판단하지는 않았다. [8]"
    ]},
    { title: "해외 실험은 전국 확대의 보증서가 아니다", paragraphs: [
      "해외 실험도 신중함을 뒷받침한다. 핀란드 실험에서는 실업급여 수급자에게 조건 없이 지급한 뒤 더 나은 주관적 안녕감 등이 보고됐지만, 고용 효과는 제한적이었고 해석에도 제약이 있었다. 미국 두 주의 저소득층을 대상으로 한 연구의 2024년 보고서에서는 월 1,000달러를 지급받은 집단의 노동시장 참여와 노동시간이 일부 감소했다. 두 실험 모두 전 국민 기본소득을 시행한 사례는 아니다. [9] [10] [11]",
      "돈을 받은 사람의 생활이 편해질 수 있다는 사실과 사회 전체가 그 제도를 지속할 수 있다는 판단은 다르다. 지급받는 집단을 관찰하는 실험만으로 재원을 부담하는 시민의 변화와 장기적인 경제 영향을 모두 확인하기는 어렵다."
    ]},
    { title: "기본소득은 검증할 과제이며, 확대가 예정된 약속은 아니다", paragraphs: [
      "씨앗은 기본소득을 사회가 당연히 받아들일 권리의 이름보다, 비용과 효과를 엄격하게 검증할 정책 과제로 본다.",
      "기본소득이라는 단어를 없앨 이유는 없다. 다만 ‘기본’이라는 말이 검증보다 앞설 이유도 없다. 최소한의 삶을 보호한다는 목적에 동의하는 것과 전 국민 일괄 지급에 동의하는 것은 별개다.",
      "씨앗의 재정 팽창 반대 입장에서 실험의 기준은 분명하다. 기간과 총예산이 정해져 있는지, 기존의 취약계층 보호가 약해지지 않는지, 시행하지 않은 지역과 비교했을 때 실제 변화가 있는지, 효과가 부족하면 중단하거나 축소할 수 있는지가 핵심이다. 실험을 시작하는 순간 영구 지급과 전국 확대가 예정된다면 검증의 의미는 약해진다.",
      "시민의 자립은 지원금을 받는 상태에서 끝나지 않는다. 다시 일하고, 배우고, 도전하고, 자기 삶을 선택할 수 있는 여건까지 포함한다. 기본소득이 그 여건을 넓혔는지, 다른 정책보다 적은 부담으로 더 나은 결과를 냈는지가 판단의 기준이다.",
      "모두에게 돈을 주었다는 사실보다, 가장 어려운 시민이 얼마나 회복했고 그 과정에서 국민이 얼마를 부담했는지가 기본소득의 성적표다."
    ]}
  ],
  chart: {
    title: "같은 예산 100만원, 지원 방식에 따라 달라지는 몫",
    headers: ["구분", "10명 모두에게 지급", "어려운 2명에게 집중"],
    rows: [["지원받는 사람", "10명", "2명"], ["1인당 지원액", "10만원", "50만원"], ["총예산", "100만원", "100만원"], ["살필 한계", "필요가 큰 사람에게 부족할 수 있다", "선정에서 필요한 사람이 빠질 수 있다"]],
    note: "지원 대상의 필요가 서로 다르다는 점을 설명하는 가상 예시다. 실제 사업 수치나 두 방식의 효과를 입증한 실험 결과가 아니다.",
    afterSection: 2
  },
  sources
};

export const basicIncomeArticleEn: SeedLanguageArticle = {
  ...basicIncomeArticleKo,
  term: "Basic income",
  title: "Basic Income: What ‘For Everyone’ Leaves Out",
  subtitle: "An income safety net and equal payments to everyone are different policies",
  summary: "SEED views basic income as a recurring fiscal commitment borne by citizens. Critics within the progressive camp warn that equal payments can weaken protection for people with the greatest needs. Costs, outcomes and a credible stopping rule matter more than expansion.",
  keyPoints: ["Equal payments do not necessarily provide the protection people need.", "Adding payments increases expenditure; replacing existing benefits can leave vulnerable people worse off.", "Basic income warrants cautious trials with fixed budgets, evaluation and exit criteria."],
  leadParagraphs: [
    "A financially comfortable person and someone unable to pay this month’s rent receive the same amount. That is the equality promised by basic income. With a fixed budget, however, money paid to the comfortable person is money unavailable for additional help to someone in greater need.",
    "Is giving everyone the same amount always fair? This is where the debate begins."
  ],
  heroImage: { ...basicIncomeArticleKo.heroImage, alt: "Symbolic illustration of a limited supply of coins divided equally among Korean citizens in different financial circumstances", caption: "Equal amounts and adequate protection are different. The test is how much recovery a limited budget enables.", credit: "AI image" },
  sections: [
    { title: "A fiscal commitment borne by citizens", paragraphs: [
      "SEED defines basic income as regular payments to individuals without testing their income or employment status, and views it as a fiscal commitment maintained at citizens’ collective expense. The first part describes the mechanism; the second states SEED’s editorial perspective.",
      "The Basic Income Earth Network defines it as a periodic cash payment to every individual without means testing or a work requirement. ‘Basic’ does not itself guarantee a payment sufficient to cover basic living costs. Even a small payment can qualify by its design. [1]",
      "The name highlights money received. It leaves out the taxes needed to fund it, other support that may be cut, and debts passed to future taxpayers.",
      "SEED’s caution follows from its opposition to expanding public expenditure. A recurring payment creates an ongoing obligation greater than a one-off expense. Funding must continue for as long as payments do. Calling a scheme ‘basic’ does not justify shifting today’s support onto tomorrow’s taxpayers."
    ]},
    { title: "A dividend from shared assets differs from tax-funded support", paragraphs: [
      "Not every early proposal began with government cash assistance. In Agrarian Justice (1797), Thomas Paine proposed an endowment at adulthood and payments at older ages, arguing that land had originally been humanity’s common inheritance. In 1848, Joseph Charlier proposed a regular payment to all citizens based on income from land. These proposals included the idea of returning a share of common assets. [2]",
      "Distributing actual returns from shared assets differs from financing payments through taxes or debt. The distinction still matters. A shared label does not mean a shared funding model."
    ]},
    { title: "The strongest objection also comes from within the left", paragraphs: [
      "The strongest progressive argument is that existing welfare misses people: precarious workers, people unable to document their income, and unpaid family carers. Universal payments can reduce exclusion and the stigma of proving poverty. An independent income may also make it easier to refuse abusive working conditions. [2]",
      "That concern is understandable. But the existence of gaps does not, by itself, justify equal payments to wealthy people. Improving support for excluded citizens and paying everyone have different costs and effects.",
      "An important objection to basic income comes from within the progressive camp itself.",
      "Welfare researcher Oh Geon-ho argues that universal payments can eliminate formal exclusion while failing to provide adequate protection to people in real hardship. In plain terms, more people may receive something without the most vulnerable becoming adequately protected. [3]",
      "Imagine a support budget of KRW 1 million for ten people. Equal distribution gives each KRW 100,000. If two people face severe hardship, concentrating that budget on them provides KRW 500,000 each.",
      "Real policies are more complicated. Targeting may stigmatize recipients or miss eligible people. Still, the example illustrates a constraint: equal amounts are not the same as adequate protection for different needs."
    ]},
    { title: "Adding payments raises expenditure; substitution can weaken protection", paragraphs: [
      "Disability, serious illness and care needs create different costs. A uniform payment cannot readily accommodate them. Keeping tailored benefits and adding basic income increases total expenditure. Cutting those benefits to finance it can harm people who need protection most.",
      "OECD modelling illustrates the problem. In hypothetical reforms replacing existing benefits and tax allowances with basic income, some low-income households became worse off. A uniform payment can be smaller than the support they previously received. This does not describe every possible scheme, but universality alone does not guarantee poverty reduction. [4]",
      "From a conservative perspective, this objection matters. If welfare aims to help people recover from hardship, its performance depends on actual improvement rather than the number of recipients. Broader coverage with shallower protection is not necessarily better welfare."
    ]},
    { title: "A conservative income floor is not universal equal payment", paragraphs: [
      "Advocates sometimes cite conservative economist Milton Friedman. His negative income tax, however, provides support below an income threshold and reduces that support as earnings rise. It sought to simplify welfare and supplement low incomes. It differs from paying everyone an identical amount. [2]",
      "An income safety net can be discussed from a conservative perspective without accepting continuously expanding government expenditure. Individual choice, focused support and the burden imposed on citizens and businesses belong in the same assessment."
    ]},
    { title: "Read the rural trial’s costs alongside its results", paragraphs: [
      "The current government’s rural basic income program warrants assessment against these standards.",
      "As of October 13, 2026, the pilot covers 17 counties and pays eligible residents KRW 150,000 a month in local-use vouchers. It serves residents of selected areas, not only farmers. The government proposes adding roughly 18 counties next year and increasing the national funding share from 40% to 50%. Final scale and details remain subject to parliamentary budget approval. [5]",
      "This is not nationwide basic income. Payments are universal within selected areas, but eligibility depends on location. Vouchers with restricted uses also differ from freely spendable cash.",
      "The proposal would reduce local governments’ funding burden. Raising the national share does not reduce citizens’ total cost: it transfers part of the obligation from local to national government. Taxpayers still finance it.",
      "Conflicts with existing programs have also arisen. A December 2025 Maeil Shinmun editorial criticized pressure on other allowances and infrastructure budgets as local governments financed the scheme. If new payments weaken existing protection and everyday infrastructure, residents’ gains and losses both count. [6]",
      "Reported results do not automatically establish a case for expansion. Agriculture ministry data reported on October 7 showed the population of the first ten counties rising by 5.0% from the month before selection, with local-voucher merchants also increasing. These are positive indicators worth examining. [7]",
      "Migration into one area does not resolve national population decline. Temporary movement, settlement linked to employment, and continued residence after payments end are different outcomes. More registered merchants do not alone establish sustained sales or employment growth.",
      "A December 2025 Nongmin newspaper editorial likewise warned that population recruitment can become competition between regions. It emphasized quality of life and community continuity. Even a publication receptive to the program did not treat population counts alone as proof of success. [8]"
    ]},
    { title: "Overseas experiments do not guarantee nationwide viability", paragraphs: [
      "International trials also support caution. Finland’s experiment with unemployment-benefit recipients reported better subjective well-being, but employment effects were limited and interpretation faced constraints. A 2024 report on low-income recipients in two US states found some reductions in labor-force participation and hours among people receiving USD 1,000 monthly. Neither was a trial of universal payments to an entire population. [9] [10] [11]",
      "Making recipients’ lives easier and sustaining a system across society are different findings. Observing recipients alone cannot establish all the effects on those financing the payments or the long-term economy."
    ]},
    { title: "A policy to test, not an expansion promised in advance", paragraphs: [
      "SEED treats basic income as a policy requiring rigorous scrutiny of costs and outcomes rather than an entitlement society is obliged to accept in advance.",
      "There is no reason to erase the term. Nor should the word ‘basic’ take precedence over evidence. Agreement on protecting minimum living standards is distinct from agreement on equal payments to everyone.",
      "SEED’s opposition to fiscal expansion gives trials clear criteria: a fixed duration and total budget, preservation of existing protection for vulnerable people, comparison with untreated areas, and the ability to stop or scale back when results fall short. If permanent payments and nationwide expansion are predetermined, the trial loses much of its evaluative meaning.",
      "Independence extends beyond receiving a payment. It includes opportunities to work again, learn, take risks and choose a life. The test is whether basic income expands those opportunities and produces better outcomes at lower cost than alternatives.",
      "Its report card is not simply that everyone received money. It is how much the most vulnerable recovered, and how much citizens paid for that recovery."
    ]}
  ],
  chart: {
    title: "One KRW 1 million budget, two distributions",
    headers: ["Measure", "Equal payments to ten", "Concentrated on two in hardship"],
    rows: [["Recipients", "10", "2"], ["Payment per person", "KRW 100,000", "KRW 500,000"], ["Total budget", "KRW 1 million", "KRW 1 million"], ["Limitation to examine", "May be inadequate for greater needs", "Targeting may exclude people who need help"]],
    note: "Hypothetical illustration of different needs. These are not figures from an actual scheme or experimental evidence of either design’s effectiveness.",
    afterSection: 2
  },
  sources: sources.map((source, index) => ({ ...source, label: ["BIEN, Definition of basic income", "Stanford Basic Income Lab, Definition and intellectual history", "Kyunghyang Shinmun, Discussion with Oh Geon-ho and Lee Seung-yoon, Jan 1, 2021", "OECD, Basic Income as a Policy Option: Can It Add Up?, 2017", "Newsis, Rural pilot expansion and national funding share, Oct 8, 2026", "Maeil Shinmun editorial, Local fiscal burden, Dec 22, 2025", "Yonhap, Rural pilot population and merchant indicators, Oct 7, 2026", "Nongmin editorial, Conditions for the rural pilot, Dec 29, 2025", "Kela and partners, Evaluation of the Finnish Basic Income Experiment, 2020", "University of Helsinki, Interpretation and limitations of Finland’s experiment, 2020", "Vivalt et al., US guaranteed-income experiment, 2024 report"][index] }))
};
