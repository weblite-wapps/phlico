<template>
  <div id="image">
<!--   	<img 
  		:src="require(imgsrc)" 
  		alt="#"> -->
    <h1>{{imgsrc}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Image',
  
  data: () => {
  	return  {
  		source: require("")
  }},

  props: {
  	imgsrc: {
  		type: String,
  		required: true,
  		default: ''
  	}
  }

}
</script>

<style scoped>
</style>