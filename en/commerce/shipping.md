---
description: 'Automatic shipping rates and waybill tracking for stores shipping from Indonesia: address down to the village, courier choice, parcel status.'
---

# Shipping & tracking

Stores that **ship from Indonesia** can get shipping rates from couriers automatically and track waybills. Stores in other countries keep typing the courier and shipping cost by hand.

## What to set up

1. A **business address** in **Store → Manage store → Business addresses**. Choose **Indonesia** as the country, then the province, city/regency, district and village. The postal code fills in from the village.
2. A **weight** on each product variant, in grams. For bulky parcels also fill in **length × width × height** in cm, because couriers charge volumetric weight per box.

A variant with no weight counts as 1,000 grams.

If the screen says **Courier rates are not switched on for this platform.**, the platform administrator has not enabled couriers yet. You can still type shipping costs by hand.

## At the buyer's checkout

For physical products, the checkout form adds a step-by-step address picker and a list of courier rates. The buyer picks the courier service; the price is worked out by the server from the cart and the store's address, not from a figure the browser sends.

If the rate changes between the moment the buyer saw the list and the moment they order, checkout asks them to pick the service again.

If the courier is not answering, the order does **not** fail: it still comes in, and you fill in the shipping cost by hand.

## When staff create or edit an order

In the order form, fill in the destination down to the village and click **Check postage**. Pick a rate from the list, or type the cost yourself.

## Tracking a waybill

Enter the waybill number on the order. After that:

- **Buyers** see the parcel's journey right on their [invoice page](/en/commerce/public-invoice), without pressing anything.
- **Staff** press **Track parcel** on the order detail, and **Refresh tracking** to fetch the latest status.

If it says **The courier does not know this waybill yet.**, the waybill was probably just created; try again a few hours later.

## Digital products

A cart holding only [digital products](/en/commerce/digital-products) asks for no address and shows no courier choice.
