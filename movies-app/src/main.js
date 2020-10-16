import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'


import { BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.use(router)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
