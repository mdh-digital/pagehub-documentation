---
description: 'Menjual produk digital seperti ebook atau template: berkas dipilih dari Google Drive, stok tidak terbatas, pembeli mengunduh dari halaman tagihan setelah lunas.'
---

# Produk digital

Produk digital diunduh pembeli setelah membayar. Tidak ada alamat, tidak ada ongkir, dan stoknya tidak terbatas. Contohnya ebook, template, preset, atau materi kelas.

Berkasnya **disimpan di Google Drive milikmu**. PageHub tidak menyimpan salinannya dan tidak memberi pembeli tautan Drive: saat pembeli yang sudah lunas mengunduh, PageHub mengambil berkas dari Drive-mu lalu meneruskannya.

## Membuat produk digital

1. **Toko → Produk → Tambah produk**.
2. Di **Jenis produk**, pilih **Digital**.
   Kolom stok, berat, dan ukuran paket hilang; stok tertulis **Tak terbatas**.
3. Isi nama, harga, gambar, lalu **simpan**. Produk digital baru selalu tersimpan **nonaktif**.
4. Di kartu **Berkas untuk pembeli** yang muncul setelah disimpan, pilih berkasnya (lihat di bawah).
5. Aktifkan produknya.

Pilihan **Aktif** terkunci sampai ada minimal satu berkas. Kalau berkas terakhir dihapus, produk otomatis kembali nonaktif.

## Menghubungkan Google Drive

Cukup sekali per toko.

1. Di kartu **Berkas untuk pembeli**, klik **Hubungkan Google Drive**.
2. Masuk ke akun Google tempat berkasmu disimpan dan beri izin.

PageHub hanya bisa melihat berkas yang kamu pilih di langkah berikutnya, tidak bisa membuka isi Drive-mu yang lain. Kartunya lalu menulis **Drive: email-kamu**.

## Memilih berkas

1. Klik **Pilih dari Google Drive**.
2. Pemilih berkas Google terbuka. Pilih satu atau beberapa berkas.

Ukuran tiap berkas tampil dalam MB.

::: warning Google Docs, Sheets, dan Slides ditolak
Dokumen bawaan Google tidak punya berkas yang bisa diunduh. Simpan dulu sebagai PDF (atau format lain) di Drive, lalu pilih berkas PDF-nya.
:::

## Stok

Produk digital **tidak punya stok** dan tidak pernah tertulis **Habis**, berapa pun yang terjual. Yang membatasi penjualannya hanya status **Aktif**: produk yang nonaktif tidak tampil dan tidak bisa dibeli.

## Yang dialami pembeli

1. **Checkout.** Kalau keranjang **hanya berisi produk digital**, form checkout tidak meminta alamat dan tidak menghitung ongkir. Yang wajib diisi adalah **email**. Kalau ada satu saja produk fisik di keranjang, alamat kembali wajib. Lihat [Keranjang & checkout](/commerce/cart-and-checkout).
2. **Halaman tagihan.** Setelah checkout pembeli langsung dibawa ke halaman tagihannya. Selama belum lunas, blok **Unduhan Anda** menulis bahwa berkas muncul begitu pembayaran dikonfirmasi.
3. **Setelah lunas**, blok itu berisi tombol **Unduh** untuk tiap berkas. Pesanan yang berisi beberapa produk digital menampilkan **semua berkas dari semua produknya**, masing-masing dengan jatahnya sendiri.
4. Tiap berkas bisa diunduh **maksimal 5 kali** per pesanan. Sisa jatahnya tertulis di samping tombol. Setelah habis, tombol hilang.

Pembeli tidak pernah melihat tautan Google Drive-mu. Tombol **Unduh** mengarah ke PageHub, yang mengambil berkas dari Drive lalu meneruskannya.

## Tautan tagihan adalah kuncinya

Tombol unduhan hanya muncul kalau halaman tagihan dibuka lewat **tautan lengkap**: tautan yang membawa kunci akses (bagian `k=` di alamatnya). Tautan itu yang dibuka pembeli tepat setelah checkout, dan yang dikirim di email pesanan.

- Pembeli yang membuka halaman `invoices` lalu **mengetik nomor invoice saja** melihat rincian dan status pesanannya, tapi **tidak** melihat tombol unduhan.
- **Siapa pun yang memegang tautan lengkap bisa mengunduh.** Minta pembeli tidak menyebarkannya. Batas 5 kali per berkas yang membatasi kerugian kalau tautan itu tersebar.

Supaya pembeli tidak kehilangan tautannya:

- Nyalakan [notifikasi email toko](/commerce/store-settings). Email pesanan memuat tautan lengkap itu. Tanpa SMTP toko yang aktif dan terverifikasi, PageHub tidak mengirim email ke pembeli, dan satu-satunya salinan tautan ada di browser pembeli.
- Kalau pembeli kehilangan tautannya, buka pesanan di **Toko → Transaksi**, klik **Invoice publik**, lalu salin alamat halaman yang terbuka dan kirim ke pembeli. Alamat itu sudah membawa kuncinya.

## Status pesanan digital

Pesanan yang **semua** itemnya produk digital tidak punya paket untuk dikirim:

- Begitu pesanan itu **lunas**, statusnya pindah sendiri ke **Selesai**. Ini berlaku untuk semua cara bayar: QRIS/VA/e-wallet lewat PageHub, gateway milikmu, **Tandai lunas** oleh staf, atau menerima bukti transfer dari pembeli.
- Langkah statusnya hanya **Baru → Selesai**. Tidak ada Diproses dan Dikirim.
- Di detail pesanan, kartu asal, tujuan, dan ekspedisi diganti satu kartu **Pengiriman: Unduhan digital**. Invoice publik dan versi cetaknya juga tidak memuat kurir, resi, atau baris ongkir.
- Kalau pembayarannya dibatalkan (**Tandai belum bayar**), pesanan kembali ke **Baru** dan unduhannya berhenti.

Pesanan **campuran** (produk digital dan fisik) tidak selesai otomatis, karena masih ada paket yang harus kamu kirim. Berkas digitalnya tetap bisa diunduh begitu pesanan lunas.

Pesanan digital yang sudah lunas **sebelum** aturan ini berlaku tetap berstatus **Baru**. Pindahkan ke **Selesai** sendiri lewat **Ubah status**.

## Kalau Drive diputus

**Putuskan** di kartu berkas mencabut akses PageHub ke Drive-mu. Selama terputus, pembeli tidak bisa mengunduh, dan jatah unduhan mereka tidak berkurang. Hubungkan lagi untuk memulihkannya.

Kalau kartunya menulis **Google Drive belum disiapkan di platform ini**, fitur ini belum diaktifkan administrator platform.
