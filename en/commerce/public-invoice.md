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

### Pay online (QRIS, VA, e-wallet)

If your store uses [online payments through PageHub](/en/commerce/online-payments):

1. The buyer clicks **Pay now**. The page scrolls to the **Pay online** section.
2. Each channel is one button showing its **final total**, for example *QRIS · Rp588,830*, with *"Includes a Rp5,830 service fee"* underneath. The service fee is added **on top of** the order total and paid by the buyer; you receive the full order total.
3. The buyer picks a channel and is sent to the payment page. Once paid, the invoice turns **Paid** by itself.

**Channels that don't fit the amount are not shown.** Each channel has amount limits. A virtual account, for example, usually has a minimum of around Rp10,000, so a Rp5,000 order only shows other channels such as QRIS. If no channel fits and manual transfer is off (as in a [Partner Store](/en/commerce/partner-store)), the invoice says *"No payment method is available yet."*

Fees, amount limits and which channels are active are set by the PageHub team, not from your account. If no channel appears for a normal amount, open a [support ticket](/en/help/support-tickets).

Switching channel midway creates a new charge and cancels the old one.

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

The text on this page (headings, labels, buttons, messages) follows the **website's public site language**, not your dashboard or account language. The same goes for that website's shop pages, cart, checkout and 404 page.

To change it: **Websites** → choose the website → **Settings** tab → **Public site language**. See [Website settings](/en/website/settings).

For orders from a landing page, the text follows the language of the **oldest** website in the same workspace. If that workspace has no website yet, the owner's account language is used.
