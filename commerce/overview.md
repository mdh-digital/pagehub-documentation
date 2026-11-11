# Mengenal modul toko

Modul **Commerce** mengubah sebuah website jadi toko: katalog produk, keranjang, checkout, pesanan, invoice, dan tindak lanjut keranjang yang ditinggalkan.

Toko itu **milik satu website**. Satu organisasi bisa punya beberapa toko sekaligus — masing-masing dengan katalog, mata uang, dan rekening banknya sendiri.

## Termasuk di semua paket

Toko online **sudah termasuk di setiap paket**: satu website, satu toko. Tidak ada add-on yang perlu dibeli untuk mulai berjualan; cukup nyalakan toko di website itu.

Yang dibedakan paket hanya dua batas, dihitung **per workspace** (semua toko di workspace itu dijumlah):

- **Jumlah produk** — batas keras. Setelah penuh, produk baru tidak bisa ditambahkan.
- **Pesanan per bulan** — batas lunak. Checkout tidak pernah ditolak; pesanan yang melewati jatah tetap masuk dan ditandai **Melebihi kuota**.

<Shot src="/img/commerce/usage.webp">
Kartu pemakaian toko di hub Commerce: nama workspace, bilah "produk" dan bilah "pesanan bulan ini" dengan angka terpakai dan batasnya, serta tautan untuk menambah kapasitas.
</Shot>

Butuh ruang lebih di satu workspace? Beli kapasitas tambahan di [Add-on](/account/add-ons).

## Peta modul

| Menu | Isinya | Panduan |
| --- | --- | --- |
| **Kategori produk** | Pengelompokan katalog | [Kategori & varian](/commerce/categories-and-variants) |
| **Master variants** | Set pilihan yang bisa dipakai ulang | [Kategori & varian](/commerce/categories-and-variants) |
| **Master produk** | Katalog: harga, varian, gambar, grosir | [Produk](/commerce/products) |
| **Transaksi** | Pesanan, status, pembayaran, invoice | [Transaksi](/commerce/orders) |
| **Abandoned cart** | Yang mulai pesan tapi nggak selesai | [Keranjang ditinggalkan](/commerce/abandoned-carts) |
| **Alamat bisnis** | Tempat pesanan dikirim dari | [Pengaturan toko](/commerce/store-settings) |
| **Rekening bank** | Tujuan transfer pembeli | [Pengaturan toko](/commerce/store-settings) |
| **Pengaturan toko** | Identitas dokumen, mata uang, email, gateway | [Pengaturan toko](/commerce/store-settings) |
| **Halaman toko** | Storefront publik | [Halaman toko](/commerce/storefront) |

## Urutan yang masuk akal

1. **[Pengaturan toko](/commerce/store-settings)** — mata uang dulu, sebelum ada harga yang diketik.
2. **[Alamat bisnis](/commerce/store-settings)** dan **[rekening bank](/commerce/store-settings)** — keduanya tercetak di dokumen.
3. **[Kategori](/commerce/categories-and-variants)** dan **master varian** kalau produkmu punya pilihan.
4. **[Produk](/commerce/products)**.
5. **[Halaman toko](/commerce/storefront)** — generate storefront-nya.
6. Uji **[keranjang & checkout](/commerce/cart-and-checkout)** sendiri sebelum disebar.

## Pilihan desain yang perlu kamu tahu

Beberapa hal di PageHub sengaja dibuat berbeda dari toko online kebanyakan. Mengetahuinya di depan menghemat kebingungan:

**Harga selalu ada di varian, bukan di produk.** Produk sederhana pun punya tepat satu baris varian. Konsekuensinya: kalau kamu mencari kolom harga di form produk, dia ada di bagian **Harga & stok**, per baris varian.

**Baris pesanan menyimpan salinan.** Nama, harga, dan detail item disalin saat pesanan dibuat. Kamu naikkan harga besok, pesanan kemarin tetap menunjukkan harga waktu itu.

**Nggak ada ongkir otomatis.** Nggak ada integrasi kurir, nggak ada hitung ongkir, nggak ada tabel wilayah. Alamat, kurir, dan ongkir diketik manual — karena toko di PageHub ditujukan juga untuk penjualan lintas negara, di mana tabel ongkir domestik justru salah.

**Mata uang toko nggak pernah dikonversi.** Harga disimpan persis seperti yang kamu ketik. Mengganti mata uang toko cuma mengganti labelnya. Ini berbeda dari pemilih mata uang di header dashboard, yang memang mengonversi harga *langganan PageHub*.

**Nggak ada registri pelanggan.** Data pembeli tersimpan di pesanannya. Nggak ada halaman "Pelanggan" terpisah.

## Membuka dan menutup toko

Di **Halaman toko** ada sakelar **Toko aktif / Toko nonaktif**. Kalau dimatikan, halaman yang sudah dibuat tetap tersimpan, tapi toko hilang dari situs: keranjang nggak muncul di menu, dan halaman produk, keranjang, serta checkout nggak bisa dibuka.

Berguna waktu kamu sedang menyiapkan katalog, atau saat libur panjang.
