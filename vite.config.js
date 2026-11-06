import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const supabaseUrl = (process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
  const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || env.VITE_SUPABASE_PUBLISHABLE_KEY
    || process.env.VITE_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";
  // Only public browser credentials belong in this script. Escape '<' so a
  // configuration value cannot terminate the inline script element.
  const config = JSON.stringify({ url: `${supabaseUrl}/rest/v1/homepage_featured_content?slot=eq.primary&select=content_path&limit=1`, key: supabaseKey }).replace(/</g, "\\u003c");
  return {
  base: "/",
  server: { allowedHosts: ["terminal.local"] },
  plugins: [react(), {
    name: "homepage-featured-early-request",
    transformIndexHtml: {
      order: "pre",
      handler() {
        return [{ tag: "script", injectTo: "head-prepend", children: `
          (function () {
            if (!/^\\/(?:en\\/?)?$/.test(location.pathname)) return;
            var config = ${config};
            var promise = fetch(config.url, {
              headers: { apikey: config.key, Authorization: 'Bearer ' + config.key, 'Content-Type': 'application/json' },
              signal: AbortSignal.timeout(10000), cache: 'no-store'
            }).then(function (response) { return { response: response }; }, function (error) { return { error: error }; });
            window.__seedFeaturedRequest = { url: config.url, promise: promise };
          })();` }];
      },
    },
  }, {
    name: "homepage-publication-version",
    apply: "build",
    generateBundle(_options, bundle) {
      const entry = Object.values(bundle).find((file) => file.type === "chunk" && file.isEntry && file.facadeModuleId?.endsWith("/index.html"));
      if (!entry) throw new Error("Missing publication entry bundle");
      this.emitFile({ type: "asset", fileName: "publication-version.json", source: JSON.stringify({ entry: `/${entry.fileName}` }) });
    },
  }],
  };
});
