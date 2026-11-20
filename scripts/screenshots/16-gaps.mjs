/**
 * Layar daftar & verifikasi untuk bahasa selain bahasa waktu akun dibuat:
 * 01-account.mjs cuma memotretnya sekali. Di sini form diisi tapi tidak
 * dikirim — akunnya sudah ada.
 */
import { FE, launch, shot } from './lib.mjs'

const LANG = process.env.LANG_UI || 'en'
const failed = []
const soft = async (name, fn) => {
  try {
    await fn()
  } catch (e) {
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 110)}`)
    console.log(`  GAGAL ${name}`)
  }
}

// --- layar auth: diisi tapi tidak dikirim, akunnya sudah ada ---------------
await soft('auth', async () => {
  const { browser, page } = await launch()
  await page.addInitScript((l) => localStorage.setItem('pagehub.locale', l), LANG)

  await page.goto(`${FE}/register`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.locator('form input[type="text"]').first().fill('Nadia Prameswari')
  await page.locator('form input[type="email"]').first().fill('studio.aksara@example.com')
  await page.locator('form input[type="password"]').first().fill('PanduanPageHub2026')
  // Captcha (ALTCHA) dipecahkan browser di latar; tunggu sampai lencananya hijau.
  await page.waitForTimeout(4000)
  await shot(page, LANG, 'getting-started/register.png')

  await page.goto(`${FE}/verify-email?email=studio.aksara%40example.com`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.locator('input[maxlength="6"]').fill('418205')
  await shot(page, LANG, 'getting-started/verify-email.png')
  await browser.close()
})

// Editor & dialog dulu ditambal di sini per bahasa; sejak 12-editor.mjs memilih
// lewat ikon (bukan label), semuanya jalan di skrip itu untuk tiap bahasa.

console.log(`\nselesai: tambalan ${LANG}`)
if (failed.length) for (const f of failed) console.log('  - ' + f)
