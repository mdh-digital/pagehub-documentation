---
description: 'The header and footer are stored once at website level and used by every page: how to create one, extract it from an existing page, and the menu slot.'
---

# Header & footer

Inside a website, the header and footer are stored **once** at website level — this is called the *shell*. Each page only stores its content. When a visitor opens a page, PageHub composes them together:

```
┌─────────── header (shell) ───────────┐
│                                      │
│            page content              │
│                                      │
└─────────── footer (shell) ───────────┘
```

The effect: changing a phone number in the footer is done for 30 pages at once.

## Creating a shell

The **Pages** tab has a **Header & Footer** card.

<Shot src="/img/website/shell-card.webp">
The "Header & Footer" card above the page list, with an "active" or "not built yet" status marker, a one-line explanation, and the buttons "Create header & footer" and "Extract from an existing page".
</Shot>

Two routes:

### Generate a new one

Click **Create header & footer**. AI builds a header (logo plus a menu slot) and a footer that follow this website's theme and brand.

### Extract from an existing page

If you already have a page with a good header, click **Extract from an existing page** and pick it. PageHub lifts the first header (or `<nav>`) and footer out of that page into the global shell; the rest stays as that page's content.

Then tidy the result in the shell editor.

## The shell editor

Open it with **Edit header & footer**. It's the same editor as any page — Visual, Code and AI chat all work — except what you edit is only the header and footer.

<Shot src="/img/website/shell-editor.webp" wide>
The shell editor: a file panel on the left listing Header and Footer with the note "used by every page", and a preview in the middle showing the header at the top and footer at the bottom with an empty content area between them.
</Shot>

When you open an ordinary page that uses the shell, the editor shows a note: *"The header and footer are shared from the website shell. Here you edit only the content."* — with an **Edit shell** button beside it.

## The menu slot

Inside the header there's one special element:

```html
<nav data-eb-menu></nav>
```

It is **deliberately left empty**. The website's [navigation menu](/en/website/navigation-menu) items are injected here automatically when the page is served. So you don't need to — and shouldn't — hand-write menu links in the header HTML.

If you're writing your own header CSS, two things to remember:

- Menu items are injected as a list of `<a>` elements **directly** inside that `<nav>` — there is no `<ul>`/`<li>`. So put spacing on the nav itself (`nav[data-eb-menu] { display:flex; gap:1.5rem }`), not on `nav ul`.
- The mobile header usually has a second slot, `<nav data-eb-menu-mobile></nav>`, for the hamburger drawer.

## Pages that don't use a shell

Older pages built before the shell system still carry their own header and footer, and are still rendered as-is. Nothing is broken — but they also don't change when you edit the shell. To bring one into the fold, copy its content into a new page, or use **Extract from an existing page**.

Landing pages **never** use a shell: they stand alone, header and footer included.
