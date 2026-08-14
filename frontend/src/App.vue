<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Welcome from '@/components/Welcome.vue'
</script>

<template>
  <header class="site-header">
    <NavBar />
  </header>

  <main class="site-main">
    <Welcome />
  </main>
</template>

<style scoped>
.site-header,
.site-main {
  width: min(100% - 3rem, 1440px);
  margin-inline: auto;
}

@media (max-width: 600px) {
  .site-header,
  .site-main {
    width: min(100% - 2rem, 1440px);
  }
}
</style>
