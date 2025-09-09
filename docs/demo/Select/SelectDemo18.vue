<template>
  <Select v-model="selectValue" placeholder="请选择">
    <Option label="选项1" value="1" />
    <Option label="选项2" value="2" />
    <Option label="选项3" value="3" />
    <template #footer>
      <Row style="padding: 10px">
        <Col :span="18" style="padding-right: 10px">
          <div>
            <Input
              placeholder="输入相关值"
              v-model="inputValue"
              width="100%"
            ></Input>
          </div>
        </Col>
        <Col :span="6">
          <div>
            <Button @click="handleOk">确定</Button>
          </div>
        </Col>
      </Row>
    </template>
  </Select>
</template>

<script setup>
import { ref } from 'vue';

const selectValue = ref('');
const inputValue = ref('');
const handleOk = () => {
  selectValue.value = inputValue.value;
};
</script>
