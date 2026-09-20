<template>
  <div class="loader-state">
    <span class="spinner"></span>
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({ 
  text: { type: String, default: 'Загрузка…' } 
})
</script>
