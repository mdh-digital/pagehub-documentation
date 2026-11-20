# Masalah umum

Kumpulan hal yang paling sering ditanyakan, beserta penyebabnya.

## Halaman & penerbitan

### Sudah diedit, tapi pengunjung masih lihat versi lama

**Simpan** menyimpan draf; **Publish** yang menayangkan. Halaman terbit yang diubah lalu cuma disimpan tetap menampilkan versi lama.

→ Klik **Publish** lagi.

### Alamat halaman 404

Periksa berurutan:

1. Halamannya berstatus **Terbit**?
2. Slug-nya benar? Slug yang diganti membuat alamat lama mati.
3. Website-nya punya [domain kustom](/website/custom-domain) aktif? Kalau ya, alamat platform mengalihkan ke domain itu.

### Slug ditolak

`blog`, `invoices`, `products`, `cart`, `checkout`, dan `p` dipesan sistem. Slug juga harus unik di dalam satu website.

### Homepage-nya bukan yang saya mau

Homepage adalah halaman **paling atas** di daftar halaman. Seret kartunya, atau pakai menu ⋯ → **Jadikan homepage**.

## Editor

### Mode visual nggak bisa memilih elemen

Biasanya HTML-nya nggak seimbang. Buka [mode kode](/editor/code-mode) dan cari peringatan *"Tag ... belum ditutup"* atau *"Tag ... tidak cocok"*.

### Preview kelihatan nggak sinkron

Klik **Muat ulang preview** di toolbar.

### Editor terbuka dalam "Mode lihat"

Aksesmu ke halaman ini **viewer**. Minta owner atau admin mengubahnya jadi **editor** di halaman [Tim](/team/members-and-access).

### Mengedit header ternyata mengubah semua halaman

Memang begitu — header dan footer adalah [shell](/website/header-footer) bersama. Yang khusus satu halaman harus ditaruh di konten halaman itu, bukan di shell.

## Menu & navigasi

### Item menu mengarah ke 404

Slug-nya menunjuk ke halaman yang sudah dihapus atau diganti slug-nya. PageHub menandainya *"Tidak ada halaman dengan slug ini"* di editor menu.

### Menu nggak muncul di halaman

Header harus punya `<nav data-eb-menu></nav>` yang **kosong**. Kalau tautan menu ditulis manual di HTML, slot penyuntikannya nggak ada.

## Form & leads

### Form dikirim tapi nggak ada di Leads

1. Halamannya sudah **terbit**? Form di draf nggak menyimpan apa pun.
2. Tiap field punya atribut **Name**? Field tanpa `name` isiannya nggak tersimpan.
3. Itu form **checkout toko**? Form checkout sengaja nggak dicatat sebagai lead.

### Kolom lead namanya `field1`, `field2`

Atribut **Name** field-nya belum diisi dengan nama yang bermakna. Perbaiki di panel properti; lead lama tetap memakai nama lamanya.

## AI

### Build berhenti di tengah

Kemungkinan besar kredit habis. Layar menampilkan *"Build dijeda — kredit AI habis"*. Top-up lalu klik **Lanjutkan** — prosesnya menyambung dari langkah terakhir.

### Hasil AI nggak sesuai desain situs

Untuk halaman di dalam website, perbaiki **Nama** dan **Deskripsi** website — dua kolom itu jadi patokan tiap generate. Lihat [Tema & brand](/website/theme-and-brand).

Untuk landing page, nggak ada konteks otomatis: semua arahan harus ada di prompt-nya.

### Blok baru kelihatan asing

Pakai **Sesuaikan desainku** di panel Blok, supaya blok diturunkan dari desain halaman itu sendiri. Lihat [Palet blok](/editor/blocks).

## Domain

### Sudah bikin record DNS tapi statusnya masih Menunggu

Propagasi DNS biasanya 5–30 menit. Kalau lebih lama:

- Nilai record-nya cocok persis? Pakai tombol salin.
- Di **Cloudflare**? Set record ke **DNS only** (awan **abu-abu**), bukan proxy oranye.
- Domain utama butuh **A record**; subdomain butuh **CNAME**.

### Domain kustom tiba-tiba berhenti melayani

Domain kustom butuh langganan aktif. Cek [Kalau langganan berhenti](/account/subscription-lapse).

## Toko

### Nggak bisa menambah produk

Batas jumlah produk untuk workspace ini sudah penuh. Produk yang ada tetap aman; yang ditolak hanya produk baru. Tambah kapasitas di [Add-on](/account/add-ons) atau naikkan paket.

### Pesanan ditandai "Melebihi kuota"

Jatah pesanan bulan ini untuk workspace itu sudah terlewati. Pesanannya tetap masuk dan bisa diproses seperti biasa; penandanya hanya pemberitahuan. Lihat [Add-on](/account/add-ons).

### Nggak ketemu kolom harga di form produk

Harga selalu ada **di varian**, di bagian **Harga & stok** — bukan di produknya. Produk sederhana punya tepat satu baris varian.

### Item pesanan nggak bisa diubah

Dua penyebab: stok pesanan sudah terpotong (status **Dikirim** atau **Selesai**), atau pesanan sudah lunas. Kembalikan dulu statusnya ke **Diproses**, atau hapus catatan pembayarannya, lalu ubah itemnya.

### Nggak bisa menandai lunas

Ada klaim pembayaran dari pembeli yang menggantung. Terima atau tolak dulu klaimnya. Lihat [Pembayaran & invoice](/commerce/payments-and-invoices).

### Bayar lewat gateway berhasil tapi pesanan tetap belum lunas

URL webhook belum didaftarkan di dashboard gateway. Lihat [Pengaturan toko](/commerce/store-settings).

### Harga produk salah setelah ganti mata uang

Mengganti mata uang toko **nggak mengonversi** apa pun — cuma menukar labelnya. Angkanya harus kamu sesuaikan sendiri.

### Invoice, keranjang, atau checkout tampil dalam bahasa yang salah

Teks halaman publik toko mengikuti **bahasa situs publik website**, bukan bahasa akunmu. Ubah di **Websites** → pilih website → **Pengaturan** → **Bahasa situs publik**. Lihat [Invoice publik](/commerce/public-invoice#bahasa).

### Pembeli tidak melihat pilihan VA (atau kanal lain) di invoice

Tiap kanal punya batas nominal. Kanal yang tidak cocok dengan total pesanan tidak ditampilkan; contohnya VA biasanya baru muncul mulai sekitar Rp10.000. Lihat [Membayar online](/commerce/public-invoice).

### Tombol beli di landing page tidak membuat pesanan

Produknya belum dipilih untuk landing page itu. Buka **Landing Page** → **⋯** di kartunya → **Detail** → **Ringkasan** → **Produk di situs ini**, lalu pilih produknya. Lihat [Menjual di website & landing page](/commerce/sell-on-sites).

### Landing page tidak tayang padahal saya punya Partner Store

Partner Store hanya menggratiskan website tokonya. Landing page butuh paket aktif. Buat halaman promonya di dalam website Partner Store, atau aktifkan paket. Lihat [Partner Store](/commerce/partner-store).

### Stripe, PayPal, atau transfer manual tidak bisa dinyalakan

Tokonya Partner Store. Pembayaran di Partner Store hanya lewat QRIS, VA, dan e-wallet PageHub, karena itu yang membuatnya gratis. Untuk memakai gateway sendiri, ajukan pelepasan di **Billing → Partner Store** dan gunakan paket berbayar.

### Website Partner Store tidak bisa dihapus

Memang tidak bisa dari daftar website. Ajukan pelepasan di **Billing → Partner Store → Ajukan pelepasan**; tim PageHub meninjaunya dan mengabari lewat email. Produk, pesanan, dan saldo tetap ada apa pun keputusannya.

### Pembeli produk digital tidak menemukan tombol unduh

Tombol unduh hanya muncul di invoice yang sudah **lunas** dan dibuka lewat **tautan lengkap** (yang membawa `k=`). Mengetik nomor invoice saja tidak menampilkan unduhan. Kirim ulang tautannya dari **Toko → Transaksi** → pesanannya → **Invoice publik**. Lihat [Produk digital](/commerce/digital-products).

### Unduhan habis, pembeli minta lagi

Tiap berkas bisa diunduh 5 kali per pesanan, dan batas itu tidak bisa ditambah dari layar pesanan. Kirimkan berkasnya langsung ke pembeli, atau buat pesanan baru untuknya.

### Halaman toko yang saya ubah tidak bisa disimpan

Itu template **Checkout** yang kehilangan field atau penanda wajib. Kembalikan bagian yang disebut di layar (misalnya field `customerPhone` atau atribut `data-shop-checkout`), lalu simpan lagi. Lihat [Menyesuaikan halaman toko](/commerce/storefront#menyesuaikan-halaman-toko).

## Media

### Gambar rusak di halaman

Berkasnya kemungkinan dihapus dari [File Manager](/media/file-manager). Halaman yang memakainya nggak diperbaiki otomatis — ganti gambarnya di editor.

### Upload gagal

Batasnya gambar, maksimal 8 MB. Kalau penyimpanan penuh, hapus berkas yang nggak dipakai atau beli **Storage Add-On**.

### File Manager kosong padahal ada isinya

Kamu mungkin melihat [workspace](/team/workspaces) yang salah, atau — sebagai member — belum diberi akses ke workspace mana pun.

## Akun

### Nggak bisa masuk setelah daftar

Akun pendaftar mandiri wajib **verifikasi email** dulu. Cek inbox dan folder spam untuk kode 6 digit.

### Nggak menerima email dari PageHub

Cek folder spam. Kalau organisasimu memakai [SMTP sendiri](/team/brand-white-label), emailnya keluar dari server itu — periksa statusnya di halaman Brand.

### Kuota penuh

Upgrade paket, atau hapus yang sudah nggak dipakai. Kuota website dan landing page dihitung terpisah. Lihat [Paket & kuota](/account/plans-and-quota).

### Layar berubah setelah pindah workspace

Memang begitu — pemilih workspace menyaring website, landing page, dan media sekaligus. Pindah balik lewat pemilih di atas sidebar.

## Masih macet?

Buka [tiket bantuan](/help/support-tickets), dan sertakan alamat halamannya, apa yang kamu lakukan, dan pesan error yang muncul.
