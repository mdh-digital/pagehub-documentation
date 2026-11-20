---
description: 'Ongkir otomatis dan lacak resi untuk toko yang mengirim dari Indonesia: alamat sampai kelurahan, pilihan kurir di checkout, dan status paket.'
---

# Ongkir & lacak resi

Toko yang **mengirim dari Indonesia** bisa menghitung ongkir otomatis lewat kurir dan melacak resi. Toko di negara lain tetap mengisi kurir dan ongkir secara manual.

## Yang perlu disiapkan

1. **Alamat bisnis** di **Toko → Kelola toko → Alamat bisnis**. Pilih negara **Indonesia**, lalu provinsi, kota/kabupaten, kecamatan, dan kelurahan. Kode pos terisi sendiri dari kelurahan.
2. **Berat** di tiap varian produk, dalam gram. Untuk paket besar, isi juga **panjang × lebar × tinggi** dalam cm, karena kurir menghitung berat volume per kardus.

Varian yang beratnya kosong dihitung 1.000 gram.

Kalau di layar muncul **Cek ongkir belum diaktifkan di platform ini**, fitur kurir belum dinyalakan administrator platform. Ongkir tetap bisa diisi manual.

## Di checkout pembeli

Untuk produk fisik, form checkout menambahkan pilihan alamat bertingkat dan daftar tarif kurir. Pembeli memilih layanan kurirnya; harganya dihitung server dari isi keranjang dan alamat toko, bukan dari angka yang dikirim browser.

Kalau tarif berubah di antara saat pembeli melihat daftar dan saat ia memesan, checkout meminta pembeli memilih ulang layanannya.

Kalau kurir sedang tidak merespons, pesanan **tidak** gagal: pesanan tetap masuk, dan ongkirnya kamu isi manual.

## Saat staf membuat atau mengedit pesanan

Di form pesanan, isi tujuan sampai kelurahan lalu klik **Cek ongkir**. Pilih tarif dari daftar, atau ketik ongkir sendiri.

## Lacak resi

Isi nomor resi di pesanan. Setelah itu:

- **Pembeli** melihat riwayat perjalanan paketnya langsung di [halaman tagihan](/commerce/public-invoice), tanpa perlu menekan apa pun.
- **Staf** menekan **Lacak paket** di detail pesanan, dan **Perbarui lacak** untuk mengambil status terbaru.

Kalau tertulis **Kurir belum mengenali nomor resi ini**, biasanya resinya baru dibuat; coba lagi beberapa jam kemudian.

## Produk digital

Keranjang yang isinya [produk digital](/commerce/digital-products) saja tidak meminta alamat dan tidak menampilkan pilihan kurir.
