<template>
  <section>
    <div class="page-heading">
      <div>
        <h1>Новый автор</h1>
        <p>Добавьте автора в каталог.</p>
      </div>
    </div>

    <AuthorForm :form="form" :errors="errors" :loading="saving" @submit="submit" />
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthors } from '@/composables/useAuthors'
import { validateAuthor } from '@/utils/validation'
import AuthorForm from '@/components/authors/AuthorForm.vue'

const router = useRouter()
const { createAuthor } = useAuthors()
const saving = ref(false)
const errors = ref({})
const form = reactive({ full_name: '' })

async function submit() {
  errors.value = validateAuthor(form)
  if (Object.keys(errors.value).length) return
  saving.value = true
  try {
    await createAuthor({ full_name: form.full_name })
    router.push('/authors')
  } finally {
    saving.value = false
  }
}
</script>
