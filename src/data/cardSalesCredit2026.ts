import type { TaxPolicy } from "./taxWatch";
import type { TaxCommentary } from "./taxCommentaries";

export const cardSalesCreditPolicy: TaxPolicy = {
  "slug": "card-sales-vat-credit-government-bill-2026",
  "importance": 86,
  "status": {
    "ko": "정부안 · 소관위 소위원회 회부 · 미시행",
    "en": "Government bill · Referred to subcommittee · Not enacted"
  },
  "title": {
    "ko": "소상공인 카드매출 세액공제 축소 정부안 설명",
    "en": "Small-business card-sales VAT credit: the government bill explained"
  },
  "summary": {
    "ko": "공제율 1.3%→1.2%, 연간 한도 1,000만원→500만원. 현재 혜택과 내년 법정 기준, 정부안의 차이와 가게별 부담을 정리했습니다.",
    "en": "Rate: 1.3% to 1.2%. Annual ceiling: KRW 10m to KRW 5m. Compare today's benefit, next year's scheduled law and the proposal, with examples of shop-level exposure."
  },
  "affected": {
    "ko": "소매·음식점 등 소비자 상대 개인사업자",
    "en": "Individual proprietors in consumer-facing retail, restaurants and other trades"
  },
  "checkedAt": "2026-10-06",
  "heroImage": {
    "ko": "images/tax/card-credit-shop-owner-2026.webp",
    "en": "images/tax/card-credit-shop-owner-2026.webp",
    "alt": {
      "ko": "영업을 마친 가게에서 카드 단말기와 계산기를 앞에 두고 영수증을 살펴보는 점주",
      "en": "A shop owner reviewing receipts beside a card terminal and calculator after closing"
    },
    "caption": {
      "ko": "카드 매출과 세금 부담을 살펴보는 가게 점주. AI 이미지",
      "en": "A shop owner reviewing card sales and the tax burden. AI image"
    }
  },
  "processNote": {
    "ko": "정부 제출 의안 제2221049호 · 제출 2026년 9월 3일 · 9월 29일 소관위 회의에서 소위원회 회부. 공개 제안이유·주요내용 기준이며 법률은 아직 확정되지 않았습니다.",
    "en": "Government Bill 2221049 · Submitted September 3, 2026 · Referred to subcommittee at the September 29 committee meeting. Based on the published rationale and summary; the change is not enacted."
  },
  "oneSentence": {
    "ko": "올해 혜택보다 공제율과 한도는 줄지만, 기존 법의 내년 기준보다는 우대 공제율을 일부 연장하는 정부안입니다.",
    "en": "Credits fall relative to this year's benefits, while the rate preference is partly extended relative to next year's scheduled existing-law baseline."
  },
  "keyChanges": [
    {
      "title": {
        "ko": "우대율 축소와 연장",
        "en": "Reduced rate preference extended"
      },
      "body": {
        "ko": "1.3%를 1.2%로 낮춰 2029년 말까지 적용",
        "en": "Reduce 1.3% to 1.2% and retain it through end-2029"
      }
    },
    {
      "title": {
        "ko": "우대 한도 종료",
        "en": "Higher ceiling expires"
      },
      "body": {
        "ko": "연간 1,000만원에서 기본 한도 500만원으로 복귀",
        "en": "Return from KRW 10m to the base ceiling of KRW 5m"
      }
    }
  ],
  "changeMap": [],
  "officialRationale": {
    "ko": "카드 결제 보편화로 세원 양성화 필요성이 줄어 한시 특례를 정상화한다는 설명입니다.",
    "en": "The government cites widespread card use and reduced need for sales-disclosure incentives in normalizing temporary preferences."
  },
  "risks": [],
  "questions": [],
  "seedView": {
    "ko": "매출을 소득처럼 취급하지 말고 실제 이익과 납부세액을 기준으로 영향과 단계적 조정 대안을 평가해야 합니다.",
    "en": "Assess exposure and phased alternatives against actual profits and VAT liabilities, rather than treating turnover as income."
  },
  "timeline": [
    {
      "date": "2026-08-03",
      "title": {
        "ko": "정부 세제개편안 발표",
        "en": "Government tax reform proposal announced"
      }
    },
    {
      "date": "2026-09-03",
      "title": {
        "ko": "부가가치세법 개정안 제2221049호 정부 제출",
        "en": "Government submitted VAT amendment Bill 2221049"
      }
    },
    {
      "date": "2026-09-29",
      "title": {
        "ko": "소관위 전체회의에서 제안설명·대체토론·소위회부",
        "en": "Committee explanation, debate and referral to subcommittee"
      }
    },
    {
      "date": "2027-01-01",
      "title": {
        "ko": "정부안이 정한 적용 예정일 · 국회 의결 필요",
        "en": "Proposed start date · Requires parliamentary approval"
      }
    }
  ],
  "sources": [
    {
      "label": {
        "ko": "정부 제출 부가가치세법 개정안 제2221049호 · 2026년 9월 3일",
        "en": "Government VAT amendment Bill 2221049 · September 3, 2026"
      },
      "url": "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221049/detailRP"
    },
    {
      "label": {
        "ko": "세계일보 · 공제 한도 축소와 영향받는 사업자 비중 · 2026년 8월 15일",
        "en": "Segye Ilbo · Credit ceiling and affected businesses · August 15, 2026"
      },
      "url": "https://www.segye.com/newsView/20260815509263"
    },
    {
      "label": {
        "ko": "국회예산정책처 · 2026 대한민국 조세 · 신용카드 매출세액공제",
        "en": "National Assembly Budget Office · Korean Taxation 2026 · Card-sales VAT credit"
      },
      "url": "https://www.nabo.go.kr/board/file/down.do?fid=33319156"
    },
    {
      "label": {
        "ko": "데일리안 · 카드매출 세액공제 축소와 자영업자 반발 · 2026년 8월 11일",
        "en": "Dailian · Card-sales credit reductions and business objections · August 11, 2026"
      },
      "url": "https://www.dailian.co.kr/news/view/1677298"
    },
    {
      "label": {
        "ko": "뉴시스 · 정부 설명과 외식업계 반발 · 2026년 8월 11일",
        "en": "Newsis · Government rationale and restaurant-sector objections · August 11, 2026"
      },
      "url": "https://nwww.newsis.com/view/NISX20260811_0003744175"
    },
    {
      "label": {
        "ko": "재정경제부 · 2026년 세제개편안 상세본",
        "en": "Ministry of Finance and Economy · Detailed 2026 tax reform proposal"
      },
      "url": "https://mofe.go.kr/com/cmm/fms/FileDown.do?atchFileId=ATCH_000000000032335&fileSn=6"
    }
  ],
  "article": {
    "readMinutes": 7,
    "intro": {
      "ko": [
        "정부가 소상공인 등의 카드매출에 적용하는 부가가치세 세액공제 우대율을 1.3%에서 1.2%로 낮추고, 연간 공제 한도를 1,000만원에서 500만원으로 되돌리는 개편안을 추진하고 있습니다. 우대 공제율은 낮춘 수준으로 2029년 말까지 연장하지만, 확대된 공제 한도는 연장하지 않는 방식입니다.[1]",
        "이 제도는 소비자의 연말정산 신용카드 소득공제와 다릅니다. 가게가 소비자로부터 카드나 현금영수증으로 받은 매출의 일정 비율을 납부할 부가가치세에서 직접 빼주는 제도입니다."
      ],
      "en": [
        "The government proposes reducing the preferential VAT credit on eligible card and cash-receipt sales from 1.3% to 1.2%, and returning the annual credit ceiling from KRW 10 million to KRW 5 million. The lower preferential rate would remain through the end of 2029, while the higher ceiling would expire.[1]",
        "This is separate from the income-tax deduction consumers claim for card spending. It lets eligible businesses subtract a percentage of qualifying customer payments directly from the VAT they would otherwise pay."
      ]
    },
    "sections": {
      "ko": [
        {
          "title": "공제를 받는 사업자와 거래",
          "blocks": [
            {
              "type": "paragraph",
              "text": "소매업·음식점업 등 소비자를 주로 상대하는 개인사업자가 주요 대상입니다. 법인사업자와 직전 연도 공급가액이 사업장 기준 10억원을 초과하는 개인사업자는 제외됩니다. 신용카드뿐 아니라 직불·선불카드, 현금영수증 등 법에서 정한 결제금액도 공제 대상에 포함됩니다.[2]"
            },
            {
              "type": "paragraph",
              "text": "공제액을 계산할 때는 전체 매출과 공제 대상 결제금액을 구분해야 합니다. 면세 매출이나 공제 제외 거래까지 모두 넣어 계산하면 실제 혜택보다 큰 금액이 나올 수 있습니다."
            }
          ]
        },
        {
          "title": "현재 혜택과 내년 기준의 차이",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "구분",
                "2026년 현재",
                "법 개정 없이 우대 종료 시 2027년",
                "정부안 적용 시 2027년"
              ],
              "rows": [
                [
                  "공제율",
                  "1.3%",
                  "1.0%",
                  "1.2%"
                ],
                [
                  "연간 공제 한도",
                  "1,000만원",
                  "500만원",
                  "500만원"
                ],
                [
                  "우대 공제율 기한",
                  "2026년 말",
                  "종료",
                  "2029년 말"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "현행법의 기본 공제율과 한도는 각각 1%, 500만원입니다. 올해 적용하는 1.3%, 1,000만원은 2026년 말까지의 한시 우대입니다. 정부안은 기본 공제율로 완전히 돌아가는 대신 1.2%를 3년 더 적용하고, 한도는 기본 수준으로 복귀시키는 내용입니다.[1][3]"
            },
            {
              "type": "paragraph",
              "text": "따라서 비교 기준에 따라 설명이 달라집니다. 올해 실제 혜택과 비교하면 공제가 줄어듭니다. 기존 법에 예정된 내년 기준과 비교하면 공제율 우대를 일부 연장합니다. 두 기준을 구분해야 정부 설명과 업계 반발을 정확히 이해할 수 있습니다."
            }
          ]
        },
        {
          "title": "공제 대상 결제금액에 따른 변화",
          "blocks": [
            {
              "type": "paragraph",
              "text": "아래는 씨앗이 공제율과 연간 한도를 적용해 계산한 예시입니다. 연간 공제 대상 결제금액이 같고, 해당 공제액을 모두 차감할 만큼 납부세액이 충분하다고 가정했습니다."
            },
            {
              "type": "table",
              "headers": [
                "연간 공제 대상 결제금액",
                "현재 공제액",
                "정부안 공제액",
                "현재 대비 공제 감소액"
              ],
              "rows": [
                [
                  "1억원",
                  "130만원",
                  "120만원",
                  "10만원"
                ],
                [
                  "3억원",
                  "390만원",
                  "360만원",
                  "30만원"
                ],
                [
                  "4억원",
                  "520만원",
                  "480만원",
                  "40만원"
                ],
                [
                  "5억원",
                  "650만원",
                  "500만원",
                  "150만원"
                ],
                [
                  "6억원",
                  "780만원",
                  "500만원",
                  "280만원"
                ],
                [
                  "8억원",
                  "1,000만원",
                  "500만원",
                  "500만원"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "계산식은 ‘공제 대상 결제금액 × 공제율’에 연간 한도를 적용하는 방식입니다. 실제 공제에는 납부세액에 따른 제한 등이 있으므로 표의 감소액이 모든 사업자에게 그대로 발생하는 것은 아닙니다."
            },
            {
              "type": "paragraph",
              "text": "정부안에서는 공제 대상 결제금액이 약 4억1,667만원에 이르면 한도 500만원을 채웁니다. 현행 기준의 한도 도달 금액은 약 7억6,923만원입니다. 결제금액이 큰 사업장은 공제율 인하보다 한도 축소의 영향을 더 크게 받습니다.[4]"
            }
          ]
        },
        {
          "title": "정부의 설명과 업계의 우려",
          "blocks": [
            {
              "type": "paragraph",
              "text": "정부는 카드 결제가 보편화해 세원 양성화를 위한 우대 필요성이 줄었고, 위기 대응 과정에서 확대했던 한시 특례를 정상화할 필요가 있다는 입장입니다. 소상공인업계는 비용 부담이 큰 상황에서 공제를 줄이면 실제 납부세액이 늘어난다며 현행 유지를 요구합니다.[5]"
            },
            {
              "type": "paragraph",
              "text": "정부가 설명한 ‘한도 조정의 영향 약 6%’는 공제를 받는 사업자 가운데 한도 축소의 직접 영향을 받는 비중입니다. 나머지 사업자에게 공제율 인하의 영향까지 없다는 의미는 아닙니다.[2]"
            }
          ]
        },
        {
          "title": "국회 심의에서 확인할 사항",
          "blocks": [
            {
              "type": "paragraph",
              "text": "이 내용은 정부 개정안입니다. 국회 심의에서 공제율, 한도, 적용 시점이 바뀔 수 있습니다. 정부안의 적용 예정 시점은 2027년 1월 1일 이후 공급분입니다.[1]"
            },
            {
              "type": "paragraph",
              "text": "사업자는 올해 신고자료에서 공제 대상 카드·현금영수증 결제금액과 실제 발행세액공제액을 확인하면 영향을 가늠할 수 있습니다. 씨앗은 국회의 최종 의결 내용과 함께 업종별 부담 분석, 한도의 단계적 조정 여부를 계속 확인하겠습니다."
            }
          ]
        }
      ],
      "en": [
        {
          "title": "Eligible businesses and transactions",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The credit mainly covers individual proprietors in consumer-facing trades such as retail and restaurants. Corporations and individual businesses whose previous-year supply value exceeds KRW 1 billion per establishment are excluded. Eligible payments also include legally specified debit and prepaid card transactions and cash receipts.[2]"
            },
            {
              "type": "paragraph",
              "text": "Total turnover is not the same as qualifying payments. Including VAT-exempt sales or excluded transactions would overstate the credit."
            }
          ]
        },
        {
          "title": "Today's benefit, the scheduled expiry and the proposal",
          "blocks": [
            {
              "type": "table",
              "headers": [
                "Rule",
                "2026",
                "2027 if existing preferences expire",
                "2027 under government proposal"
              ],
              "rows": [
                [
                  "Credit rate",
                  "1.3%",
                  "1.0%",
                  "1.2%"
                ],
                [
                  "Annual ceiling",
                  "KRW 10m",
                  "KRW 5m",
                  "KRW 5m"
                ],
                [
                  "Preferential rate expires",
                  "End-2026",
                  "Preference ends",
                  "End-2029"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "The statutory base rate and ceiling are 1% and KRW 5 million. The 1.3% rate and KRW 10 million ceiling in force this year are temporary preferences. The proposal would preserve a reduced preferential rate for three more years but restore the base ceiling.[1][3]"
            },
            {
              "type": "paragraph",
              "text": "The baseline matters. Compared with benefits actually received this year, the credit shrinks. Compared with next year's rules already scheduled under existing law, the preferential rate is partly extended. Both comparisons are needed to understand the government's explanation and businesses' objections."
            }
          ]
        },
        {
          "title": "How credits change at different payment volumes",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Seed Voice calculated the examples below using the rates and annual ceilings. They assume identical annual qualifying payments and enough VAT payable to absorb the full credit."
            },
            {
              "type": "table",
              "headers": [
                "Annual qualifying payments",
                "Current credit",
                "Proposed credit",
                "Annual reduction"
              ],
              "rows": [
                [
                  "KRW 100m",
                  "KRW 1.3m",
                  "KRW 1.2m",
                  "KRW 0.1m"
                ],
                [
                  "KRW 300m",
                  "KRW 3.9m",
                  "KRW 3.6m",
                  "KRW 0.3m"
                ],
                [
                  "KRW 400m",
                  "KRW 5.2m",
                  "KRW 4.8m",
                  "KRW 0.4m"
                ],
                [
                  "KRW 500m",
                  "KRW 6.5m",
                  "KRW 5m",
                  "KRW 1.5m"
                ],
                [
                  "KRW 600m",
                  "KRW 7.8m",
                  "KRW 5m",
                  "KRW 2.8m"
                ],
                [
                  "KRW 800m",
                  "KRW 10m",
                  "KRW 5m",
                  "KRW 5m"
                ]
              ]
            },
            {
              "type": "paragraph",
              "text": "The calculation multiplies qualifying payments by the credit rate and then applies the annual ceiling. Actual credits are also limited by VAT payable, among other rules. These reductions therefore do not apply identically to every business."
            },
            {
              "type": "paragraph",
              "text": "Under the proposal, qualifying payments of approximately KRW 416.67 million reach the KRW 5 million ceiling. The current ceiling is reached at approximately KRW 769.23 million. Businesses with larger qualifying sales are more exposed to the ceiling reduction than to the rate change.[4]"
            }
          ]
        },
        {
          "title": "The government's rationale and businesses' concerns",
          "blocks": [
            {
              "type": "paragraph",
              "text": "The government argues that widespread card use has reduced the need for incentives to make sales visible to the tax authorities, and that preferences expanded during crises should be normalized. Small-business groups call for retaining current benefits, warning that lower credits would increase VAT payments while operating costs remain burdensome.[5]"
            },
            {
              "type": "paragraph",
              "text": "The government's estimate that about 6% would be affected refers specifically to businesses receiving the credit that are directly exposed to the lower ceiling. It does not mean the lower rate has no effect on the others.[2]"
            }
          ]
        },
        {
          "title": "What to check during parliamentary scrutiny",
          "blocks": [
            {
              "type": "paragraph",
              "text": "This is a government bill, not an enacted change. The rate, ceiling and start date may change in Parliament. The proposal is intended to apply to supplies made from January 1, 2027.[1]"
            },
            {
              "type": "paragraph",
              "text": "Business owners can gauge their exposure by checking qualifying card and cash-receipt payments and the actual issuance credit in this year's VAT returns. Seed Voice will follow the final parliamentary decision, sector-level burden estimates and whether a phased ceiling adjustment is considered."
            }
          ]
        }
      ]
    },
    "bodyImage": {
      "src": "images/tax/card-credit-shop-ledger-2026.webp",
      "afterSection": 3,
      "alt": {
        "ko": "영업을 마친 뒤 계산기와 영수증을 대조하는 가게 주인",
        "en": "A shop owner reviewing receipts and costs after closing"
      },
      "caption": {
        "ko": "매출에서 비용을 빼고 남는 돈이 가게의 생계다.",
        "en": "What remains after operating costs supports the owner's livelihood."
      }
    },
    "chartImage": {
      "src": {
        "ko": "images/tax/card-credit-comparison-ko.png",
        "en": "images/tax/card-credit-comparison-en.png"
      },
      "afterSection": 2,
      "alt": {
        "ko": "결제금액별 현재와 정부안의 공제액 및 감소액 비교",
        "en": "Current and proposed credits and reductions by qualifying payments"
      },
      "caption": {
        "ko": "동일 결제금액과 충분한 납부세액을 가정한 씨앗 계산입니다.",
        "en": "Seed Voice calculations assuming identical payments and enough VAT payable."
      }
    }
  }
};

export const cardSalesCreditCommentary: TaxCommentary = {
  "slug": "card-sales-credit-normalization-burden-2026",
  "relatedPolicySlug": "card-sales-vat-credit-government-bill-2026",
  "date": "2026-10-06",
  "readMinutes": 8,
  "heroSrc": "images/tax/card-credit-shop-owner-2026.webp",
  "bodyImage": {
    "src": "images/tax/card-credit-shop-ledger-2026.webp",
    "afterSection": 3,
    "alt": {
      "ko": "영업을 마친 뒤 계산기와 영수증을 대조하는 가게 주인",
      "en": "A shop owner reviewing receipts and costs after closing"
    },
    "caption": {
      "ko": "매출에서 비용을 빼고 남는 돈이 가게의 생계다.",
      "en": "What remains after operating costs supports the owner's livelihood."
    }
  },
  "sources": [
    {
      "label": {
        "ko": "정부 제출 부가가치세법 개정안 제2221049호 · 2026년 9월 3일",
        "en": "Government VAT amendment Bill 2221049 · September 3, 2026"
      },
      "url": "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221049/detailRP"
    },
    {
      "label": {
        "ko": "데일리안 · 카드매출 세액공제 축소와 자영업자 반발 · 2026년 8월 11일",
        "en": "Dailian · Card-sales credit reductions and business objections · August 11, 2026"
      },
      "url": "https://www.dailian.co.kr/news/view/1677298"
    },
    {
      "label": {
        "ko": "국회예산정책처 · 2026 대한민국 조세 · 신용카드 매출세액공제",
        "en": "National Assembly Budget Office · Korean Taxation 2026 · Card-sales VAT credit"
      },
      "url": "https://www.nabo.go.kr/board/file/down.do?fid=33319156"
    },
    {
      "label": {
        "ko": "세계일보 · 공제 한도 축소와 영향받는 사업자 비중 · 2026년 8월 15일",
        "en": "Segye Ilbo · Credit ceiling and affected businesses · August 15, 2026"
      },
      "url": "https://www.segye.com/newsView/20260815509263"
    },
    {
      "label": {
        "ko": "뉴시스 · 정부 설명과 외식업계 반발 · 2026년 8월 11일",
        "en": "Newsis · Government rationale and restaurant-sector objections · August 11, 2026"
      },
      "url": "https://nwww.newsis.com/view/NISX20260811_0003744175"
    },
    {
      "label": {
        "ko": "재정경제부 · 2026년 세제개편안 상세본",
        "en": "Ministry of Finance and Economy · Detailed 2026 tax reform proposal"
      },
      "url": "https://mofe.go.kr/com/cmm/fms/FileDown.do?atchFileId=ATCH_000000000032335&fileSn=6"
    }
  ],
  "editions": {
    "ko": {
      "title": "카드매출 공제 축소를 정상화로만 설명할 수 없다",
      "subtitle": "줄어드는 공제 한도와 가게에 실제로 남는 돈",
      "summary": "정부는 한시 특례 정상화라고 설명하지만, 같은 매출을 올리는 가게의 실제 납부 부담은 늘어날 수 있다. 매출 규모를 소득처럼 취급하지 말고, 업종별 이익과 세 부담을 함께 검증해야 한다.",
      "keyPoints": [
        "정부안은 공제율 1.3%를 1.2%로, 연간 한도 1,000만원을 500만원으로 낮춘다.",
        "공제 대상 결제금액 6억원인 가게는 조건에 따라 연간 공제가 280만원 줄어들 수 있다.",
        "씨앗은 현행 유지와 단계적 조정을 우선 검토하고, 업종별 부담 분석 없이 한도를 일괄 축소하는 방안에 비판적이다."
      ],
      "heroAlt": "영업을 마친 가게에서 카드 단말기와 계산기를 앞에 두고 영수증을 살펴보는 점주",
      "heroCaption": "공제 한도가 낮아지면 같은 매출을 올려도 가게에 남는 돈은 줄어들 수 있다.",
      "sections": [
        {
          "title": "정상화라는 설명과 실제 부담",
          "paragraphs": [
            "정부는 소상공인의 카드매출 세액공제 축소를 한시 특례의 정상화라고 설명한다. 그러나 같은 매출에 같은 비용으로 장사해도 내년에 납부할 세금이 늘어난다면, 가게 주인이 겪는 현실은 부담 증가다. 제도의 이름을 바꾸어 부른다고 그 돈이 사라지지는 않는다.",
            "정부안은 카드매출에 대한 부가가치세 우대 공제율을 1.3%에서 1.2%로 낮추고, 연간 공제 한도를 1,000만원에서 500만원으로 되돌리는 내용이다. 낮아진 우대율은 2029년 말까지 연장하지만 확대된 한도는 연장하지 않는다. 국회 심의를 거쳐야 하는 개정안이며, 적용 예정 시점은 2027년 1월 1일 이후 공급분이다.[1]"
          ]
        },
        {
          "title": "매출 6억원인 가게에 남는 돈",
          "paragraphs": [
            "공제율만 보면 0.1%포인트의 변화다. 하지만 한도를 함께 낮추면 부담은 훨씬 커진다.",
            "연간 공제 대상 카드·현금영수증 결제금액이 6억원인 가게를 생각해보자. 현재 기준으로 계산한 공제액은 780만원이다. 정부안에서는 1.2%를 곱한 720만원이 새 한도에 걸려 500만원으로 줄어든다. 차이는 연 280만원이다. 대상 결제금액이 8억원이면 공제액은 1,000만원에서 500만원으로 감소한다.",
            "이는 결제금액이 같고 공제를 모두 받을 만큼 납부세액이 충분하다는 가정에 따른 계산이다. 모든 소상공인의 공제가 절반으로 줄어드는 것은 아니다. 그러나 최대 공제를 받던 가게에서는 실제로 연 500만원의 혜택이 사라질 수 있다.[2]",
            "매출 6억원은 사장님의 소득 6억원이 아니다. 상품값과 재료비, 직원 월급, 임대료를 지급하고 남은 돈이 생계다. 편의점과 음식점처럼 비용 비중이 큰 가게라면 매출 규모만 보고 세금을 더 감당할 여력이 있다고 판단하기 어렵다.",
            "예를 들어 위 가게의 연간 영업이익을 3,000만원으로 가정하면, 공제 감소액 280만원은 그 이익의 약 9.3%에 해당한다. 실제 업종 평균을 뜻하는 수치는 아니다. 같은 세 부담 증가도 남는 이익이 얼마인지에 따라 무게가 달라진다는 예시다."
          ]
        },
        {
          "title": "한시 혜택 종료가 정책의 적절성을 보장하지는 않는다",
          "paragraphs": [
            "정부 설명에는 확인해야 할 사실이 있다. 현행법에서도 올해 말 우대가 끝나면 공제율은 1%, 한도는 500만원으로 돌아가도록 예정돼 있다. 정부안은 공제율을 1.2%로 연장한다. 기존 법의 내년 예정 기준보다 공제율을 높게 유지하는 측면이 있다.[3]",
            "씨앗은 이 사실을 빼고 비판하지 않는다. 감면을 영원히 유지해야 한다는 주장만으로 정책을 평가할 수도 없다. 세금 감면에도 목적과 비용이 있으며, 효과가 줄었다면 재검토할 수 있다.",
            "그러나 종료일이 정해져 있었다는 사실과 지금 그 혜택을 줄이는 것이 적절한지는 별개의 판단이다. 카드 결제가 보편화했다면 세원 양성화라는 초기 목적의 필요성은 줄었을 수 있다. 그렇다고 영업비용을 감당하는 가게의 여력이 그만큼 좋아졌다는 뜻은 아니다.",
            "정부가 한도를 일괄 축소하려면 업종별 실제 부담을 보여주어야 한다. 매출 구간별 사업자 수만으로는 부족하다. 공제 감소액이 영업이익에서 차지하는 비중, 카드수수료와의 관계, 단계적 조정의 효과까지 살펴야 한다."
          ]
        },
        {
          "title": "영향이 적다는 설명에서 빠지는 사람들",
          "paragraphs": [
            "정부는 한도 조정의 영향을 받는 사업자가 공제 대상의 약 6%라고 설명했다. 이 수치는 한도 축소의 직접 영향을 받는 비중이다. 나머지 사업자에게 공제율 인하의 영향까지 없다는 뜻은 아니다.[4]",
            "전체에서 작은 비중이라고 그 부담까지 작은 것은 아니다. 해당 가게에서 사라지는 연 수백만원은 운영자에게는 생활비나 시설 교체비가 될 수 있다. 영향받는 사람의 비중과 그 사람이 잃는 돈의 크기를 함께 제시해야 한다.",
            "씨앗이 보는 쟁점은 공제를 받는 사업자가 많으냐 적으냐에만 있지 않다. 매출이 일정 규모를 넘었다는 이유로, 이익이 적은 가게까지 부담 증가를 감당할 수 있다고 보는 전제가 타당한가에 있다."
          ]
        },
        {
          "title": "지원 정책은 가게에 남는 돈으로 평가해야 한다",
          "paragraphs": [
            "소상공인 보호는 지원금 지급액만으로 평가할 수 없다. 세금과 영업비용을 덜 부담하게 하는 것도 시민이 자기 일을 하며 살아갈 여건의 일부다. 정부 지원을 받는 기회와 별개로, 이미 장사하는 사람이 스스로 버틸 수 있는 조건을 살펴야 한다.",
            "정부는 재정을 운영해야 한다. 시민도 그 비용을 부담해야 한다. 그러나 감면 정비를 설명할 때에는 세금이 얼마나 더 걷히는지와 함께 누구의 이익이 얼마나 줄어드는지도 공개해야 한다. 특례 정상화라는 행정적 설명만으로 시민이 치르는 비용을 대신할 수는 없다.",
            "씨앗은 현행 유지와 단계적 조정을 우선 검토할 필요가 있다고 본다. 업종별 부담 분석 없이 한도를 절반으로 되돌리는 방안에는 비판적이다. 가격을 올리기 어려운 가게에서는 추가 부담이 점주의 소득과 고용·투자 여력을 줄일 가능성이 있기 때문이다.",
            "국회 심의에서 확인할 기준은 분명하다. 공제율과 한도가 최종적으로 어떻게 정해지는지, 업종별 납부세액과 이익을 반영한 분석이 공개되는지, 부담이 집중되는 사업자를 위한 단계적 조정이 검토되는지다.",
            "소상공인을 돕는다는 정책은 정부가 붙인 이름보다 가게에 실제로 남는 돈으로 평가해야 한다."
          ]
        }
      ],
      "chart": {
        "title": "공제 대상 결제금액별 혜택 감소",
        "description": "올해 실제 혜택과 내년 정부안을 같은 결제금액으로 비교했습니다.",
        "headers": [
          "Annual qualifying payments",
          "Current credit",
          "Proposed credit",
          "Annual reduction"
        ],
        "rows": [
          [
            "KRW 100m",
            "KRW 1.3m",
            "KRW 1.2m",
            "KRW 0.1m"
          ],
          [
            "KRW 300m",
            "KRW 3.9m",
            "KRW 3.6m",
            "KRW 0.3m"
          ],
          [
            "KRW 400m",
            "KRW 5.2m",
            "KRW 4.8m",
            "KRW 0.4m"
          ],
          [
            "KRW 500m",
            "KRW 6.5m",
            "KRW 5m",
            "KRW 1.5m"
          ],
          [
            "KRW 600m",
            "KRW 7.8m",
            "KRW 5m",
            "KRW 2.8m"
          ],
          [
            "KRW 800m",
            "KRW 10m",
            "KRW 5m",
            "KRW 5m"
          ]
        ],
        "note": "동일 결제금액·충분한 납부세액 가정. 씨앗 계산. 정부안은 국회 심의에서 변경될 수 있습니다.",
        "afterSection": 1,
        "imageSrc": "images/tax/card-credit-comparison-ko.png"
      },
      "sourceNote": "2026년 10월 6일 확인. 정부 제출 법안 제2221049호의 공개 제안이유·주요내용과 진행 상황, 언론 보도 및 현행 제도 설명을 기준으로 작성했다. 제도 내용은 사실 정보이며 정책의 적절성에 대한 판단은 씨앗의 논평이다. 계산 예시는 동일 결제금액과 충분한 납부세액을 가정한다."
    },
    "en": {
      "title": "Lower card-sales tax credits cannot be explained away as normalization",
      "subtitle": "A lower ceiling and the money shops actually keep",
      "summary": "Calling the withdrawal of a temporary preference normalization does not erase the higher VAT bill a shop may face. Turnover is not income: the burden must be tested against sector-level profits and actual tax liabilities.",
      "keyPoints": [
        "The proposal lowers the rate from 1.3% to 1.2% and the annual ceiling from KRW 10 million to KRW 5 million.",
        "A shop with KRW 600 million in qualifying payments could lose KRW 2.8 million in annual credit, subject to the stated assumptions.",
        "Seed Voice favors examining continued relief and phased adjustment and opposes a uniform ceiling cut without sector-level burden analysis."
      ],
      "heroAlt": "A shop owner reviewing receipts beside a card terminal and calculator after closing",
      "heroCaption": "A lower credit ceiling can leave a shop with less money even at unchanged sales.",
      "sections": [
        {
          "title": "Normalization and the burden owners experience",
          "paragraphs": [
            "The government describes a reduction in the VAT credit for small businesses' card sales as the normalization of a temporary preference. Yet if a shop makes the same sales at the same cost and owes more VAT next year, its owner experiences an increase in the burden. A different policy label does not make that payment disappear.",
            "The proposal would reduce the preferential credit rate from 1.3% to 1.2% and return the annual ceiling from KRW 10 million to KRW 5 million. The lower preferential rate would continue through 2029, but the higher ceiling would not. This is a bill requiring parliamentary approval, intended to apply to supplies made from January 1, 2027.[1]"
          ]
        },
        {
          "title": "What remains from a shop's KRW 600 million turnover",
          "paragraphs": [
            "The rate change alone is 0.1 percentage point. Reducing the ceiling at the same time makes the difference much larger.",
            "Consider a shop with KRW 600 million a year in qualifying card and cash-receipt payments. Today's rules yield a KRW 7.8 million credit. Under the proposal, the 1.2% calculation yields KRW 7.2 million, but the new ceiling limits the credit to KRW 5 million: a reduction of KRW 2.8 million. At KRW 800 million in qualifying payments, the credit falls from KRW 10 million to KRW 5 million.",
            "These calculations assume unchanged qualifying payments and enough VAT payable to use the full credit. Not every small business loses half its credit. But a shop currently receiving the maximum may indeed lose KRW 5 million a year.[2]",
            "KRW 600 million in turnover is not KRW 600 million in the owner's income. Merchandise, ingredients, payroll and rent must be paid first. What remains supports the owner's livelihood. For businesses with high costs relative to sales, turnover alone is an unreliable measure of their ability to absorb higher taxes.",
            "If the illustrative shop's annual operating profit were KRW 30 million, the KRW 2.8 million credit reduction would equal about 9.3% of that profit. This is not an industry-average estimate. It shows why the significance of a tax change depends on how much profit remains."
          ]
        },
        {
          "title": "An expiry date does not establish that withdrawal is appropriate",
          "paragraphs": [
            "One fact in the government's explanation matters. Existing law already schedules the rate to return to 1% and the ceiling to KRW 5 million after this year. The proposal extends a 1.2% rate, keeping it above next year's scheduled base rate.[3]",
            "Seed Voice does not omit that fact. Nor is insisting that every preference last forever sufficient policy analysis. Relief has both a purpose and a fiscal cost; declining effectiveness can justify review.",
            "But a scheduled expiry and the appropriateness of withdrawing relief now are separate judgments. Widespread card use may reduce the original need to make sales visible. That does not establish that shops have become better able to meet operating costs.",
            "Before uniformly reducing the ceiling, the government should disclose the actual burdens by sector. Counts of businesses by turnover band are not enough. Analysis should examine the reduction relative to operating profits, its relationship to card-processing fees, and the effects of a phased adjustment."
          ]
        },
        {
          "title": "Who disappears behind an estimate of limited impact",
          "paragraphs": [
            "The government says the ceiling adjustment would affect about 6% of credit recipients. That is the share directly exposed to the ceiling reduction, not proof that the lower rate leaves everyone else unaffected.[4]",
            "A small share of businesses does not imply a small burden for each affected owner. Several million won a year may pay household bills or replace essential equipment. Both the number affected and the amount each loses should be disclosed.",
            "For Seed Voice, the issue is not only how many businesses claim the credit. It is whether crossing a turnover threshold justifies assuming that even a low-profit shop can absorb a higher burden."
          ]
        },
        {
          "title": "Judge support by the money a shop can keep",
          "paragraphs": [
            "Small-business protection cannot be measured only by grants paid out. Reducing taxes and operating costs also helps citizens sustain themselves through their own work. Alongside access to support, policy should examine the conditions in which existing businesses can remain viable.",
            "Government needs revenue, and citizens must contribute to public costs. But a review of tax preferences should disclose whose profits will fall as well as how much more tax will be collected. An administrative explanation about normalization cannot stand in for the cost citizens bear.",
            "Seed Voice favors examining continued relief and phased adjustment first. We oppose halving the ceiling without sector-level burden analysis. Where shops cannot raise prices, the additional burden could reduce owners' income and their capacity to hire or invest.",
            "We will track the final rate and ceiling, whether analysis of actual VAT liabilities and sector-level profits is published, and whether a phased adjustment for concentrated burdens is considered.",
            "A policy described as helping small businesses should be judged by the money shops actually retain, not by the label the government attaches to it."
          ]
        }
      ],
      "chart": {
        "title": "Credit reductions by qualifying payment volume",
        "description": "Comparison of this year's benefits and next year's proposal at identical qualifying payment volumes.",
        "headers": [
          "Annual qualifying payments",
          "Current credit",
          "Proposed credit",
          "Annual reduction"
        ],
        "rows": [
          [
            "KRW 100m",
            "KRW 1.3m",
            "KRW 1.2m",
            "KRW 0.1m"
          ],
          [
            "KRW 300m",
            "KRW 3.9m",
            "KRW 3.6m",
            "KRW 0.3m"
          ],
          [
            "KRW 400m",
            "KRW 5.2m",
            "KRW 4.8m",
            "KRW 0.4m"
          ],
          [
            "KRW 500m",
            "KRW 6.5m",
            "KRW 5m",
            "KRW 1.5m"
          ],
          [
            "KRW 600m",
            "KRW 7.8m",
            "KRW 5m",
            "KRW 2.8m"
          ],
          [
            "KRW 800m",
            "KRW 10m",
            "KRW 5m",
            "KRW 5m"
          ]
        ],
        "note": "Assumes identical payments and enough VAT payable to use the full credit. Seed Voice calculations. The bill may change in Parliament.",
        "afterSection": 1,
        "imageSrc": "images/tax/card-credit-comparison-en.png"
      },
      "sourceNote": "Checked October 6, 2026. Based on the published rationale, summary and progress record for government Bill 2221049, reporting and existing-rule guidance. The policy judgment is Seed Voice's commentary. Illustrative calculations assume unchanged qualifying payments and enough VAT payable."
    }
  }
};

