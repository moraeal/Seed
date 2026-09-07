# Cloudflare Turnstile activation

The SEED VOICE codebase is prepared to enable Cloudflare Turnstile without changing current behavior until the keys are configured.

## 1. Cloudflare

Create a Turnstile widget and allow these hostnames:

- `seedvoice.kr`
- `www.seedvoice.kr`

Recommended widget mode: **Managed**.

Copy the generated **Sitekey** and **Secret key**.

## 2. GitHub Pages build

Create this GitHub Actions repository secret:

- `VITE_TURNSTILE_SITE_KEY` = Cloudflare **Sitekey**

The Pages workflow already passes this value to Vite at build time.

## 3. Supabase Auth

In Supabase Dashboard:

`Authentication` → `Bot and Abuse Protection` → `Enable CAPTCHA protection`

Choose **Cloudflare Turnstile** and enter the Cloudflare **Secret key**.

The frontend already sends `gotrue_meta_security.captcha_token` for sign-up, login, and verification-email resend when the site key is configured.

## 4. Newsletter Edge Function

The Edge Function `newsletter-turnstile` is already deployed.

Add this Supabase Edge Function secret:

- `TURNSTILE_SECRET_KEY` = Cloudflare **Secret key**

The function validates the Turnstile token with Cloudflare before calling the existing `subscribe_newsletter` RPC.

## 5. Activate

After both secrets are configured, rerun the GitHub Pages deployment (or push a harmless commit). Turnstile then activates automatically.

Until `VITE_TURNSTILE_SITE_KEY` is configured, the current production forms continue using the existing server-side rate limits and do not call Turnstile.
