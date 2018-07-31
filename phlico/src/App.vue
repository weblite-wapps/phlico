<template>
  <div id="app">
    <card
      v-if="state === 'card'"
      :imageName="imageName"
      :likeState="likeState"
      @like="sendLike({userId, imageName})"
      @state="changeState"/>

    <comments
      v-else-if="state === 'comments'"
      @state="changeState"
      :comments="photoComments"
      :caption="caption"
      :send="sendComment({'author': username,  imageName})"/>

  </div>
</template>

<script>
  import card from './components/card.vue'
  import comments from './components/comments.vue'
  // helper
  import webliteHandler from './helper/function/weblite.api'
  import {addComment, getSinglePhotoData, addLike} from './helper/function/requestHandler'
  const { W, R } = window

  export default {
    name: 'App',
   
    data() {
      return {
        wisId: (W && W.wisId) || '1',
        imageName: 'ce3d662fafa5a1ac5eafec3b19ee128a_1533015470435.jpg',
        userId: '1',
        username: "amirhe",
        state: 'card',
        photoComments: [],
        caption: {},
        likeState: false,
      }
    },

    components: {
      card,
      comments,
    },

      
    created() { W && webliteHandler(this) },

    mounted() { this.init() },

    methods: {
      changeState(event) {
        if (event === 'comments') this.init()
        this.state = event
      },

      init() {
        getSinglePhotoData(this.imageName)
          .then((body) => {
            this.photoComments = body.comments
            this.caption = {
              userName: body.userName,
              likes: R.length(R.uniq((body.likes))),
              text: body.caption,
            }
            this.likeState = R.findIndex(R.equals(this.userId), body.likes) !== -1
          })
          .catch((err) => err)
      },

      sendComment(info) {
        return comment => {
          addComment(info, comment)
          .then(({body: {comment}}) => { 
            this.photoComments = R.append(comment, this.photoComments)})
            .catch((err) => err)
        }
      },

      sendLike(info) {
        this.likeState = true
        addLike(info)
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
