<template>
  <Row :gutter="[20, 20]">
    <Col :xl="12" :md="24">
      <Select v-model="value1" placeholder="请选择" type="default">
        <Option label="默认" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value2" placeholder="请选择" type="primary">
        <Option label="主要" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value3" placeholder="请选择" type="success">
        <Option label="成功" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value4" placeholder="请选择" type="info">
        <Option label="信息" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value5" placeholder="请选择" type="warning">
        <Option label="警告" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value6" placeholder="请选择" type="danger">
        <Option label="危险" value="1" />
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
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
</script>