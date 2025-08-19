# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

:::demo

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
<Select v-model="value" placeholder="请选择">
  <Option label="选项1" value="1" />
  <Option label="选项2" value="2" />
  <Option label="选项3" value="3" />
</Select>
