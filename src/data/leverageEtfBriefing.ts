import type { Briefing } from "./briefings";
import type { BriefingTranslation } from "./contentTranslations/types";

const root = "images/briefings/leverage-etf-2026";
const related = "/briefings/government-policy-funds-risk-and-taxpayer-cost-2026";

export const leverageEtfBriefing: Briefing = {
  slug: "leveraged-etfs-government-signals-citizen-losses-2026",
  category: "씨앗 시민브리핑 · 투자와 국가의 책임",
  title: "국가는 투자판을 달궜다, 시민은 돈과 믿음을 잃었다",
  subtitle: "단일종목 레버리지 ETF 사태—대통령의 말과 정부의 정책이 투자 안전판처럼 들릴 때",
  summary: "2조3,242억원의 개인 매매손실 앞에서 금융위원장 한 사람의 사과로 책임을 정리할 수 없습니다. ETF의 구조, 국가가 보낸 투자 신호, 뉴딜펀드와의 차이, 반복을 막을 대책을 시민의 눈으로 살펴봅니다.",
  date: "2026-10-08", author: "작은씨앗", readMinutes: 14, featured: true,
  placeBodyImagesBySection: true,
  images: [
    {src: `${root}/state-signal.webp`, alt: "거대한 국가의 확성기가 밝힌 상승 화살표 길 아래 무너지는 다리와 시민의 저축", caption: "국가의 자신감이 개인의 투자 안전을 보장하지는 않습니다. 정책의 신뢰가 상품의 신뢰로 옮겨갈 때 정부의 책임도 무거워집니다.", credit: "AI 이미지", sourceUrl: "", contain: true},
    {src: `${root}/household-savings.webp`, alt: "어두운 식탁 위 깨진 저축 유리병과 결혼반지, 집 열쇠, 생활비 봉투", caption: "계좌의 손실은 결혼 준비, 주거, 노후의 계획에 남습니다. 정책은 거래량과 자금 유입만으로 평가할 수 없습니다.", credit: "AI 이미지", sourceUrl: "", contain: true, afterSection: 3},
    {src: `${root}/daily-reset-ko-v2.png`, alt: "주식은 100만원에서 110만원을 거쳐 100만원으로 돌아오지만 일일 두 배 상품은 약 98만1818원이 되는 계산", caption: "설명용 계산입니다. 첫날 +10%, 다음 날 −9.09%일 때 일일 두 배 상품은 약 1.82% 손실입니다. 보수·거래비용을 제외했습니다.", credit: "씨앗의 소리 설명 도표", sourceUrl: "", contain: true, afterSection: 0},
    {src: `${root}/loss-scope-ko-v2.png`, alt: "개인 확정 매매손실 2조3242억원의 집계기간과 증권사 범위 및 전체 순손익과의 차이", caption: "2026년 5월 27일~8월 14일, 주요 증권사 10곳의 개인 확정 매매손실 집계입니다. 미실현 평가손실과 전체 순손익을 뜻하지 않습니다.", credit: "씨앗의 소리 통계 도표 · 금융감독원 집계에 관한 연합뉴스 보도", sourceUrl: "https://www.yna.co.kr/view/AKR20261008092451002", contain: true, afterSection: 4}
  ],
  content: [
    "2조3,242억원.",
    "금융감독원이 집계한 개인투자자의 삼성전자·SK하이닉스 단일종목 레버리지·인버스 상품 매매손실입니다. 상품이 출시된 5월 27일부터 8월 14일까지, 주요 증권사 10곳에서 매매해 확정한 손실을 집계한 수치입니다. 아직 팔지 않은 상품의 평가손실이나 이후 기간까지 포함한 전체 순손익을 뜻하지는 않습니다. 확인된 범위만으로도 시민의 돈이 얼마나 크게 흔들렸는지 보여줍니다.",
    "이억원 금융위원장은 10월 8일 국정감사에서 금융당국 수장으로서 국민에게 송구하다며 사과했습니다. 상품 도입의 필요성은 있었다는 입장을 유지했고, 출시 시점과 투자자 보호를 더 세심하게 살폈어야 한다는 지적을 받아들였습니다.",
    "사과가 나왔다고 책임이 정리된 것은 아닙니다. 대통령이 국내 증시의 매력을 강조하고, 정책실장이 고위험 상품 도입을 제기하고, 금융당국이 규제를 바꿨습니다. 이 과정이 시민에게 어떤 투자 신호로 전달됐는지를 함께 따져야 합니다.",
    "국가가 앞장서 만든 투자 환경을 믿었던 시민에게 손실이 돌아왔습니다. 계좌에서 사라진 돈은 결혼 준비금일 수도 있고, 집을 마련하려고 모은 돈일 수도 있고, 은퇴 뒤 생활비일 수도 있습니다. 정책 책임자는 자리를 떠날 수 있습니다. 시민의 손실은 생활에 남습니다."
  ],
  sections: [
    {title: "ETF는 무엇이고, 레버리지는 왜 위험할까요", paragraphs: [
      "ETF는 거래소에서 주식처럼 사고팔 수 있는 펀드입니다. 대표적인 코스피200 ETF는 국내 주요 기업 200개 종목의 흐름을 따라갑니다. 여러 주식을 한꺼번에 담아 투자 대상을 나눌 수 있습니다.",
      "이번에 논란이 된 상품은 한 종목에 집중합니다. 삼성전자나 SK하이닉스의 하루 등락률을 두 배로 따라가는 것을 목표로 합니다. 상승형 레버리지 상품은 주가가 하루 5% 오르면 약 10% 수익을 추구하고, 5% 내리면 약 10% 손실을 입을 수 있습니다. 고배당 상품이라기보다 고위험·고수익 추구 상품입니다.",
      "‘두 배’라는 말에는 함정이 있습니다. 하루 수익률의 두 배이지, 몇 달 뒤 주식 수익률의 두 배를 보장하는 상품이 아닙니다.",
      "100만원짜리 주식이 첫날 10% 올라 110만원이 되고, 다음 날 약 9.09% 내려 다시 100만원이 됐다고 해보겠습니다. 하루 수익률을 정확히 두 배로 따라가는 상품은 100만원에서 120만원으로 올랐다가 약 98만1,818원으로 내려갑니다. 주식은 제자리인데 투자금은 줄었습니다. 보수와 거래비용을 제외한 설명용 계산입니다.",
      "매일 달라진 금액을 기준으로 수익과 손실이 누적되기 때문입니다. 주가가 회복하면 기다린 보람이 있을 것이라는 생각이 이 상품에서는 그대로 통하지 않습니다. 미국 SEC의 투자자 안내도 하루를 넘겨 보유할 때 성과가 목표 배율과 크게 달라질 수 있으며, 변동성이 큰 시장에서 그 차이가 확대될 수 있다고 경고합니다.",
      "국내에서도 위험은 이미 알려져 있었습니다. 자본시장연구원의 2024년 연구는 복리효과와 투자자의 거래 행태가 레버리지·인버스 ETF의 성과에 미치는 영향을 분석했습니다. 변동성이 크고 등락이 반복되면 투자성과가 악화될 수 있고, 손실을 만회하려는 방향의 매매도 불리한 결과로 이어질 수 있습니다.",
      "국가가 상품의 문을 열기 전에 충분히 살폈어야 할 위험입니다."
    ]},
    {title: "정부는 왜 이 상품을 국내로 들여왔을까요", paragraphs: [
      "정부의 설명은 해외로 나가는 투자 수요를 국내로 돌리겠다는 것이었습니다. 미국과 홍콩에서는 거래할 수 있는 상품을 국내에서도 허용하고, 국내 규제와 보호장치를 적용하겠다는 논리였습니다.",
      "금융위원회는 1월 30일 발표에서 이를 대통령 업무보고 과제인 ETF 시장 제도개선의 일부로 제시했습니다. 국내 자본시장의 매력을 높이고 자금 유출 유인을 줄이겠다고 설명했습니다. 당시 국내에서는 분산투자 요건 때문에 단일종목 상품을 출시할 수 없었고, 정부는 시행령과 규정을 바꿔 허용했습니다.",
      "환율 안정도 정책의 배경이었습니다. 이재명 대통령은 9월 18일 기자회견에서 상품 도입을 당시 보고받았으며, 해외로 향하는 레버리지 투자 수요를 국내로 돌리는 것이 외환시장 안정에 도움이 된다는 취지였다고 설명했습니다.",
      "환율을 안정시키고 국내 자본시장을 키우려는 목표는 검토할 수 있습니다. 그 목표가 시민에게 고위험 투자를 확대할 충분한 이유인지는 별도로 입증해야 합니다.",
      "해외로 나가는 돈을 붙잡겠다고 국내에 더 위험한 투자 통로를 넓혔다면, 위험을 줄인 것인지 위험을 국내로 옮긴 것인지 확인해야 합니다. 해외 상품으로 향하던 수요만 돌아온 것인지, 정부의 정책 추진을 보고 새로운 시민들까지 위험한 투자에 들어온 것인지도 따져야 합니다.",
      "국가는 환율과 자금 흐름을 봤습니다. 시민은 자기 돈을 넣었습니다. 정책의 목표와 개인의 안전 사이에 놓인 간격을 누가 살폈습니까."
    ]},
    {title: "대통령의 말이 투자 안전판처럼 들렸습니다", paragraphs: [
      "이 대통령은 2025년 9월 증권사 리서치센터장들과 만난 자리에서 “‘국장 복귀는 지능 순’이라는 말이 생기도록 만들어야 되겠다”고 말했습니다. 국내 증시를 매력적인 투자처로 만들겠다는 강한 메시지였습니다.",
      "김용범 당시 정책실장은 올해 1월 인터뷰에서 해외에서 가능한 레버리지 상품을 국내에서는 왜 만들 수 없는지 금융위원회에 물었다고 밝혔습니다. 이후 금융당국이 도입을 추진했고, 5월 말 실제 상품이 나왔습니다.",
      "대통령이 국내 증시로 돌아오라고 기대를 만들고, 정책실장이 새로운 상품을 띄우고, 정부가 규제를 고쳐 길을 열었습니다. 시민에게는 이 행동들이 하나의 신호로 읽힐 수 있습니다.",
      "‘정부가 국내 시장을 밀어주고 있다.’",
      "‘국가가 필요해서 허용한 상품이니 위험도 충분히 검토했을 것이다.’",
      "이것이 정부의 정책 신뢰가 투자 상품의 신뢰로 옮겨가는 과정입니다. 대통령이 특정 레버리지 상품을 사라고 직접 권유했거나 원금을 보장했다는 뜻은 아닙니다. 국가가 보낸 장려 신호와 상품 도입이 결합해 위험을 작게 느끼게 할 수 있었다는 책임을 묻는 것입니다.",
      "정부는 위험 안내도 했습니다. 출시 당시 예탁금 1,000만원과 두 시간의 사전교육을 요구했습니다.",
      "그 경고가 대통령의 자신감과 정부의 추진 의지보다 강하게 전달됐습니까. 위험을 경고하는 작은 문구와 국가가 앞장선다는 큰 메시지가 함께 놓였을 때, 시민은 어느 쪽을 더 믿었겠습니까.",
      "국가의 말에는 민간 금융회사의 광고보다 무거운 신뢰가 실립니다. 규제를 바꾸고 시장을 움직일 권한이 있기 때문입니다. 그 신뢰를 투자 참여를 늘리는 데 사용했다면, 손실 뒤에 투자자의 자기 책임만 강조하는 것은 무책임합니다."
    ]},
    {title: "시민의 조급함에 국가가 불을 보탠 것은 아닌가요", paragraphs: [
      "집값은 멀어지고, 월급을 모아서는 자산 격차를 따라가기 어렵다는 불안이 커집니다. 이런 시민에게 두 배의 수익을 추구하는 상품은 빠르게 따라잡을 기회처럼 보일 수 있습니다. 손실이 나면 다시 오를 때 더 빨리 만회할 수 있다는 기대도 생깁니다.",
      "아시아경제의 7월 논평은 정부가 상품의 구조적 위험과 함께 투자자의 조급함·과신을 정책 설계에 충분히 반영했는지를 비판했습니다. 교육 시간을 늘리는 것만으로는 부족하며, 손실 만회 충동과 실제 거래 행동까지 다루는 교육이 필요하다고 지적했습니다.",
      "이는 투자자의 마음이 약하다는 이야기가 아닙니다. 정부가 제도를 설계할 때 실제 사람이 어떻게 행동하는지 살펴야 한다는 뜻입니다. 상품 설명을 읽고 합리적으로 위험을 계산하는 투자자만 있는 시장을 가정해서는 시민을 보호할 수 없습니다.",
      "자본시장연구원에 따르면 출시일부터 6월 19일까지 개인의 단일종목 레버리지 ETF 누적 순매수는 약 8조2,000억원이었습니다. 불과 몇 주 사이의 쏠림입니다.",
      "아시아경제는 7월 급락 당시 외신 보도를 소개하며 개인투자자 사이의 절망과 좌절을 전했습니다. 투자 손실이 생활 계획을 무너뜨리는 문제로 번졌다는 보도입니다. 이 반응을 모든 투자자의 상황으로 일반화할 수는 없어도, 정책을 거래량과 자금 유입만으로 평가할 수 없다는 사실은 분명합니다.",
      "시민의 절박함을 투자 수요로만 보면 국가는 위험한 길로 갑니다. 정부의 자신감이 시민의 조급함과 만나는 순간, 정책 홍보는 투기를 부추기는 신호가 될 수 있습니다."
    ]},
    {title: "투기판을 열어놓고 시장 탓만 할 수 없습니다", paragraphs: [
      "레버리지 ETF는 목표 배율을 맞추기 위해 자산을 조정합니다. 상승형 두 배 상품은 주가가 오른 날 추가로 사고, 내린 날 추가로 파는 거래가 발생할 수 있습니다. 큰 규모의 거래가 장 마감에 몰리면 가격 움직임을 더 크게 만들 위험이 있습니다. 자본시장연구원도 이 리밸런싱 거래의 영향을 지속적으로 점검해야 한다고 밝혔습니다.",
      "위험은 상품 가입자의 계좌 안에만 머물지 않습니다. 같은 주식을 보유한 시민과 다른 펀드에도 시장의 급변이 영향을 줍니다.",
      "서울신문의 7월 사설은 투자 선택권을 앞세워 상품을 허용한 뒤 뒤늦게 보호조치를 강화하는 당국의 대응을 비판했습니다. 조선일보의 8월 사설은 고위험 상품이 충분한 검토를 거쳐 도입됐는지, 내부 우려가 어떻게 처리됐는지 공개하라고 요구했습니다. 두 사설의 핵심은 같습니다. 상품 허용과 감독의 책임을 투자자의 선택 뒤에 숨길 수 없다는 것입니다.",
      "주가 하락과 변동성 확대에는 글로벌 반도체 산업, 유가·금리·환율, 투자자 간 수급 충돌 등 여러 요인이 작용했습니다. 자본시장연구원도 이런 복합적인 배경을 분석했습니다. 이번 매매손실 전부를 정부 정책이 직접 만들어낸 손해액으로 계산할 수는 없습니다.",
      "그 사실이 정부를 면책해주지는 않습니다. 흔들릴 수밖에 없는 시장에 위험을 확대하는 통로를 추가하고, 국가의 신뢰까지 보탰다는 판단을 검증해야 합니다.",
      "국가가 투기판을 만들었다는 비판은 시민의 투자를 비난하는 말이 아닙니다. 시민의 신뢰를 등에 업고 단기 베팅의 통로를 넓힌 권력의 판단을 비판하는 말입니다."
    ]},
    {title: "뉴딜펀드에서는 납세자가, 여기서는 투자자가 부담했습니다", paragraphs: [
      "앞서 ‘정부가 밀어주는 펀드, 위험은 누가 떠안나요?’에서 살펴본 국민참여형 뉴딜펀드는 정부 재정 등이 정해진 범위의 손실을 먼저 부담하는 구조였습니다. 손실이 난 자펀드들의 손실액 약 205억8,800만원 중 재정 부담은 139억3,000만원이었습니다. 산업은행은 차수별 손익 합산 결과 일반 투자자의 실제 손실은 없다고 설명했습니다. 이 재정 부담액은 전체 사업의 최종 순손실과 구분해야 합니다.",
      "뉴딜펀드에는 실제 손실 완충장치가 있었습니다. 그 비용은 투자하지 않은 시민도 납세자로서 부담했습니다. 레버리지 ETF에는 그런 재정 안전판이 없었습니다. 정부의 정책 의지를 안전판처럼 받아들였더라도 투자 손실은 자신의 계좌에 남았습니다.",
      "두 상품의 구조는 다릅니다. 공통으로 드러나는 문제는 국가가 정책 목표를 위해 시민의 돈과 신뢰를 끌어들일 때, 비용과 책임을 충분히 설명하고 끝까지 감당하느냐는 것입니다.",
      "미래 산업 육성이나 환율 안정이라는 명분으로 시민의 위험을 작게 보이게 해서는 안 됩니다. 정책의 이름이 투자 손실을 없애주지는 않습니다."
    ]},
    {title: "금융위원장 한 사람의 사과로 끝낼 일이 아닙니다", paragraphs: [
      "오늘 사과가 정책 책임의 종착점이 될 수는 없습니다. 금융위원회는 제도 설계와 투자자 보호를, 금융감독원과 거래소는 심사와 시장감시를 설명해야 합니다. 정책실장은 도입을 제기하고 조정한 과정을, 대통령은 보고받은 정책의 위험을 어떻게 판단했는지 밝혀야 합니다.",
      "정부는 적법한 절차를 거쳤다고 설명합니다. 절차를 지켰다는 설명과 위험을 충분히 검증했다는 증거는 각각 제시해야 합니다.",
      "반복을 막으려면 대책도 그 책임에 맞춰야 합니다.",
      "첫째, 대통령과 고위 공직자의 투자 장려 발언에 명확한 원칙을 세워야 합니다. 특정 시장에 들어오는 것이 현명한 선택이라는 인상을 주는 표현을 삼가고, 정부의 정책 목표와 개인의 투자 적합성을 구분해야 합니다. 정부 승인과 수익·원금 보장은 다르다는 설명도 장려 발언과 같은 무게로 전달해야 합니다.",
      "둘째, 고위험 상품 도입 전 독립적인 위험 검증과 공개를 의무화해야 합니다. 자금이 예상보다 많이 몰리는 상황, 급락장, 장 마감 매매 집중을 시험하고, 규모 제한과 중단·배율 조정 기준을 출시 전에 정해야 합니다. 반대 의견과 처리 결과도 기록으로 남겨야 합니다.",
      "셋째, 뒤늦게 만든 보호장치가 실제로 작동하는지 확인해야 합니다. 당국은 예탁금을 현금 3,000만원으로 높였고, 8월 19일부터 모의거래도 의무화했습니다. 이제 확인할 것은 교육 이수자 수가 아니라 위험한 집중투자와 반복 손실이 줄었는지입니다.",
      "넷째, 상품 규모와 매매 구조를 함께 관리해야 합니다. 자본시장연구원은 투자자의 레버리지 비중 관리와 시장 급변 때의 배율 조정, 일관된 규제 체계를 제안했습니다. 국내 상품만 제한해 해외의 더 위험한 상품으로 수요가 이동하는 문제까지 살펴야 합니다.",
      "다섯째, 손실과 책임을 공개하고 피해 대응을 해야 합니다. 확정손실과 평가손실, 이익 계좌를 포함한 순손익을 구분해 집계해야 합니다. 불완전판매와 불공정거래가 있었다면 그 책임을 조사하고, 큰 손실을 겪은 시민에게 채무·생활·심리 상담을 연결할 필요가 있습니다. 투자 손실을 일괄적으로 세금으로 메우는 방식과는 구분해야 합니다.",
      "씨앗은 도입 과정의 기록 공개, 투자자 손익 집계, 보호조치의 실제 효과를 계속 확인하겠습니다. 사과 이후 무엇이 바뀌었는지 숫자와 기록으로 살피겠습니다.",
      "국가가 국민에게 보낸 잘못된 투자 신호는 한 번의 손실로 끝나지 않을 수 있습니다. 다시 벌어야 한다는 조급함, 가족에게 말하지 못하는 고통, 노후 계획의 붕괴로 이어질 수 있습니다.",
      "시민의 저축은 국가의 환율 관리나 증시 부양을 위해 동원해도 되는 돈이 아닙니다.",
      "투자판을 달군 권력은 사과 뒤로 물러설 수 있어도, 시민은 무너진 생활에서 물러설 곳이 없습니다. 국가는 그 차이만큼 무겁게 책임져야 합니다."
    ]}
  ],
  paragraphLinks: [{sectionIndex: 5, paragraphIndex: 0, links: [{label: "정부가 밀어주는 펀드, 위험은 누가 떠안나요?", url: related}]}],
  watchPoints: ["대통령실·금융당국의 도입 검토와 반대 의견 처리 기록", "확정손실·평가손실·전체 순손익을 구분한 집계", "예탁금·교육·모의거래 강화 이후 반복 손실의 변화"],
  sources: [
    {label: "연합뉴스 · 개인 확정 매매손실 2조3242억원 집계 (2026.10.8)", url: "https://www.yna.co.kr/view/AKR20261008092451002"},
    {label: "이데일리 · 이억원 금융위원장 국감 사과와 도입 필요성 설명 (2026.10.8)", url: "https://www4.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=03640806645610952"},
    {label: "삼성자산운용 · ETF란 무엇인가", url: "https://www.samsungfund.com/etf/insight/guide/view01.do"},
    {label: "금융위원회 · 국내 ETF 시장 제도개선 (2026.1.30)", url: "https://www.fsc.go.kr/no010101/86178"},
    {label: "금융위원회 · 단일종목 레버리지 상품 출시 (2026.5.26)", url: "https://fsc.go.kr/no010101/86973"},
    {label: "한국경제 · 대통령 국내 증시 관련 발언 (2025.9.18)", url: "https://www.hankyung.com/article/2025091827836"},
    {label: "TV조선 · 정책실장 도입 제기와 정책 경위 (2026.9.16)", url: "https://news.tvchosun.com/site/data/html_dir/2026/09/16/2026091690218.html"},
    {label: "서울신문 · 대통령 기자회견, 환율 안정 취지 설명 (2026.9.18)", url: "https://www.seoul.co.kr/news/politics/2026/09/18/20260918500200"},
    {label: "미국 SEC · 레버리지·인버스 ETF 투자자 경고", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-alerts/sec"},
    {label: "자본시장연구원 · 레버리지·인버스 ETF 복리효과와 투자자 행태 (2024)", url: "https://www.kcmi.re.kr/report/report_view?report_no=1775"},
    {label: "자본시장연구원 · 단일종목 ETF 자금 유입과 리밸런싱 (2026)", url: "https://www.kcmi.re.kr/publications/pub_detail_view?cno=6801&syear=2026&zcd=002001016&zno=1922"},
    {label: "자본시장연구원 · 시장 변동성의 복합 원인 (2026)", url: "https://www.kcmi.re.kr/report/report_view?report_no=2315"},
    {label: "자본시장연구원 · 레버리지 관리와 보호 대책 (2026)", url: "https://www.kcmi.re.kr/publications/pub_detail_view?cno=6824&syear=2026&zcd=002001016&zno=1929"},
    {label: "아시아경제 논평 · 투자자 행동을 고려한 보호 설계 (2026.7.30)", url: "https://view.asiae.co.kr/article/2026072909151186190"},
    {label: "아시아경제 · 급락 이후 투자자의 절망에 관한 외신 보도 (2026.7.30)", url: "https://view.asiae.co.kr/article/2026073008400465871"},
    {label: "서울신문 사설 · 뒤늦은 투자자 보호 강화 (2026.7.30)", url: "https://www.seoul.co.kr/news/editOpinion/editorial/2026/07/30/20260730027001"},
    {label: "조선일보 사설 · 상품 도입 과정과 내부 우려 공개 요구 (2026.8.5)", url: "https://v.daum.net/v/uA3U8ed81n"},
    {label: "금융위원회 · 출시 전 교육·예탁금 보호장치 (2026.5.15)", url: "https://fsc.go.kr/no010101/86910"},
    {label: "금융위원회 · 예탁금 강화 (2026.7.24)", url: "https://fsc.go.kr/po010102/87403"},
    {label: "금융위원회·KDI · 모의거래 의무화 발표 (2026.8.12)", url: "https://eiec.kdi.re.kr/policy/materialView.do?num=285336"},
    {label: "연합뉴스 · 뉴딜펀드 손실과 재정 부담 (2026.10.2)", url: "https://www.yna.co.kr/view/AKR20261001179600002"}
  ],
  sourceNote: "2026년 10월 8일 국정감사 보도와 정부·연구기관 자료 기준입니다. 매매손실 집계는 전체 투자자의 순손익이나 정부 정책의 인과적 손해액과 다릅니다. 대통령의 특정 상품 직접 매수 권유·원금 보장, 국민 다수의 여론, 전체 투자자의 절망을 입증한 자료는 아닙니다. 정책 신뢰가 투자 위험 인식에 미치는 영향과 책임·대책은 씨앗의 판단입니다."
};

export const leverageEtfTranslation: BriefingTranslation = {
  category: "SEED CIVIC BRIEFING · INVESTMENT AND STATE RESPONSIBILITY",
  title: "The State Fuelled the Investment Rush. Citizens Lost Money and Trust",
  subtitle: "Single-stock leveraged ETFs in South Korea: when presidential confidence and government policy feel like a safety net",
  summary: "Reported realised retail trading losses of KRW 2.3242 trillion demand more than one regulator’s apology. We examine the products, official signals, the contrast with the New Deal Fund and safeguards against a repeat.",
  author: "Little Seed",
  images: [
    {alt: "An enormous institutional megaphone illuminates an upward investment path above a collapsing bridge and household savings", caption: "Government confidence cannot guarantee the safety of personal investments. Officials carry greater responsibility when trust in policy becomes trust in a product.", credit: "AI image"},
    {alt: "A broken glass savings jar, wedding rings, a house key and household envelopes on a dark dining table", caption: "Investment losses can unsettle marriage, housing and retirement plans. Trading volumes and capital inflows cannot measure a policy’s full effects.", credit: "AI image"},
    {src: `${root}/daily-reset-en-v2.png`, alt: "A stock returns from KRW 1 million to its starting value while a daily two-times product falls to about KRW 981818", caption: "Illustration: a 10% rise followed by a 9.09% fall leaves the daily two-times product down about 1.82%. Fees and trading costs are excluded.", credit: "SEED VOICE explanatory chart"},
    {src: `${root}/loss-scope-en-v2.png`, alt: "The coverage and limitations of the KRW 2.3242 trillion realised retail trading-loss figure", caption: "Realised retail trading losses at ten major brokerages, May 27–August 14, 2026. This is neither unrealised losses nor aggregate net profit and loss.", credit: "SEED VOICE statistical graphic · Yonhap reporting on FSS figures"}
  ],
  content: [
    "KRW 2.3242 trillion.",
    "That is the realised trading-loss figure compiled by South Korea’s Financial Supervisory Service for retail investors in single-stock leveraged and inverse products tied to Samsung Electronics and SK hynix. It covers ten major brokerages from the May 27 launch through August 14. It excludes unrealised losses on unsold holdings and does not represent aggregate net returns across all investors or subsequent periods. Even within that defined scope, the damage is substantial.",
    "At an October 8 parliamentary audit, Financial Services Commission Chairman Lee Eog-weon apologised to the public as head of the financial regulator. He maintained that introducing the products had a policy rationale, while accepting criticism that timing and investor protection required more careful consideration.",
    "An apology does not settle responsibility. The president promoted the appeal of domestic equities, the presidential policy chief raised the introduction of high-risk products, and regulators changed the rules. Those actions must be examined together as signals received by citizens.",
    "Citizens who trusted the investment environment the state helped create have suffered losses. Money missing from an account may have been saved for a wedding, a home or retirement. Officials can leave office; citizens must live with the consequences."
  ],
  sections: [
    {title: "What is an ETF, and why does leverage matter?", paragraphs: [
      "An exchange-traded fund is a fund bought and sold on an exchange like a share. A conventional KOSPI 200 ETF follows an index of 200 major Korean companies, spreading exposure across many stocks.",
      "The disputed products concentrate on one company. Their objective is twice the daily change in Samsung Electronics or SK hynix shares. A bullish two-times product seeks roughly 10% when its stock rises 5% in a day, and can lose roughly 10% when it falls 5%. This is a high-risk strategy pursuing amplified returns, rather than a high-dividend product.",
      "Twice the daily return is not a promise of twice the stock’s return over several months.",
      "Suppose KRW 1 million in a stock rises 10% to KRW 1.1 million, then falls approximately 9.09% back to its starting value. A product exactly doubling each daily move rises to KRW 1.2 million and then falls to about KRW 981,818. The stock is back where it began; the leveraged investment is smaller. This illustration excludes fees and trading costs.",
      "Gains and losses compound on a changing base. Waiting for the underlying share price to recover does not necessarily restore the leveraged investment. The US Securities and Exchange Commission warns that performance over more than a day can differ substantially from the target multiple, especially in volatile markets.",
      "The risk was also documented domestically. A 2024 Korea Capital Market Institute study examined compounding and investor behaviour in leveraged and inverse ETFs. Repeated swings can undermine performance, while trading to recover losses can produce unfavourable results.",
      "These were risks the state should have scrutinised before opening the market."
    ]},
    {title: "Why did the government introduce these products?", paragraphs: [
      "Officials said they wanted to redirect investment demand from overseas to Korea. Products available in the United States and Hong Kong would become available domestically under Korean regulation and safeguards.",
      "The FSC’s January 30 announcement presented ETF reform as a presidential work-report task: strengthen the appeal of domestic capital markets and reduce incentives for capital outflows. Diversification requirements had prevented domestic single-stock products. The government changed the implementing decree and regulations to permit them.",
      "Exchange-rate stability was another rationale. At a September 18 press conference, President Lee Jae-myung said he had been briefed on the introduction and described redirecting overseas leverage demand to Korea as potentially helpful for foreign-exchange stability.",
      "Developing capital markets and stabilising the exchange rate are legitimate subjects for policy review. Whether they justify expanding citizens’ exposure to high-risk investment requires separate evidence.",
      "If keeping money at home meant opening a riskier domestic investment channel, did the policy reduce risk or relocate it? Did it merely bring existing overseas demand back, or encourage additional citizens to enter because they saw the government’s commitment?",
      "The state watched exchange rates and capital flows. Citizens put their own savings at stake. Who examined the gap between policy objectives and personal safety?"
    ]},
    {title: "Presidential confidence can sound like investment protection", paragraphs: [
      "In September 2025, President Lee told securities research heads he wanted people to say that returning to Korean equities was a sign of intelligence. It was a forceful message about making the domestic market attractive.",
      "In a January interview this year, then-policy chief Kim Yong-beom said he had asked the FSC why leveraged products available abroad could not be created in Korea. Regulatory work followed, and the products launched in late May.",
      "The president raised expectations for domestic equities, the policy chief raised new products, and the government changed the rules. Citizens could read those actions as one signal: the state is supporting this market.",
      "They might also assume that a product the government considered necessary had undergone sufficient risk scrutiny.",
      "That is how trust in public policy can become trust in a financial product.",
      "This does not establish that the president directly urged anyone to buy a particular leveraged ETF or guaranteed principal. The responsibility at issue is whether official encouragement and product introduction together made risk feel smaller.",
      "Warnings existed. At launch, investors faced a KRW 10 million minimum deposit and two hours of prior education.",
      "Did those warnings reach citizens with the same force as presidential confidence and official determination? When a small risk notice accompanies a large message of government commitment, which carries more weight?",
      "Official speech carries institutional authority beyond a private financial advertisement. Government can change rules and move markets. If that trust helps expand participation, invoking investor responsibility alone after losses is inadequate."
    ]},
    {title: "Did the state intensify citizens’ urgency?", paragraphs: [
      "When housing feels out of reach and wages seem unable to close the wealth gap, a product pursuing double returns can look like a chance to catch up. After a loss, the same leverage can appear to promise faster recovery.",
      "A July Asia Economy commentary questioned whether policy design adequately reflected structural risk, impatience and overconfidence. It argued that adding education hours was insufficient: training must address loss-chasing and actual trading behaviour.",
      "The issue is how institutions account for real human decisions. A market imagined to contain only investors who calmly calculate every risk is an inadequate basis for protection.",
      "KCMI reported approximately KRW 8.2 trillion in cumulative retail net purchases of single-stock leveraged ETFs between launch and June 19. That is a large concentration within only a few weeks.",
      "In July, Asia Economy relayed foreign reporting on despair and frustration among retail investors after sharp falls. Such accounts cannot represent every investor, but they show why trading volume and capital inflows cannot be the only measures of policy success.",
      "Treating financial insecurity merely as investment demand is dangerous. When government confidence meets citizens’ urgency, policy promotion can become a signal that encourages speculation."
    ]},
    {title: "Officials cannot open the betting channel and blame only the market", paragraphs: [
      "Leveraged ETFs rebalance to maintain their target exposure. Bullish two-times funds may buy more after a rise and sell after a fall. Large trades concentrated near the market close can amplify price movements. KCMI has called for continued monitoring of rebalancing effects.",
      "The risk can extend beyond subscribers’ accounts. Market swings also affect other holders of the same shares and other funds.",
      "A July Seoul Shinmun editorial criticised regulators for invoking investor choice when permitting the products and strengthening safeguards only later. An August Chosun Ilbo editorial demanded disclosure of the review process and the treatment of internal concerns. Their shared argument is that authorisation and oversight responsibilities cannot be hidden behind investor choice.",
      "Global semiconductor conditions, oil prices, interest rates, exchange rates and competing investor flows also contributed to falling prices and volatility. KCMI examined these interacting causes. The entire reported trading-loss figure cannot be treated as damage caused directly by government policy.",
      "That qualification does not absolve the government. Its decision to add an amplifying channel to a volatile market—and lend it institutional credibility—still requires scrutiny.",
      "Calling this a state-created speculative arena criticises the authorities who expanded short-term betting under the weight of public trust. It does not condemn citizens for investing."
    ]},
    {title: "New Deal Fund costs reached taxpayers; these losses reached investors", paragraphs: [
      "Our earlier article, ‘When the Government Backs a Fund, Who Bears the Risk?’, examined the retail-participation New Deal Fund. Public and other subordinated capital absorbed losses within a defined limit. Loss-making subfunds recorded approximately KRW 20.588 billion in losses, including KRW 13.93 billion borne by fiscal capital. Korea Development Bank said retail investors suffered no actual loss after gains and losses were pooled by subscription round. This fiscal portion is distinct from the programme’s final net result.",
      "The New Deal Fund had a real first-loss cushion, whose cost reached taxpayers, including non-investors. The leveraged ETFs had no equivalent fiscal safety net. Even if policy commitment felt reassuring, losses remained in individual accounts.",
      "The products differ. The common question is whether a state mobilising citizens’ money and trust for policy objectives fully explains the costs and accepts responsibility for its decisions.",
      "Future-industry development and exchange-rate stability cannot make citizens’ risks disappear. A policy label does not erase an investment loss."
    ]},
    {title: "One regulator’s apology cannot close the matter", paragraphs: [
      "Today’s apology cannot be the endpoint. The FSC must explain product design and safeguards; the supervisory agency and exchange, review and market surveillance. The policy chief must disclose how introduction was raised and coordinated. The president must explain how the risks reported to him were assessed.",
      "The government says lawful procedures were followed. Procedural compliance and adequate risk testing require separate evidence.",
      "Prevention requires measures that match these responsibilities.",
      "First, establish clear principles for investment-related statements by presidents and senior officials. Avoid implying that entering a particular market proves good judgement. Separate public policy objectives from personal suitability, and explain that approval is no guarantee of principal or returns with the same prominence as encouragement.",
      "Second, require independent, public risk review before high-risk products launch. Test unexpected inflows, sharp falls and concentrated closing trades. Set scale limits and suspension or leverage-adjustment criteria beforehand, and record objections and how they were handled.",
      "Third, evaluate whether later safeguards work. Authorities raised the deposit requirement to KRW 30 million in cash and made simulated trading mandatory from August 19. The test is whether concentrated risk and repeated losses declined, rather than how many people completed training.",
      "Fourth, manage product scale and trading structure together. KCMI has proposed managing investors’ leverage exposure, adjusting leverage in market stress and applying consistent regulation. Domestic limits must also consider demand shifting into riskier overseas products.",
      "Fifth, disclose losses and responsibility, and support affected citizens. Separate realised losses, unrealised losses and net results including profitable accounts. Investigate mis-selling and unfair trading where indicated. Connect severely affected citizens with debt, livelihood and psychological counselling. This is distinct from a blanket taxpayer-funded reimbursement of investment losses.",
      "SEED will follow the disclosure of decision records, investor results and the actual effects of safeguards. We will judge what changes after the apology through numbers and records.",
      "A misleading public investment signal can leave more than a one-off loss: pressure to win money back, distress concealed from family and retirement plans that collapse.",
      "Citizens’ savings are not resources the state may mobilise at will for exchange-rate management or market promotion.",
      "Officials who fuelled the investment rush can step back after apologising. Citizens cannot step away from a damaged livelihood. The state must accept responsibility equal to that difference."
    ]}
  ],
  paragraphLinks: [{sectionIndex: 5, paragraphIndex: 0, links: [{label: "When the Government Backs a Fund, Who Bears the Risk?", url: related}]}],
  watchPoints: ["Decision records and the handling of dissent within the presidential office and regulators", "Separate reporting of realised losses, unrealised losses and aggregate net results", "Changes in repeated losses after stronger deposits, education and simulated trading"],
  sourceLabels: ["Yonhap · realised retail trading losses (Oct 8, 2026)", "Edaily · FSC chairman’s parliamentary apology (Oct 8, 2026)", "Samsung Asset Management · what is an ETF?", "FSC · ETF market reform (Jan 30, 2026)", "FSC · single-stock leveraged product launch (May 26, 2026)", "Korea Economic Daily · presidential equity-market remarks (Sep 18, 2025)", "TV Chosun · policy chief and introduction process (Sep 16, 2026)", "Seoul Shinmun · presidential press conference (Sep 18, 2026)", "US SEC · leveraged and inverse ETF investor warning", "KCMI · compounding and investor behaviour (2024)", "KCMI · single-stock inflows and rebalancing (2026)", "KCMI · interacting causes of volatility (2026)", "KCMI · leverage management and safeguards (2026)", "Asia Economy commentary · behaviour-aware safeguards (Jul 30, 2026)", "Asia Economy · reporting on investors’ distress (Jul 30, 2026)", "Seoul Shinmun editorial · late safeguards (Jul 30, 2026)", "Chosun Ilbo editorial · disclosure of the decision process (Aug 5, 2026)", "FSC · launch safeguards (May 15, 2026)", "FSC · higher deposit requirement (Jul 24, 2026)", "FSC/KDI · simulated trading announcement (Aug 12, 2026)", "Yonhap · New Deal Fund losses and fiscal burden (Oct 2, 2026)"],
  sourceNote: "Based on October 8, 2026 audit reporting, government releases and research. The loss figure is not aggregate investor net returns or a causal estimate of policy damage. Sources do not establish direct presidential advice to buy a particular product, a principal guarantee, majority public opinion or distress among all investors. The assessment of official signals, responsibility and remedies is SEED’s argument."
};
