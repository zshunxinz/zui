<template>
  <Row :gutter="[20, 20]">
    <Col :span="12">
      <Select v-model="value3" placeholder="自定义图标" icon-position="left">
        <Option label="选项1" value="1">
          <template #icon>
            <span style="color: var(--color-primary);">★</span>
          </template>
          选项1
        </Option>
        <Option label="选项2" value="2">
          <template #icon>
            <span style="color: var(--color-success);">●</span>
          </template>
          选项2
        </Option>
      </Select>
    </Col>
    <Col :span="12">
      <Select
        v-model="value4"
        placeholder="右侧自定义图标"
        icon-position="right"
      >
        <Option label="选项1" value="1">
          <template #icon>
            <span style="color: var(--color-warning);">✓</span>
          </template>
          选项1
        </Option>
        <Option label="选项2" value="2">
          <template #icon>
            <span style="color: var(--color-danger);">✗</span>
          </template>
          选项2
        </Option>
      </Select>
    </Col>
  </Row>
</template>

<script setup>
import { ref } from "vue";
const value3 = ref("");
const value4 = ref("");
</script>