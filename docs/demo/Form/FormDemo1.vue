<script setup lang="ts">
import { ref, computed } from 'vue';

const formData = ref({
  name: '',
  contactType: 'email',
  email: '',
  phone: '',
  address: '',
  skills: [''],
  experience: [
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
    },
  ],
});

const rules = {
  name: {
    required: true,
    message: 'Name is required',
  },
  email: {
    required: computed(() => formData.value.contactType === 'email'),
    message: 'Email is required',
    validator: (value: any) => {
      if (formData.value.contactType === 'email' && !value)
        return 'Email is required';
      if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email';
      }
      return true;
    },
  },
  phone: {
    required: computed(() => formData.value.contactType === 'phone'),
    message: 'Phone number is required',
    validator: (value: any) => {
      if (formData.value.contactType === 'phone' && !value)
        return 'Phone number is required';
      if (value && !/^\d{11}$/.test(value)) {
        return 'Please enter a valid 11-digit phone number';
      }
      return true;
    },
  },
};

// 添加技能
const addSkill = () => {
  formData.value.skills.push('');
};

// 移除技能
const removeSkill = (index: number) => {
  if (formData.value.skills.length > 1) {
    formData.value.skills.splice(index, 1);
  }
};

// 添加工作经历
const addExperience = () => {
  formData.value.experience.push({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    current: false,
  });
};

// 移除工作经历
const removeExperience = (index: number) => {
  if (formData.value.experience.length > 1) {
    formData.value.experience.splice(index, 1);
  }
};

// 处理当前工作切换
const handleCurrentToggle = (index: number) => {
  formData.value.experience[index].current =
    !formData.value.experience[index].current;
  if (formData.value.experience[index].current) {
    formData.value.experience[index].endDate = '';
  }
};

// 提交处理
const handleSubmit = (data: any) => {
  console.log('Dynamic form submitted successfully:', data);
  alert('Dynamic form submitted successfully!');
};
</script>
<template>
  <!-- <Demo> -->
  <Card title="动态表单示例" :border="false" style="padding: 20px">
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

      <FormItem label="Contact" prop="contactType" required>
        <Radio
          v-model="formData.contactType"
          :options="[
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'phone' },
          ]"
        />
      </FormItem>

      <FormItem
        v-if="formData.contactType === 'email'"
        label="Email"
        prop="email"
        required
      >
        <Input
          v-model="formData.email"
          type="email"
          placeholder="Enter your email"
        />
      </FormItem>

      <FormItem v-else label="Phone" prop="phone" required>
        <Input v-model="formData.phone" placeholder="Enter your phone number" />
      </FormItem>

      <FormItem label="Address" prop="address">
        <Textarea
          v-model="formData.address"
          placeholder="Enter your address"
          :rows="3"
        />
      </FormItem>

      <FormItem label="Skills" style="margin-bottom: 0">
        <div
          v-for="(skill, index) in formData.skills"
          :key="index"
          style="margin-bottom: 10px; display: flex; align-items: center"
        >
          <Input
            v-model="formData.skills[index]"
            placeholder="Enter a skill"
            style="flex: 1; margin-right: 10px"
          />
          <Button
            @click="removeSkill(index)"
            type="default"
            size="small"
            :disabled="formData.skills.length <= 1"
          >
            Remove
          </Button>
        </div>
        <Button
          @click="addSkill"
          type="default"
          border
          size="small"
          style="margin-top: 5px"
        >
          Add Skill
        </Button>
      </FormItem>

      <FormItem label="Experience" style="margin-bottom: 0">
        <div
          v-for="(exp, index) in formData.experience"
          :key="index"
          style="
            margin-bottom: 20px;
            padding: 15px;
            background-color: var(--color-background-soft);
            border-radius: var(--border-radius);
          "
        >
          <h4 style="margin-top: 0; margin-bottom: 15px">
            Experience {{ index + 1 }}
          </h4>

          <FormItem label="Company" prop="company" required>
            <Input v-model="exp.company" placeholder="Company name" />
          </FormItem>

          <FormItem label="Position" prop="position" required>
            <Input v-model="exp.position" placeholder="Your position" />
          </FormItem>

          <div style="display: flex; gap: 10px">
            <div style="flex: 1">
              <FormItem label="Start Date" prop="startDate" required>
                <Input v-model="exp.startDate" type="date" />
              </FormItem>
            </div>

            <div style="flex: 1" v-if="!exp.current">
              <FormItem label="End Date" prop="endDate" required>
                <Input v-model="exp.endDate" type="date" />
              </FormItem>
            </div>
          </div>

          <FormItem label="" prop="current" style="margin-bottom: 0">
            <div style="display: flex; align-items: center">
              <Switch
                v-model="exp.current"
                @change="handleCurrentToggle(index)"
              />
              <span style="margin-left: 10px">I currently work here</span>
            </div>
          </FormItem>

          <Button
            @click="removeExperience(index)"
            type="default"
            size="small"
            :disabled="formData.experience.length <= 1"
            style="margin-top: 10px"
          >
            Remove Experience
          </Button>
        </div>

        <Button
          @click="addExperience"
          type="default"
          border
          size="small"
          style="margin-top: 5px"
        >
          Add Experience
        </Button>
      </FormItem>

      <FormItem style="margin-top: 20px">
        <Button type="default" class="z-button z-button--primary"
          >Submit</Button
        >
      </FormItem>
    </Form>
  </Card>
  <!-- </Demo> -->
</template>
