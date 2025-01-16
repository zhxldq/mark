<template>
  <!-- 简化：直接使用 computed 绑定到 v-bind -->
  <el-input v-model="localValue" v-bind="$attrs" ref="inputRef">
    <!-- 动态插槽 -->
    <template v-for="(_slot, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps"></slot>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { computed, ref } from 'vue'

// 定义 props 和 emits
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

// 使用 computed 来同步 props 和 emits
const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
const inputRef = ref('')
let exposeObj: Record<string, any> = {}
const getMethod = () => {
  const entries = Object.entries(inputRef.value)
  for (const [method, fn] of entries) {
    exposeObj[method] = fn
  }
}
onMounted(getMethod)
defineExpose(exposeObj)
</script>
