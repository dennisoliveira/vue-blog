import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  linkExactActiveClass: 'active'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
