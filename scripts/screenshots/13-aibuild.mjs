/**
 * Tangkapan alur bangun-dengan-AI: pertanyaan, rencana, dan progres.
 *
 * Ini satu-satunya bagian yang memanggil model sungguhan — layar yang difoto
 * memang layar proses generasi, jadi tidak bisa dipalsukan dengan data seed.
 *
 * Wizard-nya satu pertanyaan per layar. Kartu pertama selalu "Pilihkan saja"
 * (`.cc.is-magic`); pilihan tunggal langsung maju, pilihan ganda menunggu
 * tombol Lanjut. Semua dipilih lewat struktur/ikon, bukan label, jadi skrip
 * yang sama jalan di tiap bahasa.
 */
import { shot } from './lib.mjs'
import { go, ids, openApp } from './app.mjs'

const LANG = process.env.LANG_UI || 'id'
const I = ids()
const { browser, page, lang } = await openApp({ lang: LANG, workspace: I.workspaceClient })

const failed = []
const soft = async (name, fn) => {
  try {
    await fn()
  } catch (e) {
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 130)}`)
    console.log(`  GAGAL ${name}`)
  }
}

const IDEA = {
  id: ['Kopi Rimba', 'Kedai kopi kecil di Lembang dengan biji dari petani sekitar. Kesannya hangat dan tenang, warna hijau tua dan kayu. Butuh hero dengan foto kedai, daftar menu, cerita asal biji kopi, jam buka, dan tombol pesan lewat WhatsApp.'],
  en: ['Rimba Coffee', 'A small coffee bar in the hills, roasting beans from nearby farmers. Warm and calm, deep green and wood tones. Needs a hero with a photo of the bar, a menu, the story of where the beans come from, opening hours, and a WhatsApp order button.'],
  ar: ['قهوة ريمبا', 'مقهى صغير في التلال يحمّص حبوبًا من المزارعين المجاورين. أجواء دافئة وهادئة بألوان الأخضر الداكن والخشب. نحتاج قسمًا رئيسيًا بصورة المقهى، وقائمة المشروبات، وقصة مصدر الحبوب، ومواعيد العمل، وزر طلب عبر واتساب.'],
}[LANG]

const next = page.locator('.wz-nav button:has(.ph-arrow-right), button:has(.ph-arrow-right)').last()
const startBtn = page.locator('button:has(.ph-lightning)').last()

await go(page, '/websites/build', { wait: 2500 })

await soft('isi ide', async () => {
  await page.locator('.wz-form input').first().fill(IDEA[0])
  await page.locator('.wz-form textarea').first().fill(IDEA[1])
  await page.waitForTimeout(500)
  await next.click()
  // Pertanyaan dibuat model; tunggu kartu pilihan muncul.
  await page.locator('.cc').first().waitFor({ state: 'visible', timeout: 240000 })
  await page.waitForTimeout(1500)
})

await soft('ai/build-questions', async () => {
  // Foto pertanyaan pertama yang kartunya bergambar (tema/warna), kalau ada
  // dalam tiga langkah pertama; kalau tidak, pertanyaan pertama saja.
  await shot(page, lang, 'ai/build-questions.png')
  await shot(page, lang, 'getting-started/ai-build-questions.png')
})

let pictured = false
await soft('jawab & rencana', async () => {
  for (let step = 0; step < 16; step++) {
    if (await startBtn.isVisible().catch(() => false)) break
    const cards = page.locator('.cc')
    if (await cards.first().isVisible().catch(() => false)) {
      if (!pictured && step > 0 && (await page.locator('.cc-art .mini').count()) > 0) {
        await page.waitForTimeout(800)
        await shot(page, lang, 'ai/build-questions.png')
        await shot(page, lang, 'getting-started/ai-build-questions.png')
        pictured = true
      }
      const magic = page.locator('.cc.is-magic').first()
      await (await magic.count() ? magic : cards.first()).click({ timeout: 10000 }).catch(() => {})
      await page.waitForTimeout(900)
      if (await next.isVisible().catch(() => false)) await next.click().catch(() => {})
    }
    await page.waitForTimeout(2500)
  }
  await startBtn.waitFor({ state: 'visible', timeout: 300000 })
  await page.waitForTimeout(2500)
  await shot(page, lang, 'ai/build-plan.png')
})

await soft('ai/build-progress', async () => {
  await startBtn.click()
  await page.waitForTimeout(70000)
  await shot(page, lang, 'ai/build-progress.png')
})

// Cukup layar progresnya: build dibatalkan supaya tidak menghabiskan kredit
// untuk website yang tidak dipakai panduan.
await soft('batalkan build', async () => {
  const { get, post } = await import('./api.mjs')
  for (const j of (await get('/ai/build/jobs')) || []) await post(`/ai/build/jobs/${j.id}/cancel`)
})

await browser.close()
console.log('\nselesai: alur AI')
if (failed.length) {
  console.log(`gagal ${failed.length}:`)
  for (const f of failed) console.log('  - ' + f)
}
