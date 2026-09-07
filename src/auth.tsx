import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { getTurnstileToken } from "./lib/turnstile";

export type AuthUser = {
  id: string;
  email?: string;
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
  isNicknameAvailable: (nickname: string) => Promise<boolean>;
  signUp: (email: string, password: string, nickname: string, phone: string, socialPreferences: string[], language: "ko" | "en") => Promise<{ verificationRequired: boolean }>;
  resendVerification: (email: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
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

async function securityToken(action: "signup" | "login" | "resend") {
  try {
    return await getTurnstileToken(action);
  } catch {
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
  if (!session) localStorage.removeItem(STORAGE_KEY);
  else localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
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

  const applySession = (next: AuthSession | null) => {
    setSession(next);
    saveSession(next);
  };

  useEffect(() => {
    const initialize = async () => {
      try {
        const hash = new URLSearchParams(window.location.hash.replace(/^#/, ""));
        const hashAccess = hash.get("access_token");
        const hashRefresh = hash.get("refresh_token");

        if (hashAccess && hashRefresh) {
          const user = await getUser(hashAccess);
          const expiresIn = Number(hash.get("expires_in") || "3600");
          applySession(normalizeSession({ access_token: hashAccess, refresh_token: hashRefresh, expires_in: expiresIn, token_type: hash.get("token_type") || "bearer", user }));
          window.history.replaceState({}, document.title, `${window.location.pathname}${window.location.search}`);
          return;
        }

        const stored = localStorage.getItem(STORAGE_KEY);
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
      const message = await readError(response, "회원가입에 실패했습니다.");
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
    nickname: session?.user?.user_metadata?.nickname?.trim() || session?.user?.email?.split("@")[0] || "인증회원",
    isVerified: Boolean(session?.user?.email_confirmed_at),
    loading,
    isNicknameAvailable,
    signUp,
    resendVerification,
    signIn,
    signOut,
  }), [session, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
