import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppErrorBoundary from "./components/AppErrorBoundary";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppErrorBoundary>
  </StrictMode>,
);

// A successful startup clears the temporary cache-busting marker.
window.setTimeout(() => {
  const url = new URL(window.location.href);
  if (!url.searchParams.has("kumepume-reload")) return;
  url.searchParams.delete("kumepume-reload");
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
}, 5000);
