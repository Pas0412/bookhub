import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vant from 'vant'
import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'
import './assets/main.css'
import './common/style/theme.css'
const app = createApp(App)

const pinia = createPinia();
app.use(pinia)

app.use(router)
app.use(Vant)

app.mount('#app')