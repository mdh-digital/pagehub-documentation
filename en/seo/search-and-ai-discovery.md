---
description: 'Your site''s sitemap.xml, robots.txt and feed.xml, the structured data written for you, the one-content-one-address rule, and what is worth fixing.'
---

# Search & AI discovery

Open a website → **Settings** → **Search & AI discovery**.

This page has no Save button, and that's deliberate: everything here is **regenerated from your content every time it's requested**. Nothing is stored, so nothing can go stale.

<Shot src="/img/seo/seo-panel.webp">
The "Search & AI discovery" panel: three file cards (sitemap.xml, robots.txt, feed.xml) each with an explanation, a URL count, and Copy URL and Download buttons; a "Worth fixing" section below listing findings.
</Shot>

## Three files

| File | Contents |
| --- | --- |
| **sitemap.xml** | Every public URL, with last-modified dates |
| **robots.txt** | Tells search engines what they may read, and where the sitemap is |
| **feed.xml** | Your blog as a feed — read by aggregators and AI answer engines |

The sitemap follows the active modules: articles are included if the blog is on, products if the store is on. The homepage isn't listed twice.

## What's automatic on your pages

Without configuring anything, every published page carries:

- **A canonical tag** pointing at the right address.
- **Open Graph & Twitter Card** from [page SEO](/en/editor/page-seo).
- **`lang` and text direction** from the [public site language](/en/website/settings), including `dir="rtl"` for Arabic.
- **JSON-LD**: `Organization`, `WebSite`, `BreadcrumbList`, plus `BlogPosting` on articles and `Product` (with price) on product pages.

Prices in structured data are read from the catalogue that **just rendered the page**, so the data and the screen can't disagree. Differing prices between the two is a spam signal to Google.

::: info Zero AI credits
This entire area is deterministic — computed from the database, not written by AI. A sitemap that invents URLs produces 404s; that's not a job for a language model.
:::

## One piece of content, one address

If a website has an active [custom domain](/en/website/custom-domain), the platform address **permanently redirects (301)** to it, query string included. The point is to avoid one piece of content living at two addresses, which forces search engines to guess which is canonical.

The only exception is the three crawler files above, which are still served at the platform address so the download buttons in this panel keep working.

[Share links](/en/editor/publishing) (`/share/...`) **never** get SEO tags, so your client previews won't show up in search results.

## Worth fixing

The list of findings at the bottom of the panel. None of them will stop your site being indexed — they determine how well it's **described** once it is.

| Finding | How to fix it |
| --- | --- |
| No custom domain yet | [Set up a custom domain](/en/website/custom-domain) |
| Published pages without a description | Fill in Description in [page SEO](/en/editor/page-seo) |
| Published pages without a title | Fill in Title |
| Articles without a description | Fill in Description in the article editor |
| Products without a description | Fill in Description on the product form |
| No share image | Fill in OG Image in the [website's default SEO](/en/website/settings) |
| The site has no description | Fill in Description in the website's default SEO |

## robots.txt and the platform address

::: warning A limitation worth knowing
`robots.txt` only fully applies on **your own domain**, because the platform address is shared by every site. Until you set up a custom domain, **submit your sitemap URL to Google Search Console yourself** — that's what the Copy URL and Download buttons in this panel are for.
:::

## Registering with Google

1. Open [Google Search Console](https://search.google.com/search-console) and add your property.
2. Verify ownership — easiest route: paste the verification tag through **Custom head script** in [Tracking](/en/website/tracking).
3. Submit the `sitemap.xml` URL from this panel.

## What isn't here yet

The next phase — bulk meta descriptions, FAQs with `FAQPage` structured data, `llms.txt`, and automated SEO audits — isn't available yet. Everything that exists today works without AI and without credits.
