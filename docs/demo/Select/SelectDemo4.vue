<template>
  <Row :gutter="[20, 20]">
    <Col :span="12">
      <Select v-model="value7" placeholder="禁用的选择器" disabled>
        <Option label="选项1" value="1" />
        <Option label="选项2" value="2" />
      </Select>
    </Col>
    <Col :span="12">
      <Select v-model="value9" placeholder="包含禁用选项">
        <Option label="可用选项1" value="1" />
        <Option label="禁用选项" value="2" disabled />
        <Option label="可用选项2" value="3" />
      </Select>
    </Col>
  </Row>
</template>

<script setup>
import { ref } from "vue";
const value7 = ref("");
const value9 = ref("");
</script>