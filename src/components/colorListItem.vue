<template>
	<router-link :to="color.slice(1)" class="link">
		<div class="colorblock" :style="{'background-color':color,'color':textColor,'border-color':$store.state.selectedColor==color?textColor:'transparent'}">
			<div class="name">{{name}}</div>
			<div class="hex">{{color}}</div>
		</div>
	</router-link>
</template>

<script>

import Color from "color"
export default {
	name: 'colorListItem',
	props:['color','name'],
	computed:{
		textColor:function(){
			return new Color(this.color).luminosity() <= 0.5 ? "#FFFFFF" : "#000000"
		}
	}
}
</script>

<style scoped>
.link{color:inherit;text-decoration:none;width:120px;height:120px;margin:8px}
.colorblock{width:100%;height:100%;padding:8px;position:relative;border:1px solid;transition-property:border,color;transition-duration:350ms}
.colorblock>div{position:absolute;left:8px;right:8px}
.name{top:8px;font-weight:bold}
.hex{bottom:8px}
</style>