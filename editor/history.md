# Riwayat & undo

Ada tiga jaring pengaman berbeda, dan masing-masing menyelamatkan hal yang berbeda.

## 1. Undo / Redo

Untuk kesalahan yang baru saja terjadi.

| Pintasan | Aksi |
| --- | --- |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Z</kbd> | Undo |
| <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> | Redo |

Tombolnya juga ada di toolbar. Berlaku untuk suntingan di sesi editor yang sedang berjalan — termasuk perubahan yang datang dari [chat AI](/editor/ai-chat).

Tutup editor, riwayat undo hilang.

## 2. Undo perubahan AI

Di panel chat AI ada **Undo perubahan terakhir** — mengembalikan halaman ke keadaan sebelum balasan AI yang terakhir diterapkan. Berguna kalau satu permintaan mengubah lebih banyak hal daripada yang kamu maksud.

## 3. Riwayat versi

Untuk "kemarin masih bagus, hari ini kacau".

Buka ⋯ → **Riwayat versi**.

<Shot src="/img/editor/version-history.webp">
Panel Riwayat versi: daftar snapshot dengan tanggal dan jam, tombol Restore di tiap baris, dan tombol "Simpan versi" di bagian atas.
</Shot>

### Kapan snapshot dibuat

Dua saat:

1. **Setiap kali kamu Publish.**
2. **Waktu kamu klik "Simpan versi"** sendiri.

Menyimpan draf biasa (**Simpan**) **tidak** membuat snapshot. Jadi kalau kamu mau bereksperimen habis-habisan, klik **Simpan versi** dulu sebagai titik balik.

### Mengembalikan

Klik **Restore** di versi yang kamu mau. Isi halaman kembali ke versi itu.

Yang perlu diingat:

- Restore mengubah **draf** halaman. Supaya pengunjung ikut melihatnya, kamu tetap perlu **Publish**.
- Restore juga bisa di-undo (<kbd>Ctrl</kbd>+<kbd>Z</kbd>) selama editor belum ditutup.

### Retensi

PageHub menyimpan sekitar **50 versi terakhir per halaman**. Yang lebih tua dibuang otomatis untuk memberi tempat versi baru.

## Kalau halamannya sudah terlanjur terhapus

Riwayat versi ada di dalam halaman, jadi menghapus halaman ikut menghapus riwayatnya. Untuk hal-hal yang benar-benar nggak boleh hilang:

- **Unduh ZIP** dari ⋯ menyimpan salinan halaman ke komputermu.
- **Jadikan template** menyimpan seluruh website sebagai [template](/website/website-templates) yang berdiri terpisah dari website aslinya.
