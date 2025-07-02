# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

<script setup>
import { ref } from 'vue'
import Hello from '../src/components/HelloWorld.vue'

const count = ref(0)
</script>

<Hello msg="Hello VitePress!"></Hello>
<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>