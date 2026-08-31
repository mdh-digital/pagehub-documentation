# Mode visual

Mode visual bekerja seperti editor halaman pada umumnya: klik sesuatu, ubah, selesai. Bedanya, yang dia tulis tetap HTML biasa — jadi apa pun yang kamu lakukan di sini tetap bisa kamu baca dan koreksi di [mode kode](/editor/code-mode).

<Shot src="/img/editor/visual-mode.webp" wide>
Mode visual dengan satu elemen terpilih: kotak biru mengelilingi elemen, toolbar mengambang di atasnya (pegangan seret, tombol pilih induk, duplikat, hapus), panel Outline di kiri menyorot elemen yang sama, panel properti di kanan menampilkan tab isi dan gaya.
</Shot>

## Memilih elemen

Klik elemen mana pun di kanvas. Yang terpilih dikelilingi garis, dan muncul toolbar kecil berisi:

| Tombol | Fungsinya |
| --- | --- |
| **Tarik untuk memindahkan** | Seret elemen ke posisi lain |
| **Pilih induk** | Naik satu tingkat — berguna kalau kamu ingin memilih section, bukan teks di dalamnya |
| **Duplikat** | Gandakan elemen |
| **Hapus** | Buang elemen |

Panel **Outline** di kiri menampilkan pohon elemen halaman. Klik salah satu baris untuk memilihnya — jauh lebih akurat daripada mengklik di kanvas kalau elemennya bertumpuk.

## Panel properti

Muncul di kanan begitu ada elemen terpilih. Isinya tergantung jenis elemen.

### Isi

| Elemen | Yang bisa diubah |
| --- | --- |
| Teks | Isi teks, perataan, warna, ukuran, ketebalan huruf |
| Gambar | **Src** (ganti gambar lewat File Manager atau upload baru), **Alt** |
| Tautan | **Link (href)**, buka di tab baru |
| Form | Daftar field: tambah Input / Area teks, atur label, tipe, wajib diisi |

### Gaya

Panel gaya dikelompokkan: **Tata letak**, **Jarak**, **Tipografi**, **Latar**, **Garis tepi & sudut**, **Efek**, dan **Lanjutan**.

Dua kontrol yang gampang terlewat tapi penting:

**Breakpoint.** Di atas panel gaya ada pemilih Desktop / Tablet / Ponsel. Nilai yang kamu isi hanya berlaku pada breakpoint itu ke bawah; kolom yang dibiarkan kosong **mewarisi** dari breakpoint yang lebih lebar. Ada penanda "Diwarisi dari breakpoint yang lebih lebar" supaya kamu tahu nilai itu datang dari mana.

**State.** Normal / Hover / Fokus / Ditekan. Isi gaya hover di sini, bukan dengan menulis CSS terpisah. Kolom kosong ikut state Normal.

<Shot src="/img/editor/style-panel.webp">
Panel gaya: pemilih breakpoint Desktop/Tablet/Ponsel dan pemilih state Normal/Hover/Fokus/Ditekan di bagian atas, lalu grup Tata letak, Jarak, Tipografi yang bisa dibuka-tutup, dan kotak "CSS kustom" di bawah.
</Shot>

### CSS kustom

Di bagian bawah panel gaya. Isinya **deklarasi saja, tanpa selector**:

```css
backdrop-filter: blur(6px);
mix-blend-mode: multiply;
```

Berlaku untuk breakpoint dan state yang sedang aktif.

## Token desain

Panel **Token desain** menyimpan nilai untuk seluruh situs — warna merek, jarak baku, radius. Mengubah satu token berlaku di semua tempat yang memakainya, jadi ganti warna aksen nggak berarti menyisir 40 elemen satu per satu.

## Menambah blok

Panel **Blok** di sisi kiri berisi potongan siap pakai:

- **Dasar** — Heading, Teks, Tombol, Gambar
- **Tata letak** — Container, 2/3/4 kolom, Konten + sidebar
- **Bagian siap pakai** — Hero, Fitur, Harga, Testimoni, FAQ, Ajakan bertindak, Form

Klik satu blok untuk menyisipkannya **ke dalam elemen yang sedang terpilih** (atau ke body kalau nggak ada yang terpilih), atau seret langsung ke kanvas.

Palet ini bisa disesuaikan dengan desain halamanmu sendiri — lihat [Palet blok](/editor/blocks).

## Menyimpan blok sendiri

Elemen mana pun bisa disimpan jadi blok yang bisa dipakai ulang: pilih elemennya → **Simpan jadi blok** → beri nama dan ikon. Blok itu muncul di kelompok **Blok simpananmu**.

## Salin, tempel, tempel gaya

Selain salin/potong/tempel elemen biasa, ada **Tempel gaya**: salin satu elemen, pilih elemen lain, lalu tempel gayanya saja. Berguna buat menyeragamkan tombol atau kartu tanpa mengulang pengaturan satu per satu.

## Kalau ada yang tampak nggak sinkron

Klik **Muat ulang preview** di toolbar. Preview dirender ulang dari HTML yang tersimpan.
