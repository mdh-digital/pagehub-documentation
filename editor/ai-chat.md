# Chat AI

Mode **AI** di editor adalah percakapan tentang halaman yang sedang kamu buka. Kamu minta, AI mengubah, hasilnya masuk ke halaman.

<Shot src="/img/editor/ai-chat.webp" wide>
Mode AI: panel chat di sisi kiri berisi riwayat percakapan (permintaan pengguna dan balasan AI dengan jumlah token), kotak tulis di bawah dengan tombol lampirkan gambar dan Kirim; preview halaman di sisi kanan.
</Shot>

## Cara memakai

Tulis permintaan, tekan <kbd>Enter</kbd> (<kbd>Shift</kbd>+<kbd>Enter</kbd> untuk baris baru). Contoh yang bagus:

- `ganti warna jadi hijau`
- `ga usah pake navbar`
- `tambahin section testimoni 3 kolom di bawah harga`
- `tulisan di hero kepanjangan, potong jadi satu kalimat`
- `bikin tombolnya lebih besar dan bulat`

AI **ingat percakapan sebelumnya** di halaman ini. Jadi setelah "ganti warna jadi hijau", kamu bisa langsung bilang "kurang gelap" tanpa mengulang konteks.

## Lampiran

Tombol klip memungkinkan kamu melampirkan:

- **Gambar** — AI melihatnya. Berguna buat "bikin hero mirip contoh ini" atau "pakai skema warna dari gambar ini". Ketersediaan tergantung penyedia AI yang dipakai; kalau tombolnya nggak ada, berarti mode ini nggak tersedia di pemasanganmu.
- **File** — otomatis disimpan ke folder media halaman ini.

Kamu juga bisa langsung menempel gambar dari clipboard ke kotak tulis.

## Bangun interaktif

Untuk perubahan besar — menyusun ulang seluruh halaman — pakai **Bangun interaktif** di atas panel chat. Alurnya beda: AI **nanya dulu**, bikin **rencana**, baru menyusun **per bagian**.

Lihat [Cara AI menyusun halaman](/ai/how-generation-works).

## Menerapkan & membatalkan

Perubahan dari chat masuk ke editor dan bisa langsung kamu lihat di preview. Kalau hasilnya nggak sesuai:

- **Undo perubahan terakhir** di panel chat, atau
- <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Z</kbd> di editor, atau
- ambil versi lama dari [Riwayat versi](/editor/history).

Selama AI masih menulis, ada tombol **Stop** buat menghentikannya di tengah jalan.

## Token & kredit

Tiap balasan AI menampilkan pemakaian tokennya (`1.240 token · 820 in · 420 out`). Angka itu yang jadi dasar pemotongan [kredit AI](/ai/credits).

Cara ngirit tanpa mengurangi kualitas:

- **Satu permintaan, satu maksud.** "Ganti warna jadi hijau lalu tambah section FAQ lalu perbaiki footer" lebih mahal dan lebih sering meleset daripada tiga permintaan terpisah.
- **Sebut bagiannya.** "Di section harga, ..." lebih murah daripada membiarkan AI menebak.
- **Chat baru untuk topik baru.** Riwayat panjang ikut dikirim tiap giliran.

## Chat baru

**Chat baru (hapus riwayat)** mengosongkan percakapan halaman ini. Halamannya sendiri nggak berubah — cuma ingatannya yang direset.

Riwayat chat per halaman disimpan terbatas (sekitar 40 pesan terakhir); yang lebih lama dibuang otomatis.

## Mode lihat saja

Kalau aksesmu viewer, kotak tulis menampilkan *"Mode lihat — tidak bisa mengedit halaman ini"* dan chat dimatikan.
