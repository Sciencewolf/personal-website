import { computed, ref, watch } from 'vue'

import { en, type Messages } from './en'
import { hu } from './hu'

export type Locale = 'en' | 'hu'

const storageKey = 'locale'
const dictionaries: Record<Locale, Messages> = { en, hu }

function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'hu'
}

function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(storageKey)
    if (isLocale(stored)) return stored
  } catch {
    // Storage can be blocked; fall back to the browser language.
  }

  return navigator.language.toLowerCase().startsWith('hu') ? 'hu' : 'en'
}

const locale = ref<Locale>(detectLocale())
const messages = computed(() => dictionaries[locale.value])

function applyLocale(value: Locale) {
  const { title, description } = dictionaries[value].meta

  document.documentElement.lang = value
  document.title = title
  document
    .querySelector<HTMLMetaElement>('meta[name="description"]')
    ?.setAttribute('content', description)
}

/** Keeps `<html lang>`, the title and the meta description in sync with the active locale. */
export function initI18n() {
  watch(locale, applyLocale, { immediate: true })
}

function setLocale(value: Locale) {
  locale.value = value

  try {
    localStorage.setItem(storageKey, value)
  } catch {
    // The choice just won't persist.
  }
}

function toggleLocale() {
  setLocale(locale.value === 'en' ? 'hu' : 'en')
}

/** Replaces `{name}` style placeholders in a message. */
export function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}

export function useI18n() {
  return { locale, m: messages, setLocale, toggleLocale }
}
