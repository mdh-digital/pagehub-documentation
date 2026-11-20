# Membuat landing page

Landing page adalah **satu halaman yang berdiri sendiri**: satu alamat, satu pesan, dibuat buat satu kampanye. Dia nggak terikat ke website mana pun, jadi nggak ikut tema, nggak ikut menu, dan nggak berbagi header/footer dengan siapa pun.

Kalau kamu butuh lebih dari satu halaman, yang kamu cari adalah [website](/website/create-website).

## Tiga cara memulai

Buka **Landing Page** → **Landing page baru**.

<Shot src="/img/landing/new-landing-options.webp">
Layar "Landing page baru" dengan tiga kartu: Pakai Template, Buat via AI, Buat Kosong, masing-masing dengan ikon dan satu kalimat penjelasan.
</Shot>

| | Hasilnya | Kredit AI |
| --- | --- | --- |
| **Pakai Template** | Halaman siap pakai dari galeri | Tidak terpakai |
| **Buat via AI** | Halaman disusun dari deskripsi kampanyemu | Terpakai |
| **Buat Kosong** | Halaman kosong | Tidak terpakai |

### Buat via AI

1. **Judul** (opsional) — kalau dikosongkan, AI yang mengusulkan.
2. **Mau bikin landing page apa?** — jelaskan tujuan dan isinya. Contoh:

   > Landing page promo kelas online masak. Target ibu rumah tangga. Ada hero promo diskon 50%, benefit kelas, kurikulum singkat, testimoni, harga, dan form daftar.

3. Klik lanjut.

AI nanya beberapa hal dulu, menyusun rencana section, lalu menulis halamannya bagian demi bagian. Lihat [Cara AI menyusun halaman](/ai/how-generation-works).

::: tip Landing page nggak baca brand brief website
Website menyimpan brand brief yang otomatis ikut ke tiap generate. Landing page berdiri lepas, jadi seluruh arahan gaya — warna, nada, siapa audiensnya — harus kamu tulis di prompt-nya sendiri.
:::

### Buat Kosong

Cuma minta **Nama halaman** dan **Alamat**. Halamannya kosong, isinya kamu susun sendiri di editor.

## Alamat publik

```
https://<workspace>.pagehub.id/p/<slug>
```

Segmen `p` yang membedakannya dari website. Karena itu `p` nggak bisa dipakai sebagai alamat website.

Slug landing page unik di seluruh workspace.

## Bedanya dengan halaman website

| | Landing page | Halaman website |
| --- | --- | --- |
| Header & footer | Ada di halaman itu sendiri | Dari [shell](/website/header-footer) bersama |
| Tema | Sendiri | Ikut theme global website |
| Menu | Nggak ada | Menu website disuntikkan otomatis |
| Blog | Nggak bisa | Bisa |
| Jualan produk | Bisa, lewat form checkout di halaman itu ([caranya](/commerce/sell-on-sites)) | Bisa, lewat halaman toko |
| Kuota | Kuota **landing** | Kuota **website** |
| Palet blok | Per halaman | Dipakai bersama satu website |

Kuota website dan landing dihitung **terpisah** — kuota website penuh nggak menghalangi kamu bikin landing page.

## Tab-tab landing page

Buka satu landing page dari daftarnya:

| Tab | Isinya |
| --- | --- |
| **Ringkasan** | Preview, tombol edit, dan kartu **Produk di situs ini** untuk memilih produk yang dijual |
| **Pengaturan** | Nama, alamat, tracking & pixel, hapus halaman |
| **Leads** | Isian form dari halaman ini |
| **Sharing** | Tautan preview read-only dan kolaborator |

## Mengelola daftar

Halaman **Landing Page** menampilkan semua landing page di workspace aktif — dengan pencarian, pengurutan (terbaru diubah / nama / views terbanyak), dan menu ⋯ per kartu berisi **Duplikat**, **Salin link**, **Unduh ZIP**, dan **Hapus**.

<Shot src="/img/landing/landing-list.webp">
Halaman Landing Pages: kartu-kartu landing page dengan thumbnail, judul, jumlah views, waktu terakhir diubah, dan menu tiga titik. Di atas ada kotak pencarian, pemilih urutan, dan tombol "Landing page baru".
</Shot>
