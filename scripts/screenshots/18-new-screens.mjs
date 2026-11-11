/**
 * Layar yang ditambahkan atau berubah di rilis 2026-11: add-on kapasitas,
 * pemakaian toko, form builder, blok & desain toko, reseller.
 *
 * SHOT_FE harus origin yang diizinkan CORS backend (localhost, bukan 127.0.0.1):
 * kalau tidak, halaman tetap terbuka tapi kosong dan potretnya tampak "berhasil".
 *
 * Berbeda dari skrip 01–17, ini TIDAK membuat akun sendiri: ia masuk ke akun
 * yang sudah berisi data (toko, form, klien reseller) dan memotret apa adanya.
 *
 *   SHOT_FE=http://localhost:5173 SHOT_EMAIL=… SHOT_PASSWORD=… \
 *   SHOT_WEBSITE=<id> SHOT_PAGE=<id> SHOT_FORM=<id> LANG_UI=id node 18-new-screens.mjs
 */
import { BE, FE, launch, shot, calm } from './lib.mjs'

const LANG = process.env.LANG_UI || 'en'
const need = (k) => {
  const v = process.env[k]
  if (!v) throw new Error(`${k} belum diisi`)
  return v
}
const W = need('SHOT_WEBSITE')
const P = need('SHOT_PAGE')
const F = need('SHOT_FORM')

const res = await fetch(`${BE}/api/auth/login`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify({ email: need('SHOT_EMAIL'), password: need('SHOT_PASSWORD') }),
})
const { token } = await res.json()
if (!token) throw new Error('login gagal')

const { browser, page } = await launch()
await page.addInitScript(([t, l]) => {
  localStorage.setItem('lpb_token', t)
  localStorage.setItem('pagehub.locale', l)
}, [token, LANG])

const failed = []
const go = async (path, wait = 1800) => {
  await page.goto(FE + path, { waitUntil: 'networkidle' }).catch(() => page.goto(FE + path))
  await page.waitForTimeout(wait)
  await calm(page)
}
const soft = async (name, fn) => {
  try {
    await fn()
  } catch (e) {
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 120)}`)
    console.log(`  GAGAL ${name}`)
  }
}

// --- akun ------------------------------------------------------------------
await soft('account/billing-hub', async () => {
  await go('/billing')
  await shot(page, LANG, 'account/billing-hub.png')
})
await soft('account/addons', async () => {
  await go('/billing/addons', 2200)
  await shot(page, LANG, 'account/addons.png', { full: true })
})
await soft('account/upgrade-plans', async () => {
  await go('/billing/upgrade', 2200)
  await shot(page, LANG, 'account/upgrade-plans.png')
})

// --- toko ------------------------------------------------------------------
await soft('commerce/usage', async () => {
  await go(`/websites/${W}/commerce`, 2200)
  await shot(page, LANG, 'commerce/usage.png', { clip: '.card-soft:has(.cu-grid)' })
})
await soft('commerce/shop-design', async () => {
  await go(`/websites/${W}/commerce/shop-design`, 3000)
  await shot(page, LANG, 'commerce/shop-design.png', { full: true })
})

// --- form ------------------------------------------------------------------
await soft('leads/forms-list', async () => {
  await go('/forms')
  await shot(page, LANG, 'leads/forms-list.png')
})
await soft('leads/form-builder', async () => {
  await go(`/forms/${F}`, 2500)
  await shot(page, LANG, 'leads/form-builder.png')
})

// --- editor: blok toko, panel blok, pemilih form ---------------------------
await soft('editor', async () => {
  await go(`/pages/${P}`, 4500)
  // Slot editor masih dipegang sesi sebelumnya (lease 90 detik)? Ambil alih.
  const mask = page.locator('.p-dialog-mask')
  if (await mask.first().isVisible().catch(() => false)) {
    await page.locator('.p-dialog-footer .p-button, .p-dialog .p-button').last().click()
    await page.waitForTimeout(3000)
  }
  // Editor bisa terbuka di mode Code; blok dan panelnya hanya ada di Visual.
  await page.locator('.mode-switch .p-togglebutton:has(.ph-squares-four)').click()
  await page.waitForTimeout(2500)
  await soft('commerce/shop-blocks', async () => {
    await shot(page, LANG, 'commerce/shop-blocks.png')
  })
  await soft('commerce/shop-block-panel', async () => {
    const frame = page.frameLocator('iframe').first()
    await frame.locator('[data-shop-products]').first().click({ timeout: 9000, position: { x: 30, y: 12 } })
    await page.waitForTimeout(1500)
    await shot(page, LANG, 'commerce/shop-block-panel.png', { clip: '.sbp' })
  })
  await soft('leads/form-picker', async () => {
    // Balik ke tab Blok (tab pertama panel kanan), lalu klik ubin Form.
    await page.locator('[role="tab"]').first().click().catch(() => {})
    await page.waitForTimeout(600)
    await page.locator('.eb-block-btn:has(.ph-paper-plane-tilt)').first().click()
    await page.waitForTimeout(1500)
    await shot(page, LANG, 'leads/form-picker.png', { clip: '.p-dialog' })
    await page.keyboard.press('Escape')
  })
})

// --- reseller --------------------------------------------------------------
await soft('team/reseller-clients', async () => {
  await go('/reseller', 2500)
  await shot(page, LANG, 'team/reseller-clients.png')
})
await soft('team/reseller-balance', async () => {
  await page.locator('.rs-tabs button').nth(2).click()
  await page.waitForTimeout(1200)
  await shot(page, LANG, 'team/reseller-balance.png')
})

await browser.close()
if (failed.length) {
  console.log(`\n${failed.length} gagal:\n  ` + failed.join('\n  '))
  process.exitCode = 1
}
