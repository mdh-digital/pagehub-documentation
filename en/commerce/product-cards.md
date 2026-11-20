# Product cards & store blocks

Store blocks show products on any page: the homepage, a landing page or an article. You choose **which products** appear and **what the card looks like**, and the server fills in the price and stock every time the page is opened.

## Store blocks in the editor

As soon as the store is on, a **Store** group appears in the [block palette](/en/editor/blocks). Nothing has to be generated first.

<Shot src="/img/commerce/shop-blocks.webp">
The Store group in the editor's block palette: Featured products, Best sellers, Newest products, Chosen products, Products by category, Single product and Buy button — named in the website's language (Indonesian in this example store).
</Shot>

| Block | What it shows |
| --- | --- |
| **Featured / best sellers / newest** | A list picked automatically from the catalogue |
| **Chosen products** | Products you pick yourself, in the order you picked them |
| **Products by category** | Every product in one category |
| **Single product** | One product with its variant picker and buy buttons |
| **Buy button** | Just the button for one product |

## Setting up a block

Click a store block on the canvas. Its settings open on the **Attributes** tab.

<Shot src="/img/commerce/shop-block-panel.webp">
The store block panel on the Attributes tab: the product source, a button to choose products, the card choice, layout (grid, list, carousel), columns per screen size, the product limit and ticks for the parts to show.
</Shot>

What you can set:

- **Products**: the source, a category, or your own picks through a search window.
- **Card**: a card design from the library.
- **Layout**: grid, list or carousel.
- **Columns**: the number of columns on desktop, tablet and mobile.
- **Limit**: how many products appear.
- **Parts shown**: price, cart button, category, description, stock.

In the editor a block appears as a marker. The real products show in the preview and on the published page.

## The buy button follows the product

- A product with one variant goes straight into the cart.
- A product with variants sends the buyer to choose one first.
- A sold-out product shows a disabled button.

## Store design

**Websites → (pick a website) → Commerce tab → Store design** sets the look of every card from one place.

<Shot src="/img/commerce/shop-design.webp" wide>
The Store design page: a Store style section with pickers for button colour, card background, image ratio, radius, spacing and shadow; below it the card library, each card previewed with the store's real products.
</Shot>

### Store style

Button colour and its text, the sold-out badge colour, card background, image ratio, corner radius, spacing and shadow. One setting applies to every card. A colour left empty follows your site's colour.

### Card library

| Source | What it holds |
| --- | --- |
| **Built-in** | Classic, Minimal, Overlay, Horizontal, Compact, Featured product, Buy button |
| **Site design** | The card from the store pages the AI built for your site, when there is one |
| **Custom** | Cards you made yourself |

Every preview uses your store's real products.

### Custom cards

**New card** opens the card editor, with a visual mode, a code mode and a preview using real products. Deleting a card does not break a page: blocks that used it fall back to a built-in card.

## Price and stock are always current

A card stores no price. Each time a page is opened its content is read from the catalogue, so a change in price or stock shows at once on every page holding that block.

If the store is closed or has no products yet, a block shows nothing.
