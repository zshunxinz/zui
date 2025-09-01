<template>
  <Card width="430px" style="margin: 0px 100px">
    <h2>Form Component Demo</h2>
    <Form
      v-model="formData"
      :rules="rules"
      @submit="handleSubmit"
      labelPosition="top-left"
      labelTextAlign="left"
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
        <Button type="submit" class="x-button x-button--primary">Submit</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script setup>
import { ref } from "vue";

// 表单数据
const formData = ref({
  name: "",
  email: "",
  age: null,
  gender: "",
  hobbies: [],
  country: "",
  bio: "",
});

// 表单验证规则
const rules = {
  name: {
    required: true,
    message: "Name is required",
  },
  email: {
    required: true,
    message: "Email is required",
    validator: (value) => {
      if (!value) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "Please enter a valid email";
      }
      return true;
    },
  },
  gender: {
    required: true,
    message: "Please select gender",
  },
  country: {
    required: true,
    message: "Please select country",
  },
};

// 选项数据
const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const countryOptions = [
  { label: "China", value: "cn" },
  { label: "United States", value: "us" },
  { label: "United Kingdom", value: "uk" },
  { label: "Japan", value: "jp" },
  { label: "Canada", value: "ca" },
];

// 提交处理
const handleSubmit = (data) => {
  console.log("Form submitted successfully:", data);
  alert("Form submitted successfully!");
};
</script>

<style scoped>
.form-demo {
  max-width: 600px;
  margin: 20px auto;
  padding: 24px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>
