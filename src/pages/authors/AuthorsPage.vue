<template>
  <section>
    <div class="page-heading">
      <div>
        <h1>Авторы</h1>
        <p>Все авторы каталога в одном месте.</p>
      </div>
      <RouterLink v-if="auth.isAuthenticated" to="/authors/create" class="heading-action">Добавить автора</RouterLink>
    </div>

    <div class="filters-panel filters-panel--authors">
      <div class="search-field">
        <input v-model="search" placeholder="Поиск…" />
      </div>
    </div>

    <AppLoader v-if="loading" />

    <div v-else-if="!authors.length" class="state-card">
      <strong>Авторов не найдено</strong>
    </div>

    <div v-else class="author-grid">
      <AuthorCard v-for="author in authors" :key="author.id" :author="author" />
    </div>

    <AppPagination :page="pagination.page" :total-pages="pagination.total_pages" @change="changePage" />
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useAuthors } from '@/composables/useAuthors'
import AuthorCard from '@/components/authors/AuthorCard.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppPagination from '@/components/ui/AppPagination.vue'

const auth = useAuthStore()
const { authors, pagination, loading, fetchAuthors } = useAuthors()
const search = ref('')
const page = ref(1)
let timer

function fetch() {
  fetchAuthors({ search: search.value, page: page.value, 'per-page': 20 })
}

function changePage(value) {
  page.value = value
  fetch()
}

watch(search, () => {
  page.value = 1
  clearTimeout(timer)
  timer = setTimeout(fetch, 250)
})

onMounted(fetch)
</script>
