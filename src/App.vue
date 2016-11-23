<template>
  <div id="app" v-bind:style="{'background-color':$store.state.selectedColor,color:$store.getters.textColor,'transition-property':'background,color','transition-duration':'200ms'}">
    <color-info :color="$store.state.selectedColor" name="cat" description="moewmoewmoew" />
  </div>
</template>

<script>
import colorInfo from './components/colorInfo.vue'
export default {
  name: 'app',
  props:["colorList"],
  components:{colorInfo}
}
</script>

<style>
#app{position:fixed;width:100%;height:100%;margin:0;padding:0;left:0;top:0}
.fade-enter-active, .fade-leave-active {transition: opacity 200ms}
.fade-enter, .fade-leave-active {opacity: 0}
#view{position:absolute}
</style>