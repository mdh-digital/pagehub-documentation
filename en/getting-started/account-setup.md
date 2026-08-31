# Sign up & sign in

## Create an account

1. Open the **Register** page at [account.pagehub.id](https://account.pagehub.id).
2. Fill in **Name**, **Email** and **Password** (at least 8 characters).
3. Click **Register**.

<Shot src="/img/getting-started/register.webp">
The "Create a PageHub account" page: Name, Email and Password fields with a show/hide toggle, then a Register button. A green illustrated panel on the left shows "Live page" and "Visitors today" cards.
</Shot>

::: tip If you see "Continue with Google"
You can sign up and sign in with a Google account — no password, no separate email verification. The button only appears when Google sign-in is enabled on your installation.
:::

## Verify your email

Self-registered accounts **must** verify their email before signing in. After registering, PageHub sends a **6-digit code** to your inbox.

1. Open the email and copy the code.
2. Enter it on the **Verify email** page and click **Verify**.

<Shot src="/img/getting-started/verify-email.webp">
The email verification page: the email field already filled in, one field for the six-digit code, a Verify button, and a "Resend" link with a countdown.
</Shot>

A few things worth knowing:

- The code is valid for **24 hours** and can be used once.
- No code? Click **Resend** (there's a short cooldown before the button is clickable again). Check your spam folder too.
- **Bonus AI credits for new accounts are granted on successful verification**, not at registration. So if your credit balance is still zero, verify first.

Members invited from the Team page skip this step — their accounts are active immediately.

## Sign in

Enter your email and password, then click **Sign in**.

Tick **Remember me for 30 days on this device** if you're on a personal computer — the session lasts longer. Leave it unticked on shared machines.

::: warning Repeated failed attempts
Sign-in attempts and code requests are rate limited. Too many failures in a short window locks the account temporarily — wait a few minutes and try again.
:::

## Forgotten password

1. On the sign-in page, click **Forgot password?**
2. Enter your email and click **Send reset code**.
3. Open the email and copy the code.
4. On the **Reset password** page, enter the code plus a new password, then **Save new password**.

Reset codes are valid for **1 hour** and single-use.

::: info Why the message always says "if the email is registered"
For security, PageHub never reveals whether an address has an account. The message is identical either way.
:::

## Changing your password from inside the app

Open the account menu at the bottom of the sidebar → **Profile**, then the **Change password** section. You'll need your current password, a new one, and its confirmation. A strength indicator tells you when the combination is too weak.

## Email language

Emails from PageHub (verification codes, password resets) follow **your account language**, set in [Profile & preferences](/en/account/profile). If your organisation uses [white label with its own SMTP](/en/team/brand-white-label), those emails go out from the agency's server and sender name instead of PageHub's.
