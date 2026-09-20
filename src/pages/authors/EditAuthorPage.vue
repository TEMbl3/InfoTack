<template>
  <section>
    <div class="page-heading">
      <div>
        <h1>Редактировать автора</h1>
      </div>
    </div>

    <AppLoader v-if="loading && !form.full_name" />
    <AuthorForm v-else :form="form" :errors="errors" :loading="saving" edit-mode @submit="submit" />
  </section>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthors } from '@/composables/useAuthors'
import { validateAuthor } from '@/utils/validation'
import AuthorForm from '@/components/authors/AuthorForm.vue'
import AppLoader from '@/components/ui/AppLoader.vue'

const route = useRoute()
const router = useRouter()
const { fetchAuthor, updateAuthor, loading } = useAuthors()
const saving = ref(false)
const errors = ref({})
const form = reactive({ full_name: '' })

async function load() {
  const author = await fetchAuthor(route.params.id)
  form.full_name = author.full_name
}

async function submit() {
  errors.value = validateAuthor(form)
  if (Object.keys(errors.value).length) return
  saving.value = true
  try {
    await updateAuthor(route.params.id, { full_name: form.full_name })
    router.push(`/authors/${route.params.id}`)
  } finally {
    saving.value = false
  }
}

onMounted(load)
</script>
