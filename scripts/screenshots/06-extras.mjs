/** Tempelkan gambar dari media library ke produk, supaya daftar produk dan
 *  kartu toko tidak berisi kotak kosong. */
import { readFileSync } from 'node:fs'
import { writeFileSync } from 'node:fs'
import { account, get, login, post as post_, put } from './api.mjs'
import { BE, sql } from './lib.mjs'

const acc = account()
await login(acc.email, acc.password)
const I = JSON.parse(readFileSync(new URL('./ids.json', import.meta.url), 'utf8'))
const assets = await get('/assets')
const list = Array.isArray(assets) ? assets : assets.items || assets.assets || []
const url = (name) => list.find((a) => a.filename === name)?.url
const pick = {
  'Red Velvet Klasik': 'kue-red-velvet.png',
  'Hampers Ramadan': 'hampers-ramadan.png',
  'Brownies Fudgy': 'brownies.png',
  'Custom Dua Tingkat': 'kue-dua-tingkat.png',
}
for (const id of I.products || []) {
  const p = await get(`/commerce/products/${id}`)
  const u = url(pick[p.name])
  if (!u || (p.images || []).length) continue
  await put(`/commerce/products/${id}`, { ...p, images: [u] }).catch((e) => console.log('  (lewat)', p.name, e.message.slice(0, 160)))
  console.log(`  gambar: ${p.name}`)
}

// --- kunjungan --------------------------------------------------------------
// Pengunjung asli tidak bisa diseed lewat API (hitungan view ditulis oleh
// render publik). Jadi 30 hari kunjungan ditanam lewat DB: bentuknya sama
// dengan yang ditulis server — counter all-time + baris harian.
if (!Number(sql(`select count(*) from page_view_daily where website_id='${I.shop}'`)[0][0])) sql(`insert into page_view_daily (website_id, page_id, day, views)
     select p.website_id, p.id, d::date,
            (20 + (abs(hashtext(p.slug || d::text)) % 60)) * case p.slug when 'beranda' then 3 when 'katalog' then 2 else 1 end
     from pages p cross join generate_series(current_date - 29, current_date, interval '1 day') d
     where p.website_id = '${I.shop}' and p.status = 'published'
     on conflict do nothing`)
sql(`update pages p set view_count = coalesce((select sum(views) from page_view_daily v where v.page_id = p.id), 0)
     where p.website_id = '${I.shop}'`)
sql(`update pages set view_count = 412 where id = '${I.landing}'`)
console.log('kunjungan: 30 hari')

// --- keranjang ditinggalkan -------------------------------------------------
// Lewat tracker publik yang sama dengan yang dipanggil halaman: pengunjung
// mengisi sebagian form lalu pergi. Satu di antaranya lalu "dikirim" supaya
// ada yang berstatus jadi pesanan/lead.
const katalog = I.pages.find((p) => p.slug === 'katalog') || I.pages[0]
const carts = [
  ['c-ayu', { nama: 'Ayu Lestari', hp: '0812-5566-7711', email: 'ayu.l@example.com', alamat: '' }, 465000],
  ['c-reza', { nama: 'Reza Pratama', hp: '0857-4411-2290', email: '', alamat: '' }, 315000],
  ['c-wulan', { nama: 'Wulan Sari', hp: '', email: 'wulan@example.com', alamat: '' }, 690000],
  ['c-tono', { nama: 'Tono Sugiarto', hp: '0813-9922-0011', email: 'tono@example.com', alamat: 'Jl. Setiabudi 12, Bandung' }, 240000],
]
for (const [key, form, total] of carts) {
  await fetch(`${BE}/api/track/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pageId: katalog.id, sessionKey: `docs-${key}`, formData: form, items: [], subtotal: total, total }),
  }).catch(() => {})
}
console.log(`keranjang: ${carts.length}`)

// --- form builder -----------------------------------------------------------
const forms = await get(`/form-builder?workspaceId=${I.workspaceClient}`).catch(() => [])
if (!forms.length) {
  const f = (id, label, type, required, extra = {}) => ({ id, label, type, required, ...extra })
  const order = await post_('/form-builder', {
    name: 'Pesan kue custom',
    workspaceId: I.workspaceClient,
    isActive: true,
    schema: {
      layout: 'steps',
      submitLabel: 'Kirim pesanan',
      sections: [
        {
          id: 's1',
          title: 'Data kamu',
          description: 'Kami hubungi lewat WhatsApp untuk konfirmasi.',
          fields: [
            f('nama', 'Nama lengkap', 'text', true, { placeholder: 'Nadia Prameswari' }),
            f('wa', 'Nomor WhatsApp', 'tel', true, { placeholder: '0812-xxxx-xxxx' }),
            f('email', 'Email', 'email', false),
          ],
        },
        {
          id: 's2',
          title: 'Kuenya',
          fields: [
            f('acara', 'Jenis acara', 'select', true, { options: ['Ulang tahun', 'Pernikahan', 'Kantor', 'Lainnya'] }),
            f('tanggal', 'Tanggal acara', 'date', true),
            f('porsi', 'Jumlah porsi', 'number', false, { help: 'Perkiraan saja, nanti kami bantu hitung.' }),
            f('referensi', 'Foto referensi desain', 'file', false, { accept: 'image' }),
            f('catatan', 'Catatan', 'textarea', false),
          ],
        },
      ],
    },
    settings: { successMessage: 'Terima kasih! Kami balas lewat WhatsApp dalam 1×24 jam.' },
  })
  await post_('/form-builder', {
    name: 'Daftar reseller',
    workspaceId: I.workspaceClient,
    isActive: true,
    schema: {
      layout: 'single',
      sections: [{ id: 's1', title: 'Daftar jadi reseller', fields: [
        f('nama', 'Nama toko', 'text', true), f('kota', 'Kota', 'text', true), f('wa', 'WhatsApp', 'tel', true),
      ] }],
    },
  })
  await post_('/form-builder', {
    name: 'Survei kepuasan',
    workspaceId: I.workspaceClient,
    isActive: false,
    schema: { layout: 'single', sections: [{ id: 's1', title: 'Gimana kuenya?', fields: [
      f('nilai', 'Nilai', 'radio', true, { options: ['1', '2', '3', '4', '5'] }), f('saran', 'Saran', 'textarea', false),
    ] }] },
  })
  I.form = order.id
  writeFileSync(new URL('./ids.json', import.meta.url), JSON.stringify(I, null, 2))
  console.log('form: 3')
}
