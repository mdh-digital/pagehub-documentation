/** Halaman invoice publik: dibuka pembeli dengan mengetik nomor invoicenya. */
import { BE, shot } from './lib.mjs'
import { ids, openApp } from './app.mjs'
import { account, get, login } from './api.mjs'

const I = ids()
const acc = account()
await login(acc.email, acc.password)
const orders = await get(`/commerce/orders?websiteId=${I.shop}`)
const ref = orders.find((o) => o.paymentStatus !== 'paid')?.refNo || orders[0].refNo

const { browser, page, lang } = await openApp({ lang: process.env.LANG_UI || 'id' })
await page.goto(`${BE}/w/toko-kue-lezat/kue-lezat/invoices`, { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)
await page.locator('input').first().fill(ref)
await page.locator('button, [type="submit"]').first().click().catch(() => {})
await page.waitForTimeout(3000)
await shot(page, lang, 'commerce/public-invoice.png')
console.log(`  invoice ${ref}`)
await browser.close()
