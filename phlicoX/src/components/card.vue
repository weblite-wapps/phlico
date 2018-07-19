<template>
  <div id="card">
		<img :src="get(image.imageUrl)">
  </div>
</template>

<script>
export default {
  name: 'card',
  
  data() {
  	return {}
  },
  methods: {
  	get: function(url) {
  		return 
  	}
  },

  props: {
  	image: {
  		type: Object,
  		required: true,
  	}
  }
}
</script>

<style scoped>
</style>