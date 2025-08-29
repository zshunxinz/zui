<template>
  <div
    class="x-tabs"
    :class="[
      tabPositionClass,
      tabTypeClass,
      tabSizeClass,
      tabButtonStyleClass,
      tabButtonStyleTextClass,
    ]"
  >
    <div
      class="x-tabs__nav"
      :class="[
        borderLine ? 'boderLine' : 'boderLineNull',
        tabsBg ? 'x-tabs_nav_bg-0' : '',
        tabsBgClass ? tabsBgClass : '',
      ]"
      :style="tabsBgStyle"
    >
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="x-tabs__item"
        :class="[
          {
            'is-active': activeTabIndex === index,
            'is-disabled': tab.disabled,
            'is-full': tabFull,
          },
        ]"
        @click="handleTabClick(index)"
        v-bind:style="tabStyle"
      >
        {{ tab.label }}
        <span
          v-if="(props.closable || tab.close) && !tab.disabled"
          class="x-tabs__close-btn"
          @click.stop="handleTabClose(index)"
        >
          ×
        </span>
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
  close?: boolean;
}

interface Props {
  tabs: Tab[];
  modelValue?: number;
  position?: "top" | "bottom" | "left" | "right";
  type?: "default" | "primary" | "success" | "warning" | "danger" | "info";
  size?: "small" | "default" | "large";
  closable?: boolean;
  buttonStyle?: boolean;
  tabsBg?: boolean;
  borderLine?: boolean;
  tabsBgClass?: string;
  tabFull?: boolean;
  buttonStyleText?: boolean;
  tabsBgStyle?: string;
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
  buttonStyle: false,
  tabsBg: false,
  borderLine: true,
  tabsBgClass: "",
  tabFull: false,
  buttonStyleText: false,
  tabsBgStyle: "",
});

const emit = defineEmits<Emits>();

const activeTabIndex = ref(props.modelValue);

const tabPositionClass = computed(() => `x-tabs--${props.position}`);
const tabTypeClass = computed(() => `x-tabs--${props.type}`);
const tabSizeClass = computed(() => `x-tabs--${props.size}`);
const tabButtonStyleClass = computed(() =>
  props.buttonStyle ? "x-tabs--button" : ""
);
const tabButtonStyleTextClass = computed(() =>
  props.buttonStyleText ? "x-tabs--button-text" : ""
);

const tabStyle = computed(() => {
  const style: any = {};
  if (props.tabFull) {
    style.flex = 1;
    style.textAlign = "center";
    style.justifyContent = "center";
  }
  return style;
});

const handleTabClick = (index: number) => {
  if (props.tabs[index]?.disabled) return;
  activeTabIndex.value = index;
  emit("update:modelValue", index);
  emit("tab-click", index);
};

const handleTabClose = (index: number) => {
  emit("tab-close", index);
};
</script>

<style scoped>
.x-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: var(--font-size);
}

.x-tabs__nav {
  display: flex;
  border-bottom: 1px solid var(--color-border-1);
  overflow-x: auto;
  white-space: nowrap;
}

.x-tabs_nav_bg-0 {
  background-color: var(--color-bg-hover);
}

.boderLine {
  border-bottom: 1px solid var(--color-border-1);
}
.boderLineNull {
  border-bottom: none !important;
}
.x-tabs__item {
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  color: var(--color-text-muted);
  font-size: var(--font-size);
}

.x-tabs__item.is-active {
  color: var(--color-default);
  border-bottom-color: var(--color-default);
  font-weight: 500;
}

.x-tabs__item.is-full {
  flex: 1;
}

.x-tabs__item.is-disabled {
  color: var(--color-text-muted);
  background-color: var(--color-bg-hover);
  cursor: not-allowed;
}

.x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  color: var(--color-default-hover);
  background-color: var(--color-bg-hover);
}

.x-tabs__close-btn {
  margin-left: 8px;
  cursor: pointer;
  font-size: var(--font-size);
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.x-tabs__close-btn:hover {
  opacity: 1;
  color: var(--color-danger);
}

.x-tabs__content {
  padding: var(--font-size) 0;
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
  font-size: var(--font-size-0);
}

.x-tabs--large .x-tabs__item {
  padding: 14px 24px;
  font-size: var(--font-size-2);
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

/* Button style tabs */
.x-tabs--button {
  font-size: var(--font-size);
  --button-padding: 0.25rem 1rem;
  --button-border-radius: var(--border-radius-0);
}

.x-tabs--button .x-tabs__nav {
  border-bottom: none;
  gap: 8px;
  /* padding: 8px 0; */
}

.x-tabs--button .x-tabs__item {
  border-bottom: none;
  padding: var(--button-padding);
  color: var(--color-text-muted);
  /* border: 1px solid var(--color-border-1); */
  border-radius: var(--button-border-radius);
  background-color: var(--color-bg);
  transition: all 0.3s ease;
}
.x-tabs--button-text .x-tabs__item {
  border: none;
  color: var(--color-text-muted);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  background-color: var(--color-bg);
}

.x-tabs--button .x-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-default);
  color: var(--color-text-inverse);
  font-weight: 500;
}

.x-tabs--button-text .x-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-bg);
  color: var(--color-text-1);
  font-weight: 500;
}

.x-tabs--button .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-default-hover);
  color: var(--color-default-hover);
  background-color: var(--color-bg);
}

.x-tabs--button.x-tabs--default .x-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-default);
  color: var(--color-default-text-1);
}

.x-tabs--button-text.x-tabs--default .x-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-background);
  color: var(--color-default);
}

.x-tabs--button-text.x-tabs--default .x-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-background);
  color: var(--color-default);
}

.x-tabs--button.x-tabs--primary
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-default-hover);
  color: var(--color-defalut-hover);
}

/* Button style with different types */
.x-tabs--button.x-tabs--primary .x-tabs__item.is-active {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-primary-text-1);
}

.x-tabs--button.x-tabs--primary
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-primary-hover);
  color: var(--color-primary-hover);
}

.x-tabs--button.x-tabs--success .x-tabs__item.is-active {
  border-color: var(--color-success);
  background-color: var(--color-success);
  color: var(--color-default-text-1);
}

.x-tabs--button.x-tabs--success
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-success-hover);
  color: var(--color-success-hover);
}

.x-tabs--button.x-tabs--warning .x-tabs__item.is-active {
  border-color: var(--color-warning);
  background-color: var(--color-warning);
  color: var(--color-text-inverse);
}

.x-tabs--button.x-tabs--warning
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-warning-hover);
  color: var(--color-warning-hover);
}

.x-tabs--button.x-tabs--danger .x-tabs__item.is-active {
  border-color: var(--color-danger);
  background-color: var(--color-danger);
  color: var(--color-text-inverse);
}

.x-tabs--button.x-tabs--danger
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-danger-hover);
  color: var(--color-danger-hover);
}

.x-tabs--button.x-tabs--info .x-tabs__item.is-active {
  border-color: var(--color-info);
  background-color: var(--color-info);
  color: var(--color-text-inverse);
}

.x-tabs--button.x-tabs--info
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-info-hover);
  color: var(--color-info-hover);
}

.x-tabs--button-text.x-tabs--primary .x-tabs__item.is-active {
  border-color: var(--color-primary);
  background-color: var(--color-background);
  color: var(--color-primary);
}

.x-tabs--button-text.x-tabs--primary
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-primary-hover);
  color: var(--color-primary-hover);
}

.x-tabs--button-text.x-tabs--success .x-tabs__item.is-active {
  border-color: var(--color-success);
  background-color: var(--color-background);
  color: var(--color-success);
}

.x-tabs--button-text.x-tabs--success
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-success-hover);
  color: var(--color-success-hover);
}

.x-tabs--button-text.x-tabs--warning .x-tabs__item.is-active {
  border-color: var(--color-warning);
  background-color: var(--color-background);
  color: var(--color-warning);
}

.x-tabs--button-text.x-tabs--warning
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-warning-hover);
  color: var(--color-warning-hover);
}

.x-tabs--button-text.x-tabs--danger .x-tabs__item.is-active {
  border-color: var(--color-danger);
  background-color: var(--color-background);
  color: var(--color-danger);
}

.x-tabs--button-text.x-tabs--danger
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-danger-hover);
  color: var(--color-danger-hover);
}

.x-tabs--button-text.x-tabs--info .x-tabs__item.is-active {
  border-color: var(--color-info);
  background-color: var(--color-background);
  color: var(--color-info);
}

.x-tabs--button-text.x-tabs--info
  .x-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-info-hover);
  color: var(--color-info-hover);
}

/* Size variations for button style */
.x-tabs--button.x-tabs--small .x-tabs__item {
  padding: 6px 12px;
  font-size: var(--font-size-0);
}

.x-tabs--button.x-tabs--large .x-tabs__item {
  padding: 12px 20px;
  font-size: var(--font-size-2);
}
</style>
