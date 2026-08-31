/**
 * Data yang bikin layar tidak kosong: kategori artikel, pesanan dengan
 * bermacam status, leads beserta tahapannya, media, dan satu rekan tim.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { chromium } from 'playwright'
import { account, get, login, post, put } from './api.mjs'
import { BE } from './lib.mjs'

const acc = account()
await login(acc.email, acc.password)
const I = JSON.parse(readFileSync(new URL('./ids.json', import.meta.url), 'utf8'))
const W = I.shop
const q = (p) => `${p}${p.includes('?') ? '&' : '?'}websiteId=${W}`
const soft = async (fn, label) => {
  try {
    return await fn()
  } catch (e) {
    console.log(`  (lewat) ${label}: ${e.message.slice(0, 130)}`)
    return null
  }
}

// --- kategori artikel + tempelkan ke artikel --------------------------------
const catIds = []
for (const name of ['Tips Pesta', 'Di Balik Dapur', 'Resep']) {
  const c = await soft(() => post(`/websites/${W}/categories`, { name }), `kategori ${name}`)
  if (c) catIds.push(c.id)
}
const arts = await soft(() => get(`/websites/${W}/articles`), 'daftar artikel')
if (arts && catIds.length) {
  for (const [i, a] of arts.entries()) {
    await soft(
      () =>
        put(`/articles/${a.id}`, {
          title: a.title,
          slug: a.slug,
          metaDescription: a.metaDescription,
          keywords: a.keywords || '',
          bodyHtml: a.bodyHtml,
          thumbnail: a.thumbnail || '',
          status: a.status,
          categoryId: catIds[i % catIds.length],
        }),
      `kategori artikel ${a.title}`,
    )
  }
}
console.log(`blog: ${catIds.length} kategori, ${arts?.length ?? 0} artikel`)

// --- pesanan ----------------------------------------------------------------
const prods = await get(q('/commerce/products?withVariants=1'))
const variantOf = (name, idx = 0) => {
  const p = prods.find((x) => x.name === name)
  return p?.variants?.[idx]?.id
}

const orders = [
  {
    customerName: 'Rina Andayani',
    customerPhone: '0812-7788-1200',
    customerEmail: 'rina.a@example.com',
    customerAddress: 'Jl. Terusan Jakarta 44, Antapani, Bandung 40291',
    courier: 'Kurir toko',
    courierService: 'Antar dalam kota',
    trackingNumber: '',
    discountType: 'none',
    discountValue: 0,
    shippingCost: 25000,
    additionalCost: 0,
    additionalLabel: '',
    note: 'Tulisan di kue: "Selamat ulang tahun, Bu Sri".',
    assignedTo: null,
    items: [{ variantId: variantOf('Red Velvet Klasik', 1), qty: 1 }],
    then: { status: 'complete', paid: true },
  },
  {
    customerName: 'Dimas Saputra',
    customerPhone: '0813-2211-8890',
    customerEmail: 'dimas@example.com',
    customerAddress: 'Gedung Wisma Dago Lt. 4, Jl. Ir. H. Juanda 210, Bandung',
    courier: 'JNE',
    courierService: 'Reguler',
    trackingNumber: 'JNE884120076',
    discountType: 'none',
    discountValue: 0,
    shippingCost: 42000,
    additionalCost: 15000,
    additionalLabel: 'Biaya packing kayu',
    note: 'Syukuran kantor, 60 orang.',
    assignedTo: null,
    items: [{ variantId: variantOf('Hampers Ramadan'), qty: 12 }],
    then: { status: 'shipping', paid: true },
  },
  {
    customerName: 'Maya Puspita',
    customerPhone: '0857-9911-4021',
    customerEmail: 'maya.p@example.com',
    customerAddress: 'Jl. Buah Batu 88, Bandung 40265',
    courier: '',
    courierService: '',
    trackingNumber: '',
    discountType: 'none',
    discountValue: 0,
    shippingCost: 25000,
    additionalCost: 0,
    additionalLabel: '',
    note: '',
    assignedTo: null,
    items: [
      { variantId: variantOf('Brownies Fudgy'), qty: 3 },
      { variantId: variantOf('Red Velvet Klasik', 0), qty: 1 },
    ],
    then: { status: 'process', paid: false },
  },
  {
    customerName: 'Agus Winarto',
    customerPhone: '0811-3344-9080',
    customerEmail: 'agus.w@example.com',
    customerAddress: 'Perum Bumi Panyileukan Blok C2, Bandung',
    courier: '',
    courierService: '',
    trackingNumber: '',
    discountType: 'none',
    discountValue: 0,
    shippingCost: 25000,
    additionalCost: 0,
    additionalLabel: '',
    note: 'Minta dikirim pagi sebelum jam 9.',
    assignedTo: null,
    items: [{ variantId: variantOf('Hampers Ramadan'), qty: 2 }],
    then: { status: 'pending', paid: false },
  },
]

const madeOrders = []
for (const o of orders) {
  const { then, ...input } = o
  if (input.items.some((i) => !i.variantId)) {
    console.log(`  (lewat) pesanan ${input.customerName}: varian tidak ketemu`)
    continue
  }
  const created = await soft(() => post(q('/commerce/orders'), input), `pesanan ${input.customerName}`)
  if (!created) continue
  madeOrders.push(created)
  if (then.status !== 'pending') {
    // Lewati tiap tahap: status di produk ini bukan label bebas — stok
    // dipotong saat masuk "process", jadi lompat langsung akan bohong.
    const chain = { process: ['process'], shipping: ['process', 'shipping'], complete: ['process', 'shipping', 'complete'] }
    for (const s of chain[then.status] || []) {
      await soft(
        () => post(`/commerce/orders/${created.id}/status`, { status: s, reason: '', courier: input.courier || 'Kurir toko', trackingNumber: input.trackingNumber }),
        `status ${s}`,
      )
    }
  }
  if (then.paid) {
    await soft(
      () =>
        post(`/commerce/orders/${created.id}/payment`, {
          method: 'bank',
          amount: created.total,
          paidAt: new Date().toISOString(),
          note: '',
        }),
      `pembayaran ${input.customerName}`,
    )
  }
}
console.log(`toko: ${madeOrders.length} pesanan`)

// --- leads: isian form dari halaman publik ----------------------------------
const kontak = I.pages.find((p) => p.slug === 'kontak')
const submissions = [
  { nama: 'Sinta Rahayu', email: 'sinta.r@example.com', hp: '0812-9087-3311', acara: 'Ulang tahun anak, 25 Maret, 30 porsi, tema dinosaurus.' },
  { nama: 'Bayu Kurniawan', email: 'bayu.k@example.com', hp: '0857-2211-9080', acara: 'Syukuran kantor 80 orang, butuh hampers juga.' },
  { nama: 'Fitri Handayani', email: 'fitri@example.com', hp: '0813-7788-2200', acara: 'Lamaran, 12 April, kue dua tingkat warna sage.' },
  { nama: 'Rudi Hartono', email: 'rudi.h@example.com', hp: '0811-4455-1122', acara: 'Mau tanya harga brownies untuk reseller.' },
  { nama: 'Lia Kusuma', email: 'lia.kusuma@example.com', hp: '0895-3311-7788', acara: 'Kue pengajian 50 porsi, minggu depan.' },
]
for (const s of submissions) {
  await fetch(`${BE}/api/forms/${kontak.id}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(s),
  }).catch(() => {})
}
const landingSubs = [
  { nama: 'Hendra Gunawan', wa: '0812-3311-9900', jumlah: '15' },
  { nama: 'Putri Anggraini', wa: '0857-6677-2211', jumlah: '30' },
]
for (const s of landingSubs) {
  await fetch(`${BE}/api/forms/${I.landing}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(s),
  }).catch(() => {})
}
console.log(`leads: ${submissions.length + landingSubs.length} isian form`)

// --- tahapan pipeline -------------------------------------------------------
const stages = [
  { name: 'Dihubungi', color: '#2563eb', outcome: 'open' },
  { name: 'Penawaran dikirim', color: '#a855f7', outcome: 'open' },
  { name: 'Deal', color: '#16a34a', outcome: 'won' },
  { name: 'Tidak jadi', color: '#94a3b8', outcome: 'lost' },
]
const madeStages = []
for (const s of stages) {
  const r = await soft(
    () => post(`/leads/stages?scope=website&id=${W}`, s),
    `stage ${s.name}`,
  )
  if (r) madeStages.push(r)
}
const board = await soft(() => get(`/leads/board?scope=website&id=${W}`), 'papan leads')
if (board && madeStages.length) {
  const leads = board.leads || board.items || []
  const plan = [0, 0, 1, 2]
  for (const [i, lead] of leads.entries()) {
    if (i >= plan.length) break
    await soft(() => put(`/leads/${lead.id}/stage`, { stageId: madeStages[plan[i]].id }), 'pindah stage')
  }
  if (leads[0]) {
    await soft(
      () => put(`/leads/${leads[0].id}`, { notes: 'Sudah ditelepon 12 Mar. Minta dikirim contoh desain dulu.' }),
      'catatan lead',
    )
  }
}
console.log(`leads: ${madeStages.length} stage`)

// --- media ------------------------------------------------------------------
const browser = await chromium.launch()
const tile = await browser.newContext({ viewport: { width: 900, height: 700 }, deviceScaleFactor: 1 })
const tp = await tile.newPage()
const media = [
  ['kue-red-velvet.png', '#f3c1c6', '#c2543f', '🍰'],
  ['hampers-ramadan.png', '#f6e7cd', '#b8873b', '🎁'],
  ['brownies.png', '#e0cfc2', '#6b4226', '🍫'],
  ['dapur-cihampelas.png', '#dbe7dd', '#2f6b4f', '🏠'],
  ['tim-produksi.png', '#dfe4ee', '#3b4a68', '👩‍🍳'],
  ['kue-dua-tingkat.png', '#f0e2ef', '#8a4f7d', '🎂'],
]
const files = []
for (const [name, bg, fg, emoji] of media) {
  await tp.setContent(
    `<div style="width:900px;height:700px;display:grid;place-items:center;background:linear-gradient(140deg,${bg},#fff);font-size:230px">${emoji}</div>`,
  )
  const buf = await tp.screenshot()
  files.push([name, buf])
}
await browser.close()

for (const [name, buf] of files) {
  const fd = new FormData()
  fd.append('file', new Blob([buf], { type: 'image/png' }), name)
  await soft(() => post('/assets', fd), `upload ${name}`)
}
console.log(`media: ${files.length} berkas`)

// --- rekan tim --------------------------------------------------------------
const mate = await soft(
  () =>
    post('/members', {
      name: 'Bagas Nugroho',
      email: `bagas.${Date.now().toString(36)}@example.com`,
      role: 'member',
      websiteIds: [W],
    }),
  'undang anggota',
)
console.log(mate ? `tim: ${mate.name || 'anggota'} diundang` : 'tim: dilewati')

writeFileSync(
  new URL('./ids.json', import.meta.url),
  JSON.stringify({ ...I, orders: madeOrders.map((o) => o.id), stages: madeStages.map((s) => s.id) }, null, 2),
)
console.log('\nselesai: data')
