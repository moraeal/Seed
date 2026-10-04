import { X } from "lucide-react";
import { useSyncExternalStore } from "react";
import { useLanguage } from "../i18n";

const storageKey = "seed.siya.dismissed";
const changeEvent = "seed:siya-dismissed";
let dismissedInMemory = false;

function isDismissed() {
  try { return dismissedInMemory || sessionStorage.getItem(storageKey) === "1"; }
  catch { return dismissedInMemory; }
}
function subscribe(onChange: () => void) {
  window.addEventListener(changeEvent, onChange);
  return () => window.removeEventListener(changeEvent, onChange);
}
export function useSiyaDismissed() {
  return useSyncExternalStore(subscribe, isDismissed, () => false);
}
function dismissSiya() {
  dismissedInMemory = true;
  // Keep Siya hidden across routes and reloads in this tab. A new browsing
  // session starts with the original welcome behavior again.
  try { sessionStorage.setItem(storageKey, "1"); } catch { /* Storage may be disabled. */ }
  window.dispatchEvent(new Event(changeEvent));
}
export default function SiyaDismissButton() {
  const { language } = useLanguage();
  const label = language === "ko" ? "씨야 숨기기" : "Hide Siya";
  return <button type="button" className="seed-siya-dismiss" onClick={dismissSiya} aria-label={label} title={label}>
    <X size={20} aria-hidden="true" />
  </button>;
}
