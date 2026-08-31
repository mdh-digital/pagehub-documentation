# Domain kustom

Secara bawaan, situsmu tayang di alamat platform:

```
https://<workspace>.pagehub.id/<website>
```

Dengan domain kustom, ia tayang di domainmu sendiri:

```
https://tokokue.com/
```

Buka **Pengaturan** → bagian **Custom domain**.

::: warning Fitur berbayar
Paket trial belum bisa menghubungkan domain sendiri. Layar ini menampilkan ajakan upgrade sampai paketmu mendukung. Lihat [Paket & kuota](/account/plans-and-quota).
:::

## Langkah pemasangan

### 1. Masukkan domainnya

Ketik domain yang mau dipakai — boleh domain utama (`tokokue.com`) atau subdomain (`www.tokokue.com`, `shop.tokokue.com`) — lalu klik **Lanjut**.

PageHub otomatis memilih metode yang benar:

| Bentuk domain | Metode |
| --- | --- |
| Domain utama / apex (`tokokue.com`) | **A record** ke IP server |
| Subdomain (`www.`, `shop.`) | **CNAME** ke host server |

Kenapa beda: banyak registrar nggak mengizinkan CNAME di apex, jadi apex harus pakai A record.

### 2. Buat record DNS

Layar berikutnya menampilkan daftar record yang perlu kamu buat, lengkap dengan nilainya dan tombol salin.

<Shot src="/img/website/domain-dns.webp">
Bagian Custom domain pada tahap DNS: tabel berisi tiga baris record (Verifikasi kepemilikan TXT, Arahkan trafik A/CNAME, Arahkan www opsional), masing-masing dengan tipe, host, nilai, tombol salin, dan lencana status "Menunggu".
</Shot>

Biasanya ada tiga:

| Record | Gunanya |
| --- | --- |
| **Verifikasi kepemilikan** (TXT) | Membuktikan domain ini memang milikmu |
| **Arahkan trafik** (A atau CNAME) | Mengarahkan pengunjung ke server PageHub |
| **Arahkan www** (opsional) | Supaya `www.` juga sampai ke situs yang sama |

Buka **DNS Management** di penyedia domainmu (Cloudflare, Niagahoster, GoDaddy, Domainesia, dan sejenisnya), buat record-nya persis seperti yang tertulis.

### 3. Cek DNS

Klik **Cek DNS**. Tiap baris dapat lencana status:

| Status | Artinya |
| --- | --- |
| **Terpasang** | Record ditemukan dan nilainya cocok |
| **Menunggu** | Belum kelihatan — propagasi DNS biasanya 5–30 menit |
| **Belum cocok** | Record ada, tapi nilainya beda. Periksa lagi salinannya |
| **Gagal cek** | PageHub nggak bisa membaca DNS saat itu; coba lagi |
| **Perlu setup** | Record ini belum kamu buat |

Kalau semuanya hijau, statusnya berubah jadi **aktif** dan situsmu langsung tayang di domain itu.

## Cloudflare

Kalau DNS-mu di Cloudflare, set record ke **DNS only** (ikon awan **abu-abu**, bukan oranye) saat verifikasi dan penerbitan SSL pertama. Proxy oranye menyembunyikan record aslinya sehingga verifikasi nggak pernah lulus.

## Setelah domain aktif

Beberapa hal berubah otomatis:

- **Alamat platform mengalihkan ke domainmu.** Untuk menghindari satu isi tayang di dua alamat (yang merugikan SEO), alamat `<workspace>.pagehub.id/<website>` mengalihkan permanen (301) ke domain kustommu.
- **Canonical, sitemap, dan feed ikut pindah.** Semua tag canonical, isi `sitemap.xml`, dan baris `Sitemap:` di `robots.txt` menunjuk ke domainmu.
- **`robots.txt` jadi milikmu sepenuhnya**, karena domainnya nggak dipakai bareng siapa pun. Lihat [Search & AI discovery](/seo/search-and-ai-discovery).

## Melepas domain

Tombol **Lepas** memutus domain dari website ini. Situsnya balik tayang di alamat platform. Record DNS di penyedia domainmu perlu kamu hapus sendiri.

## Kalau langganan berhenti

Domain kustom adalah fitur berlangganan. Kalau langgananmu lewat masa tenggang tanpa dibayar, situs berhenti tayang di domain kustom — tapi tetap bisa dibuka lewat alamat platform. Detail: [Kalau langganan berhenti](/account/subscription-lapse).
