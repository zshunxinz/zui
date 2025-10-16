<template>
  <div class="sonner-demo">
    <h2 class="demo-title">Sonner 消息提示 - 简单调用方式</h2>

    <p class="demo-intro">
      Sonner 提供了更简洁的调用方式，包括组合式 API 和全局 toast
      对象，让消息提示更加便捷易用。
    </p>

    <div class="demo-section">
      <h3 class="section-title">使用组合式 API (useToast)</h3>
      <div class="demo-content">
        <Button @click="showSuccessWithToastApi">成功消息</Button>
        <Button @click="showErrorWithToastApi">错误消息</Button>
        <Button @click="showWarningWithToastApi">警告消息</Button>
        <Button @click="showInfoWithToastApi">信息消息</Button>
      </div>
      <div class="demo-notes">
        <p>
          通过 useToast() 组合式 API 获取 toast
          实例，然后调用相应的方法显示不同类型的消息。
        </p>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="section-title">使用全局 toast 对象</h3>
      <div class="demo-content">
        <Button @click="showSuccessWithGlobalToast">成功消息</Button>
        <Button @click="showErrorWithGlobalToast">错误消息</Button>
        <Button @click="showWarningWithGlobalToast">警告消息</Button>
        <Button @click="showInfoWithGlobalToast">信息消息</Button>
      </div>
      <div class="demo-notes">
        <p>直接导入全局 toast 对象并调用其方法，适合在任何地方快速显示消息。</p>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="section-title">高级用法对比</h3>
      <div class="demo-content">
        <Button @click="compareMethods">对比调用方式</Button>
      </div>
      <div class="demo-notes">
        <p>对比不同调用方式的效果，包括详细配置选项的使用。</p>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="section-title">实际应用场景</h3>
      <div class="demo-content">
        <Button @click="submitForm">表单提交</Button>
        <Button @click="loadData">加载数据</Button>
        <Button @click="deleteItem">删除项目</Button>
      </div>
      <div class="demo-notes">
        <p>在实际业务场景中使用不同的调用方式处理交互反馈。</p>
      </div>
    </div>

    <!-- 为演示提供默认位置的 Sonner 组件 -->
    <Sonner position="top-right" />
  </div>
</template>

<script setup lang="ts">
import { Button } from '../../../src/components/Button';
import { Sonner } from '../../../src/components/Sonner';
import { useToast, toast } from '../../../src/components/Sonner';

// 使用组合式 API 获取 toast 实例
const toastApi = useToast();

// === 组合式 API 使用示例 ===

// 显示成功消息
const showSuccessWithToastApi = () => {
  toastApi.success('操作成功', '提示');
};

// 显示错误消息
const showErrorWithToastApi = () => {
  toastApi.error('操作失败', '错误');
};

// 显示警告消息
const showWarningWithToastApi = () => {
  toastApi.warning('操作可能存在风险', '警告');
};

// 显示信息消息
const showInfoWithToastApi = () => {
  toastApi.info('这是一条提示信息', '信息');
};

// === 全局 toast 对象使用示例 ===

// 显示成功消息
const showSuccessWithGlobalToast = () => {
  toast.success('操作成功', '提示');
};

// 显示错误消息
const showErrorWithGlobalToast = () => {
  toast.error('操作失败', '错误');
};

// 显示警告消息
const showWarningWithGlobalToast = () => {
  toast.warning('操作可能存在风险', '警告');
};

// 显示信息消息
const showInfoWithGlobalToast = () => {
  toast.info('这是一条提示信息', '信息');
};

// === 对比调用方式 ===

const compareMethods = () => {
  // 使用组合式 API 带详细配置
  toastApi.addToast({
    title: '组合式 API 调用',
    description: '使用 useToast() 组合式 API 并配置详细选项',
    type: 'success',
    duration: 4000,
    icon: 'check-check',
    size: 'large',
    style: { backgroundColor: 'rgba(72, 187, 120, 0.1)' },
  });

  // 使用全局 toast 对象带详细配置
  setTimeout(() => {
    toast.addToast({
      title: '全局 toast 对象调用',
      description: '直接导入 toast 对象并配置详细选项',
      type: 'info',
      duration: 4000,
      icon: 'bell',
      size: 'large',
      style: { backgroundColor: 'rgba(59, 130, 246, 0.1)' },
    });
  }, 1500);
};

// === 实际应用场景示例 ===

// 表单提交场景
const submitForm = () => {
  // 模拟提交中
  const loadingToastId = toast.addToast({
    title: '提交中',
    description: '正在处理您的请求...',
    type: 'info',
    duration: Infinity, // 不会自动关闭
    dismissible: false, // 禁止手动关闭
    icon: 'circle-loader',
  });

  // 模拟网络请求延迟
  setTimeout(() => {
    // 关闭加载提示
    toast.dismissToast(loadingToastId);
    // 显示成功消息
    toast.success('表单提交成功', '成功');
  }, 2000);
};

// 加载数据场景
const loadData = () => {
  // 使用组合式 API 显示加载状态
  const loadingToastId = toastApi.addToast({
    title: '加载中',
    description: '正在加载数据...',
    type: 'info',
    duration: Infinity,
    icon: 'circle-loader',
  });

  // 模拟数据加载
  setTimeout(() => {
    toastApi.dismissToast(loadingToastId);
    toastApi.info('数据加载完成', '提示');
  }, 1500);
};

// 删除项目场景
const deleteItem = () => {
  toast.warning('确定要删除此项目吗？', '警告');

  // 模拟用户确认删除
  setTimeout(() => {
    toast.success('项目已成功删除', '成功');
  }, 1000);
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
  align-items: flex-end;
  margin-bottom: 12px;
}

.demo-notes {
  font-size: 13px;
  color: var(--color-text-4);
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--color-border);
}

.demo-notes p {
  margin: 0;
  line-height: 1.4;
}
</style>
