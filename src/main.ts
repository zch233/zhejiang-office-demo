import { createApp } from 'vue'
import App from './App'
import {router} from './router';
import './app.scss'

createApp(App).use(router).mount('#app')
