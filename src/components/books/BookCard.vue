<template>
  <article class="book-card">
    <RouterLink :to="`/books/${book.id}`" class="book-cover">
      <img v-if="book.cover_url" :src="book.cover_url" :alt="book.title" />
      <div v-else class="cover-placeholder">{{ book ? book?.title?.slice(0, 1) : '' }}</div>
      <span class="book-year">{{ book.year }}</span>
    </RouterLink>

    <div class="book-card-body">
      <div class="eyebrow">{{ authorsText }}</div>
      <RouterLink :to="`/books/${book.id}`" class="book-title">{{ book.title }}</RouterLink>
      <p>{{ book.description || 'Описание отсутствует.' }}</p>
      <div class="book-meta">
        <span v-if="book.isbn">ISBN {{ book.isbn }}</span>
        <RouterLink :to="`/books/${book.id}`">Подробнее</RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ 
  book: { type: Object, required: true } 
})
const authorsText = computed(() => props.book.authors?.map((author) => author.full_name).join(', ') || 'Автор неизвестен')
</script>
