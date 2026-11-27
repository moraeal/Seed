// Loaded by the hosted WordPress petition when it is embedded on Seed Voice.
(() => {
  const parentOrigin = "https://seedvoice.kr";
  if (window.parent === window) return;

  function start() {
    const shell = document.querySelector(".shell");
    if (!shell) return;
    let pending = 0;
    let jump;
    function report() {
      pending = 0;
      const height = Math.ceil(shell.getBoundingClientRect().bottom + window.scrollY);
      window.parent.postMessage({ type: "nmt:layout", height, scrollTo: jump }, parentOrigin);
      jump = undefined;
    }
    function schedule(target) {
      if (target) jump = target.getBoundingClientRect().top + window.scrollY;
      if (!pending) pending = requestAnimationFrame(report);
    }
    const observer = new ResizeObserver(() => schedule());
    observer.observe(shell);
    function jumpToHash() {
      const target = document.getElementById(location.hash.slice(1));
      if (target) schedule(target);
    }
    window.addEventListener("hashchange", jumpToHash);
    document.addEventListener("click", event => {
      const link = event.target.closest?.('a[href^="#"]');
      if (link) {
        const target = document.getElementById(link.hash.slice(1));
        if (target) schedule(target);
      }
    });
    document.addEventListener("focusin", event => {
      const dialog = event.target.closest?.("dialog[open]");
      if (dialog && event.target.matches("h2, h3, [autofocus]")) schedule(event.target);
    });
    schedule();
    jumpToHash();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
