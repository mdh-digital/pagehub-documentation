---
description: 'Menerima janji temu dari situs: jam buka, layanan, staf, kapasitas per slot, dan daftar jadwal masuk. Halaman booking tampil di dalam desain situsmu.'
---

# Booking (janji temu)

Booking membuat situsmu bisa menerima janji temu: konsultasi, potong rambut, kelas, sewa ruangan. Pengunjung memilih tanggal dan jam yang masih kosong, lalu mengisi nama dan nomor HP.

Pembayaran tidak termasuk. Harga layanan hanya ditampilkan, tidak ditagih.

## Menyalakan

1. Buka **Websites**, pilih websitenya, lalu buka tab **Booking**.
2. Klik **Nyalakan**.

Begitu dinyalakan, booking langsung bisa dipakai dengan jadwal bawaan: Senin–Jumat 09.00–17.00, satu janji 30 menit, satu orang per slot. Ubah sesuai kebutuhanmu di empat bagian di bawah.

Halaman booking tayang di `…/booking` di situsmu, dengan header, footer, dan gaya situs itu. Tombol **Buka halaman booking** membukanya.

## Empat bagian

### Jadwal

Daftar janji temu yang masuk, dengan status **Terjadwal**, **Hadir**, **Tidak hadir**, atau **Dibatalkan**. Tandai hadir atau batalkan dari sini. Membatalkan langsung mengembalikan slotnya, jadi bisa dipesan orang lain.

**Tambah janji temu** untuk mencatat pesanan lewat telepon. Staf boleh mengisi jam di luar jam buka, tapi tidak bisa menimpa slot yang sudah penuh.

### Layanan

Nyalakan **Tawarkan daftar layanan** di Pengaturan kalau pengunjung perlu memilih layanannya. Tiap layanan punya **Durasi**, **Orang per slot**, **Harga** (hanya ditampilkan), dan **Deskripsi**.

### Staf & jam

Tiap orang punya **Jam kerja** per hari, layanan yang **Bisa melayani**, dan **Cuti & libur**. Orang yang belum punya jam kerja belum bisa dipesan.

Nyalakan **Biarkan pengunjung memilih orang** kalau pengunjung boleh memilih stylist atau dokternya. Kalau mati, semua masuk ke satu kalender.

### Pengaturan

| Pengaturan | Gunanya |
| --- | --- |
| **Zona waktu** | Jam buka dibaca di zona ini, termasuk saat pergantian musim panas |
| **Minta jam** | Matikan kalau layanannya seharian; pengunjung cukup memilih tanggal |
| **Cara jam ditawarkan** | Deretan jam mulai, atau jam mulai bebas di dalam jam buka |
| **Lama satu janji** / **Jeda sesudahnya** | Jeda dipakai untuk persiapan dan tidak ditampilkan ke pengunjung |
| **Orang per slot** | 1 untuk janji temu satu-satu, lebih dari 1 untuk kelas |
| **Paling mepet** / **Paling jauh** | Rentang waktu orang boleh memesan |
| **Pengantar** / **Pesan setelah memesan** | Teks di halaman booking |

## Blok booking di halaman lain

Form booking juga bisa ditaruh di halaman mana pun lewat palet blok di editor. Bloknya baru muncul di palet setelah booking siap dipakai (sudah nyala dan ada jam kerja).

## Tabrakan jadwal

Dua orang tidak bisa memesan slot yang sama, walaupun memesan di detik yang sama. Untuk kelas dengan beberapa kursi, pemesanan berhenti tepat saat kursinya habis.
