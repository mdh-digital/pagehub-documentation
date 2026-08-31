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
| App builder FE di `:5174` | Yang difoto |
| Backend di `:8080`, CORS mengizinkan `:5174` | Sumber data |
| PostgreSQL lokal (`landing_builder`) | Membalik kode OTP & memasang paket uji |
| Kunci AI terpasang di BE | Hanya untuk `13-aibuild.mjs` |

Ubah `FE`, `BE`, `PSQL`, `DB` di [`lib.mjs`](lib.mjs) kalau berbeda.

## Urutan

```bash
node 01-account.mjs        # daftar akun baru lewat UI + verifikasi email
#   lalu pasang paket uji (lihat catatan di bawah)
node 02-seed-core.mjs      # workspace, 2 website, halaman, shell, landing
node 03-seed-modules.mjs   # domain, blog, add-on toko, produk
node 04-seed-data.mjs      # pesanan, leads, media, stage
node 05-fix.mjs            # tandai lunas + undang satu anggota

LANG_UI=id node 10-basics.mjs
LANG_UI=id node 11-modules.mjs
LANG_UI=id node 12-editor.mjs
LANG_UI=id node 13-aibuild.mjs   # memakai kredit AI sungguhan
LANG_UI=id node 14-last.mjs
LANG_UI=id node 15-invoice.mjs
LANG_UI=id node 16-gaps.mjs      # tambalan layar auth & dialog

node 17-optimize.mjs       # PNG retina -> WebP 1600px (menghemat ~87%)
cd ../.. && npm run shots  # perbarui SCREENSHOTS.md
```

Ganti `LANG_UI` ke `en` atau `ar` untuk bahasa lain. Berkasnya masuk ke folder
bahasa masing-masing, dan komponen `Shot` memilihnya sesuai bahasa pembaca.

## Tiga hal yang menentukan cara kerjanya

**Akun dibuat lewat UI, bukan lewat SQL.** Halaman daftar dan verifikasi memang
harus difoto, jadi alurnya dijalani betulan. Kode OTP-nya dibalik dari hash di
`auth_codes` — backend menyimpan `sha256(kode)` tanpa garam dan ruangnya cuma
sejuta, jadi tidak perlu SMTP hidup dan tidak ada baris DB yang disentuh.

**Datanya diisi lewat API produk.** Bukan INSERT langsung: dengan begitu kuota,
slug unik, urutan halaman, dan potong-stok ikut jalan — yang difoto adalah
keadaan yang memang bisa terjadi. Pesanan pun dilewatkan tiap tahap statusnya,
bukan dilompat, karena stok baru terpotong saat masuk "Diproses".

**Yang tidak bisa diseed dibuat lalu dikembalikan.** Spanduk masa tenggang hanya
muncul kalau langganan sudah lewat tanggal — keadaan itu dibuat lewat DB di
`14-last.mjs`, difoto, lalu dikembalikan persis semula di blok `finally`.

## Paket uji

Beberapa layar (domain kustom, toko, white label) tertutup di paket gratis.
Setelah `01-account.mjs`, naikkan langganan akun uji seolah pembayarannya sudah
disetujui — paket `pro` plus add-on white label dan toko. Perintah SQL-nya ada di
riwayat commit; sesuaikan dengan katalog paket di database kamu.

## Yang belum otomatis

`13-aibuild.mjs` melewati wizard dengan menekan "Pilihkan saja" berulang. Jumlah
dan bentuk pertanyaannya ditentukan model, jadi langkahnya bisa berubah dan
skrip ini kadang perlu disesuaikan. Kalau macet, jalankan dengan `headless:false`
di [`lib.mjs`](lib.mjs) dan lihat sendiri layarnya.
