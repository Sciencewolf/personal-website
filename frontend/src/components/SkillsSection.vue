<script setup lang="ts">
import { useI18n } from '@/i18n'

const { m } = useI18n()
</script>

<template>
  <section id="skills" class="section skills" aria-labelledby="skills-title">
    <p class="section__eyebrow">{{ m.skills.eyebrow }}</p>
    <h2 id="skills-title" class="section__title">{{ m.skills.title }}</h2>
    <p class="section__intro">{{ m.skills.intro }}</p>

    <div class="skills__groups">
      <article v-for="group in m.skills.groups" :key="group.name" class="skills__group">
        <h3>{{ group.name }}</h3>
        <ul>
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills__groups {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.25rem;
}

.skills__group {
  padding: 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: var(--color-surface);
}

h3 {
  margin: 0;
  color: var(--color-heading);
  font-size: 1.05rem;
  letter-spacing: -0.02em;
}

ul {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1.1rem 0 0;
  padding: 0;
  list-style: none;
}

li {
  padding: 0.3rem 0.65rem;
  border: 1px solid var(--color-tag-border);
  border-radius: 999px;
  color: var(--color-tag-text);
  background: var(--color-tag-background);
  font-size: 0.78rem;
}

@media (max-width: 940px) {
  .skills__groups {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .skills__groups {
    grid-template-columns: 1fr;
  }
}
</style>
