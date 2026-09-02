import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

// 기존 #/주소로 공유된 링크도 새 검색 친화 주소로 계속 열립니다.
if (window.location.hash.startsWith("#/")) {
  const legacyPath = window.location.hash.slice(1);
  window.history.replaceState({}, "", `${legacyPath}${window.location.search}`);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
