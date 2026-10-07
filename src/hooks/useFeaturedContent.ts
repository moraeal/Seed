import snapshot from "../data/homeSnapshot.json";
import { useEffect, useState } from "react";
import type { FeaturedHistoryEntry } from "../data/featuredHistory";
import { getFeaturedContentHistory, getFeaturedContentPath } from "../lib/featuredContent";

export function useFeaturedContent({ waitForSelection = false } = {}) {
  const [featuredPath, setFeaturedPath] = useState<string | null>(snapshot.featuredPath);
  const [history, setHistory] = useState<FeaturedHistoryEntry[]>(snapshot.history);
  // A deployed snapshot may predate an operator change. Resolve the live
  // selection before showing a homepage lead; archive pages can use the snapshot.
  const [ready, setReady] = useState(!waitForSelection);
  const [historyError, setHistoryError] = useState(false);
  useEffect(() => {
    let active = true;
    let pending = false;
    const refresh = async () => {
      if (pending) return;
      pending = true;
      const [pathResult, historyResult] = await Promise.allSettled([
        getFeaturedContentPath().then((path) => {
          if (active) { setFeaturedPath(path); setReady(true); }
          return path;
        }, (error) => {
          // Use the saved selection only when the live request has failed.
          if (active) setReady(true);
          throw error;
        }),
        getFeaturedContentHistory(),
      ]);
      pending = false;
      if (!active) return;
      if (pathResult.status === "fulfilled") setFeaturedPath(pathResult.value);
      if (historyResult.status === "fulfilled") setHistory(historyResult.value);
      setHistoryError(historyResult.status === "rejected");
      setReady(true);
    };
    void refresh();
    const timer = window.setInterval(() => { if (document.visibilityState === "visible") void refresh(); }, 60_000);
    window.addEventListener("focus", refresh);
    return () => { active = false; window.clearInterval(timer); window.removeEventListener("focus", refresh); };
  }, []);
  return { featuredPath, history, ready, historyError };
}
