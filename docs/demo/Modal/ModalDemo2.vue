<template>
  <div class="modal-demo">
    <div class="demo-header">
      <h2>不同尺寸</h2>
      <p>Modal 组件支持多种预设尺寸，可以根据内容需求选择合适的大小</p>
    </div>
    
    <div class="demo-content">
      <div class="button-group">
        <Button @click="openModal('sm')">小尺寸弹窗</Button>
        <Button @click="openModal('md')">中等弹窗</Button>
        <Button @click="openModal('lg')">大尺寸弹窗</Button>
        <Button @click="openModal('xl')">超大弹窗</Button>
        <Button @click="openModal('fullscreen')">全屏弹窗</Button>
      </div>
      
      <Modal
        v-model:open="isOpen"
        :size="currentSize"
        title="不同尺寸的弹窗"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>当前尺寸: {{ currentSize }}</p>
          <p v-if="currentSize === 'sm'">这是一个小尺寸弹窗，适合简单提示信息。</p>
          <p v-else-if="currentSize === 'md'">这是一个中等尺寸弹窗，是最常用的默认尺寸。</p>
          <p v-else-if="currentSize === 'lg'">这是一个大尺寸弹窗，适合展示较多内容。</p>
          <p v-else-if="currentSize === 'xl'">这是一个超大尺寸弹窗，适合复杂表单或大量数据展示。</p>
          <p v-else-if="currentSize === 'fullscreen'">这是一个全屏弹窗，适合需要用户全神贯注完成的任务。</p>
          
          <div v-if="currentSize !== 'fullscreen'">
            <h3>尺寸说明：</h3>
            <ul>
              <li>sm - 300px 宽度</li>
              <li>md - 500px 宽度（默认）</li>
              <li>lg - 700px 宽度</li>
              <li>xl - 900px 宽度</li>
              <li>fullscreen - 全屏显示</li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const currentSize = ref('md');

const openModal = (size) => {
  currentSize.value = size;
  isOpen.value = true;
};

const handleOk = () => {
  isOpen.value = false;
};

const handleCancel = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.modal-demo {
  padding: 20px;
  background-color: var(--bg-card);
  border-radius: var(--radius-md);
}

.demo-header {
  margin-bottom: 24px;
}

.demo-header h2 {
  margin: 0 0 8px 0;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.demo-header p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.modal-body-content {
  padding: 8px 0;
}

.modal-body-content p {
  margin: 12px 0;
  line-height: 1.6;
}

.modal-body-content h3 {
  margin: 16px 0 8px 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
}

.modal-body-content ul {
  margin: 8px 0 16px 0;
  padding-left: 24px;
}

.modal-body-content li {
  margin: 4px 0;
  line-height: 1.5;
}
</style>