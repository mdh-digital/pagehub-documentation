# Pengaturan toko

Semua yang bukan katalog dan bukan pesanan: identitas di dokumen, mata uang, alamat, rekening, email, dan gateway pembayaran.

## Pengaturan toko

**Toko → Kelola toko → Pengaturan toko**.

<Shot src="/img/commerce/store-settings.webp">
Halaman Pengaturan toko: bagian Identitas (nama outlet, telepon, email, logo, logo invoice), bagian Mata uang, bagian Dokumen (tempo pembayaran, catatan invoice, peringatan surat jalan, footer dokumen), dan bagian Pembayaran dengan sakelar transfer bank manual.
</Shot>

### Identitas

Tercetak di kepala tiap invoice, struk, dan surat jalan.

| Kolom | Keterangan |
| --- | --- |
| **Nama outlet** | Kalau dikosongkan, dokumen memakai nama website atau landing page tempat pesanan dibuat |
| **Telepon**, **Email** | Kontak yang dicetak |
| **Logo** | Logo toko |
| **Logo invoice** | Khusus cetak. Kosong berarti ikut logo utama |

### Mata uang

Mata uang yang dipakai menagih di toko ini.

::: warning Ganti mata uang tidak mengonversi harga
Harga disimpan persis seperti yang kamu ketik — mengganti mata uang cuma mengganti labelnya. `150000` yang tadinya IDR akan terbaca `150000` USD. Tetapkan mata uang **sebelum** mengisi katalog.
:::

### Dokumen

| Kolom | Keterangan |
| --- | --- |
| **Tempo pembayaran** | Jumlah hari setelah tanggal pesanan. Nol = tanpa jatuh tempo |
| **Catatan invoice** | Misal "Mohon selesaikan pembayaran sebelum jatuh tempo." |
| **Peringatan surat jalan** | Misal "Mohon periksa barang sebelum diterima." |
| **Footer dokumen** | Misal "Terima kasih atas kepercayaan Anda." |

### Pembayaran

**Transfer bank manual** aktif secara bawaan: pembeli transfer ke salah satu rekeningmu, lalu kamu konfirmasi. Bisa dimatikan kalau kamu cuma mau menerima pembayaran lewat gateway.

**Bayar online (QRIS, VA, e-wallet)** lewat gateway PageHub bisa dinyalakan di sini setelah identitasmu diverifikasi. Uangnya masuk ke menu **Saldo**. Lihat [Pembayaran online & saldo](/commerce/online-payments).

## Alamat bisnis

**Toko → Kelola toko → Alamat bisnis** — tempat pesanan dikirim **dari**.

| Kolom | Keterangan |
| --- | --- |
| **Nama alamat** | Label internal, misal `Kantor & garasi` |
| **Nama kontak**, **Telepon** | Dicetak di surat jalan |
| **Alamat jalan**, **Kota / wilayah**, **Kode pos** | |

Satu alamat jadi **default** dan otomatis disalin ke tiap pesanan baru sebagai alamat asal. Alamat pertama otomatis jadi default. Alamat satu-satunya nggak bisa dihapus.

Alamat asal di sebuah pesanan bisa diubah — perubahannya cuma berlaku untuk pesanan itu.

## Rekening bank

**Toko → Kelola toko → Rekening bank** — tujuan transfer pembeli.

<Shot src="/img/commerce/bank-accounts.webp">
Halaman Rekening bank: daftar kartu rekening berisi nama bank, atas nama, nomor rekening dengan tombol salin, dan penanda "Utama" pada salah satunya.
</Shot>

| Kolom | Keterangan |
| --- | --- |
| **Bank atau penyedia** | BCA, Wise, PayPal — bebas |
| **Atas nama** | Nama pemilik rekening |
| **Nomor rekening** | Nomor, IBAN, atau handle |
| **Catatan** | Cabang, SWIFT/BIC, atau info lain untuk pembayar |

Satu rekening jadi **utama** dan tampil paling depan di invoice. Rekening pertama otomatis jadi yang utama.

Semua rekening di sini juga jadi pilihan yang bisa diklik pembeli di halaman [invoice publik](/commerce/public-invoice).

::: info Beda dengan rekening platform
Rekening di sini adalah **rekening kamu** untuk menerima pembayaran pembeli. Rekening tujuan pembayaran **langganan PageHub** berbeda dan diatur oleh platform — lihat [Upgrade & pembayaran](/account/billing).
:::

## Notifikasi email

**Toko → Kelola toko → Pengaturan toko → Notifikasi email**. Email pesanan dikirim dari **SMTP milikmu sendiri**, dan **mati secara bawaan** — nggak ada email terkirim sampai kamu menyalakannya.

Isi host, port, username, password, email & nama pengirim, enkripsi, plus **email notifikasi kamu** (ke sini notifikasi pemilik dikirim).

Lalu **Simpan & kirim email tes**.

::: warning Server yang belum terbukti tidak dipakai
Selama email tes belum pernah berhasil, event yang kamu centang **tidak mengirim apa pun**. Ini disengaja: pengaturan SMTP yang salah akan menelan notifikasi pesanan tanpa suara. Setelah berhasil, muncul penanda **SMTP terverifikasi**.

Mengubah apa pun yang menyentuh pengiriman (host, port, username, enkripsi, email pengirim, password) menghapus verifikasi itu — kirim tes lagi.
:::

Event yang bisa dinyalakan satu per satu:

| Event | Penerima |
| --- | --- |
| Pesanan baru | Pemilik |
| Pesanan diterima | Pelanggan |
| Pesanan diproses / dikirim / selesai / dibatalkan | Pelanggan |
| Pembayaran masuk | Pemilik |
| Pesanan dibatalkan | Pemilik |

## Payment gateway

**Toko → Kelola toko → Pengaturan toko → Payment gateway**. Hubungkan akun gateway **milikmu sendiri** (Stripe, PayPal, Razorpay, Paystack, Flutterwave, atau Mollie) supaya pembeli membayar langsung ke kamu. Untuk QRIS, VA, dan e-wallet Indonesia, pakai [gateway PageHub](/commerce/online-payments). Transfer bank manual tetap tersedia berdampingan.

Isi kredensial gateway, pilih **Mode** (Sandbox untuk uji, Live untuk sungguhan), lalu **daftarkan URL webhook** yang ditampilkan di dashboard gateway-mu.

::: warning Tanpa webhook, pesanan tak pernah ditandai lunas
Pembayaran akan berhasil di sisi gateway, tapi PageHub nggak pernah diberi tahu. Salin **Endpoint webhook** dan daftarkan sebelum menerima pembayaran sungguhan.
:::

Kalau server menampilkan pesan bahwa enkripsi pembayaran belum diatur, kredensial nggak bisa disimpan sampai administrator platform menyetelnya.
