---
description: 'Accept QRIS, VA and e-wallets through the PageHub gateway: identity check, a buyer-paid service fee, a held balance, and withdrawing to your bank.'
---

# Online payments & balance

Stores that sell in **Indonesian rupiah** can accept **QRIS, virtual accounts and e-wallets** through the PageHub gateway, without a payment gateway account of their own. The money goes into your **Balance**, and you withdraw it to your bank account.

Transfer to the store's bank account can stay on alongside it, except in a [Partner Store](/en/commerce/partner-store), which only accepts the PageHub gateway.

## 1. Verify your identity

Buyers' money is paid out to you, so the account owner verifies their identity once, for every store.

1. Open **Billing → Partner Store**, or the payment card in **Store → Manage store → Store settings**.
2. Click **Verify identity**.
3. Fill in **Full name (as on the ID card)** and **NIK (16 digits)**, and upload a **Photo of your KTP** and a **Selfie holding your KTP**.
4. Click **Send for review**.

Reviews usually take 1–2 working days. The NIK and photos are stored encrypted and only the verification team can see them. Only the account owner or an admin can send them.

If it is rejected or revoked, the reason is shown on screen and you can **Submit again**.

## 2. Switch it on for the store

In **Store → Manage store → Store settings**, under **Pay online (QRIS, VA, e-wallet)**, choose **Offered to buyers**.

## Service fee

The buyer pays a small service fee **on top of** the order total; it depends on the channel and the amount, and is shown to the buyer before they pay. **You receive the full order total.**

## What the buyer sees

On the invoice page the buyer chooses: transfer to the store's account, or one of the QRIS/VA/e-wallet channels with its fee and total. Once paid, the order is marked paid automatically. Switching channel halfway creates a new payment; the old one is cancelled.

## Balance

The **Balance** menu in the sidebar shows three figures:

| Figure | Meaning |
| --- | --- |
| **On hold** | Sales still inside the holding period |
| **Withdrawable** | Ready for you to withdraw |
| **Being withdrawn** | Withdrawals in progress |

Each sale is **held for a few days** after payment before it can be withdrawn (the length is shown on the Balance page). The holding period leaves room for refunds and disputes.

The **Transactions** tab records every sale, refund and withdrawal.

## Withdrawing

1. **Balance → Withdraw**.
2. Enter the amount (there is a minimum, shown on the form) and the destination account.
3. **Request withdrawal**.

Withdrawals are transferred by hand by the PageHub team, usually within 1–2 working days. Only one withdrawal can be in progress at a time.

## Refunds after payment

An order cancelled or refunded after its money reached your balance reduces your balance. If the balance goes negative, the shortfall is taken from your next sales, and withdrawals wait until the balance is positive again.

## Your own gateway

If you already have a Stripe, PayPal, Razorpay, Paystack, Flutterwave or Mollie account, connect it in **Store → Manage store → Store settings → Payment gateway**. Buyers pay straight into your account, and it does not go through Balance. See [Store settings](/en/commerce/store-settings).
