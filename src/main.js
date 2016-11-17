import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
Vue.use(Vuex)
Vue.use(VueRouter)

import Color from 'color'

import App from './App.vue'

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: { template: "<div>home</div>" }
    },
    {
      path: '/color-:hex',
      name: 'color',
      component: { template: "<div>color:#{{$route.params.hex}}</div>" }
    }
  ]
})

const store = new Vuex.Store({
  state: {
    view: 'home',
    backgroundColor: '#ff7f00',
    params:{}
  },
  getters: {
    textColor: (state) => new Color(state.backgroundColor).luminosity() <= 0.5 ? "#FFFFFF" : "#000000"
  },
  mutations: {
    replaceBackgroundColor(state, color) {
      state.backgroundColor = color;
    },
    navigate(state, route) {
      state.view=route.name
      state.params=route.params
    }
  }
})

router.beforeEach((to, from, next) => {
  store.commit('navigate',to)
  next()
})

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})