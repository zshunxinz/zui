<template>
  <div class="textarea-group">
    <Textarea
      v-model="limitValue"
      maxlength="100"
      show-word-limit
      placeholder="最多输入100个字符"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const limitValue = ref('')
</script>