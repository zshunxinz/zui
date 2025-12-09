<template>
  <div class="modal-demo">
    <div class="demo-header">
      <h2>基础用法</h2>
      <p>通过控制 open 属性来显示或隐藏弹窗</p>
    </div>

    <div class="demo-content">
      <Button @click="openModal">打开弹窗</Button>

      <Modal
        v-model:open="isOpen"
        title="基础弹窗"
        @ok="handleOk"
        @cancel="handleCancel"
        :mask="true"
      >
        <div class="modal-body-content">
          <p>这是一个基础的弹窗示例</p>
          <p>您可以在这里放置任何内容，如表单、信息展示等</p>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const handleOk = () => {
  console.log('用户点击了确定');
  isOpen.value = false;
};

const handleCancel = () => {
  console.log('用户点击了取消');
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

.modal-body-content {
  padding: 8px 0;
}

.modal-body-content p {
  margin: 12px 0;
  line-height: 1.6;
}
</style>
