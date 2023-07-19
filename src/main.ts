import { Pinia, createPinia } from 'pinia'
import { createApp, App } from 'vue'
import VueRouter from '@/router'

import Layout from '@/Layout.vue'

const app: App = createApp(Layout)
const pinia: Pinia = createPinia()

app.use(VueRouter)
app.use(pinia)
app.mount('#app')
