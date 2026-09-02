<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import {
  fetchGitHubProfile,
  fetchGitHubRepositories,
  type GitHubProfile,
  type GitHubRepository,
} from '@/services/github'

const profile = ref<GitHubProfile | null>(null)
const repositories = ref<GitHubRepository[]>([])
const isLoading = ref(true)
const errorMessage = ref('')
let controller: AbortController | null = null

const visibleRepositories = computed(() => repositories.value.slice(0, 6))
const githubUrl = computed(() => {
  const owner = repositories.value[0]?.fullName.split('/')[0]
  return owner ? `https://github.com/${owner}` : 'https://github.com/Sciencewolf'
})

function formatDate(value: string): string {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return 'Recently updated'

  return `Updated ${new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)}`
}

async function loadGitHubData() {
  controller?.abort()
  controller = new AbortController()
  isLoading.value = true
  errorMessage.value = ''

  const [profileResult, repositoriesResult] = await Promise.allSettled([
    fetchGitHubProfile(controller.signal),
    fetchGitHubRepositories(controller.signal),
  ])

  if (profileResult.status === 'fulfilled') profile.value = profileResult.value
  if (repositoriesResult.status === 'fulfilled') repositories.value = repositoriesResult.value

  if (profileResult.status === 'rejected' || repositoriesResult.status === 'rejected') {
    errorMessage.value =
      profile.value || repositories.value.length
        ? 'Some GitHub information could not be loaded.'
        : 'GitHub information is temporarily unavailable.'
  }

  isLoading.value = false
}

onMounted(loadGitHubData)
onBeforeUnmount(() => controller?.abort())
</script>

<template>
  <section id="projects" class="github" aria-labelledby="github-title">
    <div class="github__heading">
      <div>
        <p class="github__eyebrow">Open source</p>
        <h2 id="github-title">Latest work on GitHub</h2>
      </div>

      <a class="github__all-link" :href="githubUrl" target="_blank" rel="noreferrer">
        View profile <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div v-if="profile" class="profile">
      <img class="profile__avatar" :src="profile.avatarUrl" :alt="`${profile.name}'s avatar`" />
      <div>
        <p class="profile__name">{{ profile.name }}</p>
        <p v-if="profile.location" class="profile__location">{{ profile.location }}</p>
      </div>
      <span class="profile__status"><span aria-hidden="true"></span> Available on GitHub</span>
    </div>

    <div v-if="isLoading" class="repositories repositories--loading" aria-live="polite">
      <span class="sr-only">Loading GitHub repositories…</span>
      <article v-for="index in 3" :key="index" class="repo-card repo-card--skeleton">
        <span></span><span></span><span></span>
      </article>
    </div>

    <div v-else-if="visibleRepositories.length" class="repositories">
      <article v-for="repo in visibleRepositories" :key="repo.fullName" class="repo-card">
        <div class="repo-card__topline">
          <span class="repo-card__icon" aria-hidden="true">⌁</span>
          <span>Public repository</span>
        </div>

        <h3>
          <a :href="repo.htmlUrl" target="_blank" rel="noreferrer">
            {{ repo.name }} <span aria-hidden="true">↗</span>
          </a>
        </h3>

        <p class="repo-card__description">
          {{ repo.description || 'A project from my GitHub workspace.' }}
        </p>

        <ul v-if="repo.topics.length" class="repo-card__topics" aria-label="Repository topics">
          <li v-for="topic in repo.topics.slice(0, 4)" :key="topic">{{ topic }}</li>
        </ul>

        <div class="repo-card__footer">
          <span>{{ formatDate(repo.pushedAt) }}</span>
          <a
            v-if="repo.homepage"
            :href="repo.homepage"
            target="_blank"
            rel="noreferrer"
            aria-label="Open live project"
          >
            Live site ↗
          </a>
        </div>
      </article>
    </div>

    <div v-else class="github__empty">
      <p>{{ errorMessage || 'No public repositories to show yet.' }}</p>
      <button type="button" @click="loadGitHubData">Try again</button>
    </div>

    <p v-if="errorMessage && visibleRepositories.length" class="github__notice" role="status">
      {{ errorMessage }}
      <button type="button" @click="loadGitHubData">Retry</button>
    </p>
  </section>
</template>

<style scoped>
.github {
  padding: clamp(2.5rem, 4vw, 3.5rem) 0;
  border-top: 1px solid var(--color-border);
}

.github__heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.25rem;
}

.github__eyebrow {
  margin: 0 0 0.65rem;
  color: var(--color-accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h2 {
  margin: 0;
  color: var(--color-heading);
  font-size: clamp(2rem, 5vw, 3.6rem);
  letter-spacing: -0.045em;
  line-height: 1.05;
}

.github__all-link {
  flex: none;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
}

.github__all-link:hover,
.github__all-link:focus-visible {
  border-color: var(--color-accent);
  color: var(--color-heading);
}

.profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding: 1rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: #161616;
}

.profile__avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
}

.profile__name,
.profile__location {
  margin: 0;
}

.profile__name {
  color: var(--color-heading);
  font-weight: 650;
}

.profile__location {
  margin-top: 0.15rem;
  color: var(--color-text-subtle);
  font-size: 0.82rem;
}

.profile__status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  color: var(--color-text-muted);
  font-size: 0.8rem;
}

.profile__status > span {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: #4fc17a;
  box-shadow: 0 0 0 4px rgb(79 193 122 / 12%);
}

.repositories {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.repo-card {
  display: flex;
  flex-direction: column;
  min-height: 18rem;
  padding: 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  background: #161616;
  transition: border-color 180ms ease, transform 180ms ease;
}

.repo-card:hover {
  border-color: #565656;
  transform: translateY(-2px);
}

.repo-card__topline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-subtle);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.repo-card__icon {
  color: var(--color-accent);
  font-size: 1rem;
}

h3 {
  margin: 1.2rem 0 0;
  font-size: 1.35rem;
  letter-spacing: -0.025em;
}

h3 a {
  color: var(--color-heading);
  text-decoration: none;
}

h3 a:hover,
h3 a:focus-visible {
  color: var(--color-accent);
}

.repo-card__description {
  margin: 0.9rem 0 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.65;
}

.repo-card__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;
}

.repo-card__topics li {
  padding: 0.3rem 0.55rem;
  border: 1px solid #303f58;
  border-radius: 999px;
  color: #a9c8ff;
  background: #18202c;
  font-size: 0.7rem;
}

.repo-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  color: var(--color-text-subtle);
  font-size: 0.74rem;
}

.repo-card__footer a {
  color: var(--color-text-muted);
  font-weight: 600;
  text-decoration: none;
}

.repo-card__footer a:hover,
.repo-card__footer a:focus-visible {
  color: var(--color-heading);
}

.repo-card--skeleton {
  gap: 1.1rem;
  min-height: 13rem;
  overflow: hidden;
}

.repo-card--skeleton span {
  width: 45%;
  height: 0.8rem;
  border-radius: 999px;
  background: #242424;
  animation: pulse 1.2s ease-in-out infinite alternate;
}

.repo-card--skeleton span:nth-child(2) {
  width: 70%;
  height: 1.4rem;
}

.repo-card--skeleton span:nth-child(3) {
  width: 90%;
}

.github__empty {
  display: grid;
  justify-items: start;
  gap: 1rem;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  color: var(--color-text-muted);
  background: #161616;
}

.github__empty p,
.github__notice {
  margin: 0;
}

.github__empty button,
.github__notice button {
  padding: 0;
  border: 0;
  border-bottom: 1px solid currentColor;
  color: var(--color-accent);
  background: transparent;
  font: inherit;
  cursor: pointer;
}

.github__notice {
  margin-top: 1rem;
  color: var(--color-text-subtle);
  font-size: 0.8rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes pulse {
  to {
    background: #313131;
  }
}

@media (max-width: 940px) {
  .repositories {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .github__heading {
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }

  .profile {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .profile__status {
    width: 100%;
    margin: 0.25rem 0 0 4rem;
  }

  .repositories {
    grid-template-columns: 1fr;
  }

  .repo-card {
    min-height: 16rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .repo-card {
    transition: none;
  }

  .repo-card--skeleton span {
    animation: none;
  }
}
</style>
