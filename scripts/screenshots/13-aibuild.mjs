/**
 * Tangkapan alur bangun-dengan-AI: pertanyaan, rencana, dan progres.
 *
 * Ini satu-satunya bagian yang memanggil model sungguhan — layar yang difoto
 * memang layar proses generasi, jadi tidak bisa dipalsukan dengan data seed.
 */
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
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 130)}`)
    console.log(`  GAGAL ${name}`)
  }
}

await go(page, '/websites/build', { wait: 2500 })

await soft('isi ide', async () => {
  const inputs = page.locator('input[type="text"], input:not([type])')
  await inputs.nth(0).fill('Kopi Rimba')
  const addr = inputs.nth(1)
  if (await addr.count()) await addr.fill('kopi-rimba-' + (process.env.LANG_UI || 'id'))
  const area = page.locator('textarea').first()
  await area.fill(
    'Kedai kopi kecil di Lembang dengan biji dari petani sekitar. Kesannya hangat dan tenang, warna hijau tua dan kayu. Butuh hero dengan foto kedai, daftar menu, cerita asal biji kopi, jam buka, dan tombol pesan lewat WhatsApp.',
  )
  await page.waitForTimeout(600)
})

await soft('mulai', async () => {
  // Layar ide bisa satu halaman atau dua, tergantung bahasa/versi. Jadi:
  // maju terus lewat tombol "Lanjut/Next", isi kolom kosong yang menghalangi,
  // sampai penanda layar pertanyaan muncul.
  const PICK = /Pilihkan saja|Just decide|Decide for me|اختر عني|اختر لي/i
  for (let i = 0; i < 6; i++) {
    if (await page.locator('text=' + PICK).count()) break
    const empty = page.locator('input[type="text"]:visible, input:not([type]):visible')
    const n = await empty.count()
    for (let k = 0; k < n; k++) {
      const box = empty.nth(k)
      if (!(await box.inputValue())) await box.fill('kopi-rimba-' + (process.env.LANG_UI || 'id')).catch(() => {})
    }
    const next = page.locator('button:visible', { hasText: /^\s*(Buat|Build|Create|Next|إنشاء|أنشئ|التالي|Lanjut|Mulai)\b/i }).last()
    if (await next.count()) await next.click({ timeout: 10000 }).catch(() => {})
    await page.waitForTimeout(4000)
  }
  await page.waitForSelector('text=' + PICK, { timeout: 240000 })
  await page.waitForTimeout(2000)
})

await soft('ai/build-questions', async () => {
  await shot(page, lang, 'ai/build-questions.png')
  await shot(page, lang, 'getting-started/ai-build-questions.png')
})

await soft('jawab & rencana', async () => {
  // Wizard satu-pertanyaan-per-layar. Pilihan tunggal langsung memajukan
  // langkah; pertanyaan multi-pilih tidak — ia menunggu tombol lanjut. Karena
  // itu tiap putaran memilih dulu, LALU mencari tombol lanjut kalau ada.
  for (let step = 0; step < 14; step++) {
    if (await page.locator('text=/Mulai bikin|Start build|ابدأ/i').count()) break

    const pick = page.locator('text=/Pilihkan saja|Decide for me|اختر عني|قرّر عني/i').first()
    if (await pick.count()) await pick.click({ timeout: 10000 }).catch(() => {})
    await page.waitForTimeout(900)

    const next = page.locator('button', { hasText: /Lanjut|buat rencana|Next|التالي/i }).last()
    if (await next.count()) {
      await next.click({ timeout: 8000 }).catch(() => {})
      await page.waitForTimeout(1200)
    }
    await page.waitForTimeout(1600)
  }
  await page.waitForSelector('text=/Mulai bikin|Start build|ابدأ/i', { timeout: 300000 })
  await page.waitForTimeout(2500)
  await shot(page, lang, 'ai/build-plan.png')
})

await soft('ai/build-progress', async () => {
  await page.locator('text=/Mulai bikin|Start build|ابدأ/i').last().click()
  await page.waitForTimeout(70000)
  await shot(page, lang, 'ai/build-progress.png')
})

await browser.close()
console.log('\nselesai: alur AI')
if (failed.length) {
  console.log(`gagal ${failed.length}:`)
  for (const f of failed) console.log('  - ' + f)
}
