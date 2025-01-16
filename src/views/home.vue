<template>
  <my-input v-model="inputValue" ref="myInputRef" :name="'lyw'" :year="18" @input="onInput">
    <!-- 动态插槽定义 -->
    <template #prefix>
      <span>Prefix Content</span>
    </template>
    <template #suffix="{ year }">
      <span>END: {{ year }}</span>
    </template>
    <template #default="{ name }">
      <p>Default Content: {{ name }}</p>
    </template>
  </my-input>
  <div>当前输入的值是：{{ inputValue }}</div>
</template>

<script lang="ts" setup>
import MyInput from '@/components/MyInput.vue'
import { onMounted } from 'vue'
import { ref } from 'vue'

const inputValue = ref('')
const myInputRef = ref()
function onInput(value: string) {
  console.log('Input value:', value)
}
onMounted(() => {
  // 光标聚焦
  // 避免ref 链式调用，比如 this.$refs.tableRef.$refs.table.clearSort()
  // 前提：子组件把方法暴露
  myInputRef.value.focus()
})
</script>
