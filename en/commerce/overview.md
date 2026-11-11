# Store module overview

The **Commerce** module turns a website into a store: a product catalogue, cart, checkout, orders, invoices, and follow-up on abandoned carts.

A store belongs to **one website**. An organisation can run several stores at once — each with its own catalogue, currency and bank accounts.

## Part of every plan

The online store is **included in every plan**: one website, one store. There is no add-on to buy before you can sell; just switch the store on for that website.

Plans differ on two limits only, counted **per workspace** (every store in that workspace added together):

- **Number of products** — a hard limit. Once it is full, new products cannot be added.
- **Orders per month** — a soft limit. Checkout is never refused; orders past the allowance still arrive and are marked **Over quota**.

<Shot src="/img/commerce/usage.webp">
The store usage card in the Commerce hub: the workspace name, a "products" bar and an "orders this month" bar showing used and limit, and a link to add more room.
</Shot>

Need more room in one workspace? Buy extra room under [Add-ons](/en/account/add-ons).

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
