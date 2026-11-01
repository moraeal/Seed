import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  server: { allowedHosts: ["terminal.local"] },
  plugins: [react(), {
    name: "homepage-publication-version",
    apply: "build",
    generateBundle(_options, bundle) {
      const entry = Object.values(bundle).find((file) => file.type === "chunk" && file.isEntry && file.facadeModuleId?.endsWith("/index.html"));
      if (!entry) throw new Error("Missing publication entry bundle");
      this.emitFile({ type: "asset", fileName: "publication-version.json", source: JSON.stringify({ entry: `/${entry.fileName}` }) });
    },
  }],
});
