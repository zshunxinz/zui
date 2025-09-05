<template>
  <div class="radio-demo">
    <Radio
      v-model="selectedValueCard"
      :options="radioOptionsCard"
      shape="card"
      checked-class="custom-checked-class"
    >
      <template #card-option1="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
      <template #card-option2="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
      <template #card-option3="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
    </Radio>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Radio from "../../../src/components/Radio/Radio.vue";

const selectedValueCard = ref("option1");
const radioOptionsCard = [
  { label: "HTML", value: "option1", text: "html是超文本标记语言" },
  { label: "CSS", value: "option2", text: "css是层叠样式表" },
  { label: "JavaScript", value: "option3", text: "JavaScript是脚本语言" },
];
</script>

<style scoped>
.radio-demo {
  padding: 20px 0;
}

.custom-card-content {
  padding: 16px;
}

:deep(.custom-checked-class) {
  border: 1px solid rgb(0, 123, 255);
  box-shadow: 1px 1px 5px 2px
    linear-gradient(to right, rgb(0, 123, 255), rgb(181, 181, 181)) 1;
  background-color: rgba(0, 123, 255, 0.01);
  border-radius: 4px !important;
}
</style>
