# Block palette

The **Blocks** panel on the left of the editor holds ready-made page pieces. They come from two places: built-in blocks, and blocks **AI derives from your own page design**.

<Shot src="/img/editor/blocks-panel.webp">
The Blocks tab in the editor's right panel (next to the Attributes tab): a "Your saved blocks" section with forms and store blocks (Featured products, Best sellers, Single product, Buy button, and more — store blocks are named in the website's language) and a "Regenerate blocks" button, then the "Built-in blocks" fold with the Layout group and the rest.
</Shot>

## Built-in blocks

| Group | Contents |
| --- | --- |
| **Basic** | Heading, Text, Button, Image |
| **Layout** | Container, 2 columns, 3 columns, 4 columns, Content + sidebar |
| **Ready-made sections** | Hero, Features, Pricing, Testimonial, FAQ, Call to action, Form |

Click to insert inside the selected element, or drag onto the canvas.

The catch: built-in blocks look generic. Dropped into a page with a strong design, they read as patches.

Two blocks work differently from the rest. The **Form** block opens a form picker; see [Form builder](/en/leads/form-builder). When the store is on, a **Store** group appears in the palette too; see [Product cards & store blocks](/en/commerce/product-cards).

## Blocks from this design

Which is why there's **Blocks from this design**. Click **Match my design** and AI reads the design of the page you have open — its colours, spacing, button shapes, card styling — then rebuilds the whole block set in that style.

The result: heroes, forms, pricing tables and the rest that look like they were part of the page all along.

| Button | When to use it |
| --- | --- |
| **Match my design** | The first time you derive blocks from a page's design |
| **Rebuild blocks** | After you've substantially changed the page's CSS or HTML |
| **Use the defaults** | Go back to the generic set |

::: warning Rebuilding replaces the old set
The existing block set is replaced, not added to. Blocks **you saved yourself** ("Your saved blocks") are not touched.
:::

If the page is still empty, the button won't work — there's no design to learn from. Add some content first.

### Automatic after an AI build

A website made with the AI build **gets its own design block set straight away**. The blocks are prepared at the end of the build, so the Blocks panel is already filled when you open the editor and there is nothing to press. Their credit use is part of the build estimate.

**Rebuild blocks** is still there for after a big design change.

## Scope: website vs landing page

This explains why results can feel different between the two:

| | Website | Landing page |
| --- | --- | --- |
| Block set stored on | The website (shared by all its pages) | The page itself |
| New block CSS goes into | The website's global stylesheet, in a marked segment | Planted once when the block is inserted |

So for a website, deriving blocks once benefits every page in the site. For a landing page, each page has its own set — consistent with landing pages being standalone by nature.

## AI credits

Deriving blocks from a design uses [AI credits](/en/ai/credits). Doing it once per website is usually enough — you only need to rebuild when the design changes substantially.

## Your saved blocks

Beyond built-in and design-derived blocks, you can save any element as a block:

1. Select it in [visual mode](/en/editor/visual-mode).
2. Click **Save as block**.
3. Give it a **Block name** and pick an **Icon**.

It appears under **Your saved blocks**, ready to reuse.

## Label language

Block labels follow the app language active when the blocks were generated. If you switch language and want the labels to follow, rebuild the blocks.
