<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { useTheme } from '@/composables/useTheme'
import { useI18n } from '@/i18n'

const { locale, m, toggleLocale } = useI18n()
const { theme, toggleTheme } = useTheme()

const isMenuOpen = ref(false)
const navElement = ref<HTMLElement | null>(null)
const toggleElement = ref<HTMLButtonElement | null>(null)

function closeMenu() {
  isMenuOpen.value = false
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key !== 'Escape' || !isMenuOpen.value) return

  closeMenu()
  toggleElement.value?.focus()
}

function handlePointerDown(event: PointerEvent) {
  if (!isMenuOpen.value) return
  if (navElement.value?.contains(event.target as Node)) return

  closeMenu()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('pointerdown', handlePointerDown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('pointerdown', handlePointerDown)
})
</script>

<template>
  <nav ref="navElement" class="nav" :aria-label="m.nav.label">
    <a class="nav__brand" href="#about" :aria-label="m.nav.home" @click="closeMenu">MÁ<span>.</span></a>

    <div class="nav__end">
      <div id="nav-links" class="nav__links" :class="{ 'nav__links--open': isMenuOpen }">
        <a href="#about" @click="closeMenu">{{ m.nav.about }}</a>
        <a href="#skills" @click="closeMenu">{{ m.nav.skills }}</a>
        <a href="#experience" @click="closeMenu">{{ m.nav.experience }}</a>
        <a class="nav__projects" href="#projects" @click="closeMenu">{{ m.nav.projects }}</a>
        <a href="#contact" @click="closeMenu">{{ m.nav.contact }}</a>
        <a
          class="nav__external"
          href="https://files.martonaron.dev/data/Marton_Aron_CV.pdf"
          target="_blank"
          rel="noreferrer"
          @click="closeMenu"
        >
          {{ m.nav.cv }} <span aria-hidden="true">↗</span>
        </a>
        <a
          class="nav__external"
          href="https://github.com/Sciencewolf"
          target="_blank"
          rel="noreferrer"
          @click="closeMenu"
        >
          {{ m.nav.github }} <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="nav__controls">
        <button
          type="button"
          class="nav__control nav__language"
          :aria-label="m.nav.switchLanguage"
          @click="toggleLocale"
        >
          <span :class="{ 'is-active': locale === 'en' }" lang="en">EN</span>
          <span aria-hidden="true">/</span>
          <span :class="{ 'is-active': locale === 'hu' }" lang="hu">HU</span>
        </button>

        <button
          type="button"
          class="nav__control nav__theme"
          :aria-label="theme === 'dark' ? m.nav.switchToLight : m.nav.switchToDark"
          @click="toggleTheme"
        >
          <svg
            v-if="theme === 'dark'"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
          <svg
            v-else
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        </button>
      </div>

      <button
        ref="toggleElement"
        type="button"
        class="nav__toggle"
        :aria-label="m.nav.toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-controls="nav-links"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 6rem;
  border-bottom: 1px solid var(--color-border);
}

.nav__brand {
  color: var(--color-heading);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.06em;
  text-decoration: none;
}

.nav__brand span {
  color: var(--color-accent);
}

.nav__end {
  display: flex;
  align-items: center;
  gap: clamp(1.1rem, 3vw, 2.4rem);
}

.nav__controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav__control {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 0.4rem;
  color: var(--color-text-muted);
  background: transparent;
  font: inherit;
  font-size: 0.74rem;
  font-weight: 650;
  cursor: pointer;
  transition: color 180ms ease, border-color 180ms ease;
}

.nav__control:hover {
  border-color: var(--color-border-hover);
  color: var(--color-heading);
}

.nav__control:focus-visible,
.nav__toggle:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}

.nav__language .is-active {
  color: var(--color-heading);
}

.nav__toggle {
  display: none;
  flex-direction: column;
  gap: 0.32rem;
  padding: 0.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;
}

.nav__toggle span {
  display: block;
  width: 1.4rem;
  height: 2px;
  background: var(--color-heading);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: clamp(1.1rem, 3vw, 2.4rem);
}

.nav__links a {
  color: var(--color-text-muted);
  font-size: 0.84rem;
  font-weight: 550;
  text-decoration: none;
  transition: color 180ms ease;
}

.nav__links a:hover,
.nav__links a:focus-visible {
  color: var(--color-heading);
}

.nav__external {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

@media (max-width: 600px) {
  .nav {
    min-height: 5rem;
  }

  .nav__toggle {
    display: flex;
  }

  .nav__end {
    gap: 0.5rem;
  }

  .nav__links {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 10;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border);
    background: var(--color-background);
  }

  .nav__links--open {
    display: flex;
  }

  .nav__links a {
    padding: 0.85rem 0.25rem;
    border-top: 1px solid var(--color-border);
  }

  .nav__links a:first-child {
    border-top: 0;
  }

  .nav__external {
    justify-content: space-between;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav__control,
  .nav__links a {
    transition: none;
  }
}
</style>
