<template>
  <div class="sonner-simple-demo">
    <h2>Sonner Toast 简单调用方式演示</h2>
    
    <h3>1. 使用组合式API (推荐)</h3>
    <div class="demo-buttons">
      <Button @click="showSuccessToast">成功提示</Button>
      <Button @click="showErrorToast" type="danger">错误提示</Button>
      <Button @click="showWarningToast" type="warning">警告提示</Button>
      <Button @click="showInfoToast" type="primary">信息提示</Button>
    </div>
    
    <h3>2. 使用全局toast对象</h3>
    <div class="demo-buttons">
      <Button @click="showGlobalSuccess">全局成功提示</Button>
      <Button @click="showGlobalError" type="danger">全局错误提示</Button>
    </div>
    
    <h3>3. 高级用法</h3>
    <div class="demo-buttons">
      <Button @click="showCustomToast">自定义提示</Button>
      <Button @click="dismissAllToasts" type="ghost">关闭所有提示</Button>
    </div>
    
    <!-- 需要添加Sonner组件到应用中才能正常工作 -->
    <Sonner position="top-right" :limit="3" />
  </div>
</template>

<script lang="ts" setup>
import { Button } from '../components/Button';
import { Sonner, useToast, toast } from '../components/Sonner';

// 使用组合式API（推荐方式）
const toastApi = useToast();

// 组合式API调用示例
const showSuccessToast = () => {
  toastApi.success('操作成功', '成功提示');
};

const showErrorToast = () => {
  toastApi.error('操作失败，请重试', '错误提示');
};

const showWarningToast = () => {
  toastApi.warning('请注意这个警告', '警告提示');
};

const showInfoToast = () => {
  toastApi.info('这是一条普通信息', '信息提示');
};

// 全局对象调用示例
const showGlobalSuccess = () => {
  toast.success('这是通过全局toast对象显示的成功消息');
};

const showGlobalError = () => {
  toast.error('这是通过全局toast对象显示的错误消息');
};

// 高级用法示例
const showCustomToast = () => {
  toastApi.addToast({
    type: 'success',
    title: '自定义提示',
    description: '这是一个自定义的提示消息',
    duration: 8000,
    icon: 'check-check',
    style: {
      backgroundColor: '#f0fdf4',
      borderColor: '#bbf7d0'
    }
  });
};

const dismissAllToasts = () => {
  toastApi.dismissAll();
};
</script>

<style scoped>
.sonner-simple-demo {
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 24px;
  margin-bottom: 24px;
  color: #1f2937;
}

h3 {
  font-size: 18px;
  margin-top: 24px;
  margin-bottom: 16px;
  color: #374151;
}

.demo-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>