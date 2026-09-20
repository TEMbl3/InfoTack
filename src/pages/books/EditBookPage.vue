<template>
  <section>
    <div class="page-heading">
      <div>
        <h1>Редактирование</h1>
        <p>Измените данные книги.</p>
      </div>
    </div>

    <AppLoader v-if="loading && !form.title" />

    <BookForm
      v-else
      :form="form"
      :authors="authors"
      :errors="errors"
      :loading="saving"
      edit-mode
      @submit="submit"
    />
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBooks } from '@/composables/useBooks'
import { useAuthors } from '@/composables/useAuthors'
import { validateBook } from '@/utils/validation'
import BookForm from '@/components/books/BookForm.vue'
import AppLoader from '@/components/ui/AppLoader.vue'

const route = useRoute()
const router = useRouter()
const { fetchBook, updateBook, loading } = useBooks()
const { authors, fetchAuthors } = useAuthors()
const saving = ref(false)
const errors = ref({})

const form = reactive({
  title: '',
  year: '',
  description: '',
  isbn: '',
  author_ids: [],
  cover: null,
  coverPreview: '',
  cover_url: ''
})

async function load() {
  const book = await fetchBook(route.params.id)
  Object.assign(form, {
    title: book.title,
    year: book.year,
    description: book.description || '',
    isbn: book.isbn || '',
    author_ids: book.authors?.map((a) => a.id) || [],
    cover_url: book.cover_url || ''
  })
}

async function submit() {
  errors.value = validateBook(form)
  if (Object.keys(errors.value).length) return

  saving.value = true
  try {
    const data = new FormData()

    data.append('title', form.title)
    data.append('year', String(form.year))
    data.append('description', form.description)
    data.append('isbn', form.isbn)

    form.author_ids.forEach((id) => {
      data.append('author_ids[]', String(id))
    })

    if (form.cover) {
      data.append('cover', form.cover)
    }

    await updateBook(route.params.id, data)

    router.push(`/books/${route.params.id}`)
  } finally {
    saving.value = false
  }
}

onMounted(async () => {
  await Promise.all([load(), fetchAuthors({ 'per-page': 100 })])
})
</script>
