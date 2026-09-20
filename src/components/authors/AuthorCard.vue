<template>
  <RouterLink :to="`/authors/${author.id}`" class="author-card">
    <span class="author-card-info">
      <b>{{ author.full_name }}</b>
    </span>
    <span class="author-arrow">Открыть</span>
  </RouterLink>
</template>

<script setup>
const props = defineProps({ 
  author: { type: Object, required: true } 
})
</script>
