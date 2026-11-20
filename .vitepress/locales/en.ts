import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { APP_URL, buildSidebar, SITE_URL, type Labels } from '../structure'

const labels: Labels = {
  sections: {
    start: 'Getting started',
    website: 'Websites',
    editor: 'Page editor',
    landing: 'Landing pages',
    ai: 'AI',
    media: 'Media',
    blog: 'Blog',
    commerce: 'Store (Commerce)',
    leads: 'Leads',
    reports: 'Reports',
    seo: 'SEO',
    team: 'Team & workspaces',
    account: 'Account & billing',
    help: 'Help',
  },
  pages: {
    'getting-started/what-is-pagehub': 'What is PageHub',
    'getting-started/concepts': 'Core concepts',
    'getting-started/account-setup': 'Sign up & sign in',
    'getting-started/interface-tour': 'Interface tour',
    'getting-started/quickstart': 'Build your first page',

    'website/create-website': 'Create a website',
    'website/pages': 'Manage pages',
    'website/settings': 'Website settings',
    'website/theme-and-brand': 'Theme & brand',
    'website/header-footer': 'Header & footer',
    'website/navigation-menu': 'Navigation menu',
    'website/tracking': 'Tracking & pixels',
    'website/custom-domain': 'Custom domain',
    'website/booking': 'Booking (appointments)',
    'website/website-templates': 'Website templates',

    'editor/overview': 'Editor basics',
    'editor/visual-mode': 'Visual mode',
    'editor/blocks': 'Block palette',
    'editor/code-mode': 'Code mode',
    'editor/ai-chat': 'AI chat',
    'editor/history': 'History & undo',
    'editor/page-seo': 'Page SEO',
    'editor/publishing': 'Publishing a page',

    'landing-pages/create-landing-page': 'Create a landing page',
    'landing-pages/landing-templates': 'Landing page templates',

    'ai/how-generation-works': 'How AI builds a page',
    'ai/writing-prompts': 'Writing prompts',
    'ai/credits': 'AI credits',

    'media/file-manager': 'File Manager',

    'blog/enable-blog': 'Turn on the blog',
    'blog/write-articles': 'Writing articles',

    'commerce/overview': 'Store module overview',
    'commerce/sell-on-sites': 'Selling on websites & landing pages',
    'commerce/store-settings': 'Store settings',
    'commerce/categories-and-variants': 'Categories & variants',
    'commerce/products': 'Products',
    'commerce/digital-products': 'Digital products',
    'commerce/storefront': 'Storefront pages',
    'commerce/product-cards': 'Product cards & store blocks',
    'commerce/cart-and-checkout': 'Cart & checkout',
    'commerce/orders': 'Orders',
    'commerce/shipping': 'Shipping & tracking',
    'commerce/payments-and-invoices': 'Payments & invoices',
    'commerce/online-payments': 'Online payments & balance',
    'commerce/partner-store': 'Partner Store',
    'commerce/public-invoice': 'Public invoice',
    'commerce/abandoned-carts': 'Abandoned carts',

    'leads/form-builder': 'Form builder',

    'leads/form-submissions': 'Form submissions',
    'leads/pipeline': 'Kanban pipeline',

    'reports/overview': 'The ten reports',

    'seo/search-and-ai-discovery': 'Search & AI discovery',

    'team/workspaces': 'Workspaces',
    'team/members-and-access': 'Members & access',
    'team/brand-white-label': 'Brand & white label',
    'team/reseller': 'Reseller',

    'account/profile': 'Profile & preferences',
    'account/plans-and-quota': 'Plans & quota',
    'account/billing': 'Upgrading & payment',
    'account/add-ons': 'Add-ons',
    'account/appsumo': 'Redeem an AppSumo code',
    'account/subscription-lapse': 'When a subscription lapses',

    'help/support-tickets': 'Support tickets',
    'help/troubleshooting': 'Common problems',
  },
}

export const en: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'English',
  lang: 'en-US',
  link: '/en/',
  title: 'PageHub Guide',
  description:
    'The complete guide to PageHub — build websites and landing pages with AI, run a store, track leads and read your reports.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/en/getting-started/what-is-pagehub', activeMatch: '/en/' },
      { text: 'PageHub site', link: SITE_URL },
      { text: 'Open the app', link: APP_URL },
    ],
    sidebar: buildSidebar('/en/', labels),
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Back to top',
    langMenuLabel: 'Change language',
    lastUpdated: { text: 'Last updated' },
    footer: {
      message: 'PageHub user guide.',
      copyright: '© Manufactur Digital Hub',
    },
    notFound: {
      title: 'Page not found',
      quote: 'The page you were looking for does not exist or has been moved.',
      linkLabel: 'Go to the guide home',
      linkText: 'Back home',
    },
  },
}

export const enSearch = {
  translations: {
    button: { buttonText: 'Search', buttonAriaLabel: 'Search the guide' },
    modal: {
      displayDetails: 'Display detailed list',
      resetButtonTitle: 'Reset search',
      backButtonTitle: 'Close search',
      noResultsText: 'No results for',
      footer: {
        selectText: 'to select',
        navigateText: 'to navigate',
        closeText: 'to close',
      },
    },
  },
}
