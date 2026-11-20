import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { APP_URL, buildSidebar, SITE_URL, type Labels } from '../structure'

const labels: Labels = {
  sections: {
    start: 'Memulai',
    website: 'Website',
    editor: 'Editor halaman',
    landing: 'Landing page',
    ai: 'AI',
    media: 'Media',
    blog: 'Blog',
    commerce: 'Toko (Commerce)',
    leads: 'Leads',
    reports: 'Laporan',
    seo: 'SEO',
    team: 'Tim & workspace',
    account: 'Akun & langganan',
    help: 'Bantuan',
  },
  pages: {
    'getting-started/what-is-pagehub': 'Apa itu PageHub',
    'getting-started/concepts': 'Konsep dasar',
    'getting-started/account-setup': 'Daftar & masuk',
    'getting-started/interface-tour': 'Tur antarmuka',
    'getting-started/quickstart': 'Bikin halaman pertama',

    'website/create-website': 'Membuat website',
    'website/pages': 'Mengelola halaman',
    'website/settings': 'Pengaturan website',
    'website/theme-and-brand': 'Tema & brand',
    'website/header-footer': 'Header & footer',
    'website/navigation-menu': 'Menu navigasi',
    'website/tracking': 'Tracking & pixel',
    'website/custom-domain': 'Domain kustom',
    'website/booking': 'Booking (janji temu)',
    'website/website-templates': 'Template website',

    'editor/overview': 'Mengenal editor',
    'editor/visual-mode': 'Mode visual',
    'editor/blocks': 'Palet blok',
    'editor/code-mode': 'Mode kode',
    'editor/ai-chat': 'Chat AI',
    'editor/history': 'Riwayat & undo',
    'editor/page-seo': 'SEO halaman',
    'editor/publishing': 'Terbitkan halaman',

    'landing-pages/create-landing-page': 'Membuat landing page',
    'landing-pages/landing-templates': 'Template landing page',

    'ai/how-generation-works': 'Cara AI menyusun halaman',
    'ai/writing-prompts': 'Menulis prompt',
    'ai/credits': 'Kredit AI',

    'media/file-manager': 'File Manager',

    'blog/enable-blog': 'Mengaktifkan blog',
    'blog/write-articles': 'Menulis artikel',

    'commerce/overview': 'Mengenal modul toko',
    'commerce/sell-on-sites': 'Menjual di website & landing page',
    'commerce/store-settings': 'Pengaturan toko',
    'commerce/categories-and-variants': 'Kategori & varian',
    'commerce/products': 'Produk',
    'commerce/digital-products': 'Produk digital',
    'commerce/storefront': 'Halaman toko',
    'commerce/product-cards': 'Kartu produk & blok toko',
    'commerce/cart-and-checkout': 'Keranjang & checkout',
    'commerce/orders': 'Transaksi',
    'commerce/shipping': 'Ongkir & lacak resi',
    'commerce/payments-and-invoices': 'Pembayaran & invoice',
    'commerce/online-payments': 'Pembayaran online & saldo',
    'commerce/partner-store': 'Partner Store',
    'commerce/public-invoice': 'Invoice publik',
    'commerce/abandoned-carts': 'Keranjang ditinggalkan',

    'leads/form-builder': 'Form builder',

    'leads/form-submissions': 'Form masuk',
    'leads/pipeline': 'Pipeline kanban',

    'reports/overview': 'Sepuluh laporan',

    'seo/search-and-ai-discovery': 'Search & AI discovery',

    'team/workspaces': 'Workspace',
    'team/members-and-access': 'Anggota & akses',
    'team/brand-white-label': 'Brand & white label',
    'team/reseller': 'Reseller',

    'account/profile': 'Profil & preferensi',
    'account/plans-and-quota': 'Paket & kuota',
    'account/billing': 'Upgrade & pembayaran',
    'account/add-ons': 'Add-on',
    'account/appsumo': 'Tukar kode AppSumo',
    'account/subscription-lapse': 'Kalau langganan berhenti',

    'help/support-tickets': 'Tiket bantuan',
    'help/troubleshooting': 'Masalah umum',
  },
}

export const id: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'Bahasa Indonesia',
  lang: 'id-ID',
  title: 'Panduan PageHub',
  description:
    'Panduan lengkap memakai PageHub — bikin website & landing page dengan AI, kelola toko, leads, dan laporan.',
  themeConfig: {
    nav: [
      { text: 'Panduan', link: '/getting-started/what-is-pagehub', activeMatch: '/' },
      { text: 'Situs PageHub', link: SITE_URL },
      { text: 'Buka aplikasi', link: APP_URL },
    ],
    sidebar: buildSidebar('/', labels),
    outline: { level: [2, 3], label: 'Di halaman ini' },
    docFooter: { prev: 'Sebelumnya', next: 'Selanjutnya' },
    darkModeSwitchLabel: 'Tampilan',
    lightModeSwitchTitle: 'Ganti ke mode terang',
    darkModeSwitchTitle: 'Ganti ke mode gelap',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Kembali ke atas',
    langMenuLabel: 'Ganti bahasa',
    lastUpdated: { text: 'Terakhir diperbarui' },
    footer: {
      message: 'Panduan penggunaan PageHub.',
      copyright: '© Manufactur Digital Hub',
    },
    notFound: {
      title: 'Halaman tidak ditemukan',
      quote: 'Halaman yang kamu tuju tidak ada atau sudah dipindahkan.',
      linkLabel: 'Ke beranda panduan',
      linkText: 'Kembali ke beranda',
    },
  },
}

export const idSearch = {
  translations: {
    button: { buttonText: 'Cari', buttonAriaLabel: 'Cari di panduan' },
    modal: {
      displayDetails: 'Tampilkan detail',
      resetButtonTitle: 'Hapus pencarian',
      backButtonTitle: 'Tutup pencarian',
      noResultsText: 'Tidak ada hasil untuk',
      footer: {
        selectText: 'pilih',
        selectKeyAriaLabel: 'enter',
        navigateText: 'navigasi',
        navigateUpKeyAriaLabel: 'panah atas',
        navigateDownKeyAriaLabel: 'panah bawah',
        closeText: 'tutup',
        closeKeyAriaLabel: 'escape',
      },
    },
  },
}
