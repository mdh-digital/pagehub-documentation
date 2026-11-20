---
description: 'Mengelola pesanan toko: enam status dan kapan stok dipotong, membuat pesanan manual, harga grosir, penanggung jawab, serta angka modal dan profit.'
---

# Transaksi

**Toko → Transaksi**. Semua pesanan toko ini — pembayaran, stok, dan pengiriman di satu tempat.

<Shot src="/img/commerce/orders-list.webp" wide>
Halaman Transaksi: lima kartu statistik di atas (Pesanan, Baru, Belum bayar, Selesai, Omzet selesai), lalu kotak pencarian, tombol Filter, dan tombol "Pesanan baru", disusul tabel pesanan dengan kolom No. pesanan, Pelanggan, Asal (situs asal atau "Diinput staf"), Penanggung jawab, Item, Total beserta status bayarnya, dan Status.
</Shot>

## Ringkasan di atas

| Kartu | Isinya |
| --- | --- |
| **Pesanan** | Total pesanan pada rentang yang dipilih |
| **Baru** | Yang belum diproses |
| **Belum bayar** | Yang pembayarannya belum masuk |
| **selesai** | Yang sudah tuntas |
| **Omzet selesai** | Hanya dari pesanan berstatus Selesai |

Rentang: Hari ini · Minggu ini · Bulan ini · Pilih tanggal.

## Status pesanan

| Status | Artinya |
| --- | --- |
| **Baru** | Pesanan masuk, belum dikerjakan |
| **Diproses** | Sedang disiapkan. **Di sini stok dipotong** |
| **Dikirim** | Sudah diserahkan ke kurir |
| **Selesai** | Tuntas. Baru di sini pesanan dihitung sebagai omzet |
| **Ditolak** | Dibatalkan. Stok dikembalikan |
| **Refund** | Dana dikembalikan. Stok dikembalikan |

Mengubah status lewat **Ubah status** di halaman detail pesanan. PageHub minta konfirmasi dan menyebut tujuan perpindahannya.

### Pintasan saat mengubah status

- **Sekalian tandai lunas** — hemat satu langkah kalau pembayaran diterima bersamaan.
- **Sekalian tandai belum lunas** — menghapus catatan pembayaran dan mengembalikan pesanan ke belum lunas.
- **Alasan** — wajib diisi untuk pembatalan. Ditulis untuk orang berikutnya yang membuka pesanan ini.
- Menandai **Dikirim** meminta **kurir atau nomor resi** — salah satunya harus ada.

## Stok

Stok dipotong saat pesanan masuk ke **Diproses**, dan dikembalikan kalau pesanan **Ditolak** atau di-**Refund**.

Pesanan yang stoknya sedang terpotong ditandai **stok terpotong**, dan **itemnya terkunci**. Mau mengubah item? Kembalikan dulu ke status sebelumnya.

Alasannya sederhana: kalau item boleh diubah setelah stok dipotong, angka stok dan isi pesanan bisa berpisah tanpa ketahuan.

## Membuat pesanan manual

**Pesanan baru** — untuk pesanan yang masuk lewat WhatsApp, telepon, atau tatap muka.

<Shot src="/img/commerce/order-form.webp" wide>
Form pesanan baru: bagian Item dengan pencarian produk dan tabel item, bagian Pelanggan (nama, HP, email, alamat), bagian Pengiriman (kurir, layanan, resi), dan panel Total di kanan berisi Subtotal, Diskon, Ongkir, Biaya tambahan, dan Total.
</Shot>

| Bagian | Isinya |
| --- | --- |
| **Item** | Cari produk, atur jumlah. Harga katalog terisi otomatis, bisa ditimpa dengan harga khusus |
| **Pelanggan** | Nama, HP, email, alamat |
| **Pengiriman** | Kurir, layanan, nomor resi — teks bebas, tanpa cek kurir dan tanpa hitung ongkir otomatis |
| **Total** | Subtotal, diskon, ongkir, biaya tambahan, total |

Harga grosir diterapkan otomatis waktu jumlahnya mencapai tingkat yang berlaku; barisnya ditandai *harga grosir*. Harga yang kamu timpa manual ditandai *harga khusus*.

Diskon yang lebih besar dari nilai pesanan ditolak.

## Alamat asal

Tiap pesanan menyalin [alamat bisnis default](/commerce/store-settings) sebagai alamat asal saat dibuat. Mengubahnya di sebuah pesanan cuma berlaku untuk pesanan itu — alamat induknya nggak tersentuh.

## Penanggung jawab

Tiap pesanan bisa ditugaskan ke satu anggota tim. Filter **Punya saya** menyaring pesanan yang jadi tanggung jawabmu.

Beberapa pesanan bisa dipilih sekaligus lalu ditugaskan bersamaan lewat **Tetapkan penanggung jawab**.

## Modal & profit

Halaman detail pesanan menunjukkan **Modal** (dari harga modal produk) dan **Profit**. Angka ini nggak pernah tampil ke pembeli, dan jadi dasar laporan margin. Lihat [Sepuluh laporan](/reports/overview).

## Mencari

Kotak cari mencakup nomor pesanan, nama pelanggan, dan nomor HP. Ada juga filter status dan filter pembayaran.

## Menghapus

Menghapus pesanan permanen dan nggak bisa dibatalkan. Untuk pesanan yang batal, lebih baik pakai status **Ditolak** — riwayatnya tetap ada dan tetap terhitung di laporan.
