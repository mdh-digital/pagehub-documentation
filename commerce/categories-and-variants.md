# Kategori & varian

Dua daftar induk yang dipakai berulang oleh produk-produkmu.

## Kategori produk

**Commerce → Kategori produk**. Pengelompokan yang muncul di katalog dan jadi filter di [halaman toko](/commerce/storefront).

<Shot src="/img/commerce/categories.webp">
Halaman Kategori produk: tabel berisi kolom Ikon, Nama, dan jumlah Produk; tombol "Tambah kategori" di kanan atas dan kotak pencarian.
</Shot>

| Kolom | Keterangan |
| --- | --- |
| **Nama kategori** | Misal `Kamar`, `Paket`, `Aksesori` |
| **Ikon** | Opsional, dipilih dari [File Manager](/media/file-manager). Tampil di samping nama kategori di katalog |

Menghapus kategori **tidak** menghapus produk di dalamnya — produk itu cuma kehilangan kategorinya.

Tiap kategori punya slug sendiri yang dipakai di URL filter halaman toko.

## Master variants

**Commerce → Master variants**. Set pilihan yang bisa dipakai ulang di produk mana pun: Warna, Ukuran, Rasa, Durasi.

<Shot src="/img/commerce/variants.webp">
Halaman Master variants: daftar varian dengan nama (Warna, Ukuran) dan chip-chip pilihan di bawahnya (Merah, Biru, Hitam), plus jumlahnya.
</Shot>

| Kolom | Keterangan |
| --- | --- |
| **Nama varian** | Jenis pilihannya — `Warna`, `Ukuran`, `Rasa` |
| **Pilihan** | Isinya. Ketik lalu Enter atau koma. Yang dobel dibuang otomatis |

::: info Harga & stok tidak ada di sini
Master variant cuma menyimpan *daftar pilihan*. Harga dan stok selalu diatur per produk, di baris varian produk itu.
:::

Menghapus master variant **tidak** mengubah produk yang sudah dibuat darinya — produk itu sudah menyimpan pilihannya sendiri.

## Cara keduanya dipakai

Di form produk, bagian **Pilihan**:

1. Klik **Dari master variant** untuk menarik satu set siap pakai — atau **Tambah pilihan** untuk mengetik sendiri khusus produk ini.
2. Klik **Generate kombinasi**.

Semua kombinasi jadi baris varian, dan tiap baris punya harga, harga modal, stok, berat, gambar, dan harga grosirnya sendiri.

Contoh: `Warna (Merah, Biru)` × `Ukuran (S, M, L)` = **6 baris varian**.

Lihat [Produk](/commerce/products).

## Kapan pakai master, kapan pakai manual

| Situasi | Pilihan |
| --- | --- |
| Pilihan yang sama dipakai banyak produk | **Master variant** — sekali tulis, dipakai berulang |
| Pilihan khusus satu produk | **Tambah pilihan** langsung di produk itu |

Nggak ada salahnya mencampur keduanya di satu produk.
