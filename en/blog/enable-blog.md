# Turn on the blog

The blog is a per-website module: articles that pull in search traffic and give AI answer engines something to quote.

## Enabling it

Open a website → the **Blog** tab → **Enable blog**.

<Shot src="/img/blog/blog-inactive.webp">
The Blog tab before activation: a "Blog not enabled" heading, an explanation that the article list and detail pages will be generated to match the website design, and an "Enable blog" button.
</Shot>

What happens:

1. AI **builds the article list and article detail pages** to match this website's design — its theme, header, footer and card styling.
2. A **Blog** item is added to the [navigation menu](/en/website/navigation-menu).
3. The `blog` slug is reserved for this module, so it can't be used by an ordinary page.

If AI isn't available, the blog still turns on with the built-in template — it just looks more generic.

::: tip You can also turn it on from the start
When [creating a website with AI](/en/website/create-website) there's a **Use blog / articles** option. Same effect.
:::

## Blog addresses

```
https://<workspace>.pagehub.id/<website>/blog            ← article list
https://<workspace>.pagehub.id/<website>/blog/<slug>     ← one article
```

Or on a [custom domain](/en/website/custom-domain): `https://yourdomain.com/blog`.

## Blog appearance

Set under **Settings** → **Blog appearance**:

| Option | Values |
| --- | --- |
| **Sidebar** | None · Left · Right |
| **Search widget** | On / off |
| **Categories widget** | On / off |
| **Latest articles widget** | On / off |
| **Share buttons on article pages** | Pick which platforms appear |

A small note: Instagram has no share-by-URL, so what's offered there is **Copy link**.

The text PageHub adds around your articles (widget titles, pagination buttons, month names) follows the **[public site language](/en/website/settings)**, not your dashboard language.

## Regenerating the template

If the website design changes a lot and the blog pages start to feel foreign, click **Regenerate template** on the Blog tab. AI rebuilds the list and detail pages to match the current design.

Your articles are **not** touched — only the frame is rebuilt.

This uses [AI credits](/en/ai/credits).

## Categories

The **Blog → Categories** tab is the master list: used for filters, sidebar widgets and related articles.

- **Add** by typing a name and clicking Add.
- **Rename** a category at any time.
- **Delete** a category: articles in it become uncategorised — the articles themselves are not deleted.

<Shot src="/img/blog/blog-categories.webp">
The Categories tab: a table with category name, URL slug and article count; a "New category name" field with an Add button above the table.
</Shot>

## What's automatic for SEO

Once the blog is on and articles are published:

- Articles enter `sitemap.xml` and `feed.xml`.
- Each article gets **BlogPosting** structured data.
- Each article gets its own `meta description` from its Description field.

See [Search & AI discovery](/en/seo/search-and-ai-discovery).
