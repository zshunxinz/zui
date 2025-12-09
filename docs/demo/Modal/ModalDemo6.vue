<template>
  <div id="modal-demo-6" class="modal-demo-section">
    <h2 class="demo-title">自定义位置</h2>
    <p class="demo-description">
      Modal 支持通过自定义位置属性精确定位到屏幕任意位置
    </p>

    <div class="demo-container">
      <!-- 自定义像素位置 -->
      <div class="demo-item">
        <h3 class="demo-subtitle">像素值定位</h3>
        <Button @click="showPixelPositionModal">显示左上角弹窗</Button>

        <Modal
          v-model:open="pixelModalOpen"
          title="左上角弹窗"
          size="sm"
          position="absolute"
          top="50px"
          left="50px"
          @ok="pixelModalOpen = false"
          @cancel="pixelModalOpen = false"
        >
          <div>这个弹窗使用像素值定位在屏幕左上角 (top: 50px, left: 50px)</div>
        </Modal>
      </div>

      <!-- 自定义百分比位置 -->
      <div class="demo-item">
        <h3 class="demo-subtitle">百分比定位</h3>
        <Button @click="showPercentPositionModal">显示右下角弹窗</Button>

        <Modal
          v-model:open="percentModalOpen"
          title="右下角弹窗"
          size="md"
          position="absolute"
          bottom="10%"
          right="10%"
          @ok="percentModalOpen = false"
          @cancel="percentModalOpen = false"
        >
          <div>
            这个弹窗使用百分比定位在屏幕右下角 (bottom: 10%, right: 10%)
          </div>
        </Modal>
      </div>

      <!-- 动态定位 -->
      <div class="demo-item">
        <h3 class="demo-subtitle">动态定位</h3>
        <div class="demo-controls">
          <div class="control-group">
            <label>Top: {{ dynamicTop }}px</label>
            <input type="range" min="0" max="500" v-model.number="dynamicTop" />
          </div>
          <div class="control-group">
            <label>Left: {{ dynamicLeft }}px</label>
            <input
              type="range"
              min="0"
              max="500"
              v-model.number="dynamicLeft"
            />
          </div>
        </div>
        <Button @click="showDynamicPositionModal">显示动态定位弹窗</Button>

        <Modal
          v-model:open="dynamicModalOpen"
          title="动态定位弹窗"
          width="300px"
          position="absolute"
          :top="`${dynamicTop}px`"
          :left="`${dynamicLeft}px`"
          @ok="dynamicModalOpen = false"
          @cancel="dynamicModalOpen = false"
        >
          <div>当前位置: top {{ dynamicTop }}px, left {{ dynamicLeft }}px</div>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 像素值定位
const pixelModalOpen = ref(false);
const showPixelPositionModal = () => {
  pixelModalOpen.value = true;
};

// 百分比定位
const percentModalOpen = ref(false);
const showPercentPositionModal = () => {
  percentModalOpen.value = true;
};

// 混合定位
const mixedModalOpen = ref(false);
const showMixedPositionModal = () => {
  mixedModalOpen.value = true;
};

// 动态定位
const dynamicModalOpen = ref(false);
const dynamicTop = ref(100);
const dynamicLeft = ref(100);
const showDynamicPositionModal = () => {
  dynamicModalOpen.value = true;
};
</script>

<style scoped>
.modal-demo-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--color-text-1);
}

.demo-description {
  font-size: 14px;
  color: var(--color-text-2);
  margin-bottom: 30px;
}

.demo-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.demo-item {
  background-color: var(--color-background);
  padding: 20px;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border-1);
}

.demo-subtitle {
  font-size: 18px;
  margin-bottom: 15px;
  color: var(--color-text-1);
}

.demo-controls {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 200px;
}

.control-group label {
  font-size: 14px;
  color: var(--color-text-2);
}

.control-group input[type='range'] {
  width: 100%;
  height: 4px;
  background: var(--color-border-1);
  border-radius: 2px;
  outline: none;
  -webkit-appearance: none;
}

.control-group input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
}

.control-group input[type='range']::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: var(--color-primary);
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
</style>
