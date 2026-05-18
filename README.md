# agency-test-app

Throwaway end-to-end test target for the codech-multi-agents stack.

## Bug

On iOS Safari, the login form auto-capitalises the email (`autoCapitalize="characters"` + `type="text"`), so users typing `user@example.com` submit `User@example.com`. The backend rejects non-lowercase emails with HTTP 400.

The fix: change `type="text"` → `type="email"`, drop `autoCapitalize="characters"` (or set `autoCapitalize="none"`), and add `inputMode="email"` + `autoComplete="email"`.

## Acceptance criteria (used by PM + QA)

- An email entered in mixed case must be accepted (browser auto-lowercases or the form lowercases before submit).
- The login form must accept `user@example.com` / `hunter2` and respond `OK: welcome`.
- The login form must NOT auto-capitalize the email input on mobile Safari.

## Local dev

```bash
pnpm install
pnpm dev          # vite dev server on :5173
pnpm build && pnpm start   # production: built to dist/, served by Express on :3000
```

## Test credentials

email: `user@example.com`
password: `hunter2`
