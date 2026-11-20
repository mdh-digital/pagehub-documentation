# Create a landing page

A landing page is **a single standalone page**: one address, one message, built for one campaign. It isn't attached to any website, so it doesn't follow a theme, doesn't get a menu, and shares its header and footer with nobody.

If you need more than one page, what you want is a [website](/en/website/create-website).

## Three ways to start

Open **Landing Page** → **New landing page**.

<Shot src="/img/landing/new-landing-options.webp">
The "New landing page" screen with three cards: Use a template, Build with AI, Start blank, each with an icon and a one-line explanation.
</Shot>

| | What you get | AI credits |
| --- | --- | --- |
| **Use a template** | A ready-made page from the gallery | Not used |
| **Build with AI** | A page assembled from your campaign description | Used |
| **Start blank** | An empty page | Not used |

### Build with AI

1. **Title** (optional) — if left blank, AI proposes one.
2. **What should this landing page be about?** — describe the goal and the content. For example:

   > A landing page for an online cooking class promo. Aimed at home cooks. Hero with a 50% discount, class benefits, a short curriculum, testimonials, pricing, and a signup form.

3. Continue.

AI asks a few questions, drafts a section plan, then writes the page section by section. See [How AI builds a page](/en/ai/how-generation-works).

::: tip Landing pages don't read a website's brand brief
Websites store a brand brief that automatically accompanies every generation. A landing page stands apart, so all the styling direction — colours, tone, audience — has to be in its own prompt.
:::

### Start blank

Just a **Page name** and an **Address**. The page is empty; you build it in the editor.

## Public address

```
https://<workspace>.pagehub.id/p/<slug>
```

The `p` segment is what separates it from a website. That's why `p` can't be used as a website address.

Landing page slugs are unique across a workspace.

## How it differs from a website page

| | Landing page | Website page |
| --- | --- | --- |
| Header & footer | On the page itself | From the shared [shell](/en/website/header-footer) |
| Theme | Its own | The website's global theme |
| Menu | None | The website menu is injected |
| Blog | Not available | Available |
| Selling products | Yes, through a checkout form on the page itself ([how](/en/commerce/sell-on-sites)) | Yes, through the storefront |
| Quota | **Landing** quota | **Website** quota |
| Block palette | Per page | Shared across a website |

Website and landing quotas are counted **separately** — a full website quota doesn't stop you creating landing pages.

## Opening a landing page's own screen

Clicking a landing page card opens the **editor** straight away. To open the landing page's own screen (products sold on it, SEO, tracking, leads), click **⋯** on its card and choose **Details**.

That screen has these tabs:

| Tab | Contents |
| --- | --- |
| **Overview** | Preview, the edit button, public address, status, views, and the **Products on this site** card for choosing what the page sells |
| **Settings** | Name, address, custom domain, SEO, tracking & pixels, ZIP export, delete |
| **Leads** | Form submissions from this page |
| **AI usage** | AI credits used on this page |
| **Sharing** | Read-only preview link and collaborators |

::: warning A landing page that sells products
If your landing page has a buy button or product cards, choose the products under **Overview → Products on this site**. A new landing page sells nothing until you pick, so its buy button cannot create an order. See [Selling on websites & landing pages](/en/commerce/sell-on-sites).
:::

## Managing the list

The **Landing Page** screen shows every landing page in the active workspace, with search and sorting (recently edited / name / most views). The **⋯** menu on each card offers **Open page** and **Copy link** (for published pages), **Details**, **Duplicate**, **Rename**, **Unpublish** and **Delete landing page**. ZIP download is in the **Settings** tab.

<Shot src="/img/landing/landing-list.webp">
The Landing Pages screen: cards with thumbnails, titles, view counts, last-edited time, and a three-dot menu. Above them a search box, a sort picker, and a "New landing page" button.
</Shot>

## When the account has no active plan

Landing pages always count against your **plan**. If the trial ends or the subscription stops, landing pages **go offline** and are later deleted, following the [active period flow](/en/account/subscription-lapse). This holds even if you have a [Partner Store](/en/commerce/partner-store): a Partner Store only makes its own store website free. To sell without a plan, build the promo page inside the Partner Store website.
