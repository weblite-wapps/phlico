<template>
  <div id="app">
		<div v-for="image in imgs">
			<h1>{{image}}</h1>
			<Image/>	
		</div>
  </div>
</template>

<script>
import Image from './Image.vue'
export default {
  name: 'Home',
  
  data() {
  	return {
  		imgs: [
	  		"../assets/images/img (2).jpg",
				"../assets/images/img (1).jpg",
				"../assets/images/img (3).jpg",
				"../assets/images/img (4).jpg",
			]
  	}
  },

}
</script>

<style scoped>
	#app {
		/* display:  flex; */
		/* justify-content: center; */
		width:  350px;
		height: 100%;
		border: 1px solid #ccc;
		display: felx;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.image {
		width: 90px;
		height: 90px;
	}
</style>