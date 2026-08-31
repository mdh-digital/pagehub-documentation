/**
 * Tangkapan sisa modul: media, blog, toko, leads, laporan, SEO, tim, akun,
 * bantuan, landing page.
 *
 * Tiap langkah dibungkus soft(): satu selector yang meleset tidak boleh
 * menjatuhkan seluruh proses — yang gagal dicatat, sisanya jalan terus.
 */
import { shot } from './lib.mjs'
import { go, ids, openApp } from './app.mjs'

const I = ids()
const { browser, page, lang } = await openApp({
  lang: process.env.LANG_UI || 'id',
  workspace: I.workspaceClient,
})

const done = []
const failed = []
const soft = async (name, fn) => {
  try {
    await fn()
    done.push(name)
  } catch (e) {
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 110)}`)
    console.log(`  GAGAL ${name}`)
  }
}

/** Buka satu bagian di halaman Pengaturan website dan gulirkan ke sana. */
async function section(anchor) {
  await go(page, `/websites/${I.shop}/pengaturan`, { wait: 900 })
  await page.evaluate((a) => document.querySelector(a)?.scrollIntoView({ block: 'start' }), anchor)
  await page.waitForTimeout(700)
}

// --- media ------------------------------------------------------------------
await soft('media/file-manager', async () => {
  await go(page, '/files')
  await shot(page, lang, 'media/file-manager.png')
})

// --- blog -------------------------------------------------------------------
await soft('blog/tabs', async () => {
  await go(page, `/websites/${I.shop}/blog/articles`)
  await shot(page, lang, 'blog/article-editor.png') // sementara: daftar artikel
  await go(page, `/websites/${I.shop}/blog/categories`)
  await shot(page, lang, 'blog/blog-categories.png')
  await go(page, `/websites/${I.shop}/blog/schedules`)
  await shot(page, lang, 'blog/blog-schedule.png')
})
await soft('blog/article-editor', async () => {
  const arts = I.articles || []
  if (!arts.length) throw new Error('tidak ada artikel')
  await go(page, `/websites/${I.shop}/article/${arts[0]}`, { wait: 1800 })
  await shot(page, lang, 'blog/article-editor.png')
})

// --- toko -------------------------------------------------------------------
const C = `/websites/${I.shop}/commerce`
await soft('commerce/hub', async () => {
  await go(page, C)
  await shot(page, lang, 'commerce/locked.png') // diganti nanti kalau add-on aktif
})
await soft('commerce/categories', async () => {
  await go(page, `${C}/categories`)
  await shot(page, lang, 'commerce/categories.png')
})
await soft('commerce/variants', async () => {
  await go(page, `${C}/variants`)
  await shot(page, lang, 'commerce/variants.png')
})
await soft('commerce/products', async () => {
  await go(page, `${C}/products`)
  await shot(page, lang, 'commerce/products-list.png')
})
await soft('commerce/product-variants', async () => {
  const p = (I.products || [])[0]
  if (!p) throw new Error('tidak ada produk')
  await go(page, `${C}/products/${p}`, { wait: 1800 })
  await page.evaluate(() => window.scrollTo(0, 600))
  await page.waitForTimeout(500)
  await shot(page, lang, 'commerce/product-variants.png')
})
await soft('commerce/orders', async () => {
  await go(page, `${C}/orders`)
  await shot(page, lang, 'commerce/orders-list.png')
})
await soft('commerce/order-form', async () => {
  await go(page, `${C}/orders/new`, { wait: 1600 })
  await shot(page, lang, 'commerce/order-form.png')
})
await soft('commerce/order-detail', async () => {
  const o = (I.orders || [])[0]
  if (!o) throw new Error('tidak ada pesanan')
  await go(page, `${C}/orders/${o}`, { wait: 1600 })
  await shot(page, lang, 'commerce/payment-dialog.png')
})
await soft('commerce/invoice-print', async () => {
  const o = (I.orders || [])[0]
  if (!o) throw new Error('tidak ada pesanan')
  await go(page, `${C}/orders/${o}/print`, { wait: 2000 })
  await shot(page, lang, 'commerce/invoice-print.png')
})
await soft('commerce/carts', async () => {
  await go(page, `${C}/carts`)
  await shot(page, lang, 'commerce/abandoned-carts.png')
})
await soft('commerce/banks', async () => {
  await go(page, `${C}/banks`)
  await shot(page, lang, 'commerce/bank-accounts.png')
})
await soft('commerce/store-settings', async () => {
  await go(page, `${C}/store-settings`)
  await shot(page, lang, 'commerce/store-settings.png')
})

// --- leads ------------------------------------------------------------------
await soft('leads', async () => {
  await go(page, '/submissions', { wait: 1800 })
  await shot(page, lang, 'leads/kanban.png')
  await shot(page, lang, 'leads/inbox.png')
})

// --- laporan ----------------------------------------------------------------
await soft('reports/hub', async () => {
  await go(page, `/websites/${I.shop}/laporan`)
  await shot(page, lang, 'reports/hub.png')
})
await soft('reports/carts', async () => {
  await go(page, `/websites/${I.shop}/laporan/keranjang`, { wait: 1800 })
  await shot(page, lang, 'reports/carts.png')
})

// --- SEO --------------------------------------------------------------------
await soft('seo/panel', async () => {
  await section('#set-crawlers')
  await shot(page, lang, 'seo/seo-panel.png')
})

// --- tim, workspace, brand --------------------------------------------------
await soft('team/list', async () => {
  await go(page, '/team')
  await shot(page, lang, 'team/team-list.png')
})
await soft('team/workspaces', async () => {
  await go(page, '/workspaces')
  await shot(page, lang, 'team/workspaces.png')
})
await soft('team/brand', async () => {
  await go(page, '/brand', { wait: 1600 })
  await shot(page, lang, 'team/brand.png')
})

// --- akun -------------------------------------------------------------------
await soft('account/profile', async () => {
  await go(page, '/profile')
  await shot(page, lang, 'account/profile.png')
})
await soft('account/billing', async () => {
  await go(page, '/billing', { wait: 1600 })
  await shot(page, lang, 'account/billing-hub.png')
})
await soft('account/upgrade', async () => {
  await go(page, '/billing/upgrade', { wait: 2000 })
  await shot(page, lang, 'account/upgrade-plans.png')
})
await soft('account/ai-credit', async () => {
  await go(page, '/billing/ai', { wait: 1600 })
  await shot(page, lang, 'ai/credit-balance.png')
})
await soft('account/addons', async () => {
  await go(page, '/billing/addons', { wait: 1800 })
  await shot(page, lang, 'account/addons.png')
})
await soft('account/appsumo', async () => {
  await go(page, '/billing/appsumo', { wait: 1600 })
  await shot(page, lang, 'account/appsumo.png')
})

// --- bantuan ----------------------------------------------------------------
await soft('help/tickets', async () => {
  await go(page, '/support', { wait: 1600 })
  await shot(page, lang, 'help/tickets.png')
})

// --- landing page -----------------------------------------------------------
await soft('landing/list', async () => {
  await go(page, '/landing')
  await shot(page, lang, 'landing/landing-list.png')
})
await soft('landing/new', async () => {
  await go(page, '/landing/new', { wait: 1600 })
  await shot(page, lang, 'landing/new-landing-options.png')
})
await soft('landing/templates', async () => {
  await go(page, '/templates', { wait: 1800 })
  await shot(page, lang, 'landing/template-gallery.png')
})

await browser.close()
console.log(`\nselesai: ${done.length} bagian`)
if (failed.length) {
  console.log(`gagal ${failed.length}:`)
  for (const f of failed) console.log('  - ' + f)
}
