<template>
  <div class="scss-test">
    <div class="scss-test-1">1111</div>
    <el-button>按钮</el-button>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'
const route = useRoute()
const router = useRouter()
onMounted(() => {})
</script>
<style scoped lang="scss">
.scss-test {
  color: red;
  &-1 {
    font-size: 32px;
  }
}
</style>
