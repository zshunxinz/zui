# ButtonGroup 组合按钮

<script setup>
import ButtonDemo1 from "../demo/ButtonGroup/ButtonDemo1.vue";
import ButtonDemo2 from "../demo/ButtonGroup/ButtonDemo2.vue";
import ButtonDemo3 from "../demo/ButtonGroup/ButtonDemo3.vue";
</script>

将多个按钮组合在一起，实现无间距排列和边缘圆角处理。

## 基础用法

### 水平组合

默认情况下，按钮组水平排列，中间按钮无圆角，仅保留最外侧按钮的圆角。
<Demo>
<ButtonDemo1 />
</Demo>

<CollapsibleCode>

<<< @/demo/ButtonGroup/ButtonDemo1.vue

</CollapsibleCode>

### 垂直组合

通过`vertical`属性可以实现按钮组垂直排列。
<Demo>
<ButtonDemo2 />
</Demo>

<CollapsibleCode>

<<< @/demo/ButtonGroup/ButtonDemo2.vue

</CollapsibleCode>

## 混合类型组合

可以在同一个按钮组中使用不同类型的按钮。
<Demo>
<ButtonDemo3 />
</Demo>

<CollapsibleCode>

<<< @/demo/ButtonGroup/ButtonDemo3.vue

</CollapsibleCode>

## Props

| 参数     | 说明               | 类型    | 可选值     | 默认值 |
| -------- | ------------------ | ------- | ---------- | ------ |
| vertical | 是否垂直排列按钮组 | boolean | true/false | false  |

## 注意事项

- 按钮组内部仅支持放置`<Button>`组件
- 当按钮组包含禁用状态的按钮时，整体样式会自动调整
- 垂直排列时，圆角会自动调整为上下方向
