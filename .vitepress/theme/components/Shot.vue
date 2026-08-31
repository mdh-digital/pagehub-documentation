<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'

/**
 * Berkas gambar yang benar-benar ada di `public/img`, dikumpulkan saat build.
 *
 * Ini yang bikin placeholder-nya betul sejak render di server: tanpa daftar
 * ini komponen bakal selalu nulis <img>, dan kotak putus-putusnya baru muncul
 * setelah browser gagal memuat gambarnya — artinya ikon "gambar rusak"
 * berkedip dulu di tiap halaman, dan tanpa JS nggak muncul sama sekali.
 *
 * Cuma kuncinya yang dipakai, isi berkasnya nggak ikut di-bundle.
 * Menambah screenshot baru butuh restart `npm run dev`.
 */
const AVAILABLE = new Set(
  Object.keys(import.meta.glob('../../../public/img/**/*', { eager: false })).map((p) =>
    p.slice(p.indexOf('/public/') + '/public'.length),
  ),
)

/**
 * Urutan bahasa yang dicoba untuk satu tangkapan.
 *
 * Tangkapan diambil per bahasa antarmuka aplikasi — pembaca panduan Arab
 * seharusnya melihat aplikasi berbahasa Arab, bukan Indonesia. Tapi satu
 * bahasa bisa saja belum sempat difoto, dan halaman tanpa gambar lebih buruk
 * daripada gambar berbahasa lain. Jadi: bahasanya sendiri dulu, lalu Inggris
 * (paling banyak dipahami), lalu Indonesia (bahasa sumber panduan ini).
 */
const FALLBACK: Record<string, string[]> = {
  id: ['id', 'en'],
  en: ['en', 'id'],
  ar: ['ar', 'en', 'id'],
}

const props = withDefaults(
  defineProps<{
    /** Path gambar di dalam `public/`, contoh: /img/website/list.png */
    src?: string
    /** Teks alternatif. Kalau kosong, dipakai deskripsi di slot. */
    alt?: string
    /** Lebarkan sampai keluar kolom teks (buat screenshot full-screen). */
    wide?: boolean
  }>(),
  { wide: false },
)

const { lang } = useData()

const failed = ref(false)
/**
 * Path gambar yang benar-benar dipakai, sudah memperhitungkan bahasa.
 *
 * Markdown menulis src netral (`/img/website/pages-tab.png`); berkasnya hidup
 * di `/img/<bahasa>/…`. Pemetaan itu dilakukan di sini supaya 168 halaman
 * markdown tidak perlu tahu soal bahasa sama sekali.
 */
const resolved = computed(() => {
  if (!props.src) return null
  const code = (lang.value || 'id').slice(0, 2)
  for (const l of FALLBACK[code] ?? FALLBACK.id) {
    const candidate = props.src.replace(/^\/img\//, `/img/${l}/`)
    if (AVAILABLE.has(candidate)) return candidate
  }
  return null
})

watch(resolved, () => (failed.value = false))

const showImage = computed(() => Boolean(resolved.value) && !failed.value)

const T = {
  id: { badge: 'Screenshot', pending: 'Belum ada gambar', path: 'Simpan di' },
  en: { badge: 'Screenshot', pending: 'Image not added yet', path: 'Save it at' },
  ar: { badge: 'لقطة شاشة', pending: 'لم تُضَف الصورة بعد', path: 'احفظها في' },
} as const

const t = computed(() => {
  const code = (lang.value || 'id').slice(0, 2)
  return T[code as keyof typeof T] ?? T.id
})
</script>

<template>
  <figure class="ph-shot" :class="{ 'ph-shot--wide': wide }">
    <img
      v-if="showImage"
      class="ph-shot__img"
      :src="resolved ?? undefined"
      :alt="alt || ''"
      loading="lazy"
      decoding="async"
      @error="failed = true"
    />
    <div v-else class="ph-shot__ph" role="img" :aria-label="alt || t.badge">
      <div class="ph-shot__head">
        <svg
          class="ph-shot__icon"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          stroke-width="1.7"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span class="ph-shot__badge">{{ t.badge }}</span>
        <span class="ph-shot__pending">{{ t.pending }}</span>
      </div>
      <p class="ph-shot__desc"><slot /></p>
      <p v-if="src" class="ph-shot__path">
        <span>{{ t.path }}</span>
        <code>public{{ src }}</code>
      </p>
    </div>

    <figcaption v-if="showImage" class="ph-shot__cap"><slot /></figcaption>
  </figure>
</template>

<style scoped>
.ph-shot {
  margin: 24px 0;
}
.ph-shot--wide {
  margin-inline: calc(-1 * clamp(0px, 4vw, 64px));
}

.ph-shot__img {
  display: block;
  width: 100%;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}

.ph-shot__cap {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.ph-shot__ph {
  border: 1px dashed var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  padding: 16px 18px;
}

.ph-shot__head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.ph-shot__icon {
  color: var(--vp-c-brand-1);
  flex: none;
}
.ph-shot__badge {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
}
.ph-shot__pending {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.ph-shot__desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.ph-shot__path {
  margin: 10px 0 0;
  font-size: 12px;
  color: var(--vp-c-text-3);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.ph-shot__path code {
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 5px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  direction: ltr;
  unicode-bidi: embed;
}
</style>
