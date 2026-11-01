// Static article registries travel in the application bundle. Live database
// polling alone cannot update an already-open homepage after a publication.
export function watchHomePublication() {
  const entry = document.querySelector<HTMLScriptElement>('script[type="module"][src]')?.src;
  if (!entry || !new URL(entry).pathname.startsWith("/assets/")) return () => {};
  let active = true;
  let pending = false;
  let reloading = false;
  const controller = new AbortController();
  const refresh = async () => {
    if (!active || pending || reloading || document.visibilityState !== "visible") return;
    pending = true;
    try {
      const response = await fetch(`/publication-version.json?t=${Date.now()}`, {
        cache: "no-store", signal: AbortSignal.any([controller.signal, AbortSignal.timeout(10_000)]),
      });
      if (!response.ok) return;
      const version: unknown = await response.json();
      if (!active || !version || typeof version !== "object" || !("entry" in version) || typeof version.entry !== "string") return;
      // Accept only the same site's hashed application bundle, never a redirect.
      if (!/^\/assets\/[\w.-]+\.js$/.test(version.entry)) return;
      if (new URL(version.entry, window.location.origin).href === entry) return;
      if (document.visibilityState !== "visible") return;
      reloading = true;
      const url = new URL(window.location.href);
      // Bypass the ten-minute Pages HTML cache; startup removes this marker.
      url.searchParams.set("seed-reload", String(Date.now()));
      window.location.replace(url.href);
    } catch { /* Offline/error responses preserve the current working page. */ }
    finally { pending = false; }
  };
  void refresh();
  const timer = window.setInterval(refresh, 60_000);
  window.addEventListener("focus", refresh);
  document.addEventListener("visibilitychange", refresh);
  return () => {
    active = false;
    controller.abort();
    window.clearInterval(timer);
    window.removeEventListener("focus", refresh);
    document.removeEventListener("visibilitychange", refresh);
  };
}
