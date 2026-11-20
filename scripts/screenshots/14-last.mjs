/** Tangkapan terakhir: dialog template, halaman bayar, dan spanduk akun
 *  parked (yang butuh langganan sengaja dibuat lewat tanggal). */
import { readFileSync } from 'node:fs'
import { shot, sql } from './lib.mjs'
import { go, ids, openApp } from './app.mjs'
import { account, login } from './api.mjs'

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
  await page.locator('.fam-switch .fam-btn').first().click({ timeout: 4000 }).catch(() => {})
  await page.waitForTimeout(800)
  // Pilih paket mana pun selain yang sedang dipakai, lalu buat transaksinya.
  await page.locator('text=/Pilih paket ini|Choose this plan|اختر هذه الباقة/i').first().click({ timeout: 10000 })
  await page.waitForTimeout(1200)
  await page.locator('button:has(.ph-credit-card)').last().click({ timeout: 10000 })
  await page.waitForURL(/billing\/checkout/, { timeout: 20000 })
  await page.waitForTimeout(2000)
  await shot(page, lang, 'account/payment-manual.png')
})

// Invoice publik dipotret di 15-invoice.mjs.

// --- spanduk akun parked --------------------------------------------------------
// Keadaan ini tidak bisa diseed lewat API: ia hasil kerja cron yang memarkir
// langganan yang lewat tanggal. Jadi barisnya dibuat lewat DB, difoto, lalu
// DIKEMBALIKAN persis seperti semula di blok finally.
const cols = 'plan_id, status, current_period_end, lapsed_at, grace_until, purge_after'
const before = sql(`select ${cols} from subscriptions where org_id='${org}'`)[0]
const lit = (v) => (v ? `'${v}'` : 'null')
try {
  await soft('account/grace-banner', async () => {
    sql(`update subscriptions set
           plan_id = (select id from plans where slug='parked'),
           status = 'parked',
           current_period_end = now() - interval '8 days',
           lapsed_at = now() - interval '8 days',
           grace_until = now() - interval '1 day',
           purge_after = now() + interval '29 days'
         where org_id = '${org}'`)
    await go(page, '/', { wait: 2500 })
    await shot(page, lang, 'account/grace-banner.png', { clip: '.grace-banner' })
  })
} finally {
  sql(`update subscriptions set
         plan_id = '${before[0]}', status = '${before[1]}', current_period_end = '${before[2]}',
         lapsed_at = ${lit(before[3])}, grace_until = ${lit(before[4])}, purge_after = ${lit(before[5])}
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
