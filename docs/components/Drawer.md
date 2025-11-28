# Drawer 抽屉

抽屉组件用于从屏幕边缘滑出的面板，用于展示额外的内容或操作。

<script setup>
import DrawerDemo from '../demo/Drawer/DrawerDemo.vue';
import DrawerPositionDemo from '../demo/Drawer/DrawerPositionDemo.vue';
import DrawerSizeDemo from '../demo/Drawer/DrawerSizeDemo.vue';
import DrawerCustomFooterDemo from '../demo/Drawer/DrawerCustomFooterDemo.vue';
import DrawerAsyncDemo from '../demo/Drawer/DrawerAsyncDemo.vue';
import DrawerAnimatedDemo from '../demo/Drawer/DrawerAnimatedDemo.vue';
</script>

## 基础用法

通过 `showDrawer(options)` 函数可以方便地在任何地方打开抽屉，无需在模板中预先声明组件。

<Demo>
  <DrawerDemo />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo.vue

</CollapsibleCode>

## 不同位置

抽屉支持从四个方向打开：左、右、上、下。通过 `position` 属性控制。

<Demo>
  <DrawerPositionDemo />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerPositionDemo.vue

</CollapsibleCode>

## 不同尺寸

抽屉支持多种尺寸：sm、md、lg、fullscreen。通过 `size` 属性控制。

<Demo>
  <DrawerSizeDemo />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerSizeDemo.vue

</CollapsibleCode>

## 自定义按钮

通过 `footer` 属性可以自定义抽屉的底部按钮。

<Demo>
  <DrawerCustomFooterDemo />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerCustomFooterDemo.vue

</CollapsibleCode>

## 异步关闭

通过 `onOk` 事件可以实现异步关闭抽屉。

<Demo>
  <DrawerAsyncDemo />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerAsyncDemo.vue

</CollapsibleCode>

## 动画控制

通过 `animated` 属性可以控制抽屉是否启用弹出动画。

<Demo>
  <DrawerAnimatedDemo />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerAnimatedDemo.vue

</CollapsibleCode>

## Props

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| open | boolean | undefined | 是否打开抽屉 |
| defaultOpen | boolean | false | 默认是否打开抽屉 |
| title | string | '' | 抽屉标题 |
| content | string \| HTMLElement \| (() => HTMLElement) | undefined | 抽屉内容 |
| size | string | 'md' | 抽屉尺寸，可选值：'sm', 'md', 'lg', 'fullscreen' |
| position | string | 'right' | 抽屉位置，可选值：'left', 'right', 'top', 'bottom' |
| closable | boolean | true | 是否显示关闭按钮 |
| mask | boolean | true | 是否显示遮罩层 |
| maskClosable | boolean | true | 点击遮罩层是否可以关闭抽屉 |
| escClosable | boolean | true | 按ESC键是否可以关闭抽屉 |
| footer | boolean \| HTMLElement \| (() => HTMLElement) | true | 抽屉底部，false表示不显示底部，true表示显示默认底部，HTMLElement或函数表示自定义底部 |
| width | string \| number | undefined | 抽屉宽度，支持数字(px)和字符串形式的CSS值 |
| height | string \| number | undefined | 抽屉高度，支持数字(px)和字符串形式的CSS值 |
| animated | boolean | true | 是否启用动画 |
| transitionDuration | number | 300 | 抽屉动画时长(ms) |
| maskTransitionDuration | number | 200 | 遮罩层动画时长(ms) |
| zIndex | number | undefined | 抽屉的z-index值 |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 抽屉打开时触发 | (value: boolean) |
| close | 抽屉关闭时触发 | (value: boolean) |
| ok | 点击确定按钮时触发 | - |
| cancel | 点击取消按钮或关闭抽屉时触发 | - |

## Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 抽屉的默认内容 |
| footer | 抽屉的底部内容，优先级高于footer属性 |

## 函数式API

### showDrawer(options)

通过函数式API可以方便地在任何地方打开抽屉。

#### 参数

| 参数名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| title | string | - | 抽屉标题 |
| content | string \| HTMLElement \| (() => HTMLElement) | - | 抽屉内容 |
| size | string | 'md' | 抽屉尺寸，可选值：'sm', 'md', 'lg', 'fullscreen' |
| position | string | 'right' | 抽屉位置，可选值：'left', 'right', 'top', 'bottom' |
| closable | boolean | true | 是否显示关闭按钮 |
| mask | boolean | true | 是否显示遮罩层 |
| maskClosable | boolean | true | 点击遮罩层是否可以关闭抽屉 |
| escClosable | boolean | true | 按ESC键是否可以关闭抽屉 |
| footer | boolean \| HTMLElement \| (() => HTMLElement) | true | 抽屉底部，false表示不显示底部，true表示显示默认底部，HTMLElement或函数表示自定义底部 |
| width | string \| number | undefined | 抽屉宽度，支持数字(px)和字符串形式的CSS值 |
| height | string \| number | undefined | 抽屉高度，支持数字(px)和字符串形式的CSS值 |
| animated | boolean | true | 是否启用动画 |
| onOk | () => void | - | 点击确定按钮时的回调函数 |
| onCancel | () => void | - | 点击取消按钮时的回调函数 |
| onClose | () => void | - | 抽屉关闭时的回调函数 |

#### 返回值

| 属性名 | 类型 | 说明 |
| --- | --- | --- |
| close | () => void | 用于手动关闭抽屉的方法 |

## 示例

```javascript
import { showDrawer } from '@/components/Drawer';

// 打开抽屉
const drawer = showDrawer({
  title: '示例抽屉',
  content: '这是一个抽屉示例',
  onOk: () => {
    console.log('点击了确定按钮');
  },
  onCancel: () => {
    console.log('点击了取消按钮');
  }
});

// 打开无遮罩层抽屉
const noMaskDrawer = showDrawer({
  title: '无遮罩层抽屉',
  content: '这个抽屉没有显示遮罩层',
  mask: false,
  position: 'right'
});

// 手动关闭抽屉
// drawer.close();
```

<style scoped>
.button-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
