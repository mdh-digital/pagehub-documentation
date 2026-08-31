/** Perbaikan susulan: tandai lunas dua pesanan, dan undang satu rekan tim. */
import { readFileSync } from 'node:fs'
import { account, get, login, post } from './api.mjs'

const acc = account()
await login(acc.email, acc.password)
const I = JSON.parse(readFileSync(new URL('./ids.json', import.meta.url), 'utf8'))
const soft = async (fn, l) => { try { return await fn() } catch (e) { console.log(`  (lewat) ${l}: ${e.message.slice(0,120)}`); return null } }

const banks = await get(`/commerce/banks?websiteId=${I.shop}`)
const orders = await get(`/commerce/orders?websiteId=${I.shop}`)
for (const o of orders) {
  if (['complete', 'shipping'].includes(o.status) && o.paymentStatus !== 'paid') {
    await soft(() => post(`/commerce/orders/${o.id}/paid`, {
      methodKind: 'bank',
      method: banks[0] ? `${banks[0].bankName} · ${banks[0].accountNumber}` : 'BCA',
      amount: o.total,
      proofUrl: '',
      note: '',
    }), `lunas ${o.customerName}`)
  }
}
console.log('pembayaran: selesai')

const mate = await soft(() => post('/members', {
  name: 'Bagas Nugroho',
  email: `bagas.${Date.now().toString(36)}@example.com`,
  password: 'RekanKerja2026!',
  role: 'member',
}), 'undang anggota')
if (mate) {
  await soft(() => post(`/websites/${I.shop}/access`, { userId: mate.id, role: 'editor' }), 'akses website')
  console.log(`tim: ${mate.name} diundang (editor di Toko Kue Lezat)`)
}
