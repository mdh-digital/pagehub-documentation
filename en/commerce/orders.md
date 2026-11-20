---
description: 'Run your store''s orders: six statuses and when stock is deducted, manual orders, wholesale pricing, owners, and the cost and profit figures.'
---

# Orders

**Store → Orders**. Every order for this store — payment, stock and shipping in one place.

<Shot src="/img/commerce/orders-list.webp" wide>
The Orders page: five stat cards at the top (Orders, New, Unpaid, Completed, Completed revenue), then a search box, a Filter button and a "New order" button, followed by the order table with Order no., Customer, Source (the site it came from, or "Entered by staff"), Handler, Items, Total with its payment status, and Status columns.
</Shot>

## The summary cards

| Card | Contents |
| --- | --- |
| **Orders** | Total orders in the selected range |
| **New** | Not yet worked on |
| **Unpaid** | Payment not received |
| **completed** | Finished |
| **Completed revenue** | Only from orders with status Completed |

Ranges: Today · This week · This month · Pick dates.

## Order statuses

| Status | Meaning |
| --- | --- |
| **New** | Order received, not started |
| **Processing** | Being prepared. **Stock is deducted here** |
| **Shipped** | Handed to the courier |
| **Completed** | Done. Only now does it count as revenue |
| **Rejected** | Cancelled. Stock is returned |
| **Refund** | Money returned. Stock is returned |

Change the status with **Change status** on the order detail page. PageHub asks for confirmation and names the destination.

### Shortcuts when changing status

- **Also mark as paid** — saves a step when payment arrives at the same time.
- **Also mark as unpaid** — removes the payment record and returns the order to unpaid.
- **Reason** — required for cancellations. Written for whoever opens this order next.
- Marking **Shipped** asks for a **courier or a tracking number** — one of them must identify the parcel.

## Stock

Stock is deducted when an order moves to **Processing**, and returned if the order is **Rejected** or **Refunded**.

Orders whose stock is currently deducted are marked **stock deducted**, and **their items are locked**. To change items, move the status back first.

The reason is simple: if items could change after stock was deducted, the stock figure and the order contents could drift apart unnoticed.

## Creating an order manually

**New order** — for orders that arrive by WhatsApp, phone or in person.

<Shot src="/img/commerce/order-form.webp" wide>
The new order form: an Items section with product search and item table, a Customer section (name, phone, email, address), a Shipping section (courier, service, tracking), and a Totals panel on the right with Subtotal, Discount, Shipping, Extra charges and Total.
</Shot>

| Section | Contents |
| --- | --- |
| **Items** | Search for a product, set a quantity. The catalogue price fills in and can be overridden |
| **Customer** | Name, phone, email, address |
| **Shipping** | Courier, service, tracking number — free text, no courier lookups and no automatic rates |
| **Totals** | Subtotal, discount, shipping, extra charges, total |

Wholesale prices apply automatically when the quantity reaches a tier; the line is marked *wholesale price*. Prices you override manually are marked *custom price*.

A discount larger than the order value is rejected.

## Origin address

Every order copies the [default business address](/en/commerce/store-settings) as its origin when created. Editing it on an order applies to that order only — the master address is untouched.

## Owner

Each order can be assigned to one team member. The **Mine** filter narrows to the orders you're responsible for.

Several orders can be selected at once and assigned together via **Assign owner**.

## Cost & profit

The order detail page shows **Cost** (from product cost prices) and **Profit**. These never appear to buyers, and they're the basis for margin reports. See [The ten reports](/en/reports/overview).

## Searching

The search box covers the order number, customer name and phone number. There are also status and payment filters.

## Deleting

Deleting an order is permanent and can't be undone. For cancelled orders, the **Rejected** status is better — the history stays and it still appears in reports.
