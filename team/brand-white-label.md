# Brand & white label

Halaman **Brand** (grup Bisnis, manager saja) mengganti merek PageHub **di dalam builder** — yang dilihat klienmu waktu mereka masuk.

Situs yang terbit sudah nol jejak merek PageHub sejak awal; halaman ini soal aplikasinya sendiri.

<Shot src="/img/team/brand.webp" wide>
Halaman Brand: kartu "Identitas kamu" (nama produk, logo, ikon, link bantuan, link tentang) bertanda "Paket berbayar", kartu "Tampilan default" dengan kontrol warna dan mode, kartu "Email akun", dan panel Pratinjau di kanan.
</Shot>

## Dibelah dua

| Bagian | Harga | Isinya |
| --- | --- | --- |
| **Tampilan default** | Gratis | Warna aksen, terang/gelap, tone, gaya menu, radius |
| **Identitas** | Paket berbayar | Nama produk, logo, ikon, link bantuan, link tentang |
| **Email akun** | Paket berbayar | Kode verifikasi & reset password dari SMTP kamu |

Alasannya: memilih tampilan bawaan buat rekan kerja nggak merugikan siapa pun, jadi gratis. Mengganti merek produk adalah kapabilitas komersial.

## Identitas

| Kolom | Keterangan |
| --- | --- |
| **Nama produk** | Menggantikan "PageHub" di seluruh aplikasi. Kosongkan untuk memakai nama bawaan |
| **Logo** | Merek lebar di atas sidebar. Tinggi sekitar 36px paling pas |
| **Ikon** | Merek kotak, dipakai waktu sidebar menyempit. Kosong = ikut logo |
| **Link bantuan** | Tujuan tombol bantuan |
| **Link tentang** | Tautan "tentang" |

Berlaku untuk **semua orang di organisasi ini**. Judul tab browser dan favicon ikut berganti.

::: warning Tanpa paket, penyimpanan ditolak secara terbuka
Menyimpan identitas tanpa paket yang mendukung menghasilkan penolakan yang jelas — bukan field yang diam-diam hilang. Fieldset dimatikan dengan catatan alasannya, dan tombol Simpan ikut mati.

Yang di bawahnya tetap jalan: **Jadikan default tim** gratis.
:::

Panel **Pratinjau** di kanan menunjukkan bagaimana builder terlihat di mata klienmu dengan isian yang barusan kamu masukkan, dalam mode **Penuh** maupun **Rail**.

## Tampilan default

Kartu **Tampilan default** menentukan tampilan awal untuk rekan kerja **sebelum** mereka mengatur sendiri.

Dua hal yang perlu dipahami:

**Mengeditnya nggak mengubah layarmu sendiri.** Ini keputusan tentang orang lain; mem-preview-nya di dirimu sendiri sama saja diam-diam menimpa preferensimu. Tombol **Salin tampilan saya** ada sebagai titik awal yang masih bisa diedit.

**Yang belum pernah menyetel akan ikut berubah.** Kalau rekan kerja belum pernah membuka panel Tweaks, tampilannya mengikuti default ini — termasuk waktu kamu menggantinya nanti. Yang sudah pernah memilih sendiri tetap memakai pilihannya.

Tombol **Hapus default** mengembalikan semuanya ke tampilan bawaan aplikasi.

Rantai keputusannya:

```
preferensi pribadi  →  default tim  →  bawaan aplikasi
```

Panel [Tweaks](/getting-started/interface-tour) di sidebar adalah tempat tiap orang mengatur preferensi pribadinya, dan punya tombol **Ikuti default tim** untuk kembali ikut.

## Email akun

Kode verifikasi dan reset password bisa dikirim dari **server email organisasimu**, jadi sampai atas namamu, bukan atas nama PageHub.

Isi pengaturan SMTP, nama pengirim, lalu **kirim email tes ke diri sendiri**.

::: warning Server yang belum terbukti tidak dipakai
Nggak ada yang dikirim lewat server ini sebelum email tes berhasil masuk. Selama itu — dan **setiap kali** pengaturan yang menyentuh pengiriman diubah — email akun tetap keluar dari server PageHub.

Alasannya: kalau salah password diterima begitu saja, agensi bakal menelan kode login tiap kliennya tanpa suara. Salah merek itu kosmetik; nggak terkirim itu orang terkunci di luar akunnya.
:::

Mengubah nama pengirim saja **tidak** menghapus verifikasi — itu kosmetik. Mengubah host, port, username, enkripsi, email pengirim, atau password akan menghapusnya.

::: info Berlaku untuk siapa
Cuma untuk orang yang bernaung di **tepat satu** organisasi. Orang yang bekerja di dua agensi nggak punya satu merek yang sah memegang kode loginnya, jadi emailnya tetap dari PageHub.
:::

## Yang belum ada

- **Domain aplikasi per organisasi** (`app.agensimu.com`) — masih terkendala infrastruktur TLS.
- **Merek per workspace** — merek tetap satu per organisasi. Merek per workspace berarti satu domain aplikasi per klien, dan beban sertifikatnya dikali jumlah klien.
