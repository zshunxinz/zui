<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('');
const switchValue = ref(false);
const checkboxValue = ref(false);

const features = ref([
  {
    title: '简单易用',
    description: '提供简洁直观的 API，让开发者能够快速上手，提高开发效率',
    icon: 'zap',
  },
  {
    title: '高度可定制',
    description: '支持丰富的主题配置和样式定制，满足不同项目的设计需求',
    icon: 'palette',
  },
  {
    title: 'TypeScript 支持',
    description: '完整的 TypeScript 类型定义，提供更好的开发体验和类型安全',
    icon: 'code',
  },
  {
    title: '响应式设计',
    description: '内置响应式布局系统，完美适配各种屏幕尺寸',
    icon: 'layout-list',
  },
  {
    title: '暗色模式',
    description: '原生支持暗色模式，提供舒适的夜间浏览体验',
    icon: 'moon',
  },
  {
    title: '持续更新',
    description: '持续维护和更新，不断优化组件性能和用户体验',
    icon: 'refresh-cw',
  },
]);

const componentDemos = ref([
  {
    name: 'Button',
    description: '按钮组件，支持多种类型和尺寸',
    icon: 'box',
    link: '/components/Button',
  },
  {
    name: 'Input',
    description: '输入框组件，支持多种输入场景',
    icon: 'text-cursor-input',
    link: '/components/input',
  },
  {
    name: 'Card',
    description: '卡片容器，用于展示相关内容',
    icon: 'box',
    link: '/components/Card',
  },
  {
    name: 'Modal',
    description: '对话框组件，用于重要信息展示',
    icon: 'maximize',
    link: '/components/Modal',
  },
  {
    name: 'Select',
    description: '下拉选择组件，支持单选和多选',
    icon: 'list',
    link: '/components/Select',
  },
  {
    name: 'Tabs',
    description: '标签页组件，用于内容分组',
    icon: 'layers',
    link: '/components/Tabs',
  },
  {
    name: 'Switch',
    description: '开关组件，用于切换状态',
    icon: 'toggle-left',
    link: '/components/Switch',
  },
  {
    name: 'Checkbox',
    description: '复选框组件，支持多选',
    icon: 'check',
    link: '/components/Checkbox',
  },
  {
    name: 'Radio',
    description: '单选框组件，支持单选',
    icon: 'disc',
    link: '/components/Radio',
  },
  {
    name: 'Tooltip',
    description: '提示框组件，用于显示额外信息',
    icon: 'info',
    link: '/components/Tooltip',
  },
  {
    name: 'Dropdown',
    description: '下拉菜单组件，用于操作菜单',
    icon: 'menu',
    link: '/components/Dropdown',
  },
  {
    name: 'Accordion',
    description: '手风琴组件，用于折叠内容',
    icon: 'chevron-down',
    link: '/components/Accordion',
  },
]);

const createComponentCommand = ref('npm install zui --save');

const navigateTo = (path: string) => {
  window.location.href = path;
};

const copyCommand = () => {
  navigator.clipboard.writeText(createComponentCommand.value);
};
</script>

<template>
  <div class="zui-home">
    <div class="zui-home__hero">
      <div class="zui-home__hero-content">
        <h1 class="zui-home__hero-title">zui</h1>
        <p class="zui-home__hero-subtitle">一个简单、好用的 Vue 3 组件库</p>
        <div class="zui-home__hero-actions">
          <Button
            type="primary"
            size="large"
            @click="navigateTo('/guide/install')"
            >开始使用</Button
          >
          <Button
            type="default"
            size="large"
            @click="navigateTo('/components/Button')"
            >查看组件</Button
          >
        </div>
      </div>
    </div>

    <Row :gutter="[0, 24]" class="zui-home__quickstart">
      <Col :span="24">
        <div class="zui-home__section-header">
          <h2 class="zui-home__section-title">快速开始</h2>
          <p class="zui-home__section-subtitle">使用命令快速创建新组件</p>
        </div>
      </Col>
      <Col :span="24">
        <Card class="zui-home__command-card" hoverable>
          <div class="zui-home__command-content">
            <div class="zui-home__command-icon">
              <Icon name="command" :size="32" />
            </div>
            <div class="zui-home__command-info">
              <h3 class="zui-home__command-title">创建新组件</h3>
              <p class="zui-home__command-description">
                使用以下命令快速创建新的组件，包含完整的类型定义和样式文件
              </p>
              <div class="zui-home__command-box">
                <code class="zui-home__command-text">{{
                  createComponentCommand
                }}</code>
                <Button type="primary" size="small" @click="copyCommand">
                  <Icon name="copy" :size="16" style="margin-right: 4px" />
                  复制
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Row>

    <Row :gutter="24" class="zui-home__features">
      <Col :span="24">
        <div class="zui-home__section-header">
          <h2 class="zui-home__section-title">核心特性</h2>
        </div>
      </Col>
      <Col
        v-for="(feature, index) in features"
        :key="index"
        :span="24"
        :md="8"
        :lg="8"
      >
        <Card class="zui-home__feature-card" hoverable>
          <div class="zui-home__feature-icon">
            <Icon :name="feature.icon" :size="32" />
          </div>
          <h3 class="zui-home__feature-title">{{ feature.title }}</h3>
          <p class="zui-home__feature-description">{{ feature.description }}</p>
        </Card>
      </Col>
    </Row>

    <Row :gutter="24" class="zui-home__demos">
      <Col :span="24">
        <div class="zui-home__section-header">
          <h2 class="zui-home__section-title">组件示例</h2>
          <p class="zui-home__section-subtitle">探索组件的实际使用方法和效果</p>
        </div>
      </Col>

      <Col :span="12">
        <Card class="zui-home__demo-card" hoverable>
          <div class="zui-home__demo-header">
            <h3 class="zui-home__demo-title">Button 按钮</h3>
            <p class="zui-home__demo-description">
              按钮组件，支持多种类型和尺寸
            </p>
          </div>
          <div class="zui-home__demo-content">
            <div class="zui-home__demo-preview">
              <!-- <Button size="large">默认按钮</Button> -->
              <Button type="primary" size="large">主要按钮</Button>
              <Button type="success" size="large">成功按钮</Button>
              <Button type="warning" size="large">警告按钮</Button>
              <Button type="danger" size="large">危险按钮</Button>
            </div>
            <div class="zui-home__demo-code">
              <pre
                class="zui-home__code-block"
              ><code>&lt;Button type="primary"&gt;主要按钮&lt;/Button&gt;</code></pre>
            </div>
          </div>
        </Card>
      </Col>

      <Col :span="12">
        <Card class="zui-home__demo-card" hoverable>
          <div class="zui-home__demo-header">
            <h3 class="zui-home__demo-title">Input 输入框</h3>
            <p class="zui-home__demo-description">
              输入框组件，支持多种输入场景
            </p>
          </div>
          <div class="zui-home__demo-content">
            <div class="zui-home__demo-preview">
              <Input v-model="inputValue" placeholder="请输入内容" />
            </div>
            <div class="zui-home__demo-code">
              <pre
                class="zui-home__code-block"
              ><code>&lt;Input v-model="value" placeholder="请输入内容" /&gt;</code></pre>
            </div>
          </div>
        </Card>
      </Col>

      <Col :span="12">
        <Card class="zui-home__demo-card" hoverable>
          <div class="zui-home__demo-header">
            <h3 class="zui-home__demo-title">Switch 开关</h3>
            <p class="zui-home__demo-description">开关组件，用于切换状态</p>
          </div>
          <div class="zui-home__demo-content">
            <div class="zui-home__demo-preview">
              <Switch v-model="switchValue" />
              <span class="zui-home__demo-status">{{
                switchValue ? '开启' : '关闭'
              }}</span>
            </div>
            <div class="zui-home__demo-code">
              <pre
                class="zui-home__code-block"
              ><code>&lt;Switch v-model="value" /&gt;</code></pre>
            </div>
          </div>
        </Card>
      </Col>

      <Col :span="12">
        <Card class="zui-home__demo-card" hoverable>
          <div class="zui-home__demo-header">
            <h3 class="zui-home__demo-title">Checkbox 复选框</h3>
            <p class="zui-home__demo-description">复选框组件，支持多选</p>
          </div>
          <div class="zui-home__demo-content">
            <div class="zui-home__demo-preview">
              <Checkbox v-model="checkboxValue"> 同意服务条款 </Checkbox>
            </div>
            <div class="zui-home__demo-code">
              <pre
                class="zui-home__code-block"
              ><code>&lt;Checkbox v-model="value"&gt;
  同意服务条款
&lt;/Checkbox&gt;</code></pre>
            </div>
          </div>
        </Card>
      </Col>
    </Row>

    <Row :gutter="24" class="zui-home__components">
      <Col :span="24">
        <div class="zui-home__section-header">
          <h2 class="zui-home__section-title">组件展示</h2>
          <p class="zui-home__section-subtitle">探索我们精心设计的组件库</p>
        </div>
      </Col>
      <Col
        v-for="(component, index) in componentDemos"
        :key="index"
        :span="24"
        :md="12"
        :lg="6"
      >
        <Card class="zui-home__component-card" hoverable>
          <div class="zui-home__component-icon">
            <Icon :name="component.icon" :size="48" />
          </div>
          <h3 class="zui-home__component-name">{{ component.name }}</h3>
          <p class="zui-home__component-description">
            {{ component.description }}
          </p>
          <Button
            type="primary"
            @click="navigateTo(component.link)"
            size="small"
            block
            >查看详情</Button
          >
        </Card>
      </Col>
    </Row>

    <Row :gutter="[0, 0]" class="zui-home__cta">
      <Col :span="24">
        <Card class="zui-home__cta-card" type="primary">
          <h2 class="zui-home__cta-title">准备开始了吗？</h2>
          <p class="zui-home__cta-description">
            立即开始使用 zui 组件库，构建出色的应用程序
          </p>
          <div class="zui-home__cta-actions">
            <Button
              type="default"
              size="large"
              @click="navigateTo('/guide/install')"
              >快速开始</Button
            >
            <Button
              type="primary"
              size="large"
              @click="navigateTo('/components/Button')"
              >浏览组件</Button
            >
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<style scoped>
.zui-home {
  width: 100%;
  min-height: 100vh;
  padding: 0;
  background-color: var(--color-background);
}

.zui-home__hero {
  min-height: 440px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  background: linear-gradient(
    180deg,
    var(--color-bg-hover-1) 0%,
    var(--color-background) 100%
  );
}

.zui-home__hero-content {
  text-align: center;
  max-width: 720px;
}

.zui-home__hero-title {
  font-size: var(--font-size-7);
  font-weight: var(--font-weight-3);
  margin: 0 0 20px 0;
  color: var(--color-text);
  line-height: 1.2;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.zui-home__hero-subtitle {
  font-size: var(--font-size-2);
  color: var(--color-text-2);
  margin: 0 0 28px 0;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out;
}

.zui-home__hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
  animation: fadeInUp 0.8s ease-out;
}

.zui-home__quickstart {
  padding: 60px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.zui-home__features {
  padding: 60px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.zui-home__demos {
  padding: 60px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.zui-home__components {
  padding: 60px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.zui-home__cta {
  padding: 60px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.zui-home__section-header {
  text-align: center;
  margin-bottom: 40px;
}

.zui-home__section-title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-3);
  margin: 0 0 16px 0;
  color: var(--color-text);
  line-height: 1.3;
}

.zui-home__section-subtitle {
  font-size: var(--font-size-1);
  color: var(--color-text-2);
  margin: 0;
  line-height: 1.5;
}

.zui-home__command-card {
  padding: var(--padding-3);
  transition: all 0.3s ease;
}

.zui-home__command-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.zui-home__command-content {
  display: flex;
  align-items: flex-start;
  gap: var(--padding-3);
}

.zui-home__command-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--border-radius);
  background: var(--color-bg-hover-1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.zui-home__command-card:hover .zui-home__command-icon {
  transform: scale(1.05);
}

.zui-home__command-info {
  flex: 1;
  min-width: 0;
}

.zui-home__command-title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  margin: 0 0 8px 0;
  color: var(--color-text);
  line-height: 1.4;
}

.zui-home__command-description {
  font-size: var(--font-size-1);
  color: var(--color-text-2);
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.zui-home__command-box {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--padding-2);
  background: var(--color-bg-hover-1);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.zui-home__command-card:hover .zui-home__command-box {
  border-color: var(--color-primary);
}

.zui-home__command-text {
  flex: 1;
  font-family: monospace;
  font-size: var(--font-size-1);
  color: var(--color-text);
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  white-space: nowrap;
}

.zui-home__feature-card {
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.zui-home__feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.zui-home__feature-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--border-radius);
  background: var(--color-bg-hover-1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--padding-2);
  transition: all 0.3s ease;
}

.zui-home__feature-card:hover .zui-home__feature-icon {
  transform: scale(1.05);
}

.zui-home__feature-title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  margin: 0 0 12px 0;
  color: var(--color-text);
  line-height: 1.4;
}

.zui-home__feature-description {
  font-size: var(--font-size-1);
  color: var(--color-text-2);
  margin: 0;
  line-height: 1.6;
}

.zui-home__demo-card {
  height: 100%;
  transition: all 0.3s ease;
}

.zui-home__demo-card:hover {
  /* transform: translateY(-4px); */
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); */
}

.zui-home__demo-header {
  padding: var(--padding-3);
  border-bottom: 1px solid var(--color-border);
  margin-bottom: var(--padding-2);
}

.zui-home__demo-title {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  margin: 0 0 8px 0;
  color: var(--color-text);
  line-height: 1.4;
}

.zui-home__demo-description {
  font-size: var(--font-size-1);
  color: var(--color-text-2);
  margin: 0 0 16px 0;
  line-height: 1.5;
}

.zui-home__demo-content {
  display: flex;
  flex-direction: column;
  gap: var(--padding-2);
}

.zui-home__demo-preview {
  padding: var(--padding-3);
  background: var(--color-bg-hover-1);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 80px;
}

.zui-home__demo-status {
  font-size: var(--font-size-1);
  color: var(--color-text-2);
  margin-left: var(--space-2);
}

.zui-home__demo-code {
  background: var(--color-bg-hover-1);
  border-radius: var(--border-radius);
  padding: var(--padding-2);
  overflow-x: auto;
}

.zui-home__code-block {
  margin: 0;
  font-family: monospace;
  font-size: var(--font-size-0);
  color: var(--color-text);
  background: transparent;
  border: none;
  padding: 0;
  overflow-x: auto;
  white-space: pre-wrap;
  line-height: 1.6;
}

.zui-home__code-block code {
  display: block;
  color: var(--color-primary);
}

.zui-home__component-card {
  height: 100%;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.zui-home__component-card:hover {
  /* transform: translateY(-4px); */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.zui-home__component-icon {
  padding: var(--padding-3);
  background: var(--color-bg-hover-1);
  border-radius: var(--border-radius);
  margin-bottom: var(--padding-2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.zui-home__component-card:hover .zui-home__component-icon {
  transform: scale(1.05);
}

.zui-home__component-name {
  font-size: var(--font-size-2);
  font-weight: var(--font-weight-2);
  margin: 0 0 8px 0;
  color: var(--color-text);
  line-height: 1.4;
}

.zui-home__component-description {
  font-size: var(--font-size-1);
  color: var(--color-text-2);
  margin: 0 0 16px 0;
  line-height: 1.6;
  min-height: 48px;
}

.zui-home__cta-card {
  text-align: center;
  padding: 56px 40px;
  background: var(--color-primary);
  border: none;
  transition: all 0.3s ease;
}

.zui-home__cta-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.zui-home__cta-card :deep(.z-card__body) {
  padding: 0;
}

.zui-home__cta-title {
  font-size: var(--font-size-5);
  font-weight: var(--font-weight-3);
  margin: 0 0 16px 0;
  color: var(--color-primary-text-1);
  line-height: 1.3;
}

.zui-home__cta-description {
  font-size: var(--font-size-2);
  color: var(--color-primary-text-1);
  margin: 0 0 28px 0;
  opacity: 0.95;
  line-height: 1.6;
}

.zui-home__cta-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-3);
}

.zui-home__cta-actions :deep(.btn--primary) {
  background-color: var(--color-background);
  color: var(--color-primary);
}

.zui-home__cta-actions :deep(.btn--primary:hover) {
  background-color: var(--color-bg-hover-1);
  color: var(--color-primary-hover);
}

.zui-home__cta-actions :deep(.btn--default) {
  background-color: transparent;
  color: var(--color-primary-text-1);
  border: 1px solid var(--color-primary-text-1);
}

.zui-home__cta-actions :deep(.btn--default:hover) {
  background-color: var(--color-primary-text-1);
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .zui-home__hero {
    padding: 48px 24px;
    min-height: 400px;
  }

  .zui-home__hero-title {
    font-size: calc(var(--font-size-7) * 0.9);
  }

  .zui-home__hero-subtitle {
    font-size: var(--font-size-1);
  }

  .zui-home__quickstart,
  .zui-home__features,
  .zui-home__demos,
  .zui-home__components,
  .zui-home__cta {
    padding: 48px 24px;
  }

  .zui-home__section-title {
    font-size: calc(var(--font-size-5) * 0.95);
  }

  .zui-home__section-header {
    margin-bottom: 32px;
  }

  .zui-home__demo-preview {
    flex-direction: column;
    gap: var(--space-2);
  }
}

@media (max-width: 768px) {
  .zui-home__hero {
    padding: 40px 20px;
    min-height: 360px;
  }

  .zui-home__hero-content {
    max-width: 100%;
  }

  .zui-home__hero-title {
    font-size: var(--font-size-6);
  }

  .zui-home__hero-subtitle {
    font-size: var(--font-size-1);
    margin-bottom: 16px;
  }

  .zui-home__hero-actions {
    flex-direction: column;
    gap: var(--space-2);
  }

  .zui-home__hero-actions :deep(.btn) {
    width: 100%;
  }

  .zui-home__quickstart,
  .zui-home__features,
  .zui-home__demos,
  .zui-home__components,
  .zui-home__cta {
    padding: 40px 20px;
  }

  .zui-home__section-title {
    font-size: var(--font-size-4);
  }

  .zui-home__section-header {
    margin-bottom: 28px;
  }

  .zui-home__command-content {
    flex-direction: column;
    align-items: center;
  }

  .zui-home__command-icon {
    width: 56px;
    height: 56px;
  }

  .zui-home__command-info {
    width: 100%;
    text-align: center;
  }

  .zui-home__command-box {
    flex-direction: column;
    width: 100%;
  }

  .zui-home__command-text {
    text-align: center;
    overflow-x: auto;
  }
}

@media (max-width: 480px) {
  .zui-home__hero {
    padding: 32px 16px;
    min-height: 320px;
  }

  .zui-home__hero-title {
    font-size: var(--font-size-5);
  }

  .zui-home__hero-subtitle {
    font-size: var(--font-size-0);
  }

  .zui-home__quickstart,
  .zui-home__features,
  .zui-home__demos,
  .zui-home__components,
  .zui-home__cta {
    padding: 32px 16px;
  }

  .zui-home__section-title {
    font-size: var(--font-size-3);
  }

  .zui-home__section-subtitle {
    font-size: var(--font-size-0);
  }

  .zui-home__command-icon {
    width: 48px;
    height: 48px;
  }

  .zui-home__command-icon :deep(.z-icon) {
    font-size: 24px !important;
  }

  .zui-home__feature-icon {
    width: 56px;
    height: 56px;
  }

  .zui-home__feature-icon :deep(.z-icon) {
    font-size: 28px !important;
  }

  .zui-home__demo-preview {
    padding: var(--padding-2);
  }

  .zui-home__demo-code {
    padding: var(--padding-2);
  }

  .zui-home__cta-card {
    padding: 40px 24px;
  }

  .zui-home__cta-title {
    font-size: var(--font-size-4);
  }

  .zui-home__cta-description {
    font-size: var(--font-size-1);
  }
}

@media (min-width: 1440px) {
  .zui-home__quickstart,
  .zui-home__features,
  .zui-home__demos,
  .zui-home__components,
  .zui-home__cta {
    max-width: 1400px;
  }

  .zui-home__hero {
    padding: 72px 24px;
    min-height: 480px;
  }

  .zui-home__quickstart,
  .zui-home__features,
  .zui-home__demos,
  .zui-home__components,
  .zui-home__cta {
    padding: 72px 24px;
  }

  .zui-home__section-title {
    font-size: calc(var(--font-size-5) * 1.1);
  }

  .zui-home__section-header {
    margin-bottom: 48px;
  }
}

.dark .zui-home {
  background-color: var(--color-background);
}

.dark .zui-home__hero {
  background: linear-gradient(
    180deg,
    var(--color-bg-hover-1) 0%,
    var(--color-background) 100%
  );
}

.dark .zui-home__command-icon {
  background: var(--color-bg-hover-1);
}

.dark .zui-home__command-box {
  background: var(--color-bg-hover-1);
  border-color: var(--color-border);
}

.dark .zui-home__feature-icon {
  background: var(--color-bg-hover-1);
}

.dark .zui-home__demo-preview {
  background: var(--color-bg-hover-1);
}

.dark .zui-home__demo-code {
  background: var(--color-bg-hover-1);
}

.dark .zui-home__component-icon {
  background: var(--color-bg-hover-1);
}

.dark .zui-home__cta-card {
  background: var(--color-primary);
}
</style>
