# Sepuluh laporan

Tab **Laporan** di sebuah website berisi sepuluh laporan dalam tiga kelompok. Semuanya baca-saja — anggota dengan akses **viewer** pun boleh membukanya.

<Shot src="/img/reports/hub.webp" wide>
Hub Laporan: tiga kelompok kartu — Audiens (Trafik & konten, Konversi lead), Penjualan (Produk per pesanan, Produk per omzet, Tren produk, Laporan transaksi, Analisis periode, Linimasa penjualan, Abandoned cart), dan AI (Pemakaian AI).
</Shot>

## Pemilih periode

Semua laporan punya pemilih periode yang sama: **7 / 30 / 90 hari terakhir**, **Bulan ini**, **Bulan lalu**, **Tahun ini**, atau **Kustom**. Beberapa laporan juga punya **Kelompokkan**: harian, mingguan, atau bulanan.

## Audiens

### Trafik & konten

Tren tayangan dan halaman yang benar-benar dibaca.

| Isinya | Keterangan |
| --- | --- |
| Tayangan & leads per hari | Grafik |
| Rata-rata per hari, hari teramai | Angka ringkas |
| **Konten paling dibaca** | Halaman dan artikel, dengan tayangan periode ini **dan** sepanjang waktu |

::: info Kenapa ada dua kolom tayangan
Tayangan harian baru dicatat sejak fitur pelacakannya jalan. Halaman lama punya penghitung kumulatif yang jauh lebih besar dan nggak bisa dipotong per tanggal — karena itu ditampilkan di kolom terpisah, bukan dicampur.
:::

### Konversi lead

Dari pengunjung → pertanyaan → pesanan, dan di mana mereka berhenti.

| Tahap | Diukur terhadap |
| --- | --- |
| Kunjungan | — |
| Leads | Kunjungan |
| Pesanan | Kunjungan |
| Lunas | Pesanan |

::: warning Ini bukan corong lurus
Leads dan pesanan **sama-sama** diukur dari kunjungan, bukan berurutan. Pembeli bisa langsung checkout tanpa pernah mengisi form, jadi rantai `kunjungan → lead → beli` bakal menghasilkan rasio yang mustahil (di data nyata bisa tembus 400%). Tiap tahap menyebut pembandingnya sendiri.
:::

## Penjualan

### Produk per pesanan

Produk mana yang paling sering dipesan. Kolom: pesanan, terjual, omzet, profit, margin, porsi, harga rata-rata, jumlah per pesanan. Bisa dibuka sampai ke tingkat varian lewat **Tampilkan varian**.

### Produk per omzet

Susunan yang sama, diurutkan dari yang paling banyak menghasilkan uang.

::: info Cara profit dihitung
`Profit = omzet − harga modal`. **Ongkir nggak ikut dihitung** — kamu cuma menampung lalu meneruskannya ke kurir, jadi memasukkannya bakal menggelembungkan margin.
:::

### Tren produk

Bagaimana tiap produk terjual sepanjang periode. Pilih produk tertentu, atau kosongkan untuk melihat lima terlaris. Ukurannya bisa omzet, jumlah, atau pesanan; ada **rata-rata 3 periode** dan perbandingan **paruh kedua vs paruh pertama**.

### Laporan transaksi

Buku pesanan lengkap: tiap pesanan dengan total, profit, dan status bayarnya.

### Analisis periode

Periode ini dibanding periode sebelumnya, sepuluh angka berdampingan: pesanan, omzet, profit, modal, ongkir, rata-rata pesanan, item terjual, pelanggan, porsi lunas, margin.

Kalau periode sebelumnya nggak ada pesanan sama sekali, laporan mengatakannya terus terang — bukan menampilkan pertumbuhan tak hingga.

### Linimasa penjualan

Pesanan, omzet, profit, dan margin per hari, minggu, atau bulan. Ada periode terbaik, rata-rata per periode, dan rata-rata bergerak 3 periode.

### Abandoned cart

<Shot src="/img/reports/carts.webp">
Laporan Abandoned cart: kartu angka (Cart dimulai, Jadi pesanan, Ditinggal, Konversi, Nilai yang ditinggal), lalu tabel "Berhenti di mana" berisi progres pengisian form dan konversinya, serta grafik tren cart.
</Shot>

Yang paling berguna di sini adalah tabel **Berhenti di mana** — cart dikelompokkan menurut seberapa jauh form-nya sempat terisi (belum diisi sama sekali · 1–25% · 26–50% · 51–75% · 76–99% · lengkap). Kalau kebanyakan berhenti di 76–99%, masalahnya ada di ujung form, bukan di harga.

## AI

### Pemakaian AI

Token dan kredit yang dipakai website ini: untuk kegiatan apa, oleh siapa, dan kapan. Lihat [Kredit AI](/ai/credits).

## Cara membaca angkanya

**Persentase bisa kosong, bukan nol.** Kalau penyebutnya nol, laporan menampilkan kosong, bukan `0%`. "Margin 0%" untuk toko yang belum punya pesanan itu bohong.

**Omzet dihitung dari pesanan Selesai.** Kartu "Omzet selesai" di halaman Transaksi memakai aturan yang sama.

**Rentang sebelum pelacakan menyala akan kosong.** Wajar untuk situs yang lebih tua dari fiturnya.

## Mencetak

Tiap laporan punya tombol **Cetak** untuk menyimpannya sebagai PDF lewat dialog cetak browser.
