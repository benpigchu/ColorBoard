<template>
  <div id="app">
	  <head-bar></head-bar>
    <router-view></router-view>
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
</style>