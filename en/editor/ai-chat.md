# AI chat

The **AI** mode in the editor is a conversation about the page you have open. You ask, AI changes it, the result lands in the page.

<Shot src="/img/editor/ai-chat.webp" wide>
AI mode: a chat panel on the left with the conversation history (your requests and AI replies showing token counts), a compose box below with an attach-image button and Send; the page preview on the right.
</Shot>

## How to use it

Write your request and press <kbd>Enter</kbd> (<kbd>Shift</kbd>+<kbd>Enter</kbd> for a new line). Good examples:

- `make the colours green`
- `drop the navbar`
- `add a three-column testimonials section below pricing`
- `the hero copy is too long, cut it to one sentence`
- `make the buttons bigger and rounder`

AI **remembers the earlier conversation** on this page. So after "make it green" you can just say "a bit darker" without repeating context.

## Watching the AI work

While the AI works on your request, the chat shows its steps one by one: **reading** the page, **analysing**, **writing** each file with a character count that keeps growing, **checking**, then **saving**. There is a timer, and you can peek at the code as it is written.

When it finishes, one summary line stays in the chat, for example *"Done in 42 s · content +12 −3"*: how long it took, which files changed, and how many lines were added or removed. Click the line to see the list of steps again. The summary is still there after the page is reloaded.

If a request fails, the step it failed at is recorded too.

## Attachments

The clip button lets you attach:

- **Images** — AI can see them. Useful for "build a hero like this example" or "use the colour scheme from this image." Availability depends on the AI provider in use; if the button isn't there, this mode isn't available on your installation.
- **Files** — automatically saved into this page's media folder.

You can also paste an image straight from the clipboard into the compose box.

## Interactive build

For big changes — reassembling a whole page — use **Interactive build** above the chat panel. The flow is different: AI **asks first**, drafts a **plan**, then builds **section by section**.

See [How AI builds a page](/en/ai/how-generation-works).

## Applying and undoing

Changes from chat land in the editor and show up immediately in the preview. If the result isn't right:

- **Undo last change** in the chat panel, or
- <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Z</kbd> in the editor, or
- restore an older version from [History & undo](/en/editor/history).

While AI is still writing, a **Stop** button lets you cut it short.

## Tokens & credits

Every AI reply shows its own usage (`1,240 tokens · 820 in · 420 out`). That number is what drives [AI credit](/en/ai/credits) consumption.

How to spend less without losing quality:

- **One request, one intent.** "Make it green then add an FAQ then fix the footer" costs more and misses more often than three separate requests.
- **Name the section.** "In the pricing section, …" is cheaper than letting AI guess.
- **New chat for a new topic.** A long history is re-sent with every turn.

## New chat

**New chat (clear history)** empties this page's conversation. The page itself doesn't change — only the memory is reset.

Chat history per page is kept to a limited length (around the last 40 messages); older ones are dropped automatically.

## Read-only mode

If your access is viewer, the compose box reads *"View only — you can't edit this page"* and chat is disabled.
