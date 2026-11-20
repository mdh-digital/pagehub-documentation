---
description: 'Sell ebooks, templates and other digital products: files are picked from Google Drive, stock is unlimited, buyers download from their invoice.'
---

# Digital products

A digital product is downloaded by the buyer after paying. There is no address, no shipping and no stock limit. Think ebooks, templates, presets or course material.

The files **stay in your own Google Drive**. PageHub keeps no copy and never hands the buyer a Drive link: when a paid buyer downloads, PageHub fetches the file from your Drive and passes it on.

## Creating a digital product

1. **Store → Products → Add product**.
2. Under **Product type**, choose **Digital**.
   The stock, weight and package size fields disappear; stock reads **Unlimited**.
3. Fill in the name, price and images, then **save**. A new digital product is always saved **inactive**.
4. In the **Files for the buyer** card that appears after saving, pick the files (see below).
5. Switch the product on.

**Active** stays locked until there is at least one file. If the last file is removed, the product goes back to inactive on its own.

## Connecting Google Drive

Once per store.

1. In the **Files for the buyer** card, click **Connect Google Drive**.
2. Sign in to the Google account that holds your files and grant access.

PageHub can only see the files you pick in the next step, not the rest of your Drive. The card then shows the Drive account's email.

## Picking files

1. Click **Pick from Google Drive**.
2. Google's file picker opens. Choose one or more files.

The size of each file is shown in MB.

::: warning Google Docs, Sheets and Slides are refused
Google's own document types have no file that can be downloaded. Save it as a PDF (or another format) in Drive first, then pick the PDF.
:::

## Stock

A digital product **has no stock** and never shows **Sold out**, however many you sell. The only thing that stops it selling is its **Active** status: an inactive product is not shown and cannot be bought.

## What the buyer sees

1. **Checkout.** When the basket holds **only digital products**, the checkout form asks for no address and quotes no shipping. **Email** is required instead. If there is even one physical product in the basket, the address is required again. See [Cart & checkout](/en/commerce/cart-and-checkout).
2. **Invoice page.** After checkout the buyer lands on their invoice page. Until it is paid, the **Your downloads** block says the files will appear once the payment is confirmed.
3. **Once paid**, the block shows a **Download** button for each file. An order with several digital products lists **every file of every product**, each with its own allowance.
4. Each file can be downloaded **up to 5 times** per order. The remaining count is shown next to the button. When it runs out, the button goes.

Buyers never see your Google Drive link. The **Download** button points at PageHub, which fetches the file from Drive and passes it on.

## The invoice link is the key

The download buttons only appear when the invoice page is opened through the **full link**: the one carrying an access key (the `k=` part of the address). That is the link the buyer opens right after checkout, and the one sent in the order email.

- A buyer who opens the `invoices` page and **types only the invoice number** sees the order details and status, but **not** the download buttons.
- **Anyone holding the full link can download.** Ask buyers not to share it. The 5-downloads-per-file cap is what limits the damage if it does get passed around.

So buyers don't lose the link:

- Turn on [store email notifications](/en/commerce/store-settings). The order email contains the full link. Without an active, verified store SMTP, PageHub sends the buyer no email, and the only copy of the link is in the buyer's browser.
- If a buyer has lost it, open the order in **Store → Orders**, click **Public invoice**, copy the address of the page that opens and send it to them. It already carries the key.

## Status of a digital order

An order whose items are **all** digital products has no parcel to send:

- As soon as it is **paid**, its status moves to **Completed** by itself. This applies to every way of paying: QRIS/VA/e-wallet through PageHub, your own gateway, staff using **Mark as paid**, or accepting the buyer's transfer receipt.
- Its status steps are only **New → Completed**. There is no Processing or Shipped.
- On the order detail, the origin, destination and courier cards are replaced by one **Delivery: Digital download** card. The public invoice and its printed version show no courier, tracking number or shipping line either.
- If the payment is taken back (**Mark as unpaid**), the order returns to **New** and its downloads stop.

A **mixed** order (digital and physical items) is not completed automatically, because you still have a parcel to send. Its digital files can be downloaded as soon as the order is paid.

Digital orders paid **before** this rule existed stay **New**. Move them to **Completed** yourself with **Change status**.

## If Drive is disconnected

**Disconnect** in the files card removes PageHub's access to your Drive. While disconnected, buyers cannot download, and their download allowance is not used up. Connect again to restore it.

If the card says **Google Drive is not set up on this platform yet.**, the platform administrator has not switched this feature on.
