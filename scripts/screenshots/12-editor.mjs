/** Tangkapan editor halaman + dialog yang perlu diklik dulu. */
import { shot } from './lib.mjs'
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

/** Klik tombol/label yang terlihat, tanpa peduli itu button, a, atau div. */
async function tap(sel, { wait = 900 } = {}) {
  const el = page.locator(sel).first()
  await el.waitFor({ state: 'visible', timeout: 8000 })
  await el.click()
  await page.waitForTimeout(wait)
}
const byText = (t) => `text=/^\\s*${t}\\s*$/i`

// --- editor: mode visual ----------------------------------------------------
await soft('editor/overview', async () => {
  await go(page, `/pages/${home.id}`, { wait: 3000 })
  await shot(page, lang, 'editor/overview.png')
  await shot(page, lang, 'getting-started/editor-first-look.png')
})

await soft('editor/visual-mode', async () => {
  // Pilih satu elemen di kanvas supaya panel properti terisi.
  const frame = page.frameLocator('iframe').first()
  await frame.locator('h1').first().click({ timeout: 8000 }).catch(() => {})
  await page.waitForTimeout(1200)
  await shot(page, lang, 'editor/visual-mode.png')
})

await soft('editor/style-panel', async () => {
  // Panel gaya: buka tab tipografi/gaya di sisi kanan kalau ada.
  await page.locator('text=/Tipografi|Typography|الطباعة/i').first().scrollIntoViewIfNeeded({ timeout: 5000 }).catch(() => {})
  await page.waitForTimeout(600)
  await shot(page, lang, 'editor/style-panel.png')
})

await soft('editor/blocks-panel', async () => {
  await tap('text=/^\\s*(Blok|Blocks|الكتل)\\s*$/i')
  await shot(page, lang, 'editor/blocks-panel.png')
})

await soft('editor/code-mode', async () => {
  await tap(byText('Code'))
  await page.waitForTimeout(1600)
  await shot(page, lang, 'editor/code-mode.png')
})

await soft('editor/ai-chat', async () => {
  await tap(byText('AI'))
  await page.waitForTimeout(1600)
  await shot(page, lang, 'editor/ai-chat.png')
})

await soft('editor/page-seo', async () => {
  await go(page, `/pages/${home.id}`, { wait: 3000 })
  await tap('[aria-label*="Alat lain" i], [title*="Alat lain" i], [aria-label*="More tools" i], [title*="More tools" i]')
  await tap('text=/SEO/i')
  await page.waitForTimeout(900)
  await shot(page, lang, 'editor/page-seo.png')
})

await soft('editor/version-history', async () => {
  await go(page, `/pages/${home.id}`, { wait: 3000 })
  await tap('[aria-label*="Alat lain" i], [title*="Alat lain" i], [aria-label*="More tools" i], [title*="More tools" i]')
  await tap('text=/Riwayat versi|Version history|سجل النسخ/i')
  await page.waitForTimeout(900)
  await shot(page, lang, 'editor/version-history.png')
})

await soft('editor/publish-toolbar', async () => {
  await go(page, `/pages/${home.id}`, { wait: 3000 })
  await shot(page, lang, 'editor/publish-toolbar.png', {
    clip: 'header, .editor-topbar, [class*="topbar"], [class*="toolbar"]',
  })
  await shot(page, lang, 'getting-started/publish-confirm.png', {
    clip: 'header, .editor-topbar, [class*="topbar"], [class*="toolbar"]',
  })
})

await soft('leads/form-fields', async () => {
  await go(page, `/pages/${kontak.id}`, { wait: 3200 })
  const frame = page.frameLocator('iframe').first()
  await frame.locator('input#nama, input[name="nama"]').first().click({ timeout: 8000 })
  await page.waitForTimeout(1400)
  await shot(page, lang, 'leads/form-fields.png')
})

// --- dialog -----------------------------------------------------------------
await soft('website/save-as-template', async () => {
  await go(page, `/websites/${I.shop}`, { wait: 1500 })
  await tap('text=/Jadikan template|Save as template|حفظ كقالب/i')
  await shot(page, lang, 'website/save-as-template.png')
  await page.keyboard.press('Escape')
})

await soft('team/access-dialog', async () => {
  await go(page, '/team', { wait: 1600 })
  await tap('[aria-label*="Aksi untuk" i], [aria-label*="Actions for" i]')
  await tap('text=/^\\s*(Akses|Access|الصلاحيات)\\s*$/i')
  await shot(page, lang, 'team/access-dialog.png')
  await page.keyboard.press('Escape')
})

await soft('team/workspace-members', async () => {
  await go(page, '/workspaces', { wait: 1600 })
  await tap('[aria-label*="Aksi untuk" i], [aria-label*="Actions for" i]')
  await tap('text=/Kelola anggota|Manage members|إدارة الأعضاء/i')
  await shot(page, lang, 'team/workspace-members.png')
  await page.keyboard.press('Escape')
})

// --- blog belum aktif (website agensi) --------------------------------------
await soft('blog/blog-inactive', async () => {
  await go(page, `/websites/${I.agency}/blog`, { wait: 1600 })
  await shot(page, lang, 'blog/blog-inactive.png')
})

// --- commerce terkunci (website agensi, tanpa add-on) -----------------------
await soft('commerce/locked', async () => {
  await go(page, `/websites/${I.agency}/commerce`, { wait: 1600 })
  await shot(page, lang, 'commerce/locked.png')
})

// --- storefront -------------------------------------------------------------
await soft('commerce/storefront', async () => {
  await go(page, `/websites/${I.shop}/commerce/storefront`, { wait: 1800 })
  await shot(page, lang, 'commerce/storefront.png')
})

await browser.close()
console.log('\nselesai: editor & dialog')
if (failed.length) {
  console.log(`gagal ${failed.length}:`)
  for (const f of failed) console.log('  - ' + f)
}
