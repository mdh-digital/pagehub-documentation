/**
 * HTML halaman contoh untuk akun uji.
 *
 * Ditulis tangan, bukan dihasilkan AI: tangkapan layar harus sama persis tiap
 * kali dijalankan ulang, dan generasi AI dipakai hanya di layar yang memang
 * memotret proses generasi itu sendiri.
 */

export const SHELL_HEADER = `<header class="site-header">
  <a class="brand" href="#">
    <span class="brand-mark">KL</span>
    <span class="brand-name">Kue Lezat</span>
  </a>
  <nav data-eb-menu></nav>
  <a class="header-cta" href="#pesan">Pesan sekarang</a>
  <button class="burger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <nav data-eb-menu-mobile></nav>
</header>`

export const SHELL_FOOTER = `<footer class="site-footer">
  <div class="foot-grid">
    <div>
      <span class="brand-mark">KL</span>
      <p>Kue ulang tahun & kue custom, dipanggang harian di Bandung sejak 2019.</p>
    </div>
    <div>
      <h4>Kunjungi</h4>
      <p>Jl. Cihampelas No. 118<br />Bandung 40131</p>
    </div>
    <div>
      <h4>Buka</h4>
      <p>Senin–Sabtu 08.00–19.00<br />Minggu 10.00–16.00</p>
    </div>
    <div>
      <h4>Hubungi</h4>
      <p>0812-3456-7890<br />halo@kuelezat.id</p>
    </div>
  </div>
  <p class="foot-note">© 2026 Toko Kue Lezat · Dibuat dengan PageHub</p>
</footer>`

export const STYLES = `:root{
  --ink:#3a2b25; --muted:#7d6a61; --cream:#fdf7f1; --blush:#f6dfe0;
  --accent:#c2543f; --line:#ecdcd2; --radius:16px;
}
*{box-sizing:border-box}
body{margin:0;font-family:'Nunito Sans',system-ui,sans-serif;color:var(--ink);background:var(--cream);line-height:1.65}
h1,h2,h3,h4{font-family:'Fraunces',Georgia,serif;line-height:1.15;margin:0 0 .5em}
a{color:inherit}
.wrap{max-width:1080px;margin:0 auto;padding:0 24px}

.site-header{position:sticky;top:0;z-index:20;display:flex;align-items:center;gap:24px;
  padding:14px 32px;background:rgba(253,247,241,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-weight:800}
.brand-mark{display:grid;place-items:center;width:36px;height:36px;border-radius:12px;
  background:var(--accent);color:#fff;font-weight:800;font-size:14px;letter-spacing:.02em}
.brand-name{font-family:'Fraunces',Georgia,serif;font-size:20px}
nav[data-eb-menu]{display:flex;align-items:center;gap:26px;margin-left:auto;font-weight:600;font-size:15px}
nav[data-eb-menu] a{text-decoration:none;color:var(--muted);padding:6px 0;border-bottom:2px solid transparent}
nav[data-eb-menu] a:hover{color:var(--ink);border-bottom-color:var(--accent)}
.header-cta{text-decoration:none;background:var(--accent);color:#fff;font-weight:700;
  padding:10px 20px;border-radius:999px;font-size:14px;white-space:nowrap}
.burger{display:none;background:none;border:0;flex-direction:column;gap:4px;cursor:pointer}
.burger span{display:block;width:22px;height:2px;background:var(--ink)}
nav[data-eb-menu-mobile]{display:none}

.hero{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center;
  padding:72px 32px;max-width:1180px;margin:0 auto}
.hero h1{font-size:clamp(38px,5vw,58px)}
.hero p.lead{font-size:19px;color:var(--muted);max-width:46ch}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
.btn{display:inline-block;text-decoration:none;font-weight:700;padding:13px 26px;border-radius:999px}
.btn-primary{background:var(--accent);color:#fff}
.btn-ghost{border:2px solid var(--line);color:var(--ink)}
.hero-card{aspect-ratio:4/3;border-radius:28px;background:linear-gradient(140deg,var(--blush),#fbeee6);
  display:grid;place-items:center;font-size:88px;box-shadow:0 24px 60px -30px rgba(58,43,37,.5)}

section{padding:64px 0}
.eyebrow{text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:800;color:var(--accent)}
.section-head{max-width:52ch;margin-bottom:36px}
.section-head h2{font-size:clamp(28px,3.4vw,40px)}
.section-head p{color:var(--muted);font-size:17px}

.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:24px}
.card .thumb{aspect-ratio:5/4;border-radius:12px;background:linear-gradient(140deg,var(--blush),#fbeee6);
  display:grid;place-items:center;font-size:46px;margin-bottom:16px}
.card h3{font-size:20px}
.card p{color:var(--muted);font-size:15px;margin:0 0 12px}
.price{font-weight:800;color:var(--accent)}

.quote-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.quote{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:26px}
.quote p{font-size:16px;margin:0 0 16px}
.quote footer{display:flex;align-items:center;gap:12px;color:var(--muted);font-size:14px}
.avatar{width:38px;height:38px;border-radius:50%;background:var(--blush);display:grid;place-items:center;font-weight:800}

.cta{background:var(--ink);color:#fff;border-radius:28px;padding:56px 48px;text-align:center;margin:0 24px 72px}
.cta h2{font-size:34px;color:#fff}
.cta p{color:#e6d8d0;max-width:48ch;margin:0 auto 26px}

.site-footer{background:#fff;border-top:1px solid var(--line);padding:52px 32px 28px}
.foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:32px;max-width:1080px;margin:0 auto}
.foot-grid h4{font-size:15px}
.foot-grid p{color:var(--muted);font-size:14px;margin:8px 0 0}
.foot-note{text-align:center;color:var(--muted);font-size:13px;margin:40px 0 0}

form.contact{display:grid;gap:16px;max-width:520px}
form.contact label{font-weight:700;font-size:14px}
form.contact input,form.contact textarea{width:100%;padding:12px 14px;border:1px solid var(--line);
  border-radius:12px;font:inherit;background:#fff}
form.contact button{justify-self:start;border:0;cursor:pointer}

@media(max-width:900px){
  .hero{grid-template-columns:1fr;padding:40px 20px}
  .grid-3,.quote-grid,.foot-grid{grid-template-columns:1fr}
  nav[data-eb-menu]{display:none}
  .burger{display:flex}
}`

export const HOME = `<section class="hero">
  <div>
    <span class="eyebrow">Dipanggang harian di Bandung</span>
    <h1>Kue yang bikin orang berhenti ngobrol.</h1>
    <p class="lead">Kue ulang tahun dan pesanan custom untuk keluarga, kantor, dan acara kecil yang tetap ingin terasa istimewa.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="#pesan">Pesan lewat WhatsApp</a>
      <a class="btn btn-ghost" href="#produk">Lihat katalog</a>
    </div>
  </div>
  <div class="hero-card">🎂</div>
</section>

<section id="produk" class="wrap">
  <div class="section-head">
    <span class="eyebrow">Paling sering dipesan</span>
    <h2>Enam kue yang jarang sempat dingin</h2>
    <p>Semua dibuat setelah pesanan masuk. Butuh rasa atau ukuran lain? Tinggal bilang.</p>
  </div>
  <div class="grid-3">
    <article class="card"><div class="thumb">🍰</div><h3>Red Velvet Klasik</h3><p>Lembut, tidak terlalu manis, cream cheese asli.</p><span class="price">Rp 285.000</span></article>
    <article class="card"><div class="thumb">🧁</div><h3>Cupcake Ulang Tahun</h3><p>Satu lusin, hiasan sesuai tema acara.</p><span class="price">Rp 180.000</span></article>
    <article class="card"><div class="thumb">🎂</div><h3>Custom Dua Tingkat</h3><p>Untuk pernikahan kecil dan syukuran kantor.</p><span class="price">Rp 950.000</span></article>
    <article class="card"><div class="thumb">🥧</div><h3>Apple Pie Hangat</h3><p>Kayu manis, apel Malang, kulit berlapis.</p><span class="price">Rp 165.000</span></article>
    <article class="card"><div class="thumb">🍫</div><h3>Brownies Fudgy</h3><p>Cokelat 70%, dipotong tebal, tanpa basa-basi.</p><span class="price">Rp 120.000</span></article>
    <article class="card"><div class="thumb">🍮</div><h3>Puding Karamel</h3><p>Dingin, ringan, cocok jadi penutup acara.</p><span class="price">Rp 95.000</span></article>
  </div>
</section>

<section class="wrap">
  <div class="section-head">
    <span class="eyebrow">Kata pelanggan</span>
    <h2>Alasan mereka pesan lagi</h2>
  </div>
  <div class="quote-grid">
    <blockquote class="quote"><p>“Pesan jam sepuluh malam untuk besok pagi, dan kuenya tetap rapi. Anak saya senang.”</p><footer><span class="avatar">RA</span> Rina A. · Antapani</footer></blockquote>
    <blockquote class="quote"><p>“Kami pakai untuk syukuran kantor 60 orang. Semua habis, dan tidak ada yang bilang kemanisan.”</p><footer><span class="avatar">DS</span> Dimas S. · Dago</footer></blockquote>
    <blockquote class="quote"><p>“Desainnya diikutin persis dari foto referensi yang saya kirim.”</p><footer><span class="avatar">MP</span> Maya P. · Buah Batu</footer></blockquote>
  </div>
</section>

<section class="cta" id="pesan">
  <h2>Ada acara minggu ini?</h2>
  <p>Kirim tanggal dan jumlah porsinya, kami balas dengan pilihan yang muat di anggaranmu.</p>
  <a class="btn btn-primary" href="https://wa.me/6281234567890">Pesan lewat WhatsApp</a>
</section>`

export const ABOUT = `<section class="hero">
  <div>
    <span class="eyebrow">Tentang kami</span>
    <h1>Dimulai dari oven rumah, bukan dari rencana bisnis.</h1>
    <p class="lead">Nadia mulai memanggang untuk ulang tahun keponakannya di 2019. Pesanan tetangga datang lebih cepat daripada niat berjualan.</p>
  </div>
  <div class="hero-card">👩‍🍳</div>
</section>

<section class="wrap">
  <div class="section-head">
    <h2>Tiga hal yang tidak kami kompromikan</h2>
    <p>Bukan slogan — ini yang bikin kami sering menolak pesanan mendadak.</p>
  </div>
  <div class="grid-3">
    <article class="card"><h3>Dipanggang setelah dipesan</h3><p>Tidak ada stok kue kemarin. Karena itu ada tenggat pemesanan.</p></article>
    <article class="card"><h3>Manisnya ditakar</h3><p>Resep kami disetel untuk lidah orang dewasa, lalu dicicip ulang tiap batch.</p></article>
    <article class="card"><h3>Bahan yang bisa disebut namanya</h3><p>Mentega asli, telur harian, cokelat 70%. Tanpa pengawet tambahan.</p></article>
  </div>
</section>`

export const CONTACT = `<section class="hero">
  <div>
    <span class="eyebrow">Hubungi kami</span>
    <h1>Ceritakan acaranya.</h1>
    <p class="lead">Sebutkan tanggal, jumlah porsi, dan tema yang diinginkan. Kami balas di hari yang sama.</p>
    <form class="contact" method="post">
      <div><label for="nama">Nama</label><input id="nama" name="nama" placeholder="Nama kamu" required /></div>
      <div><label for="email">Email</label><input id="email" name="email" type="email" placeholder="nama@domain.com" required /></div>
      <div><label for="hp">Nomor WhatsApp</label><input id="hp" name="hp" placeholder="0812…" /></div>
      <div><label for="acara">Ceritakan acaranya</label><textarea id="acara" name="acara" rows="4" placeholder="Tanggal, jumlah porsi, tema"></textarea></div>
      <button class="btn btn-primary" type="submit">Kirim permintaan</button>
    </form>
  </div>
  <div class="hero-card">✉️</div>
</section>`

export const PRICING = `<section class="wrap" style="padding-top:64px">
  <div class="section-head">
    <span class="eyebrow">Harga</span>
    <h2>Tiga ukuran, satu standar rasa</h2>
    <p>Harga sudah termasuk hiasan dasar dan kotak. Antar dalam kota dihitung terpisah.</p>
  </div>
  <div class="grid-3">
    <article class="card"><h3>Kecil</h3><p>16 cm · 8–10 porsi<br />Untuk perayaan di rumah.</p><span class="price">Rp 285.000</span></article>
    <article class="card"><h3>Sedang</h3><p>20 cm · 16–20 porsi<br />Paling sering dipesan kantor.</p><span class="price">Rp 465.000</span></article>
    <article class="card"><h3>Dua tingkat</h3><p>16 + 22 cm · 35–40 porsi<br />Untuk acara yang ada fotonya.</p><span class="price">Rp 950.000</span></article>
  </div>
</section>`

export const AGENCY_HOME = `<section class="hero">
  <div>
    <span class="eyebrow">Studio Aksara</span>
    <h1>Kami bikin bisnis kecil terlihat seperti yang besar.</h1>
    <p class="lead">Identitas, situs, dan materi kampanye untuk merek yang baru mulai serius.</p>
    <div class="hero-actions"><a class="btn btn-primary" href="#kontak">Jadwalkan obrolan</a></div>
  </div>
  <div class="hero-card">✦</div>
</section>`

export const LANDING_RAMADAN = `<!doctype html>
<html lang="id"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Hampers Ramadan 2026 — Toko Kue Lezat</title>
<style>
:root{--ink:#2c2320;--muted:#7d6a61;--sand:#fbf5ec;--gold:#b8873b;--line:#ecdfcc}
*{box-sizing:border-box}
body{margin:0;font-family:'Nunito Sans',system-ui,sans-serif;color:var(--ink);background:var(--sand);line-height:1.65}
h1,h2,h3{font-family:'Fraunces',Georgia,serif;line-height:1.15;margin:0 0 .5em}
.wrap{max-width:1000px;margin:0 auto;padding:0 24px}
.top{display:flex;justify-content:space-between;align-items:center;padding:18px 32px}
.badge{background:var(--gold);color:#fff;font-weight:800;font-size:12px;letter-spacing:.1em;
  text-transform:uppercase;padding:7px 14px;border-radius:999px}
.hero{text-align:center;padding:56px 24px 24px}
.hero h1{font-size:clamp(36px,5.4vw,60px);max-width:16ch;margin:0 auto .3em}
.hero p{font-size:19px;color:var(--muted);max-width:52ch;margin:0 auto}
.countdown{display:flex;gap:14px;justify-content:center;margin:32px 0 8px}
.countdown div{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px 20px;min-width:78px}
.countdown b{display:block;font-size:26px;font-family:'Fraunces',Georgia,serif}
.countdown span{font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
.btn{display:inline-block;text-decoration:none;font-weight:700;padding:15px 32px;border-radius:999px;
  background:var(--gold);color:#fff;font-size:17px}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;padding:48px 0}
.pack{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;text-align:center}
.pack .thumb{aspect-ratio:1;border-radius:14px;background:linear-gradient(140deg,#f6e7cd,#fdf6ea);
  display:grid;place-items:center;font-size:52px;margin-bottom:16px}
.was{color:var(--muted);text-decoration:line-through;font-size:15px}
.now{font-size:24px;font-weight:800;color:var(--gold);font-family:'Fraunces',Georgia,serif}
.faq{padding:16px 0 64px}
.faq details{background:#fff;border:1px solid var(--line);border-radius:14px;padding:18px 22px;margin-bottom:12px}
.faq summary{font-weight:700;cursor:pointer}
.faq p{color:var(--muted);margin:12px 0 0}
form{display:grid;gap:14px;max-width:460px;margin:0 auto 72px}
input{width:100%;padding:13px 15px;border:1px solid var(--line);border-radius:12px;font:inherit}
button{border:0;cursor:pointer}
footer{text-align:center;color:var(--muted);font-size:13px;padding:0 0 40px}
@media(max-width:820px){.grid{grid-template-columns:1fr}}
</style></head>
<body>
<div class="top"><strong>Toko Kue Lezat</strong><span class="badge">Diskon 25% s/d 20 Maret</span></div>

<section class="hero">
  <h1>Hampers Ramadan yang tidak berakhir di lemari.</h1>
  <p>Isinya kue yang benar-benar dimakan orang, dikemas rapi untuk keluarga, klien, dan rekan kerja.</p>
  <div class="countdown"><div><b>12</b><span>Hari</span></div><div><b>06</b><span>Jam</span></div><div><b>41</b><span>Menit</span></div></div>
  <p style="margin-top:26px"><a class="btn" href="#pesan">Ambil diskon 25%</a></p>
</section>

<div class="wrap">
  <div class="grid">
    <article class="pack"><div class="thumb">🎁</div><h3>Paket Keluarga</h3><p>6 toples · 2 kue potong</p><p><span class="was">Rp 420.000</span> <span class="now">Rp 315.000</span></p></article>
    <article class="pack"><div class="thumb">🧺</div><h3>Paket Kantor</h3><p>12 toples · kartu ucapan</p><p><span class="was">Rp 780.000</span> <span class="now">Rp 585.000</span></p></article>
    <article class="pack"><div class="thumb">💝</div><h3>Paket Premium</h3><p>Kotak kayu · 10 varian</p><p><span class="was">Rp 1.250.000</span> <span class="now">Rp 937.000</span></p></article>
  </div>

  <div class="faq">
    <h2 style="text-align:center">Yang sering ditanya</h2>
    <details open><summary>Sampai kapan diskonnya?</summary><p>Sampai 20 Maret atau selama kuota produksi masih ada — mana yang lebih dulu.</p></details>
    <details><summary>Bisa kirim ke luar kota?</summary><p>Bisa, dengan kurir yang kamu pilih. Ongkir dihitung terpisah saat konfirmasi.</p></details>
    <details><summary>Ada pesanan dalam jumlah besar?</summary><p>Di atas 20 paket harganya berbeda. Isi form di bawah, kami hubungi hari itu juga.</p></details>
  </div>

  <form method="post" id="pesan">
    <h2 style="text-align:center;margin-bottom:0">Kunci harga promonya</h2>
    <div><label for="nama">Nama</label><input id="nama" name="nama" placeholder="Nama kamu" required /></div>
    <div><label for="wa">Nomor WhatsApp</label><input id="wa" name="wa" placeholder="0812…" required /></div>
    <div><label for="jumlah">Perkiraan jumlah paket</label><input id="jumlah" name="jumlah" placeholder="mis. 10" /></div>
    <button class="btn" type="submit">Kirim & kunci harga</button>
  </form>
</div>
<footer>© 2026 Toko Kue Lezat · Bandung</footer>
</body></html>`
