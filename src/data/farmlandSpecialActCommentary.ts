import type { LegislativeCommentary } from "./legislativeCommentaries";

export const farmlandSpecialActCommentary: LegislativeCommentary = {
  slug: "farmland-special-act-law-abiding-farmers-2026",
  billNo: "2222342",
  date: "2026-11-01",
  readMinutes: 7,
  heroSrc: "images/legislation/farmland-special-act-2026/hero.webp",
  inlineImage: {
    src: "images/legislation/farmland-special-act-2026/records.webp",
    afterSection: 3,
    alt: {
      ko: "농촌 사무실에서 농민들과 담당자가 농지 도면과 허가 서류를 함께 검토하는 모습",
      en: "Farmers and a local official examine parcel maps and permit records in a rural office",
    },
    caption: {
      ko: "실제 경작 이력과 위반 경위를 자료로 확인하고, 비슷한 사정에는 같은 기준을 적용할 수 있어야 한다.",
      en: "Cultivation records and the circumstances of a violation need evidence, with consistent standards for comparable cases.",
    },
  },
  sources: [
    { label: { ko: "국회 의안정보시스템 · 특정농지등의 정리에 관한 특별조치법안(의안번호 2222342), 윤준병 의원 대표발의, 2026.10.30. · 전문 직접 미열람", en: "National Assembly bill information · Bill No. 2222342, Special Measures Bill on the Regularization of Certain Farmland and Other Land, introduced by Rep. Yoon Jun-byeong, October 30, 2026 · full text not directly reviewed" }, url: "https://likms.assembly.go.kr/bill/billDetail.do?billId=PRC_CF272118E79C48759B0F78516681C3" },
    { label: { ko: "연합뉴스 · 與, ‘관행적 임대·불법전용 양성화’ 농지특별조치법 입법 추진 (2026.10.30.)", en: "Yonhap News · Ruling party proposes farmland special measures to regularize customary leases and unauthorized conversion (October 30, 2026)" }, url: "https://www.yna.co.kr/view/AKR20261030154400001" },
    { label: { ko: "뉴시스 · 與, ‘관행적 농지 임대·불법 전용 양성화’ 특별법 발의…연내 입법 추진 (2026.10.30.)", en: "Newsis · Farmland regularization bill introduced, with passage sought by year-end (October 30, 2026)" }, url: "https://files.newsis.com/view/NISX20261030_0003849015" },
    { label: { ko: "뉴스1 · 민주, ‘관행적 농지 임대·불법 전용 양성화’ 추진…연내 입법 목표 (2026.10.30.)", en: "News1 · Democratic Party seeks to regularize customary farmland leases and unauthorized conversion (October 30, 2026)" }, url: "https://www.news1.kr/politics/assembly/6338300" },
    { label: { ko: "씨앗의 소리 · 농지 27%는 누가 사나 — 기존 농지 추적기사", en: "SEED VOICE · Who Will Buy the 27 Percent of Farmland Flagged for Review? — earlier farmland tracker" }, url: "/monitoring/farmland-census-disposal-orders-tracker/" },
  ],
  editions: {
    ko: {
      title: "[입법논평] 농민을 구제한다는 특별법, 법을 지킨 농민은 무엇이 되나",
      subtitle: "관행적 영농의 보호는 필요하다. 사후 양성화의 기준까지 느슨해질 이유는 없다.",
      summary: "관행적 영농과 투기성 취득을 구별할 필요는 있다. 그러나 사후 허가가 준법 농민의 비용을 지워 버리고 행정의 재량만 넓힌다면 ‘농민 구제’라는 이름으로 충분하지 않다.",
      keyPoints: [
        "윤준병 의원이 2026년 10월 30일 발의한 특정농지등의 정리에 관한 특별조치법안(2222342)이다. 확정·시행된 법은 아니다. [2]",
        "보도된 적용 구상은 2027년 4월 1일부터 3년간이다. 일부 특례의 효력은 법 만료 뒤에도 유지될 수 있다. [3]",
        "실제 영농의 증명, 투기 제외 기준, 준법 농민과의 형평, 심사·불복 절차를 국회 심사에서 따져야 한다. 이는 씨앗의 검증 과제다.",
      ],
      heroAlt: "가을걷이가 끝난 농지 앞에서 허가 서류철을 들고 있는 농민의 손",
      heroCaption: "농민의 생계를 보호하는 일과 법을 지키느라 감수한 시간·비용을 존중하는 일은 함께 가야 한다.",
      sections: [
        {
          title: "법을 지킨 농민에게 남는 것은 무엇인가",
          paragraphs: [
            "농사를 이어가려고 빌린 땅과 개발이익을 노리고 사들인 땅을 같은 잣대로 다룬다면 억울한 사람이 생긴다. 반대로 오래됐다는 이유만으로 위법 상태를 정리해 준다면, 허가를 받고 비용을 치르며 법을 지킨 사람에게는 무엇이 남는가.",
            "지난 10월 30일 윤준병 의원이 발의한 「특정농지등의 정리에 관한 특별조치법안」은 이 두 질문 사이에 놓여 있다. 농촌의 현실과 법의 간극을 줄이겠다는 취지는 이해할 수 있다. 그러나 구제의 문을 여는 법일수록 누구를 들이고 누구를 제외하는지가 분명해야 그 취지도 설득력을 얻는다.",
          ],
        },
        {
          title: "추진 발표가 실제 법안으로 나왔다",
          paragraphs: [
            "보도에 따르면 법안에는 농지 임대차·휴경 등 소유와 이용에 관한 특례, 허가 없이 전용된 농지 등에 대한 처분 특례, 일정 요건을 갖춘 불법 농업시설의 사후 허가 등이 담겼다. 2027년 4월 1일부터 3년간 적용하는 방안이다. 아직 발의된 법안이며 확정된 시행 일정은 아니다. [2] [3]",
            "소유자가 불분명한 농지에서 기존 경작자를 대리경작자로 우선 지정하고, 실제 이용 상태에 맞춰 농지와 임야의 지목을 정리하는 내용도 보도됐다. [4]",
            "씨앗의 소리는 앞선 농지 추적기사 [「농지 27%는 누가 사나」](/monitoring/farmland-census-disposal-orders-tracker/)에서 관행적 영농과 투기를 가르는 기준을 물었다. 이제 특별법 추진이라는 발표가 정식 발의로 넘어왔다. 구제한다는 약속보다 실제로 어떤 권리와 예외를 만들어 주는지 살필 차례다.",
          ],
        },
        {
          title: "현실과 어긋난 규제의 책임을 농민에게만 물을 수 없다",
          paragraphs: [
            "땅의 소유자와 실제 경작자가 다르다는 사실만으로 투기를 가려낼 수는 없다. 고령으로 직접 농사를 짓기 어려워진 사람과 이웃의 땅을 빌려 경작을 이어가는 사람의 사정도 있다. 이런 거래를 현실에 맞게 다루지 못하는 규정이라면 규정 자체의 타당성도 검토 대상이다.",
            "국가는 농지를 지킨다는 명분으로 시민의 재산권과 이용을 제한한다. 그 제한이 실제 농업을 유지하는 데 도움이 되는지, 불필요하게 영농을 막고 있지는 않은지도 국가가 설명할 몫이다. 농촌의 관행을 모두 위법의 틀에 넣어 놓고 개인에게만 책임을 묻는 행정은 유능한 행정과 거리가 멀다.",
            "특례를 통해 장기간 이어진 불확실성을 줄이는 일에는 의미가 있다. 소유 관계가 불분명한 땅에서 농사를 계속해 온 사람의 지위를 정리하는 것도 그중 하나다. 다만 이러한 필요성이 모든 사후 양성화의 정당성을 대신해 주지는 않는다.",
          ],
        },
        {
          title: "사후 허가는 준법 농민과의 형평을 건드린다",
          paragraphs: [
            "농업시설을 설치하기 전에 허가를 받고, 허용되지 않는 용도를 포기하고, 절차에 따라 비용을 부담한 농민도 있다. 위법 상태를 뒤늦게 허가해 주는 법은 이들이 감수한 시간과 비용을 어떻게 평가할 것인지 답할 책임이 있다.",
            "행정의 잘못된 안내 때문에 생긴 문제인지, 생계를 위한 영농 과정에서 발생한 문제인지, 규제를 피하고 이익을 얻으려 한 행위인지에 따라 판단은 달라진다. 위반이 오래됐다는 사정만으로 이 차이가 사라지지는 않는다.",
            "특별법이 반복되면 앞으로도 기다리면 구제받을 수 있다는 기대가 생길 수 있다. 그 기대가 커질수록 미리 허가를 받는 사람보다 일단 행동하고 보는 사람이 유리해진다. 이번 구제의 편익뿐 아니라 다음 위반을 부르는 유인까지 입법의 비용에 포함된다.",
          ],
        },
        {
          title: "‘투기 제외’라는 말보다 판정 기준이 중요하다",
          paragraphs: [
            "발의자는 투기를 엄격히 규제하겠다고 설명했다. 그러나 이번에 확인한 자료만으로는 투기를 제외하는 구체적 조문과 심사·불복 절차까지 확인되지 않았다. 선언의 강도만으로 집행의 엄격함을 판단하기는 어렵다.",
            "농지의 취득 시점과 실제 경작 이력, 이용 상태가 달라진 시기, 신청인의 설명을 뒷받침할 자료가 어떤 기준으로 평가되는지가 중요하다. 이는 법안에 이미 마련됐다고 확인된 기준이 아니라, 국회 심사에서 따져볼 항목이다.",
            "기준이 흐리면 최종 판단은 담당 행정기관의 재량으로 넘어간다. 비슷한 사정인데 지역에 따라 결과가 달라지거나, 신청인이 어떤 자료를 내야 하는지도 알 수 없다면 구제 제도는 또 다른 불확실성이 된다. 시민에게 필요한 것은 담당자의 호의에 기대는 예외보다 예측할 수 있는 규칙이다.",
          ],
        },
        {
          title: "3년짜리 법이 남기는 효과는 3년에 그치지 않는다",
          paragraphs: [
            "뉴시스 보도에 따르면 특례 기간에 체결한 임대차 계약이나 지목 정리의 효력은 법이 만료된 뒤에도 유지될 수 있다. [3] 한시법이라는 이름만 보고 영향도 일시적이라고 생각하기 어려운 이유다.",
            "지목과 이용 관계가 정리되면 토지의 활용 가능성과 거래 조건에도 영향을 줄 수 있다. 그 변화가 실제 경작자의 영농 안정에 기여하는지, 농업과 무관한 자산상 이익까지 넓혀 주는지는 별도로 살필 문제다.",
            "법의 시한보다 더 중요한 것은 특례로 얻은 권리가 어디까지 이어지는가이다. 한 번의 행정 판단으로 오래 남는 이익을 부여한다면, 그 판단의 근거와 책임도 그만큼 분명해질 필요가 있다.",
          ],
        },
        {
          title: "구제 대상과 결과로 평가할 법이다",
          paragraphs: [
            "이 특별법을 농민을 위한 법이라는 이유만으로 지지하거나, 위법 상태를 정리한다는 이유만으로 전부 반대할 필요는 없다. 현실에 맞지 않는 규제를 고치는 일과 위반의 책임을 지우는 일은 구분할 수 있다.",
            "씨앗의 소리가 이어서 볼 것은 구제 대상의 기준 시점, 실제 영농의 증명 방식, 투기 목적 취득의 제외 기준, 처분과 불복 절차다. 시행된다면 신청·승인·거부 사유의 공개와 특례 이후 토지 이용 변화도 검증 대상이다.",
            "농민의 생계를 보호하는 법이라면 그 혜택이 실제로 농사를 짓는 사람에게 돌아가는지 결과로 설명할 수 있어야 한다. 법을 지킨 농민의 비용을 지워 버리고, 행정의 재량만 넓히는 결과라면 ‘농민 구제’라는 이름으로 충분하지 않다.",
          ],
        },
      ],
      chart: {
        title: "농민 구제 특별법, 무엇을 확인해야 하나",
        description: "보도로 확인된 구상과 국회 심사에서 검증할 항목을 구분한 쟁점표",
        headers: ["쟁점", "보도로 확인된 구상", "씨앗의 검증 과제"],
        rows: [
          ["소유·이용", "임대차·휴경 등에 특례", "실제 경작자 보호와 영농 증명"],
          ["사후 허가", "일정 요건의 불법 농업시설 양성화", "위반 경위와 준법 농민의 비용"],
          ["투기 제외", "발의자가 엄격한 투기 규제 설명", "취득 시점·경작 이력·심사·불복 기준"],
          ["지속 효과", "2027.4.1.부터 3년 적용 구상", "법 만료 후 권리·이용 변화 추적"],
        ],
        note: "자료: 연합뉴스·뉴시스·뉴스1(2026.10.30.). 오른쪽은 씨앗의 검증 과제이며 법안의 확정 조문이 아니다. 아직 발의안으로 시행되지 않았다.",
        afterSection: 4,
      },
      sourceNote: "자료와 확인 범위 · 작성 기준: 2026년 11월 1일. 의안번호 2222342. 국회 상세 페이지 접근이 원활하지 않아 법안 전문·비용추계와 세부 면제 조항은 직접 확인하지 못했다. 아래 보도로 확인된 내용과 논평의 판단을 구분했으며, 부담금 면제의 구체적 범위는 본문에서 제외했다.",
    },
    en: {
      title: "[Legislative Commentary] A Special Law to Help Farmers—What About Those Who Followed the Rules?",
      subtitle: "Customary farming arrangements deserve protection. That does not justify weaker standards for retroactive legalization.",
      summary: "Customary farming and speculative land purchases need different treatment. But relief is not justified by its name alone if it disregards the costs borne by law-abiding farmers and expands administrative discretion.",
      keyPoints: [
        "Rep. Yoon Jun-byeong introduced Bill No. 2222342 on October 30, 2026. It is a proposal, not enacted or effective law. [2]",
        "Reports describe a three-year application period starting April 1, 2027. Some effects of the exceptions could outlast the law. [3]",
        "Evidence of cultivation, exclusions for speculation, fairness to compliant farmers, and review and appeal procedures are SEED VOICE's questions for parliamentary scrutiny.",
      ],
      heroAlt: "A farmer holds a folder of permit documents beside a harvested autumn field",
      heroCaption: "Protecting farm livelihoods should go hand in hand with respecting the time and expense of compliance.",
      sections: [
        {
          title: "What is left for the farmer who followed the rules?",
          paragraphs: [
            "Land rented to keep a farm running is different from land bought in anticipation of development gains. Treating them alike can cause injustice. Yet if an unlawful arrangement is legalized merely because it has existed for years, what is left for those who obtained permits, paid the costs and complied with the law?",
            "The Special Measures Bill on the Regularization of Certain Farmland and Other Land, introduced by Representative Yoon Jun-byeong on October 30, sits between these two questions. Its aim of narrowing the gap between rural practice and the law is understandable. But a law opening a route to relief needs clear rules about who qualifies and who does not if that purpose is to remain convincing.",
          ],
        },
        {
          title: "An announced initiative has become a bill",
          paragraphs: [
            "According to news reports, the bill includes exceptions concerning farmland ownership and use, including leases and fallow land; special treatment of land converted without permission; and retroactive permits for unauthorized agricultural facilities meeting specified conditions. Reports describe a three-year period beginning April 1, 2027. The bill has only been introduced: this is not a confirmed commencement date. [2] [3]",
            "Reports also describe giving existing cultivators priority for designation as substitute cultivators where ownership is unclear, and adjusting the registered classifications of farmland and forest land to reflect their actual use. [4]",
            "In its earlier farmland tracker, [“Who Will Buy the 27 Percent of Farmland Flagged for Review?”](/monitoring/farmland-census-disposal-orders-tracker/), SEED VOICE asked how customary farming would be distinguished from speculation. The initiative has now moved from announcement to formal introduction. Scrutiny must turn from the promise of relief to the rights and exceptions it would actually create.",
          ],
        },
        {
          title: "Farmers cannot bear all the blame for rules detached from reality",
          paragraphs: [
            "A difference between the owner and the cultivator does not, by itself, establish speculation. An elderly owner may no longer be able to farm, while a neighbor rents the land to continue production. If the rules cannot accommodate such arrangements sensibly, their own validity deserves examination.",
            "The state restricts property rights and land use in the name of protecting farmland. It must also explain whether those restrictions sustain agriculture or unnecessarily obstruct it. An administration that places every rural custom within a framework of illegality and leaves individuals to bear all responsibility is falling short of competent government.",
            "Reducing uncertainty that has persisted for years can be worthwhile. Clarifying the position of people who have continued farming land with uncertain ownership is one example. Those needs, however, cannot justify every form of retroactive legalization.",
          ],
        },
        {
          title: "Retroactive permits raise a question of fairness",
          paragraphs: [
            "Some farmers obtained permission before installing facilities, abandoned uses that were not allowed and paid the costs required by the process. A law that later authorizes unlawful arrangements must explain how it values the time and expense those farmers bore.",
            "A problem caused by incorrect administrative advice, one arising in the course of subsistence farming, and an attempt to evade regulation for profit call for different judgments. The passage of time does not erase those distinctions.",
            "Repeated special laws may encourage the expectation that waiting will eventually bring relief. As that expectation grows, acting first becomes more attractive than applying for permission in advance. The legislative cost includes the incentive for future violations as well as the benefits of current relief.",
          ],
        },
        {
          title: "The test for speculation matters more than the promise to exclude it",
          paragraphs: [
            "The sponsor has promised strict regulation of speculation. The material reviewed for this article, however, did not establish the precise exclusion clauses or the procedures for examination and appeal. Strong declarations alone do not demonstrate rigorous enforcement.",
            "The date of acquisition, actual cultivation history, when the use changed, and the evidence supporting an applicant's explanation all matter. These are questions for parliamentary scrutiny, not standards this article has verified as already contained in the bill.",
            "Vague criteria leave the final judgment to administrative discretion. If similar cases receive different outcomes across regions, or applicants do not know what evidence to submit, a relief scheme creates another uncertainty. Citizens need predictable rules rather than exceptions dependent on an official's goodwill.",
          ],
        },
        {
          title: "A three-year law can have effects that last much longer",
          paragraphs: [
            "Newsis reports that leases concluded during the exception period and changes to registered land classifications may retain their effects after the law expires. [3] The temporary label does not necessarily mean a temporary impact.",
            "Regularizing land classification and use can affect possible uses and the terms on which land is traded. Whether that improves security for actual cultivators or also extends asset gains unrelated to farming is a separate question.",
            "More important than the expiry date is how far the rights granted by the exceptions would continue. If a single administrative decision confers a lasting benefit, the basis for that decision and responsibility for it need corresponding clarity.",
          ],
        },
        {
          title: "Judge the law by its beneficiaries and results",
          paragraphs: [
            "There is no need to endorse the entire bill simply because it is presented as helping farmers, or to reject it in full because it regularizes unlawful arrangements. Correcting unrealistic rules and erasing responsibility for violations are distinguishable choices.",
            "SEED VOICE will examine the eligibility cutoff, evidence of actual farming, exclusions for speculative acquisitions, and decision and appeal procedures. If the law takes effect, disclosure of applications and reasons for approval or refusal, along with subsequent changes in land use, will also require scrutiny.",
            "A law intended to protect farm livelihoods should be able to demonstrate that its benefits reach those who actually farm. If it disregards the costs of compliance and merely expands administrative discretion, calling it farmer relief is not enough.",
          ],
        },
      ],
      chart: {
        title: "Farmland relief: what needs to be verified?",
        description: "Distinguishing reported proposals from questions for parliamentary scrutiny",
        headers: ["Issue", "Reported proposal", "SEED VOICE's review questions"],
        rows: [
          ["Ownership and use", "Exceptions for leases and fallow land", "Protection of actual cultivators; proof of farming"],
          ["Retroactive permits", "Regularization of qualifying unauthorized farm facilities", "Circumstances of violations; costs of compliance"],
          ["Speculation", "Sponsor promises strict regulation", "Acquisition dates, cultivation records, review and appeal"],
          ["Lasting effects", "Three years from April 1, 2027 proposed", "Rights and land use after the law expires"],
        ],
        note: "Sources: Yonhap News, Newsis and News1, October 30, 2026. The right-hand column lists SEED VOICE's scrutiny questions, not verified clauses. The bill has not taken effect.",
        afterSection: 4,
      },
      sourceNote: "Sources and verification scope · Prepared November 1, 2026. Bill No. 2222342. Access to the National Assembly detail page was unreliable, so the full bill, cost estimate and detailed exemptions were not directly reviewed. Reported information is distinguished from editorial judgment. The specific scope of levy exemptions has been excluded from the body.",
    },
  },
};
