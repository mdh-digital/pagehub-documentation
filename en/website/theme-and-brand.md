# Theme & brand

Two layers govern how a website feels: the **global theme** (the colours and fonts its pages use) and the **brand brief** (the description AI reads every time it builds something for this website).

## Global theme

Found under **Settings** → **Global theme**.

<Shot src="/img/website/theme-global.webp">
The "Global theme" card: colour swatches for Primary colour, Background and Text colour, plus a Font family dropdown with a search box.
</Shot>

| Field | Used for |
| --- | --- |
| **Primary colour** | Buttons, links and accents across the site |
| **Background** | Page background |
| **Text colour** | Main text colour |
| **Font family** | The typeface for the whole site |

The font picker is grouped: System, Sans-serif, Serif, Display, Handwriting, Monospace. There's a search box if you already know the name. **Google Fonts load automatically when the page is served** — you don't have to paste any tags.

::: tip A theme is a starting point, not a straitjacket
The global theme sets defaults. If one page needs a different colour, you can still change it on that page through [visual mode](/en/editor/visual-mode) or [code mode](/en/editor/code-mode).
:::

### Landing pages don't follow the theme

[Landing pages](/en/landing-pages/create-landing-page) stand alone: their styling is baked into the page. Changing a website theme doesn't touch any landing page.

## The brand brief

When you create a website with AI, PageHub synthesises a **brand brief** from the name and description you wrote: tone of voice, who the audience is, keywords, and language.

That brief is stored on the website and **goes to the AI every time** you:

- generate a new page,
- ask for a revision in AI chat,
- write a blog article,
- derive a block palette from the design.

The result: your tenth page still feels like a sibling of the first, not something borrowed from another site.

How to improve it: improve the website's **Name** and **Short description** in Settings. A good description says *what you sell, to whom, and what impression you want*.

::: warning Landing pages don't read the brand brief
The brand brief belongs to a website. A standalone landing page stands apart, so all the styling direction has to live in its own prompt.
:::

## App appearance ≠ site appearance

Easy to confuse, so let's be explicit:

| | What it controls | Who sees it |
| --- | --- | --- |
| **Tweaks panel** | Colours and dark mode of the **PageHub dashboard** | You and your team |
| **Global theme** | Colours and fonts of **published pages** | Your site's visitors |
| **Brand page** | The brand shown **inside the builder** (logo, product name) | You, your team, and clients you invite |

The Brand page is covered in [Brand & white label](/en/team/brand-white-label).
