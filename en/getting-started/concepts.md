# Core concepts

Ten minutes here saves a lot of time later. Nearly every bit of confusion in PageHub comes from one thing: not knowing what belongs to what.

## The hierarchy

```
Organisation        ← your subscription account (plan, quota, invoices)
 ├── Members        ← the people who work in this account
 ├── Workspace      ← a container per client / per project
 │    ├── Website   ← a set of pages, one theme, one menu
 │    │    └── Page
 │    ├── Landing page
 │    └── Media
 └── Plan & quota
```

### Organisation

An organisation is the **subscription account**. It owns the plan, the quota and the billing history — not you as an individual. Every website, page and file belongs to the organisation, so when a member leaves, the work stays put.

One user can belong to several organisations (say, the agency you work at plus your own account). Switch between them from the account menu at the bottom of the sidebar.

### Workspace

A workspace is a **container per client or per project** inside one organisation. Websites, landing pages and media live inside a workspace, and each workspace has its **own public address**.

It also decides who sees what: a member granted access to one workspace only sees that workspace's contents. Details: [Workspaces](/en/team/workspaces).

### Website vs landing page

|  | Website | Landing page |
| --- | --- | --- |
| Pages | Many | One |
| Header & footer | Shared (a shell) | Baked into the page itself |
| Theme & CSS | Global across the site | Per page |
| Navigation menu | Yes | No |
| Blog & store modules | Yes | No |
| Best for | Sites that stay around | Campaigns that come and go |

Under the hood they are the same thing — a "page". A landing page is simply a page that isn't attached to any website.

### Pages

Page content is stored as **HTML**. That's the source of truth. The consequence is a pleasant one: whatever you do — drag a block in visual mode, type in code mode, or ask AI to change something — it all ends up writing the same HTML. There's no secret format holding you hostage.

That's why the editor has three complementary modes: [Visual](/en/editor/visual-mode), [Code](/en/editor/code-mode) and [AI chat](/en/editor/ai-chat).

### The shell: header & footer

Inside a website, the header and footer are stored **once** at website level (this is called the *shell*), not repeated on every page. Each page only stores its content. When a visitor opens a page, PageHub composes the three together: header + content + footer.

The effect: changing the logo in the header is done for all 30 pages at once. See [Header & footer](/en/website/header-footer).

## Draft vs published

Every page has two states:

- **Draft** — visible only to you and your team. Safe to work on for days.
- **Published** — open to anyone with the address.

Want to show a draft to a client without publishing? Use a **share link** (the Sharing tab) — a secret, read-only URL that works without login and still shows the draft. See [Publishing a page](/en/editor/publishing).

## Public addresses

Your address is built from **workspace** + **website** + **page**:

```
https://<workspace>.pagehub.id/<website>/<page>
https://<workspace>.pagehub.id/<website>          ← website homepage
https://<workspace>.pagehub.id/p/<landing-page>   ← landing page
```

On some installations addresses take a path form instead of a subdomain:

```
https://app.pagehub.id/w/<workspace>/<website>/<page>
```

Both point at the same content. Once a website has a verified [custom domain](/en/website/custom-domain), the address gets shorter still:

```
https://yourdomain.com/<page>
```

::: warning The older /s/ and /p/ addresses
Sites created before workspace-based addressing still answer on their old URLs — they redirect permanently (301) to the new ones. Links already out in the world won't break, but use the new address for anything you share from now on.
:::

## Quota & AI credits

Your plan governs two different things that are easy to mix up:

- **Quota** — how many websites, landing pages, workspaces, members and how much storage may exist. A limit on *count*, checked whenever you create something.
- **AI credits** — your allowance for AI usage. Every page generation, chat revision or written article consumes credits in proportion to the amount of text processed.

Details: [Plans & quota](/en/account/plans-and-quota) and [AI credits](/en/ai/credits).

## Roles

| Role | Can do |
| --- | --- |
| **Organisation owner / admin** | Everything, including billing, members, workspaces and brand |
| **Member** | Only the workspaces and websites assigned to them |
| **Editor** (per website/workspace) | View and change |
| **Viewer** (per website/workspace) | View only — the editor opens in read-only mode |

Access is **additive**: a person sees the union of what's assigned per item **and** what's in their workspaces. Details: [Members & access](/en/team/members-and-access).
