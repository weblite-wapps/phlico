<template>
  <div id="app">
    <home
      :phlicoz="phlicoz"
      :webliteInfo="webliteInfo"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',

  data() {
    return {
      phlicoz: [],
      webliteInfo: {},
    }
  },

  computed() {
  //  get all thing from data base and make them acceptable for phlico
  //   update phlico and weblite.api
  },

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
