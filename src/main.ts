import { createApp } from 'vue'
import App from './App.vue'
import shadow from 'vue-shadow-dom'

createApp(App).use(shadow).mount('#app')
