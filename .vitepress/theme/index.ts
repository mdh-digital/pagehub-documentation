import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Shot from './components/Shot.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Dipakai di semua halaman markdown tanpa perlu import.
    app.component('Shot', Shot)
  },
} satisfies Theme
