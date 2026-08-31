---
description: 'Record payments, accept or reject buyer payment claims, take gateway payments, and print invoices, receipts and delivery notes.'
---

# Payments & invoices

## Marking an order paid

On the order detail page, click **Mark as paid**.

<Shot src="/img/commerce/payment-dialog.webp">
The Payment dialog: method options (Bank transfer, E-wallet, Cash, COD), a destination account picker as chips, an Amount field, a Received date, and a proof-of-transfer uploader.
</Shot>

| Field | Notes |
| --- | --- |
| **Method** | Bank transfer · E-wallet · Cash · COD |
| **Which account it went to** | For bank transfers — picked from your [bank accounts](/en/commerce/store-settings) |
| **Digital wallet** | For e-wallets — OVO, GoPay, DANA, PayPal |
| **Amount** | Must cover the order total |
| **Received** | The date the money arrived |
| **Proof of transfer** | Optional, from the File Manager |

**Edit payment** reopens the same dialog to correct the record. **Mark as unpaid** removes the payment record and returns the order to unpaid.

## Payment claims from buyers

Buyers can submit their own payment claim through the [public invoice](/en/commerce/public-invoice): picking a destination account, entering an amount, and uploading proof.

::: warning A claim is not a payment
Claims arrive as **Awaiting confirmation** — not as recognised payment. While a claim is pending, both the mark-paid and mark-unpaid buttons are refused, with the message *"Deal with the customer's payment first"*.
:::

Two buttons:

- **Accept payment** — the order becomes paid.
- **Reject** — you must write a reason. **That reason is shown to the buyer** on their public invoice, so they know what to fix (e.g. "amount doesn't match the invoice").

## Gateway payments

If you've connected your own [payment gateway](/en/commerce/store-settings), a successful payment marks the order paid **automatically** via webhook — no manual step.

If a gateway payment succeeds but the order stays unpaid, the cause is almost always the same: the webhook URL isn't registered in the gateway dashboard.

## Printing documents

From the order detail page, the **Print** button. Three documents:

| Document | Contents |
| --- | --- |
| **Invoice** | The bill: store identity, billed to, item breakdown, total, payment info, due date |
| **Transaction** | A compact receipt |
| **Delivery note** | Sender, recipient, courier, tracking, and the inspection warning |

<Shot src="/img/commerce/invoice-print.webp">
An invoice print preview: store logo and identity top left, invoice number and date on the right, "From" and "Billed to" blocks, an item table, the grand total, a payment info block showing the primary account, and a footer note.
</Shot>

All the header and note text comes from [Store settings](/en/commerce/store-settings): outlet name, invoice logo, payment terms, invoice note, delivery note warning and footer.

Your **primary account** is printed in the payment info block.

There's also **Download PDF**. If it fails, use **Print** and save as PDF from the browser's print dialog.

## Currency

All documents use the [store currency](/en/commerce/store-settings), without conversion. The currency picker in the dashboard header has no effect on order documents.

## Due dates

If **Payment terms** in Store settings is set (say 7 days), the invoice shows a due date of the order date plus those days. Zero means no due date.
