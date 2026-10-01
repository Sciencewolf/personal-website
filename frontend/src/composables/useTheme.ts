import { ref, watch } from 'vue'

export type Theme = 'light' | 'dark'

const storageKey = 'theme'
const themeColors: Record<Theme, string> = { light: '#fbfbfb', dark: '#111111' }

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function storedTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(storageKey)
    return stored === 'light' || stored === 'dark' ? stored : null
  } catch {
    return null
  }
}

const theme = ref<Theme>(storedTheme() ?? systemTheme())

function applyTheme(value: Theme) {
  document.documentElement.dataset.theme = value
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', themeColors[value])
}

/** Applies the theme to `<html>` and follows the OS setting until the visitor picks one. */
export function initTheme() {
  watch(theme, applyTheme, { immediate: true })

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
    if (!storedTheme()) theme.value = systemTheme()
  })
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'

  try {
    localStorage.setItem(storageKey, theme.value)
  } catch {
    // The choice just won't persist.
  }
}

export function useTheme() {
  return { theme, toggleTheme }
}
