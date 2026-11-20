---
description: 'Practical SEO steps for websites and landing pages in PageHub: each page''s SEO, a worked example, the sitemap in Search Console, and content that gets found.'
---

# How to optimise SEO for a website / landing page

This guide puts PageHub's existing SEO features into one working order. Each feature has its own page with the details; here you get the **order** and one real example.

In short:

1. Fill in each page's SEO (title, description, slug, share image).
2. Check the sitemap and the site-level SEO settings.
3. Submit the sitemap to Google Search Console.
4. Write content worth finding.
5. Wait, then measure.

## Step 1: Fill in each page's SEO

Open the page in the editor → **⋯** → **SEO & appearance**. The panel opens with previews: how the page looks in Google results (mobile/desktop) and the card shown when the link is shared.

Fill it in, in this order:

| Field | What goes in | Guide |
| --- | --- | --- |
| **Focus keyphrase** | The one phrase you are after, for example *baking course depok* | Not written to the page. Only used by the checks |
| **Title** | The title in the browser tab and in Google results | **30–60 characters**. Say what it is first, business name last |
| **Description** | The summary under the title in Google | **120–160 characters**. A full sentence that makes people want to click |
| **Slug** | The last part of the address, for example `/baking-course` | Short, with the key words. **Don't change it after publishing**: links already shared stop working |
| **OG image** | The picture shown when the link is pasted into WhatsApp, Facebook, Slack | Landscape, around **1200×630 px** |
| **Thumbnail** | The page's card image in the dashboard | Only for you; no SEO effect |

Below them are length meters for the title and description, then the **Checks**:

- title and description within the suggested length;
- a share image is set;
- if a focus keyphrase is set: the phrase appears in the title, the description and the slug.

The phrase is checked **whole and in order**. The same words in a different order do not count.

Full details for each field: [Page SEO](/en/editor/page-seo).

## Example: an ebook sales page

First draft (an Indonesian page):

- **Focus keyphrase:** `ebook bisnis online`
- **Title:** `Bisnis Online Modal 20 Ribu — Ebook Panduan Lengkap` (51 characters)
- **Description:** `Ebook 135 halaman: cara membuat landing page, website, dan toko online sendiri dengan modal Rp20 ribu. Langkah demi langkah, tanpa coding.` (138 characters)

The title and description lengths are within range. But the phrase checks **fail for the title and the description**: both contain the words "ebook", "bisnis" and "online", just not as the phrase *ebook bisnis online* in that order.

Two ways out:

1. Change the focus keyphrase to a phrase that is there, for example `bisnis online modal 20 ribu`, **or**
2. Adjust the text so the phrase appears whole:
   - **Title:** `Ebook Bisnis Online Modal 20 Ribu — Panduan Lengkap` (51 characters)
   - **Description:** `Ebook bisnis online 135 halaman: cara membuat landing page, website, dan toko online sendiri dengan modal Rp20 ribu. Langkah demi langkah, tanpa coding.` (152 characters)
   - **Slug:** `ebook-bisnis-online` (only if the page has not been shared yet)

Then set a landscape **OG image** of the ebook cover, so links shared on WhatsApp show a picture.

## Step 2: Check site-level SEO

For a website: open the website → **Settings** → **Search & AI discovery**. It has the automatic `sitemap.xml`, `robots.txt` and `feed.xml`, plus a **Worth fixing** list (for example published pages with no description). Clear that list first.

Written for you automatically: the canonical tag, structured data (JSON-LD) for the organisation, articles and products, and the Open Graph and Twitter share tags. Details: [Search & AI discovery](/en/seo/search-and-ai-discovery).

**Your own domain helps.** With a [custom domain](/en/website/custom-domain), the canonical and the sitemap point at your domain, and `robots.txt` applies in full. On the platform address `robots.txt` is shared, so submit your own sitemap to Google (step 3).

## Step 3: Submit the sitemap to Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) and add a property for your site's address (your custom domain, or the full PageHub address).
2. Verify ownership. Easiest: choose the **HTML tag** method, copy the `<meta name="google-site-verification" …>` tag, and paste it into **Custom head script** on the website's [Tracking](/en/website/tracking) tab. Save, then click **Verify** in Search Console.
3. In PageHub, open **Settings** → **Search & AI discovery** → the **sitemap.xml** card → **Copy URL**.
4. In Search Console, open **Sitemaps**, paste the URL and click **Submit**.
5. For an important page you just published, paste its address into the **URL inspection** box at the top and click **Request indexing**.

**Landing pages** have no sitemap of their own. Register their address through **URL inspection** (step 5). The verification tag can go in the tracking section of that landing page's **Settings** tab.

## Step 4: Content worth finding

The settings above only help search engines read your page. What makes it show up is still the content.

- **Write blog articles** for the questions your buyers actually search. Articles have their **own SEO title**, separate from the headline; fill it in the SEO card under the article. See [Writing articles](/en/blog/write-articles).
- **Use headings in order.** One H1 per page (the main title), then H2 for sections and H3 for sub-sections. Don't bold ordinary text to make it look like a heading.
- **Fill in image Alt text.** In [Visual mode](/en/editor/visual-mode), click the image → **Attributes** tab → **Alt**. Say what the image shows, for example *"Cover of the Bisnis Online Modal 20 Ribu ebook"*.
- **Link between your pages.** From an article to a product page, from the homepage to a service page. Internal links help search engines find your other pages, and help readers.
- **Keep pages light.** Don't paste images into the HTML as base64 code. Upload them to the [File Manager](/en/media/file-manager) and use the URL. Heavy images slow the page down, and slow pages hurt rankings.

## How websites and landing pages differ

| | Website page | Landing page |
| --- | --- | --- |
| Fallback SEO values | Inherits the website's **default SEO**: the site's title, description, share image and favicon are used when the page leaves them empty | None. Anything you leave empty in that page's SEO panel stays empty |
| sitemap.xml | Included automatically | None; register it through URL inspection |
| A blog to bring in visitors | Yes | No |

So for a **landing page**, fill the **SEO & appearance** panel completely, OG image included. For a **website**, set the default SEO in [Website settings](/en/website/settings) first, then fill the panel on each important page.

## What to expect

- Google needs time to find and index new pages, usually **a few days to a few weeks**. The **Pages** report in Search Console shows which are indexed.
- Filling every field correctly **does not guarantee a ranking**. It makes your page read correctly; where it ranks depends on content, competition and time.
- Measure in Search Console (the queries that bring clicks) and in PageHub [Reports](/en/reports/overview) (traffic per page), then improve the pages that are starting to appear.
