import { createApp } from 'vue'
import Main from '../src/views/Main.vue'
import router from './router'

createApp(Main).use(router).mount('#index')
