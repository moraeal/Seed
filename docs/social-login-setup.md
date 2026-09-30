# 구글·카카오 간편로그인 활성화

운영 주소: https://seedvoice.kr/account
인증 프로젝트: wajlmbahjyazkftwaeem
공통 OAuth 콜백: https://wajlmbahjyazkftwaeem.supabase.co/auth/v1/callback

## 준비된 기능

- 카카오·구글 우선, 기존 이메일 가입·로그인·메일 인증·비밀번호 재설정 유지.
- `/auth/v1/settings`에서 실제 활성화된 제공자만 사용 가능. 설정 전에는 준비 중 표시.
- 로그인은 PKCE로 진행하며 검증키는 시작한 탭에만 보관하고 콜백에서 삭제.
- 신규 소셜 회원은 씨앗용 닉네임 자동 부여. 제공자의 실명을 공개 닉네임으로 쓰지 않음.
- 기존 회원은 이메일로 로그인한 뒤 내 계정에서 계정 연결. 연결 결과의 회원번호가 기존 회원번호와 일치해야 세션 저장.
- 로그인 완료 후 메인으로 이동. 연결 완료 후 내 계정에 머무름.
- 소셜 로그인만으로 뉴스레터·카카오톡 수신 동의를 생성하지 않음.

## 관리자 설정

1. Google Auth Platform에서 웹 앱용 OAuth 클라이언트를 만들고 위 공통 콜백을 승인된 리디렉션 URI로 등록. 사이트 출처는 https://seedvoice.kr. 서비스 이름/동의 화면과 공개 대상 설정을 확인.
2. 카카오 디벨로퍼스에서 씨앗 앱을 만들고 카카오 로그인을 활성화. 위 공통 콜백을 Redirect URI로 등록. 필요한 이메일 제공 권한/동의 설정을 확인. Supabase 문서에 따라 REST API 키와 Client Secret을 준비.
3. Supabase Authentication의 Google/Kakao 제공자에 각 클라이언트 정보 입력. 비밀키는 Supabase 관리 화면에만 입력하고 코드·채팅·GitHub에 저장하지 않음.
4. Supabase 인증 URL 설정에서 Site URL은 https://seedvoice.kr, Redirect URLs에는 https://seedvoice.kr/account 등록.
5. Authentication 설정에서 수동 계정 연결(Manual identity linking) 활성화.
6. `supabase/social-login-nicknames.sql` 적용 여부 확인.
7. 새 계정으로 두 제공자의 가입·로그인을 검증. 기존 테스트 회원으로 이메일이 같은 경우와 다른 경우의 연결을 검증하고 회원번호·닉네임·구독 동의가 유지되는지 확인. 취소·만료·이메일 로그인·비밀번호 재설정도 확인.

기존 회원의 일괄 이전이나 이메일이 다른 계정의 자동 병합은 하지 않음. 같은 검증된 이메일의 자동 연결은 Supabase의 기본 동작이며 사이트가 임의로 병합하지 않음.

## 복구 기준

변경 전 main: 29ae6ec0dfd8591f8f7d2868f9ed339680d31271.
로컬 annotated tag: restore/20260930-2053-social-login.
Git push 인증이 없어 동일 커밋의 원격 restore 브랜치를 보존함. 원격 annotated tag 생성은 별도 Git 인증이 필요함.
