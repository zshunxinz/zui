<template>
  <Popover>
    <Button>value:{{ value }}</Button>
    <template #content>
      <div style="font-size: var(--font-size-1)">
        <Space direction="vertical" size="large">
          <div>
            <Select v-model="value" width="200px">
              <Option value="1">选项1</Option>
              <Option value="2">选项2</Option>
              <Option value="3">选项3</Option>
            </Select>
          </div>
        </Space>
      </div>
    </template>
  </Popover>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('1');
</script>
