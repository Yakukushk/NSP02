import { createApp, } from 'vue'
import App from './App.vue'
import global from './components/global/index'
import VueCookies from 'vue-cookies'


import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'






const app = createApp(App);
app.use(VueCookies)


app.use(global);
app.mount('#app')
