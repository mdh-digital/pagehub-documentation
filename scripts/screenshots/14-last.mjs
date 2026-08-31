/** Empat tangkapan terakhir: dialog template, halaman bayar, invoice publik,
 *  dan spanduk masa tenggang (yang butuh langganan sengaja dibuat lewat). */
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { BE, PSQL, DB, shot, sql } from './lib.mjs'
import { go, ids, openApp } from './app.mjs'
import { account, get, login } from './api.mjs'

const I = ids()
const org = readFileSync(new URL('./org.txt', import.meta.url), 'utf8').trim()
const acc = account()
await login(acc.email, acc.password)

const { browser, page, lang } = await openApp({
  lang: process.env.LANG_UI || 'id',
  workspace: I.workspaceClient,
})
const failed = []
const soft = async (name, fn) => {
  try {
    await fn()
  } catch (e) {
    failed.push(`${name}: ${e.message.split('\n')[0].slice(0, 120)}`)
    console.log(`  GAGAL ${name}`)
  }
}

// --- dialog "Jadikan template" ---------------------------------------------
await soft('website/save-as-template', async () => {
  await go(page, `/websites/${I.shop}/pengaturan`, { wait: 1400 })
  await page.evaluate(() => document.querySelector('#set-export')?.scrollIntoView({ block: 'center' }))
  await page.waitForTimeout(600)
  await page.locator('text=/Jadikan template|Save as template|حفظ كقالب/i').first().click({ timeout: 8000 })
  await page.waitForTimeout(1200)
  await shot(page, lang, 'website/save-as-template.png')
  await page.keyboard.press('Escape')
})

// --- halaman pembayaran transfer manual -------------------------------------
await soft('account/payment-manual', async () => {
  await go(page, '/billing/upgrade', { wait: 2500 })
  // Pilih paket mana pun selain yang sedang dipakai, lalu buat transaksinya.
  await page.locator('text=/Pilih paket ini|Choose this plan|اختر هذه الباقة/i').first().click({ timeout: 10000 })
  await page.waitForTimeout(1200)
  await page.locator('button', { hasText: /Buat Transaksi|Create transaction|إنشاء معاملة/i }).last().click({ timeout: 10000 })
  await page.waitForURL(/billing\/checkout/, { timeout: 20000 })
  await page.waitForTimeout(2000)
  await shot(page, lang, 'account/payment-manual.png')
})

// --- invoice publik ----------------------------------------------------------
await soft('commerce/public-invoice', async () => {
  const orders = await get(`/commerce/orders?websiteId=${I.shop}`)
  const ref = orders[0]?.refNo
  if (!ref) throw new Error('nomor invoice tidak ketemu di respons pesanan')
  const url = `${BE}/w/toko-kue-lezat/kue-lezat/invoices`
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  const box = page.locator('input').first()
  await box.fill(String(ref))
  await page.locator('button, [type="submit"]').first().click().catch(() => {})
  await page.waitForTimeout(2500)
  await shot(page, lang, 'commerce/public-invoice.png')
  console.log(`     (invoice ${ref})`)
})

// --- spanduk masa tenggang ---------------------------------------------------
// Keadaan ini tidak bisa diseed lewat API: ia hasil kerja cron yang menurunkan
// langganan yang lewat tanggal. Jadi barisnya dibuat lewat DB, difoto, lalu
// DIKEMBALIKAN persis seperti semula di blok finally.
const before = sql(
  `select plan_id, status, current_period_end, lapsed_at, grace_until from subscriptions where org_id='${org}'`,
)[0]
try {
  await soft('account/grace-banner', async () => {
    sql(`update subscriptions set
           plan_id = (select id from plans where slug='free'),
           status = 'suspended',
           current_period_end = now() - interval '1 day',
           lapsed_at = now() - interval '1 day',
           grace_until = now() + interval '6 days'
         where org_id = '${org}'`)
    await go(page, '/', { wait: 2500 })
    await shot(page, lang, 'account/grace-banner.png')
  })
} finally {
  sql(`update subscriptions set
         plan_id = '${before[0]}',
         status = '${before[1]}',
         current_period_end = '${before[2]}',
         lapsed_at = ${before[3] ? `'${before[3]}'` : 'null'},
         grace_until = ${before[4] ? `'${before[4]}'` : 'null'}
       where org_id = '${org}'`)
  const after = sql(`select p.slug, s.status from subscriptions s join plans p on p.id=s.plan_id where s.org_id='${org}'`)[0]
  console.log(`     langganan dikembalikan: ${after[0]} / ${after[1]}`)
}

await browser.close()
console.log('\nselesai: sisa')
if (failed.length) {
  console.log(`gagal ${failed.length}:`)
  for (const f of failed) console.log('  - ' + f)
}
