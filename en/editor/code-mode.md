# Code mode

**Code** mode shows the page content as it really is: HTML. No translation layer, no special format. What you see here is exactly what's stored and served to visitors.

<Shot src="/img/editor/code-mode.webp" wide>
Code mode: an HTML editor with line numbers and syntax highlighting on the left, and a live preview on the right that updates as you type.
</Shot>

## When to use it

- Pasting HTML snippets from elsewhere.
- Fixing one attribute that's awkward to reach by clicking.
- Adding a `<script>` or `<style>` specific to this page.
- Checking what AI actually wrote.

## The file panel

For website pages that use a shell, the left panel separates:

| Section | Contents |
| --- | --- |
| **Content** | This page's HTML only |
| **Header / Footer** | Part of the [shell](/en/website/header-footer) — labelled *used by every page* |

Watch that label before editing: changing the header changes it for the **whole** website.

## Tag warnings

The editor flags the two mistakes that break pages most often:

- `Tag <div> is not closed.`
- `Tag </section> does not match.`

These are warnings, not blockers — you can still save. But unbalanced tags usually make [visual mode](/en/editor/visual-mode) misread the page structure.

## Preview

The preview on the right follows what you type. For website pages it shows the page **with its shell** (marked *with shell*), so what you see is what visitors get.

If the shell can't be composed, a note appears — *"Failed to compose the shell — showing raw content"*; click **Refresh preview**.

## Things to watch

**Don't hand-write menu links.** The `<nav data-eb-menu></nav>` slot in the header must stay empty — [navigation menu](/en/website/navigation-menu) items are injected there automatically.

**Scripts on published pages.** A `<script>` you write into a page goes live with it. For scripts that must run on **every** page (analytics, pixels), use [Tracking & pixels](/en/website/tracking) instead of pasting into each page.

**AI-generated blocks have scripts stripped.** Blocks produced by the [block palette](/en/editor/blocks) may not carry `<script>`; those parts are removed when the blocks are generated.

**Forms.** Each field's `name` attribute becomes the column name in [Leads](/en/leads/form-submissions). Fields without a `name` are not stored.

**Images.** Use URLs from the [File Manager](/en/media/file-manager). Images hosted elsewhere can vanish without warning.

## Moving between modes

Type in code mode → switch to visual: the structure is read immediately. Change something in visual → back to code: the change is there as ordinary HTML.

The only thing that breaks this loop is invalid HTML. If visual mode suddenly can't select something it usually can, check the tag warnings in code mode.

## Export

⋯ → **Download ZIP (html/css/js)** downloads this page as plain files — useful as an archive or when handing work over.
