import { realEstateSupervisorColumn } from "./columns/realEstateSupervisorColumn";
import { issue32 } from "./contentTranslations/columns/issue32";

export type LegislativeCommentaryLanguage = "ko" | "en";

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

export type LegislativeCommentary = {
  slug: string;
  billNo: string;
  relatedBillSlug?: string;
  date: string;
  readMinutes: number;
  heroSrc: string;
  inlineImage?: { src: string; afterSection: number; alt: LocalizedText; caption: LocalizedText };
  sources: { label: LocalizedText; url: string }[];
  editions: Record<LegislativeCommentaryLanguage, CommentaryEdition>;
};

// A column can also be selected for Legislative Watch without copying its article
// into another detail route. Both listings lead to the same canonical page.
export const linkedLegislativeColumnCommentaries = [{
  slug: realEstateSupervisorColumn.slug,
  href: `/columns/${realEstateSupervisorColumn.slug}`,
  date: realEstateSupervisorColumn.date,
  readMinutes: realEstateSupervisorColumn.readMinutes,
  heroSrc: realEstateSupervisorColumn.heroImage.src,
  billLabel: { ko: "부동산감독원 설치법안", en: "Real estate supervisory agency bill" },
  editions: {
    ko: {
      title: realEstateSupervisorColumn.title,
      summary: realEstateSupervisorColumn.summary,
      heroAlt: realEstateSupervisorColumn.heroImage.alt,
    },
    en: {
      title: issue32.title,
      summary: issue32.summary,
      heroAlt: issue32.heroImage?.alt ?? realEstateSupervisorColumn.heroImage.alt,
    },
  },
}];

export const legislativeCommentaries: LegislativeCommentary[] = [
  {
    slug: "sme-market-access-and-real-profit",
    billNo: "2221550",
    date: "2026-09-25",
    readMinutes: 7,
    heroSrc: "images/legislation/sme-marketplace-margin-hero.webp",
    inlineImage: {
      src: "images/legislation/sme-marketplace-popup-shop.webp",
      afterSection: 2,
      alt: { ko: "작은 판매 공간에서 중소기업 제품을 진열하는 사람의 손을 묘사한 합성 이미지", en: "Illustration of a small maker arranging products in a retail pop-up" },
      caption: { ko: "입점 뒤에도 판매가 이어지고 비용을 제하고 수익이 남는지 확인해야 한다. AI 합성 이미지.", en: "The test is whether sales continue and leave a profit after costs. AI-generated composite image." },
    },
    sources: [
      { label: { ko: "국민참여입법센터 — 중소기업제품 구매촉진 및 판로지원에 관한 법률 전부개정법률안, 의안 제2221550호", en: "Ministry of Government Legislation — Full revision of the SME Product Procurement and Market Access Act, Bill No. 2221550" }, url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221550/detailRP" },
      { label: { ko: "중소벤처기업부 — 2026년 중소기업 마케팅지원사업 통합공고", en: "Ministry of SMEs and Startups — 2026 consolidated marketing support announcement" }, url: "https://www.mss.go.kr/site/smba/ex/bbs/View.do?bcIdx=1065089&cbIdx=86" },
      { label: { ko: "중소벤처기업부 — 소관 공공기관 기능개혁 추진", en: "Ministry of SMEs and Startups — restructuring of agencies under its supervision" }, url: "https://www.mss.go.kr/site/chungbuk/ex/bbs/View.do?bcIdx=1071053&cbIdx=180" },
      { label: { ko: "연합뉴스 — 한유원·공영홈쇼핑 통합 계획 보도", en: "Yonhap News — plan to combine Korea SMEs and Startups Agency for Distribution and Public Home Shopping" }, url: "https://www.yna.co.kr/view/AKR20260908029300030" },
    ],
    editions: {
      ko: {
        title: "판로를 넓힌다는 법, 중소기업에 남는 돈도 늘어나는가",
        subtitle: "중소기업제품 구매촉진 및 판로지원에 관한 법률 전부개정법률안 논평 · 김원이 의원 등 11인 발의",
        summary: "판로지원법 전부개정안은 공공구매를 넘어 온라인·민간 거래를 지원하고 두 기관을 통합한 마케팅진흥공사를 세우려 한다. 입점 업체 수보다 판매비용을 뺀 기업의 수익과 통합의 실제 절감액을 성과로 확인해야 한다.",
        keyPoints: [
          "의안 제2221550호는 9월 22일 발의돼 23일 소관 상임위에 회부됐다. 법률로 확정된 상태는 아니다.",
          "정부의 2026년 중소기업 마케팅지원 규모는 141억 7천만 원이다. 입점 수수료와 마케팅 비용 지원도 포함된다.",
          "진흥공사는 한국중소벤처기업유통원과 공영홈쇼핑의 통합 구상이다. 통합 뒤 기업에 남는 수익을 따져야 한다.",
        ],
        heroAlt: "작은 제품 포장 작업장에서 판매내역과 비용을 살펴보는 중소기업 운영자를 묘사한 합성 이미지",
        heroCaption: "판매가 늘어도 비용을 제하면 남는 돈이 적을 수 있다. 판로지원의 성과를 기업의 장부에서 확인해야 한다. AI 합성 이미지.",
        sections: [
          {
            title: "사업은 이미 시작됐고, 법이 뒤따르고 있다",
            paragraphs: [
              "정부는 올해 중소기업 마케팅 지원에 141억 7천만 원을 배정했다. 온라인 플랫폼과 홈쇼핑 입점 비용, 오프라인 기획전, 전용판매장, 홍보 역량 강화까지 지원한다. 그런데 9월 22일 발의된 판로지원법 전부개정안은 현행법에 민간 소비시장과 기업 간 거래 지원 근거가 부족하다고 설명한다. 사업은 이미 하고 있는데 법의 중심은 여전히 공공구매에 있는 셈이다.",
              "김원이 의원 등 11인이 발의한 의안 제2221550호는 9월 23일 국회 산업통상자원중소벤처기업위원회에 회부됐다. 시장조사, 브랜드 개발, 온라인 판매, 물류와 판매 데이터 활용을 지원할 근거를 넓힌다. 지방자치단체 출자·출연기관도 공공구매 적용 대상에 포함하고 5년 단위 계획과 실태조사 근거를 둔다. 제품을 잘 만들어도 소비자에게 알릴 힘이 부족한 기업에는 필요한 방향이다.",
            ],
          },
          {
            title: "입점은 판매의 시작, 손익은 그다음이다",
            paragraphs: [
              "작은 식품업체가 온라인몰에 들어가 첫 매출을 올렸다고 하자. 수수료와 광고비, 할인행사 분담금, 배송비와 반품비를 치른 뒤 얼마가 남는가. 이는 실제 업체의 확인된 정산 사례가 아니라 지원 효과를 판단하기 위한 손익 계산의 예다. 올해 정부 사업에도 입점 수수료와 마케팅 비용 지원이 포함돼 있다. 지원 기간이 끝난 뒤 업체가 자력으로 판매를 이어갈 수 있는지는 별도로 확인해야 한다.",
              "정부 지원이 플랫폼의 판매 공간을 잠시 빌리는 비용으로만 쓰인다면 판매 기록은 남아도 기업의 고객과 협상력은 남지 않는다. 참여 기업이 여러 채널을 비교하고 자기 고객을 다시 만날 수 있어야 판로가 자산이 된다.",
            ],
            quote: "누가 팔아주었는가보다, 팔고 나서 기업에 무엇이 남았는가.",
          },
          {
            title: "두 기관을 합친다는데, 현장의 수고도 줄어들까",
            paragraphs: [
              "개정안의 또 다른 축은 중소기업마케팅진흥공사 설립이다. 정부가 발표한 구상은 한국중소벤처기업유통원과 공영홈쇼핑을 통합해 제품 발굴부터 판매까지 잇겠다는 것이다. 정부 스스로 두 기관의 제품 발굴·상품화 기능이 겹치고, 판매 지원은 채널마다 흩어졌다고 밝혔다. 업체가 기관마다 신청서를 다시 쓰고 다음 지원 단계를 찾아다니는 수고가 줄어든다면 통합은 의미가 있다.",
              "정부의 진단을 실적으로 검증하려면 사무실과 전산망, 임원 조직, 인사·계약 체계를 어떻게 정리할지부터 보여줘야 한다. 겹치는 사업에서 얼마를 아끼고 그 돈을 몇 개 기업의 판매에 돌릴 수 있는가. 공공기관 수가 줄었다는 숫자와 현장에서 쓰는 비용이 줄었다는 결과는 다르다.",
            ],
          },
          {
            title: "판매 조건을 비교할 힘까지 지원해야 한다",
            paragraphs: [
              "씨앗은 판로지원 확대를 지지한다. 지원사업에 참여하는 기업이 플랫폼별 수수료, 광고·판촉 부담, 정산 기간, 반품 비용을 한눈에 비교할 수 있게 만드는 일도 필요하다. 공공 지원을 받는 유통업체의 계약 변경 조건을 투명하게 공개하고, 판매 데이터를 기업이 어느 범위까지 활용할 수 있는지도 계약에서 분명히 할 수 있다. 이는 개정안에 이미 이런 의무가 있다는 설명이 아니라 국회 심사와 사업 설계에 반영하자는 씨앗의 제안이다.",
              "대기업과 플랫폼은 판매망을 제공하고 작은 업체는 상품과 도전으로 시장을 채운다. 정부가 지원금을 쓸 때는 양쪽의 거래가 지원 종료 뒤에도 이어질 조건을 살펴야 한다. 한 업체에 묶이지 않고 판로를 넓힌 기업이 몇 곳인지도 함께 세어야 한다.",
            ],
          },
          {
            title: "새 공사의 성적표는 기업의 장부에 있다",
            paragraphs: [
              "국회는 공사 설립을 심사하면서 두 기존 기관의 조직·예산·사업 목록과 통합 비용 추계를 공개 자료로 맞춰봐야 한다. 새 공사의 성과도 입점 업체 수나 행사 매출 한 줄로 끝낼 수 없다. 지원 종료 뒤 판매 지속률, 수수료·광고비 등을 제하고 남은 수익의 변화, 새 민간 거래처를 확보한 기업의 비율을 확인해야 한다.",
              "법안은 중소기업이 더 넓은 시장으로 나갈 근거를 마련한다. 정부가 열어준 문이 닫힌 뒤에도 기업이 시장에 남아 있어야 성공이다. 씨앗은 기관 통합의 실제 절감액과 참여기업의 비용·수익 변화를 계속 확인하겠다.",
            ],
          },
        ],
        chart: {
          title: "판로지원의 성과를 확인할 세 가지 장부",
          description: "사업의 투입과 기업에 남는 결과를 나누어 살펴보는 검증표",
          headers: ["확인 대상", "보통 발표하는 수치", "추가로 확인할 결과"],
          rows: [
            ["플랫폼 입점", "입점 기업 수·지원액", "지원 종료 뒤 판매 지속률과 기업 순수익"],
            ["판매 확대", "행사 매출·판매 건수", "수수료·광고·반품 비용과 새 거래처"],
            ["기관 통합", "통합한 기관 수", "전환 비용·절감액·기업의 신청 부담"],
          ],
          note: "이 표의 오른쪽 항목은 씨앗이 제안하는 사후 검증 지표다. 정부가 해당 수치를 이미 발표했다는 뜻은 아니다.",
          afterSection: 2,
        },
        sourceNote: "2026년 9월 25일 공개된 의안 제2221550호의 제안 이유·주요 내용, 중기부의 2026년 지원사업 공고와 9월 8일 통합 발표를 대조했다. 법안은 상임위에 회부된 상태다. 본문의 식품업체 장부는 가상의 설명 사례이며, 공사의 비용·성과 검증 지표는 씨앗의 제안이다.",
      },
      en: {
        title: "A bill promises wider markets for small firms. What will they keep from each sale?",
        subtitle: "Commentary on Bill No. 2221550, a proposed full revision of Korea's SME procurement and market access law",
        summary: "The bill would extend support beyond public procurement and create a marketing agency by combining two existing bodies. Its success should be judged by what firms earn after selling costs and by the merger's actual savings.",
        keyPoints: [
          "Introduced on September 22, Bill No. 2221550 was referred to the relevant Assembly committee on September 23; it has not become law.",
          "The government's 2026 SME marketing programme has a budget of KRW 14.17 billion, including support for platform entry fees and marketing costs.",
          "The proposed agency follows a government plan to combine the existing distribution agency and public home-shopping company. Savings and business outcomes need measurement.",
        ],
        heroAlt: "AI composite showing an SME owner reviewing costs and sales records in a small packing workshop",
        heroCaption: "More sales can still leave little profit after costs. The test of market access is found in a firm's accounts. AI-generated composite image.",
        sections: [
          {
            title: "A programme already exists; the law is catching up",
            paragraphs: [
              "The government allocated KRW 14.17 billion to SME marketing support in 2026. The programme covers entry into online platforms and home-shopping channels, offline promotions, dedicated shops and marketing skills. Yet the full-revision bill introduced on September 22 says the current statute lacks a sufficient basis for supporting consumer and business-to-business markets. Public procurement remains its legislative centre of gravity.",
              "Sponsored by lawmaker Kim Won-i and ten colleagues, Bill No. 2221550 was referred to the National Assembly's relevant committee on September 23. It would provide a broader basis for market research, brand development, online sales, logistics and the use of sales data. It would also extend public-procurement coverage to local-government-funded bodies and establish five-year planning and surveys. These measures address a real problem for firms that can make a product but struggle to reach customers.",
            ],
          },
          {
            title: "Listing a product is only the beginning",
            paragraphs: [
              "Imagine a small food producer making its first online sale. What remains after commissions, advertising, promotional discounts, delivery and returns? This is an illustrative calculation, not a verified seller's statement. The 2026 programme itself helps pay entry fees and marketing costs. Whether a firm can continue selling after that support ends is a separate question.",
              "If public money merely rents temporary shelf space on a platform, the programme may produce sales figures without leaving the firm with customers or stronger bargaining power. A durable route to market gives the seller ways to compare channels and reach customers again.",
            ],
            quote: "The question is what a business keeps after the sale, not simply who helped it make one.",
          },
          {
            title: "Will combining two agencies save firms time?",
            paragraphs: [
              "The bill also provides a basis for the Korea SME Marketing Promotion Corporation. The government's stated plan is to combine the Korea SMEs and Startups Agency for Distribution with Public Home Shopping, bringing product discovery and sales support together. The ministry says product discovery and merchandising functions overlap while sales support is dispersed across channels. A simpler route through those services could spare firms repeated applications and searches for the next programme.",
              "That claim needs a measurable test. How will offices, IT systems, management, staffing and contracts be combined? How much spending on overlapping programmes will be saved, and how much of the saving will reach sellers? A reduction in the agency count is not the same as a reduction in the cost of doing business.",
            ],
          },
          {
            title: "Help firms compare the terms of sale",
            paragraphs: [
              "SEED VOICE supports extending market access assistance. Participating firms should also be able to compare commissions, advertising and promotion charges, settlement periods and return costs across platforms. Terms under publicly supported distribution partnerships should be transparent, including changes to contracts and the extent to which sellers can use their sales data. These are recommendations for parliamentary scrutiny and programme design, not claims that the bill already imposes those duties.",
              "Large retailers and platforms supply distribution; small producers bring products and take commercial risks. Public support should make the relationship viable after a subsidy ends. It should also record how many firms develop more than one sales channel.",
            ],
          },
          {
            title: "The new agency's scorecard belongs in firms' accounts",
            paragraphs: [
              "Before approving the new corporation, lawmakers should compare both existing agencies' staffing, budgets and programmes with the expected costs of merger. The scorecard should extend beyond listings and campaign sales: track continued sales after support ends, profit after commissions and advertising, and access to new private buyers.",
              "The bill offers a basis for reaching larger markets. Success comes when firms remain there after the publicly funded opening closes. SEED VOICE will watch the merger's actual savings and the changes in participating firms' costs and earnings.",
            ],
          },
        ],
        chart: {
          title: "Three ledgers for testing market-access support",
          description: "Separate programme activity from what remains with the participating firm.",
          headers: ["Area", "Commonly reported", "Outcome to examine"],
          rows: [
            ["Platform entry", "Number of firms and support paid", "Sales continuity and net earnings after support"],
            ["Sales growth", "Campaign sales and transactions", "Commissions, ads, returns and new buyers"],
            ["Agency merger", "Number of agencies combined", "Transition cost, savings and application burden"],
          ],
          note: "The outcome column contains SEED VOICE's proposed evaluation measures; it does not imply that the government has published those figures.",
          afterSection: 2,
        },
        sourceNote: "Based on the public summary of Bill No. 2221550 and the ministry's 2026 programme notice and September 8 merger announcement, as available on September 25, 2026. The bill is under committee review. The food producer is an illustrative example; the proposed cost and outcome measures are SEED VOICE's analysis.",
      },
    },
  },
  {
    slug: "criminal-investigation-power-and-accountability",
    billNo: "2220724",
    relatedBillSlug: "bill-2220724",
    date: "2026-09-18",
    readMinutes: 7,
    heroSrc: "images/legislation/criminal-procedure-power-transfer.webp",
    sources: [
      {
        label: {
          ko: "법제처 국민참여입법센터 — 형사소송법 일부개정법률안 제2220724호",
          en: "Ministry of Government Legislation — Criminal Procedure Act amendment, Bill No. 2220724",
        },
        url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2220724/detailRP",
      },
      {
        label: {
          ko: "법제처 국민참여입법센터 — 형사소송법 일부개정법률안(대안) 제2220257호",
          en: "Ministry of Government Legislation — underlying Criminal Procedure Act reform, Bill No. 2220257",
        },
        url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2220257/detailRP",
      },
      {
        label: {
          ko: "YTN — ‘보완수사권 폐지’의 그늘, 피해자들의 우려와 관련 통계",
          en: "YTN — victim concerns and reported figures surrounding the end of prosecutors’ supplementary investigations",
        },
        url: "https://www.ytn.co.kr/_ln/0532_202609092345107804",
      },
      {
        label: {
          ko: "연합뉴스 — 형사소송법 개정 후속 법안의 상임위 처리와 여야 논쟁",
          en: "Yonhap News — committee passage and cross-party dispute over follow-up legislation",
        },
        url: "https://www.yna.co.kr/amp/view/AKR20260915097600001",
      },
    ],
    editions: {
      ko: {
        title: "수사권은 옮겼는데, 책임은 어디에 남았나",
        subtitle: "69개 법률로 확장되는 수사·기소 분리, 시민의 이의제기 통로까지 함께 살펴야 한다",
        summary: "국회가 형사사법체계 개편에 맞춰 69개 법률을 한꺼번에 정비했습니다. 검찰권을 줄이는 방향과 별개로, 경찰 수사를 다시 살필 장치와 범죄 피해자의 이의제기 통로가 실제로 작동하는지 확인해야 합니다.",
        keyPoints: [
          "9월 17일 통과된 개정안은 이미 공포된 수사·기소 분리 체계에 맞춰 69개 관련 법률을 정비합니다.",
          "검사의 직접·보완수사는 줄고 경찰과 특별사법경찰의 수사 책임은 커집니다.",
          "개혁의 성과는 기관별 권한의 크기가 아니라 부실수사 구제와 피해자 보호의 실제 결과로 확인해야 합니다.",
        ],
        heroAlt: "두 기관 사이에서 사건기록을 넘겨주는 손과 서로 다른 업무 공간을 담은 형사사법 권한 이동의 상징 이미지",
        heroCaption: "수사권을 한 기관에서 다른 기관으로 옮기는 것만으로 견제가 완성되지는 않습니다. 사건이 이동할 때 책임과 시민의 이의제기 통로도 함께 연결돼야 합니다.",
        sections: [
          {
            title: "69개 법률이 함께 움직이기 시작했습니다",
            paragraphs: [
              "국회가 9월 17일 형사소송법 일부개정안을 수정 가결했습니다. 이번 법안은 새로운 형사사법체계에 맞춰 과학기술분야 정부출연연구기관법, 선원법, 아동복지법, 고위공직자범죄수사처법 등 모두 69개 법률의 관련 규정을 함께 고치는 내용입니다.",
              "검사의 직접수사권과 보완수사권을 폐지하고 수사의 주체를 사법경찰관으로 일원화한 지난 형사소송법 개정의 후속 입법입니다. 검사는 공소제기와 공소유지를 담당하고, 특별사법경찰관과 검사의 관계는 ‘지휘’에서 ‘협력’으로 바뀝니다. 재정신청 관할 법원도 고등법원에서 지방법원 본원 합의부로 옮겨집니다.",
              "법률 용어를 새 제도에 맞춰 고치는 정리 작업처럼 보이지만, 69개 법률이 한꺼번에 움직인다는 것은 수사와 기소의 분리가 국가의 형사사법 절차 전반으로 들어오기 시작했다는 뜻입니다.",
            ],
          },
          {
            title: "검찰의 권한과 피해자의 권리는 같은 것이 아닙니다",
            paragraphs: [
              "검찰이 수사와 기소를 함께 행사하면서 권력이 과도하게 집중됐다는 비판에는 충분한 근거가 있습니다. 정치적 사건을 둘러싼 표적수사와 별건수사 논란도 반복됐습니다. 수사와 기소를 나누어 서로 견제하게 하겠다는 방향 자체를 부정할 이유는 없습니다.",
              "그러나 한 기관의 권한을 줄였다는 사실이 곧바로 시민의 권리를 확대했다는 뜻은 아닙니다. 권한은 사라지기보다 다른 곳으로 이동합니다. 수사권은 경찰과 각종 특별사법경찰기관에 집중되고, 검사의 지휘를 받던 기관은 검사와 협력하는 관계가 됩니다.",
              "검사의 보완수사권은 검찰권 남용의 통로가 될 수 있었습니다. 동시에 경찰 수사에서 빠진 증거와 혐의를 다시 확인하는 장치로도 작동했습니다. 앞으로 검사는 경찰에 보완수사를 요구할 수 있지만 직접 보완수사에 나서지는 못합니다. 사건이 기관 사이를 오가는 동안 처리 기간이 늘어나거나 책임 소재가 흐려질 가능성도 함께 살펴야 합니다.",
            ],
          },
          {
            title: "권한 분산에는 책임의 연결이 따라야 합니다",
            paragraphs: [
              "수사와 기소의 분리는 권력을 나누는 일입니다. 그러나 권력을 나누면서 책임까지 흩어 놓으면 시민은 더 많은 기관을 돌아다녀야 합니다. 경찰은 기소 판단을 검사의 책임이라고 말하고, 검사는 수사를 경찰의 책임이라고 말하는 구조가 되어서는 곤란합니다.",
              "가정폭력·교제폭력·성범죄처럼 피해자 진술과 정황증거가 중요한 사건은 최초 수사가 부실하면 회복하기 어렵습니다. 검찰의 권한을 지키기 위해 피해자를 앞세워서도 안 되지만, 검찰개혁이라는 이름으로 피해자의 재검토 통로를 약화해서도 안 됩니다.",
            ],
            quote: "권한은 나눴지만 시민이 이의를 제기할 곳이 줄었다면, 그것은 개혁의 완성이 아닙니다.",
          },
          {
            title: "씨앗은 결과를 확인하겠습니다",
            paragraphs: [
              "새 제도가 시행되면 경찰 불송치 결정에 대한 이의신청, 검사의 보완수사·재수사 요구, 경찰의 이행 기간, 보완 절차 이후 기소된 사건을 함께 공개해야 합니다. 가정폭력·교제폭력·성범죄 사건의 평균 처리 기간과 기관 사이에서 장기간 머무른 사건의 수도 확인할 필요가 있습니다.",
              "국가기관의 권한은 어느 기관에 있든 제한되고 감시받아야 합니다. 경찰에 권한이 모이면 경찰을 견제할 장치가 필요하고, 검사가 보완수사를 요구한다면 그 요구와 이행 결과가 기록으로 남아야 합니다.",
              "검찰개혁의 성과는 검사의 사건 수가 얼마나 줄었는지가 아니라 억울한 시민이 얼마나 줄었는지로 확인해야 합니다. 69개 법률을 바꾼 국회가 앞으로 입증해야 할 것도 바로 그 결과입니다.",
            ],
          },
        ],
        chart: {
          title: "형사사법 권한의 이동과 남은 통제 질문",
          description: "이번 후속 개정안과 이미 공포된 형사소송법 개편 내용을 함께 놓고 본 권한 구조입니다.",
          headers: ["영역", "개편 전", "개편 후", "시민이 확인할 점"],
          rows: [
            ["직접·보완수사", "검사가 직접 또는 보완수사", "사법경찰관이 수사, 검사는 보완수사 요구", "요구 이행 기간과 부실수사 구제"],
            ["특별사법경찰", "검사의 지휘", "검사와 협력", "책임 소재와 외부 통제"],
            ["공소 판단", "수사와 기소가 일부 결합", "검사는 송치사건 확인 후 기소 판단", "사실확인과 수사의 경계"],
            ["재정신청", "고등법원", "지방법원 본원 합의부", "접근성·전문성·처리 기간"],
          ],
          note: "출처: 법제처 국민참여입법센터 의안 제2220724호·제2220257호. 실제 시행 절차는 하위 규정과 기관별 집행 기준을 함께 확인해야 합니다.",
          afterSection: 1,
        },
        sourceNote: "이 글은 2026년 9월 18일 현재 공개된 국회 의안정보와 법제처 국민참여입법센터 자료를 기준으로 작성했습니다. 의안 제2220724호는 9월 17일 수정 가결된 후속 정비 법안이며, 직접수사권·보완수사권 개편의 기본 법률은 8월 4일 공포된 법률 제21857호입니다. 보도에 인용된 사건 통계는 제시 주체와 산정 기준을 구분해 지속 검증합니다.",
      },
      en: {
        title: "Investigative power moved. Where did accountability go?",
        subtitle: "As separation of investigation and prosecution spreads across 69 statutes, remedies for citizens must move with it",
        summary: "The National Assembly has aligned 69 statutes with Korea’s restructured criminal justice system. Reducing prosecutorial power may be justified, but the real test is whether weak investigations can still be reviewed and victims can still challenge institutional failure.",
        keyPoints: [
          "The bill passed on September 17 aligns 69 statutes with an investigation–prosecution split already enacted in law.",
          "Prosecutors lose direct and supplementary investigative roles while police and special judicial police assume greater responsibility.",
          "Success should be measured by remedies for weak investigations and outcomes for victims—not by the size of any institution’s formal powers.",
        ],
        heroAlt: "Case files being handed between two institutional workspaces, symbolizing the transfer of criminal-investigation authority",
        heroCaption: "Moving investigative authority from one institution to another does not complete oversight. Accountability and citizens’ routes of challenge must travel with each case.",
        sections: [
          {
            title: "Sixty-nine statutes are moving together",
            paragraphs: [
              "On September 17, the National Assembly passed a revised amendment to the Criminal Procedure Act. It updates provisions across 69 statutes—including laws governing state-funded research institutes, seafarers, child welfare and the Corruption Investigation Office for High-ranking Officials—to fit Korea’s new criminal justice structure.",
              "The measure follows an earlier reform that ended prosecutors’ direct and supplementary investigative authority and made judicial police officers the principal investigators. Prosecutors retain responsibility for filing and maintaining charges. Their relationship with special judicial police changes from command to cooperation, while jurisdiction over applications challenging non-prosecution decisions shifts from High Courts to collegiate panels of District Courts.",
              "This may look like technical statutory housekeeping. In reality, changing 69 laws at once means the investigation–prosecution split is now spreading throughout the justice system.",
            ],
          },
          {
            title: "Prosecutorial power is not the same as victims’ rights",
            paragraphs: [
              "Criticism of Korea’s concentration of investigative and prosecutorial power has a substantial basis. Controversies over politically targeted and expansive investigations have recurred. Separating investigation from prosecution can be a legitimate institutional safeguard.",
              "Yet reducing one institution’s power does not automatically enlarge citizens’ freedom. Power usually moves rather than disappears. Investigative authority will be concentrated in police and special judicial-police bodies, while agencies formerly directed by prosecutors will operate through cooperation.",
              "Supplementary investigation could be abused as a route for prosecutorial overreach, but it also allowed missing evidence or charges to be checked. Prosecutors will now request additional police investigation rather than conduct it themselves. That may create delay or blur responsibility as cases move between institutions.",
            ],
          },
          {
            title: "Divided power requires connected accountability",
            paragraphs: [
              "Separating investigation and prosecution divides state power. But if responsibility is divided as well, citizens may simply be sent from one institution to another. Police should not point to prosecutorial charging authority while prosecutors point back to police control of investigation.",
              "Cases involving domestic violence, dating violence and sexual offenses can depend heavily on testimony and circumstantial evidence. A weak first investigation may be difficult to repair. Victims should not be used to preserve prosecutorial power, but their route to a second review must not be weakened in the name of reform.",
            ],
            quote: "If power is divided but citizens have fewer places to challenge failure, the reform is not complete.",
          },
          {
            title: "Seed Voice will track outcomes",
            paragraphs: [
              "Implementation data should disclose objections to police non-referral decisions, prosecutors’ requests for further or renewed investigation, police compliance times and cases charged after review. Processing times for domestic violence, dating violence and sexual-offense cases also need close scrutiny.",
              "State power must be limited and scrutinized wherever it sits. Greater police authority requires stronger checks on police. Prosecutorial requests for additional work must leave a record, together with the response and result.",
              "The reform should ultimately be judged not by how many cases prosecutors lose, but by whether fewer citizens remain unheard. That is the result lawmakers who amended 69 statutes must now demonstrate.",
            ],
          },
        ],
        chart: {
          title: "Where criminal-justice power moves—and what remains unanswered",
          description: "A combined view of the September 17 follow-up bill and the underlying Criminal Procedure Act reform.",
          headers: ["Area", "Before", "After", "What citizens should track"],
          rows: [
            ["Investigation", "Prosecutors could investigate directly or supplement police work", "Police investigate; prosecutors request additional work", "Compliance time and remedies for weak investigations"],
            ["Special judicial police", "Under prosecutorial direction", "Cooperation with prosecutors", "Responsibility and external review"],
            ["Charging decisions", "Investigation and prosecution partly combined", "Prosecutors review referred cases and decide charges", "Boundary between fact-checking and investigation"],
            ["Judicial review", "High Court", "District Court collegiate panel", "Access, expertise and processing time"],
          ],
          note: "Sources: Bills No. 2220724 and 2220257, Ministry of Government Legislation. Subordinate rules and institutional practice will determine how the structure operates.",
          afterSection: 1,
        },
        sourceNote: "This commentary reflects public legislative records available as of September 18, 2026. Bill No. 2220724 is the follow-up measure passed on September 17; the underlying reform was promulgated on August 4 as Act No. 21857. Statistics cited in related reporting will continue to be checked against their source and methodology.",
      },
    },
  },
  {
    slug: "driving-fitness-family-request-and-due-process",
    billNo: "2221281",
    relatedBillSlug: "bill-2221281",
    date: "2026-09-18",
    readMinutes: 6,
    heroSrc: "images/legislation/driving-fitness-family-request.webp",
    sources: [
      {
        label: {
          ko: "법제처 국민참여입법센터 — 도로교통법 일부개정법률안(대안) 제2221281호",
          en: "Ministry of Government Legislation — Road Traffic Act alternative bill, No. 2221281",
        },
        url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221281/detailRP",
      },
      {
        label: {
          ko: "국가법령정보센터 — 현행 도로교통법",
          en: "Korean Law Information Center — current Road Traffic Act",
        },
        url: "https://www.law.go.kr/법령/도로교통법",
      },
    ],
    editions: {
      ko: {
        title: "가족의 신고가 운전면허를 흔들 수 있다면",
        subtitle: "교통안전을 위한 적성검사 요청권, 개인정보 통보와 이동권 제한에는 분명한 절차가 필요하다",
        summary: "도로교통법 개정안은 배우자와 직계가족이 운전자의 수시 적성검사를 요청할 수 있도록 했습니다. 가족의 요청이 국가의 조사와 개인정보 통보로 이어지는 만큼 남용을 막고 당사자가 다툴 수 있는 절차도 함께 갖춰야 합니다.",
        keyPoints: [
          "배우자·직계존비속과 경찰은 경찰청장에게 운전자의 수시 적성검사를 요청할 수 있게 됩니다.",
          "요청만으로 면허가 취소되는 것은 아니며, 경찰청장이 ‘상당한 이유’를 판단한 뒤 개인정보를 도로교통공단에 통보합니다.",
          "판단 기준, 당사자 통지, 이의제기, 정보 보관 기간을 공개해야 안전과 이동권을 함께 지킬 수 있습니다.",
        ],
        heroAlt: "차 열쇠를 사이에 두고 운전 문제를 차분하지만 무겁게 이야기하는 가족",
        heroCaption: "가족은 위험을 가장 먼저 알아차릴 수 있습니다. 동시에 가족의 판단이 행정조사와 이동권 제한으로 이어질 때는 남용을 막는 절차가 필요합니다.",
        sections: [
          {
            title: "안전을 위해 필요한 제도일 수 있습니다",
            paragraphs: [
              "국회가 9월 17일 도로교통법 일부개정안을 통과시켰습니다. 무면허 상태에서 음주운전이나 음주측정 거부·방해행위를 반복한 사람도 음주운전 방지장치 부착 조건부 운전면허 대상에 포함됩니다. 고속도로와 자동차전용도로의 불법 주정차를 무인장비로 단속할 근거도 마련됩니다.",
              "시민의 권리와 가장 밀접한 변화는 따로 있습니다. 경찰공무원뿐 아니라 운전자의 배우자와 직계존비속도 경찰청장에게 수시 적성검사를 요청할 수 있게 됩니다. 경찰청장이 적성검사 대상에 해당한다고 인정할 상당한 이유가 있다고 판단하면 대상자의 개인정보를 한국도로교통공단에 통보합니다.",
              "인지능력이나 신체기능이 급격히 저하된 운전자가 계속 운전하면 본인뿐 아니라 도로 위의 다른 시민도 위험해집니다. 가족은 이런 변화를 행정기관보다 먼저 알아차릴 가능성이 큽니다. 제도의 목적에는 충분히 납득할 이유가 있습니다.",
            ],
          },
          {
            title: "가족의 요청이 곧 면허 취소는 아닙니다",
            paragraphs: [
              "법안의 구조는 분명히 구분해서 설명해야 합니다. 가족이 요청한다고 곧바로 면허가 정지되거나 취소되는 것은 아닙니다. 경찰청장이 상당한 이유가 있는지 판단하고, 그 뒤에 수시 적성검사 절차가 이어집니다.",
              "그럼에도 요청을 받은 시민은 행정기관의 판단 대상이 되고 개인정보가 다른 기관으로 전달될 수 있습니다. 따라서 ‘상당한 이유’가 무엇인지가 중요합니다. 단순한 주장만으로 충분한지, 의료자료나 사고·위험운전 기록이 필요한지, 당사자에게 요청 사실과 근거를 언제 알려주는지가 법 시행의 성격을 좌우합니다.",
            ],
          },
          {
            title: "질환이 곧 위험운전은 아닙니다",
            paragraphs: [
              "질환이나 장애가 있다는 사실과 안전하게 운전할 능력이 없다는 판단은 같지 않습니다. 진단명만으로 운전 능력을 재단하면 장애인과 고령자의 이동권을 과도하게 제한할 수 있습니다. 실제 운전 능력과 무관한 개인정보까지 행정기관 사이에서 공유될 위험도 있습니다.",
              "가족관계도 언제나 선의로만 움직이지는 않습니다. 재산·부양 문제나 가족 갈등이 있는 상황에서 적성검사 요청이 압박 수단으로 악용될 가능성을 배제할 수 없습니다. 요청만으로 불이익이 확정되지는 않더라도 조사 대상이 되고 개인정보가 통보되는 일 자체가 당사자에게는 부담입니다.",
            ],
            quote: "안전은 목적이고, 절차는 그 목적이 권력 남용으로 바뀌지 않게 하는 경계선입니다.",
          },
          {
            title: "선한 목적이 절차를 대신할 수는 없습니다",
            paragraphs: [
              "교통안전은 국가가 보호해야 할 공익입니다. 그러나 공익이라는 이유만으로 개인정보를 넓게 수집하거나 시민의 이동권을 쉽게 제한할 수는 없습니다. 경찰청에서 한국도로교통공단으로 넘어가는 정보의 범위와 열람 주체, 보관 기간을 최소화하고 공개해야 합니다.",
              "검사 대상자는 자신이 왜 검사를 받게 됐는지 알고 잘못된 정보에 이의를 제기할 수 있어야 합니다. 검사 결과에 대한 불복 절차와 재검사 기회도 분명해야 합니다. 허위 또는 악의적인 요청이 반복될 경우 이를 걸러낼 장치도 필요합니다.",
              "법 시행 뒤에는 요청 주체별 건수, 경찰청의 수용·기각 비율, 면허 유지·조건부 유지·취소 결과, 이의신청과 재검사 결과를 공개해야 합니다. 제도가 실제로 사고를 줄였는지도 확인해야 합니다. 가족의 걱정을 안전으로 연결하되, 가족의 말이 곧바로 국가의 의심과 시민의 이동권 제한으로 이어지지 않게 해야 합니다.",
            ],
          },
        ],
        chart: {
          title: "가족의 요청에서 적성검사까지—절차와 통제 지점",
          description: "가족의 요청만으로 면허가 취소되는 구조는 아닙니다. 각 단계의 판단 기준과 이의제기 통로가 핵심입니다.",
          headers: ["단계", "행위 주체", "법안이 정한 내용", "필요한 통제"],
          rows: [
            ["검사 요청", "경찰·배우자·직계존비속", "경찰청장에게 수시 적성검사 요청", "구체적 사유와 자료 기준"],
            ["요청 판단", "경찰청장", "‘상당한 이유’가 있는지 판단", "결정 이유 통지와 기록"],
            ["정보 통보", "경찰청 → 도로교통공단", "대상자의 개인정보 전달", "최소수집·보관기간·열람기록"],
            ["검사·처분", "도로교통공단·면허기관", "적성검사 후 면허 관련 결정", "이의신청·재검사·불복 절차"],
          ],
          note: "출처: 법제처 국민참여입법센터 의안 제2221281호. 구체적인 판단 기준과 정보보호 절차는 공포 법률과 하위 규정을 추가 확인해야 합니다.",
          afterSection: 1,
        },
        sourceNote: "이 글은 2026년 9월 18일 현재 공개된 의안 제2221281호의 제안이유와 주요내용을 기준으로 작성했습니다. 본회의 통과는 확인됐지만 공포일·시행일과 하위 규정은 확정 자료를 추가 확인해야 합니다. 가족의 요청은 적성검사 절차의 시작이며 그 자체로 면허 취소를 의미하지 않습니다.",
      },
      en: {
        title: "When a family report can put a driving licence in question",
        subtitle: "A safety review may be justified, but personal-data transfers and limits on mobility require clear due process",
        summary: "A Road Traffic Act amendment allows spouses and direct relatives to request an ad hoc driving-fitness review. Because a family request can trigger state scrutiny and data transfer, safeguards against abuse and a clear route of challenge must accompany the measure.",
        keyPoints: [
          "Spouses, direct relatives and police officers may request a driving-fitness review from the National Police Agency commissioner.",
          "A request does not itself cancel a licence: police must find substantial grounds before transferring personal information to the Korea Road Traffic Authority.",
          "Transparent standards, notice, appeal rights and data-retention limits are needed to protect both road safety and mobility.",
        ],
        heroAlt: "Family members discussing a difficult driving decision with car keys between them",
        heroCaption: "Families may see a danger first. When their judgment can lead to state review and a restriction on mobility, procedures must prevent misuse.",
        sections: [
          {
            title: "The measure may serve a legitimate safety need",
            paragraphs: [
              "On September 17, the National Assembly passed an amendment to the Road Traffic Act. It extends ignition-interlock conditional licensing to repeat drunk-driving and test-refusal offenses committed while unlicensed, and creates a basis for automated fines for illegal stopping or parking on expressways and motorways.",
              "The most direct civil-liberties issue lies elsewhere. A driver’s spouse and direct relatives, as well as police officers, may ask the National Police Agency commissioner to initiate an ad hoc fitness review. If the commissioner finds substantial grounds, the person’s information may be sent to the Korea Road Traffic Authority.",
              "Rapid cognitive or physical decline can endanger both a driver and everyone else on the road. Family members may notice change sooner than an administrative database. The safety rationale deserves to be taken seriously.",
            ],
          },
          {
            title: "A family request is not an automatic cancellation",
            paragraphs: [
              "The legal steps must be described accurately. A relative’s request does not immediately suspend or cancel a licence. Police first determine whether substantial grounds exist, and a fitness-review process follows.",
              "Still, the person becomes the subject of an official decision and personal information may pass to another public body. The meaning of ‘substantial grounds’ therefore matters. Rules should clarify whether a statement alone is sufficient, what medical or driving evidence is required, and when the person is told who requested a review and why.",
            ],
          },
          {
            title: "A diagnosis is not the same as unsafe driving",
            paragraphs: [
              "Having a medical condition or disability is not identical to being unable to drive safely. Decisions based on a diagnosis alone could over-restrict the mobility of older people and persons with disabilities. Information unrelated to actual driving ability could also circulate between agencies.",
              "Family relationships are not always benign. In disputes over property, care or family responsibility, a review request could be used as leverage. Although the request does not decide the outcome, being investigated and having data transferred is itself a burden.",
            ],
            quote: "Safety is the goal. Procedure is the boundary that keeps that goal from becoming an abuse of power.",
          },
          {
            title: "A good purpose cannot replace due process",
            paragraphs: [
              "Road safety is a legitimate public interest. It does not justify collecting broad personal data or restricting mobility without clear limits. The information passed from police to the Korea Road Traffic Authority, who may access it and how long it is retained should all be minimized and disclosed.",
              "The person reviewed should know the reason, correct false information and challenge the result. A new review should be available, and repeated malicious requests should be screened out.",
              "After implementation, authorities should publish requests by source, police acceptance and rejection rates, licence outcomes, appeals and review results. Accident reduction should also be measured. Family concern can support safety, but it should not turn automatically into state suspicion and a loss of mobility.",
            ],
          },
        ],
        chart: {
          title: "From family request to fitness review—where safeguards belong",
          description: "The bill does not cancel a licence on a relative’s word alone. Standards and appeal rights matter at every stage.",
          headers: ["Stage", "Actor", "What the bill provides", "Safeguard needed"],
          rows: [
            ["Request", "Police, spouse or direct relative", "Ask the police commissioner for a review", "Specific grounds and supporting material"],
            ["Assessment", "Police commissioner", "Decide whether substantial grounds exist", "Recorded reasons and notice"],
            ["Data transfer", "Police to road-traffic authority", "Send personal information", "Data minimization, retention limit and access log"],
            ["Review and decision", "Road-traffic and licensing bodies", "Assess fitness and decide licence status", "Objection, retest and appeal"],
          ],
          note: "Source: Bill No. 2221281, Ministry of Government Legislation. The enacted text and subordinate rules must establish the detailed standards and data safeguards.",
          afterSection: 1,
        },
        sourceNote: "This article is based on the statement of purpose and principal provisions publicly available for Bill No. 2221281 as of September 18, 2026. Plenary passage is confirmed, while promulgation, commencement and subordinate rules require further verification. A family request starts a review process; it does not itself cancel a licence.",
      },
    },
  },
];

export const getLegislativeCommentary = (slug: string) => legislativeCommentaries.find((article) => article.slug === slug);

export const getLegislativeCommentaryEdition = (article: LegislativeCommentary, language: LegislativeCommentaryLanguage) => article.editions[language];
