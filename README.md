# Panduan PageHub — situs dokumentasi

Dokumentasi penggunaan PageHub untuk merchant: **55 halaman × 3 bahasa** (Indonesia, English, العربية/RTL).

Stack: **VitePress 1.6** (Vue 3 + TypeScript + Vite). Build menghasilkan HTML statis, di-deploy ke **Cloudflare Workers** lewat static assets.

> Ini situs panduan **penggunaan produk**, bukan dokumentasi API. Tidak ada referensi endpoint di sini — semuanya ditulis dari sudut pandang orang yang memakai aplikasinya.

## Mulai

```bash
npm install
npm run dev        # http://localhost:5173
```

| Perintah | Fungsinya |
| --- | --- |
| `npm run dev` | Server pengembangan dengan hot reload |
| `npm run build` | Cek konsistensi → build ke `.vitepress/dist` → audit SEO |
| `npm run preview` | Lihat hasil build secara lokal |
| `npm run check` | Pastikan tiap halaman ada di ketiga bahasa, tidak ada stub, tidak ada berkas yatim |
| `npm run seo` | Audit hasil build: deskripsi, canonical, hreflang, kartu berbagi |
| `npm run shots` | Perbarui `SCREENSHOTS.md` — daftar kerja screenshot |
| `npm run deploy` | Build lalu `wrangler deploy` |

## Struktur

```
.vitepress/
├── config.ts              # konfigurasi utama + i18n
├── structure.ts           # PETA HALAMAN — satu sumber untuk sidebar ketiga bahasa
├── locales/
│   ├── id.ts              # label sidebar & teks tema (Indonesia)
│   ├── en.ts              # English
│   └── ar.ts              # العربية — dengan dir: 'rtl'
└── theme/
    ├── index.ts           # daftarkan komponen global
    ├── style.css          # warna merek PageHub + penyesuaian RTL
    └── components/Shot.vue

index.md  getting-started/  website/  editor/  landing-pages/  ai/
media/    blog/  commerce/  leads/  reports/  seo/  team/  account/  help/
en/       ← struktur folder yang sama persis
ar/       ← struktur folder yang sama persis

public/
├── pagehub-icon.webp      # favicon
├── pagehub-logo.webp      # logo hero
└── img/                   # SCREENSHOT ditaruh di sini

scripts/                   # check-locales.mjs, list-shots.mjs
wrangler.jsonc             # konfigurasi Cloudflare Workers
SCREENSHOTS.md             # dibuat otomatis, jangan diedit tangan
```

### Kenapa slug-nya bahasa Inggris

Tombol ganti bahasa di navbar bekerja dengan **menukar awalan lokal pada path yang sedang dibuka**. Kalau `website/pages` di ID dan `situs/halaman` di EN, tombol itu akan mendarat di 404 dan pengguna dilempar ke beranda.

Jadi path-nya identik di ketiga bahasa (`/website/pages`, `/en/website/pages`, `/ar/website/pages`), dan yang diterjemahkan cuma isi dan label sidebar-nya.

## Menambah atau mengubah halaman

Halaman **selalu** ditambahkan bertiga sekaligus — kalau tidak, `npm run check` gagal dan build ikut gagal.

1. Daftarkan slug-nya di `.vitepress/structure.ts` (di dalam `STRUCTURE`).
2. Tambahkan labelnya di **ketiga** berkas `.vitepress/locales/{id,en,ar}.ts`.
3. Bikin tiga berkas markdown: `<slug>.md`, `en/<slug>.md`, `ar/<slug>.md`.
4. `npm run check`.

Sidebar tersusun sendiri dari `structure.ts` — tidak ada daftar navigasi yang perlu diurus terpisah.

## Screenshot

Semua 76 tempat gambar sudah terisi, diambil dari aplikasi PageHub yang benar-benar
jalan — bukan mockup. Tiap tempat memakai komponen `<Shot>`:

```md
<Shot src="/img/website/pages-tab.webp" wide>
Tab Halaman sebuah website: kartu "Header & Footer" di atas, lalu daftar halaman
dengan pegangan seret, judul, badge "homepage" pada yang teratas…
</Shot>
```

Isi `<Shot>` itu dua fungsi sekaligus: caption kalau gambarnya ada, dan
spesifikasi "foto ini harus memperlihatkan apa" kalau belum.

### Satu tangkapan per bahasa antarmuka

`src` di markdown **netral bahasa**; berkasnya hidup di `public/img/<bahasa>/…`
dan komponen `Shot` memilih sesuai bahasa pembaca. Pembaca panduan Arab melihat
aplikasi berbahasa Arab, lengkap dengan tata letak kanan-ke-kiri.

Bahasa yang belum difoto **jatuh ke Inggris, lalu Indonesia** — halaman tanpa
gambar lebih buruk daripada gambar berbahasa lain.

| Bahasa | Terisi |
| --- | --- |
| `id` | 76 / 76 |
| `en` | 74 / 76 |
| `ar` | 71 / 76 |

Yang kosong: layar wizard AI (bentuk pertanyaannya ditentukan model, jadi
otomasinya rapuh) dan satu dialog di Arab. Semuanya jatuh ke gambar Indonesia.
`npm run shots` menulis ulang [`SCREENSHOTS.md`](SCREENSHOTS.md) dengan status
per bahasa.

### Mengambil ulang

Harness-nya ada di [`scripts/screenshots/`](scripts/screenshots/README.md):
bikin akun merchant baru lewat UI, isi datanya lewat API produk, lalu potret tiap
layar dengan Playwright. Dependensinya dipisah dari situs docs supaya orang yang
cuma menulis panduan tidak perlu mengunduh Chromium.

```bash
cd scripts/screenshots && npm install && npx playwright install chromium
LANG_UI=id node 10-basics.mjs        # dan seterusnya
node 17-optimize.mjs                  # PNG retina -> WebP 1600px
```

### Format

Diambil pada 1440×900 dengan `deviceScaleFactor: 2` (teks tajam), lalu
dikecilkan ke lebar 1600px dan dikonversi ke **WebP kualitas 82** — 76 MB jadi
9,6 MB tanpa perbedaan yang terlihat pada ukuran tampilnya di halaman.

> **Catatan.** Daftar berkas gambar dikumpulkan saat build (`import.meta.glob` di
> `Shot.vue`), bukan saat halaman dibuka. Ini yang bikin placeholder-nya benar
> sejak render di server. Konsekuensinya: **restart dev server** setelah menambah
> gambar baru.

## Deploy ke Cloudflare Workers

`wrangler.jsonc` mendefinisikan Worker tanpa skrip yang menyajikan `.vitepress/dist` sebagai static assets.

```bash
npx wrangler login      # sekali saja
npm run deploy          # build + deploy
```

Uji lokal di runtime Workers (bukan Vite):

```bash
npm run cf:dev
```

Beberapa hal yang sudah disetel dan sebaiknya jangan diubah tanpa alasan:

- **`cleanUrls: true`** di VitePress + **`html_handling: "auto-trailing-slash"`** di wrangler. Dua-duanya harus jalan bareng: VitePress menulis tautan tanpa `.html`, dan Cloudflare yang memetakannya balik ke berkas `.html`-nya. Matikan salah satunya, semua tautan internal jadi 404.
- **`not_found_handling: "404-page"`** menyajikan `404.html` bawaan VitePress, yang sudah punya teks terjemahan tiap bahasa.

Kalau mau custom domain, tambahkan `routes` di `wrangler.jsonc` atau pasang lewat dashboard Cloudflare.

## SEO

VitePress tidak memancarkan canonical, hreflang, maupun Open Graph sendiri, dan
`description` bawaannya sama di seluruh situs. Semuanya ditangani di
[`.vitepress/seo.ts`](.vitepress/seo.ts) dan dipasang lewat dua hook di
`config.ts` (`transformPageData` dan `transformHead`).

Yang dihasilkan tiap halaman:

- **`<title>` unik** per halaman per bahasa (bawaan VitePress).
- **`meta description` unik**, diturunkan dari paragraf pembuka halaman. Bukan
  ditulis di 168 frontmatter — deskripsi yang hidup terpisah dari isinya pasti
  melenceng begitu halamannya direvisi. Frontmatter `description` tetap menang
  kalau diisi, dan dipakai untuk 11 halaman yang kalimat pembukanya cuma
  instruksi navigasi ("Buka Pengaturan → …") sehingga tak layak jadi cuplikan.
- **`rel="canonical"`** ke host produksi.
- **`hreflang`** untuk `id` / `en` / `ar` plus `x-default`. Slug ketiga bahasa
  sengaja identik (lihat `structure.ts`), jadi alternate-nya dihitung, bukan
  didaftar tangan.
- **Open Graph + Twitter Card** lengkap dengan `og:locale` dan gambar sampul.
- **`sitemap.xml`** (dibangun VitePress, lengkap dengan alternate) dan
  **`robots.txt`**.

### x-default menunjuk ke Inggris

Root panduan ini Bahasa Indonesia. Membiarkan `x-default` mewarisinya berarti
pembaca berbahasa Jerman atau Prancis dilempar ke halaman berbahasa Indonesia.
Aturannya dibuat sama persis dengan fallback tautan di situs marketing
(`App\Support\Docs`): yang tidak punya terjemahan membaca versi Inggris.

### Kenapa ada `npm run seo`

Dua bug pernah lolos dan dua-duanya tak kelihatan dari halaman yang dirender:

1. VitePress menulis `content` head **apa adanya**, tanpa escaping. Satu tanda
   kutip ganda di dalam deskripsi memutus atributnya di titik itu — satu halaman
   sempat punya deskripsi berbunyi `Panel `. Karena itu kutip ganda diganti
   kutip tipografis dan ampersand di-escape.
2. Blok `<Shot>` sempat terbaca sebagai paragraf pembuka, jadi keterangan
   screenshot naik jadi deskripsi halaman.

Keduanya hanya terlihat kalau HTML hasil build diurai ulang, jadi itulah yang
dilakukan `scripts/check-seo.mjs` — dan build gagal kalau salah satunya kembali.

### Yang masih bisa diperbaiki

- **`public/og-cover.png` masih logo yang dipadkan** ke 1200×630 lewat `sips`.
  Layak diganti gambar sampul yang benar-benar didesain.
- **Subdomain, bukan subfolder.** `documentations.pagehub.id` diperlakukan mesin
  pencari sebagai entitas yang agak terpisah dari `pagehub.id`; `pagehub.id/docs`
  akan menyatukan otoritas keduanya. Tautan dari header situs marketing memakai
  `rel="noopener"` saja — tanpa `nofollow` — jadi otoritasnya tetap mengalir.

## Konvensi menulis

- **Bahasa Indonesia** adalah bahasa sumber. Tulis di ID dulu, baru terjemahkan.
- Terjemahan ditulis **idiomatis**, bukan kata per kata — struktur dan isinya sama, kalimatnya alami di tiap bahasa.
- Nama tombol dan menu diambil **persis** dari string UI aplikasi (`landing-page-builder-fe/src/locales/`). Kalau UI-nya berubah, panduannya ikut.
- Peringatan pakai container VitePress: `::: tip`, `::: info`, `::: warning`, `::: danger` — dengan judul yang menjelaskan, bukan judul generik.
- Tautan antar-halaman **wajib berawalan lokal**: `/en/…` dan `/ar/…`. Build gagal kalau tautannya mati (`ignoreDeadLinks: false`).
- Hindari `<` telanjang di teks (mis. `<tanggal>`) — Vue membacanya sebagai tag dan build gagal. Pakai `&lt;…&gt;` atau bungkus dengan backtick.

## Merek & tampilan

Warna aksen mengikuti hijau PageHub (`#0a7a55`), didefinisikan di `.vitepress/theme/style.css` sebagai variabel VitePress (`--vp-c-brand-*`), lengkap dengan pasangan mode gelapnya.

Bahasa Arab dirender kanan-ke-kiri lewat `dir: 'rtl'` di `.vitepress/locales/ar.ts`, memakai font `IBM Plex Sans Arabic` — font yang sama dengan yang dipakai app builder di mode RTL. Blok kode dan path tetap dibaca kiri-ke-kanan.

## Pencarian

Memakai pencarian lokal bawaan VitePress (indeks dibangun saat build, tanpa layanan eksternal). Teks antarmukanya sudah diterjemahkan untuk ketiga bahasa di `.vitepress/locales/*.ts`.
