<template>
  <div id="app">
    <home
      :phlicoz="phlicoz"
      :webliteInfo="webliteInfo"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
// helper
import webliteHandler from './helper/function/weblite.api'
//
import config from './config'
// W
const { W } = window


export default {
  name: 'App',

  data() {
    return {
      wisid: (W && W.wisid) || '1',
      phlicoz: [],
      webliteInfo: {},
    }
  },
  created: function() { W && webliteHandler(this) },
  mounted: function() { this.init() },

  methods: {
    init: function() {
      request
        .get(`${config.sevrer}/${this.wisid}`)
    }
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
		width:  350px;
		height: 100%;
		border: 1px solid #ccc;
    overflow: auto;
	}

</style>
