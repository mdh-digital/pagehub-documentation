# Cara AI menyusun halaman

AI di PageHub nggak langsung menembak satu halaman jadi dari satu kalimat. Dia bekerja bertahap — dan tahapan itu kelihatan di layar, supaya kamu bisa mengoreksi sebelum kredit terpakai untuk hal yang salah.

## Empat tahap

```
1. Pertanyaan  →  2. Rencana  →  3. Desain & shell  →  4. Section satu per satu
```

### 1. Pertanyaan

AI membaca idemu, lalu menuntunmu lewat beberapa pertanyaan pilihan — satu pertanyaan per layar, dengan penghitung langkah di atasnya: kesan visual apa yang diinginkan, warna aksennya, gaya hurufnya, section apa saja yang perlu ada.

<Shot src="/img/ai/build-questions.webp">
Satu pertanyaan dari wizard: penghitung "Langkah 2 dari 7" di atas, pertanyaan yang disusun AI untuk idemu (di sini soal tema warna), lalu kartu-kartu pilihan bergambar pratinjau — dengan "Pilihkan saja" sebagai kartu pertama.
</Shot>

Nggak mau mikir? Tiap pertanyaan punya **Pilihkan saja** — AI yang memutuskan, dan pilihannya ditandai supaya kamu tahu mana yang bukan pilihanmu.

### 2. Rencana

Dari jawabanmu, AI menyusun daftar section yang bakal dibuat, lengkap dengan nama dan ringkasannya.

<Shot src="/img/ai/build-plan.webp">
Layar "Rencana — ini yang bakal dibuat": nama website di bawah judul, chip-chip jawabanmu (bisa diklik untuk mengubah), lalu daftar section bernomor — masing-masing dengan judul, satu kalimat isi, dan tombol buang — perkiraan pemakaian kredit beserta sisa kreditmu, dan tombol "Mulai bikin".
</Shot>

Di sini kamu masih bisa ikut campur: ganti nama section, atau buang yang nggak perlu. Di bawahnya ada **perkiraan pemakaian kredit** dan sisa kreditmu — kalau kurang, ada peringatan sebelum mulai.

### 3. Desain & shell

AI menentukan arah desain sekali di depan — palet warna, tipografi, jarak, gaya tombol — lalu menyusun header & footer (untuk website).

Keputusan desain ini dipakai ulang untuk semua section berikutnya. Itulah sebabnya hasilnya terasa satu kesatuan, bukan tempelan.

### 4. Section satu per satu

Tiap section ditulis terpisah. Layarnya menunjukkan tahap yang sedang berjalan dan nomor section keberapa dari berapa, jadi kamu tahu prosesnya sampai di mana.

<Shot src="/img/ai/build-progress.webp" wide>
Layar progres: nama tahap yang sedang berjalan ("Menyusun struktur"), bilah kemajuan, nama website dan penghitung langkah ("1 dari 9"), catatan bahwa prosesnya boleh ditinggal, serta tautan "Ke halaman Websites" dan "Batal".
</Shot>

Tahapnya dilabeli: *Mulai menyiapkan* → *Memilih tampilan* → *Menyusun struktur* → *Menulis isi* → *Merapikan*.

## Toko dan blok ikut disiapkan

Untuk website, layar rencana punya kartu **Pakai toko online**. Kalau dicentang, situsnya langsung punya toko: halaman produk, detail produk, keranjang, dan checkout tersedia begitu build selesai.

Di akhir build, [blok desain](/editor/blocks) untuk situs itu juga disusun otomatis, jadi panel Blok di editor sudah berisi blok yang cocok dengan desainnya.

## Boleh ditinggal

Proses ini berjalan di server, bukan di browser. Kamu boleh menutup tab dan balik lagi nanti — pekerjaannya jalan terus. Kalau ada build yang belum selesai, PageHub menawarkan **Lanjutkan yang tadi?** waktu kamu membuka layar itu lagi.

## Kalau kredit habis di tengah

Build **dijeda**, bukan dibatalkan.

> Build dijeda — kredit AI habis. Progres yang sudah jadi tersimpan. Top-up kredit lalu lanjutkan — build meneruskan dari step terakhir, bukan mulai dari nol.

Setelah top-up, klik **Lanjutkan**. Section yang sudah jadi nggak dibuat ulang, jadi kredit nggak terbuang dua kali.

## Membatalkan

Tombol **Batalkan** ada di tiap tahap. Kalau dibatalkan sebelum mulai, jawabanmu dibuang. Kalau dibatalkan di tengah pembuatan, section yang sudah jadi ikut dibuang — PageHub minta konfirmasi dulu.

## Setelah selesai

Kamu mendarat di [editor](/editor/overview). Dari sini semuanya biasa: rapikan di [visual](/editor/visual-mode), ubah di [kode](/editor/code-mode), atau minta revisi lewat [chat AI](/editor/ai-chat).

## Mode chat vs bangun interaktif

| | Chat AI | Bangun interaktif |
| --- | --- | --- |
| Cocok untuk | Revisi dan perubahan sepotong | Membuat atau merombak seluruh halaman |
| Alurnya | Satu permintaan, satu jawaban | Pertanyaan → rencana → per-section |
| Ingat konteks | Ya, riwayat percakapan | Nggak perlu — semuanya dari jawabanmu |
| Bisa dijeda & dilanjut | Nggak | Ya |

Tombol **Bangun interaktif** ada di atas panel chat AI di editor.
