# The ten reports

A website's **Reports** tab holds ten reports in three groups. All of them are read-only — members with **viewer** access can open them too.

<Shot src="/img/reports/hub.webp" wide>
The Reports hub: three groups of cards — Audience (Traffic & content, Lead conversion), Sales (Products by order, Products by revenue, Product trend, Transaction report, Period analysis, Sales timeline, Abandoned cart), and AI (AI usage).
</Shot>

## The range picker

Every report shares the same range picker: **Last 7 / 30 / 90 days**, **This month**, **Last month**, **This year**, or **Custom**. Some also offer **Group by**: daily, weekly or monthly.

## Audience

### Traffic & content

View trends and which pages are actually read.

| Contents | Notes |
| --- | --- |
| Views & leads per day | Charts |
| Average per day, busiest day | Summary numbers |
| **Most-read content** | Pages and articles, with views this period **and** all-time |

::: info Why there are two view columns
Daily views are only recorded from the point tracking started. Older pages carry a cumulative counter that's much larger and can't be sliced by date — so it's shown in a separate column rather than mixed in.
:::

### Lead conversion

From visitors → enquiries → orders, and where people stop.

| Stage | Measured against |
| --- | --- |
| Views | — |
| Leads | Views |
| Orders | Views |
| Paid | Orders |

::: warning This is not a straight funnel
Leads and orders are **both** measured against views, not sequentially. A buyer can check out without ever filling in a form, so a `views → lead → purchase` chain produces impossible ratios (over 400% in real data). Each stage names its own denominator.
:::

## Sales

### Products by order

Which products are ordered most often. Columns: orders, sold, revenue, profit, margin, share, average price, quantity per order. It can be expanded to variant level with **Show variants**.

### Products by revenue

The same layout, ranked by how much money each product brings in.

::: info How profit is computed
`Profit = revenue − cost price`. **Shipping is excluded** — you only collect it and pass it on to the courier, so including it would inflate margins.
:::

### Product trend

How each product sold across the period. Pick specific products, or leave it empty to see the top five. The measure can be revenue, quantity or orders; there's a **3-period moving average** and a **second half vs first half** comparison.

### Transaction report

The complete order book: every order with its total, profit and payment status.

### Period analysis

This period against the previous one, ten figures side by side: orders, revenue, profit, cost, shipping, average order value, items sold, customers, paid share, margin.

If the previous period had no orders at all, the report says so plainly rather than showing infinite growth.

### Sales timeline

Orders, revenue, profit and margin per day, week or month. Includes the best period, the average per period, and a 3-period moving average.

### Abandoned cart

<Shot src="/img/reports/carts.webp">
The Abandoned cart report: number cards (Carts started, Converted, Abandoned, Conversion, Value lost), then a "Where they stop" table showing form completion buckets and their conversion, plus a cart trend chart.
</Shot>

The most useful part here is the **Where they stop** table — carts grouped by how far the form got (nothing filled · 1–25% · 26–50% · 51–75% · 76–99% · complete). If most stop at 76–99%, the problem is at the end of the form, not the price.

## AI

### AI usage

Tokens and credits this website has used: on what, by whom and when. See [AI credits](/en/ai/credits).

## Reading the numbers

**Percentages can be empty, not zero.** When the denominator is zero, the report shows nothing rather than `0%`. "0% margin" for a store with no orders is a lie.

**Revenue counts Completed orders.** The "Completed revenue" card on the Orders page uses the same rule.

**Ranges before tracking started will be empty.** Expected for sites older than the feature.

## Printing

Every report has a **Print** button so you can save it as a PDF through the browser's print dialog.
