<template>
  <form class="form-card" @submit.prevent="$emit('submit')">
    <div class="form-grid">
      <AppInput v-model="form.title" label="Название *" placeholder="Например, Мастер и Маргарита" :error="errors.title" />
      <AppInput v-model="form.year" label="Год выпуска *" type="number" placeholder="1967" :error="errors.year" />
    </div>

    <AppSelect v-model="form.author_ids[0]" label="Автор *" placeholder="Выберите автора" :error="errors.author_ids">
      <option v-for="author in authors" :key="author.id" :value="author.id">{{ author.full_name }}</option>
    </AppSelect>

    <div class="form-grid form-grid-bot">
      <AppInput v-model="form.isbn" label="ISBN" placeholder="978-5-17-000000-0" />
      <label class="field">
        <span class="field-label">Обложка {{ editMode ? '' : '*' }}</span>
        <input class="file-input" type="file" accept="image/*" @change="onFileChange" />
      </label>
    </div>

    <label class="field">
      <span class="field-label">Описание</span>
      <textarea v-model="form.description" rows="7" placeholder="Краткое описание книги…"></textarea>
    </label>

    <div class="form-footer">
      <RouterLink to="/books" class="cancel-link">Отмена</RouterLink>
      <AppButton type="submit" :loading="loading">{{ editMode ? 'Сохранить изменения' : 'Создать книгу' }}</AppButton>
    </div>
  </form>
</template>

<script setup>
import { onBeforeUnmount } from 'vue'
import AppButton from '@/components/ui/AppButton.vue'
import AppInput from '@/components/ui/AppInput.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

const props = defineProps({
  form: { type: Object, required: true },
  authors: { type: Array, default: () => [] },
  errors: { type: Object, default: () => ({}) },
  loading: Boolean,
  editMode: Boolean
})

const emit = defineEmits(['submit', 'update:file'])

function onFileChange(event) {
  const file = event.target.files?.[0]
  if (!file) return
  props.form.cover = file
  props.form.coverPreview = URL.createObjectURL(file)
  emit('update:file', file)
}

onBeforeUnmount(() => {
  if (props.form.coverPreview?.startsWith('blob:')) URL.revokeObjectURL(props.form.coverPreview)
})
</script>
