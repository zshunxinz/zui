# Drawer 抽屉

抽屉组件用于从屏幕边缘滑出的面板，用于展示额外的内容或操作。

<script setup>
import DrawerDemo1 from '../demo/Drawer/DrawerDemo1.vue';
import DrawerDemo2 from '../demo/Drawer/DrawerDemo2.vue';
import DrawerDemo3 from '../demo/Drawer/DrawerDemo3.vue';
import DrawerDemo4 from '../demo/Drawer/DrawerDemo4.vue';
import DrawerDemo5 from '../demo/Drawer/DrawerDemo5.vue';
import DrawerDemo6 from '../demo/Drawer/DrawerDemo6.vue';
import DrawerDemo7 from '../demo/Drawer/DrawerDemo7.vue';
import DrawerDemo8 from '../demo/Drawer/DrawerDemo8.vue';
</script>

## 基础用法

通过模板中直接使用 `Drawer` 组件，并通过 `v-model:open` 控制其显示状态，是推荐的默认使用方式。

<Demo>
  <DrawerDemo1 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo1.vue

</CollapsibleCode>

## 不同位置

抽屉支持从四个方向打开：左、右、上、下。通过 `position` 属性控制。

<Demo>
  <DrawerDemo2 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo2.vue

</CollapsibleCode>

## 不同尺寸

抽屉支持多种尺寸：sm、md、lg、fullscreen。通过 `size` 属性控制。

<Demo>
  <DrawerDemo3 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo3.vue

</CollapsibleCode>

## 自定义按钮

通过 `footer` 属性可以自定义抽屉的底部按钮。

<Demo>
  <DrawerDemo4 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo4.vue

</CollapsibleCode>

## 异步关闭

通过 `onOk` 事件可以实现异步关闭抽屉。

<Demo>
  <DrawerDemo5 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo5.vue

</CollapsibleCode>

## 动画控制

通过 `animated` 属性可以控制抽屉是否启用弹出动画。

<Demo>
  <DrawerDemo6 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo6.vue

</CollapsibleCode>

## 遮罩控制

通过 `mask` 属性可以控制是否显示遮罩层，通过 `maskStyle` 属性可以自定义遮罩层的样式。

<Demo>
  <DrawerDemo7 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo7.vue

</CollapsibleCode>

## 无头部/底部

通过 `header` 和 `footer` 属性可以完全隐藏抽屉的头部和底部区域。

<Demo>
  <DrawerDemo8 />
</Demo>

<CollapsibleCode>

<<< @/demo/Drawer/DrawerDemo8.vue

</CollapsibleCode>

## Props

| 属性名                 | 类型                                          | 默认值    | 说明                                                                                 |
| ---------------------- | --------------------------------------------- | --------- | ------------------------------------------------------------------------------------ |
| open                   | boolean                                       | undefined | 是否打开抽屉                                                                         |
| defaultOpen            | boolean                                       | false     | 默认是否打开抽屉                                                                     |
| title                  | string                                        | ''        | 抽屉标题                                                                             |
| content                | string \| HTMLElement \| (() => HTMLElement)  | undefined | 抽屉内容                                                                             |
| size                   | string                                        | 'md'      | 抽屉尺寸，可选值：'sm', 'md', 'lg', 'fullscreen'                                     |
| position               | string                                        | 'right'   | 抽屉位置，可选值：'left', 'right', 'top', 'bottom'                                   |
| closable               | boolean                                       | true      | 是否显示关闭按钮                                                                     |
| header                 | boolean                                       | true      | 是否显示头部区域，设置为false时将完全隐藏头部                                        |
| mask                   | boolean                                       | true      | 是否显示遮罩层                                                                       |
| maskStyle              | Record<string, string \| number>              | {}        | 自定义遮罩样式                                                                       |
| maskClosable           | boolean                                       | true      | 点击遮罩层是否可以关闭抽屉                                                           |
| escClosable            | boolean                                       | true      | 按ESC键是否可以关闭抽屉                                                              |
| footer                 | boolean \| HTMLElement \| (() => HTMLElement) | true      | 抽屉底部，false表示不显示底部，true表示显示默认底部，HTMLElement或函数表示自定义底部 |
| width                  | string \| number                              | undefined | 抽屉宽度，支持数字(px)和字符串形式的CSS值                                            |
| height                 | string \| number                              | undefined | 抽屉高度，支持数字(px)和字符串形式的CSS值                                            |
| animated               | boolean                                       | true      | 是否启用动画                                                                         |
| transitionDuration     | number                                        | 300       | 抽屉动画时长(ms)                                                                     |
| maskTransitionDuration | number                                        | 200       | 遮罩层动画时长(ms)                                                                   |
| zIndex                 | number                                        | undefined | 抽屉的z-index值                                                                      |

## Events

| 事件名 | 说明                         | 回调参数         |
| ------ | ---------------------------- | ---------------- |
| open   | 抽屉打开时触发               | (value: boolean) |
| close  | 抽屉关闭时触发               | (value: boolean) |
| ok     | 点击确定按钮时触发           | -                |
| cancel | 点击取消按钮或关闭抽屉时触发 | -                |

## Slots

| 插槽名  | 说明                                 |
| ------- | ------------------------------------ |
| default | 抽屉的默认内容                       |
| header  | 抽屉的头部内容，优先级高于title属性  |
| footer  | 抽屉的底部内容，优先级高于footer属性 |

## 非函数式调用

除了函数式API，也可以在模板中直接使用Drawer组件，通过v-model控制其显示状态，并使用插槽自定义内容。

```vue
<template>
  <div>
    <button @click="drawerVisible = true">打开抽屉</button>

    <Drawer v-model:open="drawerVisible" title="非函数式抽屉">
      <template #header>
        <div class="custom-header">自定义头部内容</div>
      </template>

      <div class="drawer-content">这是使用非函数式调用的抽屉内容</div>

      <template #footer>
        <div class="custom-footer">
          <button @click="drawerVisible = false">取消</button>
          <button @click="handleOk">确定</button>
        </div>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Drawer from '@/components/Drawer';

const drawerVisible = ref(false);

const handleOk = () => {
  console.log('点击了确定按钮');
  drawerVisible.value = false;
};
</script>

<style scoped>
.custom-header {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.drawer-content {
  padding: 20px 0;
}

.custom-footer {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
</style>
```

## 函数式API

### showDrawer(options)

通过函数式API可以方便地在任何地方打开抽屉。

#### 参数

| 参数名       | 类型                                          | 默认值    | 说明                                                                                 |
| ------------ | --------------------------------------------- | --------- | ------------------------------------------------------------------------------------ |
| title        | string                                        | -         | 抽屉标题                                                                             |
| content      | string \| HTMLElement \| (() => HTMLElement)  | -         | 抽屉内容                                                                             |
| size         | string                                        | 'md'      | 抽屉尺寸，可选值：'sm', 'md', 'lg', 'fullscreen'                                     |
| position     | string                                        | 'right'   | 抽屉位置，可选值：'left', 'right', 'top', 'bottom'                                   |
| closable     | boolean                                       | true      | 是否显示关闭按钮                                                                     |
| mask         | boolean                                       | true      | 是否显示遮罩层                                                                       |
| maskStyle    | Record<string, string \| number>              | {}        | 自定义遮罩样式                                                                       |
| maskClosable | boolean                                       | true      | 点击遮罩层是否可以关闭抽屉                                                           |
| escClosable  | boolean                                       | true      | 按ESC键是否可以关闭抽屉                                                              |
| footer       | boolean \| HTMLElement \| (() => HTMLElement) | true      | 抽屉底部，false表示不显示底部，true表示显示默认底部，HTMLElement或函数表示自定义底部 |
| width        | string \| number                              | undefined | 抽屉宽度，支持数字(px)和字符串形式的CSS值                                            |
| height       | string \| number                              | undefined | 抽屉高度，支持数字(px)和字符串形式的CSS值                                            |
| animated     | boolean                                       | true      | 是否启用动画                                                                         |
| onOk         | () => void                                    | -         | 点击确定按钮时的回调函数                                                             |
| onCancel     | () => void                                    | -         | 点击取消按钮时的回调函数                                                             |
| onClose      | () => void                                    | -         | 抽屉关闭时的回调函数                                                                 |

#### 返回值

| 属性名 | 类型       | 说明                   |
| ------ | ---------- | ---------------------- |
| close  | () => void | 用于手动关闭抽屉的方法 |

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
  },
});

// 打开无遮罩层抽屉
const noMaskDrawer = showDrawer({
  title: '无遮罩层抽屉',
  content: '这个抽屉没有显示遮罩层',
  mask: false,
  position: 'right',
});

// 打开自定义遮罩层抽屉
const customMaskDrawer = showDrawer({
  title: '自定义遮罩层抽屉',
  content: '这个抽屉有自定义样式的遮罩层，模糊背景效果',
  mask: true,
  maskStyle: {
    backgroundColor: 'rgba(255, 250, 255, 0.1)',
    backdropFilter: 'blur(15px)',
  },
  position: 'right',
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
