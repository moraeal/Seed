// Shared, side-effect-free manuscript verifier: never creates approvals.
import { createHash } from "node:crypto";
export const fingerprint = canonical => createHash("sha256").update(JSON.stringify(canonical)).digest("hex");
export function verifyApproved(canonical, approved, slug = canonical?.slug) {
  if (!approved || approved.schemaVersion !== 1 || approved.slug !== slug)
    throw Error("Invalid approval snapshot");
  const expected = fingerprint(approved.canonical);
  if (expected !== approved.sha256) throw Error("Approval snapshot integrity check failed");
  if (fingerprint(canonical) !== expected) throw Error("APPROVED TEXT MISMATCH");
  return expected;
}
