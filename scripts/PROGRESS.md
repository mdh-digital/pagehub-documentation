# Progres penyesuaian dokumentasi (2026-11)

Tujuan: dokumentasi mengikuti produk sekarang. Tiga langkah.

## 1. Halaman yang isinya sudah salah — SELESAI (id · en · ar)

- `account/add-ons` ditulis ulang: toko termasuk di semua paket; batas produk
  (keras) dan pesanan/bulan (lunak) per workspace; add-on kapasitas per
  workspace; white label.
- `commerce/overview`: bagian "Add-on" → "Termasuk di semua paket". Shot
  `commerce/locked.webp` tidak dipakai lagi; shot baru `commerce/usage.webp`.
- `account/plans-and-quota`, `account/billing`: baris toko disesuaikan.
- `commerce/storefront`: bagian baru "Halaman toko bawaan".
- `editor/blocks`: blok desain otomatis setelah build AI.
- `ai/how-generation-works`: kartu "Pakai toko online" + blok otomatis.
- `editor/visual-mode`: bagian panel terlipat di awal; baris blok form.
- `help/troubleshooting`: entri "Commerce tampil sebagai penawaran" diganti
  dua entri batas produk / "Melebihi kuota".

## 2. Halaman baru — SELESAI (id · en · ar)

- `leads/form-builder` — form builder, tiga cara pakai, pemilih form di editor,
  asal lead, file privat.
- `team/reseller` — klien, paket klien, saldo & pencairan, domain, akun
  lifetime, pengambilalihan.
- `commerce/product-cards` — blok toko, panel blok, desain toko, perpustakaan
  kartu (desain toko digabung ke sini, tidak jadi halaman sendiri).
- Feed aktivitas AI: digabung sebagai bagian "Melihat AI bekerja" di
  `editor/ai-chat`, bukan halaman sendiri.
- `editor/blocks` menaut ke dua halaman baru.
- Terdaftar di `structure.ts` + judul di `locales/{id,en,ar}.ts`.

Shot baru yang dirujuk (belum difoto): `leads/forms-list`, `leads/form-builder`,
`leads/form-picker`, `team/reseller-clients`, `team/reseller-balance`,
`commerce/shop-blocks`, `commerce/shop-block-panel`, `commerce/shop-design`,
`commerce/usage`.

## 3. Screenshot — BELUM

- Sesuaikan `scripts/screenshots/lib.mjs` (FE `:5173`, DB `pagehub_dev`).
- Foto ulang: `account/addons`, `account/billing-hub`, `account/upgrade-plans`,
  layar editor (panel kanan), pengaturan toko, layar ber-sidebar.
- Foto baru: `commerce/usage` dan layar-layar halaman baru di langkah 2.
- Hapus `public/img/*/commerce/locked.webp`.

## Langkah 3 — screenshot (selesai 2026-11-11)

- `scripts/screenshots/lib.mjs` sekarang bisa diatur lewat env (`SHOT_FE`, `SHOT_BE`,
  `SHOT_PSQL`, `SHOT_DB`, `SHOT_CHROME`), jadi tidak terikat ke satu mesin.
- Skrip baru `scripts/screenshots/18-new-screens.mjs`: masuk ke akun yang sudah berisi
  data (`SHOT_EMAIL`/`SHOT_PASSWORD` + `SHOT_WEBSITE`/`SHOT_PAGE`/`SHOT_FORM`) dan
  memotret 12 layar per bahasa. Dijalankan untuk id, en, ar — 36 gambar, lalu
  `17-optimize.mjs` (9,6 MB → 1,4 MB).
  - baru: `leads/forms-list`, `leads/form-builder`, `leads/form-picker`,
    `team/reseller-clients`, `team/reseller-balance`, `commerce/shop-blocks`,
    `commerce/shop-block-panel`, `commerce/shop-design`, `commerce/usage`
  - dipotret ulang: `account/addons`, `account/billing-hub`, `account/upgrade-plans`
- `public/img/*/commerce/locked.webp` dihapus (tidak dirujuk lagi).
- Jebakan: `SHOT_FE` harus origin yang diizinkan CORS backend (`localhost`, bukan
  `127.0.0.1`) — kalau tidak, halaman tetap terbuka tapi kosong dan potretnya
  kelihatan berhasil. Editor juga bisa terbuka di mode Code dan menampilkan dialog
  "ambil alih" kalau lease sesi sebelumnya belum habis; skrip menangani keduanya.
- Pemeriksaan: check 58 halaman × 3 bahasa OK · build OK · SEO OK (177 halaman) ·
  shots id 84/84, en 82/84, ar 79/84.

## Belum dikerjakan

- 7 gambar yang kurang di en/ar sudah kurang sebelum pembaruan ini (alur AI build:
  `ai/build-plan`, `ai/build-progress`, `ai/build-questions`,
  `getting-started/ai-build-questions`; dan `team/access-dialog`). Butuh build AI
  sungguhan (memakai kredit) untuk dipotret.
- Layar lama lain (sidebar, panel kanan editor, pengaturan toko) belum dipotret ulang
  secara menyeluruh: skrip 01–16 membuat akun & data sendiri dan bergantung pada
  `ids.json` yang tidak ada di mesin ini.
- Data lokal tidak punya paket add-on yang dijual, jadi `account/addons` menampilkan
  "belum ada paket tambahan"; potret ulang setelah katalog add-on diisi.
- Belum di-commit.
