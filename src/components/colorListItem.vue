<template>
	<router-link :to="color.slice(1)" class="link">
		<div class="colorblock" :style="{'background-color':color,'color':textColor}">
			<h4>{{name}}</h4>
			<p>{{color}}</p>
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
.colorblock{width:100%;height:100%;padding:8px}
</style>