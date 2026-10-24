// Verify the newest registered column after the deployment, without a hard-coded slug.
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
const index = await readFile("src/data/columns.ts", "utf8");
const first = index.match(/export const columns: SeedColumn\[\] = \[([A-Za-z0-9_]+)/);
if (!first) throw new Error("Cannot identify first column in columns registry");
const symbol = first[1];
const imports = [...index.matchAll(/import \{ (\w+) \} from "\.\/columns\/([^"]+)";/g)];
const target = imports.find((m) => m[1] === symbol);
if (!target) throw new Error("Missing module import for newest column " + symbol);
const source = await readFile("src/data/columns/" + target[2] + ".ts", "utf8");
const slug = source.match(/["']?slug["']?\s*:\s*["']([a-z0-9-]+)["']/)?.[1];
if (!slug) throw new Error("Missing column slug in " + target[2]);
console.log("Post-deploy verification of newest column:", slug);
const result = spawnSync(process.execPath, ["scripts/verify-live-column.mjs", slug], { stdio: "inherit" });
if (result.error || result.status !== 0) process.exit(result.status || 1);
