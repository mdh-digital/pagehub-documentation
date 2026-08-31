# History & undo

There are three separate safety nets, and each saves you from something different.

## 1. Undo / Redo

For a mistake you just made.

| Shortcut | Action |
| --- | --- |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |

The buttons are in the toolbar too. This covers edits made in the current editor session — including changes that came from [AI chat](/en/editor/ai-chat).

Close the editor and the undo history is gone.

## 2. Undo the last AI change

The AI chat panel has **Undo last change** — it puts the page back to how it was before the most recent AI reply was applied. Useful when one request changed more than you meant.

## 3. Version history

For "yesterday it was fine, today it's a mess."

Open ⋯ → **Version history**.

<Shot src="/img/editor/version-history.webp">
The Version history panel: a list of snapshots with dates and times, a Restore button on each row, and a "Save version" button at the top.
</Shot>

### When snapshots are taken

Two moments:

1. **Every time you Publish.**
2. **When you click "Save version"** yourself.

Saving an ordinary draft (**Save**) does **not** create a snapshot. So if you're about to experiment wildly, click **Save version** first as a point to return to.

### Restoring

Click **Restore** on the version you want. The page content reverts to it.

Two things to remember:

- Restoring changes the **draft**. To let visitors see it, you still need to **Publish**.
- A restore can itself be undone (<kbd>Ctrl</kbd>+<kbd>Z</kbd>) as long as the editor is still open.

### Retention

PageHub keeps roughly the **last 50 versions per page**. Older ones are dropped automatically to make room.

## If the page is already deleted

Version history lives inside the page, so deleting a page deletes its history. For anything that really must not be lost:

- **Download ZIP** from the ⋯ menu saves a copy of the page to your computer.
- **Save as template** stores the entire website as a [template](/en/website/website-templates) that lives independently of the original.
