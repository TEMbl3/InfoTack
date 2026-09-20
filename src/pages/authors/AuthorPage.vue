<template>
  <section>
    <RouterLink to="/authors" class="back-link">Все авторы</RouterLink>

    <AppLoader v-if="loading" />

    <div v-else-if="!author" class="state-card state-card--error">
      <strong>Автор не найден</strong>
    </div>

    <article v-else-if="author" class="author-detail">
      <div class="author-hero">
        <div class="author-avatar author-avatar--huge">{{ initials }}</div>
        <div>
          <span class="eyebrow">Авторы / {{ String(author.id).padStart(5, '0') }}</span>
          <h1>{{ author.full_name }}</h1>
          <p>{{ author.books?.length || 0 }} книг в каталоге</p>
        </div>
        <RouterLink v-if="auth.isAuthenticated" :to="`/authors/${author.id}/edit`" class="heading-action">Редактировать</RouterLink>
      </div>

      <div class="author-books">
        <div class="section-title">
          <h2>Книги автора</h2>
          <span>{{ author.books?.length || 0 }}</span>
        </div>

        <div v-if="author.books?.length" class="mini-book-list">
          <RouterLink v-for="book in author.books" :key="book.id" :to="`/books/${book.id}`" class="mini-book">
            <span class="mini-book-year">{{ book.year }}</span>
            <strong>{{ book.title }}</strong>
            <span>→</span>
          </RouterLink>
        </div>

        <div v-else class="state-card">
          <strong>Книг пока нет</strong>
        </div>
      </div>

      <div v-if="auth.isAuthenticated" class="author-danger">
        <button @click="showDelete = true">Удалить автора</button>
      </div>
    </article>

    <AppModal
      v-model="showDelete"
      title="Удалить автора?"
      description="Автор будет удалён из каталога. Убедитесь, что backend разрешает удаление автора с книгами."
      :loading="deleting"
      @confirm="remove"
    />
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useAuthors } from '@/composables/useAuthors'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppModal from '@/components/ui/AppModal.vue'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const { author, loading, fetchAuthor, deleteAuthor } = useAuthors()
const showDelete = ref(false)
const deleting = ref(false)

const initials = computed(() => author.value?.full_name.split(' ').slice(0, 2).map((word) => word[0]).join(''))

async function remove() {
  deleting.value = true
  try {
    await deleteAuthor(route.params.id)
    router.push('/authors')
  } finally {
    deleting.value = false
  }
}

onMounted(() => fetchAuthor(route.params.id))
</script>
