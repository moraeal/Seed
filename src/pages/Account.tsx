import { CheckCircle2, LogIn, LogOut, MailCheck, UserPlus } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth";

export default function Account() {
  const { user, nickname, isVerified, loading, signUp, signIn, signOut } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const returnTo = useMemo(() => searchParams.get("returnTo") || "/forum", [searchParams]);

  const changeMode = (next: "login" | "signup") => {
    setMode(next);
    setNotice("");
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("mode", next);
    setSearchParams(nextParams, { replace: true });
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setNotice("");
    if (password.length < 8) return setNotice("비밀번호는 8자 이상으로 설정해주세요.");
    if (mode === "signup" && name.trim().length < 2) return setNotice("닉네임은 두 글자 이상 입력해주세요.");

    setSubmitting(true);
    try {
      if (mode === "signup") {
        const result = await signUp(email.trim(), password, name.trim());
        if (result.verificationRequired) {
          setNotice("가입 확인 메일을 보냈습니다. 이메일의 인증 링크를 누른 뒤 로그인해주세요.");
          setMode("login");
        } else {
          navigate(returnTo);
        }
      } else {
        await signIn(email.trim(), password);
        navigate(returnTo);
      }
    } catch (error) {
      setNotice(error instanceof Error ? error.message : "처리 중 오류가 발생했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="container-page py-24 text-center text-sm text-charcoal/50">회원 정보를 확인하는 중입니다.</div>;

  if (user) {
    return (
      <section className="min-h-[65vh] bg-ivory py-14 sm:py-20">
        <div className="container-page max-w-3xl">
          <span className="section-kicker">SEED MEMBER</span>
          <h1 className="editorial-title mt-4 text-4xl font-bold text-navy sm:text-5xl">내 계정</h1>
          <div className="mt-8 rounded-xl border border-green-deep/15 bg-white p-7 shadow-soft sm:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-extrabold text-navy">{nickname}</h2>
              {isVerified && <span className="inline-flex items-center gap-1 rounded-full bg-green-pale px-3 py-1 text-xs font-extrabold text-green-deep"><CheckCircle2 size={14}/>이메일 인증회원</span>}
            </div>
            <p className="mt-3 text-sm text-charcoal/55">{user.email}</p>
            <p className="mt-6 text-sm leading-7 text-charcoal/65">인증회원은 씨드의 뉴스·브리핑·칼럼·감시·제안·실험·아카데미에 댓글을 남기고 공론장 토론에 참여할 수 있습니다. 화면에는 실명 대신 가입 때 정한 닉네임이 표시됩니다.</p>
            <button type="button" onClick={() => void signOut()} className="button-secondary mt-7"><LogOut size={16}/>로그아웃</button>
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
          <h1 className="editorial-title mt-4 text-4xl font-bold leading-tight text-navy sm:text-5xl">책임 있는 공론장을 위한 인증회원제</h1>
          <p className="mt-6 text-base leading-8 text-charcoal/65">누구나 콘텐츠와 댓글을 읽을 수 있습니다. 댓글 작성은 이메일을 확인한 회원에게만 열립니다. 실명은 요구하지 않고 공론장에는 닉네임이 표시됩니다.</p>
          <div className="mt-7 flex items-start gap-3 rounded-lg border border-green-deep/10 bg-green-pale/55 p-4 text-sm leading-7 text-charcoal/65"><MailCheck className="mt-1 shrink-0 text-green-mid" size={20}/>회원가입 후 등록한 이메일로 인증 메일이 발송됩니다. 메일의 링크를 눌러야 댓글 작성 권한이 활성화됩니다.</div>
        </div>

        <div className="rounded-xl border border-green-deep/15 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid grid-cols-2 rounded-lg bg-[#F1F2EC] p-1">
            <button type="button" onClick={() => changeMode("login")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "login" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>로그인</button>
            <button type="button" onClick={() => changeMode("signup")} className={`rounded-md px-4 py-3 text-sm font-extrabold ${mode === "signup" ? "bg-white text-green-deep shadow-sm" : "text-charcoal/50"}`}>회원가입</button>
          </div>

          <form onSubmit={submit} className="mt-7">
            {mode === "signup" && <label className="field"><span>공론장 닉네임</span><input value={name} onChange={(event) => setName(event.target.value)} maxLength={30} placeholder="씨앗시민" autoComplete="nickname" required /></label>}
            <label className={`field ${mode === "signup" ? "mt-4" : ""}`}><span>이메일</span><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" autoComplete="email" required /></label>
            <label className="field mt-4"><span>비밀번호</span><input type="password" value={password} onChange={(event) => setPassword(event.target.value)} minLength={8} placeholder="8자 이상" autoComplete={mode === "signup" ? "new-password" : "current-password"} required /></label>

            <button className="button-primary mt-6 w-full justify-center" type="submit" disabled={submitting}>{mode === "signup" ? <UserPlus size={16}/> : <LogIn size={16}/>} {submitting ? "처리 중" : mode === "signup" ? "이메일로 회원가입" : "로그인"}</button>
            {notice && <p className="mt-4 rounded-lg bg-gold/10 px-4 py-3 text-sm font-semibold leading-6 text-charcoal/70" role="status">{notice}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
