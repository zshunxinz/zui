<template>
  <div
    :id="`sonner-container-${id}`"
    class="sonner-toaster"
    :class="`sonner-toaster-${position}`"
    :style="containerStyle"
    aria-live="polite"
    aria-atomic="true"
  >
    <TransitionGroup
      name="sonner-toast"
      tag="div"
      class="sonner-toast-container"
      :style="{ '--offset': `${offset}px` }"
      @after-leave="updateOffsets"
    >
      <div
        v-for="toast in visibleToasts"
        :key="toast.id"
        :id="`sonner-toast-${toast.id}`"
        class="sonner-toast"
        :class="[
          `sonner-toast-${toast.type}`,
          `sonner-toast-${toast.size}`,
          toast.className,
          {
            'sonner-toast-has-title': toast.title,
            'sonner-toast-has-description': toast.description,
            'sonner-toast-has-icon': toast.icon,
            'sonner-toast-dismissible': toast.dismissible !== false,
          },
        ]"
        :style="{
          '--offset': `${getOffset(toast)}px`,
        }"
        @click.stop="dismissToast(toast.id)"
        @mouseenter="toggleTimer(toast.id, false)"
        @mouseleave="toggleTimer(toast.id, true)"
      >
        <!-- 图标 -->
        <div v-if="toast.icon" class="sonner-toast-icon">
          <Icon :name="toast.icon" />
        </div>

        <!-- 内容 -->
        <div class="sonner-toast-content">
          <h4 v-if="toast.title" class="sonner-toast-title">
            {{ toast.title }}
          </h4>
          <p v-if="toast.description" class="sonner-toast-description">
            {{ toast.description }}
          </p>
        </div>

        <!-- 关闭按钮 -->
        <button
          v-if="toast.dismissible !== false"
          class="sonner-toast-close"
          @click.stop="dismissToast(toast.id)"
          aria-label="关闭"
        >
          <Icon name="x" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, provide } from 'vue';
import type { Toast, ToastPosition, ToastSize, ToastType } from './types';

// 默认弹出位置（右上）
const DEFAULT_POSITION: ToastPosition = 'top-right';

// Props定义
interface Props {
  position?: ToastPosition;
  offset?: number;
  limit?: number;
  richColors?: boolean;
  closeButton?: boolean;
  expand?: boolean;
  pauseOnHover?: boolean;
  toastOptions?: Partial<Toast>;
}

// 默认Props
const props = withDefaults(defineProps<Props>(), {
  position: DEFAULT_POSITION,
  offset: 16,
  limit: 3,
  richColors: false,
  closeButton: true,
  expand: false,
  pauseOnHover: true,
  toastOptions: () => ({}),
});

// 组件唯一标识
const id = Math.floor(Math.random() * 10000);

// 存储所有toast
const toasts = ref<Toast[]>([]);

// 跟踪toast ID
const toastId = ref(0);

// 存储暂停的toast
const pausedToasts = new Set<number>();

// 存储定时器
const timers = new Map<number, number>();

// 显示的toast
const visibleToasts = computed(() => {
  return toasts.value.slice(0, props.limit);
});

// 容器样式
const containerStyle = computed(() => {
  const baseStyle: Record<string, string> = {};

  // 基于位置设置不同的样式
  switch (props.position) {
    case 'top-right':
      baseStyle.top = `${props.offset}px`;
      baseStyle.right = `${props.offset}px`;
      break;
    case 'top-left':
      baseStyle.top = `${props.offset}px`;
      baseStyle.left = `${props.offset}px`;
      break;
    case 'top-center':
      baseStyle.top = `${props.offset}px`;
      baseStyle.left = '50%';
      baseStyle.transform = 'translateX(-50%)';
      break;
    case 'bottom-right':
      baseStyle.bottom = `${props.offset}px`;
      baseStyle.right = `${props.offset}px`;
      break;
    case 'bottom-left':
      baseStyle.bottom = `${props.offset}px`;
      baseStyle.left = `${props.offset}px`;
      break;
    case 'bottom-center':
      baseStyle.bottom = `${props.offset}px`;
      baseStyle.left = '50%';
      baseStyle.transform = 'translateX(-50%)';
      break;
  }

  return baseStyle;
});

// 获取toast的偏移量
const getOffset = (toast: Toast): number => {
  const index = toasts.value.indexOf(toast);
  if (index === -1) return 0;

  // 计算相对于顶部或底部的偏移量
  return index * 88; // 假设每个toast大约88px高
};

// 更新偏移量
const updateOffsets = () => {
  // 可以在这里添加额外的逻辑来更新偏移量
};

// 添加toast
const addToast = (options: Omit<Toast, 'id'>): number => {
  // 合并默认选项
  const newToast: Toast = {
    ...props.toastOptions,
    ...options,
    id: ++toastId.value,
    createdAt: Date.now(),
    duration: options.duration ?? 5000,
    dismissible: options.dismissible ?? true,
    type: options.type ?? 'default',
    size: options.size ?? 'normal',
  };

  // 添加到列表
  toasts.value.unshift(newToast);

  // 设置定时器
  const durationValue = newToast.duration ?? 0;
  if (durationValue !== Infinity) {
    startTimer(newToast.id, durationValue);
  }

  return newToast.id;
};

// 开始定时器
const startTimer = (id: number, duration: number) => {
  // 清除已存在的定时器
  if (timers.has(id)) {
    window.clearTimeout(timers.get(id)!);
  }

  // 设置新的定时器
  const timer = window.setTimeout(() => {
    if (!pausedToasts.has(id)) {
      dismissToast(id);
    }
  }, duration);

  timers.set(id, timer);
};

// 切换定时器状态
const toggleTimer = (id: number, isRunning: boolean) => {
  if (!props.pauseOnHover) return;

  if (isRunning) {
    pausedToasts.delete(id);
    // 找到对应toast并重新启动定时器
    const toast = toasts.value.find(t => t.id === id);
    if (toast) {
      const toastDuration = toast.duration ?? Infinity;
      if (toastDuration !== Infinity) {
        // 计算剩余时间
        const elapsed = Date.now() - toast.createdAt;
        const remaining = Math.max(0, toastDuration - elapsed);
        startTimer(id, remaining);
      }
    }
  } else {
    pausedToasts.add(id);
    // 暂停时清除定时器
    if (timers.has(id)) {
      window.clearTimeout(timers.get(id)!);
      timers.delete(id);
    }
  }
};

// 关闭指定toast
const dismissToast = (id: number) => {
  // 清除定时器
  if (timers.has(id)) {
    window.clearTimeout(timers.get(id)!);
    timers.delete(id);
  }

  // 移除暂停状态
  pausedToasts.delete(id);

  // 从列表中移除toast
  toasts.value = toasts.value.filter(toast => toast.id !== id);
};

// 关闭所有toast
const dismissAll = () => {
  // 清除所有定时器
  timers.forEach(timer => window.clearTimeout(timer));
  timers.clear();

  // 清除所有暂停状态
  pausedToasts.clear();

  // 清空列表
  toasts.value = [];
};

// 更新指定toast
const updateToast = (id: number, updates: Partial<Toast>) => {
  const index = toasts.value.findIndex(toast => toast.id === id);
  if (index !== -1) {
    toasts.value[index] = {
      ...toasts.value[index],
      ...updates,
    };
  }
};

// 提供toast方法
const toastMethods = {
  addToast,
  dismissToast,
  dismissAll,
  updateToast,
  success: (message: string, title?: string) =>
    addToast({
      type: 'success',
      title,
      description: message,
      icon: 'check-check',
      duration: 3000,
      createdAt: Date.now(),
    }),
  error: (message: string, title?: string) =>
    addToast({
      type: 'error',
      title,
      description: message,
      icon: 'circle-alert',
      duration: 5000,
      createdAt: Date.now(),
    }),
  warning: (message: string, title?: string) =>
    addToast({
      type: 'warning',
      title,
      description: message,
      icon: 'triangle-alert',
      duration: 4000,
      createdAt: Date.now(),
    }),
  info: (message: string, title?: string) =>
    addToast({
      type: 'info',
      title,
      description: message,
      icon: 'bell',
      duration: 3000,
      createdAt: Date.now(),
    }),
};

// 提供给子组件
provide('toast', toastMethods);

// 暴露方法给父组件
defineExpose(toastMethods);

// 挂载时的处理
onMounted(() => {
  // 存储到window对象，作为最后后备方案
  if (typeof window !== 'undefined') {
    (window as any).__sonner__ = toastMethods;
  }
});

// 卸载时的清理
onUnmounted(() => {
  // 清除所有定时器
  timers.forEach(timer => window.clearTimeout(timer));

  // 从window对象中移除
  if (typeof window !== 'undefined') {
    delete (window as any).__sonner__;
  }
});
</script>

<style scoped>
.sonner-toaster {
  position: fixed;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  pointer-events: none;
}

.sonner-toast-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;
}

.sonner-toast {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  min-width: 320px;
  max-width: 400px;
  pointer-events: all;
  transition: all 0.3s ease;
  cursor: pointer;
}

.sonner-toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.sonner-toast-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sonner-toast-title {
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}

.sonner-toast-description {
  font-size: 13px;
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
}

.sonner-toast-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #9ca3af;
  flex-shrink: 0;
  transition: background-color 0.2s ease;
  padding: 0;
}

.sonner-toast-close:hover {
  background-color: #f3f4f6;
}

/* 类型样式 - 简化为普通CSS，移除SCSS变量和条件 */
.sonner-toast-success .sonner-toast-icon {
  color: #10b981;
}

.sonner-toast-error .sonner-toast-icon {
  color: #ef4444;
}

.sonner-toast-warning .sonner-toast-icon {
  color: #f59e0b;
}

.sonner-toast-info .sonner-toast-icon {
  color: #3b82f6;
}

/* 尺寸样式 */
.sonner-toast-small {
  min-width: 240px;
  padding: 12px 16px;
  font-size: 13px;
}

.sonner-toast-large {
  min-width: 480px;
  max-width: 600px;
  padding: 20px;
}

/* 过渡动画 */
.sonner-toast-enter-active,
.sonner-toast-leave-active {
  transition: all 0.3s ease;
}

.sonner-toast-enter-from,
.sonner-toast-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.sonner-toast-move {
  transition: transform 0.3s ease;
}

/* 位置变体 */
.sonner-toaster-top-right {
  top: var(--offset, 16px);
  right: var(--offset, 16px);
  align-items: flex-end;
}

.sonner-toaster-top-left {
  top: var(--offset, 16px);
  left: var(--offset, 16px);
  align-items: flex-start;
}

.sonner-toaster-top-center {
  top: var(--offset, 16px);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}

.sonner-toaster-bottom-right {
  bottom: var(--offset, 16px);
  right: var(--offset, 16px);
  align-items: flex-end;
}

.sonner-toaster-bottom-left {
  bottom: var(--offset, 16px);
  left: var(--offset, 16px);
  align-items: flex-start;
}

.sonner-toaster-bottom-center {
  bottom: var(--offset, 16px);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
</style>