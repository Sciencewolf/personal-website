<script setup lang="ts"></script>

<template>
  <nav class="nav" aria-label="Main navigation">
    <a class="nav__brand" href="#" aria-label="Márton Áron – home">MÁ<span>.</span></a>

    <div class="nav__links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a
        class="nav__github"
        href="https://github.com/Sciencewolf"
        target="_blank"
        rel="noreferrer"
      >
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
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

.nav__github {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

@media (max-width: 600px) {
  .nav {
    min-height: 5rem;
  }

  .nav__links a:not(.nav__github) {
    display: none;
  }
}
</style>
