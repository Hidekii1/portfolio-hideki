import './app.css'
import './lib/i18n.js'
import { locale } from 'svelte-i18n'
import App from './App.svelte'

try {
  const saved = localStorage.getItem('locale')
  const nav = navigator.language
  const normalized = (saved ?? nav ?? 'en-US').startsWith('es') ? 'es' : 'en-US'
  locale.set(normalized)
} catch {}

const app = new App({
  target: document.getElementById('app')!,
})

export default app
