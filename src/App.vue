<script setup>
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Col } from "@/components/Col";
import { Row } from "@/components/Row";
import { HelloWorld } from "@/components/HelloWorld";
import { Input } from "@/components/Input";
import { Radio } from "@/components/Radio";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ref } from "vue";

const value = ref("");
const radioValue = ref('option1');
const radioOptions = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
]
const selectedValueCard = ref('option1')
const radioOptionsCard = [
  { label: 'HTML', value: 'option1',text:"html是超文本标记语言" },
  { label: 'CSS', value: 'option2',text:"css是层叠样式表" },
  { label: 'JavaScript', value: 'option3',text:"JavaScript是脚本语言" }
]
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <ThemeToggle />
    </div>

    <div class="component-section">
      <h2>Input 组件</h2>
      <Input v-model="value" placeholder="请输入内容" />
    </div>

    <div class="component-section">
      <h2>Button 组件</h2>
      <div class="button-group">
        <Button type="primary">Primary Button</Button>
        <Button type="success">Success Button</Button>
        <Button type="warning">Warning Button</Button>
        <Button type="danger">Danger Button</Button>
        <Button type="info">Info Button</Button>
      </div>
    </div>

    <div class="component-section">
      <h2>ButtonGroup 组件</h2>
      <ButtonGroup>
        <Button type="primary">Left</Button>
        <Button type="primary">Middle</Button>
        <Button type="primary">Right</Button>
      </ButtonGroup>
    </div>

    <div class="component-section">
      <h2>Radio 组件</h2>
      <div class="radio-group">
        <Radio v-model="radioValue" :options="radioOptions" shape="square" />
        <Radio v-model="radioValue" :options="radioOptions" shape="button" />
      </div>
      <div>
      <Radio v-model="selectedValueCard" :options="radioOptionsCard" shape="card" checked-class="custom-checked-class">
          <template #card-option1="{ option }">
            <div class="custom-card-content">
              <div>{{ option.label }}</div>
              <span>{{ option.text }}</span>
            </div>
          </template>
          <template #card-option2="{ option }">
            <div class="custom-card-content">
              <div>{{ option.label }}</div>
              <span>{{ option.text }}</span>
            </div>
          </template>
          <template #card-option3="{ option }">
            <div class="custom-card-content">
              <div>{{ option.label }}</div>
              <span>{{ option.text }}</span>
            </div>
          </template>
        </Radio>
      </div>
        
    </div>

    <div class="component-section">
      <h2>Grid 组件</h2>
      <Row>
        <Col span="8"><div class="grid-content">Col-8</div></Col>
        <Col span="8"><div class="grid-content">Col-8</div></Col>
        <Col span="8"><div class="grid-content">Col-8</div></Col>
      </Row>
      <Row>
        <Col span="12"><div class="grid-content">Col-12</div></Col>
        <Col span="12"><div class="grid-content">Col-12</div></Col>
      </Row>
    </div>

    <div class="component-section">
      <h2>HelloWorld 组件1</h2>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  /* padding: 1rem; */
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: background-color 0.3s, color 0.3s;
}

.app-header {
  display: flex;
  justify-content: flex-end;
}

.component-section {
  margin: 2rem 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap:10px
}

.button-group {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.radio-group {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.grid-content {
  background-color: var(--color-primary-light);
  color: var(--color-text);
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  height: 100%;
}
.custom-card-content{
  padding: 10px;
  /* color: var(--color-default); */
  color: var(--color-primary);
}

.custom-card-content span{
  font-size: 9px;
  color: var(--color-primary-hover);
}

::v-deep .custom-checked-class {
  border:1px solid rgb(0, 123, 255);
  box-shadow: 1px 1px 5px 2px linear-gradient(to right, rgb(0, 123, 255), rgb(181, 181, 181)) 1;
  background-image: linear-gradient(to right, rgba(0, 123, 255, 0.05), rgba(255, 115, 1, 0.05));
  border-radius: 4px !important;
}
.radio-type-demo {
  padding: 0px;
}
</style>
