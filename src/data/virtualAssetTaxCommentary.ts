import type { TaxCommentary } from "./taxCommentaries";

export const virtualAssetTaxCommentary: TaxCommentary = {
  slug: "virtual-asset-tax-prove-the-gain",
  relatedPolicySlug: "virtual-asset-tax-2027-readiness",
  date: "2026-09-25",
  readMinutes: 6,
  heroSrc: "images/tax/virtual-asset-tax-gain-records-20260925.jpg",
  sources: [
    { label: { ko: "국세청 — 거주자의 가상자산소득 과세 개요", en: "National Tax Service — guide to virtual-asset taxation" }, url: "https://nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=238935&mi=40370" },
    { label: { ko: "금융위원회 — 토큰증권 정책방향", en: "Financial Services Commission — token-securities policy" }, url: "https://www.fsc.go.kr/po010106/87650" },
    { label: { ko: "이데일리 — 가상자산 과세와 토큰증권 세제 좌담회", en: "Edaily — roundtable on digital-asset taxation" }, url: "https://marketin.edaily.co.kr/News/ReadE?newsId=01938486645583728" },
  ],
  editions: {
    ko: {
      title: "코인에 세금을 매기려면, 먼저 이익부터 제대로 계산하라",
      subtitle: "국내 거래자는 보이고 해외 지갑은 흐릿한 과세, 그 부담은 누구에게 가나",
      summary: "2027년 가상자산 과세가 시작될 예정입니다. 소득에 세금을 매기는 원칙은 납득할 수 있습니다. 그러나 여러 거래소와 개인 지갑을 거친 자산의 매입가를 잇지 못하고 해외 거래 자료도 확보하지 못한다면, 기록이 잘 남는 국내 이용자와 성실 신고자에게만 부담이 몰릴 수 있습니다. 씨앗은 세율보다 먼저 계산의 정확성과 정정할 권리를 묻습니다.",
      keyPoints: [
        "2027년 1월부터 가상자산 양도·대여 소득에 연간 250만 원 공제 후 소득세 20%를 적용할 예정입니다.",
        "토큰증권과 가상자산은 기록 기술이 같아도 권리가 다를 수 있습니다. 경제적 실질이 비슷한 상품의 과세 차이는 설명돼야 합니다.",
        "취득가액, 거래소 간 이동, 해외 거래 자료와 오류 정정 절차를 확인해야 납세자가 계산 결과에 이의를 제기할 수 있습니다.",
      ],
      heroAlt: "밤에 거래 내역과 영수증을 대조하며 가상자산의 실제 이익을 계산하는 시민의 AI 합성 이미지",
      heroCaption: "매입가와 비용을 확인할 기록이 이어져야 실제 이익을 계산할 수 있습니다. AI 합성 이미지",
      sections: [
        {
          title: "250만 원을 넘는 이익에 세금, 계산할 자료는 연결되는가",
          paragraphs: [
            "국세청 안내에 따르면 2027년 1월 1일 이후 가상자산을 팔거나 빌려줘 얻은 소득이 과세 대상이 됩니다. 한 해의 양도·대여 대가에서 취득가액과 비용을 빼고 250만 원을 공제한 뒤 남은 금액에 소득세 20%를 적용합니다. 지방소득세까지 합치면 통상 22%입니다. 연간 손익을 합쳐 이듬해 5월에 신고합니다.",
            "거래소 한 곳에서 원화로 사고팔기만 했다면 계산은 비교적 단순합니다. 그러나 시민이 국내 거래소에서 사서 개인 지갑으로 옮기고, 다른 거래소에서 코인으로 교환한 뒤 해외에서 일부를 팔았다면 이야기가 달라집니다. 최초 매입가, 이동 경로, 각 거래의 시점과 수수료를 이어야 비로소 이익이 나옵니다. 국세청도 가상자산 간 교환을 소득 계산에 포함하고 있습니다.",
            "소득에 세금을 매기는 데 씨앗은 반대하지 않습니다. 납세자에게 돈을 벌었다고 말하기 전에, 국가가 어떤 자료로 얼마를 벌었다고 계산했는지 보여줘야 합니다. 계산 과정이 틀렸을 때 시민이 고칠 수 있는 절차도 그만큼 분명해야 합니다.",
          ],
          quote: "세금을 매길 이익이 얼마인지 국가와 시민이 같은 장부에서 확인할 수 있어야 합니다.",
        },
        {
          title: "같은 블록체인이라도, 같은 재산은 아닙니다",
          paragraphs: [
            "내년 2월 4일에는 토큰증권 관련 법도 시행될 예정입니다. 금융위원회 설명대로라면 토큰증권은 주식·채권·수익증권 같은 권리를 블록체인 장부에 기록하는 방식입니다. 코인과 토큰증권이 같은 기술을 쓴다는 사실만으로 같은 세율을 적용할 근거는 되지 않습니다. 회사채와 비트코인은 권리부터 다릅니다.",
            "그렇다고 이름표만 붙이면 과세 문제가 끝나는 것도 아닙니다. 비슷한 경제적 수익을 주는 상품이 어떤 법적 포장으로 발행됐는지에 따라 신고 방식과 세 부담이 크게 갈린다면, 시민은 상품의 실질보다 세금 설계에 이끌려 투자하게 됩니다. 9월 25일 이데일리 좌담회에서 김태림 변호사가 디지털자산의 법적 분류와 세법상 분류를 함께 점검하자고 한 이유도 여기에 있습니다.",
            "어떤 토큰이 증권에 해당하는지, 권리와 수익의 종류는 무엇인지부터 밝혀야 합니다. ‘블록체인은 하나인데 세금이 다르다’는 구호만으로도, ‘증권이니까 아무 문제 없다’는 답변만으로도 실제 투자자의 계산서는 보이지 않습니다.",
          ],
        },
        {
          title: "국내 거래자에게만 또렷한 세금이 되어서는 안 됩니다",
          paragraphs: [
            "국내 거래소는 거래 내역을 모으기 쉽습니다. 해외 거래소, 개인 간 거래와 개인 지갑을 거친 기록은 연결하기가 더 어렵습니다. 좌담회 참석자들은 준비가 부족하면 국내 거래소 이용자와 성실 신고자에게 부담이 집중될 수 있다고 우려했습니다. 실제로 그런 불균형이 발생했다는 통계가 나온 것은 아직 아닙니다. 2027년 시행 전에 확인해야 할 위험입니다.",
            "기록이 없는 거래를 눈감아 주고 기록이 남은 거래만 엄격하게 과세한다면 납세자의 신뢰가 먼저 무너집니다. 정부는 국내외 자료를 어떤 범위에서 확보하는지, 누락된 매입가를 어떻게 보완하는지, 개인 지갑 이동을 매매로 잘못 읽었을 때 어떻게 정정하는지 설명해야 합니다.",
            "손실을 다음 해 이익에서 뺄 수 있는지, 스테이킹 보상과 에어드롭은 언제 어떤 소득으로 계산하는지도 명확해야 합니다. 오늘의 전문가 좌담회는 이 쟁점들을 제기했습니다. 각각의 처리 방식이 새로 확정됐다는 발표는 아닙니다.",
          ],
          quote: "보이는 거래만 과세하기 쉬운 세금은 공정한 세금이 아닙니다.",
        },
        {
          title: "시행 날짜보다 먼저 공개할 네 가지 기준",
          paragraphs: [
            "씨앗은 시행을 앞두고 네 가지를 확인하겠습니다. 첫째, 거래소와 개인 지갑을 옮겨 다닌 자산의 취득가액과 수수료를 어떤 자료로 증명하는가. 둘째, 연간 손익을 넘어선 손실은 다음 해에 어떻게 처리하는가. 셋째, 국내외 거래 자료의 수집 범위와 누락·오류를 바로잡는 절차는 무엇인가. 넷째, 토큰증권과 가상자산의 경계에 있는 상품을 누가 어떤 근거로 분류하는가.",
            "국세청 안내에는 2027년 시행 전에 보유한 가상자산의 취득가액을 실제 취득가액과 2026년 말 시가 중 큰 금액으로 보는 규정도 나와 있습니다. 이런 경과 규정까지 시민이 직접 이해하고 확인할 수 있어야 합니다. 신고 시스템에 숫자가 자동으로 들어갔다는 이유만으로 계산의 책임을 시민에게 넘길 수는 없습니다.",
            "이익에 세금을 매기는 원칙은 지키되, 이익을 입증하는 책임도 분명해야 합니다. 세율 20%를 외우는 것보다 먼저 알아야 할 것은 내 거래 장부에서 얼마가 실제 소득인지입니다. 국가의 계산이 틀렸을 때 시민이 고칠 수 있는가. 씨앗이 내년 5월의 시행 준비에서 끝까지 볼 기준입니다.",
          ],
        },
      ],
      chart: {
        title: "가상자산 세금, 어디서 계산이 어긋날 수 있나",
        description: "거래액에서 과세 대상 소득으로 가는 동안 각 단계의 증빙과 정정 절차를 확인해야 합니다.",
        headers: ["단계", "확인할 기록", "어긋날 때 생기는 문제"],
        rows: [
          ["취득", "매입가·매입 수수료", "실제보다 낮은 취득가액으로 이익 과대계산"],
          ["이동·교환", "거래소·개인 지갑 이체, 코인 간 교환", "단순 이체를 거래로 오인하거나 교환을 누락"],
          ["처분", "매도 시점·가격·수수료", "환산 가격과 비용 계산의 차이"],
          ["신고", "연간 손익·250만 원 공제·정정 내역", "서로 다른 자료로 국가와 납세자의 세액 불일치"],
        ],
        note: "국세청 가상자산소득 과세 안내를 바탕으로 씨앗의 소리가 재구성했습니다. 오류 사례는 검증할 위험을 설명한 것이며 실제 발생 건수의 통계가 아닙니다.",
        afterSection: 0,
      },
      sourceNote: "2026년 9월 25일 현재 국세청 가상자산소득 과세 안내와 금융위원회 토큰증권 정책방향, 이날 이데일리 좌담회 보도를 대조했습니다. 과세 및 제도 시행일은 예정된 법률 일정이고, 좌담회의 손실 이월·신종 거래·해외 자료 문제는 전문가가 제기한 쟁점입니다. 토큰증권은 권리의 종류에 따라 세제가 달라질 수 있어 일률적 세율을 제시하지 않았습니다.",
    },
    en: {
      title: "Before taxing crypto, calculate the gain correctly",
      subtitle: "If domestic records are visible but overseas wallets are not, who bears the burden?",
      summary: "Korea is scheduled to begin taxing virtual-asset gains in 2027. Taxing income is defensible. But if purchase prices cannot be traced across exchanges and private wallets, and overseas records remain incomplete, the burden may fall most heavily on users whose domestic trades are easy to see. Seed Voice examines accurate calculation and the taxpayer's ability to correct errors before debating rates.",
      keyPoints: [
        "From January 2027, gains from transferring or lending virtual assets are scheduled for 20% national income tax after a KRW 2.5 million annual allowance.",
        "A token security and a cryptoasset may use the same ledger technology but embody different legal rights. Materially similar returns still need a clear explanation of different tax treatment.",
        "Acquisition costs, transfers, overseas records and correction procedures determine whether taxpayers can challenge the calculated gain.",
      ],
      heroAlt: "AI-generated image of a citizen comparing digital-asset transaction records and receipts at night",
      heroCaption: "Records of purchase prices and expenses need to connect before actual gains can be calculated. AI-generated image.",
      sections: [
        { title: "A gain above KRW 2.5 million: can the records be connected?", paragraphs: [
          "According to National Tax Service guidance, income from transferring or lending virtual assets after January 1, 2027 is scheduled to be taxable. Acquisition costs and expenses are deducted from annual proceeds, followed by a KRW 2.5 million allowance. The remainder faces 20% national income tax, generally 22% including local income tax. Annual gains and losses are reported the following May.",
          "A purchase and sale on one exchange is relatively simple. A citizen might instead buy on a Korean exchange, move assets to a private wallet, swap them for another token, and sell part of the position abroad. Purchase prices, transfers, transaction dates and fees must then be linked to establish the gain. The NTS also includes crypto-to-crypto exchanges in its calculation rules.",
          "Seed Voice does not oppose taxing income. But before telling a taxpayer how much they earned, the state should show the evidence behind its calculation and provide a workable path to correct a mistake."
        ], quote: "The state and the citizen should be able to verify a taxable gain from the same ledger." },
        { title: "The same blockchain does not mean the same asset", paragraphs: [
          "Token-securities legislation is scheduled to take effect on February 4, 2027. Under the Financial Services Commission's approach, tokenization records rights such as shares, debt and beneficiary interests on a distributed ledger. Shared technology alone does not justify a single tax rate: a corporate bond and Bitcoin confer different rights.",
          "Yet classification cannot end with a label. If products offering similar economic returns face sharply different reporting duties or tax burdens depending on their legal packaging, investors may be steered by tax design rather than economic substance. At a September 25 roundtable reported by Edaily, lawyer Kim Tae-rim called for digital-asset and tax classifications to be assessed together.",
          "The rights and income represented by each token need to be identified first. Neither 'one blockchain, one tax' nor 'it is a security, so there is no problem' shows investors their actual bill."
        ] },
        { title: "A tax that only sees domestic users clearly will lose trust", paragraphs: [
          "Domestic exchanges can generally collect transaction histories more readily. Overseas exchanges, peer-to-peer trades and private wallets make records harder to connect. Roundtable participants warned that, without preparation, the burden could concentrate on compliant users of domestic exchanges. There is no published outcome proving that this imbalance has already occurred; it is a risk to test before implementation.",
          "If transactions with accessible records are taxed strictly while harder-to-see transactions escape scrutiny, taxpayers will lose confidence. Authorities should explain what domestic and foreign records they can obtain, how missing acquisition costs are handled and how to correct a private-wallet transfer mistakenly read as a sale.",
          "The treatment of losses in later years, staking rewards and airdrops also needs clarity. These were questions raised in the roundtable, not newly announced final rules."
        ], quote: "A tax that only reaches the easiest records is not a fair tax." },
        { title: "Four standards to publish before the start date", paragraphs: [
          "Seed Voice will track four points: what proves acquisition costs and fees when an asset passes through exchanges and wallets; how losses beyond a calendar year are treated; what domestic and overseas records are collected and how errors are corrected; and who classifies an asset at the boundary between securities and virtual assets, on what grounds.",
          "NTS guidance also describes a transition rule for assets already held before 2027: the acquisition value is the greater of actual cost and the end-of-2026 market value. Citizens need to be able to understand and verify even these transition calculations. Automatic figures in a filing system cannot transfer responsibility for errors to the taxpayer.",
          "Tax the gain, but show how the gain was established. More useful than memorizing a 20% rate is knowing the actual income in one's own transaction history, and whether a citizen can correct the state's mistake. That is the standard we will follow as implementation approaches."
        ] },
      ],
      chart: {
        title: "Where can a crypto tax calculation go wrong?",
        description: "Each step from gross proceeds to taxable income needs evidence and a correction path.",
        headers: ["Stage", "Records to verify", "If the records fail"],
        rows: [
          ["Acquisition", "Purchase price and fees", "Understated cost overstates the gain"],
          ["Transfer or swap", "Exchange and wallet transfers; token swaps", "A transfer may be mistaken for a sale, or a swap omitted"],
          ["Disposal", "Sale time, price and fees", "Conversion prices and deductible costs differ"],
          ["Filing", "Annual net gain, allowance and corrections", "The taxpayer and the state reach different bills"],
        ],
        note: "Reconstructed by Seed Voice from NTS virtual-asset tax guidance. The error scenarios identify risks to verify, not published incidence statistics.",
        afterSection: 0,
      },
      sourceNote: "Checked against NTS guidance, the FSC's token-securities policy and Edaily's September 25, 2026 roundtable report. The effective dates are scheduled under current legislation; loss carryforward, novel transaction types and overseas reporting were raised as questions by experts. Token securities have no universal rate because treatment depends on the rights and income involved.",
    },
  },
};
