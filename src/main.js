import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueRouter from 'vue-router'
import VueAuth from '@websanova/vue-auth'
import auth from './auth'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

// Configurando roteador do VUE
Vue.router = router
Vue.use(VueRouter)

// Configurando autenticação do VUE
Vue.use(VueAxios, axios)
axios.defaults.baseURL = "http://127.0.0.1:8000"
Vue.use(VueAuth, auth)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
