# Categories & variants

Two master lists your products reuse.

## Product categories

**Commerce → Product categories**. The grouping shown in the catalogue and used as filters on the [storefront](/en/commerce/storefront).

<Shot src="/img/commerce/categories.webp">
The Product categories page: a table with Icon, Name and product-count columns; a "New category" button in the top right and a search box.
</Shot>

| Field | Notes |
| --- | --- |
| **Category name** | e.g. `Rooms`, `Packages`, `Accessories` |
| **Icon** | Optional, picked from the [File Manager](/en/media/file-manager). Shown beside the category name in the catalogue |

Deleting a category does **not** delete the products in it — they simply lose their category.

Each category has its own slug, used in storefront filter URLs.

## Master variants

**Commerce → Master variants**. Reusable option sets you can apply to any product: Colour, Size, Flavour, Duration.

<Shot src="/img/commerce/variants.webp">
The Master variants page: a list of variants with names (Colour, Size) and their option chips beneath (Red, Blue, Black), plus a count.
</Shot>

| Field | Notes |
| --- | --- |
| **Variant name** | The kind of option — `Colour`, `Size`, `Flavour` |
| **Options** | The values. Type then Enter or comma. Duplicates are dropped |

::: info No prices or stock here
A master variant stores only the *list of options*. Price and stock are always set per product, on that product's variant rows.
:::

Deleting a master variant does **not** change products already built from it — those products carry their own copy of the options.

## How the two are used

On the product form, in the **Options** section:

1. Click **From a master variant** to pull in a ready-made set — or **Add option** to type one specific to this product.
2. Click **Generate combinations**.

Every combination becomes a variant row, and each row gets its own price, cost price, stock, weight, image and wholesale tiers.

Example: `Colour (Red, Blue)` × `Size (S, M, L)` = **6 variant rows**.

See [Products](/en/commerce/products).

## Master or manual?

| Situation | Choice |
| --- | --- |
| The same options used by many products | **Master variant** — write once, reuse |
| Options specific to one product | **Add option** directly on that product |

There's nothing wrong with mixing both on one product.
