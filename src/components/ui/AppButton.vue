<template>
  <button
    :type="type"
    :class="['app-button', `app-button--${variant}`, { 'is-loading': loading }]"
    :disabled="disabled || loading"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' },
  loading: Boolean,
  disabled: Boolean
})
</script>
