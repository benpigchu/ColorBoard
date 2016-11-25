<template>
	<router-link :to="color.slice(1)" class="link">
		<div class="colorblock" :style="{'background-color':color}"></div>
		<h4>{{name}}</h4>
		<p>{{color}}</p>
	</router-link>
</template>

<script>
export default {
  name: 'colorListItem',
  props:['color','name']
}
</script>

<style scoped>
.link{color:inherit;text-decoration:none}
.colorblock{width:120px;height:60px}
</style>