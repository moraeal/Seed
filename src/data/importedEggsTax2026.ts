import type { TaxPolicy } from "./taxWatch";
import type { TaxCommentary } from "./taxCommentaries";

export const importedEggsPolicy: TaxPolicy = {
  "slug": "imported-eggs-procurement-budget-data-2026",
  "importance": 85,
  "status": {
    "ko": "세금감시 자료",
    "en": "Tax Watch data"
  },
  "title": {
    "ko": "수입 계란에 1212억원…예산과 원가, 판매가격을 나눠 읽다",
    "en": "KRW 121.2 billion for imported eggs: separating budgets, costs and retail prices"
  },
  "summary": {
    "ko": "브라질산 112만개·개당 원가 약 1300원…전체 수입 예산과 특정 국가 조달 비용은 별개다. 계획·집행·원가·판매가격을 구분해 정리했다.",
    "en": "Brazilian imports reportedly totalled 1.12 million eggs at about KRW 1,300 each. The overall program budget is a separate measure. This article distinguishes plans, expenditure, procurement costs and selling prices."
  },
  "affected": {
    "ko": "소비자 · 납세자 · 산란계 농가 · 유통업체",
    "en": "Consumers · Taxpayers · Egg farmers · Distributors"
  },
  "checkedAt": "2026-10-13",
  "heroImage": {
    "ko": "images/tax/imported-eggs-data-2026.jpg",
    "en": "images/tax/imported-eggs-data-2026.jpg",
    "alt": {
      "ko": "계란 검수 장면과 계산기, 조달서류를 표현한 이미지",
      "en": "Egg inspection, a calculator and procurement documents"
    },
    "caption": {
      "ko": "수입량·조달 비용·판매대금은 서로 다른 자료다.",
      "en": "Import volume, procurement costs and sales receipts are separate records."
    }
  },
  "processNote": {
    "ko": "2026년 10월 13일 확인. 언론에 공개된 사업 계획과 수입 자료를 구분했다. 계산값은 결산액이 아니다.",
    "en": "Checked October 13, 2026. Reported plans and import data are distinguished. Calculations are not settled expenditure."
  },
  "oneSentence": {
    "ko": "전체 수입 사업 예산 1212억원과 브라질산의 높은 조달 단가는 서로 다른 지표다.",
    "en": "The overall KRW 121.2 billion budget and the high Brazilian unit cost are different measures."
  },
  "keyChanges": [],
  "changeMap": [],
  "officialRationale": {
    "ko": "공급 부족 대응과 수입선 다변화.",
    "en": "Addressing supply shortages and diversifying import sources."
  },
  "risks": [],
  "questions": [],
  "seedView": {
    "ko": "실제 집행액과 회수액을 연결해 시민의 부담을 확인한다.",
    "en": "Reconcile expenditure and receipts to establish the public burden."
  },
  "timeline": [],
  "sources": [
    {
      "label": {
        "ko": "채널A, 「브라질산 달걀 3만 9천 원에 사서 5천 원에 판매…왜?」, 2026.10.12.",
        "en": "Channel A, “Brazilian eggs imported at KRW 39,000 per tray and sold for around KRW 5,000,” October 12, 2026."
      },
      "url": "https://ichannela.com/news/detail/000000554724.do"
    },
    {
      "label": {
        "ko": "중앙일보, 「브라질산 계란 한 판 수입가 3만9000원…1200억 물가 대책에 ‘혈세 낭비’ 논란」.",
        "en": "JoongAng Ilbo, report on Brazilian egg procurement costs and the egg-import program."
      },
      "url": "https://www.joongang.co.kr/article/25468687"
    },
    {
      "label": {
        "ko": "국민일보, 「1212억 들여 수입해도 못 잡는 계란값, 왜…폭염 변수까지 등장」, 2026.06.29.",
        "en": "Kukmin Ilbo, report on the KRW 121.2 billion egg-import plan, June 29, 2026."
      },
      "url": "https://www.kmib.co.kr/article/view.asp?arcid=0030032857"
    }
  ],
  "article": {
    "readMinutes": 5,
    "intro": {
      "ko": [
        "정부의 수입 계란 정책에는 서로 다른 숫자가 등장한다. 전체 사업 예산 1212억원, 브라질산 수입량 112만개, 개당 수입 원가 약 1300원, 마트 판매가격 한 판 4980원이다. [1] [2] [3]",
        "이 숫자들은 같은 장부의 같은 항목이 아니다. 예산은 지출 계획이고, 수입 원가는 물건을 들여오는 비용이다. 정부가 유통업체에 공급하는 가격과 소비자가 마트에서 지불하는 가격도 서로 다르다."
      ],
      "en": [
        "The egg-import policy involves several distinct figures: a KRW 121.2 billion program budget, 1.12 million Brazilian eggs, an import cost of about KRW 1,300 each and a reported retail price of KRW 4,980 per tray. [1] [2] [3]",
        "These are different accounting measures. A budget authorizes planned spending; procurement cost measures the cost of importing goods. The government’s supply price to distributors is also different from the price shoppers pay."
      ]
    },
    "sections": {
      "ko": [
        {
          "title": "1. 전체 수입 사업에는 얼마를 배정했나",
          "blocks": [
            {
              "type": "paragraph",
              "text": "국민일보의 6월 29일 보도에 따르면 정부는 8월까지 신선란 2억3139만개를 공급하는 데 총 1212억원을 투입할 계획이었다. 기존 수입 물량 3139만개에 215억원, 추가 물량 2억개에 997억원을 배정한 구조다. 항공 운송·저온 유통·재포장 비용 등을 보전해 낮은 가격으로 공급한다는 계획이었다. [3]"
            },
            {
              "type": "table",
              "headers": [
                "구분",
                "수입 계획 물량",
                "배정 예산"
              ],
              "rows": [
                [
                  "기존 수입 물량",
                  "3139만개",
                  "215억원"
                ],
                [
                  "추가 수입 물량",
                  "2억개",
                  "997억원"
                ],
                [
                  "합계",
                  "2억3139만개",
                  "1212억원"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "6월 보도에 나타난 사업 계획 기준이다. 최종 수입 실적이나 결산액을 뜻하지 않는다."
            },
            {
              "type": "paragraph",
              "text": "1212억원은 미국·태국·브라질 등을 포함한 전체 수입 사업의 예산이다. 브라질산만의 지출액으로 읽으면 사업 범위를 잘못 이해하게 된다."
            }
          ]
        },
        {
          "title": "2. 브라질산 계란은 얼마나 비쌌나",
          "blocks": [
            {
              "type": "paragraph",
              "text": "채널A가 10월 12일 보도한 브라질산 수입량은 112만개다. 수입 원가는 개당 약 1300원으로, 30개 한 판으로 환산하면 약 3만9000원이다. [1]"
            },
            {
              "type": "table",
              "headers": [
                "항목",
                "금액·물량",
                "숫자의 의미"
              ],
              "rows": [
                [
                  "브라질산 수입량",
                  "112만개",
                  "보도된 특정 국가 수입 물량"
                ],
                [
                  "개당 수입 원가",
                  "약 1300원",
                  "보도된 조달 단가"
                ],
                [
                  "30개 환산 원가",
                  "약 3만9000원",
                  "개당 원가 × 30"
                ],
                [
                  "물량 × 단가",
                  "약 14억5600만원",
                  "112만개 × 약 1300원으로 계산한 참고액"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "마지막 금액은 보도된 물량과 반올림된 단가를 곱한 **참고 계산**이다. 실제 계약·정산 금액이나 순수 재정지원액으로 확정한 수치는 아니다."
            }
          ]
        },
        {
          "title": "3. 4980원과의 차이가 그대로 세금인가",
          "blocks": [
            {
              "type": "paragraph",
              "text": "중앙일보 보도에 따르면 정부는 수입 계란을 원산지와 관계없이 개당 평균 131원에 유통업체에 공급했다. 30개로 환산하면 평균 3930원이다. 마트 판매가격 4980원은 그다음 유통 단계의 가격이다. [2]"
            },
            {
              "type": "table",
              "headers": [
                "가격 구분",
                "금액",
                "적용 범위"
              ],
              "rows": [
                [
                  "수입 원가",
                  "개당 약 1300원",
                  "브라질산"
                ],
                [
                  "정부 공급가격",
                  "개당 평균 131원",
                  "전체 수입란 평균"
                ],
                [
                  "소매 판매가격",
                  "30개 한 판 4980원 수준",
                  "보도된 할인 판매가격"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "브라질산 원가 3만9000원에서 소매가격 4980원을 빼면 산술적으로 3만4020원이다. 그러나 이를 곧바로 한 판당 정확한 세금지원액이라고 부를 수는 없다. 정부의 공급대금 회수액, 운송·포장 비용의 포함 범위, 별도 할인 지원 등을 같은 기준으로 맞춘 정산자료가 필요하다."
            }
          ]
        },
        {
          "title": "4. 정부가 설명한 이유와 남은 확인자료",
          "blocks": [
            {
              "type": "paragraph",
              "text": "정부는 조류인플루엔자로 인한 공급 부족과 수입선 다변화를 수입 이유로 설명했다. 브라질산에는 27% 관세가 적용됐고 항공 운송비도 원가를 높였다는 보도가 나왔다. [2]"
            },
            {
              "type": "paragraph",
              "text": "세금감시의 다음 확인 대상은 네 가지다. 원산지별 계약·정산 금액, 운송과 관세 등 비용 명세, 유통업체 공급대금 회수액, 수입을 시작하고 중단한 판단 기준이다."
            },
            {
              "type": "paragraph",
              "text": "현재 자료로 확인되는 것은 브라질산의 높은 조달 단가와 전체 수입 사업의 상당한 예산 규모다. 최종적으로 시민이 부담한 순비용과 정책 효과는 집행·회수·성과 자료를 연결해 평가할 수 있다."
            }
          ]
        }
      ],
      "en": [
        {
          "title": "1. The budget for the overall import program",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Kukmin Ilbo reported on June 29 that the government planned to spend KRW 121.2 billion to supply 231.39 million fresh eggs by August. KRW 21.5 billion was allocated to an existing volume of 31.39 million eggs and KRW 99.7 billion to an additional 200 million. Support for air freight, cold-chain distribution and repackaging was intended to allow lower selling prices. [3]"
            },
            {
              "type": "table",
              "headers": [
                "Component",
                "Planned volume",
                "Allocated budget"
              ],
              "rows": [
                [
                  "Existing imports",
                  "31.39 million eggs",
                  "KRW 21.5 billion"
                ],
                [
                  "Additional imports",
                  "200 million eggs",
                  "KRW 99.7 billion"
                ],
                [
                  "Total",
                  "231.39 million eggs",
                  "KRW 121.2 billion"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "These figures describe the plan reported in June, not final import volumes or settled expenditure."
            },
            {
              "type": "paragraph",
              "text": "The budget covered multiple countries, including the United States, Thailand and Brazil. It cannot be treated as spending on Brazilian eggs alone."
            }
          ]
        },
        {
          "title": "2. The reported cost of Brazilian eggs",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Channel A reported on October 12 that 1.12 million Brazilian eggs had been imported at approximately KRW 1,300 each. That is about KRW 39,000 for 30 eggs. [1]"
            },
            {
              "type": "table",
              "headers": [
                "Measure",
                "Amount or volume",
                "Meaning"
              ],
              "rows": [
                [
                  "Brazilian imports",
                  "1.12 million eggs",
                  "Reported country-specific volume"
                ],
                [
                  "Unit import cost",
                  "About KRW 1,300",
                  "Reported procurement cost"
                ],
                [
                  "Cost per 30 eggs",
                  "About KRW 39,000",
                  "Unit cost multiplied by 30"
                ],
                [
                  "Volume × unit cost",
                  "About KRW 1.456 billion",
                  "Indicative arithmetic estimate"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "The final row is a **reference calculation** using the reported volume and a rounded unit cost. It is not a verified contract settlement or net subsidy figure."
            }
          ]
        },
        {
          "title": "3. The retail-price gap is not an exact subsidy figure",
          "blocks": [
            {
              "type": "paragraph",
              "text": "JoongAng Ilbo reported that the government supplied imported eggs to distributors at an average of KRW 131 each, regardless of country of origin. That is an average of KRW 3,930 for 30 eggs. The reported KRW 4,980 retail price belongs to the next distribution stage. [2]"
            },
            {
              "type": "table",
              "headers": [
                "Price measure",
                "Amount",
                "Scope"
              ],
              "rows": [
                [
                  "Import cost",
                  "About KRW 1,300 per egg",
                  "Brazilian eggs"
                ],
                [
                  "Government supply price",
                  "Average KRW 131 per egg",
                  "All imported eggs"
                ],
                [
                  "Retail price",
                  "Around KRW 4,980 per 30 eggs",
                  "Reported discounted price"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "Subtracting KRW 4,980 from KRW 39,000 gives KRW 34,020. That difference is not automatically the exact subsidy per tray. A settlement must reconcile government sales receipts, which freight and packaging costs are included, and any separate discount support."
            }
          ]
        },
        {
          "title": "4. The government’s explanation and the records still needed",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The government cited supply shortages caused by avian influenza and diversification of import sources. Reports also identified a 27% tariff on Brazilian eggs and air-freight costs as contributors to the high import price. [2]"
            },
            {
              "type": "paragraph",
              "text": "The next records to examine are contracts and settlements by country, freight and tariff breakdowns, receipts from distributors, and the criteria for starting and stopping imports."
            },
            {
              "type": "paragraph",
              "text": "The available material establishes a high reported Brazilian unit cost and a substantial overall program budget. Net public cost and policy effectiveness require expenditure, receipts and outcome data to be assessed together."
            }
          ]
        }
      ]
    },
    "bodyImage": {
      "src": "images/tax/imported-eggs-data-2026.jpg",
      "afterSection": -1,
      "alt": {
        "ko": "계란 검수 장면과 계산기, 조달서류를 표현한 이미지",
        "en": "Egg inspection, a calculator and procurement documents"
      },
      "caption": {
        "ko": "수입량·조달 비용·판매대금은 서로 다른 자료다.",
        "en": "Import volume, procurement costs and sales receipts are separate records."
      }
    },
    "chartImage": {
      "src": {
        "ko": "images/tax/imported-eggs-data-2026.jpg",
        "en": "images/tax/imported-eggs-data-2026.jpg"
      },
      "afterSection": -1,
      "alt": {
        "ko": "계란 검수 장면과 계산기, 조달서류를 표현한 이미지",
        "en": "Egg inspection, a calculator and procurement documents"
      },
      "caption": {
        "ko": "수입량·조달 비용·판매대금은 서로 다른 자료다.",
        "en": "Import volume, procurement costs and sales receipts are separate records."
      }
    }
  }
};

export const importedEggsCommentary: TaxCommentary = {
  "slug": "imported-eggs-hidden-taxpayer-cost-2026",
  "relatedPolicySlug": "imported-eggs-procurement-budget-data-2026",
  "date": "2026-10-13",
  "readMinutes": 5,
  "heroSrc": "images/tax/imported-eggs-commentary-2026.jpg",
  "sources": [
    {
      "label": {
        "ko": "채널A, 「브라질산 달걀 3만 9천 원에 사서 5천 원에 판매…왜?」, 2026.10.12.",
        "en": "Channel A, “Brazilian eggs imported at KRW 39,000 per tray and sold for around KRW 5,000,” October 12, 2026."
      },
      "url": "https://ichannela.com/news/detail/000000554724.do"
    },
    {
      "label": {
        "ko": "중앙일보, 「브라질산 계란 한 판 수입가 3만9000원…1200억 물가 대책에 ‘혈세 낭비’ 논란」.",
        "en": "JoongAng Ilbo, report on Brazilian egg procurement costs and the egg-import program."
      },
      "url": "https://www.joongang.co.kr/article/25468687"
    }
  ],
  "editions": {
    "ko": {
      "title": "4980원짜리 계란, 싸게 산 사람도 세금을 냈다",
      "subtitle": "브라질산 계란 한 판 수입 원가 약 3만9000원…물가 안정의 성과표에서 빠진 시민의 비용",
      "summary": "마트 판매가격과 시민이 부담한 재정비용은 다르다. 물가 안정의 성과는 조달 비용과 가격 효과를 함께 놓고 평가할 수 있다.",
      "keyPoints": [
        "판매가격과 수입 원가는 다른 지표다.",
        "약 1200억원은 전체 신선란 수입 사업 예산이다.",
        "원산지별 정산액과 가격 안정 효과가 감시 기준이다."
      ],
      "heroAlt": "계란과 영수증, 동전 뒤로 항공화물이 보이는 상징 이미지",
      "heroCaption": "마트 가격 뒤에 남은 조달 비용과 시민의 부담을 표현했다.",
      "sections": [
        {
          "title": "계산대의 가격과 납세자의 가격",
          "paragraphs": [
            "마트에서 계란 한 판을 4980원에 샀다. 그런데 그 계란을 국내로 들여오는 데 약 3만9000원이 들었다면, 싸게 샀다는 말만으로 계산이 끝날까.",
            "채널A는 정부가 지난 7월 수입한 브라질산 계란 112만개의 수입 원가가 개당 약 1300원, 30개 한 판에 약 3만9000원이었다고 보도했다. 미국산·태국산보다 개당 수입 비용이 3~4배 높았다는 내용이다. 낮은 가격으로 공급하면서 발생한 차액은 정부 재정으로 메웠다. [1]",
            "계란값이 오르면 서민의 식탁부터 영향을 받는다. 조류인플루엔자로 공급이 줄어든 상황에서 정부가 수입을 통해 급한 물량을 확보한 목적은 이해할 수 있다. 정부도 당시 수급 상황과 수입선 다변화 때문에 브라질산을 들여왔다고 설명했다. [2]"
          ]
        },
        {
          "title": "공급을 확보한 이유와 비싸게 산 이유",
          "paragraphs": [
            "그러나 공급을 확보했다는 설명과 그 가격에 살 수밖에 없었다는 설명은 다르다. 다른 나라에서 더 저렴하게 확보할 물량은 없었는지, 수입 시기를 조정할 여지는 없었는지, 항공 운송과 관세 부담까지 고려한 비교가 있었는지가 남는다. 긴급한 상황이었다는 말은 지출의 이유가 될 수 있지만, 지출 규모의 적정성을 대신 증명하지는 못한다.",
            "정부가 낮춘 것은 시민이 마트에서 지불하는 가격이다. 그 뒤의 수입 비용까지 없어진 것은 아니다. 소비자는 계산대에서 돈을 내고, 납세자는 재정으로 차액을 부담한다. 두 사람은 상당 부분 같은 시민이다.",
            "**가격표에서 빠진 비용도 시민의 돈이다.**",
            "이런 정책을 판매가격만으로 평가하면 정부는 성과를 얻고 비용은 장부 뒤로 밀린다. 한 판을 얼마나 싸게 팔았는지와 함께, 그 가격을 만드는 데 얼마를 썼는지가 있어야 정책의 실제 가격이 보인다."
          ]
        },
        {
          "title": "큰 숫자보다 정확한 장부",
          "paragraphs": [
            "이번 사안을 둘러싼 숫자도 정확히 구분할 필요가 있다. 약 1200억원으로 보도된 예산은 브라질산 계란만의 예산이 아니라 전체 신선란 수입 사업의 예산이다. 브라질산의 높은 단가를 비판하는 일과 전체 예산을 브라질산에 쓴 것처럼 설명하는 일은 다르다. [2]",
            "세금감시는 큰 숫자로 분노를 키우는 데서 끝나지 않는다. 실제 계약금액, 운송비, 공급대금 회수액을 맞춰보는 일이다. 정상회담과 연결된 정치적 의혹보다 먼저 확인할 것도 이 장부다."
          ]
        },
        {
          "title": "물가 대책에는 두 가격이 남는다",
          "paragraphs": [
            "씨앗의 소리가 계속 살필 기준은 분명하다. 비싼 조달을 선택한 당시의 비교자료, 원산지별 실제 비용, 국내 공급이 회복된 뒤 수입을 줄인 시점, 그리고 투입한 재정에 비해 얻은 가격 안정 효과다.",
            "4980원짜리 계란은 소비자에게 도움이 됐을 수 있다. 그 도움을 위해 시민이 얼마를 부담했는지는 별도의 성적표다. 정부의 물가 대책에는 두 가격이 함께 남는다. 마트의 가격과 납세자의 가격이다."
          ]
        }
      ],
      "chart": {
        "title": "가격표와 장부는 다른 숫자다",
        "description": "보도된 가격의 적용 범위를 구분했다. [1] [2]",
        "headers": [
          "항목",
          "금액",
          "적용 범위"
        ],
        "rows": [
          [
            "수입 원가",
            "30개 약 3만9000원",
            "브라질산"
          ],
          [
            "정부 공급가격",
            "개당 평균 131원",
            "전체 수입란 평균"
          ],
          [
            "소매가격",
            "30개 4980원 수준",
            "보도된 할인 판매가격"
          ]
        ],
        "note": "출처: 채널A·중앙일보. 정부 공급가격은 전체 수입란 평균으로 브라질산 개별 정산액이 아니다.",
        "afterSection": 1
      },
      "sourceNote": "2026년 10월 13일 확인. 전체 사업 예산과 특정 국가 조달 비용을 구분했다."
    },
    "en": {
      "title": "Cheap eggs at checkout still carry a taxpayer bill",
      "subtitle": "Brazilian eggs reportedly cost KRW 39,000 per tray to import: the public cost behind a lower shelf price",
      "summary": "A lower retail price does not erase the public cost. Procurement costs and price effects belong on the same policy report card.",
      "keyPoints": [
        "Retail prices and import costs measure different things.",
        "The roughly KRW 120 billion budget covers the overall program.",
        "Country-level settlements and price effects are the measures to follow."
      ],
      "heroAlt": "Eggs, a receipt and coins in front of air cargo",
      "heroCaption": "The procurement cost and public burden behind the retail price.",
      "sections": [
        {
          "title": "The checkout price and the taxpayer’s price",
          "paragraphs": [
            "A shopper pays KRW 4,980 for a tray of eggs. If bringing those eggs into Korea cost about KRW 39,000, does the low checkout price tell the whole story?",
            "Channel A reported that 1.12 million Brazilian eggs imported in July cost approximately KRW 1,300 each, or KRW 39,000 for a tray of 30. The reported unit cost was three to four times that of eggs from the United States and Thailand. Public funds covered the gap created by supplying the eggs at a lower price. [1]",
            "Egg-price increases immediately affect household meals. Emergency imports have a defensible purpose when avian influenza disrupts supply. The government cited supply conditions and diversification of import sources as its reasons for buying Brazilian eggs. [2]"
          ]
        },
        {
          "title": "Securing supply does not settle the question of cost",
          "paragraphs": [
            "Explaining why supply was needed is different from explaining why this procurement price was unavoidable. The relevant questions are whether cheaper quantities were available elsewhere, whether timing could be adjusted, and whether the comparison included air freight and tariffs. Urgency can explain a purchase without proving that its cost was reasonable.",
            "The government reduced what shoppers paid at the store. It did not eliminate the cost of importing the eggs. Consumers paid at checkout; taxpayers financed the gap. These are largely the same citizens.",
            "**A cost removed from the price tag remains a cost to citizens.**",
            "Judging the policy only by the retail price gives the government a visible achievement while leaving its cost in the background. A meaningful assessment includes both the discount and the public resources needed to produce it."
          ]
        },
        {
          "title": "An accurate ledger matters more than a dramatic number",
          "paragraphs": [
            "The budget reported as roughly KRW 120 billion covered the overall fresh-egg import program, not Brazilian eggs alone. Criticizing the high Brazilian unit cost is different from assigning the entire program budget to that country. [2]",
            "Tax scrutiny is more than attaching outrage to a large number. It means reconciling contract payments, transport charges and receipts from sales to distributors. Those records also come before political speculation about summit diplomacy."
          ]
        },
        {
          "title": "Two prices remain on the policy’s report card",
          "paragraphs": [
            "Seed Voice will follow the comparisons available when the expensive purchase was selected, actual costs by country, the point at which imports were reduced after domestic supply recovered, and the price-stabilization benefit relative to public spending.",
            "Eggs sold for KRW 4,980 may have helped shoppers. What citizens paid to deliver that benefit requires a separate assessment. An inflation policy leaves two prices: the supermarket’s price and the taxpayer’s price."
          ]
        }
      ],
      "chart": {
        "title": "The shelf price and the ledger measure different costs",
        "description": "The reported prices refer to different stages. [1] [2]",
        "headers": [
          "Measure",
          "Amount",
          "Scope"
        ],
        "rows": [
          [
            "Import cost",
            "About KRW 39,000 per 30 eggs",
            "Brazilian eggs"
          ],
          [
            "Government supply price",
            "Average KRW 131 per egg",
            "All imported eggs"
          ],
          [
            "Retail price",
            "Around KRW 4,980 per 30 eggs",
            "Reported discounted price"
          ]
        ],
        "note": "Sources: Channel A and JoongAng Ilbo. The supply price is an overall average, not a Brazilian shipment settlement.",
        "afterSection": 1
      },
      "sourceNote": "Checked October 13, 2026. Program budgets and country-specific procurement costs are distinguished."
    }
  }
};
