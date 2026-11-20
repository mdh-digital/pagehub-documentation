---
description: 'Fill your store catalogue: why prices always live on variants, generating variant combinations, tiered wholesale pricing, images, stock and cost prices.'
---

# Products

**Store → Products**. Your store catalogue: prices, variants, images and tiered wholesale pricing. The catalogue belongs to the workspace; each website and landing page [chooses which products it shows](/en/commerce/sell-on-sites).

<Shot src="/img/commerce/products-list.webp" wide>
The Products page: a table with Product (name + thumbnail), Category, Price, Stock columns and an active/inactive switch; category and status filters above, a "Search name or SKU" box, and an "Add product" button.
</Shot>

## The key rule: prices live on variants

Every product has **at least one variant row**, and the price always lives on that row — not on the product. A simple product has exactly one row; a product with options has many.

Once that clicks, the rest of the form makes sense.

## Form sections

### Product type

- **Physical** — shipped to an address. Has stock, weight and shipping.
- **Digital** — downloaded after payment. No address, no shipping, unlimited stock, and the files are picked from Google Drive. See [Digital products](/en/commerce/digital-products).

### Basics

| Field | Notes |
| --- | --- |
| **Product name** | |
| **SKU** | Internal code, optional |
| **Category** | From the [category list](/en/commerce/categories-and-variants) |
| **Description** | Shown as its own section below the gallery on the product page |
| **URL slug** | Leave empty and it follows the product name |
| **Featured product** | Appears in "featured" strips on other pages |

### Pricing & stock

First, pick the mode:

- **Single** — one variant row. Fill in price, cost price, stock, weight.
- **Has variants** — open the **Options** section.

| Field | Notes |
| --- | --- |
| **Selling price** | What the buyer pays |
| **Cost price** | Used for profit figures in [reports](/en/reports/overview). Never shown to buyers |
| **Stock** | Quantity available |
| **Track stock** | Turn off for unlimited products (services, digital goods). Shown as *untracked* |
| **Weight** | In grams. Used for [automatic shipping rates](/en/commerce/shipping) when the store ships from Indonesia |
| **Package size** | Length × width × height in cm, for volumetric weight. Optional |

### Options & variants

<Shot src="/img/commerce/product-variants.webp">
The Options section on the product form: two option rows (Colour with Red/Blue chips, Size with S/M/L chips), a "Generate combinations" button reading "6 rows", then a Variants table with six rows showing price, cost, stock, image and a Default marker.
</Shot>

1. **From a master variant** to pull in a ready-made set, or **Add option** to type your own.
2. **Generate combinations** — the button shows how many rows will be created.

Each variant row has:

- Its own price, cost price, stock and weight
- Its own **image** (optional) — useful for colour variants
- A **Default** marker — the variant preselected on the product page
- An **Active** switch — turn off variants that are out of stock or discontinued
- Its own **wholesale tiers**

The **Match the first row's price** button saves time when every variant costs the same.

### Wholesale pricing

Optional: cheaper per unit above a certain quantity.

| From qty | Unit price |
| --- | --- |
| 10 | 45,000 |
| 50 | 40,000 |
| 100 | 35,000 |

Buy 12 → everything is priced at 45,000/unit. Buy 60 → 40,000/unit.

Two tiers can't start at the same quantity; PageHub rejects it and tells you.

Wholesale prices are **recalculated on the server** when a buyer checks out, so they can't be manipulated from the browser.

### Images

Several images per product, one marked **Main**. There's a limit on how many are shown.

There's also a **YouTube video** field (optional): if filled, the video becomes the first thing on the product page, with photos after it. Paste a `youtube.com` or `youtu.be` URL.

### Search

**Keywords** — e.g. `villa, honeymoon, bali`. Used by storefront search.

## Active / inactive

The switch in the product list publishes or hides a product from the public store. Inactive products stay in your catalogue and still appear on past orders.

A **Duplicated** product is always created **inactive**, so you have time to change its name and price before it goes live.

## Deleting

Deleting a product removes all its variants and can't be undone. Past orders aren't damaged — order lines carry their own snapshot of the name and price; items whose catalogue entry is gone are marked *"This item is no longer in the catalogue"*.

## Currency

The form shows **Prices in &lt;currency code&gt;**, following the [store currency](/en/commerce/store-settings). The numbers you type are stored as-is and never converted.
