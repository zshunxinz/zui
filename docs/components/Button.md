# Button 按钮

常用的操作按钮。

<script setup>
import ButtonDemo1 from '../demo/Button/ButtonDemo1.vue'
import ButtonDemo2 from '../demo/Button/ButtonDemo2.vue'
import ButtonDemo3 from '../demo/Button/ButtonDemo3.vue'
import ButtonDemo4 from '../demo/Button/ButtonDemo4.vue'
import ButtonDemo5 from '../demo/Button/ButtonDemo5.vue'
import ButtonDemo6 from '../demo/Button/ButtonDemo6.vue'
import ButtonDemo7 from '../demo/Button/ButtonDemo7.vue'
import ButtonDemo8 from '../demo/Button/ButtonDemo8.vue'
import ButtonDemo9 from '../demo/Button/ButtonDemo9.vue'
import ButtonDemo10 from '../demo/Button/ButtonDemo10.vue'
import ButtonDemo11 from '../demo/Button/ButtonDemo11.vue'
import ButtonDemo12 from '../demo/Button/ButtonDemo12.vue'
import ButtonDemo13 from '../demo/Button/ButtonDemo13.vue'
import ButtonDemo14 from '../demo/Button/ButtonDemo14.vue'
import ButtonDemo15 from '../demo/Button/ButtonDemo15.vue'
import ButtonDemo16 from '../demo/Button/ButtonDemo16.vue'

import { ref } from 'vue';
const isLoading = ref(false);
const loadingHandleClick = () => {
  isLoading.value = true;
  console.log(isLoading.value);
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

</script>
<style>
  .button-group {
    padding: 36px 36px;
    display:flex;
    /* justify-content: center; */
    align-items: center;
    flex-wrap:wrap;
    gap:10px;
  }
.custom-btn {
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
.custom-btn:hover {
  transform: translateY(-2px);
}
</style>

## 基础用法

按钮有默认、背景、边框、文字、轮廓五种样式，分别对应`default`、`bg`、`border`、`text`、`outline`五个属性，可以彼此组合使用。
<Demo>
<ButtonDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Button/ButtonDemo1.vue

</CollapsibleCode>

## 按钮类型

按钮有默认、主要、成功、警告、危险、信息六种类型，分别对应`default`、`primary`、`success`、`warning`、`danger`、`info`六个属性。

<Demo>
  <ButtonDemo2/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo2.vue

</CollapsibleCode>

## 圆角按钮

可以通过`borderRadius`属性自定义按钮圆角大小：
<Demo>
<ButtonDemo3/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo3.vue

</CollapsibleCode>

## 浅色背景按钮

通过 `borderRadius` 属性设置圆角大小，并与 `bg`、`border`、`outline` 属性结合使用,

<Demo>
  <ButtonDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Button/ButtonDemo4.vue

</CollapsibleCode>

## 尺寸

支持 `small`、`medium`、`large` 三种尺寸。

<Demo>
<ButtonDemo5/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo5.vue

</CollapsibleCode>

## 禁用状态

通过 `disabled` 属性设置禁用状态。

<Demo>
<ButtonDemo6/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo6.vue

</CollapsibleCode>

通过 `disabled` 和 `bg` 属性设置浅色背景禁用状态。

<Demo>
<ButtonDemo7/>

</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo7.vue

</CollapsibleCode>

## 文本按钮

通过 `text` 属性设置文本按钮。

<Demo>
<ButtonDemo8/>

</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo8.vue

</CollapsibleCode>

## 边框按钮

通过 `border` 属性设置边框按钮。

<Demo>
<ButtonDemo9/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo9.vue

</CollapsibleCode>

## 自定义颜色

通过 `color`、`bgColor` 和 `borderColor` 属性可以分别自定义按钮的文本颜色、背景颜色和边框颜色，实现多样化的按钮样式（`borderColor` 需配合 `border=true` 使用）。

<Demo>
<ButtonDemo10/>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="button-group">
    <Button bgColor="#123987" color="#eee123">#eee123</Button>
    <Button bgColor="#FF5733" color="#FFFFFF">珊瑚红背景</Button>
    <Button bgColor="#33FF57" color="#000000">鲜绿背景</Button>
    <Button bgColor="#3357FF" color="#FFFFFF">宝石蓝背景</Button>
    <Button bgColor="#F333FF" color="#FFFFFF">紫色背景</Button>
    <Button bgColor="#33FFF3" color="#000000">青色背景</Button>
    <Button border :borderColor="'#FF5733'" bgColor="#f5f5f5" color="#333">
      自定义边框颜色
    </Button>
  </div>
</template>
```

</CollapsibleCode>

## 自定义样式

通过原生 `class` 和 `style` 属性可以添加额外的自定义样式，覆盖或扩展按钮默认样式：

<Demo>
  <div class="button-group">
    <Button class="custom-btn" style="font-weight: bold; text-decoration: underline;">带自定义样式</Button>
    <Button class="custom-btn" style="box-shadow: 0 4px 8px rgba(0,0,0,0.2);">带阴影效果</Button>
  </div>
</Demo>

<CollapsibleCode  >

```vue
<template>
  <!-- 使用class添加自定义类 -->
  <Button class="custom-btn" style="font-weight: bold;">自定义样式按钮</Button>

  <!-- 直接使用style添加内联样式 -->
  <Button
    class="custom-btn"
    style="box-shadow: 0 4px 8px rgba(0,0,0,0.2); border-radius: 8px;"
    >带阴影按钮</Button
  >
</template>

<style scoped>
/* 自定义类样式 */
.custom-btn {
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.custom-btn:hover {
  transform: translateY(-2px);
}
</style>
```

</CollapsibleCode>

## 加载状态

按钮支持点击自动进入加载状态（2 秒后自动退出）和外部控制加载状态两种模式：

### 加载状态

加载状态

<Demo>
<ButtonDemo11/>
</Demo>

<CollapsibleCode  >

```vue
<template>
  <Button type="primary" loading>加载中</Button>
</template>

<script setup>
function handleAutoLoading() {
  // 模拟异步操作
}
</script>
```

</CollapsibleCode>

### 外部控制加载状态

通过 `v-model:loading` 可以双向绑定控制按钮的加载状态：

<Demo>
  <ButtonDemo12/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo12.vue

</CollapsibleCode>

## 加载状态文本内容

loadData 插槽控制加载中的内容

<Demo>
  <ButtonDemo13/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo13.vue

</CollapsibleCode>

## 事件

支持 `click`和`hover` 事件。

<Demo>
  <ButtonDemo14/>
</Demo>

<CollapsibleCode>

<<< ../demo/Button/ButtonDemo14.vue

</CollapsibleCode>

## 组合示例

展示不同属性组合的按钮用法。
<Demo>
<ButtonDemo16/>
</Demo>

<CollapsibleCode  >

<<< ../demo/Button/ButtonDemo16.vue

</CollapsibleCode>

## 属性

| 参数         | 说明                                          | 类型    | 可选值                              | 默认值    |
| ------------ | --------------------------------------------- | ------- | ----------------------------------- | --------- |
| type         | 按钮类型                                      | string  | primary/success/warning/danger/info | primary   |
| size         | 按钮尺寸                                      | string  | small/medium/large                  | medium    |
| disabled     | 是否禁用                                      | boolean | true/false                          | false     |
| text         | 是否为文本按钮                                | boolean | true/false                          | false     |
| border       | 是否为边框按钮                                | boolean | true/false                          | false     |
| shadow       | 是否显示阴影效果                              | boolean | true/false                          | false     |
| outline      | 是否为*outline*按钮                           | boolean | true/false                          | false     |
| borderRadius | 按钮圆角大小(px)                              | Number  | —                                   | 6         |
| bgColor      | 自定义按钮背景颜色                            | String  | —                                   | undefined |
| bg           | 是否为浅色背景按钮                            | boolean | true/false                          | false     |
| color        | 自定义按钮文本颜色                            | String  | —                                   | undefined |
| borderColor  | 自定义按钮边框颜色（需配合 border=true 使用） | String  | —                                   | undefined |
| class        | 自定义类名                                    | String  | —                                   | undefined |
| style        | 自定义内联样式                                | Object  | —                                   | undefined |
| loading      | 控制按钮加载状态，外部控制优先                | Boolean | true/false                          | false     |

## 插槽

| 插槽名称 | 说明                                                                              |
| -------- | --------------------------------------------------------------------------------- |
| default  | 按钮的默认内容                                                                    |
| loadData | 加载状态时的自定义内容，仅在 loading 为 true 时显示，会替换默认的加载指示器和文本 |

## 事件

| 事件名称            | 说明               | 回调参数            |
| ------------------- | ------------------ | ------------------- |
| click               | 点击按钮时触发     | (event: MouseEvent) |
| hover               | 鼠标移入按钮时触发 | (event: MouseEvent) |
| mouseleave          | 鼠标移出按钮时触发 | (event: MouseEvent) |
| focus               | 按钮获得焦点时触发 | (event: FocusEvent) |
| blur                | 按钮失去焦点时触发 | (event: FocusEvent) |
| contextmenu.prevent | 按钮右键点击时触发 | (event: MouseEvent) |
