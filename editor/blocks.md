# Palet blok

Panel **Blok** di sisi kiri editor berisi potongan halaman siap pakai. Ada dua sumber: blok bawaan, dan blok yang **diturunkan AI dari desain halamanmu sendiri**.

<Shot src="/img/editor/blocks-panel.webp">
Tab Blok di panel kanan editor (di sebelah tab Atribut): bagian "Blok simpananmu" berisi form dan blok toko (Produk unggulan, Produk terlaris, Satu produk, Tombol beli, dll.) dengan tombol "Susun ulang blok", lalu lipatan "Blok bawaan" berisi kelompok Tata letak dan seterusnya.
</Shot>

## Blok bawaan

| Kelompok | Isinya |
| --- | --- |
| **Dasar** | Heading, Teks, Tombol, Gambar |
| **Tata letak** | Container, 2 kolom, 3 kolom, 4 kolom, Konten + sidebar |
| **Bagian siap pakai** | Hero, Fitur, Harga, Testimoni, FAQ, Ajakan bertindak, Form |

Klik untuk menyisipkan ke dalam elemen terpilih, atau seret ke kanvas.

Masalahnya: blok bawaan tampilannya generik. Ditempel ke halaman yang desainnya kuat, dia kelihatan seperti tambalan.

Dua blok bekerja berbeda dari yang lain. Blok **Form** membuka pemilih form; lihat [Form builder](/leads/form-builder). Saat toko menyala, grup **Toko** ikut muncul di palet; lihat [Kartu produk & blok toko](/commerce/product-cards).

## Blok dari desain halaman ini

Karena itu ada **Blok desain ini**. Klik **Sesuaikan desainku**, dan AI membaca desain halaman yang sedang kamu buka — warnanya, jaraknya, bentuk tombolnya, gaya kartunya — lalu menyusun ulang seluruh set blok dengan gaya itu.

Hasilnya: hero, form, harga, dan lainnya yang kelihatan memang bagian dari halaman itu sejak awal.

| Tombol | Kapan dipakai |
| --- | --- |
| **Sesuaikan desainku** | Pertama kali menurunkan blok dari desain halaman |
| **Susun ulang blok** | Setelah kamu mengubah CSS atau HTML halaman secara besar |
| **Pakai bawaan** | Balik ke blok generik |

::: warning Susun ulang mengganti set yang lama
Set blok yang sudah ada diganti, bukan ditambahi. Blok yang **kamu simpan sendiri** ("Blok simpananmu") nggak ikut terhapus.
:::

Kalau halamannya masih kosong, tombolnya nggak jalan — nggak ada desain untuk dipelajari. Isi dulu kontennya.

### Otomatis setelah build AI

Website yang dibuat lewat build AI **langsung mendapat set blok desainnya sendiri**. Bloknya disusun di akhir proses build, jadi saat editor dibuka panel Blok sudah terisi dan kamu tidak perlu menekan apa pun. Pemakaian kreditnya sudah termasuk di perkiraan build.

Tombol **Susun ulang blok** tetap ada untuk dipakai setelah desain berubah besar.

## Ruang lingkup: website vs landing page

Bagian ini menjelaskan kenapa hasilnya bisa terasa berbeda antara keduanya:

| | Website | Landing page |
| --- | --- | --- |
| Set blok disimpan di | Website (dipakai semua halamannya) | Halaman itu sendiri |
| CSS blok baru masuk ke | Stylesheet global website, di segmen bertanda | Ditanam sekali waktu blok disisipkan |

Artinya untuk website, sekali menyusun blok, semua halaman di situs itu kebagian. Untuk landing page, tiap halaman punya setnya sendiri — konsisten dengan sifat landing page yang memang berdiri sendiri.

## Kredit AI

Menyusun blok dari desain memakai [kredit AI](/ai/credits). Sekali susun untuk satu website biasanya cukup — kamu baru perlu menyusun ulang kalau desainnya berubah besar.

## Blok simpananmu

Selain blok bawaan dan blok desain, kamu bisa menyimpan elemen apa pun jadi blok:

1. Pilih elemennya di [mode visual](/editor/visual-mode).
2. Klik **Simpan jadi blok**.
3. Beri **Nama blok** dan pilih **Ikon**.

Blok itu muncul di kelompok **Blok simpananmu** dan siap dipakai ulang.

## Bahasa label

Label blok mengikuti bahasa yang aktif di aplikasi waktu blok itu disusun. Kalau kamu berganti bahasa dan mau labelnya ikut, susun ulang blok-nya.
