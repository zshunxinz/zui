<template>
  <div
    v-if="dropdownState?.isOpen"
    class="x-dropdown-menu-content"
    :class="[
      `x-dropdown-menu-content--${align}`,
      `x-dropdown-menu-content--${side}`,
    ]"
    @click.stop
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="contentRef"
  >
    <slot />
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  align: {
    type: String,
    default: 'center',
    validator: val => ['start', 'center', 'end'].includes(val),
  },
  side: {
    type: String,
    default: 'bottom',
    validator: val => ['top', 'bottom'].includes(val),
  },
});

const dropdownState = inject('dropdownState');
const contentRef = ref(null);

};

const handleMouseEnter = () => {
  if (dropdownState && dropdownState.value.hoverable) {
    dropdownState.value.isOpen = true;
  }
};

const handleMouseLeave = () => {
  if (dropdownState && dropdownState.value.hoverable) {
    dropdownState.value.isOpen = false;
  }
};

// 点击外部关闭菜单
const handleClickOutside = e => {
  // 确保 dropdownState 存在且已打开
  if (!dropdownState || !dropdownState.value.isOpen || !contentRef.value) {
    return;
  }

  // 检查点击目标是否在菜单内容内
  if (!contentRef.value.contains(e.target)) {
    dropdownState.value.isOpen = false;
  }
      contentRef.value?.style.setProperty('left', calculatePosition().left);
    });

  if (isPortalContent.value || props.usePortal) {
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleScroll);

  if (isPortalContent.value || props.usePortal) {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  }
});
</script>

<style scoped>
.x-dropdown-menu-content {
  position: absolute;
  background-color: var(--color-background);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  /* padding: 8px 0; */
  z-index: 1000;
  min-width: 120px;
  margin-top: 4px;
}

.x-dropdown-menu-content--top {
  margin-top: 0;
  margin-bottom: 4px;
}

.x-dropdown-menu-content--start {
  left: 0;
}

.x-dropdown-menu-content--center {
  left: 50%;
  transform: translateX(-50%);
}

.x-dropdown-menu-content--end {
  right: 0;
}
</style>
