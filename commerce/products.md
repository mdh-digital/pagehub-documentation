---
description: 'Mengisi katalog toko: kenapa harga selalu ada di varian, membuat kombinasi varian, harga grosir bertingkat, gambar, stok, dan harga modal.'
---

# Produk

**Toko → Produk**. Katalog toko workspace: harga, varian, gambar, dan harga grosir bertingkat. Produk yang kamu buat di sini bisa dijual di website atau landing page mana pun di workspace yang sama; lihat [Menjual di website & landing page](/commerce/sell-on-sites).

<Shot src="/img/commerce/products-list.webp" wide>
Halaman Master produk: tabel dengan kolom Produk (nama + thumbnail), Kategori, Harga, Stok, dan sakelar aktif/nonaktif; filter kategori dan status di atas, kotak "Cari nama atau SKU", tombol "Tambah produk".
</Shot>

## Aturan utama: harga ada di varian

Tiap produk punya **minimal satu baris varian**, dan harga selalu ada di baris itu — bukan di produknya. Produk sederhana punya tepat satu baris; produk bervarian punya banyak.

Sekali paham ini, sisa form-nya jadi masuk akal.

## Bagian-bagian form

### Jenis produk

- **Fisik** — dikirim ke alamat. Ada stok, berat, dan ongkir.
- **Digital** — diunduh setelah bayar. Tanpa alamat, tanpa ongkir, stok tak terbatas, dan berkasnya dipilih dari Google Drive. Lihat [Produk digital](/commerce/digital-products).

### Dasar

| Kolom | Keterangan |
| --- | --- |
| **Nama produk** | |
| **SKU** | Kode internal, opsional |
| **Kategori** | Dari [daftar kategori](/commerce/categories-and-variants) |
| **Deskripsi** | Tampil sebagai bagian tersendiri di bawah galeri halaman produk |
| **Slug URL** | Kosongkan, otomatis ikut nama produk |
| **Produk unggulan** | Ikut tampil di strip "unggulan" di halaman lain |

### Harga & stok

Pertama, pilih modenya:

- **Tunggal** — satu baris varian. Isi harga, harga modal, stok, berat.
- **Punya varian** — buka bagian **Pilihan**.

| Kolom | Keterangan |
| --- | --- |
| **Harga jual** | Yang dibayar pembeli |
| **Harga modal** | Untuk menghitung profit di [laporan](/reports/overview). Nggak pernah tampil ke pembeli |
| **Stok** | Jumlah tersedia |
| **Lacak stok** | Matikan untuk produk tanpa batas (jasa, produk digital). Tampil sebagai *tak dilacak* |
| **Berat** | Dalam gram. Dipakai untuk [ongkir otomatis](/commerce/shipping) kalau toko mengirim dari Indonesia |
| **Ukuran paket** | Panjang × lebar × tinggi dalam cm, untuk berat volume. Opsional |

### Pilihan & varian

<Shot src="/img/commerce/product-variants.webp">
Bagian Pilihan pada form produk: dua baris pilihan (Warna dengan chip Merah/Biru, Ukuran dengan chip S/M/L), tombol "Generate kombinasi" bertuliskan "6 baris", lalu tabel Varian berisi enam baris dengan kolom harga, modal, stok, gambar, dan penanda Default.
</Shot>

1. **Dari master variant** untuk menarik set siap pakai, atau **Tambah pilihan** untuk mengetik sendiri.
2. **Generate kombinasi** — jumlah baris yang bakal dibuat ditampilkan di tombolnya.

Tiap baris varian punya:

- Harga, harga modal, stok, berat sendiri
- **Gambar** sendiri (opsional) — berguna untuk varian warna
- Penanda **Default** — varian yang terpilih duluan di halaman produk
- Sakelar **Aktif** — matikan varian yang habis atau dihentikan
- **Harga grosir** sendiri

Tombol **Samakan harga dengan baris pertama** menghemat waktu kalau semua varian harganya sama.

### Harga grosir

Opsional: lebih murah per unit di atas jumlah tertentu.

| Mulai qty | Harga satuan |
| --- | --- |
| 10 | 45.000 |
| 50 | 40.000 |
| 100 | 35.000 |

Beli 12 → semuanya dihargai 45.000/unit. Beli 60 → 40.000/unit.

Dua tingkat nggak boleh mulai di jumlah yang sama; PageHub menolak dan memberitahumu.

Harga grosir dihitung **ulang di server** waktu pembeli checkout, jadi nggak bisa dimanipulasi dari sisi browser.

### Gambar

Beberapa gambar per produk, salah satunya ditandai **Utama**. Ada batas jumlah gambar yang ditampilkan di layar.

Ada juga **Video YouTube** (opsional): kalau diisi, video jadi tampilan pertama di halaman produk, foto menyusul. Tempel URL `youtube.com` atau `youtu.be`.

### Pencarian

**Kata kunci** — misal `villa, honeymoon, bali`. Dipakai oleh pencarian di halaman toko.

## Aktif / nonaktif

Sakelar di daftar produk menerbitkan atau menyembunyikan produk dari toko publik. Produk nonaktif tetap ada di katalogmu dan tetap muncul di pesanan lama.

Produk yang di-**Duplikat** selalu lahir dalam keadaan **nonaktif**, supaya kamu sempat mengubah nama dan harganya sebelum tayang.

## Menghapus

Menghapus produk ikut menghapus semua variannya, dan nggak bisa dibatalkan. Pesanan lama nggak ikut rusak — baris pesanan menyimpan salinan nama dan harganya sendiri; item yang katalognya sudah hilang ditandai *"Item sudah tidak ada di katalog"*.

## Mata uang

Form menampilkan **Harga dalam &lt;kode mata uang&gt;** sesuai [mata uang toko](/commerce/store-settings). Angka yang kamu ketik disimpan apa adanya dan nggak pernah dikonversi.
