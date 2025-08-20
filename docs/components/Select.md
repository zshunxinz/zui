# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

<script setup>
import { ref } from 'vue'
const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
</script>
<Select v-model="value" placeholder="请选择">
  <Option label="选项1" value="1" />
  <Option label="选项2" value="2" />
  <Option label="选项3" value="3" />
</Select>

```html
<template>
  <select v-model="value" placeholder="请选择">
    <option label="选项1" value="1" />
    <option label="选项2" value="2" />
    <option label="选项3" value="3" />
  </select>
</template>

<script setup>
  import { ref } from "vue";
  const value = ref("");
</script>
```

## 不同类型

<Row :gutter="[20,20]" >

  <Col :span="12">
    <Select v-model="value1" placeholder="请选择" type="default">
      <Option label="选项1" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value2" placeholder="请选择" type="primary">
      <Option label="选项1" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value3" placeholder="请选择" type="success">
      <Option label="选项1" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value4" placeholder="请选择" type="info">
      <Option label="选项1" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value5" placeholder="请选择" type="warning">
      <Option label="选项1" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value6" placeholder="请选择" type="danger">
      <Option label="选项1" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
</Row>

```vue
<script setup>
import { ref } from "vue";
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
</script>
<template>
  <Row :gutter="[20, 20]">
    <Col :span="12">
      <Select v-model="value1" placeholder="请选择" type="default">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :span="12">
      <Select v-model="value2" placeholder="请选择" type="primary">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :span="12">
      <Select v-model="value3" placeholder="请选择" type="success">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :span="12">
      <Select v-model="value4" placeholder="请选择" type="info">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :span="12">
      <Select v-model="value5" placeholder="请选择" type="warning">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :span="12">
      <Select v-model="value6" placeholder="请选择" type="danger">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
  </Row>
</template>
```

<style scoped>
  .x-select__wrapper {
    border-color: var(--color-primary);
  }
</style>
