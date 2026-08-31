# Form submissions

Every form on a published page saves its submissions automatically. Nothing to wire up.

## Building a form

Two ways:

- The **Form** block from the [block palette](/en/editor/blocks) in visual mode.
- Ask AI: *"add a contact form: name, email, message"* through [AI chat](/en/editor/ai-chat).

Then set up the fields in the properties panel: **Add Input** or **Textarea**, fill in the label and type, and tick **Required** where needed.

<Shot src="/img/leads/form-fields.webp">
The properties panel for a form element: a list of fields with names, types and required checkboxes; "Input" and "Textarea" buttons to add new fields.
</Shot>

## The "Name" field decides the data key

Every field has a **Name (data key)** attribute. That's the column name you'll see in the lead list.

Pick something descriptive — `email`, `phone`, `message` — not `field1`. Fields without a `name` are **not stored**.

## Published pages only

Forms on drafts store nothing. To test the look, use **Send sample** in the editor's Submissions panel (⋯ → **Submissions**).

## Where leads land

| Place | Contents |
| --- | --- |
| **Leads** in the sidebar | Every lead across the active workspace |
| A website's **Leads** tab | Leads from that website only |
| A landing page's **Leads** tab | Leads from that landing page only |
| ⋯ → **Submissions** in the editor | Leads from the page you have open |

<Shot src="/img/leads/inbox.webp" wide>
The Leads page: a source picker at the top, a "First contact" column with new lead cards showing name, contact and age; stage columns beside it.
</Shot>

## First contact

New leads always land in **First contact**. This is not a stage — it's where untouched submissions sit.

Because it isn't a stage, it can't be renamed or deleted, and it's always first. Drag a card into any stage to start working it.

Next: [Kanban pipeline](/en/leads/pipeline).

## Inside a lead

Click a card to open the detail: the full **form submission** (every field and value), the **Stage**, the **Owner** and **Notes**.

## Deleting

Leads can be deleted one by one. This can't be undone.

## Testing a new form

1. Publish the page.
2. Open its public address in an ordinary browser.
3. Fill in the form and submit.
4. Check **Leads** — the submission should appear under First contact.

If it doesn't, check: is the page published? does every field have a `name`? is it a store checkout form (checkout forms are deliberately not recorded as leads)?

## Anti-spam

Form submissions are rate limited per IP address, and submission size is capped. If one source keeps causing trouble, block its IP through **Block List** in the sidebar.
