<template>
  <div
    class="z-tooltip"
    :class="[
      `z-tooltip--${placement}`,
      `z-tooltip--${theme}`,
      {
        'z-tooltip--disabled': disabled,
      },
    ]"
  >
    <div
      ref="tooltipRef"
      class="z-tooltip__trigger"
      :tabindex="disabled ? -1 : 0"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <slot></slot>
    </div>
    <transition
      name="tooltip-fade"
      @before-enter="handleBeforeEnter"
      @enter="handleEnter"
      @after-enter="handleAfterEnter"
      @before-leave="handleBeforeLeave"
      @leave="handleLeave"
      @after-leave="handleAfterLeave"
    >
      <div
        v-show="isVisible"
        ref="popperRef"
        class="z-tooltip__popper"
        :class="{ 'is-visible': isVisible }"
        :style="popperStyle"
        role="tooltip"
        :id="popperId"
      >
        <div class="z-tooltip__content">
          <slot name="content" v-if="$slots.content"> </slot>
          <span v-else-if="content" class="z-tooltip__text">{{ content }}</span>
        </div>
        <div class="z-tooltip__arrow"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

interface Props {
  content?: string;
  theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  placement?: 'top' | 'right' | 'bottom' | 'left';
  disabled?: boolean;
  delay?: number;
  arrow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  content: '',
  theme: 'default',
  placement: 'top',
  disabled: false,
  delay: 0,
  arrow: true,
});

const tooltipRef = ref<HTMLElement>();
const popperRef = ref<HTMLElement>();
const isVisible = ref(false);
const popperId = ref(`tooltip-${Math.random().toString(36).substr(2, 9)}`);
const showTimer = ref<number | null>(null);
const hideTimer = ref<number | null>(null);

// 添加调试日志
const debug = false;
const log = (...args: any[]) => {
  if (debug) {
    console.log('[Tooltip]', ...args);
  }
};

const popperStyle = computed(() => {
  const style: Record<string, string> = {};
  if (!props.arrow) {
    style['--arrow-display'] = 'none';
  }
  return style;
});

const handleMouseEnter = () => {
  if (props.disabled) return;
  if (hideTimer.value) {
    clearTimeout(hideTimer.value);
    hideTimer.value = null;
  }
  showTimer.value = window.setTimeout(() => {
    log('Showing tooltip');
    // 在显示前预计算位置
    if (popperRef.value) {
      updatePosition(popperRef.value);
    }
    isVisible.value = true;
  }, props.delay);
};

const handleMouseLeave = () => {
  if (props.disabled) return;
  if (showTimer.value) {
    clearTimeout(showTimer.value);
    showTimer.value = null;
  }
  hideTimer.value = window.setTimeout(() => {
    log('Hiding tooltip');
    isVisible.value = false;
  }, 150);
};

const handleFocus = () => {
  handleMouseEnter();
};

const handleBlur = () => {
  handleMouseLeave();
};

// 定义正确的事件处理器类型
const handleBeforeEnter: any = (el: HTMLElement): void => {
  updatePosition(el);
};

const handleEnter: any = (el: HTMLElement, done: () => void): void => {
  // 等待一帧以确保样式应用
  requestAnimationFrame(() => {
    el.classList.add('is-visible');
    done();
  });
};

const handleAfterEnter: any = (): void => {
  log('Tooltip entered completely');
  // 确保tooltip保持在正确位置
  if (popperRef.value) {
    updatePosition(popperRef.value);
  }
};

const handleBeforeLeave: any = (el: HTMLElement): void => {
  log('Before leaving tooltip');
};

const handleLeave: any = (el: HTMLElement, done: () => void): void => {
  log('Leaving tooltip');
  el.classList.remove('is-visible');
  // 等待动画完成
  setTimeout(() => {
    done();
  }, 200);
};

const handleAfterLeave = (): void => {
  log('Tooltip left completely');
};

const updatePosition = (el: HTMLElement) => {
  if (!tooltipRef.value || !popperRef.value) {
    log('Reference elements not available');
    return;
  }

  const triggerRect = tooltipRef.value.getBoundingClientRect();
  // 强制计算popper的尺寸
  el.style.visibility = 'hidden';
  el.style.display = 'block';
  const popperRect = popperRef.value.getBoundingClientRect();

  let top = 'auto';
  let left = 'auto';
  let right = 'auto';
  let bottom = 'auto';

  switch (props.placement) {
    case 'top':
      top = `${triggerRect.top - popperRect.height - 8}px`;
      left = `${
        triggerRect.left + triggerRect.width / 2 - popperRect.width / 2
      }px`;
      break;
    case 'right':
      top = `${
        triggerRect.top + triggerRect.height / 2 - popperRect.height / 2
      }px`;
      left = `${triggerRect.right + 8}px`;
      break;
    case 'bottom':
      top = `${triggerRect.bottom + 8}px`;
      left = `${
        triggerRect.left + triggerRect.width / 2 - popperRect.width / 2
      }px`;
      break;
    case 'left':
      top = `${
        triggerRect.top + triggerRect.height / 2 - popperRect.height / 2
      }px`;
      right = `${
        document.documentElement.clientWidth - triggerRect.left + 8
      }px`;
      break;
  }

  el.style.top = top;
  el.style.left = left;
  el.style.right = right;
  el.style.bottom = bottom;
  el.style.visibility = '';

  log('Position updated:', { top, left, right, bottom });
};

const handleResize = () => {
  if (isVisible.value && popperRef.value) {
    updatePosition(popperRef.value);
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  if (showTimer.value) clearTimeout(showTimer.value);
  if (hideTimer.value) clearTimeout(hideTimer.value);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.z-tooltip {
  position: relative;
  display: inline-block;
}

.z-tooltip__trigger {
  cursor: pointer;
  display: inline-block;
}

.z-tooltip__popper {
  position: fixed;
  z-index: 9999; /* 提高z-index确保显示在最上层 */
  display: inline-block;
  /* max-width: 200px; */
  background-color: var(--color-text);
  color: var(--color-background);
  border-radius: var(--border-radius-0);
  padding: var(--padding-1);
  font-size: var(--font-size-0);
  line-height: 1.5;
  white-space: nowrap;
  word-wrap: break-word;
  box-sizing: border-box;
  --arrow-display: block;
  opacity: 0; /* 初始透明度 */
  transition: opacity 0.2s ease;
}

/* 显示时的透明度 */
.z-tooltip__popper.is-visible {
  opacity: 1;
}

.z-tooltip__arrow {
  display: var(--arrow-display);
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}

/* 箭头样式 */
.z-tooltip--top .z-tooltip__arrow {
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: var(--color-text);
}

.z-tooltip--right .z-tooltip__arrow {
  top: 50%;
  left: -5px;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: var(--color-text);
}

.z-tooltip--bottom .z-tooltip__arrow {
  top: -5px;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: var(--color-text);
}

.z-tooltip--left .z-tooltip__arrow {
  top: 50%;
  right: -5px;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: var(--color-text);
}

/* 主题颜色 */
.z-tooltip--default .z-tooltip__popper {
  background-color: var(--color-text);
  color: var(--color-background);
}

.z-tooltip--default.z-tooltip--top .z-tooltip__arrow {
  border-top-color: var(--color-text);
}

.z-tooltip--default.z-tooltip--right .z-tooltip__arrow {
  border-right-color: var(--color-text);
}

.z-tooltip--default.z-tooltip--bottom .z-tooltip__arrow {
  border-bottom-color: var(--color-text);
}

.z-tooltip--default.z-tooltip--left .z-tooltip__arrow {
  border-left-color: var(--color-text);
}

.z-tooltip--primary .z-tooltip__popper {
  background-color: var(--color-primary);
  color: var(--color-primary-text-1);
}

.z-tooltip--primary.z-tooltip--top .z-tooltip__arrow {
  border-top-color: var(--color-primary);
}

.z-tooltip--primary.z-tooltip--right .z-tooltip__arrow {
  border-right-color: var(--color-primary);
}

.z-tooltip--primary.z-tooltip--bottom .z-tooltip__arrow {
  border-bottom-color: var(--color-primary);
}

.z-tooltip--primary.z-tooltip--left .z-tooltip__arrow {
  border-left-color: var(--color-primary);
}

.z-tooltip--success .z-tooltip__popper {
  background-color: var(--color-success);
  color: var(--color-success-text-1);
}

.z-tooltip--success.z-tooltip--top .z-tooltip__arrow {
  border-top-color: var(--color-success);
}

.z-tooltip--success.z-tooltip--right .z-tooltip__arrow {
  border-right-color: var(--color-success);
}

.z-tooltip--success.z-tooltip--bottom .z-tooltip__arrow {
  border-bottom-color: var(--color-success);
}

.z-tooltip--success.z-tooltip--left .z-tooltip__arrow {
  border-left-color: var(--color-success);
}

.z-tooltip--warning .z-tooltip__popper {
  background-color: var(--color-warning);
  color: var(--color-warning-text-1);
}

.z-tooltip--warning.z-tooltip--top .z-tooltip__arrow {
  border-top-color: var(--color-warning);
}

.z-tooltip--warning.z-tooltip--right .z-tooltip__arrow {
  border-right-color: var(--color-warning);
}

.z-tooltip--warning.z-tooltip--bottom .z-tooltip__arrow {
  border-bottom-color: var(--color-warning);
}

.z-tooltip--warning.z-tooltip--left .z-tooltip__arrow {
  border-left-color: var(--color-warning);
}

.z-tooltip--danger .z-tooltip__popper {
  background-color: var(--color-danger);
  color: var(--color-danger-text-1);
}

.z-tooltip--danger.z-tooltip--top .z-tooltip__arrow {
  border-top-color: var(--color-danger);
}

.z-tooltip--danger.z-tooltip--right .z-tooltip__arrow {
  border-right-color: var(--color-danger);
}

.z-tooltip--danger.z-tooltip--bottom .z-tooltip__arrow {
  border-bottom-color: var(--color-danger);
}

.z-tooltip--danger.z-tooltip--left .z-tooltip__arrow {
  border-left-color: var(--color-danger);
}

.z-tooltip--info .z-tooltip__popper {
  background-color: var(--color-info);
  color: var(--color-info-text-1);
}

.z-tooltip--info.z-tooltip--top .z-tooltip__arrow {
  border-top-color: var(--color-info);
}

.z-tooltip--info.z-tooltip--right .z-tooltip__arrow {
  border-right-color: var(--color-info);
}

.z-tooltip--info.z-tooltip--bottom .z-tooltip__arrow {
  border-bottom-color: var(--color-info);
}

.z-tooltip--info.z-tooltip--left .z-tooltip__arrow {
  border-left-color: var(--color-info);
}

/* 过渡动画 */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.2s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
}

/* 禁用状态 */
.z-tooltip--disabled .z-tooltip__trigger {
  cursor: not-allowed;
}

/* 暗色模式适配 */
:root.dark .z-tooltip__popper {
  background-color: var(--color-text);
  color: var(--color-background);
}

:root.dark .z-tooltip--primary .z-tooltip__popper {
  background-color: var(--color-primary);
  color: var(--color-primary-text-1);
}

:root.dark .z-tooltip--success .z-tooltip__popper {
  background-color: var(--color-success);
  color: var(--color-success-text-1);
}

:root.dark .z-tooltip--warning .z-tooltip__popper {
  background-color: var(--color-warning);
  color: var(--color-warning-text-1);
}

:root.dark .z-tooltip--danger .z-tooltip__popper {
  background-color: var(--color-danger);
  color: var(--color-danger-text-1);
}

:root.dark .z-tooltip--info .z-tooltip__popper {
  background-color: var(--color-info);
  color: var(--color-info-text-1);
}
</style>
