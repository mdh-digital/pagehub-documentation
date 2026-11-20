# Halaman toko

Storefront adalah halaman toko publik: daftar produk, halaman detail produk, keranjang, dan checkout.

Yang membedakannya dari toko online biasa: **AI menulis templatenya dalam desain website kamu**, dan **server yang mengisi katalognya saat halaman dibuka**. Jadi tampilannya nyatu dengan situsmu, sementara harga dan stok nggak pernah basi.

## Halaman toko bawaan

Begitu toko dinyalakan, halaman **daftar produk, detail produk, keranjang, dan checkout langsung tersedia** dengan tampilan bawaan yang mengikuti warna dan huruf situsmu. Kamu tidak perlu menunggu AI untuk mulai menerima pesanan.

Tampilan bawaan itu dipakai selama sebuah template belum punya versi sendiri. Begitu AI menyusun halaman toko, atau kamu menyuntingnya lewat **Custom halaman**, versi itulah yang tampil.

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

## Menyesuaikan halaman toko

Halaman toko bisa kamu ubah sendiri seperti halaman biasa, tanpa menyusun ulang semuanya.

1. **Websites** → pilih website → tab **Commerce**.
2. Di kartu Halaman toko, klik **Custom halaman**. Tombol ini ada walaupun AI belum pernah menyusun halaman toko; kamu mulai dari tampilan bawaan.
3. Editor halaman toko terbuka layar penuh. Tab di atasnya memilih template yang disunting: **Etalase** (daftar produk), **Halaman produk**, **Keranjang**, **Checkout**, dan **Strip produk**.
4. Pilih mode: **Code**, **Visual**, atau **AI**. Ketiganya sama dengan [editor halaman](/editor/overview). Di mode AI, tulis perubahan yang kamu mau, misalnya *"Bikin kartu produk dua per baris di HP, harganya diperbesar"*.
5. Pratinjau di samping memakai produk dan header/footer situsmu sendiri. Klik **Simpan**.

Perubahan berlaku per template. Menyunting halaman produk tidak mengubah keranjang atau checkout.

### Mengubah tampilan (CSS)

Ada tiga tempat, pilih sesuai jangkauannya:

| Mau mengubah | Tempatnya |
| --- | --- |
| Satu elemen saja (warna tombol beli, jarak kartu) | Mode **Visual** → klik elemennya → panel kanan tab **Atribut**: grup gaya, atau **CSS kustom** di bagian **Lanjutan** |
| Satu template toko | Mode **Code**: blok `<style>` di dalam template itu. Hanya berlaku di halaman toko tersebut |
| Seluruh situs, termasuk halaman toko | `styles.css` website: buka halaman mana pun di editor → mode **Code** → file **styles.css** di panel file |

Halaman toko memuat `styles.css` website, jadi aturan di sana ikut berlaku. Ubah `styles.css` dengan hati-hati: perubahan di situ menyentuh **semua** halaman.

### Bagian yang tidak boleh dihapus

::: v-pre

Template toko bekerja karena penanda di dalamnya. Kalau penandanya hilang, tombol tetap tampil tapi tidak melakukan apa-apa, atau pesanan masuk tanpa data pembeli. Saat menyunting, jangan menghapus:

- atribut yang diawali `data-shop-` (misalnya `data-shop-add` di tombol tambah ke keranjang, `data-shop-buy`, `data-shop-checkout` di form checkout);
- nama field pembeli di checkout: `customerName`, `customerPhone`, `customerAddress` (juga `customerEmail` dan `note` kalau ada);
- komentar penanda `<!-- EB:… -->` (misalnya `EB:PRODUCTS_START` dan `EB:PRODUCTS_END` yang mengapit satu kartu produk);
- placeholder `{{…}}` seperti `{{NAME}}`, `{{PRICE}}`, `{{URL}}`, `{{IMAGE}}`.

Memindah, membungkus, dan mengganti gayanya bebas. Editor membantu dua cara: di mode Visual, elemen yang membawa penanda wajib **tidak bisa dihapus**, dan panel di samping menyebut apa yang hilang sambil kamu mengetik.

**Checkout ditolak kalau kurang.** Template checkout yang kehilangan field atau penanda wajib **tidak bisa disimpan**; layar menyebut apa yang hilang dan versi lamanya tetap dipakai. Template lain tetap tersimpan, tapi dengan peringatan *"Tersimpan, tapi halaman ini ada yang kurang"*. Betulkan sebelum menyebar tautan tokomu.
:::

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
