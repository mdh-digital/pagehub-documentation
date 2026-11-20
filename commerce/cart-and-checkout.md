# Keranjang & checkout

Alur yang dilalui pembeli, dari klik "tambah ke keranjang" sampai punya nomor pesanan.

## Alurnya

```
Halaman produk  →  Keranjang  →  Checkout  →  Invoice publik
```

1. **Halaman produk.** Pembeli memilih varian dan jumlah, lalu menambahkannya ke keranjang.
2. **Keranjang.** Isinya disimpan di browser pembeli. Tiap kali dibuka, harga dihitung ulang oleh server dari katalog — termasuk [harga grosir](/commerce/products).
3. **Checkout.** Pembeli mengisi nama, kontak, alamat, dan catatan.
4. **Pesanan dibuat** lewat jalur yang sama persis dengan pesanan yang dibuat staf, lalu pembeli diarahkan ke [invoice publik](/commerce/public-invoice)-nya.

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

## Metode pembayaran di checkout

| Metode | Cara kerjanya |
| --- | --- |
| **Transfer bank manual** | Pembeli transfer ke [rekening](/commerce/store-settings) kamu, lalu mengirim klaim bayar dari invoice publik. Kamu yang menyetujui |
| **Payment gateway** | Kalau kamu menghubungkan akun gateway sendiri, pembeli bisa membayar langsung; pesanan ditandai lunas otomatis lewat webhook |

Dua-duanya bisa aktif berdampingan.

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
