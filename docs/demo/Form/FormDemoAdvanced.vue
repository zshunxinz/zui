<template>
  <Card width="430px" style="padding: 20px;">
    <Form v-model="advancedFormData" :rules="advancedRules" @submit="handleAdvancedSubmit" labelAlign="left" labelJustifyContent="left" labelWidth="120px">
      <FormItem label="Username" prop="username" required>
        <Input v-model="advancedFormData.username" placeholder="Enter username" />
      </FormItem>
      <FormItem label="Password" prop="password" required>
        <Input v-model="advancedFormData.password" type="password" placeholder="Enter password" />
      </FormItem>
      <FormItem label="Confirm Password" prop="confirmPassword" required>
        <Input v-model="advancedFormData.confirmPassword" type="password" placeholder="Confirm password" />
      </FormItem>
      <FormItem label="Age" prop="age" required>
        <Input v-model.number="advancedFormData.age" type="number" placeholder="Enter your age" />
      </FormItem>
      <FormItem label="Phone" prop="phone" required>
        <Input v-model="advancedFormData.phone" placeholder="Enter phone number" />
      </FormItem>
      <FormItem label="Website" prop="website">
        <Input v-model="advancedFormData.website" placeholder="Enter website URL" />
      </FormItem>
      <FormItem>
        <Button type="default" class="x-button x-button--primary">Submit</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const advancedFormData = ref({
  username: "",
  password: "",
  confirmPassword: "",
  age: null,
  phone: "",
  website: ""
});

// 高级验证规则
const advancedRules = {
  username: {
    required: true,
    message: "Username is required",
    minLength: 3,
    maxLength: 20,
    validator: (value) => {
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        return "Username can only contain letters, numbers and underscores";
      }
      return true;
    }
  },
  password: {
    required: true,
    message: "Password is required",
    minLength: 8,
    validator: (value) => {
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
        return "Password must contain at least one uppercase letter, one lowercase letter and one number";
      }
      return true;
    }
  },
  confirmPassword: {
    required: true,
    message: "Please confirm your password",
    validator: (value) => {
      if (value !== advancedFormData.value.password) {
        return "Passwords do not match";
      }
      return true;
    }
  },
  age: {
    required: true,
    message: "Age is required",
    validator: (value) => {
      if (value === null || value === '') return "Age is required";
      if (!Number.isInteger(value)) return "Age must be an integer";
      if (value < 18 || value > 120) return "Age must be between 18 and 120";
      return true;
    }
  },
  phone: {
    required: true,
    message: "Phone number is required",
    validator: (value) => {
      if (!/^\d{11}$/.test(value)) {
        return "Please enter a valid 11-digit phone number";
      }
      return true;
    }
  },
  website: {
    validator: (value) => {
      if (value && !/^https?:\/\/.+/.test(value)) {
        return "Please enter a valid URL starting with http:// or https://";
      }
      return true;
    }
  }
};

// 高级表单提交处理
const handleAdvancedSubmit = (data) => {
  console.log("Advanced form submitted successfully:", data);
  alert("Advanced form submitted successfully!");
};
</script>