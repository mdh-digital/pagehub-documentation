/**
 * Isi modul: domain, blog, toko (kategori, varian, produk, pesanan), leads,
 * media, dan satu anggota tim.
 *
 * Semua lewat API produk supaya aturan bisnisnya ikut jalan — stok yang
 * terpotong di layar Transaksi memang terpotong sungguhan.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { account, del, get, login, post, put, tryPost } from './api.mjs'
import { sql } from './lib.mjs'

const acc = account()
await login(acc.email, acc.password)
const I = JSON.parse(readFileSync(new URL('./ids.json', import.meta.url), 'utf8'))
const W = I.shop
const org = readFileSync(new URL('./org.txt', import.meta.url), 'utf8').trim()

const q = (p) => `${p}${p.includes('?') ? '&' : '?'}websiteId=${W}`

// --- domain kustom (berhenti di tahap DNS, persis yang perlu difoto) --------
await tryPost(`/websites/${W}/domain`, { domain: 'kuelezat.id' }, 'set domain')
console.log('domain: kuelezat.id (menunggu DNS)')

// --- blog ------------------------------------------------------------------
await tryPost(`/websites/${W}/blog`, { enabled: true }, 'aktifkan blog')
for (const name of ['Tips Pesta', 'Di Balik Dapur', 'Resep']) {
  await tryPost(q('/commerce/x'), null, null) // no-op guard
}
const cats = []
for (const name of ['Tips Pesta', 'Di Balik Dapur', 'Resep']) {
  const c = await tryPost(`/websites/${W}/article-categories`, { name }, `kategori ${name}`)
  if (c) cats.push(c)
}
const articles = [
  {
    title: 'Berapa porsi kue untuk 40 tamu?',
    slug: 'porsi-kue-40-tamu',
    metaDescription:
      'Patokan sederhana untuk menghitung ukuran kue: jumlah tamu, jenis acara, dan apakah ada hidangan penutup lain.',
    bodyHtml:
      '<p>Pertanyaan ini masuk hampir tiap minggu, dan jawabannya jarang satu angka.</p><h2>Mulai dari jenis acaranya</h2><p>Acara kantor biasanya menyisakan kue; ulang tahun anak hampir tidak pernah.</p><h2>Patokan cepat</h2><p>Kue 20 cm cukup untuk 16–20 porsi kalau dipotong standar, dan 24–28 porsi kalau dipotong kecil untuk cicip.</p>',
  },
  {
    title: 'Kenapa kue kami dipanggang setelah dipesan',
    slug: 'dipanggang-setelah-dipesan',
    metaDescription:
      'Alasan kami tidak menyimpan stok kue jadi, dan apa artinya buat tenggat pemesanan kamu.',
    bodyHtml:
      '<p>Kami sering menolak pesanan mendadak. Ini alasannya.</p><h2>Umur rasa itu pendek</h2><p>Buttercream yang menginap semalam berubah teksturnya, dan orang bisa merasakannya.</p>',
  },
  {
    title: 'Tiga kesalahan saat memesan kue untuk kantor',
    slug: 'kesalahan-pesan-kue-kantor',
    metaDescription:
      'Salah hitung porsi, lupa alergi, dan memesan terlalu mepet — tiga hal yang paling sering bikin repot di hari H.',
    bodyHtml:
      '<p>Pesanan kantor punya pola masalahnya sendiri.</p><h2>1. Menghitung dari jumlah kursi</h2><p>Tidak semua yang hadir makan kue. Hitung dari jumlah yang biasanya ambil, bukan dari undangan.</p>',
  },
]
const madeArticles = []
for (const [i, a] of articles.entries()) {
  const art = await tryPost(
    `/websites/${W}/articles`,
    { ...a, categoryId: cats[i % Math.max(cats.length, 1)]?.id ?? null, status: i === 2 ? 'draft' : 'published' },
    `artikel ${a.title}`,
  )
  if (art) madeArticles.push(art)
}
console.log(`blog: ${cats.length} kategori, ${madeArticles.length} artikel`)

// --- add-on toko untuk website ini ------------------------------------------
sql(`insert into org_addons (org_id, website_id, package_id, kind, name, max_products, features, expires_at)
     select '${org}', '${W}', id, 'commerce', name, max_products, features, now() + interval '30 days'
     from addon_packages where kind='commerce' and name='Toko Pro'
     on conflict do nothing`)
console.log('add-on toko: aktif untuk website ini')

// --- pengaturan toko --------------------------------------------------------
await put(q('/commerce/settings'), {
  outletName: 'Toko Kue Lezat',
  phone: '0812-3456-7890',
  email: 'halo@kuelezat.id',
  logo: '',
  invoiceLogo: '',
  dueDays: 3,
  invoiceNote: 'Mohon selesaikan pembayaran sebelum jatuh tempo agar pesanan bisa kami jadwalkan.',
  shippingNote: 'Mohon periksa kondisi kue sebelum kurir meninggalkan lokasi.',
  footerNote: 'Terima kasih sudah memesan di Toko Kue Lezat.',
  manualTransferEnabled: true,
}).catch((e) => console.log('  (lewat) settings:', e.message.slice(0, 100)))

await post(q('/commerce/addresses'), {
  label: 'Dapur Cihampelas',
  recipient: 'Nadia Prameswari',
  phone: '0812-3456-7890',
  address: 'Jl. Cihampelas No. 118',
  city: 'Bandung',
  postalCode: '40131',
}).catch((e) => console.log('  (lewat) alamat:', e.message.slice(0, 100)))

for (const b of [
  { bankName: 'BCA', accountHolder: 'Nadia Prameswari', accountNumber: '5271 8890 21', note: 'Cabang Cihampelas' },
  { bankName: 'Mandiri', accountHolder: 'Nadia Prameswari', accountNumber: '131 0091 22841', note: '' },
]) {
  await post(q('/commerce/banks'), b).catch((e) => console.log('  (lewat) bank:', e.message.slice(0, 90)))
}
console.log('toko: pengaturan, alamat, 2 rekening')

// --- kategori + master varian ----------------------------------------------
const pcats = {}
for (const name of ['Kue Ulang Tahun', 'Hampers', 'Kue Potong']) {
  const c = await post(q('/commerce/categories'), { name }).catch(() => null)
  if (c) pcats[name] = c
}
for (const v of [
  { name: 'Ukuran', variations: ['16 cm', '20 cm', '24 cm'] },
  { name: 'Rasa', variations: ['Red Velvet', 'Cokelat', 'Pandan'] },
]) {
  await post(q('/commerce/variants'), v).catch(() => null)
}
console.log(`toko: ${Object.keys(pcats).length} kategori produk, 2 master varian`)

// --- produk -----------------------------------------------------------------
const V = (name, attributes, price, costPrice, stock, tiers = []) => ({
  name,
  attributes,
  sku: '',
  price,
  costPrice,
  stock,
  weight: 1200,
  image: '',
  isActive: true,
  tiers,
})

const products = [
  {
    categoryId: pcats['Kue Ulang Tahun']?.id ?? null,
    name: 'Red Velvet Klasik',
    slug: '',
    isFeatured: true,
    sku: 'RV-01',
    description:
      'Lapisan red velvet lembut dengan cream cheese asli. Manisnya ditakar untuk lidah dewasa, tidak bikin eneg di potongan kedua.',
    keyword: 'red velvet, kue ulang tahun, bandung',
    videoUrl: '',
    status: 'active',
    hasVariants: true,
    trackStock: true,
    images: [],
    variants: [
      V('16 cm', { Ukuran: '16 cm' }, 285000, 148000, 12),
      V('20 cm', { Ukuran: '20 cm' }, 465000, 232000, 8),
      V('24 cm', { Ukuran: '24 cm' }, 690000, 340000, 4),
    ],
  },
  {
    categoryId: pcats['Hampers']?.id ?? null,
    name: 'Hampers Ramadan',
    slug: '',
    isFeatured: true,
    sku: 'HR-01',
    description: 'Kotak berisi enam toples kue kering pilihan, dikemas dengan kartu ucapan.',
    keyword: 'hampers, ramadan, parcel lebaran',
    videoUrl: '',
    status: 'active',
    hasVariants: false,
    trackStock: true,
    images: [],
    variants: [
      V('Paket Keluarga', {}, 315000, 168000, 40, [
        { minQty: 10, price: 289000 },
        { minQty: 25, price: 265000 },
      ]),
    ],
  },
  {
    categoryId: pcats['Kue Potong']?.id ?? null,
    name: 'Brownies Fudgy',
    slug: '',
    isFeatured: false,
    sku: 'BR-01',
    description: 'Cokelat 70%, dipotong tebal, tanpa kacang. Cocok untuk oleh-oleh kantor.',
    keyword: 'brownies, cokelat',
    videoUrl: '',
    status: 'active',
    hasVariants: false,
    trackStock: true,
    images: [],
    variants: [V('Loyang penuh', {}, 120000, 58000, 25)],
  },
  {
    categoryId: pcats['Kue Ulang Tahun']?.id ?? null,
    name: 'Custom Dua Tingkat',
    slug: '',
    isFeatured: false,
    sku: 'CD-01',
    description: 'Untuk pernikahan kecil dan syukuran kantor. Desain mengikuti referensi yang kamu kirim.',
    keyword: 'kue tingkat, wedding',
    videoUrl: '',
    status: 'inactive',
    hasVariants: false,
    trackStock: false,
    images: [],
    variants: [V('16 + 22 cm', {}, 950000, 470000, 0)],
  },
]

const made = []
for (const p of products) {
  const r = await post(q('/commerce/products'), p).catch((e) => {
    console.log(`  (lewat) produk ${p.name}: ${e.message.slice(0, 140)}`)
    return null
  })
  if (r) made.push(r)
}
console.log(`toko: ${made.length} produk`)

writeFileSync(
  new URL('./ids.json', import.meta.url),
  JSON.stringify({ ...I, org, products: made.map((p) => p.id), articles: madeArticles.map((a) => a.id) }, null, 2),
)
console.log('\nselesai: modul')
