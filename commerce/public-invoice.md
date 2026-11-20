# Invoice publik

Halaman yang dibuka **pembeli** untuk melihat pesanannya, membayar, atau membatalkannya — tanpa akun, tanpa login.

## Alamatnya

```
https://<workspace>.pagehub.id/<website>/invoices
```

Pembeli membukanya lalu **mengetik nomor invoice**-nya. Nggak ada daftar pesanan, dan nggak ada cara menebak pesanan orang lain — satu-satunya jalan masuk adalah nomor yang memang dia terima.

Slug `invoices` dipesan sistem, jadi nggak bisa dipakai halaman biasa.

<Shot src="/img/commerce/public-invoice.webp">
Halaman invoice publik dari sisi pembeli: kepala hijau berisi nama toko, nomor invoice, status pesanan dan status bayar, lalu blok pengiriman, pengirim dan penerima, tabel item, subtotal, ongkir, dan total tagihan, plus dua tombol — "Batalkan pesanan ini" dan "Bayar sekarang".
</Shot>

## Yang bisa dilakukan pembeli

### Melihat rincian

Item, jumlah, harga, total, status pesanan, dan status pembayarannya.

### Mengirim klaim bayar

1. Pilih **rekening tujuan** dari daftar [rekening bank](/commerce/store-settings) kamu.
2. Isi nominal yang ditransfer.
3. Unggah bukti transfer.

Klaim masuk ke pesanan sebagai **Menunggu konfirmasi**, dan kamu yang memutuskan diterima atau ditolak. Lihat [Pembayaran & invoice](/commerce/payments-and-invoices).

Kalau kamu menolaknya, **alasan yang kamu tulis ditampilkan di halaman ini** supaya pembeli tahu apa yang harus dibetulkan.

### Membatalkan pesanan

Selama pesanan **belum berjalan**, pembeli bisa membatalkannya sendiri dari halaman ini. Begitu pesanan sudah diproses atau dikirim, tombol batal nggak lagi tersedia — pembatalan setelah itu urusan percakapan, bukan tombol.

## Kenapa dibuat begini

Tiga keputusan yang menjelaskan perilakunya:

**Tanpa daftar, tanpa penelusuran.** Pembeli harus tahu nomor invoicenya. Kalau ada daftar atau nomor bisa ditebak, siapa pun bisa membaca pesanan orang lain.

**Klaim ≠ lunas.** Bukti transfer yang diunggah pembeli adalah *klaim*, bukan konfirmasi. Yang menentukan tetap kamu.

**Selama klaim menggantung, status pembayaran dikunci.** Kamu nggak bisa menandai lunas atau belum lunas sampai klaim itu diterima atau ditolak — supaya nggak ada dua kebenaran yang bersaing tentang pesanan yang sama.

## Mengirim tautannya ke pembeli

- Pembeli yang checkout dari [halaman toko](/commerce/storefront) diarahkan ke sana otomatis.
- Untuk pesanan yang kamu buat manual, buka detail pesanan lalu ambil tautan **Invoice publik**.
- Kalau [notifikasi email](/commerce/store-settings) aktif, tautannya ikut di email pesanan.

## Bahasa

Halaman ini mengikuti [bahasa situs publik](/website/settings) website tersebut — bukan bahasa dashboardmu.
