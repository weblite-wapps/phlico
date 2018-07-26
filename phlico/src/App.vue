<template>
  <div id="app">
    <card
      :imageName="imagename"
      v-if="state === 'card'"
      @like="changeLikeState"
      @state="changeState"/>

    <comments
      v-else-if="state === 'comments'"
      @state="changeState"
      :send="sendComment({ userid, imagename, like, 'author': username})"
      :comments="comments"
      :caption="caption"/>

  </div>
</template>

<script>
import card from './components/card.vue'
import comments from './components/comments.vue'
// helper
import webliteHandler from './helper/function/weblite.api'
import {addComment, getSinglePhotoData} from './helper/function/requestHandler'
const { W } = window

export default {
  name: 'App',
  data() {
    return {
      wisid: (W && W.wisid) || '1',
      imagename: '1532606761540.jpg',
      userid: '1',
      username: "amirhe",
      state: 'card',
      like: false,
      comments: [],
      caption: {}
    }
  },

  created: function() { W && webliteHandler(this) },

  mounted: function() { this.refresh() },

  methods: {
    changeState(event) {
      if (event === 'comments') this.refresh()
      this.state = event
    },

    refresh: function() {
      getSinglePhotoData(this.imagename)
        .then(body => {
          this.comments = (body && body.comments)
          this.caption = {
            username: body.username,
            text: body.caption,
            likes: body.likes.length
          }
          console.log(body)
        })
        .catch((err) => console.log(err))
    },

    sendComment: function(info) {
      return comment => {
        addComment(info, comment)
      }
    },

    changeLikeState: function(likeState) {
      this.like = likeState
    }
  },

  components: {
    card,
    comments
  },
}
</script>

<style>
  #app {
    /* sizing */
    width:  400px;
    height: 400px;
  }
</style>
