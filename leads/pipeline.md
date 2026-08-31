# Pipeline kanban

Lead nggak berhenti di kotak masuk. Halaman **Leads** adalah papan kanban: tiap lead punya tahapan, penanggung jawab, catatan, dan umur.

<Shot src="/img/leads/kanban.webp" wide>
Papan kanban leads: kolom "Kontak Awal" lalu kolom-kolom stage berwarna (Dihubungi, Penawaran, Deal), masing-masing berisi kartu lead dengan nama, kontak, umur dalam hari, dan ikon catatan. Di atas ada pemilih sumber, kartu statistik baru/macet/konversi, dan sakelar Kanban/List.
</Shot>

## Satu sumber, satu pipeline

Pipeline milik **satu sumber lead**: sebuah website, **atau** sebuah landing page. Pemilih sumber ada di atas papan.

Alasannya praktis: tahapan penjualan villa nggak sama dengan tahapan pendaftaran kelas online. Memaksakan satu papan untuk semuanya bikin tahapannya jadi terlalu umum sampai nggak berguna.

## Mengatur stage

Klik **Atur stage**.

| Kolom | Keterangan |
| --- | --- |
| **Nama** | Misal `Dihubungi`, `Penawaran`, `Deal` |
| **Warna** | Warna kolom di papan |
| **Penanda** | **Berjalan** · **Berhasil** · **Gagal** |

Urutan kolom bisa diseret.

### Penanda outcome itu data, bukan tebakan dari nama

Kamu bisa menamai stage `Closing`, `Menang`, `Beres`, atau apa pun dalam bahasa apa pun. Yang menentukan artinya bagi sistem adalah **penanda**-nya:

- **Berhasil** — dipakai menghitung **konversi**.
- **Gagal** — mematikan peringatan macet, karena lead yang sudah gagal memang nggak perlu ditagih lagi.
- **Berjalan** — stage biasa di tengah jalan.

### Menghapus stage

Lead di dalamnya **kembali ke Kontak Awal** — nggak ada yang hilang. PageHub menyebut berapa lead yang terdampak sebelum kamu mengonfirmasi.

## Kartu lead

Tiap kartu menunjukkan nama, kontak, **umur** (berapa hari sejak masuk), ikon kalau ada catatan, dan penanda kalau lead itu **macet** — sudah terlalu lama diam di stage yang sama.

Geser kartu antar kolom, atau buka kartunya dan pakai **Pindah ke**.

## Detail lead

| Bagian | Isinya |
| --- | --- |
| **Isian form** | Semua field beserta nilainya |
| **Stage** | Tahapan saat ini, plus kapan terakhir pindah |
| **Penanggung jawab** | Siapa yang menggarapnya |
| **Catatan** | Hasil follow-up terakhir |

Catatan adalah bagian yang paling menentukan apakah papan ini tetap berguna sebulan lagi. Tulis hasilnya, bukan cuma "sudah dihubungi".

## Ringkasan di atas

| Angka | Artinya |
| --- | --- |
| **baru** | Lead yang masih di Kontak Awal |
| **macet** | Lead yang terlalu lama diam di satu stage |
| **konversi** | Lead di stage bertanda **Berhasil**, dibanding seluruh lead dari sumber ini |

## Mode list

Sakelar **Kanban / List** di kanan atas. Mode list menampilkan tabel dengan kolom Nama, Kontak, Stage, Penanggung jawab, Halaman, Umur, dan Masuk.

Pakai mode list kalau leadnya sudah banyak: papan kanban cuma menampilkan sebagian terbaru (ada catatan *"Menampilkan 200 terbaru dari 1.340"*), sementara mode list plus pencarian menjangkau semuanya.

## Mencari

Kotak cari mencakup nama, email, dan isi catatan.

## Laporan konversi

Ada laporan konversi lead di **Laporan → Funnel**, yang mengukur lead terhadap jumlah kunjungan halaman. Lihat [Sepuluh laporan](/reports/overview).
