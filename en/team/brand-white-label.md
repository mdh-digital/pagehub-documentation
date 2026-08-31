# Brand & white label

The **Brand** page (Business group, managers only) replaces the PageHub brand **inside the builder** — what your clients see when they sign in.

Published sites carry no PageHub branding to begin with; this page is about the application itself.

<Shot src="/img/team/brand.webp" wide>
The Brand page: a "Your identity" card (product name, logo, icon, help link, about link) marked "Paid plan", a "Default appearance" card with colour and mode controls, an "Account email" card, and a Preview panel on the right.
</Shot>

## Split in two

| Part | Price | Contents |
| --- | --- | --- |
| **Default appearance** | Free | Accent colour, light/dark, tone, menu style, radius |
| **Identity** | Paid plan | Product name, logo, icon, help link, about link |
| **Account email** | Paid plan | Verification and password-reset codes from your SMTP |

The reasoning: choosing a default look for your colleagues costs nobody anything, so it's free. Replacing the product's brand is a commercial capability.

## Identity

| Field | Notes |
| --- | --- |
| **Product name** | Replaces "PageHub" throughout the app. Leave empty to use the default |
| **Logo** | The wide mark above the sidebar. About 36px tall works best |
| **Icon** | The square mark, used when the sidebar narrows. Empty = follows the logo |
| **Help link** | Where the help button goes |
| **About link** | The "about" link |

This applies to **everyone in the organisation**. The browser tab title and favicon change too.

::: warning Without the plan, saving is refused openly
Saving identity without a supporting plan produces a clear refusal — not fields that silently vanish. The fieldset is disabled with a note explaining why, and the Save button is disabled with it.

What's below still works: **Make this the team default** is free.
:::

The **Preview** panel on the right shows how the builder looks to your clients with what you've just entered, in both **Full** and **Rail** modes.

## Default appearance

The **Default appearance** card sets the starting look for colleagues **before** they set their own.

Two things to understand:

**Editing it doesn't change your own screen.** This is a decision about other people; previewing it on yourself would quietly overwrite your own preference. The **Copy my appearance** button exists as an editable starting point.

**Anyone who has never set their own will follow it.** If a colleague has never opened the Tweaks panel, their appearance follows this default — including when you change it later. Anyone who has chosen for themselves keeps their choice.

The **Clear default** button returns everything to the application's built-in look.

The decision chain:

```
personal preference  →  team default  →  application default
```

The [Tweaks](/en/getting-started/interface-tour) panel in the sidebar is where each person sets their personal preference, and it has a **Follow the team default** button to hand control back.

## Account email

Verification and password-reset codes can be sent from **your organisation's email server**, so they arrive under your name rather than PageHub's.

Fill in the SMTP settings and sender name, then **send a test email to yourself**.

::: warning An unproven server is not used
Nothing is sent through this server until a test email has landed. Until then — and **every time** a delivery-affecting setting changes — account email keeps going out from PageHub's server.

The reason: if a wrong password were accepted at face value, the agency would silently swallow every client's sign-in code. The wrong brand is cosmetic; undelivered mail locks people out of their accounts.
:::

Changing only the sender name does **not** clear verification — that's cosmetic. Changing host, port, username, encryption, sender email or password does.

::: info Who it applies to
Only to people who belong to **exactly one** organisation. Someone working at two agencies has no single brand with a legitimate claim to their sign-in codes, so their email still comes from PageHub.
:::

## What isn't here yet

- **A per-organisation application domain** (`app.youragency.com`) — still blocked on TLS infrastructure.
- **Per-workspace branding** — branding stays one per organisation. Per-workspace branding would mean one application domain per client, multiplying the certificate burden by the number of clients.
