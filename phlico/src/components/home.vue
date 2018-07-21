<template>
  <div id="app">
  	<!-- <card/> -->
    <!-- <get-comment/> -->
    <comment/>
    
  </div>
</template>

<script>
import card from './card.vue'
import getComment from './getComment.vue'
import comment from './comment.vue'

export default {
  name: 'home',
  
  data() {
  	return {}
  },
  components: {
  	card,
    comment,
    'get-comment': getComment,
  }
}
</script>

<style scoped>
</style>