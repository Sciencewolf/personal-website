<script setup lang="ts">
const skills = ['Python', 'Flask', 'TypeScript', 'React', 'Kotlin', 'Raspberry Pi']
</script>

<template>
  <section id="about" class="welcome" aria-labelledby="welcome-title">
    <p class="welcome__eyebrow">Software Engineer · Debrecen, Hungary</p>

    <h1 id="welcome-title">Hi there, I'm Márton Áron.</h1>

    <p class="welcome__intro">
      I'm a software developer working across the stack — Python and Flask on the backend,
      TypeScript and Vue on the front — and I'm currently doing my Computer Science MSc at the
      University of Debrecen. I keep one foot in hardware: my BSc thesis was a smart incubator
      built on a Raspberry Pi, with its own control electronics and an Android app to run it.
      These days I'm most interested in where embedded systems, IoT and edge computing meet the
      web.
    </p>

    <div class="welcome__actions">
      <a class="button button--primary" href="#projects">View my work</a>
      <a class="button button--secondary" href="#contact">Get in touch</a>
    </div>

    <ul class="welcome__skills" aria-label="Main skills">
      <li v-for="skill in skills" :key="skill">{{ skill }}</li>
    </ul>
  </section>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 820px;
  min-height: min(64vh, 38rem);
  padding: 3rem 0 2rem;
}

.welcome__eyebrow {
  margin: 0 0 1.25rem;
  color: var(--color-accent);
  font-size: 0.85rem;
  font-weight: 650;
}

h1 {
  margin: 0;
  color: var(--color-heading);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 1;
}

.welcome__intro {
  max-width: 650px;
  margin: 1.5rem 0 0;
  color: var(--color-text-muted);
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  line-height: 1.7;
}

.welcome__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.7rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.4rem;
  color: var(--color-heading);
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 160ms ease, border-color 160ms ease;
}

.button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
}

.button--primary {
  border-color: var(--color-heading);
  background: var(--color-heading);
  color: var(--color-background);
}

.button--primary:hover {
  border-color: var(--color-heading-hover);
  background: var(--color-heading-hover);
}

.button--secondary:hover {
  border-color: var(--color-border-hover);
  background: var(--color-surface-raised);
}

.welcome__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin: 2.25rem 0 0;
  padding: 0;
  color: var(--color-text-subtle);
  font-size: 0.85rem;
  list-style: none;
}

.welcome__skills li:not(:last-child)::after {
  margin: 0 0.75rem;
  color: var(--color-separator);
  content: '·';
}

@media (max-width: 560px) {
  .welcome {
    min-height: auto;
    padding: 2.5rem 0 3rem;
  }

  .welcome__actions {
    align-items: stretch;
    flex-direction: column;
  }

  .button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}
</style>