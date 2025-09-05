# Switch 开关

用于在两个互斥状态之间切换的开关组件。

<script setup>
import SwitchDemo1 from '../demo/Switch/SwitchDemo1.vue'
import SwitchDemo2 from '../demo/Switch/SwitchDemo2.vue'
import SwitchDemo3 from '../demo/Switch/SwitchDemo3.vue'
import SwitchDemo4 from '../demo/Switch/SwitchDemo4.vue'
import SwitchDemo5 from '../demo/Switch/SwitchDemo5.vue'
import SwitchDemo6 from '../demo/Switch/SwitchDemo6.vue'
import SwitchDemo7 from '../demo/Switch/SwitchDemo7.vue'
import SwitchDemo8 from '../demo/Switch/SwitchDemo8.vue'
import SwitchDemo9 from '../demo/Switch/SwitchDemo9.vue'
import SwitchDemo10 from '../demo/Switch/SwitchDemo10.vue'
import SwitchDemo11 from '../demo/Switch/SwitchDemo11.vue'
</script>

<style scoped>
.switch-demo {
  padding: 20px 0;
}
.demo-switch {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
}
</style>

## 基础用法

<Demo>
<SwitchDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo1.vue

</CollapsibleCode>

## 文字描述

使用 `active-text` 和 `inactive-text` 属性来设置开关的文字描述。

<Demo>
<SwitchDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo2.vue

</CollapsibleCode>

## 禁用状态

<Demo>
<SwitchDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo3.vue

</CollapsibleCode>

## 加载状态

<Demo>
<SwitchDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo4.vue

</CollapsibleCode>

## 不同尺寸

<Demo>
<SwitchDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo5.vue

</CollapsibleCode>

## 不同颜色

<Demo>
<SwitchDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo6.vue

</CollapsibleCode>

## 自定义值

<Demo>
<SwitchDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo7.vue

</CollapsibleCode>

## 不同形状

支持圆形和方形两种形状，默认为圆形。

<Demo>
<SwitchDemo8/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo8.vue

</CollapsibleCode>

## 自定义图标

使用插槽自定义开关内的图标内容。

<Demo>
<SwitchDemo9/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo9.vue

</CollapsibleCode>

## 自定义颜色

<Demo>
<SwitchDemo10/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo10.vue

</CollapsibleCode>

## 事件监听

<Demo>
<SwitchDemo11/>
</Demo>

<CollapsibleCode>

<<< ../demo/Switch/SwitchDemo11.vue

</CollapsibleCode>

## API

### Props

| 参数名                | 说明             | 类型                                                  | 默认值    |
| --------------------- | ---------------- | ----------------------------------------------------- | --------- |
| model-value / v-model | 绑定值           | boolean / string / number                             | false     |
| active-value          | 打开时的值       | boolean / string / number                             | true      |
| inactive-value        | 关闭时的值       | boolean / string / number                             | false     |
| disabled              | 是否禁用         | boolean                                               | false     |
| loading               | 是否加载中       | boolean                                               | false     |
| size                  | 尺寸             | 'small' / 'default' / 'large'                         | 'default' |
| type                  | 颜色主题         | 'primary' / 'success' / 'warning' / 'danger' / 'info' | 'default' |
| shape                 | 开关形状         | 'round' / 'square'                                    | 'round'   |
| active-text           | 打开时的文字描述 | string                                                | -         |
| inactive-text         | 关闭时的文字描述 | string                                                | -         |
| active-color          | 打开时的背景色   | string                                                | -         |
| inactive-color        | 关闭时的背景色   | string                                                | -         |

### Events

| 事件名             | 说明               | 回调参数                           |
| ------------------ | ------------------ | ---------------------------------- |
| change             | 状态改变时的回调   | (value: boolean / string / number) |
| update:model-value | 绑定值更新时的回调 | (value: boolean / string / number) |

### Slots

| 插槽名  | 说明                                            |
| ------- | ----------------------------------------------- |
| default | 自定义内容，会覆盖 active-text 和 inactive-text |
| icon    | 自定义开关内的图标内容                          |
