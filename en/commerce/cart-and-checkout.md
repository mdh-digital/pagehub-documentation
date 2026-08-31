# Cart & checkout

The path a buyer takes, from "add to cart" to having an order number.

## The flow

```
Product page  →  Cart  →  Checkout  →  Public invoice
```

1. **Product page.** The buyer picks a variant and a quantity, then adds it to the cart.
2. **Cart.** Contents are stored in the buyer's browser. Each time it's opened, the server recalculates prices from the catalogue — including [wholesale tiers](/en/commerce/products).
3. **Checkout.** The buyer fills in name, contact details, address and notes.
4. **The order is created** through exactly the same path staff-created orders use, and the buyer is sent to their [public invoice](/en/commerce/public-invoice).

## Prices always come from the catalogue

The browser cart stores only **which products and how many**. Prices are never taken from it — every time the cart or checkout loads, the server recalculates from the catalogue.

Consequences:

- Prices tampered with in the browser have no effect.
- If you change a price while someone's cart is open, they see the new one.
- Wholesale discounts are computed server-side, not in the page.

## Carts are separated per site

The cart lives in browser storage, which is separated **per site address**. Because every [workspace](/en/team/workspaces) has its own address, a cart in one client's store never leaks into another's.

## After checkout

The order appears under **Commerce → Orders** with status **New** and payment **Unpaid**.

If [email notifications](/en/commerce/store-settings) are on, emails go to you and to the buyer.

The buyer gets a link to their [public invoice](/en/commerce/public-invoice), where they can see the details, pick an account to transfer to, upload proof of payment, or cancel an order that hasn't started yet.

## Payment methods at checkout

| Method | How it works |
| --- | --- |
| **Manual bank transfer** | The buyer transfers to your [bank account](/en/commerce/store-settings), then submits a payment claim from the public invoice. You approve it |
| **Payment gateway** | If you connect your own gateway account, buyers can pay directly; the order is marked paid automatically via webhook |

Both can be active at once.

## The checkout form is not a lead form

Worth knowing if you edit the HTML: the checkout form is specially marked so its submissions are **not** recorded as [leads](/en/leads/form-submissions). Otherwise every order would appear twice — once as an order and once as a lead.

Don't remove that marker when editing the checkout template.

## Testing before you announce it

Before telling anyone about your store:

1. Open a product page **from an ordinary browser** (not the editor preview).
2. Add to cart, check the prices and wholesale discounts.
3. Complete checkout with your own details.
4. Check the order under **Orders**.
5. Open its public invoice and try submitting a payment claim.
6. Approve the payment, then run the status through to **Completed**.
7. Delete the test order.

## Abandoned carts

Visitors who start filling in but never finish are recorded under **Abandoned cart**, ready for follow-up. See [Abandoned carts](/en/commerce/abandoned-carts).
