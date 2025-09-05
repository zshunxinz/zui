<template>
  <Row :gutter="[20, 20]">
    <Col :span="24">
      <Select v-model="value8" placeholder="请选择多个选项" multiple>
        <Option label="北京" value="beijing">中央</Option>
        <Option label="上海" value="shanghai" />
        <Option label="广州" value="guangzhou" />
        <Option label="深圳" value="shenzhen" />
        <Option label="重庆" value="chongqing" />
      </Select>
    </Col>
    <Col :span="24">
      <Select v-model="value8" placeholder="请选择多个选项" multiple type="primary">
        <Option label="北京" value="beijing" />
        <Option label="上海" value="shanghai" />
        <Option label="广州" value="guangzhou" />
        <Option label="深圳" value="shenzhen" />
        <Option label="重庆" value="chongqing" />
      </Select>
    </Col>
    <Col :span="24">
      <Select v-model="value8" placeholder="请选择多个选项" multiple type="danger">
        <Option label="北京" value="beijing" />
        <Option label="上海" value="shanghai" />
        <Option label="广州" value="guangzhou" />
        <Option label="深圳" value="shenzhen" />
        <Option label="重庆" value="chongqing" />
      </Select>
    </Col>
  </Row>
</template>

<script setup>
import { ref } from "vue";
const value8 = ref([]);
</script>