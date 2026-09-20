<template>
  <label class="field">
    <span v-if="label" class="field-label">{{ label }}</span>
    <select
      :value="modelValue"
      :class="{ 'has-error': error }"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <slot />
    </select>
    <span v-if="error" class="field-error">{{ error }}</span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: [String, Number],
  label: String,
  placeholder: String,
  error: String
})
defineEmits(['update:modelValue'])
</script>
