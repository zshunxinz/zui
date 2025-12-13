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
import { ref, computed } from 'vue';

interface Tab {
  label: string;
  name: string;
  disabled?: boolean;
  close?: boolean;
}

interface Props {
  tabs: Tab[];
  modelValue?: number;
  position?: 'top' | 'bottom' | 'left' | 'right';
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'default' | 'large';
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
  (e: 'update:modelValue', value: number): void;
  (e: 'tab-click', index: number): void;
  (e: 'tab-close', index: number): void;
}

const props = withDefaults(defineProps<Props>(), {
  tabs: () => [],
  modelValue: 0,
  position: 'top',
  type: 'default',
  size: 'default',
  closable: false,
  buttonStyle: false,
  tabsBg: false,
  borderLine: true,
  tabsBgClass: '',
  tabFull: false,
  buttonStyleText: false,
  tabsBgStyle: '',
});

const emit = defineEmits<Emits>();

const activeTabIndex = ref(props.modelValue);

// 监听modelValue变化，同步activeTabIndex
import { watch } from 'vue';
watch(
  () => props.modelValue,
  newValue => {
    if (newValue !== activeTabIndex.value) {
      activeTabIndex.value = newValue;
    }
  }
);

const tabPositionClass = computed(() => `x-tabs--${props.position}`);
const tabTypeClass = computed(() => `x-tabs--${props.type}`);
const tabSizeClass = computed(() => `x-tabs--${props.size}`);
const tabButtonStyleClass = computed(() =>
  props.buttonStyle ? 'x-tabs--button' : ''
);
const tabButtonStyleTextClass = computed(() =>
  props.buttonStyleText ? 'x-tabs--button-text' : ''
);

const tabStyle = computed(() => {
  const style: any = {};
  if (props.tabFull) {
    style.flex = 1;
    style.textAlign = 'center';
    style.justifyContent = 'center';
  }
  return style;
});

const handleTabClick = (index: number) => {
  if (props.tabs[index]?.disabled) return;
  activeTabIndex.value = index;
  emit('update:modelValue', index);
  emit('tab-click', index);
};

const handleTabClose = (index: number) => {
  emit('tab-close', index);
};
</script>

<style scoped>
.z-tabs {
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: var(--font-size);
}

.z-tabs__nav {
  display: flex;
  border-bottom: 1px solid var(--color-border-1);
  overflow-x: auto;
  white-space: nowrap;
}

.z-tabs_nav_bg-0 {
  background-color: var(--color-bg-hover);
}

.boderLine {
  border-bottom: 1px solid var(--color-border-1);
}
.boderLineNull {
  border-bottom: none !important;
}
.z-tabs__item {
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
  color: var(--color-text-muted);
  font-size: var(--font-size);
}

.z-tabs__item.is-active {
  color: var(--color-default);
  border-bottom-color: var(--color-default);
  font-weight: 500;
}

.z-tabs__item.is-full {
  flex: 1;
}

.z-tabs__item.is-disabled {
  color: var(--color-text-muted);
  background-color: var(--color-bg-hover);
  cursor: not-allowed;
}

.z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  color: var(--color-default-hover);
  background-color: var(--color-bg-hover);
}

.z-tabs__close-btn {
  margin-left: 8px;
  cursor: pointer;
  font-size: var(--font-size);
  line-height: 1;
  opacity: 0.6;
  transition: opacity 0.3s;
}

.z-tabs__close-btn:hover {
  opacity: 1;
  color: var(--color-danger);
}

.z-tabs__content {
  padding: var(--font-size) 0;
  flex: 1;
}

.z-tabs__panel {
  display: none;
}

.z-tabs__panel.is-active {
  display: block;
}

/* Position variations */
.z-tabs--bottom .z-tabs__nav {
  border-top: 1px solid var(--color-border-1);
  border-bottom: none;
  order: 2;
}

.z-tabs--bottom .z-tabs__content {
  order: 1;
}

.z-tabs--left {
  flex-direction: row;
}

.z-tabs--left .z-tabs__nav {
  flex-direction: column;
  border-right: 1px solid var(--color-border-1);
  border-bottom: none;
  width: max-content;
}

.z-tabs--left .z-tabs__content {
  padding: 0 16px;
}

.z-tabs--right {
  flex-direction: row;
}

.z-tabs--right .z-tabs__nav {
  flex-direction: column;
  border-left: 1px solid var(--color-border-1);
  border-bottom: none;
  width: max-content;
  order: 2;
}

.z-tabs--right .z-tabs__content {
  padding: 0 16px;
  order: 1;
}

/* Size variations */
.z-tabs--small .z-tabs__item {
  padding: 8px 16px;
  font-size: var(--font-size-0);
}

.z-tabs--large .z-tabs__item {
  padding: 14px 24px;
  font-size: var(--font-size-2);
}

/* Type variations */
.z-tabs--primary .z-tabs__item.is-active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.z-tabs--success .z-tabs__item.is-active {
  color: var(--color-success);
  border-bottom-color: var(--color-success);
}

.z-tabs--warning .z-tabs__item.is-active {
  color: var(--color-warning);
  border-bottom-color: var(--color-warning);
}

.z-tabs--danger .z-tabs__item.is-active {
  color: var(--color-danger);
  border-bottom-color: var(--color-danger);
}

.z-tabs--info .z-tabs__item.is-active {
  color: var(--color-info);
  border-bottom-color: var(--color-info);
}

/* Button style tabs */
.z-tabs--button {
  font-size: var(--font-size);
  --button-padding: 0.25rem 1rem;
  --button-border-radius: var(--border-radius-0);
}

.z-tabs--button .z-tabs__nav {
  border-bottom: none;
  gap: 8px;
  /* padding: 8px 0; */
}

.z-tabs--button .z-tabs__item {
  border-bottom: none;
  padding: var(--button-padding);
  color: var(--color-text-muted);
  /* border: 1px solid var(--color-border-1); */
  border-radius: var(--button-border-radius);
  background-color: var(--color-bg);
  transition: all 0.3s ease;
}
.z-tabs--button-text .z-tabs__item {
  border: none;
  color: var(--color-text-muted);
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  background-color: var(--color-bg);
}

.z-tabs--button .z-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-default);
  color: var(--color-text-inverse);
  font-weight: 500;
}

.z-tabs--button-text .z-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-bg);
  color: var(--color-text-1);
  font-weight: 500;
}

.z-tabs--button .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-default-hover);
  color: var(--color-default-hover);
  background-color: var(--color-bg);
}

.z-tabs--button.z-tabs--default .z-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-default);
  color: var(--color-default-text-1);
}

.z-tabs--button-text.z-tabs--default .z-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-background);
  color: var(--color-default);
}

.z-tabs--button-text.z-tabs--default .z-tabs__item.is-active {
  border-color: var(--color-default);
  background-color: var(--color-background);
  color: var(--color-default);
}

.z-tabs--button.z-tabs--primary
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-default-hover);
  color: var(--color-defalut-hover);
}

/* Button style with different types */
.z-tabs--button.z-tabs--primary .z-tabs__item.is-active {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  color: var(--color-primary-text-1);
}

.z-tabs--button.z-tabs--primary
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-primary-hover);
  color: var(--color-primary-hover);
}

.z-tabs--button.z-tabs--success .z-tabs__item.is-active {
  border-color: var(--color-success);
  background-color: var(--color-success);
  color: var(--color-default-text-1);
}

.z-tabs--button.z-tabs--success
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-success-hover);
  color: var(--color-success-hover);
}

.z-tabs--button.z-tabs--warning .z-tabs__item.is-active {
  border-color: var(--color-warning);
  background-color: var(--color-warning);
  color: var(--color-text-inverse);
}

.z-tabs--button.z-tabs--warning
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-warning-hover);
  color: var(--color-warning-hover);
}

.z-tabs--button.z-tabs--danger .z-tabs__item.is-active {
  border-color: var(--color-danger);
  background-color: var(--color-danger);
  color: var(--color-text-inverse);
}

.z-tabs--button.z-tabs--danger
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-danger-hover);
  color: var(--color-danger-hover);
}

.z-tabs--button.z-tabs--info .z-tabs__item.is-active {
  border-color: var(--color-info);
  background-color: var(--color-info);
  color: var(--color-text-inverse);
}

.z-tabs--button.z-tabs--info
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-info-hover);
  color: var(--color-info-hover);
}

.z-tabs--button-text.z-tabs--primary .z-tabs__item.is-active {
  border-color: var(--color-primary);
  background-color: var(--color-background);
  color: var(--color-primary);
}

.z-tabs--button-text.z-tabs--primary
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-primary-hover);
  color: var(--color-primary-hover);
}

.z-tabs--button-text.z-tabs--success .z-tabs__item.is-active {
  border-color: var(--color-success);
  background-color: var(--color-background);
  color: var(--color-success);
}

.z-tabs--button-text.z-tabs--success
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-success-hover);
  color: var(--color-success-hover);
}

.z-tabs--button-text.z-tabs--warning .z-tabs__item.is-active {
  border-color: var(--color-warning);
  background-color: var(--color-background);
  color: var(--color-warning);
}

.z-tabs--button-text.z-tabs--warning
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-warning-hover);
  color: var(--color-warning-hover);
}

.z-tabs--button-text.z-tabs--danger .z-tabs__item.is-active {
  border-color: var(--color-danger);
  background-color: var(--color-background);
  color: var(--color-danger);
}

.z-tabs--button-text.z-tabs--danger
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-danger-hover);
  color: var(--color-danger-hover);
}

.z-tabs--button-text.z-tabs--info .z-tabs__item.is-active {
  border-color: var(--color-info);
  background-color: var(--color-background);
  color: var(--color-info);
}

.z-tabs--button-text.z-tabs--info
  .z-tabs__item:hover:not(.is-active):not(.is-disabled) {
  border-color: var(--color-info-hover);
  color: var(--color-info-hover);
}

/* Size variations for button style */
.z-tabs--button.z-tabs--small .z-tabs__item {
  padding: 6px 12px;
  font-size: var(--font-size-0);
}

.z-tabs--button.z-tabs--large .z-tabs__item {
  padding: 12px 20px;
  font-size: var(--font-size-2);
}
</style>
