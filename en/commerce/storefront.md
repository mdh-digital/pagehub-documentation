# Storefront pages

The storefront is your public shop: the product list, product detail pages, cart and checkout.

What makes it different from an ordinary online store: **AI writes the templates in your website's design**, and **the server fills in the catalogue when a page is opened**. So it blends with your site, while prices and stock are never stale.

## Built-in store pages

As soon as the store is switched on, the **product list, product detail, cart and checkout pages exist** in a built-in design that follows your site's colours and fonts. You do not have to wait for the AI before taking orders.

The built-in design is used for as long as a template has no version of its own. Once the AI builds the storefront, or you edit a template through **Customise**, that version is what visitors see.

## Generating the storefront

**Websites → (pick a website) → Commerce tab → Storefront** → **Build storefront**.

<Shot src="/img/commerce/storefront.webp">
The Storefront page: a list of templates (Shop page, Product page, Cart, Checkout, Product strip) each with a status, a "Rebuild storefront" button, a "Shop open" switch, and a "Show the cart in the site menu" checkbox.
</Shot>

AI reads this website's design and builds:

| Template | Contents |
| --- | --- |
| **Shop page** | The product list with category filters |
| **Product page** | One product: gallery, variants, price, buy button |
| **Cart** | The buyer's cart contents |
| **Checkout** | The buyer's details form and order confirmation |
| **Product strip** | A product block you can drop onto any page |

This uses [AI credits](/en/ai/credits).

## Addresses

```
https://<workspace>.pagehub.id/<website>/products
https://<workspace>.pagehub.id/<website>/products/<product-slug>
https://<workspace>.pagehub.id/<website>/cart
https://<workspace>.pagehub.id/<website>/checkout
```

The slugs `products`, `cart` and `checkout` are reserved — ordinary pages can't use them.

## Data is never copied

Templates hold only the **frame**: the HTML skeleton plus markers showing where data belongs. The catalogue is read straight from the database every time a page is opened.

Which means: change a price in Products and the shop page follows immediately. There's no "republish the catalogue" step.

## Rebuilding

**Rebuild storefront** is for after your site design changes. Your catalogue is untouched — only the presentation is rebuilt.

## The health check

Every template must contain certain markers so the server knows where to put product names, prices, buy buttons and so on. When a template is saved, PageHub checks it:

1. Gaps that can be fixed automatically are fixed.
2. If something's still missing, AI is asked once more, in a targeted way.
3. If gaps remain, the template is still saved but flagged **Needs rebuilding** in this panel.

If you see that flag, rebuild that template.

## The cart in the menu

Tick **Show the cart in the site menu** to add a cart link after the last menu item, styled to match your own header.

## Opening & closing the store

The **Shop open / Shop closed** switch:

- **Open** — product, cart and checkout pages serve; the cart appears in the menu.
- **Closed** — the generated pages are kept, but the store disappears from the site.

Useful while building the catalogue, or during a break.

## Product strips on other pages

The **Product strip** template lets you place a row of products on any page — the homepage, an in-site landing page, a campaign page.

Three content options:

| Option | Contents |
| --- | --- |
| **featured** | Products marked **Featured product** |
| **popular** | Best sellers |
| **newest** | Latest products |

Like the shop pages, the contents are filled by the server at request time — always current.

## Product page SEO

Product pages automatically get **Product** structured data including the price, read from the very catalogue that just rendered the page — so the structured price can never disagree with the price on screen. Products also enter `sitemap.xml`.

See [Search & AI discovery](/en/seo/search-and-ai-discovery).
