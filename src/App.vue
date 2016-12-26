<template>
	<div class="app" :style="{'background-color':$store.state.selectedColor,color:$store.getters.textColor}">
		<color-info class="info-box" :color="$store.state.selectedColor" :name="colorList[$store.state.selectedColor].name" :description="colorList[$store.state.selectedColor].description" />
		<color-list-view class="list-view" :color-list="colorList" />
	</div>
</template>

<script>
import colorInfo from './components/colorInfo.vue'
import colorListView from './components/colorListView.vue'
export default {
	name: 'app',
	props:["colorList"],
	components:{colorInfo,colorListView},
}
</script>

<style>
*{box-sizing:border-box}
.app{position:absolute;width:100%;min-height:100%;margin:0;left:0;top:0;overflow-y:visible;overflow-x:auto}
.app{padding:64px;transition-property:background,color;transition-duration:350ms;min-width:760px}
.list-view{width:50%}
.info-box{width:50%;float:right;position:relative;height:calc(100vh - 128px)}
</style>