<template>
	<div>
		<template v-for="(value,color) in colorList">
			<color-list-item :name="value.name" :color="color"></color-list-item>
		</template>
	</div>
</template>

<script>
import colorListItem from './colorListItem.vue'
export default {
  name: 'colorListView',
  props:['colorList'],
	components:{colorListItem}
}
</script>

<style scoped>
</style>