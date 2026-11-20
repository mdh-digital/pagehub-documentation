---
description: 'Choose which products each website and landing page sells, and sell straight from a landing page with a checkout form on the page itself.'
---

# Selling on websites & landing pages

The catalogue lives in the workspace. Each website and landing page **chooses** which products it shows, so one product can be sold in several places without being typed twice.

## Choosing products for a website

1. Open **Websites**, pick the website, then open the **Commerce** tab.
2. On the **Products on this site** card, choose one:
   - **Every product** — every active product shows, including ones added later.
   - **Only the ones I pick** — click **Choose products** and tick the ones to sell. They show in the order you picked them.
3. Save.

Products that are not chosen do not appear on that website's storefront, cannot be added to its cart, and are left out of its sitemap.

## Selling from a landing page

Landing pages can sell too, even though they have no cart or checkout page.

1. Open **Landing Pages**, click **⋯** on the page's card and choose **Details**. (Clicking the card itself opens the editor, not this screen.) On the **Overview** tab, find the **Products on this site** card.
2. Choose the products this landing page sells.
3. In the editor, add a block from the **Store** group of the block palette: product cards, a single product, or a buy button. The group appears once the store has at least one product.

When a visitor presses buy, **a checkout form opens on the same page**. The buyer fills in name, phone and email (plus an address for physical products), then lands on their invoice.

If you skip steps 1–2, the landing page sells nothing: product blocks are empty on the live page, and the buy button cannot create an order. Pick the products first, then share the link.

A landing page is only live while your account has an active plan. A Partner Store does not cover landing pages; see [Partner Store](/en/commerce/partner-store).

Pressing buy twice still means one item: the landing page basket is **replaced**, not added to.

::: tip Landing pages made from your own code
If you paste your own HTML, any button with the `data-shop-buy` attribute opens the checkout form for the product chosen on the **Products on this site** card.
:::

## Where the orders go

Every order, from websites and landing pages alike, lands in **Store → Orders**. The **Source** column shows where it came from. Invoices for landing page orders open under that landing page's own address (`…/invoices`).

## Switching a product off

A product switched off in **Store → Products** disappears from every website and landing page on the next visit, and comes back once switched on.
