<template>
  <div id="app">
    <home/> 
    <!-- <ov/> -->
  </div>
</template>

<script>
import Home from './components/Home.vue'
// import ov from './components/overlay.vue'

export default {
  name: 'App',
  
  components: {
    'home': Home,
  }
}
</script>

<style scoped>
	#app {
		/* sizing */
		width:  350px;
		height: 100%;
		border: 1px solid #ccc;
	}

</style>