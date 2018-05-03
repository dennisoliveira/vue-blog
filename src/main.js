import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import Routes from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueValidator)

const router = new VueRouter({
  //linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: Routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
