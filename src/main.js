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
      path: "/",
      name: "home",
    },
    {
      path: "/:hex",
      name: "color",
      beforeEnter:(to, from, next) => {
        if(to.params.hex in list){
          next()
        }else{
          next("/")
        }
      }
    }
  ]
})

const store = new Vuex.Store({
  state: {
    colorSelected: false,
    selectedColor: "#000000",
  },
  getters: {
    textColor: (state) => new Color(state.selectedColor).luminosity() <= 0.5 ? "#FFFFFF" : "#000000"
  },
  mutations: {
    selectColor(state, color) {
      state.selectedColor = color;
    },
    toggleSelectStatus(state, selected) {
      state.colorSelected = selected;
    }
  },
  actions: {
    navigation(context,route) {
      context.commit("toggleSelectStatus",route.name=="color")
      if(route.name=="color"){
        if(route.params.hex in list){
          new Color("#"+route.params.hex)
          context.commit("selectColor","#"+route.params.hex)
        }else{
          router.replace("/"+context.state.selectedColor.slice(1))
        }
      }
    }
  }
})

router.afterEach((to, from) => {
  store.dispatch("navigation",to)
})

const app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App,{props:{colorList:list}})
})