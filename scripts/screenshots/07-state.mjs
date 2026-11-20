/**
 * Keadaan yang tidak punya jalur API buat merchant (atau yang jalurnya
 * memanggil AI / pihak ketiga), ditanam langsung ke DB uji:
 *
 *  - media ikut workspace klien + dua folder (unggahan lewat API jatuh ke
 *    workspace bawaan),
 *  - rekan tim sudah verifikasi email,
 *  - satu jadwal blog AI yang run berikutnya baru minggu depan (supaya worker
 *    tidak menghabiskan kredit),
 *  - integrasi AppSumo menyala + satu lisensi tertukar,
 *  - satu tiket bantuan beserta balasan staf (lewat API, staf = superadmin seed).
 *
 * Idempoten: aman dijalankan ulang.
 */
import { readFileSync } from 'node:fs'
import { BE, sql } from './lib.mjs'
import { account, get, login, post } from './api.mjs'

const I = JSON.parse(readFileSync(new URL('./ids.json', import.meta.url), 'utf8'))
const org = readFileSync(new URL('./org.txt', import.meta.url), 'utf8').trim()
const W = I.workspaceClient

// --- media ------------------------------------------------------------------
sql(`update assets set workspace_id='${W}' where org_id='${org}'`)
if (!Number(sql(`select count(*) from asset_folders where org_id='${org}'`)[0][0])) {
  const uid = account().userId
  for (const n of ['Produk', 'Promo Ramadan']) {
    sql(`insert into asset_folders (org_id, workspace_id, user_id, name) values ('${org}', '${W}', '${uid}', '${n}')`)
  }
  // Foto produk masuk folder Produk.
  sql(`update assets set folder_id=(select id from asset_folders where org_id='${org}' and name='Produk')
       where org_id='${org}' and filename in ('kue-red-velvet.png','brownies.png','kue-dua-tingkat.png')`)
}
console.log('media: workspace klien + 2 folder')

// --- rekan tim ---------------------------------------------------------------
sql(`update users set email_verified=true, email_verified_at=now() where email like 'bagas.%@example.com'`)

// --- jadwal blog -------------------------------------------------------------
if (!Number(sql(`select count(*) from blog_schedules where website_id='${I.shop}'`)[0][0])) {
  sql(`insert into blog_schedules (org_id, website_id, name, brief, status, publish_mode, starts_at, interval_unit, interval_count, per_run, next_run_at)
       values ('${org}', '${I.shop}', 'Tips pesta & kue', 'Tips memilih kue untuk acara keluarga dan kantor, cerita dapur, resep sederhana.',
               'active', 'draft', now() - interval '2 days', 'week', 1, 2, now() + interval '5 days')`)
}
console.log('blog: 1 jadwal')

// --- AppSumo -----------------------------------------------------------------
sql(`insert into app_settings (key, value) values ('appsumo', '{"enabled": true, "allowTest": false, "tiers": []}')
     on conflict (key) do update set value = excluded.value`)
if (!Number(sql(`select count(*) from appsumo_licenses where org_id='${org}'`)[0][0])) {
  sql(`insert into appsumo_licenses (uuid, license_key, activation_email, appsumo_plan_id, tier, status, invoice_item_uuid, is_test, raw_payload, org_id, redeemed_at)
       values ('docs-${org}', 'AS-7F3K-29QD-LX81', '${account().email}', 'pagehub_tier1', 1, 'active', 'docs-inv', false, '{}', '${org}', now() - interval '3 days')`)
}
console.log('appsumo: aktif + 1 lisensi')

// --- tiket bantuan -----------------------------------------------------------
await login(account().email, account().password)
const mine = await get('/tickets')
if (!mine.length) {
  const t = await post('/tickets', {
    kind: 'support',
    subject: 'Gambar produk tidak muncul di halaman toko',
    body: 'Halo, setelah saya ganti foto Red Velvet, di halaman /products masih tampil foto lama. Sudah coba refresh berkali-kali.',
    priority: 'normal',
  })
  await post('/tickets', {
    kind: 'feature',
    subject: 'Bisa tambah pilihan jam antar di checkout?',
    body: 'Pelanggan sering minta dikirim pagi. Kalau ada kolom jam antar di checkout akan sangat membantu.',
    priority: 'low',
  })
  // Balasan staf: superadmin seed (demo@demo.com / demo1234).
  const r = await fetch(`${BE}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'demo@demo.com', password: 'demo1234' }),
  }).then((x) => x.json())
  await fetch(`${BE}/api/tickets/${t.id}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${r.token}` },
    body: JSON.stringify({ body: 'Terima kasih laporannya, Nadia. Halaman toko memakai cache 10 menit — fotonya akan berganti sendiri. Kalau setelah itu masih lama, kabari kami ya.' }),
  }).then(async (x) => x.ok || console.log('  (lewat) balasan staf:', x.status, (await x.text()).slice(0, 120)))
  await post(`/tickets/${t.id}/messages`, { body: 'Sudah berganti sekarang. Terima kasih!' })
}
console.log('bantuan: 2 tiket')

// --- anggota workspace klien -------------------------------------------------
const mate = sql(`select id from users where email like 'bagas.%@example.com' order by created_at desc limit 1`)[0]?.[0]
if (mate) {
  await post(`/workspaces/${W}/members`, { userId: mate, role: 'editor' }).catch(() => {})
  console.log('workspace klien: Bagas = editor')
}

// --- katalog add-on ------------------------------------------------------------
// Paket kapasitas toko ada di migrasi tapi nonaktif; nyalakan supaya halaman
// Add-on menampilkan kartu harganya seperti di produksi saat dijual.
sql(`update addon_packages set is_active = true where kind in ('extra_products','extra_orders')`)
console.log('add-on: paket kapasitas toko aktif')
