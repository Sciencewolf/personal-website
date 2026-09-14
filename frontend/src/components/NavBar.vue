<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

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
  <nav ref="navElement" class="nav" aria-label="Main navigation">
    <a class="nav__brand" href="#about" aria-label="Márton Áron – home" @click="closeMenu">MÁ<span>.</span></a>

    <button
      ref="toggleElement"
      type="button"
      class="nav__toggle"
      aria-label="Toggle navigation menu"
      :aria-expanded="isMenuOpen"
      aria-controls="nav-links"
      @click="isMenuOpen = !isMenuOpen"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>

    <div id="nav-links" class="nav__links" :class="{ 'nav__links--open': isMenuOpen }">
      <a href="#about" @click="closeMenu">About</a>
      <a class="nav__projects" href="#projects" @click="closeMenu">Projects</a>
      <a href="#contact" @click="closeMenu">Contact</a>
      <a
        class="nav__external"
        href="https://files.martonaron.dev/data/Marton_Aron_CV.pdf"
        target="_blank"
        rel="noreferrer"
        @click="closeMenu"
      >
        CV <span aria-hidden="true">↗</span>
      </a>
      <a
        class="nav__external"
        href="https://github.com/Sciencewolf"
        target="_blank"
        rel="noreferrer"
        @click="closeMenu"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>
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
  .nav__links a {
    transition: none;
  }
}
</style>
