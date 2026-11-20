/** Tangkapan bagian Memulai + Website. */
import { shot } from './lib.mjs'
import { go, ids, openApp } from './app.mjs'

const I = ids()
const { browser, page, lang } = await openApp({ lang: process.env.LANG_UI || 'id', workspace: I.workspaceClient })

// --- Memulai ---------------------------------------------------------------
await go(page, '/')
await shot(page, lang, 'getting-started/dashboard.png')
await shot(page, lang, 'getting-started/layout-overview.png')

// Panel Tweaks: drawer tampilan di sisi kanan.
const tweak = page.locator('button[title], button[aria-label]').filter({ hasText: '' })
await page.locator('[aria-label*="Tweak" i], [title*="Tweak" i]').first().click({ timeout: 8000 }).catch(async () => {
  await page.locator('.ph-palette, [class*="palette"]').first().click({ timeout: 8000 })
})
await page.waitForTimeout(900)
await shot(page, lang, 'getting-started/tweaks-panel.png')
await page.keyboard.press('Escape')
await page.waitForTimeout(500)

// --- Websites --------------------------------------------------------------
await go(page, '/websites')
await shot(page, lang, 'website/website-list.png')

// Layar "Website baru" — tiga pilihan.
await page.locator('a[href="/websites/build"], button').filter({ hasText: /Website baru|New website|موقع جديد/i }).first().click().catch(() => {})
await page.waitForTimeout(1500)
await shot(page, lang, 'website/new-website-options.png')
await shot(page, lang, 'getting-started/new-website-options.png')

// --- Satu website: halaman, pengaturan, tema, menu, tracking, domain -------
await go(page, `/websites/${I.shop}`)
await shot(page, lang, 'website/pages-tab.png')
await shot(page, lang, 'website/shell-card.png', { clip: '.col-lg-4 > .card-soft:not(.glance)' })

await go(page, `/websites/${I.shop}/pengaturan`)
await shot(page, lang, 'website/settings-general.png')

for (const [hash, name] of [
  ['#set-theme', 'website/theme-global.png'],
  ['#set-menu', 'website/menu-editor.png'],
  ['#set-tracking', 'website/tracking.png'],
  ['#set-domain', 'website/domain-dns.png'],
]) {
  await go(page, `/websites/${I.shop}/pengaturan${hash}`, { wait: 1000 })
  await page.evaluate((h) => {
    const el = document.querySelector(h)
    if (el) el.scrollIntoView({ block: 'start' })
  }, hash)
  await page.waitForTimeout(600)
  await shot(page, lang, name)
}

await go(page, `/websites/${I.shop}/sharing`)
await shot(page, lang, 'website/sharing-tab.png')

await go(page, `/websites/${I.shop}/shell`)
await shot(page, lang, 'website/shell-editor.png')

await go(page, '/website-templates')
await shot(page, lang, 'website/template-gallery.png')

await browser.close()
console.log('selesai: basics')
