# Tracking & pixel

Skrip analitik dipasang **sekali di level website**, lalu otomatis masuk ke `<head>` **semua halaman** website itu waktu tayang. Kamu nggak perlu nempelin apa pun ke tiap halaman.

Buka **Pengaturan** → bagian **Tracking**.

<Shot src="/img/website/tracking.webp">
Bagian Tracking: grup Google berisi kolom Measurement ID GA4 dan Container ID GTM, lalu kolom Meta Pixel ID, TikTok Pixel ID, dan kotak teks besar "Custom head script".
</Shot>

Isi yang kamu pakai saja — sisanya biarkan kosong.

## Google

| Kolom | Bentuk isian | Dari mana |
| --- | --- | --- |
| **Google Analytics (GA4)** | Measurement ID, `G-XXXXXXXXXX` | Admin GA4 → Data streams |
| **Google Tag Manager** | Container ID, `GTM-XXXXXXX` | Dashboard GTM, di sebelah nama container |

Kalau kamu sudah pakai GTM dan mengurus GA dari dalamnya, cukup isi GTM saja.

## Meta (Facebook) Pixel

Isi **Pixel ID** (angka panjang, misal `123456789012345`) dari Meta Events Manager. PageHub otomatis mengirim event `PageView`.

## TikTok Pixel

Isi **Pixel ID** (misal `C123ABC456DEF`) dari TikTok Events Manager. Event `PageView` juga dikirim otomatis.

## Custom head script

Kotak buat HTML/skrip mentah yang butuh masuk ke `<head>`: pixel dari platform lain, tag verifikasi kepemilikan domain, event kustom, chat widget, dan sejenisnya.

Isinya **ditaruh apa adanya**, tanpa dibersihkan atau diperbaiki. Jadi:

```html
<!-- verifikasi -->
<meta name="facebook-domain-verification" content="abc123..." />

<!-- skrip pihak ketiga -->
<script src="https://contoh.com/widget.js" async></script>
```

::: warning HTML yang salah bisa merusak halaman
Karena isi kotak ini disisipkan mentah, tag yang nggak ditutup atau kutip yang ketinggalan bisa merusak seluruh `<head>`. Tempel dari sumber resmi, dan periksa halamannya setelah menyimpan.
:::

## Yang perlu diketahui

- **Cuma di halaman terbit.** Skrip tracking nggak dijalankan di preview editor maupun di [tautan berbagi](/editor/publishing).
- **Berlaku per-website.** Landing page punya pengaturan tracking-nya sendiri, di tab **Pengaturan** landing page tersebut.
- **Beda dengan statistik bawaan.** PageHub sudah menghitung views dan trafik harian sendiri untuk [Laporan](/reports/overview) — tracking di sini buat kebutuhanmu di luar PageHub (iklan, remarketing, analitik lanjutan).
- **Persetujuan cookie.** PageHub nggak memasang banner cookie otomatis. Kalau kamu wajib mematuhi GDPR atau aturan sejenis, pasang sendiri lewat **Custom head script**.
