<template>
  <div id="app">
		<ul class="card-list">
				v-for="(item, index) in images"
				:key="index"
			<card 
				:images="images"/>
		</ul>
  </div>
</template>

<script>
import card from './card.vue'
export default {
  name: 'Albums',
  
  data() {
  	return {
  		images: [
				{info: {src: 'img (1).jpg', path: 'albumid/us', name: 'egg'}, footer:{title: 'Psylogy', discription: 'new Tech knowladge'}},
				{info: {src: 'img (2).jpg', path: 'albumid/us', name: 'egg'}, footer:{title: 'Psylogy', discription: 'new Tech knowladge'}},
				{info: {src: 'img (3).jpg', path: 'albumid/us', name: 'egg'}, footer:{title: 'Psylogy', discription: 'new Tech knowladge'}}
  		]
  	}
  },
  method: {
  	f: function(event) {
  			console.log(event)
  	}
  },

  components: {
  	card
  },

  props: {
  	// images: {
  	// 	type: Array
  	// }
  }

}
</script>

<style scoped>
	.card-list {
		display: block;
		margin: 1rem auto;
		padding: 0;
		font-size: 0;
		text-align: center;
		list-style: none;
	}
</style>