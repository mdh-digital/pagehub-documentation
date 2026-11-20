---
description: 'Menerima QRIS, VA, dan e-wallet lewat gateway PageHub: verifikasi identitas, biaya layanan ditanggung pembeli, saldo ditahan, dan cara menarik saldo.'
---

# Pembayaran online & saldo

Toko yang berjualan dalam **rupiah** bisa menerima **QRIS, virtual account, dan e-wallet** lewat gateway PageHub, tanpa perlu punya akun payment gateway sendiri. Uangnya masuk ke **Saldo**, lalu kamu tarik ke rekeningmu.

Transfer ke rekening toko tetap bisa dipakai berdampingan, kecuali di [Partner Store](/commerce/partner-store) yang hanya menerima gateway PageHub.

## 1. Verifikasi identitas

Uang pembeli dicairkan ke kamu, jadi pemilik akun perlu verifikasi identitas sekali untuk semua toko.

1. Buka **Billing → Partner Store**, atau kartu pembayaran di **Toko → Kelola toko → Pengaturan toko**.
2. Klik **Verifikasi identitas**.
3. Isi **Nama lengkap (sesuai KTP)** dan **NIK (16 digit)**, unggah **Foto KTP** dan **Selfie memegang KTP**.
4. Klik **Kirim untuk ditinjau**.

Biasanya ditinjau dalam 1–2 hari kerja. NIK dan foto disimpan terenkripsi dan hanya bisa dilihat tim verifikasi. Hanya pemilik atau admin akun yang bisa mengirimnya.

Kalau ditolak atau dicabut, alasannya tertulis di layar, dan kamu bisa **Ajukan ulang**.

## 2. Nyalakan di toko

Di **Toko → Kelola toko → Pengaturan toko**, bagian **Bayar online (QRIS, VA, e-wallet)**, pilih **Ditawarkan ke pembeli**.

## Biaya layanan

Pembeli membayar biaya layanan kecil **di atas** total pesanan; besarnya tergantung kanal dan nominal, dan tampil ke pembeli sebelum ia membayar. **Kamu menerima total pesanan utuh.**

## Yang dialami pembeli

Di halaman tagihan, pembeli memilih: transfer ke rekening toko, atau salah satu kanal QRIS/VA/e-wallet lengkap dengan biaya dan totalnya. Setelah membayar, pesanan otomatis berstatus lunas. Ganti kanal di tengah jalan membuat tagihan baru; tagihan lama dibatalkan.

## Saldo

Menu **Saldo** di sidebar menampilkan tiga angka:

| Angka | Artinya |
| --- | --- |
| **Tertahan** | Penjualan yang belum lewat masa tahan |
| **Bisa ditarik** | Siap kamu tarik |
| **Sedang ditarik** | Penarikan yang sedang diproses |

Tiap penjualan **ditahan beberapa hari** setelah dibayar sebelum bisa ditarik (lamanya tertulis di halaman Saldo). Masa tahan ini ruang untuk refund dan sengketa.

Tab **Mutasi** mencatat setiap penjualan, refund, dan penarikan.

## Menarik saldo

1. **Saldo → Tarik saldo**.
2. Isi jumlah (ada batas minimal, tertulis di form) dan rekening tujuan.
3. **Ajukan penarikan**.

Penarikan ditransfer manual oleh tim PageHub, biasanya 1–2 hari kerja. Hanya satu penarikan yang bisa diproses dalam satu waktu.

## Refund setelah lunas

Pesanan yang dibatalkan atau di-refund setelah dananya masuk saldo mengurangi saldomu. Kalau saldo jadi minus, kekurangannya dipotong dari penjualan berikutnya, dan penarikan menunggu sampai saldo kembali positif.

## Gateway milikmu sendiri

Kalau kamu sudah punya akun Stripe, PayPal, Razorpay, Paystack, Flutterwave, atau Mollie, hubungkan di **Toko → Kelola toko → Pengaturan toko → Payment gateway**. Pembeli membayar langsung ke akunmu, dan tidak lewat Saldo. Lihat [Pengaturan toko](/commerce/store-settings).
