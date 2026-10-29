import snapshot from "../data/homeSnapshot.json";
import { useEffect, useState } from "react";
import type { FeaturedHistoryEntry } from "../data/featuredHistory";
import { getFeaturedContentHistory, getFeaturedContentPath } from "../lib/featuredContent";

export function useFeaturedContent() {
  const [featuredPath, setFeaturedPath] = useState<string | null>(snapshot.featuredPath);
  const [history, setHistory] = useState<FeaturedHistoryEntry[]>(snapshot.history);
  // Paint the last successful public snapshot immediately, including in SSR HTML.
  // A live editor change refreshes the selection in the background without a blank lead.
  const ready = true;
  const [historyError, setHistoryError] = useState(false);
  useEffect(() => {
    let active = true;
    let pending = false;
    const refresh = async () => {
      if (pending) return;
      pending = true;
      const [pathResult, historyResult] = await Promise.allSettled([
        getFeaturedContentPath().then((path) => {
          if (active) setFeaturedPath(path);
          return path;
        }, (error) => {
          // Keep the last successful snapshot or selection if the network fails.
          throw error;
        }),
        getFeaturedContentHistory(),
      ]);
      pending = false;
      if (!active) return;
      if (pathResult.status === "fulfilled") setFeaturedPath(pathResult.value);
      if (historyResult.status === "fulfilled") setHistory(historyResult.value);
      setHistoryError(historyResult.status === "rejected");
    };
    void refresh();
    const timer = window.setInterval(() => { if (document.visibilityState === "visible") void refresh(); }, 60_000);
    window.addEventListener("focus", refresh);
    return () => { active = false; window.clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, []);
  return { featuredPath, history, ready, historyError };
}
