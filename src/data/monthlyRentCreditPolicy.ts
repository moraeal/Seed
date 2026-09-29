import type { TaxPolicy } from "./taxWatch";

const limitBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221532/detailRP?yType=I";
const carryBill = "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221529/detailRP";
const government = "https://www.mofe.go.kr/nw/nes/detailNesDtaView.do?menuNo=4010100&searchBbsId1=MOSFBBS_000000000028&searchNttId1=MOSF_000000000078809";
export const monthlyRentCreditPolicy: TaxPolicy = {
  slug: "monthly-rent-credit-2026-bills", importance: 91, checkedAt: "2026-09-29",
  status: { ko: "정부·의원 개정안 제안", en: "Government and lawmaker proposals" },
  title: { ko: "월세 세액공제 한도·미사용액 이월 제안", en: "Proposals to raise the rent credit cap and carry unused credits" },
  summary: { ko: "정부는 공제 대상 월세 한도를 1,200만 원으로, 의원안은 1,500만 원으로 높이려 합니다. 별도 의원안은 쓰지 못한 세액공제의 10년 이월을 제안합니다. 모두 제안 단계입니다.", en: "The government proposes a KRW 12m eligible-rent cap, lawmakers KRW 15m, and a separate lawmaker bill a ten-year carryforward of unused credits. None has taken effect." },
  affected: { ko: "월세 세입자 · 근로소득자 · 납세자", en: "Renters · Wage earners · Taxpayers" },
  heroImage: { ko: "images/columns/welfare-exit-risk/renter-evening.webp", en: "images/columns/welfare-exit-risk/renter-evening.webp", alt: { ko: "월세와 생활비 서류를 보는 세입자의 AI 이미지", en: "AI image of a tenant reviewing rent and household bills" }, caption: { ko: "월세 부담과 실제 사용한 공제액을 함께 봐야 합니다. AI 이미지.", en: "Measure both rent burden and the credit actually used. AI image." } },
  processNote: { ko: "2026년 9월 22일 발의된 의안 2221532·2221529 및 정부의 2026 세제개편안입니다. 국회 심사·통과와 시행은 아직 확인되지 않았습니다.", en: "Bills 2221532 and 2221529 were introduced September 22, alongside a separate 2026 government reform proposal. Passage and commencement remain pending." },
  oneSentence: { ko: "공제 대상 월세액의 상한과 세입자가 실제 세금에서 쓴 공제액은 다릅니다.", en: "Eligible rent used to calculate a credit differs from the amount a tenant can actually use." },
  keyChanges: [
    { title: { ko: "월세액 상한", en: "Eligible rent cap" }, body: { ko: "현행 연 1,000만 원에서 정부안은 1,200만 원, 의원안 2221532는 1,500만 원으로 확대를 제안합니다.", en: "The annual cap is KRW 10m now; the government proposes KRW 12m and Bill 2221532 KRW 15m." } },
    { title: { ko: "소득요건과 이월", en: "Eligibility and carryforward" }, body: { ko: "2221532는 총급여 9,000만 원·종합소득 8,000만 원 요건과 청년 17% 공제율을 제안합니다. 2221529는 미사용 공제액의 10년 이월을 별도로 제안합니다.", en: "Bill 2221532 proposes KRW 90m gross-pay and KRW 80m comprehensive-income limits and a 17% youth rate; Bill 2221529 separately proposes a ten-year carryforward." } },
  ],
  changeMap: [
    { title: { ko: "현행", en: "Current law" }, items: [{ ko: "연간 공제 대상 월세액 1,000만 원 상한", en: "KRW 10m annual eligible-rent cap" }] },
    { title: { ko: "제안", en: "Proposals" }, items: [{ ko: "정부 1,200만 원·의원 1,500만 원; 별도 이월안", en: "Government KRW 12m; lawmaker KRW 15m; separate carryforward" }] },
    { title: { ko: "확인할 결과", en: "Results to measure" }, items: [{ ko: "실제 사용액·소득별 혜택·세수 감소", en: "Credits actually used, distribution by income and revenue cost" }] },
  ],
  officialRationale: { ko: "발의자는 주거비 상승에 비해 현행 월세 공제액과 대상 기준이 부족하며, 세금이 적어 공제를 다 쓰지 못하는 세입자가 있다고 설명합니다.", en: "The sponsors say rising housing costs have outpaced eligibility and caps, while some tenants have insufficient tax to use the full credit." },
  risks: [{ ko: "산출세액이 적으면 상한 확대의 실제 혜택이 작습니다.", en: "With little tax liability, a higher cap yields little immediate relief." }, { ko: "10년 동안 이월액을 쓰지 못하면 혜택이 소멸할 수 있습니다.", en: "Unused carried credits may expire if they cannot be used within ten years." }],
  questions: [{ ko: "소득구간별 새 수혜자와 실제 세금 감소액은 얼마입니까?", en: "How many new beneficiaries and how much actual relief by income group?" }, { ko: "이월한 공제액 중 실제 사용·소멸액은 얼마입니까?", en: "How much carried credit will be used or expire?" }, { ko: "시행연도와 다른 공제와의 적용 순서는 무엇입니까?", en: "What are the effective year and ordering against other credits?" }],
  seedView: { ko: "월세 부담을 덜자는 목적은 분명합니다. 그러나 법안에 적힌 한도는 세입자의 통장에 입금되는 돈이 아닙니다. 세액이 적은 사람에게는 이월안도 미래의 가능성입니다. 국회는 소득별 실제 사용액과 소멸액을 보여줘야 합니다.", en: "Reducing rent burden is a clear objective. But a statutory cap is not money deposited into a tenant's account, and carryforward remains a future possibility for those with little tax. Parliament should publish actual use and expirations by income." },
  timeline: [{ date: "2026-08-03", title: { ko: "정부 2026 세제개편안 발표", en: "Government announces 2026 tax reform" } }, { date: "2026-09-22", title: { ko: "의원안 2221532·2221529 발의", en: "Bills 2221532 and 2221529 introduced" } }, { date: "2026-09-29", title: { ko: "씨앗의 소리 제안 요지 확인", en: "SEED VOICE checks proposal summaries" } }],
  sources: [{ label: { ko: "의안 2221532 공식 요지", en: "Official Bill 2221532 summary" }, url: limitBill }, { label: { ko: "의안 2221529 공식 요지", en: "Official Bill 2221529 summary" }, url: carryBill }, { label: { ko: "2026 세제개편안", en: "2026 tax reform proposal" }, url: government }],
};
