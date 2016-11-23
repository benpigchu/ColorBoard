<template>
  <div id="app" v-bind:style="{'background-color':$store.state.selectedColor,color:$store.getters.textColor,'transition-property':'background,color','transition-duration':'200ms'}">
    <color-list-view :color-list="colorList" />
    <color-info :color="$store.state.selectedColor" :name="colorList[$store.state.selectedColor].name" :description="colorList[$store.state.selectedColor].description" />
  </div>
</template>

<script>
import colorInfo from './components/colorInfo.vue'
import colorListView from './components/colorListView.vue'
export default {
  name: 'app',
  props:["colorList"],
  components:{colorInfo,colorListView}
}
</script>

<style>
#app{position:fixed;width:100%;height:100%;margin:0;padding:0;left:0;top:0}
</style>