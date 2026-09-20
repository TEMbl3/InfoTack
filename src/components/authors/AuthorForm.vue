<template>
  <form class="form-card form-card--small" @submit.prevent="$emit('submit')">
    <AppInput v-model="form.full_name" label="ФИО автора *" placeholder="Например, Лев Толстой" :error="errors.full_name" />
    <div class="form-footer">
      <RouterLink to="/authors" class="cancel-link">Отмена</RouterLink>
      <AppButton type="submit" :loading="loading">{{ editMode ? 'Сохранить' : 'Создать автора' }}</AppButton>
    </div>
  </form>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import AppInput from '@/components/ui/AppInput.vue'

defineProps({
  form: { type: Object, required: true },
  errors: { type: Object, default: () => ({}) },
  loading: Boolean,
  editMode: Boolean
})

defineEmits(['submit'])
</script>
