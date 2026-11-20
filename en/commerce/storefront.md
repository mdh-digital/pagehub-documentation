# Storefront pages

The storefront is your public shop: the product list, product detail pages, cart and checkout.

What makes it different from an ordinary online store: **AI writes the templates in your website's design**, and **the server fills in the catalogue when a page is opened**. So it blends with your site, while prices and stock are never stale.

## Built-in store pages

As soon as the store is switched on, the **product list, product detail, cart and checkout pages exist** in a built-in design that follows your site's colours and fonts. You do not have to wait for the AI before taking orders.

The built-in design is used for as long as a template has no version of its own. Once the AI builds the storefront, or you edit a template through **Customise pages**, that version is what visitors see.

## Generating the storefront

**Websites → (pick a website) → Commerce tab → Storefront** → **Build storefront**.

<Shot src="/img/commerce/storefront.webp">
The Commerce tab of a website, "Shop on this site": the Storefront card with a "Shop open" switch, the link to the live shop, the list of templates built (Shop page, Product page, Cart, Checkout, Product strip), a "Show the cart in the site menu" switch, and the "Regenerate shop pages" and "Customise pages" buttons. Below it, the "Products on this site" card.
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

## Customising the shop pages

You can change the shop pages yourself, like any page, without regenerating them all.

1. **Websites** → choose the website → **Commerce** tab.
2. On the storefront card, click **Customise pages**. The button is there even if the AI has never built the shop pages; you start from the built-in design.
3. The shop-page editor opens full screen. The tabs along the top pick the template you edit: **Shop** (product list), **Product page**, **Cart**, **Checkout** and **Product strip**.
4. Pick a mode: **Code**, **Visual** or **AI**. They work as in the [page editor](/en/editor/overview). In AI mode, describe the change, for example *"Two product cards per row on phones, and a bigger price"*.
5. The preview beside it uses your own products and your site's header and footer. Click **Save**.

Changes apply per template. Editing the product page does not change the cart or the checkout.

### Changing the look (CSS)

There are three places; pick by how far the change should reach:

| To change | Where |
| --- | --- |
| One element (the buy button colour, the card spacing) | **Visual** mode → click the element → right panel, **Attributes** tab: the style groups, or **Custom CSS** under **Advanced** |
| One shop template | **Code** mode: the `<style>` block inside that template. Applies to that shop page only |
| The whole site, shop pages included | The website's `styles.css`: open any page in the editor → **Code** mode → the **styles.css** file in the file panel |

Shop pages load the website's `styles.css`, so its rules apply there too. Edit `styles.css` with care: it touches **every** page.

### What you must not remove

::: v-pre

A shop template works because of the markers inside it. If one goes, the button still shows but does nothing, or orders arrive without the buyer's details. When editing, do not remove:

- attributes starting with `data-shop-` (for example `data-shop-add` on the add-to-cart button, `data-shop-buy`, `data-shop-checkout` on the checkout form);
- the buyer field names in the checkout: `customerName`, `customerPhone`, `customerAddress` (and `customerEmail` and `note` if present);
- the `<!-- EB:… -->` marker comments (for example `EB:PRODUCTS_START` and `EB:PRODUCTS_END` around one product card);
- `{{…}}` placeholders such as `{{NAME}}`, `{{PRICE}}`, `{{URL}}`, `{{IMAGE}}`.

Moving, wrapping and restyling them is fine. The editor helps in two ways: in Visual mode an element carrying a required marker **cannot be deleted**, and the panel beside it names what is missing as you type.

**Checkout is refused if something is missing.** A checkout template that has lost a required field or marker **cannot be saved**; the screen lists what is missing and the old version stays in use. Other templates are still saved, but with a warning that the page is incomplete. Fix it before you share your store's link.
:::

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
