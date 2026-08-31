# Workspaces

A workspace is a **container per client or per project** inside one account. The organisation remains the paying tenant and the owner of the quota; the workspace decides who sees which websites, landing pages and media.

<Shot src="/img/team/workspaces.webp" wide>
The Workspaces page: coloured workspace cards with names, notes, public addresses and content counts (websites, landing pages, media, members); a "New workspace" button in the top right.
</Shot>

## Why you'd want them

If you're an agency or a freelancer, without workspaces all client work sits in one list and everyone you invite sees all of it. With workspaces: one client, one space, and the person working on client A doesn't see client B's work.

If you're one person running one business, the default workspace is enough — you can ignore this page.

## Creating a workspace

**Workspaces** → **New workspace**.

| Field | Notes |
| --- | --- |
| **Name** | e.g. `Flower Shop` |
| **Public address** | Where the sites in this workspace are served. Lowercase, digits, single hyphens. Empty = derived from the name |
| **Colour** | A visual marker on the card and in the workspace picker |
| **Note** | Anything you want to remember about this client |

::: warning Changing the public address moves every site
Every published page in this workspace changes address. Links already shared — and search results — stop working. Settle the address up front.
:::

## What belongs to a workspace

| Does | Doesn't |
| --- | --- |
| Websites | Quota (belongs to the organisation) |
| Landing pages | Billing & plan (belongs to the organisation) |
| Media folders and files | Brand / white label (one per organisation) |

Content can't be born without a workspace: pages follow their website's workspace, media follows its folder. The only thing you choose explicitly is the **website** — there's a workspace picker when you create one.

## Switching workspaces

The picker above the sidebar. Once you switch, **the whole screen follows**: websites, landing pages and File Manager.

Your choice is remembered by the browser. If that workspace is deleted or your access is revoked, PageHub moves to another workspace you're still allowed to open — rather than showing an empty screen.

## Granting access

Open the workspace card menu → **Manage members**.

- Only people **already in your [team](/en/team/members-and-access)** can be added.
- Per-workspace roles: **Can edit** (editor) or **Can view** (viewer).
- Anyone added can see **everything** in that workspace.

<Shot src="/img/team/workspace-members.webp">
The workspace members dialog: a list of people with their roles (Can edit / Can view) and a remove button; a "Pick a person" selector for adding new members.
</Shot>

## Access is additive

This is the part most often misunderstood:

> **What a member sees = the per-website grants given to them ∪ the contents of workspaces they belong to.**

Workspaces **add** a door, they don't replace the existing one. So if you've already granted someone access to a specific website through the Team page, that access still holds even if the website lives in a workspace they're not in.

The practical consequence: turning on workspaces never silently revokes access that was already working.

## Moving a website between workspaces

From the website card menu. All of that website's pages move with it in one step.

## Deleting

Two workspaces **can't** be deleted:

- The organisation's **default** workspace.
- A workspace that **still has contents**.

For the second, move the contents out first. The reason: if a non-empty workspace were deleted, its content would survive but become invisible everywhere — a worse outcome than a plain refusal.

If you really want to delete it along with its contents, the confirmation dialog names how many websites, landing pages and media files go with it, and asks you to type the workspace name.

## Quota

Your plan sets how many workspaces may exist. See [Plans & quota](/en/account/plans-and-quota).
