# Modal 弹窗组件

Modal 组件是一个功能强大的弹窗组件，用于展示重要信息、表单输入或进行用户交互确认。它支持多种尺寸、位置、动画效果和自定义内容，提供组件式和函数式两种调用方式。

## 基础用法

Modal 组件的基础用法非常简单，通过控制 `open` 属性来显示或隐藏弹窗。

<script setup>
import ModalDemo1 from "/demo/Modal/ModalDemo1.vue";
import ModalDemo2 from "/demo/Modal/ModalDemo2.vue";
import ModalDemo3 from "/demo/Modal/ModalDemo3.vue";
import ModalDemo4 from "/demo/Modal/ModalDemo4.vue";
import ModalDemo5 from "/demo/Modal/ModalDemo5.vue";
</script>

<Demo>
<ModalDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Modal/ModalDemo1.vue

</CollapsibleCode>

## 不同尺寸

Modal 组件支持多种预设尺寸，可以根据内容需求选择合适的大小。

<Demo>
<ModalDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Modal/ModalDemo2.vue

</CollapsibleCode>

## 不同位置

Modal 组件可以显示在屏幕的不同位置，包括居中、顶部、底部、左侧和右侧。

<Demo>
<ModalDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Modal/ModalDemo3.vue

</CollapsibleCode>

## 自定义内容

Modal 组件支持自定义头部、内容和底部，可以通过插槽来定制弹窗的各个部分。

<Demo>
<ModalDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Modal/ModalDemo4.vue

</CollapsibleCode>

## API 调用方式

除了组件方式，Modal 还提供了函数式 API，可以直接通过 JavaScript/TypeScript 调用。

<Demo>
<ModalDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Modal/ModalDemo5.vue

</CollapsibleCode>

## Modal Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| id | `string` | - | 弹窗的唯一标识符 |
| open | `boolean` | - | 控制弹窗的显示和隐藏 |
| defaultOpen | `boolean` | `false` | 弹窗的默认显示状态 |
| title | `string` | - | 弹窗标题 |
| content | `string \| HTMLElement \| (() => HTMLElement)` | - | 弹窗内容（函数式API时使用） |
| size | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'fullscreen'` | `'md'` | 弹窗尺寸 |
| position | `'center' \| 'top' \| 'bottom' \| 'left' \| 'right'` | `'center'` | 弹窗位置 |
| closable | `boolean` | `true` | 是否显示关闭按钮 |
| mask | `boolean` | `true` | 是否显示遮罩层 |
| maskClosable | `boolean` | `true` | 点击遮罩层是否可以关闭弹窗 |
| escClosable | `boolean` | `true` | 按 ESC 键是否可以关闭弹窗 |
| footer | `boolean \| HTMLElement \| (() => HTMLElement)` | `true` | 底部按钮配置 |
| width | `string \| number` | - | 自定义宽度 |
| height | `string \| number` | - | 自定义高度 |
| transitionDuration | `number` | `300` | 弹窗动画时长（毫秒） |
| maskTransitionDuration | `number` | `200` | 遮罩层动画时长（毫秒） |

## 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| open | `value: boolean` | 弹窗打开时触发 |
| close | `value: boolean` | 弹窗关闭时触发 |
| ok | - | 点击确定按钮时触发 |
| cancel | - | 点击取消按钮或关闭弹窗时触发 |

## 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 弹窗内容 |
| footer | 底部自定义内容 |

## 函数式 API

Modal 组件提供了 `showModal` 函数，可以通过编程方式打开弹窗：

### showModal(options)

**参数**：
- `options`: `ModalOptions` 类型，包含以下属性：
  - `title`: `string` - 弹窗标题
  - `content`: `string \| HTMLElement \| (() => HTMLElement)` - 弹窗内容
  - `size`: `ModalSize` - 弹窗尺寸
  - `position`: `ModalPosition` - 弹窗位置
  - `closable`: `boolean` - 是否显示关闭按钮
  - `maskClosable`: `boolean` - 点击遮罩是否可以关闭
  - `escClosable`: `boolean` - 按 ESC 键是否可以关闭
  - `footer`: `boolean \| HTMLElement \| (() => HTMLElement)` - 底部配置
  - `onOk`: `() => void` - 确定按钮回调
  - `onCancel`: `() => void` - 取消按钮回调
  - `onClose`: `() => void` - 关闭回调

**返回值**：
- 包含 `close()` 方法的对象，用于手动关闭弹窗

### 使用示例

```javascript
import { showModal } from '@/components/Modal';

// 基础用法
const modal = showModal({
  title: '确认操作',
  content: '确定要执行此操作吗？',
  size: 'sm',
  onOk: () => {
    console.log('用户确认操作');
  },
  onCancel: () => {
    console.log('用户取消操作');
  }
});

// 手动关闭
// modal.close();
```

## 响应式设计

Modal 组件在移动设备上会自动调整大小和位置，确保良好的用户体验。对于侧边弹窗（left/right），在小屏幕上会自动调整为全屏模式。

## 无障碍支持

Modal 组件支持无障碍功能，包括 ARIA 属性和键盘导航。默认情况下，弹窗会自动管理焦点，并支持通过 ESC 键关闭。

## 暗黑模式

Modal 组件完全支持暗黑模式，会根据当前主题自动调整样式。