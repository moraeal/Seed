import { publicHealthFunctionNetworkColumn } from "./columns/publicHealthFunctionNetworkColumn";
import { inheritanceTaxBusinessContinuityColumn } from "./columns/inheritanceTaxBusinessContinuityColumn";
import { korea97GenerationColumn } from "./columns/korea97GenerationColumn";
import { wealthCrossesBordersColumn } from "./columns/wealthCrossesBordersColumn";
import { militaryAcademyIntegrationColumn } from "./columns/militaryAcademyIntegrationColumn";
import { fukushimaJourneyColumn } from "./columns/fukushimaJourneyColumn";
import { silenceAndPowerColumn } from "./columns/silenceAndPowerColumn";
import { nuclearPolicyReversalColumn } from "./columns/nuclearPolicyReversalColumn";
import { farmlandOwnershipPressureColumn } from "./columns/farmlandOwnershipPressureColumn";
import { citizenizationBeforeAdvancementColumn } from "./columns/citizenizationBeforeAdvancementColumn";
import { stateCannotMonopolizeLifeColumn } from "./columns/state-cannot-monopolize-life";
import { civicGroupsAreNotStateVanguardColumn } from "./columns/civic-groups-are-not-state-vanguard";
import { tenPercentPowerColumn } from "./columns/tenPercentPowerColumn";
import { prosecutionReformPowerTransferColumn } from "./columns/prosecutionReformPowerTransferColumn";
import { lhReformColumn } from "./columns/lhReformColumn";
import { columns as legacyColumns } from "./columnsLegacy";
import type { SeedColumn } from "./columnsLegacy";

export type { SeedColumn } from "./columnsLegacy";

export const columns: SeedColumn[] = [inheritanceTaxBusinessContinuityColumn, publicHealthFunctionNetworkColumn, korea97GenerationColumn, wealthCrossesBordersColumn, fukushimaJourneyColumn, militaryAcademyIntegrationColumn, nuclearPolicyReversalColumn, farmlandOwnershipPressureColumn, silenceAndPowerColumn, citizenizationBeforeAdvancementColumn, stateCannotMonopolizeLifeColumn, civicGroupsAreNotStateVanguardColumn, tenPercentPowerColumn, prosecutionReformPowerTransferColumn, lhReformColumn, ...legacyColumns];

export const hotIssueColumnSlugs = new Set([
  "democratic-party-nuclear-policy-reversal",
  "military-academy-integration-rotc-question",
  "farmland-ownership-without-an-exit",
  "prosecution-reform-power-transfer-2026",
]);

export const hotIssueColumnTrackerSlugs: Record<string, string> = {
  "democratic-party-nuclear-policy-reversal": "democratic-party-nuclear-policy-reversal-tracker",
  "military-academy-integration-rotc-question": "military-academy-integration-tracker",
  "farmland-ownership-without-an-exit": "farmland-census-disposal-orders-tracker",
  "prosecution-reform-power-transfer-2026": "prosecution-service-abolition-tracker",
};

export const isHotIssueColumn = (slug: string) => hotIssueColumnSlugs.has(slug);

export const getColumn = (slug: string) => columns.find((column) => column.slug === slug);

export const getColumnsNewestFirst = () => columns
  .filter((column) => !isHotIssueColumn(column.slug))
  .sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue);

export const getHotIssueColumnsNewestFirst = () => columns
  .filter((column) => isHotIssueColumn(column.slug))
  .sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue);

export const getLatestColumn = () => getColumnsNewestFirst()[0];
