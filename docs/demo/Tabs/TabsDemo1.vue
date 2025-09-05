<template>
  <div class="demo-tabs-basic">
    <Tabs v-model="activeTab" :tabs="tabs" @tab-click="handleTabClick" @update:modelValue="handleUpdateModelValue" @tab-close="handleClose">
      <template #account>
        <div class="tab-content">
          <h3>Account</h3>
          <p>Make changes to your account here. Click save when you're done.</p>
          <div class="form-group">
            <label>Name</label>
            <Input type="text" value="Pedro Duarte" class="form-control" />
          </div>
          <div class="form-group">
            <label>Username</label>
            <Input type="text" value="@peduarte" class="form-control" />
          </div>
          <Button type="primary">保存</Button>
        </div>
      </template>
      <template #password>
        <div class="tab-content">
          <h3>Password</h3>
          <p>Change your password here. After saving, you'll be logged out.</p>
          <div class="form-group">
            <label>Current password</label>
            <input type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label>New password</label>
            <input type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label>Confirm new password</label>
            <input type="password" class="form-control" />
          </div>
          <button class="btn btn-primary">Save password</button>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Account", name: "account" },
  { label: "Password", name: "password" },
];

const handleTabClick = (tab) => {
  console.log("handleTabClick", tab);
};
const handleUpdateModelValue = (val) => {
  console.log("handleUpdateModelValue", val);
};

const handleClose = (tab) => {
  console.log("handleClose", tab);
};
</script>

<style scoped>
.demo-tabs-basic {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  box-sizing: border-box;
}
</style>