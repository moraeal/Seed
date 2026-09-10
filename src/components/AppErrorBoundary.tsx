import { Component, type ErrorInfo, type ReactNode } from "react";

declare global {
  interface Window {
    __seedRecover?: () => boolean;
  }
}

type Props = { children: ReactNode };
type State = { error: Error | null };

const isStaleAssetError = (error: Error) => /(?:dynamically imported module|module script|loading chunk|chunkloaderror|failed to fetch)/i.test(error.message);

export default class AppErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("SEED application error", error, info);
    if (isStaleAssetError(error)) window.__seedRecover?.();
  }

  render() {
    if (!this.state.error) return this.props.children;

    const english = document.documentElement.lang.toLowerCase().startsWith("en");
    return (
      <main className="min-h-screen bg-paper px-6 py-20 text-charcoal" role="alert">
        <div className="mx-auto max-w-xl border border-green-deep/20 bg-white p-8 text-center shadow-sm">
          <p className="text-xs font-black tracking-[.14em] text-green-deep">SEED VOICE</p>
          <h1 className="mt-4 text-2xl font-black text-navy">
            {english ? "We couldn't finish loading this page." : "화면을 불러오지 못했습니다."}
          </h1>
          <p className="mt-3 text-sm leading-7 text-charcoal/65">
            {english
              ? "The site may have been updated while this page was opening. Please try once more."
              : "페이지를 여는 동안 사이트가 새로 배포되었을 수 있습니다. 아래 버튼을 한 번 눌러주세요."}
          </p>
          <button type="button" className="button-primary mt-6" onClick={() => window.__seedRecover?.() || window.location.reload()}>
            {english ? "Load the latest page" : "최신 화면 다시 불러오기"}
          </button>
        </div>
      </main>
    );
  }
}
