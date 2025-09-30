<template>
  <div class="sonner-demo">
    <h2 class="demo-title">Sonner 消息提示 - 自定义位置</h2>
    
    <p class="demo-intro">
      Sonner 支持在屏幕的不同位置显示消息提示，可以根据应用场景选择合适的位置。
    </p>
    
    <div class="demo-section">
      <h3 class="section-title">基本位置选项</h3>
      <div class="demo-content">
        <Button @click="showTopRight">右上角</Button>
        <Button @click="showTopLeft">左上角</Button>
        <Button @click="showTopCenter">顶部居中</Button>
        <Button @click="showBottomRight">右下角</Button>
        <Button @click="showBottomLeft">左下角</Button>
        <Button @click="showBottomCenter">底部居中</Button>
      </div>
      <div class="demo-notes">
        <p>点击按钮查看不同位置的消息效果，每个位置使用独立的 Sonner 实例。</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">位置组合演示</h3>
      <div class="demo-content">
        <Button @click="showAllPositions">显示所有位置的消息</Button>
      </div>
      <div class="demo-notes">
        <p>同时在所有位置显示不同类型的消息，展示多实例协同工作效果。</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">实时位置切换</h3>
      <div class="demo-content">
        <Select v-model="selectedPosition" placeholder="选择位置" style="width: 200px;">
          <Option value="top-right">右上角</Option>
          <Option value="top-left">左上角</Option>
          <Option value="top-center">顶部居中</Option>
          <Option value="bottom-right">右下角</Option>
          <Option value="bottom-left">左下角</Option>
          <Option value="bottom-center">底部居中</Option>
        </Select>
        <Button @click="showMessageAtSelectedPosition">显示消息</Button>
      </div>
      <div class="demo-notes">
        <p>选择位置后显示消息，可以直观比较不同位置的显示效果。</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">偏移量控制</h3>
      <div class="demo-content">
        <div class="offset-control">
          <span>偏移量：{{ offsetValue }}px</span>
          <Input 
            v-model="offsetValue" 
            type="number"
            :min="0"
            :max="100"
            :step="8"
            style="width: 100px; margin: 0 8px;"
          />
        </div>
        <Button @click="updateOffset">更新偏移量</Button>
      </div>
      <div class="demo-notes">
        <p>调整消息距离屏幕边缘的偏移量，适用于需要避开其他固定元素的场景。</p>
      </div>
    </div>
    
    <div class="demo-section">
      <h3 class="section-title">高级位置应用</h3>
      <div class="demo-content">
        <Button @click="showPositionGroup">分组位置通知</Button>
        <Button @click="showPriorityNotifications">优先级通知位置</Button>
        <Button @click="showContextSensitive">上下文敏感位置</Button>
      </div>
      <div class="demo-notes">
        <p>结合实际业务场景，展示不同位置的应用策略。</p>
      </div>
    </div>
    
    <!-- 位置演示用的 Sonner 组件 -->
    <Sonner ref="topRightSonner" position="top-right" :offset="offsetValue" />
    <Sonner ref="topLeftSonner" position="top-left" :offset="offsetValue" />
    <Sonner ref="topCenterSonner" position="top-center" :offset="offsetValue" />
    <Sonner ref="bottomRightSonner" position="bottom-right" :offset="offsetValue" />
    <Sonner ref="bottomLeftSonner" position="bottom-left" :offset="offsetValue" />
    <Sonner ref="bottomCenterSonner" position="bottom-center" :offset="offsetValue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '../../../src/components/Button';
import { Select, Option } from '../../../src/components/Select';
import { Input } from '../../../src/components/Input';
import { Sonner } from '../../../src/components/Sonner';

// 引用不同位置的 Sonner 组件实例
const topRightSonner = ref<InstanceType<typeof Sonner>>();
const topLeftSonner = ref<InstanceType<typeof Sonner>>();
const topCenterSonner = ref<InstanceType<typeof Sonner>>();
const bottomRightSonner = ref<InstanceType<typeof Sonner>>();
const bottomLeftSonner = ref<InstanceType<typeof Sonner>>();
const bottomCenterSonner = ref<InstanceType<typeof Sonner>>();

// 选中的位置
const selectedPosition = ref('top-right');

// 偏移量值
const offsetValue = ref(16);

// 获取位置名称的映射表
const positionNames: Record<string, string> = {
  'top-right': '右上角',
  'top-left': '左上角',
  'top-center': '顶部居中',
  'bottom-right': '右下角',
  'bottom-left': '左下角',
  'bottom-center': '底部居中',
};

// 在右上角显示消息
const showTopRight = () => {
  topRightSonner.value?.addToast({
    title: '右上角消息',
    description: '这条消息显示在右上角，适用于不干扰用户主操作区的提示',
    type: 'success',
    icon: 'check-check',
    duration: 4000,
  });
};

// 在左上角显示消息
const showTopLeft = () => {
  topLeftSonner.value?.addToast({
    title: '左上角消息',
    description: '这条消息显示在左上角，适合与左侧导航结合的界面',
    type: 'info',
    icon: 'bell',
    duration: 4000,
  });
};

// 在顶部居中显示消息
const showTopCenter = () => {
  topCenterSonner.value?.addToast({
    title: '顶部居中消息',
    description: '这条消息显示在顶部居中位置，适合重要通知',
    type: 'warning',
    icon: 'triangle-alert',
    duration: 4000,
  });
};

// 在右下角显示消息
const showBottomRight = () => {
  bottomRightSonner.value?.addToast({
    title: '右下角消息',
    description: '这条消息显示在右下角，适合移动设备或需要从下向上显示的场景',
    type: 'error',
    icon: 'circle-alert',
    duration: 4000,
  });
};

// 在左下角显示消息
const showBottomLeft = () => {
  bottomLeftSonner.value?.addToast({
    title: '左下角消息',
    description: '这条消息显示在左下角，适合与底部导航结合的界面',
    type: 'success',
    icon: 'check-check',
    duration: 4000,
  });
};

// 在底部居中显示消息
const showBottomCenter = () => {
  bottomCenterSonner.value?.addToast({
    title: '底部居中消息',
    description: '这条消息显示在底部居中位置，类似原生应用的通知样式',
    type: 'info',
    icon: 'bell',
    duration: 4000,
  });
};

// 显示所有位置的消息
const showAllPositions = () => {
  // 依次在各个位置显示消息
  showTopRight();
  setTimeout(() => showTopLeft(), 300);
  setTimeout(() => showTopCenter(), 600);
  setTimeout(() => showBottomRight(), 900);
  setTimeout(() => showBottomLeft(), 1200);
  setTimeout(() => showBottomCenter(), 1500);
};

// 在选中的位置显示消息
const showMessageAtSelectedPosition = () => {
  const message = {
    title: `${getPositionName(selectedPosition.value)}消息`,
    description: `这条消息显示在${getPositionName(selectedPosition.value)}位置`,
    type: 'info',
    icon: 'bell',
    duration: 4000,
  };
  
  // 根据选择的位置显示消息
  switch (selectedPosition.value) {
    case 'top-right':
      topRightSonner.value?.addToast(message);
      break;
    case 'top-left':
      topLeftSonner.value?.addToast(message);
      break;
    case 'top-center':
      topCenterSonner.value?.addToast(message);
      break;
    case 'bottom-right':
      bottomRightSonner.value?.addToast(message);
      break;
    case 'bottom-left':
      bottomLeftSonner.value?.addToast(message);
      break;
    case 'bottom-center':
      bottomCenterSonner.value?.addToast(message);
      break;
  }
};

// 更新偏移量
const updateOffset = () => {
  // 注意：这里只是演示偏移量的概念
  // 实际的偏移量更新需要通过重新渲染组件来实现
  // 这里我们可以显示一条消息确认偏移量已更新
  topRightSonner.value?.addToast({
    title: '偏移量已更新',
    description: `当前偏移量: ${offsetValue.value}px`,
    type: 'success',
    duration: 2000,
  });
};

// 显示分组位置通知
const showPositionGroup = () => {
  // 业务消息显示在右上角
  topRightSonner.value?.addToast({
    title: '新订单',
    description: '您有一个新的订单等待处理',
    type: 'success',
    duration: 5000,
  });
  
  // 系统消息显示在左上角
  setTimeout(() => {
    topLeftSonner.value?.addToast({
      title: '系统通知',
      description: '系统将在今晚 10 点进行维护',
      type: 'info',
      duration: 5000,
    });
  }, 1000);
  
  // 警告消息显示在顶部居中
  setTimeout(() => {
    topCenterSonner.value?.addToast({
      title: '重要提醒',
      description: '您的账户余额不足，请及时充值',
      type: 'warning',
      duration: 5000,
    });
  }, 2000);
};

// 显示优先级通知位置
const showPriorityNotifications = () => {
  // 低优先级：右上角
  topRightSonner.value?.addToast({
    title: '低优先级通知',
    description: '数据同步已完成',
    type: 'info',
    duration: 3000,
  });
  
  // 中优先级：右下角
  setTimeout(() => {
    bottomRightSonner.value?.addToast({
      title: '中优先级通知',
      description: '您有3条未读消息',
      type: 'success',
      duration: 4000,
    });
  }, 1000);
  
  // 高优先级：顶部居中
  setTimeout(() => {
    topCenterSonner.value?.addToast({
      title: '高优先级通知',
      description: '系统检测到异常活动',
      type: 'error',
      duration: 6000,
    });
  }, 2000);
};

// 显示上下文敏感位置
const showContextSensitive = () => {
  // 模拟表单提交成功（底部居中，不干扰用户继续浏览）
  bottomCenterSonner.value?.addToast({
    title: '表单提交成功',
    description: '您的信息已保存',
    type: 'success',
    duration: 3000,
  });
  
  // 模拟操作反馈（与操作按钮同侧的右下角）
  setTimeout(() => {
    bottomRightSonner.value?.addToast({
      title: '操作已完成',
      description: '文件已成功上传',
      type: 'success',
      duration: 3000,
    });
  }, 1500);
};

// 获取位置名称
const getPositionName = (position: string): string => {
  return positionNames[position] || position;
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

.offset-control {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-bg-1);
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.offset-control span {
  font-size: 14px;
  color: var(--color-text-2);
}
</style>