<template>
	<div class="info">
		<h1>{{name}}</h1>
		<p>{{color}}</p>
		<p>{{description}}</p>
	</div>
</template>

<script>
export default {
  name: 'colorInfo',
  props:['color','description','name']
}
</script>

<style scoped>
.info{border-left:solid 1px;padding:16px}
</style>