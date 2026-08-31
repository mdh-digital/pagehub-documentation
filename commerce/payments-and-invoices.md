---
description: 'Mencatat pembayaran, menerima atau menolak klaim bayar dari pembeli, pembayaran lewat gateway, dan mencetak invoice, struk, serta surat jalan.'
---

# Pembayaran & invoice

## Menandai lunas

Di halaman detail pesanan, klik **Tandai lunas**.

<Shot src="/img/commerce/payment-dialog.webp">
Dialog Pembayaran: pilihan metode (Transfer bank, E-wallet, Tunai, COD), pemilih rekening tujuan berbentuk chip, kolom Nominal, tanggal Diterima, dan pengunggah Bukti transfer.
</Shot>

| Kolom | Keterangan |
| --- | --- |
| **Metode** | Transfer bank · E-wallet · Tunai · COD |
| **Masuk ke rekening mana** | Untuk transfer bank — dipilih dari [rekening bank](/commerce/store-settings) kamu |
| **Dompet digital** | Untuk e-wallet — OVO, GoPay, DANA, PayPal |
| **Nominal** | Harus menutup total pesanan |
| **Diterima** | Tanggal pembayaran masuk |
| **Bukti transfer** | Opsional, dari File Manager |

**Ubah pembayaran** membuka dialog yang sama untuk memperbaiki catatan. **Tandai belum bayar** menghapus catatan pembayaran dan mengembalikan pesanan ke belum lunas.

## Klaim pembayaran dari pembeli

Pembeli bisa mengirim klaim bayar sendiri lewat [invoice publik](/commerce/public-invoice): memilih rekening tujuan, mengisi nominal, dan mengunggah bukti.

::: warning Klaim bukan lunas
Klaim masuk sebagai **Menunggu konfirmasi** — bukan pembayaran yang diakui. Selama klaim menggantung, tombol tandai lunas dan tandai belum lunas ditolak, dengan pesan *"Tindaklanjuti dulu pembayaran pelanggan"*.
:::

Dua tombolnya:

- **Terima pembayaran** — pesanan jadi lunas.
- **Tolak** — kamu wajib menulis alasannya. **Alasan itu ditampilkan ke pembeli** di invoice publiknya, supaya dia tahu apa yang harus dibetulkan (misal: "nominal tidak sesuai invoice").

## Pembayaran lewat gateway

Kalau kamu menghubungkan [payment gateway](/commerce/store-settings) sendiri, pembayaran yang berhasil menandai pesanan lunas **otomatis** lewat webhook — tanpa langkah manual.

Kalau pembayaran gateway berhasil tapi pesanan tetap belum lunas, hampir selalu penyebabnya sama: URL webhook belum didaftarkan di dashboard gateway.

## Mencetak dokumen

Dari halaman detail pesanan, tombol **Cetak**. Tersedia tiga dokumen:

| Dokumen | Isinya |
| --- | --- |
| **Invoice** | Tagihan: identitas toko, ditagihkan ke, rincian item, total, info pembayaran, jatuh tempo |
| **Transaksi** | Struk ringkas |
| **Surat jalan** | Pengirim, penerima, kurir, resi, dan peringatan pemeriksaan barang |

<Shot src="/img/commerce/invoice-print.webp">
Pratinjau cetak invoice: logo dan identitas toko di kiri atas, nomor & tanggal invoice di kanan, blok "Dari" dan "Ditagihkan ke", tabel item, total keseluruhan, blok info pembayaran berisi rekening utama, dan catatan footer.
</Shot>

Semua isian kepala dan catatan datang dari [Pengaturan toko](/commerce/store-settings): nama outlet, logo invoice, tempo pembayaran, catatan invoice, peringatan surat jalan, dan footer.

**Rekening utama** kamu tercetak di blok info pembayaran.

Ada juga **Unduh PDF**. Kalau gagal, pakai **Cetak** lalu simpan sebagai PDF dari dialog cetak browser.

## Mata uang

Semua dokumen memakai [mata uang toko](/commerce/store-settings), tanpa konversi. Pemilih mata uang di header dashboard nggak berpengaruh pada dokumen pesanan.

## Jatuh tempo

Kalau **Tempo pembayaran** di Pengaturan toko diisi (misal 7 hari), invoice menampilkan tanggal jatuh tempo = tanggal pesanan + jumlah hari itu. Nol berarti tanpa jatuh tempo.
