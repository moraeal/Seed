import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "./auth";
import { LanguageProvider } from "./i18n";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Render the same public components as the browser; effects run only after startup.
export function prerenderHome(path: string) {
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <LanguageProvider>
        <AuthProvider>
          <div className="min-h-screen bg-paper text-charcoal">
            <Header />
            <main><Home /></main>
            <Footer />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </MemoryRouter>,
  );
}
