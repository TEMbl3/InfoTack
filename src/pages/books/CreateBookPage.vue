<template>
  <section>
    <div class="page-heading">
      <div>
        <h1>Новая книга</h1>
        <p>Добавьте книгу в каталог.</p>
      </div>
    </div>

    <BookForm
      :form="form"
      :authors="authors"
      :errors="errors"
      :loading="saving"
      @submit="submit"
    />
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthors } from '@/composables/useAuthors'
import { useBooks } from '@/composables/useBooks'
import { validateBook } from '@/utils/validation'
import BookForm from '@/components/books/BookForm.vue'

const router = useRouter()
const { authors, fetchAuthors } = useAuthors()
const { createBook } = useBooks()
const saving = ref(false)
const errors = ref({})

const form = reactive({
  title: '',
  year: '',
  description: '',
  isbn: '',
  author_ids: [],
  cover: null,
  coverPreview: ''
})

async function submit() {
  errors.value = validateBook(form)
  if (Object.keys(errors.value).length) return

  saving.value = true

  try {
    const data = new FormData()
    data.append('title', form.title)
    data.append('year', form.year)
    data.append('description', form.description)
    data.append('isbn', form.isbn)
    form.author_ids.forEach((id) => data.append('author_ids[]', id))
    if (form.cover) data.append('cover', form.cover)

    await createBook(data)
    router.push('/books')
  } finally {
    saving.value = false
  }
}

onMounted(() => fetchAuthors({ 'per-page': 100 }))
</script>
