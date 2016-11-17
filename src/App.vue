<template>
  <div id="app" v-bind:style="{'background-color':$store.state.backgroundColor,color:$store.getters.textColor,'transition-property':'background,color','transition-duration':'200ms'}">
	  <head-bar></head-bar>
    <transition name="fade" mode="out-in">
      <router-view id="view"></router-view>
    </transition>
  </div>
</template>

<script>
import HeadBar from "./components/HeadBar.vue"
export default {
  name: 'app',
  components:{HeadBar}
}
</script>

<style>
#app{position:fixed;width:100%;height:100%;margin:0;padding:0;left:0;top:0}
.fade-enter-active, .fade-leave-active {transition: opacity 200ms}
.fade-enter, .fade-leave-active {opacity: 0}
#view{position:absolute}
</style>