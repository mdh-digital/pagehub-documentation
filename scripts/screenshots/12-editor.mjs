/**
 * Tangkapan editor halaman + dialog yang perlu diklik dulu.
 *
 * Selector di sini sengaja memakai ikon (kelas Phosphor) dan struktur, bukan
 * label: label berganti per bahasa, ikonnya tidak — jadi skrip yang sama jalan
 * untuk id, en, dan ar tanpa tabel terjemahan.
 */
import { shot, sql } from './lib.mjs'
import { go, ids, openApp } from './app.mjs'

const I = ids()
const { browser, page, lang } = await openApp({
  lang: process.env.LANG_UI || 'id',
  workspace: I.workspaceClient,
})

const failed = []
const soft = async (name, fn) => {
  try {
    await fn()
  } catch (e) {
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 110)}`)
    console.log(`  GAGAL ${name}`)
  }
}

const home = I.pages.find((p) => p.slug === 'beranda')
const kontak = I.pages.find((p) => p.slug === 'kontak')
const draft = I.pages.find((p) => p.slug === 'katering-kantor')

async function tap(sel, { wait = 900 } = {}) {
  const el = page.locator(sel).first()
  await el.waitFor({ state: 'visible', timeout: 9000 })
  await el.click()
  await page.waitForTimeout(wait)
}

/**
 * Buka editor dalam keadaan bersih. Satu akun = satu editor (lease 90 detik),
 * dan tiap sesi browser skrip ini adalah "tab" baru — jadi lease sisa run
 * sebelumnya dihapus dulu, kalau tidak yang terfoto dialog "Ambil alih".
 */
async function editor(id, mode = 'visual') {
  sql(`delete from editor_leases`)
  await go(page, `/pages/${id}`, { wait: 3500 })
  const icon = { visual: 'ph-squares-four', code: 'ph-code', ai: 'ph-sparkle' }[mode]
  await tap(`.mode-switch .p-togglebutton:has(.${icon})`, { wait: 2200 })
}

const sideTab = (n) => tap(`.side-tabs [role="tab"] >> nth=${n}`, { wait: 700 })
const tools = async (icon) => {
  await tap('.tb-icon:has(.ph-dots-three-vertical)')
  await tap(`[role="menuitem"]:has(.${icon})`, { wait: 1200 })
}

// --- editor: mode visual ----------------------------------------------------
await soft('editor/overview', async () => {
  await editor(home.id)
  await shot(page, lang, 'editor/overview.png')
  await shot(page, lang, 'getting-started/editor-first-look.png')
})

await soft('editor/visual-mode', async () => {
  const frame = page.frameLocator('iframe').first()
  await frame.locator('h1').first().click({ timeout: 8000 })
  await page.waitForTimeout(1400)
  await shot(page, lang, 'editor/visual-mode.png')
})

await soft('editor/style-panel', async () => {
  // Elemen masih terpilih: tab Atribut berisi panel gaya. Gulir panelnya
  // sampai kotak breakpoint/state kelihatan di atas.
  await page.evaluate(() => {
    const el = document.querySelector('.side-tabs')?.parentElement?.querySelector('[class*="scroll"], .overflow-auto')
    if (el) el.scrollTop = 0
  })
  await page.waitForTimeout(400)
  await shot(page, lang, 'editor/style-panel.png', { clip: '.side-tabs >> xpath=..' })
})

await soft('editor/blocks-panel', async () => {
  await sideTab(0)
  await shot(page, lang, 'editor/blocks-panel.png', { clip: '.side-tabs >> xpath=..' })
})

await soft('editor/code-mode', async () => {
  await tap('.mode-switch .p-togglebutton:has(.ph-code)', { wait: 2000 })
  await shot(page, lang, 'editor/code-mode.png')
})

await soft('editor/ai-chat', async () => {
  await tap('.mode-switch .p-togglebutton:has(.ph-sparkle)', { wait: 2000 })
  await shot(page, lang, 'editor/ai-chat.png')
})

await soft('editor/page-seo', async () => {
  await editor(home.id)
  await tools('ph-gear')
  await shot(page, lang, 'editor/page-seo.png', { clip: '.p-dialog' })
  await page.keyboard.press('Escape')
})

await soft('editor/version-history', async () => {
  await editor(home.id)
  await tools('ph-clock-counter-clockwise')
  await shot(page, lang, 'editor/version-history.png', { clip: '.p-dialog' })
  await page.keyboard.press('Escape')
})

await soft('editor/publish-toolbar', async () => {
  await editor(home.id)
  await shot(page, lang, 'editor/publish-toolbar.png', { clip: '.editor-toolbar' })
  await shot(page, lang, 'getting-started/publish-confirm.png', { clip: '.editor-toolbar' })
})

await soft('leads/form-fields', async () => {
  await editor(kontak.id)
  const frame = page.frameLocator('iframe').first()
  // Klik satu kolom, lalu naik ke induk sampai yang terpilih <form>.
  await frame.locator('form input').first().click({ timeout: 8000 })
  await page.waitForTimeout(900)
  for (let i = 0; i < 5; i++) {
    const tag = (await page.locator('.side-tab-tag').first().textContent().catch(() => ''))?.trim()
    if (tag === 'form') break
    await page.locator('.eb-tb-btn:has(.ph-arrow-elbow-left-up)').first().click()
    await page.waitForTimeout(700)
  }
  await page.waitForTimeout(800)
  await shot(page, lang, 'leads/form-fields.png')
})

// --- blok toko & pemilih form (di halaman draf, supaya halaman terbit utuh) --
await soft('commerce/shop-blocks', async () => {
  await editor(draft.id)
  await sideTab(0)
  // Gulir palet sampai grup Toko kelihatan.
  await page.locator('.eb-block-btn:has(.ph-storefront), .eb-block-btn:has(.ph-shopping-bag)').first()
    .scrollIntoViewIfNeeded({ timeout: 6000 }).catch(() => {})
  await page.waitForTimeout(600)
  await shot(page, lang, 'commerce/shop-blocks.png', { clip: '.side-tabs >> xpath=..' })
})

await soft('commerce/shop-block-panel', async () => {
  // Jatuhkan satu blok produk ke halaman draf; bloknya langsung terpilih dan
  // panel kanan pindah ke Atribut.
  const frame = page.frameLocator('iframe').first()
  if (!(await frame.locator('[data-shop-products]').count())) {
    await page.locator('.eb-block-btn:has(.ph-star), .eb-block-btn:has(.ph-storefront)').first().click()
    await page.waitForTimeout(2500)
  }
  await frame.locator('[data-shop-products]').first().click({ timeout: 9000, position: { x: 30, y: 12 } })
  await page.waitForTimeout(1500)
  await shot(page, lang, 'commerce/shop-block-panel.png', { clip: '.sbp' })
})

await soft('leads/form-picker', async () => {
  await sideTab(0)
  await tap('.eb-block-btn:has(.ph-paper-plane-tilt)', { wait: 1500 })
  await shot(page, lang, 'leads/form-picker.png', { clip: '.p-dialog' })
  await page.keyboard.press('Escape')
})

// --- dialog di luar editor ---------------------------------------------------
await soft('team/access-dialog', async () => {
  await go(page, '/team', { wait: 1600 })
  await tap('.row-dots:not([disabled]) >> nth=-1')
  await tap('[role="menuitem"]:has(.ph-sliders-horizontal)', { wait: 1400 })
  await shot(page, lang, 'team/access-dialog.png', { clip: '.p-dialog' })
  await page.keyboard.press('Escape')
})

await soft('team/workspace-members', async () => {
  await go(page, '/workspaces', { wait: 1600 })
  await tap('.row-dots:not([disabled]) >> nth=-1')
  await tap('[role="menuitem"]:has(.ph-users)', { wait: 1400 })
  await shot(page, lang, 'team/workspace-members.png', { clip: '.p-dialog' })
  await page.keyboard.press('Escape')
})

await soft('blog/blog-inactive', async () => {
  await go(page, `/websites/${I.agency}/blog`, { wait: 1600 })
  await shot(page, lang, 'blog/blog-inactive.png')
})

sql(`delete from editor_leases`)
await browser.close()
console.log('\nselesai: editor & dialog')
if (failed.length) {
  console.log(`gagal ${failed.length}:`)
  for (const f of failed) console.log('  - ' + f)
}
