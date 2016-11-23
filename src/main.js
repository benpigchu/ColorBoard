import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
Vue.use(Vuex)
Vue.use(VueRouter)

import Color from "color"

import App from "./App.vue"

import list from "./data.json"

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/:hex",
      name: "color",
    }
  ]
})

const store = new Vuex.Store({
  state: {
    selectedColor: "#000000",
  },
  getters: {
    textColor: (state) => new Color(state.backgroundColor).luminosity() <= 0.5 ? "#FFFFFF" : "#000000"
  },
  mutations: {
    selectColor(state, color) {
      state.selectedColor = color;
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

const app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App,{props:{colorList:list}})
})