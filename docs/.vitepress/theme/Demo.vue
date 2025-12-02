<template>
  <div class="demo" :style="props.style"  :class="{ 'demo-center': props.center }">
    <div style="position: absolute;right: 36px;top:-36px;z-index: 10;" v-if="!isFullscreen">
      <slot name="top-right"></slot>
      <!-- 全屏按钮 -->
      <button
        v-if="props.fullscreen"
        class="demo-fullscreen-btn"
        @click="toggleFullscreen"
        title="全屏预览"
      >

        <Icon v-if="isFullscreen" name="minimize" :size="20" />
        <Icon v-else name="maximize" :size="20" />
      </button>
    </div>
    <slot></slot>
  </div>

  <!-- 全屏模态框 -->
  <Teleport to="body">
    <div
      v-if="isFullscreen"
      class="demo-fullscreen-modal"
      @click="toggleFullscreen"
    >
      <div
        class="demo-fullscreen-content"
        @click.stop
      >
        <button
          class="demo-fullscreen-close-btn"
          @click="toggleFullscreen"
          title="退出全屏"
        >
            <Icon name="minimize" :size="20" />
        </button>
        <div class="demo-fullscreen-inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  center: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'medium',
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  style: {
    type: String,
    default: '',
  }
})

const size = ref(props.size)
const isFullscreen = ref(false)

watch(() => props.size, (newVal) => {
  size.value = newVal
})

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
}

// ESC键退出全屏
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isFullscreen.value) {
    isFullscreen.value = false
  }
}

watch(isFullscreen, (newVal) => {
  if (newVal) {
    document.addEventListener('keydown', handleKeydown)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.demo {
  margin: 0.5rem 0;
  min-height: 130px;
  position: relative;
  /* width: 100%; */
  /* display: flex; */
  /* align-items: center; */
  padding: 60px 50px;
  border: 1px solid var(--color-border-1);
}

.demo-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-fullscreen-btn {
  background: var(--color-background);
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-0);
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: var(--color-text-1);
  position: absolute;
  /* margin-left: 8px; */
}

.demo-fullscreen-btn:hover {
  background: var(--color-bg-2);
  transform: scale(1.05);
}

.demo-fullscreen-btn:active {
  transform: scale(0.95);
}

.demo-fullscreen-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffffe1;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.demo-fullscreen-content {
  background: var(--color-background);
  border-radius: 8px;
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.demo-fullscreen-inner {
  /* padding: 60px 50px; */
  min-height: 50vh;
  width: 100vw;
  height: 100vh;
}

.demo-fullscreen-close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--color-background);
  border: 1px solid var(--color-border-1);
  /* border-radius: 50%; */
  width: 26px;
  height: 26px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: var(--color-text-1);
  z-index: 10000;
}

.demo-fullscreen-close-btn:hover {
  background: var(--color-bg-2);
  transform: scale(1.1);
}

.demo-fullscreen-close-btn:active {
  transform: scale(0.9);
}
</style>
