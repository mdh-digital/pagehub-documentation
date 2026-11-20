---
description: 'Memilih produk yang dijual tiap website dan landing page, dan menjual langsung dari landing page lewat form checkout di halaman itu sendiri.'
---

# Menjual di website & landing page

Katalog ada di workspace. Tiap website dan landing page **memilih** produk mana yang ditampilkannya, jadi satu produk bisa dijual di beberapa tempat sekaligus tanpa diketik ulang.

## Memilih produk untuk sebuah website

1. Buka **Websites**, pilih websitenya, lalu buka tab **Commerce**.
2. Di kartu **Produk di situs ini**, pilih salah satu:
   - **Semua produk** — semua produk aktif tampil, termasuk yang ditambah belakangan.
   - **Hanya yang saya pilih** — klik **Pilih produk**, centang yang mau dijual. Urutannya mengikuti urutan kamu memilih.
3. Simpan.

Produk yang tidak dipilih tidak muncul di halaman toko website itu, tidak bisa dimasukkan ke keranjang, dan tidak tercantum di sitemap-nya.

## Menjual dari landing page

Landing page juga bisa jualan, walaupun tidak punya halaman keranjang atau checkout.

1. Buka **Landing Page**, pilih halamannya, lalu di tab **Ringkasan** cari kartu **Produk di situs ini**.
2. Pilih produk yang dijual landing page itu.
3. Di editor, tambahkan blok dari grup **Toko** di palet blok: kartu produk, satu produk, atau tombol beli. Grup ini muncul begitu toko punya minimal satu produk.

Saat pengunjung menekan tombol beli, **form checkout terbuka di halaman itu juga**. Pembeli mengisi nama, nomor HP, dan email (plus alamat untuk produk fisik), lalu diarahkan ke halaman tagihannya.

Menekan tombol beli dua kali tetap satu barang: isi keranjang di landing page **diganti**, bukan ditambah.

::: tip Landing page dari kode sendiri
Kalau kamu menempel HTML sendiri, tombol apa pun yang diberi atribut `data-shop-buy` akan membuka form checkout untuk produk yang dipilih di kartu **Produk di situs ini**.
:::

## Ke mana pesanannya masuk

Semua pesanan, dari website maupun landing page, masuk ke **Toko → Transaksi**. Kolom **Asal** menunjukkan dari mana pesanan itu datang. Tagihan pembeli dari landing page dibuka di alamat landing page itu sendiri (`…/invoices`).

## Mematikan produk

Produk yang dinonaktifkan di **Toko → Produk** langsung hilang dari semua website dan landing page pada kunjungan berikutnya, dan muncul lagi begitu diaktifkan.
