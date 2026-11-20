# Daftar screenshot

Dibuat otomatis oleh `npm run shots` — jangan diedit tangan.

Tiap tangkapan diambil per bahasa antarmuka, jadi satu baris di bawah bisa
sudah lengkap di satu bahasa dan belum di bahasa lain.

**Progres per bahasa antarmuka:** id 83/83 · en 83/83 · ar 83/83

Cara mengisi: ambil screenshot sesuai deskripsi dengan antarmuka aplikasi dalam
bahasa yang bersangkutan, simpan ke `public/img/<bahasa>/…`, lalu restart
`npm run dev`. Placeholder-nya otomatis berubah jadi gambar — markdown-nya
tidak perlu disentuh. Bahasa yang belum difoto jatuh ke Inggris, lalu Indonesia.

Saran teknis: lebar 1440px, mode terang, data contoh yang masuk akal (bukan
"asdf"), dan sensor data pribadi/nominal asli. Yang bertanda **lebar** dipakai
melebar melewati kolom teks, jadi ambil layar penuh.

## account

- `/img/account/addons.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `account/add-ons.md`
  - isi: Halaman Add-on: bagian "Pemakaian toko per workspace" berisi bilah produk dan pesanan bulan ini untuk tiap workspace, bagian "Yang kamu punya", kartu-kartu "Kapasitas toko tambahan" (+100 produk dan +500 pesanan per bulan) dengan harga per paket dan tombol Pilih, catatan bahwa paket yang sudah termasuk white label lebih murah daripada membelinya terpisah, lalu "Riwayat pembelian".
- `/img/account/appsumo.webp` ✓id ✓en ✓ar
  - halaman: `account/appsumo.md`
  - isi: Halaman "Lisensi AppSumo": kolom tempel kode dengan tombol Tukar, panduan tiga langkah di bawahnya, dan tabel "Lisensimu" berisi kode, tanggal ditukar, tier, dan status.
- `/img/account/upgrade-plans.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `account/billing.md`
  - isi: Layar Upgrade Paket: sakelar keluarga paket di atas grid (Bulanan, dan White label atau Lifetime kalau tersedia), kartu-kartu paket dengan harga dan daftar kuota (website, halaman, landing, anggota tim, workspace, produk, pesanan, storage, kredit AI/bln), penanda "PAKET KAMU" pada yang aktif, dan panel Ringkasan di kanan berisi paket, durasi, subtotal, pajak, kode voucher, dan total tagihan.
- `/img/account/payment-manual.webp` ✓id ✓en ✓ar
  - halaman: `account/billing.md`
  - isi: Halaman pembayaran transfer manual: pemilih bank tujuan, kolom nama bank pengirim, nomor rekening pengirim, nominal transfer, pengunggah bukti transfer, dan tombol "Kirim bukti transfer".
- `/img/account/billing-hub.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `account/plans-and-quota.md`
  - isi: Hub Billing: kartu-kartu menu — Upgrade Paket, Partner Store, AI Credit, Storage Add-On, Add-on, dan AppSumo (hanya muncul kalau penukaran kode AppSumo dibuka). Kuota paketmu sendiri tampil di kartu paket di Dashboard.
- `/img/account/profile.webp` ✓id ✓en ✓ar
  - halaman: `account/profile.md`
  - isi: Halaman "Profil saya": foto profil dengan tombol Ubah foto dan Hapus foto, kolom Nama dan Email dengan lencana Terverifikasi, kartu Ganti password, dan bagian Akses berisi daftar organisasi beserta peranmu di masing-masing.
- `/img/account/grace-banner.webp` ✓id ✓en ✓ar
  - halaman: `account/subscription-lapse.md`
  - isi: Spanduk merah di atas aplikasi: "Situs kamu tidak tayang dan fitur edit dimatikan", tanggal konten akan dihapus beserta sisa harinya, dan tombol Perpanjang.

## ai

- `/img/ai/credit-balance.webp` ✓id ✓en ✓ar
  - halaman: `ai/credits.md`
  - isi: Halaman AI Credit: tiga kartu angka berisi Kredit dari paket, Kredit top-up, dan Kredit terpakai periode ini; di bawahnya tombol "Beli Kredit" dan tabel riwayat transaksi.
- `/img/ai/build-questions.webp` ✓id ✓en ✓ar
  - halaman: `ai/how-generation-works.md`
  - isi: Satu pertanyaan dari wizard: penghitung "Langkah 2 dari 7" di atas, pertanyaan yang disusun AI untuk idemu (di sini soal tema warna), lalu kartu-kartu pilihan bergambar pratinjau — dengan "Pilihkan saja" sebagai kartu pertama.
- `/img/ai/build-plan.webp` ✓id ✓en ✓ar
  - halaman: `ai/how-generation-works.md`
  - isi: Layar "Rencana — ini yang bakal dibuat": nama website di bawah judul, chip-chip jawabanmu (bisa diklik untuk mengubah), lalu daftar section bernomor — masing-masing dengan judul, satu kalimat isi, dan tombol buang — perkiraan pemakaian kredit beserta sisa kreditmu, dan tombol "Mulai bikin".
- `/img/ai/build-progress.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `ai/how-generation-works.md`
  - isi: Layar progres: nama tahap yang sedang berjalan ("Menyusun struktur"), bilah kemajuan, nama website dan penghitung langkah ("1 dari 9"), catatan bahwa prosesnya boleh ditinggal, serta tautan "Ke halaman Websites" dan "Batal".

## blog

- `/img/blog/blog-inactive.webp` ✓id ✓en ✓ar
  - halaman: `blog/enable-blog.md`
  - isi: Tab Blog dalam keadaan belum aktif: judul "Blog belum aktif", penjelasan bahwa halaman list dan detail artikel akan di-generate mengikuti desain website, dan tombol "Aktifkan Blog".
- `/img/blog/blog-categories.webp` ✓id ✓en ✓ar
  - halaman: `blog/enable-blog.md`
  - isi: Tab Kategori: tabel berisi nama kategori, URL slug-nya, dan jumlah artikel; kolom "Nama kategori baru" dengan tombol Tambah di atas tabel.
- `/img/blog/article-editor.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `blog/write-articles.md`
  - isi: Editor artikel: kolom Judul di atas, editor teks kaya untuk isi artikel di tengah (toolbar dengan heading, tebal/miring, daftar, kutipan, kode, tautan, gambar); panel kanan berisi Publikasi (Terbit / Draf / Terjadwal) dan Kategori. Tombol "Tulis dengan AI", Batal, dan Simpan di kanan atas; kartu SEO ada di bawah isi artikel.
- `/img/blog/blog-schedule.webp` ✓id ✓en ✓ar
  - halaman: `blog/write-articles.md`
  - isi: Tab Jadwal AI: tabel jadwal dengan kolom Jadwal, Progres, Hasil, dan Run berikutnya; tombol "Jadwal baru" di kanan atas. Satu baris menunjukkan status Aktif dengan keterangan "2 artikel setiap 1 minggu".

## commerce

- `/img/commerce/abandoned-carts.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `commerce/abandoned-carts.md`
  - isi: Halaman Abandoned cart: empat kartu statistik (terbuka, jadi order, gagal, nilai tertahan), lalu tabel dengan kolom Pengunjung, Halaman, Terisi, Nilai, PJ, dan Terakhir; filter status dan kotak pencarian di atas.
- `/img/commerce/categories.webp` ✓id ✓en ✓ar
  - halaman: `commerce/categories-and-variants.md`
  - isi: Halaman Kategori produk: tabel berisi kolom Ikon, Nama, dan jumlah Produk; tombol "Tambah kategori" di kanan atas dan kotak pencarian.
- `/img/commerce/variants.webp` ✓id ✓en ✓ar
  - halaman: `commerce/categories-and-variants.md`
  - isi: Halaman Master variants: daftar varian dengan nama (Warna, Ukuran) dan chip-chip pilihan di bawahnya (Merah, Biru, Hitam), plus jumlahnya.
- `/img/commerce/orders-list.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `commerce/orders.md`
  - isi: Halaman Transaksi: lima kartu statistik di atas (Pesanan, Baru, Belum bayar, Selesai, Omzet selesai), lalu kotak pencarian, tombol Filter, dan tombol "Pesanan baru", disusul tabel pesanan dengan kolom No. pesanan, Pelanggan, Asal (situs asal atau "Diinput staf"), Penanggung jawab, Item, Total beserta status bayarnya, dan Status.
- `/img/commerce/order-form.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `commerce/orders.md`
  - isi: Form pesanan baru: bagian Item dengan pencarian produk dan tabel item, bagian Pelanggan (nama, HP, email, alamat), bagian Pengiriman (kurir, layanan, resi), dan panel Total di kanan berisi Subtotal, Diskon, Ongkir, Biaya tambahan, dan Total.
- `/img/commerce/usage.webp` ✓id ✓en ✓ar
  - halaman: `commerce/overview.md`
  - isi: Kartu pemakaian toko di halaman Toko: "Pemakaian toko · [nama workspace]", bilah Produk dan bilah Pesanan bulan ini dengan angka terpakai dan batasnya, serta tanggal jatah pesanan direset.
- `/img/commerce/payment-dialog.webp` ✓id ✓en ✓ar
  - halaman: `commerce/payments-and-invoices.md`
  - isi: Dialog Pembayaran: pilihan metode (Transfer bank, E-wallet, Tunai, COD), pemilih rekening tujuan berbentuk chip, kolom Nominal, tanggal Diterima, dan pengunggah Bukti transfer.
- `/img/commerce/invoice-print.webp` ✓id ✓en ✓ar
  - halaman: `commerce/payments-and-invoices.md`
  - isi: Pratinjau cetak invoice: logo dan identitas toko di kiri atas, nomor & tanggal invoice di kanan, blok "Dari" dan "Ditagihkan ke", tabel item, total keseluruhan, blok info pembayaran berisi rekening utama, dan catatan footer.
- `/img/commerce/shop-blocks.webp` ✓id ✓en ✓ar
  - halaman: `commerce/product-cards.md`
  - isi: Grup Toko di palet blok editor: Produk unggulan, Produk terlaris, Produk terbaru, Produk pilihan, Produk per kategori, Satu produk, dan Tombol beli.
- `/img/commerce/shop-block-panel.webp` ✓id ✓en ✓ar
  - halaman: `commerce/product-cards.md`
  - isi: Panel blok toko di tab Atribut: pilihan sumber produk, tombol memilih produk, pilihan kartu, tata letak (grid, daftar, carousel), jumlah kolom per ukuran layar, batas jumlah produk, dan centang bagian yang ditampilkan.
- `/img/commerce/shop-design.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `commerce/product-cards.md`
  - isi: Halaman Desain toko: bagian Gaya toko dengan pemilih warna tombol, latar kartu, rasio gambar, radius, jarak, dan bayangan; di bawahnya perpustakaan kartu berisi pratinjau tiap kartu dengan produk asli toko.
- `/img/commerce/products-list.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `commerce/products.md`
  - isi: Halaman Master produk: tabel dengan kolom Produk (nama + thumbnail), Kategori, Harga, Stok, dan sakelar aktif/nonaktif; filter kategori dan status di atas, kotak "Cari nama atau SKU", tombol "Tambah produk".
- `/img/commerce/product-variants.webp` ✓id ✓en ✓ar
  - halaman: `commerce/products.md`
  - isi: Bagian "Harga & stok" pada form produk: menu bagian di kiri (Dasar, Harga & stok, Gambar, Pencarian), sakelar Tunggal / Punya varian dan centang Lacak stok, lalu kotak Pilihan berisi satu baris pilihan (Ukuran dengan chip 16 cm, 20 cm, 24 cm), pemilih "Dari master variant", dan tombol "Generate kombinasi" bertuliskan "3 baris". Di bawahnya daftar Varian (3), tiap baris dengan Harga jual, Harga modal, SKU, Stok, Berat, Dimensi paket, Gambar, centang Aktif, dan tautan Grosir.
- `/img/commerce/public-invoice.webp` ✓id ✓en ✓ar
  - halaman: `commerce/public-invoice.md`
  - isi: Halaman invoice publik dari sisi pembeli: kepala hijau berisi nama toko, nomor invoice, status pesanan dan status bayar, lalu blok pengiriman, pengirim dan penerima, tabel item, subtotal, ongkir, dan total tagihan, plus dua tombol — "Batalkan pesanan ini" dan "Bayar sekarang".
- `/img/commerce/store-settings.webp` ✓id ✓en ✓ar
  - halaman: `commerce/store-settings.md`
  - isi: Halaman Pengaturan toko: menu bagian di kiri (Identitas, Mata uang, Pembayaran, Bayar online, Payment gateway, Notifikasi email, Dokumen), lalu bagian Identitas (nama outlet, telepon, email, logo, logo invoice), bagian Mata uang, dan bagian Transfer bank manual; tombol Simpan di kanan atas.
- `/img/commerce/bank-accounts.webp` ✓id ✓en ✓ar
  - halaman: `commerce/store-settings.md`
  - isi: Halaman Rekening bank: daftar kartu rekening berisi nama bank, atas nama, nomor rekening dengan tombol salin, dan penanda "Utama" pada salah satunya.
- `/img/commerce/storefront.webp` ✓id ✓en ✓ar
  - halaman: `commerce/storefront.md`
  - isi: Tab Commerce di halaman website, "Toko di situs ini": kartu Halaman toko dengan sakelar "Toko aktif", tautan toko yang sudah tayang, daftar template (Halaman toko, Halaman produk, Keranjang, Checkout, Strip produk) yang sudah dibuat, sakelar "Tampilkan keranjang di menu situs", serta tombol "Susun ulang halaman toko" dan "Custom halaman". Di bawahnya kartu "Produk di situs ini".

## editor

- `/img/editor/ai-chat.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/ai-chat.md`
  - isi: Mode AI: panel "Asisten AI" di sisi kiri dengan contoh permintaan dan kotak tulis di bawah (lampirkan gambar, Kirim); preview halaman di sisi kanan, dengan elemen yang sedang ditarget diberi kotak. Riwayat percakapan muncul di panel yang sama setelah kamu mengirim permintaan.
- `/img/editor/blocks-panel.webp` ✓id ✓en ✓ar
  - halaman: `editor/blocks.md`
  - isi: Tab Blok di panel kanan editor (di sebelah tab Atribut): bagian "Blok simpananmu" berisi form dan blok toko (Produk unggulan, Produk terlaris, Satu produk, Tombol beli, dll.) dengan tombol "Susun ulang blok", lalu lipatan "Blok bawaan" berisi kelompok Tata letak dan seterusnya.
- `/img/editor/code-mode.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/code-mode.md`
  - isi: Mode Code: panel editor HTML dengan penomoran baris dan pewarnaan sintaks di sisi kiri, preview langsung di sisi kanan yang ikut berubah saat kode diketik.
- `/img/editor/version-history.webp` ✓id ✓en ✓ar
  - halaman: `editor/history.md`
  - isi: Panel Riwayat versi: daftar snapshot dengan tanggal dan jam, tombol Restore di tiap baris, dan tombol "Simpan versi" di bagian atas.
- `/img/editor/overview.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/overview.md`
  - isi: Editor halaman terbuka penuh: toolbar atas berisi tombol kembali, judul & slug halaman, pemilih halaman, tiga tombol mode (Code, Visual, AI), undo/redo, badge Terbit, pemilih ukuran layar, tombol Simpan dan Unpublish. Di bawahnya alamat halaman dan tautan "Edit shell". Outline terlipat jadi rail di kiri, kanvas halaman di tengah, panel Blok · Atribut di kanan.
- `/img/editor/page-seo.webp` ✓id ✓en ✓ar
  - halaman: `editor/page-seo.md`
  - isi: Panel "SEO & Tampilan": pengunggah Thumbnail di atas, kolom Focus keyphrase, Pratinjau Google (Mobile/Desktop) yang menampilkan hasil pencarian halaman ini, lalu kolom Title dengan meter panjang dan kolom Slug berisi alamat lengkap beserta tombol salin dan buka. Di bawahnya (digulir) ada Description, gambar share, dan daftar periksa.
- `/img/editor/publish-toolbar.webp` ✓id ✓en ✓ar
  - halaman: `editor/publishing.md`
  - isi: Toolbar editor pada halaman yang sudah terbit: badge Terbit di sebelah judul, tombol Salin URL, Buka situs, dan Unpublish menggantikan tombol Publish.
- `/img/website/sharing-tab.webp` ✓id ✓en ✓ar
  - halaman: `editor/publishing.md`
  - isi: Tab Berbagi: kartu "Link preview publik" dengan sakelar aktif, alamat link beserta tombol salin, dan tombol "Ganti link (putus link lama)". Di bawahnya kartu "Undang kolaborator" dengan kolom email dan tombol Bagikan.
- `/img/editor/visual-mode.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/visual-mode.md`
  - isi: Mode visual dengan satu elemen terpilih: kotak hijau mengelilingi elemen, toolbar mengambang di atasnya (pegangan seret, pilih induk, naik/turun, duplikat, hapus), dan panel kanan pindah sendiri ke tab Atribut berisi isi teks, atribut, serta grup-grup gaya.
- `/img/editor/style-panel.webp` ✓id ✓en ✓ar
  - halaman: `editor/visual-mode.md`
  - isi: Tab Atribut untuk elemen h1: kolom Teks, bagian Atribut, lalu STYLE dengan pemilih breakpoint (desktop/tablet/ponsel) dan pemilih state Normal/Hover/Fokus/Ditekan, disusul grup Tata letak, Jarak, Tipografi, Latar, Garis tepi & sudut, Lanjutan, dan Efek yang bisa dibuka-tutup.

## getting-started

- `/img/getting-started/register.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/account-setup.md`
  - isi: Halaman "Buat akun PageHub": kolom Nama, Email, dan Password dengan tombol tampilkan/sembunyikan, lalu tombol Daftar. Di sisi kiri ada panel ilustrasi hijau dengan kartu "Halaman live" dan "Pengunjung hari ini".
- `/img/getting-started/verify-email.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/account-setup.md`
  - isi: Halaman verifikasi email: kolom email yang sudah terisi, satu kolom untuk kode enam digit, tombol Verifikasi, dan tautan "Kirim ulang" beserta hitungan mundur.
- `/img/getting-started/layout-overview.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `getting-started/interface-tour.md`
  - isi: Tampilan penuh aplikasi: logo dan pemilih workspace di atas sidebar, grup menu Ruang kerja, Toko, lalu Bisnis di bawahnya, menu akun di kaki sidebar, bilah atas berisi saldo Kredit AI, pemilih mata uang dan bahasa, mode gelap, serta tombol Tweaks, dan isi halaman di tengah.
- `/img/getting-started/tweaks-panel.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/interface-tour.md`
  - isi: Panel Tweaks terbuka di sisi kanan: pilihan warna aksen berbentuk lingkaran, tombol terang/gelap, pilihan tone, gaya menu, slider radius, dan sakelar "Tampilkan penawaran".
- `/img/getting-started/new-website-options.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/quickstart.md`
  - isi: Jendela "Website baru" dengan tiga kartu berdampingan: Pakai Template, Buat via AI (bertanda "Paling cepat"), dan Buat Kosong.
- `/img/getting-started/ai-build-questions.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/quickstart.md`
  - isi: Layar pembangunan AI: penghitung langkah di atas, satu pertanyaan pilihan (di sini soal tema warna), dan kartu-kartu jawaban bergambar pratinjau.
- `/img/getting-started/editor-first-look.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `getting-started/quickstart.md`
  - isi: Editor halaman: toolbar atas berisi judul halaman, pemilih mode Code/Visual/AI, pemilih ukuran layar desktop/tablet/mobile, tombol Simpan dan Publish. Kanvas halaman di tengah, panel Blok · Atribut di kanan.
- `/img/getting-started/publish-confirm.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/quickstart.md`
  - isi: Toolbar editor setelah publish: tombol berubah jadi Unpublish, muncul tombol Salin URL dan Buka situs, plus badge "Terbit" di sebelah judul halaman.
- `/img/getting-started/dashboard.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/what-is-pagehub.md`
  - isi: Dashboard PageHub setelah login: sidebar kiri berisi grup Ruang kerja, Toko, dan Bisnis; sapaan dengan tombol "Buat website baru" dan "Buat landing page", kartu statistik Website / Halaman / Total views di kanan atas, kartu paket dengan bilah kuota, lalu bagian "Lanjutkan" dan "Perlu perhatian" di bawahnya.

## help

- `/img/help/tickets.webp` ✓id ✓en ✓ar
  - halaman: `help/support-tickets.md`
  - isi: Halaman Bantuan: tab Semua / Bantuan / Permintaan fitur, daftar tiket dengan jenis, judul, status, dan jumlah pesan; tombol "Tiket baru" di kanan atas. Satu tiket terbuka menampilkan thread berisi pesanmu dan balasan bertanda "Staf".

## landing-pages

- `/img/landing/new-landing-options.webp` ✓id ✓en ✓ar
  - halaman: `landing-pages/create-landing-page.md`
  - isi: Layar "Landing page baru" dengan tiga kartu: Pakai Template, Buat via AI, Buat Kosong, masing-masing dengan ikon dan satu kalimat penjelasan.
- `/img/landing/landing-list.webp` ✓id ✓en ✓ar
  - halaman: `landing-pages/create-landing-page.md`
  - isi: Halaman Landing Pages: kartu-kartu landing page dengan thumbnail, judul, jumlah views, waktu terakhir diubah, dan menu tiga titik. Di atas ada kotak pencarian, pemilih urutan, dan tombol "Landing page baru".
- `/img/landing/template-gallery.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `landing-pages/landing-templates.md`
  - isi: Galeri template landing page: grid kartu bergambar thumbnail, nama, dan kategori; filter kategori dan kotak pencarian di bagian atas; tombol Detail dan Preview di tiap kartu.

## leads

- `/img/leads/forms-list.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `leads/form-builder.md`
  - isi: Halaman Form: daftar form milik workspace aktif, masing-masing dengan nama, jumlah field, jumlah lead, status aktif, dan tombol untuk membuka builder serta papan leadnya; tombol "Form baru" di kanan atas.
- `/img/leads/form-builder.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `leads/form-builder.md`
  - isi: Layar form builder: daftar tipe field di kiri, kanvas form di tengah dengan section dan field-nya, panel pengaturan field terpilih di kanan (label, placeholder, bantuan, wajib diisi), dan tab Pengaturan serta Bagikan & embed di atas.
- `/img/leads/form-picker.webp` ✓id ✓en ✓ar
  - halaman: `leads/form-builder.md`
  - isi: Jendela "Pilih form" di editor: daftar form workspace dengan jumlah field dan lead, kolom pencarian, dan kolom nama untuk membuat form baru di bagian bawah.
- `/img/leads/form-fields.webp` ✓id ✓en ✓ar
  - halaman: `leads/form-submissions.md`
  - isi: Panel properti untuk elemen form: daftar field dengan nama, tipe, dan centang wajib; tombol "Input" dan "Area teks" untuk menambah field baru.
- `/img/leads/inbox.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `leads/form-submissions.md`
  - isi: Halaman Leads: pemilih sumber di atas, kolom "Kontak Awal" berisi kartu-kartu lead baru dengan nama, kontak, dan umur; kolom-kolom stage di sebelahnya.
- `/img/leads/kanban.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `leads/pipeline.md`
  - isi: Papan kanban leads: kolom "Kontak Awal" lalu kolom-kolom stage berwarna (Dihubungi, Penawaran, Deal), masing-masing berisi kartu lead dengan nama, kontak, umur dalam hari, dan ikon catatan. Di atas ada pemilih sumber, kartu statistik baru/macet/konversi, dan sakelar Kanban/List.

## media

- `/img/media/file-manager.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `media/file-manager.md`
  - isi: File Manager dalam tampilan grid: bilah "Pemakaian Storage" dengan tautan Tambah storage di atas, kotak pencarian, pemilih urutan, tampilan daftar/grid, tombol Buat Folder dan Unggah, jejak folder (Beranda), lalu kartu-kartu folder dan gambar dengan thumbnail.

## reports

- `/img/reports/hub.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `reports/overview.md`
  - isi: Hub Laporan: tiga kelompok kartu — Audiens (Trafik & konten, Konversi lead), Penjualan (Produk per pesanan, Produk per omzet, Tren produk, Laporan transaksi, Analisis periode, Linimasa penjualan, Abandoned cart), dan AI (Pemakaian AI).
- `/img/reports/carts.webp` ✓id ✓en ✓ar
  - halaman: `reports/overview.md`
  - isi: Laporan Abandoned cart: kartu angka (Cart dimulai, Jadi pesanan, Ditinggal, Konversi, Nilai yang ditinggal), lalu tabel "Berhenti di mana" berisi progres pengisian form dan konversinya, serta grafik tren cart.

## seo

- `/img/seo/seo-panel.webp` ✓id ✓en ✓ar
  - halaman: `seo/search-and-ai-discovery.md`
  - isi: Panel "Penemuan mesin pencari & AI": tiga kartu file (sitemap.xml, robots.txt, feed.xml) masing-masing dengan penjelasan, jumlah URL, tombol Salin URL dan Unduh; di bawahnya bagian "Layak dibenahi" berisi daftar temuan.

## team

- `/img/team/brand.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `team/brand-white-label.md`
  - isi: Halaman Brand: kartu "Identitas kamu" (nama produk, logo, ikon, link bantuan, link tentang) bertanda "Paket berbayar", kartu "Tampilan default" dengan kontrol warna dan mode, kartu "Email akun", dan panel Pratinjau di kanan.
- `/img/team/team-list.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `team/members-and-access.md`
  - isi: Halaman Tim & Akses: tabel anggota dengan kolom Anggota (nama + email), Peran, Akses (jumlah website), Bergabung, dan menu aksi; tombol "Undang anggota" di kanan atas.
- `/img/team/access-dialog.webp` ✓id ✓en ✓ar
  - halaman: `team/members-and-access.md`
  - isi: Dialog Akses untuk satu anggota: dua bagian (Website dan Landing Page), tiap baris punya pilihan Tidak ada akses / Viewer / Editor.
- `/img/team/reseller-clients.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `team/reseller.md`
  - isi: Halaman Reseller: empat kartu kolam sumber daya (Website, Landing page, Storage, Kredit AI untuk dibagi — masing-masing berapa yang tersisa dan berapa yang sudah dibagi ke klien), catatan bahwa penagihan ke klien dilakukan di luar aplikasi, lalu tab Klien dan Domain. Tab Klien menampilkan daftar klien, atau keadaan kosong dengan tombol "Klien baru".
- `/img/team/workspaces.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `team/workspaces.md`
  - isi: Halaman Workspace: kartu-kartu workspace berwarna dengan nama, catatan, alamat publik, dan hitungan isi (website, landing page, media, anggota); tombol "Workspace baru" di kanan atas.
- `/img/team/workspace-members.webp` ✓id ✓en ✓ar
  - halaman: `team/workspaces.md`
  - isi: Dialog Anggota workspace: daftar orang dengan perannya (Bisa ubah / Bisa lihat) dan tombol keluarkan; pemilih "Pilih orang" untuk menambahkan anggota baru.

## website

- `/img/website/new-website-options.webp` ✓id ✓en ✓ar
  - halaman: `website/create-website.md`
  - isi: Jendela "Website baru" di atas daftar website, dengan tiga kartu pilihan: Pakai Template, Buat via AI (berlabel "Paling cepat"), dan Buat Kosong. Masing-masing punya ikon dan satu kalimat penjelasan.
- `/img/website/website-list.webp` ✓id ✓en ✓ar
  - halaman: `website/create-website.md`
  - isi: Halaman Websites: kartu-kartu website dengan thumbnail, nama, jumlah halaman, penanda "belum terbit", dan menu tiga titik. Di kanan atas ada kotak pencarian, pemilih urutan, dan tombol "Website baru".
- `/img/website/domain-dns.webp` ✓id ✓en ✓ar
  - halaman: `website/custom-domain.md`
  - isi: Bagian Custom domain pada tahap DNS: tabel berisi tiga baris record (Verifikasi kepemilikan TXT, Arahkan trafik A/CNAME, Arahkan www opsional), masing-masing dengan tipe, host, nilai, tombol salin, dan lencana status "Menunggu".
- `/img/website/shell-card.webp` ✓id ✓en ✓ar
  - halaman: `website/header-footer.md`
  - isi: Kartu "Header & Footer" di kolom kanan tab Halaman: penanda status "aktif" (atau "belum dibuat"), satu kalimat penjelasan, dan tombol "Edit header & footer" — atau "Buat header & footer" dan "Pisahkan dari halaman yang ada" kalau belum ada.
- `/img/website/shell-editor.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `website/header-footer.md`
  - isi: Editor shell: panel file di kiri menampilkan bagian Header dan Footer beserta catatan "dipakai semua halaman", preview di tengah menampilkan header di atas dan footer di bawah dengan area konten kosong di antaranya.
- `/img/website/menu-editor.webp` ✓id ✓en ✓ar
  - halaman: `website/navigation-menu.md`
  - isi: Bagian Menu navigasi: daftar item dengan pegangan seret, kolom Label, dropdown pemilih halaman, dan tombol hapus per baris. Di bawahnya tombol Tambah.
- `/img/website/pages-tab.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `website/pages.md`
  - isi: Tab Halaman sebuah website: daftar halaman dengan pegangan seret, judul, badge "homepage" pada yang teratas, jumlah views, status terbit/draf, dan tombol buka, edit, serta menu. Di kolom kanan, kartu "Header & Footer" lalu panel "Sekilas" berisi URL publik, jumlah halaman, total views, domain kustom, dan status blog.
- `/img/website/settings-general.webp` ✓id ✓en ✓ar
  - halaman: `website/settings.md`
  - isi: Tab Pengaturan: kartu "Pengaturan umum" dengan kolom Nama, Alamat, Thumbnail, dan pemilih Bahasa situs publik.
- `/img/website/theme-global.webp` ✓id ✓en ✓ar
  - halaman: `website/theme-and-brand.md`
  - isi: Kartu "Theme global": pemilih Warna utama, Background, Warna teks berbentuk kotak warna, dan dropdown Font family dengan kotak pencarian.
- `/img/website/tracking.webp` ✓id ✓en ✓ar
  - halaman: `website/tracking.md`
  - isi: Bagian Tracking: grup Google berisi kolom Measurement ID GA4 dan Container ID GTM, lalu kolom Meta Pixel ID, TikTok Pixel ID, dan kotak teks besar "Custom head script".
- `/img/website/template-gallery.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `website/website-templates.md`
  - isi: Galeri template website: kartu-kartu bergambar thumbnail dengan nama template dan kategori, filter kategori di atas, dan kotak pencarian. Tiap kartu punya tombol Detail dan Preview.
- `/img/website/save-as-template.webp` ✓id ✓en ✓ar
  - halaman: `website/website-templates.md`
  - isi: Dialog "Jadikan template": kolom Nama template, Deskripsi opsional, dropdown Kategori, pengunggah Thumbnail, dan catatan bahwa template ini privat untuk organisasi kamu.

