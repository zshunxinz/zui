<template>
  <div class="modal-demo">
    <div class="demo-header">
      <h2>自定义内容</h2>
      <p>
        Modal 组件支持自定义头部、内容和底部，可以通过插槽来定制弹窗的各个部分，
        也可以控制是否显示头部和底部
      </p>
    </div>

    <div class="demo-content">
      <!-- 按钮组 -->
      <div class="demo-buttons">
        <Button @click="openModal('default')">默认弹窗</Button>
        <Button @click="openModal('noHeader')">无头部弹窗</Button>
        <Button @click="openModal('noFooter')">无底部弹窗</Button>
        <Button @click="openModal('noHeaderFooter')">无头部和底部弹窗</Button>
        <Button @click="openModal('customStyle')">自定义样式弹窗</Button>
      </div>

      <!-- 默认弹窗 -->
      <Modal
        v-model:open="modalStates.default"
        size="lg"
        :closable="true"
        :maskClosable="true"
        @cancel="handleCancel('default')"
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
            <Input
              id="email"
              v-model="formData.email"
              placeholder="请输入邮箱"
              type="email"
            />
          </div>

          <div class="form-group">
            <label for="message">留言</label>
            <Textarea
              id="message"
              v-model="formData.message"
              placeholder="请输入留言内容"
              rows="4"
            />
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
              <Button @click="handleCancel('default')" type="default"
                >取消</Button
              >
              <Button
                @click="handleSubmit('default')"
                type="primary"
                :disabled="!formData.agree"
                >提交</Button
              >
            </div>
          </div>
        </template>
      </Modal>

      <!-- 无头部弹窗 -->
      <Modal
        v-model:open="modalStates.noHeader"
        size="lg"
        :closable="true"
        :header="false"
        :maskClosable="true"
        @cancel="handleCancel('noHeader')"
      >
        <!-- 自定义内容 -->
        <div class="custom-content">
          <div class="form-group">
            <label for="name2">姓名</label>
            <Input
              id="name2"
              v-model="formData.name"
              placeholder="请输入姓名"
            />
          </div>

          <div class="form-group">
            <label for="email2">邮箱</label>
            <Input
              id="email2"
              v-model="formData.email"
              placeholder="请输入邮箱"
              type="email"
            />
          </div>

          <div class="form-group">
            <label for="message2">留言</label>
            <Textarea
              id="message2"
              v-model="formData.message"
              placeholder="请输入留言内容"
              rows="4"
            />
          </div>
        </div>

        <!-- 自定义底部 -->
        <template #footer>
          <div class="custom-footer">
            <Button @click="resetForm" type="default">重置</Button>
            <div class="action-buttons">
              <Button @click="handleCancel('noHeader')" type="default"
                >取消</Button
              >
              <Button
                @click="handleSubmit('noHeader')"
                type="primary"
                :disabled="!formData.agree"
                >提交</Button
              >
            </div>
          </div>
        </template>
      </Modal>

      <!-- 无底部弹窗 -->
      <Modal
        v-model:open="modalStates.noFooter"
        size="lg"
        :closable="true"
        :footer="false"
        :maskClosable="true"
        @cancel="handleCancel('noFooter')"
      >
        <!-- 自定义头部 -->
        <template #header>
          <div class="custom-header">
            <div class="header-icon">📝</div>
            <div class="header-content">
              <h3>查看信息</h3>
              <p>这是一个没有底部的弹窗</p>
            </div>
          </div>
        </template>

        <!-- 自定义内容 -->
        <div class="custom-content">
          <div class="info-item">
            <strong>姓名:</strong> {{ formData.name || '未填写' }}
          </div>
          <div class="info-item">
            <strong>邮箱:</strong> {{ formData.email || '未填写' }}
          </div>
          <div class="info-item">
            <strong>留言:</strong> {{ formData.message || '未填写' }}
          </div>
          <div class="info-item">
            <strong>隐私政策:</strong>
            {{ formData.agree ? '已同意' : '未同意' }}
          </div>
          <div class="mt-4">
            <Button @click="handleCancel('noFooter')" type="primary"
              >关闭</Button
            >
          </div>
        </div>
      </Modal>

      <!-- 无头部和底部弹窗 -->
      <Modal
        v-model:open="modalStates.noHeaderFooter"
        size="md"
        :closable="true"
        :header="false"
        :footer="false"
        :maskClosable="true"
        @cancel="handleCancel('noHeaderFooter')"
      >
        <!-- 自定义内容 -->
        <div class="custom-content text-center">
          <div class="warning-icon">⚠️</div>
          <h3 class="warning-title">确认操作</h3>
          <p class="warning-message">您确定要执行此操作吗？</p>
          <div class="mt-4">
            <Button
              @click="handleCancel('noHeaderFooter')"
              type="default"
              class="mr-2"
              >取消</Button
            >
            <Button
              @click="handleConfirm('noHeaderFooter')"
              type="primary"
              danger
              >确认</Button
            >
          </div>
        </div>
      </Modal>

      <!-- 自定义样式弹窗 -->
      <Modal
        v-model:open="modalStates.customStyle"
        size="lg"
        :closable="true"
        :maskClosable="true"
        class="custom-style-modal"
        :content-style="computedCustomStyles"
        @cancel="handleCancel('customStyle')"
      >
        <!-- 自定义头部 -->
        <template #header>
          <div class="custom-header fancy-header">
            <div class="header-icon">✨</div>
            <div class="header-content">
              <h3>自定义样式弹窗</h3>
              <p>实时调整弹窗的样式</p>
            </div>
          </div>
        </template>

        <!-- 自定义内容 -->
        <div class="custom-content fancy-content">
          <!-- 样式自定义表单 -->
          <div class="style-customizer">
            <div class="form-row">
              <div class="form-group-half">
                <label>背景颜色</label>
                <div class="color-input-group">
                  <Input
                    v-model="customStyles.backgroundColor"
                    placeholder="#b0dafe"
                  />
                </div>
              </div>
              <div class="form-group-half">
                <label>文字颜色</label>
                <div class="color-input-group">
                  <Input v-model="customStyles.color" placeholder="#333333" />
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group-half">
                <label>边框颜色</label>
                <div class="color-input-group">
                  <Input
                    v-model="customStyles.borderColor"
                    placeholder="#3b82f6"
                  />
                </div>
              </div>
              <div class="form-group-half">
                <label>边框宽度</label>
                <Input v-model="customStyles.borderWidth" placeholder="2px" />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group-half">
                <label>边框半径</label>
                <Input v-model="customStyles.borderRadius" placeholder="12px" />
              </div>
              <div class="form-group-half">
                <label>阴影效果</label>
                <Input
                  v-model="customStyles.boxShadow"
                  placeholder="0 10px 30px rgba(0, 0, 0, 0.15)"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- 自定义底部 -->
        <template #footer>
          <div class="custom-footer fancy-footer">
            <div class="action-buttons">
              <Button @click="resetCustomStyles" type="default"
                >重置样式</Button
              >
              <Button @click="handleCancel('customStyle')" type="default"
                >关闭</Button
              >
              <Button @click="applyCustomStyles" type="primary"
                >应用样式</Button
              >
            </div>
          </div>
        </template>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

// 控制不同弹窗的显示状态
const modalStates = reactive({
  default: false,
  noHeader: false,
  noFooter: false,
  noHeaderFooter: false,
  customStyle: false,
});

// 表单数据
const formData = reactive({
  name: '',
  email: '',
  message: '',
  agree: false,
});

// 自定义样式数据
const customStyles = reactive({
  backgroundColor: '#b0dafe',
  color: '#333333',
  borderColor: '#3b82f6',
  borderRadius: '12px',
  borderWidth: '2px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
});

// 计算自定义弹窗样式（使用contentStyle属性）
const computedCustomStyles = computed(() => {
  return {
    backgroundColor: customStyles.backgroundColor,
    color: customStyles.color,
    borderColor: customStyles.borderColor,
    borderRadius: customStyles.borderRadius,
    borderWidth: customStyles.borderWidth,
    boxShadow: customStyles.boxShadow,
  };
});

// 打开弹窗
const openModal = type => {
  modalStates[type] = true;
};

// 重置表单
const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.message = '';
  formData.agree = false;
};

// 提交表单
const handleSubmit = type => {
  if (type !== 'customStyle' && !formData.agree) return;

  console.log('表单提交:', formData);
  alert('操作成功!');
  modalStates[type] = false;
};

// 确认操作
const handleConfirm = type => {
  alert('确认操作已执行!');
  modalStates[type] = false;
};

// 取消操作
const handleCancel = type => {
  modalStates[type] = false;
};

// 重置自定义样式
const resetCustomStyles = () => {
  Object.assign(customStyles, {
    backgroundColor: '#b0dafe',
    color: '#333333',
    borderColor: '#3b82f6',
    borderRadius: '12px',
    borderWidth: '2px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  });
};

// 应用自定义样式
const applyCustomStyles = () => {
  console.log('应用自定义样式:', customStyles);
  alert('样式已应用!');
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

/* 按钮组样式 */
.demo-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

/* 自定义头部样式 */
.custom-header {
  display: flex;
  align-items: center;
  width: 100%;
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

/* 表单组样式 */
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

/* 信息项样式 */
.info-item {
  margin-bottom: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.info-item:last-child {
  border-bottom: none;
}

/* 文本居中样式 */
.text-center {
  text-align: center;
}

/* 警告图标样式 */
.warning-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

/* 警告标题样式 */
.warning-title {
  margin: 0 0 8px 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

/* 警告消息样式 */
.warning-message {
  margin: 0 0 16px 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
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

/* 自定义样式弹窗 */
:deep(.custom-style-modal .z-modal__content) {
  /* 自定义样式将通过contentStyle属性直接应用 */
}

/* 样式自定义器 */
.style-customizer {
  margin-bottom: 24px;
}

.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.form-group-half {
  flex: 1;
}

.color-input-group {
  display: flex;
  gap: 8px;
  align-items: center;
}

.color-picker {
  width: 40px;
  height: 40px;
  /* border: 1px solid var(--border-color); */
  border-radius: var(--radius-sm);
  cursor: pointer;
  padding: 2px;
}

/* 样式预览 */
.style-preview {
  margin-top: 24px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
}

.style-preview h4 {
  margin: 0 0 12px 0;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.preview-box {
  padding: 16px;
  border-radius: var(--radius-sm);
  border: 1px dashed var(--border-color);
  background-color: var(--custom-bg-color, rgb(176, 218, 255));
  color: var(--custom-text-color, #333333);
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.preview-text {
  margin: 0;
  font-size: var(--font-size-sm);
}

.preview-button {
  margin-top: 8px;
}

/* 自定义样式头部 */
.fancy-header {
  padding: 16px 0;
  border-bottom: 2px solid var(--primary-light);
}

/* 自定义样式内容 */
.fancy-content {
  padding: 24px 0;
}

/* 特性项样式 */
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background-color: var(--bg-hover);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--primary);
}

.feature-item:last-child {
  margin-bottom: 0;
}

.feature-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.feature-content h4 {
  margin: 0 0 4px 0;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}

.feature-content p {
  margin: 0;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

/* 自定义样式底部 */
.fancy-footer {
  padding: 16px 0;
  border-top: 1px solid var(--border-color);
  justify-content: flex-end;
}

/* 间距辅助类 */
.mt-4 {
  margin-top: 16px;
}

.mr-2 {
  margin-right: 8px;
}
</style>
