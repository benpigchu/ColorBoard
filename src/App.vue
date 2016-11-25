<template>
  <div class="app" v-bind:style="{'background-color':$store.state.selectedColor,color:$store.getters.textColor}">
    <color-list-view class="list-view" :color-list="colorList" />
    <color-info class="info" :color="$store.state.selectedColor" :name="colorList[$store.state.selectedColor].name" :description="colorList[$store.state.selectedColor].description" />
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
*{box-sizing:border-box}
.app{position:fixed;width:100%;height:100%;margin:0;left:0;top:0;display:flex}
.app{padding:64px;transition-property:background,color;transition-duration:350ms}
.info,.list-view{flex-basis:0;flex-grow:1;flex-shrink:1}
</style>