# Tracking & pixels

Analytics scripts are installed **once at website level**, then injected into the `<head>` of **every page** in that website when it's served. You never have to paste anything into individual pages.

Open **Settings** → **Tracking**.

<Shot src="/img/website/tracking.webp">
The Tracking section: a Google group with GA4 Measurement ID and GTM Container ID fields, then Meta Pixel ID, TikTok Pixel ID, and a large "Custom head script" textarea.
</Shot>

Fill in only what you use — leave the rest empty.

## Google

| Field | Format | Where to find it |
| --- | --- | --- |
| **Google Analytics (GA4)** | Measurement ID, `G-XXXXXXXXXX` | GA4 Admin → Data streams |
| **Google Tag Manager** | Container ID, `GTM-XXXXXXX` | GTM dashboard, next to the container name |

If you already run GA through GTM, just fill in GTM.

## Meta (Facebook) Pixel

Enter the **Pixel ID** (a long number such as `123456789012345`) from Meta Events Manager. PageHub sends the `PageView` event automatically.

## TikTok Pixel

Enter the **Pixel ID** (e.g. `C123ABC456DEF`) from TikTok Events Manager. `PageView` is sent automatically here too.

## Custom head script

A box for raw HTML/scripts that need to sit in `<head>`: pixels from other platforms, domain verification tags, custom events, chat widgets, and so on.

The contents are inserted **verbatim**, with no cleanup. So:

```html
<!-- verification -->
<meta name="facebook-domain-verification" content="abc123..." />

<!-- third-party script -->
<script src="https://example.com/widget.js" async></script>
```

::: warning Broken HTML here can break the page
Because this is inserted raw, an unclosed tag or a missing quote can wreck the whole `<head>`. Paste from official sources, and check the page after saving.
:::

## Things to know

- **Published pages only.** Tracking scripts don't run in the editor preview or on [share links](/en/editor/publishing).
- **Per website.** Landing pages have their own tracking settings, on that landing page's **Settings** tab.
- **Separate from built-in statistics.** PageHub already counts views and daily traffic for [Reports](/en/reports/overview) — tracking here is for what you need outside PageHub (ads, remarketing, deeper analytics).
- **Cookie consent.** PageHub doesn't add a consent banner. If GDPR or a similar rule applies to you, add one through **Custom head script**.
