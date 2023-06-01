import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'

import 'vant/lib/index.css'
import './assets/main.css'
import './common/style/theme.css'
const app = createApp(App)

const pinia = createPinia();
app.use(pinia)

app.use(ElementPlus)
app.use(router)
app.use(Vant)

app.mount('#app')