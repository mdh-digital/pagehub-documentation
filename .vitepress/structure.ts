/**
 * Peta halaman dokumentasi — dipakai ketiga bahasa.
 *
 * Slug sengaja dibikin sama persis di semua bahasa (pakai kata Inggris) supaya
 * tombol ganti bahasa di navbar bisa mendarat di halaman yang sama, bukan
 * dilempar ke beranda. Yang diterjemahkan cuma label-nya (lihat locales/*.ts).
 */

/**
 * Tautan keluar dari panduan. Ditulis sekali di sini supaya tiga berkas locale
 * tidak bisa menunjuk ke host yang berbeda-beda.
 */
export const SITE_URL = 'https://pagehub.id'
export const APP_URL = 'https://account.pagehub.id'

export type SectionKey =
  | 'start'
  | 'website'
  | 'editor'
  | 'landing'
  | 'ai'
  | 'media'
  | 'blog'
  | 'commerce'
  | 'leads'
  | 'reports'
  | 'seo'
  | 'team'
  | 'account'
  | 'help'

export interface Section {
  key: SectionKey
  items: string[]
}

export const STRUCTURE: Section[] = [
  {
    key: 'start',
    items: [
      'getting-started/what-is-pagehub',
      'getting-started/concepts',
      'getting-started/account-setup',
      'getting-started/interface-tour',
      'getting-started/quickstart',
    ],
  },
  {
    key: 'website',
    items: [
      'website/create-website',
      'website/pages',
      'website/settings',
      'website/theme-and-brand',
      'website/header-footer',
      'website/navigation-menu',
      'website/tracking',
      'website/custom-domain',
      'website/website-templates',
    ],
  },
  {
    key: 'editor',
    items: [
      'editor/overview',
      'editor/visual-mode',
      'editor/blocks',
      'editor/code-mode',
      'editor/ai-chat',
      'editor/history',
      'editor/page-seo',
      'editor/publishing',
    ],
  },
  {
    key: 'landing',
    items: ['landing-pages/create-landing-page', 'landing-pages/landing-templates'],
  },
  {
    key: 'ai',
    items: ['ai/how-generation-works', 'ai/writing-prompts', 'ai/credits'],
  },
  {
    key: 'media',
    items: ['media/file-manager'],
  },
  {
    key: 'blog',
    items: ['blog/enable-blog', 'blog/write-articles'],
  },
  {
    key: 'commerce',
    items: [
      'commerce/overview',
      'commerce/store-settings',
      'commerce/categories-and-variants',
      'commerce/products',
      'commerce/storefront',
      'commerce/cart-and-checkout',
      'commerce/orders',
      'commerce/payments-and-invoices',
      'commerce/public-invoice',
      'commerce/abandoned-carts',
    ],
  },
  {
    key: 'leads',
    items: ['leads/form-submissions', 'leads/pipeline'],
  },
  {
    key: 'reports',
    items: ['reports/overview'],
  },
  {
    key: 'seo',
    items: ['seo/search-and-ai-discovery'],
  },
  {
    key: 'team',
    items: ['team/workspaces', 'team/members-and-access', 'team/brand-white-label'],
  },
  {
    key: 'account',
    items: [
      'account/profile',
      'account/plans-and-quota',
      'account/billing',
      'account/add-ons',
      'account/appsumo',
      'account/subscription-lapse',
    ],
  },
  {
    key: 'help',
    items: ['help/support-tickets', 'help/troubleshooting'],
  },
]

/** Semua slug dalam satu larik datar — buat cek kelengkapan terjemahan. */
export const ALL_SLUGS: string[] = STRUCTURE.flatMap((s) => s.items)

export interface Labels {
  /** label judul grup, key-nya = SectionKey */
  sections: Record<SectionKey, string>
  /** label item, key-nya = slug */
  pages: Record<string, string>
}

/** Susun sidebar VitePress dari struktur + label satu bahasa. */
export function buildSidebar(prefix: string, labels: Labels) {
  return STRUCTURE.map((section) => ({
    text: labels.sections[section.key],
    collapsed: false,
    items: section.items.map((slug) => ({
      text: labels.pages[slug] ?? slug,
      link: `${prefix}${slug}`,
    })),
  }))
}
