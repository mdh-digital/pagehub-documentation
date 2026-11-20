# Reseller

Dengan fitur reseller, kamu menjual builder ini ke klienmu sendiri: tiap klien punya akun dan login sendiri dengan **merek kamu**, dan membayar paket dengan **harga yang kamu tentukan**.

**Menu Reseller** di sidebar. Menu ini muncul kalau paketmu menyertakan fitur reseller.

<Shot src="/img/team/reseller-clients.webp" wide>
Halaman Reseller: empat kartu kolam sumber daya (Website, Landing page, Storage, Kredit AI untuk dibagi — masing-masing berapa yang tersisa dan berapa yang sudah dibagi ke klien), catatan bahwa penagihan ke klien dilakukan di luar aplikasi, lalu tab Klien dan Domain. Tab Klien menampilkan daftar klien, atau keadaan kosong dengan tombol "Klien baru".
</Shot>

## Yang kamu atur

Halaman Reseller punya empat tab:

| Tab | Isinya |
| --- | --- |
| **Klien** | Akun-akun klienmu, paket masing-masing, dan statusnya |
| **Paket klien** | Daftar harga buatanmu: nama, harga, dan batas tiap paket |
| **Saldo** | Pembayaran klien, fee platform, dan pencairan |
| **Domain** | Alamat sendiri untuk builder versi merekmu |

## Membuat paket klien

Buat paket dulu sebelum membuka klien pertama.

1. Tab **Paket klien** → **Paket baru**.
2. Isi nama dan **harga per bulan**. Harga per tahun opsional.
3. Isi batasnya: jumlah website, landing page, anggota, kredit AI per bulan, penyimpanan, produk, dan pesanan per bulan.

Dua aturan berlaku saat menyimpan:

- Batas paket klien **tidak boleh melebihi** batas paketmu sendiri. Angka maksimalnya tampil di bawah tiap kolom.
- Harga **tidak boleh di bawah fee minimum** platform.

## Membuka akun klien

1. Tab **Klien** → **Klien baru**.
2. Isi nama usaha klien, nama dan email pemiliknya, lalu pilih paket.
3. **Buat klien**.

Klien menerima email untuk mengatur password. Akunnya langsung aktif dengan **masa coba** beberapa hari; lamanya tertulis di kartu atas.

Kamu otomatis menjadi admin di akun klien itu. Tombol **Buka** memindahkanmu ke akun klien supaya kamu bisa mengerjakan situsnya.

Jumlah klien dibatasi **slot** paketmu. Kartu "Slot klien" menunjukkan berapa yang sudah terpakai.

## Yang dilihat klien

- Builder dengan **nama dan logomu**, bukan PageHub. Atur di [Brand & white label](/team/brand-white-label).
- Menu **Paket** berisi paket buatanmu saja. Klien memilih paket, lalu membayar lewat halaman tagihan yang sama dengan pembayaran lainnya.
- Klien tidak melihat harga PageHub dan tidak bisa mengganti merek.

## Saldo dan pencairan

Setiap pembayaran klien tercatat di tab **Saldo** dengan tiga angka: yang dibayar klien, fee platform, dan bagianmu.

- **Fee platform** adalah persentase dari tiap pembayaran, dengan jumlah minimum per klien per bulan. Besarnya tertulis di kartu atas halaman Reseller.
- Bagianmu **ditahan dulu** selama masa refund sebelum bisa dicairkan. Lama penahanannya tertulis di kartu saldo.
- **Cairkan saldo** mengajukan seluruh saldo yang sudah bisa dicairkan. Isi rekening tujuan; tim PageHub mentransfernya lalu menandainya dibayar.

## Domain sendiri

Di tab **Domain** kamu memasang alamat seperti `app.agensimu.com`. Klien login di alamat itu dan halaman loginnya sudah memakai merekmu.

1. Ketik domainnya, **Tambah domain**.
2. Buat dua record DNS yang ditampilkan: satu **TXT** untuk membuktikan kepemilikan, satu **CNAME** untuk mengarahkan alamatnya.
3. **Cek lagi** sampai statusnya **Terhubung**. Perubahan DNS bisa butuh beberapa jam.

Di domainmu tidak ada pendaftaran mandiri. Akun klien selalu dibuka olehmu dari tab Klien.

## Akun lifetime

Kalau akunmu lifetime, klienmu hanya bisa **menyewa** (bulanan atau tahunan). Paket sekali bayar untuk klien tidak tersedia.

## Kalau langgananmu berhenti

Selama masa tenggang, klienmu tidak terganggu. Kalau masa tenggang habis tanpa perpanjangan, akun klien **diambil alih PageHub**: situs dan kontennya tetap utuh, periode yang sudah mereka bayar tetap berlaku sampai habis, dan mereka diberi tahu lewat email. Lihat [Kalau langganan berhenti](/account/subscription-lapse).
