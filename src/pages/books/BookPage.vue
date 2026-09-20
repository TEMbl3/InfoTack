<template>
  <section>
    <RouterLink to="/books" class="back-link">Вернуться в каталог</RouterLink>

    <AppLoader v-if="loading" />

    <div v-else-if="error" class="state-card state-card--error">
      <strong>Книга не найдена</strong>
      <span>{{ error }}</span>
    </div>

    <article v-else-if="book" class="book-detail">
      <div class="detail-cover">
        <img v-if="book.cover_url" :src="book.cover_url" :alt="book.title" />
        <div v-else class="cover-placeholder cover-placeholder--large">{{ book.title.slice(0, 1) }}</div>
      </div>

      <div class="detail-content">
        <div class="detail-topline">
          <span class="eyebrow">Книги / {{ String(book.id).padStart(5, '0') }}</span>
          <span class="detail-year">{{ book.year }}</span>
        </div>

        <h1>{{ book.title }}</h1>

        <div class="detail-authors">
          <span>АВТОР{{ book.authors?.length > 1 ? 'Ы' : '' }}</span>
          <div>
            <RouterLink v-for="author in book.authors" :key="author.id" :to="`/authors/${author.id}`">{{ author.full_name }}</RouterLink>
          </div>
        </div>

        <p class="detail-description">{{ book.description || 'Описание отсутствует.' }}</p>

        <div class="detail-meta">
          <div><span>ISBN</span><strong>{{ book.isbn || '—' }}</strong></div>
          <div><span>Год выпуска</span><strong>{{ book.year }}</strong></div>
        </div>

        <div v-if="auth.isAuthenticated" class="detail-actions">
          <RouterLink :to="`/books/${book.id}/edit`" class="action-button">Редактировать</RouterLink>
          <button class="action-button action-button--danger" @click="showDelete = true">Удалить</button>
        </div>
      </div>
    </article>

    <AppModal
      v-model="showDelete"
      title="Удалить книгу?"
      description="Книга будет удалена из каталога. Это действие нельзя отменить."
      :loading="deleting"
      @confirm="remove"
    />
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useBooks } from '@/composables/useBooks'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppModal from '@/components/ui/AppModal.vue'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const { book, loading, error, fetchBook, deleteBook } = useBooks()
const showDelete = ref(false)
const deleting = ref(false)

async function remove() {
  deleting.value = true
  try {
    await deleteBook(route.params.id)
    router.push('/books')
  } finally {
    deleting.value = false
  }
}

onMounted(() => fetchBook(route.params.id))
</script>
