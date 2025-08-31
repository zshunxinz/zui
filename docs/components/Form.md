# Form 组件

表单组件

## 基础用法


<Card width="430px" style="padding: 20px;">
    <Form v-model="formData" :rules="rules" @submit="handleSubmit"  labelAlign="left"
        labelWidth="100px">
        <FormItem label="Name" prop="name" required>
            <Input v-model="formData.name" placeholder="Enter your name" />
        </FormItem>
        <FormItem label="Email" prop="email" required>
            <Input v-model="formData.email" type="email" placeholder="Enter your email" />
        </FormItem>
        <FormItem label="Age" prop="age">
            <Input v-model.number="formData.age" type="number" placeholder="Enter your age" />
        </FormItem>
        <FormItem label="Gender" prop="gender" required>
            <Radio v-model="formData.gender" :options="genderOptions" />
        </FormItem>
        <FormItem label="Hobbies" prop="hobbies">
            <CheckboxGroup v-model="formData.hobbies">
                <Checkbox label="Reading" value="reading" />
                <Checkbox label="Sports" value="sports" />
                <Checkbox label="Music" value="music" />
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Country" prop="country">
            <Select v-model="formData.country" placeholder="Select country" >
                <Option>1</Option>
            </Select>
        </FormItem>
        <FormItem label="Bio" prop="bio">
            <Textarea v-model="formData.bio" placeholder="Enter your bio" :rows="4" />
        </FormItem>
        <FormItem>
            <Row :gutter="20">
            <Col :span="12">
                <Button style="width: 100%" type="default" class="x-button x-button--primary">Submit</Button>
            </Col>
            <Col :span="12">
                <Button style="width: 100%" html-type="reset" text  border  class="x-button x-button--primary">Reset</Button>
            </Col>
            </Row>
        </FormItem>
    </Form>
</Card>


<script setup lang="ts">
import { ref } from 'vue'
import CollapsibleCode from "./CollapsibleCode.vue";

const formData = ref({
    name: '',
    email: '',
    age: null,
    gender: '',
    hobbies: [],
    country: '',
    bio: ''
});

// 表单验证规则
const rules = {
    name: {
        required: true,
        message: 'Name is required'
    },
    email: {
        required: true,
        message: 'Email is required',
        validator: (value) => {
            if (!value) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return 'Please enter a valid email';
            }
            return true;
        }
    },
    gender: {
        required: true,
        message: 'Please select gender'
    },
    country: {
        required: true,
        message: 'Please select country'
    }
};

// 选项数据
const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
];

const countryOptions = ref([
    { label: 'China', value: 'cn' },
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Japan', value: 'jp' },
    { label: 'Canada', value: 'ca' }
]);

// 提交处理
const handleSubmit = (data) => {
    console.log('Form submitted successfully:', data);
    alert('Form submitted successfully!');
};
</script>

<CollapsibleCode title="基础表单示例" :defaultOpen="false">

```vue
<template>

<Card width="430px" style="padding: 20px;">
    <Form v-model="formData" :rules="rules" @submit="handleSubmit"  labelAlign="left"
        labelWidth="100px">
        <FormItem label="Name" prop="name" required>
            <Input v-model="formData.name" placeholder="Enter your name" />
        </FormItem>
        <FormItem label="Email" prop="email" required>
            <Input v-model="formData.email" type="email" placeholder="Enter your email" />
        </FormItem>
        <FormItem label="Age" prop="age">
            <Input v-model.number="formData.age" type="number" placeholder="Enter your age" />
        </FormItem>
        <FormItem label="Gender" prop="gender" required>
            <Radio v-model="formData.gender" :options="genderOptions" />
        </FormItem>
        <FormItem label="Hobbies" prop="hobbies">
            <CheckboxGroup v-model="formData.hobbies">
                <Checkbox label="Reading" value="reading" />
                <Checkbox label="Sports" value="sports" />
                <Checkbox label="Music" value="music" />
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Country" prop="country" required>
            <Select v-model="formData.country" :options="countryOptions" placeholder="Select country" />
        </FormItem>
        <FormItem label="Bio" prop="bio">
            <Textarea v-model="formData.bio" placeholder="Enter your bio" :rows="4" />
        </FormItem>
        <FormItem>
            <Row :gutter="20">
            <Col :span="12">
                <Button style="width: 100%" type="default" class="x-button x-button--primary">Submit</Button>
            </Col>
            <Col :span="12">
                <Button style="width: 100%" html-type="reset" text  border  class="x-button x-button--primary">Reset</Button>
            </Col>
            </Row>
        </FormItem>
    </Form>
</Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    age: null,
    gender: '',
    hobbies: [],
    country: '',
    bio: ''
});

// 表单验证规则
const rules = {
    name: {
        required: true,
        message: 'Name is required'
    },
    email: {
        required: true,
        message: 'Email is required',
        validator: (value) => {
            if (!value) return 'Email is required';
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return 'Please enter a valid email';
            }
            return true;
        }
    },
    gender: {
        required: true,
        message: 'Please select gender'
    },
    country: {
        required: true,
        message: 'Please select country'
    }
};

// 选项数据
const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' }
];

const countryOptions = [
    { label: 'China', value: 'cn' },
    { label: 'United States', value: 'us' },
    { label: 'United Kingdom', value: 'uk' },
    { label: 'Japan', value: 'jp' },
    { label: 'Canada', value: 'ca' }
];

// 提交处理
const handleSubmit = (data) => {
    console.log('Form submitted successfully:', data);
    alert('Form submitted successfully!');
};
</script>
```

</CollapsibleCode>

## API

### Form Props

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| modelValue | Object | {} | 表单数据对象，支持v-model双向绑定 |
| rules | Object | {} | 表单验证规则，键为字段名，值为验证规则 |
| disabled | Boolean | false | 是否禁用整个表单 |
| labelWidth | String | '100px' | 标签宽度，支持px、%等单位 |
| labelPosition | String | 'left' | 标签位置，可选值：left/right/top/left-top/right-top |
| labelAlign | String | 'right' | 标签文本对齐方式，可选值：left/center/right |

### FormItem Props

| 参数名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| label | String | '' | 标签文本 |
| prop | String | - | 表单字段名，对应modelValue中的属性 |
| required | Boolean | false | 是否显示必填星号 |
| labelPosition | String | undefined | 覆盖Form组件的labelPosition设置 |
| labelAlign | String | undefined | 覆盖Form组件的labelAlign设置 |