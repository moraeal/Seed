import { BarChart3, CheckCircle2, Instagram, LogIn, LogOut, MailCheck, Send, Smartphone, UserPlus } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth";
import { useLanguage } from "../i18n";

const socialChannels = [
  { id: "instagram", label: "Instagram", Icon: Instagram },
  { id: "x", label: "X", Icon: null },
  { id: "telegram", label: "Telegram", Icon: Send },
] as const;

export default function Account() {
  const { user, nickname, isVerified, loading, signUp, signIn, signOut } = useAuth();
  const { language } = useLanguage();
  const ko = language === "ko";
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [socialPreferences, setSocialPreferences] = useState<string[]>([]);
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const returnTo = useMemo(() => searchParams.get("returnTo") || "/forum", [searchParams]);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 3) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const changeMode = (next: "login" | "signup") => {
    setMode(next);
    setNotice("");
    if (next === "login") {
      setNewsletterOptIn(false);
      setSocialPreferences([]);
    }
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("mode", next);
    setSearchParams(nextParams, { replace: true });
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setNotice("");
    if (password.length < 8) return setNotice(ko ? "비밀번호는 8자 이상으로 설정해주세요." : "Password must be at least 8 characters.");
    if (mode === "signup" && name.trim().length < 2) return setNotice(ko ? "닉네임은 두 글자 이상 입력해주세요." : "Nickname must be at least 2 characters.");
    if (mode === "signup" && !/^010-\d{4}-\d{4}$/.test(phone)) return setNotice(ko ? "휴대전화 번호를 010-0000-0000 형식으로 입력해주세요." : "Enter a valid Korean mobile number.");
    if (mode === "signup" && !newsletterOptIn) return setNotice(ko ? "콘텐츠 이메일 수신 항목에 동의해야 회원가입할 수 있습니다." : "You must agree to receive content updates by email to sign up.");

    setSubmitting(true);
    try {
      if (mode === "signup") {
        const normalizedEmail = email.trim();
        const result = await signUp(normalizedEmail, password, name.trim(), phone, socialPreferences, language);
        if (result.verificationRequired) {
          setNotice(ko
            ? "가입 확인 메일을 보냈습니다. 이메일의 인증 링크를 누르면 뉴스레터와 새 콘텐츠 수신이 시작됩니다."
            : "We sent a confirmation email. Newsletters and new content will start after you click the verification link.");
          setMode("login");
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
            {user.app_metadata?.seed_role === "owner" && <Link to="/insights" className="button-primary ml-3 mt-7"><BarChart3 size={16}/>{ko ? "구독·콘텐츠 통계" : "Subscriptions & content"}</Link>}
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
          <h1 className="editorial-title mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">{ko ? "책임 있는 공론장을 위한 인증회원제" : "Verified membership for a responsible public forum"}</h1>
          <p className="mt-6 text-base leading-8 text-charcoal/65">{ko ? "이메일 인증을 마치면 뉴스레터와 새 콘텐츠를 기본으로 받아보실 수 있습니다. 휴대전화 번호는 새 콘텐츠를 카카오톡으로 보내드리는 데 사용합니다." : "After verifying your email, you will receive newsletters and new content by default. Your mobile number is used to deliver new content through KakaoTalk."}</p>
          <div className="mt-7 flex items-start gap-3 rounded-lg border border-green-deep/10 bg-green-pale/55 p-4 text-sm leading-7 text-charcoal/65"><MailCheck className="mt-1 shrink-0 text-green-mid" size={20}/>{ko ? "회원가입 후 등록한 이메일로 인증 메일이 발송됩니다. 메일의 링크를 눌러야 댓글 작성 권한이 활성화됩니다." : "After sign-up, a verification email is sent to the address you registered. Commenting is enabled after you click the confirmation link."}</div>
        </div>

        <div className="rounded-xl border border-green-deep/15 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid grid-cols-2 rounded-lg bg-[#F1F2EC] p-1">
            <button type="button" onClick={() => changeMode("login")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "login" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "로그인" : "Log in"}</button>
            <button type="button" onClick={() => changeMode("signup")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "signup" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>{ko ? "회원가입" : "Sign up"}</button>
          </div>

          <form onSubmit={submit} className="mt-7">
            {mode === "signup" && <label className="field"><span>{ko ? "공론장 닉네임" : "Forum nickname"}</span><input value={name} onChange={(event) => setName(event.target.value)} maxLength={30} placeholder={ko ? "씨앗시민" : "SeedCitizen"} autoComplete="nickname" required /></label>}
            <label className={`field ${mode === "signup" ? "mt-4" : ""}`}><span>{ko ? "이메일" : "Email"}</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required /></label>
            <label className="field mt-4"><span>{ko ? "비밀번호" : "Password"}</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} placeholder={ko ? "8자 이상" : "8+ characters"} autoComplete={mode === "signup" ? "new-password" : "current-password"} required /></label>

            {mode === "signup" && <label className="field mt-4"><span>{ko ? "휴대전화 번호" : "Mobile number"}</span><span className="relative"><Smartphone className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-green-mid" size={17}/><input type="tel" value={phone} onChange={(event) => setPhone(formatPhone(event.target.value))} className="pl-11" placeholder="010-0000-0000" autoComplete="tel-national" inputMode="numeric" maxLength={13} required /></span><small className="font-normal leading-5 text-charcoal/45">{ko ? "인증문자는 보내지 않습니다. 새 콘텐츠를 카카오톡으로 보내드리는 데 사용합니다." : "No verification text is sent. We use this number to deliver new content through KakaoTalk."}</small></label>}

            {mode === "signup" && (
              <div className="mt-5 rounded-lg border border-green-deep/15 bg-green-pale/35 p-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={newsletterOptIn}
                    onChange={(event) => setNewsletterOptIn(event.target.checked)}
                    className="mt-1 h-4 w-4 shrink-0 accent-green-deep"
                    required
                  />
                  <span>
                    <span className="block text-sm font-extrabold text-navy">{ko ? "회원가입 및 콘텐츠 수신에 동의합니다" : "I agree to membership and content delivery"}</span>
                    <span className="mt-1 block text-xs leading-5 text-charcoal/55">{ko ? "이메일 인증 후 뉴스레터와 새 콘텐츠가 기본 발송됩니다. 수집된 이메일·휴대전화 번호와 수신 선택 정보는 회원 탈퇴 시 자동 삭제됩니다." : "After email verification, newsletters and new content are sent by default. Your email, mobile number, and channel choices are automatically deleted when you close your account."}</span>
                  </span>
                </label>
              </div>
            )}

            {mode === "signup" && (
              <div className="mt-5 border-t border-green-deep/10 pt-5">
                <p className="text-sm font-extrabold text-navy">{ko ? "추가로 받아볼 채널" : "Additional channels"}</p>
                <p className="mt-1 text-xs leading-5 text-charcoal/55">{ko ? "인스타그램·X·텔레그램으로도 콘텐츠를 받아보려면 원하는 채널을 선택해주세요." : "Choose any channels where you would also like to receive content."}</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {socialChannels.map(({ id, label, Icon }) => {
                    const selected = socialPreferences.includes(id);
                    return (
                      <label key={id} className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border px-2 py-3 text-xs font-extrabold transition ${selected ? "border-green-deep bg-green-pale text-green-deep" : "border-green-deep/15 bg-white text-charcoal/55 hover:border-green-mid"}`}>
                        <input type="checkbox" className="sr-only" checked={selected} onChange={(event) => setSocialPreferences((current) => event.target.checked ? [...current, id] : current.filter((channel) => channel !== id))} />
                        {Icon ? <Icon size={16}/> : <span className="text-sm leading-none">𝕏</span>}{label}
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            <button className="button-primary mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-45" type="submit" disabled={submitting || (mode === "signup" && (!/^010-\d{4}-\d{4}$/.test(phone) || !newsletterOptIn))}>{mode === "signup" ? <UserPlus size={16}/> : <LogIn size={16}/>} {submitting ? (ko ? "처리 중" : "Processing") : mode === "signup" ? (ko ? "이메일로 회원가입" : "Sign up with email") : (ko ? "로그인" : "Log in")}</button>
            {notice && <p className="mt-4 rounded-lg bg-gold/10 px-4 py-3 text-sm font-semibold leading-6 text-charcoal/70" role="status">{notice}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
