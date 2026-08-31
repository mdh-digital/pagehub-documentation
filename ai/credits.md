# Kredit AI

Kredit adalah satuan pemakaian AI di PageHub. Tiap kali AI membaca dan menulis sesuatu buat kamu, sebagian kredit terpakai.

## Cara menghitungnya

Kredit dihitung dari **token** — satuan potongan teks yang diproses model. Yang dihitung adalah **input + output**: teks yang dikirim ke AI (prompt kamu, konteks halaman, riwayat chat) ditambah teks yang dia tulis balik.

Kurs bakunya **1.000 token = 1 kredit**, dibulatkan ke atas. Platform bisa menyetel kurs ini, jadi angka yang berlaku selalu bisa kamu lihat di **Billing → AI Credit**.

Tiap balasan AI di editor menampilkan pemakaiannya sendiri, misalnya `1.240 token (820 in · 420 out)`.

## Dua kantong kredit

| Kantong | Dari mana | Perilakunya |
| --- | --- | --- |
| **Kredit dari paket** | Jatah bulanan paketmu | Direset tiap bulan kalender |
| **Kredit top-up** | Kamu beli sendiri | Nggak pernah hangus, terbawa terus |

Yang penting dipahami: **jatah bulanan direset, bukan ditumpuk**. Sisa jatah bulan lalu nggak ikut ke bulan ini. Kredit top-up sebaliknya — dia menumpuk dan bertahan.

Jatah bulanan berjalan per **bulan kalender selama langgananmu aktif**, terlepas dari durasi tagihanmu. Jadi paket tahunan tetap dapat jatah tiap bulan, bukan sekali untuk setahun.

::: info Paket lifetime
Paket seumur hidup dapat kredit **sekali di awal**, masuk ke kantong top-up, dan nggak diisi ulang tiap bulan. Kalau habis, beli kredit lagi.
:::

## Apa saja yang memakai kredit

| Kegiatan | Keterangan |
| --- | --- |
| Membuat website via AI | Termasuk pertanyaan, rencana, desain, shell, dan tiap section |
| Membuat landing page via AI | Sama |
| Generate halaman baru | Per halaman |
| Membuat header & footer | Sekali per website |
| Chat AI di editor | Per giliran percakapan |
| [Menyusun palet blok dari desain](/editor/blocks) | Sekali per website atau per landing page |
| Menulis artikel blog dengan AI | Per artikel |
| Menyusun tampilan blog | Sekali, saat blog diaktifkan atau di-regenerate |
| Menyusun judul untuk [jadwal blog AI](/blog/write-articles) | Per batch judul |
| Menyusun halaman toko ([storefront](/commerce/storefront)) | Sekali per template |

Yang **tidak** memakai kredit: memakai template, mengedit di mode visual, mengedit di mode kode, menerbitkan, mengunggah media, dan seluruh modul toko, leads, serta laporan.

## Melihat saldo

**Billing → AI Credit** menampilkan:

- **Kredit dari paket** — sisa jatah bulan ini
- **Kredit top-up** — saldo yang terbawa
- **Kredit terpakai (periode ini)**

<Shot src="/img/ai/credit-balance.webp">
Halaman AI Credit: tiga kartu angka berisi Kredit dari paket, Kredit top-up, dan Kredit terpakai periode ini; di bawahnya tombol "Beli Kredit" dan tabel riwayat transaksi.
</Shot>

Sisa kredit juga tampil di layar pembuatan AI, di sebelah perkiraan pemakaian.

## Membeli kredit

**Billing → AI Credit → Beli Kredit**. Masukkan jumlah unit; harga per unit dan jumlah kredit per unit ditampilkan di dialog. Pajak dan total final dihitung saat transaksi dibuat.

Pembayaran mengikuti jalur yang sama dengan pembelian paket. Lihat [Upgrade & pembayaran](/account/billing).

## Kalau kredit habis di tengah pembuatan

Build **dijeda**, bukan dibatalkan. Section yang sudah jadi tersimpan. Setelah top-up, klik **Lanjutkan** dan prosesnya menyambung dari langkah terakhir.

## Cara hemat

1. **Mulai dari template** kalau tampilannya sudah mendekati. Template nggak memakan kredit sama sekali.
2. **Tulis prompt yang lengkap sejak awal.** Satu prompt bagus lebih murah daripada lima revisi.
3. **Satu maksud per permintaan** di chat AI.
4. **Chat baru untuk topik baru** — riwayat panjang ikut dikirim tiap giliran, dan itu dihitung sebagai input.
5. **Buang section yang nggak perlu di layar rencana**, sebelum pembuatan dimulai.
6. **Susun palet blok sekali saja** per website; jangan diulang kecuali desainnya berubah besar.

## Laporan pemakaian

Pemakaian AI per website ada di **Laporan → Pemakaian AI**: berapa kredit terpakai, untuk kegiatan apa, oleh siapa, dan kapan. Lihat [Sepuluh laporan](/reports/overview).
