/**
 * Bikin akun merchant baru dari nol lewat UI, lalu tangkap layar auth.
 *
 * Sengaja tidak memakai akun admin: yang harus terlihat di panduan adalah
 * layar yang benar-benar dilihat merchant biasa, termasuk menu yang TIDAK
 * mereka punya.
 */
import { writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { FE, launch, otpFor, shot, sql } from './lib.mjs'

const LANG = process.env.LANG_UI || 'id'
const email = process.env.SHOT_EMAIL || `studio.aksara.${Date.now().toString(36)}@example.com`
const password = 'PanduanPageHub2026'
const name = 'Nadia Prameswari'

const { browser, page } = await launch()

// Bahasa UI dipilih sebelum aplikasi boot, supaya tangkapan pertama pun sudah
// dalam bahasa yang benar (tidak ada kedipan Inggris lalu berganti).
await page.addInitScript((l) => localStorage.setItem('pagehub.locale', l), LANG)

console.log(`akun: ${email}`)

// --- daftar ---
await page.goto(`${FE}/register`, { waitUntil: 'networkidle' })
await page.locator('form input[type="text"]').first().fill(name)
await page.locator('form input[type="email"]').first().fill(email)
await page.locator('form input[type="password"]').first().fill(password)
await shot(page, LANG, 'getting-started/register.png')

await page.locator('form button[type="submit"]').click()
await page.waitForURL(/verify-email/, { timeout: 20000 })

// --- verifikasi ---
await page.waitForTimeout(800)
const code = otpFor(email)
console.log(`kode verifikasi: ${code}`)
await page.locator('input[maxlength="6"]').fill(code)
await shot(page, LANG, 'getting-started/verify-email.png')

await page.locator('form button[type="submit"]').click()
await page.waitForURL((u) => !/verify-email/.test(u.toString()), { timeout: 20000 })
await page.waitForTimeout(1500)

const [row] = sql(`select id, email_verified from users where email = '${email}'`)
console.log(`user ${row[0]} · terverifikasi: ${row[1]}`)

// Simpan kredensial supaya skrip berikutnya tinggal login.
writeFileSync(
  join(process.cwd(), 'account.json'),
  JSON.stringify({ email, password, name, userId: row[0] }, null, 2),
)

console.log('URL sekarang:', page.url())
await browser.close()
