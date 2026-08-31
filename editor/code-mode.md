# Mode kode

Mode **Code** menunjukkan isi halaman apa adanya: HTML. Nggak ada lapisan penerjemah, nggak ada format khusus. Yang kamu lihat di sini persis yang disimpan dan disajikan ke pengunjung.

<Shot src="/img/editor/code-mode.webp" wide>
Mode Code: panel editor HTML dengan penomoran baris dan pewarnaan sintaks di sisi kiri, preview langsung di sisi kanan yang ikut berubah saat kode diketik.
</Shot>

## Kapan dipakai

- Menempelkan potongan HTML dari luar.
- Membetulkan satu atribut yang susah dijangkau lewat klik.
- Menambahkan `<script>` atau `<style>` khusus untuk halaman ini.
- Memeriksa apa yang sebenarnya ditulis AI.

## Panel file

Untuk halaman website yang memakai shell, panel di sisi kiri memisahkan:

| Bagian | Isinya |
| --- | --- |
| **Konten** | HTML halaman ini saja |
| **Header / Footer** | Milik [shell](/website/header-footer) — ditandai *dipakai semua halaman* |

Perhatikan tandanya sebelum mengedit: mengubah header berarti mengubahnya untuk **seluruh** website.

## Peringatan tag

Editor menandai dua kesalahan yang paling sering merusak halaman:

- `Tag <div> belum ditutup.`
- `Tag </section> tidak cocok.`

Ini peringatan, bukan penghalang — kamu tetap bisa menyimpan. Tapi tag yang nggak seimbang biasanya bikin [mode visual](/editor/visual-mode) salah membaca struktur halaman.

## Preview

Preview di sebelah kanan mengikuti apa yang kamu ketik. Untuk halaman website, preview menampilkan halaman **beserta shell**-nya (ada penanda *dengan shell*), jadi yang kamu lihat sama dengan yang dilihat pengunjung.

Kalau shell gagal disusun, muncul catatan *"Gagal menyusun shell — menampilkan konten mentah"*; klik **Muat ulang preview**.

## Yang perlu diperhatikan

**Jangan menulis ulang tautan menu.** Slot `<nav data-eb-menu></nav>` di header harus tetap kosong — item [menu navigasi](/website/navigation-menu) disuntikkan ke situ otomatis.

**Skrip di halaman terbit.** `<script>` yang kamu tulis di halaman ikut tayang. Untuk skrip yang harus ada di **semua** halaman (analitik, pixel), pakai [Tracking & pixel](/website/tracking), bukan menempelkannya ke tiap halaman.

**Blok yang dibuat AI di-strip skripnya.** Blok hasil [palet blok](/editor/blocks) nggak boleh membawa `<script>`; bagian itu dibuang saat blok disusun.

**Form.** Atribut `name` pada tiap field menentukan nama kolom di [Leads](/leads/form-submissions). Field tanpa `name` isinya nggak tersimpan.

**Gambar.** Pakai URL dari [File Manager](/media/file-manager). Gambar dari situs luar bisa hilang sewaktu-waktu tanpa kamu tahu.

## Bolak-balik antar mode

Ketik di mode kode → pindah ke visual: strukturnya langsung terbaca. Ubah di visual → balik ke kode: perubahannya ada di sana sebagai HTML biasa.

Satu-satunya hal yang bisa memutus alur ini adalah HTML yang rusak. Kalau mode visual tiba-tiba nggak bisa memilih elemen yang biasanya bisa, periksa peringatan tag di mode kode.

## Unduh

⋯ → **Unduh ZIP (html/css/js)** mengunduh halaman ini sebagai berkas biasa — berguna buat arsip atau menyerahkan hasil ke pihak lain.
