<template>
  <div class="app-shell">
    <AppHeader />

    <main class="page-shell">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
</script>
