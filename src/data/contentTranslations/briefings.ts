import { procurementTaxWatchNoticeTranslation, procurementTaxWatchNoticeSlug } from "../procurementTaxWatchNotice";
import { policyFundRiskTranslation } from "../policyFundRiskBriefing";
import { ktrCampaignTranslation } from "./ktrCampaign";
import { civicHubTranslations } from "../civicHubArticles";
import { pensionReciprocityTranslation } from "./briefingPensionReciprocity";
import { realEstateSupervisorCitizenFreedomTranslation } from "./briefingRealEstateSupervisorCitizenFreedom";
import type { BriefingTranslation } from "./types";
import { briefingTranslations as legacyBriefingTranslations } from "./briefingsLegacy";
import { socialEconomyFairnessTranslation } from "./briefing09";
import { hearingAccountabilityTranslation } from "./briefing10";
import { partyDissolutionTranslation } from "./briefing11";
import { futureResponseFundTranslation } from "./briefing12";
import { socialSolidarityEconomyLawTranslation } from "./briefing13";
import { yeosuIslandExpoBriefingTranslation } from "./briefingYeosuIslandExpo";
import { activistFundingPressureTranslation } from "./briefing14";
import { hospitalInheritanceTaxTranslation } from "./briefingHospitalInheritanceTax";
import { skHynixAiHackathonTranslation } from "./briefingSkHynixAiHackathon";
import { seojinSchoolNeighborsTranslation } from "./briefingSeojinSchoolNeighbors";
import { northKoreanPowsTranslation } from "./briefingNorthKoreanPows";
import { platformAdvertisingTranslation } from "./briefingPlatformAdvertising";
import { inheritanceTaxFrozenThresholdTranslation } from "./briefingInheritanceTaxFrozenThreshold";
import { incomeTaxFamilyDeductionTranslation } from "./briefingIncomeTaxFamilyDeduction";
import { realEstateSupervisorExplainerTranslation } from "./briefingRealEstateSupervisor";
import { monthlyRentCreditExplainerTranslation } from "./briefingMonthlyRentCredit";
import { farmlandRetirementTranslation } from "./briefingFarmlandRetirement";

export const briefingTranslations: Record<string, BriefingTranslation> = {
  [procurementTaxWatchNoticeSlug]: procurementTaxWatchNoticeTranslation,
  "government-policy-funds-risk-and-taxpayer-cost-2026": policyFundRiskTranslation,
  "korean-civic-tax-watch-movement-ktr": ktrCampaignTranslation,
  ...civicHubTranslations,
  "foreign-pension-birth-credit-reciprocity-fairness-2026": pensionReciprocityTranslation,
  "real-estate-supervisor-citizen-freedom-property-rights": realEstateSupervisorCitizenFreedomTranslation,
  "farmland-census-elderly-farmers-retirement": farmlandRetirementTranslation,
  "real-estate-supervisor-bill-2221573-explained": realEstateSupervisorExplainerTranslation,
  "monthly-rent-tax-credit-2026-bills-explained": monthlyRentCreditExplainerTranslation,
  "income-tax-family-deduction-2026-proposals": incomeTaxFamilyDeductionTranslation,
  "inheritance-tax-frozen-allowance-middle-class": inheritanceTaxFrozenThresholdTranslation,
  "platform-advertising-cost-small-merchants": platformAdvertisingTranslation,
  "north-korean-pows-south-korea-zelensky-un": northKoreanPowsTranslation,
  "seojin-school-neighbors-civic-solidarity": seojinSchoolNeighborsTranslation,
  "sk-hynix-ai-hackathon-skills-first-hiring": skHynixAiHackathonTranslation,
  "hospital-inheritance-tax-maternity-care": hospitalInheritanceTaxTranslation,
  "activist-support-political-pressure": activistFundingPressureTranslation,
  "social-solidarity-economy-law-conservative-silence": socialSolidarityEconomyLawTranslation,
  "future-response-fund-public-money": futureResponseFundTranslation,
  "can-half-the-nation-be-dissolved": partyDissolutionTranslation,
  "yeosu-world-island-expo": yeosuIslandExpoBriefingTranslation,
  "confirmation-hearings-zero-witnesses": hearingAccountabilityTranslation,
  "social-economy-fair-competition": socialEconomyFairnessTranslation,
  ...legacyBriefingTranslations,
};
