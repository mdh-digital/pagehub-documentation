# Publishing a page

## Draft vs published

| Status | Who can see it |
| --- | --- |
| **Draft** | You and your team, inside PageHub |
| **Published** | Anyone with the address |

New pages always start as drafts.

## Publishing

In the editor, click **Publish**. The page is saved **and** goes live.

Once published, the toolbar changes:

- **Copy URL** — copies the page's public address.
- **Open site** — opens it in a new tab.
- **Unpublish** — pulls it back to draft.

<Shot src="/img/editor/publish-toolbar.webp">
The editor toolbar on a published page: a Published badge beside the title, and Copy URL, Open site and Unpublish replacing the Publish button.
</Shot>

::: warning Saving is not publishing
A published page you edit and then only **Save** keeps showing the old version to visitors. Click **Publish** again to make the change live.
:::

## Public addresses

```
https://<workspace>.pagehub.id/<website>/<page-slug>
https://<workspace>.pagehub.id/<website>            ← homepage
https://<workspace>.pagehub.id/p/<slug>             ← landing page
```

If the website has an active [custom domain](/en/website/custom-domain):

```
https://yourdomain.com/<page-slug>
```

The **top** page in the page list is the homepage — the one served when someone opens the website address without naming a page.

Slugs must be unique within a website. `blog`, `invoices`, `products`, `cart`, `checkout` and `p` are reserved.

## Unpublishing

**Unpublish** returns the page to draft. Its address stops serving and visitors get a 404. The content is untouched — you can publish it again whenever you like.

You can also do this from the page list: ⋯ → **Unpublish**.

## Share links (preview without login)

For showing work to a client before it goes live. Open the **Sharing** tab on a website (or on a landing page).

<Shot src="/img/website/sharing-tab.webp">
The Sharing tab: a "Public preview link" card with an on/off switch, the link with a copy button, and a "Regenerate link (breaks the old one)" button. Below it an "Invite collaborators" card with an email field and a Share button.
</Shot>

What the link is:

- **Read-only** — the recipient can't change anything.
- **No login** — having the link is enough.
- **Shows drafts** — that's the whole point.
- **Revocable** — flip the switch off, or click **Regenerate link** to mint a new one and kill the old.

Preview pages never get SEO tags, so they'll never compete with your real site in search.

## Inviting collaborators

Still on the **Sharing** tab: enter someone's email and click **Share**. They sign in with their own account and this website appears in their list under **Shared with me**.

The recipient must already have an account. For internal team members, the tidier route is the [Team](/en/team/members-and-access) page.

## After publishing

What starts happening on its own:

- The page enters `sitemap.xml`, and `feed.xml` if it's an article.
- Views start counting — visible in the page list and in [Reports](/en/reports/overview).
- Forms on the page start accepting submissions, which land in [Leads](/en/leads/form-submissions).
- The website's [tracking](/en/website/tracking) scripts start running.

::: info Forms only work on published pages
Forms on drafts don't store anything. To test the look, use **Send sample** in the editor's Submissions panel.
:::
