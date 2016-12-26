<template>
	<div class="app" :style="{'background-color':$store.state.selectedColor,color:$store.getters.textColor}">
		<color-info class="info-box" :color="$store.state.selectedColor" :name="colorList[$store.state.selectedColor].name" :description="colorList[$store.state.selectedColor].description" />
		<div class="list-view-wrapper">
			<color-list-view class="list-view" :color-list="colorList" />
		</div>
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
.app{position:absolute;width:100%;height:100%;margin:0;left:0;top:0}
.app{padding:32px;transition-property:background,color;transition-duration:350ms;min-width:720px}
.list-view-wrapper{position:absolute;width:100%;height:100%;margin:0;left:0;top:0;padding:32px;overflow-y:visible;overflow-x:auto}
.list-view{width:50%}
.info-box{float:right;position:absolute;left:50%;right:64px;height:calc(100vh - 64px)}
</style>