import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import store from "./store";
import './assets/iconfont/iconfont.css'


const app = createApp(App);

app.use(router)
app.use(store)
app.mount('#app')
