/**
 * Kecilkan tangkapan layar: PNG retina 2880px -> WebP 1600px.
 *
 * Tangkapan diambil di deviceScaleFactor 2 supaya teksnya tajam, tapi di
 * halaman panduan lebarnya tak pernah lebih dari ~900px. Menyajikan 77 MB PNG
 * untuk itu memperlambat tiap halaman tanpa menambah satu piksel yang terlihat.
 */
import { readdirSync, statSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'
import { DOCS } from './lib.mjs'

const ROOT = join(DOCS, 'public/img')
const walk = (d, out = []) => {
  for (const n of readdirSync(d)) {
    const f = join(d, n)
    statSync(f).isDirectory() ? walk(f, out) : n.endsWith('.png') && out.push(f)
  }
  return out
}

const files = walk(ROOT)
let before = 0
let after = 0
for (const f of files) {
  before += statSync(f).size
  const out = f.replace(/\.png$/, '.webp')
  await sharp(f).resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out)
  after += statSync(out).size
  unlinkSync(f)
}
const mb = (n) => (n / 1024 / 1024).toFixed(1) + ' MB'
console.log(`${files.length} berkas · ${mb(before)} -> ${mb(after)} (${Math.round((1 - after / before) * 100)}% lebih kecil)`)
