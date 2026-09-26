import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => { window.history.scrollRestoration = previous; };
  }, []);

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const anchorId = decodeURIComponent(location.hash.slice(1));
    let frame = 0;
    const scrollToAnchor = () => {
      const target = document.getElementById(anchorId);
      if (!target) return false;
      frame = window.requestAnimationFrame(() => target.scrollIntoView({ block: "start", behavior: "instant" }));
      return true;
    };

    // Route components load lazily. Wait for the destination section to mount.
    if (scrollToAnchor()) return () => window.cancelAnimationFrame(frame);
    const observer = new MutationObserver(() => {
      if (scrollToAnchor()) observer.disconnect();
    });
    observer.observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });
    const timeout = window.setTimeout(() => observer.disconnect(), 8000);
    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [location.key, location.pathname, location.search, location.hash]);

  return null;
}
