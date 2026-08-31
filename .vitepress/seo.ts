/**
 * SEO untuk situs panduan.
 *
 * VitePress tidak memancarkan canonical, hreflang, maupun tag Open Graph
 * sendiri, dan `description` bawaannya sama di seluruh situs — 169 halaman
 * dengan deskripsi identik. Berkas ini menutup keempatnya di satu tempat,
 * diturunkan dari isi halaman, bukan diketik ulang per berkas.
 */
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { HeadConfig, PageData, SiteConfig } from 'vitepress'

/** Host tempat panduan disajikan. Dipakai canonical, hreflang, OG, dan sitemap. */
export const HOSTNAME = 'https://documentations.pagehub.id'

/**
 * Bahasa terbit panduan, beserta awalan URL-nya.
 *
 * `id` adalah locale root, jadi awalannya kosong.
 */
export const LOCALES = [
  { key: 'id', prefix: '', hreflang: 'id', og: 'id_ID' },
  { key: 'en', prefix: 'en/', hreflang: 'en', og: 'en_US' },
  { key: 'ar', prefix: 'ar/', hreflang: 'ar', og: 'ar_AR' },
] as const

/**
 * `x-default` menunjuk ke Inggris, bukan ke locale root.
 *
 * Root panduan ini Bahasa Indonesia. Membiarkan x-default mewarisinya berarti
 * pembaca yang bahasanya tak kami terbitkan — Jerman, Prancis, Vietnam —
 * dilempar ke halaman berbahasa Indonesia. Aturannya sama persis dengan
 * fallback tautan di situs marketing, dan sengaja dibuat sama.
 */
const X_DEFAULT = 'en/'

/** URL relatif sebuah berkas markdown, mengikuti `cleanUrls: true`. */
export function pathOf(relativePath: string): string {
  return '/' + relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
}

export function localeOf(relativePath: string): (typeof LOCALES)[number] {
  return LOCALES.find((l) => l.prefix && relativePath.startsWith(l.prefix)) ?? LOCALES[0]
}

/** Bagian path tanpa awalan bahasa — sama untuk ketiga terjemahan. */
export function slugOf(relativePath: string): string {
  return relativePath.slice(localeOf(relativePath).prefix.length)
}

/** Potong di batas kata, jangan di tengah kata. */
function clamp(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[),.;:—-]+$/, '') + '…'
}

/** Buang penanda markdown inline supaya deskripsinya terbaca sebagai kalimat. */
function plain(md: string): string {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|\W)\*([^*]+)\*/g, '$1$2')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
}

/**
 * Amankan teks untuk dipakai sebagai nilai atribut HTML.
 *
 * VitePress menulis `content` head apa adanya — tidak ada escaping. Satu tanda
 * kutip ganda di dalam deskripsi memutus atributnya di situ juga, dan halaman
 * itu berakhir dengan deskripsi sepanjang dua kata. Sudah kejadian.
 *
 * Kutip ganda diganti kutip tipografis, bukan di-escape: hasilnya sama amannya
 * dan lebih enak dibaca di cuplikan hasil pencarian. Ampersand tetap perlu
 * entitas karena parser bisa membacanya sebagai awal entitas lain.
 */
function attrSafe(text: string): string {
  let open = true
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, () => (open = !open) ? '\u201d' : '\u201c')
    .replace(/</g, '')
    .replace(/>/g, '')
}

/** Baris yang bukan kalimat penjelas: judul, container, tabel, daftar, kutipan. */
const NOT_PROSE = /^(#|:::|\||>|[-*+]\s|\d+\.\s)/

/**
 * Deskripsi halaman, diambil dari paragraf pembukanya.
 *
 * Diturunkan, bukan ditulis manual di 169 frontmatter: deskripsi yang ditulis
 * terpisah dari isinya pasti melenceng begitu halamannya direvisi. Frontmatter
 * `description` tetap menang kalau memang diisi — dipakai untuk halaman yang
 * kalimat pembukanya cuma instruksi navigasi.
 */
export function describe(srcDir: string, pageData: PageData): string | undefined {
  if (typeof pageData.frontmatter?.description === 'string') {
    return pageData.frontmatter.description
  }

  // Beranda memakai layout home: taglinenya sudah merupakan ringkasan.
  const tagline = pageData.frontmatter?.hero?.tagline
  if (typeof tagline === 'string' && tagline) return attrSafe(clamp(tagline))

  let md: string
  try {
    md = readFileSync(join(srcDir, pageData.relativePath), 'utf8')
  } catch {
    return undefined
  }

  const body = md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
  const parts: string[] = []
  let inFence = false
  let inTag = false

  for (const raw of body.split('\n')) {
    const line = raw.trim()

    if (line.startsWith('```')) {
      inFence = !inFence
      continue
    }
    if (inFence) continue

    // Blok komponen (<Shot>…</Shot>) dilewati SELURUHNYA. Isinya keterangan
    // screenshot, bukan penjelasan halaman — dan pernah lolos jadi deskripsi.
    if (inTag) {
      if (/<\/[A-Za-z]/.test(line)) inTag = false
      continue
    }
    if (line.startsWith('<')) {
      if (!/\/>\s*$/.test(line) && !/<\/[A-Za-z]/.test(line)) inTag = true
      continue
    }

    if (!line || NOT_PROSE.test(line)) continue

    const text = plain(line).trim()
    if (text.length < 20) continue

    parts.push(text)
    // Satu paragraf pembuka biasanya cukup. Kalau pendek — halaman yang dibuka
    // dengan satu baris "Buka Pengaturan → …" — paragraf berikutnya disambung
    // supaya cuplikannya benar-benar menjelaskan sesuatu.
    if (parts.join(' ').length >= 70) break
  }

  const joined = parts.join(' ').trim()
  return joined.length >= 25 ? attrSafe(clamp(joined)) : undefined
}

/**
 * Canonical, hreflang, dan kartu berbagi untuk satu halaman.
 *
 * Slug-nya sengaja identik di ketiga bahasa (lihat structure.ts), jadi alternate
 * tiap halaman bisa dihitung, bukan didaftar tangan — dan tak mungkin melenceng.
 */
export function seoHead(
  pageData: PageData,
  description: string | undefined,
  title: string,
): HeadConfig[] {
  const rel = pageData.relativePath
  if (!rel) return [] // halaman 404

  const locale = localeOf(rel)
  const slug = slugOf(rel)
  const url = HOSTNAME + pathOf(rel)
  const image = `${HOSTNAME}/og-cover.png`

  const tags: HeadConfig[] = [
    ['link', { rel: 'canonical', href: url }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:url', content: url }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:locale', content: locale.og }],
    ['meta', { property: 'og:image', content: image }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:image', content: image }],
  ]

  if (description) {
    tags.push(
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'twitter:description', content: description }],
    )
  }

  for (const l of LOCALES) {
    tags.push([
      'link',
      { rel: 'alternate', hreflang: l.hreflang, href: HOSTNAME + pathOf(l.prefix + slug) },
    ])
  }
  tags.push([
    'link',
    { rel: 'alternate', hreflang: 'x-default', href: HOSTNAME + pathOf(X_DEFAULT + slug) },
  ])

  return tags
}

/** Tipe bantu supaya config.ts tidak perlu mengimpor SiteConfig sendiri. */
export type { SiteConfig }
