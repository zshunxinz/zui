<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
        >全选</Checkbox
      >
      <div style="margin: 15px 0"></div>
      <CheckboxGroup v-model="checkedList" @change="handleCheckedChange">
        <Checkbox label="备选项1"></Checkbox>
        <Checkbox label="备选项2"></Checkbox>
        <Checkbox label="备选项3"></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CheckboxGroup from "../../../src/components/Checkbox/CheckboxGroup.vue";

const checkedList = ref([]);
const checkAll = ref(false);
const isIndeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < 3;
});

const handleCheckAllChange = (val) => {
  checkedList.value = val ? ["备选项1", "备选项2", "备选项3"] : [];
};

const handleCheckedChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === 3;
};
</script>

<style scoped>
.checkbox-demo {
  padding: 20px 0;
}
.checkbox-type-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
