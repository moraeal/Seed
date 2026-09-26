import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import ContentAccountability from "../components/ContentAccountability";

const rows = [
  { year: 2016, raised: 5742, distributed: 5453 },
  { year: 2017, raised: 5996, distributed: 5553 },
  { year: 2018, raised: 5965, distributed: 8444 },
  { year: 2019, raised: 6541, distributed: 5958 },
  { year: 2020, raised: 8461, distributed: 7261 },
  { year: 2021, raised: 7619, distributed: 7104 },
  { year: 2022, raised: 7925, distributed: 7334 },
  { year: 2023, raised: 8305, distributed: 7446 },
  { year: 2024, raised: 8477, distributed: 7896 },
  { year: 2025, raised: 9864, distributed: 9860 },
];

const performance = "https://www.chest.or.kr/lf/intrcn/initBsnsrslt.do";
const disclosure = "https://www.chest.or.kr/lf/ct/initMngmtpblntf.do";
const photo = "/images/monitoring/community-chest-watch-ledger.webp";

export default function CommunityChestWatchArticle({ language }: { language: "ko" | "en" }) {
  const ko = language === "ko";
  const title = ko
    ? "10년 사이 모금액 72% 증가…사랑의열매가 바꾼 삶은 얼마나 보이는가"
    : "Donations rose 72% in ten years. What changed for people?";
  return <article className="bg-paper pb-16">
    <header className="border-b border-green-deep/15 bg-ivory">
      <div className="container-page max-w-5xl py-8 sm:py-12">
        <Link to="/monitoring" className="text-link text-xs"><ArrowLeft size={14}/>{ko ? "공익감시 목록" : "Public-Interest Watch"}</Link>
        <p className="section-kicker mt-6">PUBLIC-INTEREST WATCH · {ko ? "사랑의열매" : "COMMUNITY CHEST OF KOREA"}</p>
        <h1 className="article-detail-title mt-3">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-charcoal/70">{ko
          ? "모금과 배분의 10년을 한눈에 놓고, 그 돈이 시민의 삶에 남긴 변화를 계속 확인합니다."
          : "Following ten years of fundraising and allocation, then testing what the money changed in people's lives."}</p>
        <p className="mt-4 text-xs text-charcoal/50">{ko ? "자료 확인·수정 2026.09.24 · 추적 중" : "Verified and updated 24 September 2026 · Ongoing watch"}</p>
      </div>
    </header>

    <div className="container-page max-w-4xl pt-8 sm:pt-11">
      <figure>
        <img src={photo} alt={ko ? "사랑의열매 상징이 놓인 탁자에서 기부금 자료를 살피는 장면" : "A reader examines donation records beside a card depicting the Community Chest emblem"} className="aspect-[16/9] w-full object-cover"/>
        <figcaption className="mt-2 text-xs leading-5 text-charcoal/55">{ko ? "사랑의열매를 상징하는 표식과 자료를 함께 배치한 AI 이미지. 실제 회계 문서나 취재 현장 사진은 아닙니다." : "AI editorial illustration by Seed Voice depicting the Community Chest symbol and a donation ledger. It is not a photograph of actual records or field reporting."}</figcaption>
      </figure>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {(ko ? [
          ["2025년 모금", "9,864억 원", "정부예산이 아닌 기부금 모금 실적"],
          ["2025년 배분", "9,860억 원", "지원의 규모, 효과와는 구분"],
          ["지정기탁", "75.4%", "기부자가 용도를 정한 배분액 비중"],
        ] : [
          ["2025 donations", "KRW 986.4bn", "Funds raised, not a government budget"],
          ["2025 allocations", "KRW 986.0bn", "Spending is not an impact measure"],
          ["Donor-directed", "75.4%", "Share of allocations restricted by donors"],
        ]).map(([label, value, note]) => <div key={label} className="border-t-4 border-green-deep bg-white p-5"><p className="text-xs font-bold text-charcoal/60">{label}</p><p className="mt-2 text-2xl font-extrabold text-navy">{value}</p><p className="mt-2 text-xs leading-5 text-charcoal/55">{note}</p></div>)}
      </div>

      <div className="mx-auto mt-11 max-w-[720px] space-y-5 text-[16px] leading-8 text-charcoal/85 sm:text-[17px]">
        <p>{ko ? "2016년 사랑의열매에 모인 돈은 5,742억 원이었다. 2025년에는 9,864억 원이다. 10년 사이 약 72% 늘었다. 큰돈을 모아 위기의 이웃에게 보내는 힘은 소중하다. 그런데 지원받은 사람의 생활이 얼마나 나아졌는지를 알려면 모금액과 배분액만으로는 답이 나오지 않는다. 씨앗이 따라갈 것은 바로 그 빈칸이다." : "Community Chest of Korea raised KRW 574.2 billion in 2016 and KRW 986.4 billion in 2025, an increase of about 72%. Its ability to mobilize help matters. But the amount raised and allocated does not tell us whether recipients' lives improved. That is the gap this watch will follow."}</p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-navy">{ko ? "돈의 흐름: 10년을 한 줄로 놓아보니" : "Ten years of donations and allocations"}</h2>
        <p className="mt-3 text-sm leading-7 text-charcoal/65">{ko ? "단위는 억 원이다. 2018년 배분 급증과 2020년 모금 증가의 사업별 이유를 계속 확인한다." : "Figures are in KRW 100 million. We will investigate the sharp 2018 allocation and the 2020 rise in giving by program."}</p>
        <figure className="mt-5 bg-white p-4 sm:p-6" aria-label={ko ? "2016년부터 2025년까지 연도별 모금과 배분 비교" : "Annual donations and allocations, 2016 to 2025"}>
          <div className="flex justify-end gap-4 text-xs"><span className="flex items-center gap-1.5"><i className="size-2.5 bg-green-deep"/>{ko ? "모금" : "Raised"}</span><span className="flex items-center gap-1.5"><i className="size-2.5 bg-gold"/>{ko ? "배분" : "Allocated"}</span></div>
          <div className="mt-4 flex h-44 items-end gap-1 border-b border-charcoal/20 sm:gap-3">{rows.map((r) => <div key={r.year} className="flex h-full flex-1 items-end justify-center gap-0.5" title={`${r.year}: ${r.raised.toLocaleString()} / ${r.distributed.toLocaleString()}`}><div className="w-2/5 bg-green-deep" style={{ height: `${r.raised / 10000 * 100}%` }}/><div className="w-2/5 bg-gold" style={{ height: `${r.distributed / 10000 * 100}%` }}/></div>)}</div>
          <div className="mt-2 flex gap-1 text-center text-[10px] text-charcoal/60 sm:gap-3">{rows.map((r) => <span key={r.year} className="flex-1">{String(r.year).slice(2)}</span>)}</div>
          <figcaption className="mt-3 text-xs leading-5 text-charcoal/55">{ko ? "2021년부터 배분 실적의 집계 기준이 바뀌었다. 자세한 금액은 아래 표 참조." : "The allocation definition changes in 2021. See the table below for exact figures."}</figcaption>
        </figure>
        <div className="mt-5 overflow-x-auto border border-green-deep/15 bg-white">
          <table className="w-full min-w-[520px] text-sm"><thead className="bg-green-deep text-white"><tr><th className="p-3 text-left">{ko ? "연도" : "Year"}</th><th className="p-3 text-right">{ko ? "모금" : "Raised"}</th><th className="p-3 text-right">{ko ? "배분" : "Allocated"}</th><th className="p-3 text-left">{ko ? "읽을 지점" : "Note"}</th></tr></thead><tbody>{rows.map((r) => <tr key={r.year} className="border-t border-green-deep/10"><td className="p-3 font-bold">{r.year}</td><td className="p-3 text-right tabular-nums">{r.raised.toLocaleString()}</td><td className="p-3 text-right tabular-nums">{r.distributed.toLocaleString()}</td><td className="p-3 text-xs text-charcoal/65">{r.year === 2021 ? (ko ? "배분 실적에 복권기금사업 포함 시작" : "Lottery-fund programs added to allocations") : r.year === 2018 ? (ko ? "배분 급증 원인 확인 중" : "Allocation spike under review") : r.year === 2020 ? (ko ? "모금 급증 원인 확인 중" : "Donation increase under review") : ""}</td></tr>)}</tbody></table>
        </div>
        <p className="mt-3 text-xs leading-6 text-charcoal/55">{ko ? "자료: 사랑의열매 사업성과. 원자료 단위 백만 원을 억 원으로 반올림. 중앙회·지회 합계. 2021년부터 복권기금사업 실적이 배분액에 포함돼 이전 연도와 정의가 다르다. 한 해 모금과 배분의 차이는 미집행액이 아니다." : "Source: Community Chest annual performance data, national office plus branches, rounded from KRW million. Lottery-fund projects enter the allocation series in 2021, so earlier years are not strictly comparable. Annual donations minus allocations do not equal unspent cash."} <a className="underline" href={performance} target="_blank" rel="noreferrer">{ko ? "원자료" : "Original data"}</a></p>
      </section>

      <section className="mx-auto mt-12 max-w-[720px] space-y-5 text-[16px] leading-8 text-charcoal/85 sm:text-[17px]">
        <h2 className="text-2xl font-extrabold text-navy">{ko ? "9,860억 원은 누구의 선택을 따라갔나" : "Who directed the KRW 986 billion?"}</h2>
        <p>{ko ? "2025년 배분 중 지정기탁은 7,430억 원이다. 기부자의 뜻이 분명한 돈이 모이고 쓰인다는 점은 강점이다. 그러나 기부자가 잘 알지 못하는 지역의 작은 문제는 누가 발견할까. 같은 공시에서 공개 신청사업은 301억 원, 전체 배분의 3.1%다." : "Donor-directed giving accounted for KRW 743.0 billion in 2025. Honoring donor intent is a strength. Yet who finds local needs donors do not already know? Open application programs accounted for KRW 30.1 billion, 3.1% of allocations."}</p>
        <p>{ko ? "3.1%만으로 작은 단체가 배제됐다고 판정할 수는 없다. 기획사업이나 지정기탁에서도 지원받을 수 있다. 필요한 것은 신청 단체의 규모와 선정률, 처음 지원받은 단체의 비율, 반복 지원 비율, 지역별 편차다. 이 자료가 있어야 익숙한 기관뿐 아니라 새 시민 활동에도 기회가 열리는지 판단할 수 있다." : "That 3.1% does not prove smaller groups were excluded; planned or donor-directed programs may also support them. We need application and selection rates by organization size, first-time grants, repeat grants and region before judging access."}</p>
        <h2 className="pt-5 text-2xl font-extrabold text-navy">{ko ? "배분은 실적이다. 변화는 따로 확인해야 한다" : "Allocation is an output. Change needs evidence."}</h2>
        <p>{ko ? "2025년 기초생계 지원은 4,744억 원으로 배분의 48.1%다. 급한 생활비가 전달됐다면 중요한 성과다. 하지만 돈을 합산한 표는 지원 뒤의 삶을 보여주지 않는다. 위기가정이라면 이후 주거와 소득이 안정됐는지, 다시 위기에 놓인 사람은 얼마나 되는지 살펴야 한다. 교육·자립 사업이라면 참여 인원과 함께 일정 기간 뒤 취업·학업 유지도 확인해야 한다." : "Basic-living support received KRW 474.4 billion, 48.1% of 2025 allocations. Emergency help has real value. Yet spending totals do not show whether housing and income stabilized, crises recurred, or education and employment endured after support ended."}</p>
      </section>

      <aside className="mt-8 border-l-4 border-gold bg-white p-6"><h3 className="font-extrabold text-navy">{ko ? "사업감시의 세 칸" : "Three measures of a program"}</h3><p className="mt-3 text-sm leading-7 text-charcoal/75">{ko ? "투입: 얼마를 썼나 → 도달: 누구에게 닿았나 → 변화: 그 뒤 무엇이 달라졌나. 공개된 합계는 첫째와 일부 둘째를 보여준다. 셋째는 개별 사업 평가서, 조사 방식, 중단·실패한 사업까지 대조해야 한다. 현재 확인한 자료만으로 전체 사업의 사회적 효과를 수치화하지 않는다." : "Input: money spent → Reach: people served → Change: outcomes sustained. Published aggregates show the first and part of the second. Individual evaluations, survey methods and failed or discontinued projects are needed for the third. These records alone cannot establish overall social impact."}</p></aside>

      <section className="mx-auto mt-12 max-w-[720px] space-y-5 text-[16px] leading-8 text-charcoal/85 sm:text-[17px]">
        <h2 className="text-2xl font-extrabold text-navy">{ko ? "커지는 이월 재원은 무슨 계획을 품고 있나" : "What is the plan for carried-forward resources?"}</h2>
        <p>{ko ? "공식 수입지출현황의 ‘차기이월 순자산’은 2021년 약 8,181억 원에서 2025년 약 1조 962억 원으로 늘었다. 이 수치는 재무상태표의 자본총계와도 다르며, 전액 곧바로 쓸 수 있는 현금도 아니다. 씨앗이 요구할 설명은 언제 모였고, 어떤 지정조건이 붙었고, 언제 누구에게 쓰일 돈인지를 시민이 따라갈 수 있는 표다." : "The disclosed carried-forward net-assets figure increased from roughly KRW 818.1 billion in 2021 to KRW 1.0962 trillion in 2025. It differs from balance-sheet equity and is not all immediately available cash. Citizens need a ledger showing when funds arrived, their restrictions and planned spending dates."}</p>
        <p>{ko ? "사랑의열매는 큰 기부를 모아 위기의 현장으로 보낼 역량을 갖고 있다. 바로 그 규모 때문에 설명의 책임도 크다. 시민이 궁금한 것은 소박하다. 내가 낸 돈으로 누가 숨을 돌렸고, 그 변화가 얼마나 오래 갔는가. 다음에는 누가 기회를 얻는가." : "The Chest can mobilize major donations for people in crisis. Its scale makes explanation more necessary. Who found relief, how long did the improvement last, and who gets a chance next?"}</p>
      </section>

      <section className="mt-12 border-t-2 border-navy pt-7"><h2 className="text-2xl font-extrabold text-navy">{ko ? "계속 확인할 네 가지" : "What we will check next"}</h2><ol className="mt-5 grid gap-3 sm:grid-cols-2">{(ko ? ["매년 결산 뒤 10년 표를 갱신하고 기준 변경과 이례적인 해의 사업별 원인을 적는다.", "지정기탁·신청·기획·긴급지원 비중과 신규·소규모 단체의 선정률을 비교한다.", "사업 종료 6~12개월 뒤 생활 안정·자립 유지·재위기 비율과 조사 누락을 확인한다.", "이월 재원의 발생연도·지정조건·집행예정일을 대조하고 기관 답변을 날짜와 함께 반영한다."] : ["Update the ten-year series after each annual close, noting definition changes and unusual years.", "Track allocation categories and first-time or small-group grant selection rates.", "Check sustained outcomes and missing follow-up data six to twelve months after programs end.", "Trace carryovers by origin, restriction and schedule, with dated institutional replies."]).map((s,i)=><li key={s} className="bg-white p-5 text-sm leading-7"><strong className="mr-3 text-gold">{String(i+1).padStart(2,"0")}</strong>{s}</li>)}</ol></section>

      <section className="mt-10 border-t border-green-deep/15 pt-6"><h2 className="text-xl font-extrabold text-navy">{ko ? "원문과 자료의 한계" : "Primary sources and limits"}</h2><p className="mt-3 text-sm leading-7 text-charcoal/65">{ko ? "2026년 9월 24일 공식 공시를 확인했다. 비율은 공시 금액에서 씨앗이 계산했다. 개별 사업의 실제 효과와 이례적인 연도의 원인은 추가 검증 대상이다. 기관의 설명과 자료가 나오면 날짜를 붙여 보완한다." : "Official disclosures checked on 24 September 2026. Seed Voice calculated percentages from published amounts. Program impact and causes of unusual annual movements remain to be verified. Dated responses and new evidence will be added."}</p><div className="mt-4 flex flex-wrap gap-5 text-sm"><a href={performance} target="_blank" rel="noreferrer" className="text-link">{ko ? "2016~2025 사업성과" : "2016–2025 performance"}<ExternalLink size={14}/></a><a href={disclosure} target="_blank" rel="noreferrer" className="text-link">{ko ? "배분·재무 경영공시" : "Allocation and financial disclosures"}<ExternalLink size={14}/></a></div></section>
      <ContentAccountability postSlug="monitoring-community-chest-of-korea" publishedDate="2026-09-24" />
      <CommentSection postSlug="monitoring-community-chest-of-korea" />
    </div>
  </article>;
}
