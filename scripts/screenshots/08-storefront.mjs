/**
 * Halaman toko (list/detail/cart/checkout/strip) ditulis AI dari desain situs.
 * Memakai kredit AI sungguhan — sekali saja per akun uji, hasilnya dipakai
 * semua bahasa. Menunggu job-nya selesai.
 */
import { readFileSync } from 'node:fs'
import { account, get, login, post } from './api.mjs'

const I = JSON.parse(readFileSync(new URL('./ids.json', import.meta.url), 'utf8'))
await login(account().email, account().password)
const job = await post(`/websites/${I.shop}/ai/storefront`)
console.log('job', job.id, job.status)
for (let i = 0; i < 120; i++) {
  await new Promise((r) => setTimeout(r, 5000))
  const j = await get(`/ai/content-jobs/${job.id}`)
  if (i % 6 === 0) console.log(' ', j.status, j.progress ?? '')
  if (['done', 'failed', 'error', 'cancelled'].includes(j.status)) {
    console.log('selesai:', j.status, j.error || '')
    break
  }
}
