<template>
  <div id="app">
    <card/>
    <get-comment/>
    <comments/>
    <!--<card/>-->
  </div>
</template>

<script>
import card from './card.vue'
import getComment from './getComment.vue'
import comment from './comment.vue'
import comments from './comments.vue'

export default {
  name: 'home',

  data() {
  	return {}
  },
  components: {
  	card,
    comment,
    comments,
    'get-comment': getComment,
  }
}
</script>

<style scoped>
</style>
