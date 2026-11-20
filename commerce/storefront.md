# Halaman toko

Storefront adalah halaman toko publik: daftar produk, halaman detail produk, keranjang, dan checkout.

Yang membedakannya dari toko online biasa: **AI menulis templatenya dalam desain website kamu**, dan **server yang mengisi katalognya saat halaman dibuka**. Jadi tampilannya nyatu dengan situsmu, sementara harga dan stok nggak pernah basi.

## Halaman toko bawaan

Begitu toko dinyalakan, halaman **daftar produk, detail produk, keranjang, dan checkout langsung tersedia** dengan tampilan bawaan yang mengikuti warna dan huruf situsmu. Kamu tidak perlu menunggu AI untuk mulai menerima pesanan.

Tampilan bawaan itu dipakai selama sebuah template belum punya versi sendiri. Begitu AI menyusun halaman toko, atau kamu menyuntingnya lewat **Sesuaikan**, versi itulah yang tampil.

## Membuat halaman toko

**Websites → (pilih website) → tab Commerce → Halaman toko** → **Buat halaman toko**.

<Shot src="/img/commerce/storefront.webp">
Tab Commerce di halaman website, "Toko di situs ini": kartu Halaman toko dengan sakelar "Toko aktif", tautan toko yang sudah tayang, daftar template (Halaman toko, Halaman produk, Keranjang, Checkout, Strip produk) yang sudah dibuat, sakelar "Tampilkan keranjang di menu situs", serta tombol "Susun ulang halaman toko" dan "Custom halaman". Di bawahnya kartu "Produk di situs ini".
</Shot>

AI membaca desain website ini lalu menyusun:

| Template | Isinya |
| --- | --- |
| **Halaman toko** | Daftar produk dengan filter kategori |
| **Halaman produk** | Detail satu produk: galeri, varian, harga, tombol beli |
| **Keranjang** | Isi keranjang pembeli |
| **Checkout** | Form data pembeli dan konfirmasi pesanan |
| **Strip produk** | Blok produk yang bisa ditaruh di halaman mana pun |

Ini memakai [kredit AI](/ai/credits).

## Alamat

```
https://<workspace>.pagehub.id/<website>/products
https://<workspace>.pagehub.id/<website>/products/<slug-produk>
https://<workspace>.pagehub.id/<website>/cart
https://<workspace>.pagehub.id/<website>/checkout
```

Slug `products`, `cart`, dan `checkout` dipesan sistem — nggak bisa dipakai halaman biasa.

## Data nggak pernah disalin

Template cuma berisi **bingkai**: kerangka HTML plus penanda tempat data harus masuk. Katalog dibaca langsung dari database tiap kali halaman dibuka.

Artinya: kamu ubah harga di Master produk, halaman toko langsung ikut. Nggak ada langkah "publish ulang katalog".

## Susun ulang

**Susun ulang halaman toko** dipakai setelah desain situsmu berubah. Katalogmu nggak tersentuh — yang disusun ulang cuma tampilannya.

## Pemeriksaan kesehatan

Tiap template harus punya penanda tertentu supaya server tahu di mana menaruh nama produk, harga, tombol beli, dan seterusnya. Waktu template disimpan, PageHub memeriksanya:

1. Kekurangan yang bisa diperbaiki otomatis, diperbaiki.
2. Kalau masih kurang, AI diminta memperbaiki sekali lagi secara terarah.
3. Kalau masih ada yang kurang, template tetap tersimpan tapi ditandai **Perlu disusun ulang** di panel ini.

Kalau kamu melihat penanda itu, klik susun ulang untuk template tersebut.

## Keranjang di menu

Centang **Tampilkan keranjang di menu situs** untuk menambahkan tautan keranjang setelah item menu terakhir, mengikuti gaya header website kamu sendiri.

## Membuka & menutup toko

Sakelar **Toko aktif / Toko nonaktif**:

- **Aktif** — halaman produk, keranjang, dan checkout melayani; keranjang muncul di menu.
- **Nonaktif** — halaman yang sudah dibuat tetap tersimpan, tapi toko hilang dari situs.

Berguna saat menyiapkan katalog, atau saat libur.

## Strip produk di halaman lain

Template **Strip produk** memungkinkan kamu menaruh deretan produk di halaman mana pun — homepage, landing di dalam website, halaman kampanye.

Ada tiga pilihan isi:

| Pilihan | Isinya |
| --- | --- |
| **featured** | Produk yang ditandai **Produk unggulan** |
| **popular** | Produk paling laku |
| **newest** | Produk terbaru |

Sama seperti halaman toko, isinya diisi server saat halaman dibuka — jadi selalu terkini.

## SEO halaman produk

Halaman produk otomatis mendapat data terstruktur **Product** beserta harganya, dibaca dari katalog yang baru saja merender halaman itu — jadi harga di data terstruktur nggak pernah beda dari harga di layar. Produk juga masuk `sitemap.xml`.

Lihat [Search & AI discovery](/seo/search-and-ai-discovery).
