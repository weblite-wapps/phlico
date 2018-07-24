<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

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
		width:  351px;
		height: 100%;
		border: 1px solid #ccc;
    overflow: auto;
	}

</style>
