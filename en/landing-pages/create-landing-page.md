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
| Blog & store | Not available | Available |
| Quota | **Landing** quota | **Website** quota |
| Block palette | Per page | Shared across a website |

Website and landing quotas are counted **separately** — a full website quota doesn't stop you creating landing pages.

## Landing page tabs

Open a landing page from the list:

| Tab | Contents |
| --- | --- |
| **Page** | Preview and the edit button |
| **Settings** | Name, address, tracking & pixels, delete |
| **Leads** | Form submissions from this page |
| **Sharing** | Read-only preview link and collaborators |

## Managing the list

The **Landing Page** screen shows every landing page in the active workspace — with search, sorting (recently edited / name / most views), and a ⋯ menu per card offering **Duplicate**, **Copy link**, **Download ZIP** and **Delete**.

<Shot src="/img/landing/landing-list.webp">
The Landing Pages screen: cards with thumbnails, titles, view counts, last-edited time, and a three-dot menu. Above them a search box, a sort picker, and a "New landing page" button.
</Shot>
