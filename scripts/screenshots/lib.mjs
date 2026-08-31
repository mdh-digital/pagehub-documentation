import { chromium } from 'playwright'
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const FE = 'http://localhost:5174'
export const BE = 'http://localhost:8080'
export const PSQL = '/Applications/Postgres.app/Contents/Versions/18/bin/psql'
export const DB = 'landing_builder'
// Skrip ini hidup di dalam repo docs; naik dua tingkat dari scripts/screenshots/.
export const DOCS = fileURLToPath(new URL('../..', import.meta.url))

/** Satu ukuran untuk semua tangkapan: laptop, bukan monitor ultrawide. */
export const VIEWPORT = { width: 1440, height: 900 }

// Pemisah kolom yang tidak mungkin muncul di dalam data.
const SEP = '~|~'

/** Jalankan query, kembalikan larik baris berisi larik kolom. */
export function sql(query) {
  const out = execFileSync(PSQL, ['-d', DB, '-t', '-A', '-F', SEP, '-c', query], {
    encoding: 'utf8',
  })
  return out
    .trim()
    .split('\n')
    .filter(Boolean)
    .map((row) => row.split(SEP))
}

/**
 * Kode OTP enam digit dibalik dari hash-nya.
 *
 * Backend menyimpan sha256(kode) tanpa garam, dan ruangnya cuma sejuta — jadi
 * alur verifikasi asli bisa dijalani apa adanya, tanpa menyentuh baris DB dan
 * tanpa perlu SMTP hidup. Ini akun uji di mesin sendiri.
 */
export function otpFor(email, purpose = 'verify_email') {
  const rows = sql(
    `select c.code_hash from auth_codes c join users u on u.id = c.user_id ` +
      `where u.email = '${email}' and c.purpose = '${purpose}' and c.used_at is null ` +
      `order by c.created_at desc limit 1`,
  )
  if (!rows.length) throw new Error(`tidak ada kode ${purpose} untuk ${email}`)
  const want = rows[0][0]
  for (let i = 0; i < 1000000; i++) {
    const code = String(i).padStart(6, '0')
    if (createHash('sha256').update(code).digest('hex') === want) return code
  }
  throw new Error('kode tidak ketemu, skema hash mungkin berubah')
}

export async function launch() {
  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    locale: 'en-US',
    colorScheme: 'light',
    reducedMotion: 'reduce',
  })
  const page = await ctx.newPage()
  page.setDefaultTimeout(20000)
  return { browser, ctx, page }
}

/** Diamkan hal yang berubah tiap run supaya gambarnya tidak berkedip. */
export async function calm(page) {
  await page.addStyleTag({
    content:
      '*, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; }' +
      'vite-error-overlay { display: none !important; }',
  })
  await page.waitForTimeout(350)
}

/**
 * Simpan satu tangkapan ke public/img/<lang>/<path>.
 *
 * `clip` boleh berupa selector: yang tersimpan cuma elemen itu, bukan seluruh
 * layar, dipakai untuk deskripsi yang menyebut satu kartu atau satu panel.
 */
export async function shot(page, lang, path, opts = {}) {
  await calm(page)
  const file = join(DOCS, 'public/img', lang, path)
  mkdirSync(dirname(file), { recursive: true })
  if (opts.clip) {
    const el = page.locator(opts.clip).first()
    await el.waitFor({ state: 'visible' })
    await el.screenshot({ path: file })
  } else {
    await page.screenshot({ path: file, fullPage: Boolean(opts.full) })
  }
  console.log(`  ${existsSync(file) ? 'ok ' : 'GAGAL '} ${lang}/${path}`)
  return file
}

export const rnd = () => Math.random().toString(36).slice(2, 7)
