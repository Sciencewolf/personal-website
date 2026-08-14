<script setup lang="ts">
const skills = ['Software engineering', 'Web development', 'Problem solving']
</script>

<template>
  <section class="welcome" aria-labelledby="welcome-title">
    <p class="welcome__eyebrow">Software Engineer</p>

    <h1 id="welcome-title">Hi there, I'm Márton Áron.</h1>

    <p class="welcome__intro">
      I build reliable software and practical digital products. I enjoy solving complex problems
      and turning ideas into simple, maintainable solutions.
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
  min-height: calc(100vh - 6rem);
  padding: clamp(5rem, 12vw, 9rem) 0;
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
  font-size: clamp(3rem, 8vw, 6.5rem);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 1;
}

.welcome__intro {
  max-width: 650px;
  margin: 2rem 0 0;
  color: var(--color-text-muted);
  font-size: clamp(1rem, 1.6vw, 1.2rem);
  line-height: 1.7;
}

.welcome__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
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
  border-color: #d7d7d7;
  background: #d7d7d7;
}

.button--secondary:hover {
  border-color: #686868;
  background: #1c1c1c;
}

.welcome__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  margin: 3.5rem 0 0;
  padding: 0;
  color: var(--color-text-subtle);
  font-size: 0.85rem;
  list-style: none;
}

.welcome__skills li:not(:last-child)::after {
  margin: 0 0.75rem;
  color: #555;
  content: '·';
}

@media (max-width: 560px) {
  .welcome {
    min-height: calc(100vh - 5rem);
    padding: 4rem 0;
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
