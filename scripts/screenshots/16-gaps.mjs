/**
 * Menambal tangkapan yang belum ada di bahasa tertentu.
 *
 * Dua sebabnya berbeda: layar auth cuma difoto sekali waktu akun dibuat, dan
 * beberapa selector di skrip sebelumnya memakai label Inggris/Indonesia
 * sehingga meleset di antarmuka Arab. Di sini labelnya disebut per bahasa.
 */
import { FE, launch, shot } from './lib.mjs'
import { go, ids, openApp } from './app.mjs'

const LANG = process.env.LANG_UI || 'en'
const I = ids()
const failed = []
const soft = async (name, fn) => {
  try {
    await fn()
  } catch (e) {
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 110)}`)
    console.log(`  GAGAL ${name}`)
  }
}

// Label per bahasa — diambil dari berkas locale aplikasi, bukan ditebak.
const L = {
  en: { code: 'Code', ai: 'AI', more: 'More tools', seo: 'SEO & Appearance', history: 'Version history', access: 'Access', members: 'Manage members', actions: 'Actions for' },
  ar: { code: 'كود', ai: 'ذكاء اصطناعي', more: 'أدوات أخرى', seo: 'SEO والمظهر', history: 'سجل الإصدارات', access: 'الصلاحيات', members: 'إدارة الأعضاء', actions: 'إجراءات' },
  id: { code: 'Code', ai: 'AI', more: 'Alat lain', seo: 'SEO & Tampilan', history: 'Riwayat versi', access: 'Akses', members: 'Kelola anggota', actions: 'Aksi untuk' },
}[LANG]

// --- layar auth: diisi tapi tidak dikirim, akunnya sudah ada ---------------
await soft('auth', async () => {
  const { browser, page } = await launch()
  await page.addInitScript((l) => localStorage.setItem('pagehub.locale', l), LANG)

  await page.goto(`${FE}/register`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.locator('form input[type="text"]').first().fill('Nadia Prameswari')
  await page.locator('form input[type="email"]').first().fill('studio.aksara@example.com')
  await page.locator('form input[type="password"]').first().fill('PanduanPageHub2026')
  await shot(page, LANG, 'getting-started/register.png')

  await page.goto(`${FE}/verify-email?email=studio.aksara%40example.com`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.locator('input[maxlength="6"]').fill('418205')
  await shot(page, LANG, 'getting-started/verify-email.png')
  await browser.close()
})

// --- editor & dialog yang labelnya beda di bahasa ini -----------------------
const { browser, page, lang } = await openApp({ lang: LANG, workspace: I.workspaceClient })
const home = I.pages.find((p) => p.slug === 'beranda')
const tap = async (sel, wait = 1000) => {
  const el = page.locator(sel).first()
  await el.waitFor({ state: 'visible', timeout: 9000 })
  await el.click()
  await page.waitForTimeout(wait)
}

await soft('editor/code-mode', async () => {
  await go(page, `/pages/${home.id}`, { wait: 3000 })
  await tap(`text="${L.code}"`, 1800)
  await shot(page, lang, 'editor/code-mode.png')
})

await soft('editor/ai-chat', async () => {
  await tap(`text="${L.ai}"`, 1800)
  await shot(page, lang, 'editor/ai-chat.png')
})

await soft('editor/page-seo', async () => {
  await go(page, `/pages/${home.id}`, { wait: 3000 })
  await tap(`[aria-label="${L.more}"], [title="${L.more}"]`)
  await tap(`text=/${L.seo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/i`)
  await shot(page, lang, 'editor/page-seo.png')
})

await soft('editor/version-history', async () => {
  await go(page, `/pages/${home.id}`, { wait: 3000 })
  await tap(`[aria-label="${L.more}"], [title="${L.more}"]`)
  await tap(`text=/${L.history}/i`)
  await shot(page, lang, 'editor/version-history.png')
})

await soft('team/access-dialog', async () => {
  await go(page, '/team', { wait: 1800 })
  await tap(`[aria-label*="${L.actions}" i]`)
  await tap(`text=/^\\s*${L.access}\\s*$/i`)
  await shot(page, lang, 'team/access-dialog.png')
  await page.keyboard.press('Escape')
})

await soft('team/workspace-members', async () => {
  await go(page, '/workspaces', { wait: 1800 })
  await tap(`[aria-label*="${L.actions}" i]`)
  await tap(`text=/${L.members}/i`)
  await shot(page, lang, 'team/workspace-members.png')
  await page.keyboard.press('Escape')
})

await browser.close()
console.log(`\nselesai: tambalan ${LANG}`)
if (failed.length) for (const f of failed) console.log('  - ' + f)
