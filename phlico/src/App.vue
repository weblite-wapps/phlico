<template>
  <div id="app">
    <card
      v-if="state === 'card'"
      :imageName="imagename"
      :likeState="likeState"
      @like="sendLike({userid, 'imagename': imageName})"
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
  const { W, R } = window

  export default {
    name: 'App',
   
    data() {
      return {
        wisid: (W && W.wisid) || '1',
        imagename: '1532682836256.jpg',
        userid: '1',
        username: "amirhe",
        state: 'card',
        like: false,
        comments: [],
        caption: {}
      }
    },

    components: {
      card,
      comments
    },

    created() { W && webliteHandler(this) },

    mounted() { this.init() },

    methods: {
      changeState(event) {
        if (event === 'comments') this.init()
        this.state = event
      },

      init() {
        getSinglePhotoData(this.imagename)
          .then(body => {
            this.comments = body.comments
            this.caption = {
              username: body.username,
              text: body.caption,
              likes: body.likes.length
            }
          })
          .catch((err) => console.log("mode[A]-getAll[F]-APP[vue]", err))
      },

      sendComment(info) {
        return comment => {
          addComment(info, comment)
          .then(({body: {comment}}) => { this.comments = R.append(comment, this.comments)})
            .catch((err) => console.log('In addComment', err))
        }
      },

      changeLikeState(likeState) {
        this.like = likeState
      },

      sendLike(info) {
        sendLike(info)
      }
    },
  }
</script>

<style>
  #app {
    width: 400px;
    height: 400px;
  }
</style>
