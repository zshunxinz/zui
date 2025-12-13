<template>
  <button
    class="z-accordion-trigger"
    :class="{
      'z-accordion-trigger--expanded': isExpanded,
      'z-accordion-trigger--disabled': disabled,
    }"
    type="button"
    @click="toggle"
    aria-expanded="isExpanded"
    aria-controls="accordion-content-${value}"
  >
    <slot></slot>
    <span class="z-accordion-trigger__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="z-accordion-trigger__svg"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// 注入父组件提供的数据
const accordionItem = inject('accordionItem');

if (!accordionItem) {
  throw new Error(
    'AccordionTrigger must be used within AccordionItem component'
  );
}

const { value, disabled, isExpanded, toggle } = accordionItem;
</script>

<style scoped>
.z-accordion-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--padding-2);
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: var(--font-size-1);
  color: var(--color-text);
  transition: all 0.2s ease;
}

.z-accordion-trigger:hover:not(.z-accordion-trigger--disabled) {
  background-color: var(--color-bg-hover);
}

.z-accordion-trigger--expanded {
  background-color: var(--color-bg-hover);
}

.z-accordion-trigger--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.z-accordion-trigger__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  color: var(--color-text-muted);
}

.z-accordion-trigger--expanded .z-accordion-trigger__icon {
  transform: rotate(180deg);
  color: var(--color-text);
}

.z-accordion-trigger__svg {
  display: block;
}
</style>
