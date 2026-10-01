<script setup lang="ts">
import { computed } from 'vue'

import { useI18n } from '@/i18n'

const { m } = useI18n()

const columns = computed(() => [
  { id: 'experience', heading: m.value.experience.experienceHeading, items: m.value.experience.experience },
  { id: 'education', heading: m.value.experience.educationHeading, items: m.value.experience.education },
])
</script>

<template>
  <section id="experience" class="section experience" aria-labelledby="experience-title">
    <p class="section__eyebrow">{{ m.experience.eyebrow }}</p>
    <h2 id="experience-title" class="section__title">{{ m.experience.title }}</h2>

    <div class="experience__columns">
      <div v-for="column in columns" :key="column.id" class="experience__column">
        <h3>{{ column.heading }}</h3>

        <ol class="timeline">
          <li v-for="item in column.items" :key="item.title" class="timeline__item">
            <p v-if="item.period" class="timeline__period">{{ item.period }}</p>
            <h4>{{ item.title }}</h4>
            <p v-if="item.organization" class="timeline__organization">{{ item.organization }}</p>
            <p class="timeline__description">{{ item.description }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience__columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
  margin-top: 2.25rem;
}

h3 {
  margin: 0 0 1.5rem;
  color: var(--color-text-subtle);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.timeline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.timeline__item {
  position: relative;
  padding: 0 0 2rem 1.75rem;
  border-left: 1px solid var(--color-border);
}

.timeline__item:last-child {
  padding-bottom: 0;
  border-left-color: transparent;
}

.timeline__item::before {
  position: absolute;
  top: 0.3rem;
  left: -0.3rem;
  width: 0.6rem;
  height: 0.6rem;
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  background: var(--color-background);
  content: '';
}

/* The last item has no line of its own, so draw a short stub to keep the dot anchored. */
.timeline__item:last-child::after {
  position: absolute;
  top: 0.3rem;
  bottom: 0;
  left: -1px;
  width: 1px;
  background: linear-gradient(var(--color-border), transparent 4rem);
  content: '';
}

.timeline__period {
  margin: 0 0 0.35rem;
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 650;
}

h4 {
  margin: 0;
  color: var(--color-heading);
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.timeline__organization {
  margin: 0.25rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 550;
}

.timeline__description {
  margin: 0.75rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.65;
}

@media (max-width: 800px) {
  .experience__columns {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
