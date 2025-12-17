<template>
  <div class="tool-box">
    <Form>
      <Select size="small" placeholder="设置">
        <Option label="选项1" value="1" size="small" />
      </Select>
    </Form>
  </div>
  <div>
    <h3>基础布局</h3>
    <Card width="430px" style="padding: 20px; margin-bottom: 20px">
      <Form
        v-model="formData"
        :rules="rules"
        @submit="handleSubmit"
        labelAlign="left"
        labelJustifyContent="left"
        labelWidth="100px"
      >
        <FormItem label="Name" prop="name" required>
          <Input v-model="formData.name" placeholder="Enter your name" />
        </FormItem>
        <FormItem label="Email" prop="email" required>
          <Input
            v-model="formData.email"
            type="email"
            placeholder="Enter your email"
          />
        </FormItem>
        <FormItem label="Age" prop="age">
          <Input
            v-model.number="formData.age"
            type="number"
            placeholder="Enter your age"
          />
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
          <Select
            v-model="formData.country"
            :options="countryOptions"
            placeholder="Select country"
          />
        </FormItem>
        <FormItem label="Bio" prop="bio">
          <Textarea
            v-model="formData.bio"
            placeholder="Enter your bio"
            :rows="4"
          />
        </FormItem>
        <FormItem>
          <Row :gutter="20">
            <Col :span="12">
              <Button
                style="width: 100%"
                type="default"
                class="z-button z-button--primary"
                >Submit</Button
              >
            </Col>
            <Col :span="12">
              <Button
                style="width: 100%"
                html-type="reset"
                text
                border
                class="z-button z-button--primary"
                >Reset</Button
              >
            </Col>
          </Row>
        </FormItem>
      </Form>
    </Card>

    <h3>Top-left 布局</h3>
    <Card width="430px" style="padding: 20px">
      <Form
        v-model="formData"
        :rules="rules"
        @submit="handleSubmit"
        labelPosition="top-left"
        labelWidth="100px"
      >
        <FormItem label="Name" prop="name" required>
          <Input v-model="formData.name" placeholder="Enter your name" />
        </FormItem>
        <FormItem label="Email" prop="email" required>
          <Input
            v-model="formData.email"
            type="email"
            placeholder="Enter your email"
          />
        </FormItem>
        <FormItem label="Age" prop="age">
          <Input
            v-model.number="formData.age"
            type="number"
            placeholder="Enter your age"
          />
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
          <Select
            v-model="formData.country"
            :options="countryOptions"
            placeholder="Select country"
          />
        </FormItem>
        <FormItem label="Bio" prop="bio">
          <Textarea
            v-model="formData.bio"
            placeholder="Enter your bio"
            :rows="4"
          />
        </FormItem>
        <FormItem style="margin-top: 20px">
          <Row :gutter="20">
            <Col :span="12">
              <Button
                style="width: 100%"
                type="default"
                class="z-button z-button--primary"
                >Submit</Button
              >
            </Col>
            <Col :span="12">
              <Button
                style="width: 100%"
                html-type="reset"
                text
                border
                class="z-button z-button--primary"
                >Reset</Button
              >
            </Col>
          </Row>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  age: null,
  gender: '',
  hobbies: [],
  country: '',
  bio: '',
});

// 表单验证规则
const rules = {
  name: {
    required: true,
    message: 'Name is required',
  },
  email: {
    required: true,
    message: 'Email is required',
    validator: (value: any) => {
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email';
      }
      return true;
    },
  },
  gender: {
    required: true,
    message: 'Please select gender',
  },
  country: {
    required: true,
    message: 'Please select country',
  },
};

// 选项数据
const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const countryOptions = [
  { label: 'China', value: 'cn' },
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Japan', value: 'jp' },
  { label: 'Canada', value: 'ca' },
];

// 提交处理
const handleSubmit = (data: any) => {
  console.log('Form submitted successfully:', data);
  alert('Form submitted successfully!');
};
</script>
<style>
.tool-box {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
