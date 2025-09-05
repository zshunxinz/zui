<template>
  <Row :gutter="[20, 20]">
    <Col :span="12">
      <Select v-model="value1" placeholder="图标在左侧" icon-position="left">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :span="12">
      <Select v-model="value2" placeholder="图标在右侧" icon-position="right">
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
  </Row>
</template>

<script setup>
import { ref } from "vue";
const value1 = ref("");
const value2 = ref("");
</script>