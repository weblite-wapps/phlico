<template>
  <div class="gallery">
    <span class="title">{{ title }}</span>
  	<div class="wrapper">

        <img
          v-if="item && item.imageUrl" 
          v-for="(item, index) in images" 
          :key="index"
          class="small-view"
          src="https://www.lifewire.com/thmb/mIsQ7FtrrZ34DlJ5inLphDC33p8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/please-stand-by-500879062-56fd7b5f3df78c7d9efc4ed2.jpg"
          :alt="item.imageUrl">  
          <!-- :srcset="get(item.imageUrl)" -->

    </div> <!-- wrapper -->
  </div>
</template>

<script>
export default {
  name: 'gallery',
  
  data() {
  	return {

  }},
  props: {
  	images: Array,
    title: String,},

  methods: {
    get: function(name) {
      return 'http:localhost/img/'
    },    
  }
}
</script>

<style scoped>
  .title {
    width: 100%;  
    color: #2C3E50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
  }

  .gallery {
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .wrapper {
    display:  flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .small-view {
    max-width: 107px;
    width: 100%;
    height: 100%;
    padding: 3px; 
    margin: 0 auto;
  }
  .small-view:hover {
    box-shadow: 0 0 1.5px #1F7071;
    cursor: zoom-in; 
  }
</style>