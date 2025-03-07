import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import timer from './plugins/timerPlugin'

const app = createApp(App)

app.use(timer)
app.mount("#app");

