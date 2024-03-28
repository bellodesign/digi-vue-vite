import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ComponentLibrary } from '@digi/core-vue'

createApp(App)
  .use(ComponentLibrary)
  .mount('#app')
