import { lhReformColumn } from "./columns/lhReformColumn";
import { columns as legacyColumns } from "./columnsLegacy";
import type { SeedColumn } from "./columnsLegacy";

export type { SeedColumn } from "./columnsLegacy";

export const columns: SeedColumn[] = [lhReformColumn, ...legacyColumns];

export const getColumn = (slug: string) => columns.find((column) => column.slug === slug);

export const getColumnsNewestFirst = () => [...columns].sort((a, b) => b.date.localeCompare(a.date) || b.issue - a.issue);

export const getLatestColumn = () => getColumnsNewestFirst()[0];
