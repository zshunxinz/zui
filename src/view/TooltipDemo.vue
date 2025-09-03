<template>
  <div class="tooltip-demo-container">
    <h2 class="demo-title">Tooltip 组件演示</h2>

    <div class="demo-section">
      <h3 class="section-title">基本用法</h3>
      <div class="demo-content">
        <Tooltip content="这是一个默认的提示信息">
          <Button>默认提示</Button>
        </Tooltip>

        <Tooltip content="在顶部显示" placement="top">
          <Button type="primary">顶部提示</Button>
        </Tooltip>

        <Tooltip content="在右侧显示" placement="right">
          <Button type="success">右侧提示</Button>
        </Tooltip>

        <Tooltip content="在底部显示" placement="bottom">
          <Button type="warning">底部提示</Button>
        </Tooltip>

        <Tooltip content="在左侧显示" placement="left">
          <Button type="danger">左侧提示</Button>
        </Tooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="section-title">主题颜色</h3>
      <div class="demo-content">
        <Tooltip content="默认主题" theme="default">
          <Button>默认主题</Button>
        </Tooltip>

        <Tooltip content="主要主题" theme="primary">
          <Button type="primary">主要主题</Button>
        </Tooltip>

        <Tooltip content="成功主题" theme="success">
          <Button type="success">成功主题</Button>
        </Tooltip>

        <Tooltip content="警告主题" theme="warning">
          <Button type="warning">警告主题</Button>
        </Tooltip>

        <Tooltip content="危险主题" theme="danger">
          <Button type="danger">危险主题</Button>
        </Tooltip>

        <Tooltip content="信息主题" theme="info">
          <Button type="info">信息主题</Button>
        </Tooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="section-title">自定义内容</h3>
      <div class="demo-content">
        <Tooltip>
          <Button>自定义HTML内容</Button>
          <template #content>
            <div style="text-align: center">
              <div style="font-weight: bold">自定义标题</div>
              <div style="font-size: 12px; color: var(--color-primary-text-1)">
                这是自定义的提示内容<br />支持多行显示
              </div>
            </div>
          </template>
        </Tooltip>

        <Tooltip content="禁用状态的提示" disabled>
          <Button>禁用状态</Button>
        </Tooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="section-title">延迟显示</h3>
      <div class="demo-content">
        <Tooltip content="延迟500ms显示" :delay="500">
          <Button>延迟显示</Button>
        </Tooltip>

        <Tooltip content="无箭头" :arrow="false">
          <Button>无箭头提示</Button>
        </Tooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3 class="section-title">包裹不同元素</h3>
      <div class="demo-content">
        <Tooltip content="提示信息">
          <span class="text-element">文本元素</span>
        </Tooltip>

        <Tooltip content="这是一个图标">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </Tooltip>

        <Tooltip content="这是一个卡片">
          <Card
            style="
              width: 100px;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            "
          >
            <span>卡片</span>
          </Card>
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from "../components/Tooltip";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
</script>

<style scoped>
.tooltip-demo-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  color: var(--color-text);
  margin-bottom: 24px;
  text-align: center;
}

.demo-section {
  margin-bottom: 32px;
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background-color: var(--color-background);
}

.section-title {
  font-size: var(--font-size-1);
  font-weight: var(--font-weight-1);
  color: var(--color-text);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.demo-content {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: center;
}

.text-element {
  display: inline-block;
  padding: 8px 12px;
  background-color: var(--color-bg-hover);
  border-radius: var(--border-radius);
  cursor: pointer;
  user-select: none;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .demo-content {
    flex-direction: column;
    align-items: stretch;
  }

  .demo-content > * {
    width: 100%;
  }
}
</style>
