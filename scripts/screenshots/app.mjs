/**
 * Membuka aplikasi dalam keadaan sudah login, bahasa dan workspace terpilih.
 *
 * Token disuntik ke localStorage alih-alih mengisi form login tiap kali: yang
 * difoto adalah layar di dalam aplikasi, dan mengulang alur login 70 kali cuma
 * menambah titik gagal tanpa menambah satu pun tangkapan.
 */
import { readFileSync } from 'node:fs'
import { FE, calm, launch } from './lib.mjs'
import { account, login, token_ } from './api.mjs'

export function ids() {
  return JSON.parse(readFileSync(new URL('./ids.json', import.meta.url), 'utf8'))
}

export async function openApp({ lang = 'id', workspace = null } = {}) {
  const acc = account()
  await login(acc.email, acc.password)
  const token = token_()

  const { browser, page } = await launch()
  await page.addInitScript(
    ([t, l, w]) => {
      localStorage.setItem('lpb_token', t)
      localStorage.setItem('pagehub.locale', l)
      if (w) localStorage.setItem('pagehub.workspace', w)
      // Iklan silang di dashboard bukan bagian dari panduan.
      localStorage.setItem('pagehub.promo.dashboard', 'off')
    },
    [token, lang, workspace],
  )
  return { browser, page, lang }
}

/** Buka satu rute aplikasi lalu tunggu sampai layarnya benar-benar diam. */
export async function go(page, path, { wait = 1200, until = 'networkidle' } = {}) {
  await page.goto(FE + path, { waitUntil: until }).catch(() => page.goto(FE + path))
  await page.waitForTimeout(wait)
  await calm(page)
}

/** Klik sesuatu berdasarkan teks yang terlihat, lalu tunggu sebentar. */
export async function click(page, text, { nth = 0, wait = 800 } = {}) {
  const el = page.getByText(text, { exact: false }).nth(nth)
  await el.waitFor({ state: 'visible', timeout: 10000 })
  await el.click()
  await page.waitForTimeout(wait)
}

/** Kembalikan true kalau teks itu ada di layar — untuk memutuskan cabang. */
export async function seen(page, text) {
  return (await page.getByText(text, { exact: false }).count()) > 0
}
