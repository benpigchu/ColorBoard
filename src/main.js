import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(Vuex)
Vue.use(VueRouter)

import App from './App.vue'

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', name: 'home', component: {template:"<div>home</div>"} },
    { path: '/color-:hex', name: 'color', component: {template:"<div>color:#{{$route.params.hex}}</div>"} }
  ]
})

const store = new Vuex.Store({
  state: {
    view: 'home'
  },
  mutations: {

  }
})

const app=new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})