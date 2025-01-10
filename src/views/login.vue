<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@store/user'

defineOptions({
  name: 'V-login'
})

const userStore = useUserStore()
const { userInfo, token } = storeToRefs(userStore)
const userName = ref(userInfo.value.name)
const userToken = ref(token)

const updateUserName = () => {
  userStore.setUserInfo({
    name: userName.value
  })
}
const updateUserToken = () => {
  userStore.setToken(userToken.value)
}
</script>

<template>
  <div>login page</div>
  name:
  <input type="text" v-model="userName" @input="updateUserName" />
  <br />
  token:
  <input type="text" v-model="userToken" @input="updateUserToken" />
</template>

<style scoped></style>
