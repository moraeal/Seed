import { BarChart3, CheckCircle2, ClipboardList, Images, LogIn, LogOut, MailCheck, MessageCircle, PenLine, UserPlus } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SocialProvider, useAuth } from "../auth";
import { useLanguage } from "../i18n";

export default function Account() {
  const { user, nickname, isVerified, loading, recoveringPassword, signUp, resendVerification, requestPasswordReset, updatePassword, updateNickname, signIn, signOut, socialProviders, socialLoading, authNotice, startSocialLogin } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [kakaoOptIn, setKakaoOptIn] = useState(false);
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [resending, setResending] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [verificationPending, setVerificationPending] = useState(false);

  const [socialBusy, setSocialBusy] = useState<SocialProvider | null>(null);
  const [nicknameDraft, setNicknameDraft] = useState(nickname);
  const [nicknameSaving, setNicknameSaving] = useState(false);
  const [nicknameNotice, setNicknameNotice] = useState("");
  useEffect(() => { setNicknameDraft(nickname); }, [nickname, user?.id]);
  const saveNickname = async (event: FormEvent) => {
    event.preventDefault();
    setNicknameSaving(true);
    setNicknameNotice("");
    try {
      await updateNickname(nicknameDraft);
      setNicknameNotice(ko ? "닉네임을 저장했습니다." : "Nickname saved.");
    } catch (error) {
      setNicknameNotice(error instanceof Error ? error.message : (ko ? "저장하지 못했습니다." : "Could not save."));
    } finally { setNicknameSaving(false); }
  };
  const hasSocialLogin = socialProviders.kakao || socialProviders.google;

  const socialLogin = async (provider: SocialProvider, link = false) => {
    setNotice("");
    setSocialBusy(provider);
    try { await startSocialLogin(provider, link); }
    catch (error) { setNotice(error instanceof Error ? error.message : (ko ? "간편로그인에 실패했습니다." : "Sign-in failed.")); }
    finally { setSocialBusy(null); }
  };

  const socialButtons = (link = false) => (
    <div className="grid gap-3">
      {(["kakao", "google"] as SocialProvider[]).map(provider => {
        const connected = link && user?.identities?.some(identity => identity.provider === provider);
        const label = provider === "kakao" ? (ko ? "카카오" : "Kakao") : (ko ? "구글" : "Google");
        return <button key={provider} type="button" onClick={() => void socialLogin(provider, link)}
          disabled={socialLoading || !socialProviders[provider] || Boolean(socialBusy) || Boolean(connected) || submitting}
          className={`flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-base font-bold transition disabled:cursor-not-allowed disabled:opacity-55 ${provider === "kakao" ? "border-[#FEE500] bg-[#FEE500] text-[#191919]" : "border-charcoal/20 bg-white text-charcoal hover:bg-ivory"}`}>
          {provider === "google" ? (
            <img src={`${import.meta.env.BASE_URL}images/auth/google-logo.png`} width={20} height={20} className="h-5 w-5 shrink-0 object-contain" alt="" aria-hidden="true" />
          ) : (
            <svg viewBox="0 0 24 24" width={20} height={20} className="h-5 w-5 shrink-0" aria-hidden="true" focusable="false">
              <path fill="#000000" d="M12 3C5.924 3 1 6.825 1 11.544c0 3.07 2.078 5.763 5.197 7.27-.17.636-1.094 4.088-1.13 4.36 0 0-.022.18.095.248.116.068.253.015.253.015.335-.047 3.883-2.539 4.497-2.972.678.094 1.376.143 2.088.143 6.076 0 11-3.825 11-8.544C23 6.825 18.076 3 12 3Z" />
            </svg>
          )}
          {socialBusy === provider ? (ko ? "연결 중…" : "Connecting…") : connected ? `${label} ${ko ? "연결됨" : "connected"}` : `${label}${ko ? (link ? " 계정 연결" : "로 시작하기") : (link ? " — connect account" : " — continue")}`}
          {!connected && !socialProviders[provider] && <span className="text-sm font-normal">{socialLoading ? (ko ? "확인 중" : "Checking") : (ko ? "준비 중" : "Coming soon")}</span>}
        </button>;
      })}
    </div>
  );

  const returnTo = useMemo(() => searchParams.get("returnTo") || (language === "en" ? "/en/" : "/"), [searchParams, language]);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const changeMode = (next: "login" | "signup") => {
    setNotice("");
    if (next === "login") {
      setNewsletterOptIn(false);
      setKakaoOptIn(false);
      setPhone("");
    }
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("mode", next);
    setSearchParams(nextParams, { replace: true });
  };

  const resend = async () => {
    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      setNotice(ko ? "인증메일을 받을 이메일 주소를 먼저 입력해주세요." : "Enter the email address that should receive the verification message.");
      return;
    }

    setResending(true);
    setNotice("");
    try {
      await resendVerification(normalizedEmail);
      setNotice(ko
        ? "구독신청 후 아직 인증하지 않은 주소라면 인증메일을 다시 보냈습니다. 받은편지함과 스팸함을 확인해주세요."
        : "If this address belongs to an unverified account, we sent a new verification email. Please check your inbox and spam folder.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "인증메일 재발송 중 오류가 발생했습니다." : "We could not resend the verification email."));
    } finally {
      setResending(false);
    }
  };

  const requestReset = async () => {
    if (!email.trim()) return setNotice(ko ? "비밀번호를 재설정할 이메일 주소를 입력해주세요." : "Enter your email address first.");
    setResetting(true);
    setNotice("");
    try {
      await requestPasswordReset(email);
      setNotice(ko ? "계정이 있다면 비밀번호 재설정 메일이 발송됩니다. 받은편지함과 스팸함을 확인해주세요." : "If an account exists, a password reset email will arrive. Check your inbox and spam folder.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "메일을 보내지 못했습니다." : "Could not send the email."));
    } finally {
      setResetting(false);
    }
  };

  const submitNewPassword = async (event: FormEvent) => {
    event.preventDefault();
    if (password.length < 8) return setNotice(ko ? "새 비밀번호는 8자 이상으로 설정해주세요." : "Use at least 8 characters.");
    setSubmitting(true);
    setNotice("");
    try {
      await updatePassword(password);
      setPassword("");
      setNotice(ko ? "비밀번호를 변경했습니다. 이제 새 비밀번호로 로그인할 수 있습니다." : "Password updated. You can now log in with the new password.");
    } catch (error) {
      setNotice(error instanceof Error ? error.message : (ko ? "비밀번호 변경에 실패했습니다." : "Could not update the password."));
    } finally {
      setSubmitting(false);
    }
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setNotice("");
    if (mode === "signup" && password.length < 8) return setNotice(ko ? "비밀번호는 8자 이상으로 설정해주세요." : "Password must be at least 8 characters.");
    if (mode === "signup" && name.trim().length < 2) return setNotice(ko ? "닉네임은 두 글자 이상 입력해주세요." : "Nickname must be at least 2 characters.");
    if (mode === "signup" && kakaoOptIn && !/^010-\d{4}-\d{4}$/.test(phone)) return setNotice(ko ? "카카오톡 수신을 위해 휴대전화 번호를 010-0000-0000 형식으로 입력해주세요." : "Enter a valid Korean mobile number for KakaoTalk delivery.");
    if (mode === "signup" && !newsletterOptIn) return setNotice(ko ? "구독신청과 이메일 수신에 동의해주세요." : "Please agree to subscribe and receive email updates.");

    setSubmitting(true);
    try {
      if (mode === "signup") {
        const normalizedEmail = email.trim();
        const result = await signUp(normalizedEmail, password, name.trim(), kakaoOptIn ? phone : "", kakaoOptIn ? ["kakao"] : [], language);
        if (result.verificationRequired) {
          setVerificationPending(true);
          setNotice(ko
            ? "구독 확인 메일을 보냈습니다. 이메일의 인증 링크를 누르면 로그인할 수 있습니다. 메일이 보이지 않으면 아래의 인증메일 다시 보내기를 이용해주세요."
            : "We sent a confirmation email. Follow the link to log in. If the message does not arrive, use the resend button below.");
          const nextParams = new URLSearchParams(searchParams);
          nextParams.set("mode", "login");
          setSearchParams(nextParams, { replace: true });
          setNewsletterOptIn(false);
        } else {
          navigate(returnTo);
        }
      } else {
        await signIn(email.trim(), password);
        navigate(returnTo);
      }
    } catch (error) {
      if (mode === "login" && error instanceof Error && /email not confirmed|이메일 인증/i.test(error.message)) setVerificationPending(true);
      setNotice(error instanceof Error ? error.message : (ko ? "처리 중 오류가 발생했습니다." : "An error occurred."));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="container-page py-24 text-center text-sm text-charcoal/50">{ko ? "회원 정보를 확인하는 중입니다." : "Checking your account…"}</div>;

  if (recoveringPassword && user) return (
    <section className="min-h-[65vh] bg-ivory py-14"><div className="container-page max-w-md rounded-xl bg-white p-8 shadow-soft">
      <h1 className="editorial-title text-3xl font-bold text-navy">{ko ? "새 비밀번호 설정" : "Set a new password"}</h1>
      <form onSubmit={submitNewPassword} className="mt-7">
        <label className="field"><span>{ko ? "새 비밀번호" : "New password"}</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} autoComplete="new-password" required /></label>
        <button className="button-primary mt-5 w-full justify-center" type="submit" disabled={submitting}>{ko ? "비밀번호 변경" : "Update password"}</button>
      </form>
      {notice && <p className="mt-4 text-sm" role="status">{notice}</p>}
    </div></section>
  );

  if (user) {
    return (
      <section className="min-h-[65vh] bg-ivory py-14 sm:py-20">
        <div className="container-page max-w-3xl">
          <span className="section-kicker">SEED MEMBER</span>
          <h1 className="editorial-title mt-4 text-4xl font-bold text-navy sm:text-5xl">{ko ? "내 계정" : "My Account"}</h1>
          <div className="mt-8 rounded-xl border border-green-deep/15 bg-white p-7 shadow-soft sm:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-extrabold text-navy">{nickname}</h2>
              {isVerified && <span className="inline-flex items-center gap-1 rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep"><CheckCircle2 size={14}/>{ko ? "이메일 인증회원" : "Email verified"}</span>}
            </div>
            <p className="mt-3 text-sm text-charcoal/55">{user.email}</p>
            <form onSubmit={saveNickname} className="mt-6 rounded-lg bg-green-pale/40 p-4">
              <label htmlFor="member-nickname" className="block text-sm font-bold text-navy">{ko ? "닉네임 변경" : "Change nickname"}</label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input id="member-nickname" value={nicknameDraft} onChange={event => { setNicknameDraft(event.target.value); setNicknameNotice(""); }} disabled={nicknameSaving} required className="min-w-0 flex-1 rounded-lg border border-charcoal/20 bg-white px-3 py-3 text-base text-charcoal" aria-describedby="nickname-help" autoComplete="nickname" />
                <button type="submit" disabled={nicknameSaving || !nicknameDraft.trim() || nicknameDraft.trim() === nickname} className="button-primary justify-center disabled:cursor-not-allowed disabled:opacity-55">{nicknameSaving ? (ko ? "저장 중…" : "Saving…") : (ko ? "닉네임 저장" : "Save nickname")}</button>
              </div>
              <p id="nickname-help" className="mt-2 text-sm leading-6 text-charcoal/60">{ko ? "2~30자로 입력하세요. 다른 회원이 사용하는 닉네임은 선택할 수 없습니다." : "Use 2–30 characters. Choose a nickname that is not already in use."}</p>
              {nicknameNotice && <p role="status" className="mt-2 text-sm leading-6 text-green-deep">{nicknameNotice}</p>}
            </form>
            <p className="mt-6 text-sm leading-7 text-charcoal/65">{ko ? "인증회원은 씨드의 뉴스·브리핑·칼럼·감시·제안·실험·아카데미에 댓글을 남기고 공론장 토론에 참여할 수 있습니다. 화면에는 실명 대신 씨앗용 닉네임이 표시됩니다." : "Verified members can comment on SEED news, briefings, columns, civic watch, proposals, experiments and academy content and take part in the public forum. Your chosen nickname, not your legal name, is shown publicly."}</p>
            <div className="mt-7 border-t border-green-deep/10 pt-6">
              <h3 className="text-lg font-bold text-navy">{ko ? "간편로그인 연결" : "Connect a sign-in account"}</h3>
              <p className="mb-4 mt-2 text-sm leading-7 text-charcoal/65">{ko ? "기존 회원정보를 유지하면서 구글·카카오 계정을 연결할 수 있습니다. 다음부터는 연결한 계정으로 로그인하세요." : "Connect Google or Kakao while keeping your existing membership. Use that account to sign in next time."}</p>
              {socialButtons(true)}
              {(notice || authNotice) && <p className="mt-4 text-sm leading-6" role="status">{notice || authNotice}</p>}
            </div>
            <button type="button" onClick={() => void signOut()} className="button-secondary mt-7"><LogOut size={16}/>{ko ? "로그아웃" : "Log out"}</button>
            {(user.app_metadata?.seed_role === "author" || user.app_metadata?.seed_role === "owner") && <Link to="/writer" className="button-primary ml-3 mt-7"><PenLine size={16}/>{ko ? "필자 집필실" : "Writers' room"}</Link>}
            {user.app_metadata?.seed_role === "owner" && <Link to="/insights" className="button-primary ml-3 mt-7"><BarChart3 size={16}/>{ko ? "구독·콘텐츠 통계" : "Subscriptions & content"}</Link>}
            {user.app_metadata?.seed_role === "owner" && <Link to="/insights/images" className="button-primary ml-3 mt-7"><Images size={16}/>{ko ? "이미지 보관함" : "Image archive"}</Link>}
            {user.app_metadata?.seed_role === "owner" && <Link to="/insights/editorial" className="button-primary ml-3 mt-7"><ClipboardList size={16}/>{ko ? "편집부 원고함" : "Editorial desk"}</Link>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[70vh] bg-ivory py-12 sm:py-18">
      <div className="container-page grid max-w-5xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <div className="pt-5">
          <span className="section-kicker">SEED MEMBER</span>
          <h1 className="editorial-title mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">{ko ? "씨앗의 소리를 구독하세요" : "Subscribe to SEED VOICE"}</h1>
          <p className="mt-6 text-base leading-8 text-charcoal/65">{ko ? "익숙한 계정으로 간편하게 시작하세요. 기존 회원은 이메일과 비밀번호로도 로그인할 수 있습니다." : "Start with an account you already use. Existing members can still sign in with email and password."}</p>
          <div className="mt-7 flex items-start gap-3 rounded-lg border border-green-deep/10 bg-green-pale/55 p-4 text-sm leading-7 text-charcoal/65"><MailCheck className="mt-1 shrink-0 text-green-mid" size={20}/>{ko ? "기존 회원이라면 이메일로 먼저 로그인한 뒤 내 계정에서 간편로그인을 연결하세요. 구글·카카오 이메일이 달라도 기존 회원정보를 유지할 수 있습니다." : "Already a member? Sign in by email, then connect Google or Kakao in My Account to keep your existing membership, even if the email addresses differ."}</div>
        </div>

        <div className="rounded-xl border border-green-deep/15 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid grid-cols-2 rounded-lg bg-[#F1F2EC] p-1">
            <button type="button" onClick={() => changeMode("login")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "login" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "로그인" : "Log in"}</button>
            <button type="button" onClick={() => changeMode("signup")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "signup" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "구독신청" : "Subscribe"}</button>
          </div>

          <div className="mt-6">{socialButtons()}</div>
          {hasSocialLogin && <p className="mt-3 text-sm leading-6 text-charcoal/60">{ko ? "처음 이용하면 계정이 만들어집니다. 별도 비밀번호 없이 가입·로그인할 수 있습니다." : "Your first sign-in creates an account. No separate password is needed."}</p>}
          {!hasSocialLogin && !socialLoading && <p className="mt-3 text-sm leading-6 text-charcoal/60">{ko ? "간편로그인은 준비 중입니다. 이메일 가입·로그인을 이용해주세요." : "Social sign-in is coming soon. Please use email for now."}</p>}
          {authNotice && <p className="mt-4 rounded-lg bg-gold/10 p-4 text-sm leading-6" role="status">{authNotice}</p>}
          <details key={`${mode}-${hasSocialLogin}`} open={!hasSocialLogin} className="mt-6 border-t border-green-deep/10 pt-5">
            <summary className="cursor-pointer text-base font-bold text-green-deep">{ko ? (mode === "signup" ? "이메일로 가입하기" : "이메일로 로그인하기") : (mode === "signup" ? "Sign up with email" : "Sign in with email")}</summary>
          <form onSubmit={submit} className="mt-5">
            <label className="field"><span>{ko ? "이메일" : "Email"}</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required /></label>
            {mode === "signup" && <label className="field mt-4"><span>{ko ? "닉네임" : "Nickname"}</span><input value={name} onChange={(event) => setName(event.target.value)} maxLength={30} placeholder={ko ? "씨앗시민" : "SeedCitizen"} autoComplete="nickname" required /></label>}
            <label className="field mt-4"><span>{ko ? "비밀번호" : "Password"}</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={mode === "signup" ? 8 : undefined} placeholder={mode === "signup" ? (ko ? "8자 이상" : "8+ characters") : undefined} autoComplete={mode === "signup" ? "new-password" : "current-password"} required /></label>

            {mode === "signup" && (
              <div className="mt-5">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={newsletterOptIn}
                    onChange={(event) => setNewsletterOptIn(event.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-green-deep"
                    required
                  />
                  <span>
                    <span className="block text-sm font-extrabold text-navy">{ko ? "구독신청 및 이메일 수신에 동의합니다" : "I agree to subscribe and receive emails"}</span>
                    <span className="mt-1 block text-xs leading-5 text-charcoal/55">{ko ? "수집 항목: 이메일·닉네임. 이용 목적: 로그인 및 새 콘텐츠 알림. 보유 기간: 구독 철회 시까지. 수신 철회: seedvoicekr@gmail.com" : "Data: email and nickname. Purpose: login and new-content notices. Retention: until you unsubscribe. Contact: seedvoicekr@gmail.com"}</span>
                  </span>
                </label>
              </div>
            )}

            {mode === "signup" && (
              <div className="mt-5 border-t border-green-deep/10 pt-5">
                <label className="flex cursor-pointer items-center gap-2 text-sm font-bold text-navy"><input type="checkbox" checked={kakaoOptIn} onChange={(event) => { setKakaoOptIn(event.target.checked); if (!event.target.checked) setPhone(""); }} className="h-4 w-4 accent-green-deep" /><MessageCircle size={17}/>{ko ? "카카오톡으로도 소식 받기 (선택)" : "Receive KakaoTalk updates too (optional)"}</label>
                {kakaoOptIn && <label className="field mt-4"><span>{ko ? "휴대전화 번호" : "Mobile number"}</span><input type="tel" value={phone} onChange={(event) => setPhone(formatPhone(event.target.value))} placeholder="010-0000-0000" autoComplete="tel-national" inputMode="numeric" maxLength={13} pattern="010-[0-9]{4}-[0-9]{4}" required /><small className="font-normal leading-5 text-charcoal/45">{ko ? "카카오톡 소식 수신을 위해 번호를 수집합니다. 구독 철회 시까지 보관하며, 수신 철회는 seedvoicekr@gmail.com으로 요청할 수 있습니다." : "We collect this number for KakaoTalk updates and keep it until you unsubscribe. To opt out, contact seedvoicekr@gmail.com."}</small></label>}
              </div>
            )}

            <button className="button-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-45" type="submit" disabled={submitting || resending || (mode === "signup" && (!newsletterOptIn || (kakaoOptIn && !/^010-\d{4}-\d{4}$/.test(phone))))}>{mode === "signup" ? <UserPlus size={16}/> : <LogIn size={16}/>} {submitting ? (ko ? "처리 중" : "Processing") : mode === "signup" ? (ko ? "구독 신청하기" : "Subscribe") : (ko ? "로그인" : "Log in")}</button>
            {mode === "login" && email.trim() && (
              <div className="mt-3 grid gap-2">
                <button className="button-secondary w-full justify-center disabled:opacity-45" type="button" onClick={() => void requestReset()} disabled={submitting || resetting || resending}>{resetting ? (ko ? "메일 보내는 중" : "Sending") : (ko ? "비밀번호 재설정 메일 받기" : "Reset password")}</button>
                {verificationPending && <button className="text-sm font-semibold text-green-deep underline disabled:opacity-45" type="button" onClick={() => void resend()} disabled={submitting || resending || resetting}>
                  <MailCheck size={16} className="mr-1 inline"/>{resending ? (ko ? "인증메일 보내는 중" : "Sending verification email") : (ko ? "가입 인증메일 다시 보내기" : "Resend signup confirmation")}
                </button>}
              </div>
            )}

          </form>
          </details>
            {notice && <p className="mt-4 rounded-lg bg-gold/10 px-4 py-3 text-sm font-semibold leading-6 text-charcoal/70" role="status">{notice}</p>}
        </div>
      </div>
    </section>
  );
}
