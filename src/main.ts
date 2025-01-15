import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css' // 样式引入
import App from './App.vue'
import router from '@/router/index'
import pinia from '@/store'
createApp(App).use(router).use(pinia).mount('#app')
