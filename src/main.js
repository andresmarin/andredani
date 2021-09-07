import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import createStore from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
