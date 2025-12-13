<template>
  <div class="z-popover-demo-container">
    <h3>Popover 组件演示</h3>
    <Space wrap gap="20px" vertical>
      <div class="demo-section">
        <h4>基础用法</h4>
        <Popover>
          <Button>打开弹出层</Button>
          <template #content>
            <div class="z-popover-content">
              <h5>Popover 内容</h5>
              <p>这是一个简单的Popover示例</p>
            </div>
          </template>
        </Popover>
      </div>

      <div class="demo-section">
        <h4>位置设置</h4>
        <Space wrap gap="10px">
          <Popover placement="top">
            <Button>上</Button>
            <template #content>
              <div class="z-popover-content">
                <p>顶部弹出</p>
              </div>
            </template>
          </Popover>
          <Popover placement="bottom">
            <Button>下</Button>
            <template #content>
              <div class="z-popover-content">
                <p>底部弹出</p>
              </div>
            </template>
          </Popover>
          <Popover placement="left">
            <Button>左</Button>
            <template #content>
              <div class="z-popover-content">
                <p>左侧弹出</p>
              </div>
            </template>
          </Popover>
          <Popover placement="right">
            <Button>右</Button>
            <template #content>
              <div class="z-popover-content">
                <p>右侧弹出</p>
              </div>
            </template>
          </Popover>
        </Space>
      </div>

      <div class="demo-section">
        <h4>自定义属性</h4>
        <Space wrap gap="10px">
          <Popover :overlay="false">
            <Button>无覆盖层</Button>
            <template #content>
              <div class="z-popover-content">
                <p>无背景覆盖层</p>
              </div>
            </template>
          </Popover>
          <Popover :arrow="false">
            <Button>无箭头</Button>
            <template #content>
              <div class="z-popover-content">
                <p>无箭头样式</p>
              </div>
            </template>
          </Popover>
          <Popover :offset="20">
            <Button>带偏移</Button>
            <template #content>
              <div class="z-popover-content">
                <p>带20px偏移</p>
              </div>
            </template>
          </Popover>
        </Space>
      </div>

      <div class="demo-section">
        <h4>禁用状态</h4>
        <Popover disabled>
          <Button disabled>禁用状态</Button>
          <template #content>
            <div class="z-popover-content">
              <p>这是禁用状态的弹出层</p>
            </div>
          </template>
        </Popover>
      </div>
    </Space>
  </div>
</template>

<script setup lang="ts">
import { Popover } from '../../src/components/Popover';
import { Button } from '../../src/components/Button';
import { Space } from '../../src/components/Space';
</script>

<style scoped>
.z-popover-demo-container {
  padding: 20px;
  background-color: var(--color-background);
  border-radius: var(--border-radius);
}

.demo-section {
  margin-bottom: 20px;
}

.demo-section h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
}

.z-popover-content {
  padding: 12px 16px;
  min-width: 100px;
}

.z-popover-content h5 {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 500;
}

.z-popover-content p {
  margin: 0;
  font-size: 12px;
  color: var(--color-text-muted);
}
</style>
