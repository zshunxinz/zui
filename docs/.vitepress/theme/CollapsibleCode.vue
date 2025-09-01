<template>
  <div class="collapsible-code">
    <div class="code-header">
      <span class="code-toggle">
        <div
          :class="{ isOpen: isOpen }"
          class="button-1"
          @click="isOpen = !isOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            :stroke="isOpen ? '#fff' : 'currentColor'"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-code-xml-icon lucide-code-xml"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
        </div>
      </span>
    </div>
    <div class="code-content" v-show="isOpen" v-transition:expand>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  defaultOpen: {
    type: Boolean,
    default: false,
  },
});

const isOpen: any = ref(props.defaultOpen);
</script>

<style scoped>
.collapsible-code {
  margin: 0;
  overflow: hidden;
}

.button-1 {
  border: 1px solid var(--color-border-1);
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-1:hover {
  background-color: var(--color-border-1);
}

.button-1.isOpen {
  background-color: #000;
}

.code-header {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 1rem;
  /* padding: 0.5rem; */
  /* background-color: #f5f5f5; */
  font-weight: 500;
}

.code-toggle {
  color: #666;
  font-size: 0.875rem;
  transition: transform 0.2s;
}

.code-content {
  /* border-top: 1px solid #eee; */
}

/* 展开收起动画 */
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 2000px;
}
</style>
