# Terbitkan halaman

## Draf vs terbit

| Status | Siapa yang bisa lihat |
| --- | --- |
| **Draf** | Kamu dan tim, di dalam PageHub |
| **Terbit** | Siapa pun yang punya alamatnya |

Halaman baru selalu mulai sebagai draf.

## Menerbitkan

Di editor, klik **Publish**. Halaman disimpan **dan** langsung tayang.

Setelah terbit, toolbar berubah:

- **Salin URL** — menyalin alamat publik halaman.
- **Buka situs** — membukanya di tab baru.
- **Unpublish** — menariknya kembali jadi draf.

<Shot src="/img/editor/publish-toolbar.webp">
Toolbar editor pada halaman yang sudah terbit: badge Terbit di sebelah judul, tombol Salin URL, Buka situs, dan Unpublish menggantikan tombol Publish.
</Shot>

::: warning Menyimpan bukan menerbitkan
Halaman terbit yang kamu ubah lalu cuma **Simpan** akan tetap menampilkan versi lama ke pengunjung. Klik **Publish** lagi supaya perubahannya tayang.
:::

## Alamat publik

```
https://<workspace>.pagehub.id/<website>/<slug-halaman>
https://<workspace>.pagehub.id/<website>            ← homepage
https://<workspace>.pagehub.id/p/<slug>             ← landing page
```

Kalau website-nya punya [domain kustom](/website/custom-domain) aktif:

```
https://domainkamu.com/<slug-halaman>
```

Halaman **teratas** di daftar halaman jadi homepage — dialah yang tampil kalau orang membuka alamat website tanpa menyebut halaman.

Slug harus unik di dalam satu website. Slug `blog`, `invoices`, `products`, `cart`, `checkout`, dan `p` dipesan sistem.

## Membatalkan terbit

**Unpublish** membuat halaman jadi draf lagi. Alamatnya berhenti melayani, dan pengunjung yang membukanya mendapat 404. Isi halaman tetap utuh — kamu bisa menerbitkannya lagi kapan saja.

Bisa juga dari daftar halaman: menu ⋯ → **Batalkan terbit**.

## Tautan berbagi (preview tanpa login)

Buat menunjukkan pekerjaan ke klien sebelum tayang. Buka tab **Sharing** di website (atau di landing page).

<Shot src="/img/website/sharing-tab.webp">
Tab Berbagi: kartu "Link preview publik" dengan sakelar aktif, alamat link beserta tombol salin, dan tombol "Ganti link (putus link lama)". Di bawahnya kartu "Undang kolaborator" dengan kolom email dan tombol Bagikan.
</Shot>

Sifat tautan ini:

- **Read-only** — penerima nggak bisa mengubah apa pun.
- **Tanpa login** — cukup punya tautannya.
- **Menampilkan draf** — inilah gunanya.
- **Bisa dicabut** — matikan sakelarnya, atau klik **Ganti link** untuk membuat tautan baru sekaligus mematikan yang lama.

Halaman preview nggak pernah mendapat tag SEO, jadi nggak akan bersaing dengan situs aslinya di mesin pencari.

## Mengundang kolaborator

Masih di tab **Sharing**: masukkan email seseorang, klik **Bagikan**. Mereka masuk dengan akun sendiri, dan website ini muncul di daftar mereka di bagian **Dibagikan ke saya**.

Penerima harus sudah punya akun. Untuk anggota tim internal, cara yang lebih rapi adalah lewat halaman [Tim](/team/members-and-access).

## Setelah terbit

Yang jalan otomatis:

- Halaman masuk ke `sitemap.xml`, dan ke `feed.xml` kalau itu artikel.
- Views mulai dihitung — terlihat di daftar halaman dan di [Laporan](/reports/overview).
- Form di halaman itu mulai menerima isian, masuk ke [Leads](/leads/form-submissions).
- Skrip [tracking](/website/tracking) website mulai dijalankan.

::: info Form cuma jalan di halaman terbit
Form pada halaman draf nggak menyimpan isian. Kalau kamu mau menguji tampilannya, pakai **Kirim contoh** di panel Submissions editor.
:::
