/**
 * Klien API tipis untuk mengisi akun uji.
 *
 * Data diisi lewat API produk, bukan INSERT langsung ke tabel: dengan begitu
 * aturan bisnisnya (kuota, slug unik, urutan halaman, potong stok) ikut jalan,
 * jadi yang difoto adalah keadaan yang benar-benar bisa terjadi.
 */
import { readFileSync } from 'node:fs'
import { BE } from './lib.mjs'

const API = `${BE}/api`
let token = null

export async function login(email, password) {
  const r = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!r.ok) throw new Error(`login gagal: ${r.status} ${await r.text()}`)
  const data = await r.json()
  token = data.token || data.accessToken
  if (!token) throw new Error('respons login tanpa token: ' + JSON.stringify(data).slice(0, 200))
  return data
}

export function account() {
  return JSON.parse(readFileSync(new URL('./account.json', import.meta.url), 'utf8'))
}

async function call(method, path, body, opts = {}) {
  const headers = { Authorization: `Bearer ${token}` }
  let payload = body
  if (body && !(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json'
    payload = JSON.stringify(body)
  }
  const r = await fetch(API + path, { method, headers, body: payload })
  const text = await r.text()
  if (!r.ok) {
    const err = new Error(`${method} ${path} -> ${r.status} ${text.slice(0, 300)}`)
    err.status = r.status
    throw err
  }
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

export const get = (p) => call('GET', p)
export const post = (p, b) => call('POST', p, b)
export const put = (p, b) => call('PUT', p, b)
export const del = (p) => call('DELETE', p)

/** Sama seperti post(), tapi kegagalan cuma dicatat — dipakai untuk langkah
 *  opsional yang tidak boleh menghentikan seluruh proses seeding. */
export async function tryPost(p, b, label) {
  try {
    return await post(p, b)
  } catch (e) {
    console.log(`  (lewat) ${label || p}: ${e.message.slice(0, 120)}`)
    return null
  }
}

export const token_ = () => token
