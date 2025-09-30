<template>
  <div class="sonner-demo">
    <h2 class="demo-title">Sonner 消息提示 - 基本用法</h2>
    
    <p class="demo-intro">
      Sonner 是一个轻量级、可定制的消息提示组件，支持多种类型的消息展示和丰富的配置选项。
    </p>
    
    <div class="demo-section">
      <h3 class="section-title">通过插件方法调用</h3>
      <div class="demo-content">
        <Button @click="showBasicToast">显示基本消息</Button>
        <Button type="primary" @click="showTitleToast">带标题的消息</Button>
        <Button type="success" @click="showSuccessToast">成功消息</Button>
        <Button type="error" @click="showErrorToast">错误消息</Button>
        <Button type="warning" @click="showWarningToast">警告消息</Button>
        <Button type="info" @click="showInfoToast">信息消息</Button>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">自定义配置</h3>
      <div class="demo-content">
        <Button @click="showCustomDuration">自定义显示时间</Button>
        <Button @click="showUndismissable">不可关闭的消息</Button>
        <Button @click="showWithCustomIcon">自定义图标</Button>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">操作方法</h3>
      <div class="demo-content">
        <Button @click="showMultipleToasts">显示多个消息</Button>
        <Button @click="dismissAllToasts">关闭所有消息</Button>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">实际应用场景</h3>
      <div class="demo-content">
        <Button @click="showFormSubmitDemo">表单提交反馈</Button>
        <Button @click="showLoadingDemo">加载状态提示</Button>
        <Button @click="showNotificationDemo">系统通知</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { Button } from '../../../src/components/Button';
import type { ToastPluginInstance } from '../../../src/components/Sonner/ToastPlugin';

// 使用 inject 获取全局注册的 toast 实例（推荐方式）
const toast = inject<ToastPluginInstance>('toast');

// 检查 toast 是否存在的辅助函数
const safeToast = () => {
  if (!toast) {
    console.error('Toast 实例未找到，请确保正确注册了 ToastPlugin');
    alert('Toast 功能不可用，请刷新页面重试');
    return false;
  }
  return true;
};

// 显示基本消息 - 最简单的消息提示，只包含描述文本
const showBasicToast = () => {
  if (!safeToast()) return;
  toast.addToast({
    description: '这是一条基本的消息提示',
  });
};

// 显示带标题的消息 - 包含标题和描述文本的消息
const showTitleToast = () => {
  if (!safeToast()) return;
  toast.addToast({
    title: '提示',
    description: '这是一条带标题的消息提示',
  });
};

// 显示成功消息 - 快捷方法，用于操作成功的反馈
const showSuccessToast = () => {
  if (!safeToast()) return;
  toast.success('操作成功', '成功');
};

// 显示错误消息 - 快捷方法，用于操作失败的反馈
const showErrorToast = () => {
  if (!safeToast()) return;
  toast.error('操作失败，请重试', '错误');
};

// 显示警告消息 - 快捷方法，用于需要用户注意的情况
const showWarningToast = () => {
  if (!safeToast()) return;
  toast.warning('请注意，这是一条警告消息', '警告');
};

// 显示信息消息 - 快捷方法，用于一般信息的展示
const showInfoToast = () => {
  if (!safeToast()) return;
  toast.info('这是一条信息提示', '信息');
};

// 自定义显示时间 - 设置消息显示的持续时间（毫秒）
const showCustomDuration = () => {
  if (!safeToast()) return;
  toast.addToast({
    title: '自定义时间',
    description: '这条消息将显示 10 秒钟',
    duration: 10000,
  });
};

// 不可关闭的消息 - 设置为无限持续时间，不会自动关闭
const showUndismissable = () => {
  if (!safeToast()) return;
  toast.addToast({
    title: '重要通知',
    description: '这条消息不会自动关闭，请手动关闭',
    duration: Infinity,
  });
};

// 自定义图标 - 使用指定的图标名称显示自定义图标
const showWithCustomIcon = () => {
  if (!safeToast()) return;
  toast.addToast({
    title: '自定义图标',
    description: '这条消息使用了自定义图标',
    icon: 'star',
  });
};

// 显示多个消息 - 连续显示多条消息，展示消息队列效果
const showMultipleToasts = () => {
  if (!safeToast()) return;
  for (let i = 0; i < 5; i++) {
    toast.addToast({
      title: `消息 ${i + 1}`,
      description: `这是第 ${i + 1} 条消息`,
      duration: 3000 + i * 1000,
      // 每条消息使用不同类型
      type: ['success', 'info', 'warning', 'error', 'default'][i % 5] as any,
    });
  }
};

// 关闭所有消息 - 一键关闭当前显示的所有消息
const dismissAllToasts = () => {
  if (!safeToast()) return;
  toast.dismissAll();
};

// 表单提交反馈演示 - 模拟表单提交过程的消息反馈
const showFormSubmitDemo = () => {
  if (!safeToast()) return;
  
  // 显示提交中消息
  const loadingToastId = toast.addToast({
    title: '提交中',
    description: '正在处理您的请求，请稍候...',
    type: 'info',
    duration: Infinity,
  });
  
  // 模拟网络请求延迟
  setTimeout(() => {
    // 关闭加载消息
    toast.dismissToast(loadingToastId);
    
    // 显示成功消息
    toast.success('表单已成功提交', '提交成功');
  }, 2000);
};

// 加载状态提示演示 - 模拟长时间加载过程的状态更新
const showLoadingDemo = () => {
  if (!safeToast()) return;
  
  // 显示初始加载消息
  let progress = 0;
  const progressToastId = toast.addToast({
    title: '加载中',
    description: `进度: ${progress}%`,
    type: 'info',
    duration: Infinity,
  });
  
  // 模拟进度更新
  const interval = setInterval(() => {
    progress += 10;
    
    if (progress >= 100) {
      // 完成加载
      clearInterval(interval);
      toast.updateToast(progressToastId, {
        title: '加载完成',
        description: '所有内容已成功加载',
        type: 'success',
        duration: 3000,
      });
    } else {
      // 更新进度
      toast.updateToast(progressToastId, {
        description: `进度: ${progress}%`,
      });
    }
  }, 500);
};

// 系统通知演示 - 模拟不同时间点收到的系统通知
const showNotificationDemo = () => {
  if (!safeToast()) return;
  
  toast.info('您有一封新邮件', '新消息');
  
  setTimeout(() => {
    toast.warning('服务器将在30分钟后进行维护', '系统通知');
  }, 1000);
  
  setTimeout(() => {
    toast.success('数据已自动备份', '备份完成');
  }, 2000);
};
</script>

<style scoped>
.sonner-demo {
  padding: 20px;
  background-color: var(--color-bg-1);
  border-radius: 8px;
}

.demo-intro {
  font-size: 14px;
  color: var(--color-text-3);
  margin-bottom: 24px;
  line-height: 1.5;
}

.demo-title {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--color-text-1);
  font-weight: 600;
}

.demo-section {
  margin-bottom: 32px;
  padding: 16px;
  background-color: var(--color-bg-2);
  border-radius: 6px;
  border: 1px solid var(--color-border);
}

.section-title {
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--color-text-1);
  font-weight: 500;
}

.demo-content {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>