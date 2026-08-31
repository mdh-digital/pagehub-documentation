# Store module overview

The **Commerce** module turns a website into a store: a product catalogue, cart, checkout, orders, invoices, and follow-up on abandoned carts.

A store belongs to **one website**. An organisation can run several stores at once — each with its own catalogue, currency and bank accounts.

## An add-on

Commerce is a **paid add-on, per website**, separate from your subscription plan.

<Shot src="/img/commerce/locked.webp">
The Commerce tab without the add-on: a single offer screen headed "Selling is an add-on", explaining that the catalogue, orders, invoices and public storefront switch on once the add-on is active, with a "See the store add-on" button.
</Shot>

Without the add-on, the Commerce tab shows one offer screen — not a row of menus that all refuse to work. How to buy it: [Add-ons](/en/account/add-ons).

::: info Stores that were already running
Websites already selling before this add-on was introduced keep working — their commerce access is carried over automatically.
:::

## Module map

| Menu | Contents | Guide |
| --- | --- | --- |
| **Product categories** | Catalogue grouping | [Categories & variants](/en/commerce/categories-and-variants) |
| **Master variants** | Reusable option sets | [Categories & variants](/en/commerce/categories-and-variants) |
| **Products** | The catalogue: prices, variants, images, wholesale | [Products](/en/commerce/products) |
| **Orders** | Orders, status, payment, invoices | [Orders](/en/commerce/orders) |
| **Abandoned cart** | People who started but didn't finish | [Abandoned carts](/en/commerce/abandoned-carts) |
| **Business addresses** | Where orders ship from | [Store settings](/en/commerce/store-settings) |
| **Bank accounts** | Where buyers transfer to | [Store settings](/en/commerce/store-settings) |
| **Store settings** | Document identity, currency, email, gateway | [Store settings](/en/commerce/store-settings) |
| **Storefront** | The public shop pages | [Storefront pages](/en/commerce/storefront) |

## A sensible order

1. **[Store settings](/en/commerce/store-settings)** — currency first, before any price is typed.
2. **[Business addresses](/en/commerce/store-settings)** and **[bank accounts](/en/commerce/store-settings)** — both are printed on documents.
3. **[Categories](/en/commerce/categories-and-variants)** and master variants if your products have options.
4. **[Products](/en/commerce/products)**.
5. **[Storefront](/en/commerce/storefront)** — generate the shop pages.
6. Test **[cart & checkout](/en/commerce/cart-and-checkout)** yourself before telling anyone.

## Design choices worth knowing

A few things here work deliberately differently from typical online stores. Knowing them up front saves confusion:

**Prices always live on variants, not on the product.** Even a simple product has exactly one variant row. So if you're hunting for the price field on the product form, it's in the **Pricing & stock** section, per variant row.

**Order lines store a snapshot.** Item names, prices and details are copied when the order is created. Raise your prices tomorrow and yesterday's order still shows yesterday's price.

**No automatic shipping rates.** No courier integration, no rate calculation, no region tables. Addresses, couriers and shipping costs are typed manually — because stores on PageHub are also meant for cross-border selling, where a domestic rate table would be wrong.

**Store currency is never converted.** Prices are stored exactly as typed. Changing the store currency only changes the label. This is different from the currency picker in the dashboard header, which does convert *PageHub subscription* prices.

**No customer registry.** Buyer details live on their orders. There's no separate "Customers" page.

## Opening and closing the store

The **Storefront** page has a **Shop open / Shop closed** switch. Turn it off and the generated pages are kept, but the store disappears from the site: the cart isn't in the menu, and the product, cart and checkout pages don't open.

Useful while you're still building the catalogue, or during a long break.
