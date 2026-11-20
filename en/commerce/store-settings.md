# Store settings

Everything that isn't the catalogue and isn't an order: document identity, currency, addresses, accounts, email and payment gateway.

## Store settings

**Store → Manage store → Store settings**.

<Shot src="/img/commerce/store-settings.webp">
The Store settings page: an Identity section (outlet name, phone, email, logo, invoice logo), a Currency section, a Documents section (payment terms, invoice note, delivery note warning, document footer), and a Payments section with a manual bank transfer switch.
</Shot>

### Identity

Printed at the head of every invoice, receipt and delivery note.

| Field | Notes |
| --- | --- |
| **Outlet name** | If left blank, documents use the name of the website or landing page the order came from |
| **Phone**, **Email** | The contact details printed |
| **Logo** | The store logo |
| **Invoice logo** | Print only. Empty means it follows the main logo |

### Currency

The currency this store bills in.

::: warning Changing the currency does not convert prices
Prices are stored exactly as typed — changing the currency only swaps the label. `150000` that used to be IDR will read as `150000` USD. Set the currency **before** filling the catalogue.
:::

### Documents

| Field | Notes |
| --- | --- |
| **Payment terms** | Days after the order date. Zero means no due date |
| **Invoice note** | e.g. "Please settle payment before the due date." |
| **Delivery note warning** | e.g. "Please inspect the goods on receipt." |
| **Document footer** | e.g. "Thank you for your business." |

### Payments

**Manual bank transfer** is on by default once commerce is enabled: the buyer transfers to one of your accounts and you confirm it. You can turn it off if you only want gateway payments.

**Pay online (QRIS, VA, e-wallet)** through the PageHub gateway can be switched on here once your identity is verified. The money goes into the **Balance** menu. See [Online payments & balance](/en/commerce/online-payments).

## Business addresses

**Store → Manage store → Business addresses** — where orders ship **from**.

| Field | Notes |
| --- | --- |
| **Address label** | Internal, e.g. `Office & garage` |
| **Contact name**, **Phone** | Printed on delivery notes |
| **Street address**, **City / region**, **Postcode** | |

One address is the **default** and is copied onto every new order as its origin. The first address becomes the default automatically. The only address can't be deleted.

An order's origin address can be edited — the change applies to that order only.

## Bank accounts

**Store → Manage store → Bank accounts** — where buyers transfer to.

<Shot src="/img/commerce/bank-accounts.webp">
The Bank accounts page: account cards with the bank name, account holder, account number with a copy button, and a "Primary" marker on one of them.
</Shot>

| Field | Notes |
| --- | --- |
| **Bank or provider** | BCA, Wise, PayPal — anything |
| **Account holder** | The account owner's name |
| **Account number** | A number, IBAN or handle |
| **Note** | Branch, SWIFT/BIC, or anything else the payer needs |

One account is **primary** and appears first on invoices. The first account becomes primary automatically.

Every account here also becomes a clickable option for buyers on the [public invoice](/en/commerce/public-invoice) page.

::: info Not the same as platform accounts
The accounts here are **yours**, for receiving buyer payments. The accounts used to pay for **your PageHub subscription** are different and managed by the platform — see [Upgrading & payment](/en/account/billing).
:::

## Email notifications

**Store → Manage store → Store settings → Email notifications**. Order emails are sent from **your own SMTP** and are **off by default** — nothing is sent until you switch it on.

Fill in host, port, username, password, sender email and name, encryption, plus **your notification email** (where owner notifications go).

Then **Save & send a test email**.

::: warning An unproven server is not used
Until a test email has succeeded, the events you tick **send nothing**. This is deliberate: wrong SMTP settings would swallow order notifications silently. Once it succeeds, an **SMTP verified** marker appears.

Changing anything that affects delivery (host, port, username, encryption, sender email, password) clears that verification — send a new test.
:::

Events you can switch on individually:

| Event | Recipient |
| --- | --- |
| New order | Owner |
| Order received | Customer |
| Order processing / shipped / completed / cancelled | Customer |
| Payment received | Owner |
| Order cancelled | Owner |

## Payment gateway

**Store → Manage store → Store settings → Payment gateway**. Connect **your own** gateway account (Stripe, PayPal, Razorpay, Paystack, Flutterwave or Mollie) so buyers pay you directly. For Indonesian QRIS, VA and e-wallets, use the [PageHub gateway](/en/commerce/online-payments). Manual bank transfer remains available alongside it.

Enter your gateway credentials, choose a **Mode** (Sandbox for testing, Live for real), then **register the webhook URL** shown here in your gateway dashboard.

::: warning Without the webhook, orders are never marked paid
The payment will succeed on the gateway side, but PageHub is never told. Copy the **Webhook endpoint** and register it before taking real payments.
:::

If the server reports that payment encryption isn't configured, credentials can't be saved until a platform administrator sets it up.
