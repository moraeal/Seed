import type { SeedColumn } from "../columns";

export const incomeTaxFamilyThresholdColumn: SeedColumn = {
  slug: "family-deduction-work-income-threshold",
  issue: 33,
  title: "월 50만 원 일하면 가족이 아니게 되는 세금 기준",
  subtitle: "정부안 750만 원과 의원안 900만 원 사이, 국회가 밝혀야 할 가구별 효과",
  date: "2026-09-27",
  author: "작은씨앗",
  topicIds: ["tax-finance", "legislation-rights"],
  readMinutes: 7,
  summary: "배우자가 한 달 50만 원씩 일해 연 600만 원을 벌면 현행 근로소득 기준 500만 원을 넘어 가족 기본공제에서 빠진다. 정부와 의원이 다른 기준을 제안한 지금, 세수와 가구별 효과를 공개하고 기준을 정기적으로 고쳐야 한다.",
  heroImage: { src: "images/columns/family-deduction-work-threshold.webp", alt: "가정의 식탁에 놓인 급여명세와 세금 서류 사이로 공제 기준선이 그어진 상징 이미지", caption: "소액의 일이 가족의 부양 부담을 없애지는 않습니다. 세법의 공제 자격은 정해진 소득 기준에서 바뀝니다. 설명을 위한 제작 이미지입니다.", credit: "씨앗의 소리 제작", sourceUrl: "" },
  displayInlineImage: false,
  inlineImage: { src: "images/columns/family-deduction-work-threshold.webp", alt: "식탁 위의 급여명세와 세금 서류", caption: "기준선에서 달라지는 공제 자격", credit: "씨앗의 소리 제작", sourceUrl: "" },
  additionalImages: [{ afterSection: 2, src: "images/briefings/family-deduction-threshold-ko.svg", alt: "현행·정부안·의원안의 근로소득만 있는 가족 기본공제 총급여 기준 비교", caption: "현행 500만 원, 정부안 750만 원, 의원안 900만 원. 뒤의 두 숫자는 아직 제안입니다.", credit: "씨앗의 소리 도표", sourceUrl: "https://mofe.go.kr/nw/mosfnw/detailInfograpView.do?menuNo=4040500&searchNttId1=MOSF_000000000078819", contain: true }],
  sections: [
    { title: "", paragraphs: [
      "배우자가 한 달에 50만 원씩 일해 연 600만 원을 번다. 생활비에는 보탬이 되지만, 현행 세법에서는 근로소득만 있는 배우자의 총급여가 500만 원을 넘었다는 이유로 기본공제 대상에서 빠진다. 가족의 생계는 이어지는데 세법의 가족은 끊긴다.",
      "정부는 올해 세제개편안에서 이 기준을 750만 원으로 올리겠다고 했다. 늦었지만 필요한 조정이다. 9월 23일 정태호 의원 등이 발의한 개정안은 한 걸음 더 나아가 900만 원을 제안한다. 근로소득 외 소득에 적용하는 소득금액 기준도 정부안 300만 원보다 높은 400만 원이다. 둘 다 아직 제안이다. 현행법은 여전히 소득금액 100만 원, 근로소득만 있을 때 총급여 500만 원을 기준으로 삼는다.",
    ] },
    { title: "일을 조금 더 했다는 이유로 사라지는 공제", paragraphs: [
      "가족공제는 일을 하지 말라는 보상이 아니다. 가족의 실제 부양 부담을 세금 계산에 반영하는 장치다. 그런데 배우자나 고령의 부모가 짧은 시간 일해 정해진 선을 넘는 순간, 부양하는 사람의 기본공제는 사라진다. 1인당 150만 원은 환급금이 아니라 소득공제액이지만, 기준선에서 자격이 한꺼번에 바뀐다는 사실은 그대로다.",
      "이번 의원안은 정부안이 놓치는 구간을 드러낸다. 배우자가 다른 소득 없이 연 800만 원을 벌면 정부안의 총급여 750만 원 기준에서는 여전히 공제받지 못한다. 의원안의 900만 원 기준에서는 다른 요건을 갖추면 가능하다. 이 150만 원의 경계에 실제로 몇 가구가 있는가. 추가 감세 규모와 소득 구간별 혜택은 얼마인가. 찬반을 말하기 전에 국회가 공개해야 할 숫자다.",
    ] },
    { title: "기준을 올린 뒤에도 다시 묶어 둘 것인가", paragraphs: [
      "씨앗은 소득요건을 현실에 맞게 높이는 방향을 지지한다. 정부도 기준을 고쳐야 한다는 데 동의했다면, 국회는 750만 원과 900만 원 가운데 어느 쪽이 타당한지 세수와 가구별 영향을 놓고 결정하면 된다. 그 과정에서 나이·생계 요건을 갖춘 가족이 실제로 얼마나 새로 포함되는지도 밝혀야 한다.",
      "더 긴 문제는 다음번이다. 물가와 임금은 해마다 움직이는데 공제 기준은 법을 고칠 때까지 제자리에 남는다. 시간이 지나면 평범한 임금 상승만으로도 다시 가족이 경계선 밖으로 밀려난다. 정부가 별도의 증세 법안을 내지 않아도 공제 대상이 줄어드는 방식이다. 씨앗은 이런 효과까지 조세정책의 일부로 본다.",
      "이번 심사에서 볼 것은 숫자 네 개다. 정부안의 300만 원·750만 원, 의원안의 400만 원·900만 원. 그리고 그 숫자가 바뀔 때의 세수와 가구별 효과다. 국회가 기준을 올린 뒤에도 물가·임금과 공제 대상의 변화를 주기적으로 공개하는지 지켜보겠다. 세금 기준은 시민의 삶이 바뀐 속도를 따라가야 한다.",
    ] },
  ],
  sourceNote: "2026년 9월 27일 기준. 의안 2221581의 내용은 공개된 제안 요약을 대조했고 국회 원문은 직접 열람하지 못했다. 정부안과 의원안은 아직 확정 법률이 아니다. 연 600만·800만 원 사례는 근로소득만 있고 다른 기본공제 요건을 갖춘 배우자를 가정한다. 150만 원은 소득공제액이며 실제 절세액은 다르다.",
  sources: [
    { label: "나라바로 — 의안 2221581 접수 단계", url: "https://narabaro.fingr.io/bills/88583" },
    { label: "까다로운 입법 — 의안 2221581 제안 내용", url: "https://untanglelaw.live/bills/PRC_Z2X6Y0G9E1F7D1E4C0D9K1J7K7I8I5" },
    { label: "국가법령정보센터 — 소득세법 제50조", url: "https://law.go.kr/lsLawLinkInfo.do?chrClsCd=010202&lsJoLnkSeq=1001061524" },
    { label: "재정경제부 — 2026년 세제개편안", url: "https://mofe.go.kr/nw/mosfnw/detailInfograpView.do?menuNo=4040500&searchNttId1=MOSF_000000000078819" },
  ],
};
