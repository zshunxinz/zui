<template>
  <div class="modal-demo">
    <div class="demo-header">
      <h2>不同位置</h2>
      <p>Modal 组件可以显示在屏幕的不同位置，包括居中、顶部、底部、左侧和右侧</p>
    </div>
    
    <div class="demo-content">
      <div class="button-group">
        <Button @click="openModal('center')">居中显示</Button>
        <Button @click="openModal('top')">顶部显示</Button>
        <Button @click="openModal('bottom')">底部显示</Button>
        <Button @click="openModal('left')">左侧显示</Button>
        <Button @click="openModal('right')">右侧显示</Button>
      </div>
      
      <Modal
        v-model:open="isOpen"
        :position="currentPosition"
        :size="getSizeByPosition(currentPosition)"
        :title="getTitleByPosition(currentPosition)"
        :closable="true"
        :maskClosable="true"
        @ok="handleOk"
        @cancel="handleCancel"
      >
        <div class="modal-body-content">
          <p>当前位置: {{ currentPosition }}</p>
          
          <div v-if="currentPosition === 'center'">
            <p>居中弹窗是最常用的模式，适合需要用户重点关注的内容。</p>
            <p>可以设置为不同的尺寸，默认中等大小。</p>
          </div>
          
          <div v-else-if="currentPosition === 'top'">
            <p>顶部弹窗从屏幕上方滑入，常用于通知、轻量级确认等场景。</p>
          </div>
          
          <div v-else-if="currentPosition === 'bottom'">
            <p>底部弹窗从屏幕下方滑入，常用于操作菜单、选项选择等场景。</p>
            <p>这种模式在移动端应用中尤为常见。</p>
          </div>
          
          <div v-else-if="currentPosition === 'left'">
            <p>左侧弹窗从屏幕左侧滑入，常用于展示辅助信息、导航菜单等。</p>
          </div>
          
          <div v-else-if="currentPosition === 'right'">
            <p>右侧弹窗从屏幕右侧滑入，常用于展示详情信息、设置面板等。</p>
          </div>
          
          <div class="responsive-note">
            <strong>响应式说明：</strong>
            <p>在移动设备上，侧边弹窗（left/right）会自动调整为全屏模式，以确保良好的用户体验。</p>
          </div>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const currentPosition = ref('center');

const openModal = (position) => {
  currentPosition.value = position;
  isOpen.value = true;
};

const getSizeByPosition = (position) => {
  if (position === 'left' || position === 'right') {
    return 'md'; // 侧边弹窗的默认大小
  }
  return 'md'; // 其他位置使用默认大小
};

const getTitleByPosition = (position) => {
  const positionTitles = {
    center: '居中弹窗',
    top: '顶部弹窗',
    bottom: '底部弹窗',
    left: '左侧弹窗',
    right: '右侧弹窗'
  };
  return positionTitles[position] || '弹窗示例';
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

.responsive-note {
  margin-top: 20px;
  padding: 12px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
}

.responsive-note strong {
  display: block;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.responsive-note p {
  margin: 0;
  color: var(--text-secondary);
}
</style>