# Mengenal editor

Editor adalah tempat kamu menghabiskan sebagian besar waktu di PageHub. Satu halaman, tiga cara mengeditnya, semuanya menulis ke HTML yang sama.

<Shot src="/img/editor/overview.webp" wide>
Editor halaman terbuka penuh: toolbar atas berisi tombol kembali, judul & slug halaman, tiga tombol mode (Visual, Code, AI), pemilih ukuran layar, indikator "Tersimpan", tombol Simpan dan Publish. Panel Outline di kiri, kanvas halaman di tengah, panel properti di kanan.
</Shot>

## Tiga mode

| Mode | Buat apa |
| --- | --- |
| **Visual** | Klik elemen, ubah teks/warna/jarak, seret buat memindahkan. [Detail](/editor/visual-mode) |
| **Code** | HTML mentah. Buat yang tahu persis apa yang mau diubah. [Detail](/editor/code-mode) |
| **AI** | Chat. Minta perubahan pakai bahasa sehari-hari. [Detail](/editor/ai-chat) |

Bebas bolak-balik kapan saja. Perubahan di satu mode langsung kelihatan di mode lain — karena yang disimpan cuma satu: HTML halamannya.

Editor terbuka dalam mode **Visual** secara bawaan.

## Toolbar

Dari kiri ke kanan:

- **Kembali ke website** / **Kembali ke landing pages** — keluar dari editor.
- **Judul halaman** dan **slug**. Dua-duanya bisa langsung diketik di sini.
- **Pindah halaman** — lompat ke halaman lain di website yang sama tanpa keluar editor.
- **Undo / Redo**.
- **Mode**: Visual · Code · AI.
- **Ukuran layar**: Desktop · Tablet · Mobile — mengubah lebar kanvas, bukan isi halamannya.
- **Muat ulang preview** — kalau tampilan preview terasa nggak sinkron.
- **Alat lain** (⋯) — lihat di bawah.
- **Status penyimpanan**: *Belum disimpan* → *Menyimpan…* → *Tersimpan* → *Gagal simpan*.
- **Simpan** dan **Publish**.

## Alat lain (⋯)

| Menu | Fungsinya |
| --- | --- |
| **SEO & Tampilan** | Title, description, keywords, OG image, favicon, thumbnail. [Detail](/editor/page-seo) |
| **Riwayat versi** | Snapshot halaman, bisa dikembalikan. [Detail](/editor/history) |
| **Submissions** | Isian form yang masuk dari halaman ini |
| **Simpan sebagai template** | Jadikan halaman ini template yang bisa dipakai ulang |
| **Unduh ZIP (html/css/js)** | Ekspor halaman sebagai berkas |
| **Pintasan keyboard** | Daftar shortcut |

## Menyimpan

- **Simpan** (<kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>S</kbd>) menyimpan draf. Belum tayang.
- **Publish** menyimpan **dan** menerbitkan.

Halaman yang sudah terbit tetap perlu di-**Publish** ulang setelah diubah — kalau cuma **Simpan**, pengunjung masih melihat versi lama. Lihat [Terbitkan halaman](/editor/publishing).

## Halaman website vs landing page

Kalau halaman ini bagian dari website dan website-nya punya [shell](/website/header-footer), editor menampilkan catatan:

> Header & footer dipakai bersama dari shell website. Di sini kamu edit kontennya saja.

Tombol **Edit shell** di sebelahnya membawa kamu ke editor header & footer. Preview tetap menampilkan halaman **dengan shell**-nya, jadi yang kamu lihat sama dengan yang dilihat pengunjung.

Landing page nggak punya shell — semuanya, dari header sampai footer, ada di halaman itu.

## Mode lihat saja

Kalau aksesmu ke halaman ini cuma **viewer**, toolbar menampilkan pil **Mode lihat**, dan semua kontrol pengeditan dimatikan. Kamu tetap bisa melihat, membuka preview, dan berpindah halaman.

## Pintasan keyboard

| Pintasan | Aksi |
| --- | --- |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>S</kbd> | Simpan |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>C</kbd> / <kbd>X</kbd> / <kbd>V</kbd> | Salin / potong / tempel elemen |
| <kbd>Delete</kbd> | Hapus elemen terpilih |

Pintasan elemen cuma berlaku di **mode Visual**. Daftar lengkapnya ada di ⋯ → **Pintasan keyboard**.
