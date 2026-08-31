import { defineConfig } from 'vitepress'
import { describe, HOSTNAME, seoHead } from './seo'
import { id, idSearch } from './locales/id'
import { en, enSearch } from './locales/en'
import { ar, arSearch } from './locales/ar'

export default defineConfig({
  // Bahasa Indonesia jadi locale root (di `/`), Inggris di `/en/`, Arab di `/ar/`.
  locales: {
    root: id,
    en,
    ar,
  },

  // Rapiin URL: /website/pages, bukan /website/pages.html.
  // Cloudflare Workers (assets, html_handling: auto-trailing-slash) yang
  // memetakan balik ke file .html-nya.
  // Berkas kerja di root repo, bukan halaman panduan.
  srcExclude: ['SCREENSHOTS.md', 'README.md', 'scripts/**'],

  // Sitemap dibangun saat build dari halaman yang benar-benar ada, jadi tidak
  // bisa mendaftarkan URL yang berujung 404.
  sitemap: { hostname: HOSTNAME },

  cleanUrls: true,
  lastUpdated: false,
  ignoreDeadLinks: false,

  head: [
    ['link', { rel: 'icon', href: '/pagehub-icon.webp', type: 'image/webp' }],
    ['meta', { name: 'theme-color', content: '#0a7a55' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'PageHub' }],
    // Font Arab dipakai cuma kalau <html dir="rtl"> (lihat theme/style.css).
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap',
      },
    ],
  ],

  themeConfig: {
    logo: { src: '/pagehub-icon.webp', width: 24, height: 24 },
    siteTitle: 'PageHub',
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        ...idSearch,
        locales: {
          en: enSearch,
          ar: arSearch,
        },
      },
    },
  },

  /**
   * Deskripsi per halaman, diturunkan dari paragraf pertamanya.
   *
   * Tanpa ini seluruh 169 halaman berbagi satu deskripsi situs — yang di mata
   * mesin pencari berarti tidak ada halaman yang benar-benar dijelaskan.
   */
  transformPageData(pageData, { siteConfig }) {
    const description = describe(siteConfig.srcDir, pageData)
    if (description) pageData.description = description
  },

  /** Canonical, hreflang tiga bahasa + x-default, dan kartu berbagi. */
  transformHead({ pageData, description, title }) {
    return seoHead(pageData, description, title)
  },

  vite: {
    build: {
      // Bikin bundle-nya cukup kecil buat batas ukuran file Workers assets.
      chunkSizeWarningLimit: 1500,
    },
  },
})
