# 颜色体系

<style>
.color-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 20px 0;
  width: 800px;

}
.color-card {
  width: 180px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.color-card:hover {
  transform: translateY(-4px);
}
.color-swatch {
  height: 100px;
  width: 100%;
}
.color-info {
  padding: 12px;
  background: white;
  color: #333;
}
.dark .color-info {
  background: #2d2d2d;
  color: #f0f0f0;
  height: 100%;
}
.color-name {
  font-weight: 600;
  margin-bottom: 4px;
}
.color-value {
  font-family: monospace;
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
  display: none;
}
.dark .color-value {
  color: #aaa;
}
.color-desc {
  font-size: 13px;
  color: #888;
}
.dark .color-desc {
  color: #bbb;
}
</style>

ZUI 组件库的颜色体系基于现代 UI 设计原则，提供了清晰、一致的色彩方案，确保界面视觉统一且具有良好的可访问性。

## 基础颜色

### 默认色

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-default);"></div>
    <div class="color-info">
      <div class="color-name">--color-default</div>
      <div class="color-value">hsl(222.2 84% 4.9%)</div>
      <div class="color-desc">默认色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-default-hover);"></div>
    <div class="color-info">
      <div class="color-name">--color-default-hover</div>
      <div class="color-value">hsl(240 5.3% 26.1%)</div>
      <div class="color-desc">悬停状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-default-active);"></div>
    <div class="color-info">
      <div class="color-name">--color-default-active</div>
      <div class="color-value">hsl(215 13.8% 34.1%)</div>
      <div class="color-desc">激活状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-default-text-1);"></div>
    <div class="color-info">
      <div class="color-name">--color-default-text-1</div>
      <div class="color-value">hsl(0, 0%, 100%)</div>
      <div class="color-desc">默认文本色</div>
    </div>
  </div>
</div>

## 主色调

主色调用于突出显示关键交互元素，如按钮、链接和重要信息。

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-primary);"></div>
    <div class="color-info">
      <div class="color-name">--color-primary</div>
      <div class="color-value">hsl(217.2 91.2% 59.8%)</div>
      <div class="color-desc">主要颜色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-primary-hover);"></div>
    <div class="color-info">
      <div class="color-name">--color-primary-hover</div>
      <div class="color-value">hsl(213.1 93.9% 67.8%)</div>
      <div class="color-desc">悬停状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-primary-active);"></div>
    <div class="color-info">
      <div class="color-name">--color-primary-active</div>
      <div class="color-value">hsl(211.7 96.4% 78.4%)</div>
      <div class="color-desc">激活状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-primary-disabled);"></div>
    <div class="color-info">
      <div class="color-name">--color-primary-disabled</div>
      <div class="color-value">hsla(201, 94%, 86%, 0.377)</div>
      <div class="color-desc">禁用状态</div>
    </div>
  </div>
</div>

## 功能色

功能色用于表示不同的操作状态和信息类型。

### 成功色

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-success);"></div>
    <div class="color-info">
      <div class="color-name">--color-success</div>
      <div class="color-value">hsl(83.7 80.5% 44.3%)</div>
      <div class="color-desc">成功状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-success-hover);"></div>
    <div class="color-info">
      <div class="color-name">--color-success-hover</div>
      <div class="color-value">hsl(82.7 78% 55.5%)</div>
      <div class="color-desc">悬停状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-success-active);"></div>
    <div class="color-info">
      <div class="color-name">--color-success-active</div>
      <div class="color-value">hsl(82 84.5% 67.1%)</div>
      <div class="color-desc">激活状态</div>
    </div>
  </div>
</div>

### 警告色

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-warning);"></div>
    <div class="color-info">
      <div class="color-name">--color-warning</div>
      <div class="color-value">hsl(37.7 92.1% 50.2%)</div>
      <div class="color-desc">警告状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-warning-hover);"></div>
    <div class="color-info">
      <div class="color-name">--color-warning-hover</div>
      <div class="color-value">hsl(43.3 96.4% 56.3%)</div>
      <div class="color-desc">悬停状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-warning-active);"></div>
    <div class="color-info">
      <div class="color-name">--color-warning-active</div>
      <div class="color-value">hsl(45.9 96.7% 64.5%)</div>
      <div class="color-desc">激活状态</div>
    </div>
  </div>
</div>

### 危险色

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-danger);"></div>
    <div class="color-info">
      <div class="color-name">--color-danger</div>
      <div class="color-value">hsl(0 84.2% 60.2%)</div>
      <div class="color-desc">危险状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-danger-hover);"></div>
    <div class="color-info">
      <div class="color-name">--color-danger-hover</div>
      <div class="color-value">hsl(0 90.6% 70.8%)</div>
      <div class="color-desc">悬停状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-danger-active);"></div>
    <div class="color-info">
      <div class="color-name">--color-danger-active</div>
      <div class="color-value">hsl(0 93.5% 81.8%)</div>
      <div class="color-desc">激活状态</div>
    </div>
  </div>
</div>

### 信息色

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-info);"></div>
    <div class="color-info">
      <div class="color-name">--color-info</div>
      <div class="color-value">hsl(270.7 91% 65.1%)</div>
      <div class="color-desc">信息状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-info-hover);"></div>
    <div class="color-info">
      <div class="color-name">--color-info-hover</div>
      <div class="color-value">hsl(270 95.2% 75.3%)</div>
      <div class="color-desc">悬停状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-info-active);"></div>
    <div class="color-info">
      <div class="color-name">--color-info-active</div>
      <div class="color-value">hsl(269.2 97.4% 85.1%)</div>
      <div class="color-desc">激活状态</div>
    </div>
  </div>
</div>

## 中性色

中性色用于背景、文本、边框等基础界面元素。

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-background); border: 1px solid #e5e7eb;"></div>
    <div class="color-info">
      <div class="color-name">--color-background</div>
      <div class="color-value">#ffffff</div>
      <div class="color-desc">背景色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-border);"></div>
    <div class="color-info">
      <div class="color-name">--color-border</div>
      <div class="color-value">#e5e7eb</div>
      <div class="color-desc">边框色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-text);"></div>
    <div class="color-info">
      <div class="color-name">--color-text</div>
      <div class="color-value">#333333</div>
      <div class="color-desc">主要文本色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-text-muted);"></div>
    <div class="color-info">
      <div class="color-name">--color-text-muted</div>
      <div class="color-value">#6b7280</div>
      <div class="color-desc">次要文本色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-disabled);"></div>
    <div class="color-info">
      <div class="color-name">--color-disabled</div>
      <div class="color-value">#f1f1f1</div>
      <div class="color-desc">禁用状态色</div>
    </div>
  </div>
</div>

## 暗色模式

在暗色模式下，所有颜色变量会进行相应调整，以确保良好的视觉体验。

### 暗色模式中性色

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-background); border: 1px solid #374151;"></div>
    <div class="color-info">
      <div class="color-name">--color-background (暗色)</div>
      <div class="color-value">#1a1a1a</div>
      <div class="color-desc">背景色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-text);"></div>
    <div class="color-info">
      <div class="color-name">--color-text (暗色)</div>
      <div class="color-value">#f0f0f0</div>
      <div class="color-desc">主要文本色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-border);"></div>
    <div class="color-info">
      <div class="color-name">--color-border (暗色)</div>
      <div class="color-value">#374151</div>
      <div class="color-desc">边框色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-disabled);"></div>
    <div class="color-info">
      <div class="color-name">--color-disabled (暗色)</div>
      <div class="color-value">#e0e0e023</div>
      <div class="color-desc">禁用状态色</div>
    </div>
  </div>
</div>

### 暗色模式功能色

暗色模式下的功能色会调整为更深的色调，以适应暗色背景：

<div class="color-card-container">
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-primary);"></div>
    <div class="color-info">
      <div class="color-name">--color-primary (暗色)</div>
      <div class="color-value">#60a5fa</div>
      <div class="color-desc">主要颜色</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-success);"></div>
    <div class="color-info">
      <div class="color-name">--color-success (暗色)</div>
      <div class="color-value">#34d399</div>
      <div class="color-desc">成功状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-warning);"></div>
    <div class="color-info">
      <div class="color-name">--color-warning (暗色)</div>
      <div class="color-value">#fbbf24</div>
      <div class="color-desc">警告状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-danger);"></div>
    <div class="color-info">
      <div class="color-name">--color-danger (暗色)</div>
      <div class="color-value">#f87171</div>
      <div class="color-desc">危险状态</div>
    </div>
  </div>
  <div class="color-card">
    <div class="color-swatch" style="background-color: var(--color-info);"></div>
    <div class="color-info">
      <div class="color-name">--color-info (暗色)</div>
      <div class="color-value">#22d3ee</div>
      <div class="color-desc">信息状态</div>
    </div>
  </div>
</div>

## 使用方法

在组件中使用这些颜色变量时，直接引用 CSS 变量即可：

```css
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-primary-text-1);
}

.button-primary:hover {
  background-color: var(--color-primary-hover);
}
```

颜色模式会根据用户系统设置或手动切换自动应用，无需额外代码处理。

## 颜色变量参考表格

### 默认色

| 变量名                   | 值                   | 说明       |
| ------------------------ | -------------------- | ---------- |
| `--color-default`        | hsl(222.2 84% 4.9%)  | 默认背景色 |
| `--color-default-hover`  | hsl(240 5.3% 26.1%)  | 悬停状态   |
| `--color-default-active` | hsl(215 13.8% 34.1%) | 激活状态   |
| `--color-default-text-1` | hsl(0, 0%, 100%)     | 默认文本色 |

## 主色调

| 变量名                     | 值                         | 说明     |
| -------------------------- | -------------------------- | -------- |
| `--color-primary`          | hsl(217.2 91.2% 59.8%)     | 主要颜色 |
| `--color-primary-rgb`      | 96, 165, 250               | RGB 格式 |
| `--color-primary-hover`    | hsl(213.1 93.9% 67.8%)     | 悬停状态 |
| `--color-primary-active`   | hsl(211.7 96.4% 78.4%)     | 激活状态 |
| `--color-primary-disabled` | hsla(201, 94%, 86%, 0.377) | 禁用状态 |
| `--color-primary-text-1`   | hsl(240 10% 3.9%)          | 文本颜色 |

### 成功色

| 变量名                   | 值                    | 说明     |
| ------------------------ | --------------------- | -------- |
| `--color-success`        | hsl(83.7 80.5% 44.3%) | 成功状态 |
| `--color-success-rgb`    | 52, 211, 153          | RGB 格式 |
| `--color-success-hover`  | hsl(82.7 78% 55.5%)   | 悬停状态 |
| `--color-success-active` | hsl(82 84.5% 67.1%)   | 激活状态 |

### 警告色

| 变量名                   | 值                    | 说明     |
| ------------------------ | --------------------- | -------- |
| `--color-warning`        | hsl(37.7 92.1% 50.2%) | 警告状态 |
| `--color-warning-rgb`    | 251, 191, 36          | RGB 格式 |
| `--color-warning-hover`  | hsl(43.3 96.4% 56.3%) | 悬停状态 |
| `--color-warning-active` | hsl(45.9 96.7% 64.5%) | 激活状态 |

### 危险色

| 变量名                  | 值                 | 说明     |
| ----------------------- | ------------------ | -------- |
| `--color-danger`        | hsl(0 84.2% 60.2%) | 危险状态 |
| `--color-danger-rgb`    | 248, 113, 113      | RGB 格式 |
| `--color-danger-hover`  | hsl(0 90.6% 70.8%) | 悬停状态 |
| `--color-danger-active` | hsl(0 93.5% 81.8%) | 激活状态 |

### 信息色

| 变量名                | 值                     | 说明     |
| --------------------- | ---------------------- | -------- |
| `--color-info`        | hsl(270.7 91% 65.1%)   | 信息状态 |
| `--color-info-rgb`    | 179, 136, 255          | RGB 格式 |
| `--color-info-hover`  | hsl(270 95.2% 75.3%)   | 悬停状态 |
| `--color-info-active` | hsl(269.2 97.4% 85.1%) | 激活状态 |

## 中性色

| 变量名               | 值      | 说明       |
| -------------------- | ------- | ---------- |
| `--color-background` | #ffffff | 背景色     |
| `--color-border`     | #e5e7eb | 边框色     |
| `--color-text`       | #333333 | 主要文本色 |
| `--color-text-muted` | #6b7280 | 次要文本色 |
| `--color-disabled`   | #f1f1f1 | 禁用状态色 |

### 暗色模式中性色

| 变量名               | 值        | 说明       |
| -------------------- | --------- | ---------- |
| `--color-background` | #1a1a1a   | 背景色     |
| `--color-text`       | #f0f0f0   | 主要文本色 |
| `--color-border`     | #374151   | 边框色     |
| `--color-disabled`   | #e0e0e023 | 禁用状态色 |

### 暗色模式功能色

| 变量名                   | 暗色值  | 说明     |
| ------------------------ | ------- | -------- |
| `--color-primary`        | #60a5fa | 主要颜色 |
| `--color-primary-hover`  | #3b82f6 | 悬停状态 |
| `--color-primary-active` | #2563eb | 激活状态 |
| `--color-success`        | #34d399 | 成功状态 |
| `--color-warning`        | #fbbf24 | 警告状态 |
| `--color-danger`         | #f87171 | 危险状态 |
| `--color-info`           | #22d3ee | 信息状态 |
