<template>
  <div class="x-option-group">
    <div class="x-option-group__label" v-if="label">
      {{ label }}
    </div>
    <div class="x-option-group__options">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { provide } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

provide('optionGroup', {
  disabled: props.disabled
});
</script>

<style scoped>
.x-option-group {
  margin: 4px 0;
}

.x-option-group__label {
  padding: 8px 12px;
  font-size: 12px;
  color: var(--color-text-secondary);
  font-weight: bold;
  text-transform: uppercase;
}

.x-option-group__options {
  padding: 0;
}

.x-option-group__options .x-option {
  padding-left: 24px;
}
</style>