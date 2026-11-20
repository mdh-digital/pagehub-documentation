# Kartu produk & blok toko

Blok toko menampilkan produk di halaman mana pun: beranda, landing page, atau artikel. Kamu memilih **produk mana** yang tampil dan **seperti apa kartunya**, dan server mengisi harga serta stoknya setiap halaman dibuka.

## Blok toko di editor

Begitu toko dinyalakan, grup **Toko** muncul di [palet blok](/editor/blocks). Tidak perlu membuat apa pun dulu.

<Shot src="/img/commerce/shop-blocks.webp">
Grup Toko di palet blok editor: Produk unggulan, Produk terlaris, Produk terbaru, Produk pilihan, Produk per kategori, Satu produk, dan Tombol beli.
</Shot>

| Blok | Yang ditampilkan |
| --- | --- |
| **Produk unggulan / terlaris / terbaru** | Daftar yang dipilihkan otomatis dari katalog |
| **Produk pilihan** | Produk yang kamu pilih sendiri, dalam urutan pilihanmu |
| **Produk per kategori** | Semua produk dari satu kategori |
| **Satu produk** | Satu produk lengkap dengan pilihan varian dan tombol beli |
| **Tombol beli** | Hanya tombol untuk satu produk |

## Mengatur blok

Klik blok toko di kanvas. Pengaturannya terbuka di tab **Atribut**.

<Shot src="/img/commerce/shop-block-panel.webp">
Panel blok toko di tab Atribut: pilihan sumber produk, tombol memilih produk, pilihan kartu, tata letak (grid, daftar, carousel), jumlah kolom per ukuran layar, batas jumlah produk, dan centang bagian yang ditampilkan.
</Shot>

Yang bisa diatur:

- **Produk**: sumbernya, kategori, atau produk pilihanmu lewat jendela pencarian.
- **Kartu**: desain kartu dari perpustakaan.
- **Tata letak**: grid, daftar, atau carousel.
- **Kolom**: jumlah kolom untuk desktop, tablet, dan ponsel.
- **Batas**: berapa produk yang tampil.
- **Bagian yang ditampilkan**: harga, tombol keranjang, kategori, deskripsi, stok.

Di editor, blok tampil sebagai penanda. Produk aslinya muncul di pratinjau dan di halaman yang terbit.

## Tombol beli menyesuaikan produknya

- Produk dengan satu varian langsung masuk keranjang.
- Produk bervarian mengarahkan pembeli untuk memilih varian dulu.
- Produk yang habis menampilkan tombol mati.

## Desain toko

**Websites → (pilih website) → tab Commerce → Desain toko** mengatur tampilan semua kartu dari satu tempat.

<Shot src="/img/commerce/shop-design.webp" wide>
Halaman Desain toko: bagian Gaya toko dengan pemilih warna tombol, latar kartu, rasio gambar, radius, jarak, dan bayangan; di bawahnya perpustakaan kartu berisi pratinjau tiap kartu dengan produk asli toko.
</Shot>

### Gaya toko

Warna tombol dan teksnya, warna badge habis, latar kartu, rasio gambar, radius sudut, jarak, dan bayangan. Satu setelan berlaku ke semua kartu. Warna yang dikosongkan mengikuti warna situsmu.

### Perpustakaan kartu

| Sumber | Isinya |
| --- | --- |
| **Bawaan** | Klasik, Minimal, Overlay, Horizontal, Ringkas, Produk sorotan, Tombol beli |
| **Desain situs** | Kartu dari halaman toko yang disusun AI untuk situsmu, kalau ada |
| **Kustom** | Kartu buatanmu sendiri |

Semua pratinjau memakai produk asli tokomu.

### Kartu kustom

**Kartu baru** membuka editor kartu dengan mode visual dan mode kode, serta pratinjau memakai produk asli. Kartu yang dihapus tidak merusak halaman: blok yang memakainya kembali ke kartu bawaan.

## Harga dan stok selalu terkini

Kartu tidak menyimpan harga. Setiap halaman dibuka, isinya diambil dari katalog, jadi perubahan harga atau stok langsung terlihat di semua halaman yang memuat blok itu.

Kalau toko ditutup atau belum ada produk, blok tidak menampilkan apa pun.
