<template>
  <div v-if="totalPages > 1" class="pagination">
    <button :disabled="page <= 1" @click="$emit('change', page - 1)">←</button>

    <button
      v-for="item in pages"
      :key="item"
      :class="{ active: item === page }"
      @click="$emit('change', item)"
    >
      {{ item }}
    </button>

    <button :disabled="page >= totalPages" @click="$emit('change', page + 1)">→</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  page: { type: Number, default: 1 },
  totalPages: { type: Number, default: 1 }
})

defineEmits(['change'])

const pages = computed(() => {
  const result = []
  const from = Math.max(1, props.page - 2)
  const to = Math.min(props.totalPages, props.page + 2)

  for (let i = from; i <= to; i++) result.push(i)
  return result
})
</script>
