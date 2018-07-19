<template>
  <div id="image">
<!--   	<img 
  		:src="require(imgsrc)" 
  		alt="#"> -->
    <h1>{{imgsrc}}</h1>
    <!-- <h1>as</h1> -->
  </div>
</template>

<script>
export default {
  name: 'Image',
  
  data() {
  	return  {
    }
  },

  props: {
    imgsrc: {
      type: String,
      required: true,
      default: 'aaa'
    }
  }


}
</script>

<style scoped>
</style>