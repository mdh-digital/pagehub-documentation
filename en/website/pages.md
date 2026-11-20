# Manage pages

The **Pages** tab is a website's home base: create pages, reorder them, publish them, and jump into the editor.

<Shot src="/img/website/pages-tab.webp" wide>
A website's Pages tab: the page list with drag handles, titles, a "homepage" badge on the first one, view counts, published/draft status, and open, edit and menu buttons. In the right column, the "Header & Footer" card and then the "At a glance" panel with the public URL, page count, total views, custom domain and blog status.
</Shot>

## New page

Click **New page**. A template picker appears:

- **Blank** — an empty page for you to fill.
- **Page templates** — ready-made layouts (About, Contact, Pricing and so on), with a search box above them.

Once picked, you go straight into the editor.

::: tip The first page offers to extract a shell
If your website has no global header/footer yet and you already have a page with a good header, this dialog offers to lift that page's header and footer into a global shell. One click, and every page after it only needs content.
:::

## Order & homepage

The page **at the top becomes the homepage** — the one served when someone opens the website address without naming a page.

Reorder by dragging the handle on the left of a card. With a keyboard, the handle can be focused and moved with arrow keys — moves are announced to screen readers.

Shortcut: any page's ⋯ menu → **Set as homepage**.

## Per-page actions

| Action | What it does |
| --- | --- |
| **Edit** | Open the editor |
| **Open in new tab** | View the live version |
| **Copy link** | Copy the page's public URL |
| **Set as homepage** | Move it to the top |
| **Duplicate** | A copy of the page, as a draft |
| **Unpublish** | Back to draft; the address stops serving |
| **Delete page** | Permanent |

## Status

Each page shows **Published** or **Draft**, when it was last edited, and its view count. The **At a glance** panel sums it up: `3 published · 2 drafts`.

## Page slugs

The slug is the last part of the address: `.../sweet-cakes/about-us`. It's set in the editor, next to the page title.

Rules: lowercase, digits, hyphens. Unique within a website — two published pages can't share a slug.

::: warning Some slugs are reserved
`blog`, `invoices`, `products`, `cart`, `checkout` and `p` can't be used for ordinary pages — they already belong to the blog, store and landing-page modules. PageHub will refuse them.
:::

::: warning Changing a slug kills old links
If the page is live and its address is already out there, changing the slug turns old links into 404s. Only change it when you must.
:::

## The Header & Footer card

The top card shows the state of the website's shell:

- **active** — it exists; the button reads **Edit header & footer**.
- **not built yet** — the button reads **Create header & footer**, plus **Extract from an existing page**.

Details: [Header & footer](/en/website/header-footer).

## At a glance

The right-hand summary: the **public URL** (copyable), the number of **pages**, **total views**, and **custom domain** status (`Not set` if you haven't configured one).
