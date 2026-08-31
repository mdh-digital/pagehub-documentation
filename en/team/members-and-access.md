# Members & access

**Team** in the sidebar (Business group). Only organisation owners and admins can open it.

<Shot src="/img/team/team-list.webp" wide>
The Team & Access page: a member table with Member (name + email), Role, Access (website count), Joined and an actions menu; an "Invite member" button in the top right.
</Shot>

## Organisation roles

| Role | Can do |
| --- | --- |
| **Owner** | Everything, including transferring ownership. One per organisation |
| **Admin** | Full access to content, billing, team and workspaces |
| **Member** | Only the websites and workspaces assigned to them |

Roles can be changed at any time from the actions menu: **Make admin** / **Make member**.

## Inviting members

**Invite member**, then fill in **Name**, **Email** and **Role**. You can also pick which websites they may access straight away.

::: info The password is generated for you
When the account is created, PageHub generates a password and **shows it once**. Nobody types it. Send it through a channel you trust, and ask the person to change it after their first sign-in.
:::

Invited members skip the email verification that self-registrants go through — but if their address isn't confirmed, the row is marked **Email not verified** and they can't sign in yet. The actions menu has **Resend verification**.

## Per-website access

Actions menu → **Access**. For each website and landing page, choose:

| Option | Meaning |
| --- | --- |
| **No access** | Doesn't appear in their list |
| **Viewer** | Can view. The editor opens read-only |
| **Editor** | Can view and change |

<Shot src="/img/team/access-dialog.webp">
The Access dialog for one member: two sections (Websites and Landing Pages), each row offering No access / Viewer / Editor.
</Shot>

Owners and admins always have full access — this list only applies to **members**.

## Two doors, combined

A member sees the **union** of:

1. The per-item grants set in this dialog, **and**
2. The contents of [workspaces](/en/team/workspaces) they belong to.

Both apply at once. Revoking one doesn't revoke the other — if someone can still see something you thought you'd revoked, check the other door.

## Read-only mode

A **viewer** can still open the editor: they see a **View only** pill, all editing controls are disabled, and AI chat refuses requests. Reports remain readable — every report is read-only.

## Removing a member

Actions menu → **Remove member**. The content they created stays put: content belongs to the organisation, not to a person.

## Transferring ownership

Only the owner can do this. Use the actions menu on the target member → **Transfer ownership**.

## Sharing outside the team

For people outside your organisation — clients, contractors — use **Invite collaborators** on a website's **Sharing** tab. That website appears in their list under **Shared with me**. They must already have an account.

To simply show work, the **read-only preview link** on the same tab is a better fit: it needs no account at all. See [Publishing a page](/en/editor/publishing).

## Member quota

The number of members is capped by your plan. See [Plans & quota](/en/account/plans-and-quota).
