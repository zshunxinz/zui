<script setup>
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Col } from "@/components/Col";
import { Row } from "@/components/Row";
import { HelloWorld } from "@/components/HelloWorld";
import { Input } from "@/components/Input";
import { Radio } from "./components/Radio";
import { Checkbox, CheckboxGroup, CheckboxButton } from "./components/Checkbox";
import { Select, Option, OptionGroup } from "./components/Select";
import { Switch } from "./components/Switch";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ref, computed } from "vue";

const value = ref("");
const value1D = ref(false)
const radioValue = ref("option1");
// Checkbox 示例数据
const checked1 = ref(true);
const checked2 = ref(false);
const checkboxGroupValue = ref(["选项1", "选项3"]);
const buttonGroupValue = ref(["A"]);
const checkAll = ref(false);
const indeterminateValue = ref(["项目1", "项目2"]);
const isIndeterminate = computed(() => {
  return (
    indeterminateValue.value.length > 0 && indeterminateValue.value.length < 3
  );
});

const handleCheckAll = (val) => {
  indeterminateValue.value = val ? ["项目1", "项目2", "项目3"] : [];
};

const radioOptions = ref([
  { label: "Tab 1", value: "tab1" },
  { label: "Tab 2", value: "tab2" },
  { label: "Tab 3", value: "tab3" },
]);
const selectedValueCard = ref("option1");
const radioOptionsCard = [
  { label: "HTML", value: "option1", text: "html是超文本标记语言" },
  { label: "CSS", value: "option2", text: "css是层叠样式表" },
  { label: "JavaScript", value: "option3", text: "JavaScript是脚本语言" },
];
const value3 = ref([]);
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
const value7 = ref("");
const value8 = ref("");
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <ThemeToggle />
    </div>

    <div class="component-section">
      <h2>Input 组件</h2>
      <Input v-model="value" placeholder="请输入内容" />
      <h2>开关</h2>
      <Switch v-model="value1D" type="primary" />

    </div>

    <div class="component-section">
      <h2>Button 组件</h2>
      <div class="button-group">
        <Button>Default Button</Button>
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
      <div>
        <Select v-model="value" placeholder="请选择" size="small" disabled>
          <Option label="选项1" value="1" />
          <Option label="选项2" value="2" />
          <Option label="选项3" value="3" />
        </Select>
      </div>

      <div style="margin: 20px 0">
        <h3>多选</h3>
        <Select v-model="value3" placeholder="请选择" multiple type="default">
          <Option label="北京" value="beijing" />
          <Option label="上海" value="shanghai" />
          <Option label="广州" value="guangzhou" />
          <Option label="深圳" value="shenzhen" />
        </Select>
        <p>当前值: {{ value3 }}</p>
      </div>

      <div style="margin: 20px 0">
        <h3>主题颜色</h3>
        <Select v-model="value4" type="primary" placeholder="主要主题">
          <Option label="选项A" value="A" />
          <Option label="选项B" value="B" />
          <Option label="选项C" value="C" />
        </Select>
        <p>当前值: {{ value4 }}</p>

        <Select v-model="value5" type="success" placeholder="成功主题" style="margin-top: 10px">
          <Option label="成功1" value="success1" />
          <Option label="成功2" value="success2" />
        </Select>
        <p>当前值: {{ value5 }}</p>

        <Select v-model="value6" type="warning" placeholder="警告主题" style="margin-top: 10px">
          <Option label="警告1" value="warning1" />
          <Option label="警告2" value="warning2" />
        </Select>
        <p>当前值: {{ value6 }}</p>

        <Select v-model="value7" type="danger" placeholder="危险主题" style="margin-top: 10px">
          <Option label="危险1" value="danger1" />
          <Option label="危险2" value="danger2" />
        </Select>
        <p>当前值: {{ value7 }}</p>

        <Select v-model="value8" type="info" placeholder="信息主题" style="margin-top: 10px">
          <Option label="信息1" value="info1" />
          <Option label="信息2" value="info2" />
        </Select>
        <p>当前值: {{ value8 }}</p>
      </div>
    </div>
    <div class="component-section">
      <h2>Radio 组件</h2>
      <div class="radio-group">
        <Radio v-model="radioValue" :options="radioOptions" shape="square" />
        <Radio v-model="radioValue" :options="radioOptions" shape="button" />
      </div>

      <div class="radio-group">
        <h3>选项卡模式</h3>
        <Radio v-model="radioValue" :options="radioOptions" shape="tab" />
      </div>
      <div>
        <Radio v-model="selectedValueCard" :options="radioOptionsCard" shape="card"
          checked-class="custom-checked-class">
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

    <!-- Checkbox 多选框示例 -->
    <div class="component-section">
      <h3 class="section-title">Checkbox 多选框</h3>
      <div class="example-card">
        <h4>基础用法</h4>
        <div class="checkbox-demo">
          <Checkbox v-model="checked1" label="备选项1"></Checkbox>
          <Checkbox v-model="checked2" label="备选项2"></Checkbox>
        </div>
      </div>

      <div class="example-card">
        <h4>多选框组</h4>
        <CheckboxGroup v-model="checkboxGroupValue">
          <Checkbox label="选项1"></Checkbox>
          <Checkbox label="选项2"></Checkbox>
          <Checkbox label="选项3"></Checkbox>
          <Checkbox label="选项4" disabled></Checkbox>
        </CheckboxGroup>
      </div>

      <div class="example-card">
        <h4>按钮样式</h4>
        <CheckboxGroup v-model="buttonGroupValue" size="small">
          <CheckboxButton label="A"></CheckboxButton>
          <CheckboxButton label="B"></CheckboxButton>
          <CheckboxButton label="C"></CheckboxButton>
          <CheckboxButton label="D"></CheckboxButton>
        </CheckboxGroup>
      </div>

      <div class="example-card">
        <h4>Indeterminate 状态</h4>
        <Checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAll" label="全选"></Checkbox>
        <CheckboxGroup v-model="indeterminateValue">
          <Checkbox label="项目1"></Checkbox>
          <Checkbox label="项目2"></Checkbox>
          <Checkbox label="项目3"></Checkbox>
        </CheckboxGroup>
      </div>
    </div>

    <div class="component-section">
      <h2>Grid 组件</h2>
      <Row>
        <Col :span="8">
        <div class="grid-content">Col-8</div>
        </Col>
        <Col :span="8">
        <div class="grid-content">Col-8</div>
        </Col>
        <Col :span="8">
        <div class="grid-content">Col-8</div>
        </Col>
      </Row>
      <Row>
        <Col :span="12">
        <div class="grid-content">Col-12</div>
        </Col>
        <Col :span="12">
        <div class="grid-content">Col-12</div>
        </Col>
      </Row>
    </div>

    <!-- <div class="component-section"> -->
    <!-- <h2>HelloWorld 组件1</h2> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- </div> -->
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
  gap: 10px;
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

.custom-card-content {
  padding: 10px;
  /* color: var(--color-default); */
  color: var(--color-primary);
}

.custom-card-content span {
  font-size: 9px;
  color: var(--color-primary-hover);
}

::v-deep .custom-checked-class {
  border: 1px solid rgb(0, 123, 255);
  box-shadow: 1px 1px 5px 2px linear-gradient(to right, rgb(0, 123, 255), rgb(181, 181, 181)) 1;
  background-image: linear-gradient(to right,
      rgba(0, 123, 255, 0.05),
      rgba(255, 115, 1, 0.05));
  border-radius: 4px !important;
}

.radio-type-demo {
  padding: 0px;
}
</style>
