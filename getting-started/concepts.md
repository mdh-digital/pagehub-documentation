# Konsep dasar

Sepuluh menit di halaman ini bakal ngirit banyak waktu nanti. Hampir semua kebingungan di PageHub berasal dari satu hal: nggak tahu apa yang "milik" siapa.

## Susunannya

```
Organisasi          ← akun langganan kamu (paket, kuota, tagihan)
 ├── Anggota        ← orang-orang yang kerja di akun ini
 ├── Workspace      ← wadah per klien / per proyek
 │    ├── Website   ← kumpulan halaman, satu tema, satu menu
 │    │    └── Halaman
 │    ├── Landing page
 │    └── Media
 └── Paket & kuota
```

### Organisasi

Organisasi adalah **akun langganan**. Dia yang punya paket, kuota, dan riwayat tagihan — bukan kamu sebagai pribadi. Semua website, halaman, dan media dimiliki organisasi, jadi kalau ada anggota yang keluar, isinya tetap di tempat.

Satu user bisa ikut di lebih dari satu organisasi (misal: agensi tempat kamu kerja + akun pribadi). Pindah organisasi lewat menu akun di sidebar bawah.

### Workspace

Workspace adalah **wadah per klien atau per proyek** di dalam satu organisasi. Website, landing page, dan media hidup di dalam satu workspace, dan tiap workspace punya **alamat publik**-nya sendiri.

Ini juga yang menentukan siapa lihat apa: anggota yang dikasih akses ke satu workspace cuma lihat isi workspace itu. Detail: [Workspace](/team/workspaces).

### Website vs Landing page

|  | Website | Landing page |
| --- | --- | --- |
| Jumlah halaman | Banyak | Satu |
| Header & footer | Dipakai bersama (shell) | Nempel di halaman itu sendiri |
| Tema & CSS | Global untuk seluruh situs | Sendiri-sendiri |
| Menu navigasi | Ada | Nggak ada |
| Modul blog & toko | Bisa | Nggak |
| Cocok buat | Situs yang bertahan lama | Kampanye yang datang dan pergi |

Di balik layar keduanya barang yang sama — "halaman". Landing page cuma halaman yang nggak nempel ke website mana pun.

### Halaman

Isi halaman disimpan sebagai **HTML**. Itu sumber kebenarannya. Konsekuensinya menyenangkan: apa pun yang kamu lakukan — nyeret blok di mode visual, ngetik di mode kode, atau minta AI ngubah sesuatu — ujungnya nulis HTML yang sama. Nggak ada format rahasia yang bikin kamu terkunci.

Karena itu editor punya tiga mode yang saling mengisi: [Visual](/editor/visual-mode), [Kode](/editor/code-mode), dan [Chat AI](/editor/ai-chat).

### Shell: header & footer

Di dalam website, header dan footer disimpan **sekali** di level website (namanya *shell*), bukan diulang di tiap halaman. Tiap halaman cuma nyimpen kontennya. Waktu pengunjung buka halaman, PageHub nyusunnya jadi satu: header + konten + footer.

Efeknya: ganti logo di header = kelar buat 30 halaman sekaligus. Lihat [Header & footer](/website/header-footer).

## Draf vs terbit

Tiap halaman punya dua status:

- **Draf** — cuma kelihatan sama kamu dan tim. Aman buat dikerjain berhari-hari.
- **Terbit** — bisa dibuka siapa pun yang punya alamatnya.

Mau nunjukin draf ke klien tanpa nerbitin? Pakai **tautan berbagi** (tab Sharing) — link rahasia yang bisa dibuka tanpa login dan tetap nampilin draf. Lihat [Terbitkan halaman](/editor/publishing).

## Alamat publik

Alamat situsmu dibentuk dari **workspace** + **website** + **halaman**:

```
https://<workspace>.pagehub.id/<website>/<halaman>
https://<workspace>.pagehub.id/<website>          ← homepage website
https://<workspace>.pagehub.id/p/<landing-page>   ← landing page
```

Di sebagian pemasangan, alamatnya berbentuk jalur, bukan subdomain:

```
https://app.pagehub.id/w/<workspace>/<website>/<halaman>
```

Dua-duanya nunjuk ke isi yang sama. Kalau website-nya sudah punya [domain kustom](/website/custom-domain) yang terverifikasi, alamatnya jadi lebih pendek lagi:

```
https://domainkamu.com/<halaman>
```

::: warning Alamat lama /s/ dan /p/
Situs yang dibuat sebelum alamat berbasis workspace tetap bisa dibuka lewat alamat lama — otomatis dialihkan (301) ke alamat barunya. Tautan lama yang sudah tersebar nggak akan mati, tapi pakai alamat baru buat apa pun yang kamu sebar mulai sekarang.
:::

## Kuota & kredit AI

Paket kamu menentukan dua hal berbeda yang sering ketuker:

- **Kuota** — berapa banyak website, landing page, workspace, anggota, dan penyimpanan yang boleh ada. Ini batas *jumlah*, dicek tiap kali kamu bikin sesuatu.
- **Kredit AI** — jatah pemakaian AI. Tiap generate halaman, revisi lewat chat, atau bikin artikel motong kredit sesuai panjang yang diproses.

Detail: [Paket & kuota](/account/plans-and-quota) dan [Kredit AI](/ai/credits).

## Peran

| Peran | Bisa apa |
| --- | --- |
| **Owner / Admin organisasi** | Semua. Termasuk tagihan, anggota, workspace, brand |
| **Member** | Cuma workspace & website yang di-assign ke dia |
| **Editor** (per website/workspace) | Lihat dan ubah |
| **Viewer** (per website/workspace) | Cuma lihat — editor terbuka dalam mode lihat saja |

Akses itu **aditif**: seseorang lihat gabungan dari apa yang di-assign per-item **dan** apa yang ada di workspace-nya. Detail: [Anggota & akses](/team/members-and-access).
