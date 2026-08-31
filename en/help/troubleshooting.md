# Common problems

The things people ask about most, and why they happen.

## Pages & publishing

### I edited it, but visitors still see the old version

**Save** saves a draft; **Publish** makes it live. A published page you edit and only save keeps showing the old version.

→ Click **Publish** again.

### The page address 404s

Check in order:

1. Is the page **Published**?
2. Is the slug right? Changing a slug kills the old address.
3. Does the website have an active [custom domain](/en/website/custom-domain)? If so, the platform address redirects there.

### The slug is rejected

`blog`, `invoices`, `products`, `cart`, `checkout` and `p` are reserved. Slugs must also be unique within a website.

### The wrong page is my homepage

The homepage is the page **at the top** of the page list. Drag its card, or use the ⋯ menu → **Set as homepage**.

## Editor

### Visual mode won't let me select an element

Usually the HTML is unbalanced. Open [code mode](/en/editor/code-mode) and look for *"Tag … is not closed"* or *"Tag … does not match"* warnings.

### The preview looks out of sync

Click **Refresh preview** in the toolbar.

### The editor opens in "View only"

Your access to this page is **viewer**. Ask an owner or admin to change it to **editor** on the [Team](/en/team/members-and-access) page.

### Editing the header changed every page

That's how it works — the header and footer are a shared [shell](/en/website/header-footer). Anything specific to one page belongs in that page's content, not in the shell.

## Menus & navigation

### A menu item goes to a 404

Its slug points at a page that was deleted or renamed. PageHub flags this as *"No page with this slug"* in the menu editor.

### The menu doesn't appear on the page

The header must contain an **empty** `<nav data-eb-menu></nav>`. If menu links were hand-written into the HTML, there's no slot to inject into.

## Forms & leads

### The form was submitted but there's no lead

1. Is the page **published**? Forms on drafts store nothing.
2. Does every field have a **Name** attribute? Fields without a `name` aren't stored.
3. Is it a **store checkout form**? Checkout forms are deliberately not recorded as leads.

### Lead columns are named `field1`, `field2`

The fields' **Name** attributes were never given meaningful names. Fix them in the properties panel; existing leads keep their old names.

## AI

### The build stopped halfway

Almost certainly out of credits. The screen shows *"Build paused — out of AI credits"*. Top up and click **Resume** — it picks up from the last step.

### AI output doesn't match the site design

For pages inside a website, improve the website's **Name** and **Description** — those two fields anchor every generation. See [Theme & brand](/en/website/theme-and-brand).

For landing pages there's no automatic context: all direction has to be in the prompt.

### New blocks look foreign

Use **Match my design** in the Blocks panel so blocks are derived from that page's own design. See [Block palette](/en/editor/blocks).

## Domains

### I created the DNS records but the status is still Pending

DNS propagation usually takes 5–30 minutes. If it's longer:

- Do the record values match exactly? Use the copy buttons.
- On **Cloudflare**? Set the record to **DNS only** (the **grey** cloud, not the orange proxy).
- Apex domains need an **A record**; subdomains need a **CNAME**.

### The custom domain suddenly stopped serving

Custom domains need an active subscription. See [When a subscription lapses](/en/account/subscription-lapse).

## Store

### The Commerce menu shows an offer screen

The store add-on isn't active for this website. See [Add-ons](/en/account/add-ons).

### I can't find the price field on the product form

Prices always live **on the variant**, in the **Pricing & stock** section — not on the product. A simple product has exactly one variant row.

### Order items can't be edited

An order in **Processing** has already had its stock deducted, so items are locked. Move the status back first if you need to change them.

### I can't mark an order paid

There's a pending payment claim from the buyer. Accept or reject it first. See [Payments & invoices](/en/commerce/payments-and-invoices).

### The gateway payment succeeded but the order is still unpaid

The webhook URL isn't registered in the gateway dashboard. See [Store settings](/en/commerce/store-settings).

### Product prices are wrong after changing currency

Changing the store currency **converts nothing** — it only swaps the label. You have to adjust the numbers yourself.

## Media

### Broken images on a page

The file was probably deleted from the [File Manager](/en/media/file-manager). Pages using it aren't repaired automatically — replace the image in the editor.

### Upload fails

The limit is images, up to 8 MB. If storage is full, delete unused files or buy a **Storage Add-On**.

### The File Manager is empty but I know there are files

You may be looking at the wrong [workspace](/en/team/workspaces), or — as a member — you haven't been granted access to any workspace.

## Account

### I can't sign in after registering

Self-registered accounts must **verify their email** first. Check your inbox and spam folder for the 6-digit code.

### I'm not receiving PageHub emails

Check your spam folder. If your organisation uses [its own SMTP](/en/team/brand-white-label), the emails come from that server — check its status on the Brand page.

### Quota full

Upgrade the plan, or delete what you no longer use. Website and landing page quotas are counted separately. See [Plans & quota](/en/account/plans-and-quota).

### The screen changed after I switched workspace

That's expected — the workspace picker filters websites, landing pages and media at once. Switch back from the picker above the sidebar.

## Still stuck?

Open a [support ticket](/en/help/support-tickets), and include the page address, what you did, and the error message you saw.
