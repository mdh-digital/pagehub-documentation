# Custom domain

By default your site is served from a platform address:

```
https://<workspace>.pagehub.id/<website>
```

With a custom domain, it's served from your own:

```
https://sweetcakes.com/
```

Open **Settings** → **Custom domain**.

::: warning A paid feature
Trial plans can't connect a domain. The screen shows an upgrade prompt until your plan supports it. See [Plans & quota](/en/account/plans-and-quota).
:::

## Setup

### 1. Enter the domain

Type the domain you want to use — either an apex domain (`sweetcakes.com`) or a subdomain (`www.sweetcakes.com`, `shop.sweetcakes.com`) — then click **Next**.

PageHub picks the right method for you:

| Domain shape | Method |
| --- | --- |
| Apex / root (`sweetcakes.com`) | **A record** to the server IP |
| Subdomain (`www.`, `shop.`) | **CNAME** to the server host |

Why they differ: many registrars don't allow a CNAME at the apex, so apex domains must use an A record.

### 2. Create the DNS records

The next screen lists the records you need, with their values and copy buttons.

<Shot src="/img/website/domain-dns.webp">
The Custom domain section at the DNS stage: a table with three rows (Verify ownership TXT, Point traffic A/CNAME, Point www optional), each with type, host, value, a copy button, and a "Pending" status badge.
</Shot>

Usually three:

| Record | Purpose |
| --- | --- |
| **Verify ownership** (TXT) | Proves the domain is yours |
| **Point traffic** (A or CNAME) | Sends visitors to the PageHub server |
| **Point www** (optional) | So `www.` reaches the same site |

Open **DNS Management** at your domain provider (Cloudflare, GoDaddy, Namecheap and so on) and create the records exactly as shown.

### 3. Check DNS

Click **Check DNS**. Each row gets a status badge:

| Status | Meaning |
| --- | --- |
| **Installed** | Record found and the value matches |
| **Pending** | Not visible yet — DNS propagation usually takes 5–30 minutes |
| **Mismatch** | The record exists but the value differs. Re-copy it |
| **Check failed** | PageHub couldn't read DNS just then; try again |
| **Needs setup** | You haven't created this record yet |

When everything is green, the status flips to **active** and your site is served from that domain.

## Cloudflare

If your DNS is at Cloudflare, set the records to **DNS only** (the **grey** cloud, not orange) during verification and the first SSL issuance. The orange proxy hides the underlying record, so verification never passes.

## Once the domain is active

Several things change automatically:

- **The platform address redirects to your domain.** To avoid one piece of content living at two addresses (which hurts SEO), `<workspace>.pagehub.id/<website>` permanently redirects (301) to your custom domain.
- **Canonicals, sitemap and feed move with it.** Every canonical tag, `sitemap.xml` entry and the `Sitemap:` line in `robots.txt` point at your domain.
- **`robots.txt` becomes fully yours**, because the domain isn't shared with anyone. See [Search & AI discovery](/en/seo/search-and-ai-discovery).

## Detaching

The **Detach** button disconnects the domain. The site goes back to being served at the platform address. You'll need to remove the DNS records at your provider yourself.

## If your subscription lapses

Custom domains are a subscription feature. If your subscription passes its grace period unpaid, the site stops being served from the custom domain — but is still reachable at the platform address. Details: [When a subscription lapses](/en/account/subscription-lapse).
