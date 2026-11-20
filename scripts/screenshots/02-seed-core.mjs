/**
 * Isi akun uji dengan konten inti: workspace, dua website, halaman, shell,
 * menu, tema, dan satu landing page.
 *
 * Idempoten seadanya — kalau sudah ada isinya, skrip berhenti dan bilang.
 */
import { writeFileSync } from 'node:fs'
import { account, get, login, post, put, tryPost } from './api.mjs'
import { ABOUT, AGENCY_HOME, CONTACT, HOME, LANDING_RAMADAN, PRICING, SHELL_FOOTER, SHELL_HEADER, STYLES } from './html.mjs'

const acc = account()
await login(acc.email, acc.password)
console.log('login ok')

const existing = await get('/websites')
if (existing.length) {
  console.log(`sudah ada ${existing.length} website — seed dilewati`)
  process.exit(0)
}

// --- workspace -------------------------------------------------------------
const workspaces = await get('/workspaces')
const home = workspaces.find((w) => w.isDefault) || workspaces[0]
await put(`/workspaces/${home.id}`, { name: 'Studio Aksara', slug: 'studio-aksara' })
console.log(`workspace bawaan -> Studio Aksara`)

const client = await post('/workspaces', {
  name: 'Toko Kue Lezat',
  slug: 'toko-kue-lezat',
  color: '#c2543f',
  note: 'Klien sejak Feb 2026 — kue custom & hampers musiman.',
})
console.log(`workspace klien: ${client.name}`)

// --- website toko ----------------------------------------------------------
const shop = await post('/websites', {
  name: 'Toko Kue Lezat',
  slug: 'kue-lezat',
  description:
    'Toko kue rumahan di Bandung. Kue ulang tahun dan pesanan custom untuk keluarga dan kantor. Kesannya hangat dan manis, warna pastel, tulisan ramah.',
  workspaceId: client.id,
  theme: {
    primaryColor: '#c2543f',
    backgroundColor: '#fdf7f1',
    textColor: '#3a2b25',
    fontFamily: 'Nunito Sans',
  },
  menu: [
    { label: 'Beranda', slug: 'beranda' },
    { label: 'Katalog', slug: 'katalog' },
    { label: 'Tentang Kami', slug: 'tentang-kami' },
    { label: 'Kontak', slug: 'kontak' },
  ],
})
console.log(`website: ${shop.name} (${shop.id})`)

await put(`/websites/${shop.id}/shell`, { headerHtml: SHELL_HEADER, footerHtml: SHELL_FOOTER })
await put(`/websites/${shop.id}/code`, { stylesCss: STYLES, scriptJs: '' })
console.log('  shell + styles.css tersimpan')

const pages = [
  { title: 'Beranda', slug: 'beranda', html: HOME, publish: true },
  { title: 'Katalog', slug: 'katalog', html: PRICING, publish: true },
  { title: 'Tentang Kami', slug: 'tentang-kami', html: ABOUT, publish: true },
  { title: 'Kontak', slug: 'kontak', html: CONTACT, publish: true },
  { title: 'Katering Kantor', slug: 'katering-kantor', html: PRICING, publish: false },
]
const made = []
for (const p of pages) {
  const page = await post('/pages', { title: p.title, slug: p.slug, html: p.html, websiteId: shop.id })
  if (p.publish) await post(`/pages/${page.id}/publish`)
  made.push({ ...page, publish: p.publish })
  console.log(`  halaman: ${p.title}${p.publish ? '' : ' (draf)'}`)
}

// SEO default + bahasa situs publik.
await put(`/websites/${shop.id}`, {
  name: shop.name,
  slug: shop.slug,
  description: shop.description,
  meta: {
    title: 'Toko Kue Lezat — Kue ulang tahun & custom di Bandung',
    description:
      'Kue ulang tahun dan pesanan custom, dipanggang harian di Bandung. Pesan lewat WhatsApp, antar dalam kota.',
    keywords: 'kue ulang tahun bandung, kue custom, hampers',
  },
})
await put(`/websites/${shop.id}/language`, { language: "id" }).catch((e) => console.log("  (lewat) bahasa situs:", e.message.slice(0, 80)))

// --- website agensi (biar daftarnya tidak cuma satu) -----------------------
const agency = await post('/websites', {
  name: 'Studio Aksara',
  slug: 'studio-aksara',
  description: 'Studio desain kecil untuk merek yang baru mulai serius. Nada tenang, tipografi bersih.',
  workspaceId: home.id,
  theme: { primaryColor: '#1f2937', backgroundColor: '#ffffff', textColor: '#111827', fontFamily: 'Inter' },
  menu: [{ label: 'Beranda', slug: 'beranda' }],
})
const agencyHome = await post('/pages', {
  title: 'Beranda',
  slug: 'beranda',
  html: AGENCY_HOME,
  websiteId: agency.id,
})
console.log(`website: ${agency.name} (draf)`)

// --- landing page ----------------------------------------------------------
const landing = await post('/pages', {
  title: 'Hampers Ramadan 2026',
  slug: 'hampers-ramadan',
  html: LANDING_RAMADAN,
  websiteId: null,
})
await post(`/pages/${landing.id}/publish`)
console.log(`landing: ${landing.title}`)

writeFileSync(
  new URL('./ids.json', import.meta.url),
  JSON.stringify(
    {
      workspaceHome: home.id,
      workspaceClient: client.id,
      shop: shop.id,
      shopSlug: shop.slug,
      agency: agency.id,
      agencyHome: agencyHome.id,
      landing: landing.id,
      pages: made.map((p) => ({ id: p.id, slug: p.slug, title: p.title })),
    },
    null,
    2,
  ),
)
console.log('\nids.json ditulis')
