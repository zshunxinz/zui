<template>
  <Teleport to="body" v-if="isOpen">
    <!-- 遮罩层 -->
    <div
      class="x-modal__overlay"
      :class="overlayClass"
      @click="handleOverlayClick"
      :style="overlayStyle"
    />

    <!-- 弹窗容器 -->
    <div
      class="x-modal"
      :class="modalClass"
      :style="modalStyle"
      @click.stop
      role="dialog"
      :aria-modal="true"
      :aria-labelledby="titleId"
    >
      <!-- 弹窗头部 -->
      <div class="x-modal__header" v-if="showHeader">
        <h3 class="x-modal__title" v-if="title" :id="titleId">{{ title }}</h3>
        <button
          v-if="closable"
          class="x-modal__close-btn"
          @click="handleClose"
          aria-label="关闭"
          type="button"
        >
          <span class="x-modal__close-icon">×</span>
        </button>
      </div>

      <!-- 弹窗内容 -->
      <div class="x-modal__body" v-if="$slots.default || content">
        <slot v-if="$slots.default"></slot>
        <template v-else-if="content">
          <div v-if="typeof content === 'string'">{{ content }}</div>
          <div
            v-else-if="content instanceof HTMLElement"
            v-html="content.outerHTML"
          ></div>
          <div
            v-else-if="typeof content === 'function'"
            v-html="content().outerHTML"
          ></div>
        </template>
      </div>

      <!-- 弹窗底部 -->
      <div class="x-modal__footer" v-if="showFooter">
        <slot name="footer">
          <div class="x-modal__footer-buttons" v-if="!customFooter">
            <button
              class="x-modal__cancel-btn x-button x-button--default"
              @click="handleCancel"
              type="button"
            >
              取消
            </button>
            <button
              class="x-modal__ok-btn x-button x-button--primary"
              @click="handleOk"
              type="button"
            >
              确定
            </button>
          </div>
          <template v-else-if="footer">
            <div
              v-if="footer instanceof HTMLElement"
              v-html="footer.outerHTML"
            ></div>
            <div
              v-else-if="typeof footer === 'function'"
              v-html="footer().outerHTML"
            ></div>
          </template>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import type { ModalSize, ModalPosition } from './types';

interface Props {
  id?: string;
  open?: boolean;
  defaultOpen?: boolean;
  title?: string;
  content?: string | HTMLElement | (() => HTMLElement);
  size?: ModalSize;
  position?: ModalPosition;
  closable?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  escClosable?: boolean;
  footer?: boolean | HTMLElement | (() => HTMLElement);
  width?: string | number;
  height?: string | number;
  /**
   * 弹窗动画时长
   * @default 300
   */
  transitionDuration?: number;
  /**
   * 遮罩动画时长
   * @default 200
   */
  maskTransitionDuration?: number;
}

interface Emits {
  (e: 'open', value: boolean): void;
  (e: 'close', value: boolean): void;
  (e: 'ok'): void;
  (e: 'cancel'): void;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  open: undefined,
  defaultOpen: false,
  title: '',
  content: undefined,
  size: 'md',
  position: 'center',
  closable: true,
  mask: true,
  maskClosable: true,
  escClosable: true,
  footer: true,
  width: undefined,
  height: undefined,
  transitionDuration: 300,
  maskTransitionDuration: 200,
});

const emit = defineEmits<Emits>();

const isOpen = ref(props.open ?? props.defaultOpen);
const titleId = computed(
  () => props.id || `x-modal-${Math.random().toString(36).slice(2, 9)}-title`
);

// 计算是否显示头部
const showHeader = computed(() => props.title || props.closable);

// 计算是否显示底部
const showFooter = computed(() => {
  if (props.footer === false) return false;
  return true; // 有默认按钮或自定义footer或有footer插槽
});

// 计算是否为自定义底部
const customFooter = computed(
  () => props.footer !== true && props.footer !== false
);

// 计算弹窗类名
const modalClass = computed(() => {
  return [
    `x-modal--${props.size}`,
    `x-modal--${props.position}`,
    {
      'x-modal--no-header': !showHeader.value,
      'x-modal--no-footer': !showFooter.value,
    },
  ];
});

// 计算遮罩类名
const overlayClass = computed(() => {
  return ['x-modal__overlay'];
});

// 计算弹窗样式
const modalStyle = computed(() => {
  const style: Record<string, string | undefined> = {};

  // 设置宽度
  if (props.width !== undefined) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }

  // 设置高度
  if (props.height !== undefined) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }

  // 设置动画时长
  style.transition = `transform ${props.transitionDuration}ms ease-out, opacity ${props.transitionDuration}ms ease-out`;

  return style;
});

// 计算遮罩样式
const overlayStyle = computed(() => {
  return {
    transition: `opacity ${props.maskTransitionDuration}ms ease-out`,
  };
});

// 处理遮罩点击
const handleOverlayClick = () => {
  if (props.maskClosable) {
    handleClose();
  }
};

// 处理关闭
const handleClose = () => {
  if (isOpen.value) {
    isOpen.value = false;
    emit('close', false);
    emit('cancel');
  }
};

// 处理确定
const handleOk = () => {
  emit('ok');
};

// 处理取消
const handleCancel = () => {
  handleClose();
};

// 处理ESC键
const handleEsc = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.escClosable && isOpen.value) {
    handleClose();
  }
};

// 监听props.open变化
watch(
  () => props.open,
  newVal => {
    if (newVal !== undefined) {
      isOpen.value = newVal;
    }
  }
);

// 监听内部状态变化
watch(isOpen, newVal => {
  if (props.open === undefined) {
    emit(newVal ? 'open' : 'close', newVal);
  }
});

// 生命周期
onMounted(() => {
  document.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc);
});
</script>

<style scoped>
.x-modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: block;
  padding: 0;
}

.x-modal {
  background-color: var(--color-background);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  /* 确保弹窗在页面中绝对居中 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 确保不会超出视口范围 */
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  /* 确保内容不会溢出 */
  overflow: hidden;
}

/* 头部样式 */
.x-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-sm) var(--padding-md);
  border-bottom: 1px solid var(--border-color);
  min-height: 60px;
  box-sizing: border-box;
}

.x-modal__title {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  line-height: 1.5;
}

.x-modal__close-btn {
  background: none;
  border: none;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: var(--radius-sm);
  color: var(--text-tertiary);
  transition: all 0.3s;
}

.x-modal__close-btn:hover {
  background-color: var(--bg-hover);
  color: var(--text-primary);
}

.x-modal__close-icon {
  font-size: 20px;
  line-height: 1;
}

/* 内容样式 */
.x-modal__body {
  flex: 1;
  padding: var(--padding-md);
  background-color: var(--color-background);
  overflow-y: auto;
  max-height: calc(100vh - 200px);
}

/* 底部样式 */
.x-modal__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: var(--padding-sm) var(--padding-md);
  border-top: 1px solid var(--border-color);
  gap: var(--spacing-sm);
}

.x-modal__footer-buttons {
  display: flex;
  gap: var(--spacing-sm);
}

/* 尺寸变体 */
.x-modal--sm {
  width: 400px;
}

.x-modal--md {
  width: 600px;
}

.x-modal--lg {
  width: 800px;
}

.x-modal--xl {
  width: 1000px;
}

.x-modal--fullscreen {
  width: 100%;
  height: 100%;
  max-height: 100vh;
}

/* 位置变体 */
.x-modal--center {
  /* 已经在.x-modal类中设置了绝对居中 */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.x-modal--top {
  align-self: center;
  margin-top: var(--padding-md);
}

.x-modal--bottom {
  align-self: center;
  margin-bottom: var(--padding-md);
}

.x-modal--left {
  align-self: flex-start;
  height: calc(100vh - var(--padding-md) * 2);
  max-height: calc(100vh - var(--padding-md) * 2);
}

.x-modal--right {
  align-self: flex-end;
  height: calc(100vh - var(--padding-md) * 2);
  max-height: calc(100vh - var(--padding-md) * 2);
}

/* 特殊状态 */
.x-modal--no-header .x-modal__body {
  padding-top: var(--padding-md);
}

.x-modal--no-footer .x-modal__body {
  padding-bottom: var(--padding-md);
}

/* 暗色模式适配 */
.dark .x-modal {
  background-color: var(--bg-card-dark);
  border-color: var(--border-color-dark);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.dark .x-modal__header,
.dark .x-modal__footer {
  border-color: var(--border-color-dark);
}

.dark .x-modal__close-btn:hover {
  background-color: var(--bg-hover-dark);
}
</style>
