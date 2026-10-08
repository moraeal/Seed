import type { NewsTranslation } from "../types";

export const privacySecurityCommentaryTranslation: NewsTranslation = {
  "category": "News Commentary · Privacy & Civic Rights",
  "title": "AI hacking exposes citizens to the cost of security gaps",
  "subtitle": "More breach notifications and slower investigations point to corporate weaknesses and fragmented public response",
  "summary": "A breach exposed information belonging to about 25,000 Shinhan Bank loan applicants. Recent financial-sector attacks have also produced signs of AI-tool involvement. Notifications are rising while investigation durations have lengthened. This commentary examines corporate security, fragmented national arrangements, cooperation and legal foundations as institutional background, while keeping them separate from findings about this incident.",
  "keySentence": "People entrusting their information to a bank should not also carry the cost of its security gaps.",
  "selectedNews": {
    "outlet": "Newspim",
    "headline": "FSC chair acknowledges shortcomings in basic response at parliamentary audit",
    "linkLabel": "Read the parliamentary audit report (Korean)",
    "summary": [
      "At the October 8 audit, the FSC chair acknowledged shortcomings in the basic response to financial-sector hacking.",
      "The FSC says it is preparing improvements to the frequency, scope and enforcement of vulnerability checks.",
      "AI involvement, intrusion paths and exposure are recorded separately from findings established by individual inquiries."
    ]
  },
  "heroImage": {
    "src": "/images/news/privacy-ai-banking-2026/hero.webp",
    "alt": "Data light escapes a cracked glass vault holding anonymous loan papers",
    "caption": "The burden on people who entrusted their information continues after a breach announcement.",
    "credit": "AI image"
  },
  "inlineImage": {
    "src": "/images/news/privacy-ai-banking-2026/reports-en.svg",
    "alt": "Breach notifications: 307 in 2024, 447 in 2025 and 432 in the first half of 2026",
    "caption": "The 2026 figure covers only the first half. Notifications are not a count of people or exposed records.",
    "credit": "Seed Voice chart · PIPC and parliamentary submissions"
  },
  "additionalImages": [
    {
      "src": "/images/news/privacy-ai-banking-2026/body.webp",
      "alt": "A person reviews a smartphone and loan-related papers at home",
      "caption": "Checking exposure and the authenticity of unexpected contacts also costs citizens time.",
      "credit": "AI image"
    }
  ],
  "sections": [
    {
      "title": "Information entrusted for a loan application",
      "paragraphs": [
        "Shinhan Bank said on October 1 that personal information belonging to about 25,000 loan applicants had been exposed. The disclosed categories included names, telephone numbers, annual income and calculated loan limits. The Financial Supervisory Service opened an investigation on October 6.[1](https://www.newspim.com/news/view/20261001000665)[2](https://www.newspim.com/news/view/20261006001443)",
        "People seeking credit entrust a lender with a picture of their financial circumstances. Exposure of that information can create risks beyond an unwanted call: an approaching stranger may know both income and borrowing needs. Checking whether a contact is genuine becomes another cost for the customer. This describes a foreseeable risk arising from the data categories, not a verified count of secondary victims.",
        "The bank announced a commitment to compensate losses in full. A promise, however, precedes applications, decisions and payments. The companion [“My bank-held information leaked: Tracking the AI hacking inquiry and compensation”](/monitoring/banking-privacy-ai-hacking-tracker-2026) records developments separately. This commentary examines the gaps behind recurring breaches."
      ]
    },
    {
      "title": "Faster AI tools amplify gaps in basic security",
      "paragraphs": [
        "Reports of recent financial-sector attacks identified traces associated with ARTEX, an AI-assisted penetration-testing tool. Penetration testing searches for weaknesses before attackers exploit them. The same functions can become intrusion tools when misused. A tool trace does not establish that AI independently conducted every stage of an attack.[3](https://www.news1.kr/it-science/security-hacking/6310284)",
        "AhnLab’s October 7 analysis describes ARTEX-related infrastructure connecting planning and task-performing agents with external tools, dividing discovery and vulnerability testing into multiple tasks. AI can expand the speed and scale of this work. The analysis does not mean that all associated infrastructure is malicious or that this bank incident was entirely autonomous.[4](https://www.ahnlab.com/ko/contents/content-center/36300)",
        "A new attack tool does not remove a company’s management responsibilities. The practical question is whether external connected systems handling customer data were included in asset inventories, access controls and vulnerability checks. An explanation centered on AI cannot settle that question."
      ]
    },
    {
      "title": "Notifications increased and investigations took longer",
      "paragraphs": [
        "The Personal Information Protection Commission recorded 447 breach notifications in 2025, up 45.6% from 307 in 2024. Reporting based on parliamentary submissions puts the first half of 2026 at 432—96.6% of the preceding full-year total.[5](https://m.korea.kr/briefing/pressReleaseView.do?newsId=156761788&pWise=mSub&pWiseSub=C3)[6](https://www4.ajunews.com/view/20260916080246240)",
        "These are notified incidents, not the total volume of records or a count of distinct affected people. The same person may appear in several incidents, and notification dates can differ from intrusion dates. Comparing half a year with a full year does not produce an annual growth rate. These figures alone also do not establish that one administration’s policies caused the breaches.",
        "The reported average interval from opening an investigation to a commission decision rose from 345 days in 2025 to 369 days in the first half of 2026. Some investigators reportedly held 80–90 cases. Investigations are taking longer. This average is neither the duration of the Shinhan inquiry nor the time to compensation.[7](https://www3.edaily.co.kr/News/Read?mediaCodeNo=257&newsId=03421046645608984)",
        "An eventual regulatory decision matters to affected people. So do immediate containment and disclosure of the data exposed. Rising notifications alongside longer investigations provide grounds to examine whether response capacity is keeping pace."
      ]
    },
    {
      "title": "Corporate weaknesses meet fragmented national arrangements",
      "paragraphs": [
        "A 2025 study by Kim Su-hyeon and Kim Jong-seong identifies public–private separation, dispersed authority and responsibility, and inefficient cooperation in Korea’s cybersecurity governance. Shin So-hyun’s work at the Asan Institute also raises gaps in the legal foundations of cybersecurity law and strategy. These are institutional studies, not findings about the cause of the present bank breach.[8](https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003291753)[9](https://asaninst.org/bbs/board.php?bo_table=s1_1&wr_id=546)",
        "SEED’s assessment is that recurring breaches sit against a background of weak corporate security, fragmented national response arrangements, inadequate cooperation and gaps in the legal foundations for information activities.",
        "Here, those legal foundations mean defined powers, procedures and responsibilities for collecting and sharing cyber-threat intelligence and responding to threats. Closing a gap does not justify unrestricted collection of citizens’ data. Access limits, retention periods and independent oversight belong in the same framework.",
        "A risk discovered inside one company can help protect others when it reaches the relevant institutions promptly. Multiple institutions are not, by themselves, proof of failure. If divided responsibilities delay sharing and early response, however, citizens bear the cost of the gap. The actual coordination failures in this incident remain matters for the inquiry."
      ]
    },
    {
      "title": "The measure is a changed outcome",
      "paragraphs": [
        "In its October 6 explanation, the Financial Services Commission said it had urged stronger security and was preparing improvements to the frequency, scope and enforcement of vulnerability checks. At the October 8 parliamentary audit, its chair acknowledged shortcomings even in basic response. Warnings and checks had coexisted with recurring breaches.[10](https://www.fsc.go.kr/no010102/87885)[11](https://ir.newspim.com/news/view/20261008000854)",
        "Frequency alone is an incomplete measure. Concrete results include previously overlooked systems entering management inventories, shared attack indicators reaching other lenders promptly, and affected customers receiving timely information about exposure and protective action.",
        "AI hacking is a new threat; the rights of people who entrusted their information are longstanding. Better corporate security, effective public coordination and meaningful redress can together demonstrate a different response. A system that reduces the verification burden and uncertainty placed on citizens is the outcome that matters."
      ]
    }
  ],
  "watchPoints": [
    "Verified intrusion paths and exposed data categories",
    "Changes to checks covering external connected systems",
    "Records of threat sharing and initial response",
    "Claims, decisions and actual compensation payments"
  ],
  "seedPerspective": [
    "This assessment of institutional background does not mean the direct causes of this incident have all been established. Corporate management and public response arrangements warrant examination together.",
    "The [companion tracker](/monitoring/banking-privacy-ai-hacking-tracker-2026) records developments and outstanding verification items."
  ],
  "sourceLabels": [
    "Newspim — Shinhan discloses a breach affecting about 25,000 loan applicants",
    "Newspim — FSS opens investigation into Shinhan breach",
    "AhnLab — Evolution of ARTEX and AI-assisted penetration-testing infrastructure",
    "Financial Services Commission — Explanation of AI hacking reports, October 6",
    "Newspim — FSC chair acknowledges inadequate response at October 8 audit",
    "Personal Information Protection Commission — 447 breach notifications in 2025",
    "Aju Business Daily — Parliamentary data show 432 notifications in first half of 2026",
    "EDaily — Average investigation duration and staffing",
    "Kim Su-hyeon and Kim Jong-seong — Cybersecurity governance study, 2025",
    "Shin So-hyun, Asan Institute — Recommendations on cybersecurity law and strategy, 2025",
    "Newspim — FSS orders financial-sector self-checks, October 7",
    "News1 — ARTEX traces and financial-sector attack analysis, October 5"
  ]
};
