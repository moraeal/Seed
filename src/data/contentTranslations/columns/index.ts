import { issue01 } from "./issue01";
import { issue02 } from "./issue02";
import { issue03 } from "./issue03";
import { issue04 } from "./issue04";
import { issue05 } from "./issue05";
import { issue06 } from "./issue06";
import { issue07 } from "./issue07";
import { issue08 } from "./issue08";
import type { ColumnTranslation } from "../types";

export const columnTranslations: Record<number, ColumnTranslation> = {
  1: issue01,
  2: issue02,
  3: issue03,
  4: issue04,
  5: issue05,
  6: issue06,
  7: issue07,
  8: issue08,
};
