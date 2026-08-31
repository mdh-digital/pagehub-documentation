# Menu navigasi

Menu adalah daftar tautan yang mengisi slot `<nav data-eb-menu>` di [header website](/website/header-footer). Karena ia data — bukan HTML yang diketik ulang di tiap halaman — mengubah satu item langsung berlaku di seluruh situs.

## Mengatur menu

Buka **Pengaturan** → bagian **Menu navigasi**.

<Shot src="/img/website/menu-editor.webp">
Bagian Menu navigasi: daftar item dengan pegangan seret, kolom Label, dropdown pemilih halaman, dan tombol hapus per baris. Di bawahnya tombol Tambah.
</Shot>

Tiap item punya dua bagian:

| Bagian | Isinya |
| --- | --- |
| **Label** | Teks yang dibaca pengunjung, misal `Tentang Kami` |
| **Slug** | Halaman tujuan di dalam website ini |

Klik **Tambah** untuk item baru, seret pegangan untuk mengubah urutan, dan klik ikon hapus untuk membuang satu item. Jangan lupa **Simpan**.

## Slug harus menunjuk ke halaman yang ada

Dropdown slug berisi halaman-halaman di website ini. Kalau sebuah item menunjuk ke slug yang halamannya sudah dihapus atau slug-nya diganti, PageHub menandainya dengan *"Tidak ada halaman dengan slug ini"*. Perbaiki sebelum menyimpan — kalau tidak, pengunjung yang mengklik menu itu mendarat di 404.

## Yang otomatis masuk menu

- **Blog.** Waktu kamu [mengaktifkan blog](/blog/enable-blog), item menu `Blog` ditambahkan otomatis.
- **Halaman toko.** Waktu [storefront](/commerce/storefront) dipasang, halaman produk bisa kamu tambahkan sendiri ke menu seperti halaman biasa.

Item-item ini tetap bisa kamu rename, geser, atau hapus seperti item lain.

## Menu di ponsel

Header yang disusun AI selalu punya versi ponsel: di bawah kira-kira 900px, menu horizontal berubah jadi tombol hamburger dengan drawer. Item menu yang sama disuntikkan ke dua tempat — nav desktop dan nav mobile — jadi kamu cukup mengurus satu daftar.

Kalau kamu menulis header sendiri dari nol di mode kode, sediakan dua slot:

```html
<nav data-eb-menu></nav>          <!-- desktop -->
<nav data-eb-menu-mobile></nav>   <!-- drawer ponsel -->
```

Biarkan keduanya kosong.

## Landing page nggak punya menu

Landing page berdiri sendiri dan nggak terikat ke website mana pun, jadi nggak ada menu untuk disuntikkan. Tautan di landing page ditulis langsung di halamannya.
