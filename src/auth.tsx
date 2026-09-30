import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from "react";
import { getTurnstileToken } from "./lib/turnstile";

export type SocialProvider = "google" | "kakao";

export type AuthUser = {
  id: string;
  email?: string;
  identities?: { provider: string }[];
  email_confirmed_at?: string | null;
  app_metadata?: { seed_role?: string; [key: string]: unknown };
  user_metadata?: { nickname?: string; [key: string]: unknown };
};

export type AuthSession = {
  access_token: string;
  refresh_token: string;
  expires_in?: number;
  expires_at?: number;
  token_type?: string;
  user: AuthUser;
};

type AuthContextValue = {
  session: AuthSession | null;
  user: AuthUser | null;
  nickname: string;
  isVerified: boolean;
  loading: boolean;
  recoveringPassword: boolean;
  getValidAccessToken: () => Promise<string | null>;
  isNicknameAvailable: (nickname: string) => Promise<boolean>;
  updateNickname: (nickname: string) => Promise<void>;
  signUp: (email: string, password: string, nickname: string, phone: string, socialPreferences: string[], language: "ko" | "en") => Promise<{ verificationRequired: boolean }>;
  resendVerification: (email: string) => Promise<void>;
  requestPasswordReset: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  socialProviders: Record<SocialProvider, boolean>;
  socialLoading: boolean;
  authNotice: string;
  startSocialLogin: (provider: SocialProvider, link?: boolean) => Promise<void>;
};

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL || "https://wajlmbahjyazkftwaeem.supabase.co").replace(/\/$/, "");
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
  || import.meta.env.VITE_SUPABASE_ANON_KEY
  || "sb_publishable_gf96jsxTYvTeAzOL1AsBIA_fs4RlDje";
const STORAGE_KEY = "seed-auth-session";

const AuthContext = createContext<AuthContextValue | null>(null);

const authHeaders = (token?: string) => ({
  apikey: supabaseKey,
  "Content-Type": "application/json",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

async function readError(response: Response, fallback: string) {
  try {
    const data = await response.json();
    return data.msg || data.message || data.error_description || data.error || fallback;
  } catch {
    return fallback;
  }
}

async function securityToken(action: "signup" | "login" | "resend" | "recover") {
  try {
    return await getTurnstileToken(action);
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    const english = document.documentElement.lang.toLowerCase().startsWith("en");
    throw new Error(english
      ? "Security verification failed. Please try again."
      : "보안 확인에 실패했습니다. 잠시 후 다시 시도해주세요.");
  }
}

function normalizeSession(raw: AuthSession): AuthSession {
  if (!raw.expires_at && raw.expires_in) {
    return { ...raw, expires_at: Math.floor(Date.now() / 1000) + raw.expires_in };
  }
  return raw;
}

function saveSession(session: AuthSession | null) {
  try {
    if (!session) localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    // Keep the public site usable when a browser blocks local storage.
  }
}

async function getUser(accessToken: string): Promise<AuthUser> {
  const response = await fetch(`${supabaseUrl}/auth/v1/user`, { headers: authHeaders(accessToken) });
  if (!response.ok) throw new Error(await readError(response, "회원 정보를 확인하지 못했습니다."));
  return response.json();
}

async function refreshSession(refreshToken: string): Promise<AuthSession> {
  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  if (!response.ok) throw new Error(await readError(response, "로그인 세션이 만료되었습니다."));
  return normalizeSession(await response.json());
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [recoveringPassword, setRecoveringPassword] = useState(false);
  const [socialProviders, setSocialProviders] = useState<Record<SocialProvider, boolean>>({ google: false, kakao: false });
  const [socialLoading, setSocialLoading] = useState(true);
  const [authNotice, setAuthNotice] = useState("");
  const initializing = useRef(false);
  const pendingRefresh = useRef<Promise<AuthSession> | null>(null);

  const applySession = (next: AuthSession | null) => {
    setSession(next);
    saveSession(next);
  };

  useEffect(() => {
    if (initializing.current) return;
    initializing.current = true;
    const initialize = async () => {
      try {
        const currentUrl = new URL(window.location.href);
        const params = currentUrl.searchParams;
        const callbackHash = new URLSearchParams(currentUrl.hash.slice(1));
        const code = params.get("code");
        const oauthError = params.get("error") || callbackHash.get("error");
        if (code || oauthError) {
          const pendingRaw = sessionStorage.getItem("seed-social-pending");
          sessionStorage.removeItem("seed-social-pending");
          ["code", "error", "error_code", "error_description"].forEach(key => params.delete(key));
          currentUrl.hash = "";
          window.history.replaceState({}, document.title, `${currentUrl.pathname}${currentUrl.search}`);
          try {
            if (oauthError) throw new Error("간편로그인이 취소되었거나 완료되지 않았습니다. 다시 시도해주세요. / Sign-in was cancelled or could not be completed.");
            const pending = pendingRaw ? JSON.parse(pendingRaw) : null;
            if (!pending || Date.now() - pending.createdAt > 10 * 60 * 1000) throw new Error("로그인 요청이 만료되었습니다. 다시 시도해주세요. / Please start sign-in again.");
            const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=pkce`, {
              method: "POST", headers: authHeaders(),
              body: JSON.stringify({ auth_code: code, code_verifier: pending.verifier }),
            });
            if (!response.ok) throw new Error(await readError(response, "간편로그인에 실패했습니다. / Sign-in failed."));
            const next = normalizeSession(await response.json());
            next.user = await getUser(next.access_token);
            if (pending.userId && pending.userId !== next.user.id) throw new Error("기존 계정에 연결하지 못했습니다. 기존 로그인으로 다시 접속해주세요. / Could not link to your existing account.");
            applySession(next);
            if (!pending.userId) window.location.replace(`${import.meta.env.BASE_URL}${pending.language === "en" ? "en/" : ""}`);
            else setAuthNotice("간편로그인 계정을 연결했습니다. / Your sign-in account is connected.");
            return;
          } catch (error) {
            setAuthNotice(error instanceof Error ? error.message : "간편로그인에 실패했습니다. / Sign-in failed.");
          }
        }
        const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
        const hashAccess = hash.get("access_token");
        const hashRefresh = hash.get("refresh_token");

        if (hashAccess && hashRefresh) {
          const user = await getUser(hashAccess);
          const expiresIn = Number(hash.get("expires_in") || "3600");
          applySession(normalizeSession({ access_token: hashAccess, refresh_token: hashRefresh, expires_in: expiresIn, token_type: hash.get("token_type") || "bearer", user }));
          setRecoveringPassword(hash.get("type") === "recovery");
          window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
          return;
        }

        let stored: string | null = null;
        try {
          stored = localStorage.getItem(STORAGE_KEY);
        } catch {
          // Authentication remains signed out when storage is unavailable.
        }
        if (!stored) return;
        let parsed = JSON.parse(stored) as AuthSession;
        const now = Math.floor(Date.now() / 1000);
        if (parsed.expires_at && parsed.expires_at < now + 60) parsed = await refreshSession(parsed.refresh_token);
        else parsed = { ...parsed, user: await getUser(parsed.access_token) };
        applySession(parsed);
      } catch {
        applySession(null);
      } finally {
        setLoading(false);
      }
    };
    void initialize();
  }, []);

  useEffect(() => {
    let active = true;
    fetch(`${supabaseUrl}/auth/v1/settings`, { headers: authHeaders() })
      .then(async response => {
        if (!response.ok) throw new Error("settings unavailable");
        const data = await response.json();
        if (active) setSocialProviders({ google: data.external?.google === true, kakao: data.external?.kakao === true });
      })
      .catch(() => { /* Email login remains available when provider settings cannot be loaded. */ })
      .finally(() => { if (active) setSocialLoading(false); });
    return () => { active = false; };
  }, []);

  const getValidAccessToken = async (): Promise<string | null> => {
    if (!session) return null;
    const now = Math.floor(Date.now() / 1000);
    if (!session.expires_at || session.expires_at > now + 60) return session.access_token;
    if (!pendingRefresh.current) {
      pendingRefresh.current = refreshSession(session.refresh_token)
        .finally(() => { pendingRefresh.current = null; });
    }
    try {
      const next = await pendingRefresh.current;
      applySession(next);
      return next.access_token;
    } catch {
      applySession(null);
      return null;
    }
  };

  const startSocialLogin = async (provider: SocialProvider, link = false) => {
    if (!socialProviders[provider]) throw new Error("아직 준비 중인 로그인 방법입니다. / This sign-in option is not available yet.");
    const token = link ? await getValidAccessToken() : null;
    if (link && !token) throw new Error("기존 계정으로 먼저 로그인해주세요. / Log in to your existing account first.");
    const bytes = crypto.getRandomValues(new Uint8Array(32));
    const verifier = Array.from(bytes, byte => byte.toString(16).padStart(2, "0")).join("");
    const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier));
    const challenge = btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const language = document.documentElement.lang.startsWith("en") ? "en" : "ko";
    // Keep the verifier in this tab; linking never creates or merges a member locally.
    sessionStorage.setItem("seed-social-pending", JSON.stringify({ verifier, createdAt: Date.now(), userId: link ? session?.user.id : null, language }));
    const url = new URL(`${supabaseUrl}/auth/v1/${link ? "user/identities/authorize" : "authorize"}`);
    url.search = new URLSearchParams({ provider, redirect_to: `${window.location.origin}${import.meta.env.BASE_URL}account`, code_challenge: challenge, code_challenge_method: "s256", skip_http_redirect: "true" }).toString();
    try {
      if (!link) {
        // Sign-in is a browser redirect. Fetching it follows the provider
        // redirect across origins and fails CORS before consent can open.
        url.searchParams.delete("skip_http_redirect");
        window.location.assign(url.href);
        return;
      }
      const response = await fetch(url, { headers: authHeaders(token || undefined) });
      if (!response.ok) throw new Error(await readError(response, "간편로그인을 시작하지 못했습니다. / Could not start sign-in."));
      const data = await response.json();
      const destination = new URL(data.url);
      if (destination.protocol !== "https:") throw new Error("Invalid sign-in URL");
      window.location.assign(destination.href);
    } catch (error) {
      sessionStorage.removeItem("seed-social-pending");
      throw error;
    }
  };

  useEffect(() => {
    if (!session?.expires_at) return;
    const delay = Math.max(0, (session.expires_at - Math.floor(Date.now() / 1000) - 60) * 1000);
    const timer = window.setTimeout(() => { void getValidAccessToken(); }, delay);
    return () => window.clearTimeout(timer);
  }, [session?.access_token, session?.expires_at]);

  const isNicknameAvailable = async (nickname: string) => {
    const candidate = nickname.replace(/\s+/g, " ").trim();
    if (candidate.length < 2 || candidate.length > 30) return false;

    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/is_nickname_available`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ candidate }),
    });
    if (!response.ok) throw new Error(await readError(response, "닉네임 중복 여부를 확인하지 못했습니다."));
    return Boolean(await response.json());
  };

  const signUp = async (email: string, password: string, nickname: string, phone: string, socialPreferences: string[], language: "ko" | "en") => {
    const normalizedNickname = nickname.replace(/\s+/g, " ").trim();
    const duplicateNicknameMessage = language === "ko"
      ? "이미 사용 중인 닉네임입니다. 다른 닉네임을 입력해주세요."
      : "That nickname is already in use. Please choose another one.";

    const nicknameAvailable = await isNicknameAvailable(normalizedNickname);
    if (!nicknameAvailable) throw new Error(duplicateNicknameMessage);

    const redirectTo = `${window.location.origin}${import.meta.env.BASE_URL}account`;
    const makePayload = (captchaToken: string | null) => JSON.stringify({
      email,
      password,
      data: {
        nickname: normalizedNickname,
        contact_phone: phone || null,
        content_preferences: ["news", "briefings", "columns"],
        content_delivery_channels: ["email", ...socialPreferences],
        social_preferences: socialPreferences,
        language,
        content_subscription_consent: true,
        content_subscription_consented_at: new Date().toISOString(),
      },
      ...(captchaToken ? { gotrue_meta_security: { captcha_token: captchaToken } } : {}),
    });

    let captchaToken = await securityToken("signup");
    let response = await fetch(`${supabaseUrl}/auth/v1/signup?redirect_to=${encodeURIComponent(redirectTo)}`, {
      method: "POST",
      headers: authHeaders(),
      body: makePayload(captchaToken),
    });

    if (!response.ok) {
      if (captchaToken) captchaToken = await securityToken("signup");
      response = await fetch(`${supabaseUrl}/auth/v1/signup`, {
        method: "POST",
        headers: authHeaders(),
        body: makePayload(captchaToken),
      });
    }
    if (!response.ok) {
      const message = await readError(response, "구독신청에 실패했습니다.");
      try {
        if (!(await isNicknameAvailable(normalizedNickname))) throw new Error(duplicateNicknameMessage);
      } catch (error) {
        if (error instanceof Error && error.message === duplicateNicknameMessage) throw error;
      }
      throw new Error(message);
    }

    const data = await response.json();
    if (data.access_token && data.refresh_token) {
      applySession(normalizeSession(data));
      return { verificationRequired: !data.user?.email_confirmed_at };
    }
    return { verificationRequired: true };
  };

  const resendVerification = async (email: string) => {
    const normalizedEmail = email.trim();
    if (!normalizedEmail) throw new Error("인증메일을 받을 이메일 주소를 입력해주세요.");

    const captchaToken = await securityToken("resend");
    const redirectTo = `${window.location.origin}${import.meta.env.BASE_URL}account`;
    const response = await fetch(`${supabaseUrl}/auth/v1/resend?redirect_to=${encodeURIComponent(redirectTo)}`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({
        type: "signup",
        email: normalizedEmail,
        ...(captchaToken ? { gotrue_meta_security: { captcha_token: captchaToken } } : {}),
      }),
    });
    if (!response.ok) throw new Error(await readError(response, "인증메일 재발송에 실패했습니다."));
  };

  const requestPasswordReset = async (email: string) => {
    const normalizedEmail = email.trim();
    if (!normalizedEmail) throw new Error("이메일 주소를 입력해주세요.");
    const captchaToken = await securityToken("recover");
    const redirectTo = `${window.location.origin}${import.meta.env.BASE_URL}account`;
    const response = await fetch(`${supabaseUrl}/auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ email: normalizedEmail, ...(captchaToken ? { gotrue_meta_security: { captcha_token: captchaToken } } : {}) }),
    });
    if (!response.ok) throw new Error(await readError(response, "비밀번호 재설정 메일을 보내지 못했습니다."));
  };

  const updateNickname = async (nickname: string) => {
    const english = document.documentElement.lang.toLowerCase().startsWith("en");
    const candidate = nickname.replace(/\s+/g, " ").trim();
    if (Array.from(candidate).length < 2 || Array.from(candidate).length > 30) throw new Error(english ? "Use 2–30 characters." : "닉네임은 2~30자로 입력해주세요.");
    const token = await getValidAccessToken();
    if (!token) throw new Error(english ? "Please sign in again." : "다시 로그인해주세요.");
    const current = await getUser(token);
    if (candidate === current.user_metadata?.nickname) return;
    const available = await isNicknameAvailable(candidate);
    if (!available && candidate.toLowerCase() !== current.user_metadata?.nickname?.toLowerCase()) throw new Error(english ? "That nickname is already in use." : "이미 사용 중인 닉네임입니다. 다른 이름을 입력해주세요.");
    const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
      method: "PUT", headers: authHeaders(token), body: JSON.stringify({ data: { nickname: candidate } }),
    });
    if (!response.ok) throw new Error(english ? "Could not save the nickname. It may already be in use. Please try again." : "닉네임을 저장하지 못했습니다. 중복 여부를 확인하고 다시 시도해주세요.");
    const updated: AuthUser = await response.json();
    setSession(previous => {
      if (!previous || previous.user.id !== updated.id) return previous;
      const next = { ...previous, user: updated };
      saveSession(next);
      return next;
    });
  };

  const updatePassword = async (password: string) => {
    if (!session?.access_token) throw new Error("재설정 링크가 만료되었습니다. 메일을 다시 요청해주세요.");
    const response = await fetch(`${supabaseUrl}/auth/v1/user`, {
      method: "PUT",
      headers: authHeaders(session.access_token),
      body: JSON.stringify({ password }),
    });
    if (!response.ok) throw new Error(await readError(response, "비밀번호를 변경하지 못했습니다."));
    setRecoveringPassword(false);
  };

  const signIn = async (email: string, password: string) => {
    const captchaToken = await securityToken("login");
    const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({
        email,
        password,
        ...(captchaToken ? { gotrue_meta_security: { captcha_token: captchaToken } } : {}),
      }),
    });
    if (!response.ok) throw new Error(await readError(response, "이메일 또는 비밀번호를 확인해주세요."));
    const next = normalizeSession(await response.json());
    if (!next.user?.email_confirmed_at) throw new Error("이메일 인증을 먼저 완료해주세요.");
    applySession(next);
  };

  const signOut = async () => {
    if (session?.access_token) {
      try {
        await fetch(`${supabaseUrl}/auth/v1/logout`, { method: "POST", headers: authHeaders(session.access_token) });
      } catch {
        // 로컬 세션은 항상 정리합니다.
      }
    }
    applySession(null);
  };

  const value = useMemo<AuthContextValue>(() => ({
    session,
    user: session?.user ?? null,
    nickname: session?.user?.user_metadata?.nickname?.trim() || (session?.user ? `씨앗${session.user.id.replace(/-/g, "").slice(0, 12)}` : "인증회원"),
    isVerified: Boolean(session?.user?.email_confirmed_at),
    loading,
    recoveringPassword,
    getValidAccessToken,
    isNicknameAvailable,
    updateNickname,
    signUp,
    resendVerification,
    requestPasswordReset,
    updatePassword,
    signIn,
    signOut,
    socialProviders,
    socialLoading,
    authNotice,
    startSocialLogin,
  }), [session, loading, recoveringPassword, socialProviders, socialLoading, authNotice]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
