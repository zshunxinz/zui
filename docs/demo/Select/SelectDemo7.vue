<template>
  <Row :gutter="[20, 20]">
    <Col :span="24">
      <Select v-model="value11" placeholder="小尺寸" size="small">
        <Option label="小尺寸" value="1" />
        <Option label="选项2" value="2" />
      </Select>
    </Col>
    <Col :span="24">
      <Select v-model="value11" placeholder="默认尺寸" size="medium">
        <Option label="默认尺寸" value="1" />
        <Option label="选项2" value="2" />
      </Select>
    </Col>
    <Col :span="24">
      <Select v-model="value11" placeholder="大尺寸" size="large">
        <Option label="大尺寸" value="1" />
        <Option label="选项2" value="2" />
      </Select>
    </Col>
  </Row>
</template>

<script setup>
import { ref } from "vue";
const value11 = ref("");
</script>