<template>
  <div id="app">
		<appheader :title="title()"/>
    <img :src="get('a.png')" width="350px">
		<albums v-if="state === 'gallery'"/>
		<albums v-if="state === 'gallery'"/>

		<img 
			v-if="state === 'gallery'"
			src="../assets/icons/plus-sign.png" 
			id="plus-sign"
			@click="changeState('upload')">

		<!-- uploader + transition -->
		<uploader v-if="state === 'upload'"/>
  </div>
</template>

<script>
import appheader from './appheader.vue'
import gallery from './gallery.vue'
import uploader from './uploader.vue'
import albums from './albums.vue'


export default {
  name: 'Home',
  
  data() {
  	return {
  		gallery: {
	  		imgs: [
					{
						imageUrl: "img (1).jpg",
						imageCaption: 'Caption_1',
						imageSender: 'Sender_1',
						imageLikes: 1
					},
					{
						imageUrl: "img (2).jpg",
						imageCaption: 'Caption_2',
						imageSender: 'Sender_2',
						imageLikes: 2
					},
					{
						imageUrl: "img (3).jpg",
						imageCaption: 'Caption_3',
						imageSender: 'Sender_3',
						imageLikes: 3
					},
					{
						imageUrl: "img (4).jpg",
						imageCaption: 'Caption_4',
						imageSender: 'Sender_4',
						imageLikes: 4
					},
					{
						imageUrl: "img (1).jpg",
						imageCaption: 'Caption_5',
						imageSender: 'Sender_5',
						imageLikes: 5
					},],
				title: "First Album",},
  		
			state: 'gallery',
  	}},

  methods: {
  	changeState: function(value){
  		this.state = value
  	},
  	title() {
  		if (this.state === 'gallery') return 'Albums'
  		else return 'Uploader'
  	},
  get(name) {
  	return `http://localhost:3000/img/${name}`
  },
  },

  components: {
  	appheader,
    gallery,
    albums,
    uploader,
  }

}
</script>

<style scoped>

	#app {
		/* display: block; */
		overflow: auto;
	}

	#plus-sign {
		display: block;
		z-index: 20;
		cursor: pointer;
		margin: 0 auto;
		width: 50px;
		height: 50px;
	}

</style>