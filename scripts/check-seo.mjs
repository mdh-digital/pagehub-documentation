/**
 * Audit SEO atas hasil build — dijalankan otomatis sesudah `vitepress build`.
 *
 * Ada dua bug yang lolos ke produksi sebelum pemeriksaan ini ada, dan dua-duanya
 * tak kelihatan dari halaman yang dirender: (1) `content` head ditulis apa
 * adanya oleh VitePress, jadi satu tanda kutip ganda memutus atribut deskripsi
 * di tengah jalan; (2) blok <Shot> sempat terbaca sebagai paragraf pembuka,
 * sehingga keterangan screenshot jadi deskripsi halaman. Keduanya cuma terlihat
 * kalau HTML-nya benar-benar diurai lagi — jadi itulah yang dilakukan di sini.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = join(process.cwd(), '.vitepress/dist')
const HOSTNAME = 'https://documentations.pagehub.id'
const MIN_DESC = 60
const MAX_DESC = 160

if (!existsSync(DIST)) {
  console.error('.vitepress/dist tidak ada — jalankan build dulu.')
  process.exit(1)
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full, out)
    else if (name.endsWith('.html')) out.push(full)
  }
  return out
}

/** Ambil nilai atribut dengan mengurai tag, bukan menebak batasnya. */
function attr(tag, name) {
  const m = tag.match(new RegExp(`\\b${name}="([^"]*)"`))
  return m ? m[1] : null
}

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')

const problems = []
const descriptions = new Map()
let checked = 0

for (const file of walk(DIST)) {
  const page = relative(DIST, file)
  if (page === '404.html') continue

  const html = readFileSync(file, 'utf8')
  const head = html.slice(0, html.indexOf('</head>'))
  const tags = head.match(/<(?:meta|link)\b[^>]*>/g) ?? []
  const say = (msg) => problems.push(`${page}: ${msg}`)
  checked++

  const meta = (name) =>
    tags.find((t) => attr(t, 'name') === name || attr(t, 'property') === name)

  // --- deskripsi ---
  const descTag = meta('description')
  const desc = descTag ? decode(attr(descTag, 'content') ?? '') : null
  if (!desc) say('tidak punya meta description')
  else {
    if (desc.length < MIN_DESC) say(`deskripsi cuma ${desc.length} karakter: "${desc}"`)
    if (desc.length > MAX_DESC) say(`deskripsi ${desc.length} karakter, terlalu panjang`)
    // Kutip ganda mentah = atribut terpotong di titik itu.
    if ((attr(descTag, 'content') ?? '').includes('"')) say('deskripsi mengandung kutip ganda mentah')
    const seen = descriptions.get(desc)
    if (seen) say(`deskripsi sama persis dengan ${seen}`)
    else descriptions.set(desc, page)
  }

  // --- canonical ---
  const canon = tags.find((t) => attr(t, 'rel') === 'canonical')
  if (!canon) say('tidak punya canonical')
  else if (!attr(canon, 'href')?.startsWith(HOSTNAME)) say('canonical bukan ke host produksi')

  // --- hreflang: tiga bahasa + x-default ---
  const alts = tags.filter((t) => attr(t, 'rel') === 'alternate').map((t) => attr(t, 'hreflang'))
  for (const want of ['id', 'en', 'ar', 'x-default']) {
    if (!alts.includes(want)) say(`hreflang "${want}" hilang`)
  }

  // --- kartu berbagi ---
  for (const want of ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:card']) {
    if (!meta(want)) say(`${want} hilang`)
  }

  // --- judul ---
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1]?.trim()
  if (!title) say('tidak punya <title>')
}

for (const f of ['sitemap.xml', 'robots.txt', 'og-cover.png']) {
  if (!existsSync(join(DIST, f))) problems.push(`berkas ${f} tidak ikut ter-build`)
}

if (problems.length) {
  console.error(`\nSEO: ${problems.length} masalah\n`)
  for (const p of problems.slice(0, 40)) console.error('  ' + p)
  if (problems.length > 40) console.error(`  … dan ${problems.length - 40} lagi`)
  process.exit(1)
}
console.log(`SEO OK — ${checked} halaman, ${descriptions.size} deskripsi unik, sitemap + robots ada.`)
