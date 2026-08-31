# Editor basics

The editor is where you'll spend most of your time in PageHub. One page, three ways to edit it, all writing to the same HTML.

<Shot src="/img/editor/overview.webp" wide>
The page editor at full width: top toolbar with a back button, page title and slug, three mode buttons (Visual, Code, AI), a viewport picker, a "Saved" indicator, plus Save and Publish. Outline panel on the left, page canvas in the middle, properties panel on the right.
</Shot>

## Three modes

| Mode | For |
| --- | --- |
| **Visual** | Click an element, change text/colour/spacing, drag to move. [Details](/en/editor/visual-mode) |
| **Code** | Raw HTML. For when you know exactly what to change. [Details](/en/editor/code-mode) |
| **AI** | Chat. Ask for changes in plain language. [Details](/en/editor/ai-chat) |

Switch freely at any time. A change in one mode shows up immediately in the others — because only one thing is stored: the page's HTML.

The editor opens in **Visual** mode by default.

## The toolbar

Left to right:

- **Back to website** / **Back to landing pages** — leave the editor.
- **Page title** and **slug**. Both editable right here.
- **Switch page** — jump to another page in the same website without leaving the editor.
- **Undo / Redo**.
- **Mode**: Visual · Code · AI.
- **Viewport**: Desktop · Tablet · Mobile — changes the canvas width, not the page.
- **Refresh preview** — when the preview feels out of sync.
- **More tools** (⋯) — see below.
- **Save state**: *Unsaved* → *Saving…* → *Saved* → *Save failed*.
- **Save** and **Publish**.

## More tools (⋯)

| Item | What it does |
| --- | --- |
| **SEO & Appearance** | Title, description, keywords, OG image, favicon, thumbnail. [Details](/en/editor/page-seo) |
| **Version history** | Page snapshots you can restore. [Details](/en/editor/history) |
| **Submissions** | Form submissions from this page |
| **Save as template** | Turn this page into a reusable template |
| **Download ZIP (html/css/js)** | Export the page as files |
| **Keyboard shortcuts** | The shortcut list |

## Saving

- **Save** (<kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>S</kbd>) saves a draft. Not live.
- **Publish** saves **and** publishes.

An already-published page still needs **Publish** after each change — if you only **Save**, visitors keep seeing the old version. See [Publishing a page](/en/editor/publishing).

## Website pages vs landing pages

If this page belongs to a website and that website has a [shell](/en/website/header-footer), the editor shows a note:

> The header and footer are shared from the website shell. Here you edit only the content.

The **Edit shell** button beside it takes you to the header/footer editor. The preview still shows the page **with its shell**, so what you see matches what visitors get.

Landing pages have no shell — everything, header to footer, is on that page.

## Read-only mode

If your access to this page is **viewer**, the toolbar shows a **View only** pill and all editing controls are disabled. You can still look around, open the preview, and switch pages.

## Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>S</kbd> | Save |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>C</kbd> / <kbd>X</kbd> / <kbd>V</kbd> | Copy / cut / paste an element |
| <kbd>Delete</kbd> | Delete the selected element |

Element shortcuts only apply in **Visual** mode. The full list is under ⋯ → **Keyboard shortcuts**.
