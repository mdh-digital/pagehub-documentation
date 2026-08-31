---
description: 'sitemap.xml, robots.txt, dan feed.xml situsmu, data terstruktur yang ditulis otomatis, aturan satu isi satu alamat, dan daftar hal yang layak dibenahi.'
---

# Search & AI discovery

Buka website → **Pengaturan** → **Penemuan mesin pencari & AI**.

Halaman ini nggak punya tombol Simpan, dan itu disengaja: semua yang ada di sini **dibuat ulang dari isi situsmu setiap kali diminta**. Nggak ada yang disimpan, jadi nggak ada yang bisa basi.

<Shot src="/img/seo/seo-panel.webp">
Panel "Penemuan mesin pencari & AI": tiga kartu file (sitemap.xml, robots.txt, feed.xml) masing-masing dengan penjelasan, jumlah URL, tombol Salin URL dan Unduh; di bawahnya bagian "Layak dibenahi" berisi daftar temuan.
</Shot>

## Tiga file

| File | Isinya |
| --- | --- |
| **sitemap.xml** | Semua URL publik, lengkap dengan tanggal terakhir diubah |
| **robots.txt** | Memberi tahu mesin pencari apa yang boleh dibaca, dan di mana sitemap-nya |
| **feed.xml** | Blog kamu dalam bentuk feed — dibaca agregator dan mesin jawab AI |

Isi sitemap mengikuti modul yang aktif: artikel ikut kalau blog nyala, produk ikut kalau toko nyala. Homepage nggak didaftarkan dua kali.

## Yang otomatis ada di halamanmu

Tanpa kamu atur apa pun, tiap halaman terbit membawa:

- **Tag canonical** ke alamat yang benar.
- **Open Graph & Twitter Card** dari [SEO halaman](/editor/page-seo).
- **`lang` dan arah teks** sesuai [bahasa situs publik](/website/settings), termasuk `dir="rtl"` untuk bahasa Arab.
- **JSON-LD**: `Organization`, `WebSite`, `BreadcrumbList`, plus `BlogPosting` di artikel dan `Product` (beserta harga) di halaman produk.

Harga di data terstruktur dibaca dari katalog yang **baru saja merender halaman itu**, jadi harga di data dan harga di layar nggak mungkin berbeda. Harga yang berbeda antara keduanya adalah sinyal spam bagi Google.

::: info Nol kredit AI
Seluruh bagian ini deterministik — dihitung dari isi database, bukan ditulis AI. Sitemap yang mengarang URL berujung 404; itu bukan pekerjaan buat model bahasa.
:::

## Satu isi, satu alamat

Kalau website punya [domain kustom](/website/custom-domain) aktif, alamat platform **mengalihkan permanen (301)** ke domain itu, lengkap dengan query string-nya. Tujuannya menghindari satu isi tayang di dua alamat, yang membuat mesin pencari harus menebak mana yang asli.

Pengecualiannya cuma tiga file crawler di atas, yang tetap dilayani di alamat platform supaya tombol unduh di panel ini tetap jalan.

[Tautan berbagi](/editor/publishing) (`/share/...`) **nggak pernah** mendapat tag SEO, jadi preview klienmu nggak akan muncul di hasil pencarian.

## Layak dibenahi

Daftar temuan di bagian bawah panel. Nggak satu pun bikin situsmu gagal terindeks — semuanya menentukan seberapa bagus situsmu **dijelaskan** setelah terindeks.

| Temuan | Cara membereskan |
| --- | --- |
| Belum ada domain sendiri | [Pasang domain kustom](/website/custom-domain) |
| Halaman terbit tanpa deskripsi | Isi Description di [SEO halaman](/editor/page-seo) |
| Halaman terbit tanpa judul | Isi Title |
| Artikel tanpa deskripsi | Isi Description di editor artikel |
| Produk tanpa deskripsi | Isi Deskripsi di form produk |
| Belum ada gambar share | Isi OG Image di [SEO default website](/website/settings) |
| Situs belum punya deskripsi | Isi Description di SEO default website |

## robots.txt dan alamat platform

::: warning Batasan yang perlu kamu tahu
`robots.txt` cuma berlaku penuh di **domain sendiri**, karena alamat platform dipakai bersama semua situs. Selama kamu belum memasang domain kustom, **kirim URL sitemap-mu sendiri ke Google Search Console** — tombol Salin URL dan Unduh di panel ini untuk itu.
:::

## Mendaftarkan ke Google

1. Buka [Google Search Console](https://search.google.com/search-console) dan tambahkan propertimu.
2. Verifikasi kepemilikan — cara paling gampang: tempel tag verifikasi lewat **Custom head script** di [Tracking](/website/tracking).
3. Kirim URL `sitemap.xml` dari panel ini.

## Yang belum ada

Fase berikutnya — deskripsi meta massal, FAQ beserta data terstruktur `FAQPage`, `llms.txt`, dan audit SEO otomatis — belum tersedia. Semua yang ada sekarang bekerja tanpa AI dan tanpa kredit.
