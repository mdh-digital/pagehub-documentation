import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { APP_URL, buildSidebar, SITE_URL, type Labels } from '../structure'

const labels: Labels = {
  sections: {
    start: 'البداية',
    website: 'المواقع',
    editor: 'محرّر الصفحات',
    landing: 'صفحات الهبوط',
    ai: 'الذكاء الاصطناعي',
    media: 'الوسائط',
    blog: 'المدوّنة',
    commerce: 'المتجر',
    leads: 'العملاء المحتملون',
    reports: 'التقارير',
    seo: 'تحسين الظهور',
    team: 'الفريق ومساحات العمل',
    account: 'الحساب والاشتراك',
    help: 'المساعدة',
  },
  pages: {
    'getting-started/what-is-pagehub': 'ما هو PageHub',
    'getting-started/concepts': 'المفاهيم الأساسية',
    'getting-started/account-setup': 'التسجيل وتسجيل الدخول',
    'getting-started/interface-tour': 'جولة في الواجهة',
    'getting-started/quickstart': 'أنشئ صفحتك الأولى',

    'website/create-website': 'إنشاء موقع',
    'website/pages': 'إدارة الصفحات',
    'website/settings': 'إعدادات الموقع',
    'website/theme-and-brand': 'المظهر والهوية',
    'website/header-footer': 'الترويسة والتذييل',
    'website/navigation-menu': 'قائمة التنقّل',
    'website/tracking': 'التتبّع والبكسل',
    'website/custom-domain': 'النطاق المخصّص',
    'website/booking': 'الحجز (المواعيد)',
    'website/website-templates': 'قوالب المواقع',

    'editor/overview': 'التعرّف على المحرّر',
    'editor/visual-mode': 'الوضع المرئي',
    'editor/blocks': 'لوحة الكتل',
    'editor/code-mode': 'وضع الشيفرة',
    'editor/ai-chat': 'محادثة الذكاء الاصطناعي',
    'editor/history': 'السجل والتراجع',
    'editor/page-seo': 'تحسين ظهور الصفحة',
    'editor/publishing': 'نشر الصفحة',

    'landing-pages/create-landing-page': 'إنشاء صفحة هبوط',
    'landing-pages/landing-templates': 'قوالب صفحات الهبوط',

    'ai/how-generation-works': 'كيف يبني الذكاء الاصطناعي الصفحة',
    'ai/writing-prompts': 'كتابة الأوامر',
    'ai/credits': 'أرصدة الذكاء الاصطناعي',

    'media/file-manager': 'مدير الملفات',

    'blog/enable-blog': 'تفعيل المدوّنة',
    'blog/write-articles': 'كتابة المقالات',

    'commerce/overview': 'نظرة على وحدة المتجر',
    'commerce/sell-on-sites': 'البيع في المواقع وصفحات الهبوط',
    'commerce/store-settings': 'إعدادات المتجر',
    'commerce/categories-and-variants': 'التصنيفات والخيارات',
    'commerce/products': 'المنتجات',
    'commerce/digital-products': 'المنتجات الرقمية',
    'commerce/storefront': 'صفحات المتجر',
    'commerce/product-cards': 'بطاقات المنتجات وكتل المتجر',
    'commerce/cart-and-checkout': 'السلة وإتمام الطلب',
    'commerce/orders': 'الطلبات',
    'commerce/shipping': 'الشحن وتتبّع الشحنات',
    'commerce/payments-and-invoices': 'المدفوعات والفواتير',
    'commerce/online-payments': 'الدفع الإلكتروني والرصيد',
    'commerce/partner-store': 'متجر الشريك',
    'commerce/public-invoice': 'الفاتورة العامة',
    'commerce/abandoned-carts': 'السلات المتروكة',

    'leads/form-builder': 'منشئ النماذج',

    'leads/form-submissions': 'رسائل النماذج',
    'leads/pipeline': 'لوحة المراحل',

    'reports/overview': 'التقارير العشرة',

    'seo/search-and-ai-discovery': 'محركات البحث والذكاء الاصطناعي',

    'team/workspaces': 'مساحات العمل',
    'team/members-and-access': 'الأعضاء والصلاحيات',
    'team/brand-white-label': 'الهوية والعلامة البيضاء',
    'team/reseller': 'الموزّع',

    'account/profile': 'الملف الشخصي والتفضيلات',
    'account/plans-and-quota': 'الباقات والحصص',
    'account/billing': 'الترقية والدفع',
    'account/add-ons': 'الإضافات',
    'account/appsumo': 'استبدال رمز AppSumo',
    'account/subscription-lapse': 'عند توقّف الاشتراك',

    'help/support-tickets': 'تذاكر الدعم',
    'help/troubleshooting': 'مشكلات شائعة',
  },
}

export const ar: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'العربية',
  lang: 'ar',
  dir: 'rtl',
  link: '/ar/',
  title: 'دليل PageHub',
  description:
    'الدليل الكامل لاستخدام PageHub — أنشئ المواقع وصفحات الهبوط بالذكاء الاصطناعي، وأدر متجرك وعملاءك وتقاريرك.',
  themeConfig: {
    nav: [
      { text: 'الدليل', link: '/ar/getting-started/what-is-pagehub', activeMatch: '/ar/' },
      { text: 'موقع PageHub', link: SITE_URL },
      { text: 'فتح التطبيق', link: APP_URL },
    ],
    sidebar: buildSidebar('/ar/', labels),
    outline: { level: [2, 3], label: 'في هذه الصفحة' },
    docFooter: { prev: 'السابق', next: 'التالي' },
    darkModeSwitchLabel: 'المظهر',
    lightModeSwitchTitle: 'التبديل إلى الوضع الفاتح',
    darkModeSwitchTitle: 'التبديل إلى الوضع الداكن',
    sidebarMenuLabel: 'القائمة',
    returnToTopLabel: 'العودة إلى الأعلى',
    langMenuLabel: 'تغيير اللغة',
    lastUpdated: { text: 'آخر تحديث' },
    footer: {
      message: 'دليل استخدام PageHub.',
      copyright: '© Manufactur Digital Hub',
    },
    notFound: {
      title: 'الصفحة غير موجودة',
      quote: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
      linkLabel: 'الذهاب إلى صفحة الدليل',
      linkText: 'العودة إلى البداية',
    },
  },
}

export const arSearch = {
  translations: {
    button: { buttonText: 'بحث', buttonAriaLabel: 'ابحث في الدليل' },
    modal: {
      displayDetails: 'عرض التفاصيل',
      resetButtonTitle: 'مسح البحث',
      backButtonTitle: 'إغلاق البحث',
      noResultsText: 'لا نتائج لـ',
      footer: {
        selectText: 'اختيار',
        navigateText: 'تنقّل',
        closeText: 'إغلاق',
      },
    },
  },
}
