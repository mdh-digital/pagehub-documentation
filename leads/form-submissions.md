# Form masuk

Tiap form di halaman yang sudah terbit otomatis menyimpan isiannya. Nggak perlu menyambungkan apa pun.

## Membuat form

Dua cara:

- **Blok Form** dari [palet blok](/editor/blocks) di mode visual.
- Minta AI: *"tambahin form kontak: nama, email, pesan"* lewat [chat AI](/editor/ai-chat).

Lalu atur field-nya di panel properti: **Tambah Input** atau **Area teks**, isi label, tipe, dan centang **Wajib diisi** kalau perlu.

<Shot src="/img/leads/form-fields.webp">
Panel properti untuk elemen form: daftar field dengan nama, tipe, dan centang wajib; tombol "Input" dan "Area teks" untuk menambah field baru.
</Shot>

## Kolom "Name" menentukan nama datanya

Tiap field punya atribut **Name (kunci data)**. Itulah nama kolom yang muncul di daftar lead.

Pilih yang deskriptif — `email`, `nomor_hp`, `pesan` — bukan `field1`. Field tanpa `name` isiannya **nggak tersimpan**.

## Cuma jalan di halaman terbit

Form di halaman draf nggak menyimpan apa pun. Untuk menguji tampilannya, pakai **Kirim contoh** di panel Submissions di editor (⋯ → **Submissions**).

## Ke mana leadnya masuk

| Tempat | Isinya |
| --- | --- |
| **Leads** di sidebar | Semua lead dari seluruh workspace aktif |
| Tab **Leads** di sebuah website | Lead dari website itu saja |
| Tab **Leads** di sebuah landing page | Lead dari landing page itu saja |
| ⋯ → **Submissions** di editor | Lead dari halaman yang sedang dibuka |

<Shot src="/img/leads/inbox.webp" wide>
Halaman Leads: pemilih sumber di atas, kolom "Kontak Awal" berisi kartu-kartu lead baru dengan nama, kontak, dan umur; kolom-kolom stage di sebelahnya.
</Shot>

## Kontak Awal

Lead baru selalu mendarat di **Kontak Awal**. Ini bukan sebuah stage — ini tempat isian yang belum disentuh siapa pun.

Karena bukan stage, dia nggak bisa diganti nama atau dihapus, dan selalu berada paling depan. Geser sebuah kartu ke stage mana pun untuk mulai menggarapnya.

Selanjutnya: [Pipeline kanban](/leads/pipeline).

## Isi sebuah lead

Klik kartunya untuk membuka detail: **Isian form** lengkap (semua field beserta nilainya), **Stage**, **Penanggung jawab**, dan **Catatan**.

## Menghapus

Lead bisa dihapus satu per satu. Nggak bisa dibatalkan.

## Menguji form baru

1. Terbitkan halamannya.
2. Buka alamat publiknya di browser biasa.
3. Isi form dan kirim.
4. Cek **Leads** — isian itu harus muncul di Kontak Awal.

Kalau nggak muncul, periksa: halamannya sudah terbit? tiap field punya `name`? formnya bukan form checkout toko (form checkout sengaja nggak dicatat sebagai lead)?

## Anti-spam

Pengiriman form dibatasi per alamat IP, dan ukuran isian dibatasi. Kalau ada satu sumber yang mengganggu terus-menerus, blokir IP-nya lewat **Block List** di sidebar.
