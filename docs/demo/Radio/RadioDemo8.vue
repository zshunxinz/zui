<template>
  <div class="radio-type-demo">
    <Radio v-model="typeValue" :options="typeOptions" type="default" />
    <Radio v-model="typeValue" :options="typeOptions" type="primary" />
    <Radio v-model="typeValue" :options="typeOptions" type="success" />
    <Radio v-model="typeValue" :options="typeOptions" type="warning" />
    <Radio v-model="typeValue" :options="typeOptions" type="danger" />
    <Radio v-model="typeValue" :options="typeOptions" type="info" />
  </div>
  <div class="radio-type-demo">
    <Radio
      shape="tab-button"
      v-model="typeValue"
      :options="typeOptions"
      type="default"
    />
    <Radio
      shape="tab-button"
      v-model="typeValue"
      :options="typeOptions"
      type="primary"
    />
    <Radio
      shape="tab-button"
      v-model="typeValue"
      :options="typeOptions"
      type="success"
    />
    <Radio
      shape="tab-button"
      v-model="typeValue"
      :options="typeOptions"
      type="warning"
    />
    <Radio
      shape="tab-button"
      v-model="typeValue"
      :options="typeOptions"
      type="danger"
    />
    <Radio
      shape="tab-button"
      v-model="typeValue"
      :options="typeOptions"
      type="info"
    />
  </div>
  <div class="radio-type-demo">
    <Radio
      shape="tab"
      v-model="typeValue"
      :options="typeOptions"
      type="default"
    />
    <Radio
      shape="tab"
      v-model="typeValue"
      :options="typeOptions"
      type="primary"
    />
    <Radio
      shape="tab"
      v-model="typeValue"
      :options="typeOptions"
      type="success"
    />
    <Radio
      shape="tab"
      v-model="typeValue"
      :options="typeOptions"
      type="warning"
    />
    <Radio
      shape="tab"
      v-model="typeValue"
      :options="typeOptions"
      type="danger"
    />
    <Radio shape="tab" v-model="typeValue" :options="typeOptions" type="info" />
  </div>
  <div class="radio-type-demo">
    <Radio
      shape="tab-line"
      v-model="typeValue"
      :options="typeOptions"
      type="default"
    />
    <Radio
      shape="tab-line"
      v-model="typeValue"
      :options="typeOptions"
      type="primary"
    />
    <Radio
      shape="tab-line"
      v-model="typeValue"
      :options="typeOptions"
      type="success"
    />
    <Radio
      shape="tab-line"
      v-model="typeValue"
      :options="typeOptions"
      type="warning"
    />
    <Radio
      shape="tab-line"
      v-model="typeValue"
      :options="typeOptions"
      type="danger"
    />
    <Radio
      shape="tab-line"
      v-model="typeValue"
      :options="typeOptions"
      type="info"
    />
  </div>
  <div class="radio-type-demo">
    <Radio
      shape="button"
      v-model="typeValue"
      :options="typeOptions"
      type="default"
    />
    <Radio
      shape="button"
      v-model="typeValue"
      :options="typeOptions"
      type="primary"
    />
    <Radio
      shape="button"
      v-model="typeValue"
      :options="typeOptions"
      type="success"
    />
    <Radio
      shape="button"
      v-model="typeValue"
      :options="typeOptions"
      type="warning"
    />
    <Radio
      shape="button"
      v-model="typeValue"
      :options="typeOptions"
      type="danger"
    />
    <Radio
      shape="button"
      v-model="typeValue"
      :options="typeOptions"
      type="info"
    />
  </div>
  <div class="radio-type-demo">
    <Radio
      shape="square"
      v-model="typeValue"
      :options="typeOptions"
      type="default"
    />
    <Radio
      shape="square"
      v-model="typeValue"
      :options="typeOptions"
      type="primary"
    />
    <Radio
      shape="square"
      v-model="typeValue"
      :options="typeOptions"
      type="success"
    />
    <Radio
      shape="square"
      v-model="typeValue"
      :options="typeOptions"
      type="warning"
    />
    <Radio
      shape="square"
      v-model="typeValue"
      :options="typeOptions"
      type="danger"
    />
    <Radio
      shape="square"
      v-model="typeValue"
      :options="typeOptions"
      type="info"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Radio from '../../../src/components/Radio/Radio.vue';

const typeValue = ref('1');
const typeOptions = [
  { label: '主要选项', value: '1' },
  { label: '次要选项', value: '2' },
];
</script>

<style scoped>
.radio-type-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
