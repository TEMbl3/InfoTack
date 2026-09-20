<template>
  <section>
    <div class="page-heading page-heading--catalog">
      <div>
        <h1>Каталог книг</h1>
        <p>Найдите книгу по автру или году выпуска</p>
      </div>
      <RouterLink v-if="auth.isAuthenticated" to="/books/create" class="heading-action">Добавить книгу</RouterLink>
    </div>

    <BookFilters
      v-model:search="filters.search"
      v-model:author-id="filters.author_id"
      v-model:year="filters.year"
      :authors="authors"
      @reset="resetFilters"
    />

    <div class="results-line">
      <span><b>{{ pagination.total }}</b> книг в каталоге</span>
      <span v-if="filters.search || filters.author_id || filters.year">Фильтры применены</span>
    </div>

    <AppLoader v-if="loading" />

    <div v-else-if="error" class="state-card state-card--error">
      <strong>Не удалось загрузить каталог</strong>
      <span>{{ error }}</span>
      <AppButton variant="secondary" @click="fetch">Повторить</AppButton>
    </div>

    <div v-else-if="!books.length" class="state-card">
      <strong>Ничего не найдено</strong>
      <span>Попробуйте изменить параметры поиска.</span>
    </div>

    <div v-else class="book-grid">
      <BookCard v-for="book in books" :key="book.id" :book="book" />
    </div>

    <AppPagination :page="pagination.page" :total-pages="pagination.total_pages" @change="changePage" />
  </section>
</template>

<script setup>
import { onMounted, reactive, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useBooks } from '@/composables/useBooks'
import { useAuthors } from '@/composables/useAuthors'
import BookCard from '@/components/books/BookCard.vue'
import BookFilters from '@/components/books/BookFilters.vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppPagination from '@/components/ui/AppPagination.vue'

const auth = useAuthStore()
const { books, pagination, loading, error, fetchBooks } = useBooks()
const { authors, fetchAuthors } = useAuthors()

const filters = reactive({ search: '', author_id: '', year: '', page: 1 })

async function fetch() {
  await fetchBooks({
    search: filters.search,
    author_id: filters.author_id || undefined,
    year: filters.year || undefined,
    page: filters.page,
    'per-page': 20
  })
}

function resetFilters() {
  filters.search = ''
  filters.author_id = ''
  filters.year = ''
  filters.page = 1
  fetch()
}

function changePage(page) {
  filters.page = page
  fetch()
}

let timer
watch(() => [filters.search, filters.author_id, filters.year], () => {
  filters.page = 1
  clearTimeout(timer)
  timer = setTimeout(fetch, 280)
})

onMounted(() => {
  fetch()
  fetchAuthors({ 'per-page': 100 })
})
</script>
