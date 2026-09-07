export type { SeedColumn } from "./columnsLegacy";
export * from "./columnsLegacy";
import { columns as legacyColumns } from "./columnsLegacy";
import type { SeedColumn } from "./columnsLegacy";
import { lhReformColumn } from "./columns/lhReformColumn";

export const columns: SeedColumn[] = [lhReformColumn, ...legacyColumns];
export const getColumn = (slug: string) => columns.find((column) => column.slug === slug);
export const getColumnsNewestFirst = () => [...columns].sort((a, b) => b.issue - a.issue);
export const getLatestColumn = () => getColumnsNewestFirst()[0];
