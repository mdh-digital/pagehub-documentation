# Navigation menu

The menu is the list of links that fills the `<nav data-eb-menu>` slot in the [website header](/en/website/header-footer). Because it's data — not HTML retyped on every page — changing one item takes effect across the whole site.

## Editing the menu

Open **Settings** → **Navigation menu**.

<Shot src="/img/website/menu-editor.webp">
The Navigation menu section: a list of items with drag handles, a Label field, a page picker dropdown, and a delete button per row. An Add button below.
</Shot>

Each item has two parts:

| Part | Contents |
| --- | --- |
| **Label** | The text visitors read, e.g. `About us` |
| **Slug** | The destination page inside this website |

Click **Add** for a new item, drag the handle to reorder, and click the delete icon to remove one. Don't forget **Save**.

## Slugs must point at a real page

The slug dropdown lists this website's pages. If an item points at a slug whose page has been deleted or renamed, PageHub flags it: *"No page with this slug"*. Fix it before saving — otherwise visitors clicking that item land on a 404.

## What gets added automatically

- **Blog.** When you [enable the blog](/en/blog/enable-blog), a `Blog` menu item is added for you.
- **Store pages.** When the [storefront](/en/commerce/storefront) is set up, you can add the products page to the menu like any other page.

These items can be renamed, moved or removed like any other.

## Menus on mobile

Headers built by AI always have a mobile variant: below roughly 900px the horizontal menu turns into a hamburger with a drawer. The same menu items are injected into both places — desktop nav and mobile nav — so you only maintain one list.

If you hand-write a header in code mode, provide both slots:

```html
<nav data-eb-menu></nav>          <!-- desktop -->
<nav data-eb-menu-mobile></nav>   <!-- mobile drawer -->
```

Leave both empty.

## Landing pages have no menu

A landing page stands alone and isn't attached to any website, so there's no menu to inject. Links on a landing page are written directly into it.
