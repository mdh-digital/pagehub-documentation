# Mengelola halaman

Tab **Halaman** adalah beranda sebuah website: dari sini kamu bikin halaman, mengatur urutannya, menerbitkan, dan masuk ke editor.

<Shot src="/img/website/pages-tab.webp" wide>
Tab Halaman sebuah website: kartu "Header & Footer" di atas, lalu daftar halaman dengan pegangan seret, judul, badge "homepage" pada yang teratas, status terbit/draf, jumlah views, dan tombol Edit. Panel "Sekilas" di kanan menampilkan URL publik, jumlah halaman, total views, dan status domain kustom.
</Shot>

## Halaman baru

Klik **Halaman baru**. Muncul dialog pemilih template:

- **Blank** — halaman kosong, tinggal kamu isi.
- **Template halaman** — susunan siap pakai (Tentang, Kontak, Harga, dan seterusnya). Ada kotak cari di atasnya.

Setelah dipilih, kamu langsung masuk ke editor.

::: tip Halaman pertama menawarkan "pisahkan shell"
Kalau website-mu belum punya header/footer global dan kamu sudah punya satu halaman yang header-nya bagus, dialog ini menawarkan mengangkat header & footer halaman itu jadi shell global. Sekali klik, semua halaman berikutnya tinggal isi konten.
:::

## Urutan & homepage

Halaman **paling atas jadi homepage** — dia yang tampil waktu orang buka alamat website tanpa nyebut halaman apa pun.

Ubah urutan dengan menyeret pegangan di kiri kartu. Kalau lagi pakai keyboard, pegangan itu bisa difokus dan digeser dengan panah — perpindahannya diumumkan ke pembaca layar.

Cara cepat: menu ⋯ pada halaman mana pun → **Jadikan homepage**.

## Aksi per halaman

| Aksi | Keterangan |
| --- | --- |
| **Edit** | Buka editor |
| **Buka di tab baru** | Lihat versi tayangnya |
| **Salin tautan** | Salin URL publik halaman |
| **Jadikan homepage** | Pindahkan ke urutan teratas |
| **Duplikat** | Salinan halaman, statusnya draf |
| **Batalkan terbit** | Halaman jadi draf lagi, alamatnya berhenti melayani |
| **Hapus halaman** | Permanen |

## Status

Tiap halaman menampilkan **Terbit** atau **Draf**, plus waktu terakhir diedit dan jumlah views-nya. Panel **Sekilas** di kanan merangkum: `3 terbit · 2 draf`.

## Slug halaman

Slug adalah bagian terakhir alamat: `.../toko-kue-lezat/tentang-kami`. Diatur di editor, di sebelah judul halaman.

Aturannya: huruf kecil, angka, tanda hubung. Unik di dalam satu website — dua halaman terbit nggak boleh punya slug yang sama.

::: warning Beberapa slug dipesan sistem
`blog`, `invoices`, `products`, `cart`, `checkout`, dan `p` nggak bisa dipakai buat halaman biasa — semuanya sudah jadi milik modul blog, toko, dan landing page. PageHub bakal menolak kalau kamu memakainya.
:::

::: warning Ganti slug = tautan lama mati
Kalau halamannya sudah tayang dan alamatnya sudah tersebar, mengganti slug bikin tautan lama 404. Ganti hanya kalau memang perlu.
:::

## Kartu Header & Footer

Kartu paling atas menunjukkan status shell website:

- **aktif** — sudah ada, tombolnya **Edit header & footer**.
- **belum dibuat** — tombolnya **Buat header & footer**, plus **Pisahkan dari halaman yang ada**.

Detail: [Header & footer](/website/header-footer).

## Panel Sekilas

Ringkasan di sisi kanan: **URL publik** (bisa langsung disalin), jumlah **halaman**, **total views**, dan status **domain kustom** (`Belum diatur` kalau belum dipasang).
