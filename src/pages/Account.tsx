import { BarChart3, CheckCircle2, Instagram, KeyRound, LogIn, LogOut, MessageCircle, Smartphone, Youtube } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";
import { subscribeToNewsletter } from "../lib/engagement";

const socialChannels = [
  { id: "kakao", labelKo: "카카오톡 채널", labelEn: "KakaoTalk Channel", url: import.meta.env.VITE_KAKAO_CHANNEL_URL || "", Icon: MessageCircle },
  { id: "instagram", labelKo: "인스타그램", labelEn: "Instagram", url: import.meta.env.VITE_INSTAGRAM_URL || "", Icon: Instagram },
  { id: "youtube", labelKo: "유튜브", labelEn: "YouTube", url: import.meta.env.VITE_YOUTUBE_CHANNEL_URL || "", Icon: Youtube },
];

function normalizeKoreanPhone(value: string) {
  const compact = value.trim().replace(/[\s()-]/g, "");
  if (/^010\d{8}$/.test(compact)) return `+82${compact.slice(1)}`;
  if (/^8210\d{8}$/.test(compact)) return `+${compact}`;
  if (/^\+8210\d{8}$/.test(compact)) return compact;
  return "";
}

export default function Account() {
  const { user, nickname, isVerified, loading, requestPhoneOtp, verifyPhoneOtp, signIn, signOut } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [loginMethod, setLoginMethod] = useState<"phone" | "email">("phone");
  const [phoneStep, setPhoneStep] = useState<"request" | "verify">("request");
  const [phone, setPhone] = useState("");
  const [sentPhone, setSentPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const returnTo = useMemo(() => searchParams.get("returnTo") || "/forum", [searchParams]);

  const resetPhoneFlow = () => {
    setPhoneStep("request");
    setSentPhone("");
    setOtp("");
  };

  const changeMode = (next: "login" | "signup") => {
    setMode(next);
    setLoginMethod("phone");
    setNotice("");
    resetPhoneFlow();
    if (next === "login") setNewsletterOptIn(false);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("mode", next);
    setSearchParams(nextParams, { replace: true });
  };

  const submitPhone = async (event: FormEvent) => {
    event.preventDefault();
    setNotice("");

    if (phoneStep === "request") {
      const normalizedPhone = normalizeKoreanPhone(phone);
      if (!normalizedPhone) return setNotice(ko ? "010으로 시작하는 휴대폰 번호를 정확히 입력해주세요." : "Enter a valid Korean mobile number beginning with 010.");
      if (mode === "signup" && name.trim().length < 2) return setNotice(ko ? "닉네임은 두 글자 이상 입력해주세요." : "Nickname must be at least 2 characters.");
      if (mode === "signup" && newsletterOptIn && !email.trim()) return setNotice(ko ? "이메일 수신을 선택하셨습니다. 이메일 주소를 입력해주세요." : "Enter an email address to receive the newsletter.");

      setSubmitting(true);
      try {
        await requestPhoneOtp(normalizedPhone, mode === "signup" ? name.trim() : undefined, mode === "signup");
        setSentPhone(normalizedPhone);
        setPhoneStep("verify");
        setNotice(ko ? "문자로 받은 6자리 인증번호를 입력해주세요." : "Enter the 6-digit code sent by text message.");
      } catch (error) {
        setNotice(error instanceof Error ? error.message : (ko ? "인증번호를 보내지 못했습니다." : "Could not send the verification code."));
      } finally {
        setSubmitting(false);
      }
      return;
    }

    if (!/^\d{6}$/.test(otp)) return setNotice(ko ? "문자로 받은 6자리 인증번호를 입력해주세요." : "Enter the 6-digit verification code.");
    setSubmitting(true);
    try {
      await verifyPhoneOtp(sentPhone, otp);
      if (mode === "signup" && newsletterOptIn) {
        try {
          await subscribeToNewsletter(email.trim(), language, "/account?mode=signup&method=phone");
        } catch {
          // 휴대폰 회원가입 성공은 이메일 구독 저장 실패와 분리합니다.
        }
      }
      navigate(returnTo);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "인증번호를 확인하지 못했습니다." : "Could not verify the code."));
    } finally {
      setSubmitting(false);
    }
  };

  const submitLegacyEmail = async (event: FormEvent) => {
    event.preventDefault();
    setNotice("");
    if (password.length < 8) return setNotice(ko ? "비밀번호는 8자 이상입니다." : "Password must be at least 8 characters.");
    setSubmitting(true);
    try {
      await signIn(email.trim(), password);
      navigate(returnTo);
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "로그인에 실패했습니다." : "Could not log in."));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="container-page py-24 text-center text-sm text-charcoal/50">{ko ? "회원 정보를 확인하는 중입니다." : "Checking your account…"}</div>;

  if (user) {
    const verifiedByPhone = Boolean(user.phone_confirmed_at);
    return (
      <section className="min-h-[65vh] bg-ivory py-14 sm:py-20">
        <div className="container-page max-w-3xl">
          <span className="section-kicker">SEED MEMBER</span>
          <h1 className="editorial-title mt-4 text-4xl font-bold text-navy sm:text-5xl">{ko ? "내 계정" : "My Account"}</h1>
          <div className="mt-8 rounded-xl border border-green-deep/15 bg-white p-7 shadow-soft sm:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-extrabold text-navy">{nickname}</h2>
              {isVerified && <span className="inline-flex items-center gap-1 rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep"><CheckCircle2 size={14}/>{verifiedByPhone ? (ko ? "휴대폰 인증회원" : "Phone verified") : (ko ? "이메일 인증회원" : "Email verified")}</span>}
            </div>
            <p className="mt-3 text-sm text-charcoal/55">{user.phone || user.email}</p>
            <p className="mt-6 text-sm leading-7 text-charcoal/65">{ko ? "인증회원은 씨드 콘텐츠에 댓글을 남기고 공론장 토론에 참여할 수 있습니다. 화면에는 실명 대신 가입 때 정한 닉네임이 표시됩니다." : "Verified members can comment on SEED content and take part in the public forum. Your chosen nickname, not your legal name, is shown publicly."}</p>
            <button type="button" onClick={() => void signOut()} className="button-secondary mt-7"><LogOut size={16}/>{ko ? "로그아웃" : "Log out"}</button>
            {user.app_metadata?.seed_role === "owner" && <Link to="/insights" className="button-primary ml-3 mt-7"><BarChart3 size={16}/>{ko ? "구독·콘텐츠 통계" : "Subscriptions & content"}</Link>}
          </div>
        </div>
      </section>
    );
  }

  const phoneForm = (
    <form onSubmit={submitPhone} className="mt-7">
      {mode === "signup" && phoneStep === "request" && <label className="field"><span>{ko ? "공론장 닉네임" : "Forum nickname"}</span><input value={name} onChange={(event) => setName(event.target.value)} maxLength={30} placeholder={ko ? "씨앗시민" : "SeedCitizen"} autoComplete="nickname" required /></label>}

      {phoneStep === "request" ? (
        <label className={`field ${mode === "signup" ? "mt-4" : ""}`}><span>{ko ? "휴대폰 번호" : "Mobile number"}</span><input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="010-1234-5678" autoComplete="tel" inputMode="tel" required /></label>
      ) : (
        <div>
          <div className="rounded-lg border border-green-deep/10 bg-green-pale/40 px-4 py-3 text-sm text-charcoal/65"><strong className="text-navy">{phone}</strong>{ko ? "로 인증번호를 보냈습니다." : " — verification code sent."}<button type="button" onClick={() => { resetPhoneFlow(); setNotice(""); }} className="ml-2 font-extrabold text-green-deep underline">{ko ? "번호 변경" : "Change"}</button></div>
          <label className="field mt-4"><span>{ko ? "6자리 인증번호" : "6-digit code"}</span><input value={otp} onChange={(event) => setOtp(event.target.value.replace(/\D/g, "").slice(0, 6))} placeholder="000000" autoComplete="one-time-code" inputMode="numeric" maxLength={6} required /></label>
        </div>
      )}

      {mode === "signup" && phoneStep === "request" && (
        <div className="mt-5 rounded-lg border border-green-deep/15 bg-green-pale/35 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" checked={newsletterOptIn} onChange={(event) => setNewsletterOptIn(event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-green-deep" />
            <span>
              <span className="block text-sm font-extrabold text-navy">{ko ? "뉴스레터와 새 콘텐츠를 이메일로 받기 (선택)" : "Receive newsletters and new content by email (optional)"}</span>
              <span className="mt-1 block text-xs leading-5 text-charcoal/55">{ko ? "회원가입과 별개의 선택 동의입니다. 이메일은 구독 철회 시까지 보관합니다." : "This consent is separate from membership. We retain your email until you unsubscribe."}</span>
            </span>
          </label>
          {newsletterOptIn && <label className="field mt-4"><span>{ko ? "뉴스레터 수신 이메일" : "Newsletter email"}</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required /></label>}
        </div>
      )}

      {mode === "signup" && phoneStep === "request" && (
        <div className="mt-5 border-t border-green-deep/10 pt-5">
          <p className="text-sm font-extrabold text-navy">{ko ? "SNS에서도 새 소식 받기 (선택)" : "Follow updates on social media (optional)"}</p>
          <p className="mt-1 text-xs leading-5 text-charcoal/55">{ko ? "원하는 공식 채널을 팔로우하거나 구독할 수 있습니다." : "Follow or subscribe to any official channel you prefer."}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {socialChannels.map(({ id, labelKo, labelEn, url, Icon }) => url ? (
              <a key={id} href={url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-green-deep/15 bg-white px-3 py-3 text-xs font-extrabold text-green-deep transition hover:border-green-mid hover:bg-green-pale/40"><Icon size={17}/>{ko ? labelKo : labelEn}</a>
            ) : (
              <div key={id} className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-charcoal/15 bg-[#F7F7F2] px-3 py-3 text-xs font-bold text-charcoal/35" aria-disabled="true"><Icon size={17}/>{ko ? labelKo : labelEn}</div>
            ))}
          </div>
          {socialChannels.every((channel) => !channel.url) && <p className="mt-2 text-center text-[11px] text-charcoal/40">{ko ? "공식 채널 주소 확인 후 버튼이 활성화됩니다." : "Buttons will activate when official channel links are confirmed."}</p>}
        </div>
      )}

      <button className="button-primary mt-6 w-full justify-center" type="submit" disabled={submitting}>{phoneStep === "request" ? <Smartphone size={16}/> : <KeyRound size={16}/>} {submitting ? (ko ? "처리 중" : "Processing") : phoneStep === "request" ? (ko ? "문자 인증번호 받기" : "Send verification code") : mode === "signup" ? (ko ? "인증하고 회원가입" : "Verify and sign up") : (ko ? "인증하고 로그인" : "Verify and log in")}</button>
      {notice && <p className="mt-4 rounded-lg bg-gold/10 px-4 py-3 text-sm font-semibold leading-6 text-charcoal/70" role="status">{notice}</p>}
    </form>
  );

  return (
    <section className="min-h-[70vh] bg-ivory py-12 sm:py-18">
      <div className="container-page grid max-w-5xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div className="pt-5">
          <span className="section-kicker">SEED MEMBER</span>
          <h1 className="editorial-title mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">{ko ? "휴대폰으로 간편하게 시작하는 인증회원" : "Verified membership, starting with your phone"}</h1>
          <p className="mt-6 text-base leading-8 text-charcoal/65">{ko ? "회원 가입을 하시면 이메일이나 SNS로 뉴스레터와 콘텐츠 구독을 함께 받아 보실 수 있습니다. 회원 가입은 휴대폰 인증을 기본으로 하며 이메일 수신은 선택할 수 있습니다." : "Members can receive newsletters and content updates by email or social media. Phone verification is the default sign-up method, and email subscription is optional."}</p>
          <div className="mt-7 flex items-start gap-3 rounded-lg border border-green-deep/10 bg-green-pale/55 p-4 text-sm leading-7 text-charcoal/65"><Smartphone className="mt-1 shrink-0 text-green-mid" size={20}/>{ko ? "휴대폰으로 받은 6자리 번호를 입력하면 가입이 완료됩니다. 비밀번호를 만들 필요가 없습니다." : "Enter the 6-digit code sent to your phone to complete sign-up. No password is required."}</div>
        </div>

        <div className="rounded-xl border border-green-deep/15 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid grid-cols-2 rounded-lg bg-[#F1F2EC] p-1">
            <button type="button" onClick={() => changeMode("login")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "login" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "로그인" : "Log in"}</button>
            <button type="button" onClick={() => changeMode("signup")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "signup" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "회원가입" : "Sign up"}</button>
          </div>

          {mode === "login" && (
            <div className="mt-5 flex justify-center">
              <button type="button" onClick={() => { setLoginMethod((current) => current === "phone" ? "email" : "phone"); setNotice(""); resetPhoneFlow(); }} className="text-xs font-extrabold text-green-deep underline underline-offset-4">{loginMethod === "phone" ? (ko ? "기존 이메일 회원으로 로그인" : "Log in with an existing email account") : (ko ? "휴대폰 인증으로 로그인" : "Log in with phone verification")}</button>
            </div>
          )}

          {mode === "signup" || loginMethod === "phone" ? phoneForm : (
            <form onSubmit={submitLegacyEmail} className="mt-7">
              <label className="field"><span>{ko ? "이메일" : "Email"}</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required /></label>
              <label className="field mt-4"><span>{ko ? "비밀번호" : "Password"}</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} autoComplete="current-password" required /></label>
              <button className="button-primary mt-6 w-full justify-center" type="submit" disabled={submitting}><LogIn size={16}/>{submitting ? (ko ? "처리 중" : "Processing") : (ko ? "이메일로 로그인" : "Log in with email")}</button>
              {notice && <p className="mt-4 rounded-lg bg-gold/10 px-4 py-3 text-sm font-semibold leading-6 text-charcoal/70" role="status">{notice}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
