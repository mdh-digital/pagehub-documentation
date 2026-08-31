# Mengaktifkan blog

Blog adalah modul per-website: artikel yang menarik trafik pencarian dan memberi bahan buat dikutip asisten AI.

## Menyalakan

Buka website → tab **Blog** → **Aktifkan Blog**.

<Shot src="/img/blog/blog-inactive.webp">
Tab Blog dalam keadaan belum aktif: judul "Blog belum aktif", penjelasan bahwa halaman list dan detail artikel akan di-generate mengikuti desain website, dan tombol "Aktifkan Blog".
</Shot>

Yang terjadi:

1. AI **menyusun tampilan halaman list artikel dan detail artikel** mengikuti desain website ini — tema, header, footer, gaya kartunya.
2. Item menu **Blog** ditambahkan ke [menu navigasi](/website/navigation-menu).
3. Slug `blog` dikunci untuk modul ini, jadi nggak bisa dipakai halaman biasa.

Kalau AI nggak tersedia, blog tetap aktif dengan template bawaan — cuma tampilannya lebih generik.

::: tip Bisa juga dinyalakan sejak awal
Waktu [membuat website via AI](/website/create-website) ada opsi **Pakai blog / artikel**. Efeknya sama.
:::

## Alamat blog

```
https://<workspace>.pagehub.id/<website>/blog            ← daftar artikel
https://<workspace>.pagehub.id/<website>/blog/<slug>     ← satu artikel
```

Atau di [domain kustom](/website/custom-domain): `https://domainkamu.com/blog`.

## Tampilan blog

Diatur di **Pengaturan** → **Tampilan blog**:

| Pilihan | Nilainya |
| --- | --- |
| **Sidebar** | Tanpa sidebar · Kiri · Kanan |
| **Widget pencarian** | Nyala / mati |
| **Widget kategori** | Nyala / mati |
| **Widget artikel terbaru** | Nyala / mati |
| **Tombol share di detail artikel** | Pilih platform yang ditampilkan |

Catatan kecil: Instagram nggak punya cara berbagi lewat URL, jadi yang tersedia untuknya adalah **Salin link**.

Teks yang PageHub tambahkan di sekitar artikel (judul widget, tombol pagination, nama bulan) mengikuti **[bahasa situs publik](/website/settings)**, bukan bahasa dashboard kamu.

## Regenerate tampilan

Kalau desain website berubah banyak dan halaman blog mulai terasa asing, klik **Regenerate template** di tab Blog. AI menyusun ulang tampilan list dan detail artikel mengikuti desain terbaru.

Artikel-artikelmu **nggak** ikut berubah — yang disusun ulang cuma bingkainya.

Ini memakai [kredit AI](/ai/credits).

## Kategori

Tab **Blog → Kategori** adalah daftar induk kategori: dipakai untuk filter, widget sidebar, dan artikel terkait.

- **Tambah** dengan mengetik nama lalu klik Tambah.
- **Ubah** nama kategori kapan saja.
- **Hapus** kategori: artikel di dalamnya jadi tanpa kategori — artikelnya sendiri nggak ikut terhapus.

<Shot src="/img/blog/blog-categories.webp">
Tab Kategori: tabel berisi nama kategori, URL slug-nya, dan jumlah artikel; kolom "Nama kategori baru" dengan tombol Tambah di atas tabel.
</Shot>

## Yang otomatis untuk SEO

Begitu blog aktif dan ada artikel terbit:

- Artikel masuk ke `sitemap.xml` dan `feed.xml`.
- Tiap artikel mendapat data terstruktur **BlogPosting**.
- Tiap artikel mendapat `meta description` sendiri dari kolom Description-nya.

Lihat [Search & AI discovery](/seo/search-and-ai-discovery).
