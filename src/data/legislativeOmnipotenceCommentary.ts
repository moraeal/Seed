import type { LegislativeCommentary } from "./legislativeCommentaries";

export const legislativeOmnipotenceCommentary: LegislativeCommentary = {
  slug: "legislative-omnipotence-prison-rights-2026",
  billNo: "2222340",
  date: "2026-11-03",
  readMinutes: 8,
  heroSrc: "images/legislation/legislative-omnipotence-2026/hero.webp",
  inlineImage: {
    src: "images/legislation/legislative-omnipotence-2026/legal-consultation.webp",
    afterSection: 2,
    alt: { ko: "접견실에서 사건 서류를 함께 검토하는 수용자와 변호인", en: "A detainee and a lawyer review case documents in a consultation room" },
    caption: { ko: "변호인을 만나는 일은 국가가 베푸는 호의가 아니라 시민이 자신을 방어하는 통로다.", en: "Access to counsel is a means of defending oneself against the state, not a favor granted by it." },
  },
  sources: [
    { label: { ko: "국회 의안정보시스템 · 형집행법 개정안 2222340 · 2026.10.30. 발의 · 전문 직접 미열람", en: "National Assembly · Correctional Treatment Act amendment, Bill 2222340 · introduced October 30, 2026 · full text not directly reviewed" }, url: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_2B0ABEE59FD64281A353C804E10E48" },
    { label: { ko: "일간투데이 · 박성준 의원, ‘윤석열 옥중 돈벌이 방지법’ 대표발의 · 2026.11.2. · 의원실 설명", en: "Daily Today · Rep. Park Sung-joon introduces bill targeting Yoon's prison-account transfers · November 2, 2026 · sponsor's explanation" }, url: "https://www.dtoday.co.kr/news/articleView.html?idxno=800863" },
    { label: { ko: "국회 의안정보시스템 · 형사소송법 개정안 2222336 · 2026.10.30. 발의 · 전문 직접 미열람", en: "National Assembly · Criminal Procedure Act amendment, Bill 2222336 · introduced October 30, 2026 · full text not directly reviewed" }, url: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_V2U6K0I6H2U9U1T0S0A2Y5Z7Y5W9E4" },
    { label: { ko: "오고가고 · 의안 2222336 제안이유 공개자료", en: "Ogogago · published statement of reasons for Bill 2222336" }, url: "https://ogogago.com/board/assembly/11933" },
    { label: { ko: "한국일보 · 접견실 독점한 수용자와 변호사들…‘노쇼’ 하고 ‘종일 접견’해도 못 막아 · 2026.4.27.", en: "Hankook Ilbo · consultation-room monopolies, no-shows and day-long visits · April 27, 2026" }, url: "https://www.hankookilbo.com/news/article/A2026042613410005272" },
  ],
  editions: {
    ko: {
      title: "입법 만능시대",
      subtitle: "구속된 전직 대통령의 돈과 접견까지 겨냥하는 정치, 그 칼은 누구에게 돌아갈 것인가",
      summary: "한 사람을 제약하는 데서 시작한 법은 모든 시민의 권리를 제한하는 기준으로 남는다. 영치금과 접견의 악용을 막는 일과 재산권·방어권을 행정부의 재량 아래 두는 일은 다르다.",
      keyPoints: [
        "형집행법 개정안 2222340과 형사소송법 개정안 2222336은 2026년 10월 30일 발의됐다. 아직 시행되는 법이 아니다.",
        "영치금 초과분은 즉시 몰수하는 안이 아니라 반환·공고 후 6개월 내 청구가 없을 때 국고 귀속하는 안이라는 의원실 설명이다. [2]",
        "‘보복 입법’과 권한 남용 위험에 관한 평가는 필자의 논평이다. 특정인을 겨냥한 규제가 일반 시민에게 남길 기준을 따진다.",
      ],
      heroAlt: "법전 위의 양날 검과 검 손잡이를 쥔 정장 차림의 손",
      heroCaption: "권력에 쥐여준 칼은 정권이 바뀌어도 남는다. 그 칼을 쥔 사람 역시 법의 보호가 필요하다.",
      sections: [
        { title: "미운 사람이 생길 때마다 법부터 만드는 정치", paragraphs: [
          "법이 필요할 때가 있습니다. 그러나 미운 사람이 생길 때마다 법부터 만드는 정치는 위험합니다. 구속된 전직 대통령이 영치금을 많이 받는다고 돈의 이동을 막고, 변호인을 자주 만난다고 접견을 조정할 권한을 넓히는 입법이 이어지고 있습니다. 한 사람을 제약하는 데서 시작한 법이 모든 시민의 권리를 제한하는 기준으로 남는다는 사실은 뒷전입니다.",
          "지난 10월 30일 발의된 두 법안이 그렇습니다. 박성준 의원의 「형의 집행 및 수용자의 처우에 관한 법률 일부개정법률안」과 최혁진 의원의 「형사소송법 일부개정법률안」입니다. 두 법안 모두 아직 발의 단계로, 시행되는 법은 아닙니다. 그러나 정치가 법을 어떤 도구로 보고 있는지 보여주기에는 충분합니다.",
        ] },
        { title: "한 사람의 이름을 붙인 법", paragraphs: [
          "박성준 의원의 개정안은 교정시설의 영치금 보관한도를 400만원으로 법률에 명시하고, 외부계좌 반출을 제한하는 내용입니다. 초과분은 송금자에게 반환하고, 반환 공고 후 6개월 안에 찾아가지 않으면 국고에 귀속시키도록 했다는 것이 의원실 설명과 관련 보도입니다. [2]",
          "여기서 먼저 바로잡을 사실이 있습니다. 돈이 400만원을 넘는 순간 국가가 곧바로 가져가는 구조는 아닙니다. 반환과 공고, 청구기간을 거치도록 제안됐습니다. 비판은 그 절차를 정확히 놓고 해야 합니다. 그럼에도 불법자금으로 판정되지 않은 개인의 돈을 어떤 요건과 절차로 국가 소유로 바꿀 수 있는지는 별개의 중대한 문제입니다.",
          "발의자가 내세운 이름부터 특정인을 향합니다. ‘윤석열 옥중 돈벌이 방지법’입니다. 의원실은 윤 전 대통령이 약 14개월 동안 영치금 19억5천만원을 받고, 약 19억4천만원을 외부로 출금했다고 설명했습니다. 교도관이 반복적인 금융처리를 맡는 행정 낭비도 지적했습니다. [2]",
          "교정시설이 개인의 금융대행 창구처럼 운영된다면 고쳐야 합니다. 돈의 성격에 따라 증여세나 정치자금 관련 법률 위반 문제가 있는지도 확인할 일입니다. 그러나 많은 돈을 받았다는 사실 자체가 불법을 뜻하지는 않습니다. 영치금이라는 이름으로 들어왔다고 모든 돈이 자동으로 비과세가 되는 것도 아닙니다. 자금의 성격을 조사하고 해당 법률로 판단하는 일과, 수용자의 돈을 움직이지 못하게 만드는 일은 구분해야 합니다.",
          "행정 부담을 줄이는 것이 목적이라면 입금 차단과 자동반환, 처리 횟수의 합리적 조정부터 검토할 수 있습니다. 외부 송금을 폭넓게 막는다면 치료비, 가족 생계비, 법률비용처럼 정당한 지출을 어떻게 처리할지도 함께 설명해야 합니다. 한 전직 대통령을 제약하려 만든 규정은 결국 이름 없는 수용자와 그 가족에게도 적용됩니다.",
        ] },
        { title: "접견실 독점과 방어권은 같은 문제가 아닙니다", paragraphs: [
          "최혁진 의원의 형사소송법 개정안은 교정시설의 안전·질서와 다른 수용자의 접견권을 위해, 필요한 최소한의 범위에서 변호인 접견의 장소·시간·방법을 법령으로 조정할 수 있도록 하는 내용입니다. 교정시설장에게 접견시설의 공정한 관리·운영 의무도 부여합니다. [4]",
          "접견실 독점 문제는 실제로 존재합니다. 일부 변호사가 여러 예약을 선점하고 나타나지 않거나 장시간 접견하면서 다른 수용자의 기회를 막는 사례가 보도됐습니다. 돈과 인맥이 있는 수용자가 한정된 공간을 독차지한다면, 그것 역시 다른 시민의 방어권을 침해하는 일입니다. [5]",
          "그러나 예약 독점을 막는 것과 변호인 접견 전반을 조정할 권한을 행정부에 주는 것은 다릅니다. 중복예약과 노쇼를 관리하고 시설을 늘리는 방법이 있습니다. 제한이 불가피하다면 긴급한 재판 준비와 국선변호인의 접견을 어떻게 보장할지, 제한 사유를 누가 심사하고 얼마나 빨리 다툴 수 있을지까지 법률에 분명히 담아야 합니다.",
          "변호인을 만나는 일은 수용자에게 베푸는 호의가 아닙니다. 국가의 수사와 기소에 맞서 자신을 방어하는 통로입니다. 법안에 ‘필요한 최소한의 범위’라고 썼다고 해서 제한이 저절로 최소화되지는 않습니다. 실제 기준과 집행자의 재량, 불복 절차가 그 말을 뒷받침해야 합니다.",
        ] },
        { title: "보복의 정치가 보편적 법률로 남을 때", paragraphs: [
          "두 법안은 목적과 내용이 서로 다릅니다. 영치금 제도의 악용을 막고 접견 기회를 공정하게 배분하자는 문제의식에도 근거가 있습니다. 그러나 특정 전직 대통령을 겨냥했다는 정치적 설명과 함께 법안들이 쏟아지는 모습은, 제도 개선보다 응징이 앞서는 ‘보복 입법’이라는 비판을 자초합니다.",
          "법률에 특정인의 이름을 쓰지 않았다고 법의 일반성이 완성되는 것은 아닙니다. 출발점이 특정인에 대한 분노라면, 그 분노를 걷어낸 뒤에도 같은 규제가 필요한지 검증해야 합니다. 자신이 지지하는 정치인과 아무 연고 없는 시민에게 똑같이 적용해도 정당한 법인지 물어야 합니다.",
          "윤석열 전 대통령에게 특혜를 줄 이유는 없습니다. 그렇다고 다른 수용자에게 보장되는 권리보다 적은 권리를 줘도 되는 것은 아닙니다. 형벌은 법원이 법에 따라 정합니다. 국회가 정치적 적대감을 이유로 수감생활에 제약을 하나씩 덧붙이는 방식은 법치의 원칙과 거리가 멉니다.",
          "더 위험한 것은 이런 법이 정권과 함께 사라지지 않는다는 점입니다. 오늘은 상대 진영 인사의 돈을 묶고 접견을 줄이는 데 박수를 칠 수 있습니다. 내일 같은 권한을 다른 정부가 행사하면, 그 칼끝은 오늘 법을 만든 사람과 그 지지자를 향할 수도 있습니다.",
          "그때 가서 ‘우리에게는 그렇게 적용하지 말라’고 말할 수 있겠습니까. 상대에게 적용할 때 정당하다고 했던 기준을 자신에게 적용할 때만 부당하다고 할 수는 없습니다.",
        ] },
        { title: "칼을 휘두르는 손도 법의 보호가 필요합니다", paragraphs: [
          "입법 만능주의는 정치가 해야 할 판단을 법률의 강제력으로 대신하려는 태도입니다. 논란이 생기면 조사하고, 기존 제도를 점검하고, 필요한 범위만 고치는 대신 새로운 금지와 제한부터 만듭니다. 그렇게 쌓인 권한은 국회가 아니라 현장의 행정기관이 행사합니다.",
          "앞으로 두 법안에서 확인할 것은 구체적입니다. 영치금의 외부 송금 제한에 정당한 지출의 예외가 있는지, 반환 통지가 실제 권리자에게 도달하는지, 국고 귀속을 다툴 절차가 충분한지 봐야 합니다. 접견 제한에는 명확한 사유와 서면 통지, 신속한 불복 절차가 있는지 확인해야 합니다.",
          "법은 미운 사람을 불편하게 만드는 도구가 아닙니다. 권력을 가진 사람이 미운 사람에게도 넘지 말아야 할 선을 정하는 장치입니다.",
          "칼을 마구 휘두르면 상대만 다치는 것이 아닙니다. 법의 손잡이를 권력에 쥐여준 사람도 언젠가는 그 칼 앞에 설 수 있습니다. 지금 필요한 것은 더 날카로운 보복의 칼이 아니라, 누구도 함부로 휘두를 수 없게 하는 법의 한계입니다.",
        ] },
      ],
      chart: { title: "두 법안, 바뀌는 권한과 남는 질문", description: "의안 2222340·2222336의 공개 제안이유와 의원실 설명 기준. 모두 발의안이며 확정된 법이 아니다.", headers: ["대상", "제안된 변화", "시민이 확인할 보호장치"], rows: [["영치금", "400만원 한도 법제화·외부 반출 제한·초과분 반환 및 일정 절차 후 국고 귀속", "정당한 지출 예외·실효성 있는 반환 통지·재산권 구제"], ["변호인 접견", "안전·질서와 공정한 이용을 위해 장소·시간·방법 조정", "제한 사유·긴급 접견 보장·서면 통지·신속한 불복"]], note: "‘보복 입법’은 이 글의 평가다. 국고 귀속의 6개월 절차는 의원실 설명을 인용했으며 법안 전문을 직접 대조하지 못했다.", afterSection: 3 },
      sourceNote: "2026년 11월 3일 기준. 두 법안의 전문 직접 열람이 되지 않아 공개 제안이유와 의원실 설명 보도를 대조했다. 발의 사실과 제안된 내용을 시행 중인 법과 구분한다. 원고의 비판적 판단은 필자의 논평이다. 필자: 작은씨앗.",
    },
    en: {
      title: "The Age of Legislative Omnipotence",
      subtitle: "When politics targets a detained former president's money and access to counsel, who will face the blade next?",
      summary: "A law written to constrain one person becomes a rule governing everyone. Preventing abuse of prison accounts and consultation rooms is different from placing property and defense rights under broader executive discretion.",
      keyPoints: ["Bills 2222340 and 2222336 were introduced on October 30, 2026. Neither proposal is presented here as enacted law.", "The sponsor describes return and public-notice procedures before unclaimed excess funds pass to the state after six months—not immediate confiscation. [2]", "The characterization of retaliatory legislation is the author's argument, not an established finding about legislators' private motives."],
      heroAlt: "A double-edged sword across a law book and a suited hand gripping its hilt",
      heroCaption: "Powers handed to the state survive changes of government. Those who wield them may one day need the law's protection themselves.",
      sections: [
        { title: "A new law for every disliked opponent", paragraphs: [
          "Sometimes a new law is necessary. But politics becomes dangerous when every disliked opponent prompts another restriction. A detained former president receives large sums, so lawmakers move to block transfers. Controversy over legal visits prompts proposals for broader authority over consultations. A rule that begins by constraining one person remains as a standard restricting everyone else's rights.",
          "Two bills introduced on October 30 illustrate the problem: Rep. Park Sung-joon's amendment to the Act on Execution of Sentences and Treatment of Inmates, and Rep. Choi Hyuk-jin's amendment to the Criminal Procedure Act. Both remain proposals, not rules already in force. They nevertheless reveal a troubling view of what legislation is for.",
        ] },
        { title: "A bill named after its intended target", paragraphs: [
          "Park's proposal would place a statutory ceiling of 4 million won on money held in a prison account and restrict transfers to outside accounts. According to his office and reporting on the bill, excess sums would be returned to senders; money left unclaimed for six months after a public return notice would pass to the state. [2]",
          "One factual distinction matters: crossing the ceiling would not trigger immediate state seizure. The proposal describes return, notice and a claim period. Criticism must address that actual sequence. Even so, the grounds and procedures for turning private money not established to be unlawful into state property remain a serious issue.",
          "The sponsor's public label identifies a specific target: a bill to stop Yoon Suk Yeol making money from prison. His office said the former president received roughly 1.95 billion won over about fourteen months and transferred approximately 1.94 billion won out. It also cited the administrative burden of repeated financial transactions handled by correctional officers. [2]",
          "A prison should not function as someone's personal banking service. Depending on the money's nature, gift-tax or political-finance issues may warrant investigation. But receiving a large amount does not itself establish illegality. Nor does calling a payment prison-account money automatically exempt it from tax. Investigating a transaction under the applicable law is different from preventing a prisoner from moving money at all.",
          "If administrative burden is the problem, alternatives include blocking excess deposits, automatic refunds and reasonable transaction procedures. A broad restriction on outside transfers also needs a clear account of legitimate expenditure: medical treatment, family living costs and legal fees. A rule aimed at one former president will apply to ordinary prisoners and their families too.",
        ] },
        { title: "Room monopolies are not the same as defense rights", paragraphs: [
          "Choi's proposal would allow the place, time and method of lawyer consultations to be adjusted under laws and regulations, within the minimum necessary scope, to preserve institutional safety and order and other prisoners' access. It would also require prison directors to manage consultation facilities fairly. [4]",
          "The underlying problem is real. Reporting documents lawyers reserving multiple slots and failing to attend, or occupying rooms for long periods while other detainees lose access. When money and connections buy control of scarce facilities, other citizens' defense rights suffer. [5]",
          "But preventing reservation monopolies is different from granting the executive wider authority over consultations generally. Duplicate bookings and no-shows can be managed, and facilities expanded. Where restrictions are unavoidable, legislation needs to specify how urgent trial preparation and court-appointed counsel will be accommodated, who reviews restrictions, and how quickly a detainee can challenge them.",
          "Meeting a lawyer is not a favor to a prisoner. It is a channel for defending oneself against the state's investigation and prosecution. Writing 'minimum necessary' into a bill does not automatically keep restrictions minimal. Concrete standards, limited discretion and effective review must give those words substance.",
        ] },
        { title: "Retaliatory politics leaves rules for everyone", paragraphs: [
          "The bills address different conduct. There are genuine reasons to prevent abuse of prison accounts and distribute consultation opportunities fairly. Yet a wave of measures publicly framed around a former president invites the criticism that punishment of an opponent is coming before principled institutional reform.",
          "Omitting a person's name from the operative text does not, by itself, make a law genuinely general. Strip away the anger at the particular target: is the same restriction still necessary? Would it remain defensible when applied to a favored politician—or a citizen with no political connections?",
          "Yoon has no entitlement to special treatment. That does not justify giving him fewer rights than other prisoners. Courts impose punishment according to law. Parliament adding restraints to prison life out of political hostility is a different undertaking, far removed from the rule of law.",
          "These powers will not disappear with the government that creates them. Today, supporters may applaud restrictions on an opponent's money and legal visits. Tomorrow, another administration may turn the same authority against those who drafted the law and those who cheered it on.",
          "Will they then ask for an exception? A standard cannot be legitimate for one's opponents but illegitimate only when it reaches oneself.",
        ] },
        { title: "The hand holding the sword also needs protection", paragraphs: [
          "Legislative omnipotence is the belief that coercive legal power can substitute for political judgment. Instead of investigating a controversy, examining existing procedures and correcting what is necessary, politics begins with new prohibitions. The resulting powers are exercised not by parliament in the abstract, but by officials on the ground.",
          "The practical tests are specific. Does a transfer restriction preserve legitimate expenditure? Does a refund notice reach the actual rights-holder? Can state acquisition of unclaimed funds be effectively challenged? Are consultation restrictions based on clear grounds, written reasons and prompt review?",
          "Law is not a device for making disliked people uncomfortable. It sets boundaries that the powerful must respect even when dealing with people they despise.",
          "A recklessly wielded blade does not injure only the opponent. Those who place its hilt in the state's hands may one day face its edge. What is needed is not a sharper weapon of retaliation, but limits that prevent anyone wielding it arbitrarily.",
        ] },
      ],
      chart: { title: "Two bills: new powers and essential safeguards", description: "Based on published statements of reasons and the sponsor's explanation for Bills 2222340 and 2222336. Both are proposals, not enacted rules.", headers: ["Subject", "Proposed change", "Safeguards to examine"], rows: [["Prison accounts", "Statutory 4-million-won ceiling; outside-transfer restrictions; refunds and eventual state acquisition of unclaimed excess", "Legitimate-spending exceptions; effective notice; property-rights remedies"], ["Legal consultations", "Adjustment of place, time and method for safety, order and fair access", "Clear grounds; urgent access; written reasons; prompt challenge"]], note: "Retaliatory legislation is the author's assessment. The six-month procedure is drawn from the sponsor's explanation; the full bill text was not directly verified.", afterSection: 3 },
      sourceNote: "As of November 3, 2026. The full texts could not be directly accessed; published statements of reasons were compared with reporting of the sponsor's explanation. Proposals are distinguished from laws in force. Evaluative conclusions are the author's commentary. Author: Little Seed.",
    },
  },
};
