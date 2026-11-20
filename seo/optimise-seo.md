---
description: 'Langkah praktis optimasi SEO website dan landing page di PageHub: SEO tiap halaman, contoh nyata, sitemap ke Search Console, dan isi yang mudah ditemukan.'
---

# Cara optimasi SEO website / landing page

Panduan ini merangkai fitur SEO yang sudah ada di PageHub jadi satu urutan kerja. Detail tiap fitur ada di halamannya masing-masing; di sini kamu mendapat **urutannya** dan satu contoh nyata.

Ringkasnya:

1. Isi SEO tiap halaman (judul, deskripsi, slug, gambar share).
2. Periksa sitemap dan pengaturan SEO situs.
3. Kirim sitemap ke Google Search Console.
4. Tulis isi yang layak ditemukan.
5. Tunggu, lalu ukur.

## Langkah 1: Isi SEO tiap halaman

Buka halaman di editor → **⋯** → **SEO & Tampilan**. Panel ini dibuka dengan pratinjau: tampilan halamanmu di hasil Google (mobile/desktop) dan kartu saat tautannya dibagikan.

Isi berurutan:

| Kolom | Yang diisi | Patokan |
| --- | --- | --- |
| **Focus keyphrase** | Satu frasa yang kamu incar, misalnya *kursus baking depok* | Tidak ditulis ke halaman. Hanya dipakai daftar pengecekan |
| **Title** | Judul di tab browser dan di hasil Google | **30–60 karakter**. Sebut isinya dulu, nama bisnis di belakang |
| **Description** | Ringkasan di bawah judul di Google | **120–160 karakter**. Kalimat utuh yang membuat orang mau klik |
| **Slug** | Bagian terakhir alamat, misalnya `/kursus-baking` | Pendek, berisi kata kunci. **Jangan diubah setelah terbit**: tautan yang sudah tersebar jadi mati |
| **OG Image** | Gambar saat tautan ditempel di WhatsApp, Facebook, Slack | Mendatar, sekitar **1200×630 px** |
| **Thumbnail** | Gambar kartu halaman di dashboard | Hanya untukmu, tidak memengaruhi SEO |

Di bawahnya ada meter panjang untuk judul dan deskripsi, lalu bagian **Pengecekan**:

- judul dan deskripsi dalam rentang panjang yang disarankan;
- gambar share sudah ada;
- kalau focus keyphrase diisi: frasa itu muncul di judul, di deskripsi, dan di slug.

Frasa dicek **utuh dan berurutan**. Kata yang sama dalam urutan lain tidak dihitung.

Penjelasan lengkap tiap kolom: [SEO halaman](/editor/page-seo).

## Contoh: halaman jualan ebook

Isian awal:

- **Focus keyphrase:** `ebook bisnis online`
- **Title:** `Bisnis Online Modal 20 Ribu — Ebook Panduan Lengkap` (51 karakter)
- **Description:** `Ebook 135 halaman: cara membuat landing page, website, dan toko online sendiri dengan modal Rp20 ribu. Langkah demi langkah, tanpa coding.` (138 karakter)

Panjang judul dan deskripsi sudah masuk rentang. Tapi pengecekan frasa akan **gagal di judul dan deskripsi**: keduanya memuat kata "ebook", "bisnis", dan "online", tapi tidak sebagai frasa *ebook bisnis online* yang berurutan.

Dua pilihan:

1. Ganti focus keyphrase ke frasa yang memang ada, misalnya `bisnis online modal 20 ribu`, **atau**
2. Sesuaikan teksnya supaya frasanya muncul utuh:
   - **Title:** `Ebook Bisnis Online Modal 20 Ribu — Panduan Lengkap` (51 karakter)
   - **Description:** `Ebook bisnis online 135 halaman: cara membuat landing page, website, dan toko online sendiri dengan modal Rp20 ribu. Langkah demi langkah, tanpa coding.` (152 karakter)
   - **Slug:** `ebook-bisnis-online` (hanya kalau halamannya belum disebar)

Lalu pasang **OG Image** sampul ebook dalam format mendatar, supaya tautan yang dibagikan di WhatsApp tampil bergambar.

## Langkah 2: Periksa SEO tingkat situs

Untuk website: buka website → **Pengaturan** → **Penemuan mesin pencari & AI**. Di sana ada `sitemap.xml`, `robots.txt`, dan `feed.xml` yang dibuat otomatis, serta daftar **Layak dibenahi** (misalnya halaman terbit tanpa deskripsi). Bereskan daftar itu dulu.

Yang ditulis otomatis tanpa kamu atur: tag canonical, data terstruktur (JSON-LD) untuk organisasi, artikel, dan produk, serta tag share Open Graph dan Twitter. Detail: [Search & AI discovery](/seo/search-and-ai-discovery).

**Domain sendiri membantu.** Dengan [domain kustom](/website/custom-domain), canonical dan sitemap menunjuk ke domainmu, dan `robots.txt` berlaku penuh. Di alamat platform, `robots.txt` dipakai bersama, jadi kirim sitemap-mu sendiri ke Google (langkah 3).

## Langkah 3: Kirim sitemap ke Google Search Console

1. Buka [Google Search Console](https://search.google.com/search-console) dan tambahkan properti dengan alamat situsmu (domain kustom, atau alamat lengkap di PageHub).
2. Verifikasi kepemilikan. Cara termudah: pilih metode **tag HTML**, salin tag `<meta name="google-site-verification" …>`, lalu tempel di **Custom head script** di tab [Tracking](/website/tracking) website. Simpan, lalu klik **Verifikasi** di Search Console.
3. Di PageHub, buka **Pengaturan** → **Penemuan mesin pencari & AI** → kartu **sitemap.xml** → **Salin URL**.
4. Di Search Console, buka menu **Sitemaps**, tempel URL-nya, lalu **Kirim**.
5. Untuk halaman penting yang baru terbit, tempel alamatnya di kotak **Inspeksi URL** di atas, lalu **Minta pengindeksan**.

**Landing page** tidak punya sitemap sendiri. Daftarkan alamatnya lewat **Inspeksi URL** (langkah 5). Tag verifikasi bisa dipasang di bagian tracking pada tab **Pengaturan** landing page itu.

## Langkah 4: Isi yang layak ditemukan

Pengaturan di atas hanya membantu mesin pencari membaca halamanmu. Yang membuat halamannya muncul tetap isinya.

- **Tulis artikel blog** untuk pertanyaan yang benar-benar dicari pembelimu. Artikel punya **judul SEO sendiri** yang terpisah dari headline; isi di kartu SEO di bawah artikel. Lihat [Menulis artikel](/blog/write-articles).
- **Pakai heading berjenjang.** Satu H1 per halaman (judul utama), lalu H2 untuk bagian dan H3 untuk sub-bagian. Jangan menebalkan teks biasa untuk dijadikan "judul".
- **Isi Alt di gambar.** Di [mode visual](/editor/visual-mode), klik gambar → tab **Atribut** → **Alt**. Tulis apa isi gambarnya, misalnya *"Sampul ebook Bisnis Online Modal 20 Ribu"*.
- **Tautkan antarhalaman.** Dari artikel ke halaman produk, dari homepage ke halaman layanan. Tautan internal membantu mesin pencari menemukan halaman lain dan membantu pembaca.
- **Jaga halaman tetap ringan.** Jangan menempel gambar sebagai kode base64 di HTML. Unggah ke [File Manager](/media/file-manager) dan pakai URL-nya. Gambar besar memperlambat halaman, dan halaman lambat merugikan peringkat.

## Website dan landing page bedanya di mana

| | Halaman website | Landing page |
| --- | --- | --- |
| Isian SEO bawaan | Mewarisi **SEO default** website: judul, deskripsi, gambar share, dan favicon situs dipakai kalau halaman itu tidak mengisinya | Tidak ada. Semua yang tidak kamu isi di panel SEO halaman itu, kosong |
| sitemap.xml | Masuk otomatis | Tidak ada; daftarkan lewat Inspeksi URL |
| Blog untuk menarik pengunjung | Bisa | Tidak bisa |

Jadi untuk **landing page**, isi panel **SEO & Tampilan** sampai lengkap, termasuk OG Image. Untuk **website**, atur dulu SEO default di [Pengaturan website](/website/settings), lalu isi panel tiap halaman penting.

## Yang bisa diharapkan

- Google butuh waktu untuk menemukan dan mengindeks halaman baru, biasanya **beberapa hari sampai beberapa minggu**. Laporan **Halaman** di Search Console menunjukkan mana yang sudah terindeks.
- Mengisi semua kolom dengan benar **tidak menjamin peringkat**. Itu membuat halamanmu terbaca dengan benar; posisinya ditentukan isi, persaingan, dan waktu.
- Ukur dari Search Console (kata kunci yang mendatangkan klik) dan dari [Laporan](/reports/overview) PageHub (trafik per halaman), lalu perbaiki halaman yang sudah mulai muncul.
