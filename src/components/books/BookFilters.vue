<template>
  <section class="filters-panel">
    <div class="search-field">
      <input
        :value="search"
        placeholder="Название или автор…"
        @input="$emit('update:search', $event.target.value)"
      />
    </div>

    <AppInput
      :model-value="year"
      type="number"
      placeholder="Год"
      @update:model-value="$emit('update:year', $event)"
    />

    <AppButton variant="secondary" @click="$emit('reset')">Сбросить</AppButton>
  </section>
</template>

<script setup>
import AppButton from '@/components/ui/AppButton.vue'
import AppInput from '@/components/ui/AppInput.vue'
import AppSelect from '@/components/ui/AppSelect.vue'

defineProps({
  search: String,
  authorId: [String, Number],
  year: [String, Number],
  authors: { type: Array, default: () => [] }
})

defineEmits(['update:search', 'update:authorId', 'update:year', 'reset'])
</script>
