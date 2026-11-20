---
description: 'Header dan footer disimpan sekali di level website lalu dipakai semua halaman — cara membuatnya, mengangkatnya dari halaman lama, dan slot menu di dalamnya.'
---

# Header & footer

Di dalam website, header dan footer disimpan **satu kali** di level website — namanya *shell*. Tiap halaman cuma menyimpan kontennya. Waktu pengunjung membuka halaman, PageHub menyusunnya jadi satu:

```
┌─────────── header (shell) ───────────┐
│                                      │
│           konten halaman             │
│                                      │
└─────────── footer (shell) ───────────┘
```

Efeknya: ganti nomor telepon di footer = selesai untuk 30 halaman sekaligus.

## Bikin shell

Di tab **Halaman** ada kartu **Header & Footer**.

<Shot src="/img/website/shell-card.webp">
Kartu "Header & Footer" di kolom kanan tab Halaman: penanda status "aktif" (atau "belum dibuat"), satu kalimat penjelasan, dan tombol "Edit header & footer" — atau "Buat header & footer" dan "Pisahkan dari halaman yang ada" kalau belum ada.
</Shot>

Ada dua jalan:

### Generate baru

Klik **Buat header & footer**. AI menyusun header (logo + slot menu) dan footer yang mengikuti tema serta brand website ini.

### Pisahkan dari halaman yang ada

Kalau kamu sudah punya satu halaman yang header-nya bagus, klik **Pisahkan dari halaman yang ada**, lalu pilih halamannya. PageHub mengangkat header (atau `<nav>`) dan footer pertama dari halaman itu jadi shell global; sisanya tetap jadi konten halaman tersebut.

Setelah itu, rapikan hasilnya di editor shell.

## Editor shell

Buka lewat **Edit header & footer**. Editornya sama dengan editor halaman biasa — mode Visual, Code, dan chat AI semuanya jalan — bedanya yang kamu edit cuma header dan footer.

<Shot src="/img/website/shell-editor.webp" wide>
Editor shell: panel file di kiri menampilkan bagian Header dan Footer beserta catatan "dipakai semua halaman", preview di tengah menampilkan header di atas dan footer di bawah dengan area konten kosong di antaranya.
</Shot>

Waktu kamu buka halaman biasa yang memakai shell, editor menampilkan catatan: *"Header & footer dipakai bersama dari shell website. Di sini kamu edit kontennya saja."* — beserta tombol **Edit shell** buat lompat ke sini.

## Slot menu

Di dalam header ada satu elemen khusus:

```html
<nav data-eb-menu></nav>
```

Elemen ini **sengaja dibiarkan kosong**. Item [menu navigasi](/website/navigation-menu) website disuntikkan ke sini otomatis waktu halaman tayang. Jadi kamu nggak perlu — dan sebaiknya nggak — nulis tautan menu satu per satu di HTML header.

Kalau kamu ngoprek CSS header sendiri, dua hal yang perlu diingat:

- Item menu disuntikkan sebagai daftar `<a>` **langsung** di dalam `<nav>` itu — nggak ada `<ul>`/`<li>`. Jadi tulis jarak antar-item di nav-nya (`nav[data-eb-menu] { display:flex; gap:1.5rem }`), bukan di `nav ul`.
- Header versi ponsel biasanya punya slot kedua, `<nav data-eb-menu-mobile></nav>`, buat drawer hamburger.

## Halaman yang nggak pakai shell

Halaman lama yang dibuat sebelum sistem shell ada tetap menyimpan header/footer-nya sendiri, dan tetap dirender apa adanya. Nggak ada yang rusak — tapi halaman itu juga nggak ikut berubah waktu kamu mengedit shell. Kalau mau menyatukannya, salin bagian kontennya ke halaman baru, atau pakai **Pisahkan dari halaman yang ada**.

Landing page **nggak pernah** memakai shell: dia berdiri sendiri, lengkap dengan header dan footer-nya masing-masing.
