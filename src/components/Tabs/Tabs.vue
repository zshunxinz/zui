<template>
  <div class="x-tabs" :class="[tabPositionClass, tabTypeClass, tabSizeClass]">
    <div class="x-tabs__nav">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="x-tabs__item"
        :class="[
          {
            'is-active': activeTabIndex === index,
            'is-disabled': tab.disabled,
          },
        ]"
        @click="handleTabClick(index)"
        v-bind:style="tabStyle"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="x-tabs__content">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="x-tabs__panel"
        :class="{ 'is-active': activeTabIndex === index }"
      >
        <slot :name="tab.name"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Tab {
  label: string;
  name: string;
  disabled?: boolean;
}

interface Props {
  tabs: Tab[];
  modelValue?: number;
  position?: "top" | "bottom" | "left" | "right";
  type?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  size?: "small" | "default" | "large";
  closable?: boolean;
}

interface Emits {
  (e: "update:modelValue", value: number): void;
  (e: "tab-click", index: number): void;
  (e: "tab-close", index: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  tabs: () => [],
  modelValue: 0,
  position: "top",
  type: "default",
  size: "default",
  closable: false,
});

const emit = defineEmits<Emits>();

const activeTabIndex = ref(props.modelValue);

const tabPositionClass = computed(() => `x-tabs--${props.position}`);
const tabTypeClass = computed(() => `x-tabs--${props.type}`);
const tabSizeClass = computed(() => `x-tabs--${props.size}`);

const tabStyle = computed(() => {
  const style: any = {};
  return style;
});

const handleTabClick = (index: number) => {
  if (props.tabs[index]?.disabled) return;
  activeTabIndex.value = index;
  emit("update:modelValue", index);
  emit("tab-click", index);
};
</script>

<style scoped>
.x-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.x-tabs__nav {
  display: flex;
  border-bottom: 1px solid var(--color-border-1);
  overflow-x: auto;
  white-space: nowrap;
}

.x-tabs__item {
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  color: var(--color-text-2);
}

.x-tabs__item.is-active {
  color: var(--color-default);
  border-bottom-color: var(--color-default);
  font-weight: 500;
}

.x-tabs__item.is-disabled {
  color: var(--color-text-muted);
  cursor: not-allowed;
}

.x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  color: var(--color-default-hover);
  background-color: var(--color-bg-hover);
}

.x-tabs__content {
  padding: 16px 0;
  flex: 1;
}

.x-tabs__panel {
  display: none;
}

.x-tabs__panel.is-active {
  display: block;
}

/* Position variations */
.x-tabs--bottom .x-tabs__nav {
  border-top: 1px solid var(--color-border-1);
  border-bottom: none;
  order: 2;
}

.x-tabs--bottom .x-tabs__content {
  order: 1;
}

.x-tabs--left {
  flex-direction: row;
}

.x-tabs--left .x-tabs__nav {
  flex-direction: column;
  border-right: 1px solid var(--color-border-1);
  border-bottom: none;
  width: max-content;
}

.x-tabs--left .x-tabs__content {
  padding: 0 16px;
}

.x-tabs--right {
  flex-direction: row;
}

.x-tabs--right .x-tabs__nav {
  flex-direction: column;
  border-left: 1px solid var(--color-border-1);
  border-bottom: none;
  width: max-content;
  order: 2;
}

.x-tabs--right .x-tabs__content {
  padding: 0 16px;
  order: 1;
}

/* Size variations */
.x-tabs--small .x-tabs__item {
  padding: 8px 16px;
  font-size: 12px;
}

.x-tabs--large .x-tabs__item {
  padding: 14px 24px;
  font-size: 16px;
}

/* Type variations */
.x-tabs--primary .x-tabs__item.is-active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.x-tabs--success .x-tabs__item.is-active {
  color: var(--color-success);
  border-bottom-color: var(--color-success);
}

.x-tabs--warning .x-tabs__item.is-active {
  color: var(--color-warning);
  border-bottom-color: var(--color-warning);
}

.x-tabs--danger .x-tabs__item.is-active {
  color: var(--color-danger);
  border-bottom-color: var(--color-danger);
}

.x-tabs--info .x-tabs__item.is-active {
  color: var(--color-info);
  border-bottom-color: var(--color-info);
}
</style>
