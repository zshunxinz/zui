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
import SelectDemo11 from '../demo/Select/SelectDemo11.vue'
import SelectDemo12 from '../demo/Select/SelectDemo12.vue'
import SelectDemo13 from '../demo/Select/SelectDemo13.vue'
import SelectDemo14 from '../demo/Select/SelectDemo14.vue'
import SelectDemo15 from '../demo/Select/SelectDemo15.vue'
import SelectDemo16 from '../demo/Select/SelectDemo16.vue'
import SelectDemo17 from '../demo/Select/SelectDemo17.vue'
import SelectDemo18 from '../demo/Select/SelectDemo18.vue'

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

## 分组

使用 `OptionGroup` 组件可以对选项进行分组

<Demo>
<SelectDemo11/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo11.vue

</CollapsibleCode>

## 可折叠分组

通过设置 `collapsible` 属性可以让分组支持折叠功能，使用 `default-collapsed` 设置默认折叠状态

<Demo>
<SelectDemo12/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo12.vue

</CollapsibleCode>

## 嵌套分组

支持多级嵌套分组，每个嵌套层级都可以独立设置折叠状态

<Demo>
<SelectDemo13/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo13.vue

</CollapsibleCode>

## 折叠图标位置

可以通过 `icon-position` 属性设置折叠图标的位置：`left`（左侧）、`after-text`（文字后）、`right`（右侧）

<Demo>
<SelectDemo14/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo14.vue

</CollapsibleCode>

## 可搜索的分组

可折叠分组功能与搜索功能可以同时使用

<Demo>
<SelectDemo15/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo15.vue

</CollapsibleCode>

## 远程搜索

通过设置 `remote` 和 `remote-method` 属性启用远程搜索功能，可以从服务器动态获取数据

<Demo>
<SelectDemo16/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo16.vue

</CollapsibleCode>

## 远程搜索进阶

远程搜索支持多选、分组等高级功能，并提供防抖优化减少请求频率

<Demo>
<SelectDemo17/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo17.vue

</CollapsibleCode>

## 自定义尾部

可以通过 `#footer` 插槽自定义下拉列表的尾部内容

<Demo>
<SelectDemo18/>
</Demo>

<CollapsibleCode>

<<< ../demo/Select/SelectDemo18.vue

</CollapsibleCode>

## 属性

### Select 属性

| 属性名                | 说明                   | 类型                                       | 可选值                                                | 默认值           |
| --------------------- | ---------------------- | ------------------------------------------ | ----------------------------------------------------- | ---------------- |
| model-value / v-model | 绑定值                 | string / number / boolean / object / array | —                                                     | —                |
| multiple              | 是否多选               | boolean                                    | —                                                     | false            |
| disabled              | 是否禁用               | boolean                                    | —                                                     | false            |
| clearable             | 是否可以清空选项       | boolean                                    | —                                                     | false            |
| filterable            | 是否可搜索             | boolean                                    | —                                                     | false            |
| remote                | 是否为远程搜索         | boolean                                    | —                                                     | false            |
| remote-method         | 远程搜索方法           | function                                   | —                                                     | —                |
| filter-method         | 本地搜索方法           | function                                   | —                                                     | —                |
| placeholder           | 占位符                 | string                                     | —                                                     | Select           |
| type                  | 主题类型               | string                                     | default / primary / success / warning / danger / info | default          |
| size                  | 尺寸                   | string                                     | small / medium / large                                | medium           |
| options               | 选项数组               | array                                      | —                                                     | []               |
| collapse-tags         | 是否折叠标签           | boolean                                    | —                                                     | false            |
| loading               | 是否正在加载           | boolean                                    | —                                                     | false            |
| loading-text          | 加载时显示的文字       | string                                     | —                                                     | Loading...       |
| no-data-text          | 无数据时显示的文字     | string                                     | —                                                     | No data          |
| no-match-text         | 无匹配结果时显示的文字 | string                                     | —                                                     | No matching data |
| icon-position         | 选中图标位置           | string                                     | left / right                                          | left             |

### OptionGroup 属性

| 属性名            | 说明           | 类型    | 可选值                    | 默认值 |
| ----------------- | -------------- | ------- | ------------------------- | ------ |
| label             | 分组标签       | string  | —                         | —      |
| disabled          | 是否禁用该分组 | boolean | —                         | false  |
| collapsible       | 是否可折叠     | boolean | —                         | false  |
| default-collapsed | 默认折叠状态   | boolean | —                         | false  |
| icon-position     | 折叠图标位置   | string  | left / after-text / right | left   |
| level             | 手动设置层级   | number  | —                         | —      |

## 事件

### Select 事件

| 事件名         | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 当前选中值                    |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| focus          | 获得焦点时触发                           | (event: Event)                |
| blur           | 失去焦点时触发                           | (event: Event)                |
| search         | 搜索查询发生变化时触发                   | 搜索查询字符串                |

### OptionGroup 事件

| 事件名          | 说明                   | 回调参数                                |
| --------------- | ---------------------- | --------------------------------------- |
| collapse-change | 折叠状态发生变化时触发 | `{ collapsed: boolean, label: string }` |

## 插槽

| 插槽名  | 说明            |
| ------- | --------------- |
| default | Option 组件列表 |
| header  | 下拉框头部内容  |
| footer  | 下拉框底部内容  |
| empty   | 无选项时的内容  |
| loading | 自定义加载文案  |
