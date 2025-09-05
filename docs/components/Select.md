# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

<script setup>
import { ref } from 'vue'
import SelectDemo1 from '../demo/Select/SelectDemo1.vue'
import SelectDemo2 from '../demo/Select/SelectDemo2.vue'
import SelectDemo3 from '../demo/Select/SelectDemo3.vue'
import SelectDemo4 from '../demo/Select/SelectDemo4.vue'
import SelectDemo5 from '../demo/Select/SelectDemo5.vue'
import SelectDemo6 from '../demo/Select/SelectDemo6.vue'
import SelectDemo7 from '../demo/Select/SelectDemo7.vue'
import SelectDemo8 from '../demo/Select/SelectDemo8.vue'
import SelectDemo9 from '../demo/Select/SelectDemo9.vue'
import SelectDemo10 from '../demo/Select/SelectDemo10.vue'
</script>

<Demo>
<SelectDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo1.vue

</CollapsibleCode>

## 不同类型

支持 6 种主题类型：`default`、`primary`、`success`、`warning`、`danger`、`info`

<Demo>
<SelectDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo2.vue

</CollapsibleCode>

## 多选模式

支持多选，通过设置 `multiple` 属性为 `true`

<Demo>
<SelectDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo3.vue

</CollapsibleCode>

## 禁用选项

可以通过设置 `disabled` 属性来禁用整个选择器或特定选项

<Demo>
<SelectDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo4.vue

</CollapsibleCode>

## 可清空

通过设置 `clearable` 属性可以清空已选择的值

<Demo>
<SelectDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo5.vue

</CollapsibleCode>

## 可搜索

通过设置 `filterable` 属性启用搜索功能

<Demo>
<SelectDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo6.vue

</CollapsibleCode>

## 不同尺寸

支持三种尺寸：`small`、`medium`、`large`

<Demo>
<SelectDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo7.vue

</CollapsibleCode>

## 使用 options 属性

除了使用 Option 子组件，还可以通过 `options` 属性传入选项数组

<Demo>
<SelectDemo8/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo8.vue

</CollapsibleCode>

## 图标位置

可以通过 `icon-position` 属性设置选中图标的位置

<Demo>
<SelectDemo9/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo9.vue

</CollapsibleCode>

## 自定义图标

使用 `icon` 插槽自定义选中图标

<Demo>
<SelectDemo10/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo10.vue

</CollapsibleCode>

## 属性

| 属性名                | 说明               | 类型                                       | 可选值                                                | 默认值     |
| --------------------- | ------------------ | ------------------------------------------ | ----------------------------------------------------- | ---------- |
| model-value / v-model | 绑定值             | string / number / boolean / object / array | —                                                     | —          |
| multiple              | 是否多选           | boolean                                    | —                                                     | false      |
| disabled              | 是否禁用           | boolean                                    | —                                                     | false      |
| clearable             | 是否可以清空选项   | boolean                                    | —                                                     | false      |
| filterable            | 是否可搜索         | boolean                                    | —                                                     | false      |
| placeholder           | 占位符             | string                                     | —                                                     | Select     |
| type                  | 主题类型           | string                                     | default / primary / success / warning / danger / info | default    |
| size                  | 尺寸               | string                                     | small / medium / large                                | medium     |
| options               | 选项数组           | array                                      | —                                                     | []         |
| collapse-tags         | 是否折叠标签       | boolean                                    | —                                                     | false      |
| loading               | 是否正在加载       | boolean                                    | —                                                     | false      |
| loading-text          | 加载时显示的文字   | string                                     | —                                                     | Loading... |
| no-data-text          | 无数据时显示的文字 | string                                     | —                                                     | No data    |
| icon-position         | 选中图标位置       | string                                     | left / right                                          | left       |

## 事件

| 事件名         | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 当前选中值                    |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| focus          | 获得焦点时触发                           | (event: Event)                |
| blur           | 失去焦点时触发                           | (event: Event)                |

## 插槽

| 插槽名  | 说明            |
| ------- | --------------- |
| default | Option 组件列表 |
| header  | 下拉框头部内容  |
| footer  | 下拉框底部内容  |
| empty   | 无选项时的内容  |
| loading | 自定义加载文案  |

<style scoped>
  .x-select__wrapper {
    border-color: var(--color-primary);
  }
</style>
