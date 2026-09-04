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
    window.requestAnimationFrame(() => {
      document.getElementById(anchorId)?.scrollIntoView({ block: "start" });
    });
  }, [location.key, location.pathname, location.search, location.hash]);

  return null;
}

