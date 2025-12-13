<script setup lang="ts">
import { ref } from "vue";
</script>
<template>
  <Card>
    <h1>Create Project</h1>
    <span>Create a new project</span>
    <Form>
      <FormItem label="Project Name">
        <Input placeholder="请输入项目名称" />
      </FormItem>
      <FormItem label="Project Description">
        <Select placeholder="请输入框架名称">
          <Option value="vue">Vue</Option>
          <Option value="react">React</Option>
          <Option value="angular">Angular</Option>
        </Select>
      </FormItem>
      <Row :gutter="10">
        <Col span="10">
          <Button border>Cancel</Button>
        </Col>
        <Col span="10">
          <Button default>Deploy</Button>
        </Col>
      </Row>
    </Form>
  </Card>
</template>
<style scoped></style>
