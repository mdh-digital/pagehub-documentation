---
description: 'A PageHub store belongs to the workspace: one catalogue and one order list, sold through any website or landing page in that workspace.'
---

# Store module overview

A PageHub store **belongs to the workspace**, not to one website. A workspace has one catalogue, one order list and one list of abandoned carts. Each website and landing page in it simply **chooses which products to show**.

So if you run a store website and a few promo landing pages, they all sell from the same catalogue, and every order lands in one place.

## The Store menu in the sidebar

The **Store** group in the sidebar follows the active workspace (the workspace picker at the top of the sidebar).

| Menu | What it holds | Guide |
| --- | --- | --- |
| **Products** | Catalogue: prices, variants, stock, images, digital products | [Products](/en/commerce/products) |
| **Orders** | Orders, payments, shipping, invoices | [Orders](/en/commerce/orders) |
| **Abandoned carts** | Buyers who started an order and did not finish | [Abandoned carts](/en/commerce/abandoned-carts) |
| **Manage store** | Categories, master variants, business addresses, bank accounts, store settings, sales reports | [Store settings](/en/commerce/store-settings) |

What stays on the website (the **Commerce** tab of a website): which products that site shows, the [storefront](/en/commerce/storefront), and the [product card design](/en/commerce/product-cards).

## Included in every plan

The store comes with every plan. Plans differ only in two limits, counted **per workspace**:

- **Number of products** — a hard limit. Once full, no new products can be added.
- **Orders per month** — a soft limit. Checkout is never refused; orders past the allowance still come in and are marked **Over quota**.

<Shot src="/img/commerce/usage.webp">
The store usage card: the workspace name, a "products" bar and an "orders this month" bar with used and limit figures, and a link to add capacity.
</Shot>

Need more room? Buy extra capacity under [Add-ons](/en/account/add-ons). A store made a [Partner Store](/en/commerce/partner-store) has no product or order limit.

## A sensible order

1. **[Store settings](/en/commerce/store-settings)** — the currency first, before any price is typed.
2. **[Business address](/en/commerce/store-settings)** and **[bank accounts](/en/commerce/store-settings)** — both print on documents, and the address is used for [shipping rates](/en/commerce/shipping).
3. **[Categories](/en/commerce/categories-and-variants)** and **master variants** if your products have options.
4. **[Products](/en/commerce/products)** (physical or [digital](/en/commerce/digital-products)).
5. **[Choose the products shown](/en/commerce/sell-on-sites)** on each website or landing page.
6. **[Storefront](/en/commerce/storefront)** for websites.
7. Test **[cart & checkout](/en/commerce/cart-and-checkout)** yourself before sharing.

## Things worth knowing

**Prices always live on variants, not on the product.** Even a simple product has exactly one variant row, and its price is in the **Price & stock** section.

**Order lines keep a copy.** Item names and prices are copied when the order is created. Raise a price tomorrow and yesterday's order still shows the old one.

**Every order records where it came from.** The order list has a **Source** column: which website, which landing page, or **Entered by staff**. When a workspace sells in more than one place, you can filter by site.

**Automatic shipping rates are for Indonesia only.** Stores that ship from Indonesia can get courier rates and track waybills. Stores elsewhere type the shipping cost by hand. See [Shipping & tracking](/en/commerce/shipping).

**The store currency is never converted.** Prices are stored exactly as typed. Changing the store currency only changes the label.

**There is no customer registry.** Buyer details live on their orders. There is no separate "Customers" page.

## How buyers pay

| Method | Where the money goes | Fee |
| --- | --- | --- |
| Transfer to the store's bank account | Straight to your account | Free |
| QRIS, VA, e-wallet through PageHub | Into your **Balance**, which you withdraw | Service fee paid by the buyer |
| Your own gateway (Stripe, PayPal and others) | Straight to your gateway account | Per the gateway |

Details in [Online payments & balance](/en/commerce/online-payments).
