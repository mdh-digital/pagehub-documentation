/**
 * Pastikan ketiga bahasa punya berkas untuk setiap slug di .vitepress/structure.ts,
 * dan tidak ada berkas yatim yang tidak terdaftar di sidebar.
 *
 * `npm run check` — dipakai sebelum deploy.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const LOCALES = [
  { key: 'id', dir: '' },
  { key: 'en', dir: 'en' },
  { key: 'ar', dir: 'ar' },
]

// Ambil daftar slug dari structure.ts tanpa perlu meng-compile TS-nya.
const src = readFileSync(join(ROOT, '.vitepress/structure.ts'), 'utf8')
const body = src.split('export const STRUCTURE')[1].split('export const ALL_SLUGS')[0]
const slugs = [...new Set([...body.matchAll(/'([a-z0-9-]+\/[a-z0-9-]+)'/g)].map((m) => m[1]))]

let problems = 0

// 1. Setiap slug harus ada di ketiga bahasa.
for (const slug of slugs) {
  for (const { key, dir } of LOCALES) {
    const file = join(ROOT, dir, `${slug}.md`)
    if (!existsSync(file)) {
      console.error(`hilang  [${key}] ${relative(ROOT, file)}`)
      problems++
      continue
    }
    const md = readFileSync(file, 'utf8')
    if (md.includes('_Segera._')) {
      console.error(`stub    [${key}] ${relative(ROOT, file)}`)
      problems++
    }
    if (!/^#\s+\S/m.test(md)) {
      console.error(`no-h1   [${key}] ${relative(ROOT, file)}`)
      problems++
    }
  }
}

// 2. Tidak ada .md yang tidak terdaftar di sidebar (index.md dikecualikan).
const SKIP = new Set(['node_modules', '.vitepress', 'public', '.git', 'scripts'])
const known = new Set()
for (const slug of slugs) for (const { dir } of LOCALES) known.add(join(dir, `${slug}.md`))
for (const { dir } of LOCALES) known.add(join(dir, 'index.md'))

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue
    const full = join(dir, name)
    if (statSync(full).isDirectory()) walk(full, out)
    else if (name.endsWith('.md')) out.push(full)
  }
  return out
}
for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file)
  if (rel === 'SCREENSHOTS.md' || rel === 'README.md') continue
  if (!known.has(rel)) {
    console.error(`yatim   ${rel} — tidak ada di .vitepress/structure.ts`)
    problems++
  }
}

if (problems) {
  console.error(`\n${problems} masalah.`)
  process.exit(1)
}
console.log(`OK — ${slugs.length} halaman × ${LOCALES.length} bahasa lengkap.`)
