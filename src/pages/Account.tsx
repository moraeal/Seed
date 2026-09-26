import { BarChart3, CheckCircle2, ClipboardList, LogIn, LogOut, MailCheck, MessageCircle, PenLine, UserPlus } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";

export default function Account() {
  const { user, nickname, isVerified, loading, signUp, resendVerification, signIn, signOut } = useAuth();
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

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setNotice("");
    if (password.length < 8) return setNotice(ko ? "비밀번호는 8자 이상으로 설정해주세요." : "Password must be at least 8 characters.");
    if (mode === "signup" && name.trim().length < 2) return setNotice(ko ? "닉네임은 두 글자 이상 입력해주세요." : "Nickname must be at least 2 characters.");
    if (mode === "signup" && kakaoOptIn && !/^010-\d{4}-\d{4}$/.test(phone)) return setNotice(ko ? "카카오톡 수신을 위해 휴대전화 번호를 010-0000-0000 형식으로 입력해주세요." : "Enter a valid Korean mobile number for KakaoTalk delivery.");
    if (mode === "signup" && !newsletterOptIn) return setNotice(ko ? "구독신청과 이메일 수신에 동의해주세요." : "Please agree to subscribe and receive email updates.");

    setSubmitting(true);
    try {
      if (mode === "signup") {
        const normalizedEmail = email.trim();
        const result = await signUp(normalizedEmail, password, name.trim(), kakaoOptIn ? phone : "", kakaoOptIn ? ["kakao"] : [], language);
        if (result.verificationRequired) {
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
      setNotice(error instanceof Error ? error.message : (ko ? "처리 중 오류가 발생했습니다." : "An error occurred."));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="container-page py-24 text-center text-sm text-charcoal/50">{ko ? "회원 정보를 확인하는 중입니다." : "Checking your account…"}</div>;

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
            <p className="mt-6 text-sm leading-7 text-charcoal/65">{ko ? "인증회원은 씨드의 뉴스·브리핑·칼럼·감시·제안·실험·아카데미에 댓글을 남기고 공론장 토론에 참여할 수 있습니다. 화면에는 실명 대신 가입 때 정한 닉네임이 표시됩니다." : "Verified members can comment on SEED news, briefings, columns, civic watch, proposals, experiments and academy content and take part in the public forum. Your chosen nickname, not your legal name, is shown publicly."}</p>
            <button type="button" onClick={() => void signOut()} className="button-secondary mt-7"><LogOut size={16}/>{ko ? "로그아웃" : "Log out"}</button>
            {(user.app_metadata?.seed_role === "author" || user.app_metadata?.seed_role === "owner") && <Link to="/writer" className="button-primary ml-3 mt-7"><PenLine size={16}/>{ko ? "필자 집필실" : "Writers' room"}</Link>}
            {user.app_metadata?.seed_role === "owner" && <Link to="/insights" className="button-primary ml-3 mt-7"><BarChart3 size={16}/>{ko ? "구독·콘텐츠 통계" : "Subscriptions & content"}</Link>}
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
          <p className="mt-6 text-base leading-8 text-charcoal/65">{ko ? "이메일·닉네임·비밀번호를 입력하면 구독을 신청할 수 있습니다. 카카오톡으로도 소식을 받고 싶다면 아래에서 선택해 주세요." : "Subscribe with your email, nickname, and password. Choose KakaoTalk below only if you want updates there too."}</p>
          <div className="mt-7 flex items-start gap-3 rounded-lg border border-green-deep/10 bg-green-pale/55 p-4 text-sm leading-7 text-charcoal/65"><MailCheck className="mt-1 shrink-0 text-green-mid" size={20}/>{ko ? "신청 후 이메일로 확인 링크가 발송됩니다. 링크를 누르면 로그인과 댓글 작성이 가능합니다." : "After you apply, we'll email a confirmation link. Follow it to log in and comment."}</div>
        </div>

        <div className="rounded-xl border border-green-deep/15 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid grid-cols-2 rounded-lg bg-[#F1F2EC] p-1">
            <button type="button" onClick={() => changeMode("login")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "login" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "로그인" : "Log in"}</button>
            <button type="button" onClick={() => changeMode("signup")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "signup" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "구독신청" : "Subscribe"}</button>
          </div>

          <form onSubmit={submit} className="mt-7">
            <label className="field"><span>{ko ? "이메일" : "Email"}</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required /></label>
            {mode === "signup" && <label className="field mt-4"><span>{ko ? "닉네임" : "Nickname"}</span><input value={name} onChange={(event) => setName(event.target.value)} maxLength={30} placeholder={ko ? "씨앗시민" : "SeedCitizen"} autoComplete="nickname" required /></label>}
            <label className="field mt-4"><span>{ko ? "비밀번호" : "Password"}</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} placeholder={ko ? "8자 이상" : "8+ characters"} autoComplete={mode === "signup" ? "new-password" : "current-password"} required /></label>

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
              <button className="button-secondary mt-3 w-full justify-center disabled:cursor-not-allowed disabled:opacity-45" type="button" onClick={() => void resend()} disabled={submitting || resending}>
                <MailCheck size={16}/>{resending ? (ko ? "인증메일 보내는 중" : "Sending verification email") : (ko ? "인증메일 다시 보내기" : "Resend verification email")}
              </button>
            )}
            {notice && <p className="mt-4 rounded-lg bg-gold/10 px-4 py-3 text-sm font-semibold leading-6 text-charcoal/70" role="status">{notice}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
