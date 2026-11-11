# How AI builds a page

PageHub's AI doesn't fire off a whole finished page from one sentence. It works in stages — and those stages are visible on screen, so you can correct course before credits are spent on the wrong thing.

## Four stages

```
1. Questions  →  2. Plan  →  3. Design & shell  →  4. Sections one by one
```

### 1. Questions

AI reads your idea, then walks you through a handful of multiple-choice questions — one question per screen, with a step counter above it: the visual mood, the accent colour, the typeface, and which sections you need.

<Shot src="/img/ai/build-questions.webp">
One question from the wizard: a "Step 2 of 7" counter above, the question "What visual theme do you want?", then option cards with small previews — with "Decide for me" as the first card.
</Shot>

Don't want to think about it? Every question has **Decide for me** — AI chooses, and the choice is marked so you know which answers weren't yours.

### 2. Plan

From your answers, AI drafts the list of sections it will build, each with a name and a summary.

<Shot src="/img/ai/build-plan.webp">
The "Plan — here's what will be built" screen: a list of section cards (Header & Footer, Hero, Features, Testimonials, Pricing, Contact) that can be renamed or removed, with a credit estimate underneath.
</Shot>

You can still intervene here: rename sections, or drop the ones you don't need. Below sits a **credit estimate** and your remaining balance — if it's short, you're warned before anything starts.

### 3. Design & shell

AI settles the design direction once, up front — colour palette, typography, spacing, button style — then builds the header and footer (for websites).

Those design decisions are reused for every section that follows. That's why the result reads as one piece rather than a collage.

### 4. Sections one by one

Each section is written separately. The screen shows the running stage and which section it is on out of how many, so you always know how far along it is.

<Shot src="/img/ai/build-progress.webp" wide>
The progress screen: the name of the running stage ("Building the structure"), a progress bar, a "1 of 8" counter, a note that you can walk away, and links to "Go to Websites" and "Cancel".
</Shot>

The stages are labelled: *Getting started* → *Choosing a look* → *Building the structure* → *Writing the content* → *Polishing*.

## The store and blocks are prepared too

For a website, the plan screen has a **Use an online store** card. Tick it and the site has a store from the start: the product list, product detail, cart and checkout pages exist as soon as the build finishes.

At the end of the build, the site's [design blocks](/en/editor/blocks) are prepared automatically as well, so the Blocks panel in the editor already holds blocks that match the design.

## You can walk away

This runs on the server, not in your browser. You can close the tab and come back later — the work continues. If a build is unfinished, PageHub offers **Resume the last build?** when you open that screen again.

## If credits run out mid-build

The build is **paused**, not cancelled.

> Build paused — out of AI credits. What's finished is saved. Top up, then continue — the build picks up from the last step rather than starting over.

After topping up, click **Resume**. Finished sections aren't rebuilt, so credits aren't spent twice.

## Cancelling

There's a **Cancel** button at every stage. Cancelling before the build starts discards your answers. Cancelling mid-build discards the finished sections too — PageHub asks for confirmation first.

## When it's done

You land in the [editor](/en/editor/overview). From there it's business as usual: tidy up in [visual](/en/editor/visual-mode), edit in [code](/en/editor/code-mode), or ask for revisions in [AI chat](/en/editor/ai-chat).

## Chat mode vs interactive build

| | AI chat | Interactive build |
| --- | --- | --- |
| Best for | Revisions and partial changes | Creating or rebuilding a whole page |
| Flow | One request, one answer | Questions → plan → per section |
| Remembers context | Yes, the conversation history | Not needed — everything comes from your answers |
| Pausable & resumable | No | Yes |

The **Interactive build** button sits above the AI chat panel in the editor.
