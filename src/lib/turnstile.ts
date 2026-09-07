type TurnstileOptions = {
  sitekey: string;
  action?: string;
  appearance?: "always" | "execute" | "interaction-only";
  execution?: "render" | "execute";
  size?: "normal" | "compact" | "flexible";
  callback?: (token: string) => void;
  "error-callback"?: (code: string) => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  execute: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const siteKey = (import.meta.env.VITE_TURNSTILE_SITE_KEY || "").trim();
let scriptPromise: Promise<TurnstileApi> | null = null;

export const isTurnstileConfigured = Boolean(siteKey);

function waitForApi(resolve: (api: TurnstileApi) => void, reject: (error: Error) => void, attempts = 0) {
  if (window.turnstile) return resolve(window.turnstile);
  if (attempts > 100) return reject(new Error("turnstile_not_ready"));
  window.setTimeout(() => waitForApi(resolve, reject, attempts + 1), 50);
}

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-seed-turnstile]");
    if (existing) {
      waitForApi(resolve, reject);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.seedTurnstile = "true";
    script.onload = () => waitForApi(resolve, reject);
    script.onerror = () => reject(new Error("turnstile_script_failed"));
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export async function getTurnstileToken(action: "signup" | "newsletter"): Promise<string | null> {
  if (!siteKey) return null;

  const api = await loadTurnstile();
  const container = document.createElement("div");
  container.setAttribute("role", "status");
  container.setAttribute("aria-label", "Security verification");
  Object.assign(container.style, {
    position: "fixed",
    right: "16px",
    bottom: "16px",
    zIndex: "2147483000",
    minWidth: "300px",
  });
  document.body.appendChild(container);

  return new Promise<string>((resolve, reject) => {
    let widgetId = "";
    let settled = false;

    const cleanup = () => {
      if (widgetId) {
        try { api.remove(widgetId); } catch { /* ignore cleanup errors */ }
      }
      container.remove();
    };

    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeoutId);
      cleanup();
      fn();
    };

    const timeoutId = window.setTimeout(() => {
      finish(() => reject(new Error("turnstile_timeout")));
    }, 20000);

    try {
      widgetId = api.render(container, {
        sitekey: siteKey,
        action,
        appearance: "interaction-only",
        execution: "execute",
        size: "normal",
        callback: (token) => finish(() => resolve(token)),
        "error-callback": () => finish(() => reject(new Error("turnstile_failed"))),
        "expired-callback": () => finish(() => reject(new Error("turnstile_expired"))),
        "timeout-callback": () => finish(() => reject(new Error("turnstile_timeout"))),
      });
      api.execute(widgetId);
    } catch {
      finish(() => reject(new Error("turnstile_failed")));
    }
  });
}

export {};
