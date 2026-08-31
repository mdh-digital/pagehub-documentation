# Daftar screenshot

Dibuat otomatis oleh `npm run shots` — jangan diedit tangan.

Tiap tangkapan diambil per bahasa antarmuka, jadi satu baris di bawah bisa
sudah lengkap di satu bahasa dan belum di bahasa lain.

**Progres per bahasa antarmuka:** id 76/76 · en 74/76 · ar 71/76

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
  - isi: Halaman Add-on: kartu "Toko online" dengan harga per toko per bulan dan daftar centang website untuk dipilih, kartu "White label" dengan harga per bulan, panel ringkasan harga di kanan, dan bagian "Yang kamu punya" di bawah.
- `/img/account/appsumo.webp` ✓id ✓en ✓ar
  - halaman: `account/appsumo.md`
  - isi: Halaman "Lisensi AppSumo": kolom tempel kode dengan tombol Tukar, panduan tiga langkah di bawahnya, dan tabel "Lisensimu" berisi kode, tanggal ditukar, tier, dan status.
- `/img/account/upgrade-plans.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `account/billing.md`
  - isi: Layar Upgrade Paket: sakelar Bulanan / Lifetime di atas grid, kartu-kartu paket dengan harga, daftar kuota (website, landing, storage, kredit AI/bln), penanda "PAKET KAMU" pada yang aktif, dan panel Ringkasan di kanan berisi paket, durasi, subtotal, pajak, dan total tagihan.
- `/img/account/payment-manual.webp` ✓id ✓en ✓ar
  - halaman: `account/billing.md`
  - isi: Halaman pembayaran transfer manual: pemilih bank tujuan, kolom nama bank pengirim, nomor rekening pengirim, nominal transfer, pengunggah bukti transfer, dan tombol "Kirim bukti transfer".
- `/img/account/billing-hub.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `account/plans-and-quota.md`
  - isi: Hub Billing: kartu status paket aktif di atas dengan bilah kuota (Website, Landing, Tim, Penyimpanan, Kredit AI), lalu kartu-kartu menu: Upgrade Paket, AI Credit, Storage Add-On, Add-on, dan AppSumo.
- `/img/account/profile.webp` ✓id ✓en ✓ar
  - halaman: `account/profile.md`
  - isi: Halaman "Profil saya": foto profil dengan tombol Ubah foto dan Hapus foto, kolom Nama dan Email dengan lencana Terverifikasi, kartu Ganti password, dan bagian Akses berisi daftar organisasi beserta peranmu di masing-masing.
- `/img/account/grace-banner.webp` ✓id ✓en ✓ar
  - halaman: `account/subscription-lapse.md`
  - isi: Spanduk peringatan di atas dashboard: "Langganan berakhir — akun turun ke paket Free, fitur edit dinonaktifkan", dengan hitungan hari tersisa, jumlah kelebihan website dan landing page, serta tombol Perpanjang, Kelola Website, dan Kelola Landing.

## ai

- `/img/ai/credit-balance.webp` ✓id ✓en ✓ar
  - halaman: `ai/credits.md`
  - isi: Halaman AI Credit: tiga kartu angka berisi Kredit dari paket, Kredit top-up, dan Kredit terpakai periode ini; di bawahnya tombol "Beli Kredit" dan tabel riwayat transaksi.
- `/img/ai/build-questions.webp` ✓id ✓en ·ar
  - halaman: `ai/how-generation-works.md`
  - isi: Satu pertanyaan dari wizard: penghitung "Langkah 2 dari 7" di atas, pertanyaan "Tema visual apa yang kamu inginkan?", lalu kartu-kartu pilihan bergambar pratinjau — dengan "Pilihkan saja" sebagai kartu pertama.
- `/img/ai/build-plan.webp` ✓id ·en ·ar
  - halaman: `ai/how-generation-works.md`
  - isi: Layar "Rencana — ini yang bakal dibuat": daftar kartu section (Header & Footer, Hero, Fitur, Testimoni, Harga, Kontak) yang bisa diubah namanya atau dibuang, dengan perkiraan kredit di bawah.
- `/img/ai/build-progress.webp` ✓id ·en ·ar — **lebar**
  - halaman: `ai/how-generation-works.md`
  - isi: Layar progres: nama tahap yang sedang berjalan ("Menyusun struktur"), bilah kemajuan, penghitung "1 dari 8", catatan bahwa prosesnya boleh ditinggal, serta tautan "Ke halaman Websites" dan "Batal".

## blog

- `/img/blog/blog-inactive.webp` ✓id ✓en ✓ar
  - halaman: `blog/enable-blog.md`
  - isi: Tab Blog dalam keadaan belum aktif: judul "Blog belum aktif", penjelasan bahwa halaman list dan detail artikel akan di-generate mengikuti desain website, dan tombol "Aktifkan Blog".
- `/img/blog/blog-categories.webp` ✓id ✓en ✓ar
  - halaman: `blog/enable-blog.md`
  - isi: Tab Kategori: tabel berisi nama kategori, URL slug-nya, dan jumlah artikel; kolom "Nama kategori baru" dengan tombol Tambah di atas tabel.
- `/img/blog/article-editor.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `blog/write-articles.md`
  - isi: Editor artikel: kolom Judul di atas, kolom Description, editor teks kaya untuk isi artikel di tengah; panel kanan berisi Publikasi (status, terbit pada), Slug, Kategori, Thumbnail, dan bagian SEO.
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
  - isi: Halaman Transaksi: lima kartu statistik di atas (Pesanan, Baru, Belum bayar, selesai, Omzet selesai), lalu tabel pesanan dengan kolom No. pesanan, Pelanggan, Item, Total, status, Bayar, dan PJ; filter rentang tanggal, status, pembayaran, dan kotak pencarian di atas tabel.
- `/img/commerce/order-form.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `commerce/orders.md`
  - isi: Form pesanan baru: bagian Item dengan pencarian produk dan tabel item, bagian Pelanggan (nama, HP, email, alamat), bagian Pengiriman (kurir, layanan, resi), dan panel Total di kanan berisi Subtotal, Diskon, Ongkir, Biaya tambahan, dan Total.
- `/img/commerce/locked.webp` ✓id ✓en ✓ar
  - halaman: `commerce/overview.md`
  - isi: Tab Commerce tanpa add-on: satu layar penawaran berjudul "Jualan itu add-on" dengan penjelasan bahwa katalog, pesanan, invoice, dan storefront nyala setelah add-on aktif, dan tombol "Lihat add-on toko".
- `/img/commerce/payment-dialog.webp` ✓id ✓en ✓ar
  - halaman: `commerce/payments-and-invoices.md`
  - isi: Dialog Pembayaran: pilihan metode (Transfer bank, E-wallet, Tunai, COD), pemilih rekening tujuan berbentuk chip, kolom Nominal, tanggal Diterima, dan pengunggah Bukti transfer.
- `/img/commerce/invoice-print.webp` ✓id ✓en ✓ar
  - halaman: `commerce/payments-and-invoices.md`
  - isi: Pratinjau cetak invoice: logo dan identitas toko di kiri atas, nomor & tanggal invoice di kanan, blok "Dari" dan "Ditagihkan ke", tabel item, total keseluruhan, blok info pembayaran berisi rekening utama, dan catatan footer.
- `/img/commerce/products-list.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `commerce/products.md`
  - isi: Halaman Master produk: tabel dengan kolom Produk (nama + thumbnail), Kategori, Harga, Stok, dan sakelar aktif/nonaktif; filter kategori dan status di atas, kotak "Cari nama atau SKU", tombol "Tambah produk".
- `/img/commerce/product-variants.webp` ✓id ✓en ✓ar
  - halaman: `commerce/products.md`
  - isi: Bagian Pilihan pada form produk: dua baris pilihan (Warna dengan chip Merah/Biru, Ukuran dengan chip S/M/L), tombol "Generate kombinasi" bertuliskan "6 baris", lalu tabel Varian berisi enam baris dengan kolom harga, modal, stok, gambar, dan penanda Default.
- `/img/commerce/public-invoice.webp` ✓id ✓en ✓ar
  - halaman: `commerce/public-invoice.md`
  - isi: Halaman invoice publik dari sisi pembeli: kotak isian nomor invoice di atas, lalu rincian pesanan berisi item, total, status pembayaran, dan dua tombol — "Kirim bukti pembayaran" dan "Batalkan pesanan".
- `/img/commerce/store-settings.webp` ✓id ✓en ✓ar
  - halaman: `commerce/store-settings.md`
  - isi: Halaman Pengaturan toko: bagian Identitas (nama outlet, telepon, email, logo, logo invoice), bagian Mata uang, bagian Dokumen (tempo pembayaran, catatan invoice, peringatan surat jalan, footer dokumen), dan bagian Pembayaran dengan sakelar transfer bank manual.
- `/img/commerce/bank-accounts.webp` ✓id ✓en ✓ar
  - halaman: `commerce/store-settings.md`
  - isi: Halaman Rekening bank: daftar kartu rekening berisi nama bank, atas nama, nomor rekening dengan tombol salin, dan penanda "Utama" pada salah satunya.
- `/img/commerce/storefront.webp` ✓id ✓en ✓ar
  - halaman: `commerce/storefront.md`
  - isi: Halaman "Halaman toko": daftar template (Halaman toko, Halaman produk, Keranjang, Checkout, Strip produk) masing-masing dengan status, tombol "Susun ulang halaman toko", sakelar "Toko aktif", dan centang "Tampilkan keranjang di menu situs".

## editor

- `/img/editor/ai-chat.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/ai-chat.md`
  - isi: Mode AI: panel chat di sisi kiri berisi riwayat percakapan (permintaan pengguna dan balasan AI dengan jumlah token), kotak tulis di bawah dengan tombol lampirkan gambar dan Kirim; preview halaman di sisi kanan.
- `/img/editor/blocks-panel.webp` ✓id ✓en ✓ar
  - halaman: `editor/blocks.md`
  - isi: Panel Blok di sisi kiri editor: bagian atas "Blok desain ini" dengan tombol "Sesuaikan desainku", lalu kelompok Dasar, Tata letak, dan Bagian siap pakai berisi kartu-kartu blok bergambar.
- `/img/editor/code-mode.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/code-mode.md`
  - isi: Mode Code: panel editor HTML dengan penomoran baris dan pewarnaan sintaks di sisi kiri, preview langsung di sisi kanan yang ikut berubah saat kode diketik.
- `/img/editor/version-history.webp` ✓id ✓en ✓ar
  - halaman: `editor/history.md`
  - isi: Panel Riwayat versi: daftar snapshot dengan tanggal dan jam, tombol Restore di tiap baris, dan tombol "Simpan versi" di bagian atas.
- `/img/editor/overview.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/overview.md`
  - isi: Editor halaman terbuka penuh: toolbar atas berisi tombol kembali, judul & slug halaman, tiga tombol mode (Visual, Code, AI), pemilih ukuran layar, indikator "Tersimpan", tombol Simpan dan Publish. Panel Outline di kiri, kanvas halaman di tengah, panel properti di kanan.
- `/img/editor/page-seo.webp` ✓id ✓en ✓ar
  - halaman: `editor/page-seo.md`
  - isi: Panel "SEO & Tampilan": pengunggah Thumbnail di atas, lalu kolom Title, Description, Keywords berbentuk chip, OG Image, dan Favicon URL — dua yang terakhir punya tombol "Pilih dari File Manager".
- `/img/editor/publish-toolbar.webp` ✓id ✓en ✓ar
  - halaman: `editor/publishing.md`
  - isi: Toolbar editor pada halaman yang sudah terbit: badge Terbit di sebelah judul, tombol Salin URL, Buka situs, dan Unpublish menggantikan tombol Publish.
- `/img/website/sharing-tab.webp` ✓id ✓en ✓ar
  - halaman: `editor/publishing.md`
  - isi: Tab Berbagi: kartu "Link preview publik" dengan sakelar aktif, alamat link beserta tombol salin, dan tombol "Ganti link (putus link lama)". Di bawahnya kartu "Undang kolaborator" dengan kolom email dan tombol Bagikan.
- `/img/editor/visual-mode.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `editor/visual-mode.md`
  - isi: Mode visual dengan satu elemen terpilih: kotak biru mengelilingi elemen, toolbar mengambang di atasnya (pegangan seret, tombol pilih induk, duplikat, hapus), panel Outline di kiri menyorot elemen yang sama, panel properti di kanan menampilkan tab isi dan gaya.
- `/img/editor/style-panel.webp` ✓id ✓en ✓ar
  - halaman: `editor/visual-mode.md`
  - isi: Panel gaya: pemilih breakpoint Desktop/Tablet/Ponsel dan pemilih state Normal/Hover/Fokus/Ditekan di bagian atas, lalu grup Tata letak, Jarak, Tipografi yang bisa dibuka-tutup, dan kotak "CSS kustom" di bawah.

## getting-started

- `/img/getting-started/register.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/account-setup.md`
  - isi: Halaman "Buat akun PageHub": kolom Nama, Email, dan Password dengan tombol tampilkan/sembunyikan, lalu tombol Daftar. Di sisi kiri ada panel ilustrasi hijau dengan kartu "Halaman live" dan "Pengunjung hari ini".
- `/img/getting-started/verify-email.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/account-setup.md`
  - isi: Halaman verifikasi email: kolom email yang sudah terisi, satu kolom untuk kode enam digit, tombol Verifikasi, dan tautan "Kirim ulang" beserta hitungan mundur.
- `/img/getting-started/layout-overview.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `getting-started/interface-tour.md`
  - isi: Tampilan penuh aplikasi: logo dan pemilih workspace di atas sidebar, grup menu Ruang kerja lalu Bisnis di bawahnya, menu akun di kaki sidebar, dan isi halaman di tengah.
- `/img/getting-started/tweaks-panel.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/interface-tour.md`
  - isi: Panel Tweaks terbuka di sisi kanan: pilihan warna aksen berbentuk lingkaran, tombol terang/gelap, pilihan tone, gaya menu, dan slider radius.
- `/img/getting-started/new-website-options.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/quickstart.md`
  - isi: Layar "Website baru" dengan tiga kartu pilihan berdampingan: Pakai Template (bertanda "Paling cepat"), Buat via AI, dan Buat Kosong.
- `/img/getting-started/ai-build-questions.webp` ✓id ✓en ·ar
  - halaman: `getting-started/quickstart.md`
  - isi: Layar pembangunan AI: penghitung langkah di atas, satu pertanyaan pilihan ("Tema visual apa yang kamu inginkan?"), dan kartu-kartu jawaban bergambar pratinjau.
- `/img/getting-started/editor-first-look.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `getting-started/quickstart.md`
  - isi: Editor halaman: toolbar atas berisi judul halaman, pemilih mode Visual/Code/AI, pemilih ukuran layar desktop/tablet/mobile, indikator "Tersimpan", tombol Simpan dan Publish. Panel Outline di kiri, preview halaman di tengah.
- `/img/getting-started/publish-confirm.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/quickstart.md`
  - isi: Toolbar editor setelah publish: tombol berubah jadi Unpublish, muncul tombol Salin URL dan Buka situs, plus badge "Terbit" di sebelah judul halaman.
- `/img/getting-started/dashboard.webp` ✓id ✓en ✓ar
  - halaman: `getting-started/what-is-pagehub.md`
  - isi: Dashboard PageHub setelah login: sidebar kiri berisi grup Ruang kerja dan Bisnis, kartu statistik Website / Halaman / Total views di tengah, dan panel "Perlu perhatian" di kanan.

## help

- `/img/help/tickets.webp` ✓id ✓en ✓ar
  - halaman: `help/support-tickets.md`
  - isi: Halaman Bantuan: daftar tiket dengan judul, jenis, prioritas, dan jumlah pesan; tombol "Tiket baru" di kanan atas. Di sebelah kanan, thread satu tiket dengan pesan dari kamu dan balasan bertanda "Staf".

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
  - isi: File Manager dalam tampilan grid: baris jejak folder di atas (Beranda › Produk), kartu-kartu folder dan gambar dengan thumbnail, kotak pencarian, pemilih urutan dan tampilan grid/baris di kanan atas, serta bilah "Pemakaian Storage" di bawah.

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
- `/img/team/access-dialog.webp` ✓id ✓en ·ar
  - halaman: `team/members-and-access.md`
  - isi: Dialog Akses untuk satu anggota: dua bagian (Website dan Landing Page), tiap baris punya pilihan Tidak ada akses / Viewer / Editor.
- `/img/team/workspaces.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `team/workspaces.md`
  - isi: Halaman Workspace: kartu-kartu workspace berwarna dengan nama, catatan, alamat publik, dan hitungan isi (website, landing page, media, anggota); tombol "Workspace baru" di kanan atas.
- `/img/team/workspace-members.webp` ✓id ✓en ✓ar
  - halaman: `team/workspaces.md`
  - isi: Dialog Anggota workspace: daftar orang dengan perannya (Bisa ubah / Bisa lihat) dan tombol keluarkan; pemilih "Pilih orang" untuk menambahkan anggota baru.

## website

- `/img/website/new-website-options.webp` ✓id ✓en ✓ar
  - halaman: `website/create-website.md`
  - isi: Layar "Website baru" dengan tiga kartu: Pakai Template (berlabel "Paling cepat"), Buat via AI, Buat Kosong. Masing-masing punya ikon dan satu kalimat penjelasan.
- `/img/website/website-list.webp` ✓id ✓en ✓ar
  - halaman: `website/create-website.md`
  - isi: Halaman Websites: kartu-kartu website dengan thumbnail, nama, jumlah halaman, penanda "belum terbit", dan menu tiga titik. Di kanan atas ada kotak pencarian, pemilih urutan, dan tombol "Website baru".
- `/img/website/domain-dns.webp` ✓id ✓en ✓ar
  - halaman: `website/custom-domain.md`
  - isi: Bagian Custom domain pada tahap DNS: tabel berisi tiga baris record (Verifikasi kepemilikan TXT, Arahkan trafik A/CNAME, Arahkan www opsional), masing-masing dengan tipe, host, nilai, tombol salin, dan lencana status "Menunggu".
- `/img/website/shell-card.webp` ✓id ✓en ✓ar
  - halaman: `website/header-footer.md`
  - isi: Kartu "Header & Footer" di atas daftar halaman, dengan penanda status "aktif" atau "belum dibuat", satu kalimat penjelasan, dan tombol "Buat header & footer" plus "Pisahkan dari halaman yang ada".
- `/img/website/shell-editor.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `website/header-footer.md`
  - isi: Editor shell: panel file di kiri menampilkan bagian Header dan Footer beserta catatan "dipakai semua halaman", preview di tengah menampilkan header di atas dan footer di bawah dengan area konten kosong di antaranya.
- `/img/website/menu-editor.webp` ✓id ✓en ✓ar
  - halaman: `website/navigation-menu.md`
  - isi: Bagian Menu navigasi: daftar item dengan pegangan seret, kolom Label, dropdown pemilih halaman, dan tombol hapus per baris. Di bawahnya tombol Tambah.
- `/img/website/pages-tab.webp` ✓id ✓en ✓ar — **lebar**
  - halaman: `website/pages.md`
  - isi: Tab Halaman sebuah website: kartu "Header & Footer" di atas, lalu daftar halaman dengan pegangan seret, judul, badge "homepage" pada yang teratas, status terbit/draf, jumlah views, dan tombol Edit. Panel "Sekilas" di kanan menampilkan URL publik, jumlah halaman, total views, dan status domain kustom.
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

