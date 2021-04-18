import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BlockContent from './components/UI/BlockContent.vue'

const app = createApp(App)
app.component('block-content', BlockContent)
app.use(router).mount('#app')