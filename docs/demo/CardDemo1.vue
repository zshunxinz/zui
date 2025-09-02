<script setup lang="ts">
import { ref } from "vue";
const formData = ref({
  name: "",
  framework: "",
});
</script>
<template>
  <Card
    style="
      padding: 10px;
      width: 360px;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    "
  >
    <div style="margin-bottom: 20px">
      <h1 style="color: var(--color-text-1); font-size: var(--font-size-3)">
        Create Project
      </h1>
      <span
        style="color: var(--color-text-muted); font-size: var(--font-size-1)"
        >Deploy your new project in one-click.</span
      >
    </div>
    <Form
      labelPosition="top-left"
      size="large"
      labelAlignItems="buttom"
      labelTextAlign="buttom"
    >
      <FormItem label="Project Name">
        <Input
          placeholder="Name of project"
          v-model="formData.name"
          size="large"
          style="font-size: var(--font-size-1)"
        />
      </FormItem>
      <FormItem label="Framework">
        <Select
          placeholder="Select"
          v-model="formData.framework"
          size="large"
          style="font-size: var(--font-size-1)"
        >
          <Option value="vue">Vue</Option>
          <Option value="react">React</Option>
          <Option value="angular">Angular</Option>
        </Select>
      </FormItem>
      <Row justify="space-between" style="margin-top: 30px">
        <Col span="6">
          <Button
            border
            size="large"
            style="width: 100%; font-size: var(--font-size-1)"
            >Cancel</Button
          >
        </Col>
        <Col span="6">
          <Button
            default
            size="large"
            style="width: 100%; font-size: var(--font-size-1)"
            >Deploy</Button
          >
        </Col>
      </Row>
    </Form>
  </Card>
</template>
