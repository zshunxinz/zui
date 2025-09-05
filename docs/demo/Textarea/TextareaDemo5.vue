<template>
  <div class="textarea-group">
    <Textarea
      v-model="autosizeValue"
      :autosize="{ minRows: 3, maxRows: 6 }"
      placeholder="最小3行，最大6行"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const autosizeValue = ref('')
</script>