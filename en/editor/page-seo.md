---
description: 'Set the title, description, keywords, OG image and favicon per page, plus the canonical tags and structured data PageHub already writes for you.'
---

# Page SEO

Open ⋯ → **SEO & Appearance** in the editor.

<Shot src="/img/editor/page-seo.webp">
The "SEO & Appearance" panel: a Thumbnail uploader at the top, then Title, Description, Keywords as chips, OG Image and Favicon URL — the last two with a "Pick from File Manager" button.
</Shot>

## The fields

| Field | Where it shows | Quick guidance |
| --- | --- | --- |
| **Thumbnail** | The page card on your PageHub dashboard | For you only; visitors never see it |
| **Title** | Browser tab and the search-result headline | Around 50–60 characters. Name the page, then the business |
| **Description** | The summary under the headline in search results | Around 140–160 characters. A real sentence, not a pile of keywords |
| **Keywords** | Meta keywords | Type then Enter or comma. Modern search engines weigh these lightly |
| **OG Image** | The preview image when shared on WhatsApp / Facebook / X | 1200×630 px is the safest ratio |
| **Favicon URL** | The small browser-tab icon | Usually set once at website level |

**OG Image** and **Favicon URL** can be picked straight from the [File Manager](/en/media/file-manager).

## Defaults come from the website

New pages inherit the **Default SEO** values set in [Website settings](/en/website/settings). What you fill in here overrides them, **for this page only**.

Changing the website's default SEO does **not** change pages that already exist.

## What's automatic

Some things you don't have to touch — PageHub writes them into published pages:

- **A canonical tag** pointing at the correct address (the custom domain if there is one, the platform address otherwise).
- **Open Graph & Twitter Card** built from the Title, Description and OG Image above.
- **`lang` and text direction** from the [public site language](/en/website/settings) — including `dir="rtl"` for Arabic sites.
- **JSON-LD structured data**: Organization, WebSite, BreadcrumbList, plus BlogPosting for articles and Product for product pages.
- **A `sitemap.xml` entry** for every published page.

Details: [Search & AI discovery](/en/seo/search-and-ai-discovery).

## What makes the biggest difference

1. **Descriptions that are actually written.** Published pages without a description are flagged in the dashboard's "Needs attention" panel — a good to-do list.
2. **Titles that differ per page.** Ten pages with identical titles bury each other in search results.
3. **Sensible slugs.** `/pricing` beats `/page-3`. Change it before the page spreads.
4. **Alt text on images.** Set in the [visual mode](/en/editor/visual-mode) properties panel.

## Blog articles

Articles have their own SEO fields in the article editor, not here. See [Writing articles](/en/blog/write-articles).
