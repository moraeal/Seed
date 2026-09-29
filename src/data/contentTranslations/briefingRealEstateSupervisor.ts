import type { BriefingTranslation } from "./types";

export const realEstateSupervisorExplainerTranslation: BriefingTranslation = {
  category: "LEGISLATIVE WATCH · BILL EXPLAINER",
  title: "Who Would Investigate a Home Purchase Under the Real Estate Supervisor Bill?",
  subtitle: "The powers and safeguards in the September 23 proposal",
  summary: "A bill would establish an agency under the prime minister to coordinate investigations and investigate property transactions directly. We examine its case-opening powers, access to financial information and protections for lawful buyers.",
  keyHighlights: [
    "Rep. Kim Hyun-jung and 17 others introduced Bill 2221573 on September 23, 2026. It was referred to the National Policy Committee on September 28 and is not law.",
    "The agency could open inquiries on its own initiative, request documents and appearances, and seek financial transaction records from a specified branch of a financial institution.",
    "The proposal includes separation of investigation and criminal-investigation information. Parliament still needs to define practical limits and remedies.",
  ],
  sourceDocument: { label: "Official proposal summary · Bill 2221573", url: "https://opinion.lawmaking.go.kr/gcom/nsmLmSts/out/2221573/detailRP", note: "The complete bill text was not separately reviewed. Clause-level claims await the complete text." },
  author: "SEED CIVIC BRIEFING",
  images: [
    { alt: "A couple reviewing home purchase and financing documents", caption: "Family savings, loans and private borrowing can all form part of a lawful home purchase.", credit: "AI image" },
    { alt: "An official reviewing property transaction records", caption: "An investigation tests evidence; its subject is not automatically guilty.", credit: "AI image" },
    { src: "images/briefings/real-estate-supervisor-powers-en.svg", alt: "Comparison of existing agency powers and the proposed supervisor's investigatory powers and safeguards", caption: "The agency and its safeguards remain proposals. Existing agencies retain powers under their respective laws.", credit: "SEED VOICE chart · Bill 2221573 summary" },
  ],
  content: [
    "Imagine a couple buying their first home with a bank loan and money borrowed from a parent. That can be entirely lawful when documented. If a transaction report is flagged, who can ask them for records, and how much of their financial history can be examined? This bill would concentrate a broader set of powers in a new supervisor.",
    "Rep. Kim Hyun-jung and 17 co-sponsors introduced the Real Estate Supervisor Establishment and Operation Bill (No. 2221573) on September 23. It was referred to the National Policy Committee on September 28. It describes a proposed agency, not one already operating.",
  ],
  introTitle: "First, what agency is proposed?",
  sections: [
    { title: "Connecting inquiries now handled by different agencies", paragraphs: [
      "The sponsor argues that false contracts, improper housing applications and disguised gifts can involve multiple laws, so fragmented agency investigations may miss the full transaction. The bill proposes a supervisor under the prime minister to coordinate relevant agencies and conduct its own inquiries and criminal investigations.",
      "Finding illicit transactions can protect victims and honest buyers. The published summary does not establish which cases existing data sharing cannot handle, or the staffing and cost of a new agency.",
    ] },
    { title: "How an inquiry could begin, and what could be requested", paragraphs: [
      "The proposal summary lists substantial suspicion identified through transaction-report checks, agency requests or referrals, reports to a center, and cases the supervisor considers appropriate for an inquiry on its own initiative. It provides for requests to appear, give statements and submit books and documents, and for retention of relevant items. The upper limit for administrative fines for obstruction or noncompliance is KRW 30 million.",
      "It would allow requests for financial transaction information from a specified branch and access to transaction-report verification results before an inquiry opens. The full bill and committee review must show whose accounts can be requested, for what period, when notice is given and how a person can challenge a demand. The summary does not establish automatic access to every buyer's accounts.",
    ] },
    { title: "Safeguards depend on their operating rules", paragraphs: [
      "The bill proposes a single three-year term for the director, limits on removal, separation of inquiry and criminal-investigation information, distinct information systems and a review committee for transitions between functions. It also prohibits abuse of inquiry powers and disclosure of secrets. The related opinion considers what these safeguards still need to specify.",
      "A person under inquiry has not been found guilty. Where a mistaken report or analytic flag starts a case, time lost, document costs, the scope of data accessed and a route to correct the record all matter.",
    ] },
    { title: "What Parliament must verify", paragraphs: [
      "Ask which cases existing agencies could not resolve, what objective threshold permits an own-initiative inquiry, and how financial information requests are limited, notified and challenged. Closures without wrongdoing, data deletion and audits of misuse should be measurable.",
      "This is a proposal to detect illicit transactions. It is not a housing supply program or a direct rent reduction. We will compare actual clauses and operating rules if the bill advances.",
    ] },
  ],
  paragraphLinks: [{ sectionIndex: 2, paragraphIndex: 0, links: [{ label: "Related opinion: Should the supervisor see buyers' accounts?", url: "/monitoring/legislation/commentary/real-estate-supervisor-september-bill" }] }],
  watchTitle: "What to watch", watchPoints: ["Threshold for self-initiated inquiries and scope of financial requests", "Notice, challenges and remedies for cleared buyers", "Overlap with existing agencies and establishment cost", "Committee amendments and commencement"],
  quote: "Give a power to find illicit transactions a matching legal duty to protect lawful buyers.",
  sourceLabels: ["Official proposal summary for Bill 2221573"],
  sourceNote: "Based on the public summary as checked September 29, 2026; the attached full bill was not separately reviewed. Clause-level limits require the complete text. The first-home buyers are a hypothetical example.",
};
