# Harness screenshot

Mengisi `public/img/<bahasa>/…` dengan menjalankan aplikasi PageHub yang asli:
bikin akun merchant baru, isi datanya lewat API produk, lalu memotret layarnya
satu per satu dengan Playwright.

Dependensinya sengaja **tidak** ikut `package.json` situs docs — orang yang cuma
mau menulis panduan tidak perlu mengunduh Chromium 95 MB.

```bash
cd scripts/screenshots
npm install
npx playwright install chromium
```

## Prasyarat

| Yang dibutuhkan | Kenapa |
| --- | --- |
| App builder FE (mis. `:5174`) | Yang difoto |
| Backend (mis. `:8097`), CORS mengizinkan origin FE | Sumber data |
| PostgreSQL **khusus panduan** (mis. `pagehub_docs`, sudah `migrate up` + `cmd/seed`) | Membalik kode OTP, memasang paket uji, menanam keadaan yang tak punya API |
| Kunci AI terpasang di BE | `08-storefront.mjs` dan `13-aibuild.mjs` |

Jangan arahkan harness ke database pengembangan yang dipakai orang lain: skrip
07 dan 14 menulis langsung ke tabel.

Semua alamat diambil dari env (lihat [`lib.mjs`](lib.mjs)):

```bash
export SHOT_FE=http://localhost:5174 SHOT_BE=http://localhost:8097 \
       SHOT_PSQL=psql SHOT_DB=pagehub_docs \
       PGHOST=localhost PGUSER=postgres PGPASSWORD=postgres
# kalau versi Playwright di sini tidak punya browser yang cocok:
export SHOT_CHROME=~/.cache/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-linux64/chrome-headless-shell
```

FE dijalankan dengan `VITE_API_BASE_URL=$SHOT_BE/api VITE_PUBLIC_BASE_URL=$SHOT_BE npx vite --port 5174 --strictPort`.

## Urutan

```bash
LANG_UI=id node 01-account.mjs   # daftar akun baru lewat UI + verifikasi email
#   lalu pasang paket uji (lihat di bawah)
node 02-seed-core.mjs      # workspace, 2 website, halaman, shell, landing
node 03-seed-modules.mjs   # domain, blog, pengaturan toko, produk
node 04-seed-data.mjs      # kategori artikel, pesanan, leads, media
node 05-fix.mjs            # tandai lunas + undang satu anggota
node 06-extras.mjs         # gambar produk, 30 hari kunjungan, abandoned cart, 3 form
node 07-state.mjs          # media ke workspace klien, jadwal blog, AppSumo, tiket bantuan
node 08-storefront.mjs     # halaman toko ditulis AI (sekali, kredit sungguhan)

for L in id en ar; do
  LANG_UI=$L node 16-gaps.mjs      # layar daftar & verifikasi
  LANG_UI=$L node 10-basics.mjs
  LANG_UI=$L node 11-modules.mjs
  LANG_UI=$L node 12-editor.mjs
  LANG_UI=$L node 14-last.mjs
  LANG_UI=$L node 15-invoice.mjs
done
for L in id en ar; do LANG_UI=$L node 13-aibuild.mjs; done   # paling akhir: membuat website baru

node 17-optimize.mjs       # PNG retina -> WebP 1600px (menghemat ~87%)
cd ../.. && npm run shots  # perbarui SCREENSHOTS.md
```

Berkasnya masuk ke folder bahasa masing-masing, dan komponen `Shot` memilihnya
sesuai bahasa pembaca. `LANG_UI` juga menentukan header `Accept-Language`
browser. Konten akun uji sendiri (nama produk, form, label blok toko di palet
yang ikut bahasa situs publik) tetap berbahasa Indonesia di ketiga bahasa —
itu data merchant, bukan antarmuka.

Toko sekarang milik **workspace** dan layarnya ada di grup Toko sidebar
(`/store/*`), mengikuti workspace yang dipilih — `openApp()` memilih workspace
klien "Toko Kue Lezat". Yang tetap di website cuma tab Commerce (produk yang
tampil + halaman toko) dan Desain toko.

## Tiga hal yang menentukan cara kerjanya

**Akun dibuat lewat UI, bukan lewat SQL.** Halaman daftar dan verifikasi memang
harus difoto, jadi alurnya dijalani betulan. Kode OTP-nya dibalik dari hash di
`auth_codes` — backend menyimpan `sha256(kode)` tanpa garam dan ruangnya cuma
sejuta, jadi tidak perlu SMTP hidup dan tidak ada baris DB yang disentuh.

**Datanya diisi lewat API produk.** Bukan INSERT langsung: dengan begitu kuota,
slug unik, urutan halaman, dan potong-stok ikut jalan — yang difoto adalah
keadaan yang memang bisa terjadi. Pesanan pun dilewatkan tiap tahap statusnya,
bukan dilompat, karena stok baru terpotong saat masuk "Diproses".

**Yang tidak bisa diseed dibuat lalu dikembalikan.** Spanduk akun parked hanya
muncul kalau langganan sudah lewat tanggal — keadaan itu dibuat lewat DB di
`14-last.mjs`, difoto, lalu dikembalikan persis semula di blok `finally`.

## Paket uji

Beberapa layar (domain kustom, white label, reseller) tertutup di paket gratis.
Setelah `01-account.mjs`, catat org akun uji ke `org.txt` lalu naikkan
langganannya seolah pembayarannya sudah disetujui:

```sql
-- org.txt = org_id akun uji
update plans set features = '{"reseller": true, "whiteLabel": true}',
  max_workspaces = 10, max_clients = 10,
  max_products_per_workspace = 500, max_orders_monthly_per_workspace = 1000
  where slug = 'agency';
update subscriptions set plan_id = (select id from plans where slug = 'agency'),
  status = 'active', current_period_start = now() - interval '9 days',
  current_period_end = now() + interval '21 days', ai_topup_credits = 400
  where org_id = '<org>';
update organizations set name = 'Studio Aksara' where id = '<org>';
```

## Yang belum otomatis

`13-aibuild.mjs` melewati wizard dengan menekan kartu "Pilihkan saja"
(`.cc.is-magic`) berulang, lalu membatalkan build-nya setelah layar progres
difoto. Jumlah dan bentuk pertanyaannya ditentukan model, jadi langkahnya bisa
berubah dan skrip ini kadang perlu disesuaikan. Kalau macet, jalankan dengan `headless:false`
di [`lib.mjs`](lib.mjs) dan lihat sendiri layarnya.
