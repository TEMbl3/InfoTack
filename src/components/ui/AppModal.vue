<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-backdrop" @click.self="$emit('update:modelValue', false)">
      <section class="modal-card">
        <button class="modal-close" @click="$emit('update:modelValue', false)">×</button>
        <h3>{{ title }}</h3>
        <p v-if="description" class="modal-description">{{ description }}</p>
        <div class="modal-actions">
          <AppButton variant="secondary" @click="$emit('update:modelValue', false)">Отмена</AppButton>
          <AppButton variant="danger" :loading="loading" @click="$emit('confirm')">Удалить</AppButton>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<script setup>
import AppButton from './AppButton.vue'

defineProps({
  modelValue: Boolean,
  title: String,
  description: String,
  loading: Boolean
})

defineEmits(['update:modelValue', 'confirm'])
</script>
