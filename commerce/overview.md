---
description: 'Toko di PageHub milik workspace: satu katalog dan satu daftar pesanan, dijual lewat website atau landing page mana pun di workspace itu.'
---

# Mengenal modul toko

Toko di PageHub **milik workspace**, bukan milik satu website. Satu workspace punya satu katalog, satu daftar pesanan, dan satu daftar keranjang yang ditinggalkan. Website dan landing page di workspace itu tinggal **memilih produk mana yang mereka tampilkan**.

Jadi kalau kamu punya website toko dan beberapa landing page promo, semuanya menjual dari katalog yang sama, dan semua pesanannya masuk ke satu tempat.

## Menu Toko di sidebar

Grup **Toko** di sidebar mengikuti workspace yang sedang aktif (pemilih workspace di atas sidebar).

| Menu | Isinya | Panduan |
| --- | --- | --- |
| **Produk** | Katalog: harga, varian, stok, gambar, produk digital | [Produk](/commerce/products) |
| **Transaksi** | Pesanan, pembayaran, pengiriman, invoice | [Transaksi](/commerce/orders) |
| **Abandoned Cart** | Pembeli yang mulai pesan tapi tidak selesai | [Keranjang ditinggalkan](/commerce/abandoned-carts) |
| **Kelola toko** | Kategori, master variants, alamat bisnis, rekening bank, pengaturan toko, laporan penjualan | [Pengaturan toko](/commerce/store-settings) |

Yang tetap ada di website (tab **Commerce** di halaman website): pilihan produk yang ditampilkan situs itu, [halaman toko](/commerce/storefront), dan [desain kartu produk](/commerce/product-cards).

## Termasuk di semua paket

Toko sudah termasuk di setiap paket. Yang dibedakan paket hanya dua batas, dihitung **per workspace**:

- **Jumlah produk** — batas keras. Setelah penuh, produk baru tidak bisa ditambahkan.
- **Pesanan per bulan** — batas lunak. Checkout tidak pernah ditolak; pesanan yang lewat jatah tetap masuk dan ditandai **Melebihi kuota**.

<Shot src="/img/commerce/usage.webp">
Kartu pemakaian toko: nama workspace, bilah "produk" dan bilah "pesanan bulan ini" dengan angka terpakai dan batasnya, serta tautan untuk menambah kapasitas.
</Shot>

Butuh ruang lebih? Beli kapasitas tambahan di [Add-on](/account/add-ons). Toko yang dijadikan [Partner Store](/commerce/partner-store) tidak dibatasi produk maupun pesanan.

## Urutan yang masuk akal

1. **[Pengaturan toko](/commerce/store-settings)** — mata uang dulu, sebelum ada harga yang diketik.
2. **[Alamat bisnis](/commerce/store-settings)** dan **[rekening bank](/commerce/store-settings)** — keduanya tercetak di dokumen, dan alamat dipakai untuk [cek ongkir](/commerce/shipping).
3. **[Kategori](/commerce/categories-and-variants)** dan **master varian** kalau produkmu punya pilihan.
4. **[Produk](/commerce/products)** (fisik atau [digital](/commerce/digital-products)).
5. **[Pilih produk yang tampil](/commerce/sell-on-sites)** di tiap website atau landing page.
6. **[Halaman toko](/commerce/storefront)** untuk website.
7. Uji **[keranjang & checkout](/commerce/cart-and-checkout)** sendiri sebelum disebar.

## Hal yang perlu kamu tahu

**Harga selalu ada di varian, bukan di produk.** Produk sederhana pun punya tepat satu baris varian, dan harganya ada di bagian **Harga & stok**.

**Baris pesanan menyimpan salinan.** Nama dan harga item disalin saat pesanan dibuat. Harga dinaikkan besok, pesanan kemarin tetap menunjukkan harga waktu itu.

**Tiap pesanan mencatat asalnya.** Daftar transaksi punya kolom **Asal**: website mana, landing page mana, atau **Diinput staf**. Kalau workspace punya lebih dari satu tempat jualan, kamu bisa menyaring per situs.

**Ongkir otomatis hanya untuk Indonesia.** Toko yang mengirim dari Indonesia bisa menghitung ongkir dan melacak resi lewat kurir. Toko di negara lain mengisi ongkir manual. Lihat [Ongkir & lacak resi](/commerce/shipping).

**Mata uang toko tidak pernah dikonversi.** Harga disimpan persis seperti yang kamu ketik. Mengganti mata uang toko hanya mengganti labelnya.

**Tidak ada registri pelanggan.** Data pembeli tersimpan di pesanannya. Tidak ada halaman "Pelanggan" terpisah.

## Cara pembeli membayar

| Cara bayar | Uang ke mana | Biaya |
| --- | --- | --- |
| Transfer ke rekening toko | Langsung ke rekeningmu | Gratis |
| QRIS, VA, e-wallet lewat PageHub | Masuk ke **Saldo**, lalu kamu tarik | Biaya layanan ditanggung pembeli |
| Gateway milikmu sendiri (Stripe, PayPal, dan lainnya) | Langsung ke akun gateway-mu | Sesuai gateway |

Detailnya di [Pembayaran online & saldo](/commerce/online-payments).
