---
description: 'Mengatur title, description, keywords, OG image, dan favicon per halaman — plus tag canonical dan data terstruktur yang sudah otomatis ditulis PageHub.'
---

# SEO halaman

Buka ⋯ → **SEO & Tampilan** di editor.

<Shot src="/img/editor/page-seo.webp">
Panel "SEO & Tampilan": pengunggah Thumbnail di atas, kolom Focus keyphrase, Pratinjau Google (Mobile/Desktop) yang menampilkan hasil pencarian halaman ini, lalu kolom Title dengan meter panjang dan kolom Slug berisi alamat lengkap beserta tombol salin dan buka. Di bawahnya (digulir) ada Description, gambar share, dan daftar periksa.
</Shot>

## Kolom-kolomnya

| Kolom | Muncul di mana | Panduan singkat |
| --- | --- | --- |
| **Thumbnail** | Kartu halaman di dashboard PageHub | Cuma buat kamu; pengunjung nggak melihatnya |
| **Title** | Tab browser dan judul hasil pencarian | 30–60 karakter (meter di panel hijau di rentang ini). Sebut halamannya, lalu nama bisnis |
| **Description** | Ringkasan di bawah judul di hasil pencarian | 120–160 karakter. Kalimat lengkap, bukan tumpukan kata kunci |
| **Keywords** | Meta keywords | Ketik lalu Enter atau koma. Pengaruhnya kecil di mesin pencari modern |
| **OG Image** | Gambar preview saat tautan dibagikan di WhatsApp / Facebook / X | Rasio 1200×630 px paling aman |
| **Favicon URL** | Ikon kecil di tab browser | Biasanya diatur sekali di level website |

**OG Image** dan **Favicon URL** bisa diambil langsung dari [File Manager](/media/file-manager) lewat tombol **Pilih dari File Manager**.

## Nilai awal datang dari website

Halaman baru mewarisi isian **SEO default** yang kamu atur di [Pengaturan website](/website/settings). Yang kamu isi di sini menimpa nilai bawaan itu, **untuk halaman ini saja**.

Mengubah SEO default di level website **tidak** mengubah halaman yang sudah ada.

## Yang sudah otomatis

Beberapa hal nggak perlu kamu urus — PageHub menuliskannya sendiri di halaman terbit:

- **Tag canonical** yang menunjuk ke alamat yang benar (domain kustom kalau ada, alamat platform kalau belum).
- **Open Graph & Twitter Card** dari Title, Description, dan OG Image di atas.
- **`lang` dan arah teks** sesuai [bahasa situs publik](/website/settings) — termasuk `dir="rtl"` untuk situs berbahasa Arab.
- **Data terstruktur JSON-LD**: Organization, WebSite, BreadcrumbList, plus BlogPosting untuk artikel dan Product untuk halaman produk.
- **Entri di `sitemap.xml`** untuk tiap halaman terbit.

Detail: [Search & AI discovery](/seo/search-and-ai-discovery).

## Yang bikin selisih paling besar

1. **Description yang benar-benar ditulis.** Halaman terbit tanpa description ditandai di panel "Perlu perhatian" di dashboard — itu daftar kerja yang bagus.
2. **Title yang beda-beda tiap halaman.** Sepuluh halaman dengan title identik saling menutupi di hasil pencarian.
3. **Slug yang masuk akal.** `/harga` lebih baik daripada `/halaman-3`. Ubahnya sebelum halamannya tersebar.
4. **Alt pada gambar.** Diatur di panel properti [mode visual](/editor/visual-mode).

## Artikel blog

Artikel punya kolom SEO-nya sendiri di editor artikel, bukan di sini. Lihat [Menulis artikel](/blog/write-articles).

Urutan kerja lengkap, dengan contoh: [Cara optimasi SEO](/seo/optimise-seo).
