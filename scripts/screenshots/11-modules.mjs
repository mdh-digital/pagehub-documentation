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
  await go(page, '/files', { wait: 800 })
  await page.evaluate(() => localStorage.setItem('pagehub.assets.view', 'grid'))
  await go(page, '/files', { wait: 1800 })
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
// Toko milik workspace: layarnya di grup "Toko" sidebar (/store/*) dan
// mengikuti workspace aktif — openApp() sudah memilih workspace klien.
const S = '/store'
const unpaid = async () => {
  // Pesanan "Diproses" yang belum dibayar: tombol Tandai lunas ada di sana.
  const { get } = await import('./api.mjs')
  const list = await get(`/commerce/orders?websiteId=${I.shop}`)
  return (list.find((o) => o.paymentStatus !== 'paid' && o.status === 'process') || list[0]).id
}
await soft('commerce/usage', async () => {
  await go(page, S, { wait: 1800 })
  await shot(page, lang, 'commerce/usage.png', { clip: '.card-soft:has(.ph-gauge)' })
})
await soft('commerce/categories', async () => {
  await go(page, `${S}/categories`)
  await shot(page, lang, 'commerce/categories.png')
})
await soft('commerce/variants', async () => {
  await go(page, `${S}/variants`)
  await shot(page, lang, 'commerce/variants.png')
})
await soft('commerce/products', async () => {
  await go(page, `${S}/products`, { wait: 1800 })
  await shot(page, lang, 'commerce/products-list.png')
})
await soft('commerce/product-variants', async () => {
  const p = (I.products || [])[0]
  if (!p) throw new Error('tidak ada produk')
  await go(page, `${S}/products/${p}`, { wait: 2000 })
  // Bagian "Harga & stok": varian dengan harga, modal, stok, berat.
  await page.evaluate(() => document.getElementById('pf-pricing')?.scrollIntoView({ block: 'start' }))
  await page.waitForTimeout(600)
  await shot(page, lang, 'commerce/product-variants.png')
})
await soft('commerce/orders', async () => {
  await go(page, `${S}/orders`, { wait: 1800 })
  await shot(page, lang, 'commerce/orders-list.png')
})
await soft('commerce/order-form', async () => {
  await go(page, `${S}/orders/new`, { wait: 1800 })
  await shot(page, lang, 'commerce/order-form.png')
})
await soft('commerce/payment-dialog', async () => {
  await go(page, `${S}/orders/${await unpaid()}`, { wait: 1800 })
  await page.locator('button:has(.ph-check-circle)').first().click({ timeout: 8000 })
  await page.waitForTimeout(1200)
  await shot(page, lang, 'commerce/payment-dialog.png', { clip: '.p-dialog' })
  await page.keyboard.press('Escape')
})
await soft('commerce/invoice-print', async () => {
  const o = (I.orders || [])[0]
  if (!o) throw new Error('tidak ada pesanan')
  await go(page, `${S}/orders/${o}/print`, { wait: 2200 })
  await shot(page, lang, 'commerce/invoice-print.png')
})
await soft('commerce/carts', async () => {
  await go(page, `${S}/carts`, { wait: 1800 })
  await shot(page, lang, 'commerce/abandoned-carts.png')
})
await soft('commerce/banks', async () => {
  await go(page, `${S}/banks`)
  await shot(page, lang, 'commerce/bank-accounts.png')
})
await soft('commerce/store-settings', async () => {
  await go(page, `${S}/settings`, { wait: 1800 })
  await shot(page, lang, 'commerce/store-settings.png')
})
await soft('commerce/storefront', async () => {
  // Yang tetap di website: tab Commerce = produk yang tampil + halaman toko.
  await go(page, `/websites/${I.shop}/commerce`, { wait: 1800 })
  await shot(page, lang, 'commerce/storefront.png')
})
await soft('commerce/shop-design', async () => {
  await go(page, `/websites/${I.shop}/commerce/shop-design`, { wait: 3000 })
  await shot(page, lang, 'commerce/shop-design.png', { full: true })
})

// --- leads ------------------------------------------------------------------
await soft('leads', async () => {
  await go(page, '/submissions', { wait: 1800 })
  await shot(page, lang, 'leads/kanban.png')
  await shot(page, lang, 'leads/inbox.png')
})

// --- form builder -------------------------------------------------------------
await soft('leads/forms-list', async () => {
  await go(page, '/forms', { wait: 1600 })
  await shot(page, lang, 'leads/forms-list.png')
})
await soft('leads/form-builder', async () => {
  if (!I.form) throw new Error('tidak ada form (jalankan 06-extras.mjs)')
  await go(page, `/forms/${I.form}`, { wait: 2500 })
  await shot(page, lang, 'leads/form-builder.png')
})

// --- reseller -----------------------------------------------------------------
await soft('team/reseller-clients', async () => {
  await go(page, '/reseller', { wait: 2500 })
  await shot(page, lang, 'team/reseller-clients.png')
})
// Tab Saldo sudah tidak ada di halaman Reseller (tinggal Klien · Domain).

// --- laporan ----------------------------------------------------------------
await soft('reports/hub', async () => {
  await go(page, `/websites/${I.shop}/laporan`)
  await shot(page, lang, 'reports/hub.png')
})
await soft('reports/carts', async () => {
  // Laporan penjualan ikut toko (workspace): Kelola toko -> Laporan.
  await go(page, '/store/reports/carts', { wait: 2200 })
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
  // Paket org uji punya white label, jadi layar terbuka di keluarga itu;
  // yang dijelaskan panduan adalah grid paket bulanan (tombol pertama).
  await page.locator('.fam-switch .fam-btn').first().click({ timeout: 4000 }).catch(() => {})
  await page.waitForTimeout(900)
  await shot(page, lang, 'account/upgrade-plans.png')
})
await soft('account/ai-credit', async () => {
  await go(page, '/billing/ai', { wait: 1600 })
  await shot(page, lang, 'ai/credit-balance.png')
})
await soft('account/addons', async () => {
  await go(page, '/billing/addons', { wait: 1800 })
  await shot(page, lang, 'account/addons.png', { full: true })
})
await soft('account/appsumo', async () => {
  await go(page, '/billing/appsumo', { wait: 1600 })
  await shot(page, lang, 'account/appsumo.png')
})

// --- bantuan ----------------------------------------------------------------
await soft('help/tickets', async () => {
  await go(page, '/support', { wait: 1600 })
  // Buka thread tiket yang sudah dibalas staf (yang terakhir di daftar).
  await page.locator('.sup-row').last().click({ timeout: 6000 }).catch(() => {})
  await page.waitForTimeout(1400)
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
