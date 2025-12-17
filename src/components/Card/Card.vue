<template>
  <div
    class="z-card"
    :class="[
      cardTypeClass,
      cardSizeClass,
      layoutClass,
      {
        'z-card--shadow': shadow,
        'z-card--border': border,
        'z-card--no-radius': borderRadius === 0,
        'z-card--disabled': disabled,
        'z-card--hover': hoverable,
      },
    ]"
    :style="{
      width:
        width !== undefined
          ? typeof width === 'number'
            ? `${width}px`
            : width
          : undefined,
      height:
        height !== undefined
          ? typeof height === 'number'
            ? `${height}px`
            : height
          : undefined,
      padding:
        padding !== undefined
          ? typeof padding === 'number'
            ? `${padding}px`
            : padding
          : undefined,
    }"
  >
    <!-- 右上角插槽 -->
    <div v-if="$slots.topRight" class="z-card__top-right">
      <slot name="topRight"></slot>
    </div>

    <!-- 卡片头部 -->
    <div
      v-if="showHeader"
      class="z-card__header"
      :class="{
        'z-card__header--with-border': headerBorder,
      }"
    >
      <div class="z-card__header-content">
        <h3 v-if="title" class="z-card__title">{{ title }}</h3>
        <slot name="header"></slot>
      </div>
      <div v-if="collapsible" class="z-card__header-extra">
        <button
          class="z-card__collapse-btn"
          @click="toggleCollapse"
          type="button"
          aria-label="Toggle collapse"
        >
          <svg
            v-if="isExpanded"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="z-card__collapse-icon"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="z-card__collapse-icon"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 卡片内容 -->
    <div v-if="!collapsible || isExpanded">
      <template v-if="skeleton">
        <div class="z-card__skeleton z-card__body">
          <div class="z-card__skeleton-image"></div>
          <div class="z-card__skeleton-title"></div>
          <div class="z-card__skeleton-content"></div>
          <div class="z-card__skeleton-actions"></div>
        </div>
      </template>
      <template v-else>
        <div v-if="$slots.default" class="z-card__body">
          <slot></slot>
        </div>
      </template>
    </div>

    <!-- 卡片底部 -->
    <div
      v-if="showFooter"
      class="z-card__footer"
      :class="{
        'z-card__footer--with-border': footerBorder,
      }"
    >
      <div v-if="$slots.bottomLeft" class="z-card__footer-left">
        <slot name="bottomLeft"></slot>
      </div>
      <div class="z-card__footer-center">
        <slot name="footer"></slot>
      </div>
      <div v-if="$slots.bottomRight" class="z-card__footer-right">
        <slot name="bottomRight"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from 'vue';

interface Props {
  title?: string;
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'medium' | 'large';
  layout?: 'default' | 'flexible' | 'tight';
  collapsible?: boolean;
  defaultOpen?: boolean;
  shadow?: boolean;
  border?: boolean;
  borderRadius?: number;
  headerBorder?: boolean;
  footerBorder?: boolean;
  disabled?: boolean;
  hoverable?: boolean;
  skeleton?: boolean;
  width?: string | number;
  height?: string | number;
  /**
   * 卡片内边距
   * @default var(--z-card-padding)
   */
  padding?: string;
}

interface Emits {
  (e: 'toggle', value: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  type: 'default',
  size: 'medium',
  layout: 'default',
  collapsible: false,
  defaultOpen: true,
  shadow: false, // 将默认阴影效果改为false
  border: true,
  borderRadius: 4,
  headerBorder: false,
  footerBorder: false,
  disabled: false,
  hoverable: false,
  skeleton: false,
  width: undefined,
  height: undefined,
  padding: undefined,
});

const emit = defineEmits<Emits>();

const slots = useSlots();
const isExpanded = ref(props.defaultOpen);

const cardTypeClass = computed(() => `z-card--${props.type}`);
const cardSizeClass = computed(() => `z-card--${props.size}`);
const layoutClass = computed(() => `z-card--${props.layout}`);

const showHeader = computed(() => {
  // console.log(slots.header!==undefined);

  return !!props.title || !!props.collapsible || slots.header;
});

const showFooter = computed(() => {
  // 检查是否有footer、bottomLeft或bottomRight插槽内容
  return !!(slots.footer || slots.bottomLeft || slots.bottomRight);
});

const toggleCollapse = () => {
  if (props.disabled) return;
  isExpanded.value = !isExpanded.value;
  emit('toggle', isExpanded.value);
  // 可以在这里添加额外的逻辑，比如日志记录
  console.log(`Card expanded state changed to: ${isExpanded.value}`);
};
</script>

<style scoped>
.z-card {
  background-color: var(--color-background);
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-0);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  /* overflow: hidden; */
  position: relative;
}

/* 悬浮样式 */
.z-card--hover:hover {
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

/* 无边框样式 */
.z-card:not(.z-card--border) {
  border: none;
}

/* 布局变体 */
.z-card--default {
  /* 默认布局 */
}

.z-card--flexible {
  flex: 1;
  min-height: 0;
}

.z-card--tight {
  padding: 0;
}

/* 右上角插槽样式 */
.z-card__top-right {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
}

/* 骨架屏样式 */
.z-card__skeleton {
  padding: 0;
}

.z-card__skeleton-image {
  height: 160px;
  background: var(--skeleton-1);
  background-size: 200% 100%;
  animation: xCardSkeletonLoading 1.5s infinite;
}

.z-card__skeleton-title {
  height: 20px;
  margin: 16px 16px 8px;
  background: var(--skeleton-1);
  /* background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); */
  background-size: 200% 100%;
  animation: xCardSkeletonLoading 1.5s infinite;
  width: 60%;
}

.z-card__skeleton-content {
  height: 16px;
  margin: 8px 16px;
  background: linear-gradient(
    90deg,
    var(--color-text) 25%,
    var(--color-text-muted) 50%,
    var(--color-border-1) 75%
  );
  background: var(--skeleton-1);

  background-size: 200% 100%;
  animation: xCardSkeletonLoading 1.5s infinite;
  width: 80%;
}

.z-card__skeleton-content + .z-card__skeleton-content {
  width: 90%;
}

.z-card__skeleton-actions {
  display: flex;
  gap: 8px;
  /* margin: 16px; */
}

.z-card__skeleton-actions::before,
.z-card__skeleton-actions::after {
  content: '';
  height: 32px;
  /* background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); */
  background: var(--skeleton-1);

  background-size: 200% 100%;
  animation: xCardSkeletonLoading 1.5s infinite;
  border-radius: var(--border-radius);
}

.z-card__skeleton-actions::before {
  width: 80px;
}

.z-card__skeleton-actions::after {
  width: 60px;
}

@keyframes xCardSkeletonLoading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

/* 类型变体 */
.z-card--default {
  border-color: var(--color-border);
}

.z-card--primary {
  border-color: var(--color-primary);
}

.z-card--success {
  border-color: var(--color-success);
}

.z-card--warning {
  border-color: var(--color-warning);
}

.z-card--danger {
  border-color: var(--color-danger);
}

.z-card--info {
  border-color: var(--color-info);
}

/* 尺寸变体 */
.z-card--small {
  font-size: var(--font-size-0);
}

.z-card--large {
  font-size: var(--font-size-2);
}

/* 样式变体 */
.z-card--shadow {
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.08); */
  box-shadow: var(--box-shadow-1);
}

.z-card--border {
  border: 1px solid var(--color-border-1);
}

.z-card--no-radius {
  border-radius: 0;
}

.z-card--disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* 头部样式 */
.z-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--height-2);
  padding: var(--padding-2);
  box-sizing: border-box;
}

.z-card--small .z-card__header {
  padding: var(--padding-1);
  height: var(--height-1);
}

.z-card--large .z-card__header {
  padding: var(--padding-3);
  height: var(--height-3);
}

.z-card__header--with-border {
  border-bottom: 1px solid var(--color-border-1);
}

.z-card__header-content {
  flex: 1;
}

.z-card__title {
  margin: 0;
  font-size: var(--font-size-1);
  font-weight: 500;
  color: var(--color-text);
  /* line-height: 1.5; */
}

.z-card--small .z-card__title {
  font-size: var(--font-size-0);
}

.z-card--large .z-card__title {
  font-size: var(--font-size-2);
}

.z-card__header-extra {
  margin-left: 16px;
}

.z-card__collapse-btn {
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.z-card__collapse-btn:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text);
}

.z-card__collapse-icon {
  transition: transform 0.3s ease;
}

/* 内容样式 */
:root {
  --z-card-padding: var(--padding-1);
}

.z-card__body {
  font-size: var(--font-size-1);
  padding: var(--z-card-padding, 0px);
  box-sizing: border-box;
}

.z-card--small .z-card__body {
  padding: var(--padding-1);
}

.z-card--default .z-card__body {
  padding: var(--padding-2);
}

.z-card--large .z-card__body {
  padding: var(--padding-2);
}

/* 底部样式 */
.z-card__footer {
  padding: 16px 20px;
  border-top: 1px solid var(--color-border-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.z-card__footer-left {
  display: flex;
  align-items: center;
}

.z-card__footer-center {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.z-card__footer-right {
  display: flex;
  align-items: center;
}

.z-card--small .z-card__footer {
  padding: 12px 16px;
}

.z-card--large .z-card__footer {
  padding: 20px 24px;
}

.z-card__footer--with-border {
  border-top: 1px solid var(--color-border-1);
}
</style>
