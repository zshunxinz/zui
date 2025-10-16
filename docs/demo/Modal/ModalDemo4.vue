<template>
  <div class="modal-demo">
    <div class="demo-header">
      <h2>自定义内容</h2>
      <p>Modal 组件支持自定义头部、内容和底部，可以通过插槽来定制弹窗的各个部分</p>
    </div>
    
    <div class="demo-content">
      <Button @click="openModal">打开自定义弹窗</Button>
      
      <Modal
        v-model:open="isOpen"
        size="lg"
        :closable="true"
        :maskClosable="true"
        @cancel="handleCancel"
      >
        <!-- 自定义头部 -->
        <template #header>
          <div class="custom-header">
            <div class="header-icon">📝</div>
            <div class="header-content">
              <h3>自定义表单</h3>
              <p>请填写以下表单信息</p>
            </div>
          </div>
        </template>
        
        <!-- 自定义内容 -->
        <div class="custom-content">
          <div class="form-group">
            <label for="name">姓名</label>
            <Input id="name" v-model="formData.name" placeholder="请输入姓名" />
          </div>
          
          <div class="form-group">
            <label for="email">邮箱</label>
            <Input id="email" v-model="formData.email" placeholder="请输入邮箱" type="email" />
          </div>
          
          <div class="form-group">
            <label for="message">留言</label>
            <Textarea id="message" v-model="formData.message" placeholder="请输入留言内容" rows="4" />
          </div>
          
          <div class="form-group">
            <Checkbox v-model="formData.agree">我同意隐私政策</Checkbox>
          </div>
        </div>
        
        <!-- 自定义底部 -->
        <template #footer>
          <div class="custom-footer">
            <Button @click="resetForm" type="default">重置</Button>
            <div class="action-buttons">
              <Button @click="handleCancel" type="default">取消</Button>
              <Button @click="handleSubmit" type="primary" :disabled="!formData.agree">提交</Button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isOpen = ref(false);
const formData = reactive({
  name: '',
  email: '',
  message: '',
  agree: false
});

const openModal = () => {
  isOpen.value = true;
};

const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.message = '';
  formData.agree = false;
};

const handleSubmit = () => {
  if (!formData.agree) return;
  
  console.log('表单提交:', formData);
  // 这里可以添加表单提交逻辑
  alert('表单提交成功!');
  isOpen.value = false;
  resetForm();
};

const handleCancel = () => {
  isOpen.value = false;
  resetForm();
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

/* 自定义头部样式 */
.custom-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0;
}

.header-icon {
  font-size: 24px;
  line-height: 1;
}

.header-content h3 {
  margin: 0 0 4px 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.header-content p {
  margin: 0;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
}

/* 自定义内容样式 */
.custom-content {
  padding: 8px 0;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
  font-size: var(--font-size-sm);
}

.form-group :deep(.Input) {
  width: 100%;
}

.form-group :deep(.Textarea) {
  width: 100%;
}

/* 自定义底部样式 */
.custom-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.action-buttons {
  display: flex;
  gap: 8px;
}
</style>