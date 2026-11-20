# Keranjang & checkout

Alur yang dilalui pembeli, dari klik "tambah ke keranjang" sampai punya nomor pesanan.

## Alurnya

```
Halaman produk  →  Keranjang  →  Checkout  →  Invoice publik
```

1. **Halaman produk.** Pembeli memilih varian dan jumlah, lalu menambahkannya ke keranjang.
2. **Keranjang.** Isinya disimpan di browser pembeli. Tiap kali dibuka, harga dihitung ulang oleh server dari katalog — termasuk [harga grosir](/commerce/products).
3. **Checkout.** Pembeli mengisi nama, kontak, dan catatan, ditambah alamat atau email tergantung isi keranjangnya (lihat di bawah).
4. **Pesanan dibuat** lewat jalur yang sama persis dengan pesanan yang dibuat staf, lalu pembeli diarahkan ke [invoice publik](/commerce/public-invoice)-nya.

## Produk digital, produk fisik, atau campuran

Isi keranjang menentukan kolom yang wajib diisi:

| Isi keranjang | Alamat | Ongkir | Email |
| --- | --- | --- | --- |
| Hanya [produk digital](/commerce/digital-products) | Tidak diminta | Tidak ada | **Wajib**, karena tautan unduhan dikirim ke sana |
| Ada minimal satu produk fisik | **Wajib** | Dihitung atau diisi manual | Opsional |

Form checkout menyesuaikan diri sendiri: kolom alamat hilang untuk keranjang yang isinya digital semua. Server juga memeriksa ulang aturan ini, jadi pesanan tanpa email (untuk produk digital) atau tanpa alamat (untuk produk fisik) tidak bisa dibuat, termasuk dari template checkout yang kamu ubah sendiri.

## Harga selalu dari katalog

Keranjang di browser cuma menyimpan **produk apa dan berapa banyak**. Harga nggak pernah diambil dari sana — tiap kali keranjang atau checkout dimuat, server menghitung ulang dari katalog.

Konsekuensinya:

- Harga yang dimanipulasi dari sisi browser nggak berpengaruh apa-apa.
- Kalau kamu mengubah harga sementara keranjang seseorang masih terbuka, dia melihat harga baru.
- Diskon grosir dihitung server, bukan di halaman.

## Keranjang terpisah per situs

Keranjang disimpan di penyimpanan browser, yang dipisahkan **per alamat situs**. Karena tiap [workspace](/team/workspaces) punya alamatnya sendiri, keranjang di toko satu klien nggak pernah bocor ke toko klien lain.

## Setelah checkout

Pesanan muncul di **Toko → Transaksi** dengan status **Baru** dan pembayaran **Belum bayar**.

Kalau [notifikasi email](/commerce/store-settings) aktif, email terkirim ke kamu dan ke pembeli.

Pembeli mendapat tautan ke [invoice publik](/commerce/public-invoice) miliknya, tempat dia bisa melihat rincian, memilih rekening tujuan, mengunggah bukti transfer, atau membatalkan pesanan yang belum berjalan.

## Metode pembayaran di invoice

Pembeli memilih cara bayar di [invoice publik](/commerce/public-invoice), setelah pesanannya dibuat.

| Metode | Cara kerjanya |
| --- | --- |
| **Transfer bank manual** | Pembeli transfer ke [rekening](/commerce/store-settings) kamu, lalu mengirim klaim bayar dari invoice publik. Kamu yang menyetujui |
| **QRIS, VA, e-wallet lewat PageHub** | Pembeli membayar lewat gateway PageHub dengan biaya layanan yang ia tanggung. Pesanan lunas otomatis. Lihat [Pembayaran online & saldo](/commerce/online-payments) |
| **Payment gateway milikmu** | Kalau kamu menghubungkan akun gateway sendiri, pembeli membayar langsung ke akunmu; pesanan ditandai lunas otomatis lewat webhook |

Ketiganya bisa aktif berdampingan, **kecuali di [Partner Store](/commerce/partner-store)**: di sana hanya QRIS, VA, dan e-wallet lewat PageHub.

## Form checkout bukan form lead

Satu hal yang perlu diketahui kalau kamu mengoprek HTML: form checkout ditandai khusus supaya isiannya **tidak** ikut tercatat sebagai [lead](/leads/form-submissions). Kalau nggak, tiap pesanan bakal muncul dua kali — sekali sebagai pesanan, sekali sebagai lead.

Jangan menghapus penanda itu waktu menyunting template checkout.

## Menguji sebelum disebar

Sebelum mengumumkan tokomu:

1. Buka halaman produk **dari browser biasa** (bukan dari preview editor).
2. Tambahkan ke keranjang, periksa harga dan diskon grosirnya.
3. Selesaikan checkout dengan datamu sendiri.
4. Periksa pesanan yang masuk di **Transaksi**.
5. Buka invoice publiknya, coba kirim klaim bayar.
6. Setujui pembayarannya, lalu jalankan statusnya sampai **Selesai**.
7. Hapus pesanan uji itu.

## Keranjang yang ditinggalkan

Pengunjung yang mulai mengisi tapi nggak menyelesaikan checkout tercatat di **Abandoned cart**, siap kamu tindak lanjuti. Lihat [Keranjang ditinggalkan](/commerce/abandoned-carts).
