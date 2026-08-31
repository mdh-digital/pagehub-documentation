/**
 * Kumpulkan semua <Shot> dari halaman Bahasa Indonesia jadi satu daftar kerja
 * screenshot: path file tujuan + deskripsi apa yang harus terlihat.
 *
 * Dipakai lewat `npm run shots` → nulis SCREENSHOTS.md di root repo.
 *
 * Markdown menulis `src` netral (`/img/website/pages-tab.png`); berkasnya
 * hidup per bahasa antarmuka di `/img/<lang>/…`, karena pembaca panduan Arab
 * seharusnya melihat aplikasi berbahasa Arab. Daftar ini karena itu melacak
 * status tiap bahasa, bukan satu kotak centang.
 */
import { readdirSync, statSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const SKIP = new Set(['node_modules', '.vitepress', 'public', '.git', 'scripts', 'en', 'ar'])

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full, out)
    else if (name.endsWith('.md')) out.push(full)
  }
  return out
}

/** Bahasa antarmuka yang tangkapannya dilacak. */
const LANGS = ['id', 'en', 'ar']

const SHOT = /<Shot\b([^>]*)>([\s\S]*?)<\/Shot>/g
const SRC = /\bsrc="([^"]+)"/

const rows = []
for (const file of walk(ROOT).sort()) {
  const page = relative(ROOT, file)
  const md = readFileSync(file, 'utf8')
  for (const m of md.matchAll(SHOT)) {
    const src = SRC.exec(m[1])?.[1]
    if (!src) continue
    rows.push({
      page,
      src,
      wide: /\bwide\b/.test(m[1]),
      desc: m[2].trim().replace(/\s+/g, ' '),
      done: LANGS.filter((l) => existsSync(join(ROOT, 'public/img', l, src.replace(/^\/img\//, '')))),
    })
  }
}

const per = Object.fromEntries(LANGS.map((l) => [l, rows.filter((r) => r.done.includes(l)).length]))
const bySection = new Map()
for (const r of rows) {
  const section = r.page.split('/')[0]
  if (!bySection.has(section)) bySection.set(section, [])
  bySection.get(section).push(r)
}

let out = `# Daftar screenshot

Dibuat otomatis oleh \`npm run shots\` — jangan diedit tangan.

Tiap tangkapan diambil per bahasa antarmuka, jadi satu baris di bawah bisa
sudah lengkap di satu bahasa dan belum di bahasa lain.

**Progres per bahasa antarmuka:** ${LANGS.map((l) => `${l} ${per[l]}/${rows.length}`).join(' · ')}

Cara mengisi: ambil screenshot sesuai deskripsi dengan antarmuka aplikasi dalam
bahasa yang bersangkutan, simpan ke \`public/img/<bahasa>/…\`, lalu restart
\`npm run dev\`. Placeholder-nya otomatis berubah jadi gambar — markdown-nya
tidak perlu disentuh. Bahasa yang belum difoto jatuh ke Inggris, lalu Indonesia.

Saran teknis: lebar 1440px, mode terang, data contoh yang masuk akal (bukan
"asdf"), dan sensor data pribadi/nominal asli. Yang bertanda **lebar** dipakai
melebar melewati kolom teks, jadi ambil layar penuh.

`

for (const [section, list] of bySection) {
  out += `## ${section}\n\n`
  for (const r of list) {
    const marks = LANGS.map((l) => `${r.done.includes(l) ? '✓' : '·'}${l}`).join(' ')
    out += `- \`${r.src}\` ${marks}${r.wide ? ' — **lebar**' : ''}\n`
    out += `  - halaman: \`${r.page}\`\n`
    out += `  - isi: ${r.desc}\n`
  }
  out += '\n'
}

writeFileSync(join(ROOT, 'SCREENSHOTS.md'), out)
console.log(
  `SCREENSHOTS.md ditulis — ${rows.length} screenshot · ` +
    LANGS.map((l) => `${l} ${per[l]}/${rows.length}`).join(' · '),
)
