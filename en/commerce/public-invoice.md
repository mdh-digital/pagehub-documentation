# Public invoice

The page **buyers** open to see their order, pay for it, or cancel it — no account, no login.

## The address

```
https://<workspace>.pagehub.id/<website>/invoices
```

The buyer opens it and **types their invoice number**. There's no order list, and no way to guess someone else's order — the only way in is the number they were given.

The `invoices` slug is reserved, so it can't be used by an ordinary page.

<Shot src="/img/commerce/public-invoice.webp">
The public invoice page from the buyer's side: a green header with the shop name, invoice number, order status and payment status, then shipping, sender and recipient blocks, the item table, subtotal, shipping and total due, plus two buttons — "Cancel this order" and "Pay now".
</Shot>

## What buyers can do

### See the details

Items, quantities, prices, the total, the order status and the payment status.

### Submit a payment claim

1. Pick a **destination account** from your [bank accounts](/en/commerce/store-settings).
2. Enter the amount transferred.
3. Upload proof of transfer.

The claim arrives on the order as **Awaiting confirmation**, and you decide whether to accept or reject it. See [Payments & invoices](/en/commerce/payments-and-invoices).

If you reject it, **the reason you write is shown on this page** so the buyer knows what to fix.

### Cancel the order

While the order **hasn't started**, the buyer can cancel it here. Once it's processing or shipped, the cancel button is gone — cancellation after that is a conversation, not a button.

## Why it works this way

Three decisions explain the behaviour:

**No list, no enumeration.** Buyers must know their invoice number. A list, or guessable numbers, would let anyone read someone else's order.

**A claim is not a payment.** The proof a buyer uploads is a *claim*, not a confirmation. You still decide.

**While a claim is pending, the payment status is locked.** You can't mark the order paid or unpaid until the claim is accepted or rejected — so there are never two competing truths about the same order.

## Sending the link to buyers

- Buyers who check out from the [storefront](/en/commerce/storefront) are taken there automatically.
- For orders you create manually, open the order detail and grab the **Public invoice** link.
- If [email notifications](/en/commerce/store-settings) are on, the link is included in order emails.

## Language

This page follows the website's [public site language](/en/website/settings) — not your dashboard language.
