# Tema & brand

Ada dua lapis yang mengatur "rasa" sebuah website: **theme global** (warna & font yang dipakai halaman-halamannya) dan **brand brief** (deskripsi yang dibaca AI tiap kali menyusun sesuatu buat website ini).

## Theme global

Ada di **Pengaturan** → **Theme global**.

<Shot src="/img/website/theme-global.webp">
Kartu "Theme global": pemilih Warna utama, Background, Warna teks berbentuk kotak warna, dan dropdown Font family dengan kotak pencarian.
</Shot>

| Kolom | Dipakai untuk |
| --- | --- |
| **Warna utama** | Tombol, tautan, dan aksen di seluruh halaman |
| **Background** | Warna latar halaman |
| **Warna teks** | Warna teks utama |
| **Font family** | Huruf untuk seluruh situs |

Pemilih font dikelompokkan: Sistem, Sans-serif, Serif, Display, Tulisan tangan, Monospace. Ada kotak cari kalau kamu sudah tahu nama fontnya. **Font Google otomatis dimuat waktu halaman tayang** — kamu nggak perlu nempelin tag apa pun.

::: tip Tema itu titik awal, bukan borgol
Theme global menentukan nilai bawaan. Kalau satu halaman butuh warna berbeda, kamu tetap bisa mengubahnya di halaman itu lewat [mode visual](/editor/visual-mode) atau [mode kode](/editor/code-mode).
:::

### Landing page nggak ikut theme

[Landing page](/landing-pages/create-landing-page) berdiri sendiri: style-nya nempel di halaman itu. Ganti theme website nggak mengubah landing page mana pun.

## Brand brief

Waktu kamu bikin website lewat AI, PageHub menyusun **brand brief** dari nama + deskripsi yang kamu tulis: nada bicara, siapa audiensnya, kata kunci, dan bahasanya.

Brief itu disimpan di website dan **ikut dikirim ke AI tiap kali** kamu:

- generate halaman baru,
- minta revisi lewat chat AI,
- menulis artikel blog,
- membuat palet blok dari desain.

Hasilnya: halaman kesepuluh masih terasa satu keluarga dengan halaman pertama, bukan tempelan dari situs lain.

Cara memperbaikinya: perbaiki **Nama** dan **Deskripsi singkat** website di Pengaturan. Deskripsi yang bagus menyebut *apa yang dijual, kepada siapa, dan kesan apa yang diinginkan*.

::: warning Landing page nggak baca brand brief
Brand brief milik website. Landing page standalone berdiri lepas, jadi pengarahan gayanya harus kamu tulis di prompt-nya masing-masing.
:::

## Tampilan aplikasi ≠ tampilan situs

Gampang ketuker, jadi ditegaskan:

| | Yang diatur | Yang lihat |
| --- | --- | --- |
| **Panel Tweaks** | Warna & mode gelap **dashboard PageHub** | Kamu dan tim |
| **Theme global** | Warna & font **halaman terbit** | Pengunjung situsmu |
| **Halaman Brand** | Merek yang muncul **di dalam builder** (logo, nama produk) | Kamu, tim, dan klien yang kamu undang |

Halaman Brand dibahas di [Brand & white label](/team/brand-white-label).
