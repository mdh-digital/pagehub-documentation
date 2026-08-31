# AI credits

Credits are the unit of AI usage in PageHub. Every time AI reads and writes something for you, some credits are spent.

## How they're counted

Credits are derived from **tokens** — the units of text a model processes. What counts is **input + output**: the text sent to the AI (your prompt, the page context, the chat history) plus the text it writes back.

The base rate is **1,000 tokens = 1 credit**, rounded up. The platform can adjust this rate, so the figure in force is always shown under **Billing → AI Credit**.

Every AI reply in the editor shows its own usage, e.g. `1,240 tokens (820 in · 420 out)`.

## Two credit pockets

| Pocket | Where it comes from | Behaviour |
| --- | --- | --- |
| **Plan credits** | Your plan's monthly allowance | Reset every calendar month |
| **Top-up credits** | Bought by you | Never expire, carried over |

The important part: **the monthly allowance resets, it doesn't stack**. Whatever's left at the end of the month doesn't carry into the next. Top-up credits are the opposite — they accumulate and persist.

The monthly allowance runs per **calendar month while your subscription is active**, regardless of your billing period. So an annual plan still gets its allowance every month, not once for the year.

::: info Lifetime plans
Lifetime plans get credits **once, up front**, into the top-up pocket, with no monthly refill. When they run out, buy more.
:::

## What consumes credits

| Activity | Notes |
| --- | --- |
| Creating a website with AI | Including questions, plan, design, shell, and each section |
| Creating a landing page with AI | Same |
| Generating a new page | Per page |
| Creating a header & footer | Once per website |
| AI chat in the editor | Per conversation turn |
| [Deriving a block palette from a design](/en/editor/blocks) | Once per website or landing page |
| Writing a blog article with AI | Per article |
| Generating the blog appearance | Once, when the blog is enabled or regenerated |
| Planning titles for an [AI blog schedule](/en/blog/write-articles) | Per batch of titles |
| Generating [storefront](/en/commerce/storefront) pages | Once per template |

What does **not** consume credits: using templates, editing in visual mode, editing in code mode, publishing, uploading media, and the entire store, leads and reports modules.

## Checking your balance

**Billing → AI Credit** shows:

- **Plan credits** — what's left of this month's allowance
- **Top-up credits** — the carried-over balance
- **Credits used (this period)**

<Shot src="/img/ai/credit-balance.webp">
The AI Credit page: three number cards showing Plan credits, Top-up credits and Credits used this period; below them a "Buy credits" button and a transaction history table.
</Shot>

Your remaining balance also appears on AI build screens, next to the usage estimate.

## Buying credits

**Billing → AI Credit → Buy credits**. Enter the number of units; the price per unit and the credits per unit are shown in the dialog. Tax and the final total are computed when the transaction is created.

Payment follows the same route as buying a plan. See [Upgrading & payment](/en/account/billing).

## If credits run out mid-build

The build is **paused**, not cancelled. Finished sections are saved. After topping up, click **Resume** and it picks up from the last step.

## Spending less

1. **Start from a template** when the look is already close. Templates cost no credits at all.
2. **Write a complete prompt up front.** One good prompt beats five revisions.
3. **One intent per request** in AI chat.
4. **New chat for a new topic** — long histories are re-sent every turn and count as input.
5. **Drop sections you don't need on the plan screen**, before the build starts.
6. **Derive the block palette once** per website; don't repeat unless the design changes substantially.

## Usage reports

Per-website AI usage lives under **Reports → AI usage**: credits spent, on what, by whom and when. See [The ten reports](/en/reports/overview).
